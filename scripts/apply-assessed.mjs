#!/usr/bin/env node
/**
 * Write `assessed` and `prerequisites` into concept frontmatter from a spec.
 *
 *   npm run assessed:apply -- <course-id> <spec.json> [--dry-run]
 *
 * spec.json is a list:
 *
 *   [{ "concept": "w2-14-chebyshev",
 *      "assessed": ["Quiz 2 · Q1"],
 *      "prerequisites": [{ "topic": "…", "explains": "…", "see": "data-science/w2-03-…" }] }]
 *
 * `assessed` is merged with what the file already has (union, order kept), so
 * a later quiz adds to an earlier one. `prerequisites` replaces the block when
 * given and leaves it alone when omitted. Only those two frontmatter fields are
 * touched: prose, notation and questions are never rewritten. Idempotent.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const [course, specPath, ...rest] = process.argv.slice(2);
const dry = rest.includes('--dry-run');
if (!course || !specPath) {
  console.error('Usage: npm run assessed:apply -- <course-id> <spec.json> [--dry-run]');
  process.exit(1);
}
const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const q = (s) => JSON.stringify(s); // JSON strings are valid YAML double-quoted scalars

/** Remove a top-level block: `key:` plus every indented / list line after it. */
const dropBlock = (fm, key) =>
  fm.replace(new RegExp(`^${key}:.*\\n(?:(?:[ \\t]+.*|-.*)\\n?)*`, 'm'), '');

let failed = false;
for (const entry of spec) {
  const file = resolve('src/content/concepts', course, `${entry.concept}.mdx`);
  if (!existsSync(file)) {
    console.error(`  ✗ ${entry.concept}: no such concept`);
    failed = true;
    continue;
  }
  const raw = readFileSync(file, 'utf8');
  const end = raw.indexOf('\n---', 3);
  let fm = raw.slice(4, end);
  const rest = raw.slice(end);

  const existing = [...(/^assessed:\n((?:  - .*\n?)+)/m.exec(fm)?.[1] ?? '').matchAll(/^  - "?(.*?)"?$/gm)].map((m) => m[1]);
  const assessed = [...new Set([...existing, ...(entry.assessed ?? [])])];

  fm = dropBlock(fm, 'assessed');
  if (entry.prerequisites) fm = dropBlock(fm, 'prerequisites');
  fm = fm.replace(/\n*$/, '\n');

  let add = '';
  if (assessed.length) add += `assessed:\n${assessed.map((a) => `  - ${q(a)}`).join('\n')}\n`;
  if (entry.prerequisites?.length) {
    add += 'prerequisites:\n';
    for (const p of entry.prerequisites) {
      add += `  - topic: ${q(p.topic)}\n    explains: ${q(p.explains)}\n`;
      if (p.see) add += `    see: ${q(p.see)}\n`;
    }
  }

  // Sit directly under `highlight:` when there is one, otherwise at the end.
  const hl = /^highlight:.*\n/m.exec(fm);
  fm = hl ? fm.slice(0, hl.index + hl[0].length) + add + fm.slice(hl.index + hl[0].length) : fm + add;

  if (!dry) writeFileSync(file, `---\n${fm.replace(/\n*$/, '')}${rest}`);
  console.log(`  ✓ ${entry.concept}  assessed×${assessed.length}  prereq×${entry.prerequisites?.length ?? 'kept'}`);
}
process.exit(failed ? 1 : 0);
