#!/usr/bin/env node
/**
 * What still needs writing.
 *
 *   npm run content:status            every course
 *   npm run content:status <course>   just one
 *
 * A concept counts as needing an explanation while its body still holds the
 * importer's TODO or its extracted SOURCE TEXT block, and as needing a check
 * while it has no questions. Prints the exact file paths so the next step —
 * writing those explanations and quizzes — can start straight away.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';

const only = process.argv[2];

const COURSES = resolve('src/content/courses');
const CONCEPTS = resolve('src/content/concepts');

/** Enough YAML for a status report: scalars at the top level of frontmatter. */
const frontmatter = (raw) => {
  const end = raw.indexOf('\n---', 3);
  return raw.startsWith('---') && end > 0 ? raw.slice(4, end) : '';
};
const body = (raw) => {
  const end = raw.indexOf('\n---', 3);
  return end > 0 ? raw.slice(end + 4) : raw;
};
const field = (fm, name) => {
  const m = new RegExp(`^${name}:\\s*(.*)$`, 'm').exec(fm);
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : undefined;
};

const countQuestions = (fm) => {
  const m = /^questions:\s*(.*)$/m.exec(fm);
  if (!m) return 0;
  if (m[1].trim() === '[]') return 0;
  return (fm.slice(m.index).match(/^\s+-\s+ask:/gm) ?? []).length;
};

if (!existsSync(COURSES)) {
  console.error('No src/content/courses directory yet.');
  process.exit(1);
}

const courseIds = readdirSync(COURSES)
  .filter((f) => f.endsWith('.md'))
  .map((f) => basename(f, '.md'))
  .filter((id) => !only || id === only);

if (courseIds.length === 0) {
  console.error(only ? `No course "${only}".` : 'No courses yet.');
  process.exit(1);
}

let totalNeedsProse = 0;
let totalNeedsQuiz = 0;

for (const courseId of courseIds) {
  const courseFm = frontmatter(readFileSync(join(COURSES, `${courseId}.md`), 'utf8'));
  const dir = join(CONCEPTS, courseId);
  const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.mdx')) : [];

  const concepts = files
    .map((file) => {
      const raw = readFileSync(join(dir, file), 'utf8');
      const fm = frontmatter(raw);
      const text = body(raw);
      return {
        file: `src/content/concepts/${courseId}/${file}`,
        title: field(fm, 'title') ?? file,
        section: field(fm, 'section') ?? '—',
        order: Number(field(fm, 'order') ?? 0),
        needsProse: text.includes('TODO:') || text.includes('SOURCE TEXT'),
        questions: countQuestions(fm),
        skipCheck: /^skipCheck:\s*true$/m.test(fm),
      };
    })
    .sort((a, b) => a.order - b.order);

  const needsProse = concepts.filter((c) => c.needsProse);
  const needsQuiz = concepts.filter((c) => c.questions === 0 && !c.skipCheck);
  totalNeedsProse += needsProse.length;
  totalNeedsQuiz += needsQuiz.length;

  const draft = /^draft:\s*true$/m.test(courseFm) ? '  [draft]' : '';
  const code = field(courseFm, 'code');
  console.log(`\n${field(courseFm, 'title') ?? courseId}${code ? `  (${code})` : ''}${draft}`);
  if ((field(courseFm, 'summary') ?? '').includes('TODO') || /^\s+TODO/m.test(courseFm)) {
    console.log(`  Course summary is still a placeholder: src/content/courses/${courseId}.md`);
  }
  const checked = concepts.filter((c) => c.questions > 0).length;
  const exempt = concepts.filter((c) => c.skipCheck).length;
  console.log(`  ${concepts.length} concepts · ${concepts.length - needsProse.length} explained · ${checked} with checks${exempt ? ` · ${exempt} exempt` : ''}`);

  if (needsProse.length) {
    console.log(`\n  Needs an explanation (${needsProse.length}):`);
    for (const c of needsProse) console.log(`    ${c.section.padEnd(14)} ${c.title}\n      ${c.file}`);
  }
  if (needsQuiz.length) {
    console.log(`\n  Needs a knowledge check (${needsQuiz.length}):`);
    for (const c of needsQuiz) console.log(`    ${c.section.padEnd(14)} ${c.title}`);
  }
  if (!needsProse.length && !needsQuiz.length && concepts.length) {
    console.log('  Nothing outstanding.');
  }
}

console.log(
  totalNeedsProse || totalNeedsQuiz
    ? `\n${totalNeedsProse} explanation${totalNeedsProse === 1 ? '' : 's'} and ${totalNeedsQuiz} check${totalNeedsQuiz === 1 ? '' : 's'} outstanding.`
    : '\nAll concepts have explanations and checks.',
);
