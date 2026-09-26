import StepFrame from './StepFrame';

// Deterministic pseudo-random numbers, so every learner sees the same dots.
const rng = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 2 ** 32;
};
const normals = (n: number, mean: number, sd: number, seed: number) => {
  const r = rng(seed);
  return Array.from({ length: n }, () => {
    const u = Math.max(r(), 1e-9);
    return mean + sd * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r());
  });
};
const mean = (xs: number[]) => xs.reduce((s, x) => s + x, 0) / xs.length;
const sd = (xs: number[]) => {
  const m = mean(xs);
  return Math.sqrt(xs.reduce((s, x) => s + (x - m) ** 2, 0) / (xs.length - 1));
};

type Row = { label: string; xs: number[]; tone: 'a' | 'b' | 'bad'; dropped?: number[]; note?: string };
type Method = {
  title: string;
  lo: number;
  hi: number;
  unit: string;
  line?: { at: number; label: string };
  before: Row[];
  after: Row[];
  capBefore: string;
  capAfter: string;
};

// 1. Walk vs bus: arrival times in minutes.
const bus = normals(30, 15, 6, 11);
const walk = normals(30, 20, 1.5, 12);
const late = (xs: number[]) => xs.filter((x) => x > 25).length;

// 2. One split vs the average of five.
const single = normals(30, 80, 4, 21);
const folds = Array.from({ length: 30 }, (_, i) => mean(normals(5, 80, 4, 100 + i)));

// 3. Ad hoc sampling vs a fixed seed: ten reruns of the same analysis.
const adHoc = normals(10, 80, 4, 31);
const seeded = Array.from({ length: 10 }, () => adHoc[0]);

// 4. Trip durations with three extreme values.
const trips = normals(27, 20, 4, 41);
const extremes = [62, 78, 95];
const withOutliers = [...trips, ...extremes];

const methods: Method[] = [
  {
    title: 'Choose the lower-variance option',
    lo: 0, hi: 40, unit: 'min',
    line: { at: 25, label: 'class starts' },
    before: [{ label: 'Bus', xs: bus, tone: 'a' }],
    after: [
      { label: 'Bus', xs: bus, tone: 'a', note: `${late(bus)} of 30 late` },
      { label: 'Walk', xs: walk, tone: 'b', note: `${late(walk)} of 30 late` },
    ],
    capBefore: `The bus is faster on average (${mean(bus).toFixed(0)} min), but its arrival times are all over the place: sd ${sd(bus).toFixed(1)}.`,
    capAfter: `Walking is slower (${mean(walk).toFixed(0)} min) but steady: sd ${sd(walk).toFixed(1)}. If being on time matters more than being fast, the slower option wins.`,
  },
  {
    title: 'Repeat the experiment',
    lo: 65, hi: 95, unit: '% accuracy',
    before: [{ label: 'One split', xs: single, tone: 'a' }],
    after: [
      { label: 'One split', xs: single, tone: 'a' },
      { label: 'Mean of 5 folds', xs: folds, tone: 'b' },
    ],
    capBefore: `Evaluate on a single train/test split, thirty times over: the score depends on the luck of the split (sd ${sd(single).toFixed(1)}).`,
    capAfter: `Average five splits, as k-fold cross-validation does, and the results cluster tightly (sd ${sd(folds).toFixed(1)}), roughly 1/√5 as wide.`,
  },
  {
    title: 'Sample properly',
    lo: 65, hi: 95, unit: '% accuracy',
    before: [{ label: 'Ad hoc sample', xs: adHoc, tone: 'a' }],
    after: [
      { label: 'Ad hoc sample', xs: adHoc, tone: 'a' },
      { label: 'Seeded random', xs: seeded, tone: 'b', note: 'identical every run' },
    ],
    capBefore: 'Grab whatever data is convenient and every rerun of the analysis gives a different answer.',
    capAfter: 'Draw a random sample from a fixed seed and every rerun reproduces the same sample. The result is repeatable, and anyone can check it.',
  },
  {
    title: 'Eliminate outliers, if justifiable',
    lo: 0, hi: 100, unit: 'min per trip',
    before: [{ label: 'All trips', xs: withOutliers, tone: 'a' }],
    after: [
      { label: 'All trips', xs: withOutliers, tone: 'a' },
      { label: 'Outliers removed', xs: trips, tone: 'b', dropped: extremes },
    ],
    capBefore: `Three extreme trips stretch the spread to sd ${sd(withOutliers).toFixed(1)}.`,
    capAfter: `Dropping them leaves sd ${sd(trips).toFixed(1)}. Only do this with a stated reason, such as a broken sensor. Deleting points that spoil the result is dishonest.`,
  },
];

