import { motion } from 'motion/react';
import StepFrame from './StepFrame';

const steps = [
  { caption: 'Fetch — the program counter names an address, and memory hands back the instruction stored there. It lands in the instruction register.' },
  { caption: 'Decode — the control unit reads the opcode and works out which units to switch on, and which registers this instruction wants to read.' },
  { caption: 'Execute — the operands leave the register file and the ALU computes the result. This is the only step that does arithmetic.' },
  { caption: 'Write back — the result is stored into the destination register, where the very next instruction can see it.' },
  { caption: 'Advance — the program counter moves on, and the whole cycle repeats. A modern CPU overlaps these stages rather than finishing one before starting the next.' },
];

/** Where the travelling instruction sits at each step, in SVG user units. */
const packet: ({ x: number; y: number; text: string } | null)[] = [
  { x: 280, y: 162, text: 'ADD' },
  { x: 427, y: 127, text: 'ADD' },
  { x: 605, y: 182, text: 'R1+R2' },
  { x: 605, y: 86, text: '= R3' },
  null,
];

/** The unit holding the instruction at each step; that box hides its filler text. */
const occupiedBy = ['IR', 'Decode', 'ALU', 'Registers', null] as const;

const hot = (step: number, on: number[]) => (on.includes(step) ? ' fig-box--active' : '');
const wire = (step: number, on: number[]) => `fig-wire${on.includes(step) ? ' fig-wire--hot' : ''}`;

export default function FetchDecodeExecute() {
  return (
    <StepFrame steps={steps} autoPlayMs={2200}>
      {(step) => {
        const occupied = occupiedBy[step];
        return (
        <svg viewBox="0 0 720 320" role="img" aria-label={`Instruction cycle, step ${step + 1}: ${steps[step].caption}`}>
          {/* Memory */}
          <text className="fig-label" x={16} y={54}>Memory</text>
          <rect className={`fig-box${hot(step, [0])}`} x={16} y={64} width={150} height={190} rx={8} />
          {['0x00  LOAD R1', '0x04  LOAD R2', '0x08  ADD R3', '0x0C  STORE'].map((t, i) => (
            <text key={t} className="fig-sub" x={30} y={92 + i * 26} opacity={i === 2 ? 1 : 0.45}>{t}</text>
          ))}

          {/* CPU boundary */}
          <rect x={210} y={40} width={494} height={240} rx={12}
                fill="none" stroke="var(--line)" strokeWidth={1.5} strokeDasharray="5 5" />
          <text className="fig-sub" x={694} y={60} textAnchor="end">CPU</text>

          {/* Address bus out, instruction bus in */}
          <path className={wire(step, [0])} d="M232 86 H196 V110 H166" markerEnd="url(#fdx-arrow)" />
          <path className={wire(step, [0])} d="M166 200 H196 V162 H232" markerEnd="url(#fdx-arrow)" />

          {/* Units. Names sit above each box so the travelling instruction can
              occupy the box interior without covering any text. */}
          <text className="fig-label" x={232} y={58}>PC</text>
          <rect className={`fig-box${hot(step, [4])}`} x={232} y={64} width={96} height={44} rx={6} />
          <text className="fig-sub" x={280} y={92} textAnchor="middle">{step === 4 ? '0x0C' : '0x08'}</text>

          <text className="fig-label" x={232} y={134}>IR</text>
          <rect className={`fig-box${hot(step, [0, 1])}`} x={232} y={140} width={96} height={44} rx={6} />
          {occupied !== 'IR' && (
            // The instruction really does stay latched in the IR for the whole
            // cycle; the travelling packet is a simplification, so show it faded
            // here rather than claiming the register emptied.
            <text className="fig-sub" x={280} y={168} textAnchor="middle" opacity={step === 4 ? 0.4 : 0.6}>
              {step === 4 ? '—' : 'ADD R3'}
            </text>
          )}

          <text className="fig-label" x={372} y={99}>Decode</text>
          <rect className={`fig-box${hot(step, [1])}`} x={372} y={105} width={110} height={44} rx={6} />
          {occupied !== 'Decode' && <text className="fig-sub" x={427} y={133} textAnchor="middle">control unit</text>}

          <text className="fig-label" x={530} y={58}>Registers</text>
          <rect className={`fig-box${hot(step, [2, 3])}`} x={530} y={64} width={150} height={44} rx={6} />
          {occupied !== 'Registers' && <text className="fig-sub" x={605} y={92} textAnchor="middle">R1 R2 R3</text>}

          <text className="fig-label" x={530} y={154}>ALU</text>
          <rect className={`fig-box${hot(step, [2])}`} x={530} y={160} width={150} height={44} rx={6} />
          {occupied !== 'ALU' && <text className="fig-sub" x={605} y={188} textAnchor="middle">add · sub · cmp</text>}

          {/* Internal wiring */}
          <path className={wire(step, [1])} d="M328 162 H350 V127 H372" markerEnd="url(#fdx-arrow)" />
          <path className={wire(step, [1, 2])} d="M482 118 H506 V86 H530" markerEnd="url(#fdx-arrow)" />
          <path className={wire(step, [1, 2])} d="M482 136 H506 V182 H530" markerEnd="url(#fdx-arrow)" />
          <path className={wire(step, [2])} d="M552 108 V160" markerEnd="url(#fdx-arrow)" />
          <path className={wire(step, [3])} d="M658 160 V108" markerEnd="url(#fdx-arrow)" />
          <path className={wire(step, [4])} d="M280 40 V64" markerEnd="url(#fdx-arrow)" />
          <text className="fig-sub" x={286} y={36}>+4</text>

          {/* The instruction itself, moving through the datapath */}
          <motion.g
            initial={false}
            animate={{
              x: packet[step]?.x ?? 100,
              y: packet[step]?.y ?? 150,
              opacity: packet[step] ? 1 : 0,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <rect x={-32} y={-12} width={64} height={24} rx={5}
                  fill="var(--accent)" opacity={0.92} />
            <text x={0} y={4} textAnchor="middle" fontSize={11} fontWeight={700}
                  fontFamily="var(--font-mono)" fill="var(--bg)">
              {packet[step]?.text ?? ''}
            </text>
          </motion.g>

          <defs>
            <marker id="fdx-arrow" viewBox="0 0 8 8" refX={7} refY={4}
                    markerWidth={5} markerHeight={5} orient="auto">
              <path d="M0 0 L8 4 L0 8 z" fill="var(--line-strong)" />
            </marker>
          </defs>
        </svg>
        );
      }}
    </StepFrame>
  );
}
