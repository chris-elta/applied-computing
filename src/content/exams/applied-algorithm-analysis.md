---
course: applied-algorithm-analysis
title: "Applied Algorithm Analysis · Final Exam"
minutes: 140
passMark: 60
questions:
  - topic: "Week 1 · Big-O and growth"
    ask: "`fib3` (memoised) makes the same recursive calls as `fib1`, yet runs in linear time. Why?"
    choices:
      - text: "It makes fewer calls than `fib1` in total"
        explains: "The number of calls is about the same. What changes is how much work each repeat call does."
      - text: "There are only n distinct subproblems, F(0) to F(n), and each is computed once; every other call is a lookup"
        correct: true
        explains: "Right. Count distinct subproblems, not calls. The call tree is just as bushy, but almost every node does no work."
      - text: "It replaces recursion with a loop, and loops are always linear"
        explains: "`fib3` is still recursive. It is the notebook that removes the repeated work."
      - text: "Memoisation makes each call cheaper by a constant factor"
        explains: "A constant factor cannot turn an exponential into a linear cost."
    work: |-
      `fib1` recomputes each `F(k)` many times because nothing records an answer.
      `fib3` checks a notebook first and writes to it after, so `F(k)` is computed once.
      There are only `n + 1` different questions, each answered once at constant cost, so the total is linear.
      The calls are still made, but almost all of them are a single lookup.
  - topic: "Week 1 · Big-O and growth"
    ask: "You buy a machine twice as fast. Roughly how much larger an input can `fib1` handle in the same time, given that its work multiplies by about 1.618 per extra unit of `n`?"
    choices:
      - text: "Nothing, ever"
        explains: "It buys a little, about 1.4 extra values of `n`, but no more."
      - text: "About twice as large"
        explains: "That is what a linear algorithm would give you. `fib1` is exponential."
      - text: "About 1.4 larger, i.e. n grows by roughly 1.44"
        correct: true
        explains: "Right. You can afford `log_φ 2 ≈ 1.44` extra multiplications by φ. Hardware barely moves an exponential."
      - text: "About 10 larger"
        explains: "Doubling the speed buys one factor of 2, and 1.618 fits into 2 only about 1.44 times."
    work: |-
      Doubling speed lets you afford one extra factor of 2 in work.
      Each extra unit of `n` costs a factor of `φ ≈ 1.618`.
      The number of extra units is `log_φ 2 = ln 2 / ln 1.618 ≈ 0.693 / 0.481 ≈ 1.44`.
      So `n` grows by about 1.4, not by a factor of 2.
  - topic: "Week 1 · Big-O and growth"
    ask: "`fib4` keeps only `prev` and `curr`. How much space does it use?"
    choices:
      - text: "Θ(1) counting words, but Θ(n) counting bits, because F(n) itself needs about 0.694·n bits"
        correct: true
        explains: "Right. The two answers differ because one counts variables and the other counts storage, and neither is wrong."
      - text: "Θ(n), because it must still remember every earlier value"
        explains: "That describes `fib2`. `fib4` throws away everything older than the last two."
      - text: "Θ(1) however you count, since it has only two variables"
        explains: "That is true only if one variable costs one unit. F(1000) needs 694 bits, so it does not fit where F(10) does."
      - text: "Θ(log n), because it halves the problem"
        explains: "Nothing is halved. It is a plain loop over `n` steps."
    work: |-
      Words: two variables, whatever `n` is, so `Θ(1)`.
      Bits: `F(n) ≈ φⁿ/√5` has about `0.694·n` bits, so each variable grows with `n`.
      Bit-counting therefore gives `Θ(n)`.
      Confusing the two ways of counting is the most common error in this topic.
  - topic: "Week 1 · Big-O and growth"
    ask: "Which pair of witnesses does NOT prove that 3n + 7 = O(n)?"
    choices:
      - text: "c = 4, n₀ = 7"
        explains: "This works: 3n + 7 ≤ 4n exactly when n ≥ 7."
      - text: "c = 5, n₀ = 4"
        explains: "This works: 3n + 7 ≤ 5n exactly when n ≥ 3.5, so n ≥ 4 is enough."
      - text: "c = 3, n₀ = 1000"
        correct: true
        explains: "Right. 3n + 7 ≤ 3n is never true, so no choice of n₀ can rescue c = 3. Postponing the start skips finitely many cases and cannot fix a fence that is too low forever."
      - text: "c = 10, n₀ = 1"
        explains: "This works: for n ≥ 1, 7 ≤ 7n, so 3n + 7 ≤ 10n."
    work: |-
      Test each pair against `3n + 7 ≤ c·n` for all `n ≥ n₀`.
      `c = 10`: `3n + 7 ≤ 10n` when `n ≥ 1`. Works.
      `c = 4`: `3n + 7 ≤ 4n` when `n ≥ 7`. Works.
      `c = 5`: `3n + 7 ≤ 5n` when `n ≥ 3.5`, so `n₀ = 4` works.
      `c = 3`: `3n + 7 ≤ 3n` needs `7 ≤ 0`, which is never true. No `n₀` helps.
  - topic: "Week 1 · Big-O and growth"
    ask: "Which statement about 3n is FALSE?"
    choices:
      - text: "3n = o(n²)"
        explains: "True: for any c > 0, 3n ≤ c·n² once n ≥ 3/c."
      - text: "3n = Ω(n)"
        explains: "True: 3n ≥ 1·n for all n ≥ 1."
      - text: "3n = O(n)"
        explains: "True: take c = 3, n₀ = 1."
      - text: "3n = o(n)"
        correct: true
        explains: "Right, this is the false one. Little-o needs the bound to hold for every c > 0, including c = 1, and 3n ≤ n never holds. 3n and n grow at the same rate."
    work: |-
      Big-O: `c = 3` works, so `3n = O(n)`.
      Omega: `3n ≥ 1·n`, so `3n = Ω(n)`.
      Little-o needs every `c > 0`. Try `c = 1`: `3n ≤ n` never holds, so `3n ≠ o(n)`.
      Against `n²`: `3n ≤ c·n²` when `n ≥ 3/c`, so `3n = o(n²)`.
  - topic: "Week 1 · Big-O and growth"
    ask: "A colleague says: “Ω means best case, and O means worst case.” What is wrong with that?"
    choices:
      - text: "O applies to time and Ω applies to space"
        explains: "Both apply to any function, time or space."
      - text: "Nothing: that is what the symbols mean"
        explains: "They do not. Each symbol bounds a function; which input you feed it is a separate question."
      - text: "Ω means average case and Θ means worst case"
        explains: "Neither symbol names a case. They describe how tight a bound on some function is."
      - text: "Bound tightness (O, Ω, Θ) and which input is being considered (best, average, worst) are separate axes; a full statement needs one of each"
        correct: true
        explains: "Right. “Quicksort is O(n²) in the worst case and Θ(n log n) on average” is one consistent sentence with two independent claims."
    work: |-
      `O`, `Ω`, `Θ` say how a bound relates to a function: ceiling, floor, or both.
      Best, average and worst say which input's cost the function describes.
      You can put a ceiling on the worst case, or a floor on the best case, or `Θ` on any of them.
      So a statement needs one choice from each axis.
  - topic: "Week 1 · Big-O and growth"
    ask: "Which list is in increasing order of growth?"
    choices:
      - text: "n, log n, n log n, n², 2ⁿ, n!"
        explains: "`log n` grows slower than `n`, so it must come first."
      - text: "log n, n, n log n, n², 2ⁿ, n!"
        correct: true
        explains: "Right. This is the ladder: logarithmic, linear, linearithmic, quadratic, exponential, factorial."
      - text: "log n, n, n log n, 2ⁿ, n², n!"
        explains: "`n²` is polynomial and `2ⁿ` is exponential, so `2ⁿ` must come after it."
      - text: "log n, n, n², n log n, 2ⁿ, n!"
        explains: "`n log n` grows slower than `n²`, so it belongs before it."
    work: |-
      `log n < n` because a logarithm grows very slowly.
      `n < n log n < n²` because `log n < n`.
      Any polynomial is eventually smaller than `2ⁿ`.
      `2ⁿ` counts subsets and `n!` counts orderings, and `n!` is larger.
  - topic: "Week 1 · Big-O and growth"
    ask: "Production sorting libraries switch to insertion sort for very small arrays, even though mergesort is O(n log n) and insertion sort is O(n²). Which idea from Week 1 explains this?"
    choices:
      - text: "Insertion sort is Θ(n log n) on small arrays"
        explains: "Its rate does not change with size. It is the constants, not the growth rate, that favour it when n is tiny."
      - text: "Mergesort is only correct for large arrays"
        explains: "Mergesort is correct for every size. It is simply not the fastest on small ones."
      - text: "Big-O is a lower bound, so insertion sort is guaranteed to be faster"
        explains: "Big-O is an upper bound, and it says nothing about small inputs at all."
      - text: "Constants vanish only in the limit; asymptotics pick the algorithm, not the implementation"
        correct: true
        explains: "Right. Below a few dozen elements the hidden constant factors decide the winner."
    work: |-
      Asymptotic notation suppresses constant factors.
      That is safe as `n` grows, because the term with the higher growth rate eventually wins.
      For small `n` the constants can outweigh the growth rate.
      So insertion sort is faster below a threshold, and libraries exploit that.
  - topic: "Week 1 · Big-O and growth"
    ask: "An algorithm runs one phase costing Θ(n log n) and then a second phase costing Θ(n). What is the total?"
    choices:
      - text: "Θ(n² log n)"
        explains: "Running phases in sequence adds their costs. It does not multiply them."
      - text: "Θ(n)"
        explains: "That is the smaller phase. The total cannot be smaller than the bigger phase."
      - text: "Θ(log n)"
        explains: "Neither phase is logarithmic, and the sum cannot be smaller than either part."
      - text: "Θ(n log n)"
        correct: true
        explains: "Right. max{f, g} = Θ(f + g), so the faster phase can be dropped: n log n dominates n."
    work: |-
      Sequential phases add: `n log n + n`.
      For non-negative `f, g`: `max{f, g} ≤ f + g ≤ 2·max{f, g}`, so the sum is `Θ` of the larger.
      For `n ≥ 2`, `n log n ≥ n`, so the total is `Θ(n log n)`.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "How many bits are needed to write the number 1,000,000 in binary?"
    choices:
      - text: "6"
        explains: "That is the number of decimal digits, not bits."
      - text: "20"
        correct: true
        explains: "Right. 2¹⁹ = 524,288 is too small and 2²⁰ = 1,048,576 is enough, so it needs 20 bits. In general the count is ⌈log₂(N+1)⌉."
      - text: "10"
        explains: "Ten bits only reaches 1,023. You need about twice as many."
      - text: "1,000,000"
        explains: "That is the value. The size of the input is the number of digits, which is about log₂ N."
    work: |-
      Bits needed `≈ ⌈log₂(N + 1)⌉`.
      `2¹⁹ = 524,288 < 1,000,000`, so 19 bits is not enough.
      `2²⁰ = 1,048,576 > 1,000,000`, so 20 bits is.
      Input size is the number of bits, about `log₂ N`, never the value `N`.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "A loop counts from 1 up to N, where N is stored in n bits. One more bit is added to N, so N roughly doubles. What happens to the running time?"
    choices:
      - text: "It grows by one step"
        explains: "Growing by one step would be the case if the cost were `n`. The cost is `N`, which is `2ⁿ`."
      - text: "It roughly doubles: the loop is exponential in the input size n"
        correct: true
        explains: "Right. One extra character of input, twice the work: N is about 2ⁿ, so a loop of N steps is exponential in n."
      - text: "It stays the same"
        explains: "The loop runs N times, so more N means more iterations."
      - text: "It grows by a constant factor of 10"
        explains: "Adding one binary digit doubles the range, not multiplies it by 10."
    work: |-
      An `n`-bit number has value up to about `2ⁿ`.
      The loop does `N` steps, so its cost is about `2ⁿ`.
      Adding one bit doubles `N`, which doubles the loop.
      Linear in the value `N`, but exponential in the input size `n`.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Why is Ω(n) a lower bound for adding two n-bit numbers, for every possible algorithm?"
    choices:
      - text: "Any correct algorithm must at least read every digit of both numbers"
        correct: true
        explains: "Right. The bound describes the problem, not one method, which is why upper and lower bounds meeting at Θ(n) closes the question."
      - text: "Carries can ripple through all n columns"
        explains: "Carries explain why one method is careful, but a lower bound cannot depend on one method."
      - text: "Addition is easier than multiplication"
        explains: "True, but it says nothing about how low the cost of addition can go."
      - text: "Column addition performs n column operations"
        explains: "That is the upper bound for one method. A lower bound has to hold for all methods."
    work: |-
      A correct sum depends on every digit of both inputs.
      An algorithm that skipped a digit could be given a different digit there and still give the same output.
      So every algorithm does at least `n` operations: `Ω(n)`.
      With column addition's `O(n)`, addition is `Θ(n)`.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Schoolbook multiplication of two n-bit numbers costs O(n²). If you double the bit length of both inputs, the cost grows by roughly a factor of:"
    choices:
      - text: "8"
        explains: "That would be cubic growth. Schoolbook multiplication is quadratic."
      - text: "4"
        correct: true
        explains: "Right. (2n)² = 4n². Addition, by contrast, only doubles."
      - text: "16"
        explains: "That would be a fourth-power cost."
      - text: "2"
        explains: "That is what you would see for a linear operation such as addition."
    work: |-
      Cost is proportional to `n²`.
      Replace `n` with `2n`: `(2n)² = 4n²`.
      So the cost grows by a factor of 4.
      There are `n` partial products, each added at `O(n)`, and both counts double.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Using the halve-and-double method (Al-Khwarizmi) to compute 9 × 6, which left-hand values are added up?"
    choices:
      - text: "18 and 36"
        correct: true
        explains: "Right: 9,6 (even, skip); 18,3 (odd, keep); 36,1 (odd, keep). 18 + 36 = 54."
      - text: "9, 18 and 36"
        explains: "Only rows whose right-hand value is odd are kept, and the first row has y = 6."
      - text: "18 only"
        explains: "The row 36, 1 also has an odd right-hand value, so 36 is kept as well."
      - text: "9 and 36"
        explains: "9 pairs with 6, which is even, so that row is dropped."
    work: |-
      Rows: `(9, 6)`, `(18, 3)`, `(36, 1)`, then `y = 0` stops.
      Keep a row when its `y` is odd: `6` is even, `3` is odd, `1` is odd.
      Sum the kept `x` values: `18 + 36 = 54`.
      Check: `9 × 6 = 54`. The odd rows are the 1-bits of `6 = 110₂`.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "What is −7 mod 3, using the definition x = qN + r with 0 ≤ r < N?"
    choices:
      - text: "1"
        explains: "7 mod 3 is 1, but the sign of x matters here."
      - text: "−2"
        explains: "The remainder must be non-negative."
      - text: "−1"
        explains: "That is a remainder in the wrong range; the definition requires 0 ≤ r < N."
      - text: "2"
        correct: true
        explains: "Right. −7 = (−3)·3 + 2, and 2 is in the range 0 to 2."
    work: |-
      Find `q` and `r` with `−7 = 3q + r` and `0 ≤ r < 3`.
      `q = −3` gives `3q = −9`, so `r = −7 − (−9) = 2`.
      `2` is in `0…2`, so `−7 mod 3 = 2`.
      The `0 ≤ r < N` condition is what rules out `−1`.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Under the course's convention that mod binds loosest, what is 7 · 8 mod 5?"
    choices:
      - text: "1"
        correct: true
        explains: "Right. It means (7 · 8) mod 5 = 56 mod 5 = 1."
      - text: "56"
        explains: "That is the product before reducing."
      - text: "3"
        explains: "That is 8 mod 5 alone."
      - text: "21"
        explains: "That reads it as 7 · (8 mod 5) = 7 · 3, which is a different integer. Mod applies to the whole product."
    work: |-
      `mod` binds loosest, so `a · b mod N` means `(a · b) mod N`.
      `7 · 8 = 56`.
      `56 = 11·5 + 1`, so `56 mod 5 = 1`.
      The other reading, `7 · (8 mod 5) = 21`, is congruent to 1 but is not a remainder.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Which of these statements is FALSE?"
    choices:
      - text: "25 ≡ 1 (mod 12)"
        explains: "True: 25 − 1 = 24 = 2 · 12."
      - text: "17 ≡ 5 (mod 12)"
        explains: "True: 17 − 5 = 12."
      - text: "−3 ≡ 9 (mod 12)"
        explains: "True: −3 − 9 = −12, and −3 mod 12 is 9."
      - text: "14 ≡ 5 (mod 12)"
        correct: true
        explains: "Right, this is the false one. 14 − 5 = 9 is not a multiple of 12; the remainders are 2 and 5."
    work: |-
      `x ≡ y (mod N)` when `N` divides `x − y`.
      `17 − 5 = 12` ✓, `−3 − 9 = −12` ✓, `25 − 1 = 24` ✓.
      `14 − 5 = 9`, and 12 does not divide 9, so `14 ≢ 5`.
      Same check by remainder: `14 mod 12 = 2` but `5 mod 12 = 5`.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "What is 2⁴⁷ mod 31? (Hint: 2⁵ = 32.)"
    choices:
      - text: "1"
        explains: "That would be 2⁴⁵. There are two more factors of 2 in 2⁴⁷."
      - text: "4"
        correct: true
        explains: "Right. 2⁵ ≡ 1 (mod 31), so 2⁴⁷ = (2⁵)⁹ · 2² ≡ 1 · 4 = 4."
      - text: "2"
        explains: "It would need the exponent to be 1 more than a multiple of 5. 47 is 2 more."
      - text: "16"
        explains: "That would be 2⁴, but 47 = 45 + 2, not 45 + 4."
    work: |-
      `32 = 31 + 1`, so `2⁵ ≡ 1 (mod 31)`.
      `2⁴⁷ = 2⁴⁵ · 2² = (2⁵)⁹ · 4`.
      Substitute `2⁵ ≡ 1`: `(2⁵)⁹ ≡ 1⁹ = 1`.
      So `2⁴⁷ ≡ 1 · 4 = 4 (mod 31)`, without ever writing the 15-digit number.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Why is reducing mod N after a modular addition cheap, but after a modular multiplication expensive?"
    choices:
      - text: "The sum of two numbers below N is below 2N, so at most one subtraction is needed; a product can be nearly N², which needs a full long division"
        correct: true
        explains: "Right. Addition costs O(n) in total and multiplication O(n²), because the reduction after a product is itself a division."
      - text: "Reduction costs the same in both cases, but multiplication has more inputs"
        explains: "Both have two inputs. The difference is how large the overshoot is."
      - text: "Multiplication produces a longer carry chain"
        explains: "Carries are not the reason. It is how far the result can overshoot N."
      - text: "Addition never needs reducing"
        explains: "It does, but only by at most one copy of N."
    work: |-
      Addition: `a, b < N` gives `a + b < 2N`. Check if the sum reached `N` and subtract once: `O(n)`.
      Multiplication: `a, b < N` gives `a·b < N²`, up to `2n` bits.
      The overshoot is nearly a factor of `N`, so one subtraction does not help.
      You need one long division by `N`, which is `O(n²)`, on top of the `O(n²)` multiply.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "The exponent y in x^y mod N has 500 bits. About how many modular multiplications does the square-and-multiply method need, at most?"
    choices:
      - text: "About 2⁵⁰⁰"
        explains: "That is what decrementing y one at a time would take. Halving is the whole point."
      - text: "About 1,000 (at most 2n)"
        correct: true
        explains: "Right. The exponent at least halves every two calls, and a 500-bit exponent can be halved at most 500 times, so at most 2 · 500 = 1000 calls."
      - text: "About 250,000"
        explains: "That is n², the cost of one multiplication, not the number of them."
      - text: "About 500³"
        explains: "That is the total bit cost O(n³), not the count of multiplications."
    work: |-
      Even `y`: halve it. Odd `y`: subtract 1, and the next step halves.
      So `y` at least halves every two calls.
      An `n`-bit `y` can be halved at most `n` times, giving at most `2n` calls.
      With `n = 500` that is `2n = 1000` multiplications, each `O(n²)`, so `O(n³)` in all.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Modular exponentiation with modulus N = 11. What is the largest value the algorithm ever needs to hold?"
    choices:
      - text: "Around 5^y, the true answer"
        explains: "The algorithm never computes the true power. It holds only remainders and their products."
      - text: "At most 11"
        explains: "The products are formed before they are reduced, so intermediate products can exceed 11."
      - text: "At most 100, since every stored value is below 11 and the largest product is 10 · 10"
        correct: true
        explains: "Right. The reduction after every step keeps stored values below N, and a product of two of them is below N², so never more than 2n bits."
      - text: "There is no bound; it depends on y"
        explains: "The bound depends only on N. That is why the cost per step stays flat."
    work: |-
      After every step the running value is reduced to `0…10`.
      The next step multiplies two such values, or one value by `x < 11`.
      The largest product is `10 × 10 = 100`, and then it is reduced again.
      The bound depends only on `N`, however large `y` is.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Fast exponentiation, Euclid, and binary search all cost O(log n) rounds. Which reading of the logarithm explains this?"
    choices:
      - text: "Digits: how long the number is to write down"
        explains: "That reading gives the input size, n ≈ log₂ N. It is a different reason from the round count."
      - text: "Halvings: how many times you can halve the quantity before reaching 1"
        correct: true
        explains: "Right. Each round halves something (the exponent, the larger value, the search range), so the number of rounds is about log₂ of its starting size."
      - text: "Height: the depth of a complete binary tree"
        explains: "That is the reading behind divide and conquer recursions, not these loops."
      - text: "The base of the logarithm"
        explains: "The base is a constant factor and vanishes inside big-O. It never explains where log comes from."
    work: |-
      The three readings are digits, height and halvings.
      Fast exponentiation halves its exponent, Euclid halves its larger value every two rounds, and binary search halves its range.
      Each gets `log₂` of the starting size in rounds because it can be halved that many times before reaching 1.
      The base does not matter, but knowing which reading applies tells you why.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "What is gcd(252, 105) by Euclid's algorithm?"
    choices:
      - text: "21"
        correct: true
        explains: "Right: 252 mod 105 = 42, 105 mod 42 = 21, 42 mod 21 = 0."
      - text: "42"
        explains: "42 is the first remainder, not the last non-zero one."
      - text: "3"
        explains: "3 divides both, but a larger number, 21, does as well."
      - text: "7"
        explains: "7 divides both, but it is not the greatest common divisor."
    work: |-
      `gcd(252, 105) = gcd(105, 252 mod 105) = gcd(105, 42)`.
      `105 mod 42 = 21`, so `gcd(105, 42) = gcd(42, 21)`.
      `42 mod 21 = 0`, so `gcd(42, 21) = gcd(21, 0) = 21`.
      Check: `252 = 12 · 21` and `105 = 5 · 21`.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Which pair of inputs makes Euclid's algorithm run for the most rounds relative to their size?"
    choices:
      - text: "Any number and 1"
        explains: "gcd(a, 1) takes one round: a mod 1 = 0."
      - text: "Two large primes chosen at random"
        explains: "Their size does not make Euclid slow. It is the ratio of the numbers, not primality, that decides."
      - text: "Two equal numbers, e.g. (500, 500)"
        explains: "500 mod 500 = 0, so it stops after one round."
      - text: "Consecutive Fibonacci numbers, e.g. (610, 377)"
        correct: true
        explains: "Right. Each remainder is a single subtraction, so the values shrink as slowly as the lemma a mod b < a/2 allows."
    work: |-
      `a mod b < a/2`, so the larger value halves every two rounds.
      The worst case is when each quotient is 1, so each step is a plain subtraction.
      That happens for consecutive Fibonacci numbers: `610 → 377 → 233 → 144 → …`.
      It takes 13 steps, the slowest Euclid ever runs on numbers that size.
  - topic: "Week 2 · Arithmetic on bits"
    ask: "Euclid's algorithm on n-bit numbers runs at most 2n rounds, each costing one division at O(n²). What is the total cost?"
    choices:
      - text: "O(n³)"
        correct: true
        explains: "Right: rounds × cost per round = 2n · O(n²)."
      - text: "O(2ⁿ)"
        explains: "The rounds are at most 2n, not 2ⁿ, because the larger value halves every two rounds."
      - text: "O(n log n)"
        explains: "There is no log factor here: the rounds are linear in n and each costs n²."
      - text: "O(n²)"
        explains: "That is the cost of one round. There are up to 2n of them."
    work: |-
      Rounds: the larger value halves every two rounds, so at most `2n`.
      Cost per round: one `a mod b`, which is `O(n²)`.
      Multiply: `2n · O(n²) = O(n³)`.
      Fast modular exponentiation is analysed the same way and also lands on `O(n³)`.
  - topic: "Week 3 · Divide and conquer"
    ask: "Karatsuba's trick computes xL·yR + xR·yL from one extra multiplication. Which expression is it?"
    choices:
      - text: "(xL + yL)(xR + yR) − xL·xR"
        explains: "The pairing is wrong: the sums must combine the halves of the same number."
      - text: "(xL + xR)(yL + yR) − xL·yL − xR·yR"
        correct: true
        explains: "Right. xL·yL and xR·yR are needed for the outer terms anyway, so only the product of the sums is new."
      - text: "(xL − xR)(yL − yR) + xL·yL"
        explains: "That does not expand to the middle term."
      - text: "xL·yL + xR·yR"
        explains: "That is the sum of the outer terms, not the middle term."
    work: |-
      Expand `(xL + xR)(yL + yR) = xL·yL + xL·yR + xR·yL + xR·yR`.
      Subtract `xL·yL` and `xR·yR`, which are already computed.
      What remains is `xL·yR + xR·yL`, the middle term.
      Three multiplications instead of four, and two extra subtractions that are linear.
  - topic: "Week 3 · Divide and conquer"
    ask: "Splitting an n-bit multiplication into four half-size multiplications gives T(n) = 4T(n/2) + O(n). Why does this save nothing over schoolbook?"
    choices:
      - text: "Splitting the numbers costs O(n²)"
        explains: "Splitting is index arithmetic or shifting, so it is linear."
      - text: "The additions cost more than the multiplications"
        explains: "The additions are linear. It is the four products that add up to n²."
      - text: "Each half-size product costs a quarter as much, and there are four of them: 4 · (n/2)² = n²"
        correct: true
        explains: "Right. The shrinkage has to outrun the number of subproblems; here a quarter, four times, is one."
      - text: "The recursion never reaches the base case"
        explains: "It reaches size 1 after log₂ n levels; that is not the problem."
    work: |-
      Schoolbook on `n` bits costs about `n²`.
      Four half-size products cost `4 · (n/2)² = 4 · n²/4 = n²`.
      Same cost, so `T(n) = 4T(n/2) + O(n)` is still `O(n²)`.
      Making subproblems smaller is free from the split. You need fewer of them.
  - topic: "Week 3 · Divide and conquer"
    ask: "In T(n) = a·T(n/b) + O(nᵈ), what does d describe?"
    choices:
      - text: "The exponent of the whole algorithm's running time"
        explains: "That is what the master theorem computes. Karatsuba and the four-product version share d = 1 but have different running times."
      - text: "The work one call does on its own (splitting and combining), not counting its children"
        correct: true
        explains: "Right. The children are already accounted for by the a·T(n/b) term."
      - text: "The depth of the recursion tree"
        explains: "The depth is log_b n. It comes from b."
      - text: "How many subproblems there are"
        explains: "That is a, the branching factor."
    work: |-
      The recursive work is fully counted by `a·T(n/b)`.
      `d` is only the cost of what one call does itself: dividing and combining.
      Four-product version: `a = 4, b = 2, d = 1`. Karatsuba: `a = 3, b = 2, d = 1`.
      They share `d = 1` but have different running times, so `d` is not the total cost.
  - topic: "Week 3 · Divide and conquer"
    ask: "Karatsuba's recurrence is T(n) = 3T(n/2) + O(n). Level k of the recursion tree has 3ᵏ nodes, each of size n/2ᵏ. What is the total work at level k?"
    choices:
      - text: "3ᵏ · O(n)"
        explains: "This forgets that each node's input is n/2ᵏ, not n."
      - text: "(3/2)ᵏ · O(n)"
        correct: true
        explains: "Right. 3ᵏ · (n/2ᵏ) = (3/2)ᵏ · n. The ratio 3/2 is above 1, so the levels grow going down and the leaves dominate."
      - text: "(2/3)ᵏ · O(n)"
        explains: "The ratio is inverted. Nodes multiply by 3 as sizes divide by 2."
      - text: "O(n) at every level"
        explains: "That happens only when the ratio is exactly 1, as in mergesort."
    work: |-
      Number of nodes at depth `k`: `3ᵏ`.
      Each does linear work on size `n/2ᵏ`: `O(n/2ᵏ)`.
      Level total: `3ᵏ · n/2ᵏ = (3/2)ᵏ · n`.
      The ratio `3/2 > 1`, so cost grows down the tree and the bottom level, `O(n^log₂3) = O(n^1.59)`, is the whole cost.
  - topic: "Week 3 · Divide and conquer"
    ask: "Using the master theorem, what does T(n) = 4T(n/2) + O(n²) solve to?"
    choices:
      - text: "O(n²)"
        explains: "That would be the case if d were larger than log_b a. Here they are equal, so a log factor appears."
      - text: "O(n log n)"
        explains: "Balanced does not mean n log n. The exponent is d, which is 2."
      - text: "O(n³)"
        explains: "That would need the leaves to dominate, i.e. d < log_b a."
      - text: "O(n² log n)"
        correct: true
        explains: "Right. a = 4, b = 2, d = 2, and log₂ 4 = 2 = d, so every level costs the same: n² per level, times log n levels."
    work: |-
      Read off `a = 4`, `b = 2`, `d = 2`.
      `log_b a = log₂ 4 = 2`, and `d = 2`. Equal: the balanced case.
      Balanced gives `O(nᵈ log n) = O(n² log n)`.
      Balanced tells you the shape; `d` gives the exponent.
  - topic: "Week 3 · Divide and conquer"
    ask: "Using the master theorem, what does T(n) = 8T(n/2) + O(n²) solve to? (This is matrix multiplication by cutting each matrix into blocks.)"
    choices:
      - text: "O(n³)"
        correct: true
        explains: "Right. log₂ 8 = 3 > d = 2, so the leaves dominate and the answer is n^log_b a = n³."
      - text: "O(n²)"
        explains: "That would need d > log_b a. Here the recursion is worth more than the combine step."
      - text: "O(n² log n)"
        explains: "The balanced case needs log₂ 8 = 2, but it is 3."
      - text: "O(n⁸)"
        explains: "The exponent is log_b a = log₂ 8 = 3, not a."
    work: |-
      `a = 8`, `b = 2`, `d = 2`.
      `log₂ 8 = 3`, which is greater than `d = 2`.
      Leaves dominate: `O(n^log_b a) = O(n³)`.
      Strassen's 7 products instead of 8 give `O(n^log₂7) = O(n^2.81)`.
  - topic: "Week 3 · Divide and conquer"
    ask: "Binary search satisfies T(n) = T(n/2) + O(1). What are a, b and d, and the running time?"
    choices:
      - text: "a = 1, b = 2, d = 0, so O(log n)"
        correct: true
        explains: "Right. log₂ 1 = 0 = d, so it is balanced: O(n⁰ log n) = O(log n)."
      - text: "a = 2, b = 2, d = 1, so O(n log n)"
        explains: "That is mergesort. Binary search recurses into one half only."
      - text: "a = 2, b = 2, d = 0, so O(n)"
        explains: "a counts subproblems you actually solve. The other half is thrown away, not solved."
      - text: "a = 1, b = 2, d = 1, so O(n)"
        explains: "The work per call is a single comparison, which is O(1) = O(n⁰), so d = 0."
    work: |-
      One recursive call on one half: `a = 1`, `b = 2`.
      One comparison per call: `O(1) = O(n⁰)`, so `d = 0`.
      `log₂ 1 = 0`, which equals `d`: balanced.
      `O(n⁰ log n) = O(log n)`.
  - topic: "Week 3 · Divide and conquer"
    ask: "Which recurrence can the master theorem NOT be applied to directly?"
    choices:
      - text: "T(n) = 9T(n/3) + O(n)"
        explains: "This has the required form a = 9, b = 3, d = 1."
      - text: "T(n) = T(n/2) + O(1)"
        explains: "This has the required form a = 1, b = 2, d = 0."
      - text: "T(n) = 2T(n/2) + O(n)"
        explains: "This has the required form a = 2, b = 2, d = 1."
      - text: "T(n) = T(n − 1) + O(n)"
        correct: true
        explains: "Right. It shrinks by subtraction, so there is no b. Draw the recursion tree instead."
    work: |-
      The theorem needs the form `aT(n/b) + O(nᵈ)`: equal-size subproblems shrunk by a factor `b`.
      The last three all fit, with `(2,2,1)`, `(9,3,1)` and `(1,2,0)`.
      `T(n − 1) + O(n)` shrinks by subtraction and has no `b`.
      Check the form before reaching for the formula.
  - topic: "Week 3 · Divide and conquer"
    ask: "Merge the sorted lists [1, 4, 9] and [2, 3, 5, 10] using the merge routine from the lectures. How many comparisons are made?"
    choices:
      - text: "3"
        explains: "That is the length of the first list. Comparisons continue until one list runs out."
      - text: "6"
        correct: true
        explains: "Right. Every comparison writes one element; when the first list empties, the remaining element is copied with no comparison. 7 elements, 6 comparisons."
      - text: "4"
        explains: "That would be the best case, when the whole of one list is below the other. Here the lists interleave."
      - text: "7"
        explains: "That is the number of elements written. The last one is free."
    work: |-
      Compare fronts, emit the smaller:
      `1 v 2 → 1`, `4 v 2 → 2`, `4 v 3 → 3`, `4 v 5 → 4`, `9 v 5 → 5`, `9 v 10 → 9`.
      That is 6 comparisons. The first list is now empty, so `10` is copied with no comparison.
      In general `k + l` elements need at most `k + l − 1` comparisons.
  - topic: "Week 3 · Divide and conquer"
    ask: "Mergesort sorts n = 1024 elements. How many levels of merging are there, and what does each level cost?"
    choices:
      - text: "10 levels, each costing O(n²)"
        explains: "Merging is linear: each comparison writes one element."
      - text: "10 levels, each costing O(n)"
        correct: true
        explains: "Right. log₂ 1024 = 10 levels; every level moves all n items through merges, so each is O(n). Total O(n log n)."
      - text: "1024 levels, each costing O(1)"
        explains: "The depth is log₂ n, not n, because each level halves the array."
      - text: "2 levels, each costing O(n log n)"
        explains: "There are log₂ n levels, and each costs O(n). The n log n is the total."
    work: |-
      Each level halves the pieces: `1024 → 512 → … → 1`.
      Number of levels: `log₂ 1024 = 10`.
      At each level every element is in exactly one merge, and a merge costs `O(k + l)`, so a level costs `O(n)`.
      Total: `10 · O(n) = O(n log n)`, matching `T(n) = 2T(n/2) + O(n)`.
  - topic: "Week 3 · Divide and conquer"
    ask: "Selection sort makes very few swaps, yet is still O(n²). Why?"
    choices:
      - text: "The nested sweep performs about n²/2 comparisons, and comparisons are what the quadratic term counts"
        correct: true
        explains: "Right. Its low move count is a real advantage when moves are expensive, but it does nothing for the asymptotic cost."
      - text: "Because it is recursive"
        explains: "Selection sort is two nested loops, not a recursion."
      - text: "Because swaps are expensive"
        explains: "It makes at most one swap per pass. Swaps are not what dominate."
      - text: "Because it cannot handle sorted input"
        explains: "Its cost does not depend on the input's order. It always does the full sweep."
    work: |-
      Every pass sweeps the part not yet finished.
      Comparisons pile up as `n + (n − 1) + (n − 2) + … ≈ n²/2`.
      Swaps are at most `n`, so they do not matter asymptotically.
      On 8 items it made 28 comparisons but only 4 swaps.
  - topic: "Week 3 · Divide and conquer"
    ask: "Suppose mergesort's merge step were quadratic, so T(n) = 2T(n/2) + O(n²). What is the running time?"
    choices:
      - text: "O(n² log n)"
        explains: "The log factor appears only in the balanced case. Here d > log_b a."
      - text: "O(n²)"
        correct: true
        explains: "Right. a = 2, b = 2, d = 2, and log₂ 2 = 1 < 2, so the root dominates: the expensive combine step swamps the recursion."
      - text: "O(n log n)"
        explains: "That needs d = 1. Here the combine step costs n²."
      - text: "O(n)"
        explains: "The combine step alone costs n², so the total cannot be less."
    work: |-
      `a = 2`, `b = 2`, `d = 2`.
      `log₂ 2 = 1 < d = 2`: the root dominates.
      So `T(n) = O(nᵈ) = O(n²)`.
      The recursion gets no benefit at all from a quadratic combine step.
  - topic: "Week 3 · Divide and conquer"
    ask: "Karatsuba is O(n^1.59) and schoolbook is O(n²), yet libraries such as GMP multiply small numbers with schoolbook. Why?"
    choices:
      - text: "Small numbers do not need multiplying"
        explains: "They are multiplied constantly. The question is which method is faster."
      - text: "Karatsuba does real extra work per bit (splitting, three calls, shifting and subtracting), and below a few hundred bits that outweighs the better exponent"
        correct: true
        explains: "Right. Big-O hides the constant, and constants matter until n is large enough. Here the curves cross at roughly 512 bits."
      - text: "Karatsuba gives the wrong answer on small inputs"
        explains: "It is correct at every size. It is just slower on small ones."
      - text: "Schoolbook is actually O(n^1.5)"
        explains: "Schoolbook is Θ(n²) at every size."
    work: |-
      Big-O drops constant factors.
      Karatsuba splits its input, makes three recursive calls, then shifts and subtracts on the way up.
      Below a few hundred bits that overhead outweighs its smaller exponent: at 64 bits about 8,700 operations against schoolbook's 4,100.
      The curves do not cross until roughly 512 bits, so libraries stop recursing early.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "S has 8 elements. Using this course's convention — for an even-length list, the median is the smaller of the two middle values — what value of k = ⌊∣S∣/2⌋ gives the median?"
    choices:
      - text: "4"
        correct: true
        explains: "Right. ⌊8/2⌋ = 4: 3 elements below it, 4 above — the smaller of the two middle values."
      - text: "3"
        explains: "That leaves only 2 below and 5 above. Not the middle."
      - text: "5"
        explains: "That is the larger of the two middle values. This course's convention takes the smaller one, position 4."
      - text: "8"
        explains: "That is k = ∣S∣, the maximum, not the median."
    work: |-
      Median position: `⌊∣S∣/2⌋ = ⌊8/2⌋ = 4`.
      Sorted, position 4 has 3 elements below it and 4 above — the two "middle" positions are 4 and 5,
      and the convention keeps the smaller, position 4.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "Solving selection by sorting S first (O(n log n)) and reading off position k (O(1)) answers only one query, k. What is that O(n log n) actually paying for?"
    choices:
      - text: "The correct answer to selection for every possible value of k from 1 to ∣S∣ at once, not just the one asked about"
        correct: true
        explains: "Right. A sorted array answers every rank simultaneously; the sort is spent computing ∣S∣ − 1 answers nobody asked for."
      - text: "A guarantee that S contains no duplicate values"
        explains: "Sorting says nothing about duplicates either way."
      - text: "Finding both the minimum and the maximum of S"
        explains: "Those are two of the ∣S∣ answers sorting happens to compute, not the whole story."
      - text: "The extra cost of a stable sort, which selection specifically requires"
        explains: "Selection does not require stability; any comparison sort would do."
    work: |-
      Sort: O(n log n). Read S[k]: O(1). Total O(n log n).
      That total buys the answer for every possible k, from 1 to n, since the full order is now known —
      far more than the single rank actually asked about.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "A pivot is called good if it falls in the 25th-to-75th percentile of the array. Picking a pivot uniformly at random from a 1000-element list, how many of those elements count as good, and what is the resulting probability of a good pick?"
    choices:
      - text: "500 elements are good; probability 1/2"
        correct: true
        explains: "Right. The 25th-to-75th-percentile band is always exactly half of any sorted list, whatever the data — 500 of 1000, so probability exactly 1/2."
      - text: "250 elements are good; probability 1/4"
        explains: "That is the width of one 25-point band, not the 50-point band from the 25th to the 75th percentile."
      - text: "750 elements are good; probability 3/4"
        explains: "That would be the band from the 0th to the 75th percentile — this one starts at the 25th."
      - text: "It depends on how spread out the 1000 values are"
        explains: "Percentile is a statement about rank in sorted order, not about how close values are to each other."
    work: |-
      Percentiles are defined by position, not value: the 25th-to-75th-percentile band always
      contains exactly half of any sorted list. For 1000 elements, that is 500 — so a uniformly
      random pick is good with probability exactly 1/2, regardless of what the data looks like.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "A good pivot is found with probability 1/2 on each independent try. What is the expected number of tries needed, and how does that number follow from the probability rather than being recalled from '1/p'?"
    choices:
      - text: "2 tries, from solving E = 1 + (1/2)E, which splits on whether the first try succeeds"
        correct: true
        explains: "Right. E = (1/2)(1) + (1/2)(1+E) = 1 + (1/2)E. Subtract (1/2)E from both sides: (1/2)E = 1, so E = 2."
      - text: "1.5 tries, the midpoint between succeeding immediately and never succeeding"
        explains: "There is no reason to average those two extremes; the actual value comes from solving the equation."
      - text: "4 tries, since (1/2)² = 1/4 is the chance of needing two failures first"
        explains: "That is a probability of one specific outcome, not the expected number of tries overall."
      - text: "0.5 tries, the probability of success itself"
        explains: "A probability and an expected count are different quantities; confusing them here gives a number below 1, which cannot be a valid expected count of tries."
    work: |-
      E = P(success)·1 + P(failure)·(1 + E) = (1/2)(1) + (1/2)(1+E) = 1 + (1/2)E.
      (1/2)E = 1, so E = 2.
      The "2" comes from solving this equation, not from a memorised shortcut.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "Randomised selection's average running time satisfies T(n) ≤ T(3n/4) + O(n). Which master theorem case applies, and what does that make T(n)?"
    choices:
      - text: "Root pays: a=1, b=4/3, d=1, and log_(4/3) 1 = 0 < 1, giving T(n) = O(n)"
        correct: true
        explains: "Right. One recursive call on 3/4 of the input, linear work outside it — the root dominates."
      - text: "Balanced, giving T(n) = O(n log n)"
        explains: "Balanced needs d = log_b a exactly. Here log_(4/3) 1 = 0, well below d = 1."
      - text: "Leaves pay, giving T(n) = O(n^(log_(4/3) 1))"
        explains: "n^0 = 1, which cannot be right for an algorithm that examines every element. The comparison points the other way: root pays."
      - text: "The master theorem cannot be applied, since b = 4/3 is not an integer"
        explains: "The theorem's statement only requires a > 0, b > 1, d ≥ 0 — b need not be an integer."
    work: |-
      a=1 (one recursive call), b=4/3 (subproblem size n/b = 3n/4), d=1.
      log_(4/3) 1 = 0 < 1 = d: root pays.
      T(n) = O(n^d) = O(n).
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "Randomised selection runs in O(n) on average. Can an adversary who has read the algorithm's source code in advance choose an array that forces Θ(n²) behaviour on every single run?"
    choices:
      - text: "No — the pivots are drawn at random independent of which array was chosen, so no input raises the chance of a bad run; but an unlucky run remains possible on any input"
        correct: true
        explains: "Right. The randomness lives in the algorithm's coin, not the data. No adversary controls that coin, but it can still come up badly."
      - text: "Yes, by choosing an array with many repeated values"
        explains: "Duplicates are handled by the equal-to-pivot pile in one step; they do not bias which pivots get drawn."
      - text: "Yes, by choosing an array that is already sorted"
        explains: "Sortedness has no effect on a uniformly random pivot choice."
      - text: "No, because Θ(n²) becomes mathematically impossible once pivots are randomised"
        explains: "It remains possible, just increasingly unlikely — that is exactly what 'average case' means."
    work: |-
      The O(n) bound averages over the algorithm's own random choices, for any fixed input.
      No input makes bad pivots more likely, since pivots are uniform regardless of the data.
      So no adversary can force the bad case — but any single run, on any input, can still draw
      an unlucky sequence of pivots.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "Cutting an n×n matrix product into 8 half-size block products plus O(n²) combining gives T(n) = 8T(n/2) + O(n²). What is T(n), compared to the O(n³) direct definition?"
    choices:
      - text: "O(n³) — no improvement at all: a=8, b=2, d=2, and log₂8 = 3 > 2, so the leaves pay"
        correct: true
        explains: "Right. Splitting into blocks changed nothing: the exponent is exactly the same as computing the product entry by entry."
      - text: "O(n^2.81)"
        explains: "That is Strassen's result, from 7 products, not 8."
      - text: "O(n² log n)"
        explains: "That would need d = log_b a exactly. Here d=2 is strictly below log₂8=3."
      - text: "O(n⁴)"
        explains: "More subproblems does not automatically mean a worse exponent; here it comes out to exactly n³, matching the direct definition."
    work: |-
      a=8, b=2, d=2. log₂8 = 3 > 2 = d: leaves pay.
      T(n) = O(n^(log₂8)) = O(n³) — identical to the O(n³) baseline.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "Strassen's identity replaces those 8 block products with 7: T(n) = 7T(n/2) + O(n²). What does the master theorem give for T(n)?"
    choices:
      - text: "O(n^(log₂7)) ≈ O(n^2.81)"
        correct: true
        explains: "Right. log₂7 ≈ 2.807, still above d=2, so the leaves still pay — but with a smaller exponent than the 8-product method's 3."
      - text: "O(n^2.5)"
        explains: "The exponent is log₂7 ≈ 2.807, not a rounded midpoint between 2 and 3."
      - text: "O(n²)"
        explains: "That would require log₂7 ≤ 2, i.e. a=4 or fewer. 7 is well above that."
      - text: "O(n³), since one fewer product out of eight is too small a change to matter"
        explains: "It matters: in the leaves-pay case the exponent is log₂a directly, so dropping a from 8 to 7 moves it, even by one."
    work: |-
      a=7, b=2, d=2. log₂7 = 2.807... > 2 = d: still leaves pay.
      T(n) = O(n^(log₂7)) ≈ O(n^2.81) — lower than the 8-product method's exact n³.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "Two vectors of length n=5 are convolved by listing every a_i·b_j and grouping by i+j. How many multiplications does that take, and how many coordinates does the result have?"
    choices:
      - text: "25 multiplications; 9 output coordinates"
        correct: true
        explains: "Right. n² = 25 products, grouped into 2n−1 = 9 anti-diagonals, one per output coordinate."
      - text: "25 multiplications; 5 output coordinates"
        explains: "The output has 2n−1 coordinates, not n — it is longer than either input."
      - text: "10 multiplications; 9 output coordinates"
        explains: "The grid has n² = 25 cells, one multiplication per cell — 10 is far too few."
      - text: "9 multiplications; 25 output coordinates"
        explains: "This swaps the two counts: 9 is the number of outputs, 25 the number of products."
    work: |-
      n×n grid of products: n² = 5² = 25.
      Grouped by i+j into anti-diagonals: 2n−1 = 9 distinct sums, one per output coordinate.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "a=(1,1) and b=(1,1) represent the polynomials 1+x and 1+x. What is a*b, and does it match (1+x)² expanded?"
    choices:
      - text: "a*b = (1, 2, 1), matching 1 + 2x + x²"
        correct: true
        explains: "Right. c₀=1·1=1, c₁=1·1+1·1=2, c₂=1·1=1 — and (1+x)² = 1+2x+x² by direct expansion."
      - text: "a*b = (1, 1, 1)"
        explains: "The middle coordinate collects two pairs, (a₀,b₁) and (a₁,b₀), not one: 1+1=2, not 1."
      - text: "a*b = (2, 2)"
        explains: "The convolution of two length-2 vectors has length 2n−1=3, not 2."
      - text: "a*b = (1, 0, 1)"
        explains: "The middle coordinate is a sum of products, both equal to 1 here, not a difference — it does not cancel to 0."
    work: |-
      c_0 = a_0*b_0 = 1. c_1 = a_0*b_1 + a_1*b_0 = 1+1 = 2. c_2 = a_1*b_1 = 1.
      a*b = (1,2,1) <-> 1+2x+x^2. Direct: (1+x)^2 = 1+2x+x^2. Matches.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "Two degree-(n−1) polynomials have already been evaluated at the same 2n points. What does multiplying them cost in that value form, compared to O(n²) in coefficient form?"
    choices:
      - text: "O(n) — multiply the values pointwise, one multiplication per shared point"
        correct: true
        explains: "Right. (AB)(x_i) = A(x_i)·B(x_i) for each of the shared points, so 2n multiplications suffice: O(n)."
      - text: "O(n log n), since an FFT step is still required even once the values are known"
        explains: "No further transform is needed to multiply already-evaluated values; the FFT is only needed to get into or out of value form."
      - text: "O(n²), the same cost either way"
        explains: "That is the coefficient-form cost. Value form is specifically the cheap representation for multiplication."
      - text: "O(1), since evaluation already did all the work"
        explains: "Evaluation is a separate, earlier cost; multiplying the resulting 2n pairs of values still takes work proportional to n."
    work: |-
      (AB)(x_i) = A(x_i) * B(x_i), for each shared point x_i.
      2n shared points, one multiplication each: O(n) total.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "Among the 8th roots of unity, squaring the root sitting at angle 135° lands on which point of the unit circle?"
    choices:
      - text: "The root at angle 270°"
        correct: true
        explains: "Right. Squaring doubles the angle: 135° × 2 = 270°."
      - text: "The root at angle 67.5°"
        explains: "That would be halving the angle, not squaring — squaring doubles it."
      - text: "The root at angle 45°"
        explains: "135° doubled is 270°, not 45°."
      - text: "The root at angle 180°"
        explains: "180° would come from doubling 90°, not 135°."
    work: |-
      Squaring a point on the unit circle doubles its angle: 135 * 2 = 270 degrees.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "The FFT's recurrence is T(n) = 2T(n/2) + O(n). Which master theorem case is this, and why does the O(n) combining step balance exactly against the branching here, when Strassen's O(n²) combining step did not balance against its branching?"
    choices:
      - text: "Balanced — log₂2 = 1 equals d = 1 exactly, whereas Strassen's d = 2 stayed below log₂7 ≈ 2.81"
        correct: true
        explains: "Right. Balance requires the comparison to land on equality. Here it does; for Strassen, combining was cheap relative to its branching factor, so the leaves dominated instead."
      - text: "Leaves pay, because 2 recursive calls already dominates a linear combine step"
        explains: "log₂2=1 equals d=1 exactly here — that is the defining condition for the balanced case, not the leaves-pay case."
      - text: "Root pays, since only two subproblems are created"
        explains: "Root-pays needs d > log_b a. Here d = log_b a exactly, which is balance, not root-dominance."
      - text: "It cannot be determined without knowing n"
        explains: "The master theorem's case depends only on a, b and d — all known constants here — not on the specific value of n."
    work: |-
      FFT: a=2, b=2, d=1. log₂2 = 1 = d: balanced. T(n) = O(n log n).
      Strassen: a=7, b=2, d=2. log₂7 ≈ 2.81 > 2 = d: leaves pay instead, because the O(n²)
      combining cost was cheap relative to the branching factor, in log terms.
  - topic: "Week 4 · Selection, matrices and the FFT"
    ask: "This week produced three different master-theorem outcomes: selection (root pays), the FFT (every level pays the same), and Strassen's matrix multiplication (leaves pay). What single comparison decides which of the three a given recurrence falls into?"
    choices:
      - text: "Comparing d against log_b a"
        correct: true
        explains: "Right. Below, equal to, or above — that one comparison is the whole content of the master theorem's three cases."
      - text: "Comparing a against b directly"
        explains: "Neither a nor b alone decides the case; only their combination through log_b a, compared against d, does."
      - text: "Comparing the number of recursive calls against the size of the input"
        explains: "The number of recursive calls (a) matters only via log_b a, not by direct comparison to n."
      - text: "Comparing how many levels the recursion tree has"
        explains: "Every one of these recurrences has log_b n levels; the level count does not vary by case, only where the cost concentrates does."
    work: |-
      Selection: a=1,b=4/3,d=1. log_(4/3)1=0 < 1: root pays, O(n).
      FFT: a=2,b=2,d=1. log_2 2=1=1: balanced, O(n log n).
      Strassen: a=7,b=2,d=2. log_2 7~2.81 > 2: leaves pay, O(n^2.81).
      One comparison, d vs log_b a, reproduces all three outcomes.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "Each stair `i` has a toll `cost[i]`, and you may climb one or two stairs at a time, starting on stair 0 or stair 1. Define `dp[i]` as the cheapest total toll paid to be standing on stair `i`, so `dp[i] = cost[i] + min(dp[i−1], dp[i−2])`, with `dp[0] = cost[0]` and `dp[1] = cost[1]`. For `cost = [3, 5, 2, 8]`, what is `dp[3]`?"
    choices:
      - text: "13"
        correct: true
        explains: "Right. `dp[2] = 2 + min(5, 3) = 5`, then `dp[3] = 8 + min(5, 5) = 13`."
      - text: "18"
        explains: "That pays every toll, 3 + 5 + 2 + 8. A two-stair move skips one, and the `min` chooses which."
      - text: "10"
        explains: "That adds `cost[2]` to `cost[3]`. The recurrence adds `dp[2]`, the cheapest total to reach stair 2, which already includes an earlier toll."
      - text: "11"
        explains: "That is 8 + 3, a jump from stair 0 straight to stair 3. Moves are one or two stairs, so `dp[3]` can only read `dp[2]` and `dp[1]`."
    work: |-
      `dp[0] = 3`, `dp[1] = 5` (base cases).
      `dp[2] = cost[2] + min(dp[1], dp[0]) = 2 + min(5, 3) = 5`.
      `dp[3] = cost[3] + min(dp[2], dp[1]) = 8 + min(5, 5) = 13`.
      Check against the sentence: the cheapest way to stand on stair 3 is 0 → 2 → 3 (3 + 2 + 8) or 1 → 3 (5 + 8). Both 13.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "A recurrence has `T(k)` depending only on `T(⌊k/2⌋)`, with `T(0)` known. You need `T(1,000,000)`. Roughly how many subproblems does a top-down memoized version solve, against a bottom-up loop that fills `T(0)` to `T(1,000,000)`?"
    choices:
      - text: "About 20, against about a million"
        correct: true
        explains: "Right. Top-down touches only what the answer needs: 1,000,000, 500,000, 250,000 and so on, halving about 20 times. The loop fills every cell whether or not anything reads it."
      - text: "About a million each"
        explains: "They would match if every subproblem were needed, as with Fibonacci. Here almost none are, and memoization never visits them."
      - text: "About a million, against about 20"
        explains: "This is the right pair the wrong way round. It is the bottom-up table that solves subproblems nobody asked for."
      - text: "About 2²⁰ each, since the recursion halves 20 times"
        explains: "Each call makes one further call, not two, so the calls form a chain of about 20, not a tree with 2²⁰ leaves."
    work: |-
      Top-down: 1,000,000 → 500,000 → 250,000 → … → 1 → 0. Halving a million reaches 1 after about 20 steps, since 2²⁰ ≈ 1,000,000.
      Bottom-up: one cell for each of 0, 1, …, 1,000,000 — about a million.
      Same recurrence, same answer. Only the top-down schedule skips unneeded subproblems.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "Which of these recursions gains from adding a cache of results?"
    choices:
      - text: "`paths(i, j) = paths(i−1, j) + paths(i, j−1)`, counting routes through a grid"
        correct: true
        explains: "Right. `paths(2, 2)` calls `paths(1, 2)` and `paths(2, 1)`, and both of those call `paths(1, 1)`. The same subproblem on two branches is overlap, and overlap is what a cache exploits."
      - text: "Mergesort, sorting the left half and the right half"
        explains: "The halves share no elements and no range is ever sorted twice. The cache would never be hit."
      - text: "Binary search, recursing into one half of a sorted array"
        explains: "Each call makes a single further call on a range not seen before. Nothing repeats."
      - text: "Quicksort, recursing on the elements below and above the pivot"
        explains: "The two parts are disjoint, so their subproblems are independent. This is divide and conquer."
    work: |-
      `paths(2, 2)` → `paths(1, 2)`, `paths(2, 1)`.
      `paths(1, 2)` → `paths(0, 2)`, `paths(1, 1)`.
      `paths(2, 1)` → `paths(1, 1)`, `paths(2, 0)`.
      `paths(1, 1)` appears twice already, and the repeats multiply as the grid grows.
      The other three split into pieces that share nothing.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "A dag has edges `S→A` 3, `S→B` 1, `B→A` 1, `A→C` 2, `B→C` 5, `A→T` 6, `C→T` 2. Processing the nodes in the linearized order `S, B, A, C, T`, what is `dist(T)`?"
    choices:
      - text: "6"
        correct: true
        explains: "Right. The route is `S → B → A → C → T`: 1 + 1 + 2 + 2."
      - text: "7"
        explains: "That uses the direct edge `S→A` for `dist(A) = 3`. `A` has a second predecessor, `B`, and `dist(B) + 1 = 2` is shorter."
      - text: "8"
        explains: "That is `dist(A) + 6`, the route into `T` from `A`. `T` also has `C` as a predecessor, and `dist(C) + 2 = 6` is smaller."
      - text: "9"
        explains: "That is `S → A → T`, 3 + 6, the route with the fewest edges. Fewest edges is not shortest length."
    work: |-
      `dist(S) = 0`.
      `dist(B) = 0 + 1 = 1`.
      `dist(A) = min{0 + 3, 1 + 1} = 2`.
      `dist(C) = min{2 + 2, 1 + 5} = 4`.
      `dist(T) = min{2 + 6, 4 + 2} = 6`.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "A recurrence defines `dp[i]` in terms of `dp[i+1]` and `dp[i+2]`, with base cases at `dp[n]` and `dp[n+1]`. Which bottom-up fill order is valid?"
    choices:
      - text: "`i` from `n − 1` down to 0"
        correct: true
        explains: "Right. Draw the dependencies as edges: they run from larger indices to smaller ones. A valid order is a linearization, so larger indices must come first."
      - text: "`i` from 0 up to `n − 1`"
        explains: "That reads `dp[i+1]` and `dp[i+2]` before they have been computed. Ascending order is right only when cells depend on smaller indices."
      - text: "Any order, because each cell is computed exactly once"
        explains: "Being computed once is not enough. Each cell's inputs must be finished before it is computed."
      - text: "None, because a cell that depends on later cells makes a cycle"
        explains: "A cycle would need some cell to depend, directly or not, on itself. Here every dependency points to a strictly larger index, so there is none."
    work: |-
      Edges: `i+1 → i` and `i+2 → i`. All point from larger to smaller index.
      Linearization: `n+1, n, n−1, …, 1, 0`.
      So fill the base cases at `n` and `n+1`, then loop `i` downward.
      Top-down memoization would find this order by itself; bottom-up has to name it.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "In the array `[10, 9, 2, 5, 3, 7, 101, 18]`, which description fits the selection `2, 7, 18`?"
    choices:
      - text: "An increasing subsequence, but not a substring and not the longest"
        correct: true
        explains: "Right. It keeps the array's order and goes up at each step, with gaps between the chosen positions. A longer one exists: `2, 3, 7, 18`."
      - text: "A substring"
        explains: "A substring is a run of neighbours. Between the 2 and the 7 sit a 5 and a 3."
      - text: "Not a subsequence, because elements were skipped"
        explains: "Skipping is exactly what a subsequence allows. Only the order has to be kept."
      - text: "A longest increasing subsequence"
        explains: "It has length 3. Putting the 3 or the 5 between the 2 and the 7 makes length 4."
    work: |-
      Positions: 2 at index 2, 7 at index 5, 18 at index 7. Increasing indices → a subsequence.
      Values 2 < 7 < 18 → increasing.
      Indices 2, 5, 7 are not consecutive → not a substring.
      `2, 3, 7, 18` (indices 2, 4, 5, 7) has length 4 → not the longest.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "With `dp[i]` = the length of the longest increasing subsequence ending at `i`, the table for `[1, 3, 6, 7, 9, 4, 10, 5, 6]` is `[1, 2, 3, 4, 5, 3, 6, 4, 5]`. What is the length of the LIS?"
    choices:
      - text: "6"
        correct: true
        explains: "Right. The answer is the maximum over the whole table. It sits at index 6, for `1, 3, 6, 7, 9, 10`."
      - text: "5"
        explains: "That is the last cell, the best subsequence ending with the final 6. The best one overall ends earlier, at the 10."
      - text: "9"
        explains: "That is the number of elements. The array is not increasing throughout: the 4 after the 9 breaks it."
      - text: "33"
        explains: "That is the sum of the cells. They are lengths of overlapping subsequences, so adding them counts elements many times over."
    work: |-
      `max{1, 2, 3, 4, 5, 3, 6, 4, 5} = 6`, at index 6.
      `dp[8] = 5`: the best ending at the final 6 is `1, 3, 4, 5, 6`.
      The state says "ending at `i`", so no single fixed cell is the answer.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "The smallest-tails method (append if larger than everything, otherwise replace the first entry ≥ `x`) is run on `[1, 3, 6, 7, 9, 4, 10, 5, 6]`. What is `sub` at the end?"
    choices:
      - text: "`[1, 3, 4, 5, 6, 10]`"
        correct: true
        explains: "Right. Six entries, so the LIS has length 6. The contents are not a real subsequence, though: in the input the 10 comes before the 5."
      - text: "`[1, 3, 6, 7, 9, 10]`"
        explains: "That is the actual longest increasing subsequence, and it is what `sub` would hold if only the append rule existed. The 4, 5 and 6 each replace an entry."
      - text: "`[1, 3, 4, 7, 9, 10]`"
        explains: "That is `sub` just after the 10 is read. Two numbers remain: the 5 replaces the 7 and the final 6 replaces the 9."
      - text: "`[1, 3, 4, 5, 6]`"
        explains: "`sub` never gets shorter, and no rule removes the last entry. The 10 stays as the smallest tail for length 6."
    work: |-
      1, 3, 6, 7, 9 → all appended → `[1, 3, 6, 7, 9]`.
      4 → first entry ≥ 4 is 6 → `[1, 3, 4, 7, 9]`.
      10 → append → `[1, 3, 4, 7, 9, 10]`.
      5 → first entry ≥ 5 is 7 → `[1, 3, 4, 5, 9, 10]`.
      6 → first entry ≥ 6 is 9 → `[1, 3, 4, 5, 6, 10]`.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "A programmer implements the smallest-tails method but searches for the first entry **>** `x` instead of the first entry **≥** `x`. What does the program return for `[4, 4, 4]`?"
    choices:
      - text: "3. It now computes the longest subsequence that never decreases"
        correct: true
        explains: "Right. No entry is greater than 4, so each 4 is appended. With ≥, each later 4 would replace the first and the result would be 1."
      - text: "1, the same as before"
        explains: "With ≥ it would be 1. With > the search finds nothing to replace, so every equal number is appended."
      - text: "0, because no number is strictly greater than another"
        explains: "A single element is always an increasing subsequence of length 1, and the first 4 is appended to an empty `sub` under either comparison."
      - text: "2, because only the first repeat is appended"
        explains: "Every repeat behaves the same way. The third 4 is also not exceeded by anything in `sub`, so it is appended too."
    work: |-
      With `>`: 4 → `[4]`. Next 4: any entry > 4? No → append → `[4, 4]`. Next 4 → `[4, 4, 4]`. Returns 3.
      With `≥`: 4 → `[4]`. Next 4: first entry ≥ 4 is at position 0 → replace → `[4]`. Returns 1.
      A strictly increasing subsequence of `[4, 4, 4]` has length 1.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "For `nums = [0, 8, 4, 12, 2, 10, 6]` the tables are `dp = [1, 2, 2, 3, 2, 3, 3]` and `prev = [−1, 0, 0, 1, 0, 1, 2]`. Starting from the first index where `dp` is largest, what does the walk back along `prev` return?"
    choices:
      - text: "`[0, 8, 12]`"
        correct: true
        explains: "Right. The first maximum is at index 3. Follow `prev`: 3 → 1 → 0 → −1, meeting 12, 8, 0, then reverse."
      - text: "`[12, 8, 0]`"
        explains: "Those are the numbers in the order the walk meets them, last first. The result must be reversed."
      - text: "`[0, 4, 6]`"
        explains: "A valid answer of the same length, but it comes from starting at index 6. The first index with `dp = 3` is index 3."
      - text: "`[0, 2, 6]`"
        explains: "That is what the smallest-tails array holds at the end. `prev` never leads there: `prev[6]` is 2, the position of the 4."
    work: |-
      Largest `dp` is 3, first reached at `i = 3` (the 12).
      `prev[3] = 1` → the 8. `prev[1] = 0` → the 0. `prev[0] = −1` → stop.
      Met: 12, 8, 0. Reversed: `[0, 8, 12]`.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "A colleague shows four edits that turn string `x` into string `y`. Your correctly filled edit-distance table has 3 in its bottom-right cell. What follows?"
    choices:
      - text: "The edit distance is 3. Their four edits only showed it was at most 4"
        correct: true
        explains: "Right. An example sequence gives an upper limit. The table's `min` covers every alignment, so its value is the true minimum."
      - text: "The edit distance is 4, because their edits are a concrete demonstration"
        explains: "A demonstration proves that four are enough, not that four are needed. A cheaper sequence exists, and the walk back through the table would produce it."
      - text: "One of the two must contain a mistake"
        explains: "They do not conflict. \"At most 4\" and \"exactly 3\" are both true at once."
      - text: "The edit distance is somewhere between 3 and 4"
        explains: "It is a whole number of edits and it is the minimum. The table says that minimum is 3."
    work: |-
      Four edits exist → distance ≤ 4.
      `E(m, n) = 3` → the best alignment has cost 3 → distance = 3.
      3 ≤ 4, so the two statements agree. The colleague's sequence is valid but not the shortest.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "Filling the edit-distance table for `x` = BEAD and `y` = BAD, you reach `E(3, 2)`, comparing BEA with BA. The neighbours are `E(2, 2) = 1`, `E(3, 1) = 2` and `E(2, 1) = 1`. What is `E(3, 2)`?"
    choices:
      - text: "1"
        correct: true
        explains: "Right. The letters `x[3]` and `y[2]` are both A, so the diagonal candidate is `0 + E(2, 1) = 1`, the smallest of the three."
      - text: "0"
        explains: "The matching letters make the last column free, but what is left, BE against B, still costs `E(2, 1) = 1`."
      - text: "2"
        explains: "That is `1 + E(2, 2)`, the candidate for deleting the A. The diagonal candidate is cheaper."
      - text: "3"
        explains: "That is `1 + E(3, 1)`, the candidate for inserting an A, and the largest of the three. The recurrence takes the minimum."
    work: |-
      Scenario 1 (delete `x[3]`): `1 + E(2, 2) = 1 + 1 = 2`.
      Scenario 2 (insert `y[2]`): `1 + E(3, 1) = 1 + 2 = 3`.
      Scenario 3 (`A` over `A`, `diff = 0`): `0 + E(2, 1) = 0 + 1 = 1`.
      `min{2, 3, 1} = 1`. BEA → BA by deleting the E.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "Two services compare pairs of 200,000-character documents. Service A reports only the edit distance. Service B must show which characters were inserted, deleted or substituted. How much of the table does each need to keep?"
    choices:
      - text: "A can keep two rows. B needs the whole table, or pointers stored as it goes"
        correct: true
        explains: "Right. Each cell reads only its own row and the one above, so the distance needs two rows. The walk back visits a cell in every row, so recovering the edits needs all of them."
      - text: "Both can keep two rows"
        explains: "B's walk back starts at the bottom-right cell and climbs through every row to the top-left. Rows that were discarded cannot be walked through."
      - text: "Both need the whole table"
        explains: "A never looks back further than one row, so keeping all 200,001 rows wastes memory for nothing."
      - text: "A needs the whole table. B can keep two rows"
        explains: "The wrong way round. The number is the cheap thing to keep; the history of decisions is what costs memory."
    work: |-
      `E(i, j)` reads `E(i−1, j)`, `E(i, j−1)`, `E(i−1, j−1)`: rows `i − 1` and `i` only.
      Service A: 2 × 200,001 ≈ 400,000 cells.
      Service B: 200,001 × 200,001 ≈ 4 × 10¹⁰ cells, since the walk from `(m, n)` to `(0, 0)` re-checks cells in every row.
      Running time is `O(mn)` for both.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "Walking back through the table for `x` = PLAN and `y` = PAIN, you are at cell `(3, 3)` with value 2, comparing PLA with PAI. The neighbours are `E(2, 2) = 1`, `E(2, 3) = 2` and `E(3, 2) = 1`. The code tests the diagonal scenario first. Which column does it add?"
    choices:
      - text: "`A / I`, a substitution, moving to `(2, 2)`"
        correct: true
        explains: "Right. A and I differ, so the diagonal candidate is `1 + E(2, 2) = 2`, which equals the cell. The code takes the first scenario that fits."
      - text: "`− / I`, an insertion, moving to `(3, 2)`"
        explains: "That candidate, `1 + E(3, 2) = 2`, also equals the cell, so it leads to another best alignment. But the diagonal test comes first and already succeeds."
      - text: "`A / −`, a deletion, moving to `(2, 3)`"
        explains: "That candidate is `1 + E(2, 3) = 3`, which is not the cell's value. This scenario did not produce the 2."
      - text: "`A / A`, a free match, moving to `(2, 2)`"
        explains: "`x[3]` is A but `y[3]` is I. They differ, so the column costs 1."
    work: |-
      Scenario 3: `x[3] = A`, `y[3] = I`, different → `1 + E(2, 2) = 1 + 1 = 2` ✓
      Scenario 1: `1 + E(2, 3) = 1 + 2 = 3` ✗
      Scenario 2: `1 + E(3, 2) = 1 + 1 = 2` ✓ (a tie)
      The code checks scenario 3 first → column `A / I`, then `i = 2`, `j = 2`.
  - topic: "Week 5 · Dynamic programming, part I"
    ask: "For a new problem you define `dp[i]` as the largest sum of a run of neighbouring elements that **ends at** position `i`. Once the table is filled, where is the largest sum of any run in the array?"
    choices:
      - text: "The maximum over all cells"
        correct: true
        explains: "Right. Each cell speaks for one ending position, exactly as in the LIS table. The best run may end anywhere, so every ending has to be compared."
      - text: "The last cell, `dp[n−1]`"
        explains: "That cell covers only runs that end at the final element. The last cell is the answer when the state describes a whole prefix, and this one does not."
      - text: "The first cell, `dp[0]`"
        explains: "That covers only the run made of the first element alone."
      - text: "The sum of all cells"
        explains: "The cells describe overlapping runs. Adding them counts the same elements repeatedly and answers no question that was asked."
    work: |-
      Read the definition: "ends at `i`" fixes where the run stops.
      The question asked has no fixed ending, so it is `max{dp[0], …, dp[n−1]}`.
      Same reasoning as the LIS: an "ending at" state buys a recurrence and moves the answer out of the last cell.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "A 7-pound bag, one of each item: X is 5 lb for $20, Y is 4 lb for $15, Z is 3 lb for $11. What does 'best value per pound first' collect, and what is the best packing worth?"
    choices:
      - text: "$20 by value per pound; $26 is the best"
        correct: true
        explains: "Right. X has the best ratio and goes in first, leaving 2 pounds that nothing fits. Y and Z together fill the bag exactly for $26, although they are the two worst ratios."
      - text: "$26 by value per pound; $26 is the best"
        explains: "Value per pound takes X first, at 4.00 per pound. After that only 2 pounds remain, and Y and Z need 4 and 3."
      - text: "$20 by value per pound; $20 is the best"
        explains: "Y and Z weigh 4 + 3 = 7 pounds, which fits, and are worth $15 + $11 = $26."
      - text: "$20 by value per pound; $31 is the best"
        explains: "$31 would be X and Z, which weigh 8 pounds. The bag holds 7."
    work: |-
      Ratios: X `20/5 = 4.00`, Y `15/4 = 3.75`, Z `11/3 ≈ 3.67`.
      By ratio: X (5 lb). 2 lb left; Y needs 4, Z needs 3. Total $20.
      Best: Y + Z = 4 + 3 = 7 lb, $15 + $11 = $26.
      The ratio rule cannot see the 2 wasted pounds.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "Unlimited copies of two items: one is 3 lb for $5, the other 4 lb for $7. The table so far is `K(0..8) = 0, 0, 0, 5, 7, 7, 10, 12, 14`. What is `K(9)`?"
    choices:
      - text: "15"
        correct: true
        explains: "Right. The 3-lb item as the last one in gives `K(6) + 5 = 15`. The 4-lb item gives `K(5) + 7 = 14`. Three of the 3-lb item fill the bag exactly."
      - text: "14"
        explains: "That is two of the 4-lb item with a pound wasted, the candidate `K(5) + 7`. The other candidate, `K(6) + 5`, is larger."
      - text: "12"
        explains: "That is one of each item, 7 pounds for $12. Copies are unlimited here, and a 9-pound bag has room for more."
      - text: "19"
        explains: "That adds $5 to the previous cell, `K(8) = 14`. The 3-lb item must be added to the bag 3 pounds smaller, `K(6)`."
    work: |-
      3-lb item last: `K(9 − 3) + 5 = K(6) + 5 = 10 + 5 = 15`
      4-lb item last: `K(9 − 4) + 7 = K(5) + 7 = 7 + 7 = 14`
      `K(9) = max{15, 14} = 15` → three 3-lb items.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "A knapsack program fills the `O(nW)` table for 20 items and a 15-kilogram bag, with weights in whole kilograms. To be more precise, someone re-enters every weight and the capacity in grams. Nothing else changes. What happens to the running time?"
    choices:
      - text: "It grows about 1,000 times, although each number in the input is only three digits longer"
        correct: true
        explains: "Right. The table has one column per unit of capacity, so it goes from 15 columns to 15,000. The work follows the value of `W`, which is exponential in the number of digits used to write it."
      - text: "It is unchanged, because the items and the bag are physically the same"
        explains: "The algorithm sees numbers, not objects. `W` went from 15 to 15,000, and the table is as wide as `W`."
      - text: "It grows by a small constant amount, since each number is only three digits longer"
        explains: "That would be true of an algorithm whose work followed the length of its input. This one's follows the value of one of the numbers."
      - text: "It grows about 3 times, once for each extra digit"
        explains: "Each extra digit multiplies `W` by 10, so three digits multiply the table width by 1,000, not by 3."
    work: |-
      Kilograms: `n × W = 20 × 15 = 300` cell-tries.
      Grams: `n × W = 20 × 15,000 = 300,000` cell-tries.
      Ratio: 1,000. Extra input: three digits per number.
      `O(nW) = O(n · 10ᵈ)` for a `d`-digit `W`: pseudo-polynomial.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "Draw the capacity graph for a knapsack with repetition: `W = 7`, one item weighing 2 and one weighing 3. Each capacity 0 to 7 is a vertex, and there is an edge `(w − wᵢ) → w` for every item `i` and every capacity `w ≥ wᵢ`. How many edges are there?"
    choices:
      - text: "11"
        correct: true
        explains: "Right. The 2-lb item gives an edge into each of the capacities 2 to 7, which is 6 edges. The 3-lb item gives one into each of 3 to 7, which is 5. That is at most `n × W = 14`, which is where `O(nW)` comes from."
      - text: "14"
        explains: "That is `n × W`, the upper bound. It counts edges into capacities too small to hold the item, such as a 3-lb item arriving at capacity 2."
      - text: "7"
        explains: "That is one edge per capacity. Each capacity can be reached by adding either item, so most vertices have two incoming edges."
      - text: "5"
        explains: "That counts something like the items in one full bag. An edge exists for every item at every capacity it fits, whether or not the best path uses it."
    work: |-
      2-lb item: `w = 2, 3, 4, 5, 6, 7` → 6 edges (`0→2` up to `5→7`).
      3-lb item: `w = 3, 4, 5, 6, 7` → 5 edges (`0→3` up to `4→7`).
      Total `6 + 5 = 11`, and `11 ≤ n × W = 2 × 7 = 14`.
      Every edge points to a larger capacity, so the graph is a dag.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "One of each: P is 2 lb for $5, Q is 3 lb for $8, R is 4 lb for $9, in that order. Row Q of the table (P and Q allowed) reads `0, 0, 5, 8, 8, 13, 13` for `w = 0` to `6`. What is `K(6, 3)`, the cell in row R at `w = 6`?"
    choices:
      - text: "14"
        correct: true
        explains: "Right. Leaving R out keeps the 13 above. Taking R reads row Q four columns to the left, `K(2, 2) = 5`, and adds 9. The larger is 14: P and R."
      - text: "13"
        explains: "That is the cell above, the 'leave R out' option. Taking R gives `5 + 9 = 14`, which is larger."
      - text: "22"
        explains: "That adds R's $9 to the cell directly above, 13. The bag receiving R must be 4 pounds smaller: column 2, not column 6."
      - text: "17"
        explains: "That is Q and R, $8 + $9. They weigh 3 + 4 = 7 pounds and the bag holds 6."
    work: |-
      Leave R out: `K(6, 2) = 13` (P + Q)
      Take R: `K(6 − 4, 2) + 9 = K(2, 2) + 9 = 5 + 9 = 14` (P + R)
      `K(6, 3) = max{13, 14} = 14`
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "A subset-sum checker keeps one row of true/false values, `can[0] = true` and the rest false, and for each number `x` runs `can[s] = can[s] or can[s − x]` with `s` counting **up** from `x` to the target. Given the numbers 3 and 5, one of each, and target 6, it reports true. What happened?"
    choices:
      - text: "Counting up let `can[6]` read `can[3]` after it had already been updated for the same 3, so the 3 was used twice"
        correct: true
        explains: "Right. The cell to the left must still hold its value from before this number was added. Counting up overwrites it first. Counting `s` down from the target fixes it."
      - text: "The answer is correct: 3 and 5 can make 6"
        explains: "The sums available from one 3 and one 5 are 0, 3, 5 and 8. Six needs two 3s."
      - text: "The numbers should be in the inner loop and the sums in the outer loop"
        explains: "With a single row the numbers must stay in the outer loop. The fault is the direction of the inner loop, not the nesting."
      - text: "One row is not enough to solve subset sum; the full table is required"
        explains: "One row is enough for a yes-or-no answer, provided it is filled from the right. The full table is only needed to list which numbers were used."
    work: |-
      Start: `can[0] = true`.
      `x = 3`, counting up: `can[3] = can[0] = true`; then `can[6] = can[3] = true` ← reads a new cell.
      That path is `0 → 3 → 6`: the 3 twice.
      Counting down: `can[6] = can[3]` (still false), then `can[3] = can[0] = true`.
      After `x = 5` counting down: `can[8]`, `can[5]` true. `can[6]` stays false.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "A 0/1 table for X (3 lb, $6), Y (2 lb, $5), Z (4 lb, $9), in that order, for `w = 0` to `6`. Row X: `0, 0, 0, 6, 6, 6, 6`. Row Y: `0, 0, 5, 6, 6, 11, 11`. Row Z: `0, 0, 5, 6, 9, 11, 14`. Walking back from the corner, which items make up the $14?"
    choices:
      - text: "Y and Z"
        correct: true
        explains: "Right. Row Z differs from row Y at `w = 6`, so Z was taken and the walk moves to `w = 2`. There row Y differs from row X, so Y was taken, and the walk reaches `w = 0`."
      - text: "X and Y"
        explains: "That is the $11 packing in row Y. The corner improved on it, 14 against 11, which is the sign that Z was taken."
      - text: "X and Z"
        explains: "They weigh 3 + 4 = 7 pounds, which does not fit, and would be worth $15, not $14."
      - text: "Z alone"
        explains: "Z is worth $9. After taking it the walk is at `w = 2` in row Y, where the value 5 differs from row X's 0: Y was taken too."
    work: |-
      `(6, Z)`: 14 ≠ `K(6, Y) = 11` → Z taken. Move to `w = 6 − 4 = 2`.
      `(2, Y)`: 5 ≠ `K(2, X) = 0` → Y taken. Move to `w = 2 − 2 = 0`.
      `(0, X)`: 0 = 0 → X left out.
      Packing: Y + Z = 6 lb, $5 + $9 = $14.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "`A` is `10 × 100`, `B` is `100 × 5`, `C` is `5 × 50`. How many scalar multiplications does the cheaper order for `ABC` take?"
    choices:
      - text: "7,500, as `(AB)C`"
        correct: true
        explains: "Right. `AB` costs 5,000 and leaves a small `10 × 5` matrix, so the second multiplication is only 2,500. The dimension 100 is used once and is gone."
      - text: "75,000, as `A(BC)`"
        explains: "That is the dearer order: `BC` costs 25,000 and leaves a `100 × 50` matrix, which then costs 50,000 to multiply by `A`."
      - text: "5,000, as `(AB)C`"
        explains: "That is the first multiplication only. `(AB)` still has to be multiplied by `C`, costing `10·5·50 = 2,500` more."
      - text: "Both orders cost the same, since the product is the same matrix"
        explains: "Associativity makes the results equal. The work differs by a factor of ten here."
    work: |-
      `(AB)C`: `10·100·5 = 5,000`, result `10 × 5`; then `10·5·50 = 2,500`. Total 7,500.
      `A(BC)`: `100·5·50 = 25,000`, result `100 × 50`; then `10·100·50 = 50,000`. Total 75,000.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "Three matrices with dimensions `m = 10, 5, 20, 2`, so `A₁` is `10 × 5`, `A₂` is `5 × 20` and `A₃` is `20 × 2`. Given `C(1, 2) = 1,000` and `C(2, 3) = 200`, what is `C(1, 3)`?"
    choices:
      - text: "300"
        correct: true
        explains: "Right. Splitting after `A₁` costs `0 + 200 + 10·5·2 = 300`. Splitting after `A₂` costs `1,000 + 0 + 10·20·2 = 1,400`. The minimum is 300."
      - text: "1,400"
        explains: "That is the split `k = 2`. It is one of the two candidates, and the recurrence keeps the smaller."
      - text: "200"
        explains: "That is `C(2, 3)` alone. The result of `A₂A₃` still has to be multiplied by `A₁`, at a cost of `10·5·2 = 100`."
      - text: "1,200"
        explains: "That adds `C(1, 2)` and `C(2, 3)`. Those stretches overlap at `A₂`, so they are not the two sides of any split."
    work: |-
      `k = 1`: `C(1,1) + C(2,3) + m₀·m₁·m₃ = 0 + 200 + 10·5·2 = 300`
      `k = 2`: `C(1,2) + C(3,3) + m₀·m₂·m₃ = 1,000 + 0 + 10·20·2 = 1,400`
      `C(1, 3) = min{300, 1,400} = 300` → `A₁(A₂A₃)`
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "A student sets every `C(i, i) = 0` and then fills the rest of the chain-matrix table row by row: row 1 from left to right, then row 2, and so on. For `n = 5`, which is the first cell whose recurrence reads a cell that has not been filled?"
    choices:
      - text: "`C(1, 3)`, which needs `C(2, 3)`"
        correct: true
        explains: "Right. Its split at `k = 1` reads `C(1, 1)` and `C(2, 3)`. The first is a base case; the second is in row 2, which has not been started. Filling by increasing length would have done all the pairs first."
      - text: "`C(1, 2)`, which needs `C(2, 2)`"
        explains: "`C(2, 2)` is a base case and was set to 0 before the loop began. `C(1, 2)` reads only base cases, so it is fine."
      - text: "`C(1, 5)`, the last cell of row 1"
        explains: "It does fail, but it is not the first. The trouble starts as soon as a stretch of three is reached."
      - text: "None; every cell reads only cells to its left"
        explains: "A cell reads `C(i, k)` to its left and also `C(k+1, j)` in a lower row. The second kind is what row-by-row has not reached."
    work: |-
      Row 1 order: `C(1,2)`, `C(1,3)`, `C(1,4)`, `C(1,5)`.
      `C(1,2)`: `k = 1` reads `C(1,1)`, `C(2,2)` → both base cases. Fine.
      `C(1,3)`: `k = 1` reads `C(1,1)`, `C(2,3)` → `C(2,3)` is in row 2, still empty.
      By length: `len = 2` fills `C(1,2)`, `C(2,3)`, `C(3,4)`, `C(4,5)` before any stretch of 3.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "For a chain of 10 matrices, how many cells `C(i, j)` with `i ≤ j` does the table have, and at most how many splits does any one cell try?"
    choices:
      - text: "55 cells, at most 9 splits"
        correct: true
        explains: "Right. There are `10 × 11 / 2 = 55` stretches, and the longest has 10 matrices and 9 places to cut. That is under 500 steps in all."
      - text: "100 cells, at most 10 splits"
        explains: "100 is the full square. Half of it does not exist, because a stretch cannot end before it starts. And 10 matrices have 9 gaps between them, not 10."
      - text: "45 cells, at most 9 splits"
        explains: "45 leaves out the ten length-1 stretches on the diagonal. They are cells of the table too, each holding 0."
      - text: "1,000 cells, at most 10 splits"
        explains: "1,000 is `n³`, a bound on the running time. The number of cells is about `n²/2`."
    work: |-
      Stretches of length 1: 10. Length 2: 9. … Length 10: 1.
      `10 + 9 + … + 1 = 10 × 11 / 2 = 55` cells.
      A stretch of `len` matrices has `len − 1` splits; the longest has `10 − 1 = 9`.
      Total work: at most `55 × 9 = 495` steps.
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "A tree with root `r`. The children of `r` are `a`, `b` and `c`. `a` has two leaf children `d` and `e`. `b` has one child `f`, and `f` has one leaf child `h`. `c` is a leaf. What is `I(r)`, the size of the largest independent set?"
    choices:
      - text: "5"
        correct: true
        explains: "Right. Leaving `r` out gives `I(a) + I(b) + I(c) = 2 + 2 + 1 = 5`. Taking it gives `1 + I(d) + I(e) + I(f) = 4`. One such set is `{d, e, b, h, c}`."
      - text: "4"
        explains: "That is the 'take the root' case, `1 + I(d) + I(e) + I(f)`. It has to be compared with leaving the root out, which gives 5."
      - text: "6"
        explains: "That is `1 + I(a) + I(b) + I(c)`: taking `r` and then adding the children's values. Those values may count the children themselves, and here `I(b)` and `I(c)` do, although `b` and `c` are joined to `r`."
      - text: "3"
        explains: "That counts the three children `a`, `b`, `c` as a set. They are independent of each other, but the subtrees below them hold more."
    work: |-
      Leaves: `I(d) = I(e) = I(h) = I(c) = 1`
      `I(f) = max{1 + 0, I(h)} = 1`
      `I(a) = max{1 + 0, I(d) + I(e)} = max{1, 2} = 2`
      `I(b) = max{1 + I(h), I(f)} = max{2, 1} = 2`
      `I(r) = max{1 + I(d) + I(e) + I(f), I(a) + I(b) + I(c)} = max{4, 5} = 5`
  - topic: "Week 6 · Dynamic programming, part II"
    ask: "A new problem: `n` piles of stones stand in a row. A move merges two **neighbouring** piles into one and costs the size of the merged pile. Find the cheapest way to merge everything into a single pile. What should the subproblem be indexed by, and in what order is the table filled?"
    choices:
      - text: "A stretch of piles `i` to `j`; by increasing length of stretch"
        correct: true
        explains: "Right. The last merge joins a left block and a right block of neighbouring piles, exactly as the last multiplication does in the matrix chain. Each cell reads shorter stretches, so those must be filled first."
      - text: "A prefix of the piles, the first `j`; left to right"
        explains: "The last merge can leave a right-hand block that starts in the middle of the row. A prefix cannot describe that block, so the recurrence would have nothing to look up."
      - text: "A capacity `w`; from 0 up to the total number of stones"
        explains: "That is the knapsack's index. Nothing here has a weight limit, and which piles are neighbours matters, which a capacity cannot record."
      - text: "A stretch of piles `i` to `j`; row by row, with `i` increasing"
        explains: "Right index, wrong order. `M(1, n)` in row 1 would need stretches that begin at 2, 3, … which lie in rows not yet filled."
    work: |-
      Step 1: `M(i, j)` = cheapest cost of merging piles `i … j` into one.
      Step 2: `M(i, j) = min over i ≤ k < j of { M(i, k) + M(k+1, j) } + (stones in piles i … j)`; `M(i, i) = 0`.
      Step 3: both `M(i, k)` and `M(k+1, j)` are shorter stretches → fill by length.
      Same shape as chain matrix multiplication: `O(n²)` cells, `O(n)` splits each.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Coins come in values 1, 5 and 6, with unlimited supply of each. Make 10 using as few coins as possible. How many coins does biggest-coin-first use, and how many does the best answer use?"
    choices:
      - text: "Greedy uses 5; the best uses 2"
        correct: true
        explains: "Right. Greedy takes 6 and is left with 4, which only 1s can pay: `6 + 1 + 1 + 1 + 1`. Starting with a 5 instead gives `5 + 5`."
      - text: "Greedy uses 2; the best uses 2"
        explains: "Two coins needs `5 + 5`, and greedy never starts with a 5 while a 6 fits. It takes the 6 first."
      - text: "Greedy uses 5; the best uses 5, so greedy is optimal here"
        explains: "`5 + 5 = 10` uses two coins. Greedy's first choice, the 6, leaves a remainder of 4 that only the 1-coin can make."
      - text: "Greedy uses 3; the best uses 2"
        explains: "After taking 6, the remaining 4 has to be paid in 1s, which is four more coins, five in all, not three."
    work: |-
      Greedy: 10 → take 6, 4 left → 1, 1, 1, 1. Total 5 coins.
      Best: 5 + 5 = 10. Total 2 coins.
      One coin is impossible (no coin is worth 10), so 2 is optimal.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "A connected, undirected graph has 10 vertices and 14 edges. How many edges must be removed to leave a spanning tree, and how many edges does that tree have?"
    choices:
      - text: "Remove 5, leaving a tree of 9 edges"
        correct: true
        explains: "Right. Every spanning tree on 10 vertices has `n − 1 = 9` edges, so `14 − 9 = 5` edges go, whichever spanning tree you keep."
      - text: "Remove 4, leaving a tree of 10 edges"
        explains: "A tree on `n` vertices has `n − 1` edges, not `n`. Ten edges on ten vertices would always contain a cycle."
      - text: "It depends on which spanning tree you choose"
        explains: "Which edges you remove depends on the tree, but how many does not. Every spanning tree on 10 vertices has exactly 9 edges."
      - text: "Remove 13, leaving a single edge"
        explains: "One edge connects only two vertices. The tree must still reach all 10."
    work: |-
      Spanning tree edges: n − 1 = 10 − 1 = 9.
      Edges to remove: m − (n − 1) = 14 − 9 = 5.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Five sites must be linked. One of the possible cables has cost 0, because a duct already exists, and the rest have positive costs. Which statement is correct?"
    choices:
      - text: "A cheapest connected network may now contain a cycle, but a minimum spanning tree still exists and is still found by Prim or Kruskal"
        correct: true
        explains: "Right. Removing a cycle edge of cost 0 saves nothing, so the 'cheapest network is a tree' argument fails for that edge. The MST problem asks for a tree directly and allows any weights, so the algorithms are unaffected."
      - text: "The cheapest connected network is still always a tree, because removing a cycle edge always lowers the cost"
        explains: "Removing an edge of cost 0 leaves the cost unchanged. The argument needed every cost to be strictly positive."
      - text: "Prim and Kruskal no longer work, because they require positive weights"
        explains: "Neither algorithm assumes positive weights. They compare weights and nothing else, and the MST problem allows zero and negative weights."
      - text: "The MST must contain the free cable, and the MST is otherwise undefined"
        explains: "The MST is well defined for any weights. The free cable is the cheapest edge, so Kruskal takes it first, but the MST is defined independently of that."
    work: |-
      Cycle argument: delete an edge on a cycle → still connected, cost drops by its weight.
      Weight 0 → cost drops by 0 → no contradiction → a cycle can survive in a cheapest network.
      MST: the output is required to be a tree, so no positivity is needed.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "A graph has edges `p–q` 3, `p–r` 1, `q–r` 4, `q–s` 2, `r–s` 5, `r–t` 6 and `s–t` 7. Run Prim from `p`. In what order are edges added, and what is the total weight?"
    choices:
      - text: "`p–r`, `p–q`, `q–s`, `r–t`; total 12"
        correct: true
        explains: "Right. At every step Prim takes the cheapest edge with exactly one end in the tree. `q–s` only becomes available once `q` has joined."
      - text: "`p–r`, `q–s`, `p–q`, `r–t`; total 12"
        explains: "That is Kruskal's order, cheapest edges first. Prim cannot take `q–s` second, because neither `q` nor `s` is in the tree `{p, r}` at that point."
      - text: "`p–r`, `q–r`, `q–s`, `r–t`; total 13"
        explains: "Once `X = {p, r}`, the crossing edges include `p–q` 3, which is cheaper than `q–r` 4. Prim compares every crossing edge, not only those at the newest vertex."
      - text: "`p–r`, `p–q`, `q–s`, `s–t`; total 13"
        explains: "For the last vertex `t`, the crossing edges are `r–t` 6 and `s–t` 7. 6 is cheaper."
    work: |-
      X = {p}: crossing p–q 3, p–r 1 → take p–r.
      X = {p, r}: p–q 3, q–r 4, r–s 5, r–t 6 → take p–q.
      X = {p, q, r}: q–s 2, r–s 5, r–t 6 → take q–s.
      X = {p, q, r, s}: r–t 6, s–t 7 → take r–t.
      Total 1 + 3 + 2 + 6 = 12.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Same graph: `p–q` 3, `p–r` 1, `q–r` 4, `q–s` 2, `r–s` 5, `r–t` 6, `s–t` 7. Run Kruskal. Which edges does it examine and reject?"
    choices:
      - text: "`q–r` and `r–s`; `s–t` is never examined"
        correct: true
        explains: "Right. After `p–r`, `q–s` and `p–q`, the vertices `p, q, r, s` form one component, so `q–r` and `r–s` would each close a cycle. `r–t` is the fourth accepted edge, which is `n − 1`, so Kruskal stops before `s–t`."
      - text: "`q–r`, `r–s` and `s–t`"
        explains: "`s–t` would be rejected if examined, but Kruskal stops once it has `n − 1 = 4` edges, and it has 4 after `r–t`."
      - text: "Only `s–t`, the most expensive edge"
        explains: "Kruskal does not reject an edge for being expensive. It rejects an edge whose endpoints are already connected, and `q–r` is the first such edge."
      - text: "`q–s` and `q–r`"
        explains: "`q–s` is examined second, when `q` and `s` are still in separate components. It is accepted: at that point the forest is `{p, r}`, `{q, s}` and `{t}`."
    work: |-
      Sorted: p–r 1, q–s 2, p–q 3, q–r 4, r–s 5, r–t 6, s–t 7.
      p–r: take → {p,r}. q–s: take → {q,s}. p–q: take → {p,q,r,s}.
      q–r: same component → reject. r–s: same component → reject.
      r–t: take → 4 edges = n − 1 → stop. s–t never examined.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "The basic implementation of Prim rescans every edge in every round. It is run on a complete graph, with an edge between every pair of the `n` vertices. What is its running time in terms of `n` alone?"
    choices:
      - text: "`O(n³)`"
        correct: true
        explains: "Right. A complete graph has `m = n(n − 1)/2`, which is `Θ(n²)`. `n − 1` rounds of an `O(m)` scan is `O(n · n²)`."
      - text: "`O(n²)`"
        explains: "That is the array-based Prim, which keeps one best cost per vertex. The version here scans all `m ≈ n²/2` edges every round."
      - text: "`O(n² log n)`"
        explains: "That is heap-based Prim on a dense graph, `O(m log n)` with `m ≈ n²`. The basic version has no heap."
      - text: "`O(n log n)`"
        explains: "Even reading the graph once takes `Θ(n²)` here, because there are about `n²/2` edges."
    work: |-
      m = n(n − 1)/2 = Θ(n²).
      Rounds: n − 1. Work per round: O(m) = O(n²).
      Total: O(n) × O(n²) = O(n³).
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Heap-based Prim extracts `v`. Its neighbours are `w` (in the heap, `key[w] = 7`, edge `v–w` costs 5), `x` (in the heap, `key[x] = 3`, edge `v–x` costs 6) and `y` (already in `X`, edge `v–y` costs 1). What happens next?"
    choices:
      - text: "Decrease `key[w]` to 5 and record `v–w` as its edge; leave `x` and `y` alone"
        correct: true
        explains: "Right. Only `w` gets a cheaper connection. `x`'s existing 3 beats 6, and `y` is already in the tree, so its edge would close a cycle."
      - text: "Add `v–y` to the tree, because 1 is the cheapest of the three edges"
        explains: "`y` is already in `X`. An edge between two tree vertices closes a cycle, and Prim never considers it."
      - text: "Decrease `key[w]` to 5 and `key[x]` to 6"
        explains: "A key only goes down. 6 is worse than `x`'s current 3, so `x` keeps its old edge."
      - text: "Add `v–w` to the tree immediately, since it improved `w`'s key"
        explains: "Decrease-key only updates the candidate. `w` and `v–w` join the tree when `w` is extracted, and an even cheaper edge to `w` may appear before then."
    work: |-
      w: in heap, 5 < 7 → decrease-key, record v–w.
      x: in heap, 6 ≥ 3 → no change.
      y: in X → skip.
      Nothing is added to T until the next extract-min.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Heap-based Prim runs on a connected graph with 50 vertices and 300 edges. At most how many decrease-key operations can it perform, and exactly how many extract-mins?"
    choices:
      - text: "At most 300 decrease-keys; 49 extract-mins"
        correct: true
        explains: "Right. Each edge can lower a key at most once, when its first endpoint is extracted and the other is still outside `X`. Every vertex except the start is extracted once."
      - text: "At most 600 decrease-keys; 50 extract-mins"
        explains: "600 is `2m`, the number of list entries checked. Only the first of an edge's two entries to be read can lower a key, because by the second, the other end is in `X`. And the start vertex is never extracted as a candidate."
      - text: "At most 49 decrease-keys; 49 extract-mins"
        explains: "A vertex's key can be lowered several times, once by each new neighbour that offers a cheaper connection. The bound comes from the edges, not the vertices."
      - text: "At most 2,500 decrease-keys; 49 extract-mins"
        explains: "2,500 is `n²`. Decrease-keys come from edges, and there are only 300 of them."
    work: |-
      Extract-min: n − 1 = 49 (every vertex but the start).
      Decrease-key: ≤ one per edge = m = 300.
      Neighbour checks: 2m = 600, but only ≤ 300 can lower a key.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "An implementation of Prim uses an indexed heap, but its sift-up and sift-down swap heap entries without updating the position table. What goes wrong?"
    choices:
      - text: "A later decrease-key reads a stale position and edits the wrong slot, so keys and heap order can be corrupted"
        correct: true
        explains: "Right. The table is only useful while it is accurate. After an unrecorded swap, `position[d]` points at whichever vertex now occupies `d`'s old slot."
      - text: "Nothing; the position table is only read when the heap is built"
        explains: "It is read on every decrease-key, to find the entry without searching. That is the reason for having it."
      - text: "Decrease-key becomes `O(n)` but still gives correct answers"
        explains: "The code still trusts the table, so it does not fall back to a search. It goes straight to the wrong slot."
      - text: "Extract-min returns the largest key instead of the smallest"
        explains: "Extract-min reads slot 0, which the swaps keep correct. The damage comes from decrease-key using the out-of-date positions."
    work: |-
      Swap entries in slots i and j → must also swap position[ ] for those two vertices.
      Skip that, and position[v] names v's old slot.
      Next decrease-key(v) writes into that slot → wrong vertex changed.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Union-find with union by rank starts with singletons `a` to `f`. Perform `Union(a, b)`, `Union(c, d)`, `Union(a, c)`, `Union(e, f)`, `Union(e, a)`. What is the rank of the final root of the group `{a, b, c, d, e, f}`?"
    choices:
      - text: "2"
        correct: true
        explains: "Right. `{a,b}` and `{c,d}` reach rank 1, and merging them, equal ranks, gives rank 2. `{e,f}` has rank 1, so it goes under the rank-2 root without raising it."
      - text: "3"
        explains: "That would need the last merge to join two rank-2 groups. `{e, f}` has rank 1, and a lower-rank root goes under the higher one with no change in rank."
      - text: "5"
        explains: "That counts Union calls. Rank rises only when two roots of equal rank merge."
      - text: "6"
        explains: "That is the group's size. A rank-2 root has at least `2² = 4` vertices, and here it has 6, but rank bounds height, not size."
    work: |-
      Union(a,b): ranks 0,0 → rank 1.   Union(c,d): ranks 0,0 → rank 1.
      Union(a,c): ranks 1,1 → rank 2.   Union(e,f): ranks 0,0 → rank 1.
      Union(e,a): ranks 1 vs 2 → {e,f} goes under; rank stays 2.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Kruskal with union-find runs on a graph with 20 vertices that falls into 3 separate connected pieces. How many edges does it accept, and when does it stop?"
    choices:
      - text: "17 edges, after processing every edge in the sorted list"
        correct: true
        explains: "Right. A spanning forest of 3 trees on 20 vertices has `20 − 3 = 17` edges. The count never reaches `n − 1 = 19`, so the stopping rule never fires and every edge is examined."
      - text: "19 edges, stopping as soon as it reaches `n − 1`"
        explains: "No edge joins the separate pieces, so 19 edges cannot be accepted. Each tree in the forest has one fewer edge than vertices, so 3 trees have 3 fewer edges in total."
      - text: "It fails, because Kruskal requires a connected graph"
        explains: "Kruskal never relies on connectivity. It returns a minimum spanning forest, one MST for each piece."
      - text: "20 edges, one per vertex"
        explains: "Any 20 edges on 20 vertices contain a cycle, and Kruskal rejects every edge that closes one."
    work: |-
      Each piece with nᵢ vertices gets a tree of nᵢ − 1 edges.
      Total: (n₁ − 1) + (n₂ − 1) + (n₃ − 1) = 20 − 3 = 17.
      17 < n − 1 = 19 → the stopping rule never triggers → process all edges.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Graph: `p–q` 3, `p–r` 1, `q–r` 4, `q–s` 2, `r–s` 5, `r–t` 6, `s–t` 7. Take the cut `{p, r}` against `{q, s, t}`. Which edge does the cut property guarantee is in some MST?"
    choices:
      - text: "`p–q`, weight 3"
        correct: true
        explains: "Right. The crossing edges are `p–q` 3, `q–r` 4, `r–s` 5 and `r–t` 6, and `p–q` is the cheapest. It is in the MST of weight 12."
      - text: "`p–r`, weight 1"
        explains: "`p–r` is in the MST, but this cut does not show it, because both of its ends are on the same side. Each cut speaks only about the edges that cross it."
      - text: "`q–s`, weight 2"
        explains: "`q–s` is cheaper than `p–q`, but both its ends are on the `{q, s, t}` side, so it does not cross this cut."
      - text: "`r–t`, weight 6"
        explains: "`r–t` crosses the cut, and it is in the MST, but it is not the cheapest crossing edge, so the cut property says nothing about it."
    work: |-
      Sides: {p, r} | {q, s, t}.
      Crossing: p–q 3, q–r 4, r–s 5, r–t 6.   Same side: p–r 1, q–s 2, s–t 7.
      Cheapest crossing: p–q 3 → in some MST.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Every edge weight `w` in a graph is replaced. Which of these replacements can change which spanning tree is minimum?"
    choices:
      - text: "`w ↦ −w`"
        correct: true
        explains: "Right. Negating reverses every comparison, so the cheapest edges become the most expensive. In general the MST of the new weights is a maximum spanning tree of the old ones."
      - text: "`w ↦ w − 10`, even if some weights become negative"
        explains: "Every spanning tree has `n − 1` edges, so every total drops by exactly `10(n − 1)`. The cheapest tree stays the cheapest."
      - text: "`w ↦ 3w`"
        explains: "Multiplying by a positive constant keeps every comparison the same, and both algorithms depend only on how weights compare."
      - text: "`w ↦ w + 5`"
        explains: "Every tree gains `5(n − 1)`, the same amount, so their order is unchanged."
    work: |-
      MST depends only on the order of the weights.
      w − 10, 3w, w + 5: order-preserving → same MST.
      −w: order-reversing → x < y becomes −x > −y → MST can change.
  - topic: "Week 7 · Greedy algorithms and minimum spanning trees"
    ask: "Two students compute an MST of the same graph, one with Prim and one with Kruskal. Their trees differ in one edge, and both have total weight 41. What can you conclude?"
    choices:
      - text: "Both can be correct; the graph must have tied weights, since distinct weights would give a unique MST"
        correct: true
        explains: "Right. With all weights distinct the MST is unique, so two different MSTs mean some weights are tied. Equal totals are what any two MSTs must have."
      - text: "One of them made a mistake, because a graph has only one MST"
        explains: "A graph with tied weights can have several MSTs. Different tie-breaking leads to different trees with the same total."
      - text: "Prim and Kruskal always return different trees"
        explains: "On a graph with distinct weights they return the same tree, the only MST. They can differ only when ties allow more than one."
      - text: "Kruskal's is right, because sorting breaks ties correctly"
        explains: "No tie-break is more correct than another. Every cheapest crossing edge is safe by the cut property, so either choice leads to a valid MST."
    work: |-
      Distinct weights ⇒ unique MST.
      Here: two different trees, same total 41 ⇒ not unique ⇒ some weights tied.
      Both trees are minimum.
---
94 multiple-choice questions across all seven weeks. The paper is divided into sections, and nothing is revealed until you
submit: pick an answer for each question (you can change it as often as you like), then submit a
section to see your score for it, the correct answers, an explanation for each one you chose, and a
worked solution. You can submit one section at a time, in any order, or the whole exam at once.

There is no penalty for a wrong answer. Questions you leave blank in a section you submit count as wrong.
