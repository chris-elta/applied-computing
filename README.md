# Applied Computing

A teaching site built from courses. A course is a sequence of **concepts**, and every
concept gets the same three things: the figure, an explanation of what it means, and a
question that checks it landed. Built with [Astro](https://astro.build) and rendered to
static HTML.

```sh
npm install
npm run dev              # http://localhost:4321
npm run build            # static site into dist/
npm run check            # type-check .astro/.ts/.tsx
npm run content:status   # what still needs an explanation or a check
npm run content:extract -- <deck.html>   # pull the text out of an HTML deck
```

Claude Code users: the `upload-content` skill in `.claude/skills/` drives the whole import
pipeline below, including the conventions for writing concepts.

## The model

**Course → concept.** There is deliberately no deck level. Uploaded slides are *source
material*, not structure: a concept is one idea, which might come from one slide, four
slides, or none at all. **Sections** group concepts within a course — they're labels
that shape the contents page, not another level of URL.

```
src/content/courses/<course-id>.md            title, summary, section order
src/content/concepts/<course-id>/*.mdx        frontmatter + explanation, one per concept
src/assets/slides/<course>/<section>/*.svg    vector artwork (inlined at build)
public/slides/<course>/...                    raster and standalone-HTML slides
src/components/animations/                    hand-built concept animations
```

A **course** file carries the title, the summary, and the order its sections appear in.
Catalogue identifiers are optional and deliberately kept out of the URL — the slug should
stay put across terms while the CRN changes:

```yaml
---
title: Applied Algorithm Analysis
code: COMP-9060-0
crn: "51909"
term: Winter 2026
order: 1
draft: true
summary: >-
  One or two sentences on what the course covers.
sections:
  - id: asymptotics
    title: Growth rates and bounds
---
```

Quote the `crn` — YAML would otherwise read it as a number and the schema will reject it.

A concept's **frontmatter** declares what to show; its **body** is the explanation the
learner reads. Order comes from the `order` field, not the filename, and gaps are fine —
leaving room (10, 20, 30) makes inserting a concept later painless.

```yaml
---
course: how-computers-run-code
section: memory
order: 30
title: Locality Is What Makes Cache Work
visuals:
  - type: animation
    component: CacheLocality
    caption: Eight sequential reads through a direct-mapped cache.
questions:
  - ask: Why is the read at address 1 a hit?
    choices:
      - text: The cache guessed
        explains: That's prefetching — not what happened here.
      - text: A miss loads a whole block
        correct: true
        explains: Exactly. Addresses 1–3 came along free with the block.
---

Prose goes here. Markdown and MDX both work.
```

### Explaining notation

Concepts may carry a `notation` list, rendered as a decoder panel above the prose:

```yaml
notation:
  - symbol: "n₀"
    reads: n nought, or n zero
    means: >-
      A threshold you get to choose. The claim only has to hold for inputs bigger
      than this, so small awkward cases can be ignored.
```

`reads` is not decoration — not knowing how to *say* a symbol out loud is its own barrier,
and it is the part textbooks leave out. Keeping this as frontmatter rather than prose means
every concept presents its symbols the same way, and a reader who knows the idea but not the
notation can take what they need and skip the rest. Backticks in `means` render as inline
code, as they do in question text.

`visuals` takes one visual or a list of them — an idea that took four slides in the
original deck is still one concept. Omit it entirely for a prose-only concept. Set
`skipCheck: true` on a summary or section break so `content:status` stops asking it for
a question.

Set `highlight: true` on a load-bearing concept and it gets a **key** badge on the contents
page plus a count in the course header. Use it sparingly — highlighting a third of a course
highlights nothing. The `upload-content` skill sets this for you when you name topics as you
invoke it, and gives those concepts a longer explanation and an extra check:

```sh
/upload-content ~/slides/week2.pdf --highlight "master theorem, recurrences"
```

Two more optional fields sit beside `highlight`:

- `assessed` — a list like `["Quiz 2 · Q1", "Lab 1 · Task 5"]`. Any entry gives the concept a
  green **assessed** badge, in the contents and on the page, with the sources as the reason. It
  is independent of `highlight`: that is the lecturer's emphasis, this is what was tested.
- `prerequisites` — background the concept needs but does not teach: `topic`, `explains`, and
  an optional `see` pointing at an earlier concept that covers it. Shown as a
  "Before you read this" panel above the notation key.

Both are written by the `mark-assessed` skill (`npm run assessed:extract`, `assessed:apply`),
which reads a course's `.content/<course>/quizzes` and `labs` folders and can be re-run as new
ones arrive.

### The four visual types

| `type` | Source | Use it for |
| --- | --- | --- |
| `animation` | A React component in `src/components/animations/` | Concepts worth showing in motion |
| `svg` | `src/assets/slides/…`, inlined | Imported PDF pages; crisp at any size |
| `image` | A URL under `public/` | Slides that don't survive vectorising |
| `html` | A URL under `public/`, shown in an isolated frame | Standalone HTML slides with their own CSS |

Schema lives in [`src/content.config.ts`](src/content.config.ts). It's enforced at build
time, so a typo in frontmatter fails the build rather than the page.

## Adding content to a course

### 1. Import the source material

```sh
npm run import:pdf -- ~/slides/architecture.pdf performance-engineering pipelines
#                     <pdf>                     <course-id>              <section-id>
```

Every page becomes artwork plus a concept stub. Three things make the stubs useful
rather than empty:

- **The page's title is read off the slide** — its first line is nearly always the
  title, so concepts arrive named rather than as "Slide 7".
- **The page's text is extracted and embedded** in an MDX comment in the stub, because
  `pdftocairo` draws text as glyph outlines. The words are in the file even though the
  artwork is a picture.
- **Order continues from what the course already has**, so importing a second deck into
  the same course appends rather than collides.

Add `--png` for decks whose fonts or effects don't vectorise cleanly, and `--dpi 300`
for sharper raster output. Requires poppler (`apt install poppler-utils` /
`brew install poppler`).

**Re-running is safe.** Artwork is refreshed; concept files you've written are never
overwritten.

### 1b. Or embed an HTML deck

A self-contained HTML deck (reveal.js and similar) is better embedded than converted —
it keeps its maths, animations and interactive widgets. Copy the file into
`public/slides/<course>/`, then point each concept at a slide inside it:

```yaml
visuals:
  - type: html
    src: /slides/applied-algorithm-analysis/week1.html?hash=true#/23
```

Two details make this work well:

- **`?hash=true`** turns on reveal's deep linking, so the fragment selects the slide
  (`#/23`, or `#/37/1` for a vertical). Reveal accepts any of its config options as query
  parameters, so `&controls=false` also works if you want the frame locked to one slide.
- **Keep the query string identical across concepts** and vary only the fragment. Fragments
  are not part of the cache key, so the whole course downloads the deck once, however many
  concepts embed it.

To pull the text out of a deck for writing explanations:

```sh
npm run content:extract -- public/slides/<course>/<name>.html --out slides.txt
```

It drives headless Chrome and prints one block per slide tagged `[h/v]`, so the index maps
straight onto `visuals.src`. This is necessary rather than convenient: KaTeX renders maths
into markup no plain-text tool can read, and a PDF-derived SVG has no text at all. Needs
Chrome or Chromium on `PATH`; decks that are not reveal.js fall back to a whole-body dump.

### 2. Write the explanations and checks

```sh
npm run content:status performance-engineering
```

This lists exactly which concepts still hold the importer's TODO and which have no
question yet, with file paths. Because each stub carries the slide's real text, the
explanation and quiz can be written from what the slide actually says — by hand, or by
asking Claude to work through the outstanding list.

Then clear `draft: true` from the course file when it's ready to publish. Draft courses
are visible in `astro dev` and excluded from `astro build`.

## Adding a concept animation

Animations are the reason this site exists rather than a PDF viewer. Each one is a React
component driven by [`StepFrame`](src/components/animations/StepFrame.tsx), which owns
the step index, playback, keyboard control, and the dots — so your component only has to
draw a single frame.

```tsx
import StepFrame from './StepFrame';

const steps = [{ caption: 'What just happened, in one sentence.' }, /* … */];

export default function MyAnimation() {
  return (
    <StepFrame steps={steps} autoPlayMs={2000}>
      {(step) => <svg viewBox="0 0 720 300">{/* draw frame `step` */}</svg>}
    </StepFrame>
  );
}
```

Register it in [`src/components/animations/index.ts`](src/components/animations/index.ts)
and any concept can name it. Registration is a dynamic `import()`, so each animation is
its own chunk — a course with thirty of them still ships one to the learner.

Two conventions worth keeping:

- **Use the shared figure classes** (`fig-box`, `fig-label`, `fig-sub`, `fig-wire`) from
  `stepframe.css` so every figure reads as part of the same course, in both themes.
- **Never start essential content at `opacity: 0` in a JS animation.** If hydration is
  slow or fails, it stays invisible. Use the `fig-pop` CSS class for entrances — it ends
  visible no matter what, and degrades correctly under reduced motion.

## What the learner gets

- **Deep links** — every concept is its own URL and its own static page.
- **Keyboard navigation** — ← and → move between concepts, and inside a focused figure
  they step the animation instead.
- **Remembered progress** — concepts covered and questions answered, in `localStorage`.
  There are no accounts, so it's per-browser and best-effort by design.
- **Light and dark themes**, following the system setting until they choose. Imported
  slides get their own light surface in both, since they're artwork drawn for paper.

## The demo courses

`how-computers-run-code` and `performance-engineering` are examples, written to exercise
every feature — all four visual types, sections, animations, and the import pipeline.
Delete them once your own content is in:

```sh
rm -rf src/content/courses/{how-computers-run-code,performance-engineering}.md \
       src/content/concepts/{how-computers-run-code,performance-engineering} \
       src/assets/slides/performance-engineering \
       public/slides/how-computers-run-code
```
