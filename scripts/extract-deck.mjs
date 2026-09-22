#!/usr/bin/env node
/**
 * Pull the text out of a self-contained HTML slide deck.
 *
 *   npm run content:extract -- <deck.html> [--out slides.txt]
 *
 * Explanations have to be written from what the slide actually says, and a
 * reveal.js deck renders its maths through KaTeX — so the words are in the DOM
 * but not in any form `grep` can reach. This drives headless Chrome to read the
 * rendered page and print one block per slide, tagged with the `#/h/v` index
 * that `visuals.src` needs.
 *
 * Falls back to dumping the whole body for decks that are not reveal.js.
 * No dependencies: Node 22 ships a global WebSocket, which is all CDP needs.
 */
import { execFileSync, spawn } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
const outPath = outIndex >= 0 ? args[outIndex + 1] : undefined;
const deck = args.find((a) => !a.startsWith('--') && a !== outPath);

if (!deck) {
  console.error('Usage: npm run content:extract -- <deck.html> [--out slides.txt]');
  process.exit(1);
}
if (!existsSync(deck)) {
  console.error(`No such file: ${deck}`);
  process.exit(1);
}

const BROWSERS = ['google-chrome', 'chromium', 'chromium-browser', 'google-chrome-stable'];
const browser = BROWSERS.find((b) => {
  try {
    execFileSync('which', [b], { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
});
if (!browser) {
  console.error(`Need Chrome or Chromium on PATH (looked for: ${BROWSERS.join(', ')}).`);
  process.exit(1);
}

// A high random port, so concurrent runs and stray browsers don't collide.
const port = 9500 + Math.floor(Math.random() * 400);
const profile = mkdtempSync(join(tmpdir(), 'deck-extract-'));

const chrome = spawn(
  browser,
  [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--mute-audio',
    '--allow-file-access-from-files',
    `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
    'about:blank',
  ],
  { stdio: 'ignore', detached: false },
);
// Without this the live child keeps Node's event loop alive and the script
// never exits, even once the work is done.
chrome.unref();

const cleanup = () => {
  try { chrome.kill(); } catch { /* already gone */ }
  try { rmSync(profile, { recursive: true, force: true }); } catch { /* best effort */ }
};
process.on('exit', cleanup);
process.on('SIGINT', () => { cleanup(); process.exit(130); });

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/** Poll until the debugging endpoint answers, rather than sleeping blindly. */
async function endpoint() {
  for (let i = 0; i < 60; i += 1) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const targets = await res.json();
      const page = targets.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch { /* not up yet */ }
    await wait(250);
  }
  throw new Error('Chrome did not expose a debugging endpoint in time.');
}

const ws = new WebSocket(await endpoint());
let id = 0;
const pending = new Map();
ws.addEventListener('message', (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
});
await new Promise((r) => ws.addEventListener('open', r));

const send = (method, params = {}) =>
  new Promise((res) => {
    const i = (id += 1);
    pending.set(i, res);
    ws.send(JSON.stringify({ id: i, method, params }));
  });

const evaluate = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.text);
  return r.result?.result?.value;
};

await send('Page.enable');
await send('Page.navigate', { url: `file://${resolve(deck)}` });

// Wait for reveal to finish laying out, or give up and treat it as plain HTML.
let isReveal = false;
for (let i = 0; i < 40; i += 1) {
  await wait(250);
  isReveal = await evaluate(`typeof Reveal !== 'undefined' && Reveal.isReady()`);
  if (isReveal) break;
}
await wait(500);

const title = await evaluate('document.title');

/**
 * KaTeX renders every formula twice — once as MathML for screen readers, once
 * as styled HTML. Strip the MathML twin or every equation appears doubled.
 */
const CLEAN = `(() => {
  const clean = (el) => {
    const c = el.cloneNode(true);
    c.querySelectorAll('.katex-mathml, annotation').forEach((n) => n.remove());
    c.querySelectorAll('.katex-html').forEach((n) => n.replaceWith(' ' + n.textContent + ' '));
    return c.textContent.replace(/[ \\t]+/g, ' ').replace(/\\n{3,}/g, '\\n\\n').trim();
  };
  const out = [];
  const tops = document.querySelectorAll('.reveal > .slides > section');
  if (!tops.length) return JSON.stringify([{ h: 0, v: 0, text: clean(document.body) }]);
  // h/v addresses a slide for deep linking; display is the number the deck puts
  // on screen, counting vertical slides too. They diverge as soon as the deck has
  // any vertical stack, so both are reported.
  const all = Reveal.getSlides();
  const num = (el) => all.indexOf(el) + 1;
  tops.forEach((s, h) => {
    const kids = [...s.querySelectorAll(':scope > section')];
    if (kids.length) kids.forEach((k, v) => out.push({ h, v, display: num(k), text: clean(k) }));
    else out.push({ h, v: 0, display: num(s), text: clean(s) });
  });
  return JSON.stringify(out);
})()`;

const slides = JSON.parse(await evaluate(CLEAN));
ws.close();

const header = [
  `# ${title}`,
  `# ${deck}`,
  `# ${slides.length} slide${slides.length === 1 ? '' : 's'}${isReveal ? '' : ' (not a reveal.js deck — whole body dumped)'}`,
  isReveal ? '# Deep-link a concept with:  <deck-url>?hash=true#/h/v' : '',
  isReveal ? '# [h/v] addresses the slide; "deck slide N" is the number shown on screen.' : '',
  isReveal ? '# Cite the deck-slide number in captions — h and N differ wherever verticals exist.' : '',
  '',
].filter(Boolean).join('\n');

const body = slides
  .map((s) => {
    const at = s.display ? `[${s.h}/${s.v}]  deck slide ${s.display}/${slides.length}` : `[${s.h}/${s.v}]`;
    return `\n===== ${at} =====\n${s.text}`;
  })
  .join('\n');

if (outPath) {
  writeFileSync(outPath, header + body + '\n');
  console.log(`${slides.length} slides -> ${outPath}`);
} else {
  process.stdout.write(header + body + '\n');
}

cleanup();
process.exit(0);
