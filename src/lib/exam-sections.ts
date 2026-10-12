export type ExamSection = {
  /** The shared `topic`, or null for questions that have none. */
  title: string | null;
  /** Positions in the paper's question list, so numbering stays paper-wide. */
  indices: number[];
};

/**
 * Splits a paper into sections by `topic`, in order of first appearance.
 * Questions sharing a topic land in one section even if the file interleaves
 * them; questions with no topic form a section of their own.
 */
export function groupByTopic(questions: { topic?: string }[]): ExamSection[] {
  const sections: ExamSection[] = [];
  questions.forEach((q, i) => {
    const title = q.topic ?? null;
    const section = sections.find((s) => s.title === title);
    if (section) section.indices.push(i);
    else sections.push({ title, indices: [i] });
  });
  return sections;
}
