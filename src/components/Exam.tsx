import { Fragment, useEffect, useState, type ReactNode } from 'react';
import { getExamBest, saveExamScore } from '../lib/progress';
import { buildExport, downloadExport } from '../lib/exam-export';
import { groupByTopic } from '../lib/exam-sections';
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
 * then. The paper is divided into sections by topic, and each can be submitted
 * on its own: that section is marked and opened up for review while the rest
 * stay live. The paper's score counts once every section is in.
 */
export default function Exam({ courseId, courseTitle, title, skillHref, minutes, passMark, questions }: Props) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  /** Indices of the sections submitted so far. */
  const [done, setDone] = useState<number[]>([]);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => setBest(getExamBest(courseId)), [courseId]);

  const sections = groupByTopic(questions);
  const sectioned = sections.length > 1;
  const isRight = (qi: number) => picked[qi] !== undefined && questions[qi].choices[picked[qi]].correct;
  const countRight = (indices: number[]) => indices.filter(isRight).length;
  const countAnswered = (indices: number[]) => indices.filter((qi) => picked[qi] !== undefined).length;

  const marked = sections.flatMap((s, si) => (done.includes(si) ? s.indices : []));
  const complete = done.length === sections.length;
  const answered = Object.keys(picked).length;
  const score = countRight(marked);
  const percent = marked.length ? Math.round((score / marked.length) * 100) : 0;
  const passed = percent >= passMark;
  const open = questions.length - marked.length;
  const openUnanswered = open - (answered - countAnswered(marked));

  const submit = (which: number[]) => {
    const next = [...new Set([...done, ...which])];
    setDone(next);
    if (next.length === sections.length) {
      const right = countRight(questions.map((_, i) => i));
      setBest(saveExamScore(courseId, Math.round((right / questions.length) * 100)));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (which.length === 1) {
      document.getElementById(`s${which[0] + 1}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clear = (indices: number[]) =>
    setPicked((p) => Object.fromEntries(Object.entries(p).filter(([qi]) => !indices.includes(Number(qi)))));

  const retakeSection = (si: number) => {
    clear(sections[si].indices);
    setDone((d) => d.filter((x) => x !== si));
    document.getElementById(`s${si + 1}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  const retake = () => {
    setPicked({});
    setDone([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="exam">
      {done.length > 0 ? (
        <section className={`exam__result${!complete ? '' : passed ? ' is-pass' : ' is-fail'}`} role="status">
          <p className="exam__score">{score} / {marked.length}</p>
          <p className="exam__percent">
            {complete
              ? `${percent}% · ${passed ? 'Passed' : `Below the ${passMark}% pass mark`}`
              : `${percent}% so far · ${done.length} of ${sections.length} sections submitted`}
          </p>
          {best !== null && <p className="exam__best">Best on this device: {best}%</p>}
          <div className="exam__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() =>
                downloadExport(buildExport({ courseId, courseTitle, title, passMark, questions, picked, included: marked }))
              }
            >
              Download results
            </button>
            <button type="button" className="btn" onClick={retake}>Retake the exam</button>
          </div>
          {score < marked.length && (
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

      {sectioned && (
        <nav className="exam__nav" aria-label="Sections">
          <ol>
            {sections.map((s, si) => {
              const isDone = done.includes(si);
              return (
                <li key={si}>
                  <a href={`#s${si + 1}`}>{s.title ?? 'Other questions'}</a>
                  <span className={isDone ? 'is-done' : ''}>
                    {isDone
                      ? `${countRight(s.indices)} / ${s.indices.length}`
                      : `${countAnswered(s.indices)} of ${s.indices.length} answered`}
                  </span>
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      {sections.map((s, si) => {
        const submitted = done.includes(si);
        const sectionAnswered = countAnswered(s.indices);
        const sectionRight = countRight(s.indices);

        return (
          <section className="exam__section" key={si} id={`s${si + 1}`}>
            {sectioned && (
              <header className="exam__sectionhead">
                <h2>{s.title ?? 'Other questions'}</h2>
                <p>
                  {submitted
                    ? `${sectionRight} / ${s.indices.length} · ${Math.round((sectionRight / s.indices.length) * 100)}%`
                    : `${s.indices.length} questions · ${sectionAnswered} answered`}
                </p>
              </header>
            )}

            <ol className="exam__list">
              {s.indices.map((qi) => {
                const q = questions[qi];
                const choice = picked[qi];
                const has = choice !== undefined;
                const right = isRight(qi);

                return (
                  <li className="quiz exam__q" key={qi} id={`q${qi + 1}`}>
                    <p className="exam__meta">
                      <span>Question {qi + 1}</span>
                      {!sectioned && q.topic && <span className="exam__topic">{q.topic}</span>}
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

            {submitted ? (
              sectioned && (
                <div className="exam__submit">
                  <button type="button" className="btn" onClick={() => retakeSection(si)}>Retake this section</button>
                </div>
              )
            ) : (
              <div className="exam__submit">
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => submit([si])}
                  disabled={sectionAnswered === 0}
                >
                  {sectioned ? 'Submit this section' : 'Submit exam'}
                </button>
                {sectionAnswered < s.indices.length && sectionAnswered > 0 && (
                  <p>{s.indices.length - sectionAnswered} unanswered — these will be marked wrong.</p>
                )}
              </div>
            )}
          </section>
        );
      })}

      {sectioned && !complete && (
        <div className="exam__submit exam__submit--all">
          <button
            type="button"
            className="btn"
            onClick={() => submit(sections.map((_, si) => si))}
            disabled={answered === 0}
          >
            {done.length ? 'Submit the remaining sections' : 'Submit the whole exam'}
          </button>
          {openUnanswered > 0 && answered > 0 && (
            <p>{openUnanswered} unanswered — these will be marked wrong.</p>
          )}
        </div>
      )}
    </div>
  );
}
