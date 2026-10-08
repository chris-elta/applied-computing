---
course: data-science
title: "Data Science · Final Exam"
minutes: 90
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
---
68 multiple-choice questions across all five weeks. Nothing is revealed until you submit: pick an answer for
each question (you can change it as often as you like), then submit to see your score, the correct answer,
an explanation for the one you chose, and a worked solution.

There is no penalty for a wrong answer. Questions you leave blank count as wrong.
