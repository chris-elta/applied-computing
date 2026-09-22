import { useEffect, useState } from 'react';
import { getCourseProgress, resetCourse } from '../lib/progress';
import './course-progress.css';

type Props = {
  courseId: string;
  total: number;
  /** Show the reset control. Only worth it on the course page. */
  resettable?: boolean;
};

/**
 * Renders nothing until it has read localStorage, so the server-rendered HTML
 * and the first client paint agree and nothing flashes a wrong number.
 */
export default function CourseProgress({ courseId, total, resettable = false }: Props) {
  const [seen, setSeen] = useState<number | null>(null);

  useEffect(() => {
    const sync = () => setSeen(getCourseProgress(courseId).seen.length);
    sync();
    addEventListener('course:progress', sync);
    addEventListener('storage', sync);
    return () => {
      removeEventListener('course:progress', sync);
      removeEventListener('storage', sync);
    };
  }, [courseId]);

  if (seen === null) return <div className="courseprog courseprog--placeholder" aria-hidden="true" />;

  const done = Math.min(seen, total);
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="courseprog">
      <div className="courseprog__track">
        <div className="courseprog__fill" style={{ width: `${percent}%` }} />
      </div>
      <p className="courseprog__label">
        {done === 0
          ? `${total} concepts`
          : done >= total
            ? `All ${total} concepts covered`
            : `${done} of ${total} concepts covered`}
        {resettable && done > 0 && (
          <>
            {' · '}
            <button type="button" className="courseprog__reset" onClick={() => resetCourse(courseId)}>
              reset
            </button>
          </>
        )}
      </p>
    </div>
  );
}