const steps = methods.flatMap((m, i) => [
  { caption: `${i + 1}. ${m.title}. ${m.capBefore}` },
  { caption: `${i + 1}. ${m.title}. ${m.capAfter}` },
]);

const X0 = 130;
const W = 560;
const ROW_H = 100;
const R = 4.5;
const tone = { a: 'var(--accent)', b: 'var(--ok)', bad: 'var(--bad)' };

function Strip({ row, m, y }: { row: Row; m: Method; y: number }) {
  const sx = (v: number) => X0 + ((v - m.lo) / (m.hi - m.lo)) * W;
  const stacks = new Map<number, number>();
  const place = (v: number) => {
    const bin = Math.round(sx(v) / (2 * R + 1));
    const n = stacks.get(bin) ?? 0;
    stacks.set(bin, n + 1);
    return { cx: sx(v), cy: y - R - 1 - n * (2 * R) };
  };
  const kept = [...row.xs].sort((a, b) => a - b);
  const gone = row.dropped ?? [];
  return (
    <g className="fig-pop">
      <text className="fig-label" x={X0 - 12} y={y - 24} textAnchor="end">{row.label}</text>
      <text className="fig-sub" x={X0 - 12} y={y - 8} textAnchor="end">sd {sd(row.xs).toFixed(1)}</text>
      <line className="fig-wire" x1={X0} y1={y} x2={X0 + W} y2={y} />
      {kept.map((v, i) => {
        const p = place(v);
        return <circle key={i} cx={p.cx} cy={p.cy} r={R} fill={tone[row.tone]} fillOpacity={0.8} />;
      })}
      {gone.map((v, i) => (
        <circle key={`g${i}`} cx={sx(v)} cy={y - R - 1} r={R} fill="none" stroke="var(--ink-faint)" strokeDasharray="2 2" />
      ))}
      <line x1={sx(mean(row.xs))} x2={sx(mean(row.xs))} y1={y - 3} y2={y + 6} stroke="var(--ink)" strokeWidth={2} />
      {row.note && <text className="fig-sub" x={X0 + W} y={y - 8} textAnchor="end">{row.note}</text>}
    </g>
  );
}

export default function VarianceReduction() {
  return (
    <StepFrame steps={steps} autoPlayMs={3200}>
      {(step) => {
        const mi = Math.floor(step / 2);
        const m = methods[mi];
        const rows = step % 2 === 0 ? m.before : m.after;
        const axisY = 20 + 2 * ROW_H + 24;
        const sx = (v: number) => X0 + ((v - m.lo) / (m.hi - m.lo)) * W;
        const ticks = Array.from({ length: 5 }, (_, i) => m.lo + ((m.hi - m.lo) * i) / 4);
        return (
          <svg viewBox={`0 0 720 ${axisY + 40}`} role="img" aria-label={`Variance reduction method ${mi + 1}: ${steps[step].caption}`}>
            <text className="fig-label" x={20} y={18}>{mi + 1} of 4 · {m.title}</text>
            {m.line && (
              <g>
                <line x1={sx(m.line.at)} x2={sx(m.line.at)} y1={30} y2={axisY} stroke="var(--bad)" strokeDasharray="4 4" />
                <text className="fig-sub" x={sx(m.line.at) + 4} y={40} fill="var(--bad)" style={{ fill: 'var(--bad)' }}>{m.line.label}</text>
              </g>
            )}
            {rows.map((row, i) => (
              <Strip key={`${step}-${row.label}`} row={row} m={m} y={40 + (i + 1) * ROW_H - 10} />
            ))}
            <line className="fig-wire" x1={X0} y1={axisY} x2={X0 + W} y2={axisY} />
            {ticks.map((t) => (
              <text key={t} className="fig-sub" x={sx(t)} y={axisY + 16} textAnchor="middle">{Math.round(t)}</text>
            ))}
            <text className="fig-sub" x={X0 + W} y={axisY + 32} textAnchor="end">{m.unit} · black tick = mean</text>
          </svg>
        );
      }}
    </StepFrame>
  );
}
