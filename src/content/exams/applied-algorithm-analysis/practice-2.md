---
course: applied-algorithm-analysis
title: "Applied Algorithm Analysis · Practice Exam 2"
minutes: 120
passMark: 60
questions:
  - topic: "Week 1 · Big-O and growth"
    ask: "Rewrite `9^(log₃ n)` as a power of `n`."
    choices:
      - text: "n²"
        correct: true
        explains: "Right. Match the bases first: `9 = 3²`, so `9^(log₃ n) = (3^(log₃ n))² = n²`."
      - text: "3n"
        explains: "That treats the 9 as a multiplier. The 9 is the base of a power, so it ends up in the exponent of `n`."
      - text: "n^(log₂ 9) ≈ n^3.17"
        explains: "That would be right for `9^(log₂ n)`. The log here is base 3, and the base of the log decides the exponent."
      - text: "9n"
        explains: "A 9 out in front would need `+ 2` in the exponent, as in `3^(log₃ n + 2) = 9n`. Here the 9 is the base."
    work: |-
      Use `b^(log_c n) = n^(log_c b)`, after making the bases match.
      `9 = 3²`, so `9^(log₃ n) = 3^(2 log₃ n) = (3^(log₃ n))² = n²`.
      Check with the identity: `n^(log₃ 9) = n²`, since `log₃ 9 = 2`.
  - topic: "Week 1 · Big-O and growth"
    ask: "Which of these grows fastest? (log means log₂.)"
    choices:
      - text: "2^(log n + 3)"
        explains: "Adding 3 in the exponent only multiplies by `2³ = 8`: this is `8n`, which is linear."
      - text: "4^(log n)"
        explains: "`4 = 2²`, so this is `n²`. Quadratic, but not the fastest here."
      - text: "2^(3 log n)"
        correct: true
        explains: "Right. A multiplier in the exponent changes the class: `2^(3 log n) = (2^(log n))³ = n³`."
      - text: "n^2.5"
        explains: "Already a power of `n`. It beats `n²` and `8n`, but loses to `n³`."
    work: |-
      Rewrite every option as a power of `n` before comparing.
      `2^(log n + 3) = 2^(log n) · 2³ = 8n`.
      `4^(log n) = (2²)^(log n) = n²`.
      `2^(3 log n) = n³`.
      Order: `8n < n² < n^2.5 < n³`. A multiplier in the exponent changes the class; an addition only changes the constant.
  - topic: "Week 1 · Big-O and growth"
    ask: "Compare `f(n) = 3^(log₂ n)` with `g(n) = n^1.5`."
    choices:
      - text: "f = Θ(g)"
        explains: "`3^(log₂ n) = n^(log₂ 3)`, and `log₂ 3 ≈ 1.585`, not 1.5. Different exponents mean different classes."
      - text: "f = Ω(g), but not O(g)"
        correct: true
        explains: "Right. `f = n^(log₂ 3) ≈ n^1.585`, and 1.585 > 1.5. This is Karatsuba's running time against `n^1.5`."
      - text: "f = O(g), but not Ω(g)"
        explains: "That has the comparison backwards. Work out `log₂ 3` before comparing: it is about 1.585."
      - text: "They cannot be compared, because one is exponential and one is polynomial"
        explains: "`3^(log₂ n)` only looks exponential. The exponent is `log n`, so it is a polynomial in disguise."
    work: |-
      `3^(log₂ n) = n^(log₂ 3)`.
      `log₂ 3 = ln 3 / ln 2 ≈ 1.0986 / 0.6931 ≈ 1.585`.
      `f/g = n^(1.585 − 1.5) = n^0.085 → ∞`, so `f = Ω(g)` and `f ≠ O(g)`.
  - topic: "Week 1 · Big-O and growth"
    ask: "What is `Σ_{i=0}^{log₂ n} 3ⁱ · (n/2ⁱ)²` in Θ terms?"
    choices:
      - text: "Θ(n²)"
        correct: true
        explains: "Right. Each term is `n² · (3/4)ⁱ`. The ratio is below 1, so the sum is Θ of its first term, `n²`."
      - text: "Θ(n² log n)"
        explains: "That would need every term to be equal (ratio 1). Here each term is 3/4 of the one before it."
      - text: "Θ(n^(log₂ 3))"
        explains: "That is the last term. You only take the last term when the ratio is above 1."
      - text: "Θ(3ⁿ)"
        explains: "The sum stops at `i = log n`, not `i = n`. And `3^(log n) = n^(log 3)` is a polynomial."
    work: |-
      Term at `i`: `3ⁱ · n²/4ⁱ = n² · (3/4)ⁱ`.
      `i = 0`: `n²`. `i = 1`: `(3/4)n²`. `i = log n`: `3^(log n) = n^(log 3) ≈ n^1.585`.
      Ratio = second ÷ first = 3/4 < 1, so the series is decreasing and the sum is Θ(first term) = `Θ(n²)`.
      This is the recursion tree of `T(n) = 3T(n/2) + O(n²)`: the root pays.
  - topic: "Week 1 · Big-O and growth"
    ask: "What is `Σ_{i=0}^{log₃ n} 9ⁱ · (n/3ⁱ)²` in Θ terms?"
    choices:
      - text: "Θ(n²)"
        explains: "That forgets to count the terms. When every term is the same, multiply one term by how many there are."
      - text: "Θ(n² log n)"
        correct: true
        explains: "Right. Every term is exactly `n²`, and there are `log₃ n + 1` of them."
      - text: "Θ(n⁴)"
        explains: "The last term is `9^(log₃ n) · 1 = n²`, not `n⁴`. Rewrite `9^(log₃ n)` before using it."
      - text: "Θ(9ⁿ)"
        explains: "The top of the sum is `log₃ n`. Plug that into the term; don't read it as `n`."
    work: |-
      Term at `i`: `9ⁱ · n²/9ⁱ = n²`.
      Every term equals `n²` (ratio 1), so the sum is count × term.
      Count: `i = 0` to `log₃ n`, so `log₃ n + 1` terms.
      Sum `= n²(log₃ n + 1) = Θ(n² log n)`. This is Algorithm C from Assignment 2 (2.4).
  - topic: "Week 1 · Big-O and growth"
    ask: "Which statement about `(log n)^(log n)` is true?"
    choices:
      - text: "It equals `n`, because `b^(log n) = n`"
        explains: "That identity needs the base to be the constant 2. Here the base is `log n`, which grows."
      - text: "It is polylogarithmic, so it is `O(n)`"
        explains: "A polylog is `(log n)ᵏ` for a fixed `k`. Here the exponent is `log n`, which grows."
      - text: "It equals `n^(log log n)`, so it beats every fixed power of `n`"
        correct: true
        explains: "Right. `(log n)^(log n) = 2^((log log n)(log n)) = n^(log log n)`, and `log log n` eventually passes any constant `k`."
      - text: "It is `Θ(n log n)`"
        explains: "Try `n = 2¹⁶`: `(log n)^(log n) = 16¹⁶ = 2⁶⁴`, far above `n log n = 2²⁰`."
    work: |-
      Write the base as a power of 2: `log n = 2^(log log n)`.
      `(log n)^(log n) = 2^((log log n) · (log n)) = (2^(log n))^(log log n) = n^(log log n)`.
      For any fixed `k`, `log log n > k` once `n > 2^(2ᵏ)`, so it is `Ω(nᵏ)` for every `k`.
      It is still slower than `2ⁿ`, because `(log log n)(log n)` is much smaller than `n`.
  - topic: "Week 1 · Big-O and growth"
    ask: "A d-ary tree has `n` nodes and `d = √n`. What is its minimum possible depth, in Θ terms?"
    choices:
      - text: "Θ(log n)"
        explains: "That drops the `/ log d`. You can only drop it when `d` is a fixed constant, and here `d` grows with `n`."
      - text: "Θ(√n)"
        explains: "That would be a tree with only a few children per node. With `√n` children each, the tree is very wide and very short."
      - text: "Θ(1)"
        correct: true
        explains: "Right. The depth is `Θ(log n / log d)`, and `log √n = ½ log n`, so the ratio is the constant 2."
      - text: "Θ(log n / log log n)"
        explains: "That is the answer for `d = log n`, not `d = √n`."
    work: |-
      Minimum depth is `Θ(log n / log d)` (Assignment 1, 1.3).
      `log d = log √n = ½ log n`.
      `log n / (½ log n) = 2`, a constant.
      Check: a root with `√n` children, each with `√n` children, already holds `1 + √n + n > n` nodes, at depth 2.
  - topic: "Week 1 · Big-O and growth"
    ask: "What is `Σ_{i=1}^{n²} 1/i` in Θ terms?"
    choices:
      - text: "Θ(log n)"
        correct: true
        explains: "Right. The harmonic sum up to `m` is `Θ(log m)`. With `m = n²`, `log(n²) = 2 log n = Θ(log n)`."
      - text: "Θ(log² n)"
        explains: "`log(n²)` is `2 log n`, not `(log n)²`. The square comes out in front as a factor of 2."
      - text: "Θ(n²)"
        explains: "That counts the terms. The terms shrink, so the sum grows much more slowly than the count."
      - text: "Θ(n)"
        explains: "The harmonic sum grows like a logarithm of its upper limit, never like a power of it."
    work: |-
      `Σ_{i=1}^{m} 1/i = Θ(log m)` (Assignment 1, 1.5).
      Substitute `m = n²`: `Θ(log n²) = Θ(2 log n) = Θ(log n)`.
      The trap is reading `log(n²)` as `(log n)²`.
  - topic: "Week 1 · Big-O and growth"
    ask: "Assignment 1 (0.3) shows `Fₙ ≥ 2^(0.5n)` for `n ≥ 6`. What is the largest `c` for which `Fₙ = Ω(2^(cn))`?"
    choices:
      - text: "c = 0.5"
        explains: "0.5 works, but it is not the largest. The induction only needed a simple constant."
      - text: "c = log₂ φ ≈ 0.694"
        correct: true
        explains: "Right. `Fₙ ≈ φⁿ/√5 = 2^((log₂ φ)n)/√5`, so any `c ≤ log₂ φ` works and any larger `c` fails."
      - text: "c = 1"
        explains: "`Fₙ < 2ⁿ`, and the ratio `Fₙ/2ⁿ ≈ (φ/2)ⁿ/√5` goes to 0, so `c = 1` fails."
      - text: "c = 0.618"
        explains: "0.618 is `1/φ`, a different number. The exponent you need is `log₂ φ`."
    work: |-
      `Fₙ` is the nearest integer to `φⁿ/√5`, with `φ = (1 + √5)/2 ≈ 1.618`.
      `φⁿ = 2^(n log₂ φ)`, and `log₂ φ = ln 1.618 / ln 2 ≈ 0.481 / 0.693 ≈ 0.694`.
      For `c ≤ 0.694`, `Fₙ ≥ (1/√5)·2^(cn)` eventually, so `Fₙ = Ω(2^(cn))`.
      For `c > 0.694`, `Fₙ / 2^(cn) → 0`, so it fails.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Assignment 1 (1.1): in base `b ≥ 2`, three single-digit numbers sum to at most what, and why is that at most two digits?"
    choices:
      - text: "At most `3(b − 1)`, and `3(b − 1) ≤ b² − 1` for every `b ≥ 2`"
        correct: true
        explains: "Right. `b² − 1 − 3(b − 1) = (b − 1)(b − 2) ≥ 0`, and `b² − 1` is the largest two-digit number in base `b`."
      - text: "At most `3b`, which is less than `b²` once `b ≥ 3`"
        explains: "A single digit is at most `b − 1`, not `b`. This version also leaves `b = 2` unproved."
      - text: "At most `3(b − 1)`, which is below `b` because `3 ≤ b`"
        explains: "`3(b − 1)` is usually larger than `b`, which is why the sum needs a second digit. And `b = 2` breaks `3 ≤ b`."
      - text: "At most `b² − 1`, because every sum is"
        explains: "That assumes the answer. You need to show that three digits can't sum past `b² − 1`."
    work: |-
      Each digit is at most `b − 1`, so the sum is at most `3(b − 1)`.
      The largest two-digit number in base `b` is `(b − 1)·b + (b − 1) = b² − 1`.
      `b² − 1 − 3(b − 1) = b² − 3b + 2 = (b − 1)(b − 2)`, which is `≥ 0` for every `b ≥ 2`.
      At `b = 2`: `1 + 1 + 1 = 3 = 11₂`, two digits, with equality.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "For very large `N`, about how many times longer is `N` in binary than in decimal?"
    choices:
      - text: "4 times"
        explains: "4 is the upper bound from Assignment 1 (1.2), which holds for every `N`. For large `N` the ratio settles lower."
      - text: "log₂ 10 ≈ 3.32 times"
        correct: true
        explains: "Right. The lengths are about `log₂ N` and `log₁₀ N`, and their ratio is `log₂ 10`."
      - text: "10/2 = 5 times"
        explains: "Lengths are logarithms, so the ratio of the bases doesn't matter. The ratio of their logs does."
      - text: "2 times"
        explains: "1000 has 4 decimal digits and 10 binary digits, a ratio of 2.5 even for a small number."
    work: |-
      Binary length `≈ log₂ N`, decimal length `≈ log₁₀ N`.
      `log₂ N / log₁₀ N = log₂ 10 ≈ 3.32` (change of base).
      The bound of 4 in 1.2 handles rounding for small `N`; the limit is 3.32.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "To compute `N!`, a program multiplies `1 · 2 · 3 ⋯ N`. If `N` is an `n`-bit number, how many multiplications does it make?"
    choices:
      - text: "About `n`"
        explains: "That counts the bits of `N`. The loop runs once per value up to `N`, not once per bit."
      - text: "About `n²`"
        explains: "`n²` would be the cost of one multiplication of two `n`-bit numbers, not the number of multiplications."
      - text: "About `2ⁿ`, which is exponential in the input size"
        correct: true
        explains: "Right. An `n`-bit `N` can be as large as `2ⁿ − 1`, and the loop makes `N − 1` multiplications."
      - text: "About `n log n`"
        explains: "Nothing is halved, so no logarithm appears. The loop steps through every value from 1 to `N`."
    work: |-
      The loop makes `N − 1` multiplications.
      The input size is `n ≈ log₂ N`, so `N ≈ 2ⁿ`.
      That is exponential in `n`, even though it is linear in the value `N`.
      Each multiplication also gets more expensive, since `N!` has about `N log N` bits.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Recursive multiplication sets `multiply(x, y) = 2 · multiply(x, ⌊y/2⌋)`, plus `x` if `y` is odd. On `n`-bit inputs, what are the recurrence and the running time?"
    choices:
      - text: "T(n) = 2T(n/2) + O(n), so O(n log n)"
        explains: "There is only one recursive call, and it removes one bit, so the size goes from `n` to `n − 1`, not `n/2`."
      - text: "T(n) = T(n − 1) + O(n), so O(n²)"
        correct: true
        explains: "Right. Halving `y` removes one bit, and each level does an `O(n)` doubling and addition. Unrolling gives `n + (n − 1) + ⋯ = O(n²)`."
      - text: "T(n) = T(n/2) + O(1), so O(log n)"
        explains: "Halving the value of `y` removes one bit. It does not halve the number of bits."
      - text: "T(n) = T(n − 1) + O(1), so O(n)"
        explains: "Each level adds `n`-bit numbers, which costs `O(n)`, not `O(1)`."
    work: |-
      `⌊y/2⌋` has one bit fewer than `y`, so the size goes from `n` to `n − 1`.
      Each call does a shift (doubling) and possibly an addition of `n`-bit numbers: `O(n)`.
      `T(n) = T(n − 1) + cn ≤ cn + c(n − 1) + ⋯ + c = O(n²)`.
      The master theorem does not apply, because the size shrinks by 1, not by a factor.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "What is `7²²² mod 10` (the last digit of `7²²²`)?"
    choices:
      - text: "1"
        explains: "`7⁴ ≡ 1`, but 222 is not a multiple of 4. It leaves remainder 2."
      - text: "3"
        explains: "`7³ ≡ 3`. That would be the answer for remainder 3, but 222 leaves remainder 2."
      - text: "7"
        explains: "That is `7¹`. Reduce the exponent mod 4 first: 222 mod 4 = 2."
      - text: "9"
        correct: true
        explains: "Right. `7⁴ = 2401 ≡ 1`, and `222 = 4 · 55 + 2`, so `7²²² ≡ 7² = 49 ≡ 9`."
    work: |-
      Powers of 7 mod 10: `7, 9, 3, 1`, then they repeat.
      `7⁴ ≡ 1` (mod 10).
      `222 = 4 · 55 + 2`, so `7²²² = (7⁴)⁵⁵ · 7² ≡ 1 · 49 ≡ 9` (mod 10).
  - topic: "Week 3 · Divide and conquer"
    ask: "Karatsuba multiplies `x = 1101₂` (13) by `y = 1011₂` (11) with `h = 2`, so `x_L = 3`, `x_R = 1`, `y_L = 2`, `y_R = 3`. What is `P₃ − P₁ − P₂`?"
    choices:
      - text: "20"
        explains: "That is `P₃ = (3 + 1)(2 + 3)` on its own. Subtract `P₁` and `P₂` to get the middle term."
      - text: "11"
        correct: true
        explains: "Right. `P₁ = 6`, `P₂ = 3`, `P₃ = 20`, so the middle term is `20 − 6 − 3 = 11`. Then `6·16 + 11·4 + 3 = 143 = 13 · 11`."
      - text: "14"
        explains: "That is `P₃ − P₁`. You also need to subtract `P₂ = x_R · y_R = 3`."
      - text: "143"
        explains: "That is the final product. The question asks for the middle coefficient."
    work: |-
      `P₁ = x_L · y_L = 3 · 2 = 6`.
      `P₂ = x_R · y_R = 1 · 3 = 3`.
      `P₃ = (x_L + x_R)(y_L + y_R) = 4 · 5 = 20`.
      Middle: `P₃ − P₁ − P₂ = 11`, which equals `x_L·y_R + x_R·y_L = 9 + 2`.
      Result: `6 · 2⁴ + 11 · 2² + 3 = 96 + 44 + 3 = 143`. Check: `13 · 11 = 143`.
  - topic: "Week 3 · Divide and conquer"
    ask: "Using the master theorem, what does `T(n) = 2T(n/4) + O(√n)` solve to?"
    choices:
      - text: "Θ(√n)"
        explains: "That is the root-dominated case, which needs `d > log_b a`. Here they are equal."
      - text: "Θ(√n log n)"
        correct: true
        explains: "Right. `a = 2`, `b = 4`, `d = 1/2`, and `log₄ 2 = 1/2 = d`. Every level costs the same, so you multiply by the number of levels."
      - text: "Θ(n)"
        explains: "That would be `n^(log_b a)` with `log₄ 2 = 1`, but `log₄ 2 = 1/2`."
      - text: "Θ(log n)"
        explains: "That ignores the `√n` work at the root, which alone is more than `log n`."
    work: |-
      `a = 2`, `b = 4`, `d = 1/2`.
      `log_b a = log₄ 2 = 1/2`, since `4^(1/2) = 2`.
      `d = log_b a`, so this is the balanced case: `Θ(n^d log n) = Θ(√n log n)`.
      Ratio check: `a / bᵈ = 2 / 4^(1/2) = 1`, so every level of the tree costs `√n`.
  - topic: "Week 3 · Divide and conquer"
    ask: "Using the master theorem, what does `T(n) = 7T(n/2) + O(n²)` solve to?"
    choices:
      - text: "Θ(n² log n)"
        explains: "That is the balanced case, which needs `d = log_b a`. But `log₂ 7 ≈ 2.81`, not 2."
      - text: "Θ(n²)"
        explains: "That is the root-dominated case, which needs `d > log_b a`. Here `d = 2 < 2.81`."
      - text: "Θ(n^(log₂ 7)), about n^2.81"
        correct: true
        explains: "Right. `log₂ 7 > 2`, so the leaves dominate. On a written answer, give the exact exponent `log₂ 7`."
      - text: "Θ(n³)"
        explains: "That is the eight-product block method. Strassen's seven products lower the exponent to `log₂ 7`."
    work: |-
      `a = 7`, `b = 2`, `d = 2`.
      `log₂ 7 ≈ 2.807 > 2 = d`, so the leaves pay: `Θ(n^(log₂ 7))`.
      Ratio check: `a / bᵈ = 7/4 > 1`, so the series grows and the last level dominates.
  - topic: "Week 3 · Divide and conquer"
    ask: "An algorithm solves a problem of size `n` by making three recursive calls on size `n − 1` and combining them in constant time. What is its running time?"
    choices:
      - text: "Θ(n^(log₂ 3))"
        explains: "That is `3T(n/2)`. Here the size drops by 1 each time, not by half."
      - text: "Θ(n)"
        explains: "That would be true with one recursive call. Three calls triple the work at every level."
      - text: "Θ(3ⁿ)"
        correct: true
        explains: "Right. `T(n) = 3T(n − 1) + c` unrolls to `3ᵏT(n − k) + c(3ᵏ − 1)/2`, and `k = n − 1` gives `Θ(3ⁿ)`."
      - text: "Θ(n³)"
        explains: "Three calls multiply the work by 3 per level over `n` levels, giving `3ⁿ`, not `n³`."
    work: |-
      `T(n) = 3T(n − 1) + c`.
      Unroll: `9T(n − 2) + 4c`, then `27T(n − 3) + 13c`. In general `3ᵏT(n − k) + c(3ᵏ − 1)/2`.
      Set `k = n − 1`: `T(n) = 3ⁿ⁻¹T(1) + c(3ⁿ⁻¹ − 1)/2 = Θ(3ⁿ)`.
      This is Algorithm B from Assignment 2 (2.4) with 3 calls instead of 2.
  - topic: "Week 3 · Divide and conquer"
    ask: "What does `T(n) = T(n − 1) + log n` solve to?"
    choices:
      - text: "Θ(log n)"
        explains: "That is a single level. The recurrence adds a `log` term at each of `n` levels."
      - text: "Θ(log² n)"
        explains: "That would come from `T(n/2) + log n`, with `log n` levels. Here the size drops by 1, so there are `n` levels."
      - text: "Θ(n log n)"
        correct: true
        explains: "Right. Unrolling gives `log n + log(n − 1) + ⋯ + log 1 = log(n!)`, and `log(n!) = Θ(n log n)`."
      - text: "Θ(n)"
        explains: "That would be `T(n − 1) + O(1)`. Each step here adds `log n`, not a constant."
    work: |-
      Unroll: `T(n) = log n + log(n − 1) + ⋯ + log 2 + T(1)`.
      The sum of logs is the log of the product: `log(n!) + T(1)`.
      `log(n!) = Θ(n log n)` (Assignment 1, 1.4), so `T(n) = Θ(n log n)`.
  - topic: "Week 3 · Divide and conquer"
    ask: "In the recursion tree for `T(n) = aT(n/b) + O(nᵈ)`, level `k` costs `nᵈ · (a/bᵈ)ᵏ`. If `a/bᵈ > 1`, where does most of the cost sit?"
    choices:
      - text: "At the root, so `T(n) = Θ(nᵈ)`"
        explains: "The root dominates when the ratio is below 1, so that each level costs less than the one above it."
      - text: "Spread evenly, so `T(n) = Θ(nᵈ log n)`"
        explains: "Even spread needs a ratio of exactly 1."
      - text: "At the leaves, so `T(n) = Θ(n^(log_b a))`"
        correct: true
        explains: "Right. Ratio above 1 means the levels grow geometrically, and a growing geometric series is Θ of its last term, the leaves."
      - text: "It depends on the base case, so the master theorem cannot say"
        explains: "The base case is a constant per leaf. The ratio alone decides which case applies."
    work: |-
      The level costs form a geometric series with ratio `r = a/bᵈ`.
      `r > 1`: increasing, so Θ(last term). The last level has `a^(log_b n) = n^(log_b a)` leaves of constant cost.
      So `T(n) = Θ(n^(log_b a))`. This is the same rule as Assignment 1 (0.2), applied to a recursion tree.
  - topic: "Week 3 · Divide and conquer"
    ask: "Three algorithms: X is `16T(n/4) + O(n²)`, Y is `3T(n/2) + O(n)`, and Z is `2T(n − 1) + O(1)`. Which is fastest for large `n`?"
    choices:
      - text: "X, at Θ(n² log n)"
        explains: "X is correct as worked out, but `n² log n` is slower than Y's `n^1.585`."
      - text: "Y, at Θ(n^(log₂ 3)) ≈ n^1.585"
        correct: true
        explains: "Right. Y has the smallest exponent. X is `n² log n` (balanced case), and Z is `2ⁿ`."
      - text: "Z, because it does only constant work per call"
        explains: "The work per call is small, but the number of calls doubles at every level. Z is `Θ(2ⁿ)`."
      - text: "X and Y tie, since both are polynomial"
        explains: "Polynomials with different exponents are different growth rates. `n^1.585` beats `n² log n`."
    work: |-
      X: `a = 16`, `b = 4`, `d = 2`, `log₄ 16 = 2 = d`, so `Θ(n² log n)`.
      Y: `a = 3`, `b = 2`, `d = 1`, `log₂ 3 ≈ 1.585 > 1`, so `Θ(n^(log₂ 3))`.
      Z: unrolls to `Θ(2ⁿ)`.
      Ranking, fastest first: Y, X, Z.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "You multiply a degree-3 polynomial by a degree-4 polynomial using the FFT. What is the smallest valid `n`?"
    choices:
      - text: "n = 4"
        explains: "4 points fit each input on its own, but you need enough points for the product, which has 8 coefficients."
      - text: "n = 7"
        explains: "The product has degree 7, which means 8 coefficients. And `n` must be a power of 2."
      - text: "n = 8"
        correct: true
        explains: "Right. Size it by the output: degree 3 + 4 = 7, so 8 coefficients, and 8 is already a power of 2."
      - text: "n = 16"
        explains: "16 would work but wastes points. 8 is enough to determine a degree-7 product."
    work: |-
      The product has degree `3 + 4 = 7`, so it has 8 coefficients.
      Rule: `n ≥ deg A + deg B + 1 = 8`, rounded up to a power of 2.
      8 is already a power of 2, so `n = 8`.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "With `n = 4`, what is `FFT(a, i)` for `a = (1, 0, 2, 0)`, that is, `A(x) = 1 + 2x²`?"
    choices:
      - text: "(3, −1, 3, −1)"
        correct: true
        explains: "Right. `A(1) = 3`, `A(i) = 1 + 2i² = −1`, `A(−1) = 3`, `A(−i) = −1`. There are no odd coefficients, so `s'` is zero."
      - text: "(3, 1 + 2i, −1, 1 − 2i)"
        explains: "That is the FFT of `1 + 2x`, coefficients `(1, 2, 0, 0)`. Here the 2 is on `x²`."
      - text: "(3, 1, 3, 1)"
        explains: "That forgets that `i² = −1`. `A(i) = 1 + 2i² = 1 − 2 = −1`."
      - text: "(3, −1 + 2i, 3, −1 − 2i)"
        explains: "Every coefficient here is on an even power, and an even power of `±i` is real. No imaginary part can appear."
    work: |-
      Evens `(a₀, a₂) = (1, 2)`: `s = (1 + 2, 1 − 2) = (3, −1)`.
      Odds `(a₁, a₃) = (0, 0)`: `s' = (0, 0)`.
      `r₀ = s₀ + s'₀ = 3`, `r₁ = s₁ + i·s'₁ = −1`, `r₂ = s₀ − s'₀ = 3`, `r₃ = s₁ − i·s'₁ = −1`.
      Check: `A(1) = 1 + 2 = 3`. Entries 1 and 3 are conjugates (both real here).
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "An FFT at `n = 4` of real coefficients starts `(6, 2 − 3i, −2, ?)`. What is the missing entry?"
    choices:
      - text: "2 + 3i"
        correct: true
        explains: "Right. With real coefficients, `A(−i)` is the conjugate of `A(i)`: same real part, opposite imaginary part."
      - text: "2 − 3i"
        explains: "Entries 1 and 3 are conjugates, not equal. Flip the sign of the imaginary part."
      - text: "−2 + 3i"
        explains: "A conjugate keeps the real part and flips only the imaginary part."
      - text: "6"
        explains: "Entry 0 is `A(1)`, and entry 2 is `A(−1)`. Entry 3 is `A(−i)`, which pairs with entry 1."
    work: |-
      Entry 1 is `A(i)` and entry 3 is `A(−i)`.
      `−i` is the conjugate of `i`. For real coefficients, `A(conj z) = conj A(z)`.
      `conj(2 − 3i) = 2 + 3i`.
      This is the check to run on every hand FFT at `n = 4`.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "When interpolating at `n = 4`, a student runs the inverse FFT with `ω = i` instead of `ω⁻¹ = −i`, and still divides by 4. What goes wrong?"
    choices:
      - text: "Every coefficient comes out 4 times too large"
        explains: "That is what forgetting to divide by `n` does. The student did divide."
      - text: "Coefficients `c₁` and `c₃` come out swapped"
        correct: true
        explains: "Right. Using `i` instead of `−i` evaluates at the points in the order `1, −i, −1, i`, which reverses the odd positions."
      - text: "The coefficients come out complex"
        explains: "They can still be real. The error is a swap, which is why the conjugate check doesn't catch it."
      - text: "Nothing, because `i` and `−i` are both 4th roots of unity"
        explains: "Both are roots, but `M(ω⁻¹)` is the inverse of `M(ω)` and `M(ω)` is not. The order of the points matters."
    work: |-
      The inverse FFT is `(1/n)·FFT(values, ω⁻¹)`.
      Replacing `−i` by `i` swaps the roles of `i` and `−i`, so the outputs for index 1 and index 3 trade places.
      Example: values `(3, 1 − 2i, 3, 1 + 2i)` invert to `(2, −1, 1, 1)`. With the wrong sign you get `(2, 1, 1, −1)`.
      Catch it by expanding the product directly, or by checking one coefficient.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "`selection(S, 5)` on `S = [7, 2, 9, 4, 4, 8, 1]` picks pivot `v = 4`. Which call comes next?"
    choices:
      - text: "selection(S_L, 5)"
        explains: "`S_L = [2, 1]` has only 2 elements, so it can't contain the 5th smallest."
      - text: "It returns 4"
        explains: "The pivot covers ranks 3 and 4 only (`|S_L| = 2`, `|S_v| = 2`). Rank 5 lies beyond them."
      - text: "selection(S_R, 1)"
        correct: true
        explains: "Right. `|S_L| + |S_v| = 4 < 5`, so the answer is in `S_R = [7, 9, 8]` at rank `5 − 4 = 1`. That gives 7."
      - text: "selection(S_R, 5)"
        explains: "The rank must be shifted down by the 4 elements already skipped: `5 − 4 = 1`."
    work: |-
      Split around `v = 4`: `S_L = [2, 1]`, `S_v = [4, 4]`, `S_R = [7, 9, 8]`.
      `k = 5 > |S_L| + |S_v| = 4`, so recurse right with `k − 4 = 1`.
      The smallest of `S_R` is 7. Check: sorted `S` is `1, 2, 4, 4, 7, 8, 9`, and the 5th is 7.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "Suppose you could multiply two 3×3 block matrices with 21 block products instead of 27, plus `O(n²)` additions. How does that compare with Strassen's `n^(log₂ 7) ≈ n^2.81`?"
    choices:
      - text: "Θ(n^(log₃ 21)) ≈ n^2.77, which beats Strassen"
        correct: true
        explains: "Right. `T(n) = 21T(n/3) + O(n²)`, and `log₃ 21 ≈ 2.771 < 2.807`."
      - text: "Θ(n^(log₃ 21)) ≈ n^2.77, which loses to Strassen"
        explains: "2.77 is smaller than 2.81, so the exponent is lower and the algorithm is faster for large `n`."
      - text: "Θ(n^(log₂ 21)) ≈ n^4.4"
        explains: "The blocks are a third of the size, so `b = 3`. The log base is 3."
      - text: "Θ(n² log n)"
        explains: "That would need `log₃ 21 = 2`, which would mean only 9 products."
    work: |-
      Cutting into 3×3 blocks makes 21 subproblems of size `n/3`: `T(n) = 21T(n/3) + O(n²)`.
      `log₃ 21 = ln 21 / ln 3 ≈ 3.045 / 1.099 ≈ 2.771 > 2`, so the leaves dominate: `Θ(n^(log₃ 21))`.
      Strassen: `log₂ 7 ≈ 2.807`. A smaller exponent wins for large `n`.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "Assignment 2 (6.1): `M(j) = aⱼ + max(0, M(j − 1))` is the best sum of a contiguous run ending exactly at `j`. For `5, 15, −30, 10, −5, 40, 10`, what is `M(4)`?"
    choices:
      - text: "10"
        correct: true
        explains: "Right. `M(3) = −30 + 20 = −10`, which is negative, so the best run ending at 4 starts fresh: `M(4) = 10`."
      - text: "−20"
        explains: "That extends the run through −30. Starting fresh at position 4 gives more."
      - text: "20"
        explains: "20 is `M(2)`, the best run so far, but `M(4)` must end exactly at position 4."
      - text: "55"
        explains: "55 is the final answer, `max M(j)`, reached at `j = 7`."
    work: |-
      `M(1) = 5`. `M(2) = 15 + 5 = 20`. `M(3) = −30 + 20 = −10`.
      `M(4) = 10 + max(0, −10) = 10`.
      Continuing: `M(5) = 5`, `M(6) = 45`, `M(7) = 55`. The answer is `max M(j) = 55`, the run `10, −5, 40, 10`.
      `n` subproblems at `O(1)` each: `O(n)`.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "Assignment 2 (6.8): `S(i, j)` is the length of the longest common **suffix** of `x[1..i]` and `y[1..j]`. If `xᵢ ≠ yⱼ`, what is `S(i, j)`?"
    choices:
      - text: "max(S(i − 1, j), S(i, j − 1))"
        explains: "That is the subsequence recurrence (6.11). A substring can't skip a character, so a mismatch breaks the run."
      - text: "0"
        correct: true
        explains: "Right. A common suffix must end with the last characters, and they differ, so the suffix is empty."
      - text: "S(i − 1, j − 1)"
        explains: "That carries the old run past a mismatch. The run must be contiguous, so it resets."
      - text: "1"
        explains: "A length of 1 needs `xᵢ = yⱼ`."
    work: |-
      Substring means contiguous, so a common substring ending at `(i, j)` must use `xᵢ` and `yⱼ`.
      If they differ, no non-empty common suffix exists: `S(i, j) = 0`.
      If they match: `S(i, j) = S(i − 1, j − 1) + 1`.
      The answer is `max S(i, j)` over the whole table: `mn` cells at `O(1)` each, so `O(mn)`.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "Assignment 2 (6.7): longest palindromic subsequence uses `L(i, j)`, which depends on `L(i + 1, j − 1)`, `L(i + 1, j)` and `L(i, j − 1)`. Which fill order works?"
    choices:
      - text: "By increasing length `j − i`"
        correct: true
        explains: "Right. All three dependencies are shorter stretches, so filling by length guarantees they are ready."
      - text: "Row by row, `i = 1` to `n`, left to right"
        explains: "`L(1, j)` needs `L(2, ·)`, which is in a row not yet filled."
      - text: "By decreasing length, longest first"
        explains: "The long stretches depend on the short ones, so they must come later."
      - text: "Any order, since memoisation handles it"
        explains: "Memoisation would work, but the question asks for a bottom-up order. Not every order respects the dependencies."
    work: |-
      Every dependency of `L(i, j)` covers a strictly shorter stretch.
      Fill length 1 (`L(i, i) = 1`), then length 2, and so on up to length `n`.
      Filling rows from `i = n` down to 1, each left to right, also works. Top-down rows fail.
      `n²/2` cells at `O(1)` each: `O(n²)`.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "Assignment 2 (6.4): `D(i)` is true if `s[1..i]` splits into dictionary words, and is computed by trying every earlier break point `j`. What is the running time?"
    choices:
      - text: "O(n), because there are `n` subproblems"
        explains: "That counts subproblems only. Each one checks up to `i` break points."
      - text: "O(n²): `n` subproblems, `O(n)` work each"
        correct: true
        explains: "Right. Running time = number of subproblems × work per subproblem, and both numbers are needed."
      - text: "O(2ⁿ), because there are `2ⁿ⁻¹` ways to split a string"
        explains: "That is the brute-force count. The DP avoids it by reusing `D(j)`."
      - text: "O(n³), because each `dict` call reads a word"
        explains: "The exercise lets `dict` take unit time, so each check is `O(1)`."
    work: |-
      `D(i) = OR over 0 ≤ j < i of [D(j) and dict(s[j+1..i])]`, with `D(0) = true`.
      Subproblems: `n`. Work each: up to `n` choices of `j` at `O(1)`.
      Total: `n × n = O(n²)`.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "With `dp[i]` = the length of the longest increasing subsequence **ending at** `i`, what is the table for `[3, 1, 4, 1, 5, 9, 2, 6]`?"
    choices:
      - text: "[1, 1, 2, 1, 3, 4, 2, 4]"
        correct: true
        explains: "Right. Each entry is 1 plus the largest `dp[j]` over earlier smaller values. The answer is `max dp = 4`."
      - text: "[1, 1, 2, 2, 3, 4, 4, 4]"
        explains: "That is the best length seen so far, not the best ending at `i`. For example, `dp` at the 2 is only 2 (`1, 2`)."
      - text: "[1, 1, 2, 1, 3, 4, 1, 4]"
        explains: "The 2 can follow a 1, so its entry is 2, not 1."
      - text: "[1, 2, 3, 3, 4, 5, 5, 6]"
        explains: "That counts every element, increasing or not. 3 then 1 is not increasing."
    work: |-
      3: 1. 1: 1. 4: after 3 or 1, so 2. 1: 1.
      5: after 4, so 3. 9: after 5, so 4. 2: after a 1, so 2. 6: after 5, so 4.
      `max dp = 4`, for example `1, 4, 5, 9` or `3, 4, 5, 6`.
      `dp[n]` is not the answer in general. Take the maximum.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "What is the edit distance from KITE to BITES?"
    choices:
      - text: "1"
        explains: "One edit can't both change the K and add the S."
      - text: "2"
        correct: true
        explains: "Right. Substitute K → B and insert S at the end. The lengths differ by 1, so at least one insertion is needed, and the first letters differ."
      - text: "3"
        explains: "There is a two-edit alignment: `K→B`, keep `ITE`, insert `S`."
      - text: "5"
        explains: "That rebuilds the whole word. Keeping `ITE` saves three edits."
    work: |-
      Alignment: `K I T E −` over `B I T E S`.
      Costs: substitute K→B (1), three matches (0), insert S (1). Total 2.
      One edit is not enough: the lengths differ by 1, so a single edit would have to be an insertion. Deleting any one letter of BITES gives ITES, BTES, BIES, BITS or BITE, and none of them is KITE.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "Assignment 2 (6.18), each coin at most once: `x = (3, 4, 5)`. Which is row `i = 2` (coins 3 and 4 allowed) for `w = 0` to `9`?"
    choices:
      - text: "T F F T T F F T F F"
        correct: true
        explains: "Right. With 3 and 4 used at most once, the reachable sums are 0, 3, 4 and 7."
      - text: "T F F T T F T T T T"
        explains: "That allows reuse (`6 = 3 + 3`, `8 = 4 + 4`, `9 = 3 + 3 + 3`). In 6.18 each coin is used at most once."
      - text: "T F F T F F F F F F"
        explains: "That is row 1 (coin 3 only). Row 2 adds coin 4."
      - text: "T F F T T T F T T T"
        explains: "That is row 3, which adds coin 5 (5, 8 = 3 + 5, 9 = 4 + 5)."
    work: |-
      Row 1 (coin 3): T at 0 and 3.
      Row 2: `K(2, w) = K(1, w) OR K(1, w − 4)`. New T at `4 = 0 + 4` and `7 = 3 + 4`.
      Row 2: `T F F T T F F T F F`.
      Row 3 would add 5, 8 and 9, so `K(3, 9) = T` (`4 + 5`).
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "Assignment 2 (6.19): make change for `v` with at most `k` coins, unlimited supply, `n` denominations. The table is `M(j, u)`, with `j ≤ k` coins and value `u ≤ v`, and each cell tries every `xᵢ`. What is the running time?"
    choices:
      - text: "O(nv)"
        explains: "That is 6.17, with no coin limit. Here the limit `k` adds a dimension."
      - text: "O(kv)"
        explains: "That counts the cells. Each cell tries all `n` denominations."
      - text: "O(nkv)"
        correct: true
        explains: "Right. `kv` subproblems × `n` work each. The trigger word is “tries every `xᵢ`”."
      - text: "O(n²kv)"
        explains: "Each cell does one check per denomination: `n`, not `n²`."
    work: |-
      `M(j, u) = OR over i of M(j − 1, u − xᵢ)`, with `M(0, 0) = true`.
      Subproblems: `(k + 1)(v + 1) = O(kv)`. Work each: `n` denominations.
      Total `O(nkv)`.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "Assignment 2 (6.20), optimal binary search tree: `C(i, j)` is the cheapest tree on words `i..j`, found by trying every root `k` between them. What is the running time?"
    choices:
      - text: "O(n²)"
        explains: "That counts the cells. Each cell tries up to `n` roots."
      - text: "O(n³)"
        correct: true
        explains: "Right. `O(n²)` pairs `(i, j)` × `O(n)` roots each. The same shape as chain matrix multiplication and 6.9."
      - text: "O(2ⁿ)"
        explains: "That is the number of possible trees, which the DP avoids enumerating."
      - text: "O(n log n)"
        explains: "That is the cost of sorting the words, which are already sorted."
    work: |-
      `C(i, j) = min over i ≤ k ≤ j of [C(i, k − 1) + C(k + 1, j)] + Σ_{t=i}^{j} p_t`.
      Subproblems: about `n²/2` pairs. Work each: up to `n` roots, plus the sum (precompute prefix sums for `O(1)`).
      Total `O(n³)`. “Try every `k` between” means work per cell is `O(n)`.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "`A` is `5 × 10`, `B` is `10 × 3`, `C` is `3 × 12`. How many scalar multiplications does the cheaper order for `ABC` take?"
    choices:
      - text: "330"
        correct: true
        explains: "Right. `(AB)C`: `5·10·3 = 150` for `AB` (5 × 3), then `5·3·12 = 180`. Total 330."
      - text: "960"
        explains: "That is `A(BC)`: `10·3·12 = 360`, then `5·10·12 = 600`. It is the more expensive order."
      - text: "150"
        explains: "That is just the first multiplication, `AB`. The result still has to be multiplied by `C`."
      - text: "600"
        explains: "That is only the second step of `A(BC)`."
    work: |-
      Multiplying `p × q` by `q × r` costs `p·q·r`.
      `(AB)C`: `5·10·3 + 5·3·12 = 150 + 180 = 330`.
      `A(BC)`: `10·3·12 + 5·10·12 = 360 + 600 = 960`.
      The cheaper order is `(AB)C`: 330.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "A 10-pound knapsack, items 6 lb/$30, 3 lb/$14, 4 lb/$16, 2 lb/$9. What is the best value with repetition allowed, and without?"
    choices:
      - text: "$48 with repetition, $46 without"
        correct: true
        explains: "Right. With repetition: 6 + 2 + 2 gives $48. Without: 6 + 4 gives $46."
      - text: "$46 both ways"
        explains: "Repetition allows `6 + 2 + 2 = 10` lb for `30 + 9 + 9 = $48`."
      - text: "$48 both ways"
        explains: "$48 uses the 2-lb item twice, which isn't allowed without repetition."
      - text: "$50 with repetition, $46 without"
        explains: "No combination reaches $50. `3 + 3 + 4` gives $44, and `2 × 5` gives $45."
    work: |-
      With repetition, `K(w) = max over items of K(w − wᵢ) + vᵢ`: `K(10) = K(4) + 30 = 18 + 30 = 48` (the 4 lb is two 2-lb items).
      Without: try subsets of at most 10 lb. `{6, 4}` gives $46, `{6, 3}` gives $44, and `{3, 4, 2}` gives $39.
      Best without repetition: $46.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "Assignment 2 (6.15): teams play to `n = 4` wins, with even odds per game. A has 3 wins and B has 2. What is the probability that A wins the match?"
    choices:
      - text: "1/2"
        explains: "A only needs one more win, while B needs two. A is ahead."
      - text: "3/4"
        correct: true
        explains: "Right. A loses only if B wins the next two games: `1 − (1/2)² = 3/4`."
      - text: "7/8"
        explains: "That is the example from the exercise, where B needs three wins. Here B needs two."
      - text: "2/3"
        explains: "That would be a 3:1 split of the outcomes, but they are not equally likely. Use the recurrence."
    work: |-
      `P(i, j) = ½P(i + 1, j) + ½P(i, j + 1)`, with `P(n, j) = 1` and `P(i, n) = 0`.
      `P(3, 3) = ½ · 1 + ½ · 0 = ½`.
      `P(3, 2) = ½ · P(4, 2) + ½ · P(3, 3) = ½ · 1 + ½ · ½ = 3/4`.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "Assignment 2 (6.13): cards `2, 10, 1, 1`, and both players may take only an end card. The opponent plays optimally. How much does the first player collect by taking the larger end card each turn, and how much by playing optimally?"
    choices:
      - text: "Greedy 3, optimal 11"
        correct: true
        explains: "Right. Greedy takes the 2, which exposes the 10. Taking the right-hand 1 first keeps the 10 out of reach until the first player can take it."
      - text: "Greedy 11, optimal 11"
        explains: "Greedy takes the 2 first (2 > 1), and the opponent then takes the 10."
      - text: "Greedy 3, optimal 12"
        explains: "12 is every card except a 1, and the opponent always gets two of the four cards. The most the first player can get is 11."
      - text: "Greedy 2, optimal 10"
        explains: "Each player takes two cards. Count the second card each time."
    work: |-
      Greedy: takes 2. Opponent takes 10. Remaining `1, 1`: first player takes 1. Total 3.
      Optimal: take the right-hand 1, leaving `2, 10, 1`. Either end the opponent takes leaves the 10 on an end, so the first player takes it. Total 11.
      The DP over `(i, j)` stretches computes this in `O(n²)`.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Graph: `A–B` 4, `A–C` 2, `B–C` 1, `B–D` 5, `C–D` 8, `C–E` 10, `D–E` 2, `D–F` 6, `E–F` 3. Running Kruskal, which is the first edge it rejects?"
    choices:
      - text: "A–B (4)"
        correct: true
        explains: "Right. After `B–C`, `A–C`, `D–E` and `E–F`, `A` and `B` are already joined through `C`, so `A–B` would close a cycle."
      - text: "B–D (5)"
        explains: "`B–D` joins `{A, B, C}` to `{D, E, F}`, two separate pieces, so Kruskal accepts it."
      - text: "D–F (6)"
        explains: "`D–F` is rejected too, but `A–B` (4) is examined and rejected first."
      - text: "E–F (3)"
        explains: "When `E–F` comes up, `F` is still on its own, so it is accepted."
    work: |-
      Sorted: `B–C` 1, `A–C` 2, `D–E` 2, `E–F` 3, `A–B` 4, `B–D` 5, `D–F` 6, `C–D` 8, `C–E` 10.
      Accept `B–C`, `A–C`, `D–E`, `E–F`. Pieces: `{A, B, C}` and `{D, E, F}`.
      `A–B`: same piece, so reject. `B–D`: accept. Five edges for six vertices, so stop.
      MST weight `1 + 2 + 2 + 3 + 5 = 13`.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Same graph: `A–B` 4, `A–C` 2, `B–C` 1, `B–D` 5, `C–D` 8, `C–E` 10, `D–E` 2, `D–F` 6, `E–F` 3. In what order does Prim, started at `A`, add the vertices?"
    choices:
      - text: "A, C, B, D, E, F"
        correct: true
        explains: "Right. `A–C` 2, then `C–B` 1, then `B–D` 5 (the cheapest edge leaving `{A, B, C}`), then `D–E` 2, then `E–F` 3."
      - text: "A, B, C, D, E, F"
        explains: "From `A`, the cheapest edge is `A–C` (2), not `A–B` (4)."
      - text: "A, C, B, E, D, F"
        explains: "`E` is only reachable from `{A, B, C}` through `C–E` (10). `B–D` (5) is cheaper, so `D` comes first."
      - text: "A, C, B, D, F, E"
        explains: "Once `D` is in, `D–E` (2) is cheaper than `D–F` (6)."
    work: |-
      Tree `{A}`: frontier `A–B` 4, `A–C` 2. Add `C`.
      `{A, C}`: frontier `A–B` 4, `B–C` 1, `C–D` 8, `C–E` 10. Add `B`.
      `{A, B, C}`: frontier `B–D` 5, `C–D` 8, `C–E` 10. Add `D`.
      `{A, B, C, D}`: `D–E` 2 is the cheapest. Add `E`. Then `E–F` 3. Add `F`.
      Same tree as Kruskal, weight 13.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Same graph. Take the cut `{A, B, C}` against `{D, E, F}`. Which edge does the cut property guarantee is in every MST?"
    choices:
      - text: "B–D (5)"
        correct: true
        explains: "Right. The crossing edges are `B–D` 5, `C–D` 8 and `C–E` 10. The lightest, `B–D`, is safe, and here it is the unique lightest, so it is in every MST."
      - text: "B–C (1)"
        explains: "`B–C` is in the MST, but it doesn't cross this cut, so the cut property says nothing about it here."
      - text: "D–E (2)"
        explains: "Both ends of `D–E` are on the same side of the cut."
      - text: "C–E (10)"
        explains: "That is the heaviest crossing edge, the opposite of what the property picks."
    work: |-
      Crossing edges have one end in each side: `B–D` 5, `C–D` 8, `C–E` 10.
      The cut property: the lightest crossing edge belongs to some MST. When it is the unique lightest, it belongs to every MST.
      `B–D` is the unique lightest, so every MST contains it.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Heap-based Prim runs in `O((n + m) log n)`. On a complete graph with `n` vertices, what is that in terms of `n`?"
    choices:
      - text: "O(n log n)"
        explains: "A complete graph has about `n²/2` edges, so `m` dominates `n`."
      - text: "O(n² log n)"
        correct: true
        explains: "Right. `m = n(n − 1)/2 = Θ(n²)`, so `(n + m) log n = Θ(n² log n)`."
      - text: "O(n³)"
        explains: "That is closer to rescanning every edge in every round, `O(mn)`. The heap avoids the rescanning."
      - text: "O(n²)"
        explains: "Each of the up to `m` decrease-keys costs `log n`, so the log factor stays."
    work: |-
      Complete graph: `m = n(n − 1)/2 = Θ(n²)`.
      `(n + m) log n = Θ(n² log n)`.
      On graphs this dense, a plain array of keys (`O(n²)` total) is actually faster than the heap.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "With union by rank (no path compression), a tree holding 1000 vertices has height at most what?"
    choices:
      - text: "9"
        correct: true
        explains: "Right. A root of rank `r` has at least `2ʳ` vertices, so `2ʳ ≤ 1000` gives `r ≤ 9`, and height is at most rank."
      - text: "10"
        explains: "`2¹⁰ = 1024 > 1000`, so rank 10 needs more vertices than the tree has."
      - text: "999"
        explains: "That is a chain, which union by rank prevents by always hanging the shorter tree under the taller one."
      - text: "1"
        explains: "That would need path compression and every vertex pointing straight at the root. Union by rank alone doesn't guarantee it."
    work: |-
      Rank rises only when two equal-rank roots merge, so rank `r` needs at least `2ʳ` vertices.
      `2⁹ = 512 ≤ 1000 < 1024 = 2¹⁰`, so the rank is at most 9.
      Height ≤ rank, so height ≤ 9. Each `Find` costs `O(log n)`.
