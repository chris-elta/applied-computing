import { Fragment, useEffect, useState, type ReactNode } from 'react';
import { buildWrittenExport, downloadWrittenExport } from '../lib/exam-export';
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

const lines = (text: string) => text.split('\n').filter((line) => line.trim());

type Question = { ask: string; answer: string; rubric: string[]; topic?: string };

type Props = {
  courseId: string;
  /** Keys saved progress, so two papers in one course don't share it. Defaults to the course id. */
  examId?: string;
  courseTitle: string;
  title: string;
  skillHref: string;
  questions: Question[];
};

type Saved = { drafts: Record<number, string>; ticks: Record<number, number[]> };

const KEY = 'exam-written-v1';

/** Drafts survive a reload, so an hour of writing isn't lost to a stray refresh. */
function load(examId: string): Saved | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw)[examId] ?? null) : null;
  } catch {
    return null;
  }
}

function save(examId: string, saved: Saved) {
  try {
    const all = JSON.parse(localStorage.getItem(KEY) ?? '{}');
    localStorage.setItem(KEY, JSON.stringify({ ...all, [examId]: saved }));
  } catch {
    /* drafts simply aren't remembered */
  }
}

/**
 * The short-answer part of a paper. Free text can't be marked automatically, so
 * each question is self-marked: the learner writes an answer, checks it, which
 * locks it and reveals the model answer, then ticks each rubric point they made.
 */
export default function Written({ courseId, examId = courseId, courseTitle, title, skillHref, questions }: Props) {
  const [drafts, setDrafts] = useState<Record<number, string>>({});
  /** Ticked rubric points by question. A question is checked once it has an entry. */
  const [ticks, setTicks] = useState<Record<number, number[]>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = load(examId);
    if (saved) {
      setDrafts(saved.drafts);
      setTicks(saved.ticks);
    }
    setLoaded(true);
  }, [examId]);

  useEffect(() => {
    if (loaded) save(examId, { drafts, ticks });
  }, [loaded, examId, drafts, ticks]);

  const sections = groupByTopic(questions);
  const sectioned = sections.length > 1;
  const isChecked = (qi: number) => ticks[qi] !== undefined;
  const marksFor = (indices: number[]) =>
    indices.reduce(
      (m, qi) => (isChecked(qi) ? { earned: m.earned + ticks[qi].length, total: m.total + questions[qi].rubric.length } : m),
      { earned: 0, total: 0 },
    );

  const checked = questions.filter((_, qi) => isChecked(qi)).length;
  const marks = marksFor(questions.map((_, qi) => qi));

  const check = (qi: number) => setTicks((t) => ({ ...t, [qi]: [] }));
  const toggle = (qi: number, pi: number) =>
    setTicks((t) => ({ ...t, [qi]: t[qi].includes(pi) ? t[qi].filter((x) => x !== pi) : [...t[qi], pi] }));
  const retry = (qi: number) => {
    setTicks(({ [qi]: _, ...rest }) => rest);
    setDrafts(({ [qi]: _, ...rest }) => rest);
  };

  return (
    <div className="exam written">
      <div className="written__status">
        <p className="exam__status">
          {checked} of {questions.length} checked
          {marks.total > 0 && ` · self-marked ${marks.earned} / ${marks.total} marks (${Math.round((marks.earned / marks.total) * 100)}%)`}
        </p>
        {checked > 0 && (
          <button
            type="button"
            className="btn"
            onClick={() => downloadWrittenExport(buildWrittenExport({ courseId, courseTitle, title, questions, drafts, ticks }))}
          >
            Download answers
          </button>
        )}
      </div>
      {checked > 0 && marks.earned < marks.total && (
        <p className="exam__tutor written__tutor">
          Give the downloaded file to your coding agent with the{' '}
          <a href={skillHref} download="SKILL.md">review-exam-results skill</a> to go over the points you missed.
        </p>
      )}

      {sections.map((s, si) => {
        const m = marksFor(s.indices);
        return (
          <section className="exam__section" key={si} id={`w${si + 1}`}>
            {sectioned && (
              <header className="exam__sectionhead">
                <h3>{s.title ?? 'Other questions'}</h3>
                <p>{m.total ? `${m.earned} / ${m.total} marks` : `${s.indices.length} questions`}</p>
              </header>
            )}

            <ol className="exam__list">
              {s.indices.map((qi) => {
                const q = questions[qi];
                const done = isChecked(qi);
                const got = ticks[qi] ?? [];
                return (
                  <li className="quiz exam__q" key={qi} id={`wq${qi + 1}`}>
                    <p className="exam__meta">
                      <span>Question {qi + 1} · {q.rubric.length} marks</span>
                      {done && (
                        <span className={`exam__verdict ${got.length === q.rubric.length ? 'is-correct' : 'is-wrong'}`}>
                          {got.length} / {q.rubric.length}
                        </span>
                      )}
                    </p>
                    {lines(q.ask).map((line, i) => (
                      <p className="quiz__ask" key={i}>{withInline(line)}</p>
                    ))}

                    <textarea
                      className="written__answer"
                      aria-label={`Your answer to question ${qi + 1}`}
                      rows={6}
                      value={drafts[qi] ?? ''}
                      readOnly={done}
                      placeholder="Write your answer as you would on paper: show the steps, then state the result."
                      onChange={(e) => setDrafts((d) => ({ ...d, [qi]: e.target.value }))}
                    />

                    {!done ? (
                      <div className="exam__submit written__actions">
                        <button type="button" className="btn btn--primary" onClick={() => check(qi)}>
                          Check against the model answer
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="written__model">
                          <p className="written__label">Model answer</p>
                          <ol>
                            {lines(q.answer).map((line, i) => (
                              <li key={i}>{withInline(line)}</li>
                            ))}
                          </ol>
                        </div>
                        <fieldset className="written__rubric">
                          <legend className="written__label">Tick each point your answer made</legend>
                          {q.rubric.map((point, pi) => (
                            <label key={pi}>
                              <input type="checkbox" checked={got.includes(pi)} onChange={() => toggle(qi, pi)} />
                              <span>{withInline(point)}</span>
                            </label>
                          ))}
                        </fieldset>
                        <div className="exam__submit written__actions">
                          <button type="button" className="btn" onClick={() => retry(qi)}>Clear and try again</button>
                        </div>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
