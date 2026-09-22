import { motion } from 'motion/react';
import StepFrame from './StepFrame';

const WORDS = 32;      // words of main memory drawn
const LINE = 4;        // words per cache line
const LINES = 4;       // lines in this (direct-mapped) cache

/** The access pattern we walk: straight down the array, one word at a time. */
const ACCESSES = [0, 1, 2, 3, 4, 5, 6, 7];

type Frame = {
  addr: number;
  hit: boolean;
  /** For each cache line, the first address of the block it holds (or null). */
  cache: (number | null)[];
  caption: string;
};

/**
 * Replays the access pattern through a direct-mapped cache once, at module
 * load, so the figure only ever renders precomputed state.
 */
const frames: Frame[] = (() => {
  const cache: (number | null)[] = Array(LINES).fill(null);
  let misses = 0;

  return ACCESSES.map((addr) => {
    const blockStart = Math.floor(addr / LINE) * LINE;
    const slot = Math.floor(addr / LINE) % LINES;
    const hit = cache[slot] === blockStart;
    if (!hit) {
      cache[slot] = blockStart;
      misses += 1;
    }
    return {
      addr,
      hit,
      cache: [...cache],
      caption: hit
        ? `Read address ${addr} — hit. It arrived free of charge when address ${blockStart} missed and the whole ${LINE}-word block came along with it.`
        : `Read address ${addr} — miss. The cache goes to memory, and brings back not just this word but the entire block ${blockStart}–${blockStart + LINE - 1}.`,
    };
  }).concat({
    addr: -1,
    hit: true,
    cache: [...cache],
    caption: `${ACCESSES.length} reads cost only ${misses} trips to memory. That is spatial locality paying off — walking an array in order means most reads are already sitting in cache. Jump around with a stride of ${LINE} or more and every single read would miss.`,
  });
})();

const steps = frames.map((f) => ({ caption: f.caption }));

const CELL = 20;
const MEM_X = 24;
const MEM_Y = 58;

export default function CacheLocality() {
  return (
    <StepFrame steps={steps} autoPlayMs={2400}>
      {(step) => {
        const frame = frames[step];
        const cached = new Set(
          frame.cache.flatMap((start) =>
            start === null ? [] : Array.from({ length: LINE }, (_, i) => start + i),
          ),
        );

        return (
          <svg viewBox="0 0 720 300" role="img" aria-label={`Cache behaviour, step ${step + 1}: ${frame.caption}`}>
            <text className="fig-label" x={MEM_X} y={28}>Main memory</text>
            <text className="fig-sub" x={MEM_X + 110} y={28}>slow · far away</text>

            {Array.from({ length: WORDS }, (_, addr) => {
              const isCurrent = addr === frame.addr;
              const inCache = cached.has(addr);
              return (
                <g key={addr}>
                  <rect
                    x={MEM_X + addr * CELL}
                    y={MEM_Y}
                    width={CELL - 2}
                    height={30}
                    rx={3}
                    fill={inCache ? 'var(--accent-soft)' : 'var(--bg-raised)'}
                    stroke={isCurrent ? 'var(--accent)' : 'var(--line)'}
                    strokeWidth={isCurrent ? 2 : 1}
                  />
                  {addr % LINE === 0 && (
                    <text className="fig-sub" x={MEM_X + addr * CELL} y={MEM_Y + 46} fontSize={9}>{addr}</text>
                  )}
                </g>
              );
            })}

            {/* Marker riding along the memory strip to the word being read */}
            <motion.g
              initial={false}
              animate={{
                x: frame.addr >= 0 ? MEM_X + frame.addr * CELL + (CELL - 2) / 2 : MEM_X,
                opacity: frame.addr >= 0 ? 1 : 0,
              }}
              transition={{ type: 'spring', stiffness: 160, damping: 20 }}
            >
              <path d="M0 -8 L5 -16 L-5 -16 Z" fill="var(--accent)" transform={`translate(0 ${MEM_Y})`} />
            </motion.g>

            <text className="fig-label" x={MEM_X} y={140}>Cache</text>
            <text className="fig-sub" x={MEM_X + 52} y={140}>{LINES} lines × {LINE} words · fast · nearby</text>

            {frame.cache.map((start, slot) => {
              const y = 152 + slot * 34;
              return (
                <g key={slot}>
                  <text className="fig-sub" x={MEM_X} y={y + 20}>line {slot}</text>
                  {Array.from({ length: LINE }, (_, i) => {
                    const addr = start === null ? null : start + i;
                    const isCurrent = addr !== null && addr === frame.addr;
                    return (
                      <g key={i}>
                        <rect
                          x={MEM_X + 60 + i * 52}
                          y={y}
                          width={48}
                          height={28}
                          rx={4}
                          fill={addr === null ? 'transparent' : isCurrent ? 'var(--accent)' : 'var(--accent-soft)'}
                          stroke={addr === null ? 'var(--line)' : 'var(--accent)'}
                          strokeWidth={1.2}
                          strokeDasharray={addr === null ? '3 3' : undefined}
                        />
                        {addr !== null && (
                          <text
                            x={MEM_X + 84 + i * 52}
                            y={y + 18}
                            textAnchor="middle"
                            fontSize={11}
                            fontFamily="var(--font-mono)"
                            fill={isCurrent ? 'var(--bg)' : 'var(--ink)'}
                          >
                            {addr}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* Verdict badge for the current access */}
            {frame.addr >= 0 && (
              <g key={step} className="fig-pop">
                <rect x={520} y={190} width={170} height={46} rx={8}
                      fill={frame.hit ? 'var(--ok-soft)' : 'var(--bad-soft)'}
                      stroke={frame.hit ? 'var(--ok)' : 'var(--bad)'} strokeWidth={1.5} />
                <text x={605} y={210} textAnchor="middle" fontSize={14} fontWeight={700}
                      fill={frame.hit ? 'var(--ok)' : 'var(--bad)'} fontFamily="var(--font)">
                  {frame.hit ? 'HIT' : 'MISS'}
                </text>
                <text x={605} y={227} textAnchor="middle" fontSize={10}
                      fill="var(--ink-soft)" fontFamily="var(--font-mono)">
                  {frame.hit ? '~1 ns · from cache' : '~80 ns · from memory'}
                </text>
              </g>
            )}
          </svg>
        );
      }}
    </StepFrame>
  );
}
