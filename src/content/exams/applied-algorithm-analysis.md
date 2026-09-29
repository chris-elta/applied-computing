---
course: applied-algorithm-analysis
title: "Applied Algorithm Analysis · Final Exam"
minutes: 80
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
---
52 multiple-choice questions across all four weeks. Nothing is revealed until you submit: pick an
answer for each question (you can change it as often as you like), then submit to see your score, the
correct answer, an explanation for the one you chose, and a worked solution.

There is no penalty for a wrong answer. Questions you leave blank count as wrong.
