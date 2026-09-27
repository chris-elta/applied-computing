import { Fragment, useEffect, useState, type ReactNode } from 'react';
import { getExamBest, saveExamScore } from '../lib/progress';
import { buildExport, downloadExport } from '../lib/exam-export';
import { splitInline } from '../lib/inline-code';
import './quiz.css';
import './exam.css';

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
type Question = { ask: string; choices: Choice[]; work?: string; topic?: string };

type Props = {
  courseId: string;
  courseTitle: string;
  title: string;
  skillHref: string;
  minutes?: number;
  passMark: number;
  questions: Question[];
};

/**
 * A sit-down paper rather than a knowledge check: answers can be changed freely
 * until the learner submits, and nothing — right, wrong, or why — is shown until
 * then. After submitting, every question is opened up for review.
 */
export default function Exam({ courseId, courseTitle, title, skillHref, minutes, passMark, questions }: Props) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => setBest(getExamBest(courseId)), [courseId]);

  const answered = Object.keys(picked).length;
  const score = questions.filter((q, qi) => picked[qi] !== undefined && q.choices[picked[qi]].correct).length;
  const percent = Math.round((score / questions.length) * 100);
  const passed = percent >= passMark;

  const submit = () => {
    setSubmitted(true);
    setBest(saveExamScore(courseId, percent));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const retake = () => {
    setPicked({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="exam">
      {submitted ? (
        <section className={`exam__result${passed ? ' is-pass' : ' is-fail'}`} role="status">
          <p className="exam__score">{score} / {questions.length}</p>
          <p className="exam__percent">
            {percent}% · {passed ? 'Passed' : `Below the ${passMark}% pass mark`}
          </p>
          {best !== null && <p className="exam__best">Best on this device: {best}%</p>}
          <div className="exam__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => downloadExport(buildExport({ courseId, courseTitle, title, passMark, questions, picked }))}
            >
              Download results
            </button>
            <button type="button" className="btn" onClick={retake}>Retake the exam</button>
          </div>
          {score < questions.length && (
            <p className="exam__tutor">
              Missed some? Give the downloaded file to your coding agent along with the{' '}
              <a href={skillHref} download="SKILL.md">review-exam-results skill</a> and it will teach you what you got wrong.
            </p>
          )}
        </section>
      ) : (
        <p className="exam__status">
          {answered} of {questions.length} answered
          {minutes ? ` · suggested time ${minutes} minutes` : ''}
          {best !== null ? ` · best so far ${best}%` : ''}
        </p>
      )}

      <ol className="exam__list">
        {questions.map((q, qi) => {
          const choice = picked[qi];
          const has = choice !== undefined;
          const right = has && q.choices[choice].correct;

          return (
            <li className="quiz exam__q" key={qi} id={`q${qi + 1}`}>
              <p className="exam__meta">
                <span>Question {qi + 1}</span>
                {q.topic && <span className="exam__topic">{q.topic}</span>}
                {submitted && (
                  <span className={`exam__verdict ${right ? 'is-correct' : 'is-wrong'}`}>
                    {right ? 'Correct' : has ? 'Incorrect' : 'Unanswered'}
                  </span>
                )}
              </p>
              <p className="quiz__ask">{withInline(q.ask)}</p>

              <ul className="quiz__choices">
                {q.choices.map((c, ci) => {
                  const isPicked = choice === ci;
                  const state = !submitted ? '' : c.correct ? ' is-correct' : isPicked ? ' is-wrong' : '';
                  return (
                    <li key={ci}>
                      <button
                        type="button"
                        className={`quiz__choice${state}${isPicked ? ' is-picked' : ''}`}
                        aria-pressed={isPicked}
                        disabled={submitted}
                        onClick={() => setPicked((p) => ({ ...p, [qi]: ci }))}
                      >
                        <span className="quiz__mark" aria-hidden="true">
                          {submitted ? (c.correct ? '✓' : isPicked ? '✕' : '') : isPicked ? '●' : ''}
                        </span>
                        <span>{withInline(c.text)}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {submitted && has && q.choices[choice].explains && (
                <p className={`quiz__feedback${right ? ' is-correct' : ' is-wrong'}`}>
                  {withInline(q.choices[choice].explains!)}
                </p>
              )}

              {submitted && q.work && (
                <details className="quiz__work">
                  <summary>Show the work</summary>
                  <ol>
                    {q.work
                      .split('\n')
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li key={i}>{withInline(line)}</li>
                      ))}
                  </ol>
                </details>
              )}
            </li>
          );
        })}
      </ol>

      {!submitted && (
        <div className="exam__submit">
          <button type="button" className="btn btn--primary" onClick={submit} disabled={answered === 0}>
            Submit exam
          </button>
          {answered < questions.length && answered > 0 && (
            <p>{questions.length - answered} unanswered — these will be marked wrong.</p>
          )}
        </div>
      )}
    </div>
  );
}
