import StepFrame from './StepFrame';

const faces = [1, 2, 3, 4, 5, 6];
const totals = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const ways = (t: number) => 6 - Math.abs(t - 7);

const CELL = 34;
const GX = 40;
const GY = 46;
const HX = 300;
const BASE = 262;
const BAR_W = 30;
const BAR_STEP = 36;
const UNIT = 30; // px per "way"

const steps = [
  { caption: 'Two dice, 36 equally likely outcomes. The random variable V is the total of the two dice.' },
  ...totals.map((t) => ({
    caption:
      t === 7
        ? 'A total of 7 can be made 6 ways, more than any other total. It is the peak.'
        : `A total of ${t} appears in ${ways(t)} of the 36 cells, so its bar has height ${ways(t)}/36.`,
  })),
  { caption: 'Every outcome is counted once, so the heights add up to 36/36 = 1. This histogram is the pdf.' },
];

export default function DicePdf() {
  return (
    <StepFrame steps={steps} autoPlayMs={1500}>
      {(step) => {
        const current = step >= 1 && step <= totals.length ? totals[step - 1] : null;
        const shown = step === 0 ? 0 : step > totals.length ? totals.length : step;
        return (
          <svg viewBox="0 0 720 310" role="img" aria-label={`Building the pdf of two dice, step ${step + 1}: ${steps[step].caption}`}>
            <text className="fig-sub" x={GX + 3 * CELL + 15} y={22} textAnchor="middle">second die</text>
            <text className="fig-sub" x={14} y={GY + 3 * CELL} textAnchor="middle"
                  transform={`rotate(-90 14 ${GY + 3 * CELL})`}>first die</text>
            {faces.map((f, i) => (
              <g key={f}>
                <text className="fig-sub" x={GX + 15 + i * CELL + CELL / 2} y={GY - 6} textAnchor="middle">{f}</text>
                <text className="fig-sub" x={GX + 8} y={GY + i * CELL + CELL / 2 + 4} textAnchor="middle">{f}</text>
              </g>
            ))}
            {faces.map((a, row) =>
              faces.map((b, col) => (
                <g key={`${a}${b}`} className={`dice-cell ${current === a + b ? 'is-both' : step > totals.length ? '' : current === null ? '' : 'is-dim'}`}>
                  <rect x={GX + 15 + col * CELL + 2} y={GY + row * CELL + 2} width={CELL - 4} height={CELL - 4} rx={5} />
                  <text x={GX + 15 + col * CELL + CELL / 2} y={GY + row * CELL + CELL / 2 + 4} textAnchor="middle">{a + b}</text>
                </g>
              )),
            )}

            <line className="fig-wire" x1={HX - 8} y1={BASE} x2={HX + 11 * BAR_STEP} y2={BASE} />
            {totals.map((t, i) => {
              const built = i < shown;
              return (
                <g key={t}>
                  <rect
                    className={`pdf-bar ${current === t ? 'is-now' : ''}`}
                    x={HX + i * BAR_STEP}
                    y={BASE - ways(t) * UNIT}
                    width={BAR_W}
                    height={ways(t) * UNIT}
                    rx={3}
                    style={{ transform: `scaleY(${built ? 1 : 0})` }}
                  />
                  <text className="fig-sub" x={HX + i * BAR_STEP + BAR_W / 2} y={BASE + 16} textAnchor="middle">{t}</text>
                  {built && (
                    <text className="fig-sub fig-pop" x={HX + i * BAR_STEP + BAR_W / 2} y={BASE - ways(t) * UNIT - 6} textAnchor="middle">
                      {ways(t)}/36
                    </text>
                  )}
                </g>
              );
            })}
            <text className="fig-label" x={HX + (11 * BAR_STEP) / 2 - 3} y={BASE + 40} textAnchor="middle">total V</text>
            <text className="fig-label" x={HX} y={40}>P(V = total)</text>
          </svg>
        );
      }}
    </StepFrame>
  );
}
