import StepFrame from './StepFrame';

// Phone prices in unequal-width bins. Height is a density (probability per
// dollar); a bar's probability is height × width, and the cdf adds those areas.
const bins = [
  { lo: 0, hi: 100, p: 0.1 },
  { lo: 100, hi: 200, p: 0.2 },
  { lo: 200, hi: 300, p: 0.25 },
  { lo: 300, hi: 500, p: 0.3 },
  { lo: 500, hi: 800, p: 0.15 },
].map((b) => ({ ...b, w: b.hi - b.lo, d: b.p / (b.hi - b.lo) }));

const cumTo = (k: number) => bins.slice(0, k).reduce((s, b) => s + b.p, 0);
const fmt = (n: number) => n.toFixed(2);

const BASE = 240;
const PW = 300; // panel width for $0–$800
const PDF_X = 40;
const CDF_X = 390;
const MAX_D = 0.0025;
const PDF_H = 140;
const CDF_H = 170;
const sx = (price: number, x0: number) => x0 + (price / 800) * PW;

const steps = [
  { caption: 'Phone prices in bins of different widths. Left: the pdf, where height is a density (probability per dollar). Right: the cdf, still empty.' },
  ...bins.map((b, i) => ({
    caption:
      `Bin $${b.lo}–$${b.hi}: height ${b.d} × width ${b.w} = ${fmt(b.p)}. ` +
      (i === 0
        ? 'The cdf starts at that probability.'
        : `Add it to the running total: F($${b.hi}) = ${fmt(cumTo(i + 1))}.`) +
      (i === bins.length - 1 ? ' Every bin is used, so the cdf ends at 1.' : ''),
  })),
];

export default function BinnedCdf() {
  return (
    <StepFrame steps={steps} autoPlayMs={2600}>
      {(step) => {
        const k = step; // bins included so far
        const b = k > 0 ? bins[k - 1] : null;
        return (
          <svg viewBox="0 0 720 310" role="img" aria-label={`Binned pdf to cdf, step ${step + 1}: ${steps[step].caption}`}>
            <text className="fig-label" x={PDF_X} y={30}>pdf · density (per $)</text>
            <text className="fig-label" x={CDF_X} y={30}>cdf · F(x) = P(price ≤ x)</text>

            <line className="fig-wire" x1={PDF_X} y1={BASE} x2={PDF_X + PW} y2={BASE} />
            <line className="fig-wire" x1={CDF_X} y1={BASE} x2={CDF_X + PW} y2={BASE} />
            <line className="fig-wire" x1={CDF_X} y1={BASE - CDF_H} x2={CDF_X + PW} y2={BASE - CDF_H} strokeDasharray="3 4" />
            <text className="fig-sub" x={CDF_X - 6} y={BASE - CDF_H + 4} textAnchor="end">1</text>
            <text className="fig-sub" x={CDF_X - 6} y={BASE + 4} textAnchor="end">0</text>

            {bins.map((bin, i) => {
              const included = i < k;
              const now = i === k - 1;
              const y0 = BASE - (cumTo(i) * CDF_H);
              const y1 = BASE - (cumTo(i + 1) * CDF_H);
              const xa = sx(bin.lo, CDF_X);
              const xb = sx(bin.hi, CDF_X);
              return (
                <g key={i}>
                  <rect
                    className={`pdf-bar ${included ? (now ? 'is-now' : 'is-sum') : 'is-idle'}`}
                    x={sx(bin.lo, PDF_X) + 1}
                    y={BASE - (bin.d / MAX_D) * PDF_H}
                    width={sx(bin.hi, PDF_X) - sx(bin.lo, PDF_X) - 2}
                    height={(bin.d / MAX_D) * PDF_H}
                    rx={2}
                  />
                  <text className="fig-sub" x={(sx(bin.lo, PDF_X) + sx(bin.hi, PDF_X)) / 2} y={BASE - (bin.d / MAX_D) * PDF_H - 6} textAnchor="middle">
                    {bin.d}
                  </text>
                  {included && (
                    <polygon
                      className={`cdf-slab ${now ? 'is-now fig-pop' : ''}`}
                      points={`${xa},${BASE} ${xa},${y0} ${xb},${y1} ${xb},${BASE}`}
                    />
                  )}
                </g>
              );
            })}

            {[0, ...bins.map((x) => x.hi)].map((price) => (
              <g key={price}>
                <text className="fig-sub" x={sx(price, PDF_X)} y={BASE + 15} textAnchor="middle">${price}</text>
                <text className="fig-sub" x={sx(price, CDF_X)} y={BASE + 15} textAnchor="middle">${price}</text>
              </g>
            ))}

            {b && (
              <g key={k} className="fig-pop">
                <text x={CDF_X} y={72} fontSize={22} fontWeight={700} fill="var(--accent)" fontFamily="var(--font)">
                  {b.d} × {b.w} = {fmt(b.p)}
                </text>
                <text className="fig-sub" x={CDF_X} y={92}>
                  F(${b.hi}) = {bins.slice(0, k).map((x) => fmt(x.p)).join(' + ')} = {fmt(cumTo(k))}
                </text>
              </g>
            )}
          </svg>
        );
      }}
    </StepFrame>
  );
}
