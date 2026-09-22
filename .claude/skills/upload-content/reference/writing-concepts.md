# Writing a concept

The schema is authoritative: `src/content.config.ts`. This file is the house style.

## Frontmatter

```yaml
---
course: applied-algorithm-analysis     # must match a file in src/content/courses/
section: w1-bigo                       # must match a section id declared by the course
order: 60                              # tens, so concepts can be inserted later
title: Big-O, Formally
visuals:
  - type: html
    src: /slides/applied-algorithm-analysis/week1.html?hash=true#/15
    caption: Slides 19–24 of 65 — the picture, the definition, and the two proof shapes.
    #        ^ the number the deck displays, not the #/15 used to link
notation:
  - symbol: "n₀"
    reads: n nought, or n zero
    means: >-
      A threshold you get to choose. The claim only has to hold for inputs bigger
      than this, so small awkward cases can be ignored.
questions:
  - ask: To prove `T(n) = O(f(n))`, what must you produce?
    choices:
      - text: Constants `c` and `n₀`, and a check that the inequality holds beyond `n₀`
        correct: true
        explains: >-
          That is the whole ritual: name the witnesses, then verify.
      - text: A proof that `T(n) ≤ f(n)` for all `n`
        explains: >-
          Far too strong — Big-O allows any constant multiple and ignores small `n`.
highlight: false                       # true only for concepts the user named as key
skipCheck: false                       # true only for summaries and section breaks
---
```

`visuals` accepts one visual or a list; omit it entirely for a prose-only concept.

**Captions cite the number the deck displays, not the `#/h` used to link.** Those differ
wherever the deck has vertical slides — `#/15` may be displayed as slide 19. Take the number
from `npm run content:extract`, which prints `deck slide N/total` beside each `[h/v]`, and
give a range covering the concept's whole span: `Slides 19–24 of 65 — …`.

## Highlighted concepts

A concept carries `highlight: true` only when the user named its topic when running the
skill. Never decide this yourself — it is a claim about what matters in *their* course.

A highlighted concept is written to the same standard as the rest, with more of it:

| | normal | highlighted |
| --- | --- | --- |
| body | ~400 words | ~600 words |
| granularity | merge related slides | one concept per distinct idea |
| questions | 1 | 2 — one recall, one application |
| worked examples | where they earn space | expected |

Spend the extra words on a worked example and on the misconception a learner actually has.
Do not spend them restating the idea in a third way — that makes a page longer without making
it clearer, and length is not what the badge is promising.

Cross-reference a highlighted concept from its neighbours ("this is the distinction that
makes X work"), so it is met more than once.

## The explanation

**Target ~400 words**, or ~600 for a highlighted concept. Long enough to build an idea from
nothing, short enough to read in three minutes. Only a workbook-style page earns more.

Build in this order:

1. **Open with something concrete and notation-free.** Write the sequence out by hand. Ask
   what time the box set finishes. Earn the formalism before introducing it.
2. **Name notation as you introduce it**, in the prose, and again in the notation key.
3. **State the formal version**, now decoded.
4. **End on the transferable point** — usually a blockquote. What should they still know in a
   year?

Rules of thumb:

- Prefer a table or list to a paragraph whenever the content allows.
- Derive rather than assert: *why* `2ⁿ` counts subsets, *why* one subtraction reduces a sum
  but not a product.
- Say the quiet part. If a claim depends on an assumption (counting words rather than bits),
  make the assumption the point rather than a footnote.
- Do not restate the same idea three ways. Say it once, well.
- Reproducing a table from the slide is fine when it is reference material — it is selectable
  text and works without the iframe.
- If a symbol is used before the concept that defines it, give a working reading in the
  notation key and say where the real definition arrives.

## The notation key

One entry per symbol the page uses that a newcomer might not know. Three fields:

- **`symbol`** — as it appears on the page.
- **`reads`** — how to say it out loud. *This is the field people skip and the one that
  matters most*: not knowing whether `Θ` is "theta" or "zero" blocks a student from asking a
  question in a lecture. Include the pronunciation for Greek letters.
- **`means`** — plain English, no jargon, ideally with a one-line example.

Explain the boring things too: that subscripts number and never multiply; that `≡` is
deliberately not `=`; that `⌈ ⌉` has its feet pointing up; that the `=` in `n² = Ω(n)` reads
as "is" and cannot be rearranged.

## The questions

Aim for one or two, three at most — and two for a highlighted concept, the second aimed at
*applying* the idea rather than recalling it. `skipCheck: true` for a summary or section
break, so `content:status` stops asking.

- Target the **misconception**, not recall. If the source's speaker notes flag something as
  hard, that is the question.
- **Every wrong answer needs an `explains` that says why it is wrong**, and ideally names the
  plausible reasoning that leads there. Wrong answers are the teaching surface — a learner
  who picks one should come away understanding the distinction.
- Wrong answers must be genuinely tempting. No filler.
- The `explains` on the correct answer should add something, not just say "correct".
- A question is answerable from the explanation above it. Never test unstated material.

## Editing an existing concept

To change prose without touching questions, split the file at the frontmatter fence, replace
only the body, and write it back — do not retype the questions. A short Python script in the
scratchpad is the reliable way; retyping risks silent edits to content that was already
reviewed.

## Voice

Same register as the surrounding site: direct, concrete, second person, no cheerleading, no
"simply" or "just". Explain to someone capable who has not met this before. Never label the
reader's level.
