---
name: mark-assessed
description: Mark which concepts in a course have been tested by its quizzes, labs, assignments or exams, and add a prerequisites section to each. Use whenever someone supplies quiz/lab/assignment material for a course, says something was covered in a quiz or lab, or asks to "highlight what was assessed", "add prerequisites", or bring a course up to date after new assessments. Also for re-running on a course when a new quiz or lab has arrived. Independent of the `highlight` (key concept) flag.
---

# Marking assessed concepts

Two things happen to a concept that a quiz or lab has tested:

- an **assessed** badge, with the reason ("Quiz 2 · Q1", "Lab 1 · Task 5");
- a **prerequisites** panel, above the notation key, covering background the concept needs
  and does not itself teach.

`assessed` is separate from `highlight`. `highlight` is the lecturer's emphasis and is only ever
set on the user's say-so (see `upload-content`). `assessed` is a fact about what was tested, so
you may set it yourself — but never touch `highlight`, and never change prose, notation or
questions. Both fields live in frontmatter; schema in `src/content.config.ts`.

This skill is **re-runnable**. New assessments arrive all term; each run adds to what is there.

## 0 · Read the arguments

Expect a **course id** (`data-science`). Optionally a source folder if it is not under
`.content/<course-id>*/`. If no course is given and only one has a matching `.content/` folder,
use it; otherwise ask.

Source layout is `quizzes/`, `labs/` (also `assignments/`, `exams/`), each holding PDFs,
notebooks, READMEs or text.

## 1 · Extract

```sh
npm run assessed:extract -- <course-id> [--dir <folder>] [--out <scratchpad>/assessments]
```

Prints the text of every assessment, then the course's concept index with what is already marked.
The **SOURCES** list at the top tags each file `NEW` or `mapped`, by whether some concept's
`assessed` entry starts with its label ("Quiz 2", "Lab 1"). **Work only on `NEW` sources** unless
asked to redo one; the rest are done.

Supported: PDF, `.ipynb`, `.md`, `.txt`. A `.docx`/`.pptx` is listed but not read — convert with
`libreoffice --headless --convert-to pdf`, or ask. Data files (CSV etc.) are skipped.

A quiz PDF may be a **results page**: it can show which answers the student got wrong. Use that
to prioritise prerequisites for the missed concepts, but mark assessed by what was *asked*, not
by what was missed. Never copy question text or answer keys into learner-facing prose.

## 2 · Map each item to a concept

Take every quiz question and every lab task (or graded requirement) and find the concept that
teaches it. Read the concept if the title is not enough — the concept list is the map, the
prose is the ground truth.

- One question may map to several concepts; one concept accumulates several sources.
- **Label each entry `<Source> · <item>`** — `Quiz 2 · Q3`, `Lab 1 · Task 4`. The prefix before
  ` · ` must match the file's label, since that is how the next run recognises a source as done.
  Follow the numbering the source uses.
- Map to the concept that *teaches the idea*, not one that merely uses the word.
- **If nothing teaches it, say so.** Do not invent a concept and do not mark a neighbour that
  only sounds similar. Report the gap in the final message (list the item and what is missing)
  and, where a related concept exists, cover the missing background in *its* prerequisites.
  Offer to write a new concept via `upload-content`.

Say the mapping back briefly — a table of `item → concept` plus gaps — before writing. If more
than about a third of a course comes out assessed, that is still fine (it is a fact, not an
emphasis), but mention it.

## 3 · Write the prerequisites

Read `reference/prerequisites.md` first: what counts, how long, how to word it.

## 4 · Apply

Write a spec to the scratchpad and apply it. Never hand-edit these frontmatter blocks in bulk —
the script leaves everything else in the file untouched and is idempotent.

```json
[
  {
    "concept": "w2-14-chebyshev",
    "assessed": ["Quiz 2 · Q1"],
    "prerequisites": [
      { "topic": "Mean and standard deviation",
        "explains": "The bound is stated in units of `σ` …",
        "see": "data-science/w2-09-standard-deviation" }
    ]
  }
]
```

```sh
npm run assessed:apply -- <course-id> <spec.json> --dry-run   # check
npm run assessed:apply -- <course-id> <spec.json>
```

- `assessed` is **merged** with existing entries. Repeat runs never lose earlier quizzes.
- `prerequisites`, when present, **replaces** that concept's whole list — so on a re-run, include
  the earlier prerequisites you want to keep, or omit the key to leave them alone. Read the
  concept's current list first (it is in the frontmatter).
- `see` is `<course-id>/<concept-file-without-extension>`, and must point at an **earlier**
  concept. Omit it when the course does not teach the topic.

## 5 · Verify

```sh
npx astro check     # frontmatter and `see` references are validated here
npm run build
npm run assessed:extract -- <course-id> | head -20     # the new sources should now read "mapped"
```

Then look at one assessed page (`astro dev --background`, see `CLAUDE.md`, or `astro preview`):
the green **assessed** badge beside any **key concept** badge, the panel above the notation key,
the "Covered in" link landing on the right concept, and the contents page tagging the same
concepts. Check dark mode.

## Traps

- **Frontmatter is data, not MDX.** In `explains`, only `` `code` ``, `**strong**` and `*em*`
  render; no links or lists. The apply script quotes strings for you.
- **`see` must exist**, or `astro check` and the build fail. A typo is caught, not silent.
- **Label prefix drift.** `Quiz2 · Q1` and `Quiz 2 · Q1` are different prefixes to the
  `mapped` check. Use the label the extractor prints.
- **Don't re-mark a source under a second label** — it will read as new and get duplicated.
- **Don't promise the quiz answer.** The panel teaches the background; it must not read as an
  answer key for a quiz a student may still take.
