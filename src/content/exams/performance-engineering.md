---
course: performance-engineering
title: "Performance Engineering · Exam"
minutes: 20
passMark: 60
questions:
  - topic: "Amdahl's Law"
    ask: "A program is 95% parallelisable. What speedup does Amdahl's Law predict on 64 cores?"
    choices:
      - text: "About 20×"
        explains: "That is the ceiling with unlimited cores. With 64 cores you do not reach it."
      - text: "About 15.4×"
        correct: true
        explains: "Right. S = 1 / (0.05 + 0.95/64) ≈ 15.4, well under the 20× ceiling."
      - text: "About 60×"
        explains: "This takes 95% of 64. The serial part limits the speedup much more."
      - text: "About 64×"
        explains: "That would need the whole program to be parallel."
    work: |-
      `S = 1 / ((1 − p) + p/N)` with `p = 0.95`, `N = 64`.
      `(1 − p) = 0.05` and `p/N = 0.95/64 ≈ 0.0148`.
      `S = 1 / (0.05 + 0.0148) = 1 / 0.0648 ≈ 15.4`.
      The ceiling as `N → ∞` is `1 / 0.05 = 20`.
  - topic: "Amdahl's Law"
    ask: "A program is 90% parallel and runs on 16 cores. Which change gives the larger speedup: doubling to 32 cores, or halving the serial fraction from 10% to 5% (staying on 16 cores)?"
    choices:
      - text: "They give identical speedups"
        explains: "They differ, and the serial fraction has the bigger effect."
      - text: "Halving the serial fraction: about 9.1× against about 7.8×"
        correct: true
        explains: "Right. The ceiling depends only on the serial fraction, so shrinking it is worth more than scaling out."
      - text: "Doubling the cores: more cores always beat a change to the code"
        explains: "Doubling to 32 cores gives only about 7.8×, less than the 9.1× from halving the serial fraction."
      - text: "Neither helps at all"
        explains: "Both help. Baseline is 6.4×."
    work: |-
      Baseline: `1 / (0.10 + 0.90/16) = 1 / 0.15625 = 6.4×`.
      32 cores: `1 / (0.10 + 0.90/32) = 1 / 0.128125 ≈ 7.8×`.
      Serial 5% on 16 cores: `1 / (0.05 + 0.95/16) = 1 / 0.109375 ≈ 9.1×`.
      The useful question is what your serial fraction is, and whether you can shrink it.
  - topic: "Amdahl's Law"
    ask: "A program is 99% parallel. What is the maximum speedup, however many cores you add?"
    choices:
      - text: "99×"
        explains: "That is the parallel percentage, not a speedup."
      - text: "Unlimited"
        explains: "The serial 1% takes the same wall-clock time whatever the number of cores."
      - text: "10×"
        explains: "That would be the ceiling for a 90% parallel program."
      - text: "100×"
        correct: true
        explains: "Right. With N → ∞ the p/N term vanishes, leaving 1 / (1 − p) = 1 / 0.01."
    work: |-
      Amdahl: `S = 1 / ((1 − p) + p/N)`.
      As `N → ∞`, `p/N → 0`, so `S → 1 / (1 − p)`.
      `1 / (1 − 0.99) = 1 / 0.01 = 100`.
      The ceiling depends only on the serial fraction.
  - topic: "Little's Law"
    ask: "A service handles 500 requests per second and each request takes 120 ms end to end. Roughly how many workers are needed to avoid a growing queue?"
    choices:
      - text: "60"
        correct: true
        explains: "Right. L = λW = 500 × 0.12 = 60 requests in flight."
      - text: "4"
        explains: "That divides 500 by 120 and ignores that the units differ. W must be in seconds."
      - text: "6"
        explains: "This is 500 × 0.012, a slip in the unit conversion. 120 ms is 0.12 s."
      - text: "620"
        explains: "This adds rather than multiplies. Little's Law is L = λW."
    work: |-
      Little's Law: `L = λ · W`.
      Convert: `W = 120 ms = 0.12 s`.
      `L = 500 × 0.12 = 60` requests in flight.
      Fewer than 60 workers and arrivals queue up, however fast each one is.
  - topic: "Little's Law"
    ask: "You can see 300 requests in the system on average and the service completes 1,500 requests per second. What is the average latency?"
    choices:
      - text: "450,000 ms"
        explains: "That multiplies L by λ and ignores the units. W = L / λ."
      - text: "5 ms"
        explains: "That inverts the ratio. W = L / λ, not λ / L."
      - text: "Not enough information"
        explains: "Little's Law needs no assumption about arrival distribution. Two of the three quantities determine the third."
      - text: "200 ms"
        correct: true
        explains: "Right. W = L / λ = 300 / 1500 = 0.2 s."
    work: |-
      Rearrange `L = λW` to `W = L / λ`.
      `W = 300 / 1500 = 0.2 s = 200 ms`.
      Little's Law lets you infer the term you cannot measure directly.
      It needs only that the system is stable.
  - topic: "Little's Law"
    ask: "A report says: 100 requests per second, 20 requests in flight, 50 ms latency. What does Little's Law say?"
    choices:
      - text: "They are consistent"
        explains: "λW = 100 × 0.05 = 5, not 20."
      - text: "They are inconsistent only if the system is unstable"
        explains: "For a stable system the three must satisfy L = λW. These do not."
      - text: "The three figures are inconsistent: 100 × 0.05 = 5 in flight, not 20, so one was measured wrongly"
        correct: true
        explains: "Right. Little's Law is a sanity check: throughput, latency and concurrency must multiply out."
      - text: "They are consistent only if arrivals are Poisson"
        explains: "Little's Law needs no such assumption."
    work: |-
      `L = λW = 100 × 0.05 = 5` requests in flight.
      The report claims 20.
      Since Little's Law holds for any stable system, one of the three figures is measured wrongly.
      No assumption about the arrival distribution is needed.
  - topic: "The Roofline Model"
    ask: "The kernel y[i] = a·x[i] + y[i] does 2 FLOPs per element. It reads x[i] and y[i] (4-byte floats) and writes y[i]. What is its arithmetic intensity?"
    choices:
      - text: "About 6 FLOPs per byte"
        explains: "This inverts the ratio. Intensity is FLOPs divided by bytes."
      - text: "About 0.5 FLOPs per byte"
        explains: "That would be 2 FLOPs over 4 bytes, counting only one memory access."
      - text: "About 0.17 FLOPs per byte"
        correct: true
        explains: "Right. 2 FLOPs over 12 bytes moved is 1/6 ≈ 0.17, far below the crossover, so it is memory bound."
      - text: "2 FLOPs per byte"
        explains: "That ignores the bytes. Each element moves 12 bytes."
    work: |-
      Bytes moved: read `x[i]` (4), read `y[i]` (4), write `y[i]` (4) = 12.
      FLOPs: one multiply and one add = 2.
      `2 / 12 = 1/6 ≈ 0.17` FLOPs per byte.
      That is well below any modern crossover point, so the kernel is memory bound.
  - topic: "The Roofline Model"
    ask: "A machine has a peak of 1,000 GFLOP/s and a memory bandwidth of 100 GB/s. A kernel has an arithmetic intensity of 0.5 FLOPs per byte. What is the best performance the roofline allows?"
    choices:
      - text: "200 GFLOP/s"
        explains: "This divides bandwidth by intensity rather than multiplying."
      - text: "50 GFLOP/s"
        correct: true
        explains: "Right. On the sloped part, performance is bandwidth × intensity = 100 × 0.5 = 50, far below the 1,000 peak."
      - text: "1,000 GFLOP/s"
        explains: "That is the flat compute roof. The kernel never reaches it because bandwidth limits it first."
      - text: "500 GFLOP/s"
        explains: "This takes half the peak. The bandwidth limit gives a much lower figure."
    work: |-
      Attainable performance `= min(peak, bandwidth × intensity)`.
      `bandwidth × intensity = 100 GB/s × 0.5 FLOP/B = 50 GFLOP/s`.
      `min(1000, 50) = 50`.
      The crossover is at `1000 / 100 = 10` FLOPs per byte, and this kernel is far to the left of it.
  - topic: "The Roofline Model"
    ask: "Your kernel sits well under the sloped part of the roofline. Which change is most likely to help?"
    choices:
      - text: "Improve data reuse (blocking or tiling) so fewer bytes are moved per FLOP"
        correct: true
        explains: "Right. That raises arithmetic intensity, moving you right along the slope towards the compute limit."
      - text: "Add more threads"
        explains: "More threads mean more demand on the same memory bandwidth, which can make things worse."
      - text: "Use lower-precision arithmetic"
        explains: "Cheaper arithmetic only helps when compute is the limit."
      - text: "Buy a CPU with a higher clock speed"
        explains: "That raises the flat compute roof, which you are not touching."
    work: |-
      Under the slope means memory bound: bandwidth is the limit, not compute.
      A higher clock raises the compute ceiling. More threads add demand on the same bandwidth.
      Reusing data by blocking or tiling means fewer bytes moved per FLOP.
      That raises intensity and moves you along the slope.
  - topic: "Choosing the law"
    ask: "Which law answers each question: “How many workers must I provision for this load?” and “What is the most speedup I can ever get from more cores?”"
    choices:
      - text: "Little's Law for both"
        explains: "Little's Law does not describe a speedup ceiling."
      - text: "Amdahl's Law, then Little's Law"
        explains: "The two are swapped."
      - text: "Little's Law, then Amdahl's Law"
        correct: true
        explains: "Right. Little's Law relates concurrency to arrival rate and latency, and Amdahl's Law caps speedup by the serial fraction."
      - text: "The Roofline Model, then Little's Law"
        explains: "The roofline tells you whether memory or compute limits a kernel, not how many workers to provision."
    work: |-
      Sizing a pool is `L = λW`: Little's Law.
      The ceiling from more cores is `1 / (1 − p)`: Amdahl's Law.
      The roofline decides whether arithmetic or memory traffic limits a kernel.
      Each law takes one line to state and rules out a whole category of wasted effort.
---
10 multiple-choice questions. Nothing is revealed until you submit: pick an answer for each question (you
can change it as often as you like), then submit to see your score, the correct answer, an explanation
for the one you chose, and a worked solution.

There is no penalty for a wrong answer. Questions you leave blank count as wrong.
