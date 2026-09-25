import StepFrame from './StepFrame';

type Readout = {
  label: string;
  fraction: string;
  decimal: string;
  /** Length of the probability bar, 0–1. */
  bar: number;
  working?: string;
};

const steps = [
  { caption: 'Two dice give 6 × 6 = 36 equally likely outcomes. Rows are the first die, columns the second, and each cell shows the total.' },
  { caption: 'Event A, a total of 10 or more, covers 6 of the 36 cells: (4,6), (5,5), (5,6), (6,4), (6,5), (6,6).' },
  { caption: 'Event B, the first die is a 6, is the whole bottom row: 6 of the 36 cells.' },
  { caption: 'A and B together: only the 3 cells in the bottom row that also have a total of 10 or more.' },
  { caption: 'Given B, the world shrinks to the bottom row. Now 3 of 6 cells are in A, so the probability jumps from about 0.17 to 0.5.' },
];

const readouts: Readout[] = [
  { label: 'Any outcome', fraction: '36/36', decimal: '1', bar: 1 },
  { label: 'P(A)', fraction: '6/36', decimal: '≈ 0.17', bar: 6 / 36 },
  { label: 'P(B)', fraction: '6/36', decimal: '≈ 0.17', bar: 6 / 36 },
  { label: 'P(A ∩ B)', fraction: '3/36', decimal: '≈ 0.08', bar: 3 / 36 },
  { label: 'P(A|B)', fraction: '3/6', decimal: '= 0.5', bar: 0.5, working: '(3/36) ÷ (6/36)' },
];

const CELL = 40;
const X0 = 70;
const Y0 = 50;
const faces = [1, 2, 3, 4, 5, 6];

const cellClass = (step: number, first: number, second: number) => {
  const inA = first + second >= 10;
  const inB = first === 6;
  switch (step) {
    case 1: return inA ? 'is-a' : '';
    case 2: return inB ? 'is-b' : '';
    case 3: return inA && inB ? 'is-both' : inA || inB ? 'is-dim' : 'is-dim';
    case 4: return !inB ? 'is-out' : inA ? 'is-a' : 'is-b';
    default: return '';
  }
};

const BAR_X = 360;
const BAR_W = 320;

export default function DiceGrid() {
  return (
    <StepFrame steps={steps} autoPlayMs={2600}>
      {(step) => {
        const r = readouts[step];
        return (
          <svg viewBox="0 0 720 320" role="img" aria-label={`Dice grid, step ${step + 1}: ${steps[step].caption}`}>
            <text className="fig-sub" x={X0 + 3 * CELL} y={26} textAnchor="middle">second die</text>
            <text className="fig-sub" x={22} y={Y0 + 3 * CELL} textAnchor="middle"
                  transform={`rotate(-90 22 ${Y0 + 3 * CELL})`}>first die</text>

            {faces.map((f, i) => (
              <g key={f}>
                <text className="fig-sub" x={X0 + i * CELL + CELL / 2} y={Y0 - 8} textAnchor="middle">{f}</text>
                <text className="fig-sub" x={X0 - 10} y={Y0 + i * CELL + CELL / 2 + 4} textAnchor="middle">{f}</text>
              </g>
            ))}

            {faces.map((first, row) =>
              faces.map((second, col) => (
                <g key={`${first}${second}`} className={`dice-cell ${cellClass(step, first, second)}`}>
                  <rect x={X0 + col * CELL + 2} y={Y0 + row * CELL + 2} width={CELL - 4} height={CELL - 4} rx={5} />
                  <text x={X0 + col * CELL + CELL / 2} y={Y0 + row * CELL + CELL / 2 + 4} textAnchor="middle">
                    {first + second}
                  </text>
                </g>
              )),
            )}

            {/* Probability readout */}
            <text className="fig-label" x={BAR_X} y={92}>{r.label}</text>
            <g key={step} className="fig-pop">
              <text x={BAR_X} y={140} fontSize={40} fontWeight={700} fill="var(--accent)" fontFamily="var(--font)">
                {r.fraction}
              </text>
              <text x={BAR_X + 132} y={140} fontSize={22} fill="var(--ink-soft)" fontFamily="var(--font-mono)">
                {r.decimal}
              </text>
              {r.working && (
                <text className="fig-sub" x={BAR_X} y={164}>{r.working}</text>
              )}
            </g>

            <rect className="fig-box" x={BAR_X} y={186} width={BAR_W} height={16} rx={8} />
            <rect className="dice-bar" x={BAR_X} y={186} width={Math.max(r.bar * BAR_W, 0)} height={16} rx={8} />
            <text className="fig-sub" x={BAR_X} y={220}>0</text>
            <text className="fig-sub" x={BAR_X + BAR_W} y={220} textAnchor="end">1</text>

            <g className="fig-sub">
              <rect x={BAR_X} y={250} width={12} height={12} rx={3} fill="var(--accent-soft)" stroke="var(--accent)" />
              <text x={BAR_X + 18} y={260}>A: total ≥ 10</text>
              <rect x={BAR_X + 130} y={250} width={12} height={12} rx={3} fill="var(--ok-soft)" stroke="var(--ok)" />
              <text x={BAR_X + 148} y={260}>B: first die is 6</text>
            </g>
          </svg>
        );
      }}
    </StepFrame>
  );
}
