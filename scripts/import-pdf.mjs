#!/usr/bin/env node
/**
 * Import a PDF of slides as source material for a course.
 *
 *   npm run import:pdf -- <slides.pdf> <course-id> [section-id] [--png] [--dpi 200]
 *
 * Each page becomes artwork under src/assets/slides/<course>/<section>/ and a
 * concept stub under src/content/concepts/<course>/. The stub carries the page's
 * extracted text in an MDX comment, so the explanation and quiz can be written
 * from what the slide actually says rather than guessed from a picture.
 *
 * Vector output stays crisp at any size. Text is converted to glyph outlines
 * rather than kept as selectable text, which is why the text is extracted
 * separately. Pass --png for decks whose fonts or effects don't vectorise.
 *
 * Re-running is safe: existing concept files are never overwritten, and new
 * pages are appended after whatever order the course already uses.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const positional = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--dpi');
const dpiIndex = args.indexOf('--dpi');
const dpi = dpiIndex >= 0 ? args[dpiIndex + 1] : '200';

const [pdfPath, courseArg, sectionArg] = positional;

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

if (!pdfPath || !courseArg) {
  console.error('Usage: npm run import:pdf -- <slides.pdf> <course-id> [section-id] [--png] [--dpi 200]');
  process.exit(1);
}
if (!existsSync(pdfPath)) {
  console.error(`No such file: ${pdfPath}`);
  process.exit(1);
}

const courseId = slug(courseArg);
const sectionId = slug(sectionArg ?? basename(pdfPath, '.pdf'));
const raster = flags.has('--png');

const need = (cmd) => {
  try {
    execFileSync('which', [cmd], { stdio: 'pipe' });
  } catch {
    console.error(`Missing "${cmd}". Install poppler-utils (apt install poppler-utils, brew install poppler).`);
    process.exit(1);
  }
};
need('pdfinfo');
need('pdftotext');
need(raster ? 'pdftoppm' : 'pdftocairo');

const info = execFileSync('pdfinfo', [pdfPath], { encoding: 'utf8' });
const pages = Number(/^Pages:\s+(\d+)$/m.exec(info)?.[1] ?? 0);
if (!pages) {
  console.error('Could not read a page count from the PDF.');
  process.exit(1);
}

const artworkDir = resolve(raster ? 'public/slides' : 'src/assets/slides', courseId, sectionId);
const conceptDir = resolve('src/content/concepts', courseId);
mkdirSync(artworkDir, { recursive: true });
mkdirSync(conceptDir, { recursive: true });

/** Continue after whatever order this course already uses, so imports stack. */
const existingFiles = existsSync(conceptDir) ? readdirSync(conceptDir) : [];
let nextOrder = 0;
for (const file of existingFiles) {
  const order = Number(/^order:\s*(-?\d+)$/m.exec(readFileSync(resolve(conceptDir, file), 'utf8'))?.[1]);
  if (Number.isFinite(order)) nextOrder = Math.max(nextOrder, order);
}

const pad = (n) => String(n).padStart(2, '0');

/** The text poppler can pull off a page, tidied into lines. */
const textOf = (page) =>
  execFileSync('pdftotext', ['-f', String(page), '-l', String(page), '-layout', pdfPath, '-'], {
    encoding: 'utf8',
  })
    .split('\n')
    .map((l) => l.trimEnd())
    .filter((l, i, all) => l.trim() || (i > 0 && all[i - 1].trim()))
    .join('\n')
    .trim();

/** A slide's first line is nearly always its title. */
const titleOf = (text, page) => {
  const first = text.split('\n').find((l) => l.trim());
  if (!first) return `Page ${page}`;
  const cleaned = first.trim().replace(/\s+/g, ' ');
  return cleaned.length > 80 ? `${cleaned.slice(0, 77)}…` : cleaned;
};

let created = 0;
let skipped = 0;

for (let page = 1; page <= pages; page += 1) {
  const stem = pad(page);
  const conceptFile = `${sectionId}-${stem}.mdx`;

  if (raster) {
    execFileSync('pdftoppm', ['-png', '-r', dpi, '-f', String(page), '-l', String(page),
      '-singlefile', pdfPath, resolve(artworkDir, stem)]);
  } else {
    execFileSync('pdftocairo', ['-svg', '-f', String(page), '-l', String(page),
      pdfPath, resolve(artworkDir, `${stem}.svg`)]);
  }

  // Artwork is refreshed on every run; prose written by hand is not touched.
  if (existingFiles.includes(conceptFile)) {
    skipped += 1;
    continue;
  }

  const text = textOf(page);
  const visual = raster
    ? `  - type: image\n    src: /slides/${courseId}/${sectionId}/${stem}.png\n    alt: TODO describe this slide for screen readers`
    : `  - type: svg\n    src: ${courseId}/${sectionId}/${stem}.svg`;

  nextOrder += 10;

  writeFileSync(
    resolve(conceptDir, conceptFile),
    `---
course: ${courseId}
section: ${sectionId}
order: ${nextOrder}
title: ${JSON.stringify(titleOf(text, page))}
visuals:
${visual}
questions: []
---

{/* SOURCE TEXT — page ${page} of ${basename(pdfPath)}. Kept here so the explanation
    can be written from what the slide says. Delete this block once written.

${(text || '(no extractable text on this page)').replace(/\*\//g, '* /')}
*/}

TODO: explain this concept — what it means and why it matters. The slide shows;
this is what the learner actually reads.
`,
  );
  created += 1;
}

const courseFile = resolve('src/content/courses', `${courseId}.md`);
if (!existsSync(courseFile)) {
  mkdirSync(resolve('src/content/courses'), { recursive: true });
  writeFileSync(
    courseFile,
    `---
title: ${JSON.stringify(courseArg.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase()))}
summary: TODO one or two sentences on what this course covers.
order: 100
draft: true
sections:
  - id: ${sectionId}
    title: ${JSON.stringify(sectionId.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase()))}
---
`,
  );
  console.log(`Created course  src/content/courses/${courseId}.md  (marked draft)`);
} else if (!readFileSync(courseFile, 'utf8').includes(`id: ${sectionId}`)) {
  console.log(`\nAdd this section to src/content/courses/${courseId}.md to control where it sits:\n`);
  console.log(`  - id: ${sectionId}`);
  console.log(`    title: ${sectionId.replace(/-/g, ' ')}\n`);
}

console.log(`Imported ${pages} page${pages === 1 ? '' : 's'} as ${raster ? 'PNG' : 'SVG'} -> ${artworkDir}`);
console.log(`Wrote ${created} new concept${created === 1 ? '' : 's'} -> ${conceptDir}`);
if (skipped) console.log(`Left ${skipped} existing concept${skipped === 1 ? '' : 's'} untouched (artwork still refreshed).`);
console.log(`\nNext: npm run content:status ${courseId}`);
