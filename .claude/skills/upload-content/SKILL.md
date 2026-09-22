---
name: upload-content
description: Turn source material into concepts in a course on this site — a PDF of slides, a self-contained HTML/reveal.js deck, a zip of either, or images. Use whenever someone supplies lecture slides or a deck and wants it imported, uploaded, added to a course, or turned into concepts, explanations and quizzes; also for adding a new week to an existing course. Accepts topics to highlight, so named ideas get deeper treatment and a key-concept badge.
---

# Uploading content

Source slides are **material, not structure**. The site's unit is a *concept* — one idea,
which might come from one slide, four slides, or none — carrying its own explanation,
notation key and knowledge check. Your job is to get the material in, then build teaching
structure on top of it.

Content model, in full: `README.md`. Frontmatter schema: `src/content.config.ts`.

## 0 · Read the arguments

Anything passed when the skill is invoked shapes everything below, so parse it first.

Expect a **source** — a file path, several paths, or a directory — and optionally **topics to
highlight**. Accept any phrasing rather than demanding a flag:

```
/upload-content ~/slides/week2.pdf
/upload-content ~/slides/week2.pdf --highlight "master theorem, recurrences"
/upload-content week2.html focus on divide and conquer
```

If no source is given, ask for one. If no topics are given, highlight nothing — that is the
normal case, not an omission to chase.

### What highlighting changes

A highlighted topic is one the user considers load-bearing: exam-critical, or the thing the
week is really about. For each concept a named topic maps to:

- set `highlight: true` in its frontmatter — this badges it on the contents page and the
  concept itself;
- **split rather than merge.** Where you would normally fold three slides into one concept,
  give a highlighted topic its own concept per distinct idea;
- write a **longer explanation** — around 600 words rather than 400 — spending the extra room
  on worked examples and on the misconception, not on restatement;
- add a **second knowledge check**, aimed at applying the idea rather than recalling it;
- **cross-reference it** from neighbouring concepts, so a learner meets it more than once.

Everything else in the course is written normally. Highlighting works by contrast, so if the
user names enough topics to cover most of the deck, say so and ask them to narrow it —
highlighting a third of a course highlights nothing.

### Mapping topics to concepts

A named topic may not line up with one concept. Resolve it against the source, and report the
mapping in the plan at step 4:

- topic covers several slides that become several concepts → highlight each of them;
- topic is one part of a larger concept → split that concept so the topic stands alone;
- **topic does not appear in the source at all** → say so plainly and do not invent it. Ask
  whether they meant a different deck, or want it written from outside the material.

## 1 · Identify the source

| source | what to do |
| --- | --- |
| `.pdf` | `npm run import:pdf` — converts pages to vector SVG and scaffolds concept stubs |
| `.html` (reveal.js or standalone) | copy into `public/slides/<course>/` and deep-link — **do not** convert |
| `.zip` | `unzip` into the scratchpad first, then treat by inner type |
| `.pptx`, `.key` | ask the user to export to PDF; there is no direct path |
| loose images | copy to `public/slides/<course>/`, reference as `type: image`, and write real `alt` text |

**Prefer embedding an HTML deck over rasterising it.** Decks carry live maths (KaTeX),
animations and interactive widgets that a screenshot destroys.

Check the target course exists in `src/content/courses/`. If not, create it (see the README's
course frontmatter block) and set `draft: true` until it has content.

## 2 · Get the material in

### PDF

```sh
npm run import:pdf -- <slides.pdf> <course-id> <section-id>
```

Writes SVG artwork plus one concept stub per page, reading each slide's title off its first
line and embedding the page's extracted text in an MDX comment. Ordering continues from what
the course already has, and **existing concept files are never overwritten** — re-running
after you have written prose is safe.

Add `--png` if fonts or effects do not vectorise cleanly.

### HTML deck

```sh
cp <deck.html> public/slides/<course-id>/<name>.html
```

Then point each concept at a slide inside it:

```yaml
visuals:
  - type: html
    src: /slides/<course-id>/<name>.html?hash=true#/23
```

`?hash=true` turns on reveal's deep linking — no edit to the deck needed, since reveal accepts
any config option as a query parameter. Use `#/h` for a horizontal slide and `#/h/v` for a
vertical one.

