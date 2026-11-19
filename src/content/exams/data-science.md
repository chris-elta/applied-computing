---
course: data-science
title: "Data Science · Final Exam"
minutes: 160
passMark: 60
questions:
  - topic: "Week 1 · Thinking about data"
    ask: "A thesis shows a music-generation model uses 30% less energy at similar quality on benchmark prompts. Why is that not yet evidence of a successful product?"
    choices:
      - text: "Energy savings never matter to customers"
        explains: "They might matter a lot. The point is that a benchmark alone does not show it."
      - text: "Thesis results are usually wrong"
        explains: "The result can be perfectly good. It just answers a different question."
      - text: "Models cannot be turned into products"
        explains: "They can, but the product is the model plus the rest of the system."
      - text: "A benchmark result answers a research question; a product must give a customer something they value, reliably, at a price the business can sustain"
        correct: true
        explains: "Right. The gap is everything around the model: measurement, reliability, updates, cost and responsibility."
    work: |-
      The thesis result is about a model on a fixed set of prompts.
      A product has to answer whether a customer gets something they value every time, at a sustainable price.
      Most of the open questions are not about the model: accuracy that customers care about, availability, updating and rollback, cost, unacceptable mistakes, privacy.
      The model is one component, and most of the product is everything else.
  - topic: "Week 1 · Thinking about data"
    ask: "In machine-learning systems, where does the specification of correct behaviour mostly come from?"
    choices:
      - text: "From the compiler"
        explains: "A compiler does not supply behaviour."
      - text: "From rules a programmer writes down and tests"
        explains: "That is traditional software. For ML the rules are learned rather than written."
      - text: "From the training data, so a change in the data can change behaviour even if no code changed"
        correct: true
        explains: "Right. This is inductive rather than deductive: behaviour follows from the data seen, so the data is part of the program."
      - text: "From the model architecture alone"
        explains: "The architecture matters, but the behaviour is learned from data."
    work: |-
      Traditional software: deductive, you write the rule and a test that it holds.
      Machine learning: inductive, the model generalises from observations.
      Its behaviour follows from the data it saw, so no written spec exists and black-box behaviour is hard to check.
      Changing the data can change the behaviour with no code change: the data is part of the program.
  - topic: "Week 1 · Thinking about data"
    ask: "What does “correct” realistically mean for a model's output?"
    choices:
      - text: "Every prediction matches the specification"
        explains: "There is usually no specification to match, and no model achieves this."
      - text: "It works well enough, on average, on some test data, so a system must tolerate some wrong predictions"
        correct: true
        explains: "Right. An average score tells you how often you are wrong, not how badly or where."
      - text: "It is fast"
        explains: "Speed is a separate quality from correctness."
      - text: "It passes every unit test"
        explains: "Unit tests can check rules, but models do not follow written rules."
    work: |-
      There is no rule to check each output against.
      You can only measure whether it works well enough, on average, on test data.
      Some individual predictions will be wrong, and the average does not say which or how badly.
      So the design question becomes: what happens when it is wrong, and how bad is that?
  - topic: "Week 1 · Thinking about data"
    ask: "A data scientist is typically judged on accuracy on evaluation data. A software engineer is typically judged on what?"
    choices:
      - text: "Accuracy on evaluation data, the same as a data scientist"
        explains: "That is the data scientist's usual measure."
      - text: "Number of models trained"
        explains: "This is an output, not a measure of success."
      - text: "Model size only"
        explains: "Model size is one of the things data scientists often ignore, not the engineer's main measure."
      - text: "Customer satisfaction, through performance, stability and release time"
        correct: true
        explains: "Right. Trouble starts when each role assumes the other's concerns are the same as its own."
    work: |-
      Data scientist: a fixed dataset, judged by accuracy, prototyping in notebooks.
      Software engineer: large live data, judged by customer satisfaction, maintaining and extending over time.
      Neither is wrong: an undeployable model is not a product and a product around a poor model is not useful.
      Friction comes from optimising for different things without realising it.
  - topic: "Week 1 · Thinking about data"
    ask: "What is the difference between a T-shaped and a π-shaped person?"
    choices:
      - text: "Both have breadth across many areas; T-shaped has one deep area, π-shaped has two, typically a technique and a domain"
        correct: true
        explains: "Right. Breadth lets you collaborate; depth lets you contribute."
      - text: "T-shaped people are generalists with no depth"
        explains: "The stem of the T is deep expertise in one area."
      - text: "π-shaped people are deep in every area"
        explains: "π has two deep areas, not all of them."
      - text: "They describe seniority: T is junior and π is senior"
        explains: "They describe the shape of one's skills, not career level."
    work: |-
      The horizontal bar is breadth and the vertical stems are depth.
      T-shaped: broad, with one deep area (for example deep neural networks).
      π-shaped: broad, with two deep areas, naturally a technique and a domain such as medical systems.
      Depth makes you useful; breadth makes you useful to a team.
  - topic: "Week 1 · Thinking about data"
    ask: "Which of these is characteristic of scientists rather than computer scientists, as the course contrasts them?"
    choices:
      - text: "They are comfortable that data has errors and nothing is ever completely true or false"
        correct: true
        explains: "Right. With data you weigh evidence and expect it to be imperfect."
      - text: "They build their own clean, organised virtual worlds"
        explains: "That describes computer scientists."
      - text: "They test algorithms on random data"
        explains: "That is the habit the lecture ascribes to computer scientists."
      - text: "They invent rather than discover"
        explains: "The lecture attributes “invent rather than discover” to computer scientists."
    work: |-
      Scientists: study a messy natural world, data-driven, obsessed with discovering, comfortable with errors.
      Computer scientists: build clean virtual worlds, algorithm-driven, invent, and expect everything to be true or false.
      With data, rigour means working out how far to trust it and saying how sure you are.
  - topic: "Week 1 · Thinking about data"
    ask: "“Genius shows in finding the right answer. Wisdom shows in avoiding the wrong answers.” Why does the course say data science benefits more from wisdom?"
    choices:
      - text: "Wrong answers are rare in data science"
        explains: "The lecture argues the opposite: they are easy to make and hard to notice."
      - text: "Genius is not needed at all"
        explains: "Genius has value, but it benefits less than wisdom."
      - text: "An analysis can produce a clean-looking wrong answer without any error message, and you cannot always check it against the truth"
        correct: true
        explains: "Right. The protection is the habit of doubting your own result before someone else does."
      - text: "Data scientists are hired to produce code"
        explains: "The lecture says software developers are hired to produce code and data scientists to produce insights."
    work: |-
      Insights are claims about the world, and the world does not tell you when you are wrong.
      A bug crashes something; a mislabelled column or skewed sample produces a tidy but wrong chart.
      Since you cannot always check against the truth, you build the habit of asking how you might be wrong.
      Wisdom comes from experience, general knowledge, listening to others and humility.
  - topic: "Week 1 · Thinking about data"
    ask: "You use a baseball dataset to ask “Do left-handed people have shorter lifespans than right-handed people?” What is the main caution?"
    choices:
      - text: "Professional ballplayers are not a random sample of people, so the data may not stand in for the wider population"
        correct: true
        explains: "Right. Each step away from what the data describes raises the question of who is missing."
      - text: "Left-handedness is always recorded incorrectly"
        explains: "Nothing suggests this. The problem is who is in the data."
      - text: "Baseball data does not contain any dates"
        explains: "It records each year's statistics, so dates are present."
      - text: "Questions about people cannot be asked of sports data"
        explains: "They can, but the stretch from players to people needs care."
    work: |-
      A dataset's subject is the thing it describes: players and teams.
      Using it as a stand-in for people in general stretches it.
      Professional ballplayers are selected, so conclusions about the population may not hold.
      Ask who is missing before generalising.
  - topic: "Week 1 · Thinking about data"
    ask: "In the Google Ngrams data, the frequency of a word rises sharply after 1990. Which is the most careful reading?"
    choices:
      - text: "The data is useless for any question"
        explains: "It is very useful, provided you check it against the biases of the corpus."
      - text: "It might reflect a real change, but also more books being printed or more recent titles being scanned, so check the corpus first"
        correct: true
        explains: "Right. Counts in a corpus describe the corpus; whether they describe the world depends on how it was assembled."
      - text: "The word became more popular, with certainty"
        explains: "That is one possibility, but the corpus itself may have changed."
      - text: "Ngrams cover every book ever published"
        explains: "The lecture says it covers about 15% of all books."
    work: |-
      Ngrams counts words in scanned books, about 15% of books ever published.
      A rise in a word's frequency could mean the world changed, or that more books were printed, or that recent titles are over-represented in the scan.
      Counts in a corpus describe the corpus.
      Whether they describe the world depends on how the corpus was assembled.
  - topic: "Week 1 · Thinking about data"
    ask: "Which of these taxi-data questions cannot be answered by looking things up in the records, and needs an answer to be built?"
    choices:
      - text: "“How many trips were taken in total?”"
        explains: "This is a count of records, a lookup."
      - text: "“What is each driver's total fare on a given night?”"
        explains: "Nearly a lookup: sum the fares by driver and night."
      - text: "“Where should drivers go to pick up their next fare?”"
        correct: true
        explains: "Right. The record does not contain the answer; you must build it from the rest and decide how far to trust it."
      - text: "“Where do people travel to and from at different times of day?”"
        explains: "This is close to a lookup: pickup and dropoff locations and times are in the records."
    work: |-
      Locations, times and fares are recorded, so travel patterns and nightly totals come from the records.
      “Where should a driver go next?” is a recommendation. It is not stored anywhere.
      You have to build a model from the other data and then decide how far to trust it.
      That is where data science begins.
  - topic: "Week 2 · Probability and statistics"
    ask: "A classifier claims to output probabilities for three mutually exclusive outcomes. Which set of scores could be a valid probability distribution?"
    choices:
      - text: "0.4, 0.4, 0.4"
        explains: "They add to 1.2, but the probabilities of all outcomes must add to 1."
      - text: "0.6, 0.6, −0.2"
        explains: "They add to 1, but a probability cannot be negative."
      - text: "0.3, 0.3, 0.3"
        explains: "They add to 0.9, so an outcome is missing or a number is wrong."
      - text: "0.5, 0.3, 0.2"
        correct: true
        explains: "Right. Each is between 0 and 1 and they add to 1."
    work: |-
      Rule 1: each `p(s)` satisfies `0 ≤ p(s) ≤ 1`.
      Rule 2: the probabilities of all outcomes add up to 1.
      `0.5 + 0.3 + 0.2 = 1.0` and all are in range.
      `0.6 + 0.6 − 0.2 = 1` fails rule 1, and `0.4·3 = 1.2` and `0.3·3 = 0.9` fail rule 2.
  - topic: "Week 2 · Probability and statistics"
    ask: "P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.25. Are A and B independent?"
    choices:
      - text: "Yes, since 0.25 is below both P(A) and P(B)"
        explains: "Being below each is true of any intersection. It does not test independence."
      - text: "It cannot be decided without the sample size"
        explains: "The product rule uses the probabilities you already have."
      - text: "No: independence needs P(A ∩ B) = P(A) × P(B) = 0.20, but the observed value is 0.25"
        correct: true
        explains: "Right. Here B makes A more likely: P(A|B) = 0.25/0.4 = 0.625, above P(A) = 0.5."
      - text: "Yes, since the probabilities are all reasonable numbers"
        explains: "Independence is a numerical claim, checked by the product rule."
    work: |-
      Independent means `P(A ∩ B) = P(A) × P(B)`.
      `P(A) × P(B) = 0.5 × 0.4 = 0.20`.
      Observed `P(A ∩ B) = 0.25 ≠ 0.20`, so they are not independent.
      Equivalently `P(A|B) = 0.25 / 0.4 = 0.625 ≠ P(A) = 0.5`.
  - topic: "Week 2 · Probability and statistics"
    ask: "Roll two fair dice and learn that the first die is a 5. What is the probability that the total is 10 or more?"
    choices:
      - text: "1/3"
        correct: true
        explains: "Right. Of the six outcomes (5,1) to (5,6), two reach 10: (5,5) and (5,6)."
      - text: "1/18"
        explains: "That is 2/36, the joint probability. Conditioning divides by P(first die is 5) = 6/36."
      - text: "1/2"
        explains: "That would be the answer if the first die were a 6. With a 5, only two outcomes reach 10."
      - text: "1/6"
        explains: "That is the unconditional probability, 6/36. You have been told something that raises it."
    work: |-
      Condition on `B`: the first die is 5. Six equally likely outcomes remain, `(5,1)` to `(5,6)`.
      The total is at least 10 for `(5,5) = 10` and `(5,6) = 11`.
      `P(A|B) = P(A ∩ B) / P(B) = (2/36) / (6/36) = 2/6 = 1/3`.
      Unconditionally `P(A) = 6/36 = 1/6`, so the information raised it.
  - topic: "Week 2 · Probability and statistics"
    ask: "A condition affects 2% of people. A test detects it in 95% of those who have it, but wrongly flags 10% of those who do not. You test positive. Roughly what is the probability you have the condition?"
    choices:
      - text: "About 16%"
        correct: true
        explains: "Right. Out of 10,000 people, 190 true positives and 980 false positives give 190/1170 ≈ 16%."
      - text: "About 95%"
        explains: "That is P(positive | condition), the number the test makers report. You need P(condition | positive)."
      - text: "About 2%"
        explains: "That is the prior. The positive result should raise it."
      - text: "About 90%"
        explains: "That would ignore the base rate. When the condition is rare, false alarms outnumber true ones."
    work: |-
      Picture 10,000 people. `2%` have it: 200. `98%` do not: 9,800.
      True positives: `0.95 × 200 = 190`. False positives: `0.10 × 9,800 = 980`.
      Total positives `190 + 980 = 1,170`.
      `P(condition | positive) = 190 / 1,170 ≈ 0.162`. The base rate dominates.
  - topic: "Week 2 · Probability and statistics"
    ask: "Let V be the sum of two fair dice. What is the cumulative probability F(9) = P(V ≤ 9)?"
    choices:
      - text: "6/36"
        explains: "That is P(V ≥ 10). It is the complement of the right answer."
      - text: "30/36 = 5/6"
        correct: true
        explains: "Right. The counts for totals 2 to 9 are 1, 2, 3, 4, 5, 6, 5, 4, which sum to 30."
      - text: "4/36"
        explains: "That is P(V = 9), the height of one bar. F(9) adds all bars up to and including 9."
      - text: "26/36"
        explains: "That is P(V ≤ 8). The bar at 9 must be included."
    work: |-
      Ways to roll each total out of 36: `2→1, 3→2, 4→3, 5→4, 6→5, 7→6, 8→5, 9→4`.
      `1 + 2 + 3 + 4 + 5 + 6 + 5 + 4 = 30`.
      `F(9) = 30/36 = 5/6`.
      Check: `P(V ≥ 10) = (3 + 2 + 1)/36 = 6/36`, and `30 + 6 = 36`.
  - topic: "Week 2 · Probability and statistics"
    ask: "A chart shows cumulative iPhone sales climbing steeply, and someone concludes growth is exploding. What is the flaw?"
    choices:
      - text: "A running total always rises, even at constant sales; the growth rate is the incremental change, which is better shown by plotting sales per period"
        correct: true
        explains: "Right. Choose the plot for the question: cumulative curves show totals to date, not how fast things are changing."
      - text: "Cumulative charts cannot show sales at all"
        explains: "They show totals to date correctly. They just do not show the rate."
      - text: "Steep curves are always caused by outliers"
        explains: "A steep cumulative curve can come from perfectly steady sales."
      - text: "The cdf and pdf carry different information"
        explains: "They hold exactly the same information. The problem is what is easy to see by eye."
    work: |-
      A running total never goes down.
      Selling the same number every quarter still makes the cumulative line rise.
      Rate of growth is the derivative of that curve, which is hard to judge by eye.
      Plot sales per period instead.
  - topic: "Week 2 · Probability and statistics"
    ask: "A histogram of phone prices uses $50-wide bins. The bar for $200–$250 has a density of 0.004 per dollar. How much probability is in that bar?"
    choices:
      - text: "0.2"
        correct: true
        explains: "Right. The probability in a bar is its area: height × width = 0.004 × 50."
      - text: "0.02"
        explains: "This multiplies by 5 rather than 50."
      - text: "4"
        explains: "This is the density multiplied by 1000, not by the width."
      - text: "0.004"
        explains: "That is the density, not the probability. You need to multiply by the bin width."
    work: |-
      For a histogram, height is a density: probability per unit of `x`.
      `P(bar) = height × width = 0.004 × 50 = 0.2`.
      Rebinning into $100 bins would keep the density near 0.004 but hold 0.4 in each bar.
      With width 1 the multiplication changes nothing, which is the rule for the dice.
  - topic: "Week 2 · Probability and statistics"
    ask: "Salaries in a small company are 50k, 50k, 60k, 70k and 5M. Which measure best describes a typical salary, and why?"
    choices:
      - text: "The median, 60k, because an outlier controls the mean but barely touches the median"
        correct: true
        explains: "Right. The mean is about 1.05M, which describes nobody."
      - text: "The mean, about 1.05M, because it uses every value"
        explains: "It does use every value, but that is exactly why one outlier drags it away from the typical salary."
      - text: "The geometric mean, because these are ratios"
        explains: "These are amounts, not ratios or growth rates. The median is better for skewed data."
      - text: "Any of them, since they are all called “the average”"
        explains: "They can differ by a factor of twenty here, so which one you report matters."
    work: |-
      Mean: `(50 + 50 + 60 + 70 + 5000) / 5 = 5230 / 5 ≈ 1046k`, about 1.05M.
      Median: sort and take the middle value, 60k.
      Four of five people earn under 71k, so the median describes the group and the mean does not.
      Skew and outliers favour the median.
  - topic: "Week 2 · Probability and statistics"
    ask: "An investment gains 100% in year 1 and loses 50% in year 2. Which statement is correct?"
    choices:
      - text: "It ends where it started; the geometric mean of the multipliers 2 and 0.5 is 1, whereas the arithmetic mean of the percentages (+25%) is misleading"
        correct: true
        explains: "Right. Multipliers compose by multiplication, so growth is averaged with the geometric mean."
      - text: "It lost 50% overall"
        explains: "The second-year loss of 50% applies to the doubled amount, which returns it to the start."
      - text: "It gained 25% overall, the average of +100% and −50%"
        explains: "Start with 100: it becomes 200, then 100. Nothing was gained."
      - text: "It gained 100% overall"
        explains: "That ignores the second year's loss."
    work: |-
      Multipliers: `2` and `0.5`.
      Start with 100: `100 × 2 = 200`, then `200 × 0.5 = 100`.
      Geometric mean of multipliers: `√(2 × 0.5) = √1 = 1`, so no net change.
      Arithmetic mean of the percentages: `(100 − 50)/2 = +25%`, which is wrong.
  - topic: "Week 2 · Probability and statistics"
    ask: "The values 1, 3, 5, 7 are the whole population. What is the (population) standard deviation?"
    choices:
      - text: "√(20/3) ≈ 2.58"
        explains: "That divides by n − 1, which is the sample formula. With the whole population you divide by n."
      - text: "√5 ≈ 2.24"
        correct: true
        explains: "Right. Mean 4, squared distances 9, 1, 1, 9 sum to 20, variance 20/4 = 5, and SD = √5."
      - text: "5"
        explains: "That is the variance. The standard deviation is its square root."
      - text: "20"
        explains: "That is the sum of squared distances, before averaging or square-rooting."
    work: |-
      Mean: `(1 + 3 + 5 + 7)/4 = 4`.
      Squared distances: `9, 1, 1, 9`, which sum to `20`.
      Population variance: `20 / 4 = 5`. SD: `√5 ≈ 2.24`.
      Dividing by `n − 1 = 3` would give the sample SD `√6.67 ≈ 2.58`.
  - topic: "Week 2 · Probability and statistics"
    ask: "A player whose true batting ability is exactly 0.300 hits 0.275 over 500 at-bats. What should you conclude?"
    choices:
      - text: "Their ability has clearly declined"
        explains: "A 0.275 season is well within the ordinary variation for a 0.300 hitter."
      - text: "Nothing about their ability: a season like that happens by chance about one time in nine"
        correct: true
        explains: "Right. Each observed value is one draw from a distribution. About 0.02 is the natural wobble of the average, so 0.275 is only around 1.2 deviations low."
      - text: "They were unlucky, and luck is impossible to estimate"
        explains: "The size of luck can be estimated with a standard deviation, which is the point of the example."
      - text: "The measurement must be wrong"
        explains: "The number is fine. It is simply a noisy draw."
    work: |-
      For 500 at-bats at a 30% rate, the observed average has a standard deviation of about `0.02`.
      `0.275` is `0.025 / 0.02 ≈ 1.2` standard deviations below `0.300`.
      That is ordinary wobble: 11% of seasons are 0.275 or lower.
      Before explaining a difference, ask how big a difference chance alone could produce.
  - topic: "Week 2 · Probability and statistics"
    ask: "Model B scores 0.5% higher accuracy than the simpler Model A on a single train/test split. What does the course recommend?"
    choices:
      - text: "Treat the gap as possibly noise, measure the noise (for example by repeating the evaluation), and prefer the simpler model unless B clearly beats the variation"
        correct: true
        explains: "Right. Choosing simple when scores are indistinguishable gives interpretability, speed and less overfitting at no measured cost."
      - text: "Discard both models"
        explains: "There is no reason to do that. Measure the noise instead."
      - text: "Choose B, since higher is always better"
        explains: "A small gap can come from which split was chosen or how parameters were optimised."
      - text: "Choose whichever model is more complex"
        explains: "Complexity has to earn its place with a gain clearly bigger than noise."
    work: |-
      Differences can come from the split chosen, from how well parameters were optimised, and other accidents of the process.
      A 0.5% gap is like a hitter moving from 0.300 to 0.302.
      Measure the noise, for example with repeated splits.
      If the gap is not clearly larger than the noise, take the simpler model.
  - topic: "Week 2 · Probability and statistics"
    ask: "Which of these is a legitimate way to reduce variance in an evaluation?"
    choices:
      - text: "k-fold cross-validation: evaluate on k different splits and average"
        correct: true
        explains: "Right. Repeating the experiment steadies the estimate, and you can see the spread as well."
      - text: "Delete test examples the model gets wrong"
        explains: "That is dishonest. Outliers may be removed only with a good reason, which you must explain."
      - text: "Use one split and increase the number of digits reported"
        explains: "More digits do not make the estimate any less noisy."
      - text: "Report only the best of several runs"
        explains: "That reports a lucky draw and hides the variation."
    work: |-
      The listed methods: pick the lower-variance option, repeat the experiment (such as k-fold cross-validation), sample properly, and remove outliers only if justifiable.
      Averaging over `k` splits reduces dependence on one lucky split.
      Dropping inconvenient points to improve the score is not justified.
      Reporting the best run overstates the result.
  - topic: "Week 2 · Probability and statistics"
    ask: "Two printer-cartridge suppliers both advertise a mean life of 3000 pages. Supplier A's lifetimes have SD 100 and Supplier B's have SD 800. You need every cartridge to last at least 2500 pages. What does this show?"
    choices:
      - text: "They are equivalent, since the means are the same"
        explains: "Same mean, different behaviour: this is exactly the trap."
      - text: "The mean alone is not enough: A's tight spread makes it the safer choice, because B produces many short-lived cartridges"
        correct: true
        explains: "Right. A buyer planning stock cares about the spread at least as much as the average."
      - text: "Nothing can be said without the median"
        explains: "The SD already tells you that A's values cluster and B's do not."
      - text: "B is better because a higher SD means higher quality"
        explains: "A higher SD means more variation, which here means unreliable lifetimes."
    work: |-
      The mean says where the distribution sits. The SD says how wide it is.
      A: 2500 is 5 SDs below the mean, so short-lived cartridges are very rare.
      B: 2500 is only 0.6 SDs below the mean, so a large share falls short.
      Same mean, different reliability. Mean and SD together describe a distribution fairly well.
  - topic: "Week 2 · Probability and statistics"
    ask: "Delivery times have a mean of 60 s and a variance of 16 s², with unknown shape. At least what fraction of deliveries take between 48 and 72 seconds?"
    choices:
      - text: "About 89%"
        correct: true
        explains: "Right. σ = 4, so 48 to 72 is 60 ± 12, which is k = 3 standard deviations, and Chebyshev guarantees at least 1 − 1/9 ≈ 0.89."
      - text: "About 75%"
        explains: "That is the guarantee for k = 2. The interval here is 3 standard deviations wide on each side."
      - text: "No guarantee can be given"
        explains: "That is what k = 0.75 would give, from mistaking the variance 16 for σ. Take the square root first."
      - text: "About 95%"
        explains: "That is the normal distribution's figure for 2 sigma, which needs a bell-shaped distribution."
    work: |-
      Variance is 16, so `σ = √16 = 4`.
      48 to 72 is `60 ± 12`, so `k = 12 / 4 = 3`.
      Chebyshev: at least `1 − 1/k² = 1 − 1/9 ≈ 0.89` lies within `k` sigma.
      Using the variance as σ would give `k = 12/16 = 0.75` and no useful bound.
  - topic: "Week 2 · Probability and statistics"
    ask: "A colleague says “about 95% of any data lies within two standard deviations of the mean.” What is the problem?"
    choices:
      - text: "Chebyshev guarantees 99% for two standard deviations"
        explains: "For k = 2 it guarantees 1 − 1/4 = 75%."
      - text: "No fraction can be guaranteed for any data"
        explains: "Chebyshev gives a guarantee for every distribution with a mean and standard deviation."
      - text: "Nothing, it is a general rule"
        explains: "The 95% figure belongs to the normal distribution."
      - text: "That is true only for roughly normal data; without knowing the shape, Chebyshev guarantees only 75% within two standard deviations"
        correct: true
        explains: "Right. Chebyshev is loose because it must hold for every distribution, but that is what makes it a safe fallback."
    work: |-
      Chebyshev: at least `1 − 1/k²` of the mass lies within `k` standard deviations.
      For `k = 2`: `1 − 1/4 = 75%`.
      Normal data has about 95% there, because it is a tamer shape.
      When you cannot vouch for the shape, use the guarantee that holds for all of them.
  - topic: "Week 3 · Correlation"
    ask: "For X = −2, −1, 0, 1, 2 and Y = X², Y is completely determined by X. What is Pearson's r?"
    choices:
      - text: "0.5"
        explains: "Nothing about the arrangement suggests a partial positive linear trend. The products cancel exactly."
      - text: "0"
        correct: true
        explains: "Right. The left half votes negative, the right half votes positive, and they cancel: r measures only straight-line relationships."
      - text: "−1"
        explains: "There is no straight-line decrease either."
      - text: "1"
        explains: "That would need Y to rise in step with X in a straight line."
    work: |-
      Means: `X̄ = 0` and `Ȳ = (4 + 1 + 0 + 1 + 4)/5 = 2`.
      Products `(X − X̄)(Y − Ȳ)`: `(−2)(2) + (−1)(−1) + (0)(−2) + (1)(−1) + (2)(2)`.
      `= −4 + 1 + 0 − 1 + 4 = 0`, so `r = 0`.
      A perfect dependence with zero linear correlation.
  - topic: "Week 3 · Correlation"
    ask: "For X = 1, 2, 3 and Y = 2, 1, 3, what is Pearson's r?"
    choices:
      - text: "1"
        explains: "The points are not on a straight line."
      - text: "−0.5"
        explains: "The sign is positive, because the point with the largest x also has the largest y."
      - text: "0"
        explains: "The products do not cancel: they sum to 1."
      - text: "0.5"
        correct: true
        explains: "Right. The covariance sum is 1, and the denominator is √2 · √2 = 2."
    work: |-
      `X̄ = 2`, `Ȳ = 2`.
      Distances: `X − X̄ = −1, 0, 1` and `Y − Ȳ = 0, −1, 1`.
      Products: `0, 0, 1`, sum `1`. Squares: `Σ(X − X̄)² = 2` and `Σ(Y − Ȳ)² = 2`.
      `r = 1 / (√2 · √2) = 1/2 = 0.5`.
  - topic: "Week 3 · Correlation"
    ask: "Every X value is multiplied by 1000 (a change of units, say metres to millimetres). What happens to the covariance and to Pearson's r?"
    choices:
      - text: "Both grow a thousandfold"
        explains: "The denominator grows by the same factor as the numerator, so r cancels the change."
      - text: "The covariance grows a thousandfold and r does not change"
        correct: true
        explains: "Right. The denominator divides out each variable's spread, so r is unit-free and always in [−1, 1]."
      - text: "r becomes larger than 1"
        explains: "r is always between −1 and 1, whatever the units."
      - text: "Both stay the same"
        explains: "The covariance grows with the units. It determines the sign but not the scale."
    work: |-
      Numerator: `Σ(X − X̄)(Y − Ȳ)` gets multiplied by 1000.
      Denominator: `√Σ(X − X̄)²` gets multiplied by 1000 as well.
      `r = 6000 / (1000·√10·√6) = 6 / (√10·√6) ≈ 0.77`, unchanged.
      Covariance alone cannot compare relationships in different units; r can.
  - topic: "Week 3 · Correlation"
    ask: "Two variables have a correlation of r = −0.7. What share of the variance in Y is explained by X?"
    choices:
      - text: "70%"
        explains: "That is |r|. The share of variance explained is r², which is smaller."
      - text: "7%"
        explains: "This divides by 10 rather than squaring."
      - text: "−70%"
        explains: "A share of variance cannot be negative. The sign of r is only direction."
      - text: "About 49%"
        correct: true
        explains: "Right. r² = 0.49. The sign gives the direction and does not matter for variance explained."
    work: |-
      For simple linear regression, `R² = r²`.
      `r² = (−0.7)² = 0.49`.
      So about 49% of the variance in `Y` is explained.
      Because of the square, predictive value decreases quadratically: `r = 0.3` explains only 9%.
  - topic: "Week 3 · Correlation"
    ask: "With n = 10,000 data points, a correlation of r = 0.03 is found to be statistically significant. What is the right reading?"
    choices:
      - text: "A significant result must be an important one"
        explains: "Large samples make small correlations significant. Significance says nothing about size."
      - text: "r must be recomputed with a bigger sample"
        explains: "The sample is already large. The issue is what the effect means."
      - text: "The relationship is probably real, but it explains under 0.1% of the variance, so it is unlikely to matter on its own"
        correct: true
        explains: "Right. Significance measures whether an effect is real; effect size (r²) measures whether it is big enough to matter."
      - text: "The result is spurious, since r is small"
        explains: "With 10,000 points even r ≈ 0.02 counts as significant. It is probably real."
    work: |-
      At `n = 10,000` the smallest significant `r` is about 0.02, so 0.03 passes.
      Significance means the relationship is probably not chance.
      Effect size: `r² = 0.03² = 0.0009`, under 0.1% of the variance.
      Ask both questions: is it real, and is it big enough to matter?
  - topic: "Week 3 · Correlation"
    ask: "Hours studied: 2, 3, 5, 8, 40. Marks: 50, 55, 61, 70, 72. What is Spearman's ρ?"
    choices:
      - text: "0.5"
        explains: "Every rank difference is zero, so ρ is at the maximum."
      - text: "Below 1, because of the outlier"
        explains: "Ranks cap how far an outlier can pull. It is just rank 5."
      - text: "0"
        explains: "Marks rise every time hours rise, so there is a perfect monotonic relationship."
      - text: "1"
        correct: true
        explains: "Right. Both variables have ranks 1 to 5 in the same order, so every rank difference is 0. The 40-hour outlier does not matter, because only order counts."
    work: |-
      Rank hours: `2, 3, 5, 8, 40 → 1, 2, 3, 4, 5`.
      Rank marks: `50, 55, 61, 70, 72 → 1, 2, 3, 4, 5`.
      Every `dᵢ = 0`, so `ρ = 1 − 6·0 / (5·24) = 1`.
      Pearson would be pulled below 1 by the point at 40 hours; Spearman sees only that more hours always came with a higher mark.
  - topic: "Week 3 · Correlation"
    ask: "For x = 10, 20, 30, 40, 50 and y = 1, 3, 2, 5, 4, what is Spearman's ρ = 1 − 6Σd² / (n(n² − 1))?"
    choices:
      - text: "1"
        explains: "That needs all rank differences to be 0, but y is not in the same order as x."
      - text: "0.2"
        explains: "This would need Σd² = 16."
      - text: "0.4"
        explains: "This would need Σd² = 12."
      - text: "0.8"
        correct: true
        explains: "Right. The rank differences are 0, −1, 1, −1, 1, so Σd² = 4 and ρ = 1 − 24/120."
    work: |-
      Ranks of `x`: `1, 2, 3, 4, 5`. Ranks of `y = 1, 3, 2, 5, 4`: `1, 3, 2, 5, 4`.
      Differences `d`: `0, −1, 1, −1, 1`, so `Σd² = 0 + 1 + 1 + 1 + 1 = 4`.
      `n(n² − 1) = 5 · 24 = 120`.
      `ρ = 1 − 6·4/120 = 1 − 0.2 = 0.8`.
  - topic: "Week 3 · Correlation"
    ask: "When is Spearman's rank correlation a better choice than Pearson's?"
    choices:
      - text: "When the sample is very small"
        explains: "Sample size does not decide the choice. The shape of the relationship does."
      - text: "When you want to measure causation"
        explains: "Neither measures causation."
      - text: "When the relationship is consistently rising or falling but curved, when there are outliers, or when the data is only ordinal"
        correct: true
        explains: "Right. Pearson asks how straight; Spearman asks how ordered."
      - text: "When the relationship is exactly a straight line"
        explains: "Pearson is well suited to that, and Spearman would give the same answer here."
    work: |-
      Spearman replaces values by ranks, so any steady rise or fall scores highly.
      Ranks cap the pull of outliers, since the biggest value is just rank `n`.
      It also works for ordinal data, such as satisfaction ratings.
      Pearson looks for a straight line, so it suits linear relationships without extreme values.
  - topic: "Week 3 · Correlation"
    ask: "Ice-cream sales and drowning deaths are strongly correlated across months. Which explanation fits best?"
    choices:
      - text: "Ice cream causes drowning"
        explains: "Nothing plausible links eating ice cream to drowning."
      - text: "Drowning causes ice-cream sales"
        explains: "The reverse arrow is equally implausible."
      - text: "The correlation must be a mistake in the data"
        explains: "Hot weather explains it without any error."
      - text: "A third factor, hot weather, drives both"
        correct: true
        explains: "Right. Whenever A and B correlate, name the reverse arrow and the third factor before believing a causal story."
    work: |-
      The four explanations: `A` causes `B`; `B` causes `A`; a common cause `C`; or pure coincidence.
      Hot weather increases both ice-cream sales and swimming, which increases drownings.
      Correlation is useful for prediction, but acting on it needs a causal claim.
      Randomised experiments break the link to hidden third factors.
  - topic: "Week 3 · Correlation"
    ask: "Daily sales show high autocorrelation at lags 7, 14 and 21, and near zero at lag 1. What does this suggest?"
    choices:
      - text: "An upward trend"
        explains: "A trend correlates a series with itself at every lag, which drowns out cycles rather than giving peaks at 7, 14, 21."
      - text: "Random noise"
        explains: "Noise would show no autocorrelation at any lag."
      - text: "That sales cause the calendar"
        explains: "A peak is a pattern, not a cause."
      - text: "A weekly cycle: the series resembles itself seven days earlier, but not the day before"
        correct: true
        explains: "Right. Peaks in the autocorrelation function mark cycle lengths, and multiples of the cycle also match."
    work: |-
      Autocorrelation at lag `k` correlates `S[t]` with `S[t + k]`.
      High values at 7, 14 and 21, and a value near 0 at 1, mean today resembles the same weekday, but not yesterday.
      That is a 7-day cycle.
      A trend would need removing first, or it would inflate every lag.
  - topic: "Week 3 · Correlation"
    ask: "Rainfall at station 1 “Granger-causes” rainfall at station 2 because a storm system passes over 1 first and 2 later. What does this show about the test?"
    choices:
      - text: "The test can only be used for rainfall"
        explains: "It applies to any pair of time series."
      - text: "It shows Granger causality is about prediction: timing is real but the arrow can be borrowed from a third factor, and it says nothing about direct versus indirect causes"
        correct: true
        explains: "Right. It upgrades “moves together” to “moves first”, a better clue than plain correlation, though still not proof."
      - text: "Station 1's rain physically produces station 2's rain"
        explains: "The storm system is the real cause. Station 1's rain merely comes first."
      - text: "The test proves causation whenever it is significant"
        explains: "It is a forecasting statement, weaker than the everyday meaning of cause."
    work: |-
      Granger: `Y` Granger-causes `X` if the past of `Y` improves prediction of `X` beyond the past of `X` alone.
      Here the storm `C` reaches station 1 first and station 2 later.
      Past rainfall at 1 helps predict 2, yet neither causes the other.
      It is a stronger clue than correlation, not a substitute for an experiment.
  - topic: "Week 3 · Correlation"
    ask: "A model scores a document by multiplying the probabilities of its 500 words, each about 0.001. Working in base-10 logs, what is the log of the document's probability?"
    choices:
      - text: "1500"
        explains: "The probabilities are below 1, so their logs are negative."
      - text: "−1500"
        correct: true
        explains: "Right. Each word contributes log₁₀(0.001) = −3, and 500 × −3 = −1500. The product 10⁻¹⁵⁰⁰ would underflow to zero in ordinary floating point."
      - text: "−150"
        explains: "Each word contributes −3, and 500 × −3 = −1500, not −150."
      - text: "−3"
        explains: "That is the log for a single word. There are 500 of them, and logs of products add."
    work: |-
      `log(ab) = log a + log b`, so the log of the product is the sum of the logs.
      Each word: `log₁₀(0.001) = −3`.
      Sum over 500 words: `500 × (−3) = −1500`.
      The raw product `10⁻¹⁵⁰⁰` is far below the smallest float, about `10⁻³⁰⁸`, so it underflows to 0 while the log sum is fine.
  - topic: "Week 3 · Correlation"
    ask: "A price goes from 80 to 20. What is log₂ of the ratio new/old, and what does it show?"
    choices:
      - text: "−4"
        explains: "That would be log₂ of 1/16. 20/80 = 1/4."
      - text: "−75"
        explains: "That is the percentage change. The question asks for the log of the ratio."
      - text: "0.25, which is already symmetric"
        explains: "The raw ratio 0.25 is squeezed into 0 to 1, while a fourfold rise would be 4. It is not symmetric."
      - text: "−2: a fall to a quarter of the price is the mirror image of a rise to four times (+2)"
        correct: true
        explains: "Right. Taking logs of ratios gives equal displacement for doubling and halving, and a ratio of 1 sits at 0."
    work: |-
      Ratio: `20 / 80 = 0.25 = 1/4`.
      `log₂(1/4) = −2`.
      The reverse move, `20 → 80`, has ratio 4 and `log₂ 4 = +2`.
      Averaging the raw ratios of a rise and a fall gives a lopsided answer; averaging the logs gives 0.
  - topic: "Week 3 · Correlation"
    ask: "A typical student has about $10³ and a billionaire about $10¹¹. Someone with about $10⁶ is how far from each on a log₁₀ scale?"
    choices:
      - text: "10³ from the student and 10¹¹ from the billionaire"
        explains: "Those are the raw amounts. Distances on the log scale are differences of exponents."
      - text: "6 from each"
        explains: "6 is the person's own position on the scale. The distances are differences of positions."
      - text: "3 above the student and 5 below the billionaire"
        correct: true
        explains: "Right. On the log scale the positions are 3, 6 and 11. Logs measure proportions, and each step is a factor of ten."
      - text: "Exactly halfway between them"
        explains: "Halfway on the log scale would be 10⁷. At 10⁶ they are not equidistant."
    work: |-
      Positions on the `log₁₀` scale: student `3`, person `6`, billionaire `11`.
      Distance to the student: `6 − 3 = 3` steps up.
      Distance to the billionaire: `11 − 6 = 5` steps down.
      Power-law data spans orders of magnitude, so analyse it on a log scale, where equal ratios are equal distances.
  - topic: "Week 4 · Assembling data sets"
    ask: "A cleaning script truncates every name to 20 characters before a merge, and long names from one source stop matching. In the lecture's terms, what is this?"
    choices:
      - text: "An error: information was fundamentally lost at acquisition"
        explains: "The full names existed in the source. The loss happened afterwards, in processing."
      - text: "An artifact: a systematic problem arising from processing done to the data"
        correct: true
        explains: "Right. It is systematic, it was introduced by a step in the pipeline, and fixing the step removes it. It will not announce itself, which is why the sniff test matters."
      - text: "An outlier, to be deleted before fitting"
        explains: "Outliers are extreme values. This is a systematic loss of matches."
      - text: "Imputed data"
        explains: "Nothing was estimated. Records were wrongly treated as different."
    work: |-
      Error: information lost at acquisition, which stays lost.
      Artifact: a systematic problem caused by processing.
      The names were intact in the source and the truncation step damaged them, so this is an artifact.
  - topic: "Week 4 · Assembling data sets"
    ask: "A histogram of first-publication years has a smooth decline except for one tall isolated spike in a single year. What is the best first move?"
    choices:
      - text: "Report the spike as a finding about that year"
        explains: "Nothing in the world usually produces one isolated spike. Doubt the data before theorizing."
      - text: "Delete that year as an outlier"
        explains: "Deleting hides the cause and biases the rest. Find out why it is there."
      - text: "Look for a change in how the data was recorded or processed at that date"
        correct: true
        explains: "Right. In the lecture's example the database began using full first names in 2002, so the same authors looked new. The result should have been compared with a preconception of its shape first."
      - text: "Collect a larger sample of the same data"
        explains: "More of the same artifact gives the same spike."
    work: |-
      State what the distribution should look like: a smooth decline.
      The isolated spike disagrees, so treat it as a bug until shown otherwise.
      An abrupt change at one date suggests a change in recording. PubMed switched to full first names in 2002, so F Riahi and Fatemeh Riahi were counted as different people.
  - topic: "Week 4 · Assembling data sets"
    ask: "A report on mutual funds averages the 10-year returns of every fund that exists today and concludes that funds do very well. Which bias is the main concern?"
    choices:
      - text: "Survivor bias: funds that failed and closed are missing from the sample"
        correct: true
        explains: "Right. Selecting at the end undersamples those that exited early, so the average looks better than the experience of someone who bought a fund ten years ago."
      - text: "Dunning-Kruger: fund managers overrate their skill"
        explains: "That concerns self-assessment of skill, not who is in the sample."
      - text: "Confirmation bias: the data was cherry-picked after seeing the result"
        explains: "Possible, but nothing in the description says this. The structural problem is which funds are included."
      - text: "None: ten years of data is plenty"
        explains: "Length of history does not cure a sample that excludes the failures."
    work: |-
      The sample is funds that exist today, after ten years.
      Funds that performed badly were closed, so they are absent.
      The average of the survivors overstates what a buyer ten years ago experienced.
  - topic: "Week 4 · Assembling data sets"
    ask: "You emailed a survey to every customer who completed a purchase last month, and use it to estimate why customers choose your site. Which problem is most likely?"
    choices:
      - text: "Selection bias: people who left before buying, or never arrived, are under-sampled"
        correct: true
        explains: "Right. The sample is limited to those who got to the end, so reasons for abandoning or not visiting are missing. A large sample does not repair this."
      - text: "A measurement error in the survey tool"
        explains: "Nothing suggests the tool is faulty. The problem is who is in the sample."
      - text: "Normalization: the answers need z-scores"
        explains: "Z-scores make numeric variables comparable. They do not fix who was sampled."
      - text: "Imputation: some customers did not answer"
        explains: "Non-response is a related issue, but the first problem is the population that could be surveyed at all."
    work: |-
      The target population is people who might choose the site.
      The sample is only people who completed a purchase.
      Groups that did not buy are under-sampled, which is selection bias, and survivor bias in the sense of selecting at the end.
  - topic: "Week 4 · Assembling data sets"
    ask: "An analyst runs a test, gets the result they predicted, and stops. When the earlier run showed the opposite, they spent a week looking for bugs. What is this?"
    choices:
      - text: "Survivor bias"
        explains: "That is about who is missing from the sample, not how long you keep checking."
      - text: "Confirmation bias: stopping the analysis once results match expectation"
        correct: true
        explains: "Right. Surprising results get scrutiny and expected ones do not, so bugs that agree with you survive."
      - text: "The Dunning-Kruger effect"
        explains: "That concerns poor performers overrating their performance, not an uneven stopping rule."
      - text: "Selection bias"
        explains: "The sample is not described as skewed. The problem is the asymmetry in checking."
    work: |-
      Unexpected result: a week of checking.
      Expected result: no checking.
      Stopping when the answer confirms expectation is confirmation bias. The defence is to check expected results as hard as surprising ones.
  - topic: "Week 4 · Assembling data sets"
    ask: "Student A scores 78 on a test with mean 70 and standard deviation 4. Student B scores 85 on a test with mean 80 and standard deviation 10. Which statement is correct?"
    choices:
      - text: "B did better, because 85 is higher than 78"
        explains: "The raw scores are on different tests with different spreads."
      - text: "B did better, because B beat the mean by 5 and A only by 8 over a smaller scale"
        explains: "A beat the mean by 8 points, which is more than 5, and A's test also has the smaller spread."
      - text: "A did better relative to their test: z = 2 against z = 0.5"
        correct: true
        explains: "Right. A is two standard deviations above the mean, B only half of one. Z-scores let you compare across scales."
      - text: "They cannot be compared because the tests differ"
        explains: "That is the problem z-scores solve: they are dimensionless."
    work: |-
      `Z = (X − X̄) / σ`
      A: `(78 − 70) / 4 = 2`.
      B: `(85 − 80) / 10 = 0.5`.
      A is further above their mean in standard-deviation units.
  - topic: "Week 4 · Assembling data sets"
    ask: "A column of z-scores is computed from heights measured in centimetres. The heights are then converted to metres and the z-scores recomputed. What happens to the z-scores?"
    choices:
      - text: "They shrink by a factor of 100"
        explains: "The deviations shrink by 100, but so does the standard deviation they are divided by."
      - text: "They are unchanged"
        correct: true
        explains: "Right. A unit change rescales the values, the mean and σ by the same factor, which cancels. This is why z-scores are dimensionless."
      - text: "They grow by a factor of 100"
        explains: "That would require dividing by something that did not change, and σ does change."
      - text: "Their mean changes from 0 to 1"
        explains: "Z-scores always have mean 0 and standard deviation 1."
    work: |-
      Converting cm to m divides every height by 100.
      The mean and `σ` are divided by 100 too.
      `(X/100 − X̄/100) / (σ/100) = (X − X̄) / σ`, so each z-score is the same.
  - topic: "Week 4 · Assembling data sets"
    ask: "After merging two data sets, a histogram of building heights has two separate humps, the second at roughly 3.3 times the first. What should you suspect?"
    choices:
      - text: "Two sources using different units, such as metres and feet"
        correct: true
        explains: "Right. A bimodal distribution can indicate trouble, and 3.3 is about the feet-per-metre ratio. This is the kind of problem that destroyed the Mars Climate Orbiter."
      - text: "The data is normally distributed"
        explains: "A normal distribution has one hump."
      - text: "Missing values were set to zero"
        explains: "That would produce a spike at zero, not a second hump at a conversion ratio."
      - text: "A watermark in the data"
        explains: "Watermarks are about recognizing generated content, not distribution shape."
    work: |-
      Two humps in one variable suggest two populations.
      The ratio of about 3.3 matches converting metres to feet (1 m ≈ 3.28 ft).
      Check the units in each source and convert before merging.
  - topic: "Week 4 · Assembling data sets"
    ask: "Names with accents and non-Latin letters turn into rows of question marks when you read a file. Which action addresses the cause?"
    choices:
      - text: "Normalize the numeric columns"
        explains: "Normalization is for numeric variables."
      - text: "Impute the missing text"
        explains: "The text is not missing. It was decoded with the wrong character code."
      - text: "Delete the affected rows"
        explains: "That loses real records, and the cause remains."
      - text: "Read the file with the encoding it was written in, and use UTF-8 for everything you write"
        correct: true
        explains: "Right. A single-byte code such as ISO 8859-1 cannot represent every character, and reading one encoding as another garbles text. UTF-8 covers all of Unicode."
    work: |-
      Question marks mean the text was decoded or encoded with a code that cannot represent the characters.
      ISO 8859-1 is single byte; UTF-8 is multibyte and covers all Unicode.
      Read with the true encoding and standardize on UTF-8.
  - topic: "Week 4 · Assembling data sets"
    ask: "You tighten a name-matching rule so that only exact matches count. What happens?"
    choices:
      - text: "Fewer false positives and more false negatives: one person may be split into several"
        correct: true
        explains: "Right. A strict rule rarely merges different people but misses variants like Steve and Stephen. Loosening reverses the trade."
      - text: "Fewer false negatives and more false positives"
        explains: "That is the effect of loosening the rule."
      - text: "Neither kind of error changes"
        explains: "Any change to the rule moves the balance."
      - text: "Both kinds of error fall"
        explains: "There is a tradeoff, so a rule cannot remove both at once."
    work: |-
      Strict matching: different people almost never merged (few false positives), but spelling variants of one person are not recognized (many false negatives).
      Loose matching, such as phonetic hashing, does the opposite.
      Choose by which mistake costs less.
  - topic: "Week 4 · Assembling data sets"
    ask: "A stock goes from $10 to $11 and another from $200 to $210 on the same day. Which statement fits the lecture's advice on financial data?"
    choices:
      - text: "The second moved more, because $10 is more than $1"
        explains: "Absolute changes depend on the price level."
      - text: "They moved by the same amount"
        explains: "Not in percentage terms."
      - text: "The first moved more: returns are +10% against +5%"
        correct: true
        explains: "Right. Use returns, the percentage change, instead of absolute price changes, so stocks of different prices are comparable."
      - text: "Neither can be compared until converted to euros"
        explains: "Both are in the same currency, so no conversion is needed."
    work: |-
      First: `(11 − 10) / 10 = 10%`.
      Second: `(210 − 200) / 200 = 5%`.
      Compare returns, not dollar changes.
  - topic: "Week 4 · Assembling data sets"
    ask: "A table of people has a blank death year for those still alive. A teammate fills the blanks with 0 so the column is numeric. What is the problem?"
    choices:
      - text: "Zero claims a measured value and will distort every average and comparison; use a real missing-value marker, or deliberately impute"
        correct: true
        explains: "Right. The lecture says setting such values to zero is generally wrong. A blank means not known, not zero."
      - text: "Nothing: zero is the neutral value"
        explains: "A death year of 0 is not neutral. It pulls statistics toward it."
      - text: "The column should be dropped because it has blanks"
        explains: "Dropping loses information. The values can be represented or imputed."
      - text: "Zero is fine for years but not for counts"
        explains: "For counts, an unobserved event also should not be set to zero just because it was not seen."
    work: |-
      Living people have no death year yet, so the value is unknown.
      Setting it to 0 makes it look like a measurement, and means, correlations and z-scores will use it.
      Use NaN or NULL, or impute on purpose, for example birth year + 80.
  - topic: "Week 4 · Assembling data sets"
    ask: "Observed ages are 20, 30 and 40, and one age is missing. You fill the gap with the mean imputation. What is true afterwards?"
    choices:
      - text: "The mean is still 30, and the spread is smaller than before"
        correct: true
        explains: "Right. Adding a copy of the mean cannot move the mean, and the extra identical value pulls the standard deviation down."
      - text: "The mean rises above 30"
        explains: "A value equal to the mean cannot raise it."
      - text: "The mean is unchanged and so is the spread"
        explains: "The extra value sits at the centre, so the spread falls."
      - text: "The data now has no uncertainty"
        explains: "The filled value is a guess. Random imputation can show how much it matters."
    work: |-
      Observed mean: `(20 + 30 + 40) / 3 = 30`.
      Fill the gap with 30: values 20, 30, 40, 30, and the mean is still `120 / 4 = 30`.
      The new value has zero deviation, so it adds nothing to the sum of squared deviations but increases the count, shrinking the spread.
  - topic: "Week 4 · Assembling data sets"
    ask: "A linear model fits most points well, but five points lie far from the line. Which action does the lecture support?"
    choices:
      - text: "Delete the five points, since the model does not explain them"
        explains: "The lecture warns that this can give a worse model: you are removing the evidence against your simple model."
      - text: "Find out why they are far away, and remove or fix them only if they are measurement error"
        correct: true
        explains: "Right. Fix why you have an outlier, don't just delete. Remove on evidence about the measurement, not on how badly the model fits."
      - text: "Keep them and never question the model"
        explains: "They may be telling you the relationship is not a line."
      - text: "Replace them with zero"
        explains: "That invents values and creates new outliers."
    work: |-
      Deleting outliers can improve a model when they are measurement error.
      It can worsen it when you are just deleting what your simple model cannot explain.
      So investigate each point: a faulty sensor justifies removal; a poor fit does not.
  - topic: "Week 4 · Assembling data sets"
    ask: "You want data from a website with no obvious download. Which order of steps follows the lecture?"
    choices:
      - text: "Write a scraper immediately, since public pages are free to use"
        explains: "Terms of service limit what you can legally do."
      - text: "Check for an API and for an existing scraper, read the terms of service, then scrape if allowed"
        correct: true
        explains: "Right. An API or existing code saves effort and is less fragile, and the terms decide what is legal."
      - text: "Buy the data from Amazon Turk"
        explains: "Crowdsourcing platforms pay people to annotate or gather data. They are not a way to get a site's data."
      - text: "File a Freedom of Information request"
        explains: "FOI applies to government data, not to a private website."
    work: |-
      Search for an API: structured, intended for use.
      Search for an existing scraper.
      Read the terms of service.
      Only then use BeautifulSoup or Selenium, within what is permitted.
  - topic: "Week 4 · Assembling data sets"
    ask: "Monthly rents in a small survey, in hundreds of dollars, have `Q1 = 12` and `Q3 = 18`. The smallest rent is 2 and the largest is 26. Which values does the 1.5 × IQR rule flag?"
    choices:
      - text: "26 only, because it is furthest from the median"
        explains: "26 looks extreme, but the upper fence is `18 + 9 = 27`, and 26 is inside it."
      - text: "2 only"
        correct: true
        explains: "Right. `IQR = 6` and `1.5 × IQR = 9`, so the fences are 3 and 27. Only 2 is outside."
      - text: "Both 2 and 26"
        explains: "That would follow from fences one IQR wide, 6 and 24. The rule uses 1.5, giving 3 and 27."
      - text: "Neither, because the outlier test needs the mean and standard deviation"
        explains: "That is the z-score approach. The IQR rule uses only the quartiles, which is why an extreme value cannot hide itself by inflating the yardstick."
    work: |-
      IQR = Q3 − Q1 = 18 − 12 = 6.
      1.5 × IQR = 9.
      Lower fence = 12 − 9 = 3; upper fence = 18 + 9 = 27.
      2 < 3, so 2 is flagged. 26 ≤ 27, so 26 is not.
      Check each end against its own fence.
  - topic: "Week 4 · Assembling data sets"
    ask: "A building's electricity meter logs demand every 15 minutes. One reading is missing on 3 May, and ten days are missing in December. Which plan suits the two gaps?"
    choices:
      - text: "Interpolate both gaps linearly from the readings either side"
        explains: "Fine for the single reading. Across ten days a straight line erases every daily cycle of high daytime and low overnight demand."
      - text: "Fill both gaps with the mean demand for the whole year"
        explains: "The year's mean ignores the time of day and the season. December demand and 3 a.m. demand both differ from it."
      - text: "Interpolate the single reading; fill the ten days from the same December days in earlier years, adjusted to this year's level; record which values were imputed"
        correct: true
        explains: "Right. Neighbours pin down a short gap. A long gap needs the cycle, taken from earlier years and shifted so it joins this year's readings. Flagging the imputed values stops them being mistaken for measurements."
      - text: "Delete the rows with missing readings and analyse what is left"
        explains: "The series would then jump straight from one date to another, which breaks anything that depends on time order, such as daily averages or autocorrelation."
    work: |-
      Short gap: the readings 15 minutes either side constrain it closely, so linear interpolation is accurate.
      Long gap: the neighbours are ten days apart and say nothing about the middle.
      Use the seasonal profile: the same dates and times in earlier years, which keeps the daily cycle.
      Shift it by how much this year's demand differs from earlier years near the gap.
      Mark the filled values in a separate column so analyses of extremes can exclude them.
  - topic: "Week 5 · Scores and rankings"
    ask: "A volleyball player has mass 90 kg and height 2.00 m. What is her BMI, and which band does it fall in?"
    choices:
      - text: "45.0, obese"
        explains: "That is `90 / 2.00`. The height must be squared before dividing."
      - text: "22.5, normal"
        correct: true
        explains: "Right. `2.00² = 4.00` and `90 / 4.00 = 22.5`, which is between 18.5 and 25."
      - text: "11.25, underweight"
        explains: "That divides by `2.00³ = 8`. The slide's formula uses the square of height."
      - text: "180, obese"
        explains: "That multiplies mass by height. BMI divides mass by height squared."
    work: |-
      BMI = mass / height², with mass in kg and height in metres.
      `2.00² = 4.00`.
      `90 / 4.00 = 22.5`.
      Bands: below 18.5 underweight, 18.5 to 25 normal, 25 to 30 overweight, over 30 obese. So 22.5 is normal.
  - topic: "Week 5 · Scores and rankings"
    ask: "A course score is `0.6 × exam z-score + 0.4 × lab z-score`. A student is 1.0 standard deviations above the mean on the exam and 0.5 below the mean on labs. What is the score, and why were z-scores used?"
    choices:
      - text: "0.4, and z-scores put both inputs on a comparable scale so the weights mean what they say"
        correct: true
        explains: "Right. `0.6 × 1.0 + 0.4 × (−0.5) = 0.6 − 0.2 = 0.4`. Without normalization the input with the larger raw range would dominate whatever the weights were."
      - text: "0.8, and z-scores make the score easier to compute"
        explains: "That adds 0.2 where it should be subtracted: the lab z-score is negative. Normalizing also adds a step, so ease is not the reason."
      - text: "0.5, and z-scores remove outliers"
        explains: "That adds the two z-scores and ignores the weights. Z-scores rescale values and remove nothing."
      - text: "0.4, and z-scores guarantee the score is correct"
        explains: "The arithmetic is right, but nothing can guarantee a score is correct, because there is no right answer to check it against."
    work: |-
      Exam z-score: +1.0. Lab z-score: −0.5.
      `0.6 × 1.0 = 0.6`.
      `0.4 × (−0.5) = −0.2`.
      Score: `0.6 − 0.2 = 0.4`.
      Good scoring functions use systematically normalized variables, so no input dominates because of its units.
  - topic: "Week 5 · Scores and rankings"
    ask: "A support team pays bonuses by rank on tickets closed per day. Within a month the count doubles, while customers report more unsolved problems. In the lecture's terms, what happened?"
    choices:
      - text: "The scoring function was not monotonic"
        explains: "It is monotonic: more tickets closed always gives a higher score. The trouble is what the count stands for."
      - text: "The data needed to be normalized first"
        explains: "There is one variable, so there is nothing to put on a common scale."
      - text: "Rankings should have been replaced by raw scores"
        explains: "Showing the raw counts would not change what is being counted."
      - text: "A proxy for good support was treated as a gold standard, and people raised the proxy without raising the goal"
        correct: true
        explains: "Right. Tickets closed is available and correlated with helping customers, but it is not the same thing. Rewarding it as though it were the truth broke the correlation."
    work: |-
      Goal: customers' problems get solved. There is no direct, trusted measure of that, so there is no gold standard.
      Tickets closed per day is a proxy: available, and usually correlated with the goal.
      Paying on the proxy treats it as the gold standard.
      Agents can close tickets without solving them, so the proxy rises while the goal falls.
      This is the confusion the lecture calls a weapon of math destruction.
  - topic: "Week 5 · Scores and rankings"
    ask: "Which situation lets you train a regression function, and not merely design and evaluate a score?"
    choices:
      - text: "Scoring how talented job applicants are, using their CVs"
        explains: "Nobody has a trusted talent value for each applicant, so there is nothing to fit to."
      - text: "Scoring the quality of universities from their published statistics"
        explains: "There is no agreed true quality per university, which is why published rankings disagree."
      - text: "Predicting whether a loan is repaid, using 10,000 past loans whose outcomes are recorded"
        correct: true
        explains: "Right. Each past loan carries a trusted answer that is the thing you want to predict. That is a gold standard, so a model can be trained on it."
      - text: "Scoring how important a historical figure is, from the length of their biography"
        explains: "Biography length is a proxy, and no table of true importance exists."
    work: |-
      With a gold standard you can train a regression function to predict it.
      With only proxies, all you can do is evaluate a scoring function you designed.
      Talent, university quality and historical importance have no trusted answer per item.
      Loan repayment does: each past loan was repaid or it was not, and that outcome is the goal itself.
  - topic: "Week 5 · Scores and rankings"
    ask: "A newspaper reports that a university 'plunged from 40th to 58th'. Its score moved from 71.3 to 70.9, and thirty universities have scores between 70.5 and 71.5. What is the best reading?"
    choices:
      - text: "The university got much worse, since it lost 18 places"
        explains: "Eighteen places sounds large, but the score moved by 0.4 on a scale where thirty institutions sit within one point."
      - text: "A small change in score, in a crowded part of the distribution, produced a large change in rank"
        correct: true
        explains: "Right. Ranks exaggerate differences where scores are bunched. The score shows how little actually changed."
      - text: "The ranking must contain an error, because a 0.4 change cannot move a rank"
        explains: "It can and does. Rank depends only on order, and many neighbours are within 0.4."
      - text: "Scores are always better than rankings and the rank should be ignored"
        explains: "Neither is always better. The rank gave context for the score, and here the score shows the size of the change."
    work: |-
      Score change: `71.3 − 70.9 = 0.4`.
      Thirty universities lie within a one-point band, so on average one every 0.03 points.
      A 0.4 move can therefore pass many of them: a drop of 18 places is unsurprising.
      Small changes in score can cause big rank differences in the middle of a distribution.
  - topic: "Week 5 · Scores and rankings"
    ask: "Elo with outcomes scored `+1` for a win and `−1` for a loss: A has probability 0.75 of beating B, and `k = 16`. A loses. What is the change in A's rating?"
    choices:
      - text: "−4"
        explains: "That is `16 × (0.75 − 1)`, which mixes the probability with the score and has the wrong outcome. The expected score is 0.5 and the actual score is −1."
      - text: "−16"
        explains: "That would be the change if the expected score were 0, as for evenly matched players. A was the favourite, so losing costs more."
      - text: "−8"
        explains: "That is `16 × 0.5`, the expected score times `k`, leaving out the actual result."
      - text: "−24"
        correct: true
        explains: "Right. Expected score `0.75 − 0.25 = 0.5`, surprise `−1 − 0.5 = −1.5`, and `16 × (−1.5) = −24`."
    work: |-
      Expected score: `μ_A = 1 × 0.75 + (−1) × 0.25 = 0.5`.
      Actual score: A lost, so `S_A = −1`.
      Surprise: `S_A − μ_A = −1 − 0.5 = −1.5`.
      Change: `k × surprise = 16 × (−1.5) = −24`.
  - topic: "Week 5 · Scores and rankings"
    ask: "Chess-style Elo with a win scored 1 and a loss 0: A is rated 1400 and B is rated 1800. Using `E_A = 1 / (1 + 10^((R_B − R_A)/400))` and `K = 30`, A wins. What is A's new rating, to the nearest point?"
    choices:
      - text: "1427"
        correct: true
        explains: "Right. The exponent is `400/400 = 1`, so `E_A = 1/11 ≈ 0.09`, and `1400 + 30 × (1 − 0.09) ≈ 1427`."
      - text: "1403"
        explains: "That uses `E_A ≈ 0.91`, which is B's expected score. The exponent is `(R_B − R_A)/400 = +1`, not −1."
      - text: "1430"
        explains: "That adds the full `K`. The full amount is only approached when the win was judged nearly impossible, and A had about a 9% chance."
      - text: "1415"
        explains: "That is the update for evenly matched players, `30 × 0.5`. A was a heavy underdog, so the win is worth more."
    work: |-
      Exponent: `(1800 − 1400) / 400 = 1`.
      `10¹ = 10`, so `E_A = 1 / (1 + 10) = 1/11 ≈ 0.091`.
      A won, so `S_A = 1`.
      `R′_A = 1400 + 30 × (1 − 0.091) = 1400 + 27.3 ≈ 1427`.
  - topic: "Week 5 · Scores and rankings"
    ask: "A win probability is computed from the rating gap with an S-shaped curve that passes through ½ at a gap of 0. Which change in the gap moves the win probability more?"
    choices:
      - text: "From 600 to 800, because the gap is larger"
        explains: "By 600 the curve is already nearly flat, close to 1. Further points add very little."
      - text: "Both move it equally, since each adds 200 points"
        explains: "That would be true of a straight line. The curve is steep in the middle and flat at the ends."
      - text: "From 0 to 200, because the curve is steepest in the middle"
        correct: true
        explains: "Right. Near an even match a rating edge shifts the odds a lot. Between mismatched players the stronger one was already almost sure to win."
      - text: "Neither, since probability depends on the ratings and not on the gap"
        explains: "A meaningful rating system makes the probability a function of the difference between the two ratings."
    work: |-
      The curve must satisfy `f(0) = ½`, approach 1 for a huge positive gap and approach 0 for a huge negative gap.
      To stay between 0 and 1 it has to flatten at both ends, so its steepest part is in the middle.
      With the chess formula: a gap of 0 gives 0.50 and a gap of 200 gives about 0.76, a rise of 0.26.
      A gap of 600 gives about 0.97 and a gap of 800 gives about 0.99, a rise of about 0.02.
  - topic: "Week 5 · Scores and rankings"
    ask: "Three reviewers rank four proposals. Reviewer 1: W, X, Y, Z. Reviewer 2: X, W, Z, Y. Reviewer 3: X, Y, W, Z. With Borda's method and positions scored 1 to 4, what is the merged order?"
    choices:
      - text: "W, X, Y, Z"
        explains: "That is reviewer 1's ballot. X is placed first twice and second once, for a better total than W."
      - text: "X, W, Y, Z"
        correct: true
        explains: "Right. Totals are X = 4, W = 6, Y = 9, Z = 11, and the lowest total ranks first."
      - text: "Z, Y, W, X"
        explains: "The totals are read upside down. With first place scoring 1, the largest total is the worst."
      - text: "X, Y, W, Z"
        explains: "That is reviewer 3's ballot. Y's total is 9 against W's 6."
    work: |-
      W: `1 + 2 + 3 = 6`.
      X: `2 + 1 + 1 = 4`.
      Y: `3 + 4 + 2 = 9`.
      Z: `4 + 3 + 4 = 11`.
      Lowest total first: X (4), W (6), Y (9), Z (11).
  - topic: "Week 5 · Scores and rankings"
    ask: "Pairwise votes give K > L, L > M, K > M and N > M, with no other comparisons. What can a topological sort tell you about N?"
    choices:
      - text: "N is tied with K for first place"
        explains: "Nothing says they are equal. No vote compares them, which is not the same as a tie."
      - text: "N must be ranked third, just above M"
        explains: "N, K, L, M and K, N, L, M are also valid. Only N before M is required."
      - text: "The votes are inconsistent, so no order exists"
        explains: "There is no cycle. The graph is a DAG and several orders respect every vote."
      - text: "Only that N comes before M: its position relative to K and L is not determined by the data"
        correct: true
        explains: "Right. K, L, N, M and K, N, L, M and N, K, L, M all point every edge forward. Several valid orders mean missing comparisons."
    work: |-
      Edges: K → L, L → M, K → M, N → M. No cycle, so this is a DAG.
      Constraints: K before L, L before M, N before M.
      Valid orders: K, L, N, M; K, N, L, M; N, K, L, M.
      N is constrained only by its edge to M, so the data leaves its place among K and L open.
  - topic: "Week 5 · Scores and rankings"
    ask: "A round of matches contains cycles, so no order agrees with every result. Records are P: 5 wins, 1 loss; Q: 2 wins, 4 losses; R: 4 wins, 2 losses; S: 1 win, 5 losses. What order does the lecture's heuristic give?"
    choices:
      - text: "P, R, Q, S"
        correct: true
        explains: "Right. Out-degree minus in-degree gives P = +4, R = +2, Q = −2, S = −4, sorted from highest to lowest."
      - text: "P, Q, R, S"
        explains: "That is alphabetical order. R's difference is +2 and Q's is −2."
      - text: "S, Q, R, P"
        explains: "That sorts from lowest to highest, putting the player with the most losses first."
      - text: "No order can be given, because the exact problem is NP-complete"
        explains: "NP-complete means the best order is expensive to find. It is the reason for using a heuristic, and the heuristic still gives an order."
    work: |-
      Score = out-degree − in-degree = wins − losses.
      P: `5 − 1 = +4`.
      Q: `2 − 4 = −2`.
      R: `4 − 2 = +2`.
      S: `1 − 5 = −4`.
      Sorted from highest: P, R, Q, S.
  - topic: "Week 5 · Scores and rankings"
    ask: "Three pages link as follows: A → B, A → C, B → C, C → A. All start with PageRank 1/3. After one iteration of the basic formula, what are the scores?"
    choices:
      - text: "A = 1/3, B = 1/3, C = 1/3"
        explains: "That is the starting point. C has two pages linking in and B receives only half of A's score, so they cannot stay equal."
      - text: "A = 1/3, B = 1/3, C = 2/3"
        explains: "That passes A's full score along both of its links. A has two outgoing links, so each carries half. These also sum to more than 1."
      - text: "A = 1/3, B = 1/6, C = 1/2"
        correct: true
        explains: "Right. A gets all of C's score. B gets half of A's. C gets half of A's plus all of B's: `1/6 + 1/3 = 1/2`. The total is still 1."
      - text: "A = 2/3, B = 1/3, C = 1/3"
        explains: "That gives each page score for its outgoing links. The formula sums over incoming links."
    work: |-
      Who links in: A ← C. B ← A. C ← A and B.
      Out-degrees: A has 2, B has 1, C has 1.
      `PR(A) = PR(C)/1 = 1/3`.
      `PR(B) = PR(A)/2 = 1/6`.
      `PR(C) = PR(A)/2 + PR(B)/1 = 1/6 + 1/3 = 1/2`.
      Check: `1/3 + 1/6 + 1/2 = 1`.
  - topic: "Week 5 · Scores and rankings"
    ask: "A hiring committee's method ranks candidate Ada above Ben. A third candidate, Cy, then applies, nobody changes their view of Ada against Ben, and the method now ranks Ben above Ada. Which of Arrow's properties has been violated?"
    choices:
      - text: "Completeness"
        explains: "The method still gives a verdict on every pair, so it is complete."
      - text: "Transitivity"
        explains: "Nothing here shows a cycle. The order is consistent each time and changes between the two times."
      - text: "No dictator"
        explains: "No single committee member is deciding the outcome alone."
      - text: "Independence: the preference between two candidates should not depend on preferences for others"
        correct: true
        explains: "Right. Only Cy's presence changed, and the order of Ada and Ben flipped. Arrow's theorem says every method gives up at least one of the properties."
    work: |-
      Arrow's properties: complete, transitive, unanimity respected, no dictator, independence from other candidates.
      Opinions on Ada against Ben did not change.
      The only change was the arrival of Cy.
      The Ada and Ben order flipped, so their order depended on a third candidate: independence fails.
      By Arrow's theorem no system satisfies all the properties, so some such failure is unavoidable.
  - topic: "Week 6 · Statistical distributions"
    ask: "Page-load times from a web service form a smooth bell-shaped histogram. An engineer proposes using the 68–95–99.7 rule to set alert thresholds. The service runs on two kinds of server, one much faster than the other. What should come first?"
    choices:
      - text: "Nothing: a bell-shaped histogram is enough to justify the normal's percentages"
        explains: "A similar shape does not prove the distribution. Fat tails or a hidden mixture can both produce a bell."
      - text: "Check the load times for each kind of server separately, and test whether the data is normal before trusting the percentages"
        correct: true
        explains: "Right. Two server types make this a likely mixture of two distributions, and a mixture of normals is not normal. Split by group and test before using the rule."
      - text: "Remove the slowest 5% of load times, then apply the rule to what remains"
        explains: "Trimming the tail hides exactly the information the alerts are meant to catch, and does nothing about the mixture."
      - text: "Use Chebyshev's bound instead, since it is tighter than the normal's"
        explains: "Chebyshev's bound holds for any distribution but is looser: 75% within 2σ compared with the normal's 95%."
    work: |-
      A bell-shaped histogram suggests a normal; it does not establish one.
      Two server types mean the data is likely a mixture of two distributions.
      A mixture of normals is not normal, so its tail percentages will be wrong.
      Check each group, and test for normality, before relying on 68–95–99.7.
  - topic: "Week 6 · Statistical distributions"
    ask: "Each chip off a production line is defective with probability 0.1, independently. An inspector tests 3 chips. What is the probability that exactly 1 is defective?"
    choices:
      - text: "0.081"
        explains: "That is `0.1 × 0.9²`, the probability of one particular order such as defective, good, good. There are 3 such orders."
      - text: "0.243"
        correct: true
        explains: "Right. 3 choose 1 = 3 orders, each with probability `0.1 × 0.9² = 0.081`."
      - text: "0.3"
        explains: "That is `3 × 0.1`, the expected number of defects. It leaves out the requirement that the other two chips are good."
      - text: "0.1"
        explains: "That is the probability for a single chip, not for exactly one defect among three."
    work: |-
      Binomial with `n = 3`, `p = 0.1`, `x = 1`.
      `P{X = 1} = (3 choose 1) × 0.1¹ × 0.9²`.
      `(3 choose 1) = 3`, and `0.1 × 0.81 = 0.081`.
      `3 × 0.081 = 0.243`.
  - topic: "Week 6 · Statistical distributions"
    ask: "A poll asks 400 randomly chosen voters a yes-or-no question on which the population is split exactly 50:50. Within what range will the number of yes answers fall in about 95% of such polls?"
    choices:
      - text: "190 to 210"
        explains: "That is one standard deviation either side of 200, which covers only about 68% of polls."
      - text: "180 to 220"
        correct: true
        explains: "Right. The count has mean 200 and `σ = √(400 × 0.5 × 0.5) = 10`. 95% falls within 2σ."
      - text: "160 to 240"
        explains: "That uses `σ = √400 = 20`, leaving out the `p(1−p)` factor in the binomial's standard deviation."
      - text: "198 to 202"
        explains: "Far too narrow. Exactly 200 is the single most likely count but has only about a 4% chance. Chance moves the count much further than this."
    work: |-
      The count of yes answers is binomial, `n = 400`, `p = 0.5`.
      Mean `np = 200`. SD `√(np(1−p)) = √(400 × 0.25) = √100 = 10`.
      A binomial count is approximately normal, so about 95% lies within 2σ of the mean.
      `200 ± 2 × 10` gives 180 to 220.
  - topic: "Week 6 · Statistical distributions"
    ask: "Loaves from a bakery weigh a normally distributed 500 g on average, with standard deviation 10 g. About what share of loaves weigh between 490 g and 520 g?"
    choices:
      - text: "About 68%"
        explains: "That is the share within one standard deviation on both sides, 490 to 510. The range here reaches two standard deviations above the mean."
      - text: "About 95%"
        explains: "That would be 480 to 520, two standard deviations on both sides. The lower end here is only one below."
      - text: "About 82%"
        correct: true
        explains: "Right. Half of 68% (490 to 500) plus half of 95% (500 to 520) gives `34% + 47.5% ≈ 82%`."
      - text: "About 47.5%"
        explains: "That is only the upper part, 500 to 520. The 490 to 500 part must be added."
    work: |-
      Z-scores: `(490 − 500)/10 = −1` and `(520 − 500)/10 = 2`.
      By symmetry, half of each band lies on each side of the mean.
      `μ − 1σ` to `μ`: half of 68% = 34%.
      `μ` to `μ + 2σ`: half of 95% = 47.5%.
      Total: `34% + 47.5% = 81.5%`, about 82%.
  - topic: "Week 6 · Statistical distributions"
    ask: "Phone battery life varies with standard deviation 40 hours. How many batteries must you test so that the standard deviation of their average lifetime is 5 hours?"
    choices:
      - text: "8"
        explains: "8 is `√n`. The standard deviation of the mean is `σ/√n`, so `n` itself is `8² = 64`."
      - text: "64"
        correct: true
        explains: "Right. `40/√n = 5` gives `√n = 8`, so `n = 64`."
      - text: "320"
        explains: "That is `40 × 8`. It multiplies the standard deviation instead of solving `σ/√n = 5`."
      - text: "1,600"
        explains: "That is `40²`, the variance of a single battery. It is unrelated to the sample size needed."
    work: |-
      By the central limit theorem, the mean of `n` samples has SD `σ/√n`.
      Set `40/√n = 5`.
      `√n = 40/5 = 8`.
      `n = 8² = 64`.
  - topic: "Week 6 · Statistical distributions"
    ask: "A server crashes on any given day with probability 0.02, independently of how long it has been running. What is the probability that it runs 30 days in a row without crashing?"
    choices:
      - text: "About 0.40"
        explains: "That is `1 − 30 × 0.02`. Adding the daily risks overcounts, because the server can only crash once. Multiply the survival chances instead."
      - text: "About 0.55"
        correct: true
        explains: "Right. It must survive each day, so `0.98³⁰ ≈ 0.55`."
      - text: "About 0.011"
        explains: "That is `0.98²⁹ × 0.02`, the geometric probability of crashing for the first time *on* day 30, not of surviving all 30."
      - text: "0.98"
        explains: "That is the chance of surviving a single day."
    work: |-
      Surviving 30 days means surviving every day, independently.
      `P = 0.98³⁰`.
      `ln 0.98 ≈ −0.0202`, so `30 × −0.0202 = −0.606`, and `e^−0.606 ≈ 0.545`.
      About 0.55. (Expected lifespan, for reference, is `1/0.02 = 50` days.)
  - topic: "Week 6 · Statistical distributions"
    ask: "A maternity ward averages 2 births per hour, and births are well described by a Poisson distribution. What is the probability of exactly 3 births in the next hour?"
    choices:
      - text: "About 0.135"
        explains: "That is `e⁻²` alone, the probability of zero births. It leaves out the `μˣ / x!` factor."
      - text: "About 0.180"
        correct: true
        explains: "Right. `e⁻² × 2³ / 3! = 0.1353 × 8 / 6 ≈ 0.180`."
      - text: "About 0.271"
        explains: "That is the probability of exactly 2 births (or exactly 1), the most likely counts. 3 births is a little less likely."
      - text: "About 1.08"
        explains: "That is `e⁻² × 2³` without dividing by `3! = 6`. A probability cannot exceed 1."
    work: |-
      Poisson: `Pr(x) = e⁻ᵘ μˣ / x!`, with `μ = 2`, `x = 3`.
      `e⁻² ≈ 0.1353`, `2³ = 8`, `3! = 6`.
      `0.1353 × 8 / 6 = 1.0827 / 6 ≈ 0.180`.
  - topic: "Week 6 · Statistical distributions"
    ask: "A help desk receives on average 10 tickets a day. Over a year, the daily counts have a variance of about 45. What does that suggest?"
    choices:
      - text: "The counts are Poisson, because the mean of 10 is what a Poisson needs"
        explains: "Any Poisson can be given the right mean. The test is the spread, and a Poisson with mean 10 has variance 10, not 45."
      - text: "The counts are Poisson with standard deviation 10"
        explains: "A Poisson's variance equals its mean, so its standard deviation is `√10 ≈ 3.2`, not 10."
      - text: "The counts are not well modelled as Poisson: tickets probably arrive in bursts or at a rate that changes"
        correct: true
        explains: "Right. Variance far above the mean breaks the Poisson's assumption of independent events at a constant rate. Outages that bring a flood of tickets would do this."
      - text: "The counts are less spread out than a Poisson, so they must be binomial"
        explains: "They are more spread out, not less. A Poisson with mean 10 has variance 10, and 45 is far above that."
    work: |-
      A Poisson's variance equals its mean.
      Mean 10 predicts variance 10, standard deviation `√10 ≈ 3.2`.
      Observed variance is 45, more than four times as large.
      Excess variance means events are not independent at a constant rate: bursts, or a rate that changes from day to day.
  - topic: "Week 6 · Statistical distributions"
    ask: "Follower counts on a social network follow a power law with exponent `a = 2`. How much rarer is it for an account to have 4,000 followers than 1,000?"
    choices:
      - text: "4 times rarer"
        explains: "That would hold only for `a = 1`. With `a = 2` the ratio is squared."
      - text: "8 times rarer"
        explains: "That is `2³`, the factor for doubling with `a = 3`. Here the value is multiplied by 4 and the exponent is 2."
      - text: "16 times rarer"
        correct: true
        explains: "Right. `(4000/1000)⁻² = 4⁻² = 1/16`. Equivalently, two doublings, each dividing by `2² = 4`."
      - text: "It depends on the constant `c`"
        explains: "`c` appears in both probabilities and cancels in the ratio."
    work: |-
      `P(x) = c x⁻ᵃ`, so `P(4000) / P(1000) = (4000/1000)⁻² = 4⁻²`.
      `4⁻² = 1/16`.
      Check by doubling: 1,000 to 2,000 divides by `2² = 4`; 2,000 to 4,000 by another 4. `4 × 4 = 16`.
  - topic: "Week 6 · Statistical distributions"
    ask: "An analyst computes the mean and standard deviation of daily visits across 10,000 websites, then flags every site more than 3 standard deviations above the mean as a data error. Dozens are flagged. What is the best response?"
    choices:
      - text: "Delete the flagged sites, since values beyond 3σ almost never occur"
        explains: "That is true for a normal distribution. Website traffic follows a power law, where very large values are rare but always present."
      - text: "Plot the visits on log-log axes; a roughly straight line would show a power law, where such sites are expected"
        correct: true
        explains: "Right. Traffic is a classic power law: inlinks and visits grow when the rich get richer. A straight log-log line confirms the shape, and the large sites are real."
      - text: "Use 5 standard deviations instead of 3, so fewer sites are flagged"
        explains: "A higher threshold keeps the wrong model. Under a power law the mean and standard deviation are dragged around by the largest sites, and no σ cut-off is meaningful."
      - text: "Average the visits over a longer period, so the central limit theorem makes them normal"
        explains: "The central limit theorem makes averages normal; it does not change how visits are distributed *across sites*. Big sites stay big."
    work: |-
      The 3σ rule assumes a normal distribution.
      Web traffic (like inlinks) is a textbook power-law quantity: no typical size, a heavy tail.
      Under a power law, many values far beyond 3σ are expected, not errors.
      Test the shape: on log-log axes a power law appears as a straight line with slope `−a`.
  - topic: "Week 7 · Statistical significance"
    ask: "Hospital A has a higher overall survival rate than hospital B. Yet for mild cases and for severe cases separately, B's survival rate is higher. What best explains this?"
    choices:
      - text: "One of the hospitals must have reported its figures wrongly"
        explains: "The figures can all be right. An overall rate is a weighted average of the group rates, and different weights can reverse the comparison."
      - text: "Hospital B treats a much larger share of severe cases, which have lower survival everywhere"
        correct: true
        explains: "Right. This is Simpson's paradox. Case severity drives both which hospital a patient goes to and how likely they are to survive, so the pooled rates mix hospital quality with case mix."
      - text: "The difference is too small to be statistically significant"
        explains: "The reversal has nothing to do with significance. It comes from how the patients are split between groups, and would remain with any amount of data."
      - text: "Hospital A is better, because the overall rate includes more patients"
        explains: "The overall rate is dominated by case mix. Within each severity group, which compares like with like, B does better."
    work: |-
      Overall rate = (share of mild × mild rate) + (share of severe × severe rate).
      If B takes most of the severe cases, its overall rate is pulled towards the low severe-case survival rate.
      So B can win within every group and still lose overall: Simpson's paradox, with severity as the confounder.
  - topic: "Week 7 · Statistical significance"
    ask: "An A/B test of a new signup page reports p = 0.04 for the difference in signup rates. Which interpretation is correct?"
    choices:
      - text: "There is a 4% chance the new page is no better than the old one"
        explains: "That reads the p-value as `Pr(H₀ | data)`. It is `Pr(data at least this extreme | H₀)`, which is a different quantity."
      - text: "The new page raises signups by 4%"
        explains: "A p-value measures how surprising a result is, not how large the effect is."
      - text: "If the two pages performed identically, a difference at least this large would occur about 4% of the time"
        correct: true
        explains: "Right. That is the definition. Since 0.04 < 0.05, the result is conventionally significant."
      - text: "The new page has been proved better"
        explains: "Hypothesis tests never prove `H₁`. They show that the data would be unlikely under `H₀`."
    work: |-
      p-value = Pr(result as extreme or more extreme | H₀ true).
      H₀ here: the two pages have the same signup rate.
      p = 0.04 < α = 0.05, so reject H₀ at the 0.05 level. This says nothing about the size of the gain or the probability that H₀ is true.
  - topic: "Week 7 · Statistical significance"
    ask: "Two groups of 25 students score means of 68 and 72, with standard deviations 10 and 5. Using Welch's t with `df ≈ n₁ + n₂ − 2` and a two-tailed critical value of about 2.01 at α = 0.05, what do you conclude?"
    choices:
      - text: "t ≈ 1.79, so the difference is not significant at 0.05"
        correct: true
        explains: "Right. The noise term is `√(100/25 + 25/25) = √5 ≈ 2.24`, and `4 / 2.24 ≈ 1.79`, which falls short of 2.01."
      - text: "t ≈ 5.16, so the difference is highly significant"
        explains: "That uses the standard deviations where the variances belong: `√(10/25 + 5/25) = √0.6 ≈ 0.77`. Square each `s` before dividing by `n`."
      - text: "t ≈ 0.8, so the difference is not significant"
        explains: "That divides by `4 + 1 = 5` and forgets the square root. The denominator is `√(s₁²/n₁ + s₂²/n₂) = √5`."
      - text: "t = 4, so the difference is highly significant"
        explains: "4 is the raw gap between the means. The t-statistic divides it by its uncertainty."
    work: |-
      `s₁²/n₁ = 10² / 25 = 100 / 25 = 4`.
      `s₂²/n₂ = 5² / 25 = 25 / 25 = 1`.
      Denominator: `√(4 + 1) = √5 ≈ 2.236`.
      `t = (72 − 68) / 2.236 ≈ 1.79`, with `df ≈ 25 + 25 − 2 = 48`.
      `1.79 < 2.01`, so fail to reject H₀ at α = 0.05.
  - topic: "Week 7 · Statistical significance"
    ask: "A t-test comparing two groups gives t = 1.5, not significant. You repeat the study with the same means and standard deviations but nine times as many people per group. What t should you expect?"
    choices:
      - text: "1.5, because the means and spreads are unchanged"
        explains: "The spreads describe single values, but `t` divides by the uncertainty of the means, and that shrinks with more data."
      - text: "4.5"
        correct: true
        explains: "Right. Each `s²/n` term is divided by 9, so the square root in the denominator is divided by 3. `1.5 × 3 = 4.5`, comfortably significant."
      - text: "13.5"
        explains: "That multiplies by 9. The sample sizes are inside a square root, so nine times the data gives three times the t."
      - text: "0.5"
        explains: "More data makes the means more precise, which shrinks the denominator and increases t."
    work: |-
      `t = (x̄₁ − x̄₂) / √(s₁²/n₁ + s₂²/n₂)`.
      Multiplying both n by 9 divides the expression under the root by 9.
      `√(1/9) = 1/3`, so the denominator is a third as large and t is three times as large: `1.5 × 3 = 4.5`.
  - topic: "Week 7 · Statistical significance"
    ask: "Two machines fill bottles with the same average volume, but one is far more erratic. You have 60 readings from each. Which test can detect the difference, and why?"
    choices:
      - text: "A t-test, because it uses the standard deviations"
        explains: "The t-test uses the spreads only as noise. Its signal is the gap between the means, which here is about zero."
      - text: "A Kolmogorov-Smirnov test, because the CDFs of the two samples will cross at a steep angle and open a large gap"
        correct: true
        explains: "Right. The KS statistic is the largest vertical gap between the empirical CDFs. A wider spread makes one CDF rise more slowly, which shows up even with equal centres."
      - text: "No test can, because equal means imply equal distributions"
        explains: "Equal means say nothing about spread or shape. Two distributions can share a mean and differ greatly."
      - text: "A Bonferroni correction, because there are two machines"
        explains: "Bonferroni adjusts the threshold when many hypotheses are tested. It is not a test of whether two samples differ."
    work: |-
      KS: `D = max over x of |F₁(x) − F₂(x)|`.
      Narrow distribution: its CDF climbs steeply near the mean. Wide distribution: its CDF climbs gradually.
      Below the mean the wide CDF is higher; above it, lower. The gap can be large on both sides.
      With n = n′ = 60 and α = 0.05: threshold `1.36 × √(120/3600) = 1.36 × 0.183 ≈ 0.25`.
  - topic: "Week 7 · Statistical significance"
    ask: "Of 100 shoppers, 50 saw a new banner and 50 did not. 30 of those who saw it bought something, against 20 of those who did not. Using a chi-square test with a critical value of 3.84 (df = 1, α = 0.05), what do you conclude?"
    choices:
      - text: "χ² = 4, so the banner and buying are related at the 0.05 level"
        correct: true
        explains: "Right. With 50 buyers overall, every expected count is 25. Each cell is 5 off, giving `25/25 = 1` per cell and `χ² = 4 > 3.84`."
      - text: "χ² = 1, so there is no evidence of a relationship"
        explains: "1 is the contribution of a single cell. The statistic sums all four cells of the table."
      - text: "χ² = 20, so the relationship is overwhelming"
        explains: "That forgets to divide by the expected count. Each squared gap of 25 is divided by `E = 25` before summing."
      - text: "A chi-square test cannot be used, since buying is yes-or-no"
        explains: "Yes-or-no outcomes are categories, which is exactly what chi-square is for."
    work: |-
      Table: saw banner 30 bought / 20 not; no banner 20 bought / 30 not.
      Row totals 50 and 50; column totals 50 bought, 50 not; N = 100.
      Every `E = 50 × 50 / 100 = 25`.
      Each cell: `(O − E)² / E = 5² / 25 = 1`. Four cells: `χ² = 4`.
      df = (2 − 1)(2 − 1) = 1; `4 > 3.84`, so reject independence at α = 0.05.
  - topic: "Week 7 · Statistical significance"
    ask: "A genetics team tests 500 genes for a link with a disease, wanting an overall significance level of 0.05. Gene X has p = 0.00004 and gene Y has p = 0.002. Under the Bonferroni correction, which are significant?"
    choices:
      - text: "Both, since both are below 0.05"
        explains: "0.05 is the threshold for a single test. Testing 500 genes gives chance 500 opportunities, so each one must clear a stricter bar."
      - text: "Gene X only"
        correct: true
        explains: "Right. The per-test threshold is `0.05 / 500 = 0.0001`. Gene X's 0.00004 clears it; gene Y's 0.002 is twenty times too large."
      - text: "Neither, since the threshold becomes 0.05 × 500 = 25 and the test breaks down"
        explains: "The correction divides `α` by the number of tests. Multiplying would make the bar easier, and a probability threshold above 1 is meaningless."
      - text: "Gene Y only, since a smaller p-value with so many tests is suspicious"
        explains: "A smaller p-value is stronger evidence, not weaker. The correction raises the bar for every test equally."
    work: |-
      Bonferroni: each of `n` tests must reach `α / n`.
      `0.05 / 500 = 0.0001`.
      Gene X: `0.00004 < 0.0001`, significant.
      Gene Y: `0.002 > 0.0001`, not significant after correction.
      Without correction, about `500 × 0.05 = 25` genes would pass by chance alone.
  - topic: "Week 7 · Statistical significance"
    ask: "Across 2 million rides, a ride-share app finds that drivers with a new navigation feature complete trips in 24.6 minutes on average against 24.9 without, with a standard deviation of 6 minutes and p < 0.0001. How large is the effect?"
    choices:
      - text: "Large, because the p-value is extremely small"
        explains: "The p-value reflects confidence that a difference exists. With 2 million rides, almost any difference is detected."
      - text: "Very small: Cohen's d is 0.05"
        correct: true
        explains: "Right. `d = 0.3 / 6 = 0.05`, a quarter of the 0.2 threshold for a small effect. The difference is certainly real and tiny."
      - text: "Medium: Cohen's d is 0.5"
        explains: "That divides the 0.3-minute gap by 0.6 rather than by the standard deviation of 6. Effect size is measured in standard deviations."
      - text: "It cannot be judged without knowing the sample size"
        explains: "Cohen's d deliberately leaves sample size out. It needs only the gap between means and the standard deviation."
    work: |-
      Cohen's `d = |μ − μ′| / σ`.
      `|24.6 − 24.9| = 0.3` minutes.
      `d = 0.3 / 6 = 0.05`.
      Thresholds: small > 0.2, medium > 0.5, large > 0.8. 0.05 is below small.
      Significance and effect size answer different questions; the huge sample explains the tiny p-value.
  - topic: "Week 7 · Statistical significance"
    ask: "To test whether a fitness tracker's step counts differ between weekdays and weekends, you shuffle the weekday/weekend labels 5,000 times. 40 shuffles give a difference at least as large as the real one. What is the approximate p-value, and is the result significant at 0.01?"
    choices:
      - text: "p ≈ 0.008; significant at 0.01"
        correct: true
        explains: "Right. `40 / 5,000 = 0.008`, which is below 0.01."
      - text: "p ≈ 0.04; not significant at 0.01"
        explains: "That divides 40 by 1,000. The count is out of all 5,000 shuffles."
      - text: "p ≈ 0.992; not significant"
        explains: "That is the fraction of shuffles that fall short of the real difference. The p-value counts those at least as extreme."
      - text: "No p-value can be computed without assuming the step counts are normal"
        explains: "Avoiding that assumption is the point of a permutation test. The null distribution is built from the shuffled data itself."
    work: |-
      Permutation p-value ≈ (shuffles at least as extreme) / (total shuffles).
      `40 / 5,000 = 0.008`.
      `0.008 < 0.01`, so significant at the 0.01 level.
      With 5,000 shuffles, the smallest p-value you could report is about `1 / 5,000 = 0.0002`.
  - topic: "Week 7 · Statistical significance"
    ask: "A fraud filter flags transactions that are significant at α = 0.01 under a 'normal customer' null. About 1 transaction in 10,000 is actually fraud, and the filter flags 90% of fraud. Roughly what fraction of flagged transactions are fraud?"
    choices:
      - text: "About 99%, since α = 0.01"
        explains: "That reads `α` as `Pr(normal | flagged)`. It is `Pr(flagged | normal)`. Converting needs the prior: how rare fraud is."
      - text: "About 90%, since the filter catches 90% of fraud"
        explains: "That is `Pr(flagged | fraud)`. The question is the reverse, `Pr(fraud | flagged)`."
      - text: "Under 1%"
        correct: true
        explains: "Right. Per million transactions: `100 × 0.9 = 90` fraud flags and `999,900 × 0.01 ≈ 9,999` false flags. `90 / 10,089 ≈ 0.9%`. With a tiny prior, nearly every flag is a false alarm."
      - text: "About 50%, since a flag is either fraud or not"
        explains: "Two possible outcomes need not be equally likely. The answer depends on the base rate and the two error rates."
    work: |-
      Take 1,000,000 transactions: 100 fraud, 999,900 normal.
      Fraud flagged: `100 × 0.90 = 90`.
      Normal flagged: `999,900 × 0.01 = 9,999`.
      `Pr(fraud | flagged) = 90 / (90 + 9,999) ≈ 0.009`, under 1%.
      A significance test gives `Pr(data | H)`; Bayes' theorem and the prior are needed for `Pr(H | data)`.
  - topic: "Week 7 · Statistical significance"
    ask: "A simulation needs random values from a distribution with outcomes 1, 2, 3 and 4 having probabilities 0.1, 0.2, 0.3 and 0.4. Using the CDF method, a uniform draw of p = 0.35 returns which outcome?"
    choices:
      - text: "1"
        explains: "Outcome 1 covers only `p` from 0 to 0.1."
      - text: "2"
        explains: "Outcome 2 covers `p` from 0.1 to 0.3. 0.35 is past it."
      - text: "3"
        correct: true
        explains: "Right. The CDF is 0.1, 0.3, 0.6, 1.0. The value 0.35 falls between 0.3 and 0.6, which is outcome 3's band, 0.3 wide as its probability requires."
      - text: "4"
        explains: "Outcome 4 is the most likely, but its band runs from 0.6 to 1.0. 0.35 has not reached it."
    work: |-
      CDF: F(1) = 0.1, F(2) = 0.3, F(3) = 0.6, F(4) = 1.0.
      Return the first outcome whose CDF reaches p.
      0.35 > 0.3 = F(2) and 0.35 ≤ 0.6 = F(3), so return 3.
      Each outcome's band has width equal to its probability, so a uniform p picks it at the right rate.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "A company's revenue doubled. An infographic shows it as a money-bag icon whose height and width are both doubled. Using the change in area, what is the graphic's lie factor?"
    choices:
      - text: "1, because the height doubled exactly as the revenue did"
        explains: "Readers judge an icon by its area, not its height. Doubling both dimensions quadruples the area."
      - text: "2, because the icon is twice as large"
        explains: "Twice as tall and twice as wide is four times the area. The effect shown is a 300% increase, not 100%."
      - text: "3: the area grows by 300% while the revenue grows by 100%"
        correct: true
        explains: "Right. Area ×4 is a 300% increase in the graphic, against a 100% increase in the data. 300 / 100 = 3."
      - text: "4, the ratio of the two areas"
        explains: "4 is the area ratio. The lie factor compares the size of the effect: the 300% increase shown against the 100% increase in the data."
    work: |-
      Lie factor = size of effect in graphic / size of effect in data.
      Data: revenue ×2, an increase of 100%.
      Graphic: height ×2 and width ×2, so area ×4, an increase of 300%.
      Lie factor = 300 / 100 = 3. Scaling one dimension, as a bar does, would give 1.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "A choropleth map colours regions by median household income using a rainbow scale from violet (low) to red (high). Readers report a sharp divide between two neighbouring regions whose incomes differ by only 2%. What is the most likely cause, and the fix?"
    choices:
      - text: "The rainbow is perceptually non-linear, so a small step across a hue boundary such as green to yellow looks like a jump; use a single-hue light-to-dark scale"
        correct: true
        explains: "Right. Hue is not perceived as ordered, and the rainbow's bright bands create boundaries that are not in the data. Income is ordered with no special midpoint, so a sequential scale fits."
      - text: "The map should be replaced by a pie chart of income by region"
        explains: "A pie of many regions is hard to read and throws away geography. The problem is the colour scale, not the map."
      - text: "Use a diverging scale centred on zero"
        explains: "A diverging scale suits data with a meaningful centre. Income has no natural zero point to diverge from here."
      - text: "Add more colours so each region gets its own"
        explains: "That turns an ordered quantity into unordered categories. Readers would need the legend for every region."
    work: |-
      Brightness and saturation are seen as ordered; hue is not.
      A rainbow puts perceptual boundaries (such as the bright yellow band) at arbitrary points in the data.
      Two regions just either side of such a boundary look very different although their values are close.
      For ordered data without a centre, use a sequential single-hue scale.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "You draw a histogram of 150 exam scores using 200 bins. It shows a jagged row of spikes separated by empty bins. What is going on?"
    choices:
      - text: "The scores must be bimodal"
        explains: "Spikes with gaps between them are not peaks of the distribution. They are what too many bins do to a small sample."
      - text: "The data is fine; the gaps show which scores nobody got"
        explains: "With 150 points and 200 bins, most bins are empty by chance. The gaps are sampling noise, not structure."
      - text: "A histogram is the wrong chart for exam scores"
        explains: "A histogram suits a continuous variable like scores. The bin count is the problem."
      - text: "There are too many bins for the amount of data, so each bin holds a handful of points and the shape is noise; use fewer bins, or check a CDF"
        correct: true
        explains: "Right. Bin size matters: too many bins for the data makes the histogram mostly sampling luck. A CDF has no bins at all."
    work: |-
      150 points across 200 bins is fewer than one point per bin on average.
      So most bins hold 0 or 1 points, and the shape is driven by chance.
      Reduce the number of bins until a stable shape appears, and compare with the CDF.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "A sentiment classifier reaches 85% accuracy on a test set where 85% of the reviews are positive. What should you conclude?"
    choices:
      - text: "It is a strong model, since 85% is well above 50%"
        explains: "50% is the wrong comparison. A model that always says positive also gets 85% here."
      - text: "It has not yet shown any skill: it only matches the majority-class baseline"
        correct: true
        explains: "Right. A model is effective only once it decisively beats its baselines. Always predicting the most common label scores 85% on this data."
      - text: "It is overfitting"
        explains: "Nothing here compares training with test performance. The issue is that 85% is what a trivial model scores."
      - text: "Its precision must be 85%"
        explains: "Accuracy and precision are different measures. Precision cannot be read from accuracy alone."
    work: |-
      Majority-class baseline: always predict positive.
      Its accuracy = share of positives = 85%.
      The model's 85% equals the baseline, so it has demonstrated nothing yet.
      Report precision, recall and F for the minority class, and compare against the baseline.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "A model scores 71% on its training data and 70% on held-out data. The best single-variable baseline scores 68%. Which diagnosis fits best?"
    choices:
      - text: "High variance: it is overfitting"
        explains: "Overfitting shows as a large gap between training and held-out scores. Here the two are almost equal."
      - text: "It is perfectly balanced and cannot be improved"
        explains: "Equal scores rule out overfitting, but being only slightly better than a baseline suggests the model is missing real structure."
      - text: "High bias: it is too simple to capture the pattern, so it underfits"
        correct: true
        explains: "Right. Poor performance on the training data itself, barely above a baseline, is the signature of bias. A more flexible model or better features may help."
      - text: "The held-out set must have leaked into training"
        explains: "Leakage usually makes held-out scores suspiciously good. These are mediocre, and close to the baseline."
    work: |-
      Bias: error from assumptions too simple for the data. Shows as weak training performance.
      Variance: sensitivity to the training sample. Shows as a big train-test gap.
      Train 71%, test 70%: no gap, so not variance.
      Only 2–3 points above a simple baseline even on training data: underfitting, high bias.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "A fault detector is tested on 1,000 parts, 100 of them faulty. It flags 80 parts, 60 of which are faulty. What are its precision, recall and F-score?"
    choices:
      - text: "Precision 0.60, recall 0.75, F ≈ 0.67"
        explains: "Precision and recall are swapped. Precision divides by the 80 flagged; recall by the 100 faulty."
      - text: "Precision 0.75, recall 0.60, F = 0.45"
        explains: "0.45 is precision × recall. The F-score doubles that and divides by their sum: 0.90 / 1.35 ≈ 0.67."
      - text: "Precision 0.75, recall 0.60, F ≈ 0.67"
        correct: true
        explains: "Right. TP = 60, FP = 20, FN = 40. Precision = 60/80 = 0.75, recall = 60/100 = 0.60, F = 2 × 0.75 × 0.60 / 1.35 ≈ 0.67."
      - text: "Precision 0.75, recall 0.60, F = 0.675"
        explains: "0.675 is the ordinary average of 0.75 and 0.60. The F-score is the harmonic mean, which is lower."
    work: |-
      TP = 60 (flagged and faulty), FP = 80 − 60 = 20, FN = 100 − 60 = 40.
      Precision = TP / (TP + FP) = 60 / 80 = 0.75.
      Recall = TP / (TP + FN) = 60 / 100 = 0.60.
      F = 2 × 0.75 × 0.60 / (0.75 + 0.60) = 0.90 / 1.35 ≈ 0.667.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "An email provider tunes its spam filter. Users rarely check the spam folder, so a real email sent there is effectively lost. Which measure should the provider keep high when choosing the threshold?"
    choices:
      - text: "Precision for the spam class: of the emails it sends to spam, nearly all should really be spam"
        correct: true
        explains: "Right. A false positive here loses a real email, so the provider wants few of them among the emails it flags, which is precision. It accepts lower recall: some spam reaches the inbox."
      - text: "Recall for the spam class"
        explains: "High recall catches nearly all spam, typically by flagging more aggressively, which sends more real emails to the spam folder."
      - text: "Accuracy, because most email is legitimate"
        explains: "With unbalanced classes accuracy is dominated by the big class and does not tell you about the costly error."
      - text: "None: the threshold should always be 0.5"
        explains: "The threshold is a choice about which error costs more. Here false positives cost more, so the threshold should be high."
    work: |-
      Costly error: a real email flagged as spam (a false positive).
      Precision = TP / (TP + FP) falls as false positives rise.
      Raise the threshold so only confident cases are flagged: precision up, recall down.
      Some spam gets through, which is the cheaper error.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "A classifier's ROC curve passes through the point (0.1, 0.8). What does that point mean?"
    choices:
      - text: "At some threshold the model is 80% accurate and 10% wrong"
        explains: "The axes are rates within each class, not accuracy. Accuracy depends on how many of each class there are."
      - text: "At some threshold the model catches 80% of the actual positives while wrongly flagging 10% of the actual negatives"
        correct: true
        explains: "Right. The x-axis is the false positive rate, FP / (FP + TN), and the y-axis the true positive rate, TP / (TP + FN)."
      - text: "The model's AUC is 0.8"
        explains: "AUC is the area under the whole curve, not the height at one point."
      - text: "80% of the model's positive predictions are correct"
        explains: "That would be precision. The ROC curve plots recall (TPR) against the false positive rate."
    work: |-
      Each point on an ROC curve is one threshold.
      x = FPR = FP / (FP + TN) = 0.1: 10% of negatives flagged.
      y = TPR = TP / (TP + FN) = 0.8: 80% of positives caught.
      Points near the top-left corner are good; the diagonal is chance.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "An animal classifier's confusion matrix has actual classes as rows and predictions as columns, in the order cat, dog, fox. Cat: 40, 8, 2. Dog: 5, 45, 0. Fox: 10, 1, 39. Which single mistake does the model make most often?"
    choices:
      - text: "Cats predicted as dogs"
        explains: "That cell is 8. The fox row has a larger off-diagonal entry."
      - text: "Dogs predicted as cats"
        explains: "That cell is 5."
      - text: "Cats predicted as foxes"
        explains: "That cell is 2. Read rows as the truth: row cat, column fox."
      - text: "Foxes predicted as cats"
        correct: true
        explains: "Right. Row fox, column cat holds 10, the largest off-diagonal cell. Fox recall is only 39/50 = 0.78."
    work: |-
      Diagonal (correct): cat 40, dog 45, fox 39.
      Off-diagonal (errors): cat→dog 8, cat→fox 2, dog→cat 5, dog→fox 0, fox→cat 10, fox→dog 1.
      Largest error: fox→cat, 10. More fox examples that look like cats would help most.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "A delivery-time model's errors on five orders are 1, −1, 1, −1 and 6 minutes. What is its RMSE?"
    choices:
      - text: "About 2.83 minutes"
        correct: true
        explains: "Right. Squares 1, 1, 1, 1, 36 sum to 40. MSE = 40 / 5 = 8, and RMSE = √8 ≈ 2.83."
      - text: "2 minutes"
        explains: "2 is the mean absolute error, (1 + 1 + 1 + 1 + 6) / 5. RMSE squares first, so the 6-minute miss counts for more."
      - text: "1.2 minutes"
        explains: "1.2 is the mean of the signed errors, where the ±1s cancel. Squaring stops that."
      - text: "8 minutes"
        explains: "8 is the MSE, in squared minutes. RMSE takes the square root to return to minutes."
    work: |-
      Squared errors: 1, 1, 1, 1, 36. Sum = 40.
      MSE = 40 / 5 = 8 (squared minutes).
      RMSE = √8 ≈ 2.83 minutes.
      The single large miss supplies 36 of the 40, which is how squaring weights big errors.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "A team forecasts daily sales for a corner shop (about $500 a day) and a superstore (about $50,000 a day). Both forecasts are typically off by $400. Which statement is fair?"
    choices:
      - text: "Both forecasts are equally good, since the absolute errors are the same"
        explains: "$400 means very different things at the two scales. Absolute error ignores the size of the thing being forecast."
      - text: "Relative error shows the superstore forecast is far better: about 0.8% against 80%"
        correct: true
        explains: "Right. $400 / $50,000 = 0.8% and $400 / $500 = 80%. This is why relative error is typically the better measure."
      - text: "The corner-shop forecast is better, since its errors are smaller in dollars"
        explains: "They are the same in dollars. Relative to the shop's sales, they are enormous."
      - text: "Neither can be judged without an MSE"
        explains: "MSE would still be in squared dollars and still ignore scale. Relative error answers the question directly."
    work: |-
      Relative error = (f − o) / o.
      Corner shop: 400 / 500 = 0.8, an 80% miss.
      Superstore: 400 / 50,000 = 0.008, a 0.8% miss.
      Same absolute error, a hundredfold difference in quality.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "A model predicting next-day stock movement scores 78% in 10-fold cross-validation with the rows shuffled at random, then barely beats chance when used live. What is the most likely flaw in the evaluation?"
    choices:
      - text: "10 folds is too few; 20 would have been accurate"
        explains: "The number of folds is not the problem. Any random split of a time series has the same flaw."
      - text: "Cross-validation always overestimates performance"
        explains: "Done correctly, it gives an honest out-of-sample estimate. Here the split itself leaked information."
      - text: "The market changed on the day the model went live"
        explains: "Possible, but a drop from 78% to chance is the classic sign of leakage in the evaluation, which should be ruled out first."
      - text: "Shuffling let the model train on days after the ones it was tested on, so future information leaked into training"
        correct: true
        explains: "Right. For time series, out-of-sample means data that did not exist yet. Train on the past and test on the later period."
    work: |-
      Random shuffling puts days from the future into the training folds.
      Patterns around a test day (the days just after it) are then available to the model.
      That is mixing training and evaluation data, one of the sins in evaluation.
      Fix: split by time, so every test day comes after every training day.
  - topic: "Week 9 · Visualisation and model evaluation"
    ask: "You run 10-fold cross-validation on 2,000 labelled examples and get accuracies with mean 0.81 and standard deviation 0.02. What does this tell you?"
    choices:
      - text: "Ten models were each trained on 1,800 examples; the true accuracy is about 0.81, and it varies little with which cases are held out"
        correct: true
        explains: "Right. Each fold of 200 is held out once. The small spread across folds says the estimate is stable, which is the bonus of cross-validation."
      - text: "One model was trained on 2,000 examples and tested ten times on the same data"
        explains: "Testing on training data is what cross-validation avoids. Each model is scored only on its held-out fold."
      - text: "Ten models were trained on 200 examples each"
        explains: "The wrong way round: each trains on (k − 1)/k = 9/10 of the data and is tested on 1/10."
      - text: "The model is overfitting, because the accuracies differ between folds"
        explains: "Some spread is expected. 0.02 is small; it says the estimate barely depends on the split."
    work: |-
      k = 10, so folds of 2,000 / 10 = 200.
      Each model trains on 1,800 examples and is evaluated on the remaining 200.
      Mean 0.81 is the estimate; standard deviation 0.02 measures its stability across folds.
  - topic: "Week 10 · Linear regression"
    ask: "X is a 50 × 4 matrix and θ is a 4 × 1 vector. Which products are defined, and what shape is Xθ?"
    choices:
      - text: "Both Xθ and θX are defined, and Xθ is 4 × 4"
        explains: "θX would need θ's 1 column to match X's 50 rows. And Xθ takes the outer sizes, 50 and 1."
      - text: "Only Xθ is defined, and it is 50 × 1"
        correct: true
        explains: "Right. (50 × 4)(4 × 1): the inner 4s match and the result is 50 × 1, one prediction per row. θX fails the inner check, 1 against 50."
      - text: "Only θX is defined, and it is 4 × 4"
        explains: "θX is (4 × 1)(50 × 4): the inner sizes 1 and 50 differ, so it is undefined."
      - text: "Neither is defined, because X is not square"
        explains: "Multiplication does not need square matrices. It needs the first's columns to match the second's rows."
    work: |-
      (m × n)(n × o) = (m × o), with the inner n required to match.
      Xθ: (50 × 4)(4 × 1) → inner 4 = 4, result 50 × 1.
      θX: (4 × 1)(50 × 4) → inner 1 ≠ 50, undefined.
      Matrix products cannot be reordered freely.
  - topic: "Week 10 · Linear regression"
    ask: "What is [[2, 1], [0, 3]] × [4, −1], with the matrix written row by row?"
    choices:
      - text: "[8, −3]"
        explains: "This multiplies only the diagonal entries. Each row must be multiplied with the whole vector and summed."
      - text: "[[8, −1], [0, −3]]"
        explains: "This multiplies entry by entry without summing each row. The result should be a vector."
      - text: "[7, −3]"
        correct: true
        explains: "Right. Row 1: 2 × 4 + 1 × (−1) = 7. Row 2: 0 × 4 + 3 × (−1) = −3."
      - text: "[8, 2]"
        explains: "This sums down the columns rather than along the rows."
    work: |-
      To get yᵢ, multiply row i of the matrix with the vector and add.
      Row 1: 2 × 4 + 1 × (−1) = 8 − 1 = 7.
      Row 2: 0 × 4 + 3 × (−1) = −3.
      (2 × 2)(2 × 1) = 2 × 1.
  - topic: "Week 10 · Linear regression"
    ask: "Does the matrix [[2, 4], [1, 2]] have an inverse?"
    choices:
      - text: "Yes, because it is square"
        explains: "Being square is necessary, not sufficient. Some square matrices are singular."
      - text: "Yes, because none of its entries is zero"
        explains: "Zero entries are not the test. A matrix whose rows are multiples of each other has no inverse."
      - text: "No: its first row is twice its second, so it is singular"
        correct: true
        explains: "Right. Rows that are multiples of each other make a matrix singular, or degenerate. No matrix multiplies it to give the identity."
      - text: "No, because only the identity matrix has an inverse"
        explains: "Many square matrices have inverses. This one does not, because its rows are linearly dependent."
    work: |-
      Row 1 = [2, 4] = 2 × [1, 2] = 2 × row 2.
      Linearly dependent rows make a square matrix singular.
      The same thing happens to XᵀX when one feature is a multiple of another.
  - topic: "Week 10 · Linear regression"
    ask: "A subscription service has records of past customers, including how many days each stayed before cancelling. It wants to predict, for each new customer, the number of days until they cancel. What kind of problem is this?"
    choices:
      - text: "Supervised classification, because cancelling is a yes-or-no event"
        explains: "The question asks for the number of days, which is continuous. Predicting whether they cancel this month would be classification."
      - text: "Unsupervised clustering, because customers fall into groups"
        explains: "The past records include the right answer, days until cancellation. Learning from known answers is supervised."
      - text: "Supervised regression: there are known answers, and the output is a continuous number"
        correct: true
        explains: "Right. The data provides the right answer for each past customer, and the target is a quantity, not a category."
      - text: "Not a machine-learning problem"
        explains: "In Mitchell's terms, the task is predicting churn time, experience is the past records, and performance is the prediction error."
    work: |-
      Labelled examples with a correct output → supervised.
      Output is a number of days → continuous → regression.
      The same data could pose a classification problem: will this customer cancel within 30 days?
  - topic: "Week 10 · Linear regression"
    ask: "Training data (1, 3), (2, 5), (3, 7). For the hypothesis hθ(x) = 2x, what is J(θ₀, θ₁)?"
    choices:
      - text: "0.5"
        correct: true
        explains: "Right. Predictions 2, 4, 6. Each error is −1, squared 1. Sum 3, and J = 3 / (2 × 3) = 0.5."
      - text: "1"
        explains: "That is 3 / 3, the plain mean of the squared errors. J divides by 2m."
      - text: "−0.5"
        explains: "That averages the signed errors. They must be squared first."
      - text: "0"
        explains: "J is 0 only when the line passes through every point. y = 1 + 2x does; y = 2x misses each by 1."
    work: |-
      hθ(x) = 2x, so θ₀ = 0 and θ₁ = 2.
      Predictions: 2, 4, 6. Actual: 3, 5, 7. Errors: −1, −1, −1.
      Squared errors sum to 3. m = 3.
      J = (1 / 2m) × 3 = 3 / 6 = 0.5.
  - topic: "Week 10 · Linear regression"
    ask: "With hθ(x) = θ₁x and training data (1, 2) and (2, 4), gradient descent is at θ₁ = 3 with α = 0.1. What is θ₁ after one step?"
    choices:
      - text: "3.25"
        explains: "The slope is positive, so the minus sign in the update moves θ₁ down, not up."
      - text: "2.5"
        explains: "That forgets to divide the sum by m = 2, using a slope of 5 instead of 2.5."
      - text: "2.75"
        correct: true
        explains: "Right. Errors are 3 − 2 = 1 and 6 − 4 = 2. Slope = (1/2)(1 × 1 + 2 × 2) = 2.5, so θ₁ := 3 − 0.1 × 2.5 = 2.75."
      - text: "2.85"
        explains: "That uses the average error, 1.5, without weighting each error by its x. The θ₁ rule multiplies by x⁽ⁱ⁾."
    work: |-
      Predictions at θ₁ = 3: 3 and 6. Errors: 1 and 2.
      ∂J/∂θ₁ = (1/m) Σ (hθ(x⁽ⁱ⁾) − y⁽ⁱ⁾) · x⁽ⁱ⁾ = (1/2)(1 × 1 + 2 × 2) = 2.5.
      θ₁ := 3 − 0.1 × 2.5 = 2.75.
      Moving toward the best value θ₁ = 2.
  - topic: "Week 10 · Linear regression"
    ask: "You run gradient descent on house data with size (0 to 4,000 ft²) and bedrooms (1 to 5) as features. J falls on every iteration but extremely slowly. What is the best first fix?"
    choices:
      - text: "Increase α tenfold immediately"
        explains: "A big jump in α risks divergence on the steep size direction while the bedrooms direction still crawls. Scaling addresses the cause."
      - text: "Scale the features to similar ranges, for example with mean normalisation"
        correct: true
        explains: "Right. Very uneven ranges make J's contours long and thin, so gradient descent zig-zags and creeps. Scaled features give round contours and a direct path."
      - text: "Switch to the simultaneous update"
        explains: "An incorrect update order is a bug, but it does not produce this slow-but-steady pattern. The feature ranges do."
      - text: "Add polynomial features"
        explains: "That adds features with even wider ranges and makes the problem worse."
    work: |-
      Size spans thousands, bedrooms span a handful.
      J is very sensitive to θ₁ and nearly flat in θ₂: long, thin elliptical contours.
      Gradient descent bounces across the narrow valley and creeps along it.
      Scaling, e.g. x₁ = (size − μ₁) / s₁, makes the contours round so descent heads to the minimum.
  - topic: "Week 10 · Linear regression"
    ask: "Home ages in a training set range from 10 to 70 years, with mean 40. Using mean normalisation with the range, what does an age of 55 become?"
    choices:
      - text: "0.375"
        explains: "That is 15 / 40, dividing by the mean. Mean normalisation divides by the range (or standard deviation)."
      - text: "About 0.79"
        explains: "That is 55 / 70, dividing by the maximum without centring."
      - text: "About 0.92"
        explains: "That is 55 / 60: divided by the range, but without subtracting the mean first."
      - text: "0.25"
        correct: true
        explains: "Right. (55 − 40) / (70 − 10) = 15 / 60 = 0.25."
    work: |-
      xᵢ := (xᵢ − μᵢ) / sᵢ, with sᵢ = max − min.
      μ = 40, s = 70 − 10 = 60.
      (55 − 40) / 60 = 15 / 60 = 0.25.
      The same μ and s must be used for new houses at prediction time.
  - topic: "Week 10 · Linear regression"
    ask: "You fit linear regression with the normal equation on m = 500 examples and n = 20 features, with x₀ = 1 added. What size is the matrix XᵀX that has to be inverted?"
    choices:
      - text: "21 × 21"
        correct: true
        explains: "Right. X is 500 × 21, so XᵀX is (21 × 500)(500 × 21) = 21 × 21. Its size depends on the number of features, not examples."
      - text: "500 × 500"
        explains: "That would be XXᵀ. XᵀX has one row and column per parameter."
      - text: "20 × 20"
        explains: "This forgets the x₀ = 1 column, which gives the intercept its own parameter."
      - text: "500 × 21"
        explains: "That is X itself. XᵀX is square, which it must be to have an inverse."
    work: |-
      X is m × (n + 1) = 500 × 21.
      Xᵀ is 21 × 500.
      XᵀX = (21 × 500)(500 × 21) = 21 × 21.
      Inverting costs O(n³) in this size, which is small here.
  - topic: "Week 10 · Linear regression"
    ask: "A data set has 2 million training examples and 30 features. Which method is the sensible way to fit linear regression?"
    choices:
      - text: "Gradient descent, because m is very large"
        explains: "Large m does not rule out the normal equation; it is the size of n that drives its O(n³) inversion. With n = 30, that is tiny."
      - text: "The normal equation: XᵀX is only 31 × 31, so inverting it is cheap, and there is no α to choose or iterations to run"
        correct: true
        explains: "Right. The slow part of the normal equation grows with n, and the notes suggest switching only when n exceeds about 10,000."
      - text: "Neither; linear regression cannot handle that many examples"
        explains: "Both methods handle millions of examples. The question is which costs less."
      - text: "The normal equation, but only after feature scaling"
        explains: "The normal equation does not need feature scaling. That is a gradient-descent concern."
    work: |-
      Normal equation cost: dominated by inverting the (n + 1) × (n + 1) matrix XᵀX.
      n = 30 → 31 × 31, trivial to invert.
      Forming XᵀX takes one pass over the 2 million rows, which is fine.
      Gradient descent would need α, scaling and many passes. Prefer it when n is large (≳ 10,000).
  - topic: "Week 10 · Linear regression"
    ask: "A genetics study has 30 patients and 200 gene-expression features. The normal equation fails because XᵀX cannot be inverted. Why, and what are the fixes?"
    choices:
      - text: "The features need scaling first"
        explains: "Scaling does not change whether XᵀX is invertible, and the normal equation does not need it."
      - text: "There are more features than examples (m ≤ n), so infinitely many θ fit equally well; delete features or use regularisation"
        correct: true
        explains: "Right. This is the notes' second cause of a non-invertible XᵀX. pinv gives an answer, but the underlying fix is fewer features or regularisation."
      - text: "The data must contain a bug; XᵀX is always invertible"
        explains: "XᵀX is often singular, through redundant features or too few examples."
      - text: "Add more features until n is larger still"
        explains: "That makes the problem worse."
    work: |-
      X is 30 × 201, so XᵀX is 201 × 201 but built from only 30 rows of information.
      With m ≤ n, many different θ give exactly the same predictions on the training set.
      So XᵀX is singular: no unique solution.
      Fixes: remove features, or regularise. pinv returns one solution.
  - topic: "Week 10 · Linear regression"
    ask: "Is hθ(x) = θ₀ + θ₁x + θ₂x² still linear regression?"
    choices:
      - text: "No, because the curve is not a straight line"
        explains: "Linear regression needs the model to be linear in the parameters θ, not in x."
      - text: "No, it needs a separate non-linear algorithm"
        explains: "The same cost, gradient descent and normal equation apply. x² is just another column of X."
      - text: "Only if x is between 0 and 1"
        explains: "The range of x matters for feature scaling, not for whether the model is linear regression."
      - text: "Yes: it is linear in θ, with x² treated as an extra feature; feature scaling becomes important"
        correct: true
        explains: "Right. Define x₂ = x² and it is ordinary multivariate regression. Since x² spreads the range dramatically, scale it."
    work: |-
      Let x₁ = x and x₂ = x². Then hθ(x) = θ₀ + θ₁x₁ + θ₂x₂.
      Each θ multiplies a feature and the products are added: linear in θ.
      If x runs from 1 to 1,000, x² runs from 1 to 1,000,000, so scale each feature separately.
  - topic: "Week 10 · Linear regression"
    ask: "You increase the regularisation parameter λ steadily from 0 to a very large value. What happens to the error on the training set?"
    choices:
      - text: "It rises: the penalty forces the parameters away from the best training fit, eventually toward a flat line at θ₀"
        correct: true
        explains: "Right. λ = 0 gives the lowest possible training cost. Every increase trades training fit for smaller parameters, which is why λ is chosen on held-out data, not training data."
      - text: "It falls, because regularisation prevents overfitting"
        explains: "Regularisation can lower the error on new data. On the training data, constraining the parameters can only make the fit worse."
      - text: "It stays the same, because λ only affects the speed of gradient descent"
        explains: "λ changes the cost function and therefore where its minimum is. α is the setting that affects speed."
      - text: "It falls to zero"
        explains: "A very large λ pushes θ₁ to θₙ to about zero, leaving a flat line that fits the training data badly."
    work: |-
      J(θ) = (1/2m)[Σ (hθ(x⁽ⁱ⁾) − y⁽ⁱ⁾)² + λ Σⱼ₌₁ⁿ θⱼ²].
      λ = 0: pure least squares, lowest training error.
      Larger λ: parameters shrink, the fit to training data loosens.
      λ → ∞: θ₁…θₙ → 0, hθ(x) ≈ θ₀, underfit.
      Held-out error typically falls then rises; pick λ at its minimum.
  - topic: "Week 10 · Linear regression"
    ask: "You have 500 candidate features and suspect most are irrelevant. You want a regularised model that drops the useless ones entirely. Which penalty fits?"
    choices:
      - text: "Ridge, because it penalises squared coefficients"
        explains: "Ridge shrinks every coefficient but rarely to exactly zero, so all 500 features stay in the model."
      - text: "LASSO, because penalising absolute values tends to push the least useful coefficients to exactly zero"
        correct: true
        explains: "Right. The L₁ penalty keeps charging small coefficients at full rate, so it removes features as part of fitting."
      - text: "No penalty, then delete features with small coefficients"
        explains: "Without a penalty, coefficients on unscaled or correlated features are unreliable guides. LASSO does the selection in the fit."
      - text: "Either; they always give the same model"
        explains: "They penalise differently. Ridge spreads weight across correlated features; LASSO tends to pick some and zero the rest."
    work: |-
      Ridge (L₂): λ Σ θⱼ². Small coefficients cost almost nothing, so they shrink but stay non-zero.
      LASSO (L₁): λ Σ abs(θⱼ). Small coefficients still cost their full size, so many go to exactly 0.
      Standardise features first so coefficient sizes are comparable.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A model predicting whether a student passes has θ₀ = −6 and θ₁ = 2, where x₁ is hours studied. What does it output for a student who studied 4 hours?"
    choices:
      - text: "About 0.88"
        correct: true
        explains: "Right. θᵀx = −6 + 2 × 4 = 2, and g(2) = 1 / (1 + e⁻²) ≈ 0.88: an 88% estimated chance of passing."
      - text: "2"
        explains: "2 is θᵀx, the score before the sigmoid. Logistic regression's output is g(θᵀx), which is always between 0 and 1."
      - text: "About 0.12"
        explains: "That is g(−2), or equivalently the probability of failing. The score here is +2."
      - text: "0.5"
        explains: "g gives 0.5 only when θᵀx = 0, which happens at 3 hours. At 4 hours the score is positive."
    work: |-
      θᵀx = θ₀ + θ₁x₁ = −6 + 2 × 4 = 2.
      e⁻² ≈ 0.135.
      hθ(x) = 1 / (1 + 0.135) ≈ 0.88.
      Read as P(pass given 4 hours) ≈ 88%.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A fitted logistic model has θ₀ = −8, θ₁ = 2, θ₂ = 1. Which of these points (x₁, x₂) does it classify as y = 1?"
    choices:
      - text: "(3, 1)"
        explains: "−8 + 6 + 1 = −1, which is negative, so the prediction is y = 0."
      - text: "(3, 3)"
        correct: true
        explains: "Right. −8 + 6 + 3 = 1 ≥ 0, so hθ(x) ≥ 0.5. The point is on the positive side of the line 2x₁ + x₂ = 8."
      - text: "(1, 5)"
        explains: "−8 + 2 + 5 = −1, negative. A large x₂ does not help enough because its weight is only 1."
      - text: "(2, 3)"
        explains: "−8 + 4 + 3 = −1, negative, so y = 0."
    work: |-
      Predict y = 1 when θᵀx ≥ 0, that is 2x₁ + x₂ ≥ 8.
      (3, 1): 7. (3, 3): 9. (1, 5): 7. (2, 3): 7.
      Only (3, 3) reaches 8.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A lender fits a straight line to past loans (1 = defaulted, 0 = repaid) and reads the output as a probability of default. For one applicant the line gives 1.3. What does this show?"
    choices:
      - text: "The applicant is certain to default"
        explains: "Certainty would be exactly 1. A value of 1.3 is not a probability at all, so it cannot be read that way."
      - text: "The line was fitted incorrectly"
        explains: "A correctly fitted straight line still keeps rising or falling without limit. The fault is in using a line for this job."
      - text: "A straight-line hypothesis is unbounded, so it cannot serve as a probability; passing θᵀx through the sigmoid keeps the output between 0 and 1"
        correct: true
        explains: "Right. This is one of the two reasons linear regression is the wrong tool for classification. The other is that extreme but easy examples tilt the line and move the threshold."
      - text: "The threshold should be raised from 0.5 to 1.3"
        explains: "Moving the threshold does not make 1.3 a meaningful probability, and other applicants will get negative values."
    work: |-
      Linear: hθ(x) = θᵀx, any real number, so it can be > 1 or < 0.
      Logistic: hθ(x) = 1 / (1 + e^(−θᵀx)), always strictly between 0 and 1.
      Only the second can be read as P(y = 1 given x).
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A spam model is scored on three emails: spam with predicted probability 0.8, not spam with 0.1, and not spam with 0.9. Using natural logs, what is the logistic cost J(θ)?"
    choices:
      - text: "About 0.88"
        correct: true
        explains: "Right. The per-example costs are 0.223, 0.105 and 2.303, and their mean is 0.877. The one confident mistake supplies most of it."
      - text: "About 0.11"
        explains: "That averages only the two good predictions over three. The third email, called 90% spam when it was not, costs 2.303."
      - text: "About 2.63"
        explains: "That is the sum of the three costs. J(θ) is the average, so divide by m = 3."
      - text: "About 0.33"
        explains: "That is the error rate, one wrong out of three. The logistic cost uses the probabilities, not the thresholded answers."
    work: |-
      y = 1, h = 0.8: −log(0.8) = 0.223.
      y = 0, h = 0.1: −log(1 − 0.1) = −log(0.9) = 0.105.
      y = 0, h = 0.9: −log(1 − 0.9) = −log(0.1) = 2.303.
      J(θ) = (0.223 + 0.105 + 2.303) / 3 = 2.631 / 3 ≈ 0.877.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A colleague trains logistic regression by gradient descent on squared error and gets different parameters from different starting points. What is the explanation?"
    choices:
      - text: "The learning rate is too large"
        explains: "A large α causes overshooting or divergence. Settling at different places from different starts points to several minima."
      - text: "Squared error with a sigmoid hypothesis is non-convex, so gradient descent stops in whichever local minimum is nearest; the log cost is convex and avoids this"
        correct: true
        explains: "Right. Convexity depends on the cost and the hypothesis together. The same squared error that was a bowl for linear regression has several dips here."
      - text: "Logistic regression has no unique best parameters under any cost"
        explains: "Under the log cost J(θ) is convex, and gradient descent reaches its minimum from any start."
      - text: "The features were not scaled"
        explains: "Unscaled features slow convergence. They do not create separate minima."
    work: |-
      Squared error: Cost = ½ (g(θᵀx) − y)². The sigmoid inside makes J(θ) non-convex.
      Log cost: Cost = −y log h − (1 − y) log(1 − h). J(θ) is convex.
      Convex: one minimum, reached from any starting point.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "In one gradient descent step using a single training example, hθ(x) = 0.9, the true label is y = 0, the feature is xⱼ = 2 and α = 0.1. How does θⱼ change?"
    choices:
      - text: "It decreases by 0.18"
        correct: true
        explains: "Right. The step is −α (h − y) xⱼ = −0.1 × 0.9 × 2 = −0.18. The model was too confident of the positive class, so the weight on a positive feature is reduced."
      - text: "It increases by 0.18"
        explains: "The update subtracts α times the error times the feature. The error 0.9 − 0 is positive, so θⱼ goes down."
      - text: "It decreases by 0.09"
        explains: "That leaves out the feature value xⱼ = 2. The error is multiplied by the feature."
      - text: "It does not change, because the prediction was wrong"
        explains: "Wrong predictions are exactly the ones that move the parameters most."
    work: |-
      θⱼ := θⱼ − α (hθ(x) − y) xⱼ.
      Error = 0.9 − 0 = 0.9.
      Step = 0.1 × 0.9 × 2 = 0.18, subtracted.
      Same form as linear regression, with hθ(x) = g(θᵀx).
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A rare-disease data set has 200 positive and 100,000 negative patients. To balance it, an analyst copies each positive patient 500 times exactly. What is the main risk?"
    choices:
      - text: "The data set becomes too large to train on"
        explains: "200,000 rows is small. Size is not the concern."
      - text: "The model overfits: it sees the same 200 points repeatedly and can fit their particular quirks, since copies add weight but no new information"
        correct: true
        explains: "Right. The lecture attaches this warning to weighting and replication. Perturbing the copies, or generating points between neighbours as SMOTE does, reduces it; finding more real positives is better still."
      - text: "The negatives are now under-represented"
        explains: "The classes are now equal in size, which was the goal."
      - text: "Logistic regression cannot handle duplicate rows"
        explains: "Duplicates are handled without error. Each simply counts again in the cost."
    work: |-
      Before: 200 against 100,000, so the cost is dominated by negatives.
      After copying: 100,000 against 100,000, but still only 200 distinct positives.
      Options in order of information added: find more positives, then perturbed copies or SMOTE, then exact copies or weights.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "SMOTE selects minority point p = (10, 4) and its minority neighbour n = (6, 8), and draws c = 0.75. Where is the synthetic point?"
    choices:
      - text: "(7, 7)"
        correct: true
        explains: "Right. n − p = (−4, 4); three quarters of that is (−3, 3); added to p gives (7, 7), three quarters of the way from p to n."
      - text: "(8, 6)"
        explains: "That is the midpoint, which needs c = 0.5."
      - text: "(9, 5)"
        explains: "That is a quarter of the way, c = 0.25. The fraction c is measured from p toward n."
      - text: "(4.5, 6)"
        explains: "That multiplies n by c. The formula is p + c(n − p), a step from p toward n."
    work: |-
      New point = p + c (n − p).
      n − p = (6 − 10, 8 − 4) = (−4, 4).
      c (n − p) = 0.75 × (−4, 4) = (−3, 3).
      p + (−3, 3) = (7, 7).
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A support desk sorts tickets into Billing, Technical, Account and Other using one-vs-all logistic regression. A new ticket scores 0.35, 0.45, 0.20 and 0.30 respectively. How many classifiers were trained, and what is predicted?"
    choices:
      - text: "Four classifiers; Technical"
        correct: true
        explains: "Right. One classifier per class, each against the rest, and the prediction is the class with the largest output, even though none exceeds 0.5 and the four sum to 1.30."
      - text: "Three classifiers; Technical"
        explains: "One-vs-all trains one classifier for every class, so four. No class is left as a default."
      - text: "Four classifiers; no prediction, because no score reaches 0.5"
        explains: "The rule is to take the maximum. The 0.5 threshold belongs to a single binary classifier."
      - text: "One classifier with classes coded 1 to 4; Technical"
        explains: "Numbering unordered categories invents an order among them. One-vs-all keeps each class separate."
    work: |-
      k = 4 classes, so 4 binary classifiers.
      Outputs: 0.35, 0.45, 0.20, 0.30. Maximum is 0.45: Technical.
      Sum = 1.30, not 1, because the classifiers are independent.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A classifier produces scores 3 and 1 for two classes. What probability does softmax give the first class, and how does that compare with dividing each score by the total?"
    choices:
      - text: "About 0.88 with softmax, against 0.75 by dividing by the total"
        correct: true
        explains: "Right. e³ ≈ 20.09 and e¹ ≈ 2.72, so softmax gives 20.09 / 22.80 ≈ 0.88. Standard normalisation gives 3 / 4. Softmax widens the gap."
      - text: "0.75 with both"
        explains: "0.75 is the standard normalisation. Softmax exponentiates the scores first, which favours the larger one."
      - text: "About 0.67 with softmax, against 0.75"
        explains: "Softmax sharpens differences and does not flatten them. The larger score gets more than its plain share."
      - text: "About 0.95 with softmax, against 0.75"
        explains: "0.95 would need a gap of 3 between the scores. The gap here is 2."
    work: |-
      Softmax: e³ = 20.09, e¹ = 2.72, total 22.80.
      P(first) = 20.09 / 22.80 ≈ 0.88.
      Standard: 3 / (3 + 1) = 0.75.
      Softmax depends on the difference 3 − 1 = 2; standard on the ratio 3 : 1.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A retailer builds a demand model from four years of search-term data. It was accurate for a year and now overestimates badly, though the data volume has kept growing. Which weakness of big data is the most likely cause?"
    choices:
      - text: "Too little data"
        explains: "The volume has grown. Shortage of data is not the issue."
      - text: "Temporal bias: the link between searches and purchases held for the period it was learned in and has since shifted"
        correct: true
        explains: "Right. This is the Google Flu Trends pattern. Data gathered by opportunity reflects behaviour at the time, and more of it does not correct for behaviour changing."
      - text: "Power-law redundancy"
        explains: "Redundancy limits how much information the volume holds. It does not explain a model that worked and then drifted."
      - text: "The algorithm is not linear in the number of records"
        explains: "That would make training slow. It would not make the predictions wrong."
    work: |-
      Four problems of found data: unrepresentative participation, spam and machine content, power-law redundancy, temporal bias.
      Accurate then drifting, with volume intact, points to temporal bias.
      Remedy: retrain and re-validate on recent data, not collect more of the old kind.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A customer file of 40 million rows is sorted by sign-up date. An analyst loads the first 100,000 rows to study typical spending. What is wrong, and what is a simple fix?"
    choices:
      - text: "Nothing: 100,000 rows is plenty"
        explains: "The count is plenty. Which rows they are is the problem."
      - text: "Truncation gives only the earliest customers, a temporal bias; taking every 400th row gives the same number spread across the whole file"
        correct: true
        explains: "Right. Uniform sampling by position mod 400 yields exactly 100,000 rows, is reproducible without a seed, and covers every sign-up period."
      - text: "The sample is too small; load 10 million rows"
        explains: "The first 10 million are still the earliest quarter of customers. A bigger biased sample is still biased."
      - text: "Truncation is not reproducible"
        explains: "It is perfectly reproducible. Its fault is that record order carries meaning."
    work: |-
      Sorted by date: the first n rows are the oldest sign-ups.
      40,000,000 / 100,000 = 400, so keep rows whose position mod 400 equals some fixed i.
      Exact size, reproducible, and a different i gives a disjoint sample.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A university has 60% undergraduates, 30% master's students and 10% doctoral students. A stratified sample of 500 is drawn for a survey. How many doctoral students does it contain?"
    choices:
      - text: "Exactly 50"
        correct: true
        explains: "Right. Stratified sampling takes the same fraction of every group, so the sample mirrors the population: 300, 150 and 50."
      - text: "About 50, give or take several"
        explains: "That describes a simple random sample. Stratifying removes the chance variation in group sizes."
      - text: "About 167, one third of the sample"
        explains: "Equal group sizes would over-represent doctoral students threefold. The lecture's version samples proportionally."
      - text: "It cannot be known before sampling"
        explains: "With stratification the group counts are fixed in advance. That is the purpose, and why group membership must be known beforehand."
    work: |-
      500 × 0.60 = 300 undergraduates.
      500 × 0.30 = 150 master's.
      500 × 0.10 = 50 doctoral.
      Requirement: each student's group must be identified before sampling.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A stream sampler holds k = 5 items. The 50th item arrives. What is the probability that one particular item currently in the sample is evicted by this arrival?"
    choices:
      - text: "2%"
        correct: true
        explains: "Right. The newcomer is admitted with probability k/n = 5/50 = 10%, and then replaces one of the 5 positions at random, so a given item goes with probability 0.10 × 1/5 = 0.02."
      - text: "10%"
        explains: "10% is the chance the newcomer is admitted at all. It then displaces only one of five items."
      - text: "20%"
        explains: "20% is the chance of being the one chosen once the newcomer is admitted. Admission itself happens only a tenth of the time."
      - text: "90%"
        explains: "90% is the chance the newcomer is rejected, in which case nobody is evicted."
    work: |-
      P(50th admitted) = k/n = 5/50 = 0.10.
      P(particular slot chosen, given admitted) = 1/k = 1/5.
      P(evicted) = 0.10 × 0.20 = 0.02.
      P(survives) = 0.98 = (n − 1)/n = 49/50.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "You have billions of weather readings, each with a city and a temperature, and want the highest temperature recorded in each city using MapReduce. What should map and reduce do?"
    choices:
      - text: "Map emits (city, temperature) for each reading; reduce takes one city with all its temperatures and emits the maximum"
        correct: true
        explains: "Right. The key is what you group by. The framework delivers every temperature for a city to the same reducer, which can then summarise them."
      - text: "Map emits (temperature, city); reduce emits the largest key"
        explains: "With temperature as the key, readings are grouped by temperature, and no reducer sees all of one city's readings."
      - text: "Map finds the overall maximum; reduce splits it by city"
        explains: "A mapper sees one record at a time and cannot find a maximum across records. Aggregation belongs in reduce."
      - text: "Map emits (city, 1); reduce sums the values"
        explains: "That counts readings per city, as in word count. The temperature has to travel as the value."
    work: |-
      map (id, reading) → [(city, temperature)].
      Shuffle: all values with the same city go to the same reducer.
      reduce (city, [temperatures]) → [(city, max)].
      Taking a maximum of partial maxima is safe, so the same function can also serve as a combiner.
  - topic: "Week 11 · Logistic regression and scale"
    ask: "A job computes the average order value per store. One mapper holds orders of 10 and 20 for a store and another holds a single order of 60. A combiner replaces each mapper's values with their average. What does the reducer then report, and what is the true average?"
    choices:
      - text: "It reports 37.5; the true average is 30"
        correct: true
        explains: "Right. The combiners send 15 and 60, whose average is 37.5. The true figure is 90 / 3 = 30. An average of averages ignores how many values each stood for, so this combiner is unsafe."
      - text: "It reports 30; the combiner makes no difference"
        explains: "That holds for sums and counts. Averaging loses the group sizes, so early averaging changes the answer."
      - text: "It reports 45; the true average is 30"
        explains: "45 is 90 / 2, the total divided by the number of mappers. The combiners send averages, 15 and 60."
      - text: "It reports 15; the true average is 30"
        explains: "15 is only the first mapper's average."
    work: |-
      Mapper A: (10 + 20) / 2 = 15. Mapper B: 60.
      Reducer: (15 + 60) / 2 = 37.5.
      Truth: (10 + 20 + 60) / 3 = 30.
      Fix: have the combiner emit (sum, count) pairs, here (30, 2) and (60, 1), and let reduce divide 90 by 3.
---
134 multiple-choice questions across weeks 1–7 and 9–11. The paper is divided into sections, and nothing is revealed until you
submit: pick an answer for each question (you can change it as often as you like), then submit a
section to see your score for it, the correct answers, an explanation for each one you chose, and a
worked solution. You can submit one section at a time, in any order, or the whole exam at once.

There is no penalty for a wrong answer. Questions you leave blank in a section you submit count as wrong.
