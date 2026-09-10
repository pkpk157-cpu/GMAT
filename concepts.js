/* GMAT Prep — concept guides (theory). Rendered by the in-app concept reader.
   Block types: h (sub-heading), p (paragraph, inline \( \) math ok),
   ul / ol (lists), tip, warn (callouts), formula (display math),
   table {head, rows}, eg (worked example {q, choices, ans, why}). */
window.GMAT_CONCEPTS = [
  {
    id: "cr-class-sessions",
    section: "cr",
    title: "Critical Reasoning",
    source: "Adapted from your course material",
    sample: true,
    parts: [
      {
        id: "cr-framework",
        title: "How CR works",
        mins: 4,
        blocks: [
          { t: "p", x: "Every CR argument is built from <b>facts (premises)</b> and often a <b>conclusion</b> drawn from them. Your job changes with the question type, but the underlying skill is the same: read precisely and reason only from what is actually stated." },
          { t: "h", x: "The core discipline" },
          { t: "ol", items: [
            "<b>Eliminate wrong answers.</b> Never try to justify why the right answer is right — your entire focus is on why the other four are wrong. The correct choice is simply the one left standing.",
            "<b>Treat every answer choice as true</b>, no matter how absurd or counter-intuitive it sounds. You are not judging whether a choice is realistic — only what it does to the argument.",
            "<b>Stay in scope.</b> Bring in no outside knowledge. If a choice depends on information not in the passage, it's out."
          ] },
          { t: "h", x: "The CR question families" },
          { t: "ul", items: [
            "<b>Inference</b> — what must be true given the facts.",
            "<b>Paradox</b> — resolve two facts that seem to contradict.",
            "<b>Weaken / Strengthen</b> — attack or support the link between premise and conclusion.",
            "<b>Flaw</b> — name the logical error in the reasoning.",
            "<b>Evaluate</b> — find the question whose answer would test the argument.",
            "<b>Assumption</b> — the unstated premise the argument needs to survive."
          ] },
          { t: "tip", x: "Whenever the words <b>percent / percentage / proportion</b> appear, the correct answer must be mathematically justifiable. Do the number-vs-percent check first (see the next section) before eliminating on gut feel." },
          { t: "h", x: "Find the conclusion before anything else" },
          { t: "table", head: ["Marks a conclusion", "Marks a premise"], rows: [
            ["therefore, thus, hence, so", "since, because, as, for"],
            ["consequently, it follows that", "given that, in view of"],
            ["clearly, evidently, must be", "after all, the reason is"]
          ] },
          { t: "p", x: "When no signpost appears, use the <b>why test</b>: the conclusion is the sentence the others are answering. Read two candidate sentences and ask which one supports which." },
          { t: "warn", x: "The conclusion is <b>not</b> always last. It is often the first sentence, with everything after it as support, and in two-speaker passages each speaker has one of their own." },
          { t: "h", x: "Then name the gap" },
          { t: "p", x: "Every CR argument leaves a gap between what it proves and what it claims. Naming that gap in your own words turns assumption, weaken, strengthen and flaw into <b>the same question</b> — they simply ask you to fill it, widen it, narrow it, or label it." },
          { t: "tip", x: "The gap usually announces itself as a <b>scope shift</b>: a term that appears in the conclusion but never in the premises. Circle any new word in the conclusion and you have found what the argument is assuming." }
        ]
      },
      {
        id: "cr-argtypes",
        title: "Argument Types & the Therefore Test",
        mins: 6,
        blocks: [
          { t: "p", x: "Your CR Basics deck opens with a sorting exercise: before you read a single answer choice, decide what <b>shape</b> the stimulus has. The shape predicts the question type and tells you what to look for." },
          { t: "table", head: ["Shape of the stimulus", "Usual question"], rows: [
            ["Pure facts, no conclusion", "Inference (what must be true)"],
            ["Seemingly contradictory facts, no conclusion", "Resolve the paradox"],
            ["A few facts and one conclusion (about 80% of questions)", "Weaken, strengthen, assumption, evaluate, flaw"],
            ["Facts, an intermediate conclusion, then a main conclusion", "Boldface and method"],
            ["Two opposing viewpoints, each with its own support", "Boldface and method"],
            ["Two paragraphs, one speaker answering another", "Point at issue, method, or any of the above"]
          ]},
          { t: "h", x: "Finding the conclusion" },
          { t: "p", x: "A conclusion is the sentence that can be <b>challenged or supported</b>. Five signals mark it: the <b>future</b> (may, might, will, would, likely), a <b>feeling</b> (should, ought to, recommend, criticise, agree), <b>uncertainty</b> (hypothesis, claim), <b>debatability</b> (position, stance, view, belief) and a <b>judgment reached</b>. Facts, data, findings and observations about the past or present are premises, and a premise can never be challenged: its job is only to support." },
          { t: "h", x: "The Therefore Test" },
          { t: "p", x: "When two candidate sentences both look like conclusions, write them as <i>Because X, therefore Y</i> in both orders. Only one order makes sense. The X that makes sense is the premise or intermediate conclusion; the Y is the main conclusion." },
          { t: "eg",
            q: "Local authorities are considering an amendment that would raise the fine for littering in the picnic area to $1,000. Incremental increases have consistently reduced litter. However, raising the fine to $1,000 would actually increase the amount of litter, because picnic-area users would perceive the fine as unreasonable and unenforceable and would disregard the litter law altogether. Which sentence is the main conclusion?",
            choices: ["Incremental increases in the fine have consistently reduced litter.", "Raising the fine to $1,000 would actually increase the amount of litter.", "Users would perceive the fine as unreasonable and unenforceable.", "Users would disregard the litter law altogether.", "Authorities are considering an amendment to the litter law."],
            ans: "B",
            why: "Test the two candidates. 'Because raising the fine would increase litter, therefore users would perceive it as unreasonable' makes no sense. 'Because users would perceive it as unreasonable and disregard the law, therefore raising the fine would increase litter' makes sense. So the perception sentence is the support and (B) is the main conclusion; (A) and (E) are background facts, and (C) and (D) are the reasons given for (B)."
          },
          { t: "tip", x: "In boldface questions this test is step one, always: label the main conclusion first, then decide whether each boldface portion is a fact (non-challengeable premise), a reason or judgment offered in support (challengeable premise), an intermediate conclusion, or the main conclusion." }
        ]
      },
      {
        id: "cr-inference",
        title: "Inference (Must Be True)",
        mins: 4,
        blocks: [
          { t: "p", x: "About a third of the Verbal section (RC + CR combined) rests on inference — roughly 12 of 36 questions — so this is the highest-leverage CR skill." },
          { t: "h", x: "What an inference is" },
          { t: "p", x: "An inference is a conclusion that <b>must</b> follow from the facts given. If the passage states facts F1, F2, F3, the answer is whatever can be logically derived from one, two, or all of them:" },
          { t: "formula", x: "\\begin{gathered}F_1 \\Rightarrow C \\\\[4pt] F_1 + F_2 \\Rightarrow C \\\\[4pt] F_1 + F_2 + F_3 \\Rightarrow C\\end{gathered}" },
          { t: "p", x: "The conclusion C is <b>not</b> stated in the passage — you derive it. And it is 100% certain: it can be deduced without any ambiguity." },
          { t: "h", x: "How to approach it" },
          { t: "ol", items: [
            "Read it like a <b>treasure hunt</b>: the answer is hidden in the passage, not invented from outside it.",
            "<b>Verify and eliminate</b> — check each choice against the facts; never challenge a stated fact even slightly.",
            "Expect the right answer to be <b>modest</b>. A correct inference is often simple, unexciting, even obvious — not a dramatic new insight.",
            "It may come from a single fact or require combining several. You needn't use every fact."
          ] },
          { t: "warn", x: "The #1 trap is <b>extreme language</b>. Words like <i>only, will, always, never, must</i> often push a choice one step beyond what the facts guarantee. \"More likely\" does not mean \"probable\" — a rise from 15% to 20% is more likely but still unlikely." },
          { t: "eg",
            q: "A hemoglobin molecule becomes more effective at picking up oxygen with each molecule it grabs, up to a maximum of four. Grabbing a molecule changes its shape, opening it to receive more. Which is most strongly supported?",
            choices: [
              "A molecule with three oxygen molecules will acquire a fourth.",
              "The only factor in effectiveness is how open the molecule's shape is.",
              "A molecule holding three is more effective at grabbing another than one holding just one.",
              "A molecule with four has the same shape as one with none.",
              "Each molecule picks up one to four oxygen molecules near the lungs and delivers them elsewhere."
            ],
            ans: "C",
            why: "C restates the given fact — more molecules held → more effective — with no extra claim. (A) says \"will\" acquire a fourth: more likely ≠ certain (extreme). (B) says \"only\" factor: unsupported (extreme). (D) and (E) add shape/quantity details the passage never establishes."
          }
        ]
      },
      {
        id: "cr-number-percent",
        title: "Number vs. Percentage traps",
        mins: 5,
        blocks: [
          { t: "p", x: "A premise about <b>actual numbers</b> paired with a conclusion about a <b>proportion</b> (or vice-versa) is a classic mismatch — the engine behind many inference, weaken and flaw questions." },
          { t: "p", x: "<i>Premise:</i> There are far more boys this year than last. <i>Conclusion:</i> Girls are a smaller proportion of the class. This can fail — the number of girls might have grown even more, raising their proportion." },
          { t: "h", x: "The six misconceptions" },
          { t: "ul", items: [
            "Increasing percentages ⇏ increasing numbers.",
            "Decreasing percentages ⇏ decreasing numbers.",
            "Increasing numbers ⇏ increasing percentages.",
            "Decreasing numbers ⇏ decreasing percentages.",
            "Large numbers ⇏ large percentages (and small ⇏ small).",
            "Large percentages ⇏ large numbers (and small ⇏ small)."
          ] },
          { t: "p", x: "Any percentage is a <b>part over a whole</b>. For women in a company, the whole is women + men:" },
          { t: "formula", x: "\\% = \\dfrac{\\text{part}}{\\text{total base}} \\times 100" },
          { t: "p", x: "Because the <b>base</b> can change, a percentage can move opposite to the raw count. Always ask: what is the base, and could it be shifting?" },
          { t: "h", x: "Signal words" },
          { t: "table",
            head: ["Point to NUMBERS", "Point to PERCENTAGES"],
            rows: [
              ["Amount, Quantity, Sum", "Percent, Proportion, Fraction"],
              ["Total, Count, Tally", "Ratio, Rate, Share, Per capita"],
              ["", "Incidence, Likelihood, Probability, Market share"]
            ] },
          { t: "tip", x: "Market share is the portion of a market a company controls (by revenue or units). Regardless of market size, all shares must add up to 100%." },
          { t: "h", x: "The two-column test" },
          { t: "p", x: "Write each figure with its base beside it. If the two bases differ, or could have changed between them, no comparison of the raw counts follows — and no comparison of the percentages either." },
          { t: "tip", x: "A percentage falling tells you the part grew <b>more slowly than the whole</b>, nothing more. It may have grown, shrunk or held steady in absolute terms, and all three are usually available as answer choices." },
          { t: "eg",
            q: "Country Z's share of world steel output fell from 20% in 2010 to 15% in 2020. Which of the following must be true?",
            choices: [
              "Country Z produced less steel in 2020 than in 2010.",
              "World steel output rose between 2010 and 2020.",
              "Countries other than Z produced more steel in 2020 than in 2010.",
              "Country Z's steel output grew more slowly than world output.",
              "Country Z produced more steel in 2010 than any other country."
            ],
            ans: "D",
            why: "A falling share means \\(Z/W\\) fell, which is exactly the statement that Z grew more slowly than W — that much is forced. Nothing else is: world output could have shrunk with Z shrinking faster, which would make both the first and second choices false, and the third fails on the same arithmetic."
          }
        ]
      },
      {
        id: "cr-conditional",
        title: "Conditional reasoning",
        mins: 5,
        blocks: [
          { t: "p", x: "Take the statement <b>“If A, then B.”</b> Here <i>if</i> means <i>whenever</i>. Only one rearrangement is logically valid — the contrapositive." },
          { t: "table",
            head: ["Statement", "Valid?"],
            rows: [
              ["If A → B (given)", "✓ given"],
              ["If B → A (converse)", "✗ invalid"],
              ["If not A → not B (inverse)", "✗ invalid"],
              ["If not B → not A (contrapositive)", "✓ valid"]
            ] },
          { t: "h", x: "Worked in words" },
          { t: "p", x: "“If I'm a guitarist, then I'm a musician.” (A → B) ✓" },
          { t: "ul", items: [
            "“If I'm a musician, then I'm a guitarist.” (B → A) — <b>invalid</b>: a musician could play any instrument.",
            "“If I'm not a guitarist, then I'm not a musician.” (¬A → ¬B) — <b>invalid</b>: same reason.",
            "“If I'm not a musician, then I'm not a guitarist.” (¬B → ¬A) — <b>valid</b>: this is the contrapositive."
          ] },
          { t: "tip", x: "The category <i>musician</i> contains the category <i>guitarist</i>. So anything outside the bigger category (not a musician) must be outside the smaller one (not a guitarist). Flip <b>and</b> negate — that's the only safe move." },
          { t: "h", x: "Spotting which side is which" },
          { t: "table", head: ["Wording", "Translates to"], rows: [
            ["if, when, whenever, all, every", "the trigger — it goes on the <b>left</b>"],
            ["only if, only when, requires, necessary", "the requirement — it goes on the <b>right</b>"],
            ["no A is B", "A → not B"],
            ["unless X, Y", "not X → Y"]
          ] },
          { t: "warn", x: "<b>“Only if” reverses the arrow.</b> “You may enter only if you have a ticket” is Enter → Ticket, not Ticket → Enter — a ticket does not guarantee entry. This single reversal is the most-tested point in conditional reasoning." },
          { t: "h", x: "Chaining" },
          { t: "p", x: "A → B together with B → C gives A → C, and the contrapositive of the whole chain runs backwards: not C → not A. Long CR chains are built to be read this way, one arrow at a time." },
          { t: "eg",
            q: "All students who passed the exam had studied. Priya studied. Which of the following must be true?",
            choices: [
              "Priya passed the exam.",
              "Priya did not pass the exam.",
              "If Priya did not study, she did not pass the exam.",
              "Every student who studied passed the exam.",
              "Priya studied more than the students who failed."
            ],
            ans: "C",
            why: "The rule is Passed → Studied. Knowing Priya studied triggers nothing, because studying is necessary rather than sufficient. Only the contrapositive is safe: not Studied → not Passed, which is what the third choice says."
          }
        ]
      },
      {
        id: "cr-paradox",
        title: "Resolve the paradox",
        mins: 4,
        blocks: [
          { t: "p", x: "A paradox question presents two facts that seem to contradict, and asks you to <b>explain how both can be true</b> — not to pick a side." },
          { t: "h", x: "How to spot it" },
          { t: "ul", items: [
            "There is usually <b>no conclusion</b> — just two facts.",
            "Language of contradiction: <i>but, however, yet, although, paradoxically, surprisingly</i>.",
            "Two sides are presented; both must be respected in your answer."
          ] },
          { t: "h", x: "The approach" },
          { t: "p", x: "Two facts collide: \\( F_1 \\rightleftharpoons F_2 \\). The correct answer supplies a <b>new fact F3</b> that makes both facts sit comfortably together — <i>without</i> challenging either one. Eliminate anything out of scope; treat every choice as true." },
          { t: "eg",
            q: "The audience for the sitcom \"Apples and Oranges\" has nearly doubled since moving to a better time slot six months ago. Yet over the same period, sales of its branded merchandise fell significantly. Which best resolves this?",
            choices: [
              "Rising popularity of a show drives up the price of its merchandise.",
              "Six months ago the producers ended the deep merchandise discounts they had used to build the show's popularity.",
              "The show's writers changed six months ago.",
              "Merchandise for other shows also sold well this year.",
              "The new time slot is later in the evening."
            ],
            ans: "B",
            why: "B is a new fact (F3) that lets both facts stand: more viewers (bigger audience) but prices went back up (fewer sales) — no contradiction. The others either don't touch merchandise sales, are out of scope, or fail to connect the two facts."
          },
          { t: "note", x: "Paradox is one of seven CR question families. The remaining five — Weaken, Strengthen, Flaw, Evaluate and Assumption — follow below." },
          { t: "h", x: "The rule that decides it" },
          { t: "p", x: "A resolution must leave <b>both</b> facts standing. Any choice that denies one of them, or explains it away as a mistake, has changed the question rather than answered it." },
          { t: "h", x: "Where resolutions usually hide" },
          { t: "ul", items: [
            "<b>A third factor</b> moved at the same time and pulled the other way.",
            "<b>The group changed</b> — the population measured at the two dates is not the same population.",
            "<b>The measure changed</b> — what counts as a case, a sale or an accident was redefined.",
            "<b>Timing</b> — the effect has not had time to appear, or the cause was already at work earlier.",
            "<b>Composition</b> — an average moved because the expensive or extreme members left the set, not because anything improved."
          ] },
          { t: "tip", x: "Prephrase the shape before reading: “both can be true if …”. Filling that blank in your own words makes the correct choice obvious and the four near-misses visible." }
        ]
      },
      {
        id: "cr-weaken",
        title: "Weaken the argument",
        mins: 4,
        blocks: [
          { t: "p", x: "Every argument is a <b>fact → conclusion</b> (or fact → reason) chain. You can <b>never</b> attack a stated fact — you weaken by attacking the <b>link</b> between the fact and the conclusion." },
          { t: "ol", items: [
            "Identify the <b>conclusion</b>.",
            "Pick the choice that most directly makes that conclusion <b>less likely</b> — while accepting every fact as true."
          ] },
          { t: "h", x: "Cause-and-effect: the big one" },
          { t: "p", x: "If the conclusion claims <b>A causes B</b>, the classic weakeners are:" },
          { t: "ul", items: [
            "<b>B caused A</b> — the causation runs the other way.",
            "<b>C caused B</b> — some third factor is the real cause.",
            "<b>C caused both A and B</b> — a hidden common cause."
          ] },
          { t: "warn", x: "<b>Correlation ≠ causation.</b> “Children of divorced parents have 50% more behavioural problems, so divorce causes them” fails: maybe hard-to-parent children strain marriages (B→A), or parental conflict drives both (C→both). Any of these breaks the causal claim." },
          { t: "h", x: "The other reliable weakeners" },
          { t: "ul", items: [
            "<b>The plan backfires</b> — the proposed action has a side effect that defeats its own goal.",
            "<b>The sample is unrepresentative</b> — the group studied differs from the group concluded about.",
            "<b>A term shifts</b> — the premise and the conclusion use the same word to mean different things.",
            "<b>The comparison group differs</b> — a control that is not really comparable.",
            "<b>The measure is wrong</b> — the statistic counts something other than what the conclusion is about.",
            "<b>Someone else absorbs the change</b> — the mechanism the plan relies on never reaches the people it targets."
          ] },
          { t: "tip", x: "A weakener does not have to destroy the argument, only make the conclusion <b>less likely</b>. Do not reject a choice for being modest — reject it for being irrelevant." },
          { t: "warn", x: "Two shapes never weaken: a choice that merely <b>restates a premise</b>, and a choice about a <b>different group, place or period</b> than the conclusion covers." },
          { t: "eg",
            q: "To reduce downtown traffic, the city will sharply raise parking fees at all city-owned garages. Which of the following, if true, most weakens the plan?",
            choices: [
              "The city's garages are older than most privately owned ones.",
              "Most people who drive downtown park in privately owned garages, whose rates the city does not set.",
              "Public transport into downtown is frequent and inexpensive.",
              "Parking fees in nearby cities are higher than those downtown.",
              "The city intends to spend the extra revenue on road repairs."
            ],
            ans: "B",
            why: "The plan works only if the higher fees reach the drivers it is meant to deter. If most of them park somewhere the city cannot price, the measure barely touches the traffic. Cheap public transport would, if anything, help the plan."
          }
        ]
      },
      {
        id: "cr-strengthen",
        title: "Strengthen the argument",
        mins: 4,
        blocks: [
          { t: "p", x: "The mirror image of weaken. Same <b>fact → conclusion</b> chain; you can't strengthen a fact, only the <b>link</b> — by adding a fact that makes the conclusion more secure." },
          { t: "p", x: "If the conclusion claims <b>A causes B</b>, the classic strengtheners <b>rule out</b> the alternatives:" },
          { t: "ul", items: [
            "<b>B did not cause A</b>",
            "<b>C did not cause B</b>",
            "<b>no third factor C caused both</b>"
          ] },
          { t: "tip", x: "Test a choice by <b>negating</b> it: if the negation clearly hurts the conclusion, the choice genuinely strengthens it." },
          { t: "eg",
            q: "Waterfront lots in coastal cities were historically left to industry; today beachfront homes sell for huge sums, so a developer wanting a large profit should buy urban waterfront lots and build homes on them. Which most strengthens the claim?",
            choices: [
              "People today have more money for real estate than in past centuries.",
              "Cities offer developers tax incentives to rehabilitate the waterfront.",
              "Homeowners will pay large sums for residential properties in traditionally industrial/commercial districts.",
              "Many urban waterfront lots are available to buy.",
              "Interior residential districts are more expensive than the waterfront."
            ],
            ans: "C",
            why: "The plan needs buyers for homes on formerly industrial urban waterfront. (C) supplies exactly that — negate it (buyers won't pay) and the profit vanishes. The others give cheaper costs, incentives, or supply, but none establishes that anyone will buy."
          },
          { t: "h", x: "Beyond causation" },
          { t: "ul", items: [
            "<b>Supply the missing link</b> the conclusion needs but never states.",
            "<b>Rule out the obvious alternative</b> explanation — often stronger than adding fresh positive evidence.",
            "<b>Show the sample is representative</b> of the group being concluded about.",
            "<b>Show the mechanism will operate</b> — that the people the plan targets will actually respond as assumed.",
            "<b>Offer a precedent</b> where the same measure produced the same result."
          ] },
          { t: "warn", x: "A choice that repeats a premise in new words adds nothing, and a choice about a different population adds nothing. Strength has to reach the <b>link</b>, not the facts." },
          { t: "tip", x: "On plan questions, the best strengthener usually closes the most obvious objection — the thing you were about to say out loud when you finished reading the plan." }
        ]
      },
      {
        id: "cr-causal",
        title: "Cause-and-Effect Reasoning",
        mins: 6,
        blocks: [
          { t: "p", x: "About one CR question in ten concludes that <b>A causes B</b> from evidence that A and B go together. Correlation is not causation, and the deck's three alternative explanations are the whole toolkit: every weakener, strengthener and assumption in a causal argument is one of them." },
          { t: "table", head: ["Conclusion: A causes B", "Weakener", "Strengthener / assumption"], rows: [
            ["Reverse cause", "B caused A", "B did not cause A"],
            ["Alternative cause", "C caused B", "C did not cause B"],
            ["Common cause", "C caused both A and B (hot weather raises both beer and ice-cream sales)", "C did not cause both"]
          ]},
          { t: "ul", items: [
            "<b>Older antelope are more cautious, so ageing causes caution.</b> Reverse: cautious antelope survive to be old. Alternative: a drug or hard experience made the old ones cautious. Common cause: intelligence brings both longevity and caution.",
            "<b>Children of divorced parents have 50% more behavioural problems, so divorce causes the problems.</b> Reverse: difficult children strain marriages. Alternative: parental conflict, not the divorce itself. Common cause: jobs with heavy travel that produce both.",
            "<b>Low vitamin B6 is linked to disease Q, so raising B6 protects against Q.</b> The assumption is that Q does not cause the low B6, that is, that the causation does not run the other way."
          ]},
          { t: "p", x: "Assumptions in causal arguments come in two types: those that rule out an alternative cause, and those that fix the <b>direction</b> of the causation. A choice such as 'obesity and nervousness do not make people less able to handle stress' is the second type: negate it and the argument that stress causes obesity collapses." },
          { t: "warn", x: "A choice that merely offers a remedy, another benefit, or a different variable does not touch the causal link. 'Good communication prevents divorce' says nothing about whether living together before marriage is one of the causes of divorce; the deck flags it as the classic wrong answer." },
          { t: "eg",
            q: "A study found that people with high emotional stress are significantly more obese and nervous than people without it. Therefore emotional stress causes obesity and nervousness. Which of the following is an assumption on which the argument rests?",
            choices: ["Obesity and nervousness can lead to serious health problems.", "Emotionally stressed people are aware of the health problems attributed to stress.", "Equal numbers of high-stress and low-stress people were surveyed.", "Obesity and nervousness do not make individuals less capable of dealing with emotionally stressful situations.", "People surveyed immediately after a stressful event were more obese and nervous than others in the same group."],
            ans: "D",
            why: "The conclusion is A (stress) causes B (obesity and nervousness). (D) rules out B causing A: if being obese and nervous made people worse at handling stress, the correlation could run the other way. Negating (D) flips the direction and the argument fails, so it is the required assumption. (A), (B) and (C) never touch the causal link, and (E) compares subgroups the argument never mentions."
          }
        ]
      },
      {
        id: "cr-flaw",
        title: "Identify the flaw",
        mins: 5,
        blocks: [
          { t: "p", x: "Approached exactly like weaken — you're naming <i>why</i> the fact→conclusion link fails. The GMAT leans on just three flaw families:" },
          { t: "ul", items: [
            "<b>Number vs. percentage</b> — comparing percentages while ignoring the different-sized bases behind them.",
            "<b>Cause and effect</b> — treating a correlation as causation (the reversals above).",
            "<b>Wrong sample</b> — a biased or unrepresentative group used to conclude about a wider one."
          ] },
          { t: "warn", x: "Classic base-rate trap: “a scanner alerts on 100% of bombs and only 1% of clean bags, so 99% of alerts are real bombs.” Wrong — with 10 bomb-bags and 1,000 clean bags, that's 10 real alerts + 10 false alerts = only <b>50%</b> real. The flaw swaps one group's percentage for a different group's." },
          { t: "h", x: "The flaw vocabulary" },
          { t: "table", head: ["Flaw", "What it looks like"], rows: [
            ["Necessary vs. sufficient", "treats a requirement as a guarantee"],
            ["Part to whole", "what is true of a member is claimed of the group, or the reverse"],
            ["Circular", "the conclusion is quietly used as one of its own premises"],
            ["Equivocation", "a key word changes meaning between premise and conclusion"],
            ["False dichotomy", "only two options are offered when others exist"],
            ["Attacking the source", "the arguer is discredited rather than the argument"],
            ["Selection bias", "the group studied selected itself in a relevant way"],
            ["Absence of evidence", "not finding something is treated as proving it is not there"]
          ] },
          { t: "tip", x: "Flaw answers are written in <b>abstract</b> terms, so match the structure rather than the subject. Rephrase each choice as “the argument treats X as if it were Y” and see whether the passage actually did that." },
          { t: "warn", x: "A choice can name a genuine logical flaw and still be wrong, because <b>this</b> argument did not commit it. Check the passage for the move each choice describes before judging whether the move is bad." },
          { t: "eg",
            q: "Our new training programme must be effective: since it was introduced, employees who completed it have outperformed those who did not. The reasoning is most vulnerable to the criticism that it",
            choices: [
              "fails to consider that the employees who chose to complete the programme may already have been the stronger performers",
              "relies on a sample too small to support any conclusion",
              "assumes that job performance is the only measure of a programme's value",
              "criticises the employees rather than the programme itself",
              "presumes that what is true of the group must be true of every member"
            ],
            ans: "A",
            why: "Completion was voluntary, so the two groups differ in more than the training — the strongest employees may have been the ones who signed up. That is selection bias. The other choices name real flaws that this particular argument does not commit."
          }
        ]
      },
      {
        id: "cr-evaluate",
        title: "Evaluate the argument",
        mins: 3,
        blocks: [
          { t: "p", x: "You're handed an <b>unsound</b> fact → conclusion argument and asked which <b>question</b>, once answered, would tell you whether the conclusion holds. The right answer is the one whose two possible answers pull in opposite directions." },
          { t: "h", x: "The Extremes Test" },
          { t: "ol", items: [
            "Identify the conclusion.",
            "Take each choice to its two extremes (a strong YES and a strong NO).",
            "The correct choice: <b>one extreme strengthens, the other weakens</b>. If both extremes leave the argument untouched, it's wrong."
          ] },
          { t: "eg",
            q: "To increase profits, MillCo plans to cut costs by laying off nonessential employees. Answering which question best helps evaluate whether the plan will work?",
            choices: [
              "Whether MillCo could cut costs even more by eliminating some health benefits.",
              "Whether revenues will be hurt badly enough to threaten MillCo's profits."
            ],
            ans: "B",
            why: "Apply the extremes to (B): if revenues DO drop enough, the plan fails (weakens); if they don't, it's more likely to work (strengthens) — opposite directions, so it tests the argument. (A) offers a different way to cut costs, which doesn't bear on whether THIS layoff plan raises profits — both extremes leave it untouched."
          },
          { t: "h", x: "What a good question looks like" },
          { t: "ul", items: [
            "It targets the <b>gap</b>, never a stated premise — a premise is already settled.",
            "Its two possible answers pull in <b>opposite directions</b>: one shores the conclusion up, the other knocks it down.",
            "It is answerable in principle. A question nobody could settle tells you nothing."
          ] },
          { t: "h", x: "Questions that come up again and again" },
          { t: "ul", items: [
            "Is the group studied representative of the group concluded about?",
            "Has the obvious alternative explanation been ruled out?",
            "Does the period measured cover long enough for the effect to appear?",
            "Will the people affected respond the way the plan assumes?",
            "Does the statistic measure the thing the conclusion is about?"
          ] },
          { t: "warn", x: "Reject any choice whose two extremes leave the argument <b>unchanged</b>. That is the whole of the extremes test, and it eliminates three or four options on most of these questions." }
        ]
      },
      {
        id: "cr-assumption",
        title: "Assumption questions",
        mins: 4,
        blocks: [
          { t: "p", x: "An assumption is an <b>unstated premise</b> that bridges the argument's fact and its conclusion. “Every male over 18 can vote, so Jack can vote” assumes <i>(Jack is a male over 18)</i> — drop that bridge and the conclusion collapses." },
          { t: "h", x: "The negation test — the most powerful tool in CR" },
          { t: "ol", items: [
            "Identify the conclusion.",
            "Negate each choice, one by one.",
            "The correct assumption is the one whose <b>negation weakens (breaks) the conclusion</b>. A true assumption is load-bearing — remove it and the argument falls."
          ] },
          { t: "eg",
            q: "Alusia offers a $1,000-per-worker tax credit to any company employing more than 20 manufacturing workers, expecting most Calonian manufacturers to relocate there. The plan's success relies on the assumption that:",
            choices: [
              "Tax credits are the most effective incentive for luring companies.",
              "Calonia will not offer a matching tax credit to companies that stay.",
              "Calonian companies are less likely to succeed if they relocate.",
              "Most Calonian manufacturers expect to employ at least 20 workers within ten years.",
              "Calonian companies pay each worker more than $1,000 per year on average."
            ],
            ans: "D",
            why: "Negate (D): if most Calonian manufacturers DON'T expect to employ 20+ workers, the credit doesn't apply to them and the plan fails — so (D) is required. Negating the others doesn't break the argument (e.g. “most effective incentive” is stronger than needed)."
          },
          { t: "note", x: "That covers the seven classic CR families. Three more question types follow — boldface and method of reasoning, point at issue, and complete the argument — which together account for most of the harder CR questions in the bank." },
          { t: "h", x: "The assumptions that recur" },
          { t: "ul", items: [
            "<b>No alternative cause</b> — nothing else explains the observed effect.",
            "<b>The data is representative</b> — the sample stands for the whole.",
            "<b>No offsetting effect</b> — the plan will not trigger something that cancels its own benefit.",
            "<b>The terms match</b> — the thing measured is the thing concluded about.",
            "<b>The parties will cooperate</b> — the people the plan depends on will actually do what it needs.",
            "<b>Feasibility</b> — what the plan requires is possible at all."
          ] },
          { t: "warn", x: "An assumption is the <b>minimum</b> the argument needs, so a choice that is stronger than necessary is wrong even when it would help. “Tax credits are the most effective incentive” goes far beyond an argument that needs only “this credit will apply”." },
          { t: "tip", x: "Distinguish the two families: a <b>necessary</b> assumption must be true for the argument to work and survives the negation test; a <b>sufficient</b> assumption would prove the conclusion outright and appears on “which, if assumed, allows the conclusion to be properly drawn” stems." }
        ]
      },
      {
        id: "cr-boldface",
        title: "Boldface & Method of Reasoning",
        mins: 5,
        blocks: [
          { t: "p", x: "The largest CR family in this bank. Boldface questions ask what role two marked portions play; method-of-reasoning questions ask how the argument — or one speaker's reply — proceeds. Both are answered the same way: by <b>attribution</b>, not by content." },
          { t: "h", x: "The two-step method" },
          { t: "ol", items: [
            "<b>Find the author's own conclusion first.</b> Everything else is defined relative to it.",
            "<b>Label each boldface</b> as one of: the main conclusion, an intermediate conclusion, evidence, an opposing position, or a concession."
          ] },
          { t: "h", x: "Let the signposts do the work" },
          { t: "table", head: ["Signpost", "What follows belongs to"], rows: [
            ["Some argue / critics claim / it is commonly thought", "someone else — the position being answered"],
            ["However / But / Yet / Nevertheless", "the author, turning against what came before"],
            ["Therefore / thus / consequently / it follows that", "a conclusion"],
            ["Since / because / for", "the support for a conclusion"],
            ["Granted / admittedly / it is true that", "a concession — still on the author's side overall"]
          ] },
          { t: "tip", x: "An argument often has <b>two</b> conclusions. Ask “why?” of each: the one that answers the other is the support, and the one left unanswered is the main conclusion." },
          { t: "warn", x: "Check <b>both halves</b> of every option. The commonest wrong answer describes the first portion correctly and reverses the second — evidence for a conclusion in place of the conclusion, or support in place of opposition." },
          { t: "h", x: "For method questions, name the move" },
          { t: "ul", items: [
            "Describe the <b>move</b>, not the topic: offering a counterexample, drawing an analogy, questioning an assumption, supplying an alternative explanation, attacking the sample.",
            "Accepting a premise and then naming an unconsidered consequence attacks the <b>conclusion</b>, not the reasoning.",
            "“This evidence is inadequate” attacks the <b>support</b>, not the truth of the claim — prefer wording that says inadequately supported over wording that says false."
          ] },
          { t: "eg",
            q: "Critics say the new rail line will never pay for itself. [[Ridership in its first year did fall short of projections.]] However, the line's costs drop sharply once its construction debt is retired, and ridership has risen every year since. [[The line will therefore cover its costs within a decade.]] The two boldface portions play which roles?",
            choices: [
              "The first is the argument's conclusion; the second supports it.",
              "The first is a consideration that weighs against the argument's conclusion; the second is that conclusion.",
              "The first is evidence for the argument's conclusion; the second restates it.",
              "The first states the critics' conclusion; the second is evidence against that conclusion.",
              "Each provides support for the argument's conclusion."
            ],
            ans: "B",
            why: "The first portion is a fact the author concedes and that cuts against him — it is the critics' side of the ledger, not his evidence. \"However\" then turns, and \"therefore\" marks the last sentence as the author's own conclusion. Note that the first is a fact conceded, not the critics' conclusion, which was that the line will never pay for itself."
          }
        ]
      },
      {
        id: "cr-twospeaker",
        title: "Point at Issue (Two Speakers)",
        mins: 3,
        blocks: [
          { t: "p", x: "Two people speak; you name what they disagree about. The correct choice must pass <b>two</b> tests, and every wrong answer fails one of them:" },
          { t: "ol", items: [
            "<b>Both speakers must take a position on it.</b> If only one mentions it, it cannot be the issue.",
            "<b>Their positions must be opposite.</b> If both address it and agree, it is common ground."
          ] },
          { t: "h", x: "How to work it" },
          { t: "p", x: "Write each speaker's claim in half a line before reading the options. Then run both tests on each choice — most collapse on the first test alone." },
          { t: "ul", items: [
            "The second speaker usually <b>concedes</b> something (“Granted…”, “True, but…”). Whatever is conceded is agreement, never the issue.",
            "If a word appears in only one speaker's mouth, an option built on that word almost always fails the both-address test.",
            "Keep the issue <b>as narrow as the exchange</b>. Options that generalise beyond what was said overreach.",
            "Watch the stem: “committed to <b>agreeing</b> about” runs the same two tests with the sign flipped — look for the shared premise under two opposite predictions."
          ] },
          { t: "warn", x: "A speaker who never mentions a topic has no view on it, however obvious their view seems. You are matching stated positions, not guessing at people." },
          { t: "eg",
            q: "Ana: The new tax on sugary drinks will cut consumption, so it will improve public health. Ben: Consumption will certainly fall, but people will simply switch to untaxed drinks that are just as unhealthy. Ana and Ben disagree over whether",
            choices: [
              "consumption of sugary drinks will fall",
              "the tax will improve public health",
              "untaxed drinks are unhealthy",
              "taxation is an appropriate tool of public policy",
              "the tax will raise significant revenue"
            ],
            ans: "B",
            why: "Ben opens by granting that consumption will fall, so that is agreement, not the issue. He denies only the health benefit Ana infers from it. The unhealthiness of untaxed drinks is Ben's alone, and neither speaker mentions policy tools or revenue."
          }
        ]
      },
      {
        id: "cr-complete",
        title: "Complete the Argument",
        mins: 4,
        blocks: [
          { t: "p", x: "A passage ends mid-sentence and you supply the rest. The <b>connector before the blank</b> tells you what kind of thing belongs there — read it before you read a single option." },
          { t: "table", head: ["Connector before the blank", "What the blank must be"], rows: [
            ["since / because / for", "a reason that makes the conclusion follow"],
            ["however / yet / but", "something that cuts against what came before"],
            ["so / therefore / thus", "the conclusion itself"]
          ] },
          { t: "h", x: "Then treat it as a familiar question" },
          { t: "ul", items: [
            "After <b>since</b> or <b>because</b>, the blank is doing a strengthen or assumption job: it must close the gap the conclusion needs.",
            "When the stem says the evidence <b>does not show</b> something, or that a conclusion would be <b>premature</b>, the blank must <b>block</b> the inference — supply a confounder or an alternative explanation, not more support.",
            "Some stems set up two branches (“either beside the point, since …, or else misleading, since ___”). The blank must fit <b>the branch it is attached to</b>."
          ] },
          { t: "tip", x: "Prephrase before looking. Say out loud what the argument still needs, then find the option that says it. Reading five completions cold is how people talk themselves into a plausible-sounding wrong answer." },
          { t: "eg",
            q: "Rising fuel prices have pushed up the cost of shipping goods to the island. Nevertheless, the retail price of imported food there has not risen, because",
            choices: [
              "fuel prices are expected to fall again next year",
              "the island imports the great majority of the food its residents eat",
              "retailers have absorbed the extra cost by accepting lower margins",
              "shipping accounts for a large share of the retail price of imported food",
              "local food production on the island has declined in recent years"
            ],
            ans: "C",
            why: "The blank follows \"because\", so it must explain why retail prices held steady despite higher shipping costs. Someone had to absorb the increase, and (C) names them. (B) and (D) both make the puzzle harder, (E) would push prices up, and (A) concerns next year rather than now."
          }
        ]
      },
      {
        id: "cr-except",
        title: "EXCEPT and LEAST questions",
        mins: 8,
        blocks: [
          { t: "p", x: "An EXCEPT question is an ordinary question with the answer turned inside out. \"Each of the following, if true, weakens the argument EXCEPT\" hands you four choices that weaken and one that does not — and the one that does not is the answer. Nothing about the argument or the reasoning changes; only which choice you are looking for." },
          { t: "p", x: "They are worth practising separately because they attack a habit you have spent weeks building. On a normal weaken question you hunt for the weakener; here that instinct produces four \"right-looking\" answers and leads you to pick the strongest of them — which is exactly wrong." },
          { t: "h", x: "The forms it takes" },
          { t: "table", head: ["Stem", "Four of the choices…", "The answer…"], rows: [
            ["…weakens the argument EXCEPT", "weaken", "strengthens, or is irrelevant"],
            ["…strengthens the argument EXCEPT", "strengthen", "weakens, or is irrelevant"],
            ["…would be useful to know EXCEPT", "bear on the conclusion", "does not bear on it"],
            ["…helps explain the discrepancy EXCEPT", "resolve the paradox", "leaves it standing, or deepens it"],
            ["Which would LEAST strengthen…", "strengthen", "strengthens least, or not at all"]
          ]},
          { t: "warn", x: "The answer to a weaken-EXCEPT question is <b>not necessarily a strengthener</b>. It is simply the one choice that fails to weaken — and on the exam that is very often a choice with <b>no effect at all</b>. Students who go hunting for the opposite of the other four miss the neutral answer sitting in plain sight." },
          { t: "h", x: "How to work one" },
          { t: "ol", items: [
            "Rewrite the stem as a <b>checklist</b> before you read a single choice: \"cross out everything that weakens.\" That one line keeps the task in front of you when the choices start to look alike.",
            "Read the argument the usual way — find the conclusion, name the gap. The four weakeners will all attack that gap.",
            "Go through the choices with a <b>yes or no</b> question, never a ranking: does this weaken? Yes — cross it out. You are not comparing choices with each other.",
            "The one left standing is the answer. Read it once more to confirm it genuinely does not weaken, rather than weakening only slightly."
          ]},
          { t: "tip", x: "\"Slightly\" still counts. A choice that weakens even a little is a weakener and must be crossed out. The EXCEPT answer is the one that does <i>nothing</i> to the argument, or pushes it the other way — never the mildest of the four." },
          { t: "h", x: "The two mistakes that lose these questions" },
          { t: "ul", items: [
            "<b>Forgetting the flip halfway through.</b> Around the third choice your normal instinct reasserts itself and you start looking for the best weakener. The checklist line at the top of your scratch work is there to stop this; glance back at it after every choice.",
            "<b>Confusing EXCEPT with NOT.</b> \"Which of the following is NOT true?\" is a different question — it asks about facts, not about effect on an argument. An EXCEPT stem always names an effect: weakens, strengthens, explains, supports."
          ]},
          { t: "eg",
            q: "City council member: Since the new protected bicycle lanes opened on Main Street last spring, the number of cyclists counted on that street each morning has risen by 40 percent. Clearly the new lanes have caused more people to cycle to work.\n\nEach of the following, if true, weakens the council member's argument EXCEPT:",
            choices: [
              "Fuel prices in the city rose sharply during the same period, and bus fares increased by a third.",
              "A city bike-share scheme, with a large docking station on Main Street, was launched in the same month the lanes opened.",
              "Morning cyclist counts rose by roughly 40 percent over the same period in comparable cities that built no new lanes.",
              "After the lanes opened, the council's count began to include cyclists using Main Street for recreation, not only those commuting.",
              "The lanes were completed for a third less than the amount the council had budgeted for them."
            ],
            ans: "E",
            why: "The gap is the usual causal one: cyclists rose after the lanes, therefore because of the lanes. (A) and (B) each offer a different cause for the rise — expensive alternatives, and a bike-share scheme that put bicycles on that very street. (C) says the rise happened everywhere regardless of lanes, which undercuts the lanes as the cause. (D) says the number rose partly because the counting rule changed, so the rise is at least partly an artefact. All four weaken. (E) is about what the lanes cost, which has no bearing on whether they caused anyone to cycle — it neither weakens nor strengthens, and that is what makes it the answer. Notice that the answer is a neutral fact, not a strengthener."
          }
        ]
      }
    ]
  },

  {
    id: "rc-octaave",
    section: "rc",
    title: "Reading Comprehension",
    source: "Adapted from your course material",
    parts: [
      {
        id: "rc-how",
        title: "How RC works & OCTAAVE",
        mins: 4,
        blocks: [
          { t: "p", x: "Every RC passage is a <b>formal piece of writing</b>, and what separates formal writing from a chat message is that it has a <b>purpose</b>. That's why almost every passage carries a <i>primary purpose</i> question — nailing the purpose is half the battle." },
          { t: "p", x: "Purposes fall into a handful of families: to <b>argue</b> a conclusion, to <b>suggest / recommend</b>, to <b>evaluate</b> pros and cons, to <b>explain a puzzling phenomenon</b>, or simply to <b>inform / report</b> facts with no argument at all." },
          { t: "p", x: "Broadly, passages split roughly \\(\\tfrac{50}{50}\\):" },
          { t: "ul", items: [
            "The author expresses a <b>personal opinion</b> — the primary purpose restates that opinion.",
            "The author expresses <b>no opinion</b> — the purpose usually lives at the key contradiction location."
          ] },
          { t: "h", x: "Two kinds of questions" },
          { t: "ul", items: [
            "<b>Stated</b> — the answer is right there in the text (find and match).",
            "<b>Inferred</b> — the answer must follow from the text without being stated outright."
          ] },
          { t: "h", x: "OCTAAVE at a glance" },
          { t: "p", x: "Four letters are about reading the <b>passage</b>, three are about handling the <b>question and options</b>:" },
          { t: "table", head: ["Letter", "Stands for", "About"], rows: [
            ["O", "Opinion", "Passage"],
            ["C", "Contradiction", "Passage"],
            ["T", "Tone", "Passage"],
            ["A", "Awareness", "Passage"],
            ["A", "Avoid", "Options"],
            ["V", "Verify", "Options"],
            ["E", "Eliminate", "Options"]
          ] },
          { t: "tip", x: "OCTAAVE has to become <b>subconscious</b> — like driving. Applied consciously it's slow; drilled over a few hundred official passages it becomes automatic." },
          { t: "h", x: "How to read the passage" },
          { t: "ol", items: [
            "Read the <b>first paragraph properly</b>. It names the topic, and very often the purpose is already visible by its last sentence.",
            "For each later paragraph, ask only <b>what job it does</b> — sets up a problem, gives evidence, raises an objection, answers one. Fix it in one clause.",
            "Skim the dense middles. Names, dates and figures are <b>look-up material</b>: note where they live and move on.",
            "Register every turn — however, yet, in contrast. Those are where the questions are set."
          ] },
          { t: "p", x: "You should finish with a four-line map of the passage and almost no memorised detail. That map answers the main-idea and structure questions outright, and tells you where to look for everything else." },
          { t: "tip", x: "Budget roughly <b>2 minutes reading</b> and about <b>1½ minutes a question</b>. Reading faster to save time is a false economy — a bad map costs more on every question than it saved once." },
          { t: "warn", x: "Never re-read the whole passage for a question. If you cannot say which paragraph an answer lives in, your map is the problem, not your memory." }
        ]
      },
      {
        id: "rc-opinion",
        title: "O — Opinion",
        mins: 3,
        blocks: [
          { t: "p", x: "Your <b>first task</b> in any passage is to find the personal opinion of the author (or of the people the author sides with). Opinions merely <i>mentioned</i> but not endorsed by the author don't count." },
          { t: "ul", items: [
            "The author has either <b>no opinion</b> or <b>some opinion</b> — and if they have one, it may be strong or mild.",
            "The author can <b>never</b> have a wavering, changing, uncertain or ambivalent opinion.",
            "<b>Opinions</b> can be challenged or supported. <b>Facts</b> can be neither."
          ] },
          { t: "h", x: "What signals an opinion?" },
          { t: "p", x: "Look for <b>Future · Feeling · Uncertainty · Debatability</b>:" },
          { t: "ul", items: [
            "<b>Prediction</b> — may, might, could, will, would, likely (future).",
            "<b>Suggestion</b> — should, propose, recommend, ought to, must, would be wise to (feeling/future).",
            "<b>Stance</b> — position, viewpoint, belief; praise or criticism; agreement or disagreement.",
            "<b>Claim</b> — a conclusion drawn, judgment reached, or hypothesis (debatable / uncertain)."
          ] },
          { t: "tip", x: "The answer to a primary-purpose or main-idea question is almost a <b>restatement of the author's opinion</b>. If the author has no opinion, look instead at the key contradiction." },
          { t: "h", x: "Whose opinion is it?" },
          { t: "p", x: "A passage can carry several views, and only some of them are the author's. Sort each one as you read:" },
          { t: "table", head: ["Signal", "Whose view"], rows: [
            ["some scholars argue, critics contend", "somebody else's"],
            ["it has been suggested, the traditional account", "somebody else's, often about to be challenged"],
            ["however, in fact, yet, the evidence suggests", "the author stepping in"],
            ["convincing, rightly, as X has shown", "somebody else's, endorsed by the author"]
          ] },
          { t: "warn", x: "An author who lays out two views and takes <b>no side</b> has no opinion. The purpose is then descriptive — presenting, comparing, explaining — and any answer choice that has the author arguing for something is wrong." },
          { t: "tip", x: "Opinions attributed to others are still worth marking, because “the author would most likely agree” questions turn on knowing which views the author adopted and which were merely reported." }
        ]
      },
      {
        id: "rc-contradiction",
        title: "C — Contradiction",
        mins: 4,
        blocks: [
          { t: "p", x: "Opinions are often introduced — or reversed — at a <b>contradiction</b>. That's also where general and inference questions tend to be set. So the key contradiction location is prime real estate: mark it as you read." },
          { t: "h", x: "Contradiction words to watch for" },
          { t: "p", x: "<i>although, but, by contrast, contrary to, conversely, despite, even though, however, in contrast, in spite of, nevertheless, nonetheless, notwithstanding, on the other hand, regardless, still, yet.</i>" },
          { t: "tip", x: "When the author has no explicit opinion, the primary purpose is <b>most likely found right at the key contradiction</b>." },
          { t: "h", x: "What a contrast word is doing" },
          { t: "ul", items: [
            "<b>The author turning</b> against a view just reported — the most common, and the likeliest place the main point sits.",
            "<b>A limit</b> being placed on a claim the author has just made.",
            "<b>The pivot</b> from a puzzle to its explanation.",
            "<b>A concession</b> before the real point: “Granted X, but Y” — Y is what the author believes."
          ] },
          { t: "p", x: "In every one of those shapes, the weight falls on what comes <b>after</b> the contrast word. What precedes it is set-up, and answer choices built from that half are among the most reliable traps in RC." },
          { t: "tip", x: "Mark contrast words as you read. When a question later asks for the primary purpose, the author's attitude, or what a paragraph is doing, the answer is usually within a line or two of one of your marks." },
          { t: "eg",
            q: "<b>Passage:</b> Early trials of the drug reported a marked drop in symptoms, and the finding was widely publicised. Those trials, however, followed patients for only six weeks. Later studies running a full year found that the improvement faded after the third month.<br><br>The word “however” signals that the author is about to",
            choices: [
              "introduce evidence that limits the earlier finding",
              "reject the early trials as fraudulent",
              "explain why the early finding was publicised",
              "recommend a longer course of treatment",
              "compare the drug with a competing treatment"
            ],
            ans: "A",
            why: "The contrast introduces the six-week window, which is what makes the later one-year result damaging to the early claim. Nothing calls the early trials dishonest — only short — and no recommendation or comparison appears anywhere."
          }
        ]
      },
      {
        id: "rc-tone",
        title: "T — Tone",
        mins: 4,
        blocks: [
          { t: "p", x: "Tone is the single sentiment that runs through the whole passage. Always pre-judge it as one of four:" },
          { t: "table", head: ["Tone", "Means"], rows: [
            ["Positive", "Praise / optimism"],
            ["Negative", "Criticism / pessimism"],
            ["Neutral", "Neither praise nor criticism — think NEWS"],
            ["Balanced", "Pros AND cons of one thing — think REVIEWS"]
          ] },
          { t: "ul", items: [
            "If the tone is <b>balanced</b>, the right answer to purpose/main-idea almost always contains <b>Assess, Critique or Evaluate</b> (ACE).",
            "One plus and ten minuses is still <b>balanced</b> — you don't need equal weight.",
            "If the author has <b>no</b> personal opinion, the tone must be <b>neutral</b>. (An opinion can still read neutral, but no-opinion is always neutral.)",
            "The tone <b>never flips</b> midway — pessimistic at the start means pessimistic throughout."
          ] },
          { t: "h", x: "Tricky words that flip meaning" },
          { t: "ul", items: [
            "<b>little</b> = hardly any / none (negative); <b>a little</b> = some (positive).",
            "<b>few</b> = hardly any / no one (negative); <b>a few</b> = some (positive).",
            "<b>critique</b> = weigh pros and cons (not “criticise”); a critic can give five stars or one.",
            "<b>dispassionate / disinterested</b> = unbiased, objective, neutral.",
            "<b>qualified</b> = limited, with reservations; <b>unqualified</b> = complete, total, without conditions."
          ] },
          { t: "warn", x: "Tone answers using <b>extreme emotion</b> are traps: strong indignation, sharp derision, unabashed admiration, deep-rooted hostility, vehement condemnation. So is <b>indifference / ambivalence</b> — the author is never indifferent or wavering about their own writing." },
          { t: "h", x: "Pinning the tone in one pass" },
          { t: "p", x: "Collect the author's own adjectives and verbs as you read — <b>convincing, careful, overstated, misguided, promising</b> — and ignore the ones inside reported views. The tone is roughly their average." },
          { t: "ul", items: [
            "Hedges — <b>may, appears, suggests, arguably</b> — signal a measured tone and rule out the strong options.",
            "Praise plus a reservation is the commonest academic tone: look for wording like <b>qualified approval</b>, <b>cautious optimism</b>, <b>measured scepticism</b>.",
            "When the author praises a claim for what it does <b>not</b> assert, the attitude is approval of its restraint, not enthusiasm."
          ] },
          { t: "warn", x: "The tone of a <b>reported</b> view is not the author's tone. A passage can spend a paragraph on someone else's fierce criticism and still be neutral itself." },
          { t: "tip", x: "For “the author's attitude toward X”, read only the sentences where X appears and only the author's own words about it. The rest of the passage is noise for that question." }
        ]
      },
      {
        id: "rc-awareness",
        title: "A — Awareness",
        mins: 2,
        blocks: [
          { t: "p", x: "Awareness is <b>background knowledge</b>. If you already know the topic, an unfamiliar passage suddenly reads easily — so the fix for “I couldn't follow the passage” is broad reading, not more RC drills." },
          { t: "h", x: "Topics that come up again and again" },
          { t: "ul", items: [
            "Biological evolution; brain science; the animal kingdom; cell biology.",
            "American history — independence, the Civil War, minorities, women & feminism, civil rights.",
            "Economics & capital markets; capitalism / communism / socialism / the Cold War.",
            "Science & astronomy; the latest technology; landmark Supreme Court cases."
          ] },
          { t: "tip", x: "Build a shallow-but-wide familiarity with these areas. You don't need expertise — just enough context that the vocabulary and setup feel familiar." },
          { t: "h", x: "Reading material you know nothing about" },
          { t: "ul", items: [
            "Do not fight the jargon. A passage <b>defines everything it needs</b>, and any term it does not define is not required.",
            "Track a technical term by its <b>role</b>, not its meaning: “the thing that causes the decline” is enough to answer questions about it.",
            "Follow the <b>argument</b>, not the facts — claim, evidence, objection, verdict. Dense science passages are argument passages wearing a lab coat.",
            "If a sentence defeats you, read on. The next sentence usually paraphrases it, because the passage was written to be understood on one pass."
          ] },
          { t: "warn", x: "Familiarity is its own trap. When you already know a topic, it becomes very easy to pick the answer that is <b>true in the world</b> rather than the one supported <b>on the page</b>. Outside knowledge never justifies a choice." }
        ]
      },
      {
        id: "rc-avoid",
        title: "A — Avoid",
        mins: 3,
        blocks: [
          { t: "p", x: "In the <b>answer choices</b>, certain phrasings are almost always wrong <i>unless the passage says them verbatim</i>. Learn to flinch at them:" },
          { t: "ul", items: [
            "<b>Superlatives</b> — best, worst, latest, most.",
            "<b>Extreme words</b> — always, never, all, none, only, unique, everyone, no one, must, impossible, the first, every, totally.",
            "<b>Specific → general</b> — the passage is about lions; a choice that generalises to “mammals” or “all animals” is out.",
            "<b>Unwarranted predictions</b> about the future.",
            "<b>Very strong / emotional language</b> — dismiss, champion, castigate, eulogize.",
            "<b>Politically incorrect or controversy-stirring</b> language — offensive to any group, region, religion, gender, race or nation."
          ] },
          { t: "tip", x: "Why so? The exam plays safe: correct answers are usually <b>mild and hard to disprove</b>, because extreme answers are too easy to find exceptions to. GMAC writes the questions and answers (not the passages), and words them to avoid ever being wrong." },
          { t: "note", x: "Also never pick a choice that <b>disputes / challenges a stated fact</b> — that's disallowed across all of RC and CR." },
          { t: "h", x: "The five trap shapes" },
          { t: "table", head: ["Trap", "How it reads"], rows: [
            ["Too extreme", "right idea, pushed past what the passage says"],
            ["Out of scope", "true, sensible, and never mentioned"],
            ["Half right", "first clause matches the passage, second does not"],
            ["Reversal", "the passage's relationship stated backwards"],
            ["True but not asked", "accurate, and answers a different question"]
          ] },
          { t: "tip", x: "<b>Half right</b> is the dangerous one, because you recognise the opening words and stop reading. Finish every choice to its last word before you keep it." },
          { t: "warn", x: "<b>Reversal</b> traps hide in cause and comparison: which factor caused which, which group had more, which came first. When a choice looks perfect, check the direction before you commit." }
        ]
      },
      {
        id: "rc-verify",
        title: "V & E — Verify and Eliminate",
        mins: 2,
        blocks: [
          { t: "p", x: "This is the heart of RC — roughly <b>90% of RC is one word: Verify</b>." },
          { t: "h", x: "Put your finger on it" },
          { t: "p", x: "For every word in a choice, ask: <b>can I go back and put my finger on the text</b> that justifies it? If you can't verify it, the choice is wrong." },
          { t: "warn", x: "Crucially, you verify to prove the <b>wrong</b> answers wrong — not to justify the right one. Don't fall in love with an attractive choice; eliminate the other four and take what remains." },
          { t: "tip", x: "Special case: if an RC question is really a CR task (weaken, strengthen, assumption, evaluate, paradox) and says <b>“if true”</b>, OCTAAVE's verify-from-passage rule is off — “if true” means the answer brings in outside information you can't check against the text." },
          { t: "h", x: "Eliminating in two passes" },
          { t: "ol", items: [
            "<b>First pass, fast.</b> Cross out anything extreme, out of scope, or obviously about the wrong part of the passage. That usually removes two or three.",
            "<b>Second pass, slow.</b> For each survivor, go and find the line. If you cannot point at it, it is gone.",
            "<b>If two survive</b>, find the single word they differ on — it is almost always scope, strength, or who said it."
          ] },
          { t: "tip", x: "Wrong answers are wrong for a <b>nameable</b> reason. If you cannot say why the other four fail, you have not finished the question — you have guessed with extra steps." },
          { t: "warn", x: "“It sounds like something the author would say” is not verification. Neither is “it must be right because the others are worse” — that is where the half-right trap collects its marks." }
        ]
      },
      {
        id: "rc-mainidea",
        title: "Main Idea & Primary Purpose",
        mins: 4,
        blocks: [
          { t: "p", x: "Answer from your <b>paragraph map</b>, not from memory of the details. As you read, fix each paragraph in one clause — “why lichens are sensitive”, “the crude early surveys”, “the refined method and its critics”. The correct choice is the one that spans them all." },
          { t: "h", x: "Scope eliminates more than truth does" },
          { t: "ul", items: [
            "<b>Too narrow</b> — a choice that is perfectly true but covers only one paragraph. This is the commonest wrong answer.",
            "<b>Too broad</b> — a choice about the whole field when the passage discusses one study or one case.",
            "<b>Right content, wrong verb</b> — check the opening verb. If the passage never argues for anything, an option beginning “argue that” or “prove that” is out no matter how well the rest fits."
          ] },
          { t: "tip", x: "The <b>final paragraph</b> usually contains the author's own formulation of the point. When two options survive, the one closer to that last-paragraph wording is almost always the answer." },
          { t: "h", x: "Structures that recur" },
          { t: "ul", items: [
            "Old view → new evidence → replacement: the purpose covers the whole arc, not just the new view.",
            "Puzzle in paragraph 1 → two explanations: the purpose is <b>examining</b> the puzzle, not resolving it.",
            "Claim → objection → verdict: the purpose is the position that survives both."
          ] },
          { t: "warn", x: "Distrust absolutes. <b>Always, only, never, proves, all</b> rarely survive in an academic passage, whose author is usually hedging. A measured option beats a dramatic one." },
          { t: "eg",
            q: "<b>Passage:</b> For a century historians attributed the town's decline to the closing of its mill. Recently, however, tax records have shown that the population had already fallen by a third before the mill shut. The closure now appears to have been a symptom of the decline rather than its cause.<br><br>The primary purpose of the passage is to",
            choices: [
              "describe working conditions in the mill",
              "argue that a long-accepted explanation reverses the causation",
              "explain why tax records are a reliable historical source",
              "compare this town's decline with that of other mill towns",
              "recommend that historians re-examine every industrial closure"
            ],
            ans: "B",
            why: "The three sentences run old view, new evidence, revised verdict — and the verdict is that cause and symptom were the wrong way round. The last choice is the classic overreach: the passage revises one case and recommends nothing."
          }
        ]
      },
      {
        id: "rc-detail",
        title: "Supporting Detail",
        mins: 4,
        blocks: [
          { t: "p", x: "These are <b>open-book retrieval</b> questions. Find the sentence, read it literally, and match. You are never rewarded for reasoning here — only for locating." },
          { t: "ul", items: [
            "Go back to the text every time. A detail that sounds right from memory is exactly how the trap works.",
            "Wrong options are usually <b>true statements from the wrong part</b> of the passage, or the passage's <b>contrast</b> rather than its content.",
            "When a passage describes two studies, groups or speakers, wrong options <b>swap their attributions</b>. Keep a note of who said what.",
            "A choice can be entirely reasonable in the world and still be wrong. Only the page counts."
          ] },
          { t: "tip", x: "For <b>EXCEPT</b> questions, find the passage's own list and tick the options off against it one at a time. The answer is often the option that <b>contradicts</b> the passage rather than one it merely omits." },
          { t: "warn", x: "Match the passage's hedges. If the text says a method “may appear” simpler, an option asserting that it <b>is</b> simpler has changed the claim." },
          { t: "h", x: "A procedure that costs ten seconds and saves the question" },
          { t: "ol", items: [
            "Take the distinctive noun from the question stem — the one word you could find with a search.",
            "Find it in the passage and read the <b>whole sentence</b>, plus the one before and after.",
            "Answer from that window before you look at the choices, then match."
          ] },
          { t: "eg",
            q: "<b>Passage:</b> Lichens absorb water and nutrients directly from the air across their entire surface. Because they have no roots, they cannot filter airborne contaminants the way rooted plants can. Sulfur dioxide is especially damaging, since it disrupts the photosynthetic partner inside the lichen.<br><br>According to the passage, lichens cannot filter airborne contaminants because they",
            choices: [
              "grow only in heavily polluted regions",
              "have no roots",
              "depend on a photosynthetic partner",
              "absorb sulfur dioxide in preference to other gases",
              "have less surface area than rooted plants"
            ],
            ans: "B",
            why: "The second sentence gives the reason outright — no roots. The photosynthetic partner is why sulfur dioxide is damaging, a different sentence answering a different question, and it is the trap most people take."
          }
        ]
      },
      {
        id: "rc-inference",
        title: "Inference in RC",
        mins: 4,
        blocks: [
          { t: "p", x: "An RC inference must be <b>forced</b> by the text, not merely consistent with it. If you can imagine the passage being true while the choice is false, the choice is wrong." },
          { t: "h", x: "Where inferences live" },
          { t: "ul", items: [
            "<b>Between two sentences.</b> Most answers come from combining two separate statements — a mechanism in one paragraph and a fact in another.",
            "<b>At a boundary.</b> A stated limit (“they had to return to fresh water frequently”) usually implies a consequence (“so they could not cross a wide ocean”).",
            "<b>In a contrast.</b> A stated departure from a pattern tells you what the pattern was."
          ] },
          { t: "h", x: "What makes a choice too strong" },
          { t: "ul", items: [
            "It adds a <b>mechanism, motive or comparison</b> the passage never gives.",
            "It widens the <b>scope</b> — evidence about one substance rules out that substance only, not every substance.",
            "It upgrades a hedge: “suggests” does not license “demonstrates”, and “often” does not license “always”."
          ] },
          { t: "tip", x: "Expect the answer to be <b>modest, even obvious</b>. A correct inference is rarely an exciting new insight; it is usually a careful restatement that survives every test you can throw at it." },
          { t: "warn", x: "Absence of evidence is not evidence of absence — unless the passage says the test would have detected the thing. Watch for options that turn “we did not find it” into “it is not there”." },
          { t: "eg",
            q: "<b>Passage:</b> The species' eggs hatch only in water that stays above 18°C for at least ten consecutive days. In the lake's northern basin the water has risen above 18°C in only three of the last twenty summers, and never for more than a week.<br><br>The passage most strongly supports which of the following?",
            choices: [
              "The species has not bred successfully in the northern basin in the last twenty years.",
              "The species cannot survive in the northern basin.",
              "The lake's southern basin is warmer than its northern basin.",
              "Rising temperatures will soon allow the species to breed in the northern basin.",
              "The species breeds more successfully in shallow water than in deep water."
            ],
            ans: "A",
            why: "Ten consecutive days are required and the basin has never managed more than seven, so no hatching can have occurred — that is forced. Surviving is not the same as breeding, which makes the second choice too strong, and the rest bring in a basin, a trend and a depth the passage never mentions."
          }
        ]
      },
      {
        id: "rc-function",
        title: "Function of a Detail or Paragraph",
        mins: 4,
        blocks: [
          { t: "p", x: "These ask <b>why something is there</b>, not what it says. The content of the detail is rarely the answer; its job in the argument is." },
          { t: "h", x: "Read the sentence before it" },
          { t: "p", x: "An example almost always serves the claim <b>immediately above it</b>. A paragraph's function is usually announced in its own <b>topic sentence</b>. Read one line up and the question is generally over." },
          { t: "h", x: "Transitions decide the role" },
          { t: "table", head: ["Lead-in", "The detail is"], rows: [
            ["For example / consider", "an illustration of the claim just made"],
            ["Not every case fits / However", "a counterexample or a turn"],
            ["Critics protest / it is commonly thought", "the position about to be answered"],
            ["Therefore / it is reasonable to think", "the author's conclusion"],
            ["Quotation marks around a term", "scepticism — the author will not use the word straight"]
          ] },
          { t: "tip", x: "Keep the scope tight. An example that illustrates the weakness of <b>one method</b> is not an attack on the subject as a whole, and a quotation that expresses a group's view is not an example of a particular case." },
          { t: "warn", x: "Offering an alternative is not the same as refuting. A paragraph that presents a competing explanation usually leaves the first one standing — check whether the passage actually dismisses it." },
          { t: "eg",
            q: "<b>Passage:</b> The early surveys were cheap and needed no instruments, which is why they spread so quickly. They were also crude: they revealed that pollution was severe but said little about which pollutants were responsible. Two cities with identical damage maps might have had very different pollution profiles.<br><br>The author mentions the two cities primarily in order to",
            choices: [
              "illustrate a shortcoming of the early surveys",
              "argue that cities are the worst polluters",
              "show that the surveys were unreliable about severity",
              "introduce a more precise method of analysis",
              "explain why the surveys spread so quickly"
            ],
            ans: "A",
            why: "The sentence sits directly after “they were also crude … said little about which pollutants”, so it is an example of that crudeness. Note that the surveys were reliable about severity — that is the one thing they did well, which makes the third choice a reversal."
          }
        ]
      },
      {
        id: "rc-structure",
        title: "Passage Structure",
        mins: 5,
        blocks: [
          { t: "p", x: "Structure questions ask how the passage is built: what each paragraph does and how the parts connect. Your RC guide's solutions answer them the same way every time, with a one-line job description per paragraph, written while reading and before looking at the choices." },
          { t: "ul", items: [
            "<b>Paragraph 1</b> usually states the topic and either the author's position or the position the author will attack: 'conventional theory is inaccurate', 'a traditional view is introduced'.",
            "<b>Middle paragraphs</b> develop, illustrate, qualify or contrast: an example (minority communities and capital markets), a counter-case, a second theory, a piece of evidence.",
            "<b>The last paragraph</b> often explains, evaluates or extends: the assumptions behind the failure, the author's own verdict, a recommendation, or an irony (if humans interfere the rhinos die; if they stop, the rhinos' food disappears)."
          ]},
          { t: "h", x: "Reading the choices" },
          { t: "p", x: "Structure answers are written in abstract nouns: 'a theory is described, cases it omits are presented, the assumptions behind the omission are explained'. Match each abstract noun to a concrete paragraph. A choice fails the moment one of its nouns has no paragraph to point to: a 'proposed plan' or an 'alternative hypothesis' that the passage never contains, or a 'self-contradiction' when the passage merely disagrees with someone else." },
          { t: "ul", items: [
            "Watch the <b>connectors</b>: however, yet, nonetheless, but, in spite of. They mark where the passage turns, and a turn is what most structure questions are about.",
            "Opinion words (merely, undermined, ignores, pays limited attention) tell you which paragraph carries the author's view and which carries the view being reported.",
            "A structure choice can be wrong for its <b>order</b> alone: 'evidence then theory' is not 'theory then evidence'."
          ]},
          { t: "tip", x: "Annotating a skeleton of the whole passage is the advice your guide calls the worst possible; a five-word job description per paragraph, held in your head or scribbled once, is enough to answer every structure and function question." }
        ]
      },
      {
        id: "rc-application",
        title: "Application & Extension",
        mins: 4,
        blocks: [
          { t: "p", x: "You are given a principle in the passage and asked which new situation it fits, or which finding would support or undermine it. The subject matter changes; the <b>structure</b> does not." },
          { t: "ol", items: [
            "State the passage's principle in your own words, stripped of its topic.",
            "Turn it into a test — a question you can ask of each option.",
            "Apply the test mechanically, and do not let a familiar-sounding topic decide it for you."
          ] },
          { t: "tip", x: "The right answer often moves to a <b>different domain</b> with the same shape, while wrong answers stay in the passage's own subject to sound plausible. Similar wording is not the same as similar structure." },
          { t: "h", x: "When the question offers evidence" },
          { t: "ul", items: [
            "To choose between two explanations, find the observation on which they make <b>opposite predictions</b>. Evidence consistent with both settles nothing.",
            "To support a hypothesis, look for a <b>mechanism</b> or a case where the proposed cause varies and the effect follows.",
            "To undermine one, look for the same effect without the proposed cause."
          ] },
          { t: "warn", x: "If the stem says <b>“if true”</b>, the usual RC discipline of verifying from the passage is suspended for that choice — the choice brings in new information you cannot check against the text. Judge its effect, not its source." },
          { t: "eg",
            q: "<b>Passage:</b> A species introduced to an island tends to converge on an intermediate body size: large colonists shrink and small ones grow, because the mainland pressures that pushed them to their extremes are absent there.<br><br>Which of the following findings would most support the account above?",
            choices: [
              "A large island species that continued to grow larger for millions of years",
              "Two island species, one arriving large and one small, that both evolved toward the same middling size",
              "A mainland species larger than any species found on islands",
              "An island whose vegetation cannot support any large herbivore",
              "A predator that spread from an island to the mainland"
            ],
            ans: "B",
            why: "Convergence means movement toward the same point from both directions, so the finding that supports it must show both directions. A single species growing without limit contradicts the account, and the rest are consistent with simpler explanations that do not involve an optimum at all."
          }
        ]
      }
    ]
  },

  {
    id: "quant-insights",
    section: "quant",
    title: "Quant — how it works",
    source: "Adapted from your course material",
    parts: [
      {
        id: "q-scoring",
        title: "The scoring reality",
        mins: 4,
        blocks: [
          { t: "p", x: "The Focus Edition reports three section scores, each on a <b>60–90</b> scale, and a total on <b>205–805</b>. Every total ends in a 5 and moves in steps of 10, and the three sections count <b>equally</b> toward it. That last fact matters more than any other for planning, because it means a point is a point wherever you earn it." },
          { t: "h", x: "What the numbers mean" },
          { t: "ul", items: [
            "The maximum, <b>805</b>, needs a 90 in every section. Anything from about <b>735 upward</b> is already the 100th percentile on GMAC's most recent concordance (July 2025).",
            "The same scaled score lands in a different percentile in each section, because each has its own distribution. On the current tables a <b>Q85 is about the 88th percentile</b>, a <b>V85 about the 94th</b>, and a <b>DI82 about the 91st</b> — while a Q80 sits near the 64th.",
            "So Quant is the most crowded section at the top: to reach a given percentile you need a higher raw number in Quant than in Verbal. That is why a \"good\" Quant score is higher than most people assume."
          ]},
          { t: "h", x: "How the score is built" },
          { t: "p", x: "Each section is computer-adaptive at the question level. The test starts near the middle, gives you a harder question after a right answer and an easier one after a wrong answer, and settles on an estimate of your level. Two consequences follow:" },
          { t: "ul", items: [
            "Your score is <b>not</b> a raw count. Missing a hard question you were only shown because you had been doing well costs far less than missing an easy one.",
            "<b>Unanswered questions are penalised heavily</b> — more than a wrong answer. Finishing the section is worth more than any single question in it."
          ]},
          { t: "h", x: "Where the total comes from" },
          { t: "p", x: "Quant, Verbal and Data Insights are each scored 60–90 and each counts equally toward the 205–805 total. That has one blunt consequence for planning:" },
          { t: "tip", x: "Points are cheapest in your <b>weakest</b> section. Moving Data Insights from mediocre to solid almost always adds more to the total than grinding the last few Quant points, because the curve is far less crowded there." },
          { t: "warn", x: "Do not read a percentile as a difficulty. Percentiles reflect who sits the exam over a rolling period and are recalculated every year, so the same scaled score can shift percentile from one year to the next. Target the <b>scaled score</b> your schools quote, not the percentile." },
          { t: "note", x: "Older material talks about Quant scores of 49, 50 and 51 and totals out of 800. Those are the pre-2024 scales. If a source quotes them, it is describing a different exam — the Focus scales above are the only ones that matter now." }
        ]
      },
      {
        id: "q-how",
        title: "How GMAT Quant actually works",
        mins: 3,
        blocks: [
          { t: "p", x: "The single biggest misconception is that Quant rewards fast calculation. It doesn't." },
          { t: "ul", items: [
            "<b>No calculations needed.</b> Hard questions are won on faster <i>thinking</i>, not faster arithmetic. What separates people is <b>reaction time</b> — how quickly you see what to do.",
            "<b>Logic &gt; process.</b> The underlying math is <i>extremely</i> basic; the challenge is applying it to a brand-new problem. A rigid step-by-step process has almost no value — a scrappy approach with the right logic beats it every time.",
            "<b>Language (LINGO) is a trap.</b> The test is written by psychometricians. Many hard questions have two readings, and the answer from the <i>wrong</i> reading is sitting right there in the options. You miss it by misreading, not by weak math."
          ] },
          { t: "warn", x: "Practising only easy (500–650 level) content lulls you into false confidence. Because the test is adaptive, it climbs to its trickiest at the top — where the examiner's whole aim is mind-games." },
          { t: "h", x: "The three shortcuts that beat algebra" },
          { t: "ol", items: [
            "<b>Plug in the answer choices.</b> The choices are almost always in order, so start at (C): if it comes out too large you now know to go down, and three tries at most settles it.",
            "<b>Pick smart numbers.</b> When the choices contain variables, substitute a convenient value — 100 for percentages, the LCM of the denominators for fractions — and see which expression matches.",
            "<b>Estimate.</b> When the choices are far apart, round hard and eliminate. Precision you do not need is time you cannot spare."
          ] },
          { t: "p", x: "Take “a number increased by 30% is 78; what is the number?”. Testing (C) 60 gives 78 straight away. Setting up \\( 1.3x=78 \\) and dividing is not wrong — it is just slower, and slower is what the section actually punishes." },
          { t: "warn", x: "Algebra is often the <b>slowest correct route</b>. Before you start manipulating symbols, ask whether the answer choices themselves are usable data — on a well-written GMAT question they usually are." }
        ]
      },
      {
        id: "q-pacing",
        title: "Pacing & the exit strategy",
        mins: 4,
        blocks: [
          { t: "p", x: "Quant is <b>21 questions in 45 minutes</b> — about 2 minutes 8 seconds each. Good average pace hides bad pacing: solving most questions fast but bleeding 5–7 minutes into a few is how strong students still run out of time." },
          { t: "h", x: "Use hard time markers" },
          { t: "p", x: "Check the clock in blocks of seven. The numbers below leave a small cushion for the review screen at the end:" },
          { t: "table", head: ["After question", "Time you should have left"], rows: [
            ["7", "about 31 min"],
            ["14", "about 16 min"],
            ["21", "at least 1 min — for Review &amp; Edit"]
          ]},
          { t: "h", x: "The exit strategy" },
          { t: "ul", items: [
            "<b>Never spend more than about \\(2\\tfrac{1}{2}\\) minutes</b> on any question — first seven or last seven, no exceptions.",
            "If it will not fall in time, make your best intelligent guess, <b>bookmark it, and move on</b>.",
            "Finish the section. An unanswered question costs more than a wrong one, and running the clock to zero also loses you the review screen."
          ]},
          { t: "tip", x: "The other side of the rule: with the right approach, <b>every</b> real GMAT Quant question is solvable in under 2 minutes, and many in under 30 seconds. If your method routinely takes longer, dump it — the only measure of a better approach is that it is faster." },
          { t: "h", x: "Guessing properly" },
          { t: "ol", items: [
            "Eliminate on <b>structure</b> before content: wrong sign, wrong units, impossible magnitude, an answer that ignores a stated constraint.",
            "On \"which must be true\", test the <b>easiest</b> case you can think of — zero, one, a fraction — and cross off whatever it breaks.",
            "Then pick and move. Never leave a question blank; an unanswered question is a guaranteed loss, a guess is not."
          ]},
          { t: "h", x: "Use the review screen" },
          { t: "p", x: "When you finish a section you are taken to <b>Question Review &amp; Edit</b>: a numbered list of every question, with your bookmarks marked. You can bookmark as many questions as you like and revisit any of them, but you can change at most <b>three answers per section</b>. That turns the exit strategy from damage control into a plan: bookmark anything you guessed on, move on without regret, and spend leftover minutes on the bookmarks rather than on questions you already got right." },
          { t: "warn", x: "The review screen only appears if you reach it. If the section clock hits zero before you have answered the last question, it is skipped entirely — which is the practical reason to keep a minute in hand at the end." },
          { t: "tip", x: "Bookmark deliberately, not anxiously. Twelve bookmarks are fine to place, but you can only change three answers, so revisit the ones where you were genuinely one step from the answer." }
        ]
      },
      {
        id: "q-study",
        title: "What to study (and what to skip)",
        mins: 3,
        blocks: [
          { t: "ul", items: [
            "<b>Train at the top level.</b> Much of the easy, widely-available content is irrelevant for a top score. Make 750+ level questions your <i>norm</i>, not a shock you meet on test day.",
            "<b>Don't “do the basics first”</b> from un-GMAT-like high-school books — finishing them won't let you crack a single hard GMAT question. Learn the concepts in GMAT context.",
            "<b>Take dreaded topics head-on.</b> If you already know probability or combinatorics is weak, a single focused day usually turns a feared topic into a favourite.",
            "<b>Be a solver, not a clapper.</b> Nodding along to someone else's solution earns nothing. Don't look up a solution until you've genuinely given it everything."
          ] },
          { t: "h", x: "The topic map" },
          { t: "ul", items: [
            "<b>Arithmetic</b> — percents, ratios, mixtures, work & rate, speed & distance, overlapping sets, interest, growth.",
            "<b>Algebra</b> — inequalities, absolute values, number properties, exponents, polynomials, equations, quadratics, functions & graphs.",
            "<b>Statistics</b> — mean, median, range, standard deviation.",
            "<b>Coordinate geometry</b> — lines, slopes, points and distances. The Focus edition dropped plane and solid geometry from Quant, so no theorems about triangles, circles or volumes are needed.",
            "<b>Combinatorics</b> — counting, permutations & combinations, probability."
          ] },
          { t: "h", x: "How to review a question you got wrong" },
          { t: "ol", items: [
            "<b>Redo it untimed</b>, before reading any solution. Whether you can now get it alone is the diagnosis.",
            "<b>Name the error type</b>: a concept you do not know, a method you chose badly, or an execution slip. The three need completely different fixes.",
            "<b>Write the takeaway as a rule</b> you could apply to a different question — “check whether the sample selected itself”, not “the answer was B”.",
            "<b>Re-attempt in a week.</b> If it still falls apart, the concept was never fixed."
          ] },
          { t: "tip", x: "A short error log beats extra volume. Twenty questions reviewed this way teach more than two hundred done once, because the exam repeats <b>structures</b> and your log is a list of the structures that catch you." },
          { t: "warn", x: "An execution slip is not “a silly mistake” to be waved away. If you keep dropping signs or misreading “not”, that is a reproducible defect with a reproducible fix — slow down at exactly the step where it happens." }
        ]
      },
      {
        id: "q-ds-rules",
        title: "Data Sufficiency — the five answers",
        mins: 5,
        blocks: [
          { t: "p", x: "Data Sufficiency asks a different job of you than every other question type. You are given a question and two statements, and you are <b>not</b> asked to answer the question — only to decide whether the information would be enough to answer it. That distinction is the whole format, and it is what makes DS fast once it clicks: recognising that something is determined is much quicker than determining it." },
          { t: "p", x: "The five choices never change, so learn them once and stop reading them:" },
          { t: "table", head: ["Choice", "Meaning"], rows: [
            ["A", "(1) alone is sufficient, (2) alone is not"],
            ["B", "(2) alone is sufficient, (1) alone is not"],
            ["C", "Both together sufficient, neither alone"],
            ["D", "Each alone is sufficient"],
            ["E", "Together still not sufficient"]
          ]},
          { t: "h", x: "Two question types, two meanings of \"sufficient\"" },
          { t: "ul", items: [
            "<b>Value questions</b> (\"what is \\(x\\)?\") — sufficient only if the data pins down <b>exactly one</b> number. \"\\(x = 2\\) or \\(3\\)\" is not sufficient, and neither is \"\\(x = a\\)\", which is not a number at all.",
            "<b>Yes/No questions</b> (\"is \\(x\\) even?\") — sufficient if you get a confirmed <b>yes</b> or a confirmed <b>no</b>. A consistent no is exactly as sufficient as a consistent yes; only \"sometimes yes, sometimes no\" is insufficient."
          ]},
          { t: "h", x: "The AD / BCE split" },
          { t: "p", x: "Test statement (1) on its own first, and the five choices immediately halve. If (1) is sufficient, the answer is <b>A or D</b> and B, C and E are dead. If it is not, the answer is <b>B, C or E</b>. Then test (2) on its own, which resolves the survivors — and only if <i>both</i> failed alone do you combine them, which decides between C and E." },
          { t: "warn", x: "Sufficiency is not about whether <b>you</b> can solve it. It is about whether the answer is <b>uniquely determined</b> by the information. Two possible values means insufficient, however much work you did to find them — and recognising that one linear equation in one unknown has a unique solution is sufficient without solving it." },
          { t: "eg",
            q: "What is the value of x?   (1) \\(x^{2}=16\\)   (2) \\(x &gt; 0\\)",
            choices: ["A", "B", "C", "D", "E"],
            ans: "C",
            why: "Statement (1) alone: \\(x\\) could be 4 or \\(-4\\). Two values, so not sufficient — cross out A and D. Statement (2) alone, judged with (1) covered up: \\(x\\) is any positive number whatsoever, so clearly not sufficient — cross out B. Together: \\(x\\) is 4 or \\(-4\\) and also positive, which leaves 4 alone. Unique, so the answer is C. Notice how little arithmetic there was: the work was entirely in checking how many possibilities survived."
          },
          { t: "note", x: "Data Sufficiency now sits in the Data Insights section rather than in Quant. The full treatment — the decision tree, the numbers to test, and the C-trap — is in the Data Insights guide." }
        ]
      },
      {
        id: "q-testcases",
        title: "Testing Cases in Data Sufficiency",
        mins: 6,
        blocks: [
          { t: "p", x: "When a statement allows several starting values, try them. Your Quant Basics guide turns this into a three-step routine whose aim is not to find the answer but to <b>prove the statement insufficient</b> as fast as possible." },
          { t: "ol", items: [
            "<b>What cases are allowed?</b> Read the stem's restrictions first: a digit is one of 0 to 9, a positive integer, an odd number. Those limits apply to every case you test.",
            "<b>Choose numbers that make the statement true.</b> A number that makes the statement false must be discarded, however tempting the outcome. This is the step people skip.",
            "<b>Try to prove insufficiency.</b> Get one outcome, then deliberately hunt for a second case with a different outcome. Two outcomes: not sufficient, cross off the answers and move on. Several tries with the same outcome: probably sufficient, and ideally you can say why."
          ]},
          { t: "table", head: ["Question type", "Sufficient", "Not sufficient"], rows: [
            ["Value", "one numerical answer", "two or more possible answers"],
            ["Yes / No", "always yes, or always no", "sometimes yes, sometimes no"]
          ]},
          { t: "p", x: "For a yes/no question decide <b>before</b> testing what would settle it. If \\(a = 2.4d7\\) and the question is whether \\(d &gt; 4\\), a statement that pins \\(d\\) to 5 through 9 is sufficient without giving \\(d\\), and a statement that allows both 3 and 5 is not." },
          { t: "ul", items: [
            "The cases that most often flip an answer: zero, one, a negative, a fraction between 0 and 1, and, when the stem allows, a non-integer. Positives and negatives, odds and evens, integers and proper fractions all behave differently under the same operation.",
            "Write each case down as a small table: value tested, statement true?, answer to the question. Discarding a case should be a visible cross, not a mental note."
          ]},
          { t: "eg",
            q: "If x is a positive integer, what is the units digit of x?\n(1) The units digit of \\(x^{2}\\) is 6.\n(2) The tens digit of 10x is 5.",
            choices: ["Statement (1) alone is sufficient", "Statement (2) alone is sufficient", "Both together are sufficient", "Each alone is sufficient", "Together not sufficient"],
            ans: "B",
            why: "(1) \\(x = 4\\) gives 16 and \\(x = 6\\) gives 36, both ending in 6, with different units digits for \\(x\\): not sufficient. (2) \\(x = 45\\) gives 450, units digit 5; \\(x = 46\\) gives 460, whose tens digit is 6, so that case is not allowed and must be discarded; \\(x = 65\\) gives 650, units digit 5 again. Multiplying by 10 moves the units digit into the tens place, so the units digit is always 5: sufficient. Answer (B)."
          }
        ]
      },
      {
        id: "q-ds-traps",
        title: "Avoiding DS traps",
        mins: 5,
        blocks: [
          { t: "p", x: "Data Sufficiency is the one place on the exam where you can do everything right and still be confidently wrong. A trap here does not make the question look hard — it makes it look <b>easy</b>, and you mark an answer without hesitating. So the defence is a set of habits, applied every time rather than when something feels suspicious." },
          { t: "ul", items: [
            "<b>Simplify the question first</b>, before touching the statements. \"Is \\(\\frac{x}{y} &gt; 1\\)?\" is much harder than the question it usually reduces to, and boiling it down often reveals that a statement you dismissed was enough.",
            "<b>Assume nothing.</b> If a number is not stated to be an integer, it might not be. If it is not stated to be positive, it might be negative — or zero.",
            "<b>Keep the statements independent.</b> When testing (2), do not carry over anything you learned from (1). This is the most common source of a wrong D.",
            "<b>Actively try to break it.</b> On a yes/no question, hunt deliberately for both a yes case and a no case, rather than confirming the one you expect.",
            "<b>Do not calculate</b> where you do not have to. Sufficiency rarely needs the actual number, and computing it wastes the time the format was designed to save you.",
            "<b>The two statements never contradict each other.</b> If your reading has them disagreeing, you have misread one of them."
          ]},
          { t: "h", x: "Proving insufficiency" },
          { t: "p", x: "The two directions are not symmetric, and this is worth being precise about. To prove a statement <b>sufficient</b> you must show the answer is forced. To prove it <b>insufficient</b> you need only two examples that disagree — one giving yes and one giving no, or two different values." },
          { t: "p", x: "It follows that a single example proves nothing on its own. Finding a case that answers yes does not make a statement sufficient; it only means you have not yet found the no. Keep looking until you have both, or until you are convinced there is no second case." },
          { t: "tip", x: "Have a fixed set of test numbers ready: 0, 1, \\(-1\\), a large positive, a large negative, and a fraction on each side of zero. Nearly every insufficiency is exposed by one of them, and running down a fixed list is far faster than inventing cases under time pressure." },
          { t: "eg",
            q: "Is \\(x &gt; 2\\)?   (1) \\(x^{2} &gt; 4\\)   (2) \\(x &gt; 1\\)",
            choices: ["A", "B", "C", "D", "E"],
            ans: "C",
            why: "Statement (1): squaring hides the sign, so \\(x^{2} &gt; 4\\) means \\(x &gt; 2\\) <b>or</b> \\(x &lt; -2\\). Test 3 — yes. Test \\(-3\\) — no. Both answers occur, so insufficient; A and D are out. Statement (2), read on its own: test 3 — yes; test 1.5 — no, and 1.5 is allowed because nothing said \\(x\\) was an integer. Insufficient, so B is out. Together, \\(x &gt; 1\\) rules out the whole negative branch of (1), leaving only \\(x &gt; 2\\) — a confirmed yes, so C. The fraction 1.5 is what does the work in statement (2); assuming integers would have given the wrong answer with complete confidence."
          },
          { t: "note", x: "This guide covers strategy and the Data Sufficiency layer. The per-topic concepts live in the other Quant guides — Percentages, Ratios &amp; Word Problems; Number Properties; Algebra; and Statistics, Sets &amp; Probability." }
        ]
      }
    ]
  },

  {
    id: "quant-topics",
    section: "quant",
    title: "Percentages, Ratios & Word Problems",
    source: "Adapted from your Quant topic concept notes",
    parts: [
      {
        id: "qt-percent",
        title: "Percentages",
        mins: 8,
        blocks: [
          { t: "p", x: "Percentages are the single most common idea in GMAT Quant. They turn up in their own right, and they also sit inside profit and loss, interest, mixtures, statistics and half the Data Insights section. Almost none of the difficulty is arithmetic. It is <b>keeping track of what the percentage is a percentage of</b> — and the exam builds nearly every wrong answer out of a reader who lost track of that." },
          { t: "p", x: "Start from the word itself. <i>Per cent</i> means <i>per hundred</i>, so a percent is a fraction whose denominator is 100. \\(30\\%\\) is \\(30/100\\), which is \\(0.30\\), which is \\(3/10\\). Those are three spellings of one number, and being able to move between them without stopping is most of what fluency in this topic means." },
          { t: "h", x: "Learn these by sight, not by division" },
          { t: "p", x: "A question that hands you \\(37.5\\%\\) of 240 is not asking for long multiplication. It is checking whether you recognise \\(37.5\\%\\) as \\(3/8\\), because \\(3/8\\) of 240 is 90 in one step. These are worth knowing the way you know a phone number:" },
          { t: "table", head: ["Fraction", "%"], rows: [
            ["\\(\\dfrac{1}{2}\\)", "50%"], ["\\(\\dfrac{1}{3}\\)", "33⅓%"], ["\\(\\dfrac{1}{4}\\)", "25%"], ["\\(\\tfrac{1}{5}\\)", "20%"],
            ["\\(\\dfrac{1}{6}\\)", "16⅔%"], ["\\(\\dfrac{1}{8}\\)", "12.5%"], ["\\(\\dfrac{1}{9}\\)", "11⅑%"], ["\\(\\tfrac{1}{20}\\)", "5%"]
          ]},
          { t: "tip", x: "Doubling and halving extends the table for free. If \\(1/8 = 12.5\\%\\) then \\(3/8 = 37.5\\%\\) and \\(5/8 = 62.5\\%\\). If \\(1/6 = 16\\tfrac{2}{3}\\%\\) then \\(5/6 = 83\\tfrac{1}{3}\\%\\)." },
          { t: "h", x: "The three shapes a percent question takes" },
          { t: "p", x: "Before any calculation, work out which of these three you are being asked. They look alike on the page and behave completely differently." },
          { t: "ol", items: [
            "<b>Percent of</b> — \"what is 30% of 80?\" This is plain multiplication: \\(0.30\\times80=24\\). The word <b>of</b> means <i>times</i>.",
            "<b>Percent change</b> — \"the price went from 80 to 100\". The change is 20, and it is measured against where you <b>started</b>: \\(20/80=25\\%\\).",
            "<b>Percent more / less than</b> — \"A is 25% more than B\" means \\(A = 1.25B\\). The word <b>than</b> points straight at the base."
          ]},
          { t: "p", x: "Notice that the same two numbers, 80 and 100, give a different answer in each shape. 80 is \\(80\\%\\) of 100, but 100 is a \\(25\\%\\) increase on 80. Nothing about the numbers tells you which is wanted — only the sentence does." },
          { t: "h", x: "Percent change" },
          { t: "formula", x: "\\text{percent change} = \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100" },
          { t: "p", x: "The numerator is how much it moved; the denominator is where it moved <b>from</b>. That denominator is the whole game. Going from 40 to 50 is a rise of \\(10/40 = 25\\%\\). Going straight back down from 50 to 40 is a fall of \\(10/50 = 20\\%\\). Same ten units, two different percentages, because the starting point changed." },
          { t: "warn", x: "Ask \"percent <b>of what</b>?\" out loud before you divide. Nearly every wrong answer in this topic comes from a correct subtraction over the wrong denominator — the new value instead of the old, or the total instead of the part." },
          { t: "h", x: "Two changes in a row" },
          { t: "p", x: "This is where the exam collects its marks. A rise of \\(x\\%\\) followed by a rise of \\(y\\%\\) is <b>not</b> a rise of \\(x+y\\%\\), because the second rise is applied to a figure that already grew. The true combined change is:" },
          { t: "formula", x: "x + y + \\dfrac{xy}{100}" },
          { t: "p", x: "You rarely need that formula, though, because there is a cleaner way to think about it. Rewrite every change as a <b>multiplier</b> — up 20% is \\(\\times 1.20\\), down 15% is \\(\\times 0.85\\) — and then just multiply them together. Up 20% then down 15% is \\(1.20\\times0.85 = 1.02\\), a 2% rise overall. Multipliers also make the order obviously irrelevant, since multiplication commutes." },
          { t: "ul", items: [
            "Up \\(x\\%\\) then down \\(x\\%\\) is a net <b>loss</b> of \\( \\frac{x^2}{100}\\% \\), never zero. Up 10% then down 10% is \\(1.1\\times0.9=0.99\\) — you end 1% down.",
            "\"A is \\(r\\%\\) more than B\" means B is \\( \\frac{r}{100+r}\\times100\\% \\) <b>less</b> than A, not \\(r\\%\\) less. If A is 25% more than B, then B is 20% less than A.",
            "If a price rises \\(r\\%\\), holding your total spend flat means cutting how much you buy by \\( \\frac{r}{100+r}\\times100\\% \\)."
          ]},
          { t: "h", x: "Percent vs. percentage points" },
          { t: "p", x: "These are different units and the exam prints both in the answer choices. If a market share rises from 20% to 25%, it has risen by <b>5 percentage points</b> — but that is a <b>25% increase</b>, because \\(5/20 = 0.25\\). Whenever the quantity being measured is itself a percentage, slow down and decide which of the two the question wants." },
          { t: "h", x: "Working backwards" },
          { t: "p", x: "To undo a percentage change you <b>divide by the multiplier</b>. You never subtract the same percentage back off, because that percentage would be taken from the wrong base. If an item costs $60 after a 20% rise, the original was \\(60 \\div 1.2 = 50\\). Taking 20% off 60 gives 48, which is wrong — and which will be sitting there as an answer choice." },
          { t: "eg",
            q: "After a 20% increase, the price of an item is $60. What was the price before the increase?",
            choices: ["$40", "$48", "$50", "$52", "$75"],
            ans: "C",
            why: "Name the old price \\(P\\). A 20% rise means the new price is \\(1.2P\\), so \\(1.2P = 60\\) and \\(P = 60 \\div 1.2 = 50\\). Check it forwards: 20% of 50 is 10, and \\(50+10 = 60\\) ✓. The trap is (B) $48, which is 60 with 20% taken <i>off</i> — but that 20% is 20% of the new price, not of the old one, so it removes $12 where the rise had added $10."
          },
          { t: "eg",
            q: "A shop raises the price of a jacket by 25%, and later reduces the raised price by 20%. Compared with the original price, the final price is",
            choices: ["5% lower", "the same", "1% higher", "5% higher", "45% higher"],
            ans: "B",
            why: "Work in multipliers: \\(1.25 \\times 0.80 = 1.00\\), so the jacket ends exactly where it started. Concretely, $100 becomes $125, and 20% of $125 is $25, which comes straight back off. The tempting answer is 5% higher, from adding \\(+25\\) and \\(-20\\) as if the two percentages were measured against the same base — they are not, because the discount is taken from the larger, raised price."
          }
        ]
      },
      {
        id: "qt-ratio",
        title: "Ratios & Proportions",
        mins: 7,
        blocks: [
          { t: "p", x: "A ratio compares two quantities without committing to either one. \"3 : 4\" tells you the second is a third larger than the first, and nothing whatever about whether we are talking about 3 and 4, or 30 and 40, or 300 and 400. That is exactly why the GMAT likes ratios — it can give you the shape of a situation while holding back its size, and then test whether you can still reason about it." },
          { t: "p", x: "The move that unlocks almost every ratio question is to <b>give the ratio a multiplier</b>. If two quantities are in the ratio 3 : 4, write them as \\(3k\\) and \\(4k\\). Now there is one unknown instead of two, every relationship in the question becomes an equation in \\(k\\), and the shape is preserved automatically." },
          { t: "ul", items: [
            "\\(a : b\\) means \\(a/b\\), and it stays true when you scale both sides: \\(3:4 = 6:8 = 30:40\\).",
            "Three or more terms work the same way. \\(2:3:5\\) becomes \\(2k, 3k, 5k\\).",
            "The parts sum to \\((2+3+5)k = 10k\\), so a <b>total</b> in a 2:3:5 split must be a multiple of 10. That single fact answers a lot of \"which could be the total\" questions on its own."
          ]},
          { t: "warn", x: "A ratio of parts is not a fraction of the whole. If boys to girls is \\(2:3\\), boys are \\(2/5\\) of the class — not \\(2/3\\). The denominator of a fraction is the <b>total</b>; the second term of a ratio is only the <b>other part</b>." },
          { t: "eg",
            q: "The ratio of boys to girls in a class is 3 : 5, and there are 16 more girls than boys. How many students are in the class?",
            choices: ["48", "56", "64", "72", "80"],
            ans: "C",
            why: "Write the counts as \\(3k\\) boys and \\(5k\\) girls — one unknown instead of two, and the 3 : 5 shape is built in. The gap between them is \\(5k - 3k = 2k\\), and we are told that gap is 16, so \\(k = 8\\). That makes 24 boys and 40 girls, a total of \\(8k = 64\\). Check it: \\(24:40\\) reduces to \\(3:5\\) ✓ and \\(40-24 = 16\\) ✓. The trap is 80, which comes from reading 16 as the value of \\(k\\) rather than of \\(2k\\)."
          },
          { t: "h", x: "Combining two ratios" },
          { t: "p", x: "When two ratios share a term, they are two views of the same situation and can be merged — but only after the shared term is written as the same number in both. Given \\(A:B = 2:3\\) and \\(B:C = 4:5\\), B appears as 3 in one and 4 in the other. Scale each ratio until B is 12 in both: multiply the first by 4 and the second by 3." },
          { t: "formula", x: "\\begin{gathered}A:B = 8:12, \\qquad B:C = 12:15\\\\[4pt]\\Rightarrow\\quad A:B:C = 8:12:15\\end{gathered}" },
          { t: "h", x: "Proportions" },
          { t: "p", x: "A proportion is a statement that two ratios are equal, \\(a/b = c/d\\), and it is solved by cross-multiplying to \\(ad = bc\\). Most \"direct variation\" word problems are exactly this: if 4 machines fill 600 bottles, then 7 machines fill \\(x\\), and \\(4/600 = 7/x\\)." },
          { t: "ul", items: [
            "<b>Direct</b> variation — one goes up, so does the other. \\(y = kx\\). Double the machines, double the output.",
            "<b>Inverse</b> variation — one goes up, the other goes down. \\(xy = k\\). Double the workers, halve the time.",
            "Deciding which one you are looking at, before writing anything, prevents the most common error in this topic."
          ]},
          { t: "tip", x: "Where a ratio changes — \"5 more boys join and the ratio becomes 2 : 3\" — set up the <b>original</b> as \\(3k\\) and \\(5k\\), apply the change to those expressions, and set the result equal to the new ratio. One equation, one unknown." },
          { t: "warn", x: "You cannot add ratios. If one class is \\(2:3\\) boys to girls and another is \\(3:4\\), the combined ratio is not \\(5:7\\) — it depends on how big the two classes are. Convert to actual counts first."
          }
        ]
      },
      {
        id: "qt-average",
        title: "Averages",
        mins: 8,
        blocks: [
          { t: "p", x: "An average tells you what every value <i>would</i> be if the total were shared out equally. That is worth saying slowly, because it points at the thing the GMAT actually tests: an average is only ever a disguised statement about a <b>total</b>. Six numbers averaging 15 is another way of saying six numbers adding to 90, and the second version is almost always the one you can work with." },
          { t: "formula", x: "\\text{average} = \\dfrac{\\text{sum of terms}}{\\text{number of terms}}" },
          { t: "p", x: "Rearranged, that reads <b>total = average × count</b>, and that rearrangement is the single most useful line in the topic. Whenever a question tells you an average, immediately convert it into a total and write the total down. Whenever it asks about an average, work out what total would produce it." },
          { t: "ul", items: [
            "Adding a value <b>equal to</b> the current average leaves the average unchanged — it brings exactly its own share.",
            "Adding a value above the average pulls it up; below, pulls it down. How far it moves depends on how many terms are sharing the shift.",
            "For an <b>evenly spaced</b> set the average equals the middle value, which is also \\((\\text{first}+\\text{last})/2\\). The average of 4, 7, 10, 13, 16 is 10, with no addition at all."
          ]},
          { t: "h", x: "Changing the average" },
          { t: "p", x: "Because the total is the bridge, every \"what happens to the average\" question is answered by tracking the total through the change and then dividing by the new count. There is no separate technique to learn — just three shapes of the same move:" },
          { t: "ul", items: [
            "<b>Add</b> a term \\(x\\) to \\(n\\) terms averaging \\(A\\): the total becomes \\(nA+x\\) over \\(n+1\\) terms, so the new average is \\( \\frac{nA+x}{n+1} \\).",
            "<b>Remove</b> a term: subtract it from the total, then divide by the smaller count.",
            "<b>Replace</b> a term: the total moves by \\(\\text{new}-\\text{old}\\), so the average moves by \\( \\frac{\\text{new}-\\text{old}}{n} \\) — the change spread across all \\(n\\) terms. Swapping a 40 for a 70 in a set of 6 lifts the average by exactly 5."
          ]},
          { t: "h", x: "Averaging groups of different sizes" },
          { t: "p", x: "When two groups combine, you cannot average the two averages — that would treat a group of 3 and a group of 30 as equally important. Go back to totals: add the two totals, divide by the two counts." },
          { t: "formula", x: "\\bar{x} = \\dfrac{n_1\\bar{x}_1 + n_2\\bar{x}_2}{n_1 + n_2}" },
          { t: "p", x: "So 30 boys averaging 72 and 20 girls averaging 82 give \\(\\frac{30(72)+20(82)}{50} = \\frac{2160+1640}{50} = 76\\) — not 77, which is what averaging 72 and 82 would have given you. There is a fuller treatment of this in the <b>Weighted Averages</b> section of the statistics guide." },
          { t: "tip", x: "The combined average always lands <b>between</b> the two group averages and closer to the bigger group. That is often enough on its own: if the choices are 74, 76, 77, 79 and 81, everything outside 72–82 is already dead, and \"closer to the boys\" kills anything above 77." },
          { t: "h", x: "The deviation shortcut" },
          { t: "p", x: "When the numbers are large and close together, do not add them. Pick a convenient reference near the middle, average the <b>deviations</b> from it, and add the reference back. For 402, 407, 411, 400 the deviations from 400 are 2, 7, 11 and 0, which average to 5 — so the average is 405. You have added four small numbers instead of four large ones." },
          { t: "warn", x: "An average need not be one of the values, need not be a whole number, and is <b>not</b> the median. A set can average 50 with no member anywhere near 50 — {0, 0, 200} averages \\(66\\tfrac{2}{3}\\) and contains nothing like it." },
          { t: "eg",
            q: "The average of 6 numbers is 15. When one number is removed, the average of the remaining 5 is 14. What number was removed?",
            choices: ["10", "14", "16", "20", "24"],
            ans: "D",
            why: "Convert both averages into totals straight away. Six numbers averaging 15 add to \\(6\\times15=90\\); the five that remain average 14, so they add to \\(5\\times14=70\\). Nothing else changed, so the number that left is the difference between the two totals: \\(90-70=20\\). Note that the average only fell by 1, yet the removed number is 5 above the original average — because that one point of drop had to be paid for across all five remaining terms."
          },
          { t: "eg",
            q: "A student has averaged 82 across four tests. What must she score on a fifth test to bring her average up to 84?",
            choices: ["86", "88", "90", "92", "96"],
            ans: "D",
            why: "Totals again. Four tests at 82 is \\(4\\times82=328\\) points so far. Five tests averaging 84 would need \\(5\\times84=420\\). The fifth test must supply the gap: \\(420-328=92\\). The trap is 86, which is 84 plus the 2-point rise — but a 2-point rise across five tests costs \\(5\\times2=10\\) extra points, and those must all come out of the one remaining test, on top of the 82 she was already averaging."
          }
        ]
      },
      {
        id: "qt-mixture",
        title: "Mixtures & Alligation",
        mins: 8,
        blocks: [
          { t: "p", x: "A mixture question hands you two things of different strength or price and blends them. The strength of the blend must land somewhere between the two, and where exactly it lands depends only on <b>how much of each you used</b>. Every question in this topic is a variation on that one sentence." },
          { t: "h", x: "Hold the pure component in view" },
          { t: "p", x: "The trick that makes these easy is to stop thinking about the mixture and think about the <b>ingredient</b> instead. In 30 litres of a 20% salt solution there are \\(0.20\\times30 = 6\\) litres of salt, and 24 litres of water. Now every operation the question can perform becomes obvious:" },
          { t: "ul", items: [
            "Adding <b>pure water</b> leaves the 6 litres of salt untouched and raises the total — so the concentration falls.",
            "Adding <b>pure salt</b> raises both the salt and the total.",
            "<b>Evaporating water</b> leaves the salt untouched and lowers the total — the concentration rises.",
            "Removing some of the <b>mixture</b> takes salt and water away in the same proportion, so the concentration does not move at all. Only the amounts do."
          ]},
          { t: "h", x: "Alligation: the blend ratio from the averages" },
          { t: "p", x: "Alligation is weighted-average reasoning run backwards. Instead of being given the amounts and asked for the blend, you are given the blend and asked for the amounts. With a cheaper (or weaker) value \\(c\\), a dearer (or stronger) value \\(d\\), and a resulting mean \\(m\\):" },
          { t: "formula", x: "\\dfrac{\\text{qty of cheaper}}{\\text{qty of dearer}} = \\dfrac{d - m}{m - c}" },
          { t: "p", x: "Read it as a see-saw. Each ingredient sits at its own value, the mean is the balance point, and the amount of each is <b>inversely</b> proportional to how far it sits from that point. An ingredient far from the mean cannot be there in quantity, or it would have dragged the mean towards itself." },
          { t: "p", x: "Concretely: blending a 20% solution with a 50% solution to reach 30%, the distances are \\(30-20 = 10\\) and \\(50-30 = 20\\). Reversing them gives a ratio of 20 : 10, or <b>2 : 1 in favour of the 20% solution</b> — which fits the intuition that the answer 30 sits much nearer 20 than 50, so most of the blend must be the weak one." },
          { t: "tip", x: "The alligation ratio comes out as <b>cheaper : dearer</b>, the reverse of the order the two distances are written in. Sanity-check every time: the ingredient nearer the mean must be the one you used more of." },
          { t: "warn", x: "Alligation works on <b>per-unit</b> figures — concentrations, prices per kilo, rates, percentages. It does not work on totals. Convert to a per-unit number before you cross." },
          { t: "h", x: "Repeated replacement" },
          { t: "p", x: "A container holds \\(V\\) of a liquid. You pour out \\(x\\), top back up with something else, and repeat \\(n\\) times. Each round removes the same <b>fraction</b> of whatever original liquid is left — pouring out 8 of 40 always removes a fifth — so the original liquid is multiplied by \\((1-x/V)\\) every time:" },
          { t: "formula", x: "\\text{original liquid left} = V\\left(1 - \\dfrac{x}{V}\\right)^{n}" },
          { t: "tip", x: "The same alligation machinery cracks average speed, blended interest rates, and salary or marks mixes — anything where two rates combine into one." },
          { t: "eg",
            q: "How many litres of water must be added to 30 litres of a 20% salt solution to dilute it to 15% salt?",
            choices: ["5", "7.5", "10", "12", "15"],
            ans: "C",
            why: "Track the salt, because water is the only thing being added. The salt is \\(0.20\\times30 = 6\\) litres and it stays 6 litres throughout. After adding \\(x\\) litres of water the total is \\(30+x\\), and we need that 6 litres to be 15% of it: \\(6/(30+x) = 0.15\\), so \\(30+x = 6/0.15 = 40\\) and \\(x = 10\\). Sanity check: 6 out of 40 is 15% ✓. Notice you never needed the amount of water you started with."
          },
          { t: "eg",
            q: "A vessel holds 40 litres of pure milk. 8 litres are drawn off and replaced with water; this is done a second time. How much milk remains?",
            choices: ["24 litres", "25.6 litres", "26.4 litres", "28.8 litres", "32 litres"],
            ans: "B",
            why: "Each round removes \\(8/40 = 1/5\\) of whatever milk is in the vessel, leaving \\(4/5\\) of it. After two rounds the milk is \\(40\\times(4/5)^{2} = 40\\times0.64 = 25.6\\) litres. Step by step: the first draw leaves 32 litres of milk; the second draw removes a fifth of <i>those</i>, that is 6.4, leaving 25.6. The trap is 24, which comes from subtracting 8 litres of milk twice — wrong from the second round on, because by then the 8 litres drawn off is a mixture, not pure milk."
          }
        ]
      },
      {
        id: "qt-profit",
        title: "Profit, Loss & Discount",
        mins: 7,
        blocks: [
          { t: "p", x: "Profit and loss is percentages wearing a shopkeeper's apron. Everything you already know about percent change applies; the only new work is keeping three different prices straight, because the exam measures different percentages against different ones and counts on you to blur them." },
          { t: "table", head: ["Price", "Meaning", "Percentages measured on it"], rows: [
            ["CP", "cost price — what the seller paid", "profit % and loss %"],
            ["MP", "marked / list price — the tag in the window", "discount %"],
            ["SP", "selling price — what the buyer actually pays", "—"]
          ]},
          { t: "p", x: "Read that table as a warning about bases. <b>Profit is measured on cost. Discount is measured on the marked price.</b> They are percentages of two different numbers, so they can never simply be added or subtracted against each other." },
          { t: "formula", x: "\\text{profit \\%} = \\dfrac{\\text{SP} - \\text{CP}}{\\text{CP}} \\times 100" },
          { t: "formula", x: "\\begin{gathered}\\text{SP}=\\text{MP}\\left(1-\\tfrac{d}{100}\\right) \\\\[4pt] \\text{SP}=\\text{CP}\\left(1+\\tfrac{p}{100}\\right)\\end{gathered}" },
          { t: "p", x: "The two lines describe the same selling price reached from two directions: down from the tag by the discount, and up from the cost by the profit. Most questions in this topic give you one route and ask for the other." },
          { t: "tip", x: "<b>Set CP = 100 and walk the story forward.</b> Every quantity here is a percentage, so the actual cost is irrelevant and 100 makes the arithmetic disappear. Mark up 40% → 140. Take 25% off → 105. Profit is 5 on a cost of 100, so 5% — read straight off the number, with no formula used at all." },
          { t: "h", x: "The results worth recognising" },
          { t: "ul", items: [
            "<b>Successive discounts multiply.</b> 20% then 10% off is \\( 0.8\\times0.9=0.72 \\) — a single discount of 28%, not 30%, because the second 10% is taken from the already-reduced price.",
            "Marked up \\(m\\%\\) and then discounted \\(d\\%\\) gives a net effect on cost of \\( m - d - \\frac{md}{100}\\% \\).",
            "Two items sold at the <b>same price</b>, one at \\(+x\\%\\) and one at \\(-x\\%\\), always produce a net <b>loss</b> of \\( \\frac{x^{2}}{100}\\% \\). The percentages look like they cancel, but the item sold at a loss had the higher cost, so more money was tied up in the losing side.",
            "A dealer using a short weight of \\(w\\) grams per kilo makes \\( \\frac{1000-w}{w}\\times100\\% \\) profit even while selling \"at cost\"."
          ]},
          { t: "warn", x: "\"Profit % on cost\" and \"profit % on selling price\" are different quantities, and GMAT wording picks its base deliberately. A profit of 25% on cost is a profit of 20% on the selling price — same money, different denominator." },
          { t: "eg",
            q: "A shopkeeper marks an item 40% above cost and then allows a 25% discount. What is the profit percent?",
            choices: ["5%", "10%", "15%", "20%", "25%"],
            ans: "A",
            why: "Set CP = 100. Marking up 40% puts the tag at 140. The 25% discount comes off <b>that</b>, not off the cost: \\(140\\times0.75 = 105\\). So the item cost 100 and sold for 105 — a profit of 5%. The trap is 15%, from subtracting 25 from 40 as if both percentages were measured against the same number. They are not: the 40% is of 100 and the 25% is of 140, so the discount removes 35 while the markup had only added 40."
          },
          { t: "eg",
            q: "A trader sells two watches for $120 each. On one he makes a 20% profit and on the other a 20% loss. Overall he",
            choices: ["breaks even", "loses 4%", "gains 4%", "loses 10%", "loses 20%"],
            ans: "B",
            why: "The two selling prices match, so the two <i>costs</i> cannot. Work each back: at a 20% profit, \\(1.2\\,\\text{CP} = 120\\) gives CP = 100. At a 20% loss, \\(0.8\\,\\text{CP} = 120\\) gives CP = 150. Total cost $250, total revenue $240 — a loss of $10 on $250, which is 4%. This is the general result \\(x^{2}/100\\): \\(400/100 = 4\\%\\), and it is always a loss, because the item sold at a loss was the more expensive one."
          }
        ]
      },
      {
        id: "qt-interest",
        title: "Simple & Compound Interest",
        mins: 7,
        blocks: [
          { t: "p", x: "Interest questions are growth questions. The only thing that separates the two kinds is <b>what the interest is charged on</b>: simple interest always charges on the original amount you started with, while compound interest charges on whatever the balance has grown to. That one difference is the whole topic." },
          { t: "h", x: "Simple interest" },
          { t: "p", x: "The principal earns the same flat amount every period, because the base never changes. $1,000 at 8% earns $80 in year one, $80 in year two, $80 for ever — the growth is a straight line." },
          { t: "formula", x: "\\text{SI} = \\dfrac{P \\cdot R \\cdot T}{100}" },
          { t: "h", x: "Compound interest" },
          { t: "p", x: "Here each period's interest is added to the balance and then earns interest itself. $1,000 at 8% earns $80 in year one, but year two earns 8% of $1,080, which is $86.40. Growth is a curve, and the formula is just \"multiply by \\((1+R/100)\\), once per period\":" },
          { t: "formula", x: "A = P\\left(1 + \\dfrac{R}{100}\\right)^{T}" },
          { t: "warn", x: "That formula gives \\(A\\), the <b>final amount</b>, not the interest. If the question asks for the interest earned, you still have to subtract the principal. Forgetting to is the most common slip in the topic, and the un-subtracted figure is always one of the answer choices." },
          { t: "h", x: "Reading the compounding period" },
          { t: "p", x: "Whenever interest compounds more often than once a year, <b>divide the rate</b> and <b>multiply the number of periods</b>. At 10% a year compounded half-yearly for 2 years, you use 5% for 4 periods — not 10% for 2. More frequent compounding always earns slightly more, because the interest starts earning sooner." },
          { t: "formula", x: "A = P\\left(1 + \\dfrac{R}{100k}\\right)^{kT} \\quad (k \\text{ periods per year})" },
          { t: "h", x: "Shortcuts worth having" },
          { t: "ul", items: [
            "Over the <b>first</b> period the two are identical — nothing has been added to the balance yet, so there is nothing extra to earn on. A question comparing them over one year is testing whether you know they agree.",
            "Over <b>2 years</b>, compound beats simple by exactly \\( P\\left(\\frac{R}{100}\\right)^{2} \\) — that is just the interest earned on the first year's interest.",
            "Compound growth over 2 years is two successive percentage rises, so the total growth is \\( 2R+\\frac{R^{2}}{100}\\ \\% \\).",
            "<b>Rule of 72</b>: money roughly doubles in \\( 72/R \\) years. At 8%, about 9 years. Useful for eliminating choices fast.",
            "Halving the rate and doubling the time gives the same <b>simple</b> interest but <b>less</b> compound interest."
          ]},
          { t: "tip", x: "Population growth, appreciation, depreciation and inflation are all the compound formula with the story changed. Depreciation just uses \\((1-R/100)\\) instead of \\((1+R/100)\\)." },
          { t: "eg",
            q: "$5,000 is invested at 10% per annum compounded annually. How much interest is earned over 2 years?",
            choices: ["$1,000", "$1,025", "$1,050", "$1,100", "$1,210"],
            ans: "C",
            why: "Year one earns 10% of 5,000 = $500, taking the balance to $5,500. Year two earns 10% of $5,500 = $550, taking it to $6,050. Interest earned is \\(6050-5000 = 1050\\). By formula: \\(A = 5000(1.1)^{2} = 6050\\), then subtract the principal. The $1,000 trap is the simple-interest figure — it misses the $50 that the first year's $500 itself earned. The $6,050 version of this trap appears when the question asks for interest and the choices offer the final amount."
          },
          { t: "eg",
            q: "$8,000 is invested for one year at 10% per annum compounded half-yearly. The interest earned is",
            choices: ["$400", "$800", "$820", "$840", "$1,600"],
            ans: "C",
            why: "Half-yearly compounding means the rate is halved and the periods are doubled: 5% applied twice, not 10% applied once. \\(8000\\times1.05 = 8400\\) after six months, then \\(8400\\times1.05 = 8820\\) after a year, so the interest is $820. The $800 trap is the annual figure, which ignores the compounding — the extra $20 is the second half-year's 5% on the first half-year's $400."
          }
        ]
      },
      {
        id: "qt-speed",
        title: "Speed, Time & Distance",
        mins: 8,
        blocks: [
          { t: "p", x: "Everything in this topic comes out of one relationship, and it is worth reading as a sentence rather than a formula: <b>how far you get is how fast you go, multiplied by how long you go for</b>." },
          { t: "formula", x: "\\text{distance} = \\text{speed} \\times \\text{time}" },
          { t: "p", x: "Any two of the three give you the third, so the real skill is not the algebra — it is noticing which two the question has quietly handed you, and making sure they are in compatible units before you multiply." },
          { t: "h", x: "Fix the units first" },
          { t: "p", x: "Mixed units cause more wrong answers here than anything else. A speed in km/h and a time in minutes cannot be multiplied until one of them moves. Convert before you set anything up:" },
          { t: "ul", items: [
            "km/h → m/s: multiply by \\( \\tfrac{5}{18} \\). So 54 km/h is 15 m/s, and 72 km/h is 20 m/s.",
            "m/s → km/h: multiply by \\( \\tfrac{18}{5} \\).",
            "minutes → hours: divide by 60. 40 minutes is \\(2/3\\) of an hour, not 0.40."
          ]},
          { t: "h", x: "Average speed" },
          { t: "p", x: "Average speed is <b>total distance ÷ total time</b> — always, with no exceptions. It is not the average of the speeds, because you do not spend equal <i>time</i> at each speed; you spend longer at the slow one, so the slow one counts for more." },
          { t: "p", x: "For a journey covering equal distances at speeds \\(x\\) and \\(y\\), that reasoning collapses to the harmonic mean:" },
          { t: "formula", x: "\\text{average speed} = \\dfrac{2xy}{x+y}" },
          { t: "warn", x: "Never average two speeds directly. \\( \\frac{2xy}{x+y} \\) is always <b>less</b> than \\( \\frac{x+y}{2} \\), and the exam prints the arithmetic mean as a trap on almost every question of this shape." },
          { t: "h", x: "Speed and time are inversely proportional" },
          { t: "p", x: "Over a <b>fixed distance</b>, going faster means taking proportionally less time. If two speeds are in the ratio 3 : 4, the times are in the ratio 4 : 3. This answers most \"how much earlier would he have arrived?\" questions without ever finding the distance — which is usually the point, because the distance is usually not given." },
          { t: "h", x: "Relative speed" },
          { t: "p", x: "When two things move at once, work with the speed of one <b>relative to the other</b> and the problem becomes a single-object problem again." },
          { t: "ul", items: [
            "Moving <b>towards</b> each other: add the speeds. A gap \\(D\\) closes in \\( \\frac{D}{v_1+v_2} \\).",
            "Moving in the <b>same</b> direction: subtract. The gap closes at \\( v_1-v_2 \\), which is why a chase takes so much longer than a head-on meeting.",
            "<b>Boats</b>: downstream the current helps, so the speed is \\(b+s\\); upstream it hinders, so \\(b-s\\). Adding the two gives \\(2b\\) and subtracting gives \\(2s\\) — a fast way to recover both from a pair of times."
          ]},
          { t: "h", x: "Trains: what distance is actually covered?" },
          { t: "p", x: "A train is not a point, so \"passing\" something means clearing it completely — front of the train to back. Passing a <b>pole</b> covers the train's own length. Passing a <b>platform or another train</b> covers the sum of the two lengths." },
          { t: "eg",
            q: "A car covers a distance at 40 km/h and returns along the same road at 60 km/h. What is its average speed for the whole trip?",
            choices: ["48 km/h", "50 km/h", "52 km/h", "45 km/h", "55 km/h"],
            ans: "A",
            why: "Equal distances, so use the harmonic mean: \\(\\frac{2(40)(60)}{40+60} = \\frac{4800}{100} = 48\\) km/h. To see why it is not 50, take the distance as 120 km each way: the outward leg takes 3 hours and the return takes 2, so 240 km in 5 hours, which is 48 km/h. The car spends more of its <i>time</i> crawling at 40 than cruising at 60, so the slow speed carries more weight and the answer must sit below the midpoint."
          },
          { t: "eg",
            q: "A train 180 metres long travelling at 54 km/h passes a platform 120 metres long. How long does it take?",
            choices: ["12 seconds", "15 seconds", "20 seconds", "24 seconds", "30 seconds"],
            ans: "C",
            why: "Two steps, both easy to skip. First the units: 54 km/h \\(\\times \\tfrac{5}{18} = 15\\) m/s. Then the distance: to clear the platform the train must travel its own length <b>plus</b> the platform's, \\(180+120 = 300\\) metres — the front has to reach the far end and the back still has to leave the near end. So the time is \\(300/15 = 20\\) seconds. The 12-second trap uses only the 180 metres, as if the train were a point."
          }
        ]
      },
      {
        id: "qt-work",
        title: "Work & Rate (Pipes & Cisterns)",
        mins: 8,
        blocks: [
          { t: "p", x: "The mistake everyone makes first is to work with times. Times will not combine — if A takes 12 days and B takes 18, there is no sensible way to fold 12 and 18 together into a single number. What <b>does</b> combine is <b>rate</b>: how much of the job each one gets through in a day. Rates simply add, because in one day the work A does and the work B does both happen." },
          { t: "p", x: "So the first move in every question of this type is to convert times into rates. If A finishes a job in \\(a\\) days, A completes \\(1/a\\) of it per day. Working together:" },
          { t: "formula", x: "\\dfrac{1}{T} = \\dfrac{1}{a} + \\dfrac{1}{b} \\quad\\Rightarrow\\quad T = \\dfrac{ab}{a+b}" },
          { t: "warn", x: "<b>Rates add; times do not.</b> Two workers who each take 6 days do not take 3 days each — they take 3 days <i>together</i>, and that only follows after adding \\( \\tfrac16+\\tfrac16 = \\tfrac13 \\). The combined time is always shorter than the faster worker alone, which is a free sanity check on any answer." },
          { t: "h", x: "The LCM method — no fractions at all" },
          { t: "p", x: "Adding \\(\\frac1{12}+\\frac1{18}\\) is unpleasant, and you can avoid it entirely. Instead of calling the job \"1\", call it a number of <b>units</b> chosen so that everyone's daily output is a whole number: the LCM of the given times." },
          { t: "p", x: "A finishes in 12 days and B in 18. Set the job to \\(\\mathrm{LCM}(12,18)=36\\) units. Then A does \\(36/12 = 3\\) units a day and B does \\(36/18 = 2\\), so together they do 5 units a day — and the job takes \\(36/5 = 7.2\\) days. Whole numbers throughout." },
          { t: "tip", x: "The LCM method really earns its keep on the messier variants below, because once everyone's daily output is an integer you can just count units up and down as the story changes." },
          { t: "h", x: "The variations you will actually see" },
          { t: "ul", items: [
            "<b>Alternate days</b> — A works day one, B day two, and so on. Compute one two-day block (here \\(3+2 = 5\\) units), see how many whole blocks fit, then finish the remainder by hand.",
            "<b>Someone leaves partway</b> — count the units finished before the change, subtract from the total, and divide what is left by the new combined rate.",
            "<b>Efficiency</b> — if A is twice as fast as B, their times are in the ratio 1 : 2. Efficiency and time are inversely proportional, exactly as speed and time are.",
            "<b>Leaks and outlets</b> — pipes and cisterns is this same topic with water in it. An inlet is a positive rate, a leak is a negative one; subtract it before dividing.",
            "<b>Scaling people and hours</b> — \\( \\frac{M_1 D_1 H_1}{W_1} = \\frac{M_2 D_2 H_2}{W_2} \\), that is, men × days × hours per unit of work stays constant."
          ]},
          { t: "eg",
            q: "A can complete a job in 12 days and B can complete it in 18 days. Working together, how long do they take?",
            choices: ["6 days", "7.2 days", "7.5 days", "9 days", "15 days"],
            ans: "B",
            why: "Convert to rates: A does \\(\\tfrac1{12}\\) of the job a day and B does \\(\\tfrac1{18}\\). Together that is \\(\\tfrac{3}{36}+\\tfrac{2}{36}=\\tfrac{5}{36}\\) of the job a day, so the whole job takes \\(36/5 = 7.2\\) days. By the LCM method: the job is 36 units, A does 3 a day, B does 2, together 5, so \\(36/5\\) days. The 15-day trap averages the two times, which is not only wrong but impossible — two people working together cannot be slower than one of them alone."
          },
          { t: "eg",
            q: "A and B working together finish a job in 8 days. A working alone would take 12 days. How long would B take alone?",
            choices: ["16 days", "20 days", "24 days", "28 days", "36 days"],
            ans: "C",
            why: "Rates subtract just as readily as they add. The pair's rate is \\(\\tfrac18\\) of the job a day and A's share of that is \\(\\tfrac1{12}\\), so B's rate is \\(\\tfrac18-\\tfrac1{12} = \\tfrac{3}{24}-\\tfrac{2}{24} = \\tfrac{1}{24}\\) — B alone takes 24 days. The trap is 20, from subtracting the times \\((8\\) and \\(12)\\) instead of the rates. Sanity check: B is much slower than A, which fits, since adding B to A only improved 12 days to 8."
          },
          { t: "note", x: "That completes the arithmetic and word-problem layer. Number properties, algebra, and statistics &amp; probability each have their own guide — see the list of guides on the Quant tab." }
        ]
      }
    ]
  },

  {
    id: "quant-numprops",
    section: "quant",
    title: "Number Properties",
    source: "Arithmetic & number-property concepts, with exam tricks",
    parts: [
      {
        id: "np-integers",
        title: "Integers, Factors & Multiples",
        mins: 8,
        blocks: [
          { t: "p", x: "Two words do a lot of work here, so pin them down first. A <b>factor</b> (or divisor) of \\(N\\) is a number that divides \\(N\\) leaving no remainder — 6 is a factor of 24. A <b>multiple</b> of \\(N\\) is \\(N\\) times an integer — 24 is a multiple of 6. They are the same relationship read from opposite ends, and mixing them up is the quickest way to answer the wrong question." },
          { t: "p", x: "Underneath, though, there is only one idea in this topic. Every question about factors, multiples, LCM or GCD is a question about the <b>prime factorization</b>, because that is the number's complete blueprint — the unique list of primes it is built from." },
          { t: "formula", x: "N = p^{a}\\,q^{b}\\,r^{c}\\ \\ (p,q,r \\text{ distinct primes})" },
          { t: "p", x: "So \\(360 = 2^{3}\\cdot3^{2}\\cdot5\\). Once you have that line written down, almost everything the exam can ask is read off it rather than computed." },
          { t: "h", x: "What the factorization tells you" },
          { t: "ul", items: [
            "<b>Number of factors</b> = \\( (a+1)(b+1)(c+1) \\). Add one to each exponent and multiply. The \"add one\" is there because each prime can appear 0, 1, 2 … up to \\(a\\) times in a factor — that is \\(a+1\\) choices, made independently. You never list factors again.",
            "<b>GCD</b>: take each <b>shared</b> prime to its <b>lowest</b> power — the most that fits inside both. <b>LCM</b>: take <b>every</b> prime to its <b>highest</b> power — the least that both fit inside.",
            "For two numbers, \\( \\text{LCM}(a,b)\\times\\text{GCD}(a,b) = a\\times b \\). Every prime is counted once at its high power and once at its low power, which is exactly once in each number.",
            "\\(N\\) is a <b>perfect square</b> exactly when every exponent is even. That is also why perfect squares are the only numbers with an <b>odd</b> number of factors — factors normally come in pairs, and a square's middle factor pairs with itself."
          ]},
          { t: "tip", x: "Counting multiples in a range: the number of multiples of \\(k\\) from 1 to \\(N\\) is \\( \\lfloor N/k \\rfloor \\). Between two bounds, subtract — multiples of 7 from 100 to 500 is \\( \\lfloor 500/7 \\rfloor - \\lfloor 99/7 \\rfloor = 71 - 14 = 57 \\). Use 99, not 100, so that a multiple sitting exactly on the lower bound is not thrown away." },
          { t: "h", x: "Facts worth memorising" },
          { t: "ul", items: [
            "The product of any <b>\\(k\\) consecutive integers</b> is divisible by \\( k! \\). Any 3 in a row are divisible by 6; any 4 in a row by 24. Expressions like \\(n(n+1)(n+2)\\) exist in a question only to test this.",
            "Among any \\(k\\) consecutive integers there is <b>exactly one</b> multiple of \\(k\\).",
            "<b>Trailing zeros of</b> \\( n! = \\lfloor n/5 \\rfloor + \\lfloor n/25 \\rfloor + \\lfloor n/125 \\rfloor + \\dots \\). A zero needs a 2 and a 5, and 2s are far more plentiful, so counting 5s counts zeros.",
            "If \\(a\\) divides \\(b\\) and \\(b\\) divides \\(c\\), then \\(a\\) divides \\(c\\)."
          ]},
          { t: "warn", x: "Divisible by \\(a\\) <b>and</b> by \\(b\\) does not mean divisible by \\(ab\\) — that only holds when \\(a\\) and \\(b\\) share no prime factor. 12 is divisible by 4 and by 6, but not by 24, because the two share a factor of 2 and it gets counted twice. Use the <b>LCM</b> (12), never the product." },
          { t: "eg",
            q: "How many positive factors does 360 have?",
            choices: ["12", "18", "20", "24", "36"],
            ans: "D",
            why: "Factorize first: \\(360 = 2^{3}\\cdot3^{2}\\cdot5^{1}\\). A factor of 360 is built by choosing how many 2s to include (0, 1, 2 or 3 — four options), how many 3s (0, 1 or 2 — three options) and how many 5s (0 or 1 — two options). Those choices are independent, so the count is \\(4\\times3\\times2 = 24\\). That is exactly the \\((a+1)(b+1)(c+1)\\) rule, and seeing where it comes from is what stops you writing \\(3\\times2\\times1\\) by mistake."
          },
          { t: "eg",
            q: "The LCM of two positive integers is 180 and their GCD is 6. If one of the numbers is 36, what is the other?",
            choices: ["24", "30", "36", "45", "60"],
            ans: "B",
            why: "Use \\(\\text{LCM}\\times\\text{GCD} = \\) the product of the two numbers: \\(180\\times6 = 1080\\), so the other number is \\(1080/36 = 30\\). Worth checking against the blueprint: \\(36 = 2^{2}3^{2}\\) and \\(30 = 2\\cdot3\\cdot5\\). Lowest shared powers give \\(2\\cdot3 = 6\\) ✓, and highest powers of everything give \\(2^{2}\\cdot3^{2}\\cdot5 = 180\\) ✓."
          }
        ]
      },
      {
        id: "np-primes",
        title: "Prime Numbers & Factorization",
        mins: 7,
        blocks: [
          { t: "p", x: "A <b>prime</b> is a number with exactly two positive factors: 1 and itself. Primes matter because they are the atoms — every integer above 1 is a product of primes in exactly one way, which is what makes the factorization blueprint in the previous section reliable." },
          { t: "p", x: "Two small facts settle a surprising share of prime questions on their own. <b>1 is not prime</b> (it has only one factor, not two), and <b>2 is the only even prime</b> (every other even number has 2 as a third factor). The exam builds questions specifically around people forgetting the second one." },
          { t: "p", x: "The primes below 50 are worth knowing on sight rather than deriving:" },
          { t: "formula", x: "\\begin{gathered}2,\\ 3,\\ 5,\\ 7,\\ 11,\\ 13,\\ 17,\\ 19 \\\\[4pt] 23,\\ 29,\\ 31,\\ 37,\\ 41,\\ 43,\\ 47\\end{gathered}" },
          { t: "h", x: "Testing whether a number is prime" },
          { t: "p", x: "You only have to divide by primes up to \\( \\sqrt{N} \\). The reason is worth seeing: if \\(N = ab\\) with both factors above \\(\\sqrt N\\), their product would exceed \\(N\\) — so any composite number must have a factor at or below its square root." },
          { t: "p", x: "To test 187: \\( \\sqrt{187}\\approx13.7 \\), so try 2, 3, 5, 7, 11, 13 and stop. It fails at 11, since \\( 187 = 11\\times17 \\), so 187 is not prime. Only six divisions were needed to settle a three-digit number." },
          { t: "h", x: "The parity trick" },
          { t: "p", x: "Because 2 is the only even prime, anything a question says about the <b>sum</b> of two primes is really a statement about whether one of them is 2." },
          { t: "ul", items: [
            "If two primes sum to an <b>odd</b> number, one of them <b>must be 2</b> — odd + odd is always even, so an odd total needs an even prime.",
            "If two primes sum to an even number greater than 4, <b>both are odd</b>.",
            "If a prime \\(p\\) divides a product \\(ab\\), then \\(p\\) divides \\(a\\) or \\(p\\) divides \\(b\\). This is the fact that makes factorization unique."
          ]},
          { t: "tip", x: "\"Distinct prime factors\" and \"prime factors\" are different counts. \\( 72 = 2^{3}\\cdot3^{2} \\) has <b>2 distinct</b> prime factors but <b>5</b> prime factors counted with repetition. Read which one the question wants — both numbers will be in the choices." },
          { t: "warn", x: "Never assume a variable described only as \"a prime number\" is odd. Testing \\(p = 2\\) is how most \"must be true\" prime questions fall apart, and it is the first number you should try." },
          { t: "eg",
            q: "If p and q are prime numbers and p + q = 13, what is the value of pq?",
            choices: ["22", "26", "36", "40", "42"],
            ans: "A",
            why: "13 is odd. Two odd primes would add to an even number, so one of these primes has to be even — and 2 is the only even prime. That forces \\(p = 2\\) and \\(q = 11\\), which is indeed prime, so \\(pq = 22\\). Notice how little searching was involved: the parity of the total picked the pair out immediately."
          },
          { t: "eg",
            q: "If p is a prime number greater than 3, then \\(p^{2}+2\\) must be divisible by",
            choices: ["2", "3", "4", "5", "6"],
            ans: "B",
            why: "A prime above 3 is not a multiple of 3, so it is either one more or one less than a multiple of 3. Either way \\(p^{2}\\) is one more than a multiple of 3 — \\((3k\\pm1)^{2} = 9k^{2}\\pm6k+1\\), and the first two terms are multiples of 3. Adding 2 completes the next multiple of 3. Test it: \\(p=5\\) gives 27 ✓, \\(p=7\\) gives 51 ✓, \\(p=11\\) gives 123 ✓. It is not divisible by 2, because \\(p\\) is odd, so \\(p^{2}+2\\) is odd — which also rules out 4 and 6."
          }
        ]
      },
      {
        id: "np-divisibility",
        title: "Divisibility & Remainders",
        mins: 8,
        blocks: [
          { t: "p", x: "This is the most heavily tested number topic on the exam, and almost all of it comes out of one line — the <b>division algorithm</b>. It says that dividing any integer \\(N\\) by \\(d\\) produces a quotient and a remainder, and that the remainder is always smaller than what you divided by." },
          { t: "formula", x: "N = dq + r, \\qquad 0 \\le r &lt; d" },
          { t: "p", x: "The practical value of that line is that it turns a sentence into an equation. \"When \\(n\\) is divided by 7 the remainder is 3\" is not something to hold in your head — it is \\( n = 7k + 3 \\), and once written down it can be substituted, squared, or added to something else like any other expression. Most remainder questions collapse the moment you do this." },
          { t: "h", x: "Divisibility tests" },
          { t: "p", x: "These let you answer \"is it divisible?\" without dividing. The 3 and 9 tests work because 10 leaves a remainder of 1 when divided by either, so every digit contributes just its own value. The 4 and 8 tests work because 100 and 1000 are already divisible by them, so only the tail matters." },
          { t: "table", head: ["Divisor", "Test"], rows: [
            ["2", "last digit is even"],
            ["3", "digit sum divisible by 3"],
            ["4", "last two digits form a multiple of 4"],
            ["5", "last digit 0 or 5"],
            ["6", "passes both the 2 test and the 3 test"],
            ["8", "last three digits form a multiple of 8"],
            ["9", "digit sum divisible by 9"],
            ["11", "alternating digit sum is 0 or a multiple of 11"]
          ]},
          { t: "h", x: "Remainder arithmetic" },
          { t: "p", x: "Remainders survive addition and multiplication, which means you can shrink the numbers before you work rather than after. To find the remainder of \\(43\\times58\\) on division by 5, you do not need the product: \\(43\\) leaves 3, \\(58\\) leaves 3, and \\(3\\times3 = 9\\) leaves 4." },
          { t: "ul", items: [
            "The remainder of a <b>sum</b> is the remainder of the sum of the remainders, then reduced again if needed. Same for products.",
            "<b>Negative remainders</b> are the great shortcut. 29 is one <i>below</i> 30, so with divisor 30 it behaves like \\(-1\\) — and \\( 29^{100} \\) therefore behaves like \\( (-1)^{100} = 1 \\).",
            "<b>Cyclicity</b>: powers of a fixed base repeat their remainders on a short cycle. Find the cycle length, divide the exponent by it, and read off the entry.",
            "The smallest number leaving remainder \\(r\\) for several divisors is \\( \\text{LCM} \\times k + r \\)."
          ]},
          { t: "h", x: "Units digits" },
          { t: "p", x: "\"What is the units digit of \\(7^{83}\\)?\" is a remainder question in disguise — the units digit is the remainder on division by 10 — and it is answered by the same cycling. Only the last digit of the base matters, because nothing further left can affect the last digit of a product." },
          { t: "table", head: ["Last digit of base", "Cycle", "Length"], rows: [
            ["0, 1, 5, 6", "never changes", "1"],
            ["4, 9", "4→6, 9→1", "2"],
            ["2, 3, 7, 8", "e.g. 2: 2, 4, 8, 6", "4"]
          ]},
          { t: "tip", x: "Every cycle length divides 4, so dividing the exponent by 4 always works. A remainder of 0 means take the <b>last</b> entry in the cycle, not the first — \\(2^{8}\\) ends in 6, not 2." },
          { t: "warn", x: "The final remainder is always <b>less than the divisor</b> and never negative. Negative remainders are a working device, not an answer: if your calculation lands on \\(-1\\) with divisor 5, the remainder is 4." },
          { t: "eg",
            q: "What is the remainder when \\(3^{47}\\) is divided by 5?",
            choices: ["1", "2", "3", "4", "0"],
            ans: "B",
            why: "Build the cycle from the bottom: \\(3^{1}=3\\) leaves 3, \\(3^{2}=9\\) leaves 4, \\(3^{3}=27\\) leaves 2, \\(3^{4}=81\\) leaves 1 — and from there it repeats, because a remainder of 1 puts you back at the start. So the cycle is 3, 4, 2, 1 with length 4. Now place the exponent: \\(47 = 4(11)+3\\), a remainder of 3, so \\(3^{47}\\) matches the third entry in the cycle, which is 2."
          },
          { t: "eg",
            q: "When the positive integer n is divided by 12, the remainder is 7. What is the remainder when n is divided by 4?",
            choices: ["0", "1", "2", "3", "7"],
            ans: "D",
            why: "Write the sentence as an equation: \\(n = 12k + 7\\). Now divide that by 4 in pieces. The term \\(12k\\) is a multiple of 4 whatever \\(k\\) is, so it contributes no remainder at all; the whole remainder comes from the 7, and \\(7 = 4(1)+3\\) leaves 3. Test it if you like — 19, 31 and 43 all leave 7 on division by 12, and all three leave 3 on division by 4. The trap is (E) 7, which cannot be right: a remainder must be smaller than the divisor."
          }
        ]
      },
      {
        id: "np-parity",
        title: "Odd / Even & Sign Rules",
        mins: 7,
        blocks: [
          { t: "p", x: "Parity is just whether a number is odd or even, and questions about it look far more algebraic than they are. They usually present an equation full of variables and ask what <b>must</b> be true — but the answer never depends on the actual values, only on which side of the odd/even line each one falls. Learn the table below and you can answer these without testing a single number." },
          { t: "table", head: ["Operation", "Result"], rows: [
            ["even ± even", "even"],
            ["odd ± odd", "even"],
            ["odd ± even", "odd"],
            ["even × anything", "even"],
            ["odd × odd", "odd"]
          ]},
          { t: "p", x: "Two rows carry most of the weight. <b>Addition and subtraction behave identically</b> — you only need to count how many odd terms there are. And <b>multiplication is ruthless</b>: a single even factor makes the whole product even, no matter what else is in it." },
          { t: "ul", items: [
            "A product is <b>odd only if every factor is odd</b>. One even factor is enough to make it even.",
            "The parity of a long sum is decided by <b>how many odd terms</b> it contains. An even count of odd terms gives an even total; the even terms are irrelevant.",
            "\\( n \\) and \\( n^{2} \\) always share parity — squaring is just multiplying a number by itself, so an odd number stays odd. That is why \\( n^{2} \\) odd forces \\(n\\) odd.",
            "The sum of any two consecutive integers is odd, since exactly one of them is even."
          ]},
          { t: "h", x: "Sign rules" },
          { t: "p", x: "Signs follow the same style of reasoning — count how many negatives are in play rather than tracking values." },
          { t: "ul", items: [
            "A product or quotient is <b>positive</b> when it has an <b>even number</b> of negative factors, negative when the count is odd.",
            "An even power is never negative: \\( x^{2} \\ge 0 \\) for every real \\(x\\). This one fact is behind a large share of \"must be true\" answers.",
            "An odd power keeps the sign of its base, so \\(x^{3}\\) is negative exactly when \\(x\\) is."
          ]},
          { t: "warn", x: "Zero is the counterexample the exam expects you to miss. <b>0 is even</b>; it is neither positive nor negative; and it turns any product into 0. Note also that \"positive\" and \"non-negative\" are different conditions — the second one includes 0 and the first does not." },
          { t: "eg",
            q: "If a and b are integers and ab is odd, which of the following must be true?",
            choices: ["a + b is odd", "a + b is even", "a − b is odd", "ab + 1 is odd", "a is even"],
            ans: "B",
            why: "Start from the given. A product is odd only when every factor is odd, so \\(a\\) and \\(b\\) are <b>both</b> odd — that is the whole content of \"ab is odd\". Odd + odd = even, so (B) must hold. Checking the others against the same fact: \\(a-b\\) is odd minus odd, which is even, so (A) and (C) are both wrong; \\(ab+1\\) is odd + 1, which is even, so (D) is wrong; and (E) contradicts what we just derived."
          },
          { t: "eg",
            q: "If x and y are integers and x + y is odd, which of the following must be even?",
            choices: ["xy", "x − y", "x + 2y", "xy + 1", "\\(x^{2} + y^{2}\\)"],
            ans: "A",
            why: "An odd sum means one of the two is odd and the other even — that is the only way to get an odd total. So the product \\(xy\\) has an even factor in it and must be even ✓. The rest: \\(x-y\\) is odd for the same reason the sum is; \\(x+2y\\) depends on \\(x\\), which could be either, so it is not determined; \\(xy+1\\) is even + 1, so odd; and \\(x^{2}+y^{2}\\) keeps the parities of \\(x\\) and \\(y\\), so it is odd + even = odd. Only (A) survives, and no numbers were substituted."
          }
        ]
      },
      {
        id: "np-fractions",
        title: "Fractions & Decimals",
        mins: 8,
        blocks: [
          { t: "p", x: "Almost no GMAT fraction question wants you to compute a fraction. They want you to <b>compare</b> fractions, or to recognise one, and the exam deliberately chooses numbers where actually dividing is slow. So the skill worth building is a set of ways to decide which of two fractions is larger without ever finding either as a decimal." },
          { t: "h", x: "1. Cross-multiply" },
          { t: "p", x: "For positive denominators, comparing \\( \\frac{a}{b} \\) with \\( \\frac{c}{d} \\) is the same as comparing \\( ad \\) with \\( bc \\) — multiply up the diagonal, and the bigger product sits over the bigger fraction. It works because you are effectively multiplying both sides by \\(bd\\), which is positive and so leaves the inequality alone. No common denominator required." },
          { t: "h", x: "2. Compare against a benchmark" },
          { t: "p", x: "Often you do not need to compare the fractions to each other at all — just sort each one against \\( \\tfrac12 \\) or 1. \\( \\tfrac{7}{15} \\) is under a half (7 is less than half of 15) and \\( \\tfrac{9}{17} \\) is over. Done, with no arithmetic." },
          { t: "h", x: "3. Measure the gap, not the value" },
          { t: "p", x: "When every fraction in the list is close to 1, compare how far each one <b>falls short</b> of 1 — the smallest shortfall is the largest fraction. \\( \\tfrac78 \\) is \\( \\tfrac18 \\) short and \\( \\tfrac9{10} \\) is only \\( \\tfrac1{10} \\) short, so \\( \\tfrac9{10} \\) is larger. This turns a hard comparison into an easy one, because the gaps are unit fractions." },
          { t: "h", x: "4. Adding to both parts pulls a fraction towards 1" },
          { t: "p", x: "Adding the same positive amount to the top and the bottom always moves a fraction <b>closer to 1</b> — up if it started below, down if it started above:" },
          { t: "formula", x: "\\begin{gathered}\\frac{a}{b} &lt; \\frac{a+x}{b+x} \\quad \\text{ when } a&lt;b \\\\[4pt] \\frac{a}{b} &gt; \\frac{a+x}{b+x} \\quad \\text{ when } a&gt;b\\end{gathered}" },
          { t: "p", x: "The intuition: \\(\\tfrac12\\) becomes \\(\\tfrac23\\) becomes \\(\\tfrac34\\) — the added amount matters proportionally less to the larger denominator, so the two parts drift together." },
          { t: "h", x: "Decimals" },
          { t: "ul", items: [
            "A fraction in <b>lowest terms</b> terminates exactly when its denominator's only prime factors are <b>2 and 5</b>. That is because a terminating decimal is a fraction over a power of 10, and \\(10 = 2\\times5\\). Any other prime left in the denominator forces a repeat.",
            "Same numerator, bigger denominator means a smaller fraction — you are sharing the same amount among more.",
            "To divide by a decimal, shift both decimal points right until the divisor is a whole number. \\(0.96 \\div 0.04\\) becomes \\(96 \\div 4\\).",
            "Keep the fraction form as long as you can — \\( \\tfrac38 \\times 240 \\) is instant, \\(0.375 \\times 240\\) is not."
          ]},
          { t: "h", x: "Repeating decimals" },
          { t: "p", x: "A repeating block converts back to a fraction by putting it over the same number of nines: \\( 0.\\overline{7}=\\tfrac79 \\), and \\( 0.\\overline{36}=\\tfrac{36}{99}=\\tfrac{4}{11} \\). One repeating digit gives ninths, two give ninety-ninths, three give nine-hundred-ninety-ninths." },
          { t: "warn", x: "You may cancel a common <b>factor</b> across a fraction, never a common <b>term</b>. \\( \\frac{x+3}{x+5} \\) does not reduce to \\( \\frac{3}{5} \\), because the \\(x\\) is added, not multiplied. Cancelling is division, and you can only divide the whole of the top and the whole of the bottom." },
          { t: "tip", x: "Round late, not early. \\( \\tfrac13 \\) is exact and 0.333 is not, and rounding at the start is how a perfectly correct method lands between two answer choices." },
          { t: "eg",
            q: "Which of the following fractions is equivalent to a terminating decimal?",
            choices: ["\\(\\dfrac{1}{6}\\)", "\\(\\dfrac{1}{7}\\)", "\\(\\dfrac{1}{12}\\)", "\\(\\dfrac{1}{15}\\)", "\\(\\dfrac{1}{16}\\)"],
            ans: "E",
            why: "Factorize each denominator and look for anything other than 2s and 5s. \\(6 = 2\\cdot3\\), \\(7\\) is prime, \\(12 = 2^{2}\\cdot3\\), \\(15 = 3\\cdot5\\) — every one of those carries a 3 or a 7, so all four repeat. Only \\(16 = 2^{4}\\) is built from 2s alone, and indeed \\(1/16 = 0.0625\\). Note the rule needs the fraction in <b>lowest terms</b>: \\(3/6\\) looks like it fails, but it reduces to \\(1/2\\), which terminates."
          },
          { t: "eg",
            q: "Which of the following is the greatest?",
            choices: ["\\(\\dfrac{7}{9}\\)", "\\(\\dfrac{5}{7}\\)", "\\(\\dfrac{9}{11}\\)", "\\(\\dfrac{11}{14}\\)", "\\(\\dfrac{3}{4}\\)"],
            ans: "C",
            why: "Every one of these sits just below 1, so compare the shortfalls instead of the fractions. They are \\(2/9\\), \\(2/7\\), \\(2/11\\), \\(3/14\\) and \\(1/4\\), which as decimals are about 0.222, 0.286, 0.182, 0.214 and 0.25. The smallest shortfall belongs to \\(9/11\\), so it is the largest fraction. Three of the gaps have numerator 2, and among those the largest denominator gives the smallest gap — so \\(9/11\\) beats \\(7/9\\) and \\(5/7\\) at a glance."
          }
        ]
      },
      {
        id: "np-numberline",
        title: "The Number Line & Real Numbers",
        mins: 8,
        blocks: [
          { t: "p", x: "The real numbers are every point on a line — the integers, the fractions between them, and the irrationals such as \\( \\sqrt2 \\) and \\( \\pi \\) that fill the gaps between the fractions. The GMAT lists \"real numbers\" as its own topic because a surprising number of questions are not about arithmetic at all, but about <b>where a number sits on the line and how that position controls its behaviour</b>." },
          { t: "h", x: "Ordering" },
          { t: "ul", items: [
            "Left is smaller. That sounds trivial until the numbers are negative: \\( -5 &lt; -2 \\), because \\(-5\\) sits further left. \"Bigger negative\" is not a phrase that means anything — say \"further from zero\" instead.",
            "Between any two real numbers there is always another. \"The integer between 3 and 4\" does not exist, but \"the number between 3 and 4\" has infinitely many answers, and a question that says \"a number\" without \"integer\" is inviting you to try \\(3.5\\).",
            "Comparing a fraction and a decimal: convert to whichever form is quicker, or compare both to a benchmark like \\( \\tfrac12 \\). \\( \\tfrac{7}{15} \\) against \\(0.48\\): the fraction is just under a half, the decimal just under it too, so cross-multiply — \\(7\\times100 = 700\\) against \\(48\\times15 = 720\\), so \\(0.48\\) is larger."
          ]},
          { t: "h", x: "Absolute value is distance" },
          { t: "p", x: "\\( |x| \\) is how far \\(x\\) is from zero, and \\( |x-a| \\) is how far it is from \\(a\\). Distance is never negative and does not care about direction, which is why \\( |{-7}| = |7| = 7 \\). Reading absolute value as a distance turns most such questions into pictures: \\( |x-3| &lt; 2 \\) means \"within 2 of 3\", which is the stretch from 1 to 5." },
          { t: "h", x: "The seven zones" },
          { t: "p", x: "How a number responds to being squared, rooted, or flipped depends only on which zone of the line it lives in. The boundaries are \\(-1\\), \\(0\\) and \\(1\\):" },
          { t: "table", head: ["Zone", "Example", "\\(x^{2}\\) vs \\(x\\)", "\\(1/x\\)"], rows: [
            ["\\(x &lt; -1\\)", "\\(-2\\)", "\\(x^{2} &gt; x\\) (4 vs −2)", "between −1 and 0"],
            ["\\(x = -1\\)", "\\(-1\\)", "\\(x^{2} &gt; x\\)", "\\(-1\\), itself"],
            ["\\(-1 &lt; x &lt; 0\\)", "\\(-\\dfrac12\\)", "\\(x^{2} &gt; x\\) (positive beats negative)", "less than −1"],
            ["\\(x = 0\\)", "\\(0\\)", "equal", "undefined"],
            ["\\(0 &lt; x &lt; 1\\)", "\\(\\dfrac12\\)", "\\(x^{2} &lt; x\\) \\((\\tfrac{1}{4}\\) vs \\(\\tfrac{1}{2})\\)", "greater than 1"],
            ["\\(x = 1\\)", "\\(1\\)", "equal", "\\(1\\), itself"],
            ["\\(x &gt; 1\\)", "\\(2\\)", "\\(x^{2} &gt; x\\)", "between 0 and 1"]
          ]},
          { t: "p", x: "Two things to take from the table. Squaring makes a number bigger <b>everywhere except</b> between 0 and 1, where it shrinks it. And taking a reciprocal flips a number across the boundary at 1 (or \\(-1\\)) without changing its sign — a number between 0 and 1 becomes a number above 1, and vice versa." },
          { t: "warn", x: "Reciprocals reverse order for numbers of the same sign: \\( 2 &lt; 5 \\) but \\( \\tfrac12 &gt; \\tfrac15 \\). They do <b>not</b> reverse it across a sign change — \\( -2 &lt; 5 \\) and \\( -\\tfrac12 &lt; \\tfrac15 \\) too. A question that has you flip both sides of an inequality is testing exactly this." },
          { t: "h", x: "Must be true, could be true, cannot be true" },
          { t: "p", x: "These three stems are three different jobs, and the number line is how you do them. Pick one test number from each zone that the given conditions allow, and run each choice against them." },
          { t: "ul", items: [
            "<b>Must be true</b> — needs to hold for every allowed number. One counterexample kills a choice, so try the awkward zones first: negatives, fractions, zero.",
            "<b>Could be true</b> — needs to hold for at least one allowed number. One example proves a choice.",
            "<b>Cannot be true</b> — fails for every allowed number. Again, a single example that makes it work is enough to eliminate the choice."
          ]},
          { t: "tip", x: "Keep a fixed kit of test numbers and run through it without thinking: \\(-2\\), \\(-1\\), \\(-\\tfrac12\\), \\(0\\), \\(\\tfrac12\\), \\(1\\), \\(2\\). That is one from each zone, and it exposes nearly every false \"must be true\" on the exam in under a minute." },
          { t: "eg",
            q: "If \\(0 &lt; x &lt; 1\\), which of the following must be true?\n\nI. \\(x^{2} &lt; x\\)   II. \\(\\dfrac{1}{x} &gt; 1\\)   III. \\(\\sqrt{x} &gt; x\\)",
            choices: ["I only", "II only", "I and II only", "I and III only", "I, II and III"],
            ans: "E",
            why: "Test the zone's representative, \\(x = \\tfrac12\\), and then think about why it generalises. I: \\(\\tfrac14 &lt; \\tfrac12\\) ✓ — multiplying a number by something smaller than 1 shrinks it, and \\(x\\) is smaller than 1. II: \\(1/\\tfrac12 = 2 &gt; 1\\) ✓ — a reciprocal flips a number across 1. III: \\(\\sqrt{\\tfrac12} \\approx 0.71 &gt; 0.5\\) ✓ — a root undoes some of the shrinking that squaring does, so it pulls a fraction back up towards 1. All three hold throughout the zone, so (E). Note that every one of the three reverses for \\(x &gt; 1\\), which is why the stem's condition matters."
          },
          { t: "eg",
            q: "Which of the following numbers is closest to zero on the number line?",
            choices: ["\\(-0.3\\)", "\\(0.35\\)", "\\(-\\dfrac{1}{4}\\)", "\\(\\dfrac{1}{3}\\)", "\\(-0.29\\)"],
            ans: "C",
            why: "\"Closest to zero\" means smallest absolute value, and the sign is irrelevant. Convert everything to a distance from zero: \\(0.3\\), \\(0.35\\), \\(0.25\\), \\(0.333\\ldots\\), \\(0.29\\). The smallest is \\(0.25\\), so \\(-\\tfrac14\\) is nearest zero. The trap is to pick the \"smallest\" number, which on the line is \\(-0.3\\) — but smallest and closest to zero are different questions, and the negatives are where they come apart."
          }
        ]
      },
      {
        id: "np-exponents",
        title: "Exponent Rules",
        mins: 7,
        blocks: [
          { t: "p", x: "An exponent is repeated multiplication, and every rule below is just bookkeeping about how many times something has been multiplied. \\(a^{3}\\cdot a^{4}\\) is three \\(a\\)s next to four \\(a\\)s, which is seven \\(a\\)s — that is the whole justification for adding exponents, and it is worth holding on to, because it tells you when the rules do <b>not</b> apply." },
          { t: "p", x: "The single most useful thing to notice: every rule requires either the <b>same base</b> or the <b>same exponent</b>. When an expression looks unusable, your job is to rewrite it until one of those two matches." },
          { t: "formula", x: "\\begin{gathered}a^m\\cdot a^n=a^{m+n} \\qquad \\frac{a^m}{a^n}=a^{m-n} \\\\[4pt] (a^m)^n=a^{mn} \\qquad (ab)^n=a^n b^n\\end{gathered}" },
          { t: "ul", items: [
            "\\( a^{0}=1 \\) for any \\( a\\neq0 \\). It has to be: \\(a^{3}/a^{3}\\) is both 1 and \\(a^{0}\\).",
            "\\( a^{-n}=\\frac{1}{a^{n}} \\). A negative exponent <b>flips</b> the number; it never makes it negative. \\(2^{-3}\\) is \\(\\tfrac18\\), not \\(-8\\).",
            "Match bases to solve an equation: \\( 4^{x}=8 \\Rightarrow 2^{2x}=2^{3} \\Rightarrow 2x = 3 \\Rightarrow x=\\tfrac32 \\). Once the bases agree, the exponents must too.",
            "\\( 2^{10}=1024\\approx10^{3} \\) — the anchor for any \"roughly how big\" question."
          ]},
          { t: "h", x: "The two moves that carry the topic" },
          { t: "p", x: "There is no rule for <b>adding</b> powers, which is exactly why the exam keeps presenting them. Both moves below convert a sum into a product, where the rules do work." },
          { t: "ol", items: [
            "<b>Adding equal powers multiplies the base.</b> \\( 2^{n}+2^{n}=2\\cdot2^{n}=2^{n+1} \\), and \\( 3^{n}+3^{n}+3^{n}=3^{n+1} \\). A sum of identical powers should never be left as a sum.",
            "<b>Factor out the smallest power.</b> \\( 2^{20}-2^{18}=2^{18}(2^{2}-1)=3\\cdot2^{18} \\). Whenever powers of one base are added or subtracted, this is the move — and what is left inside the bracket is always a small, tidy number."
          ]},
          { t: "h", x: "Comparing powers with different bases" },
          { t: "p", x: "You cannot compare \\( 2^{30} \\) and \\( 3^{20} \\) directly, because neither the base nor the exponent matches. Force a common <b>exponent</b> by pulling out the greatest common factor of the two exponents — here 10:" },
          { t: "formula", x: "\\begin{gathered}2^{30}=(2^{3})^{10}=8^{10} \\\\[4pt] 3^{20}=(3^{2})^{10}=9^{10}\\end{gathered}" },
          { t: "p", x: "Now the comparison is obvious: \\( 9^{10} \\) is bigger, so \\( 3^{20} &gt; 2^{30} \\)." },
          { t: "warn", x: "Three traps worth naming. \\( (a+b)^{2}\\neq a^{2}+b^{2} \\) — exponents do not distribute over addition. \\( (-2)^{4}=16 \\) but \\( -2^{4}=-16 \\), because without brackets the exponent binds tighter than the minus sign. And for \\( 0&lt;x&lt;1 \\), a higher power makes the value <b>smaller</b>, so \\( x^{3}&lt;x^{2}&lt;x \\) — squaring a half gives a quarter." },
          { t: "tip", x: "Know every power of 2 up to \\( 2^{10}=1024 \\) by heart, along with \\( 3^{5}=243 \\), \\( 5^{4}=625 \\) and \\( 7^{3}=343 \\). Recognising a number as a power is what turns a hard exponent question into a one-liner." },
          { t: "eg",
            q: "\\(\\dfrac{2^{20}-2^{18}}{2^{18}} = \\)",
            choices: ["2", "3", "4", "\\(2^{2}\\)", "\\(2^{38}\\)"],
            ans: "B",
            why: "There is no rule for dividing a difference, so first turn the numerator into a product by factoring out the smaller power: \\(2^{20}-2^{18} = 2^{18}(2^{2}-1) = 2^{18}\\cdot3\\). Now the \\(2^{18}\\) cancels against the denominator and 3 is all that remains. The tempting wrong move is to cancel \\(2^{18}\\) into each term separately and get \\(2^{2}-1\\) — which happens to give 3 as well, but only by luck of this arrangement; do it as a genuine factorization and it always works."
          },
          { t: "eg",
            q: "If \\(2^{x}\\cdot 4^{\\,x+1} = 16^{2}\\), then \\(x = \\)",
            choices: ["1", "2", "3", "4", "6"],
            ans: "B",
            why: "Nothing can be done while three different bases are on the page, so rewrite everything as a power of 2: \\(4 = 2^{2}\\) and \\(16 = 2^{4}\\). The left side becomes \\(2^{x}\\cdot2^{2(x+1)} = 2^{3x+2}\\) and the right becomes \\(2^{8}\\). With bases matched, the exponents must be equal: \\(3x+2 = 8\\), so \\(x = 2\\). Check: \\(2^{2}\\cdot4^{3} = 4\\cdot64 = 256 = 16^{2}\\) ✓."
          }
        ]
      },
      {
        id: "np-roots",
        title: "Roots, Radicals & Estimation",
        mins: 7,
        blocks: [
          { t: "p", x: "A root is an exponent in disguise — \\( \\sqrt{a} \\) is \\( a^{1/2} \\) — which means every rule you learned for exponents still applies here. Nothing new has to be memorised; the only new work is recognising which perfect square is hiding inside an awkward number." },
          { t: "formula", x: "\\begin{gathered}a^{m/n}=\\sqrt[n]{a^{m}} \\qquad \\sqrt{ab}=\\sqrt a\\,\\sqrt b \\\\[4pt] \\sqrt{\\tfrac ab}=\\frac{\\sqrt a}{\\sqrt b}\\end{gathered}" },
          { t: "p", x: "Note what those rules cover: <b>multiplication and division only</b>. Roots do not distribute over addition, and \\( \\sqrt{a+b}\\neq\\sqrt a+\\sqrt b \\) — \\(\\sqrt{9+16}\\) is 5, while \\(\\sqrt9+\\sqrt{16}\\) is 7." },
          { t: "h", x: "Simplifying" },
          { t: "p", x: "To simplify a root, split it into a perfect square times whatever is left, then take the square out: \\( \\sqrt{72}=\\sqrt{36\\cdot2}=6\\sqrt2 \\). Always strip the <b>largest</b> square you can see — pulling out 4 first leaves \\(2\\sqrt{18}\\), which still needs simplifying." },
          { t: "ul", items: [
            "<b>Rationalize</b> a denominator with the conjugate: \\( \\frac{1}{\\sqrt5-\\sqrt3}\\times\\frac{\\sqrt5+\\sqrt3}{\\sqrt5+\\sqrt3}=\\frac{\\sqrt5+\\sqrt3}{2} \\). The conjugate works because \\((x-y)(x+y) = x^{2}-y^{2}\\), and squaring kills the roots.",
            "Worth knowing to two places: \\( \\sqrt2\\approx1.41 \\), \\( \\sqrt3\\approx1.73 \\), \\( \\sqrt5\\approx2.24 \\), \\( \\sqrt7\\approx2.65 \\).",
            "\\( \\sqrt a+\\sqrt b \\) is always <b>greater</b> than \\( \\sqrt{a+b} \\) for positive \\(a\\) and \\(b\\), because squaring the left-hand side produces an extra \\( 2\\sqrt{ab} \\)."
          ]},
          { t: "h", x: "Bracketing — the estimation move" },
          { t: "p", x: "To place a root you do not recognise, find the perfect squares on either side of it. For \\( \\sqrt{50} \\): \\( 49&lt;50&lt;64 \\), so the value sits just above 7 — and since 50 is barely past 49, it is only just above. That is almost always precise enough to pick an answer, and it takes two seconds." },
          { t: "h", x: "Comparing roots" },
          { t: "p", x: "To compare two positive roots, <b>square them both</b>. Squaring preserves order for positive numbers, and it clears the radicals completely. Comparing \\( 3\\sqrt5 \\) with \\( 2\\sqrt{12} \\): the squares are \\(9\\times5 = 45\\) and \\(4\\times12 = 48\\), so \\( 2\\sqrt{12} \\) is the larger." },
          { t: "h", x: "Scientific notation" },
          { t: "p", x: "Write a number as \\( a\\times10^{n} \\) with \\( 1\\le a&lt;10 \\). Multiplying adds the exponents and dividing subtracts them, so \\( (3\\times10^{5})(4\\times10^{-2}) = 12\\times10^{3} \\) — then renormalise to \\( 1.2\\times10^{4} \\), since 12 is outside the allowed range for \\(a\\)." },
          { t: "warn", x: "\\( \\sqrt{x^{2}}=|x| \\), not \\(x\\) — if \\(x\\) were \\(-3\\), the left side is 3. And the radical sign denotes the <b>positive</b> root only, so \\( \\sqrt{9}=3 \\) and nothing else. It is the <i>equation</i> \\( x^{2}=9 \\) that has two solutions, \\( x=\\pm3 \\). Keeping those two facts apart is worth several marks." },
          { t: "tip", x: "For \\( 0&lt;x&lt;1 \\) a root makes a number <b>bigger</b>: \\( \\sqrt{0.25}=0.5 \\). Combined with the exponent rule that powers make such numbers smaller, sorting \\( x,\\ x^{2},\\ \\sqrt x \\) for a fraction gives \\( x^{2}&lt;x&lt;\\sqrt x \\) — a favourite Data Sufficiency trap." },
          { t: "eg",
            q: "If \\(\\sqrt{x}=8\\), then \\(\\sqrt[3]{x}=\\)",
            choices: ["2", "4", "8", "16", "64"],
            ans: "B",
            why: "Two clean steps. Square both sides of the given to recover \\(x\\) itself: \\(x = 64\\). Then take the cube root, which asks what number cubed gives 64 — that is 4, since \\(4^{3}=64\\). The trap is (C) 8, which comes from carrying the 8 across as though the two roots were interchangeable; they are not, and 64 is the only thing the two statements have in common."
          },
          { t: "eg",
            q: "Which of the following is the greatest?",
            choices: ["5", "\\(\\sqrt{26}\\)", "\\(2\\sqrt6\\)", "\\(3\\sqrt3\\)", "\\(\\sqrt{24}\\)"],
            ans: "D",
            why: "Do not estimate five decimals — square everything, which is safe because all five are positive. The squares are 25, 26, \\(4\\times6 = 24\\), \\(9\\times3 = 27\\) and 24. The largest square belongs to \\(3\\sqrt3\\), so it is the largest value. Squaring turns an awkward comparison of irrational numbers into a comparison of small integers, and it is the standard move whenever roots have coefficients in front of them."
          }
        ]
      },
      {
        id: "np-estimation",
        title: "Estimation, Rounding & Scientific Notation",
        mins: 7,
        blocks: [
          { t: "p", x: "The GMAT lists estimation as a topic in its own right, and it means it literally: some questions are written so that an exact answer is slow and a rounded one is instant. The skill is not \"being approximately right\" — it is knowing <b>how much precision the answer choices demand</b>, and then spending exactly that much." },
          { t: "h", x: "Read the choices before you calculate" },
          { t: "p", x: "Choices of 1.3, 13, 130, 1,300 and 13,000 differ by a factor of ten each; they are asking for an order of magnitude, and one rough multiplication settles it. Choices of 128, 130, 131, 133 and 135 are asking for the exact figure. Deciding which situation you are in is the first move on any question with the words \"closest to\" or \"approximately\"." },
          { t: "h", x: "Round in compensating directions" },
          { t: "p", x: "When you multiply, rounding one factor up and the other down keeps the errors small, because they pull opposite ways. When you divide, round the numerator and denominator in the <b>same</b> direction for the same reason. \\( \\dfrac{412}{19} \\) is close to \\( \\dfrac{420}{20} = 21 \\); rounding to \\( \\dfrac{400}{20} = 20 \\) drifts further from the true value of about 21.7." },
          { t: "ul", items: [
            "Prefer rounding to numbers that divide cleanly: 19 becomes 20, 0.248 becomes \\( \\tfrac14 \\), 0.66 becomes \\( \\tfrac23 \\).",
            "Fractions are often cleaner than decimals — \\( \\tfrac18 \\) of 2,000 is 250 at sight; \\( 0.125\\times2000 \\) is not.",
            "Keep track of which way you rounded. If both moves pushed the estimate up, the true value is a little below it — which is often enough to choose between two neighbouring choices."
          ]},
          { t: "h", x: "Benchmarks worth knowing" },
          { t: "table", head: ["Quantity", "≈", "Quantity", "≈"], rows: [
            ["\\(2^{10}\\)", "1,000", "\\(\\sqrt2\\)", "1.41"],
            ["\\(\\pi\\)", "3.14", "\\(\\sqrt3\\)", "1.73"],
            ["\\(\\dfrac17\\)", "0.143", "\\(\\sqrt5\\)", "2.24"],
            ["\\(\\dfrac19\\)", "0.111", "\\(\\dfrac1{12}\\)", "0.083"]
          ]},
          { t: "h", x: "Scientific notation" },
          { t: "p", x: "A number is written as \\( a\\times10^{n} \\) with \\( 1\\le a&lt;10 \\). Keep the two parts separate: multiply or divide the \\(a\\)'s as ordinary numbers, and <b>add or subtract the exponents</b>. Then renormalise if \\(a\\) has drifted outside 1 to 10." },
          { t: "formula", x: "(3\\times10^{5})(4\\times10^{-2}) = 12\\times10^{3} = 1.2\\times10^{4}" },
          { t: "ul", items: [
            "Moving the decimal point one place left raises the exponent by one; one place right lowers it. \\( 0.0048 = 4.8\\times10^{-3} \\).",
            "Counting digits: a number of the form \\( a\\times10^{n} \\) with \\(1\\le a&lt;10\\) has \\(n+1\\) digits before the decimal point.",
            "Comparing two numbers in scientific notation, compare the exponents first; only if they match do the \\(a\\)'s matter."
          ]},
          { t: "warn", x: "Do not round early in a multi-step calculation and then report a precise answer. Rounding is for the <b>last</b> step, or for a question whose choices are far apart. Rounding at step one and then dividing twice can move the answer clean past a neighbouring choice." },
          { t: "eg",
            q: "Which of the following is closest to \\(0.00312\\times41{,}900\\)?",
            choices: ["1.3", "13", "130", "1,300", "13,000"],
            ans: "C",
            why: "The choices are a factor of ten apart, so only the size matters. Round hard: \\(0.003\\times42{,}000\\). Three thousandths of 42,000 is \\(42{,}000/1000\\times3 = 126\\), so the answer is in the low hundreds — (C). The exact product is about 130.7, but computing it would have been wasted effort. Note the direction: 0.00312 was rounded down and 41,900 rounded up, which is why the estimate lands so close."
          },
          { t: "eg",
            q: "\\(\\dfrac{4.2\\times10^{6}}{6\\times10^{-3}} = \\)",
            choices: ["\\(7\\times10^{2}\\)", "\\(7\\times10^{3}\\)", "\\(7\\times10^{8}\\)", "\\(7\\times10^{9}\\)", "\\(2.52\\times10^{4}\\)"],
            ans: "C",
            why: "Handle the two parts separately. The numbers: \\(4.2/6 = 0.7\\). The exponents: dividing subtracts them, and subtracting a negative adds, so \\(6-(-3) = 9\\). That gives \\(0.7\\times10^{9}\\), which is not yet in standard form because 0.7 is below 1 — move the point one place right and drop the exponent by one: \\(7\\times10^{8}\\). The trap is (D), from forgetting that step; (B) comes from treating the \\(-3\\) as \\(+3\\)."
          }
        ]
      }
    ]
  },

  {
    id: "quant-algebra",
    section: "quant",
    title: "Algebra",
    source: "Algebra concepts, with exam tricks",
    parts: [
      {
        id: "ag-expressions",
        title: "Expressions & Factoring",
        mins: 7,
        blocks: [
          { t: "p", x: "Factoring on the GMAT is almost never asked for its own sake. It appears because an expression is standing in the way of an answer, and rewriting it as a product makes the obstacle disappear — a huge multiplication becomes two small ones, a fraction cancels, a sum turns into something you can divide by." },
          { t: "p", x: "Three identities account for nearly all of it. Learn them in <b>both directions</b>: seeing \\(a^{2}-b^{2}\\) and thinking \"that factors\", and seeing \\((a-b)(a+b)\\) and thinking \"that is a difference of squares\"." },
          { t: "formula", x: "\\begin{gathered}a^{2}-b^{2}=(a-b)(a+b) \\\\[4pt] (a\\pm b)^{2}=a^{2}\\pm2ab+b^{2}\\end{gathered}" },
          { t: "formula", x: "a^{3}\\pm b^{3}=(a\\pm b)(a^{2}\\mp ab+b^{2})" },
          { t: "h", x: "Difference of squares as a calculator" },
          { t: "p", x: "Any \"big number squared minus big number squared\" is a two-second question once you see the identity. \\( 87^{2}-13^{2}=(87-13)(87+13)=74\\times100=7400 \\). The exam writes these deliberately, with numbers chosen so that the sum or the difference comes out round — which is itself the signal that factoring is intended." },
          { t: "h", x: "Symmetric expressions" },
          { t: "p", x: "This is the idea that turns hard-looking algebra into two lines. If you are given \\( a+b \\) and \\( ab \\), you can reach almost any symmetric combination <b>without ever finding \\(a\\) and \\(b\\)</b> — and usually you cannot find them, which is the hint that you were not meant to." },
          { t: "ul", items: [
            "\\( a^{2}+b^{2}=(a+b)^{2}-2ab \\) — square the sum, then remove the cross terms it introduced.",
            "\\( (a-b)^{2}=(a+b)^{2}-4ab \\), which also gives you \\(a-b\\) up to sign.",
            "\\( x+\\frac1x=k \\ \\Rightarrow\\ x^{2}+\\frac1{x^{2}}=k^{2}-2 \\), because the cross term is \\(2\\cdot x\\cdot\\frac1x = 2\\) whatever \\(x\\) is."
          ]},
          { t: "tip", x: "Always take out the <b>common factor first</b>. \\( 3x^{2}-27 = 3(x^{2}-9) = 3(x-3)(x+3) \\); reaching for an identity before removing the 3 hides the difference of squares completely." },
          { t: "warn", x: "Never cancel a factor that could be zero. Going from \\( x(x-2)=x \\) to \\( x-2=1 \\) silently throws away the root \\( x=0 \\), because you divided by \\(x\\) without checking whether \\(x\\) was allowed to be 0. Move everything to one side and factor instead." },
          { t: "h", x: "A factoring checklist" },
          { t: "ol", items: [
            "Take out the <b>common factor</b> first, always.",
            "Check for a <b>difference of squares</b> — two terms, both perfect squares, a minus sign between them.",
            "For three terms, look for the pair of numbers whose <b>product is the constant and whose sum is the middle coefficient</b>.",
            "For four terms, try <b>grouping</b> them in pairs and factoring each pair; if the brackets match, factor that out too.",
            "If it still resists, try a <b>substitution</b>: \\( x^{4}-5x^{2}+4 \\) is an ordinary quadratic in \\( t=x^{2} \\)."
          ]},
          { t: "tip", x: "To simplify an algebraic fraction, factor the top and the bottom <b>completely</b> and only then cancel. Trying to cancel before factoring is what produces the classic error of striking out a term instead of a factor." },
          { t: "eg",
            q: "\\(87^{2}-13^{2}=\\)",
            choices: ["5476", "6400", "7400", "7600", "10 000"],
            ans: "C",
            why: "Squaring 87 by hand is a minute of work and a good chance of an arithmetic slip. Recognise the shape instead: \\(a^{2}-b^{2} = (a-b)(a+b)\\), so this is \\((87-13)(87+13) = 74\\times100 = 7400\\). The round 100 is the giveaway that the question was built for this identity — whenever two squares are subtracted and the numbers add to something tidy, factor."
          },
          { t: "eg",
            q: "If \\(x + \\dfrac{1}{x} = 5\\), what is the value of \\(x^{2} + \\dfrac{1}{x^{2}}\\)?",
            choices: ["10", "23", "25", "27", "30"],
            ans: "B",
            why: "You are not meant to find \\(x\\) — it is irrational. Square the whole given instead: \\(\\left(x+\\tfrac1x\\right)^{2} = x^{2} + 2\\cdot x\\cdot\\tfrac1x + \\tfrac1{x^{2}} = x^{2} + 2 + \\tfrac1{x^{2}}\\). That equals \\(5^{2} = 25\\), so \\(x^{2}+\\tfrac1{x^{2}} = 23\\). The trap is 25, from squaring and forgetting the cross term — which here is exactly 2, because \\(x\\) cancels against \\(1/x\\)."
          }
        ]
      },
      {
        id: "ag-linear",
        title: "Linear Equations",
        mins: 7,
        blocks: [
          { t: "p", x: "Solving a linear equation is mechanical, and the exam knows it. The marks in this topic are lost earlier, in <b>translation</b> — turning an English sentence into the right equation. So slow down at the sentence and speed up at the algebra, not the other way round." },
          { t: "p", x: "Translate one phrase at a time, in the order it is written, using this dictionary:" },
          { t: "table", head: ["Words", "Algebra"], rows: [
            ["is, was, will be", "="],
            ["of", "×"],
            ["more than, increased by", "+"],
            ["less than, decreased by", "− (order flips)"],
            ["twice, doubled", "2×"],
            ["per, for each", "÷"],
            ["a number", "x"]
          ]},
          { t: "warn", x: "\"5 less than \\(x\\)\" is \\( x-5 \\), never \\( 5-x \\). Addition and multiplication can be read in either order, but <b>subtraction and division reverse it</b> — \"less than\" and \"divided into\" both name the second quantity first. This one line of English costs more marks than any other in Quant." },
          { t: "h", x: "Working cleanly" },
          { t: "ul", items: [
            "Clear fractions first by multiplying <b>every</b> term by the lowest common denominator — one step and all the denominators are gone.",
            "Collect the variables on whichever side keeps the coefficient positive. It costs nothing and prevents most sign errors.",
            "Consecutive integers are \\( n,\\ n+1,\\ n+2 \\); consecutive even or odd integers are \\( n,\\ n+2,\\ n+4 \\) — the gap is 2 in both cases, since the parity has to be preserved.",
            "Substitute your answer back into the <b>original sentence</b>, not into your equation."
          ]},
          { t: "h", x: "Sum and difference" },
          { t: "p", x: "When a problem gives you the <b>total</b> and the <b>difference</b> of two quantities, you never need simultaneous equations. Adding the two facts cancels one variable outright:" },
          { t: "formula", x: "\\begin{gathered}x=\\frac{S+D}{2} \\\\[4pt] y=\\frac{S-D}{2}\\end{gathered}" },
          { t: "p", x: "Two numbers summing to 50 and differing by 12 are therefore \\( (50+12)/2 = 31 \\) and \\( (50-12)/2 = 19 \\), straight off, with nothing written down." },
          { t: "tip", x: "Name your variable after the thing the question <b>asks for</b>. Solving neatly for \\(x\\) and only then noticing that the question wanted \\( 2x+1 \\) is one of the most common ways to lose a question you fully understood — and the value of \\(x\\) will be sitting in the answer choices, waiting." },
          { t: "tip", x: "If the question asks for an <b>expression</b> such as \\( 2x+3y \\) rather than for \\(x\\) and \\(y\\) separately, look for a combination shortcut before solving anything. The exam sets these up deliberately; see the systems section for how to spot them." },
          { t: "warn", x: "Check against the original sentence, not against your equation. If you mistranslated, your equation will happily confirm the mistranslation — it is only the English that can catch the error." },
          { t: "eg",
            q: "Four less than three times a number is 17. What is the number?",
            choices: ["5", "6", "7", "9", "21"],
            ans: "C",
            why: "Take the sentence in pieces. \"Three times a number\" is \\(3n\\). \"Four less than\" that is \\(3n-4\\) — the 4 is taken away from the \\(3n\\), even though it is spoken first. \"Is 17\" gives \\(3n-4=17\\), so \\(3n=21\\) and \\(n=7\\). Check it against the words: three times 7 is 21, and four less is 17 ✓. Writing \\(4-3n\\) instead produces \\(n=-13/3\\), which is not on offer — a mistranslation usually announces itself that way."
          },
          { t: "eg",
            q: "A jacket costs $12 more than a shirt. Together they cost $86. What does the shirt cost?",
            choices: ["$31", "$34", "$37", "$43", "$49"],
            ans: "C",
            why: "Name the variable after what is asked: let \\(s\\) be the shirt. Then the jacket is \\(s+12\\), and the total gives \\(s + (s+12) = 86\\), so \\(2s = 74\\) and \\(s = 37\\). Check: the jacket is $49, and \\(37+49 = 86\\) ✓. Two traps sit in the choices — $43 is half of 86, from ignoring the difference, and $49 is the <b>jacket</b>, which is the right arithmetic answering the wrong question."
          }
        ]
      },
      {
        id: "ag-systems",
        title: "Systems of Equations",
        mins: 6,
        blocks: [
          { t: "p", x: "Two unknowns generally need two <b>independent</b> equations — two genuinely different pieces of information, not the same fact written twice. Which method you use is a matter of what is in front of you: <b>elimination</b> when the coefficients line up conveniently, <b>substitution</b> when one variable is already sitting alone on one side." },
          { t: "p", x: "But before either, look at what the question actually wants. On the GMAT it is very often not \\(x\\) and \\(y\\) at all, but a combination of them — and combinations are usually far cheaper to find." },
          { t: "h", x: "The symmetry shortcut" },
          { t: "p", x: "When the coefficients mirror each other across the two equations, adding them collapses everything into a single symmetric statement:" },
          { t: "formula", x: "\\begin{gathered}\\begin{aligned}3x+2y&=17\\\\ 2x+3y&=13\\end{aligned} \\\\[4pt] \\Rightarrow\\ 5x+5y=30 \\ \\Rightarrow\\ x+y=6\\end{gathered}" },
          { t: "p", x: "Subtracting the same pair gives \\( x-y=4 \\). So in two lines you have both the sum and the difference — and from those, if you really need them, \\(x=5\\) and \\(y=1\\) follow instantly. The mirrored coefficients are the signal; whenever you see them, add and subtract before doing anything else." },
          { t: "h", x: "When two equations are not enough" },
          { t: "p", x: "\"Two equations, two unknowns\" is a rule of thumb, not a guarantee. It fails whenever the second equation carries no new information:" },
          { t: "ul", items: [
            "<b>No solution</b> — proportional coefficients but a mismatched constant. \\( 2x+3y=7 \\) and \\( 4x+6y=15 \\) describe parallel lines that never meet.",
            "<b>Infinitely many</b> — one equation is a multiple of the other. \\( 2x+3y=7 \\) and \\( 4x+6y=14 \\) are the same line written twice.",
            "Three unknowns need three independent equations — <b>unless</b> the question asks only for a combination such as \\( x+y+z \\), in which case fewer can do."
          ]},
          { t: "warn", x: "In Data Sufficiency, \"two equations in two unknowns\" is <b>not</b> automatically sufficient. Check that neither is a multiple of the other, and remember that a non-linear pair such as \\( x+y=5,\\ xy=6 \\) has two valid solutions (2 and 3, or 3 and 2) — which may or may not matter depending on what was asked." },
          { t: "tip", x: "The opposite trap is just as common: <b>one</b> equation can be sufficient when only a combination is wanted. \\( 3x+3y=12 \\) settles \\( x+y=4 \\) completely, even though \\(x\\) and \\(y\\) individually remain unknown for ever." },
          { t: "eg",
            q: "If 3x + 2y = 17 and 2x + 3y = 13, what is the value of x + y?",
            choices: ["4", "5", "6", "8", "10"],
            ans: "C",
            why: "The coefficients mirror each other — 3 and 2, then 2 and 3 — so adding the equations treats \\(x\\) and \\(y\\) identically: \\(5x+5y=30\\), hence \\(x+y=6\\). One line, no substitution. Solving properly would give \\(x=5\\) and \\(y=1\\), which does sum to 6, but that is three or four times the work for the same mark, and 5 is sitting in the choices to catch anyone who stops at \\(x\\)."
          },
          { t: "eg",
            q: "If 2x + 3y = 13 and 3x + 2y = 12, what is the value of x − y?",
            choices: ["−1", "0", "1", "5", "13"],
            ans: "A",
            why: "Subtract, and mind the direction. Taking the first from the second gives \\((3x+2y)-(2x+3y) = 12-13\\), that is \\(x-y = -1\\). Doing it the other way round gives \\(y-x = 1\\), which is the trap answer (C) — the arithmetic is identical and only the order differs, so write down which equation you are subtracting from which before you start. (Adding them, for the record, gives \\(5x+5y=25\\), so \\(x+y=5\\).)"
          }
        ]
      },
      {
        id: "ag-quadratic",
        title: "Quadratic Equations",
        mins: 6,
        blocks: [
          { t: "p", x: "A quadratic is solved by factoring it into two brackets and then using the <b>zero-product rule</b>: if two things multiply to zero, at least one of them is zero. That rule only works against zero — which is why the first move, always, is to get everything onto one side so the equation reads \\( ax^{2}+bx+c=0 \\)." },
          { t: "formula", x: "x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}" },
          { t: "h", x: "Factor before you reach for the formula" },
          { t: "p", x: "To factor \\( x^{2}+bx+c \\), find two numbers whose <b>product is \\(c\\)</b> and whose <b>sum is \\(b\\)</b>. For \\( x^{2}-7x+12 \\): the pair is \\(-3\\) and \\(-4\\), giving \\( (x-3)(x-4) \\) and roots 3 and 4. Nearly every quadratic the GMAT prints factors with small integers — the formula is a fallback for when it plainly does not, not the default." },
          { t: "h", x: "Answering without solving" },
          { t: "p", x: "The roots of \\( ax^{2}+bx+c=0 \\) are tied to the coefficients directly, which means a question about their sum or product needs no factoring at all:" },
          { t: "formula", x: "r_1+r_2=-\\frac{b}{a} \\qquad r_1 r_2=\\frac{c}{a}" },
          { t: "p", x: "This is the same fact as the factoring rule above, seen from the other end: expanding \\((x-r_1)(x-r_2)\\) produces \\(x^{2}-(r_1+r_2)x+r_1r_2\\), so the middle coefficient is minus the sum and the constant is the product." },
          { t: "ul", items: [
            "The <b>discriminant</b> \\( b^{2}-4ac \\) counts the real roots: positive gives two, zero gives one, negative gives none. It is the part under the square root, so its sign decides whether that root exists.",
            "Disguised quadratics are common — \\( x^{4}-5x^{2}+4=0 \\) is an ordinary quadratic in \\( x^{2} \\), so solve for \\(x^{2}\\) first and take roots afterwards.",
            "A perfect-square trinomial signals a repeated root: \\( x^{2}-6x+9=(x-3)^{2} \\), so \\(x=3\\) twice."
          ]},
          { t: "warn", x: "Two habits lose marks here. <b>Never divide both sides by a variable</b> — from \\( x^{2}=5x \\), dividing by \\(x\\) throws away the root \\(x=0\\), because you assumed \\(x\\neq0\\) without being told so. And taking a square root opens <b>two</b> cases: \\( (x-1)^{2}=9 \\) gives \\(x-1 = 3\\) or \\(x-1=-3\\), so \\( x=4 \\) and \\( x=-2 \\)." },
          { t: "eg",
            q: "If \\(x^{2}=5x\\), which of the following gives all possible values of x?",
            choices: ["5 only", "0 only", "0 and 5", "−5 and 5", "0, 5 and −5"],
            ans: "C",
            why: "Resist dividing by \\(x\\). Move everything to one side: \\(x^{2}-5x=0\\), then factor: \\(x(x-5)=0\\). The zero-product rule now gives \\(x=0\\) or \\(x=5\\), and both check out in the original — \\(0^{2}=5(0)\\) ✓ and \\(25 = 25\\) ✓. Dividing by \\(x\\) at the start produces \\(x=5\\) alone, which is trap (A): it is not an arithmetic slip but an unstated assumption that \\(x\\) was not zero."
          },
          { t: "eg",
            q: "The two roots of \\(x^{2}-7x+k=0\\) are consecutive integers. What is the value of k?",
            choices: ["6", "10", "12", "14", "49"],
            ans: "C",
            why: "Use the coefficient relationships rather than hunting. The roots sum to \\(-b/a = 7\\), and consecutive integers can be written \\(r\\) and \\(r+1\\), so \\(2r+1 = 7\\) and \\(r = 3\\) — the roots are 3 and 4. Then \\(k\\) is their product, \\(c/a = 12\\). Check by factoring: \\(x^{2}-7x+12 = (x-3)(x-4)\\) ✓. Note that neither root was ever solved for by the quadratic formula."
          }
        ]
      },
      {
        id: "ag-inequalities",
        title: "Inequalities & Absolute Value",
        mins: 7,
        blocks: [
          { t: "p", x: "An inequality behaves exactly like an equation except in <b>one</b> respect, and every trap in the topic lives at that one point. You may add, subtract, and multiply or divide by positives, all without a second thought. But multiplying or dividing by a negative reverses the direction of the sign — because \\(2 &lt; 3\\) while \\(-2 &gt; -3\\)." },
          { t: "warn", x: "The practical consequence is severe: you must <b>never multiply or divide an inequality by a variable</b> whose sign you do not know, because you cannot know whether to flip. This is the single most common error in the topic. Move terms across instead, which is always safe." },
          { t: "ul", items: [
            "You may <b>add</b> two inequalities that point the same way. You may never <b>subtract</b> them — subtraction is multiplication by \\(-1\\) in disguise.",
            "You may multiply two inequalities together only when every quantity involved is positive.",
            "Squaring both sides is valid only when both sides are known to be non-negative — \\(-5 &lt; 2\\), but \\(25 &gt; 4\\)."
          ]},
          { t: "h", x: "Absolute value is a distance" },
          { t: "p", x: "Read \\( |x| \\) as \"how far \\(x\\) is from 0\", and \\( |x-a| \\) as \"how far \\(x\\) is from \\(a\\)\". Distance is never negative, which is the whole content of the absolute-value sign, and reading it this way answers most of these questions with no algebra at all." },
          { t: "formula", x: "\\begin{gathered}|x|&lt;k \\iff -k&lt;x&lt;k \\\\[4pt] |x|&gt;k \\iff x&lt;-k \\ \\text{ or } \\ x&gt;k\\end{gathered}" },
          { t: "p", x: "Note the shapes: \"less than\" gives a single stretch <b>between</b> two bounds, because being close to a point is one region. \"Greater than\" gives <b>two</b> separate stretches, because you can be far away on either side. So \\( |x-4|\\le3 \\) says \"\\(x\\) is within 3 of 4\" and gives \\( 1\\le x\\le7 \\) at a glance." },
          { t: "h", x: "The 0-to-1 ordering" },
          { t: "p", x: "How a number responds to powers and roots depends entirely on which side of 1 it sits, and Data Sufficiency questions are built on this. Multiplying by something smaller than 1 shrinks a number, so a fraction shrinks when you square it:" },
          { t: "formula", x: "\\begin{gathered}0&lt;x&lt;1:\\ \\ x^{3}&lt;x^{2}&lt;x&lt;\\sqrt{x} \\\\[4pt] x&gt;1:\\ \\ \\sqrt{x}&lt;x&lt;x^{2}&lt;x^{3}\\end{gathered}" },
          { t: "p", x: "The two orderings are exact reverses of each other, which is why a statement that merely says \\(x&gt;0\\) is so often insufficient — it leaves both worlds open. And negative values give a third ordering again." },
          { t: "tip", x: "When a question gives ranges and asks for the largest or smallest value of a product, test the <b>endpoints</b>, including the negative ones. The extreme very often comes from two negatives multiplying to a large positive, which is easy to miss if you only try the numbers that look big." },
          { t: "eg",
            q: "How many integer values of x satisfy \\(|x-4|\\le 3\\)?",
            choices: ["3", "4", "6", "7", "8"],
            ans: "D",
            why: "Read it as a distance: \\(x\\) is no more than 3 away from 4. That stretches from \\(4-3=1\\) up to \\(4+3=7\\), so \\(1\\le x\\le7\\). Now count inclusively — 1, 2, 3, 4, 5, 6, 7 is <b>seven</b> integers, which is \\(7-1+1\\), not \\(7-1\\). The trap answer 6 comes from that missing +1, and it is the most common slip in any counting question with two endpoints."
          },
          { t: "eg",
            q: "If \\(-3x + 7 &gt; 19\\), which of the following must be true?",
            choices: ["x &gt; −4", "x &lt; −4", "x &gt; 4", "x &lt; 4", "x &gt; −12"],
            ans: "B",
            why: "Subtract 7 from both sides — always safe — to get \\(-3x &gt; 12\\). Now divide by \\(-3\\), and because that is negative the sign must <b>flip</b>: \\(x &lt; -4\\). Check with a number: \\(x=-5\\) gives \\(-3(-5)+7 = 22\\), which is indeed greater than 19 ✓, while \\(x=0\\) gives 7, which is not. Trap (A) is the same arithmetic with the flip forgotten — and testing one number would have caught it."
          }
        ]
      },
      {
        id: "ag-minmax",
        title: "Min / Max & Must-Be-True Questions",
        mins: 8,
        blocks: [
          { t: "p", x: "Two question forms cut across every algebra topic, and the exam uses them to turn a routine problem into a hard one. \"What is the <b>greatest possible</b> value of…\" and \"which of the following <b>must be true</b>…\" do not test new mathematics. They test whether you can reason about a <i>whole range</i> of values instead of solving for one." },
          { t: "h", x: "Maximum and minimum: push everything to the edges" },
          { t: "p", x: "To make one quantity as large as it can be, make everything competing with it as small as it can be — and vice versa. That single principle handles most of these questions, and it means the first thing to write down is the <b>constraint</b> each other quantity is pushed against." },
          { t: "ul", items: [
            "Five positive integers sum to 60 and the smallest is 4. To maximise the largest, set the other four to their minimum, 4 each: \\(60 - 16 = 44\\).",
            "To maximise a product of numbers drawn from ranges, test the <b>endpoints</b> of the ranges, and remember that two negatives multiply to a positive — the largest product often comes from the two most negative endpoints.",
            "A quadratic \\(ax^{2}+bx+c\\) has its extreme value at \\(x = -\\tfrac{b}{2a}\\): a minimum if \\(a &gt; 0\\), a maximum if \\(a &lt; 0\\). Complete the square if you need the value itself.",
            "With an <b>average</b> constraint, convert it to a total first and then push the other terms to their bounds, exactly as above."
          ]},
          { t: "warn", x: "\"Greatest possible\" questions with integers hide a boundary trap. If five integers have a mean of 12 and the largest is to be as large as possible, the others can all equal the minimum — but if the question says the integers are <b>distinct</b>, they must be 4, 5, 6, 7 instead, and the answer changes. Read for \"distinct\", \"different\" and \"consecutive\"." },
          { t: "h", x: "Must be true, could be true, cannot be true" },
          { t: "p", x: "These three stems ask three different things, and the difference is how many examples it takes to settle each one:" },
          { t: "table", head: ["Stem", "A choice survives if…", "It dies if…"], rows: [
            ["must be true", "it holds for every allowed value", "you find one counterexample"],
            ["could be true", "it holds for at least one allowed value", "it fails for every value you can think of"],
            ["cannot be true", "it fails for every allowed value", "you find one value that makes it work"]
          ]},
          { t: "p", x: "So for \"must be true\" you are hunting for a <b>counterexample</b>, and the productive places to look are the awkward zones of the number line: zero, negatives, fractions between 0 and 1, and the value exactly at a boundary. A choice that survives \\(-2\\), \\(-\\tfrac12\\), \\(0\\), \\(\\tfrac12\\) and \\(2\\) is almost certainly true in general." },
          { t: "tip", x: "Roman-numeral questions are a checklist, not a puzzle. Test statement I on its own; cross out every answer choice that disagrees with your verdict; then test II; and so on. You usually need to test only two of the three statements to be left with one choice." },
          { t: "eg",
            q: "If \\(-5 \\le x \\le 2\\) and \\(-3 \\le y \\le 4\\), what is the greatest possible value of \\(xy\\)?",
            choices: ["8", "12", "15", "20", "24"],
            ans: "C",
            why: "A product over ranges is extreme at the corners, so test the four endpoint pairs: \\((-5)(-3) = 15\\), \\((-5)(4) = -20\\), \\((2)(-3) = -6\\), \\((2)(4) = 8\\). The largest is 15, from the two <b>most negative</b> endpoints. The trap is (A) 8, which is what you get by assuming the biggest product comes from the biggest positive numbers — the sign flip is the whole point of the question. (Note that 20 is the size of the <i>most negative</i> product, so \\(-20\\) would be the answer to \"least possible\".)"
          },
          { t: "eg",
            q: "If \\(a\\) and \\(b\\) are integers and \\(a &gt; b &gt; 0\\), which of the following must be true?\n\nI. \\(a^{2} &gt; b^{2}\\)   II. \\(\\dfrac{a}{b} &gt; 1\\)   III. \\(a - b \\ge 1\\)",
            choices: ["I only", "II only", "I and II only", "II and III only", "I, II and III"],
            ans: "E",
            why: "Both are positive integers with \\(a\\) larger, so try the smallest legal pair, \\(a = 2, b = 1\\), and one more, \\(a = 5, b = 3\\). I: squaring preserves order for positives, so \\(a^{2} &gt; b^{2}\\) always ✓. II: a larger positive over a smaller positive is more than 1 ✓. III: two different integers differ by at least 1 — this is where \"integers\" earns its place in the stem; without it, \\(a = 1.5, b = 1\\) would break III. All three must be true, so (E). The wrong answers are built for a reader who tests only one pair, or who forgets that the integer condition rules out fractional gaps."
          }
        ]
      },
      {
        id: "ag-functions",
        title: "Functions & Custom Symbols",
        mins: 6,
        blocks: [
          { t: "p", x: "A function is a rule with a slot in it. \\(f(x)=x^{2}-3x\\) says: take whatever is handed to you, square it, and subtract three times it. There is nothing conceptual to unpack — the entire skill is substituting carefully, and the exam's difficulty comes from what it chooses to hand you." },
          { t: "p", x: "The rule is that the <b>whole</b> argument goes into every slot, brackets and all. So \\( f(a+1)=(a+1)^{2}-3(a+1) \\), not \\(a+1^{2}-3a+1\\). Writing the brackets first and expanding second removes most of the risk." },
          { t: "h", x: "Nested functions" },
          { t: "p", x: "\\( f(g(2)) \\) means: work out \\( g(2) \\), then hand that number to \\(f\\). Always <b>inside out</b>, the way brackets are always resolved from the inside. Doing it the other way round produces a specific wrong answer, and that answer will be among the choices." },
          { t: "h", x: "Made-up symbols" },
          { t: "p", x: "When the exam defines something like \\( a \\bigtriangledown b = a^{2}-2b \\), it is not testing knowledge — the symbol has no meaning outside that sentence. It is testing whether you can follow an unfamiliar instruction accurately while the clock runs. Apply it exactly as written, and assume nothing extra:" },
          { t: "ul", items: [
            "Do <b>not</b> assume the operation is commutative. Here \\( 3\\bigtriangledown1 = 9-2 = 7 \\) while \\( 1\\bigtriangledown3 = 1-6 = -5 \\) — the order matters completely.",
            "Do not assume it is associative either. Bracket exactly as the question brackets.",
            "For a \"which must be true\" question about a defined operation, test two or three concrete number pairs. That settles it faster than trying to reason in general."
          ]},
          { t: "h", x: "The four shapes these questions take" },
          { t: "ol", items: [
            "<b>Evaluate</b> — substitute a value, or a whole expression, into the definition.",
            "<b>Solve</b> — set \\( f(x)=k \\) and work backwards. This often becomes a quadratic, so expect two answers and check whether both are allowed.",
            "<b>Compose</b> — evaluate the inner function first, then feed the result outward.",
            "<b>Restrict</b> — say which inputs are legal."
          ]},
          { t: "h", x: "Domain restrictions" },
          { t: "ul", items: [
            "A denominator can never be zero.",
            "An even root needs a non-negative quantity inside it.",
            "Both together are a favourite Data Sufficiency setup, because the restriction quietly rules out exactly the value that would otherwise have made a statement insufficient."
          ]},
          { t: "tip", x: "When a function is given by a <b>table or a graph</b>, no algebra is required at all — read the values off. A lot of time gets wasted hunting for a formula that was never there." },
          { t: "eg",
            q: "If \\(a \\bigtriangledown b = a^{2} - 2b\\), what is the value of \\(3 \\bigtriangledown (1 \\bigtriangledown 2)\\)?",
            choices: ["3", "5", "9", "15", "21"],
            ans: "D",
            why: "Inside the brackets first: \\(1 \\bigtriangledown 2\\) puts \\(a=1\\) and \\(b=2\\), giving \\(1^{2}-2(2) = -3\\). Now that \\(-3\\) becomes the second slot of the outer operation: \\(3 \\bigtriangledown (-3) = 3^{2}-2(-3) = 9+6 = 15\\). The sign is where this is lost — subtracting a negative adds — and reversing the order instead, as \\((3\\bigtriangledown1)\\bigtriangledown2\\), gives \\(7\\bigtriangledown2 = 45\\), which is why the brackets have to be respected."
          },
          { t: "eg",
            q: "If \\(f(x) = 2x - 3\\) and \\(f(g(x)) = 4x + 1\\) for all x, then \\(g(x) = \\)",
            choices: ["2x − 2", "2x + 2", "4x + 4", "2x + 4", "x + 2"],
            ans: "B",
            why: "Whatever \\(g(x)\\) is, \\(f\\) does the same thing to it that \\(f\\) does to anything: doubles it and subtracts 3. So \\(f(g(x)) = 2\\,g(x)-3\\), and we are told that equals \\(4x+1\\). Solve for the whole of \\(g(x)\\): \\(2\\,g(x) = 4x+4\\), so \\(g(x) = 2x+2\\). Check by composing forwards: \\(f(2x+2) = 2(2x+2)-3 = 4x+1\\) ✓. Trap (C) is the un-halved line, from forgetting that the 2 outside multiplies the entire inner function."
          }
        ]
      },
      {
        id: "ag-sequences",
        title: "Sequences & Series",
        mins: 7,
        blocks: [
          { t: "p", x: "A sequence is just an ordered list of numbers, and the exam only uses two kinds. In an <b>arithmetic</b> sequence you add the same amount each time (3, 7, 11, 15 …). In a <b>geometric</b> one you multiply by the same amount each time (3, 6, 12, 24 …). Everything else in this section follows from which of those you are looking at." },
          { t: "formula", x: "\\begin{gathered}\\text{AP: } a_n=a_1+(n-1)d \\\\[4pt] S_n=\\frac{n}{2}\\big(a_1+a_n\\big)\\end{gathered}" },
          { t: "p", x: "That \\((n-1)\\) is worth understanding rather than memorising: to reach the \\(n\\)th term you take \\(n-1\\) steps, because the first term is where you start, not a step you take. The sum formula is the average of the first and last term multiplied by how many terms there are — which works because an arithmetic sequence is symmetric about its middle." },
          { t: "formula", x: "\\begin{gathered}\\text{GP: } a_n=a_1 r^{\\,n-1} \\\\[4pt] S_n=a_1\\frac{r^{n}-1}{r-1}\\ \\ (r\\neq1)\\end{gathered}" },
          { t: "h", x: "Counting terms — where the marks go" },
          { t: "formula", x: "n=\\frac{\\text{last}-\\text{first}}{d}+1" },
          { t: "p", x: "The \"+1\" is the most-missed step in the whole topic, and it is the same fencepost problem as counting inclusive ranges: the integers from 1 to 10 number \\( 10-1+1=10 \\), not 9. Subtracting counts the <b>gaps</b> between terms, and there is always one more term than there are gaps." },
          { t: "h", x: "Evenly spaced sets" },
          { t: "p", x: "Arithmetic sequences have a property that makes their sums easy: because they are symmetric, the values pair up from the outside in, and every pair has the same total." },
          { t: "ul", items: [
            "The <b>mean equals the median</b>, and both equal \\( \\frac{\\text{first}+\\text{last}}{2} \\) — you do not need the middle term, only the two ends.",
            "So the sum is simply <b>average × count</b>. You never add the terms of an evenly spaced set.",
            "Worth knowing: \\( 1+2+\\dots+n=\\frac{n(n+1)}{2} \\), and the first \\(n\\) odd numbers total exactly \\( n^{2} \\)."
          ]},
          { t: "h", x: "Telling the two apart" },
          { t: "p", x: "Take the first three terms and test both. If \\( a_2-a_1=a_3-a_2 \\) it is arithmetic; if \\( a_2/a_1=a_3/a_2 \\) it is geometric. Check both before assuming — a sequence that starts 2, 4, … could continue 6, 8 or 8, 16, and only the third term tells you which." },
          { t: "h", x: "Sequences given by a formula" },
          { t: "p", x: "When the question defines \\( a_n=3n+2 \\), there is nothing to derive — substitute. Such a sequence is automatically arithmetic, and the coefficient of \\(n\\) is the common difference, here 3." },
          { t: "tip", x: "For a <b>recursive</b> definition such as \\( a_{n+1}=a_n+3 \\), or one defined through remainders, just write out five or six terms. Exam recursions nearly always settle into a short repeating cycle, and once you have the cycle length the question becomes a remainder calculation." },
          { t: "warn", x: "Read whether \\(n\\) counts from 0 or from 1, and keep \"the \\(n\\)th term\" apart from \"the term whose value is \\(n\\)\". Both distinctions have whole questions built on them." },
          { t: "eg",
            q: "How many terms are in the sequence 7, 11, 15, …, 143?",
            choices: ["33", "34", "35", "36", "37"],
            ans: "C",
            why: "The common difference is 4. From 7 up to 143 is a span of 136, which is \\(136/4 = 34\\) <b>steps</b> — and 34 steps means 35 terms, because you also count the one you started on. Formally, \\(n = \\frac{143-7}{4}+1 = 35\\). Dropping the +1 gives 34, which is the trap; sanity-check the rule on something tiny, like 7, 11, 15, where the formula gives \\((15-7)/4+1 = 3\\) ✓."
          },
          { t: "eg",
            q: "What is the sum of all the integers from 30 to 60, inclusive?",
            choices: ["1,305", "1,350", "1,395", "1,400", "1,440"],
            ans: "C",
            why: "Do not add thirty-one numbers. This is an evenly spaced set, so the average is \\((30+60)/2 = 45\\), and the count is \\(60-30+1 = 31\\). The sum is \\(45\\times31 = 1{,}395\\). Both traps live in that line: 1,350 uses a count of 30, forgetting the inclusive +1, and using the middle term without checking the count would go wrong the same way."
          }
        ]
      },
      {
        id: "ag-coordinate",
        title: "Coordinate Geometry",
        mins: 8,
        blocks: [
          { t: "note", x: "The Focus edition dropped geometry from Quant, so nothing here asks for a theorem about triangles or circles. What remains is algebra drawn on a grid — lines, points and distances — which is why this sits in the algebra guide rather than in one of its own." },
          { t: "p", x: "A coordinate question is an algebra question that happens to have a picture. The picture is the advantage: a rough sketch tells you which quadrant an answer must be in, or which way a line leans, and that alone kills most of the choices before any calculation begins." },
          { t: "h", x: "Lines" },
          { t: "p", x: "The slope is how much the line rises for each step to the right — vertical change over horizontal change. The equation \\(y=mx+b\\) then reads as a set of instructions: start at height \\(b\\), and climb \\(m\\) for every 1 you move right." },
          { t: "formula", x: "m=\\frac{y_2-y_1}{x_2-x_1} \\qquad y=mx+b" },
          { t: "ul", items: [
            "\\(b\\) is the <b>y-intercept</b> — the height where the line crosses \\( x=0 \\).",
            "For the <b>x-intercept</b>, set \\( y=0 \\), which gives \\( x=-b/m \\).",
            "<b>Parallel</b> lines have equal slopes. <b>Perpendicular</b> lines have slopes multiplying to \\( -1 \\), so each is the negative reciprocal of the other: 3 pairs with \\( -\\tfrac13 \\).",
            "A horizontal line is \\( y=c \\) with slope 0. A vertical line is \\( x=c \\) and has no slope at all — the denominator would be zero."
          ]},
          { t: "tip", x: "Sign reasoning often beats calculation. A line with y-intercept 4 and a <b>negative</b> slope has x-intercept \\( -4/m \\) with \\( m&lt;0 \\), which is necessarily <b>positive</b>. That rules out every negative answer choice before anything is drawn." },
          { t: "h", x: "Points" },
          { t: "formula", x: "\\begin{gathered}\\text{midpoint}=\\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right) \\\\[4pt] d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\end{gathered}" },
          { t: "p", x: "Neither of these needs memorising if you see what they are. The midpoint is just the average of the two x's and the average of the two y's. The distance formula is Pythagoras: the horizontal gap and the vertical gap are the two legs of a right triangle, and the distance is its hypotenuse." },
          { t: "h", x: "Quadrants" },
          { t: "table", head: ["Quadrant", "x", "y"], rows: [
            ["I", "+", "+"], ["II", "−", "+"], ["III", "−", "−"], ["IV", "+", "−"]
          ]},
          { t: "h", x: "Three tricks worth knowing" },
          { t: "ol", items: [
            "<b>Perpendicular bisector</b> — it passes through the midpoint of a segment at right angles, so \"L is the perpendicular bisector of RP\" is another way of saying P is the <b>reflection</b> of R across L, and the midpoint of RP lies on L.",
            "<b>Rotation about the origin</b> — \\( (a,b)\\to(b,-a) \\) turns a point 90° clockwise, and \\( (a,b)\\to(-b,a) \\) turns it 90° anticlockwise.",
            "<b>Absolute-value regions</b> — \\( |x|+|y|=k \\) traces a square standing on its corners, with vertices at \\( (\\pm k,0) \\) and \\( (0,\\pm k) \\). Both diagonals measure \\(2k\\), so the area is \\( \\tfrac12(2k)(2k)=2k^{2} \\)."
          ]},
          { t: "warn", x: "Sketch before you solve. These questions are built so that a rough picture — which quadrant, which way the line leans, roughly where it crosses — eliminates most of the choices in seconds, while the full algebra takes minutes." },
          { t: "eg",
            q: "A line passes through the points (2, 5) and (6, 13). What is its y-intercept?",
            choices: ["−1", "0", "1", "2", "3"],
            ans: "C",
            why: "Slope first: \\(m = \\frac{13-5}{6-2} = \\frac{8}{4} = 2\\), so the line climbs 2 for every 1 across. Now walk back from a known point to \\(x=0\\): from \\((2,5)\\) you move 2 to the left, so you drop \\(2\\times2 = 4\\), landing at \\((0,1)\\). By formula: \\(y = 2x+b\\) with \\(5 = 2(2)+b\\) gives \\(b = 1\\). Check the other point: \\(2(6)+1 = 13\\) ✓."
          },
          { t: "eg",
            q: "What is the area of the region enclosed by \\(|x| + |y| = 6\\)?",
            choices: ["24", "36", "48", "72", "144"],
            ans: "D",
            why: "Find the intercepts and the shape appears. Setting \\(y=0\\) gives \\(|x| = 6\\), so \\((6,0)\\) and \\((-6,0)\\); setting \\(x=0\\) gives \\((0,6)\\) and \\((0,-6)\\). Between those points the graph is straight, so the region is a square standing on its corners with diagonals of 12 each. A rhombus has area \\(\\tfrac12 d_1 d_2\\), so \\(\\tfrac12\\times12\\times12 = 72\\). The trap is 144, which is the area of a square whose <b>sides</b> are 12 — but 12 here is a diagonal, not a side."
          }
        ]
      }
    ]
  },

  {
    id: "quant-statsets",
    section: "quant",
    title: "Statistics, Sets & Probability",
    source: "Statistics, counting & probability concepts, with exam tricks",
    parts: [
      {
        id: "sp-mean",
        title: "Mean, Median & Mode",
        mins: 7,
        blocks: [
          { t: "p", x: "\"Average\" on the GMAT means the <b>mean</b> unless the question says otherwise, and the mean is the value every item would have if the total were shared out equally. That is the sentence to hold on to, because it says that a mean is really a statement about a <b>total</b> — and the total is what you can actually manipulate." },
          { t: "formula", x: "\\begin{gathered}\\text{mean}=\\frac{\\text{sum of terms}}{\\text{number of terms}} \\\\[4pt] \\Longrightarrow\\ \\ \\text{sum}=\\text{mean}\\times\\text{count}\\end{gathered}" },
          { t: "p", x: "That second line is the whole topic. Whenever a question hands you an average, convert it to a total before doing anything else; whenever it asks for an average, work out which total would produce it." },
          { t: "h", x: "The three measures" },
          { t: "p", x: "They answer three different questions about \"what is typical\", and the exam chooses between them deliberately — usually to see whether you noticed which one was asked for." },
          { t: "ul", items: [
            "<b>Mean</b> — the balance point. Every value pulls on it, so a single outlier drags it a long way. The mean of \\(\\{1,2,3,100\\}\\) is 26.5, which describes none of them.",
            "<b>Median</b> — the middle value <b>after sorting</b>. With \\(n\\) terms it sits at position \\( \\frac{n+1}{2} \\); with an even count, average the two middle terms. Outliers barely move it — the median of that same set is 2.5.",
            "<b>Mode</b> — the value that appears most often. A set can have no mode at all, or several."
          ]},
          { t: "warn", x: "Sort before you take a median. Reading the middle of an unsorted list is the most common careless error in the topic, and the exam always prints the numbers out of order for exactly that reason." },
          { t: "h", x: "What the comparison tells you" },
          { t: "ul", items: [
            "In an <b>evenly spaced</b> set, mean = median = \\( \\frac{\\text{first}+\\text{last}}{2} \\). That answers \"the average of the first 40 even integers\" in one line — it is \\((2+80)/2 = 41\\).",
            "Adding a value <b>equal to the current mean</b> leaves the mean unchanged, because it brings exactly its own share. Anything above pulls the mean up, anything below pulls it down.",
            "<b>Mean above median</b> usually means a tail of high values pulling the balance point rightwards; mean below median means a tail of low ones.",
            "To hit a target mean, work with the <b>deficit</b>: how far the current total is from the total you need."
          ]},
          { t: "tip", x: "In Data Sufficiency, a median question often needs only <b>positions</b>, not values. If you know where a number sits in the sorted order, you may not need to know what it is — which is why a statement that looks hopelessly vague can still be sufficient." },
          { t: "eg",
            q: "The mean of the five numbers 2, 5, 7, x and 10 is 6. What is x?",
            choices: ["4", "6", "8", "12", "5"],
            ans: "B",
            why: "Convert the average into a total immediately: five numbers averaging 6 must sum to \\(6\\times5 = 30\\). The four known values come to \\(2+5+7+10 = 24\\), so \\(x = 30-24 = 6\\). Notice that \\(x\\) turns out to equal the mean itself — which fits the rule above, since the other four already averaged 6 between them, so the fifth had to bring exactly its own share to leave the mean where it was."
          },
          { t: "eg",
            q: "For the five numbers 3, 8, 8, 11 and x, the mean is equal to the median. What is x?",
            choices: ["6", "8", "10", "12", "14"],
            ans: "C",
            why: "Handle the two measures separately and then set them equal. The four known values sum to 30, so the mean is \\((30+x)/5\\). For the median, note that 8 sits in the middle slot of the sorted list as long as \\(x\\) is at least 8 — so try that case: median 8 gives \\((30+x)/5 = 8\\), hence \\(x = 10\\), which is indeed at least 8, so the case is consistent. Check the finished set \\(\\{3,8,8,10,11\\}\\): sorted, the third value is 8 ✓, and the total is 40 over 5 terms, a mean of 8 ✓."
          }
        ]
      },
      {
        id: "sp-spread",
        title: "Range & Standard Deviation",
        mins: 7,
        blocks: [
          { t: "p", x: "Two sets can share a mean and still look nothing alike — \\(\\{49,50,51\\}\\) and \\(\\{0,50,100\\}\\) both average 50. Spread is what separates them, and the GMAT measures it two ways." },
          { t: "p", x: "<b>Range</b> is simply largest minus smallest, so it notices only the two extremes. <b>Standard deviation</b> measures how far the values sit from their mean on average, so it notices everything. You are essentially never asked to compute a standard deviation — only to <b>compare</b> two of them — so learn how it behaves rather than the formula." },
          { t: "h", x: "How the measures respond to changes" },
          { t: "table", head: ["Change to every term", "Mean", "Range", "SD"], rows: [
            ["add a constant c", "+ c", "unchanged", "unchanged"],
            ["multiply by k", "× k", "× |k|", "× |k|"]
          ]},
          { t: "p", x: "The first row is the one the exam tests. <b>Shifting a whole set leaves its spread untouched</b>, because every value and the mean move together, so the distances between them are exactly what they were. \\( \\{2,4,6,8\\} \\) and \\( \\{12,14,16,18\\} \\) have identical standard deviations. Only <b>stretching</b> — multiplying — changes the spread." },
          { t: "h", x: "Facts the exam tests" },
          { t: "ul", items: [
            "SD is never negative, and \\( \\text{SD}=0 \\) exactly when every term is the same — there is no distance from the mean to average.",
            "Adding a term <b>equal to the mean</b> pulls the SD down, because it contributes a distance of zero to the average distance. Adding an extreme value pushes it up.",
            "Tighter clustering means a smaller SD. You can usually rank two sets by eye: glance at how far the values sit from each mean.",
            "Range ignores everything between the extremes, so two sets can share a range and have very different SDs."
          ]},
          { t: "warn", x: "A larger range does not guarantee a larger standard deviation. \\( \\{0,50,50,50,100\\} \\) and \\( \\{0,0,50,100,100\\} \\) have the same range of 100 and the same mean of 50, but the second is far more spread out — most of its values sit at the extremes, while most of the first set's sit at the centre." },
          { t: "eg",
            q: "Set A = {2, 4, 6, 8} and Set B = {12, 14, 16, 18}. Which statement is true?",
            choices: ["A has the greater standard deviation", "B has the greater standard deviation", "The standard deviations are equal", "B's standard deviation is 10 more than A's", "Not enough information"],
            ans: "C",
            why: "Every term of B is exactly 10 more than the matching term of A, so B is A shifted bodily up the number line. The mean shifts with it — 5 becomes 15 — which means every value sits the same distance from its own mean as before: \\(-3, -1, +1, +3\\) in both sets. Identical distances give identical spread, so the standard deviations are equal. Choice (D) is the specific trap for treating spread as though it travelled with the values."
          },
          { t: "eg",
            q: "Which of the following sets has the smallest standard deviation?",
            choices: ["{1, 2, 3, 4, 5}", "{3, 3, 3, 3, 3}", "{1, 3, 3, 3, 5}", "{0, 3, 3, 3, 6}", "{2, 3, 3, 3, 4}"],
            ans: "B",
            why: "No calculation is needed — just look for the least variation. Set (B) has every value identical, so every distance from the mean is zero and the standard deviation is exactly 0, the smallest it can ever be. All five sets have a mean of 3, so they can be ranked purely by how far their members stray from it: (B) not at all, then (E) by 1 on two terms, then (C) by 2, then (A), then (D) by 3. Notice that (A) has a smaller <i>range</i> than (D) and a smaller SD too — but the range alone would not have settled the comparison between (A) and (C)."
          }
        ]
      },
      {
        id: "sp-weighted",
        title: "Weighted Averages",
        mins: 8,
        blocks: [
          { t: "p", x: "A weighted average is what you need whenever the groups being combined are not the same size. Averaging two class averages treats a class of 10 and a class of 30 as equally important, which they are not — the larger class contributes three times as many scores, so it should pull the result three times as hard." },
          { t: "p", x: "The fix is to go back to totals. Add up all the points, divide by all the people:" },
          { t: "formula", x: "\\bar{x}=\\frac{n_1\\bar{x}_1+n_2\\bar{x}_2}{n_1+n_2}" },
          { t: "h", x: "The sanity check that is often the answer" },
          { t: "p", x: "The combined average always lands <b>between</b> the two group averages, and <b>closer to the larger group</b>. On a five-choice question that frequently eliminates four options before any arithmetic — anything outside the two averages is impossible, and anything on the wrong side of the midpoint is wrong too." },
          { t: "h", x: "Running it backwards" },
          { t: "p", x: "The more interesting version gives you the blend and asks for the mix. Picture the two values on a see-saw with the combined average as the balance point: the weights are inversely proportional to the distances, so the group further from the mean must be the smaller one." },
          { t: "formula", x: "\\frac{n_1}{n_2}=\\frac{\\bar{x}_2-\\bar{x}}{\\bar{x}-\\bar{x}_1}" },
          { t: "p", x: "Note the cross: \\(n_1\\) pairs with the distance measured on <b>group 2's</b> side. This is exactly the alligation rule from the mixtures section — the same idea wearing different clothes. Any question that blends two concentrations, two prices, two speeds or two test averages is this formula." },
          { t: "h", x: "More than two groups" },
          { t: "p", x: "Combine them <b>two at a time</b>. Blend the first pair into a single group with its own count and average, then blend that result with the third. The arithmetic stays small and the between-the-two sanity check still applies at every step." },
          { t: "tip", x: "Only the <b>ratio</b> of the weights matters, never the actual counts. Ten and thirty give exactly the same answer as one and three, so replace awkward numbers with their simplest ratio before you start." },
          { t: "tip", x: "Percentages weight like anything else. A 10% rise on a large base and a 30% rise on a small base do not average to 20% — the result sits much nearer 10%." },
          { t: "warn", x: "Average <b>speed</b> is a weighted average over <i>time</i>, not distance, which is why it is never the plain average of two speeds unless the two times happen to be equal. Use total distance ÷ total time; for equal distances at speeds \\(a\\) and \\(b\\) that works out to \\( \\frac{2ab}{a+b} \\)." },
          { t: "warn", x: "A weighted average can never fall outside the range of the values being averaged. If your answer is below the smallest or above the largest, you have weighted something backwards — worth checking before you even look at the choices." },
          { t: "eg",
            q: "A class of 10 students averages 70 on a test; a second class of 30 students averages 90. What is the combined average?",
            choices: ["75", "80", "82.5", "85", "87"],
            ans: "D",
            why: "Totals first: \\(10(70) = 700\\) points and \\(30(90) = 2{,}700\\) points, so 3,400 points shared among 40 students, giving 85. The see-saw check confirms it before the arithmetic: there are three times as many students in the 90 class, so the answer must sit three times closer to 90 than to 70 — that is 85, one quarter of the way up from 70. The trap is (B) 80, the plain average of 70 and 90, which quietly assumes the classes are the same size."
          },
          { t: "eg",
            q: "A jar of 20% acid is mixed with a jar of 60% acid to produce 20 litres of 35% acid. How many litres of the 20% solution are used?",
            choices: ["7.5", "10", "12.5", "15", "16"],
            ans: "C",
            why: "Run the average backwards. The target 35 is 15 above the weak solution and 25 below the strong one. Weights are inversely proportional to those distances, so the ratio of weak to strong is 25 : 15, which reduces to 5 : 3. That splits 20 litres into 8 parts of 2.5 litres each, giving \\(5\\times2.5 = 12.5\\) litres of the 20% solution. Check it: \\(12.5(0.20)+7.5(0.60) = 2.5+4.5 = 7\\) litres of acid, and \\(7/20 = 35\\%\\) ✓. The answer is more than half the mixture, which fits — 35 is nearer 20 than 60."
          }
        ]
      },
      {
        id: "sp-sets",
        title: "Overlapping Sets (Venn)",
        mins: 7,
        blocks: [
          { t: "p", x: "Overlapping-set questions are counting questions where some things get counted twice. A survey finds 70 people who like tea and 80 who like coffee — but if some like both, adding 70 and 80 counts those people once as tea drinkers and again as coffee drinkers. Everything in this topic is bookkeeping to undo that double count." },
          { t: "formula", x: "|A\\cup B| = |A| + |B| - |A\\cap B|" },
          { t: "p", x: "Read it as: add the two groups, then subtract the overlap once, because it was included twice. And since a survey usually contains people in neither group, the full picture is:" },
          { t: "formula", x: "\\text{Total} = \\underbrace{|A|+|B|-|A\\cap B|}_{\\text{at least one}} + \\text{neither}" },
          { t: "h", x: "The double matrix" },
          { t: "p", x: "When there are two yes/no criteria — male/female against employed/unemployed, say — draw a 2×2 grid with row and column totals rather than a Venn diagram. Fill in whatever the question gives you, and then let the totals do the rest: any row or column with one blank can be completed by subtraction, and completing one usually unlocks the next. This is faster and far less error-prone than reasoning about regions." },
          { t: "h", x: "Three sets" },
          { t: "formula", x: "\\begin{gathered}|A\\cup B\\cup C| = |A|+|B|+|C| \\\\[4pt] -\\ |A\\cap B| - |A\\cap C| - |B\\cap C| \\\\[4pt] +\\ |A\\cap B\\cap C|\\end{gathered}" },
          { t: "p", x: "The last line looks odd but follows the same logic: someone in all three sets was added three times, then subtracted three times by the pair terms, leaving them at zero — so they have to be added back once." },
          { t: "warn", x: "Read the wording exactly. <b>\"Exactly one\"</b>, <b>\"at least one\"</b> and <b>\"exactly two\"</b> are three different counts, and the formula above gives \"at least one\". Working from the centre outwards — fill the triple overlap first, then the pairs, then the singles — keeps them straight, because each region then holds only the people who belong to it and nothing more." },
          { t: "h", x: "Maximum and minimum overlap" },
          { t: "ul", items: [
            "<b>Maximum</b> overlap is the size of the smaller set — at best it sits entirely inside the larger one.",
            "<b>Minimum</b> overlap is \\( |A|+|B|-\\text{Total} \\), or 0 if that comes out negative. It measures how much the two groups are forced to collide because there is not enough room for them to be separate."
          ]},
          { t: "eg",
            q: "Of 100 people surveyed, 70 like tea and 80 like coffee. What is the smallest possible number who like both?",
            choices: ["0", "10", "30", "50", "70"],
            ans: "D",
            why: "To minimise the overlap, spread people out as much as the numbers allow. There are \\(70+80 = 150\\) preferences to distribute among only 100 people, so at least \\(150-100 = 50\\) people must be holding two of them — they have nowhere else to go. Any smaller overlap would need more than 100 people. The zero option is a reasonable instinct but impossible here; it would only be available if the two groups summed to 100 or less."
          },
          { t: "eg",
            q: "In a group of 60 students, 35 study French, 30 study German, and 12 study both. How many study neither?",
            choices: ["5", "7", "12", "17", "25"],
            ans: "B",
            why: "Find \"at least one\" first, then subtract from the total. Adding 35 and 30 gives 65, which is already more than the whole group — the 12 who study both have been counted twice, so remove them once: \\(35+30-12 = 53\\) study at least one language. The rest study neither: \\(60-53 = 7\\). As a check, the regions should add to 60: 23 study French only, 18 German only, 12 both and 7 neither, which is \\(23+18+12+7 = 60\\) ✓."
          }
        ]
      },
      {
        id: "sp-ages",
        title: "Age & Number Problems",
        mins: 7,
        blocks: [
          { t: "p", x: "Age problems are linear equations with a time axis bolted on, and they are worth practising because they train the translation skill the whole word-problem section depends on. Set the <b>present</b> ages as your variables and everything else follows mechanically: \\(x\\) years ago is \\( \\text{age}-x \\), and \\(x\\) years from now is \\( \\text{age}+x \\)." },
          { t: "h", x: "The gap never changes" },
          { t: "p", x: "This is the fact that makes these questions tractable. The <b>difference</b> between two people's ages is constant for life — both people age at the same rate. If a father is 30 years older than his son today, he was 30 years older a decade ago and will be 30 years older a decade from now." },
          { t: "p", x: "Ratios, by contrast, change constantly. A father twice his son's age this year will not be twice his son's age next year. So when a question mixes a ratio with a time shift, build the equation on the gap, which stays put, and let the ratio be the thing that moves." },
          { t: "tip", x: "When ages are given as a ratio, write them as multiples of the same unit — \\( 3k \\) and \\( 5k \\) — and then apply the time shift to each. That keeps one unknown instead of two, and the resulting single equation in \\(k\\) finishes the job." },
          { t: "warn", x: "Watch the tense. \"In 5 years he will be three times as old as his son is <b>now</b>\" is a different equation from \"…as his son <b>will be</b>\". In the first, only the father's side gets the +5; in the second, both do. Misreading which side moves is the standard error, and both readings are represented in the answer choices." },
          { t: "h", x: "Digit problems" },
          { t: "p", x: "These sit alongside age problems because they are the same skill — turning a sentence about numbers into algebra. A two-digit number with tens digit \\(t\\) and units digit \\(u\\) is \\( 10t+u \\), because the tens digit is worth ten of itself. Reversing the digits gives \\( 10u+t \\), and two consequences do most of the work:" },
          { t: "formula", x: "\\begin{gathered}(10t+u)-(10u+t)=9(t-u) \\\\[4pt] (10t+u)+(10u+t)=11(t+u)\\end{gathered}" },
          { t: "ul", items: [
            "The difference between a two-digit number and its reversal is always a multiple of <b>9</b>; their sum is always a multiple of <b>11</b>. Either fact can eliminate most of an answer list instantly.",
            "Digits are integers from 0 to 9, and a leading digit cannot be 0. Those constraints usually pin the answer down once one equation is in place."
          ]},
          { t: "eg",
            q: "A father is 30 years older than his son. In 5 years he will be three times as old as his son. How old is the son now?",
            choices: ["5", "8", "10", "12", "15"],
            ans: "C",
            why: "Use the gap. Let the son be \\(s\\) now, so the father is \\(s+30\\) — one unknown, because the difference is fixed. In five years both are five years older: the son is \\(s+5\\) and the father is \\(s+35\\). The condition says the father is then triple the son: \\(s+35 = 3(s+5)\\), so \\(s+35 = 3s+15\\), giving \\(2s = 20\\) and \\(s = 10\\). Check against the words: today they are 10 and 40; in five years 15 and 45, and \\(45 = 3\\times15\\) ✓."
          },
          { t: "eg",
            q: "The ratio of Anna's age to Ben's is 3 : 5. In 4 years the ratio will be 2 : 3. How old is Ben now?",
            choices: ["12", "15", "18", "20", "24"],
            ans: "D",
            why: "Give the ratio a multiplier so there is only one unknown: Anna is \\(3k\\) and Ben is \\(5k\\). In four years they are \\(3k+4\\) and \\(5k+4\\), and the new ratio gives \\(\\frac{3k+4}{5k+4} = \\frac{2}{3}\\). Cross-multiply: \\(9k+12 = 10k+8\\), so \\(k = 4\\). Ben is \\(5k = 20\\). Check: today 12 and 20, which is 3 : 5 ✓; in four years 16 and 24, which is 2 : 3 ✓. The trap is 12 — the correct arithmetic reported for the wrong person."
          }
        ]
      },
      {
        id: "sp-counting",
        title: "Permutations & Combinations",
        mins: 7,
        blocks: [
          { t: "p", x: "Counting questions ask how many ways something can happen, and they are answered by breaking the process into <b>decisions</b>. The whole subject rests on one principle: if one stage can happen in \\(m\\) ways and the next in \\(n\\) ways, the two together happen in \\( m\\times n \\) ways — because every one of the \\(m\\) starts can be followed by any of the \\(n\\) continuations." },
          { t: "p", x: "In practice: draw a slot for each decision, write the number of options in each slot, and multiply. A four-digit PIN with no repeats allowed is \\(10\\times9\\times8\\times7\\), because each choice removes one option from the next. That method alone solves most counting questions, without any formula." },
          { t: "h", x: "Does order matter?" },
          { t: "p", x: "When you are choosing a group rather than filling ordered slots, the plain multiplication overcounts — it treats the same group picked in a different sequence as a different outcome. That is the one distinction you have to get right." },
          { t: "formula", x: "^nP_r=\\frac{n!}{(n-r)!} \\qquad ^nC_r=\\frac{n!}{r!\\,(n-r)!}" },
          { t: "ul", items: [
            "<b>Order matters</b> — rankings, seat arrangements, president-and-treasurer, a race finish. Use a permutation.",
            "<b>Order does not matter</b> — committees, teams, handshakes, choosing pizza toppings. Use a combination.",
            "The two differ by exactly the \\( r! \\) ways of arranging the chosen group, which is why \\( ^nC_r = {}^nP_r / r! \\). Picking Ann, Bob and Cy is one committee but six different orderings."
          ]},
          { t: "tip", x: "\\( ^nC_r = {}^nC_{n-r} \\) turns an ugly calculation into an easy one, because choosing which 10 to include is the same as choosing which 2 to leave out: \\( ^{12}C_{10} \\) is just \\( ^{12}C_{2}=66 \\)." },
          { t: "h", x: "The standard set-ups" },
          { t: "ul", items: [
            "<b>Repeated items</b> in an arrangement — divide by the factorial of each repeat count, since swapping two identical letters changes nothing. LEVEL arranges in \\( \\frac{5!}{2!\\,2!}=30 \\) ways, not 120.",
            "<b>Circular</b> seating of \\(n\\) people — \\( (n-1)! \\), because rotating everyone one seat round produces the same arrangement. Fix one person and arrange the rest.",
            "<b>Must be together</b> — glue them into a single block, arrange the blocks, then multiply by the arrangements <i>inside</i> the block.",
            "<b>Must not be together</b> — count everything, then subtract the together cases. Counting the complement is almost always easier than counting the restriction directly.",
            "<b>Repeats allowed</b>, as in a PIN or a licence plate — \\( k^{n} \\), not a permutation, since nothing is used up."
          ]},
          { t: "warn", x: "Decide \"does order matter?\" <b>before</b> you write anything down. Handshakes between 10 people are \\( ^{10}C_2=45 \\), because a handshake between A and B is the same event as one between B and A. Counting them as permutations gives 90 — exactly the wrong answer the exam prints." },
          { t: "eg",
            q: "In how many ways can 5 people be seated in a row if two particular people must sit next to each other?",
            choices: ["24", "48", "60", "96", "120"],
            ans: "B",
            why: "Handle the restriction by making it structural. Glue the two people together into a single block; now you are arranging 4 objects — the block plus the other three people — which can be done in \\(4! = 24\\) ways. But the two inside the block can also swap places, in \\(2! = 2\\) ways, and both count as valid seatings. So the total is \\(24\\times2 = 48\\). Sanity check: it should be less than the unrestricted \\(5! = 120\\), and in fact it is exactly \\(2/5\\) of it."
          },
          { t: "eg",
            q: "A committee of 3 is to be chosen from 4 men and 5 women. How many committees contain exactly 2 women?",
            choices: ["20", "30", "40", "60", "84"],
            ans: "C",
            why: "A committee has no order, so this is combinations, and the two requirements are independent choices to be multiplied. Choose 2 women from 5: \\(^{5}C_{2} = \\frac{5\\times4}{2} = 10\\). Choose the remaining 1 member from the 4 men: \\(^{4}C_{1} = 4\\). Every pair of women can go with any of the men, so the count is \\(10\\times4 = 40\\). The trap is 60, from using permutations for the women — but a committee of Ann and Beth is the same committee as Beth and Ann."
          }
        ]
      },
      {
        id: "sp-probability",
        title: "Probability",
        mins: 7,
        blocks: [
          { t: "p", x: "A probability is a count divided by a count: how many outcomes are the ones you want, over how many outcomes there are altogether. That means everything in the counting section still applies here — probability is that machinery with a denominator attached." },
          { t: "formula", x: "\\begin{gathered}P=\\frac{\\text{favourable outcomes}}{\\text{total outcomes}} \\\\[4pt] 0\\le P\\le 1\\end{gathered}" },
          { t: "p", x: "The bounds are a free error-check. A probability below 0 or above 1 is impossible, so if you compute one you have miscounted — usually by double-counting the numerator, or by using a denominator that shrank when it should not have." },
          { t: "h", x: "Combining events" },
          { t: "ul", items: [
            "<b>AND → multiply.</b> \\( P(A \\text{ and } B)=P(A)\\times P(B) \\) when the events are independent. Each condition narrows the field further, so the probability gets smaller.",
            "<b>OR → add, then remove the double-count.</b> \\( P(A\\text{ or }B)=P(A)+P(B)-P(A\\text{ and }B) \\). The subtraction disappears only when the two events cannot both happen.",
            "Notice the second one is the overlapping-sets formula again, rescaled so the total is 1 instead of a headcount. It is the same bookkeeping problem."
          ]},
          { t: "h", x: "The complement trick" },
          { t: "formula", x: "P(\\text{at least one}) = 1 - P(\\text{none})" },
          { t: "p", x: "Whenever you see the words <b>\"at least one\"</b>, compute the opposite instead. \"At least one\" covers exactly one, exactly two, exactly three and so on — several separate cases to add up — whereas \"none\" is a single case. The complement turns a long sum into one short calculation, and it is the most valuable habit in the topic." },
          { t: "h", x: "With and without replacement" },
          { t: "p", x: "If the item is put back, nothing changes between draws and the probabilities stay the same. If it is <b>not</b> replaced, both the numerator and the denominator shrink on the next draw — drawing two aces from a deck is \\( \\frac{4}{52}\\times\\frac{3}{51} \\), with one fewer ace on top and one fewer card underneath." },
          { t: "warn", x: "Independence is an assumption, not a default. Draws without replacement are dependent, and so is anything where one outcome physically restricts the next. Multiplying probabilities that are not independent is the standard mistake here." },
          { t: "tip", x: "For draws where order is irrelevant you may either count with combinations on top and bottom, or multiply sequential probabilities and then multiply by the number of orders. Both are correct — pick whichever keeps the numbers small." },
          { t: "eg",
            q: "A bag holds 3 red and 5 blue marbles. Two are drawn at random without replacement. What is the probability that at least one is red?",
            choices: ["\\(\\dfrac{3}{14}\\)", "\\(\\dfrac{5}{14}\\)", "\\(\\dfrac{3}{8}\\)", "\\(\\dfrac{9}{14}\\)", "\\(\\dfrac{11}{14}\\)"],
            ans: "D",
            why: "\"At least one\" is the cue to flip to the complement. The opposite of at least one red is <b>no reds at all</b>, which is a single case: the first draw is blue with probability \\(5/8\\), and then only 4 blues remain among 7 marbles, so the second is \\(4/7\\). That gives \\(\\frac{5}{8}\\times\\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}\\), and the answer is \\(1-\\frac{5}{14} = \\frac{9}{14}\\). Doing it directly would mean adding the exactly-one and exactly-two cases — three times the work for the same number."
          },
          { t: "eg",
            q: "Two fair six-sided dice are rolled. What is the probability that the sum is 7?",
            choices: ["\\(\\dfrac{1}{12}\\)", "\\(\\dfrac{1}{9}\\)", "\\(\\dfrac{1}{6}\\)", "\\(\\dfrac{5}{36}\\)", "\\(\\dfrac{7}{36}\\)"],
            ans: "C",
            why: "Count both parts. Two dice give \\(6\\times6 = 36\\) equally likely outcomes, since each die is independent of the other. The sums of 7 come from (1,6), (2,5), (3,4), (4,3), (5,2) and (6,1) — six of them, and the pairs must be counted separately because a 2 on the first die with a 5 on the second is a different roll from the reverse. So the probability is \\(6/36 = 1/6\\). Treating the pairs as unordered gives only 3 favourable outcomes and the trap answer \\(\\tfrac{1}{12}\\); 7 is in fact the most likely sum on two dice."
          }
        ]
      }
    ]
  },

  {
    id: "data-insights",
    section: "data",
    title: "Data Insights",
    source: "Adapted from your course material",
    parts: [
      {
        id: "di-overview",
        title: "What Data Insights is",
        mins: 4,
        blocks: [
          { t: "p", x: "Data Insights is the section the Focus Edition created: the old Integrated Reasoning question types plus <b>Data Sufficiency</b>, which moved here from Quant. It is <b>20 questions in 45 minutes</b>, across five formats. GMAC publishes the mix as ranges rather than fixed counts:" },
          { t: "table", head: ["Type", "Share of the section", "In 20 questions"], rows: [
            ["Data Sufficiency", "20–40%", "4–8"],
            ["Graphics Interpretation", "20–30%", "4–6"],
            ["Multi-Source Reasoning", "10–20%", "2–4"],
            ["Table Analysis", "10–20%", "2–4"],
            ["Two-Part Analysis", "10–20%", "2–4"]
          ]},
          { t: "p", x: "Roughly half are math-flavoured and half verbal-flavoured — but the <b>real skill being tested is reading</b>: pulling the few relevant facts out of a jungle of information, fast." },
          { t: "ul", items: [
            "It is <b>~75% reading &amp; reasoning, ~25% (very basic) math</b> — mostly percentages and mean/median. Even the \"math\" questions are won on reading.",
            "A question can have <b>up to 3 sub-parts</b>, and you must get <b>all</b> of them right for any credit — there is <b>no partial credit</b>.",
            "This is the only section with an <b>on-screen calculator</b>. Tables are sortable by column, Graphics questions are completed from drop-down menus, and Multi-Source questions sit on two or three tabbed sources.",
            "<b>MSR wastes the most time</b> — a common plan is to bookmark the Multi-Source questions and handle them last."
          ]},
          { t: "tip", x: "The fastest way to level up DI is to read a lot of dense LSAT-style RC/CR in long sittings — it trains the fast reading-and-analysing the section rewards." },
          { t: "h", x: "How it is scored" },
          { t: "p", x: "Data Insights is scored on the same 60–90 scale as Quant and Verbal and counts <b>equally</b> toward the 205–805 total. It is not a side section, and for most people it is the cheapest place to gain points because so few candidates prepare for it properly." },
          { t: "warn", x: "Multi-part questions are <b>all or nothing</b>. Two dropdowns right and one wrong scores exactly the same as three wrong, so the last check before you submit is worth more here than anywhere else on the exam." },
          { t: "h", x: "A workable order" },
          { t: "ol", items: [
            "Answer Data Sufficiency and Two-Part as you meet them — they are self-contained and quick.",
            "Take Graphics and Table questions next, but bail early if the chart is unusually dense.",
            "Bookmark the Multi-Source sets and come back with whatever time is left."
          ]},
          { t: "tip", x: "The on-screen calculator is slower than it looks. Use it for genuinely ugly arithmetic only — estimating in your head beats typing for almost everything the section actually asks." }
        ]
      },
      {
        id: "di-ds-rules",
        title: "Data Sufficiency — the rules",
        mins: 5,
        blocks: [
          { t: "p", x: "You're given a question and two statements, (1) and (2). You <b>don't solve</b> — you decide whether the data is <b>enough</b> to answer. The five choices never change:" },
          { t: "table", head: ["Choice", "Meaning"], rows: [
            ["A", "(1) alone sufficient, (2) alone not"],
            ["B", "(2) alone sufficient, (1) alone not"],
            ["C", "Both together sufficient, neither alone"],
            ["D", "Each alone is sufficient"],
            ["E", "Together still not sufficient"]
          ] },
          { t: "p", x: "A quick way to hold this in your head: decide if (1) alone works, then if (2) alone works — <b>A, B or D</b> follows if either/both work alone; otherwise combine them for <b>C or E</b>." },
          { t: "h", x: "Two question types" },
          { t: "ul", items: [
            "<b>“WHAT” (value)</b> — sufficient only if the data gives <b>exactly one</b> value. A range (y &gt; 5) or a variable answer (y = a) is <b>not</b> sufficient.",
            "<b>“IS / DOES” (yes-no)</b> — sufficient only for a <b>definite YES</b> or a <b>definite NO</b>. A confirmed NO is just as good as a YES; “sometimes yes, sometimes no” is insufficient."
          ] },
          { t: "eg",
            q: "If m and n are integers, what is the value of m + n?  (1) \\((x+m)(x+n) = x^{2} + 5x + mn\\), and x ≠ 0.   (2) mn = 4",
            choices: [
              "(1) alone sufficient, (2) alone not",
              "(2) alone sufficient, (1) alone not",
              "Both together, neither alone",
              "Each alone is sufficient",
              "Together still not sufficient"
            ],
            ans: "A",
            why: "(1): expanding gives \\(x^{2}+(m+n)x+mn = x^{2}+5x+mn\\), so (m+n)x = 5x, and since x ≠ 0, m+n = 5 — a unique value, sufficient. (2): mn = 4 allows 1·4, 2·2, −1·−4… so m+n could be 5, 4, −5… not unique, insufficient."
          },
          { t: "h", x: "The AD / BCE split" },
          { t: "p", x: "Test statement (1) on its own <b>first</b>, and the five choices immediately halve:" },
          { t: "table", head: ["Is (1) alone sufficient?", "Then the answer is", "Next test"], rows: [
            ["Yes", "A or D", "is (2) alone sufficient? Yes → D, No → A"],
            ["No", "B, C or E", "is (2) alone sufficient? Yes → B; No → combine, C or E"]
          ] },
          { t: "tip", x: "Write <b>AD / BCE</b> on your noteboard at the start of every DS question and cross off as you go. It stops the commonest DS error, which is not getting the logic wrong but losing track of which branch you are on." },
          { t: "warn", x: "Sufficiency is not about whether <b>you</b> can solve it. A statement is sufficient when the answer is <b>uniquely determined</b>, whether or not you do the work — and insufficient when two different answers survive, however hard you worked." }
        ]
      },
      {
        id: "di-ds-traps",
        title: "Data Sufficiency — traps",
        mins: 5,
        blocks: [
          { t: "p", x: "Every hard DS question hides a trap. The habits below defuse most of them:" },
          { t: "ul", items: [
            "<b>Simplify the question first.</b> Boil the stem down before touching the statements (e.g. “Is (a−1)/(a+1) = m/m?” often reduces to “Is a + b = 0?”).",
            "<b>Assume nothing.</b> If a number isn't stated to be an integer, it might be a decimal — “Is a &gt; 5?” with “a &lt; 6” fails because a could be 5.5.",
            "<b>Statements are independent.</b> When judging (2), don't carry over (1). And the two statements <b>never contradict</b> each other.",
            "<b>Try to break it.</b> On yes/no questions, deliberately build both a YES case and a NO case. If you can, it's insufficient.",
            "<b>Watch signs when dividing.</b> “ca &gt; cb” does <b>not</b> give a &gt; b unless you know the sign of c.",
            "<b>Don't calculate</b> more than sufficiency needs."
          ] },
          { t: "warn", x: "The <b>C-trap</b>: the question dangles two statements that <i>look</i> like they're only useful together, tempting you to pick C — when one alone already works (or neither does). Any time C feels obvious, re-check each statement alone and re-read exactly what's asked." },
          { t: "eg",
            q: "If x and y are consecutive odd integers, what is the sum of x and y?  (1) The product of x and y is negative.   (2) One of the integers is −1.",
            choices: [
              "(1) alone sufficient, (2) alone not",
              "(2) alone sufficient, (1) alone not",
              "Both together, neither alone",
              "Each alone is sufficient",
              "Together still not sufficient"
            ],
            ans: "A",
            why: "(1): two consecutive odd integers with a negative product must be −1 and +1 (the only way one is negative and one positive while consecutive) → sum = 0, sufficient. (2): −1 pairs with either +1 or −3 → sum 0 or −4, not unique. Reaching for C here is the trap; (1) alone nails it."
          },
          { t: "h", x: "The numbers to test" },
          { t: "p", x: "When you are hunting for a counterexample, run through a fixed set rather than picking at random. Almost every DS trap is broken by one of these seven:" },
          { t: "formula", x: "\\begin{gathered}0, \\quad 1, \\quad -1, \\quad \\text{a large positive} \\\\[4pt] \\text{a large negative}, \\quad \\tfrac12, \\quad -\\tfrac12\\end{gathered}" },
          { t: "p", x: "Zero and the fractions break most “must be true” statements; the negatives break inequalities and even powers; 1 breaks anything involving multiplication or exponents." },
          { t: "h", x: "Words that are doing work" },
          { t: "ul", items: [
            "<b>Integer</b> versus <b>number</b> — if it does not say integer, fractions are in play.",
            "<b>Positive</b> versus <b>non-negative</b> — the second one includes zero.",
            "<b>Distinct</b> — without it, two variables may be equal.",
            "<b>Consecutive</b> — fixes the gap at 1, which is often the whole answer."
          ] },
          { t: "warn", x: "To prove a yes/no statement <b>insufficient</b> you need one case giving YES and one giving NO. A single case proves nothing either way — finding one YES does not make a statement sufficient." }
        ]
      },
      {
        id: "di-twopart",
        title: "Two-Part Analysis",
        mins: 3,
        blocks: [
          { t: "p", x: "You make <b>two selections</b> — one in each column of a table — to answer a question that has two linked parts. They can be math-based (pick two expressions/values) or verbal-based (e.g. pick the fact that most <b>strengthens</b> and the one that most <b>weakens</b> an argument)." },
          { t: "ul", items: [
            "Read what each <b>column</b> asks for before you evaluate options — the two columns often demand opposite things.",
            "Verbal two-parts are really CR in a grid — assumption, strengthen/weaken, inference logic all apply.",
            "Math two-parts are usually a single setup feeding two answers; solve the relationship once, then read off both."
          ] },
          { t: "tip", x: "Both columns are marked as <b>one answer</b> — get either wrong and the question scores zero. So spend the time on the harder column and sanity-check the easier one, rather than splitting attention evenly." },
          { t: "warn", x: "Check whether the same row may be chosen in <b>both</b> columns. Some questions allow it and some rule it out, and assuming the wrong one quietly removes the correct pairing from consideration." },
          { t: "p", x: "For <b>trade-off and optimisation</b> two-parts — maximise one thing subject to a limit on another — test the <b>extremes</b> of the allowed range first. The optimum almost always sits at a boundary, so you rarely need to check the middle." },
          { t: "h", x: "A worked shape" },
          { t: "p", x: "A company spends exactly $4,000 on x machines at $400 and y machines at $600. Select a possible value of x in one column and y in the other." },
          { t: "p", x: "Set it up and <b>reduce before testing</b>: \\( 400x+600y=4000 \\) becomes \\( 2x+3y=20 \\). Now \\( 3y \\) must be even, so y is even, and only \\( y=0,2,4,6 \\) can work — giving \\( x=10,7,4,1 \\). One line of parity has cut a table of twenty options down to four pairs." },
          { t: "tip", x: "That is the standard quantitative two-part: one equation in two unknowns, plus an integer constraint. Reduce the equation, then use parity or divisibility to shortlist — never test the rows one by one." }
        ]
      },
      {
        id: "di-graphs",
        title: "Graphics Interpretation",
        mins: 3,
        blocks: [
          { t: "p", x: "You read a chart (line, bar, scatter, etc.) and complete sentences by choosing from <b>drop-down menus</b> so each statement is accurate." },
          { t: "ul", items: [
            "Nail the <b>axes and units</b> first — many traps hinge on <b>percent vs. absolute number</b> (a rising percentage needn't mean a rising count).",
            "Answer strictly from the graph — <b>don't extrapolate</b> beyond what's plotted unless the statement says to project a trend.",
            "For “rate of growth / change” dropdowns, compare <b>slopes</b>, not single points."
          ] },
          { t: "tip", x: "Read the <b>full sentence with its dropdowns</b> before looking at the chart. Knowing what you are hunting for turns a minute of scanning into a single targeted look." },
          { t: "warn", x: "A <b>scatter plot showing correlation says nothing about cause</b>. Dropdowns that offer a causal reading (“because”, “as a result of”) are wrong unless the surrounding text supplies the causal claim itself." },
          { t: "p", x: "When a dropdown asks for the value “closest to” something, <b>estimate first and then match</b>. The options are usually far enough apart that a rough read decides it, and precise reading off a chart is both slow and unreliable." },
          { t: "h", x: "What each chart is for" },
          { t: "table", head: ["Chart", "Read it for", "Common trap"], rows: [
            ["Line", "trend over time — the slope", "reading one point instead of the change"],
            ["Bar", "comparing magnitudes", "a truncated axis exaggerating the gap"],
            ["Scatter", "direction and tightness of a relationship", "treating correlation as cause"],
            ["Stacked bar", "a segment within a total", "reading the total instead of the segment"],
            ["Pie", "share of a whole", "comparing shares across two pies of different sizes"]
          ] },
          { t: "tip", x: "For a scatter plot, the sign of the best-fit line's slope answers every “as X increases, Y tends to …” dropdown. You rarely need a single data point." },
          { t: "warn", x: "Check where the axis starts. A bar chart beginning at 90 rather than 0 makes a 2% difference look like a doubling, and the dropdown will offer you the exaggerated reading." }
        ]
      },
      {
        id: "di-tables",
        title: "Table Analysis",
        mins: 3,
        blocks: [
          { t: "p", x: "A sortable table with a set of statements you mark <b>Yes/No</b> or <b>True/False</b> — each judged independently against the data." },
          { t: "ul", items: [
            "<b>Sort</b> by the relevant column before judging a statement about order, max/min, or medians — it's faster and less error-prone.",
            "For <b>median</b> statements, remember to count all rows and find the middle after sorting.",
            "Each statement is its own mini true/false — a statement is True only if the data <b>must</b> make it so; one counterexample makes it False."
          ] },
          { t: "tip", x: "Work one <b>column</b> at a time. A statement almost always concerns a single column, so sort by it, answer, and ignore the rest of the table entirely." },
          { t: "warn", x: "Boundary words decide these. <b>“More than” excludes the value itself; “at least” includes it</b>, and a row sitting exactly on the number is the whole point of the statement." },
          { t: "p", x: "For statements comparing two ratios, <b>cross-multiply</b> rather than computing both — comparing \\( a\\times d \\) with \\( b\\times c \\) avoids the division altogether." },
          { t: "h", x: "The statements that keep coming back" },
          { t: "ul", items: [
            "The <b>median or mean</b> of a column — sort first, then count to the middle.",
            "How many rows <b>exceed a threshold</b> — sort, then count from one end.",
            "Whether two columns <b>move together</b> — sort by one and check whether the other is mostly rising.",
            "Whether a <b>ratio</b> between two columns is above or below a figure — cross-multiply row by row.",
            "The <b>largest or smallest</b> value of a derived quantity, such as a per-capita figure you have to compute."
          ] },
          { t: "tip", x: "Sorting is free and cannot be undone wrongly — you can re-sort as often as you like. Treat it as the first move for every statement rather than something to do only when stuck." }
        ]
      },
      {
        id: "di-msr",
        title: "Multi-Source Reasoning",
        mins: 3,
        blocks: [
          { t: "p", x: "Information is spread across <b>2–3 tabs</b> (text, a table, a graph). Questions ask you to synthesise across tabs — including Yes/No inference sets and single-answer questions." },
          { t: "ul", items: [
            "<b>Skim all tabs first</b> to learn where each kind of information lives; don't try to memorise it.",
            "Each question usually leans on <b>one or two</b> tabs — find them rather than re-reading everything.",
            "It's the most <b>time-expensive</b> type — flag the 3 MSR questions and do them in review/edit so they don't sink your pacing."
          ] },
          { t: "tip", x: "Read the <b>question first</b>, then go to the tab that holds the answer. Reading all three tabs carefully before seeing a single question is the standard way to lose four minutes here." },
          { t: "warn", x: "A statement supported by one tab can be <b>contradicted by another</b> — that combination is exactly what these questions are built to test. Before marking a row True, check whether a second tab qualifies it." },
          { t: "p", x: "In the Yes/No inference sets, each row is judged <b>independently</b>: one row being true tells you nothing about the next. Treat them as three separate questions that happen to share a source." },
          { t: "h", x: "Where the answer usually hides" },
          { t: "ul", items: [
            "A <b>footnote or definition</b> on one tab that changes how a figure on another tab should be read.",
            "A <b>date range</b> that differs between the text and the table — the text covers 2015–2020, the table 2018–2022.",
            "A <b>unit</b> that differs: thousands on one tab, millions on another.",
            "An <b>exception</b> stated only in prose and invisible in the table."
          ] },
          { t: "tip", x: "Read the footnotes. On Multi-Source questions they are not decoration — they are usually the reason a plausible-looking statement is false." },
          { t: "note", x: "That completes the Data Insights concept layer — every Data Insights format now has a section behind it, and every practice topic in the app has a concept guide." }
        ]
      }
    ]
  },
  {
    id: "course-rules",
    section: "quant",
    title: "Course Rule Sheets",
    source: "Condensed from your Quant class-session guides (inequalities, absolute values, counting, statistics, numbers) and the GMAT Club Math Book",
    parts: [
      {
        id: "rs-ineq",
        title: "Inequalities Toolkit",
        mins: 6,
        blocks: [
          { t: "p", x: "Your inequalities session lists thirty rules. Most are one idea seen from different angles, so they are grouped here by that idea. The single rule behind all of them: an inequality survives every operation an equation does, <b>except</b> multiplying or dividing by a negative, which flips it, and multiplying or dividing by an unknown sign, which is not allowed at all." },
          { t: "h", x: "Signs of products and quotients" },
          { t: "ul", items: [
            "\\(xy &gt; 0\\) or \\(\\tfrac{x}{y} &gt; 0\\): \\(x\\) and \\(y\\) have the <b>same</b> sign (and neither is 0). The two statements are interchangeable, because dividing \\(xy &gt; 0\\) by the positive \\(y^{2}\\) gives \\(\\tfrac{x}{y} &gt; 0\\).",
            "\\(xy &lt; 0\\) or \\(\\tfrac{x}{y} &lt; 0\\): <b>opposite</b> signs.",
            "\\(\\tfrac{1}{x} &gt; 0\\) means \\(x &gt; 0\\); \\(\\tfrac{1}{x} &lt; -x\\) forces \\(x\\) negative. When unsure, substitute a negative, zero and a positive and watch what survives.",
            "Cross-multiplying \\(\\tfrac{a}{b} &gt; \\tfrac{c}{d}\\) to \\(ad &gt; bc\\) is legal only when every quantity is known to be positive."
          ]},
          { t: "h", x: "Where a variable can live" },
          { t: "ul", items: [
            "\\((x - a)(x - b) &lt; 0\\) with \\(a &lt; b\\): \\(x\\) lies <b>between</b> \\(a\\) and \\(b\\). \\((x - a)(x - b) &gt; 0\\): \\(x\\) lies <b>outside</b>, either below \\(a\\) or above \\(b\\). Write \\(x + 3\\) as \\(x - (-3)\\) to read the boundary off.",
            "\\(x^{2} &gt; x\\): \\(x &gt; 1\\) or \\(x &lt; 0\\). \\(x^{2} &lt; x\\): \\(0 &lt; x &lt; 1\\). \\(x^{2} = x\\): \\(x\\) is 0 or 1.",
            "\\(x^{3} &gt; x\\): \\(x &gt; 1\\) or \\(-1 &lt; x &lt; 0\\). \\(x^{3} &lt; x\\): \\(0 &lt; x &lt; 1\\) or \\(x &lt; -1\\). \\(x^{3} = x\\): \\(x\\) is 0, 1 or \\(-1\\).",
            "Test the nine landmark values: \\(0\\), \\(1\\), \\(-1\\), a number above 1 (use 2), one between 0 and 1 (use one half), one between \\(-1\\) and 0 (use minus one half), and one below \\(-1\\) (use \\(-2\\)). Nearly every could-be-true trap is exposed by one of them."
          ]},
          { t: "h", x: "Powers do not preserve order" },
          { t: "ul", items: [
            "\\(x^{2} &gt; y^{2}\\) says nothing about whether \\(x &gt; y\\): \\(5^{2} &gt; 3^{2}\\) with \\(5 &gt; 3\\), but \\((-5)^{2} &gt; 3^{2}\\) with \\(-5 &lt; 3\\).",
            "\\(x &gt; y^{2}\\) or \\(x &gt; y^{4}\\) leaves both \\(x &gt; y\\) and \\(x &lt; y\\) possible: \\(25 &gt; 3^{2}\\) with \\(25 &gt; 3\\), but one third exceeds one quarter while one third is below one half.",
            "<b>Odd</b> powers and roots do preserve order: \\(x &gt; y\\) guarantees \\(x^{3} &gt; y^{3}\\). Even powers preserve it only for non-negative numbers.",
            "Any square is at least 0. A statement that \\(x^{2} + y^{2} = 9\\) therefore bounds each of \\(x\\) and \\(y\\) between \\(-3\\) and 3."
          ]},
          { t: "h", x: "Combining inequalities" },
          { t: "ul", items: [
            "Two inequalities pointing the same way may be <b>added</b>: \\(a &gt; b\\) and \\(c &gt; d\\) give \\(a + c &gt; b + d\\).",
            "To combine inequalities pointing opposite ways, multiply one by \\(-1\\) (which flips it) and then add. Never subtract inequalities directly.",
            "Adding the same positive \\(k\\) to numerator and denominator pulls a fraction towards 1: \\(\\tfrac{a + k}{b + k} &gt; \\tfrac{a}{b}\\) when \\(a &lt; b\\), and \\(\\tfrac{a + k}{b + k} &lt; \\tfrac{a}{b}\\) when \\(a &gt; b\\)."
          ]},
          { t: "tip", x: "In Data Sufficiency, rephrase the question first (is \\(|a| &gt; a\\)? becomes is \\(a\\) negative?) and reduce each statement to a region of the number line. Sufficiency is then a matter of whether the region fits inside the answer." },
          { t: "eg",
            q: "If \\(x^{3} &lt; x^{2}\\), which of the following must be true?",
            choices: ["\\(x &gt; 1\\)", "\\(x &lt; 1\\)", "\\(x &lt; 0\\)", "\\(0 &lt; x &lt; 1\\)", "\\(x &gt; 0\\)"],
            ans: "B",
            why: "\\(x^{3} &lt; x^{2}\\) means \\(x^{2}(x - 1) &lt; 0\\). Since \\(x^{2}\\) is positive whenever \\(x \\ne 0\\), the sign comes from \\(x - 1\\), so \\(x &lt; 1\\) (and \\(x \\ne 0\\)). Negative values such as \\(-2\\) and fractions such as one half both work, so (C), (D) and (E) each exclude valid values; only (B) holds for all of them."
          }
        ]
      },
      {
        id: "rs-abs",
        title: "Absolute Value in Inequalities",
        mins: 6,
        blocks: [
          { t: "p", x: "Read \\(|x|\\) as the distance of \\(x\\) from 0 and \\(|x - a|\\) as the distance of \\(x\\) from \\(a\\). Distance is never negative, so \\(|x| &lt; 0\\) is impossible and \\(|x| \\le -y\\) can only hold when both sides are 0." },
          { t: "ul", items: [
            "\\(|x| = x\\) when \\(x \\ge 0\\) and \\(|x| = -x\\) when \\(x &lt; 0\\). So \\(|x| = -x\\) is a statement that \\(x \\le 0\\), not a contradiction: \\(-x\\) is then the positive number.",
            "\\(\\sqrt{x^{2}} = |x|\\). The radical sign means the non-negative root, which is why \\(\\sqrt{36}\\) is 6 only, while \\(x^{2} = 36\\) gives \\(|x| = 6\\) and hence \\(x = \\pm 6\\).",
            "\\(|x| = a\\) gives \\(x = \\pm a\\). \\(|x| &lt; a\\) gives \\(-a &lt; x &lt; a\\). \\(|x| &gt; a\\) gives \\(x &gt; a\\) or \\(x &lt; -a\\). Replace \\(x\\) by \\(x - b\\) to shift the centre to \\(b\\).",
            "\\(|a| = |b|\\) means \\(a = b\\) or \\(a = -b\\).",
            "\\(|x - 3| &gt; 0\\) is true for every \\(x\\) except 3: a strict inequality against zero only excludes the centre.",
            "\\(\\tfrac{x}{|x|}\\) is a sign switch: 1 for positive \\(x\\), \\(-1\\) for negative \\(x\\). Hence \\(x = \\tfrac{y}{|y|}\\) forces \\(|x| = 1\\).",
            "\\(|x| &lt; x^{2}\\) means \\(|x| &gt; 1\\); \\(|x| \\cdot b &gt; 0\\) means \\(x \\ne 0\\) and \\(b &gt; 0\\)."
          ]},
          { t: "warn", x: "\\(x\\) has no sign of its own until the question gives it one. Do not assume \\(x\\) is positive and \\(-x\\) negative; if \\(z\\) is negative then \\(|4z - 5|\\) equals \\(5 - 4z\\), because that is the version that comes out positive." },
          { t: "h", x: "Solving equations with absolute values" },
          { t: "ol", items: [
            "Isolate the absolute value, and reject the equation at once if the other side is negative.",
            "Split into the positive and negative cases and solve each.",
            "Check every root against the case it came from (or in the original equation). Roots that violate their case are extraneous: \\(|x| = 3x - 2\\) gives \\(x = 1\\) and \\(x = \\tfrac{1}{2}\\), but the second came from assuming \\(x &lt; 0\\) and must be discarded.",
            "For nested values such as \\(|6 - |x + 2|| = 10\\), unwrap from the outside: \\(6 - |x + 2| = \\pm 10\\), drop the branch that makes the inner value negative, then solve the survivor."
          ]},
          { t: "eg",
            q: "If \\(y \\ne 0\\), is \\(|x| = 1\\)?\n(1) \\(x = \\dfrac{y}{|y|}\\)\n(2) \\(|x| = -x\\)",
            choices: ["Statement (1) alone is sufficient", "Statement (2) alone is sufficient", "Both together are sufficient", "Each alone is sufficient", "Together not sufficient"],
            ans: "A",
            why: "(1) \\(\\tfrac{y}{|y|}\\) is 1 or \\(-1\\), so \\(|x| = 1\\): sufficient. (2) \\(|x| = -x\\) only says \\(x \\le 0\\); \\(x = -1\\) answers yes and \\(x = -2\\) answers no: not sufficient. Answer (A)."
          }
        ]
      },
      {
        id: "rs-counting",
        title: "Counting & Probability Formulas",
        mins: 5,
        blocks: [
          { t: "p", x: "The live session's rule of thumb: <b>arrangement</b> words (seating, sequence, order, schedule, ranking, itinerary, codes, alphabets) mean order matters; <b>selection</b> words (team, committee, handshakes, matches, picking balls) mean it does not. An arrangement is a selection followed by an ordering, which is the whole relationship between the two formulas." },
          { t: "formula", x: "\\begin{gathered}{}^{n}P_{r} = \\frac{n!}{(n - r)!} = {}^{n}C_{r} \\cdot r! \\\\[4pt] {}^{n}C_{r} = \\frac{n!}{r!\\,(n - r)!}\\end{gathered}" },
          { t: "table", head: ["Situation", "Count"], rows: [
            ["Select \\(r\\) of \\(n\\) distinct items and arrange them", "\\({}^{n}P_{r}\\)"],
            ["Fill \\(r\\) slots from \\(n\\) options with repetition allowed (three rings on four fingers)", "\\(n^{r}\\)"],
            ["Arrange \\(n\\) items of which \\(p\\), \\(q\\), \\(r\\) are alike (BANANA)", "\\(\\dfrac{n!}{p!\\,q!\\,r!}\\)"],
            ["Arrange \\(n\\) people with two of them together", "\\((n - 1)! \\times 2!\\)"],
            ["Arrange \\(n\\) people with two of them apart", "\\(n! - (n - 1)! \\times 2!\\)"],
            ["Seat \\(n\\) people around a circle", "\\((n - 1)!\\)"],
            ["Choose 5 of 10 with A and B both included", "\\({}^{8}C_{3}\\)"],
            ["Choose 5 of 10 with A and B both excluded", "\\({}^{8}C_{5}\\)"],
            ["Choose 5 of 10 with A and B never together", "\\({}^{10}C_{5} - {}^{8}C_{3}\\)"]
          ]},
          { t: "ul", items: [
            "<b>AND</b> multiplies, <b>OR</b> adds. A committee that must contain at least one French teacher is counted as all committees minus committees with none: \\({}^{10}C_{3} - {}^{6}C_{3} = 120 - 20 = 100\\).",
            "\\({}^{n}C_{r} = {}^{n}C_{n-r}\\), and \\({}^{n}C_{r}\\) rises with \\(n\\) for fixed \\(r\\), so a value such as \\({}^{n}C_{5} = 126\\) pins \\(n\\) (here 9) without any search.",
            "Some problems have no formula: draw the slots (a block diagram) and fill them."
          ]},
          { t: "h", x: "Probability" },
          { t: "ul", items: [
            "\\(P(\\text{not } E) = 1 - P(E)\\). 'At least one' is almost always \\(1 - P(\\text{none})\\): at least one six in two dice is \\(1 - \\tfrac{25}{36} = \\tfrac{11}{36}\\).",
            "Independent events multiply: \\(P(E \\text{ and } F) = P(E) \\cdot P(F)\\). Drawing without replacement is not independent; drawing with replacement is.",
            "Mutually exclusive events add; otherwise \\(P(E \\text{ or } F) = P(E) + P(F) - P(E \\text{ and } F)\\).",
            "Exactly \\(r\\) successes in \\(n\\) independent trials with success probability \\(p\\): \\({}^{n}C_{r}\\,p^{r}(1 - p)^{n - r}\\).",
            "A husband alive with probability three fifths and a wife with two thirds: at least one alive is \\(1 - \\tfrac{2}{5} \\cdot \\tfrac{1}{3} = \\tfrac{13}{15}\\)."
          ]},
          { t: "tip", x: "Four socks from three colours must contain a matching pair, so the probability is 1 and no formula is needed. Before computing, ask whether the pigeonhole principle or symmetry settles the question outright." }
        ]
      },
      {
        id: "rs-stats",
        title: "Mean, Median, Deviation & Number Facts",
        mins: 7,
        blocks: [
          { t: "h", x: "Averages" },
          { t: "ul", items: [
            "Combined mean of two groups of sizes \\(N_{1}\\), \\(N_{2}\\) with means \\(M_{1}\\), \\(M_{2}\\): \\(\\dfrac{N_{1}M_{1} + N_{2}M_{2}}{N_{1} + N_{2}}\\). Turned round, the group sizes are in the <b>inverse</b> ratio of their distances from the combined mean, which is the fact your session calls the most important result in averages.",
            "Out at speed \\(x\\), back at speed \\(y\\) over the same route: average speed \\(\\dfrac{2xy}{x + y}\\), always a little below the plain average of the two speeds.",
            "Evenly spaced numbers (consecutive integers, multiples, any arithmetic progression): mean = median = average of the first and last terms. The sum of the first \\(n\\) positive integers is \\(\\dfrac{n(n + 1)}{2}\\).",
            "An odd count of consecutive integers has an integer average; an even count has an average that ends in a half. A set of consecutive integers averaging 0 therefore has an odd number of members.",
            "If a set's mean equals its largest or its smallest member, every member is equal."
          ]},
          { t: "h", x: "Median, range, standard deviation" },
          { t: "ul", items: [
            "The median is the 50th percentile; with an even count it is the mean of the two middle values. A value equal to the mean of three numbers is automatically their median.",
            "Range \\(= \\text{max} - \\text{min} \\ge 0\\); range 0 means all values equal. Standard deviation is 0 in the same case, and otherwise \\(\\text{SD} \\le \\dfrac{\\text{range}}{2}\\), so the range can never be smaller than the standard deviation.",
            "Adding or subtracting a constant, or changing every sign, moves the mean and median but leaves the range and standard deviation unchanged; multiplying or dividing by \\(k\\) scales the range and standard deviation by \\(|k|\\).",
            "The standard deviation of a set of consecutive integers depends only on how many there are, not where they sit.",
            "Adding a value equal to the mean lowers the standard deviation; the value farthest from the mean raises it most. Two values at the mean are the only pair guaranteed to lower it."
          ]},
          { t: "h", x: "Number facts from the session" },
          { t: "ul", items: [
            "Number of factors of \\(N = a^{m} b^{n} c^{p}\\) (primes \\(a, b, c\\)): \\((m + 1)(n + 1)(p + 1)\\). For 90 that is \\(2 \\times 3 \\times 2 = 12\\).",
            "\\(\\text{LCM} \\times \\text{HCF} = \\) product of the two numbers (two numbers only). If \\(k\\) divides \\(n\\), \\(k\\) cannot divide \\(n + 1\\).",
            "Divisible by 11 when the alternating digit sums differ by 0 or a multiple of 11; by 4 or 8 when the last two or three digits are; by 3 or 9 when the digit sum is.",
            "Power of a prime \\(p\\) in \\(n!\\): add \\(\\lfloor n/p \\rfloor + \\lfloor n/p^{2} \\rfloor + \\cdots\\). Trailing zeros of \\(n!\\) are the power of 5: \\(100!\\) ends in \\(20 + 4 = 24\\) zeros, \\(30!\\) in \\(6 + 1 = 7\\).",
            "Units digits cycle with period 4 (2, 3, 7, 8), period 2 (4, 9) or stay fixed (0, 1, 5, 6). Divide the exponent by 4 and use the remainder; a remainder of 0 means the fourth power's digit.",
            "A fraction in lowest terms terminates exactly when its denominator has no prime other than 2 and 5. A repeating block over as many nines: \\(0.234234\\ldots = \\tfrac{234}{999}\\).",
            "Perfect squares have an odd number of factors, never end in 2, 3, 7 or 8, leave remainder 0 or 1 on division by 3 and by 4, and if they end in 9 the preceding digit is even."
          ]},
          { t: "eg",
            q: "In a certain senior class, 72 percent of the male students and 80 percent of the female students have applied to college, and 75 percent of all students have applied. What fraction of the class is male?",
            choices: ["\\(\\tfrac{3}{8}\\)", "\\(\\tfrac{1}{2}\\)", "\\(\\tfrac{5}{8}\\)", "\\(\\tfrac{2}{3}\\)", "\\(\\tfrac{3}{4}\\)"],
            ans: "C",
            why: "The combined rate 75 sits 3 from the male rate (72) and 5 from the female rate (80). Group sizes are in the inverse ratio of those distances, so males to females is 5 to 3 and males are five eighths of the class. Algebra agrees: \\(72m + 80f = 75(m + f)\\) gives \\(3m = 5f\\)."
          }
        ]
      },
      {
        id: "rs-remainders",
        title: "Remainders, Quadratics & Progressions",
        mins: 5,
        blocks: [
          { t: "h", x: "Remainders" },
          { t: "ul", items: [
            "\\(y = xq + r\\) with \\(0 \\le r &lt; x\\): the remainder is never negative and always smaller than the divisor. A smaller number divided by a larger one has quotient 0 and remainder equal to itself.",
            "Dividing by 10, 100 or 1000 leaves the last one, two or three digits as the remainder.",
            "Remainders combine: the remainder of a product (or sum) is the remainder of the product (or sum) of the remainders. \\(15 \\times 17 \\times 19\\) divided by 7 behaves like \\(1 \\times 3 \\times 5 = 15\\), remainder 1.",
            "Powers: write the base as (multiple of divisor) + small remainder and reduce. \\(9^{100}\\) divided by 7 behaves like \\(2^{100}\\), and since \\(2^{3} = 8\\) leaves remainder 1, \\(2^{100} = 2^{99} \\cdot 2\\) leaves remainder 2.",
            "Remainder 7 on division by 18 means remainder 1 on division by 6: split \\(18q + 7\\) into a multiple of 6 plus 7, then reduce 7."
          ]},
          { t: "h", x: "Quadratics" },
          { t: "ul", items: [
            "\\(ax^{2} + bx + c = 0\\) has two real roots when \\(b^{2} &gt; 4ac\\), one when \\(b^{2} = 4ac\\), none when \\(b^{2} &lt; 4ac\\).",
            "Sum of roots \\(-\\tfrac{b}{a}\\), product \\(\\tfrac{c}{a}\\). To factor \\(x^{2} + 11x + 30\\), look for two numbers with sum \\(-11\\) and product 30: \\(-5\\) and \\(-6\\).",
            "Higher degrees: factor out a common \\(x\\) or substitute \\(y = x^{3}\\); an equation of degree \\(n\\) has at most \\(n\\) distinct solutions.",
            "Identities worth reflexes: \\((x + y)^{2} - (x - y)^{2} = 4xy\\); \\(x^{3} \\pm y^{3} = (x \\pm y)(x^{2} \\mp xy + y^{2})\\); \\((x + y + z)^{2} = x^{2} + y^{2} + z^{2} + 2(xy + yz + zx)\\).",
            "When roots are known to be integers, brute force is respectable: \\(a^{2} + b^{2} = 116\\) with \\(a &lt; b\\) yields only \\(4\\) and \\(10\\)."
          ]},
          { t: "h", x: "Progressions" },
          { t: "formula", x: "\\begin{gathered}\\text{AP: } a_{n} = a_{1} + (n - 1)d \\\\[4pt] S_{n} = \\frac{n}{2}\\,(a_{1} + a_{n}) \\\\[4pt] \\text{GP: } a_{n} = a_{1} r^{\\,n-1} \\\\[4pt] S_{n} = a_{1}\\,\\frac{r^{n} - 1}{r - 1} \\\\[4pt] S_{\\infty} = \\frac{a_{1}}{1 - r} \\text{ for } |r| &lt; 1\\end{gathered}" },
          { t: "ul", items: [
            "In an arithmetic progression any three consecutive terms have the middle one as the mean of the other two; in a geometric progression it is the geometric mean. The middle term of an odd-length arithmetic progression is both its mean and its median.",
            "The sum of an arithmetic progression is the number of terms times the average of the first and last terms; it is the same as the count times the middle term when the count is odd.",
            "A run of consecutive terms taken from an arithmetic (or geometric) progression is again an arithmetic (or geometric) progression."
          ]},
          { t: "eg",
            q: "If the remainder is 7 when the positive integer \\(n\\) is divided by 18, what is the remainder when \\(n\\) is divided by 6?",
            choices: ["0", "1", "2", "3", "4"],
            ans: "B",
            why: "\\(n = 18q + 7\\). The first term is a multiple of 6, so only the 7 matters, and 7 divided by 6 leaves 1."
          }
        ]
      }
    ]
  }
];
