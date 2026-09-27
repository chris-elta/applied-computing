type Choice = { text: string; correct: boolean; explains?: string };
type Question = { ask: string; choices: Choice[]; work?: string; topic?: string };

/** Bump when the shape changes; the review-exam-results skill reads this. */
export const EXPORT_VERSION = 1;

/**
 * A self-contained record of one sitting. It carries the full question, every
 * option and the worked solution, so an agent can teach from it without access
 * to this site's source.
 */
export function buildExport(input: {
  courseId: string;
  courseTitle: string;
  title: string;
  passMark: number;
  questions: Question[];
  picked: Record<number, number>;
}) {
  const { questions, picked } = input;
  const results = questions.map((q, i) => {
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
  const percent = Math.round((correct / questions.length) * 100);
  return {
    format: 'applied-computing-exam-results',
    version: EXPORT_VERSION,
    course: { id: input.courseId, title: input.courseTitle },
    exam: { title: input.title },
    takenAt: new Date().toISOString(),
    score: { correct, total: questions.length, percent, passMark: input.passMark, passed: percent >= input.passMark },
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
