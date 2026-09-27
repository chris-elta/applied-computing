/**
 * Learner progress, kept in the browser only. There is no account system, so
 * this is deliberately best-effort: every access is guarded, and the UI must
 * render correctly when nothing comes back.
 */
const KEY = 'course-progress-v1';

export type CourseProgress = {
  /** 1-based concept numbers the learner has opened. */
  seen: number[];
  /** `${conceptNumber}:${questionIndex}` for questions answered correctly. */
  correct: string[];
};

type Store = Record<string, CourseProgress>;

const empty = (): CourseProgress => ({ seen: [], correct: [] });

function read(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Store) : {};
  } catch {
    return {};
  }
}

function write(store: Store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
    // Same-tab listeners; the native `storage` event only fires cross-tab.
    dispatchEvent(new CustomEvent('course:progress'));
  } catch {
    /* private mode, or storage disabled — progress simply isn't remembered */
  }
}

export function getCourseProgress(courseId: string): CourseProgress {
  return read()[courseId] ?? empty();
}

export function markSeen(courseId: string, conceptNumber: number) {
  const store = read();
  const course = store[courseId] ?? empty();
  if (course.seen.includes(conceptNumber)) return;
  store[courseId] = { ...course, seen: [...course.seen, conceptNumber] };
  write(store);
}

export function markCorrect(courseId: string, conceptNumber: number, questionIndex: number) {
  const store = read();
  const course = store[courseId] ?? empty();
  const id = `${conceptNumber}:${questionIndex}`;
  if (course.correct.includes(id)) return;
  store[courseId] = { ...course, correct: [...course.correct, id] };
  write(store);
}

export function resetCourse(courseId: string) {
  const store = read();
  delete store[courseId];
  write(store);
}

const EXAM_KEY = 'exam-best-v1';

function readExams(): Record<string, number> {
  try {
    const raw = localStorage.getItem(EXAM_KEY);
    return raw ? (JSON.parse(raw) as Record<string, number>) : {};
  } catch {
    return {};
  }
}

/** Best exam score for a course, as a percentage, or null if never sat here. */
export function getExamBest(courseId: string): number | null {
  return readExams()[courseId] ?? null;
}

/** Records a score and returns the best one so far. */
export function saveExamScore(courseId: string, percent: number): number {
  const scores = readExams();
  const best = Math.max(percent, scores[courseId] ?? 0);
  try {
    localStorage.setItem(EXAM_KEY, JSON.stringify({ ...scores, [courseId]: best }));
  } catch {
    /* progress simply isn't remembered */
  }
  return best;
}
