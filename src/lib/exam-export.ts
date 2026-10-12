type Choice = { text: string; correct: boolean; explains?: string };
type Question = { ask: string; choices: Choice[]; work?: string; topic?: string };

/** Bump when the shape changes; the review-exam-results skill reads this. */
export const EXPORT_VERSION = 2;

/**
 * A self-contained record of one sitting. It carries the full question, every
 * option and the worked solution, so an agent can teach from it without access
 * to this site's source.
 *
 * A sitting may cover only some of the paper's sections: `included` lists the
 * questions that were submitted, and only those are exported and scored.
 */
export function buildExport(input: {
  courseId: string;
  courseTitle: string;
  title: string;
  passMark: number;
  questions: Question[];
  picked: Record<number, number>;
  /** Indices of the submitted questions. Omit for the whole paper. */
  included?: number[];
}) {
  const { questions, picked } = input;
  const included = input.included ?? questions.map((_, i) => i);
  const results = included.map((i) => {
    const q = questions[i];
    const chosen = picked[i];
    const answered = chosen !== undefined;
    const correctIndex = q.choices.findIndex((c) => c.correct);
    return {
      number: i + 1,
      topic: q.topic ?? null,
      question: q.ask,
      status: !answered ? 'unanswered' : q.choices[chosen].correct ? 'correct' : 'incorrect',
      options: q.choices.map((c, ci) => ({
        text: c.text,
        chosen: ci === chosen,
        correct: c.correct,
        // Why this option is right or wrong.
        explanation: c.explains ?? null,
      })),
      chosenAnswer: answered ? q.choices[chosen].text : null,
      correctAnswer: q.choices[correctIndex]?.text ?? null,
      workedSolution: q.work ? q.work.split('\n').filter((l) => l.trim()) : [],
    };
  });
  const correct = results.filter((r) => r.status === 'correct').length;
  const percent = results.length ? Math.round((correct / results.length) * 100) : 0;
  return {
    format: 'applied-computing-exam-results',
    version: EXPORT_VERSION,
    course: { id: input.courseId, title: input.courseTitle },
    exam: {
      title: input.title,
      // False when only some sections were submitted; the score then covers just those.
      complete: results.length === questions.length,
      sections: [...new Set(results.map((r) => r.topic).filter((t) => t !== null))],
    },
    takenAt: new Date().toISOString(),
    score: { correct, total: results.length, percent, passMark: input.passMark, passed: percent >= input.passMark },
    results,
  };
}

export function downloadExport(data: ReturnType<typeof buildExport>) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data.course.id}-exam-results-${data.takenAt.slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
