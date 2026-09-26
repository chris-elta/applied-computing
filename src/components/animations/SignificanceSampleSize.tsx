import StepFrame from './StepFrame';

// A fixed observed correlation, tested at growing sample sizes.
const R_OBS = 0.1;
// Smallest |r| that is significant at 0.05 (two-sided): r = t / √(t² + n − 2).
const rCrit = (n: number, t: number) => t / Math.sqrt(t * t + n - 2);
const cases = [
  { n: 10, t: 2.306 },
  { n: 30, t: 2.048 },
  { n: 100, t: 1.984 },
  { n: 1000, t: 1.962 },
  { n: 100000, t: 1.96 },
].map((c) => ({ ...c, crit: rCrit(c.n, c.t) }));

const fmt = (n: number) => n.toLocaleString('en-US');

const steps = [
  { caption: 'Suppose two variables show r = 0.10 in every sample we draw. Only the sample size n changes.' },
  { caption: 'Where t comes from: if there were no real relationship, the t values of many samples would pile up in this bell curve. Walk out from the middle until only 5% of the area is left, 2.5% in each tail. That distance is t. With n = 10 (8 degrees of freedom) it is 2.306.' },
  { caption: 'The bar comes from the t formula: r = t / √(t² + n − 2). Here t is the cutoff a chance-only result must exceed 5% of the time (about 2), and n − 2 is the degrees of freedom. As n grows, t barely moves but n − 2 balloons, so the bar shrinks toward zero.' },
  ...cases.map((c) => ({
    caption:
      c.crit > R_OBS
        ? `n = ${fmt(c.n)}: t = ${c.t}, so the bar is ${c.t} / √(${c.t}² + ${c.n - 2}) = ${c.crit.toFixed(2)}. An r of 0.10 is not significant.`
        : `n = ${fmt(c.n)}: t = ${c.t}, so the bar is ${c.t} / √(${c.t}² + ${fmt(c.n - 2)}) = ${c.crit.toFixed(3)}. An r of 0.10 is now significant.`,
  })),
  { caption: 'Significance came and went with n, but r² stayed at 1%. Real, yet it explains almost nothing.' },
];

// chart geometry: log10(n) from 1 to 5 across, r from 0 to 0.7 up
const X0 = 60;
const Y0 = 300;
const W = 400;
const H = 250;
const sx = (n: number) => X0 + ((Math.log10(n) - 1) / 4) * W;
const sy = (r: number) => Y0 - (r / 0.7) * H;
const curve = Array.from({ length: 81 }, (_, i) => {
  const n = 10 ** (1 + i / 20);
  const t = 1.96 + 2.4 / Math.max(1, n - 2) ** 0.95 + 3 / Math.max(1, n - 2);
  return `${i ? 'L' : 'M'}${sx(n).toFixed(1)},${sy(rCrit(n, t)).toFixed(1)}`;
}).join(' ');

const BX = 490;

// t density for df = 8 (n = 10), normalised so the area under it is 1
const DF = 8;
const T_CUT = 2.306;
const raw = (x: number) => (1 + (x * x) / DF) ** (-(DF + 1) / 2);
const dx = 0.05;
const area = Array.from({ length: 161 }, (_, i) => raw(-4 + i * dx)).reduce((a, b) => a + b, 0) * dx;
const bx = (x: number) => X0 + ((x + 4) / 8) * W;
const by = (x: number) => Y0 - (raw(x) / area) * 500;
const path = (a: number, b: number, close: boolean) => {
  const pts = [];
  for (let x = a; x <= b + 1e-9; x += dx) pts.push(`${bx(x).toFixed(1)},${by(x).toFixed(1)}`);
  return `M${pts.join(' L')}${close ? ` L${bx(b)},${Y0} L${bx(a)},${Y0} Z` : ''}`;
};

