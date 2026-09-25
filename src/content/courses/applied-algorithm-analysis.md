---
title: Applied Algorithm Analysis
code: COMP-9060-0
crn: "51909"
order: 1
summary: >-
  How to tell algorithms apart before you write them. Asymptotic notation, the growth-rate
  ladder, and what arithmetic actually costs once you count the bits rather than the values.
sections:
  - id: w1-bigo
    title: Week 1 · Big-O notation review
    summary: >-
      Three algorithms for one problem, and the language that tells them apart.
  - id: w1-review
    title: Week 1 · Where we landed
  - id: w2-size
    title: Week 2 · Input size is bits, not value
    summary: >-
      The one question underneath everything that follows: what is `n`, when the input is a
      number?
  - id: w2-arithmetic
    title: Week 2 · Addition, multiplication, modular arithmetic
    summary: >-
      What each operation costs once the price is counted in digits — and why three
      multiplication methods that look nothing alike cost exactly the same.
  - id: w2-algorithms
    title: Week 2 · Fast exponentiation and Euclid
    summary: >-
      Two algorithms priced the same way: rounds × cost per round.
  - id: w2-review
    title: Week 2 · Where we landed
  - id: w3-paradigm
    title: Week 3 · Divide and conquer
    summary: >-
      Three steps, and the trade that the whole week turns on: buy a cheaper operation with
      extra cheap ones.
  - id: w3-karatsuba
    title: Week 3 · Integer multiplication (Karatsuba)
    summary: >-
      Beating the `O(n²)` that multiplication has cost since week 2 — by losing a
      subproblem, not by shrinking them.
  - id: w3-recurrences
    title: Week 3 · Recurrence relations
    summary: >-
      One formula that solves every recursion tree of that shape, and the three places the
      cost can sit.
  - id: w3-mergesort
    title: Week 3 · Mergesort
    summary: The canonical divide-and-conquer algorithm, and where its comparisons go.
  - id: w3-review
    title: Week 3 · Where we landed
---
