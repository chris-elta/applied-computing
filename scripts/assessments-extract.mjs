#!/usr/bin/env node
/**
 * Read a course's quizzes and labs, and list the concepts they could map to.
 *
 *   npm run assessed:extract -- <course-id> [--dir .content/<folder>] [--out dir]
 *
 * Looks under a source folder for `quizzes/` and `labs/` (also `assignments/`,
 * `exams/`), turns every file into plain text, and prints it with a header per
 * file. Then prints the course's concept index — number, id, title, and what is
 * already marked — so the mapping can be made without opening 40 files.
 *
 * Each source is tagged `new` or `mapped`. A source counts as mapped when some
 * concept's `assessed` entry starts with its label ("Quiz 2", "Lab 1"), taken
 * from the file or folder name. Re-run after dropping new files in and only the
 * `new` ones need attention.
 *
 * PDF via `pdftotext`, notebooks read as markdown + code cells (outputs
 * dropped), md/txt/py as-is. Anything else is listed but not read.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { basename, extname, join, relative, resolve } from 'node:path';

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const course = args.find((a, i) => !a.startsWith('--') && !args[i - 1]?.startsWith('--'));
if (!course) {
  console.error('Usage: npm run assessed:extract -- <course-id> [--dir <source-folder>] [--out <dir>]');
  process.exit(1);
}

const CONCEPTS = resolve('src/content/concepts', course);
if (!existsSync(CONCEPTS)) {
  console.error(`No concepts for "${course}" under src/content/concepts/.`);
  process.exit(1);
}

// The source folder is named after the offering (data-science-COMP-9170-0), not
// the course id, so accept an explicit --dir and otherwise look for a prefix match.
const root = resolve('.content');
const dir = flag('--dir')
  ? resolve(flag('--dir'))
  : existsSync(root)
    ? readdirSync(root).map((d) => join(root, d)).find((d) => basename(d).startsWith(course) && statSync(d).isDirectory())
    : undefined;
if (!dir || !existsSync(dir)) {
  console.error(`No source folder for "${course}" under .content/. Pass --dir <folder>.`);
  process.exit(1);
}

const out = flag('--out');
if (out) mkdirSync(out, { recursive: true });

const KINDS = ['quizzes', 'labs', 'assignments', 'exams'];
const SKIP = new Set(['.csv', '.tsv', '.json', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.zip', '.parquet', '.xlsx']);

const walk = (d) =>
  readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)],
  );

const toText = (file) => {
  const ext = extname(file).toLowerCase();
  if (ext === '.pdf') return execFileSync('pdftotext', ['-layout', file, '-'], { encoding: 'utf8' });
  if (ext === '.ipynb') {
    const nb = JSON.parse(readFileSync(file, 'utf8'));
    return nb.cells
      .map((c) => {
        const src = Array.isArray(c.source) ? c.source.join('') : c.source;
        return c.cell_type === 'markdown' ? src : `[code]\n${src}`;
      })
      .join('\n\n');
  }
  if (['.md', '.txt', '.py', '.r', '.sql'].includes(ext)) return readFileSync(file, 'utf8');
  return undefined;
};

/** "quiz2.pdf" → "Quiz 2", "labs/lab1/README.md" → "Lab 1". */
const labelFor = (file) => {
  const rel = relative(dir, file);
  const m = /(quiz|lab|assignment|exam|midterm|test)[\s_-]*(\d+)/i.exec(rel);
  return m ? `${m[1][0].toUpperCase()}${m[1].slice(1).toLowerCase()} ${m[2]}` : undefined;
};

// Existing markings, read back from the frontmatter the apply script writes.
const concepts = readdirSync(CONCEPTS)
  .filter((f) => f.endsWith('.mdx'))
  .sort()
  .map((f) => {
    const raw = readFileSync(join(CONCEPTS, f), 'utf8');
    const fm = raw.slice(4, raw.indexOf('\n---', 3));
    const block = /^assessed:\n((?:  - .*\n?)+)/m.exec(fm)?.[1] ?? '';
    return {
      id: f.replace(/\.mdx$/, ''),
      title: /^title:\s*(.*)$/m.exec(fm)?.[1].replace(/^["']|["']$/g, '') ?? f,
      assessed: [...block.matchAll(/^  - "?(.*?)"?$/gm)].map((m) => m[1]),
      prereqs: (fm.match(/^\s+- topic:/gm) ?? []).length,
      key: /^highlight:\s*true$/m.test(fm),
    };
  });
const mappedLabels = new Set(concepts.flatMap((c) => c.assessed.map((a) => a.split(/\s*[·:]\s*/)[0])));

const sources = KINDS.flatMap((k) => (existsSync(join(dir, k)) ? walk(join(dir, k)) : []))
  .filter((f) => !SKIP.has(extname(f).toLowerCase()))
  .sort();

console.log(`Source folder: ${relative(process.cwd(), dir)}\n`);
console.log('=== SOURCES ===');
for (const f of sources) {
  const label = labelFor(f);
  const status = label ? (mappedLabels.has(label) ? 'mapped' : 'NEW') : 'unlabelled';
  console.log(`  ${status.padEnd(10)} ${label ?? '—'.padEnd(6)}  ${relative(dir, f)}`);
}

for (const f of sources) {
  const text = toText(f);
  console.log(`\n\n=================== ${relative(dir, f)} ===================`);
  if (text === undefined) {
    console.log('(not read — unsupported type; export to PDF or paste the text)');
    continue;
  }
  // Web-print PDFs carry the browser's header/footer and a URL on every page.
  const cleaned = text.replace(/^.*(learn\.|https?:\/\/).*$/gm, '').replace(/\n{3,}/g, '\n\n').trim();
  if (out) writeFileSync(join(out, `${relative(dir, f).replace(/[\\/]/g, '__')}.txt`), cleaned);
  console.log(cleaned);
}

console.log('\n\n=== CONCEPTS ===');
console.log('  #    id                                         key  prereq  assessed');
concepts.forEach((c, i) => {
  console.log(
    `  ${String(i + 1).padStart(2)}   ${c.id.padEnd(42)} ${c.key ? ' ★ ' : '   '}  ${String(c.prereqs || '').padStart(3)}     ${c.assessed.join('; ')}`,
  );
});
