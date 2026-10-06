import StepFrame from './StepFrame';

const a = [1, 2, 3];
const b = [4, 5, 6];
const n = a.length;
const outputs = 2 * n - 1;

/** Every product on anti-diagonal k, in order of i. */
const terms = (k: number) =>
  a.flatMap((ai, i) => (k - i >= 0 && k - i < n ? [{ ai, bj: b[k - i] }] : []));
const c = Array.from({ length: outputs }, (_, k) => terms(k).reduce((s, t) => s + t.ai * t.bj, 0));

const steps = [
  { caption: `Every product a_i · b_j, laid out in a grid: ${n} × ${n} = ${n * n} multiplications.` },
  ...c.map((ck, k) => ({
    caption: `c_${k} collects the cells where i + j = ${k}: ${terms(k).map((t) => `${t.ai}·${t.bj}`).join(' + ')} = ${ck}.`,
  })),
  { caption: `${n * n} products collapsed into ${outputs} outputs. Each anti-diagonal is one coordinate of a * b.` },
];

const CELL = 60;
const X0 = 90;
const Y0 = 70;
const OUT_X = 350;
const OUT_W = 68;
const OUT_Y = 120;

export default function Convolution() {
  return (
    <StepFrame steps={steps} autoPlayMs={2200}>
      {(step) => {
        // Diagonal being summed now; -1 before the sweep, `outputs` once it is over.
        const k = step - 1;
        return (
          <svg viewBox="0 0 720 300" role="img" aria-label={`Convolution grid, step ${step + 1}: ${steps[step].caption}`}>
            {b.map((bj, j) => (
              <text key={j} className="fig-label" x={X0 + j * CELL + CELL / 2} y={Y0 - 12} textAnchor="middle">
                b_{j} = {bj}
              </text>
            ))}
            {a.map((ai, i) => (
              <text key={i} className="fig-label" x={X0 - 12} y={Y0 + i * CELL + CELL / 2 + 4} textAnchor="end">
                a_{i} = {ai}
              </text>
            ))}

            {a.map((ai, i) =>
              b.map((bj, j) => {
                const d = i + j;
                const state = d === k ? 'is-now' : d < k ? 'is-done' : '';
                return (
                  <g key={`${i}${j}`} className={`conv-cell ${state}`}>
                    <rect x={X0 + j * CELL + 3} y={Y0 + i * CELL + 3} width={CELL - 6} height={CELL - 6} rx={6} />
                    <text x={X0 + j * CELL + CELL / 2} y={Y0 + i * CELL + CELL / 2 + 5} textAnchor="middle">
                      {ai}·{bj}
                    </text>
                  </g>
                );
              }),
            )}

            <text className="fig-label" x={OUT_X} y={OUT_Y - 30}>c = a * b</text>
            {c.map((ck, d) => {
              const state = d === k ? 'is-now' : d < k ? 'is-done' : '';
              return (
                <g key={d} className={`conv-cell ${state}`}>
                  <rect x={OUT_X + d * OUT_W + 3} y={OUT_Y} width={OUT_W - 6} height={CELL - 6} rx={6} />
                  {d <= k && (
                    <text key={step === d + 1 ? 'now' : 'done'} className="fig-pop"
                          x={OUT_X + d * OUT_W + OUT_W / 2} y={OUT_Y + CELL / 2 + 2} textAnchor="middle">
                      {ck}
                    </text>
                  )}
                  <text className="fig-sub" x={OUT_X + d * OUT_W + OUT_W / 2} y={OUT_Y + CELL + 12} textAnchor="middle">
                    c_{d}
                  </text>
                </g>
              );
            })}

            {k >= 0 && k < outputs && (
              <text key={step} className="fig-sub fig-pop" x={OUT_X + 3} y={OUT_Y + CELL + 44}>
                i + j = {k}:  {terms(k).map((t) => `${t.ai}·${t.bj}`).join(' + ')} = {c[k]}
              </text>
            )}
          </svg>
        );
      }}
    </StepFrame>
  );
}
