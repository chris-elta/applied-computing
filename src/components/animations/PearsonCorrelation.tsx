import StepFrame from './StepFrame';

// The first worked example: hours studied (X) against quiz score (Y).
const pts = [
  [1, 2],
  [2, 4],
  [3, 5],
  [4, 4],
  [5, 5],
];
const MX = 3;
const MY = 4;
const prod = ([x, y]: number[]) => (x - MX) * (y - MY);

const PX = 50;
const PY = 320;
const U = 50; // px per unit
const sx = (x: number) => PX + x * U;
const sy = (y: number) => PY - y * U;

const RX = 470;

const steps = [
  { caption: 'Five students: hours studied on the horizontal axis, quiz score on the vertical.' },
  { caption: 'Draw the two means, X̄ = 3 and Ȳ = 4. They cut the plane into four quadrants.' },
  { caption: 'Upper-right and lower-left points agree with each other (positive). The other two quadrants disagree (negative).' },
  ...pts.map((p, i) => ({
    caption: `Point (${p[0]}, ${p[1]}): (${p[0]} − 3)(${p[1]} − 4) = ${prod(p)}. ${
      prod(p) > 0 ? 'It agrees, so it votes positive, and the rectangle is its area.' : 'It sits on a mean line, so it votes nothing.'
    }${i === 0 ? ' Distance from both means makes a loud vote.' : ''}`,
  })),
  { caption: 'Add the votes: the numerator is 4 + 0 + 0 + 0 + 2 = 6.' },
  { caption: 'Divide by the two spreads, √10 · √6 ≈ 7.75, to cancel the units: r = 6 / 7.75 ≈ 0.77.' },
];

export default function PearsonCorrelation() {
  return (
    <StepFrame steps={steps} autoPlayMs={2400}>
      {(step) => {
        const shown = Math.max(0, Math.min(pts.length, step - 2)); // points voted so far
        const sum = pts.slice(0, shown).reduce((s, p) => s + prod(p), 0);
        return (
          <svg viewBox="0 0 720 350" role="img" aria-label={`Pearson correlation, step ${step + 1}: ${steps[step].caption}`}>
            {step >= 2 && (
              <g className="fig-pop">
                <rect className="corr-quad is-pos" x={sx(MX)} y={sy(6)} width={3 * U} height={(6 - MY) * U} />
                <rect className="corr-quad is-pos" x={sx(0)} y={sy(MY)} width={MX * U} height={MY * U} />
                <rect className="corr-quad is-neg" x={sx(0)} y={sy(6)} width={MX * U} height={(6 - MY) * U} />
                <rect className="corr-quad is-neg" x={sx(MX)} y={sy(MY)} width={3 * U} height={MY * U} />
                <text className="fig-sub" x={sx(6) - 6} y={sy(6) + 14} textAnchor="end">agree +</text>
                <text className="fig-sub" x={sx(0) + 6} y={sy(0) - 8}>agree +</text>
                <text className="fig-sub" x={sx(0) + 6} y={sy(6) + 14}>disagree −</text>
                <text className="fig-sub" x={sx(6) - 6} y={sy(0) - 8} textAnchor="end">disagree −</text>
              </g>
            )}

            <line className="fig-wire" x1={sx(0)} y1={sy(0)} x2={sx(6)} y2={sy(0)} />
            <line className="fig-wire" x1={sx(0)} y1={sy(0)} x2={sx(0)} y2={sy(6)} />
            <text className="fig-sub" x={sx(6)} y={sy(0) + 16} textAnchor="end">hours studied</text>
            <text className="fig-sub" x={sx(0) + 6} y={sy(6) - 4}>quiz score</text>

            {step >= 1 && (
              <g className="fig-pop">
                <line className="fig-wire fig-wire--hot" strokeDasharray="5 4" x1={sx(MX)} y1={sy(0)} x2={sx(MX)} y2={sy(6)} />
                <line className="fig-wire fig-wire--hot" strokeDasharray="5 4" x1={sx(0)} y1={sy(MY)} x2={sx(6)} y2={sy(MY)} />
                <text className="fig-sub" x={sx(MX) + 4} y={sy(0) - 4}>X̄ = 3</text>
                <text className="fig-sub" x={sx(6) + 4} y={sy(MY) + 4}>Ȳ = 4</text>
              </g>
            )}

            {pts.map((p, i) => {
              const v = prod(p);
              const voted = i < shown;
              const current = i === shown - 1;
              const x0 = Math.min(sx(p[0]), sx(MX));
              const y0 = Math.min(sy(p[1]), sy(MY));
              return (
                <g key={i}>
                  {voted && (
                    <rect
                      className={`corr-rect ${v > 0 ? 'is-pos' : 'is-neg'} ${current ? 'is-now' : ''}`}
                      x={x0}
                      y={y0}
                      width={Math.abs(sx(p[0]) - sx(MX))}
                      height={Math.abs(sy(p[1]) - sy(MY))}
                    />
                  )}
                  <circle className={`corr-pt ${current ? 'is-now' : ''}`} cx={sx(p[0])} cy={sy(p[1])} r={6} />
                </g>
              );
            })}

            {step >= 3 && (
              <g>
                <text className="fig-label" x={RX} y={40}>votes: (X − X̄)(Y − Ȳ)</text>
                {pts.slice(0, shown).map((p, i) => (
                  <text key={i} className="fig-sub fig-pop" x={RX} y={68 + i * 24}>
                    ({p[0]}, {p[1]}) → {prod(p) > 0 ? '+' : ''}{prod(p)}
                  </text>
                ))}
                <line className="fig-wire" x1={RX} y1={190} x2={RX + 190} y2={190} />
                <text className="fig-label" x={RX} y={214}>running sum = {sum}</text>
              </g>
            )}

            {step >= 9 && (
              <g className="fig-pop">
                <text className="fig-sub" x={RX} y={244}>Σ(X − X̄)² = 10, Σ(Y − Ȳ)² = 6</text>
                <text className="fig-label" x={RX} y={280}>r = 6 / (√10 · √6) ≈ 0.77</text>
              </g>
            )}
          </svg>
        );
      }}
    </StepFrame>
  );
}
