# Writing prerequisites

A prerequisite is something a learner **must already know for this concept to make sense, and
this concept does not teach**. It is not a summary of the concept and not a list of related
topics.

## What earns an entry

Ask of each candidate: *if the reader did not know this, would the concept fail to land?*

- A **term or method the concept assumes**: quartiles, the law of total probability, `ddof`,
  a p-value, replacement in sampling.
- **Mechanical skills** the assessment needs: rearranging an inequality, squaring a decimal,
  integrating as accumulating.
- **Data literacy** the lab leans on: what a row is, what a column holds, which unit a question
  is about.

Skip anything the concept already explains, anything the reader would reasonably know from
school, and anything merely "nice to know".

## Where the course already teaches it

If an earlier concept teaches the topic, put its id in `see` and keep `explains` to a few
sentences that say *what part matters here*. The link is the explanation; do not duplicate it.
If nothing teaches it, `explains` is the teaching — write it properly, and note the gap in your
report.

## Size

- **1–3 entries per concept.** Four means the concept should be split or the prerequisites are
  really content. Zero is fine; then set no `prerequisites` at all.
- **2–4 sentences each**, roughly 40–90 words. Longer than that is a concept, not a prerequisite.
- A **`topic`** is a noun phrase a learner could search for: "Quartiles and the five-number
  summary", not "Understanding spread".

## Voice

Same as the rest of the site (`upload-content/reference/writing-concepts.md`): direct, concrete,
second person where it helps, no "simply" or "just", never label the reader's level.

- Lead with the idea, then the one detail the assessment depends on.
- Name the trap if there is a common one (`np.var` divides by `n`, `pandas.var` by `n − 1`).
- Give a number where a number makes it real: `0.7² = 0.49`.
- Do not state quiz answers. Teach the method that gets there.
- Ground everything in what the material teaches. If a fact comes from outside the course
  (a NumPy default, a standard critical value), it must be correct; check it, don't guess.

## Use of evidence from the quizzes

If a results page shows a question was missed, that concept's prerequisites deserve the most
care — the learner's gap is probably there. Still write for anyone who will read the page, not
for one student.
