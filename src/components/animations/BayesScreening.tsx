import StepFrame from './StepFrame';

// 1,000 people, one dot each: 10 have the condition (1%), 9 of them test
// positive (90%); of the 990 who do not, 89 test positive (9%).
const COLS = 50;
const ROWS = 20;
const PITCH = 13;
const X0 = 35;
const Y0 = 14;

const SICK = 10;
const TRUE_POS = 9;
const FALSE_POS = 89;

type Kind = 'sick-pos' | 'sick-neg' | 'well-pos' | 'well-neg';
const kindOf = (i: number): Kind =>
  i < SICK ? (i < TRUE_POS ? 'sick-pos' : 'sick-neg') : i - SICK < FALSE_POS ? 'well-pos' : 'well-neg';

const steps = [
  { caption: 'Picture 1,000 people, one dot each. Nobody has been tested yet.' },
  { caption: 'The condition affects 1% of people: 10 dots have it, 990 do not. This is the prior.' },
  { caption: 'The test catches 90% of those who have it: 9 of the 10 test positive.' },
  { caption: 'It also wrongly flags 9% of those who do not: about 89 of the 990 test positive too.' },
  { caption: 'You tested positive, so only the positives matter: 9 real out of 98 total. P(condition | positive) ≈ 9%, not 90%.' },
];

const classFor = (step: number, kind: Kind) => {
  const sick = kind.startsWith('sick');
  const pos = kind.endsWith('pos');
  switch (step) {
    case 1: return sick ? 'is-sick' : '';
    case 2: return sick ? (pos ? 'is-tp' : 'is-sick') : '';
    case 3: return sick ? (pos ? 'is-tp' : 'is-sick') : pos ? 'is-fp' : '';
    case 4: return pos ? (sick ? 'is-tp' : 'is-fp') : 'is-out';
    default: return '';
  }
};

export default function BayesScreening() {
  return (
    <StepFrame steps={steps} autoPlayMs={2800}>
      {(step) => (
        <svg viewBox="0 0 720 350" role="img" aria-label={`Screening population, step ${step + 1}: ${steps[step].caption}`}>
          {Array.from({ length: COLS * ROWS }, (_, i) => {
            // Fill column by column so the small groups form tight blocks.
            const col = Math.floor(i / ROWS);
            const row = i % ROWS;
            return (
              <circle
                key={i}
                className={`bay-dot ${classFor(step, kindOf(i))}`}
                cx={X0 + col * PITCH}
                cy={Y0 + row * PITCH}
                r={4.6}
              />
            );
          })}

          <g key={step} className="fig-pop">
            {step === 0 && <text className="fig-label" x={X0} y={306}>1,000 people</text>}
            {step === 1 && (
              <text className="fig-label" x={X0} y={306}>10 have it · 990 do not — P(A) = 1%</text>
            )}
            {step === 2 && (
              <text className="fig-label" x={X0} y={306}>9 of 10 positive — P(positive | condition) = 90%</text>
            )}
            {step === 3 && (
              <text className="fig-label" x={X0} y={306}>9 true positives + 89 false positives = 98</text>
            )}
            {step === 4 && (
              <>
                <text x={X0} y={312} fontSize={34} fontWeight={700} fill="var(--accent)" fontFamily="var(--font)">9/98</text>
                <text x={X0 + 100} y={312} fontSize={20} fill="var(--ink-soft)" fontFamily="var(--font-mono)">≈ 9%</text>
                <text className="fig-sub" x={X0} y={334}>P(condition | positive) = P(positive | condition) · P(condition) / P(positive) = 0.9 × 0.01 / 0.098</text>
              </>
            )}
          </g>

          <g className="fig-sub">
            <circle cx={X0 + 480} cy={302} r={4.6} className="bay-dot is-tp" />
            <text x={X0 + 490} y={306}>has it, positive</text>
            <circle cx={X0 + 480} cy={322} r={4.6} className="bay-dot is-fp" />
            <text x={X0 + 490} y={326}>healthy, positive</text>
          </g>
        </svg>
      )}
    </StepFrame>
  );
}
