# Review notes (from Assignment 1)

Points found when re-checking Assignment 1 against DPV, *Algorithms*
(manuscript dated July 18, 2006). Assignment 1 was already submitted, so it
was left unchanged. Check every later assignment against this list before
submitting.

## Rigour

1. **The limit test is sufficient, not equivalent.** If lim f/g exists, it
   decides O/Ω/Θ. But f = Θ(g) can hold when the limit does not exist
   (e.g. f = n(2 + sin n), g = n). Write "in particular" or "sufficient
   condition", never "equivalently".
   *(A1: solutions.tex:123)*

2. **State the log base, and use DPV's convention: log means log₂** (p. 22).
   Changing the base only multiplies log n by a constant when the log sits
   in a polynomial factor. Inside an exponent it changes the growth rate:
   2^(log₂ n) = n but 2^(ln n) = n^0.693. Never claim "any fixed base" for
   expressions like (log n)^(log n) or 2^(log n).
   *(A1: solutions.tex:121, parts (j), (p))*

3. **Match the book's definition of O.** DPV (p. 15) defines f = O(g) as
   f(n) ≤ c·g(n) for all n, with no n₀, for positive functions. If you use an
   n₀ or "eventually" version, add one sentence connecting the two (for
   eventually positive functions they agree once c absorbs the finitely
   many small n).
   *(A1: solutions.tex:123)*

## Tightening

4. **Give witnesses for Ω/O claims.** Don't stop at "= Ω(n log n)". Give the
   constant and the threshold, e.g. for n ≥ 4, ⌊n/2⌋ ≥ n/4 and
   log n − 1 ≥ ½ log n, so log(n!) ≥ (1/8) n log n.
   *(A1: 1.4)*

5. **Avoid wording that seems to count a term twice.** "The term 1 is 1, and
   for each k ≥ 0 …" read as if i = 1 were counted twice.
   *(A1: 1.5)*

6. **Strict vs non-strict inequalities.** Only call `a < b` and `a ≤ b − 1`
   equivalent when both sides are integers, and say so, or state the
   version you actually prove.
   *(A1: 1.1)*

7. **Cross-check against the book where you can.** For example, the 1.3
   depth formula with d = 2 gives ⌊log₂ n⌋, which matches DPV p. 22. One
   sentence like this makes the answer more convincing.

## Citation

8. **Cite the version you actually used.** The PDF in this repo is the
   July 18, 2006 manuscript, not the 2008 McGraw-Hill printing. Exercise
   numbering can differ between versions.
