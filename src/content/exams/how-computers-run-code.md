---
course: how-computers-run-code
title: "How Computers Run Code · Exam"
minutes: 20
passMark: 60
questions:
  - topic: "How instructions execute"
    ask: "In the fetch–decode–execute cycle, which stage is the only one that performs arithmetic on your data?"
    choices:
      - text: "Write back"
        explains: "Write back stores a result that has already been computed."
      - text: "Execute"
        correct: true
        explains: "Right. The ALU does the work in Execute; every other stage is logistics."
      - text: "Decode"
        explains: "Decode works out what the instruction means and which units to switch on."
      - text: "Fetch"
        explains: "Fetch moves an instruction from memory into the CPU. It computes nothing on your data."
    work: |-
      Fetch reads the next instruction from the address in the program counter.
      Decode works out what it means. Write back stores a finished result.
      Execute is where the ALU does the arithmetic on your data.
      So only Execute performs arithmetic.
  - topic: "How instructions execute"
    ask: "Why can a 3 GHz processor retire several instructions per clock cycle, even though each instruction passes through five stages?"
    choices:
      - text: "Pipelining: the stages use different hardware, so several instructions are in flight at once, staggered"
        correct: true
        explains: "Right. While one instruction executes, the next can be decoded and the one after fetched."
      - text: "Each instruction is only one stage long on a fast chip"
        explains: "Each still passes through all the stages. The overlap is what gives the throughput."
      - text: "Memory is faster than the processor"
        explains: "Memory is much slower than the processor, which is the memory wall."
      - text: "The program counter skips ahead by several instructions"
        explains: "The counter normally advances by one instruction's size. It is not skipping."
    work: |-
      The stages use different hardware.
      While the ALU executes instruction three, the fetch unit can already read instruction four.
      The chip runs several instructions at once, each in a different stage.
      That overlap is pipelining, and it is why throughput exceeds one instruction per five cycles.
  - topic: "How instructions execute"
    ask: "A pipeline stalls one stage while it waits. Why is that so costly?"
    choices:
      - text: "Only the stalled instruction is delayed; the others carry on"
        explains: "The instructions behind it are staggered by stages and get held up."
      - text: "Stalls make the program counter reset"
        explains: "The counter is not reset by a stall."
      - text: "A stall permanently slows the clock"
        explains: "The clock does not change. The pipeline stops advancing."
      - text: "The stall drains the whole pipeline, so every instruction behind it waits too"
        correct: true
        explains: "Right. The speed comes from overlap, and a stall breaks the overlap."
    work: |-
      The stages run staggered, several instructions at a time.
      If one stage cannot proceed, the instructions behind it cannot move forward either.
      So the whole pipeline backs up and the overlap that made the chip fast is lost.
      This is why the cycle is simple but the speed comes from overlap.
  - topic: "Why memory dominates"
    ask: "A loop does 20 arithmetic operations per element (about one per cycle on a 3 GHz core) and reads each element from main memory, which takes about 80 ns. Roughly how does the memory time compare with the compute time?"
    choices:
      - text: "Compute takes about 12 times as long"
        explains: "This inverts the ratio. Arithmetic is cheap next to a trip to memory."
      - text: "Memory takes about 12 times as long"
        correct: true
        explains: "Right. Compute is 20/(3×10⁹) ≈ 6.7 ns, and 80/6.7 ≈ 12."
      - text: "They take about the same time"
        explains: "Compute is under 7 ns against 80 ns for the memory read."
      - text: "It cannot be compared without the clock speed"
        explains: "The clock speed was given, and memory latency barely depends on it."
    work: |-
      Compute: `20 / (3×10⁹) ≈ 6.7 ns`.
      Memory read: about `80 ns`.
      `80 / 6.7 ≈ 12`, so the wait dominates by roughly an order of magnitude.
      Even a fairly arithmetic-heavy loop is limited by how often it has to wait.
  - topic: "Why memory dominates"
    ask: "You double the clock speed of a processor running a loop that is limited by memory latency. What is the most likely effect?"
    choices:
      - text: "Little improvement, because memory latency barely moves with the clock"
        correct: true
        explains: "Right. Faster clocks widen the processor–memory gap, which is what the memory wall describes."
      - text: "The cache size doubles"
        explains: "The clock rate has no effect on cache capacity."
      - text: "The loop gets slower"
        explains: "It should not get slower, but the wait stays."
      - text: "The loop runs twice as fast"
        explains: "That would only happen if arithmetic were the bottleneck."
    work: |-
      The loop spends most of its time waiting for memory.
      A faster clock shrinks only the compute part of the time.
      Memory latency barely changes, so the total barely changes.
      Faster clocks make the imbalance worse, not better.
  - topic: "Why memory dominates"
    ask: "Caches, prefetching and out-of-order execution all address the same problem. What is the common idea?"
    choices:
      - text: "Increasing the clock frequency"
        explains: "None of the three changes the clock."
      - text: "The processor is not trying to go faster; it is trying not to be idle while waiting for memory"
        correct: true
        explains: "Right. So the useful question about a program is how often it has to wait, not how many operations it performs."
      - text: "Reducing the number of arithmetic operations"
        explains: "They do nothing to the operation count."
      - text: "Making main memory bigger"
        explains: "They work around the memory latency; they do not change memory's size."
    work: |-
      Caches avoid the trip by keeping recently used data close.
      Prefetching starts the trip before you ask.
      Out-of-order execution finds other work to do while waiting.
      All three exist so that the processor is not idle while it waits.
  - topic: "Access patterns"
    ask: "A cache brings back a 4-word block on each miss. A loop reads 16 consecutive words in order, starting from an empty cache. How many reads miss?"
    choices:
      - text: "12"
        explains: "That is the number of hits, not the number of misses."
      - text: "4"
        correct: true
        explains: "Right. Each block of four words has one miss followed by three hits, and 16 / 4 = 4 blocks."
      - text: "1"
        explains: "That would mean the whole array arrived on the first miss. Each miss loads only one block, so every new block misses once."
      - text: "16"
        explains: "That would be the case if every read fetched only a single word."
    work: |-
      Each miss loads a whole 4-word block: the missed word plus its three neighbours.
      Reads within a block after the first are hits.
      16 words is `16 / 4 = 4` blocks, so 4 misses and `16 − 4 = 12` hits.
      This is spatial locality at work.
  - topic: "Access patterns"
    ask: "You change a loop to read every 16th element instead of every element, with 4-word cache blocks. What happens to the cost per element read?"
    choices:
      - text: "It improves, since there are fewer reads"
        explains: "Fewer reads, but each one now pays full latency, about 80 times a cache hit."
      - text: "It gets much worse: every read lands in a different block and misses"
        correct: true
        explains: "Right. No read benefits from the block a neighbour pulled in, so each pays full memory latency."
      - text: "It stays the same"
        explains: "Sequential reads get three free hits per block, and this pattern loses those."
      - text: "It depends only on the clock speed"
        explains: "The cost is set by the access pattern, not the clock."
    work: |-
      With sequential reads, one miss brings in three more words that hit for free.
      A stride of 16 jumps over the whole 4-word block each time.
      So every read is in a new block and misses.
      Each miss costs about 80 times a hit, so the cost per read is much higher.
  - topic: "Access patterns"
    ask: "Two implementations do the same number of operations. One walks an array in order; the other follows a linked list scattered across the heap. Why can they differ by an order of magnitude?"
    choices:
      - text: "Linked lists execute more instructions per element"
        explains: "The instruction count is the same by assumption. The difference is waiting."
      - text: "Arrays are stored in registers"
        explains: "Registers hold a handful of values. Arrays live in memory and are cached."
      - text: "The cache is turned off for linked lists"
        explains: "The cache is always on; it just cannot help with scattered accesses."
      - text: "The array walk uses spatial locality, so most reads hit in cache; the scattered list misses on most reads"
        correct: true
        explains: "Right. The access pattern is what you cooperate with or fight against, and operation counts do not show it."
    work: |-
      The cache holds a guess: recently used data and the neighbours of what you touched.
      An array walked in order cooperates: one miss brings in neighbours that hit next.
      A scattered linked list fights it: neighbours in the list are not neighbours in memory.
      Same operation count, very different waiting.
  - topic: "Access patterns"
    ask: "A loop that adds the same variable to a running total on every iteration shows which kind of locality?"
    choices:
      - text: "Prefetching"
        explains: "Prefetching is starting a load early. It is a different technique."
      - text: "Spatial locality"
        explains: "Spatial locality is about touching neighbouring addresses."
      - text: "Temporal locality: an address touched once is likely to be touched again soon"
        correct: true
        explains: "Right. Walking neighbouring array elements would be spatial locality."
      - text: "No locality at all"
        explains: "Repeated use of the same address is the definition of temporal locality."
    work: |-
      Temporal locality: an address you touched, you will probably touch again soon.
      Spatial locality: an address you touched, its neighbours are probably next.
      Re-using one variable each iteration is the first.
      Real code has both, which is why the crude guess works.
---
10 multiple-choice questions. Nothing is revealed until you submit: pick an answer for each question (you
can change it as often as you like), then submit to see your score, the correct answer, an explanation
for the one you chose, and a worked solution.

There is no penalty for a wrong answer. Questions you leave blank count as wrong.
