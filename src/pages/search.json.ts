import type { APIRoute } from 'astro';
import { getCourses, getSteps, conceptPath } from '../lib/course';

/**
 * The search index: one row per concept, served as static JSON and fetched by
 * the masthead search the first time it opens. Bodies are flattened to plain
 * text so matches and snippets read as the learner sees them.
 */
export type SearchEntry = {
  /** Concept title. */
  t: string;
  /** Course id and title. */
  c: string;
  ct: string;
  /** Section title, if any. */
  s?: string;
  /** Notation symbols and what they read as, space-joined. */
  n?: string;
  /** Explanation text. */
  b: string;
  /** Page URL. */
  u: string;
};

/** Markdown/MDX source → readable text. Lossy on purpose; it only feeds search. */
function toPlainText(source: string): string {
  return source
    .replace(/^\s*(import|export)\s.*$/gm, '')
    .replace(/```[^\n]*\n([\s\S]*?)```/g, '$1')
    .replace(/<\/?[A-Za-z][^>]*>/g, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^\s*#{1,6}\s+/gm, '')
    .replace(/^\s*\|?\s*:?-{3,}.*$/gm, '')
    .replace(/[|*_`>#]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const GET: APIRoute = async () => {
  const entries: SearchEntry[] = [];

  for (const course of await getCourses()) {
    const sections = new Map(course.data.sections.map((s) => [s.id, s.title]));
    for (const { concept, number } of await getSteps(course)) {
      const section = concept.data.section;
      const notation = concept.data.notation.map((n) => `${n.symbol} ${n.reads}`).join(' ');
      entries.push({
        t: concept.data.title,
        c: course.id,
        ct: course.data.title,
        ...(section && { s: sections.get(section) ?? section }),
        ...(notation && { n: notation }),
        b: toPlainText(concept.body ?? ''),
        u: conceptPath(course.id, number),
      });
    }
  }

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' },
  });
};
