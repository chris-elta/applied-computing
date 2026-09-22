import { Fragment, useState, type ReactNode } from 'react';
import { markCorrect } from '../lib/progress';
import { splitInline } from '../lib/inline-code';
import './quiz.css';

/** Renders inline markup in question text: `code`, **strong**, *em*. */
function withInline(text: string): ReactNode {
  return splitInline(text).map((part, i) => {
    if (part.kind === 'code') return <code key={i}>{part.text}</code>;
    if (part.kind === 'strong') return <strong key={i}>{part.text}</strong>;
    if (part.kind === 'em') return <em key={i}>{part.text}</em>;
    return <Fragment key={i}>{part.text}</Fragment>;
  });
}

type Choice = { text: string; correct: boolean; explains?: string };
type Question = { ask: string; choices: Choice[] };

type Props = {
  courseId: string;
  conceptNumber: number;
  questions: Question[];
};

/**
 * A knowledge check, not a test. Wrong answers are never hidden away: picking
 * one reveals why it's wrong and leaves the question open to try again.
 */
export default function Quiz({ courseId, conceptNumber, questions }: Props) {
  const [picked, setPicked] = useState<Record<number, number>>({});

  return (
    <section className="quiz" aria-label="Check your understanding">
      <p className="eyebrow">Check your understanding</p>

      {questions.map((q, qi) => {
        const choice = picked[qi];
        const answered = choice !== undefined;
        const wasRight = answered && q.choices[choice].correct;

        return (
          <div className="quiz__q" key={qi}>
            <p className="quiz__ask">{withInline(q.ask)}</p>

            <ul className="quiz__choices">
              {q.choices.map((c, ci) => {
                const isPicked = choice === ci;
                const state = !answered ? '' : c.correct ? ' is-correct' : isPicked ? ' is-wrong' : '';
                return (
                  <li key={ci}>
                    <button
                      type="button"
                      className={`quiz__choice${state}${isPicked ? ' is-picked' : ''}`}
                      // Once right, lock it in; otherwise let them reconsider.
                      disabled={wasRight}
                      onClick={() => {
                        setPicked((p) => ({ ...p, [qi]: ci }));
                        if (c.correct) markCorrect(courseId, conceptNumber, qi);
                      }}
                    >
                      <span className="quiz__mark" aria-hidden="true">
                        {answered ? (c.correct ? '✓' : isPicked ? '✕' : '') : ''}
                      </span>
                      <span>{withInline(c.text)}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {answered && (
              <p className={`quiz__feedback${wasRight ? ' is-correct' : ' is-wrong'}`} role="status">
                {q.choices[choice].explains
                  ? withInline(q.choices[choice].explains)
                  : wasRight
                    ? 'That’s right.'
                    : 'Not quite — look at the highlighted answer and try again.'}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
}
