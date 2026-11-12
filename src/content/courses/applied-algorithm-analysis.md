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
  - id: w4-medians
    title: Week 4 · Medians
    summary: The number in the middle, and why you would want it.
  - id: w4-selection
    title: Week 4 · The selection problem
    summary: >-
      A random pivot, a coin-flip lemma, and a divide-and-conquer algorithm that recurses
      into one side instead of two.
  - id: w4-matrix
    title: Week 4 · Matrix multiplication
    summary: Seven products where eight were expected, and the exponent moves.
  - id: w4-convolution
    title: Week 4 · Convolution and polynomials
    summary: >-
      A polynomial written two ways — coefficients or values — and why multiplying is
      quadratic in one and linear in the other.
  - id: w4-algorithm
    title: Week 4 · The fast Fourier transform
    summary: >-
      Splitting the coefficients by parity, and why evaluating at the roots of unity halves
      into itself.
  - id: w4-review
    title: Week 4 · Where we landed
  - id: w5-recipe
    title: Week 5 · The dynamic programming recipe
    summary: >-
      Three steps that turn a problem into a table: say what a cell means, say how it follows
      from smaller cells, then fill it in an order that works.
  - id: w5-directions
    title: Week 5 · Tabulation and memoization
    summary: One recurrence, evaluated in two opposite directions.
  - id: w5-overlap
    title: Week 5 · DP against divide and conquer
    summary: The difference is one word — overlap.
  - id: w5-dags
    title: Week 5 · Shortest paths in dags
    summary: >-
      The problem that shows what every dynamic program is underneath: subproblems as
      nodes, dependencies as edges, and an order that points every edge the same way.
  - id: w5-lis
    title: Week 5 · Longest increasing subsequence
    summary: >-
      A state that has to say where the subsequence ends, an `O(n log n)` shortcut that
      keeps only the smallest tails, and how to get the subsequence back out of either.
  - id: w5-edit
    title: Week 5 · Edit distance
    summary: >-
      A two-dimensional table over pairs of prefixes, and a walk back through it that
      recovers the alignment.
  - id: w5-review
    title: Week 5 · Where we landed
  - id: w6-knapsack
    title: Week 6 · The knapsack problem
    summary: >-
      Subproblems indexed by a capacity. One index when items can be reused, two when they
      cannot, and a running time that only looks polynomial.
  - id: w6-chain
    title: Week 6 · Chain matrix multiplication
    summary: >-
      Subproblems indexed by a stretch of the chain, and the first table that cannot be
      filled left to right.
  - id: w6-trees
    title: Week 6 · Independent sets in trees
    summary: >-
      Subproblems indexed by a subtree: a problem that is hard on general graphs and takes
      linear time on a tree.
  - id: w6-review
    title: Week 6 · Where we landed
  - id: w7-greedy
    title: Week 7 · Greedy algorithms
    summary: >-
      Take the best thing you can see right now and never look back — and why that needs a
      proof before you trust it.
  - id: w7-mst
    title: Week 7 · Minimum spanning trees
    summary: >-
      Connecting every vertex as cheaply as possible, and why the cheapest connected network
      is always a tree.
  - id: w7-prim
    title: Week 7 · Prim's algorithm
    summary: >-
      One tree grown outward from a start vertex, and the indexed heap that brings it from
      `O(mn)` down to `O((n + m) log n)`.
  - id: w7-kruskal
    title: Week 7 · Kruskal's algorithm and union-find
    summary: >-
      Every edge in sorted order, skipping any that closes a cycle — and a structure that
      answers "already connected?" without searching.
  - id: w7-cut
    title: Week 7 · Why greedy wins here
    summary: >-
      The cut property: the cheapest edge across any division of the vertices is safe to take.
  - id: w7-compare
    title: Week 7 · Prim versus Kruskal
    summary: Two greedy rules, one answer, and where they differ on the way there.
  - id: w7-review
    title: Week 7 · Where we landed
  - id: w9-graphs
    title: Week 9 · Graphs and how to store them
    summary: >-
      Two lists, things and pairs of things, and two layouts for them whose costs differ by
      more than a constant: `n²` cells against about `n + m`.
  - id: w9-search
    title: Week 9 · Reachability and the generic search
    summary: >-
      One loop that finds every reachable vertex, with one line deliberately left open.
  - id: w9-bfs
    title: Week 9 · Breadth-first search and shortest paths
    summary: >-
      Fill the open line with a queue: the graph comes out in layers, and the layers are the
      distances.
  - id: w9-components
    title: Week 9 · Connected components
    summary: >-
      One search per piece, sharing its marks, and the whole graph still costs `O(m + n)`.
  - id: w9-dfs
    title: Week 9 · Depth-first search
    summary: >-
      Follow one path as far as it goes, then go back — with recursion, or with a stack and
      one carefully placed mark.
  - id: w9-topo
    title: Week 9 · Topological ordering
    summary: >-
      Ordering tasks so every prerequisite comes first, and why DFS finishing order does it.
  - id: w9-review
    title: Week 9 · Where we landed
  - id: w10-lp-model
    title: Week 10 · Modelling a linear program
    summary: >-
      Decision variables, a linear objective and linear constraints — and what a feasible answer
      and an upper bound each prove.
  - id: w10-lp-geometry
    title: Week 10 · The geometry of an LP
    summary: >-
      The constraints cut out a convex region, and some corner of it is always at least as good
      as any other point.
  - id: w10-lp-forms
    title: Week 10 · Rewriting an LP
    summary: >-
      Slack, surplus and split variables: changing an LP's form without changing its plans.
  - id: w10-flow
    title: Week 10 · Maximum flow
    summary: >-
      Push flow along residual paths until none is left, and a cut of equal capacity proves the
      flow is the most there is.
  - id: w10-matching
    title: Week 10 · Bipartite matching
    summary: >-
      Pairing two sides off without sharing, solved by turning it into a unit-capacity flow.
  - id: w10-review
    title: Week 10 · Where we landed
---