export default function SignificanceSampleSize() {
  return (
    <StepFrame steps={steps} autoPlayMs={2400}>
      {(step) => {
        const idx = Math.min(cases.length - 1, Math.max(0, step - 3));
        const c = cases[idx];
        const sig = c.crit < R_OBS;
        const last = step === steps.length - 1;
        return (
          <svg viewBox="0 0 720 350" role="img" aria-label={`Significance and sample size, step ${step + 1}: ${steps[step].caption}`}>
            {step === 1 ? (
              <g className="fig-pop">
                <line className="fig-wire" x1={X0} y1={Y0} x2={X0 + W} y2={Y0} />
                <path className="sig-tail" d={path(-4, -T_CUT, true)} />
                <path className="sig-tail" d={path(T_CUT, 4, true)} />
                <path className="sig-curve" d={path(-4, 4, false)} fill="none" />
                <line className="fig-wire fig-wire--hot" strokeDasharray="5 4" x1={bx(-T_CUT)} y1={Y0} x2={bx(-T_CUT)} y2={Y0 - 90} />
                <line className="fig-wire fig-wire--hot" strokeDasharray="5 4" x1={bx(T_CUT)} y1={Y0} x2={bx(T_CUT)} y2={Y0 - 90} />
                <text className="fig-sub" x={bx(-T_CUT)} y={Y0 + 16} textAnchor="middle">−{T_CUT}</text>
                <text className="fig-sub" x={bx(T_CUT)} y={Y0 + 16} textAnchor="middle">+{T_CUT}</text>
                <text className="fig-sub" x={bx(0)} y={Y0 + 16} textAnchor="middle">0</text>
                <text className="fig-sub" x={bx(-T_CUT) - 8} y={Y0 - 30} textAnchor="end">2.5%</text>
                <text className="fig-sub" x={bx(T_CUT) + 8} y={Y0 - 30}>2.5%</text>
                <text className="fig-label" x={bx(0)} y={Y0 - H + 20} textAnchor="middle">t values when there is no real relationship</text>
                <text className="fig-sub" x={bx(0)} y={Y0 - H + 42} textAnchor="middle">95% of the area lies between the cutoffs</text>
              </g>
            ) : (
            <g>
            <line className="fig-wire" x1={X0} y1={Y0} x2={X0 + W} y2={Y0} />
            <line className="fig-wire" x1={X0} y1={Y0} x2={X0} y2={Y0 - H} />
            <text className="fig-sub" x={X0 + W} y={Y0 + 30} textAnchor="end">sample size n (log scale)</text>
            <text className="fig-sub" x={X0 + 6} y={Y0 - H - 6}>r needed to be significant</text>
            {cases.map((k) => (
              <text key={k.n} className="fig-sub" x={sx(k.n)} y={Y0 + 16} textAnchor="middle">{fmt(k.n)}</text>
            ))}

            <path className="sig-curve" d={curve} fill="none" />
            <line className="fig-wire fig-wire--hot" strokeDasharray="5 4" x1={X0} y1={sy(R_OBS)} x2={X0 + W} y2={sy(R_OBS)} />
            <text className="fig-sub" x={X0 + W} y={sy(R_OBS) - 6} textAnchor="end">observed r = 0.10</text>
            </g>
            )}

            {step >= 3 && (
              <g key={idx} className="fig-pop">
                <line className="fig-wire" strokeDasharray="2 3" x1={sx(c.n)} y1={Y0} x2={sx(c.n)} y2={sy(c.crit)} />
                <circle className={`sig-dot ${sig ? 'is-pos' : 'is-neg'}`} cx={sx(c.n)} cy={sy(c.crit)} r={8} />
              </g>
            )}

            {step >= 2 && (
              <g className="fig-pop">
                <text className="fig-label" x={BX} y={34}>r = t / √(t² + n − 2)</text>
                <text className="fig-sub" x={BX} y={54}>t: cutoff for chance (p = 0.05)</text>
                <text className="fig-sub" x={BX} y={72}>n − 2: degrees of freedom</text>
              </g>
            )}

            {step >= 3 && (
              <g>
                <text className="fig-label" x={BX} y={110}>n = {fmt(c.n)}, t = {c.t}</text>
                <text className="fig-sub" x={BX} y={132}>bar: r ≥ {c.crit.toFixed(c.crit < 0.1 ? 3 : 2)}</text>
                <text className={`fig-label sig-verdict ${sig ? 'is-pos' : 'is-neg'}`} x={BX} y={158}>
                  {sig ? 'significant' : 'not significant'}
                </text>
              </g>
            )}

            {last && (
              <g className="fig-pop">
                <text className="fig-label" x={BX} y={206}>effect size r²</text>
                <rect className="sig-track" x={BX} y={218} width={160} height={16} />
                <rect className="sig-fill" x={BX} y={218} width={160 * R_OBS ** 2} height={16} />
                <text className="fig-sub" x={BX} y={254}>1% of the variance explained</text>
                <text className="fig-sub" x={BX} y={274}>99% is still unexplained</text>
              </g>
            )}
          </svg>
        );
      }}
    </StepFrame>
  );
}
