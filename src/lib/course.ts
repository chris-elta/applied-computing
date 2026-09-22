import { getCollection, type CollectionEntry } from 'astro:content';

export type Course = CollectionEntry<'courses'>;
export type Concept = CollectionEntry<'concepts'>;

const isPublished = (course: Course) => import.meta.env.DEV || !course.data.draft;

/** All courses, in display order. Drafts are visible in `astro dev` only. */
export async function getCourses(): Promise<Course[]> {
  const courses = await getCollection('courses', isPublished);
  return courses.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
}

/**
 * Concepts in teaching order: by section first, then by `order` within it.
 *
 * Ungrouped concepts lead, since they're usually the course's opening material.
 * Sections the course declares follow in the order declared, and any section a
 * concept names but the course never declared is appended after those, ordered
 * by where it first appears.
 */
export async function getConcepts(course: Course): Promise<Concept[]> {
  const all = await getCollection('concepts', ({ data }) => data.course.id === course.id);
  const declared = course.data.sections.map((s) => s.id);

  const undeclared: string[] = [];
  for (const concept of [...all].sort((a, b) => a.data.order - b.data.order)) {
    const section = concept.data.section;
    if (section && !declared.includes(section) && !undeclared.includes(section)) {
      undeclared.push(section);
    }
  }

  const rank = (concept: Concept) => {
    const section = concept.data.section;
    if (!section) return -1;
    const i = declared.indexOf(section);
    return i >= 0 ? i : declared.length + undeclared.indexOf(section);
  };

  return all.sort((a, b) => rank(a) - rank(b) || a.data.order - b.data.order);
}

/**
 * Concept position as the learner sees it: 1-based across the whole course,
 * with neighbours resolved so pages don't each re-derive them.
 */
export type Step = {
  concept: Concept;
  course: Course;
  number: number;
  total: number;
  prev: Concept | undefined;
  next: Concept | undefined;
};

export async function getSteps(course: Course): Promise<Step[]> {
  const concepts = await getConcepts(course);
  return concepts.map((concept, i) => ({
    concept,
    course,
    number: i + 1,
    total: concepts.length,
    prev: concepts[i - 1],
    next: concepts[i + 1],
  }));
}

export type Section = {
  id: string | undefined;
  title: string | undefined;
  summary: string | undefined;
  steps: Step[];
};

/** The course's concepts grouped for the contents page, in the same order. */
export function groupIntoSections(course: Course, steps: Step[]): Section[] {
  const declared = new Map(course.data.sections.map((s) => [s.id, s]));
  const sections: Section[] = [];

  for (const step of steps) {
    const id = step.concept.data.section;
    const last = sections.at(-1);
    if (last && last.id === id) {
      last.steps.push(step);
      continue;
    }
    sections.push({
      id,
      title: id ? (declared.get(id)?.title ?? id) : undefined,
      summary: id ? declared.get(id)?.summary : undefined,
      steps: [step],
    });
  }

  return sections;
}

export const coursePath = (courseId: string) => `/courses/${courseId}`;
export const conceptPath = (courseId: string, number: number) => `/courses/${courseId}/${number}`;
