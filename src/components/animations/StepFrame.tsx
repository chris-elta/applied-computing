import './stepframe.css';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

export type StepDef = {
  /** One line explaining what just happened. Shown under the figure. */
  caption: string;
};

type Props = {
  steps: StepDef[];
  /** Milliseconds per step when playing. Omit to disable autoplay. */
  autoPlayMs?: number;
  /** Renders the figure for the current step index. */
  children: (step: number) => ReactNode;
};

const prefersReducedMotion = () =>
  typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * The harness every concept animation is built on. It owns the step index,
 * playback, and keyboard control, so an animation only has to draw one frame:
 * give it `steps` and a render function of `step -> figure`.
 *
 * Keyboard is scoped to the figure once focused, so it never fights the
 * page-level next/previous-slide bindings.
 */
export default function StepFrame({ steps, autoPlayMs, children }: Props) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const last = steps.length - 1;

  const go = useCallback(
    (next: number) => setStep(Math.max(0, Math.min(last, next))),
    [last],
  );

  // Advance while playing; stop at the end rather than looping, so the final
  // state stays on screen to be read.
  useEffect(() => {
    if (!playing) return;
    if (step >= last) {
      setPlaying(false);
      return;
    }
    const id = setTimeout(() => setStep((s) => Math.min(last, s + 1)), autoPlayMs ?? 1600);
    return () => clearTimeout(id);
  }, [playing, step, last, autoPlayMs]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.stopPropagation(); go(step + 1); }
    else if (e.key === 'ArrowLeft') { e.stopPropagation(); go(step - 1); }
    else if (e.key === ' ' && autoPlayMs) { e.preventDefault(); e.stopPropagation(); setPlaying((p) => !p); }
  };

  const restart = () => {
    setStep(0);
    setPlaying(Boolean(autoPlayMs) && !prefersReducedMotion());
  };

  return (
    <div className="stepframe" ref={rootRef} tabIndex={0} onKeyDown={onKeyDown}>
      <div className="stepframe__figure">{children(step)}</div>

      <p className="stepframe__caption" aria-live="polite">
        {steps[step]?.caption}
      </p>

      <div className="stepframe__controls">
        <button
          type="button"
          className="stepframe__btn"
          onClick={() => { setPlaying(false); go(step - 1); }}
          disabled={step === 0}
          aria-label="Previous step"
        >
          ←
        </button>

        {autoPlayMs ? (
          <button
            type="button"
            className="stepframe__btn stepframe__btn--wide"
            onClick={() => (step >= last ? restart() : setPlaying((p) => !p))}
          >
            {step >= last ? 'Replay' : playing ? 'Pause' : 'Play'}
          </button>
        ) : null}

        <button
          type="button"
          className="stepframe__btn"
          onClick={() => { setPlaying(false); go(step + 1); }}
          disabled={step === last}
          aria-label="Next step"
        >
          →
        </button>

        <ol className="stepframe__dots">
          {steps.map((s, i) => (
            <li key={i}>
              <button
                type="button"
                className={`stepframe__dot${i === step ? ' is-current' : ''}${i < step ? ' is-done' : ''}`}
                onClick={() => { setPlaying(false); setStep(i); }}
                aria-label={`Step ${i + 1}: ${s.caption}`}
                aria-current={i === step ? 'step' : undefined}
              />
            </li>
          ))}
        </ol>

        <span className="stepframe__count">{step + 1}/{steps.length}</span>
      </div>
    </div>
  );
}