**Keep the query string byte-identical across every concept and vary only the fragment.**
Fragments are not part of the HTTP cache key, so the whole course then downloads the deck once
instead of once per concept. These files are large — often ~1 MB of embedded fonts.

## 3 · Read the source before writing a word

```sh
npm run content:extract -- <deck.html> --out <scratchpad>/slides.txt
```

Prints one block per slide, tagged `[h/v]` so the index maps straight to `visuals.src`. Read
all of it before planning. Explanations must be grounded in what the slides actually say —
never invent content the lecturer did not teach.

For PDFs the importer has already embedded each page's text in the stub, so read the stubs.

Decks often carry **speaker notes** in the extracted text ("Ask the room…", "Walk this
slowly"). They tell you what the lecturer thought was hard — use them to aim the explanation
and the quiz, but never copy them into learner-facing prose.

## 4 · Plan the concepts

Group by **idea**, not by slide. Typical ratio is 2–4 slides per concept.

- Merge slides that make one argument — a definition, its picture and its proof are one
  concept.
- Split a slide that carries two genuinely separate ideas.
- Drop housekeeping, section dividers and reference slides; fold practice links (LeetCode and
  similar) into the prose of the concept they belong to.
- Mirror the lecturer's own module structure with `sections`, prefixed by week (`w1-bigo`) so
  later weeks slot in.
- `order` in tens (10, 20, 30) so a concept can be inserted later.

Say the plan back to the user before writing eighteen files. If topics were named for
highlighting, show which concepts they landed on — that mapping is the part most worth
checking, because it is where a misread of the request becomes eighteen files of wrong
emphasis.

## 5 · Write each concept

Read `reference/writing-concepts.md` before the first one. It carries the frontmatter shape,
the house style for explanations, the notation-key rules and the quiz rules.

To edit an existing concept's prose without disturbing its questions, splice rather than
rewrite the whole file.

## 6 · Verify

```sh
npx astro check          # schema + types; catches every frontmatter mistake
npm run build            # must succeed
npm run content:status <course-id>   # nothing outstanding
```

Then look at it. Start the dev server in background mode per `CLAUDE.md`
(`astro dev --background`), and check at least one concept page:

- the embedded slide lands on the **right** slide,
- any highlighted concepts carry the `key` badge, and nothing else does,
- the notation panel shows no stray `` ` `` or `*` characters,
- tables and quizzes render,
- dark mode is legible.

## Traps

These have all bitten before.

**YAML — a quoted scalar cannot be followed by more text.** `text: "−7", since it is small`
is a parse error. Quote the whole value, or use a `>-` block.

**Numeric answers.** `text: 10` parses as a number. The schema coerces it, but quote it
anyway: `text: "10"`.

**Frontmatter is data, not MDX.** In `questions`, `notation` and a course's section
`summary`, only `` `code` ``, `**strong**` and `*em*` are rendered (by
`src/lib/inline-code.ts`). Links, tables and headings will appear as literal punctuation.

**MDX bodies treat `{` as an expression.** Wrap anything containing braces — `{0, 1, …, N−1}`,
`max{f, g}` — in backticks or a code block.

**A deck's `#/h` index is not the slide number it displays.** `h` counts *horizontal*
positions from 0; the number on screen counts every slide including verticals, from 1. They
agree until the deck's first vertical stack and drift apart after it — in week 1, `#/15` is
displayed as slide 19. Deep-link with `h/v`, but **cite the displayed number in captions**,
or readers cannot find the slide you mean. `npm run content:extract` prints both.

**Imported PDF text is not selectable.** `pdftocairo` draws glyphs as outlines, which is why
the text is extracted separately. Do not promise users searchable slides.

**HTML decks paint their own background;** SVG and PNG imports do not. `ConceptStage` already
handles this — do not add a background to an `html` visual.

**Draft courses are excluded from `npm run build`** and visible only in `astro dev`. Clear
`draft: true` when the course is ready.

**If React islands silently stop hydrating in dev** (`_jsxDEV is not a function`), the Vite
cache is stale: `rm -rf node_modules/.vite`. Production builds are unaffected.