written:
  - topic: "Week 1 · Big-O and growth"
    ask: |-
      Rewrite each function as a power of `n` (log means log₂), then list them from slowest- to fastest-growing.
      `f₁ = 4^(log n)`, `f₂ = 2^(log n + 4)`, `f₃ = 2^((log n)/2)`, `f₄ = 5^(log n)`, `f₅ = 3^(2 log n)`
    answer: |-
      `f₁ = (2²)^(log n) = (2^(log n))² = n²`.
      `f₂ = 2^(log n) · 2⁴ = 16n`. An addition in the exponent is only a constant factor.
      `f₃ = (2^(log n))^(1/2) = √n`.
      `f₄ = n^(log 5) ≈ n^2.32`, using `b^(log n) = n^(log b)`.
      `f₅ = (3²)^(log n) = 9^(log n) = n^(log 9) ≈ n^3.17`. A multiplier in the exponent changes the class.
      Order: `f₃ < f₂ < f₁ < f₄ < f₅`, that is, `√n < 16n < n² < n^(log 5) < n^(log 9)`.
    rubric:
      - "`f₁ = n²` and `f₃ = √n`"
      - "`f₂ = 16n`: the `+ 4` gives a constant factor of 16, not a change of class"
      - "`f₄ = n^(log₂ 5)` and `f₅ = n^(log₂ 9)`, with exact exponents"
      - "Correct order: f₃, f₂, f₁, f₄, f₅"
  - topic: "Week 1 · Big-O and growth"
    ask: |-
      Show that `S(n) = 1³ + 2³ + ⋯ + n³` is `Θ(n⁴)`. Give explicit constants and, if you need one, a threshold `n₀`.
    answer: |-
      Upper bound: each of the `n` terms is at most `n³`, so `S(n) ≤ n · n³ = n⁴` for all `n ≥ 1` (`c₂ = 1`).
      Lower bound: keep only the terms with `i ≥ ⌈n/2⌉` and drop the rest, which are positive.
      There are `n − ⌈n/2⌉ + 1 = ⌊n/2⌋ + 1 ≥ n/2` such terms, and each is at least `(n/2)³`.
      So `S(n) ≥ (n/2) · (n/2)³ = n⁴/16` for all `n ≥ 1` (`c₁ = 1/16`).
      Therefore `n⁴/16 ≤ S(n) ≤ n⁴` for all `n ≥ 1`, so `S(n) = Θ(n⁴)`.
      This is the same pattern as `log(n!) = Θ(n log n)`: replace every term with the largest for the upper bound, and keep the top half for the lower bound.
    rubric:
      - "Upper bound `S(n) ≤ n⁴`, with `c₂ = 1`"
      - "Lower bound keeps the top half of the terms and counts them correctly (`⌊n/2⌋ + 1 ≥ n/2`)"
      - "Each kept term is at least `(n/2)³`, giving `c₁ = 1/16` (or another valid constant)"
      - "States `n₀` (here 1) and concludes Θ(n⁴) from both bounds"
  - topic: "Week 3 · Divide and conquer"
    ask: |-
      Let `T(n) ≤ 4T(n/2) + cn`, with `T(1) = O(1)` and `n` a power of 2.
      (a) Expand the recurrence three times.
      (b) Write the general `k`-th term in closed form.
      (c) Choose `k`, substitute, and give the Θ bound.
      (d) Confirm with the master theorem: give `a`, `b`, `d` and the case.
    answer: |-
      (a) `T(n) ≤ 4T(n/2) + cn`.
      `≤ 4[4T(n/4) + cn/2] + cn = 16T(n/4) + 3cn`.
      `≤ 16[4T(n/8) + cn/4] + 3cn = 64T(n/8) + 7cn`.
      (b) Level `i` contributes `4ⁱ · c(n/2ⁱ) = cn · 2ⁱ`, so `T(n) ≤ 4ᵏT(n/2ᵏ) + cn(1 + 2 + ⋯ + 2ᵏ⁻¹) = 4ᵏT(n/2ᵏ) + cn(2ᵏ − 1)`.
      Check against (a): `k = 3` gives `64T(n/8) + 7cn`.
      (c) The base case is reached when `n/2ᵏ = 1`, so `k = log n`. Then `4^(log n) = n²` and `2^(log n) = n`.
      `T(n) ≤ n² · T(1) + cn(n − 1) = Θ(n²)`.
      (d) `a = 4`, `b = 2`, `d = 1`. `log₂ 4 = 2 > 1 = d`, so the leaves dominate: `Θ(n^(log₂ 4)) = Θ(n²)`.
    rubric:
      - "(a) Three correct expansions, ending at `64T(n/8) + 7cn`"
      - "(b) General term `4ᵏT(n/2ᵏ) + cn(2ᵏ − 1)` (the geometric sum evaluated)"
      - "(c) `k = log n`, with `4^(log n) = n²` rewritten, giving Θ(n²)"
      - "(d) `a = 4`, `b = 2`, `d = 1`, case `d < log_b a`, so Θ(n²)"
  - topic: "Week 3 · Divide and conquer"
    ask: |-
      Solve each recurrence with the master theorem. For each, give `a`, `b`, `d`, say which case applies, and give the answer with an exact exponent.
      (a) `T(n) = 3T(n/4) + O(n)`
      (b) `T(n) = 8T(n/2) + O(n³)`
      (c) `T(n) = 5T(n/3) + O(n)`
    answer: |-
      (a) `a = 3`, `b = 4`, `d = 1`. `log₄ 3 ≈ 0.79 < 1 = d`, so the root dominates: `Θ(n)`.
      (b) `a = 8`, `b = 2`, `d = 3`. `log₂ 8 = 3 = d`, so every level costs the same: `Θ(n³ log n)`.
      (c) `a = 5`, `b = 3`, `d = 1`. `log₃ 5 ≈ 1.46 > 1 = d`, so the leaves dominate: `Θ(n^(log₃ 5))`.
      Ratio check, `a/bᵈ`: (a) `3/4 < 1`, (b) `8/8 = 1`, (c) `5/3 > 1`.
    rubric:
      - "(a) Root-dominated case, Θ(n)"
      - "(b) Balanced case, Θ(n³ log n)"
      - "(c) Leaf-dominated case, Θ(n^(log₃ 5)) with the exact exponent, not just ≈ n^1.46"
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: |-
      Multiply `A(x) = 2 + x` and `B(x) = 1 − x + x²` using the FFT.
      (a) Choose `n` and write both coefficient vectors.
      (b) Compute `FFT(a, i)` and `FFT(b, i)`, showing the even/odd split.
      (c) Multiply pointwise.
      (d) Interpolate with the inverse FFT, and check your answer.
    answer: |-
      (a) The product has degree `1 + 2 = 3`, so 4 coefficients: `n = 4`. `a = (2, 1, 0, 0)`, `b = (1, −1, 1, 0)`.
      (b) `a`: evens `(2, 0)` give `s = (2, 2)`; odds `(1, 0)` give `s' = (1, 1)`. So `FFT(a) = (2 + 1, 2 + i, 2 − 1, 2 − i) = (3, 2 + i, 1, 2 − i)`.
      `b`: evens `(1, 1)` give `s = (2, 0)`; odds `(−1, 0)` give `s' = (−1, −1)`. So `FFT(b) = (2 − 1, 0 − i, 2 + 1, 0 + i) = (1, −i, 3, i)`.
      Conjugate check: `2 + i` and `2 − i`; `−i` and `i`.
      (c) `3 · 1 = 3`. `(2 + i)(−i) = −2i − i² = 1 − 2i`. `1 · 3 = 3`. `(2 − i)(i) = 2i − i² = 1 + 2i`. Values: `(3, 1 − 2i, 3, 1 + 2i)`.
      (d) Run the FFT with `ω⁻¹ = −i`. Evens `(3, 3)` give `s = (6, 0)`. Odds `(1 − 2i, 1 + 2i)` give `s' = (2, −4i)`.
      `r₀ = 6 + 2 = 8`, `r₁ = 0 + (−i)(−4i) = −4`, `r₂ = 6 − 2 = 4`, `r₃ = 0 − (−i)(−4i) = 4`.
      Divide by 4: `(2, −1, 1, 1)`, so `A·B = 2 − x + x² + x³`.
      Check: `(2 + x)(1 − x + x²) = 2 − 2x + 2x² + x − x² + x³ = 2 − x + x² + x³`. And `A(1)·B(1) = 3 · 1 = 3`, the first value.
    rubric:
      - "`n = 4`, sized by the product's degree, with both vectors padded"
      - "Correct `FFT(a) = (3, 2 + i, 1, 2 − i)` and `FFT(b) = (1, −i, 3, i)`, using `i² = −1`"
      - "Correct pointwise products `(3, 1 − 2i, 3, 1 + 2i)`"
      - "Inverse uses `ω⁻¹ = −i` and divides by 4"
      - "Final answer `2 − x + x² + x³`, with a check (direct expansion or conjugates)"
  - topic: "Week 5 · Dynamic programming, part I"
    ask: |-
      Assignment 2 (6.2): hotels stand at mile posts `a₁ < a₂ < ⋯ < aₙ`, and you must end at `aₙ`. A day of `x` miles costs `(200 − x)²`. Design a dynamic program to minimise the total penalty.
      Give (a) the subproblem, (b) the recurrence with base case, (c) the fill order and where the answer is, (d) the running time as subproblems × work, and (e) how to recover the hotels.
    answer: |-
      (a) `P(j)` = the minimum total penalty of a trip that starts at mile 0 and ends with a stop at hotel `j`. Set `a₀ = 0`.
      (b) `P(0) = 0`. For `j ≥ 1`: `P(j) = min over 0 ≤ i < j of [P(i) + (200 − (aⱼ − aᵢ))²]`. The last day runs from the previous stop `i` to `j`.
      (c) Fill `j = 1, 2, …, n` in order, since `P(j)` uses only smaller indices. The answer is `P(n)`.
      (d) `n` subproblems × `O(n)` choices of `i` each = `O(n²)`.
      (e) Store `prev(j)`, the `i` that achieved the minimum. Follow `prev` back from `n` to 0 and reverse the list.
    rubric:
      - "Subproblem defined as the best penalty ending at hotel `j`, with `a₀ = 0`"
      - "Recurrence minimises over the previous stop `i`, adding `(200 − (aⱼ − aᵢ))²`, with base `P(0) = 0`"
      - "Increasing `j` order, answer `P(n)`"
      - "Running time `O(n²)`, stated as `n` subproblems × `O(n)` work"
      - "Recovery with stored choices (`prev`) and a walk back from `n`"
  - topic: "Week 6 · Dynamic programming, part II"
    ask: |-
      Assignment 2 (6.18), each coin at most once: denominations `x = (2, 5, 6)`, target `v = 8`.
      Fill the table `K(i, w)` for `i = 0..3` and `w = 0..8`, give the answer, and say which coins make it.
    answer: |-
      `K(i, w) = K(i − 1, w) OR K(i − 1, w − xᵢ)` (the second only if `xᵢ ≤ w`), with `K(0, 0) = T` and `K(0, w) = F` for `w > 0`.
      Row 0: `T F F F F F F F F`.
      Row 1 (coin 2): `T F T F F F F F F`.
      Row 2 (coin 5): `T F T F F T F T F`, adding `5` and `7 = 2 + 5`.
      Row 3 (coin 6): `T F T F F T T T T`, adding `6` and `8 = 2 + 6`.
      `K(3, 8) = T`, using coins 2 and 6. Trace back: `K(3, 8)` is T but `K(2, 8)` is F, so coin 6 is used. Then `K(2, 2)` is T from `K(1, 2)`, which is coin 2.
      Time `O(nv)`: `(n + 1)(v + 1)` cells at `O(1)` each.
    rubric:
      - "Rows are coins considered, columns are target sums, with the correct base row"
      - "Rows 1 and 2 correct (each coin looks up in the row above, not the same row)"
      - "Row 3 correct, so `K(3, 8) = T`"
      - "Identifies coins 2 and 6, by tracing back or by inspection"
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: |-
      Run Kruskal's algorithm on this graph: `P–Q` 6, `P–R` 3, `Q–R` 4, `Q–S` 2, `R–S` 5, `R–T` 7, `S–T` 8, `S–U` 1, `T–U` 9.
      List every edge in the order examined, say whether it is accepted or rejected and why, and give the total weight.
      Then give Kruskal's running time with union by rank, and say what dominates it.
    answer: |-
      Sorted: `S–U` 1, `Q–S` 2, `P–R` 3, `Q–R` 4, `R–S` 5, `P–Q` 6, `R–T` 7, `S–T` 8, `T–U` 9.
      `S–U` 1: accept. `Q–S` 2: accept, giving `{Q, S, U}`. `P–R` 3: accept, giving `{P, R}`.
      `Q–R` 4: accept, joining them into `{P, Q, R, S, U}`.
      `R–S` 5: reject, since `R` and `S` are in the same piece and the edge would close a cycle. `P–Q` 6: reject, same reason.
      `R–T` 7: accept, bringing in `T`. That makes 5 edges for 6 vertices, so the tree is complete. `S–T` 8 and `T–U` 9 would be rejected.
      MST: `S–U`, `Q–S`, `P–R`, `Q–R`, `R–T`, with total weight `1 + 2 + 3 + 4 + 7 = 17`.
      Time: sorting costs `O(m log m) = O(m log n)`. There are `2m` finds and `n − 1` unions, each `O(log n)` with union by rank. The sort dominates, giving `O(m log n)`.
    rubric:
      - "Edges examined in sorted order"
      - "Rejects `R–S` and `P–Q` because their ends are already connected (a cycle)"
      - "Correct tree, total weight 17"
      - "`O(m log n)`, with the sort named as the dominant cost"
---

A second practice paper, built for the midterm format: **120 minutes**, a multiple-choice part
and a short-answer part. It uses new questions, not ones from the final exam paper. It leans on the
topics the study log marks as weak:

- rewriting `b^(k·log n)` as a power of `n`
- reading geometric sums by their ratio
- DP running time as subproblems × work
- filling DP tables by hand
- naming the master theorem case with an exact exponent

It also uses the Chapter 6 exercises from Assignment 2 that the first paper does not cover.

Nothing is revealed until you submit. Submit one section at a time or the whole paper at once.
There is no penalty for a wrong answer, and blank answers in a submitted section count as wrong.

Part 2 has 8 short-answer questions. Write them out as you would on paper, with every
intermediate value. On the real midterm you may bring one handwritten, double-sided reference
sheet for this part. Throughout, `log` means `log₂`.
