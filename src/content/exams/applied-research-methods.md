---
course: applied-research-methods
title: "Applied Research Methods · Final Exam"
minutes: 80
passMark: 60
questions:
  - topic: "Week 1 · Defining research and the problem"
    ask: "A student spends two weeks collecting every blog post and white paper on serverless cold starts and arranges them into a tidy wiki. By the lecture's definition, why is this not research?"
    choices:
      - text: "Blog posts are not peer-reviewed"
        explains: "The sources matter, but even a wiki of peer-reviewed papers would still not be research."
      - text: "Nothing was collected, analysed and interpreted to answer a question, and no new finding is communicated"
        correct: true
        explains: "Right. Moving facts from one place to another is documentation and organisation. Research is a systematic process that ends in a finding others can read."
      - text: "Two weeks is too short for research"
        explains: "Length is not the test. A short study with a question, data and a finding is research."
      - text: "Serverless computing is not a research topic"
        explains: "It can be. The problem is what was done with the topic, not the topic itself."
    work: |-
      Research is a systematic process of collecting, analysing and interpreting data to increase understanding, and communicating what was found.
      The wiki gathers information and moves facts from one place to another.
      The lecture names exactly this as documentation and organisation, not research.
      No question was posed, no data were analysed, and nothing new is reported.
  - topic: "Week 1 · Defining research and the problem"
    ask: "After interviewing five developers at one start-up, a student concludes that “developers prefer trunk-based development”. Which reasoning pitfall is this?"
    choices:
      - text: "Generalising about a whole category from a restricted subset"
        correct: true
        explains: "Right. Five developers at one company is a narrow subset. This is the inductive pitfall."
      - text: "Confusing what must be true with what seems true"
        explains: "That is the deductive pitfall. Here the error is in generalising from observations."
      - text: "Mistaking correlation for causation"
        explains: "No causal claim is made. The claim is about a whole category."
      - text: "Mistaking dogma for fact"
        explains: "Nothing here is taken on authority. It is a generalisation from a small, unrepresentative sample."
    work: |-
      Inductive reasoning moves from observations to a broader generalisation.
      Its characteristic failure is generalising about a whole category from a restricted subset.
      Five people at one start-up cannot stand for all developers.
      The fix is a sample that represents the population the claim is about (Week 4).
  - topic: "Week 1 · Defining research and the problem"
    ask: "Which proposal is applied rather than basic research?"
    choices:
      - text: "Characterise why certain graph structures make shortest-path heuristics fail"
        explains: "This aims at understanding how something works, which is basic research."
      - text: "Explain why human working memory limits the number of variables programmers can track"
        explains: "This aims to enhance basic knowledge of the psychological world."
      - text: "Develop a theory of how open-source communities form"
        explains: "Theory-building about a social phenomenon is basic research."
      - text: "Determine whether moving our CI pipeline to incremental builds reduces median merge time enough to justify the migration"
        correct: true
        explains: "Right. It addresses an issue with immediate relevance to current practice, and the answer supports a decision."
    work: |-
      Basic research enhances knowledge of the physical, biological, psychological or social world.
      Applied research addresses issues with immediate relevance to current practices, procedures or policies.
      The CI question exists to make a decision about one team's pipeline.
      Success means a decision can be made, so it is applied.
  - topic: "Week 1 · Defining research and the problem"
    ask: "Which candidate problem is closest to what the lecture says to avoid?"
    choices:
      - text: "Which characteristics of incident reports predict how long an outage takes to resolve, and by how much?"
        explains: "This has several possible answers and points to an application, so it meets the criteria."
      - text: "How does the size of a code change affect review quality, and at what size does quality fall off?"
        explains: "This asks how much and under what conditions, which is what a good problem does."
      - text: "Is there a relationship between commit frequency and bug count?"
        correct: true
        explains: "Right. It is a yes-or-no question, and answering it means calculating a correlation just to show two sets of data are related. Either answer changes nothing."
      - text: "Which onboarding practices shorten the time for new hires to make a first merged change?"
        explains: "This asks which factors matter, with a practical use for the answer."
    work: |-
      The lecture lists things to avoid: self-enlightenment, merely comparing two data sets, computing a correlation just to show a relationship, and yes-or-no questions.
      “Is there a relationship?” is both a yes-or-no question and a bare correlation.
      Imagine both answers: you would do the same thing either way.
      Better versions ask which factors matter, how much, and under what conditions.
  - topic: "Week 1 · Defining research and the problem"
    ask: "A student lists the subproblems of a study on API latency. Which item is a pseudo-subproblem?"
    choices:
      - text: "How does payload size affect median response time?"
        explains: "This is answerable from data and tied to its interpretation, so it is a real subproblem."
      - text: "Which load-testing tool should the study use?"
        correct: true
        explains: "Right. It is a decision to make before the work, and answering it yields no data. It belongs in the plan."
      - text: "Does latency differ between the two data centres?"
        explains: "This is a researchable unit with data that would answer it."
      - text: "How does connection pooling change tail latency under load?"
        explains: "This is a real subproblem: data answer it, and it contributes to the main problem."
    work: |-
      A subproblem is a completely researchable unit, tied to the interpretation of data.
      A pseudo-subproblem is a procedural decision that must be made before the work.
      Test each item: what data would answer this?
      For the tool choice the answer is “none, it is a choice we make”, so it is a pseudo-subproblem.
  - topic: "Week 1 · Defining research and the problem"
    ask: "A proposal says its results apply to “mobile users”. The tests were all run on one phone model on office Wi-Fi. What is missing?"
    choices:
      - text: "A stated assumption and a delimitation that tell the reader where the conclusions stop applying"
        correct: true
        explains: "Right. The study takes a device and a network for granted. Saying so, and stating what is out of scope, lets readers judge the result."
      - text: "A longer literature review"
        explains: "The literature review does not fix a mismatch between what was tested and what is claimed."
      - text: "A hypothesis"
        explains: "A hypothesis says what would count as an answer. The gap here is where the answer applies."
      - text: "More test runs on the same phone"
        explains: "More runs on one phone do not widen what the result covers."
    work: |-
      Assumptions with a material bearing on the problem must be stated openly, because others need them to evaluate the conclusions.
      Delimitations say what the study is not going to do.
      One phone and one network are assumptions that limit the result.
      Stating them, and delimiting the claim, makes the proposal honest and checkable.
  - topic: "Week 1 · Defining research and the problem"
    ask: "A study's result depends on the researcher hand-picking “suspicious-looking” log entries, using a judgement they never wrote down. Which criterion does it fail?"
    choices:
      - text: "Feasibility: it takes too long"
        explains: "Nothing suggests it is slow. The problem is that nobody else could do it."
      - text: "Delimitation: it covers too much"
        explains: "The scope is not the issue. The procedure cannot be repeated."
      - text: "It fails nothing, because expert judgement is a valid method"
        explains: "Judgement can be part of a method, but only once it is written down well enough for another competent person to apply."
      - text: "Universality: it could not be carried out by any competent person"
        correct: true
        explains: "Right. The result relies on unwritten judgement only this researcher has. Writing the procedure down so others' judgement would match is the fix."
    work: |-
      Universality asks whether any competent person could carry out the project.
      The researcher is meant to be a catalyst who collects and reports what the data indicate, not part of the result.
      A private, unwritten judgement fails that test, and so a replication is impossible too.
  - topic: "Week 1 · Defining research and the problem"
    ask: "Which rewrite of “I don't really want to do too much testing on old browsers.” best fits the lecture's advice on academic writing?"
    choices:
      - text: "“Testing on old browsers won't be done much.”"
        explains: "Still vague and still conversational: “much” is not precise."
      - text: "“Old browsers: not tested.”"
        explains: "A fragment. It also loses the reasoning a reader needs."
      - text: "“Browsers released before 2022 are outside the scope of this study.”"
        correct: true
        explains: "Right. It is precise, written rather than spoken, and it turns the sentence into a delimitation, which is what the proposal needed."
      - text: "“I will try to avoid testing old browsers too much.”"
        explains: "It is still writing as you speak, and “too much” says nothing measurable."
    work: |-
      The lecture's example rewrites “I don't intend to do too much optimization” as “Optimizing the code will generally be outside the scope of the project.”
      The repair removes the conversational tone and states a scope decision.
      The same move here: name precisely what is excluded.
  - topic: "Week 1 · Defining research and the problem"
    ask: "A paper's conclusion claims its scheduler “eliminates” tail latency. The results section shows one run, with no error bars, on one workload. What is the best reading?"
    choices:
      - text: "The claim is probably false"
        explains: "You cannot tell that either. A lack of evidence is not evidence against."
      - text: "The body has not earned the conclusion: the results do not support the strength of the claim, and errors and uncertainty are not reported"
        correct: true
        explains: "Right. Read the conclusion, then check whether the body earned it. One run with no uncertainty cannot support “eliminates”."
      - text: "The claim must be true, since the paper was published"
        explains: "Publication does not mean the body earned the conclusion. That is what critical reading checks."
      - text: "The abstract will settle it"
        explains: "The abstract summarises the paper's claims. It cannot add evidence the body lacks."
    work: |-
      The lecture's checks for a paper's body: is the approach repeatable, do the results form the basis for the claims, and are errors and uncertainties reported?
      One run on one workload, with no error bars, fails the last two.
      The claim may or may not be true, but this paper has not shown it.
  - topic: "Week 2 · The literature review"
    ask: "A student plans to write their own questionnaire to measure developer burnout. Which benefit of a literature review are they about to miss?"
    choices:
      - text: "Finding measurement tools others have developed and validated"
        correct: true
        explains: "Right. The review tells you how to do the study, including instruments that already exist. A validated scale beats one written from scratch."
      - text: "Learning who else works in the area"
        explains: "Useful, but the specific loss here is an existing instrument."
      - text: "Learning how to interpret findings"
        explains: "That benefit comes at the end of the study. The loss here is at the design stage."
      - text: "Gaining confidence that the topic is worth studying"
        explains: "True of any review, but not the benefit at stake when you are about to build an instrument."
    work: |-
      The lecture groups the review's benefits: about the problem, about how to do the study, and about the results.
      The second group includes methodology, data sources, assessment strategies and measurement tools others developed.
      Writing a new burnout questionnaire ignores validated instruments that likely exist.
      This is the group of benefits students most often forget.
  - topic: "Week 2 · The literature review"
    ask: "Where does Wikipedia belong in a literature search, according to the lecture?"
    choices:
      - text: "As a source to cite for widely accepted facts"
        explains: "It is not peer-reviewed, and the lecture says it must not be used as an authoritative source."
      - text: "Nowhere; it should be avoided entirely"
        explains: "The lecture recommends it for general overviews."
      - text: "Only for computing topics, where it is accurate"
        explains: "The rule does not depend on the topic."
      - text: "As a general overview to learn the vocabulary and find the real sources, never as a cited authority"
        correct: true
        explains: "Right. It is a map, not a source."
    work: |-
      The lecture lists Wikipedia as useful for general overviews.
      It is not peer-reviewed and must not be used as an authoritative source.
      Use it to learn terms and to find the papers it points to, then cite those.
  - topic: "Week 2 · The literature review"
    ask: "Three weeks into a search, every new paper cites the same handful of authors and makes familiar arguments. But every search so far used one database and one set of keywords. What should the student do?"
    choices:
      - text: "Stop searching for good; the review is complete"
        explains: "The repetition may only mean one corner has been explored. And the lecture says to keep looking for new reports as the project runs."
      - text: "Read every paper in the database regardless"
        explains: "That is not a stopping rule at all. The signs of saturation are valid once the search was broad."
      - text: "Run a quick search with different keywords or another database before treating the preliminary review as done, and keep watching for new work"
        correct: true
        explains: "Right. Repetition is evidence about the area you searched. A different search tests whether it reflects the whole field."
      - text: "Switch topics, since the area is exhausted"
        explains: "Familiar arguments mean the literature is understood, not that the topic has nothing left."
    work: |-
      The signs of enough: repetitive patterns, familiar arguments and methods, the same key researchers cited, no new viewpoints.
      But repetition from one database and one keyword set may only describe that corner.
      A quick search with different terms tests it.
      Even then, it is the preliminary review that stops. Keep looking for new reports.
  - topic: "Week 2 · The literature review"
    ask: "A draft review has one paragraph per paper in publication order, each summarising the paper's own conclusion. What would most improve it?"
    choices:
      - text: "Adding more papers"
        explains: "A longer list is still a list."
      - text: "Organising by idea: comparing positions, describing trends, and explaining why studies disagree, after checking whether each conclusion is justified by its data"
        correct: true
        explains: "Right. Synthesis is organised by idea, not paper, and it never takes conclusions at face value."
      - text: "Quoting each paper's abstract directly"
        explains: "The lecture says to minimise direct quotations."
      - text: "Sorting the papers alphabetically by author"
        explains: "A different order of summaries is still a set of summaries."
    work: |-
      The lecture's first rule: decide for yourself whether conclusions are justified by the data.
      Then synthesise: compare and contrast positions, show change over time, describe trends, explain discrepancies, identify themes.
      The unit is the idea. One paper may appear under several themes.
  - topic: "Week 2 · The literature review"
    ask: "Which practice does the lecture give for using someone else's published literature review?"
    choices:
      - text: "Track down references cited by three or more researchers, then read the original sources"
        correct: true
        explains: "Right. Other reviews find the important papers. You still read them yourself, because a summary is someone's reading."
      - text: "Cite the review's summary of each study, since the reviewer has already read them"
        explains: "Summaries drift and authors can misrepresent others' work. Go to the original."
      - text: "Avoid other reviews, since they bias your own"
        explains: "The lecture recommends them as a shortcut to what is important."
      - text: "Copy the review's structure for your own"
        explains: "Your review must relate the literature to your problem, which theirs does not."
    work: |-
      Procedure: track down references cited by three or more other researchers.
      Go to the original source and read it whenever possible.
      Beware of authors misrepresenting a particular researcher's work.
  - topic: "Week 3 · Research design and measurement"
    ask: "Across 200 companies, those with more on-call rotations report lower developer satisfaction. What may the researcher conclude?"
    choices:
      - text: "On-call rotations cause lower satisfaction"
        explains: "Nothing was manipulated or randomly assigned. A third factor, such as an unreliable product, could drive both."
      - text: "Nothing at all, because correlational data are worthless"
        explains: "Correlational research is often the only practical design and is a good way to find what is worth testing."
      - text: "Low satisfaction causes companies to add rotations"
        explains: "Reversing the arrow is still a causal claim, and the design cannot support one in either direction."
      - text: "The two variables are related in these companies, which suggests a possible cause worth testing more tightly"
        correct: true
        explains: "Right. Correlational research answers what goes with what, not what makes what happen."
    work: |-
      Correlational research examines how differences in one variable relate to differences in another.
      With no manipulation and no random assignment, an unmeasured third factor could explain the pattern.
      Correlation ≠ causation: the design decides what you may conclude.
  - topic: "Week 3 · Research design and measurement"
    ask: "A researcher compares the debugging habits of first-year, third-year and final-year students, all surveyed in the same month, and concludes that habits change with experience. What is the main threat?"
    choices:
      - text: "Participants will drop out over the years"
        explains: "That is a longitudinal problem. Everyone here was surveyed at once."
      - text: "Participants get used to the instrument"
        explains: "That happens when the same people are measured repeatedly, which is not the case here."
      - text: "The groups are different people, who may differ in more than experience, such as the curriculum they were taught"
        correct: true
        explains: "Right. A cross-sectional design compares different groups, so group differences threaten internal validity."
      - text: "It takes too long to collect"
        explains: "Speed is the cross-sectional design's strength."
    work: |-
      Cross-sectional: different age or experience groups, measured once. Easy, but the groups may differ in life experience.
      Here, older students may have had a different curriculum, which could produce the difference.
      Longitudinal designs avoid this by following the same people, at the cost of time and attrition.
  - topic: "Week 3 · Research design and measurement"
    ask: "A study assigns each user, at random, a recommendation list of 5, 10 or 20 items and measures how many items they click. Which is the dependent variable?"
    choices:
      - text: "The number of items in the list"
        explains: "That is what the researcher chose and changed, so it is the independent variable."
      - text: "The number of items each user clicks"
        correct: true
        explains: "Right. It is what the researcher waits to see, potentially influenced by the list length."
      - text: "Random assignment"
        explains: "That is a control strategy, not a variable."
      - text: "The users"
        explains: "The users are the participants. The variables are what is set and what is measured about them."
    work: |-
      Independent variable: what the researcher manipulates as the possible cause (list length: 5, 10 or 20).
      Dependent variable: what may be influenced by it (clicks).
      Quick check: which did I choose, and which did I wait to see?
  - topic: "Week 3 · Research design and measurement"
    ask: "Volunteers try a new IDE plugin, and their productivity is compared with non-volunteers'. The volunteers turn out more productive. Which control would most directly have prevented the doubt about this result?"
    choices:
      - text: "Random assignment to the plugin and no-plugin groups"
        correct: true
        explains: "Right. Volunteers may be keener or more skilled. Random assignment spreads such differences across both groups, including ones nobody thought of."
      - text: "Keeping the task constant"
        explains: "Helpful, but it does not remove the difference between people who volunteered and those who did not."
      - text: "A larger sample of volunteers"
        explains: "More volunteers are still volunteers. Size does not fix a confound."
      - text: "Measuring productivity more often"
        explains: "More measurement does not make the groups comparable."
    work: |-
      Self-selection is a confounding variable: something other than the plugin that differs between the groups.
      Of the six strategies, random assignment is the one that works on confounds you have not thought of.
      Without it, this is close to a static group comparison, a pre-experimental design.
  - topic: "Week 3 · Research design and measurement"
    ask: "A team measures build times for one month, introduces a new cache, and measures for another month. Build times are lower afterwards. Which design is this, and what is its weakness?"
    choices:
      - text: "A true experiment, so the cache caused the drop"
        explains: "There is no control group and no random assignment."
      - text: "A one-shot case study, with nothing to compare"
        explains: "There is a before-measurement here, which a one-shot case study lacks."
      - text: "A Solomon four-group design"
        explains: "That needs four groups, two of them without a pretest."
      - text: "A one-group pretest-posttest design; anything else that changed during the period looks like the cache's effect"
        correct: true
        explains: "Right. A before and an after is better than one measurement, but a dependency upgrade or a lighter workload could explain the drop."
    work: |-
      Observation, treatment, observation, for one group: the one-group pretest-posttest design.
      It is pre-experimental: there is no comparison group, so anything that changed in between is confounded with the treatment.
      Measuring many times before and after (a simple time series, Design 9) would at least show whether a trend was already under way.
  - topic: "Week 3 · Research design and measurement"
    ask: "A company cannot randomly assign teams to a new review process, so it rolls the process out to team A in March, team B in May and team C in July, and measures defect rates throughout. Why is this design persuasive?"
    choices:
      - text: "Because it uses random assignment"
        explains: "It does not. The order of teams was chosen."
      - text: "Because three teams is a large sample"
        explains: "Three is small. The strength comes from the timing, not the count."
      - text: "If each team's defects drop exactly when that team starts, a coincidence becomes hard to sustain"
        correct: true
        explains: "Right. This is a multiple-baseline design. Staggered starts replace one comparison with several."
      - text: "Because it removes all confounding variables"
        explains: "Quasi-experimental designs cannot control for all confounds. They reduce the doubt by adding observations over time."
    work: |-
      Quasi-experimental designs are for when randomisation is not possible.
      A multiple-baseline design starts the treatment at different times for different groups.
      If the measure changes at each group's own start, an outside event is an unlikely explanation, since it would have to coincide three times.
  - topic: "Week 3 · Research design and measurement"
    ask: "Which measurement is on a ratio scale?"
    choices:
      - text: "A bug's severity rated low, medium, high or critical"
        explains: "The order is known but not the distances. That is ordinal."
      - text: "Memory used by a process, in megabytes"
        correct: true
        explains: "Right. Equal units and an absolute zero, so 400 MB is twice 200 MB."
      - text: "Satisfaction on a 1–7 agreement scale"
        explains: "Rating scales are commonly assumed to be interval, not ratio. There is no true zero."
      - text: "The programming language each project uses"
        explains: "Names with no order: nominal."
    work: |-
      Nominal: names. Ordinal: rank order. Interval: equal units, arbitrary zero. Ratio: equal units and an absolute zero.
      Memory has a true zero (none used), so ratios make sense.
      Ratio data support every statistic the lower scales do, plus statements about multiples.
  - topic: "Week 3 · Research design and measurement"
    ask: "A team uses “number of tickets closed” to measure engineer productivity. It gives the same number every time it is computed for the same week. What can you say?"
    choices:
      - text: "It is reliable, but that does not show it is valid: closing many trivial tickets may not be productivity"
        correct: true
        explains: "Right. Repeatable is not the same as right. Validity asks whether it measures what is intended."
      - text: "It is reliable, and it is also valid"
        explains: "Reliability does not imply validity. A measure can be consistently wrong."
      - text: "It is valid but not reliable"
        explains: "The scenario says it gives the same result every time, which is reliability."
      - text: "It is neither"
        explains: "It is clearly reliable. Whether it is valid is the open question."
    work: |-
      Reliability: the same result when the thing measured has not changed.
      Validity: it measures what it is intended to measure.
      A reliable measure can sit consistently off-target, like a scale that always reads 2 kg heavy.
      An unreliable one cannot be valid, but a reliable one is not automatically valid.
  - topic: "Week 3 · Research design and measurement"
    ask: "A study compares developers who already use pair programming with those who do not, and also randomly assigns each developer to one of two code-review tools. What kind of design is this?"
    choices:
      - text: "A true experiment"
        explains: "Pair programming was not assigned, so only part of the design is experimental."
      - text: "A correlational study"
        explains: "One variable is directly manipulated with random assignment, which correlational research never does."
      - text: "A simple ex post facto design"
        explains: "That would have no manipulated variable at all."
      - text: "A combined experimental and ex post facto factorial design"
        correct: true
        explains: "Right. Two independent variables in one study (factorial): one manipulated (the tool), one already present (pair programming)."
    work: |-
      Factorial: two or more independent variables in one study.
      Ex post facto: the presumed cause has already occurred, so it cannot be manipulated (pair programming).
      Experimental: the researcher manipulates and randomly assigns (the review tool).
      Together this is Design 16, the combined experimental and ex post facto design.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "Two observers watch the same usability sessions and record when a user is “frustrated”. Their counts differ widely. What does the lecture recommend?"
    choices:
      - text: "Average the two counts"
        explains: "Averaging hides the disagreement instead of removing its cause."
      - text: "Use only the more experienced observer"
        explains: "That makes the data depend on one person's judgement, which nobody can check."
      - text: "Define the behaviour precisely and concretely, and train the raters on specific criteria until they agree"
        correct: true
        explains: "Right. A concrete definition (for example, a pause over ten seconds or opening help) plus training makes ratings consistent."
      - text: "Switch to a questionnaire"
        explains: "That changes the method rather than fixing the observation."
    work: |-
      Observation studies keep objectivity with five practices.
      Two of them: define the behaviour precisely, and train raters until they agree on any single occurrence.
      Independent raters agreeing is a check on reliability (Week 3).
  - topic: "Week 4 · Collecting and analysing data"
    ask: "A researcher wants to know how developers' focus varies across a working day. Which method does the lecture describe for this, and why?"
    choices:
      - text: "A single end-of-week survey, because it is cheapest"
        explains: "It relies on memory, which flattens and distorts how focus varied."
      - text: "Experience sampling, because brief, frequent prompts during the activity capture short-term changes and improve accuracy"
        correct: true
        explains: "Right. Reporting in the moment avoids recall, and repeated assessments improve test-retest reliability."
      - text: "Social network analysis, because developers work in teams"
        explains: "That studies relationships between people, not one person's experience over time."
      - text: "A face-to-face interview at the end of the month"
        explains: "It relies even more heavily on memory."
    work: |-
      Experience sampling collects data frequently and on an ongoing basis from people engaged in the activity.
      Advantages: accuracy and validity, multiple assessments for test-retest reliability, and short-term changes within a longitudinal study.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "Students rate “the lab instructions were clear” from 1 to 5. Most choose 4, and the course team does not know what to fix. Which weakness of rating scales is this?"
    choices:
      - text: "The scale gives no information about why participants respond as they do"
        correct: true
        explains: "Right. A rating says how much, not why. An open question or follow-up interview would explain it."
      - text: "The scale has too few points"
        explains: "More points would give a finer rating, still without a reason."
      - text: "Ratings cannot be analysed statistically"
        explains: "Rating scales are commonly assumed to be interval, which supports means and standard deviations."
      - text: "There is no neutral option"
        explains: "A 1–5 scale has a midpoint. The neutral-option debate is about something else."
    work: |-
      A rating scale is quick, and the lecture names its weaknesses.
      It gives no information about why people answer as they do.
      People also disagree about what the points mean.
      A rubric addresses the second weakness with concrete descriptions of each level, but neither fixes the first.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "Which interviewing practice follows the lecture's guidelines?"
    choices:
      - text: "Open with the most sensitive question, to get it out of the way"
        explains: "The lecture says to save controversial questions for the latter part of the interview."
      - text: "Ask “Don't you agree the old process was frustrating?” to build rapport"
        explains: "That puts words in the interviewee's mouth."
      - text: "React warmly to answers you agree with, to encourage openness"
        explains: "The lecture says to keep your reactions to yourself. Reactions steer later answers."
      - text: "Ask about a specific recent deployment rather than deployments in general, and record the answers verbatim"
        correct: true
        explains: "Right. Focus on the actual rather than the abstract or hypothetical, and record verbatim."
    work: |-
      Guidelines include: focus on the actual, not the hypothetical; do not put words in people's mouths; one idea per question; keep your reactions to yourself; save controversial questions for later; record verbatim.
      And remember you are not necessarily getting the facts. You are getting an account.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "A company has 600 front-end, 300 back-end and 100 operations engineers. A proportional stratified sample of 50 would contain how many from each group?"
    choices:
      - text: "17, 17 and 16"
        explains: "That is roughly equal sampling from each stratum, which is stratified random sampling, not proportional."
      - text: "60, 30 and 10"
        explains: "Those are the percentages, which add to 100, not to a sample of 50."
      - text: "30, 15 and 5"
        correct: true
        explains: "Right. Each group is sampled in proportion to its size: 60%, 30% and 10% of 50."
      - text: "50 from front-end only, since it is the largest"
        explains: "That leaves the other strata out entirely."
    work: |-
      Population: 600 + 300 + 100 = 1000. Proportions: 0.6, 0.3, 0.1.
      Proportional stratified sample of 50: 0.6 × 50 = 30, 0.3 × 50 = 15, 0.1 × 50 = 5.
      Equal stratified sampling would take about 17 from each, overrepresenting operations.
      Which is better depends on whether you describe the whole company or compare the groups.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "A student surveys the members of their own study group about AI coding assistants and reports the results as what “students think”. What does the lecture require?"
    choices:
      - text: "Nothing, as long as the group is larger than 30"
        explains: "Size does not make a convenience sample representative."
      - text: "That the student acknowledge it as a convenience sample, which suits only less demanding problems and cannot be assumed representative"
        correct: true
        explains: "Right. Without chance doing the choosing, the reader must be told how the sample was chosen in order to judge it."
      - text: "That the results be discarded"
        explains: "Convenience samples have uses. They must be reported honestly and claims limited."
      - text: "That the student call it a purposive sample"
        explains: "Purposive sampling needs a stated rationale for choosing those people. Convenience is not one."
    work: |-
      A convenience sample takes whoever is readily available.
      The lecture reserves it for less demanding problems.
      Representativeness cannot be calculated, so you must say how the sample was formed and limit the claim.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "A team wants to survey the 80 developers in its department. Following the lecture's rules of thumb, how many should it survey?"
    choices:
      - text: "All 80"
        correct: true
        explains: "Right. For a population of 100 or fewer, survey the entire population."
      - text: "About 40, half the population"
        explains: "The 50% guideline is for a population of about 500."
      - text: "About 16, 20% of the population"
        explains: "The 20% guideline is for a population of about 1,500."
      - text: "400"
        explains: "That is the guideline for populations over 5,000, and it exceeds this population."
    work: |-
      Rules of thumb: N ≤ 100, survey everyone; about 500, 50%; about 1,500, 20%; over 5,000, 400 is fine.
      N = 80, so survey all 80.
      As populations grow, the percentage needed falls and the total levels off.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "A questionnaire asks, “How much has the new deployment pipeline improved your productivity?” with options from “slightly” to “greatly”. Which bias does this introduce?"
    choices:
      - text: "Sampling bias"
        explains: "Nothing here concerns who answered. The problem is in the instrument."
      - text: "Response bias only"
        explains: "Respondents may well answer honestly. It is the instrument that slants the result."
      - text: "No bias, because respondents can skip the question"
        explains: "Those who answer can still only report improvement."
      - text: "Assessment bias: the instrument slants results one way, offering no way to answer that it did not help or made things worse"
        correct: true
        explains: "Right. The question assumes improvement and offers only positive options."
    work: |-
      Sampling bias: a nonrepresentative sample. Assessment bias: an assessment strategy slanting results one way. Response bias: participants making inaccurate statements.
      The question has an unwarranted assumption built in, and the scale only offers positive options.
      The questionnaire guidelines say to check for unwarranted assumptions and give no clues about the preferred answer.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "A survey's early responses rate a new tool highly. Responses that arrived after two reminders are noticeably less positive. What does this suggest?"
    choices:
      - text: "The late responses are errors and should be dropped"
        explains: "They are data. Dropping them would hide the very signal the check exists to find."
      - text: "Nothing, since response timing is random"
        explains: "The lecture uses timing as a deliberate check, because late responders may resemble non-responders."
      - text: "Non-respondents may be less positive still, so the overall results probably overstate satisfaction"
        correct: true
        explains: "Right. Late responders may resemble those who never replied. If the late ones differ, the missing people likely do too."
      - text: "The reminders caused negative feelings, so only early responses count"
        explains: "That is possible but unsupported, and discarding data on that basis biases the result."
    work: |-
      Checking for sampling bias: compare responses that came back quickly with those that came back later.
      Late responders may resemble non-respondents.
      Here they differ, so the people who never replied probably differ too, and the respondents overstate satisfaction.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "Five API calls take 3, 4, 4, 5 and 34 ms. What are the mean and median, and which better describes a typical call?"
    choices:
      - text: "Mean 4, median 10; the mean"
        explains: "That swaps them. The mean is pulled up by the 34; the median is the middle value."
      - text: "Mean 10, median 4; the median, because the mean is pulled up by one extreme value"
        correct: true
        explains: "Right. The mean is above four of the five values. Report both, and note the outlier."
      - text: "Mean 10, median 4; the mean, because it uses all the data"
        explains: "Using all values is exactly why one outlier distorts it."
      - text: "Mean 4, median 4; either"
        explains: "4 is the median and the mode. The mean is (3 + 4 + 4 + 5 + 34) / 5 = 10."
    work: |-
      Mean = (3 + 4 + 4 + 5 + 34) / 5 = 50 / 5 = 10.
      Median: the middle of the sorted values, 4.
      The mean is pulled by extreme values; four of the five calls are well below 10.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "Data are rankings of five tools from 1st to 5th. Which statistics are appropriate?"
    choices:
      - text: "Nonparametric statistics, such as the median and Spearman's rank correlation"
        correct: true
        explains: "Right. Ordinal data call for nonparametric tools."
      - text: "Parametric statistics, such as the mean and Pearson's r"
        explains: "Parametric statistics need interval or ratio data in a normal distribution. Ranks are ordinal."
      - text: "Either, as long as the sample is large"
        explains: "Sample size does not change the scale. Ranks remain ordinal."
      - text: "Only the mode, since rankings are nominal"
        explains: "Rankings have an order, so they are ordinal, not nominal."
    work: |-
      Parametric: interval or ratio data AND a normal distribution.
      Nonparametric: ordinal data OR a nonnormal distribution.
      Ranks are ordinal, so use the median, percentiles and Spearman's rank-order correlation.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "A new spam rule is tested. In truth it makes no difference, but the test reports a significant improvement and the rule is deployed. What has happened?"
    choices:
      - text: "A Type II error: a real effect was missed"
        explains: "There was no real effect to miss. A Type II error fails to reject a false null."
      - text: "A correct decision, since the test was significant"
        explains: "Significance does not guarantee truth. Given the null is true, rejecting it is an error."
      - text: "A sampling bias"
        explains: "Bias may or may not be involved. The decision error itself is a Type I error."
      - text: "A Type I error: the null hypothesis was true and was rejected"
        correct: true
        explains: "Right. A false alarm: the result was due to chance and was taken as real."
    work: |-
      Type I: rejecting a null hypothesis that is actually true (false alarm).
      Type II: failing to reject a null that is actually false (miss).
      The rule truly does nothing, yet the null was rejected: Type I.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "A team runs 10 independent tests at α = 0.05 on metrics where, in truth, nothing has changed. What is the chance at least one comes out significant?"
    choices:
      - text: "5%"
        explains: "That is the chance for a single test. Each extra test adds another chance of a false alarm."
      - text: "50%"
        explains: "Close, but not the calculation: it is 1 − 0.95¹⁰."
      - text: "About 40%"
        correct: true
        explains: "Right. 1 − 0.95¹⁰ ≈ 0.40. Testing more hypotheses increases the probability of at least one Type I error."
      - text: "0%, since nothing changed"
        explains: "Tests on unchanged data still produce false alarms at rate α each."
    work: |-
      P(no false alarm in one test) = 0.95.
      P(no false alarm in 10 independent tests) = 0.95¹⁰ ≈ 0.599.
      P(at least one) = 1 − 0.599 ≈ 0.40.
      State the hypotheses and number of tests in advance, and report all of them.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "With 2 million users, an A/B test finds that a new layout increases session length by 0.4 seconds, p < 0.001. What should the report add?"
    choices:
      - text: "Nothing; the p-value shows the effect is important"
        explains: "A p-value says chance is an unlikely explanation. It does not say the effect matters."
      - text: "A judgement of practical significance: whether 0.4 seconds is big enough to matter to anyone"
        correct: true
        explains: "Right. With a large enough sample, a trivially small difference reaches significance. Interpretation must address both."
      - text: "A retest with a smaller sample, to confirm it"
        explains: "A smaller sample loses power. The issue is the size of the effect, not its reality."
      - text: "A note that the result is a Type I error"
        explains: "There is no evidence of that. The effect is probably real, just small."
    work: |-
      Interpretation has four jobs: relate to the problem, relate to the literature, judge practical as well as statistical significance, and identify limitations.
      A test detects that a difference is not zero, not that it is important.
      0.4 seconds is detectable with 2 million users, and may not be worth anything.
  - topic: "Week 4 · Collecting and analysing data"
    ask: "Twelve studies of pair programming report results as minutes saved, defects per KLOC and a 1–7 satisfaction score. What must a meta-analysis do before pooling them?"
    choices:
      - text: "Convert each study's results to a common statistical index"
        correct: true
        explains: "Right. Different units cannot be pooled until each result is expressed as the same kind of number."
      - text: "Keep only the studies that agree with each other"
        explains: "That is a biased review with more arithmetic. Discrepancies should be explained, not hidden."
      - text: "Average the raw numbers directly"
        explains: "Minutes, defect rates and satisfaction scores are not on the same scale."
      - text: "Use only the largest study"
        explains: "That throws away what a meta-analysis is for: pooling to gain power."
    work: |-
      Meta-analysis steps: extensive search; identify appropriate studies; convert results to a common index; posit explanations for discrepancies; describe methods and findings in detail.
      Pooling different units is meaningless until they are converted.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "Developer A closed 48 tickets in a team with mean 40 and σ = 4. Developer B closed 30 tickets in a team with mean 24 and σ = 2. Who is further above their own team, in standard-deviation terms?"
    choices:
      - text: "A, because 48 is more than 30"
        explains: "Raw counts are on different scales. Compare z-scores instead."
      - text: "They are equal"
        explains: "Both are above the mean, but by different numbers of standard deviations."
      - text: "A, with z = 8, against B's z = 6"
        explains: "Those are raw differences. Divide each by its team's σ."
      - text: "B, with z = 3, against A's z = 2"
        correct: true
        explains: "Right. A: (48 − 40) / 4 = 2. B: (30 − 24) / 2 = 3."
    work: |-
      z = (X − μ) / σ.
      A: (48 − 40) / 4 = 8 / 4 = 2.
      B: (30 − 24) / 2 = 6 / 2 = 3.
      B is three standard deviations above their team; A is two.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "A server's response times have a known σ = 40 ms. A sample of 64 requests has mean 250 ms. What is the 95% confidence interval for the mean response time?"
    choices:
      - text: "(171.6, 328.4) ms"
        explains: "That uses σ = 40 instead of the standard deviation of the mean, σ/√n = 5."
      - text: "(245, 255) ms"
        explains: "That is 250 ± 5, the standard deviation of the mean without multiplying by z*."
      - text: "(240.2, 259.8) ms"
        correct: true
        explains: "Right. 250 ± 1.96 × 40/√64 = 250 ± 9.8."
      - text: "(237.1, 262.9) ms"
        explains: "That uses z* = 2.576, which is for 99% confidence."
    work: |-
      x̄ ± z* · σ/√n.
      σ/√n = 40 / √64 = 40 / 8 = 5.
      Margin = 1.96 × 5 = 9.8.
      Interval: 250 − 9.8 = 240.2 to 250 + 9.8 = 259.8.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "A 95% confidence interval from 100 observations has a margin of error of 6. Assuming σ stays the same, roughly how many observations are needed to get a margin of 3?"
    choices:
      - text: "200"
        explains: "Doubling n shrinks the margin by √2, about 1.41, not by 2."
      - text: "400"
        correct: true
        explains: "Right. The margin scales with 1/√n, so halving it needs four times the data."
      - text: "150"
        explains: "That would shrink the margin only by a factor of about 1.22."
      - text: "10,000"
        explains: "That would cut the margin by a factor of 10."
    work: |-
      Margin = z* · σ/√n, so it is proportional to 1/√n.
      To halve the margin, √n must double, so n must quadruple.
      100 × 4 = 400.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "A report says: “The 95% confidence interval for mean page-load time is 1.8 to 2.2 s, so there is a 95% probability the true mean is in this range.” What is wrong?"
    choices:
      - text: "Once computed, the interval either contains the fixed true mean or it does not; the 95% describes how often the method captures it"
        correct: true
        explains: "Right. Confidence belongs to the procedure: about 95% of intervals built this way contain μ."
      - text: "Nothing; that is what 95% confidence means"
        explains: "That is the tempting reading the lecture rejects."
      - text: "It should say 5% probability"
        explains: "The issue is not the number but what the probability is about."
      - text: "Confidence intervals say nothing about the mean"
        explains: "They estimate it. The question is how to read the confidence level."
    work: |-
      Before sampling, the interval is random and has a 95% chance of covering μ.
      After sampling, both the interval and μ are fixed, so the probability is 0 or 1.
      Not knowing μ does not turn it into a probability.
      Say instead: “We used a method that captures the true mean 95% of the time, and this is the interval it gave.”
  - topic: "Week 5 · Estimation and significance testing"
    ask: "In a random sample of 400 visitors, 80 click a banner. What is the 95% confidence interval for the click-through proportion?"
    choices:
      - text: "(0.180, 0.220)"
        explains: "That is 0.2 ± 0.02, the standard deviation of the proportion without z*."
      - text: "(0.122, 0.278)"
        explains: "That doubles the margin. 1.96 × 0.02 = 0.039, not 0.078."
      - text: "It cannot be computed, since n·p̂ is less than 5"
        explains: "n·p̂ = 80 and n(1 − p̂) = 320, both well above 5."
      - text: "(0.161, 0.239)"
        correct: true
        explains: "Right. p̂ = 0.2, √(0.2 × 0.8 / 400) = 0.02, margin 1.96 × 0.02 = 0.039."
    work: |-
      p̂ = 80 / 400 = 0.2. Check: n·p̂ = 80 ≥ 5 and n(1 − p̂) = 320 ≥ 5.
      √(p̂(1 − p̂)/n) = √(0.2 × 0.8 / 400) = √0.0004 = 0.02.
      Margin = 1.96 × 0.02 = 0.0392.
      Interval: 0.2 ± 0.0392 = (0.1608, 0.2392).
  - topic: "Week 5 · Estimation and significance testing"
    ask: "A vendor claims its database handles a mean of 5,000 queries per second. You suspect it handles fewer. Which hypotheses are correct?"
    choices:
      - text: "H₀: μ < 5000, Hₐ: μ = 5000"
        explains: "That swaps them. The null holds the equality and represents the claim."
      - text: "H₀: μ = 5000, Hₐ: μ ≠ 5000"
        explains: "Your suspicion has a direction, fewer, so the alternative should too."
      - text: "H₀: μ = 5000, Hₐ: μ < 5000"
        correct: true
        explains: "Right. The null is the vendor's claim; the alternative is your one-sided suspicion, chosen before seeing data."
      - text: "H₀: x̄ = 5000, Hₐ: x̄ < 5000"
        explains: "Hypotheses are about the population mean μ, not the sample mean."
    work: |-
      The null is the claim on trial: μ = 5000.
      The alternative is the suspicion: fewer, so μ < 5000, which is one-sided.
      Hypotheses concern the population parameter μ, and the direction comes from the question, not the data.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "H₀: μ = 500, Hₐ: μ < 500, with σ = 60 known. A sample of 100 has mean 488. What are the test statistic and the decision at α = 0.05?"
    choices:
      - text: "z = −0.2; fail to reject"
        explains: "That divides by σ = 60 instead of σ/√n = 6."
      - text: "z = −2, p ≈ 0.023; reject H₀"
        correct: true
        explains: "Right. (488 − 500) / (60/√100) = −12 / 6 = −2. The lower-tail area is about 0.023, below 0.05."
      - text: "z = −2, p ≈ 0.046; fail to reject"
        explains: "0.046 is the two-tailed p-value, and it would still be below 0.05. This test is one-sided."
      - text: "z = −12; reject H₀"
        explains: "−12 is the raw difference. Divide by the standard deviation of the mean."
    work: |-
      σ/√n = 60 / √100 = 6.
      z = (488 − 500) / 6 = −2.
      One-sided, lower tail: p = P(Z ≤ −2) ≈ 0.0228.
      0.0228 < 0.05, so reject H₀: there is sufficient evidence that the mean is below 500.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "A test statistic is z = 1.8. At α = 0.05, how does the decision depend on whether the test is one- or two-sided?"
    choices:
      - text: "One-sided: p ≈ 0.036, reject. Two-sided: p ≈ 0.072, fail to reject"
        correct: true
        explains: "Right. The two-sided p-value counts both tails. This is why sidedness must be fixed before seeing the data."
      - text: "It does not; z = 1.8 rejects either way"
        explains: "The two-sided p-value is double the one-sided one, which changes the decision here."
      - text: "One-sided: p ≈ 0.072, fail to reject. Two-sided: p ≈ 0.036, reject"
        explains: "That is backwards. Two tails give the larger p-value."
      - text: "Neither rejects, since 1.8 is below 1.96"
        explains: "1.96 is the cut-off for a two-sided test at 0.05. A one-sided test at 0.05 rejects beyond about 1.645."
    work: |-
      One-sided: p = P(Z ≥ 1.8) ≈ 0.0359 < 0.05, reject.
      Two-sided: p = 2 × 0.0359 ≈ 0.0719 > 0.05, fail to reject.
      Same data, different decision, so the choice must follow from the question, made before looking.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "A test of whether a caching change altered mean latency gives p = 0.03. Which statement is correct?"
    choices:
      - text: "There is a 3% chance the null hypothesis is true"
        explains: "The p-value is computed by assuming the null. It cannot then give the null's probability."
      - text: "There is a 97% chance the change worked"
        explains: "Same error in reverse. The p-value is not a probability about hypotheses."
      - text: "The effect size is 3%"
        explains: "The p-value says nothing directly about the size of the effect."
      - text: "If the change truly had no effect, data at least this extreme would arise about 3% of the time"
        correct: true
        explains: "Right. It measures how surprising the data are under the null."
    work: |-
      p-value: the probability of a test statistic as extreme or more extreme than observed, if H₀ is true.
      It is about the data given the hypothesis, not the hypothesis given the data.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "A study finds p = 0.21 for the effect of a new linter on bug counts. Which conclusion is correct?"
    choices:
      - text: "The linter has no effect on bug counts"
        explains: "Failing to reject is not proof of no effect. The study may have been too small to detect it."
      - text: "The null hypothesis is true with probability 0.79"
        explains: "p-values are not probabilities of hypotheses."
      - text: "There is not sufficient evidence that the linter affects bug counts"
        correct: true
        explains: "Right. “Fail to reject” means the data do not rule the null out. A real effect may have been missed (Type II)."
      - text: "The linter increases bug counts"
        explains: "Nothing supports a direction. The evidence simply is not strong enough."
    work: |-
      p = 0.21 > 0.05, so fail to reject H₀.
      The contextual conclusion: there is not sufficient evidence of an effect.
      “Not significant” means not proven, not proven absent.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "A researcher measures 20 builds; σ is unknown, so they use the sample s. Which test, and which distribution gives the p-value?"
    choices:
      - text: "A z-test, using the normal distribution"
        explains: "A z-test needs the population σ. With s, use a t-test."
      - text: "A t-test, using a t-distribution with 19 degrees of freedom"
        correct: true
        explains: "Right. Estimating σ with s adds uncertainty, which the t-distribution's heavier tails account for. df = n − 1 = 19."
      - text: "A t-test, using a t-distribution with 20 degrees of freedom"
        explains: "Degrees of freedom for one sample are n − 1."
      - text: "No test is possible without σ"
        explains: "That is exactly the case the t-test handles."
    work: |-
      Known σ: z-test, normal distribution.
      Unknown σ: t = (x̄ − μ₀) / (s/√n), with a t-distribution of n − 1 degrees of freedom.
      n = 20, so df = 19.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "A sample of 10 measurements contains one value far above the rest and is clearly skewed. Is a t-test appropriate?"
    choices:
      - text: "No; under 15 observations the data must look normal with no outliers, so investigate the outlier and consider a nonparametric method"
        correct: true
        explains: "Right. Small samples get no help from the Central Limit Theorem, so the data themselves must look normal."
      - text: "Yes; t-tests work for any sample"
        explains: "The lecture's caution: the t-test is not always appropriate."
      - text: "Yes, if the outlier is removed without comment"
        explains: "Week 4 requires a rationale for any clean-up. Investigate the outlier; do not drop it silently."
      - text: "No; t-tests need more than 40 observations"
        explains: "Over 40 is when shape stops mattering. Smaller samples are fine if the data look normal."
    work: |-
      n < 15: pretty normal, no outliers, little skew.
      15–40: no large outliers or extreme skew.
      > 40: t-procedures regardless of shape.
      With n = 10, an outlier and skew, the t-test is not safe as is.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "H₀: μ = 50, Hₐ: μ > 50. A sample of 36 has mean 52 and s = 6. What is the t statistic?"
    choices:
      - text: "t = 0.33"
        explains: "That divides by s = 6 instead of s/√n = 1."
      - text: "t = 12"
        explains: "That multiplies by √n instead of dividing s by it."
      - text: "t = 2, with 36 degrees of freedom"
        explains: "The statistic is right but df = n − 1 = 35."
      - text: "t = 2, with 35 degrees of freedom"
        correct: true
        explains: "Right. (52 − 50) / (6/√36) = 2 / 1 = 2."
    work: |-
      s/√n = 6 / √36 = 6 / 6 = 1.
      t = (52 − 50) / 1 = 2.
      df = 36 − 1 = 35.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "A test gives p = 0.03. Analyst A set α = 0.05 in advance; analyst B set α = 0.01. Which statement is right?"
    choices:
      - text: "One of them made an arithmetic error"
        explains: "The p-value is the same. Only the cut-off differs."
      - text: "Both should now switch to α = 0.05, since it gives a result"
        explains: "Picking α after seeing p makes the error-rate promise meaningless."
      - text: "A rejects H₀ and B fails to reject; both are valid decisions with different tolerance for Type I error"
        correct: true
        explains: "Right. Choosing α is choosing your willingness to risk a false alarm. Same evidence, different decision rules."
      - text: "B rejects H₀ and A fails to reject"
        explains: "0.03 is below 0.05 but above 0.01, so it is the other way round."
    work: |-
      A: 0.03 ≤ 0.05, reject H₀.
      B: 0.03 > 0.01, fail to reject.
      α is a decision about risk, fixed before the analysis. Report p so readers can apply their own α.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "The same 15 servers are benchmarked before and after a kernel upgrade. Which analysis fits?"
    choices:
      - text: "Two independent-sample comparisons, one per condition"
        explains: "The two columns are the same servers, so they are not independent."
      - text: "A matched-pairs t-test on each server's difference"
        correct: true
        explains: "Right. Compute each server's change, then run a one-sample t-test on the 15 differences."
      - text: "A z-test on the after values only"
        explains: "That ignores the before values, and σ is not known."
      - text: "A correlation between before and after"
        explains: "That shows whether they move together, not whether the upgrade changed performance."
    work: |-
      Before and after on the same units are strongly related.
      Take each unit's difference d; the differences form one sample.
      Test them with a one-sample t-test: df = 15 − 1 = 14.
  - topic: "Week 5 · Estimation and significance testing"
    ask: "Study X finds r = −0.85 between cyclomatic complexity and test coverage. Study Y finds r = 0.5 between team size and meeting hours. Which relationship is stronger?"
    choices:
      - text: "X, because its absolute value is larger"
        correct: true
        explains: "Right. |−0.85| = 0.85 > 0.5. X is a strong negative linear relationship."
      - text: "Y, because a positive r is stronger than a negative one"
        explains: "The sign gives direction, not strength."
      - text: "Neither; correlations cannot be compared"
        explains: "Strength is compared by absolute value."
      - text: "X, so complexity causes lower coverage"
        explains: "Strength says nothing about causation."
    work: |-
      r runs from −1 to 1. The sign gives the direction; the absolute value gives the strength.
      |−0.85| = 0.85 > 0.5, so X is stronger.
      Neither says anything about cause.
  - topic: "Week 6 · Research problems and machine learning"
    ask: "Which statement is a research question, rather than a topic or a problem?"
    choices:
      - text: "Energy efficiency of mobile web browsers"
        explains: "That is a topic: an area with nothing to be right or wrong about."
      - text: "Browsers drain battery on pages with heavy JavaScript, and current profilers cannot attribute energy to individual scripts"
        explains: "That is a problem: a specific failure with a reason it exists. It does not yet name a comparison."
      - text: "Make mobile browsing more energy efficient"
        explains: "That is a goal, not something evidence can answer."
      - text: "Does per-script energy attribution from sampled power counters identify the top energy consumer as accurately as hardware metering, on the 100 most visited sites?"
        correct: true
        explains: "Right. It is answerable with evidence and names the comparison and the setting."
    work: |-
      Topic: an area. Problem: a specific failure or unknown, with a reason it exists.
      Question: answerable with evidence, naming the comparison and the setting.
      Only the third names a method, a baseline (hardware metering) and a setting (top 100 sites).
  - topic: "Week 6 · Research problems and machine learning"
    ask: "Paper A finds that code-review bots reduce defects; paper B finds no effect. A student proposes to find which conditions explain the difference. Which source of research problems is this?"
    choices:
      - text: "Technique transfer"
        explains: "No method is being moved from another field."
      - text: "Practitioner pain"
        explains: "That starts from something worked around by hand, not from disagreeing papers."
      - text: "Contradictory findings"
        correct: true
        explains: "Right. Two papers disagree, and the question is which conditions explain it."
      - text: "Limitations sections"
        explains: "That reads what one paper said it could not do. Here two papers conflict."
    work: |-
      Six sources: limitations sections, assumptions that break, contradictory findings, technique transfer, measurement gaps, practitioner pain.
      Two papers disagreeing is the third.
      The question it yields: which conditions explain the difference?
  - topic: "Week 6 · Research problems and machine learning"
    ask: "A proposal's opening says: “Our method leverages hierarchical attention for multi-granular semantic fusion.” Which Heilmeier question does it fail, and what is the fix?"
    choices:
      - text: "Q4: name who cares"
        explains: "Possibly also missing, but the sentence fails on plain language first."
      - text: "Q1: rewrite without jargon, so a smart friend in another department can repeat it back"
        correct: true
        explains: "Right. Q1 asks what you are trying to do, with no jargon."
      - text: "Q8: add an early checkpoint"
        explains: "Q8 is about checks during the work, not how the aim is stated."
      - text: "Q2: describe current practice"
        explains: "Q2 asks how it is done today. The problem here is the jargon in the aim."
    work: |-
      Heilmeier Q1: What are you trying to do? No jargon.
      Failure mode: a technical-sounding sentence that says nothing a reader could check.
      Fix: rewrite until an outsider can repeat it back.
  - topic: "Week 6 · Research problems and machine learning"
    ask: "Under FINER, a student checks arXiv, DBLP and Google Scholar before committing to a question. Which criterion are they testing?"
    choices:
      - text: "Novel"
        correct: true
        explains: "Right. Novel means not already answered, and the lecture names these searches and the literature review."
      - text: "Feasible"
        explains: "Feasible concerns data, compute, skills and time."
      - text: "Relevant"
        explains: "Relevant asks who would change what they do based on the answer."
      - text: "Ethical"
        explains: "Ethical concerns consent, dual use, approvals and compute's environmental cost."
    work: |-
      FINER: Feasible, Interesting, Novel, Ethical, Relevant.
      Novel: not already answered. Check arXiv, DBLP, Google Scholar; do your literature review.
  - topic: "Week 6 · Research problems and machine learning"
    ask: "A widely cited result on flaky tests has never been reproduced by anyone outside the original lab. What kind of gap is this?"
    choices:
      - text: "Empirical"
        explains: "It has been measured, once."
      - text: "Methodological"
        explains: "No method is missing under a constraint."
      - text: "Contextual"
        explains: "The setting is not what is missing. Independent confirmation is."
      - text: "Replication"
        correct: true
        explains: "Right. It has never been independently confirmed."
    work: |-
      Four kinds of gap: empirical (never measured), methodological (no method under constraint Y), contextual (unknown in setting B), replication (never independently confirmed).
      A single-lab result with no independent repeat is a replication gap.
  - topic: "Week 6 · Research problems and machine learning"
    ask: "“Does adding static-analysis hints to the prompt reduce LLM-generated security bugs compared with no hints?” A reviewer asks whether the hint condition simply had more tokens. What element is the question missing?"
    choices:
      - text: "An intervention"
        explains: "The intervention is named: static-analysis hints."
      - text: "An outcome measure"
        explains: "Security bugs is the outcome."
      - text: "A constraint that holds the comparison fair, such as an equal token budget"
        correct: true
        explains: "Right. Without it, any improvement could come from extra context rather than the hints."
      - text: "A comparison"
        explains: "The comparison is given: no hints."
    work: |-
      A good experimental question names the intervention, outcome measure, comparison and constraint.
      The constraint is what is held equal so the comparison is fair.
      Here, equal token budget would rule out “more context” as the explanation.
  - topic: "Week 6 · Research problems and machine learning"
    ask: "A model must estimate the remaining battery life, in minutes, of devices from usage logs that include recorded outcomes. Which problem type and learning type fit?"
    choices:
      - text: "Classification, supervised"
        explains: "Minutes remaining is a continuous value, not a category."
      - text: "Regression, supervised"
        correct: true
        explains: "Right. A continuous output, learned from labelled examples."
      - text: "Clustering, unsupervised"
        explains: "The logs have recorded outcomes, and the goal is to predict a value, not find groups."
      - text: "Reinforcement learning"
        explains: "Nothing acts in an environment for rewards. It predicts one value per device."
    work: |-
      Two questions sort most cases: do you have labels, and what shape is the answer?
      Labels: yes, so supervised. Answer shape: a continuous number, so regression.
  - topic: "Week 6 · Research problems and machine learning"
    ask: "A team has 300 labelled network-intrusion records and 2 million unlabelled ones from the same network. Which approach fits, and what is its key assumption?"
    choices:
      - text: "Semi-supervised learning, assuming the unlabelled data follow the same distribution as the labelled data"
        correct: true
        explains: "Right. It uses a little labelled and a lot of unlabelled data, and it depends on both coming from the same population."
      - text: "Reinforcement learning, assuming a well-designed reward"
        explains: "No agent acts in an environment here."
      - text: "Unsupervised learning, because some data are unlabelled"
        explains: "That would discard the labels, which carry valuable expertise."
      - text: "Supervised learning on the 300 only, because unlabelled data are useless"
        explains: "Unlabelled data show the shape of the data, which semi-supervised learning uses."
    work: |-
      Semi-supervised: a small amount of labelled data plus a large amount of unlabelled data.
      Pros: lower labelling cost, useful when labels are scarce.
      Cons: assumes the same distribution, more complex, sensitive to wrong labels.
  - topic: "Week 6 · Research problems and machine learning"
    ask: "A student normalises the entire data set using its overall mean and standard deviation, then splits it into training and test sets. What is the problem?"
    choices:
      - text: "None; normalisation is always done first"
        explains: "Done before splitting, it lets test-set statistics shape the training data."
      - text: "Normalisation causes underfitting"
        explains: "Normalisation does not make a model too simple."
      - text: "The validation set is too large"
        explains: "Nothing is said about its size. The issue is the order of operations."
      - text: "Information from the test set leaks into training, so the test score may be optimistic"
        correct: true
        explains: "Right. The mean and standard deviation include test rows. Split first, then compute them on training data only."
    work: |-
      Leakage: information from the evaluation data reaching the model before evaluation.
      Pre-processing before splitting is one of the lecture's improper-splitting cases.
      Fix: split first, fit pre-processing on training data, apply it to validation and test.
  - topic: "Week 6 · Research problems and machine learning"
    ask: "A loan-default model is trained on applications from one bank's online channel, where most applicants are under 35. It is deployed to all branches. Which source of bias matters most?"
    choices:
      - text: "Labelling"
        explains: "Nothing suggests the default labels are wrong."
      - text: "Historical data"
        explains: "Possible, but the clear problem is who is in the data, not what past decisions they record."
      - text: "Sampling"
        correct: true
        explains: "Right. The training data do not represent the population the model is used on."
      - text: "Algorithm design"
        explains: "Any algorithm trained on this sample inherits its mismatch."
    work: |-
      Four sources: sampling, labelling, historical data, algorithm design.
      Training on young online applicants and deploying to all branches is a nonrepresentative sample.
      Mitigation: representative data, and audits of performance for each group after deployment.
  - topic: "Week 6 · Research problems and machine learning"
    ask: "A fraud detector runs on 10,000 transactions, 50 of them fraudulent. It flags 100, of which 40 are fraud. What are its precision and recall?"
    choices:
      - text: "Precision 0.80, recall 0.40"
        explains: "That swaps them. Precision divides by what was flagged (100); recall by actual fraud (50)."
      - text: "Precision 0.40, recall 0.80"
        correct: true
        explains: "Right. Precision 40/100 = 0.40. Recall 40/50 = 0.80."
      - text: "Precision 0.993, recall 0.80"
        explains: "0.993 is the accuracy, (40 + 9,890) / 10,000, which is high mostly because fraud is rare."
      - text: "Precision 0.40, recall 0.004"
        explains: "Recall divides by actual fraud cases (50), not by all transactions."
    work: |-
      TP = 40, FP = 100 − 40 = 60, FN = 50 − 40 = 10, TN = 10,000 − 40 − 60 − 10 = 9,890.
      Precision = TP / (TP + FP) = 40 / 100 = 0.40.
      Recall = TP / (TP + FN) = 40 / 50 = 0.80.
      Accuracy = (40 + 9,890) / 10,000 = 0.993, which hides how many alerts are false.
  - topic: "Week 6 · Research problems and machine learning"
    ask: "A model scores 97% on training data and 71% on validation data. A simpler model scores 85% and 84%. What does this suggest?"
    choices:
      - text: "The first model is overfitting; the simpler one generalises better"
        correct: true
        explains: "Right. The large gap between seen and unseen data is the signature of overfitting."
      - text: "The first model is better, because 97% is higher"
        explains: "Training accuracy says how well it memorised. New-data performance is what matters."
      - text: "Both are underfitting"
        explains: "The simpler model does well on both sets; the first does very well on training data."
      - text: "Test both on the test set repeatedly and keep the winner"
        explains: "Choosing on the test set biases its score. Choose on validation, then test once."
    work: |-
      Overfitting: very high training, much lower new-data performance.
      Underfitting: low on both.
      97% vs 71% is a 26-point gap; 85% vs 84% is a good fit.
  - topic: "Week 6 · Research problems and machine learning"
    ask: "A thesis reports a 2-point gain over a baseline from a single training run, with no seed, data version or split described. Which item of an ML research plan was neglected?"
    choices:
      - text: "Defining a clear research question"
        explains: "The question may be clear. Nobody can check the answer."
      - text: "Examining bias and ethics"
        explains: "That may matter too, but the missing seed, version and split are a reproducibility failure."
      - text: "Choosing a problem type"
        explains: "The type is not in question."
      - text: "Reproducibility and transparency, backed by detailed documentation"
        correct: true
        explains: "Right. One run with undocumented settings cannot show the 2 points are more than run-to-run noise."
    work: |-
      The plan: clear questions and hypotheses; a justified algorithm; planned data collection, splitting and preprocessing; bias and ethics; reproducibility and transparency; detailed documentation.
      ML results vary with seed, split and versions, so report them, and report several runs.
---

67 multiple-choice questions across all six weeks. The paper is divided into sections, and nothing is revealed until you
submit: pick an answer for each question (you can change it as often as you like), then submit a
section to see your score for it, the correct answers, an explanation for each one you chose, and a
worked solution. You can submit one section at a time, in any order, or the whole exam at once.

There is no penalty for a wrong answer. Questions you leave blank in a section you submit count as wrong.
