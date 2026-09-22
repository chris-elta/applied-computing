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
