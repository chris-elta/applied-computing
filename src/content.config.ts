import { defineCollection, reference } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

/**
 * How a concept's visual is produced. A concept may have several — an idea that
 * took four slides in the original deck is still one concept here.
 */
const visual = z.discriminatedUnion('type', [
  // A hand-built React component from src/components/animations. The good stuff.
  z.object({
    type: z.literal('animation'),
    component: z.string(),
    caption: z.string().optional(),
    // Default shows it in the stage at the top; 'after-notation' moves it below the notation key.
    placement: z.enum(['top', 'after-notation']).default('top'),
  }),
  // Vector slide, typically produced by `npm run import:pdf`. Stays crisp at
  // any size and stays small. Note that pdftocairo converts text to glyph
  // outlines, so the words are drawn, not selectable.
  z.object({
    type: z.literal('svg'),
    src: z.string(),
    caption: z.string().optional(),
  }),
  // Raster fallback for source slides that don't survive vectorising.
  z.object({
    type: z.literal('image'),
    src: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
  }),
  // A standalone HTML slide, rendered in an isolated frame so its CSS can't
  // leak into the surrounding site.
  z.object({
    type: z.literal('html'),
    src: z.string(),
    caption: z.string().optional(),
  }),
]);

/**
 * `visuals` accepts one visual or a list of them, and always reads back as a
 * list. Omitting it entirely gives a prose-only concept.
 */
const visuals = z.preprocess(
  (v) => (v === undefined || v === null ? [] : Array.isArray(v) ? v : [v]),
  z.array(visual),
);

const choice = z.object({
  /**
   * Accepts a number too, because a numeric answer ("10", "5×") is a normal
   * thing to write and YAML would otherwise parse it as a number and fail
   * validation. Normalised to a string either way.
   */
  text: z.union([z.string(), z.number().transform(String)]),
  correct: z.boolean().default(false),
  /** Shown after answering — say *why*, this is the teaching moment. */
  explains: z.string().optional(),
});

const question = z.object({
  ask: z.string(),
  choices: z.array(choice).min(2),
  /**
   * The worked solution, one step per line (use a `|-` block). Shown behind a
   * "Show the work" toggle once the question is answered: substitute the numbers,
   * do the arithmetic, then say why each wrong option fails. Inline `code`,
   * **strong** and *em* only.
   */
  work: z.string().optional(),
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /**
     * Catalogue identifiers, kept out of the URL on purpose: the slug should
     * stay put across terms while these change. All optional — a course that
     * isn't run by an institution simply omits them.
     */
    code: z.string().optional(),
    /** Registration reference for the specific offering (CRN, section number). */
    crn: z.string().optional(),
    /** e.g. "Winter 2026". */
    term: z.string().optional(),
    /** Ordering on the home page. */
    order: z.number().default(0),
    draft: z.boolean().default(false),
    /**
     * Optional grouping for the course's concepts. Sections are labels, not
     * routes — they shape the contents page without deepening the URL. Declaring
     * them here fixes their order; any section a concept names but this list
     * omits is appended after the declared ones.
     */
    sections: z
      .array(
        z.object({
          id: z.string(),
          title: z.string(),
          summary: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

const concepts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/concepts' }),
  schema: z.object({
    course: reference('courses'),
    /** Position within the course. Gaps are fine; only relative order matters. */
    order: z.number(),
    /** Which of the course's sections this belongs to. Omit for ungrouped. */
    section: z.string().optional(),
    title: z.string(),
    visuals,
    /**
     * Symbols used on this page, decoded. Kept as data rather than prose so
     * every concept presents them the same way, and so a reader who has met
     * the idea but not the notation can skip straight to what they need.
     * `reads` matters as much as `means`: not knowing how to say a symbol out
     * loud is its own barrier.
     */
    notation: z
      .array(
        z.object({
          symbol: z.string(),
          reads: z.string(),
          means: z.string(),
        }),
      )
      .default([]),
    questions: z.array(question).default([]),
    /**
     * Flags a concept as load-bearing — the ones a learner short of time should
     * read first. Set sparingly: highlighting a third of a course highlights
     * nothing. Surfaced as a badge on the contents page and the concept itself.
     */
    highlight: z.boolean().default(false),
    /**
     * Where the course has already tested this concept — "Quiz 2 · Q1", "Lab 1 ·
     * Task 5". A second, independent highlight from `highlight`: that one is the
     * lecturer's emphasis, this one is what the assessments actually asked. Any
     * entry marks the concept assessed; the strings are shown to the learner as
     * the reason. Maintained by the `mark-assessed` skill.
     */
    assessed: z.array(z.string()).default([]),
    /**
     * Background a learner needs before this concept lands, that the concept
     * itself does not teach. Written for assessed concepts. `see` points at an
     * earlier concept that already covers the topic, so the panel can link there
     * rather than re-explain; leave it off when the course never teaches it.
     */
    prerequisites: z
      .array(
        z.object({
          topic: z.string(),
          /** Two to four sentences. Inline `code`, **strong** and *em* only. */
          explains: z.string(),
          see: reference('concepts').optional(),
        }),
      )
      .default([]),
    /**
     * Mark a concept as deliberately having no knowledge check — a section
     * break or a summary. Without this there is no way to tell "no question
     * yet" from "no question wanted", and `content:status` would nag forever.
     */
    skipCheck: z.boolean().default(false),
  }),
});

export const collections = { courses, concepts };
