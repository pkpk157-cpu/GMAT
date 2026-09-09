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
          { t: "p", x: "Broadly, passages split roughly 50/50:" },
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
        mins: 2,
        blocks: [
          { t: "p", x: "Quant and Verbal are scored on very different curves, so a “good” Quant score is higher than most people assume." },
          { t: "ul", items: [
            "The <b>maximum</b> score is only the ~97th percentile — about 3% of test-takers reach the top each year.",
            "Q50 is roughly the 86th percentile; the next step down drops off fast.",
            "Your <b>target can't be below the top band</b>. Many schools are sceptical even of the score just under it, and placements & scholarships lean on a top Quant score."
          ] },
          { t: "h", x: "How few mistakes you can afford" },
          { t: "ul", items: [
            "Top score → essentially <b>zero</b> mistakes on the questions that count.",
            "One notch down → up to <b>3 mistakes</b>, and only if they're not in the first 10, not consecutive, and you finish the section."
          ] },
          { t: "h", x: "Where the total comes from" },
          { t: "p", x: "Quant, Verbal and Data Insights are each scored 60–90 and each counts <b>equally</b> toward the 205–805 total. That has one blunt consequence for planning:" },
          { t: "tip", x: "Points are cheapest in your <b>weakest</b> section. Moving Data Insights from mediocre to solid almost always adds more to the total than grinding the last few Quant points, because the curve is far less crowded there." },
          { t: "warn", x: "Do not read a percentile as a difficulty. Percentiles reflect who sits the exam, so the same scaled score can shift percentile from year to year — target the <b>scaled score</b> your schools quote, not the percentile." },
          { t: "note", x: "A one-point Quant drop can take about <b>four</b> Verbal points to make up for on the total score — that's how steep the Quant curve is at the top." }
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
        mins: 3,
        blocks: [
          { t: "p", x: "Good average pace hides bad pacing: solving most questions fast but bleeding 5–7 minutes into a few is how strong students still run out of time." },
          { t: "h", x: "Use hard time markers" },
          { t: "p", x: "Roughly <b>2 minutes per question</b> — so check the clock in blocks of 8:" },
          { t: "table", head: ["After question", "Time you should have left"], rows: [
            ["8", "~46 min"],
            ["16", "~30 min"],
            ["24", "~14 min"],
            ["Final 7", "~14 min to spare"]
          ] },
          { t: "h", x: "The exit strategy" },
          { t: "ul", items: [
            "<b>Never spend more than ~2½ minutes</b> on any question — first 10 or last 10, no exceptions.",
            "If it won't fall in time, make your best intelligent guess, <b>sacrifice it, and move on</b>.",
            "Consecutive mistakes are penalised just as hard at the end as at the start — so protect your streak."
          ] },
          { t: "tip", x: "The other side of the rule: with the right approach, <b>every</b> real GMAT Quant question is solvable in under 2 minutes (sometimes under 30 seconds). If your method routinely takes longer, dump it — the only measure of a better approach is that it's faster." },
          { t: "h", x: "Guessing properly" },
          { t: "ol", items: [
            "Eliminate on <b>structure</b> before content: wrong sign, wrong units, impossible magnitude, an answer that ignores a stated constraint.",
            "On “which must be true”, test the <b>easiest</b> case you can think of — zero, one, a fraction — and cross off whatever it breaks.",
            "Then pick and move. Never leave a question blank; an unanswered question is a guaranteed loss, a guess is not."
          ] },
          { t: "h", x: "Use the review screen" },
          { t: "p", x: "The Focus edition lets you <b>bookmark</b> questions and change up to <b>three answers per section</b> at the end. That turns the exit strategy from damage control into a plan: bookmark anything you guessed on, move on without regret, and spend leftover minutes on the bookmarks rather than on questions you already got right." },
          { t: "tip", x: "Bookmark deliberately, not anxiously. Twelve bookmarks are the same as none — you can only revisit three, so mark the ones where you were genuinely one step from the answer." }
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
        mins: 3,
        blocks: [
          { t: "p", x: "A DS question gives you a question plus two statements, (1) and (2). You don't solve for the answer — you decide <b>whether the data is enough</b> to answer. The five choices are always the same:" },
          { t: "table", head: ["Choice", "Meaning"], rows: [
            ["A", "(1) alone is sufficient, (2) alone is not"],
            ["B", "(2) alone is sufficient, (1) alone is not"],
            ["C", "Both together sufficient, neither alone"],
            ["D", "Each alone is sufficient"],
            ["E", "Together still not sufficient"]
          ] },
          { t: "h", x: "Two question types" },
          { t: "ul", items: [
            "<b>Value questions</b> (“what is x?”) — sufficient only if the data pins down <b>exactly one</b> numerical value. “x = 2 or 3” is <b>not</b> sufficient; “x = a” isn't either (not a number).",
            "<b>Yes/No questions</b> (“Is x even?”) — sufficient only if you get a <b>confirmed yes</b> or a <b>confirmed no</b>. A confirmed NO is just as good as a YES; “sometimes yes, sometimes no” is insufficient."
          ] },
          { t: "h", x: "The AD / BCE split" },
          { t: "p", x: "Test statement (1) alone first and the five choices immediately halve. If (1) is sufficient the answer is <b>A or D</b>; if it is not, the answer is <b>B, C or E</b>. Then test (2) alone, and only combine them if neither worked on its own." },
          { t: "warn", x: "Sufficiency is not about whether you can solve it — it is about whether the answer is <b>uniquely determined</b>. Two possible values means insufficient, however much work you did to find them." },
          { t: "note", x: "Data Sufficiency now sits in the Data Insights section rather than in Quant. The full treatment — the decision tree, the numbers to test, and the C-trap — is in the Data Insights guide." }
        ]
      },
      {
        id: "q-ds-traps",
        title: "Avoiding DS traps",
        mins: 3,
        blocks: [
          { t: "p", x: "Every hard DS question hides a trap — fall for it and you'll mark the wrong answer <i>with total confidence</i>. These habits defuse most of them:" },
          { t: "ul", items: [
            "<b>Simplify the question</b> to its absolute basics before touching the statements — most DS questions can be boiled down.",
            "<b>Assume nothing.</b> If a number isn't stated to be an integer, it might not be. If a figure isn't stated to be a square / parallel / right angle, it isn't — no matter how it looks.",
            "<b>Keep the statements independent.</b> When testing (2), don't mentally carry over (1). Judge each alone first.",
            "<b>Actively try to break it.</b> On yes/no questions, deliberately hunt for both a YES and a NO case rather than only trying to confirm one.",
            "<b>Don't calculate</b> where you don't have to — sufficiency rarely needs the actual number.",
            "<b>The two statements never contradict</b> each other. And when a question needs two simultaneous equations, usually just one statement carries them both."
          ] },
          { t: "h", x: "Proving insufficiency" },
          { t: "p", x: "For a yes/no question you need <b>one case that answers YES and one that answers NO</b>. A single example proves nothing: finding a YES does not make a statement sufficient, it only means you have not yet found the NO." },
          { t: "tip", x: "Have a fixed set of test numbers ready — 0, 1, −1, a large positive, a large negative, and a fraction either side of zero. Nearly every insufficiency is exposed by one of them, and running a fixed list is faster than inventing cases under pressure." },
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
        mins: 5,
        blocks: [
          { t: "p", x: "A percent is just a fraction out of 100. Fluency comes from <b>knowing the common fraction ↔ percent equivalents cold</b> so you never calculate them:" },
          { t: "table", head: ["Fraction", "%"], rows: [
            ["1/2", "50%"], ["1/3", "33⅓%"], ["1/4", "25%"], ["1/5", "20%"],
            ["1/6", "16⅔%"], ["1/8", "12.5%"], ["1/9", "11⅑%"], ["1/20", "5%"]
          ] },
          { t: "h", x: "Change, increase, decrease" },
          { t: "formula", x: "\\text{change \\%} = \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100" },
          { t: "p", x: "A rise of x% then a further rise of y% is <b>not</b> x+y — the combined effect is:" },
          { t: "formula", x: "x + y + \\dfrac{xy}{100}" },
          { t: "ul", items: [
            "Up x% then down x% is a net <b>loss</b> of \\( \\frac{x^2}{100}\\% \\) — never zero.",
            "“A is r% more than B” ⟹ B is \\( \\frac{r}{100+r}\\times100\\% \\) less than A (not r%).",
            "Price up r%, to keep spend flat cut usage by \\( \\frac{r}{100+r}\\times100\\% \\)."
          ] },
          { t: "tip", x: "Turn “% of” into multiplication: 20% of 240 = 0.2 × 240, or use fractions — 37.5% of 240 = ⅜ × 240 = 90. Choose whichever is cleaner." },
          { t: "h", x: "The three shapes a percent question takes" },
          { t: "ol", items: [
            "<b>Percent of</b> — “what is 30% of 80?” Multiply: \\( 0.30\\times80=24 \\).",
            "<b>Percent change</b> — “from 80 to 100” is a change measured <b>against the starting value</b>: \\( 20/80=25\\% \\).",
            "<b>Percent more / less than</b> — “A is 25% more than B” means \\( A=1.25B \\). The word <b>than</b> points at the base."
          ] },
          { t: "warn", x: "Always ask “percent <b>of what</b>?”. Nearly every wrong answer in this topic comes from measuring the change against the wrong base — the new value instead of the old, or the total instead of the part." },
          { t: "h", x: "Percent vs. percentage points" },
          { t: "p", x: "If a share rises from 20% to 25%, that is a rise of <b>5 percentage points</b> but a <b>25% increase</b> \\( (5/20) \\). The exam writes both numbers into the answer choices and lets you pick the wrong one." },
          { t: "h", x: "Working backwards" },
          { t: "p", x: "To undo a percentage change you <b>divide</b>, never subtract. If a price is $60 after a 20% rise, the original was \\( 60/1.2=50 \\) — not \\( 60\\times0.8=48 \\)." },
          { t: "tip", x: "Chain changes as <b>multipliers</b> and the arithmetic collapses: up 25% then down 20% is \\( 1.25\\times0.80=1.00 \\), exactly back to the start. Order never matters, because multiplication commutes." },
          { t: "eg",
            q: "After a 20% increase, the price of an item is $60. What was the price before the increase?",
            choices: ["$40", "$48", "$50", "$52", "$75"],
            ans: "C",
            why: "The new price is 1.2 times the old, so the old price is \\(60 \\div 1.2 = 50\\). The trap is $48, which comes from taking 20% off the new price instead of undoing the rise."
          }
        ]
      },
      {
        id: "qt-ratio",
        title: "Ratios & Proportions",
        mins: 4,
        blocks: [
          { t: "p", x: "A ratio a : b compares parts. Treat the parts as <b>multiples of a common unit</b>: a : b really means 'ak and bk for some k'. That single k unlocks most ratio questions." },
          { t: "ul", items: [
            "To split a quantity Q in ratio a : b, one share is \\( \\frac{a}{a+b}\\times Q \\).",
            "Chain ratios: given a : b and b : c, scale so the shared term matches, then read a : b : c.",
            "A proportion a : b = c : d means <b>product of extremes = product of means</b>: \\( ad = bc \\)."
          ] },
          { t: "warn", x: "You can't add a number to both sides of a ratio and keep it — 2 : 3 is not 3 : 4. Work with the actual multiples (2k, 3k) instead." },
          { t: "eg",
            q: "A sum is split between X and Y in the ratio 3 : 5. If Y gets $40 more than X, how much is the total?",
            choices: ["$120", "$140", "$160", "$180", "$200"],
            ans: "C",
            why: "Shares are 3k and 5k; the gap 5k − 3k = 2k = $40, so k = 20. Total = 8k = 8 × 20 = $160."
          },
          { t: "h", x: "Chaining three-part ratios" },
          { t: "p", x: "Given \\( a:b=2:3 \\) and \\( b:c=4:5 \\), scale each so the shared term matches. The b terms are 3 and 4, so scale the first by 4 and the second by 3:" },
          { t: "formula", x: "\\begin{gathered}a:b=8:12, \\quad b:c=12:15 \\\\[4pt] \\Rightarrow\\ a:b:c=8:12:15\\end{gathered}" },
          { t: "h", x: "Direct and inverse proportion" },
          { t: "ul", items: [
            "<b>Direct</b>: \\( y=kx \\). Double one, double the other. Cost against quantity.",
            "<b>Inverse</b>: \\( xy=k \\). Double one, halve the other. Speed against time for a fixed distance; workers against days for a fixed job.",
            "For similar figures, lengths in ratio \\( k \\) put areas in ratio \\( k^{2} \\) and volumes in ratio \\( k^{3} \\)."
          ] },
          { t: "tip", x: "A ratio alone never gives an amount — you need <b>one real number</b> to find k. Scan the question for the sentence that supplies it: a difference, a total, or one share." },
          { t: "warn", x: "When a ratio <b>changes</b> after something is added or removed, do not write a second unrelated ratio. Keep the same k from the first ratio, apply the change to it, and set the result equal to the new ratio." }
        ]
      },
      {
        id: "qt-average",
        title: "Averages",
        mins: 4,
        blocks: [
          { t: "formula", x: "\\text{average} = \\dfrac{\\text{sum of terms}}{\\text{number of terms}}" },
          { t: "ul", items: [
            "The <b>sum</b> is the bridge: total = average × count. Most average questions are really sum questions.",
            "Adding a value equal to the current average leaves it unchanged; adding one above pulls it up, below pulls it down.",
            "For evenly-spaced sets, the average equals the <b>middle value</b> (= (first + last)/2)."
          ] },
          { t: "h", x: "Weighted average" },
          { t: "p", x: "When groups of different sizes combine, weight by size — you can't just average the averages:" },
          { t: "formula", x: "\\bar{x} = \\dfrac{n_1\\bar{x}_1 + n_2\\bar{x}_2}{n_1 + n_2}" },
          { t: "tip", x: "The combined average always lands <b>between</b> the two group averages, closer to the bigger group — a quick sanity check and often enough to answer." },
          { t: "h", x: "Changing the average" },
          { t: "p", x: "Because the sum is the bridge, every “what happens to the average” question is answered by tracking the total:" },
          { t: "ul", items: [
            "Add a term x to n terms averaging A: the new average is \\( \\frac{nA+x}{n+1} \\).",
            "Remove a term: subtract it from the total, then divide by the smaller count.",
            "Replace a term: the average moves by \\( \\frac{\\text{new}-\\text{old}}{n} \\) — the change spread over all n terms."
          ] },
          { t: "h", x: "The deviation shortcut" },
          { t: "p", x: "For awkward numbers, pick a convenient reference, average the <b>deviations</b> from it, then add the reference back. For 402, 407, 411, 400: deviations from 400 are 2, 7, 11, 0, averaging 5 — so the average is 405. No large addition at all." },
          { t: "warn", x: "The average need not be one of the values, need not be an integer, and is <b>not</b> the median. A set can average 50 with no member anywhere near 50." },
          { t: "eg",
            q: "The average of 6 numbers is 15. When one number is removed, the average of the remaining 5 is 14. What number was removed?",
            choices: ["10", "14", "16", "20", "24"],
            ans: "D",
            why: "The original total is \\(6\\times15=90\\) and the new total is \\(5\\times14=70\\). The removed number is the difference, \\(90-70=20\\)."
          }
        ]
      },
      {
        id: "qt-mixture",
        title: "Mixtures & Alligation",
        mins: 4,
        blocks: [
          { t: "p", x: "Alligation is weighted-average logic run backwards: given a blend's average, find the <b>ratio</b> of the two ingredients. With cheaper value c, dearer value d, and mean m:" },
          { t: "formula", x: "\\dfrac{\\text{qty of cheaper}}{\\text{qty of dearer}} = \\dfrac{d - m}{m - c}" },
          { t: "p", x: "(Each ingredient's 'distance' from the mean is inversely proportional to how much of it you use.)" },
          { t: "h", x: "Repeated replacement" },
          { t: "p", x: "If you remove x from a container of volume V and top up with the other liquid, n times, the original liquid left is:" },
          { t: "formula", x: "V\\left(1 - \\dfrac{x}{V}\\right)^{n}" },
          { t: "tip", x: "Alligation also cracks problems on average speed, blended interest rates, and salary/marks mixes — anything where two rates combine into one." },
          { t: "h", x: "Track the pure component, not the mixture" },
          { t: "p", x: "In 30 litres of a 20% salt solution there are 6 litres of salt. Every mixture question becomes easy once you hold that quantity in view:" },
          { t: "ul", items: [
            "Adding <b>pure water</b> leaves the salt unchanged and raises the total — so the concentration falls.",
            "Adding <b>pure salt</b> raises both the salt and the total.",
            "<b>Evaporating water</b> leaves the salt unchanged and lowers the total — the concentration rises.",
            "Removing some of the <b>mixture</b> lowers salt and total in the same proportion, so the concentration does not move at all."
          ] },
          { t: "tip", x: "The alligation ratio comes out as <b>cheaper : dearer</b>, which is the reverse of the order the distances are written in. Sanity-check it: the ingredient nearer the mean must be the one you used more of." },
          { t: "warn", x: "Alligation works on <b>averages per unit</b> — concentrations, prices per kilo, rates. It does not work on totals. Convert to a per-unit figure before you cross." },
          { t: "eg",
            q: "How many litres of water must be added to 30 litres of a 20% salt solution to dilute it to 15% salt?",
            choices: ["5", "7.5", "10", "12", "15"],
            ans: "C",
            why: "The salt is fixed at \\(0.20\\times30=6\\) litres. We need \\(6/(30+x)=0.15\\), so \\(30+x=40\\) and \\(x=10\\)."
          }
        ]
      },
      {
        id: "qt-profit",
        title: "Profit, Loss & Discount",
        mins: 4,
        blocks: [
          { t: "formula", x: "\\text{profit \\%} = \\dfrac{\\text{SP} - \\text{CP}}{\\text{CP}} \\times 100" },
          { t: "ul", items: [
            "Selling price from cost: \\( \\text{SP} = \\text{CP}\\left(1 + \\frac{p}{100}\\right) \\); a loss uses a minus sign.",
            "<b>Discount is on the marked price</b>, profit is on the cost — keep the two bases separate.",
            "Marked up m% then discounted d%: net effect \\( m - d - \\frac{md}{100}\\% \\) on cost.",
            "Two items sold at the same price, one at +x% and one at −x%: always a net <b>loss</b> of \\( \\frac{x^2}{100}\\% \\)."
          ] },
          { t: "warn", x: "“Profit % on cost” and “profit % on selling price” are different — GMAT wording chooses the base deliberately, so read which one is meant." },
          { t: "h", x: "Keep three prices apart" },
          { t: "table", head: ["Price", "Meaning", "Percentages measured on it"], rows: [
            ["CP", "cost price — what the seller paid", "profit % and loss %"],
            ["MP", "marked / list price — the tag", "discount %"],
            ["SP", "selling price — what the buyer pays", "—"]
          ] },
          { t: "formula", x: "\\begin{gathered}\\text{SP}=\\text{MP}\\left(1-\\tfrac{d}{100}\\right) \\\\[4pt] \\text{SP}=\\text{CP}\\left(1+\\tfrac{p}{100}\\right)\\end{gathered}" },
          { t: "tip", x: "Set <b>CP = 100</b> and walk the story forward. Mark up 40% to 140, take 25% off to 105 — the profit is 5%, read straight off the number. This works because every quantity in the topic is a percentage." },
          { t: "ul", items: [
            "<b>Successive discounts multiply</b>: 20% then 10% off is \\( 0.8\\times0.9=0.72 \\), a single discount of 28% — never 30%.",
            "A dealer using a short weight of w grams per kilo makes a profit of \\( \\frac{1000-w}{w}\\times100\\% \\) even when selling at cost.",
            "If SP is the same for two items at \\( +x\\% \\) and \\( -x\\% \\), the net is always a <b>loss</b> of \\( \\frac{x^{2}}{100}\\% \\)."
          ] },
          { t: "eg",
            q: "A shopkeeper marks an item 40% above cost and then allows a 25% discount. What is the profit percent?",
            choices: ["5%", "10%", "15%", "20%", "25%"],
            ans: "A",
            why: "Take CP = 100. The marked price is 140, and a 25% discount gives \\(140\\times0.75=105\\). Profit is 5 on a cost of 100, so 5%."
          }
        ]
      },
      {
        id: "qt-interest",
        title: "Simple & Compound Interest",
        mins: 4,
        blocks: [
          { t: "p", x: "Simple interest is a flat charge on the original principal each year:" },
          { t: "formula", x: "\\text{SI} = \\dfrac{P \\cdot R \\cdot T}{100}" },
          { t: "p", x: "Compound interest charges on the growing balance, so it snowballs:" },
          { t: "formula", x: "A = P\\left(1 + \\dfrac{R}{100}\\right)^{T}" },
          { t: "ul", items: [
            "Compounded k times a year: \\( A = P\\left(1 + \\frac{R}{100k}\\right)^{kT} \\).",
            "Over 2 years, CI beats SI by exactly \\( P\\left(\\frac{R}{100}\\right)^2 \\) — a fast shortcut.",
            "CI for the <b>first</b> year equals SI for that year; the gap only opens from year two."
          ] },
          { t: "tip", x: "Percentage growth, population, and appreciation/depreciation all use the compound formula — same machinery, different story." },
          { t: "h", x: "Reading the compounding period" },
          { t: "p", x: "Whenever interest compounds more often than yearly, <b>divide the rate</b> and <b>multiply the periods</b>. At 10% a year compounded half-yearly for 2 years, use 5% for 4 periods — not 10% for 2." },
          { t: "h", x: "Shortcuts worth having" },
          { t: "ul", items: [
            "Compound interest for 2 years is the same as two successive percentage rises, so the total growth is \\( 2R+\\frac{R^{2}}{100}\\ \\% \\).",
            "<b>Rule of 72</b>: money roughly doubles in \\( 72/R \\) years. At 8%, about 9 years.",
            "Halving the rate and doubling the time gives the same <b>simple</b> interest but <b>less</b> compound interest — compounding rewards rate over time in the short run."
          ] },
          { t: "warn", x: "Simple interest is linear and compound interest is exponential, so the two are <b>equal after one period</b> and only diverge afterwards. A question comparing them over one year is testing whether you know they agree." },
          { t: "eg",
            q: "$5,000 is invested at 10% per annum compounded annually. How much interest is earned over 2 years?",
            choices: ["$1,000", "$1,025", "$1,050", "$1,100", "$1,210"],
            ans: "C",
            why: "\\(A = 5000(1.1)^{2} = 6050\\), so the interest is $1,050. The $1,000 option is the simple-interest figure, which is what you get by forgetting the second year's interest on interest."
          }
        ]
      },
      {
        id: "qt-speed",
        title: "Speed, Time & Distance",
        mins: 3,
        blocks: [
          { t: "formula", x: "\\text{distance} = \\text{speed} \\times \\text{time}" },
          { t: "ul", items: [
            "Convert km/h → m/s by \\( \\times\\frac{5}{18} \\); m/s → km/h by \\( \\times\\frac{18}{5} \\).",
            "<b>Average speed</b> is total distance ÷ total time — for equal distances at speeds x and y it's \\( \\frac{2xy}{x+y} \\) (the harmonic mean), <b>not</b> \\( \\frac{x+y}{2} \\).",
            "Relative speed: same direction ⟹ subtract; opposite directions ⟹ add.",
            "Boats: downstream speed = b + s, upstream = b − s (b = boat, s = stream)."
          ] },
          { t: "eg",
            q: "A car covers a distance at 40 km/h and returns along the same road at 60 km/h. What is its average speed for the whole trip?",
            choices: ["48 km/h", "50 km/h", "52 km/h", "45 km/h", "55 km/h"],
            ans: "A",
            why: "Equal distances, so use the harmonic mean: 2·40·60 / (40+60) = 4800/100 = 48 km/h — not the tempting 50."
          },
          { t: "h", x: "Fix the units first" },
          { t: "p", x: "Mixed units are the most common error here. Convert everything before you set up: km/h to m/s is \\( \\times\\tfrac{5}{18} \\), minutes to hours is \\( \\div60 \\)." },
          { t: "h", x: "The inverse-proportion trick" },
          { t: "p", x: "Over a <b>fixed distance</b>, speed and time are inversely proportional. If two speeds are in the ratio 3 : 4, the times are in the ratio 4 : 3 — which answers most “how much earlier did he arrive?” questions without ever finding the distance." },
          { t: "h", x: "Relative speed" },
          { t: "ul", items: [
            "Approaching each other: add the speeds. They meet after \\( \\frac{D}{v_1+v_2} \\).",
            "Chasing in the same direction: subtract. The gap closes at \\( v_1-v_2 \\).",
            "A train passing a <b>pole</b> covers its own length; passing a <b>platform or another train</b> it covers the sum of the two lengths."
          ] },
          { t: "warn", x: "Never average two speeds directly. For equal distances the answer is the <b>harmonic</b> mean \\( \\frac{2xy}{x+y} \\), which is always less than \\( \\frac{x+y}{2} \\) — because more time is spent at the slower speed." }
        ]
      },
      {
        id: "qt-work",
        title: "Work & Rate (Pipes & Cisterns)",
        mins: 4,
        blocks: [
          { t: "p", x: "The one idea: work in terms of <b>rate = 1 job per unit time</b>. If A finishes in a days, A's rate is 1/a per day; rates simply add." },
          { t: "formula", x: "\\dfrac{1}{T} = \\dfrac{1}{a} + \\dfrac{1}{b} \\quad\\Rightarrow\\quad T = \\dfrac{ab}{a+b}" },
          { t: "ul", items: [
            "Scaling: \\( \\frac{M_1 D_1 H_1}{W_1} = \\frac{M_2 D_2 H_2}{W_2} \\) (men · days · hours per unit work stays constant).",
            "<b>Pipes & cisterns</b> is the same maths: an inlet adds a positive rate, a leak/outlet subtracts.",
            "A handy trick: set total work = LCM of the given times, so each worker's rate is a whole number."
          ] },
          { t: "h", x: "The LCM method, worked" },
          { t: "p", x: "A finishes in 12 days and B in 18. Set the job to \\( \\mathrm{LCM}(12,18)=36 \\) units. Then A does 3 units a day and B does 2, so together they do 5 — and the job takes \\( 36/5=7.2 \\) days. Whole numbers throughout, no fractions to add." },
          { t: "h", x: "Common variations" },
          { t: "ul", items: [
            "<b>Alternate days</b>: compute one two-day block (here 3 + 2 = 5 units), see how many blocks fit, then finish the remainder by hand.",
            "<b>Someone leaves partway</b>: count the units done before the change, subtract, and divide the remainder by the new combined rate.",
            "<b>Efficiency</b>: if A is twice as fast as B, their times are in the ratio 1 : 2. Efficiency and time are inversely proportional.",
            "<b>Leaks</b>: a leak is simply a negative rate — subtract it before dividing."
          ] },
          { t: "warn", x: "<b>Rates add; times do not.</b> Two workers who each take 6 days do not take 3 days each — they take 3 days together, and that only follows after adding \\( \\tfrac16+\\tfrac16 \\)." },
          { t: "eg",
            q: "A can complete a job in 12 days and B can complete it in 18 days. Working together, how long do they take?",
            choices: ["6 days", "7.2 days", "7.5 days", "9 days", "15 days"],
            ans: "B",
            why: "Rates add: \\(\\tfrac1{12}+\\tfrac1{18}=\\tfrac{3}{36}+\\tfrac{2}{36}=\\tfrac{5}{36}\\), so the job takes \\(36/5 = 7.2\\) days. The 15-day option comes from averaging the two times, which is never valid."
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
        mins: 4,
        blocks: [
          { t: "p", x: "A <b>factor</b> (divisor) of N divides N with no remainder; a <b>multiple</b> of N is N times an integer. Every question about factors, multiples, LCM or GCD is really a question about one thing — the <b>prime factorization</b>." },
          { t: "formula", x: "N = p^{a}\\,q^{b}\\,r^{c}\\ \\ (p,q,r \\text{ distinct primes})" },
          { t: "h", x: "What the factorization tells you" },
          { t: "ul", items: [
            "<b>Number of factors</b> = \\( (a+1)(b+1)(c+1) \\). Add one to each exponent and multiply — you never list factors again.",
            "<b>GCD</b>: take each shared prime to its <b>lowest</b> power. <b>LCM</b>: take every prime to its <b>highest</b> power.",
            "For two numbers only: \\( \\text{LCM}(a,b)\\times\\text{GCD}(a,b) = a\\times b \\).",
            "N is a <b>perfect square</b> exactly when every exponent is even — which is why perfect squares are the only numbers with an <b>odd</b> number of factors (one factor pairs with itself)."
          ] },
          { t: "tip", x: "Counting multiples in a range: the number of multiples of k from 1 to N is \\( \\lfloor N/k \\rfloor \\). Between two bounds, subtract: multiples of 7 from 100 to 500 = \\( \\lfloor 500/7 \\rfloor - \\lfloor 99/7 \\rfloor = 71 - 14 = 57 \\)." },
          { t: "h", x: "Tricks worth memorising" },
          { t: "ul", items: [
            "The product of any <b>k consecutive integers</b> is divisible by \\( k! \\). So any 3 in a row are divisible by 6, any 4 in a row by 24.",
            "Among any k consecutive integers there is <b>exactly one</b> multiple of k.",
            "<b>Trailing zeros of</b> \\( n! \\) = \\( \\lfloor n/5 \\rfloor + \\lfloor n/25 \\rfloor + \\lfloor n/125 \\rfloor + \\dots \\) — count the 5s, since 2s are always plentiful.",
            "If a divides b and b divides c, then a divides c."
          ] },
          { t: "warn", x: "Divisible by a <b>and</b> by b does not mean divisible by ab — only when a and b share no factor. 12 is divisible by 4 and by 6, but not by 24. Use the <b>LCM</b> (12), never the product." },
          { t: "eg",
            q: "How many positive factors does 360 have?",
            choices: ["12", "18", "20", "24", "36"],
            ans: "D",
            why: "\\(360 = 2^3\\cdot3^2\\cdot5^1\\). Add one to each exponent and multiply: \\((3+1)(2+1)(1+1) = 4\\cdot3\\cdot2 = 24\\)."
          }
        ]
      },
      {
        id: "np-primes",
        title: "Prime Numbers & Factorization",
        mins: 3,
        blocks: [
          { t: "p", x: "A <b>prime</b> has exactly two positive factors: 1 and itself. Two facts win most prime questions on their own: <b>1 is not prime</b>, and <b>2 is the only even prime</b>." },
          { t: "p", x: "Know these cold — the primes below 50:" },
          { t: "formula", x: "\\begin{gathered}2,\\ 3,\\ 5,\\ 7,\\ 11,\\ 13,\\ 17,\\ 19 \\\\[4pt] 23,\\ 29,\\ 31,\\ 37,\\ 41,\\ 43,\\ 47\\end{gathered}" },
          { t: "h", x: "Testing whether N is prime" },
          { t: "p", x: "Divide only by primes up to \\( \\sqrt{N} \\). If none divides N, N is prime. To test 187: \\( \\sqrt{187}\\approx13.7 \\), so try 2, 3, 5, 7, 11, 13 — and \\( 187 = 11\\times17 \\), so it is not prime." },
          { t: "h", x: "The parity trick" },
          { t: "ul", items: [
            "If two primes sum to an <b>odd</b> number, one of them <b>must be 2</b> (odd + odd = even).",
            "If two primes sum to an even number greater than 4, <b>both are odd</b>.",
            "If a prime p divides a product ab, then p divides a or p divides b — the fact behind unique factorization."
          ] },
          { t: "tip", x: "\"Distinct prime factors\" ≠ \"prime factors with multiplicity\". \\( 72 = 2^3\\cdot3^2 \\) has <b>2 distinct</b> prime factors but <b>5</b> prime factors counted with repetition. Read which one the question wants." },
          { t: "warn", x: "Do not assume a variable described only as \"a prime number\" is odd. Testing p = 2 is how most \"must be true\" prime questions are broken." },
          { t: "eg",
            q: "If p and q are prime numbers and p + q = 13, what is the value of pq?",
            choices: ["22", "26", "36", "40", "42"],
            ans: "A",
            why: "13 is odd, so one prime must be even — and 2 is the only even prime. Then q = 11, and \\(pq = 2\\times11 = 22\\)."
          }
        ]
      },
      {
        id: "np-divisibility",
        title: "Divisibility & Remainders",
        mins: 4,
        blocks: [
          { t: "p", x: "This is the single most-tested number topic on the exam. Everything flows from one line — the <b>division algorithm</b>:" },
          { t: "formula", x: "N = dq + r, \\qquad 0 \\le r &lt; d" },
          { t: "p", x: "\"When n is divided by 7 the remainder is 3\" is not a sentence to think about — it is an <b>equation to write down</b>: \\( n = 7k + 3 \\). Substitute it and the question usually collapses." },
          { t: "h", x: "Divisibility tests" },
          { t: "table", head: ["Divisor", "Test"], rows: [
            ["2", "last digit is even"],
            ["3", "digit sum divisible by 3"],
            ["4", "last two digits form a multiple of 4"],
            ["5", "last digit 0 or 5"],
            ["6", "passes both the 2 test and the 3 test"],
            ["8", "last three digits form a multiple of 8"],
            ["9", "digit sum divisible by 9"],
            ["11", "alternating digit sum is 0 or a multiple of 11"]
          ] },
          { t: "h", x: "Remainder arithmetic" },
          { t: "ul", items: [
            "Remainders <b>add and multiply</b>: the remainder of a sum is the remainder of the sum of remainders (then reduce). Same for products.",
            "<b>Negative remainders</b> are the great shortcut: 29 leaves −1 with divisor 30, so \\( 29^{100} \\) leaves \\( (-1)^{100} = 1 \\).",
            "<b>Cyclicity</b>: powers repeat. Find the cycle length, reduce the exponent by that length, and read off the answer.",
            "Smallest number leaving remainder r for several divisors = \\( \\text{LCM} \\times k + r \\)."
          ] },
          { t: "h", x: "Units digits" },
          { t: "table", head: ["Last digit of base", "Cycle", "Length"], rows: [
            ["0, 1, 5, 6", "never changes", "1"],
            ["4, 9", "4→6, 9→1", "2"],
            ["2, 3, 7, 8", "e.g. 2: 2, 4, 8, 6", "4"]
          ] },
          { t: "tip", x: "For a cycle of length 4, divide the exponent by 4 and use the remainder — a remainder of 0 means take the <b>last</b> entry in the cycle, not the first." },
          { t: "warn", x: "The remainder is always <b>less than the divisor</b> and never negative in the final answer. If your working gives −1 with divisor 5, the remainder is 4." },
          { t: "eg",
            q: "What is the remainder when \\(3^{47}\\) is divided by 5?",
            choices: ["1", "2", "3", "4", "0"],
            ans: "B",
            why: "Powers of 3 leave remainders 3, 4, 2, 1 and then repeat — a cycle of length 4. \\(47 = 4(11)+3\\), so \\(3^{47}\\) matches the third entry: remainder 2."
          }
        ]
      },
      {
        id: "np-parity",
        title: "Odd / Even & Sign Rules",
        mins: 3,
        blocks: [
          { t: "p", x: "Parity questions look like algebra but are answered by a two-line table. Learn the table and you never test numbers." },
          { t: "table", head: ["Operation", "Result"], rows: [
            ["even ± even", "even"],
            ["odd ± odd", "even"],
            ["odd ± even", "odd"],
            ["even × anything", "even"],
            ["odd × odd", "odd"]
          ] },
          { t: "ul", items: [
            "A product is <b>odd only if every factor is odd</b>. One even factor makes it even.",
            "The parity of a long sum is decided by <b>how many odd terms</b> it has: an even count of odds gives an even total.",
            "\\( n \\) and \\( n^2 \\) always share parity, so \\( n^2 \\) odd ⟹ n odd.",
            "The sum of any two consecutive integers is odd; the sum of any three is divisible by 3."
          ] },
          { t: "h", x: "Sign rules" },
          { t: "ul", items: [
            "A product or quotient is <b>positive</b> when it has an <b>even number of negative factors</b>, negative when odd.",
            "An even power is never negative: \\( x^{2} \\ge 0 \\) for every real x — the fact behind most \"must be true\" answers.",
            "An odd power keeps the sign of its base."
          ] },
          { t: "warn", x: "\"Positive\" and \"non-negative\" are different, and 0 is <b>even</b>. Zero is the counterexample the exam expects you to miss: it is even, it is neither positive nor negative, and it makes any product 0." },
          { t: "eg",
            q: "If a and b are integers and ab is odd, which of the following must be true?",
            choices: ["a + b is odd", "a + b is even", "a − b is odd", "ab + 1 is odd", "a is even"],
            ans: "B",
            why: "A product is odd only when both factors are odd. Odd + odd = even, so a + b must be even."
          }
        ]
      },
      {
        id: "np-fractions",
        title: "Fractions & Decimals",
        mins: 4,
        blocks: [
          { t: "p", x: "Fraction questions reward comparison skill, not computation. Three tools cover nearly all of them." },
          { t: "h", x: "1. Cross-multiply to compare" },
          { t: "p", x: "For positive denominators, \\( \\frac{a}{b} \\) vs \\( \\frac{c}{d} \\) is decided by comparing \\( ad \\) vs \\( bc \\). No common denominator needed." },
          { t: "h", x: "2. Compare to a benchmark" },
          { t: "p", x: "Sort each fraction against \\( \\tfrac12 \\) or 1 first. \\( \\tfrac{7}{15} \\) is under a half, \\( \\tfrac{9}{17} \\) is over — done, no arithmetic." },
          { t: "h", x: "3. The add-to-both trick" },
          { t: "p", x: "Adding the same positive amount to numerator and denominator moves a fraction <b>toward 1</b>:" },
          { t: "formula", x: "\\begin{gathered}\\frac{a}{b} &lt; \\frac{a+x}{b+x} \\quad \\text{ when } a&lt;b \\\\[4pt] \\frac{a}{b} &gt; \\frac{a+x}{b+x} \\quad \\text{ when } a&gt;b\\end{gathered}" },
          { t: "h", x: "Decimals" },
          { t: "ul", items: [
            "A fraction in <b>lowest terms</b> terminates exactly when its denominator's only prime factors are <b>2 and 5</b>. Otherwise it repeats.",
            "Same numerator, bigger denominator ⟹ smaller fraction.",
            "To divide by a decimal, shift both decimal points until the divisor is a whole number.",
            "Keep the fraction form as long as possible — \\( \\tfrac38 \\times 240 \\) is instant, 0.375 × 240 is not."
          ] },
          { t: "warn", x: "You may cancel a common <b>factor</b> across a fraction, never a common <b>term</b>. \\( \\frac{x+3}{x+5} \\) does not reduce to \\( \\frac{3}{5} \\)." },
          { t: "eg",
            q: "Which of the following fractions is equivalent to a terminating decimal?",
            choices: ["1/6", "1/7", "1/12", "1/15", "1/16"],
            ans: "E",
            why: "A fraction terminates only when the reduced denominator is built from 2s and 5s alone. \\(16 = 2^4\\) qualifies; 6, 7, 12 and 15 all carry a factor of 3 or 7."
          },
          { t: "h", x: "Two faster comparisons" },
          { t: "ul", items: [
            "<b>When both are close to 1</b>, compare the gaps instead. \\( \\tfrac78 \\) is \\( \\tfrac18 \\) short of 1 and \\( \\tfrac9{10} \\) is only \\( \\tfrac1{10} \\) short, so \\( \\tfrac9{10} \\) is the larger.",
            "<b>When both are close to 0</b>, the same trick runs the other way — the one with the smaller value is the one further from the benchmark."
          ] },
          { t: "h", x: "Repeating decimals" },
          { t: "p", x: "A repeating block over the same number of nines converts straight back: \\( 0.\\overline{36}=\\tfrac{36}{99}=\\tfrac{4}{11} \\), and \\( 0.\\overline{7}=\\tfrac79 \\). One digit repeating gives ninths, two digits give ninety-ninths." },
          { t: "tip", x: "Keep numbers as fractions until the last possible moment. \\( \\tfrac13 \\) is exact and 0.333 is not, and rounding early is how a correct method lands between two answer choices." }
        ]
      },
      {
        id: "np-exponents",
        title: "Exponent Rules",
        mins: 4,
        blocks: [
          { t: "p", x: "Every exponent rule requires either the <b>same base</b> or the <b>same exponent</b>. When an expression looks unusable, your job is to rewrite it until one of those matches." },
          { t: "formula", x: "\\begin{gathered}a^m\\cdot a^n=a^{m+n} \\qquad \\frac{a^m}{a^n}=a^{m-n} \\\\[4pt] (a^m)^n=a^{mn} \\qquad (ab)^n=a^n b^n\\end{gathered}" },
          { t: "ul", items: [
            "\\( a^{0}=1 \\) for any \\( a\\neq0 \\); \\( a^{-n}=\\frac{1}{a^{n}} \\) — a negative exponent flips, it does not make the value negative.",
            "Match bases to solve: \\( 4^{x}=8 \\Rightarrow 2^{2x}=2^{3} \\Rightarrow x=\\tfrac32 \\).",
            "\\( 2^{10}=1024\\approx10^{3} \\) — the estimation anchor for any \"roughly how big\" question."
          ] },
          { t: "h", x: "The two tricks that carry the topic" },
          { t: "ol", items: [
            "<b>Adding equal powers multiplies the base.</b> \\( 2^{n}+2^{n}=2^{n+1} \\), and \\( 3^{n}+3^{n}+3^{n}=3^{n+1} \\). Sums of powers are never left as sums.",
            "<b>Factor out the smallest power.</b> \\( 2^{20}-2^{18}=2^{18}(2^{2}-1)=3\\cdot2^{18} \\). Whenever powers are added or subtracted, this is the move."
          ] },
          { t: "warn", x: "Three near-universal traps: \\( (a+b)^{2}\\neq a^{2}+b^{2} \\); \\( (-2)^{4}=16 \\) but \\( -2^{4}=-16 \\) (the exponent binds tighter than the sign); and for \\( 0&lt;x&lt;1 \\), raising to a higher power makes the value <b>smaller</b>, so \\( x^{3}&lt;x^{2}&lt;x \\)." },
          { t: "eg",
            q: "\\(\\dfrac{2^{20}-2^{18}}{2^{18}} = \\)",
            choices: ["2", "3", "4", "\\(2^{2}\\)", "\\(2^{38}\\)"],
            ans: "B",
            why: "Factor the smaller power out of the numerator: \\(2^{18}(2^{2}-1)\\). The \\(2^{18}\\) cancels, leaving \\(4-1=3\\)."
          },
          { t: "h", x: "Comparing powers with different bases" },
          { t: "p", x: "You cannot compare \\( 2^{30} \\) and \\( 3^{20} \\) directly, so force a common <b>exponent</b> by factoring it out:" },
          { t: "formula", x: "\\begin{gathered}2^{30}=(2^{3})^{10}=8^{10} \\\\[4pt] 3^{20}=(3^{2})^{10}=9^{10}\\end{gathered}" },
          { t: "p", x: "Now the comparison is trivial — \\( 9^{10} \\) wins, so \\( 3^{20}&gt;2^{30} \\). Look for the greatest common factor of the two exponents and pull it out." },
          { t: "tip", x: "Every power of 2 up to \\( 2^{10}=1024 \\) is worth knowing by heart, along with \\( 3^{5}=243 \\), \\( 5^{4}=625 \\) and \\( 7^{3}=343 \\). Recognising a number as a power is what turns a hard exponent question into a one-liner." }
        ]
      },
      {
        id: "np-roots",
        title: "Roots, Radicals & Estimation",
        mins: 4,
        blocks: [
          { t: "p", x: "A root is a fractional exponent, so every exponent rule still applies:" },
          { t: "formula", x: "\\begin{gathered}a^{m/n}=\\sqrt[n]{a^{m}} \\qquad \\sqrt{ab}=\\sqrt a\\,\\sqrt b \\\\[4pt] \\sqrt{\\tfrac ab}=\\frac{\\sqrt a}{\\sqrt b}\\end{gathered}" },
          { t: "ul", items: [
            "<b>Simplify by pulling out perfect squares</b>: \\( \\sqrt{72}=\\sqrt{36\\cdot2}=6\\sqrt2 \\). Always strip the largest square first.",
            "<b>Rationalize</b> with the conjugate: \\( \\frac{1}{\\sqrt5-\\sqrt3}\\times\\frac{\\sqrt5+\\sqrt3}{\\sqrt5+\\sqrt3}=\\frac{\\sqrt5+\\sqrt3}{2} \\).",
            "Roots do <b>not</b> distribute over addition: \\( \\sqrt{a+b}\\neq\\sqrt a+\\sqrt b \\).",
            "Worth knowing: \\( \\sqrt2\\approx1.41 \\), \\( \\sqrt3\\approx1.73 \\), \\( \\sqrt5\\approx2.24 \\)."
          ] },
          { t: "h", x: "Bracketing — the estimation trick" },
          { t: "p", x: "To place \\( \\sqrt{50} \\), find the perfect squares either side: \\( 49&lt;50&lt;64 \\), so the value sits just above 7. That is almost always precise enough to pick an answer." },
          { t: "h", x: "Scientific notation" },
          { t: "p", x: "Write \\( a\\times10^{n} \\) with \\( 1\\le a&lt;10 \\). Multiplying adds the exponents, dividing subtracts them — so \\( (3\\times10^{5})(4\\times10^{-2}) = 12\\times10^{3} = 1.2\\times10^{4} \\)." },
          { t: "warn", x: "\\( \\sqrt{x^{2}}=|x| \\), not x. And the radical sign means the <b>positive</b> root only: \\( \\sqrt{9}=3 \\). It is the equation \\( x^{2}=9 \\) that has two solutions, \\( x=\\pm3 \\)." },
          { t: "tip", x: "For \\( 0&lt;x&lt;1 \\) a root makes a number <b>bigger</b>: \\( \\sqrt{0.25}=0.5 \\). Sorting \\( x,\\ x^{2},\\ \\sqrt x \\) is a favourite Data Sufficiency trap." },
          { t: "eg",
            q: "If \\(\\sqrt{x}=8\\), then \\(\\sqrt[3]{x}=\\)",
            choices: ["2", "4", "8", "16", "64"],
            ans: "B",
            why: "Square both sides: \\(x = 64\\). Then \\(\\sqrt[3]{64}=4\\)."
          },
          { t: "h", x: "Comparing surds" },
          { t: "p", x: "To compare two positive roots, <b>square them</b> — squaring preserves the order for positive numbers. To place \\( 3\\sqrt5 \\) against \\( 2\\sqrt{12} \\), square to get 45 against 48, so \\( 2\\sqrt{12} \\) is larger." },
          { t: "ul", items: [
            "\\( \\sqrt a+\\sqrt b \\) is always <b>greater</b> than \\( \\sqrt{a+b} \\) for positive a and b — the square of the left side carries an extra \\( 2\\sqrt{ab} \\).",
            "A root sits between the two nearest perfect squares, which is usually enough: \\( \\sqrt{30} \\) is between 5 and 6, and nearer 5.5.",
            "Cube roots grow much more slowly: \\( \\sqrt[3]{1000}=10 \\), so anything under a thousand has a cube root under ten."
          ] },
          { t: "tip", x: "On “which is closest to” questions, round every root to one decimal and compare. The answer choices are spaced so that a rough value decides it, and exactness is wasted effort." }
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
        mins: 5,
        blocks: [
          { t: "p", x: "Three identities account for almost every factoring question. You should recognise them the instant they appear, in either direction." },
          { t: "formula", x: "\\begin{gathered}a^{2}-b^{2}=(a-b)(a+b) \\\\[4pt] (a\\pm b)^{2}=a^{2}\\pm2ab+b^{2}\\end{gathered}" },
          { t: "formula", x: "a^{3}\\pm b^{3}=(a\\pm b)(a^{2}\\mp ab+b^{2})" },
          { t: "h", x: "Difference of squares as a calculator" },
          { t: "p", x: "Any \"big number squared minus big number squared\" is a two-second question: \\( 87^{2}-13^{2}=(87-13)(87+13)=74\\times100=7400 \\). The exam writes these precisely to punish anyone who starts multiplying." },
          { t: "h", x: "Symmetric expressions" },
          { t: "p", x: "If you are given \\( a+b \\) and \\( ab \\), you can reach almost anything without finding a and b:" },
          { t: "ul", items: [
            "\\( a^{2}+b^{2}=(a+b)^{2}-2ab \\)",
            "\\( (a-b)^{2}=(a+b)^{2}-4ab \\)",
            "\\( x+\\frac1x=k \\ \\Rightarrow\\ x^{2}+\\frac1{x^{2}}=k^{2}-2 \\) — square both sides and subtract the 2 cross-terms."
          ] },
          { t: "tip", x: "Always take out the <b>common factor first</b>. \\( 3x^{2}-27 = 3(x^{2}-9) = 3(x-3)(x+3) \\); factoring straight away hides the difference of squares." },
          { t: "warn", x: "Never cancel a factor that could be zero. Going from \\( x(x-2)=x \\) to \\( x-2=1 \\) silently throws away the root \\( x=0 \\). Move everything to one side instead." },
          { t: "eg",
            q: "\\(87^{2}-13^{2}=\\)",
            choices: ["5476", "6400", "7400", "7600", "10 000"],
            ans: "C",
            why: "Difference of squares: \\((87-13)(87+13) = 74 \\times 100 = 7400\\)."
          },
          { t: "h", x: "A factoring checklist" },
          { t: "ol", items: [
            "Take out the <b>common factor</b> first, always.",
            "Check for a <b>difference of squares</b> — two terms, both squares, a minus between them.",
            "For three terms, look for the pair whose <b>product is the constant and sum is the middle coefficient</b>.",
            "For four terms, try <b>grouping</b> them in pairs and factoring each pair.",
            "If it still resists, try a <b>substitution</b>: \\( x^{4}-5x^{2}+4 \\) is a quadratic in \\( t=x^{2} \\)."
          ] },
          { t: "tip", x: "To simplify an algebraic fraction, factor the top and the bottom completely and then cancel. Attempting to cancel before factoring is what produces the classic error of striking out a term instead of a factor." },
          { t: "eg",
            q: "If \\(x + \\dfrac{1}{x} = 5\\), what is the value of \\(x^{2} + \\dfrac{1}{x^{2}}\\)?",
            choices: ["10", "23", "25", "27", "30"],
            ans: "B",
            why: "Square both sides: \\(x^{2} + 2 + \\dfrac{1}{x^{2}} = 25\\), because the cross terms give \\(2 \\cdot x \\cdot \\tfrac1x = 2\\). Subtracting the 2 leaves 23. The trap is 25, which is what you get by squaring and forgetting the cross term."
          }
        ]
      },
      {
        id: "ag-linear",
        title: "Linear Equations",
        mins: 4,
        blocks: [
          { t: "p", x: "Solving is mechanical; the marks are lost in <b>translation</b>. Build the equation from the sentence one phrase at a time." },
          { t: "table", head: ["Words", "Algebra"], rows: [
            ["is, was, will be", "="],
            ["of", "×"],
            ["more than, increased by", "+"],
            ["less than, decreased by", "− (order flips)"],
            ["twice, doubled", "2×"],
            ["per, for each", "÷"],
            ["a number", "x"]
          ] },
          { t: "warn", x: "\"5 less than x\" is \\( x-5 \\), never \\( 5-x \\). Subtraction and division reverse the reading order; addition and multiplication do not." },
          { t: "h", x: "Working cleanly" },
          { t: "ul", items: [
            "Clear fractions first by multiplying every term by the LCD — one step removes all the denominators.",
            "Collect variables on the side that keeps the coefficient positive; it prevents most sign errors.",
            "Consecutive integers are \\( n,\\ n+1,\\ n+2 \\); consecutive even or odd integers are \\( n,\\ n+2,\\ n+4 \\).",
            "Substitute your answer back into the <b>original sentence</b>, not your equation — that catches translation errors, which is where the mistake usually is."
          ] },
          { t: "tip", x: "If the question asks for an <b>expression</b> such as \\( 2x+3y \\) rather than for x and y separately, look for a combination shortcut before solving. The exam sets these up deliberately." },
          { t: "eg",
            q: "Four less than three times a number is 17. What is the number?",
            choices: ["5", "6", "7", "9", "21"],
            ans: "C",
            why: "\"Four less than three times a number\" is \\(3n-4\\), so \\(3n-4=17\\), \\(3n=21\\), \\(n=7\\). Note the order: it is not \\(4-3n\\)."
          },
          { t: "h", x: "Sum and difference" },
          { t: "p", x: "When a word problem gives you the <b>total</b> and the <b>difference</b> of two quantities, you never need to set up simultaneous equations:" },
          { t: "formula", x: "\\begin{gathered}x=\\frac{S+D}{2} \\\\[4pt] y=\\frac{S-D}{2}\\end{gathered}" },
          { t: "p", x: "Two numbers summing to 50 and differing by 12 are therefore 31 and 19, straight off." },
          { t: "tip", x: "Name your variable after the thing the question <b>asks for</b>. Solving neatly for x and then realising the question wanted \\( 2x+1 \\) is one of the most common ways to lose a question you understood completely." },
          { t: "warn", x: "Check the answer against the original sentence, not against your equation. If you mistranslated, your equation will happily confirm the mistranslation." }
        ]
      },
      {
        id: "ag-systems",
        title: "Systems of Equations",
        mins: 3,
        blocks: [
          { t: "p", x: "Two unknowns generally need two independent equations. <b>Elimination</b> is faster when coefficients line up; <b>substitution</b> is faster when one variable is already isolated." },
          { t: "h", x: "The symmetry shortcut" },
          { t: "p", x: "When the coefficients mirror each other, adding or subtracting the equations gives you the combination directly — far quicker than solving for each variable:" },
          { t: "formula", x: "\\begin{gathered}\\begin{aligned}3x+2y&=17\\\\ 2x+3y&=13\\end{aligned} \\\\[4pt] \\Rightarrow\\ 5x+5y=30 \\ \\Rightarrow\\ x+y=6\\end{gathered}" },
          { t: "p", x: "Subtracting instead gives \\( x-y=4 \\). Between them you have both x and y, with no substitution at all." },
          { t: "h", x: "When two equations are not enough" },
          { t: "ul", items: [
            "<b>No solution</b>: same coefficients, different constant — \\( 2x+3y=7 \\) and \\( 4x+6y=15 \\) describe parallel lines.",
            "<b>Infinitely many</b>: one equation is a multiple of the other — \\( 2x+3y=7 \\) and \\( 4x+6y=14 \\) are the same line.",
            "Three unknowns need three independent equations — <b>unless</b> the question asks only for a combination such as \\( x+y+z \\)."
          ] },
          { t: "warn", x: "In Data Sufficiency, \"two equations in two unknowns\" is <b>not</b> automatically sufficient. Check that neither is a multiple of the other, and remember a non-linear pair such as \\( x+y=5 \\), \\( xy=6 \\) can give two valid solutions." },
          { t: "tip", x: "The reverse trap is just as common: one equation can be sufficient when only a combination is asked for. \\( 3x+3y=12 \\) settles \\( x+y \\) completely, even though x and y stay unknown." },
          { t: "eg",
            q: "If 3x + 2y = 17 and 2x + 3y = 13, what is the value of x + y?",
            choices: ["4", "5", "6", "8", "10"],
            ans: "C",
            why: "Add the equations: \\(5x+5y=30\\), so \\(x+y=6\\). Solving for x and y individually is unnecessary work."
          }
        ]
      },
      {
        id: "ag-quadratic",
        title: "Quadratic Equations",
        mins: 3,
        blocks: [
          { t: "p", x: "First move, always: get everything on one side so the equation reads \\( ax^{2}+bx+c=0 \\). Only then can the zero-product rule apply." },
          { t: "formula", x: "x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}" },
          { t: "h", x: "Factor before you use the formula" },
          { t: "p", x: "To factor \\( x^{2}+bx+c \\), find two numbers whose <b>product is c</b> and whose <b>sum is b</b>. For \\( x^{2}-7x+12 \\): −3 and −4, giving \\( (x-3)(x-4) \\). Nearly every exam quadratic factors — reach for the formula only when it plainly does not." },
          { t: "h", x: "Answering without solving" },
          { t: "p", x: "For \\( ax^{2}+bx+c=0 \\) with roots \\( r_1, r_2 \\):" },
          { t: "formula", x: "r_1+r_2=-\\frac{b}{a} \\qquad r_1 r_2=\\frac{c}{a}" },
          { t: "p", x: "If the question wants the sum or product of the roots, that is the whole answer — no factoring required." },
          { t: "ul", items: [
            "The <b>discriminant</b> \\( b^{2}-4ac \\) tells you the number of real roots: positive → two, zero → one, negative → none.",
            "Disguised quadratics are common: \\( x^{4}-5x^{2}+4=0 \\) becomes a quadratic in \\( x^{2} \\).",
            "A perfect-square trinomial signals a repeated root: \\( x^{2}-6x+9=(x-3)^{2} \\)."
          ] },
          { t: "warn", x: "Two habits lose marks. <b>Never divide both sides by a variable</b> — from \\( x^{2}=5x \\), dividing by x loses the root \\( x=0 \\). And taking a square root introduces <b>two</b> cases: \\( (x-1)^{2}=9 \\) gives \\( x=4 \\) and \\( x=-2 \\)." },
          { t: "eg",
            q: "If \\(x^{2}=5x\\), which of the following gives all possible values of x?",
            choices: ["5 only", "0 only", "0 and 5", "−5 and 5", "0, 5 and −5"],
            ans: "C",
            why: "Move everything across: \\(x^{2}-5x=0\\), so \\(x(x-5)=0\\) and \\(x=0\\) or \\(x=5\\). Dividing by x at the start would have produced the trap answer, 5 only."
          }
        ]
      },
      {
        id: "ag-inequalities",
        title: "Inequalities & Absolute Value",
        mins: 3,
        blocks: [
          { t: "p", x: "Inequalities behave like equations with <b>one</b> difference, and that difference is where every trap lives:" },
          { t: "warn", x: "Multiplying or dividing by a <b>negative</b> flips the sign. Which means you must <b>never</b> multiply or divide by a variable whose sign you do not know — the single most common error in the topic. Move terms across instead." },
          { t: "ul", items: [
            "You may <b>add</b> two inequalities pointing the same way; you may never <b>subtract</b> them.",
            "You may multiply two inequalities only when every quantity involved is positive.",
            "Squaring both sides is valid only when both sides are known to be non-negative."
          ] },
          { t: "h", x: "Absolute value is a distance" },
          { t: "p", x: "Read \\( |x| \\) as \"distance from 0\" and \\( |x-a| \\) as \"distance from a\". That single reading answers most of these questions without algebra:" },
          { t: "formula", x: "\\begin{gathered}|x|&lt;k \\iff -k&lt;x&lt;k \\\\[4pt] |x|&gt;k \\iff x&lt;-k \\ \\text{ or } \\ x&gt;k\\end{gathered}" },
          { t: "p", x: "So \\( |x-4|\\le3 \\) simply says \"x is within 3 of 4\", giving \\( 1\\le x\\le7 \\) at a glance." },
          { t: "h", x: "The 0 to 1 ordering" },
          { t: "p", x: "How a number behaves under powers and roots depends on which side of 1 it sits:" },
          { t: "formula", x: "\\begin{gathered}0&lt;x&lt;1:\\ \\ x^{3}&lt;x^{2}&lt;x&lt;\\sqrt{x} \\\\[4pt] x&gt;1:\\ \\ \\sqrt{x}&lt;x&lt;x^{2}&lt;x^{3}\\end{gathered}" },
          { t: "tip", x: "When a question gives a range and asks for the largest or smallest value of a product, test the <b>endpoints</b> — including the negative ones. The extreme of a product often comes from two negatives multiplying to a large positive." },
          { t: "eg",
            q: "How many integer values of x satisfy \\(|x-4|\\le 3\\)?",
            choices: ["3", "4", "6", "7", "8"],
            ans: "D",
            why: "The inequality says x lies within 3 of 4, so \\(1\\le x\\le 7\\). That is the integers 1 through 7 — seven values. Forgetting to count both endpoints gives the trap answer 6."
          }
        ]
      },
      {
        id: "ag-functions",
        title: "Functions & Custom Symbols",
        mins: 4,
        blocks: [
          { t: "p", x: "A function is a rule: whatever sits inside the brackets replaces every x in the definition. There is nothing conceptual to understand — only substitution to perform carefully." },
          { t: "p", x: "If \\( f(x)=x^{2}-3x \\), then \\( f(a+1)=(a+1)^{2}-3(a+1) \\) — the <b>whole</b> argument goes in, brackets and all." },
          { t: "h", x: "Nested functions" },
          { t: "p", x: "Work strictly <b>inside out</b>. For \\( f(g(2)) \\), evaluate \\( g(2) \\) first, then feed that number into f. Reversing the order is the standard wrong answer." },
          { t: "h", x: "Made-up symbols" },
          { t: "p", x: "When the exam defines \\( a \\bigtriangledown b = a^{2}-2b \\), it is testing whether you can follow instructions under time pressure. The symbol means nothing beyond its definition — apply it literally." },
          { t: "ul", items: [
            "Do <b>not</b> assume the operation is commutative: \\( a\\bigtriangledown b \\) and \\( b\\bigtriangledown a \\) are usually different.",
            "Do not assume it is associative either — bracket exactly as written.",
            "For a \"which must be true\" question about a defined operation, test two or three concrete number pairs; that settles it faster than algebra."
          ] },
          { t: "tip", x: "When a function is given by a <b>table or graph</b>, no algebra is needed at all — just read the values off. Many test-takers waste a minute looking for a formula that was never there." },
          { t: "eg",
            q: "If \\(a \\bigtriangledown b = a^{2} - 2b\\), what is the value of \\(3 \\bigtriangledown (1 \\bigtriangledown 2)\\)?",
            choices: ["3", "5", "9", "15", "21"],
            ans: "D",
            why: "Inside first: \\(1 \\bigtriangledown 2 = 1^{2}-2(2) = -3\\). Then \\(3 \\bigtriangledown (-3) = 3^{2}-2(-3) = 9+6 = 15\\)."
          },
          { t: "h", x: "The four shapes these questions take" },
          { t: "ol", items: [
            "<b>Evaluate</b> — substitute a value, or a whole expression, into the definition.",
            "<b>Solve</b> — set \\( f(x)=k \\) and work backwards; this often turns into a quadratic with two answers.",
            "<b>Compose</b> — evaluate the inner function first, then feed the result outward.",
            "<b>Restrict</b> — say which inputs are allowed."
          ] },
          { t: "h", x: "Domain restrictions" },
          { t: "ul", items: [
            "A denominator can never be zero.",
            "An even root needs a non-negative inside.",
            "Both together are a favourite Data Sufficiency setup, because they quietly rule out exactly the value that would have made a statement insufficient."
          ] },
          { t: "tip", x: "For “which of the following must be true of \\( f \\)”, test two or three concrete inputs rather than reasoning abstractly. A single counterexample kills a choice, and finding one is usually faster than proving the survivor." }
        ]
      },
      {
        id: "ag-sequences",
        title: "Sequences & Series",
        mins: 4,
        blocks: [
          { t: "p", x: "Two patterns cover the syllabus: a constant <b>difference</b> (arithmetic) or a constant <b>ratio</b> (geometric)." },
          { t: "formula", x: "\\begin{gathered}\\text{AP: } a_n=a_1+(n-1)d \\\\[4pt] S_n=\\frac{n}{2}\\big(a_1+a_n\\big)\\end{gathered}" },
          { t: "formula", x: "\\begin{gathered}\\text{GP: } a_n=a_1 r^{\\,n-1} \\\\[4pt] S_n=a_1\\frac{r^{n}-1}{r-1}\\ \\ (r\\neq1)\\end{gathered}" },
          { t: "h", x: "Counting terms — where marks are lost" },
          { t: "formula", x: "n=\\frac{\\text{last}-\\text{first}}{d}+1" },
          { t: "p", x: "That \"+1\" is the most-missed step in the topic. The integers from 1 to 10 inclusive number \\( 10-1+1=10 \\), not 9." },
          { t: "h", x: "Evenly spaced sets" },
          { t: "ul", items: [
            "The <b>mean equals the median</b>, and both equal \\( \\frac{\\text{first}+\\text{last}}{2} \\).",
            "So the sum is simply \\( \\text{average}\\times\\text{count} \\) — you never add the terms.",
            "Useful sums: \\( 1+2+\\dots+n=\\frac{n(n+1)}{2} \\), and the first n odd numbers total \\( n^{2} \\)."
          ] },
          { t: "tip", x: "For a <b>recursive</b> rule such as \\( a_{n+1}=a_n+3 \\) or one defined by remainders, write out five or six terms. Exam recursions almost always settle into a short repeating cycle, and the cycle answers the question." },
          { t: "eg",
            q: "How many terms are in the sequence 7, 11, 15, …, 143?",
            choices: ["33", "34", "35", "36", "37"],
            ans: "C",
            why: "The common difference is 4, so \\(n = \\frac{143-7}{4}+1 = 34+1 = 35\\). Dropping the \"+1\" gives the trap answer 34."
          },
          { t: "h", x: "Telling the two apart" },
          { t: "p", x: "Take the first three terms. If \\( a_2-a_1=a_3-a_2 \\) it is arithmetic; if \\( a_2/a_1=a_3/a_2 \\) it is geometric. Check both before assuming — a sequence that starts 2, 4, … could be either." },
          { t: "h", x: "Sequences given by a formula" },
          { t: "p", x: "When the question defines \\( a_n=3n+2 \\), there is nothing to derive: substitute. Such a sequence is automatically arithmetic, with the coefficient of n as the common difference." },
          { t: "warn", x: "Read carefully whether n counts from 0 or from 1, and keep “the nth term” apart from “the term whose value is n”. Both distinctions are worth a whole question." },
          { t: "tip", x: "For a <b>recursive</b> definition, write out five or six terms before doing anything clever. Exam recursions almost always settle into a short repeating cycle, and once you have the cycle length the answer is a remainder calculation." }
        ]
      },
      {
        id: "ag-coordinate",
        title: "Coordinate Geometry",
        mins: 5,
        blocks: [
          { t: "note", x: "The Focus edition dropped geometry from Quant, so nothing here asks for a theorem about triangles or circles. What remains is algebra drawn on a grid — lines, points and distances — which is why this sits in the algebra guide." },
          { t: "h", x: "Lines" },
          { t: "formula", x: "m=\\frac{y_2-y_1}{x_2-x_1} \\qquad y=mx+b" },
          { t: "ul", items: [
            "b is the <b>y-intercept</b> — where the line crosses \\( x=0 \\).",
            "For the <b>x-intercept</b>, set \\( y=0 \\), which gives \\( x=-b/m \\).",
            "<b>Parallel</b> lines have equal slopes. <b>Perpendicular</b> lines have slopes that multiply to \\( -1 \\), so each is the negative reciprocal of the other: 3 and \\( -\\tfrac13 \\).",
            "A horizontal line is \\( y=c \\) with slope 0; a vertical line is \\( x=c \\) and has no slope at all."
          ] },
          { t: "tip", x: "Sign reasoning often beats calculation. If a line has y-intercept 4 and a <b>negative</b> slope, its x-intercept is \\( -4/m \\) with \\( m&lt;0 \\) — necessarily <b>positive</b>. That rules out every negative answer choice before you draw anything." },
          { t: "h", x: "Points" },
          { t: "formula", x: "\\begin{gathered}\\text{midpoint}=\\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right) \\\\[4pt] d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\end{gathered}" },
          { t: "p", x: "The distance formula is just Pythagoras on the horizontal and vertical gaps — you never need to memorise it separately." },
          { t: "h", x: "Quadrants" },
          { t: "table", head: ["Quadrant", "x", "y"], rows: [
            ["I", "+", "+"], ["II", "−", "+"], ["III", "−", "−"], ["IV", "+", "−"]
          ] },
          { t: "h", x: "Three tricks worth knowing" },
          { t: "ol", items: [
            "<b>Perpendicular bisector</b>: it passes through the midpoint of a segment at right angles, so \"L is the perpendicular bisector of RP\" means P is the <b>reflection</b> of R across L — and the midpoint of RP lies on L.",
            "<b>Rotation about the origin</b>: \\( (a,b)\\to(b,-a) \\) turns a point 90° clockwise, and \\( (a,b)\\to(-b,a) \\) turns it 90° anticlockwise.",
            "<b>Absolute-value regions</b>: \\( |x|+|y|=k \\) traces a square standing on its corners, with vertices at \\( (\\pm k,0) \\) and \\( (0,\\pm k) \\). Both diagonals are \\( 2k \\), so the area is \\( \\tfrac12(2k)(2k)=2k^{2} \\)."
          ] },
          { t: "warn", x: "Sketch before you solve. These questions are built so that a rough picture — which quadrant, which direction the line leans, roughly where it crosses — eliminates most choices in seconds, while the algebra takes minutes." },
          { t: "eg",
            q: "What is the area of the region enclosed by \\(|x| + |y| = 6\\)?",
            choices: ["24", "36", "48", "72", "144"],
            ans: "D",
            why: "The graph is a square on its corners with vertices \\((6,0)\\), \\((0,6)\\), \\((-6,0)\\) and \\((0,-6)\\). Both diagonals measure 12, so the area is \\(\\tfrac12 \\times 12 \\times 12 = 72\\)."
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
        mins: 3,
        blocks: [
          { t: "formula", x: "\\begin{gathered}\\text{mean}=\\frac{\\text{sum of terms}}{\\text{number of terms}} \\\\[4pt] \\Longrightarrow\\ \\ \\text{sum}=\\text{mean}\\times\\text{count}\\end{gathered}" },
          { t: "p", x: "That rearrangement is the whole topic. Almost every mean question is really a <b>sum</b> question in disguise — find the total, and the rest follows." },
          { t: "h", x: "The three measures" },
          { t: "ul", items: [
            "<b>Mean</b> — the balance point. Every value affects it, so a single outlier drags it a long way.",
            "<b>Median</b> — the middle value <b>after sorting</b>. With n terms it sits at position \\( \\frac{n+1}{2} \\); with an even count, average the two middle terms. Outliers barely move it.",
            "<b>Mode</b> — the most frequent value. A set can have no mode or several."
          ] },
          { t: "warn", x: "Sort before you take a median. Reading the middle of an unsorted list is the most common careless error in the topic — and the exam always lists the numbers out of order." },
          { t: "h", x: "Tricks" },
          { t: "ul", items: [
            "In an <b>evenly spaced</b> set, mean = median = \\( \\frac{\\text{first}+\\text{last}}{2} \\). This handles \"the average of the first 40 even integers\" in one line.",
            "Adding a value <b>equal to the current mean</b> leaves the mean unchanged; anything above pulls it up, below pulls it down.",
            "mean &gt; median usually signals a tail of high values; mean &lt; median, a tail of low values.",
            "To hit a target mean, work with the <b>deficit</b>: how far the current sum is from what it needs to be."
          ] },
          { t: "tip", x: "In Data Sufficiency, a median question often needs only <b>positions</b>, not values. If you know where a number sits in the order, you may not need to know what it is." },
          { t: "eg",
            q: "The mean of the five numbers 2, 5, 7, x and 10 is 6. What is x?",
            choices: ["4", "6", "8", "12", "5"],
            ans: "B",
            why: "The sum must be \\(6\\times5=30\\). The four known values total 24, so \\(x=6\\)."
          }
        ]
      },
      {
        id: "sp-spread",
        title: "Range & Standard Deviation",
        mins: 3,
        blocks: [
          { t: "p", x: "<b>Range</b> = largest − smallest. <b>Standard deviation</b> measures how far the values sit from their mean, on average. You are essentially never asked to compute an SD — only to <b>compare</b> two of them, so learn the behaviour rather than the formula." },
          { t: "h", x: "How SD responds to changes" },
          { t: "table", head: ["Change to every term", "Mean", "Range", "SD"], rows: [
            ["add a constant c", "+ c", "unchanged", "unchanged"],
            ["multiply by k", "× k", "× |k|", "× |k|"]
          ] },
          { t: "p", x: "Shifting a whole set leaves its spread untouched — \\( \\{2,4,6,8\\} \\) and \\( \\{12,14,16,18\\} \\) have <b>identical</b> standard deviations. Only stretching changes it." },
          { t: "h", x: "Facts the exam tests" },
          { t: "ul", items: [
            "SD is never negative, and \\( \\text{SD}=0 \\) exactly when every term is identical.",
            "Adding a term <b>equal to the mean</b> pulls the SD down; adding an extreme value pushes it up.",
            "Tighter clustering means smaller SD — you can usually rank two sets by eye, comparing distances from each mean.",
            "Range ignores everything between the extremes, so two sets can share a range and have very different SDs."
          ] },
          { t: "warn", x: "A larger range does not guarantee a larger SD. \\( \\{0,50,50,50,100\\} \\) and \\( \\{0,0,50,100,100\\} \\) have the same range, but the second is far more spread out." },
          { t: "eg",
            q: "Set A = {2, 4, 6, 8} and Set B = {12, 14, 16, 18}. Which statement is true?",
            choices: ["A has the greater standard deviation", "B has the greater standard deviation", "The standard deviations are equal", "B's standard deviation is 10 more than A's", "Not enough information"],
            ans: "C",
            why: "Every term of B is exactly 10 more than the matching term of A. Shifting a set changes its mean but not its spread, so the standard deviations are identical."
          }
        ]
      },
      {
        id: "sp-weighted",
        title: "Weighted Averages",
        mins: 4,
        blocks: [
          { t: "p", x: "When groups of different sizes combine, you cannot average the averages — each group must be weighted by its size:" },
          { t: "formula", x: "\\bar{x}=\\frac{n_1\\bar{x}_1+n_2\\bar{x}_2}{n_1+n_2}" },
          { t: "h", x: "The sanity check that often is the answer" },
          { t: "p", x: "The combined average always lands <b>between</b> the two group averages, and <b>closer to the larger group</b>. On a five-choice question that frequently eliminates four options before any arithmetic." },
          { t: "h", x: "Running it backwards" },
          { t: "p", x: "Given the blend, the ratio of the two weights is the ratio of the <b>opposite</b> distances from the mean:" },
          { t: "formula", x: "\\frac{n_1}{n_2}=\\frac{\\bar{x}_2-\\bar{x}}{\\bar{x}-\\bar{x}_1}" },
          { t: "p", x: "This is exactly the alligation rule from mixtures — the same idea wearing different clothes. Any question that blends two concentrations, two prices, two speeds or two test averages is this formula." },
          { t: "tip", x: "Percentages weight like anything else. A 10% rise on a large base and a 30% rise on a small base do not give 20% overall — they give something much nearer 10%." },
          { t: "warn", x: "Average <b>speed</b> is never the average of two speeds unless the two times are equal. Use total distance ÷ total time; for equal distances at speeds a and b it is \\( \\frac{2ab}{a+b} \\)." },
          { t: "eg",
            q: "A class of 10 students averages 70 on a test; a second class of 30 students averages 90. What is the combined average?",
            choices: ["75", "80", "82.5", "85", "87"],
            ans: "D",
            why: "Total points \\(= 10(70)+30(90) = 700+2700 = 3400\\) over 40 students, giving 85. Note it sits much nearer 90, the average of the bigger group — the plain average of 80 is the trap."
          },
          { t: "h", x: "More than two groups" },
          { t: "p", x: "Combine them <b>two at a time</b>. Blend the first pair into a single group with its own count and average, then blend that result with the third. The arithmetic stays small and the sanity check still applies at every step." },
          { t: "tip", x: "Only the <b>ratio</b> of the weights matters, never the actual counts. Ten and thirty give exactly the same answer as one and three, so replace awkward numbers with their simplest ratio before you start." },
          { t: "warn", x: "A weighted average can never fall outside the range of the values being averaged. If your answer is below the smallest or above the largest, you have weighted something backwards — and that is worth checking before you look at the choices." }
        ]
      },
      {
        id: "sp-sets",
        title: "Overlapping Sets (Venn)",
        mins: 3,
        blocks: [
          { t: "p", x: "Two groups that overlap obey one formula, and the whole topic is careful bookkeeping around it:" },
          { t: "formula", x: "|A\\cup B| = |A| + |B| - |A\\cap B|" },
          { t: "p", x: "You subtract the overlap because members of both were counted twice. Adding people in neither group:" },
          { t: "formula", x: "\\text{Total} = \\underbrace{|A|+|B|-|A\\cap B|}_{\\text{at least one}} + \\text{neither}" },
          { t: "h", x: "The double matrix" },
          { t: "p", x: "When there are two yes/no criteria — say male/female against employed/unemployed — a 2×2 grid with row and column totals beats a Venn diagram every time. Fill in what you are given, then let each row and column total do the rest." },
          { t: "h", x: "Three sets" },
          { t: "formula", x: "\\begin{gathered}|A\\cup B\\cup C| = |A|+|B|+|C| \\\\[4pt] -\\ |A\\cap B| - |A\\cap C| - |B\\cap C| \\\\[4pt] +\\ |A\\cap B\\cap C|\\end{gathered}" },
          { t: "warn", x: "Read the wording exactly. <b>\"Exactly one\"</b>, <b>\"at least one\"</b> and <b>\"exactly two\"</b> are three different counts, and the formula above gives \"at least one\". Working from the centre outwards — fill the triple overlap first, then the pairs, then the singles — keeps them straight." },
          { t: "h", x: "Maximum and minimum overlap" },
          { t: "ul", items: [
            "<b>Maximum</b> overlap = the size of the smaller set (it can sit entirely inside the larger).",
            "<b>Minimum</b> overlap = \\( |A|+|B|-\\text{Total} \\), or 0 if that comes out negative."
          ] },
          { t: "eg",
            q: "Of 100 people surveyed, 70 like tea and 80 like coffee. What is the smallest possible number who like both?",
            choices: ["0", "10", "30", "50", "70"],
            ans: "D",
            why: "Overlap is minimised by spreading people out as far as possible: \\(70+80 = 150\\) preferences among only 100 people, so at least \\(150-100 = 50\\) must be counted twice."
          }
        ]
      },
      {
        id: "sp-ages",
        title: "Age & Number Problems",
        mins: 4,
        blocks: [
          { t: "p", x: "Age questions are linear equations with a time axis. Set the <b>present</b> ages as your variables and everything else follows: x years ago is \\( \\text{age}-x \\), x years from now is \\( \\text{age}+x \\)." },
          { t: "h", x: "The gap never changes" },
          { t: "p", x: "The difference between two people's ages is <b>constant for life</b>. If a father is 30 years older than his son today, he was 30 years older a decade ago and will be 30 years older a decade hence. Ratios change; the gap does not — and building on the gap turns most of these into one equation." },
          { t: "tip", x: "When ages are given as a ratio, write them as multiples of the same unit — \\( 3k \\) and \\( 5k \\) — then apply the time shift to each. One equation in k finishes the job." },
          { t: "h", x: "Digit problems" },
          { t: "p", x: "A two-digit number with tens digit t and units digit u is \\( 10t+u \\); reversing the digits gives \\( 10u+t \\). Two consequences do most of the work:" },
          { t: "formula", x: "\\begin{gathered}(10t+u)-(10u+t)=9(t-u) \\\\[4pt] (10t+u)+(10u+t)=11(t+u)\\end{gathered}" },
          { t: "ul", items: [
            "The difference between a two-digit number and its reversal is always a multiple of <b>9</b>; their sum is always a multiple of <b>11</b>.",
            "Digits are integers from 0 to 9, and a leading digit cannot be 0 — constraints that usually pin the answer down."
          ] },
          { t: "warn", x: "Watch the tense. \"In 5 years he will be three times as old as his son is <b>now</b>\" is a different equation from \"…as his son <b>will be</b>\". Misreading which side gets the +5 is the standard error." },
          { t: "eg",
            q: "A father is 30 years older than his son. In 5 years he will be three times as old as his son. How old is the son now?",
            choices: ["5", "8", "10", "12", "15"],
            ans: "C",
            why: "Let the son be s, so the father is \\(s+30\\). In 5 years: \\(s+35 = 3(s+5)\\), giving \\(s+35 = 3s+15\\), so \\(2s = 20\\) and \\(s = 10\\). Check: 10 and 40 today; in 5 years 15 and 45 = 3 × 15."
          }
        ]
      },
      {
        id: "sp-counting",
        title: "Permutations & Combinations",
        mins: 4,
        blocks: [
          { t: "p", x: "Start with the <b>counting principle</b>: if one stage can happen in m ways and the next in n ways, together they happen in \\( m\\times n \\) ways. Draw a slot for each decision, write the number of options in each, and multiply. That alone solves most counting questions." },
          { t: "h", x: "Does order matter?" },
          { t: "formula", x: "^nP_r=\\frac{n!}{(n-r)!} \\qquad ^nC_r=\\frac{n!}{r!\\,(n-r)!}" },
          { t: "ul", items: [
            "<b>Order matters</b> — rankings, seat arrangements, president-and-treasurer — use a permutation.",
            "<b>Order does not matter</b> — committees, teams, handshakes, choosing toppings — use a combination.",
            "They differ by exactly the \\( r! \\) ways of arranging the chosen group: \\( ^nC_r = {}^nP_r / r! \\)."
          ] },
          { t: "tip", x: "\\( ^nC_r = {}^nC_{n-r} \\) turns an ugly calculation into an easy one: \\( ^{12}C_{10} \\) is the same as \\( ^{12}C_{2}=66 \\)." },
          { t: "h", x: "The standard set-ups" },
          { t: "ul", items: [
            "<b>Repeated items</b> in an arrangement: divide by the factorial of each repeat count — the letters of LEVEL arrange in \\( \\frac{5!}{2!\\,2!}=30 \\) ways.",
            "<b>Circular</b> seating of n people: \\( (n-1)! \\), because rotations are the same arrangement.",
            "<b>Must be together</b>: glue them into one block, arrange the blocks, then multiply by the arrangements inside the block.",
            "<b>Must not be together</b>: count everything, then subtract the together cases.",
            "<b>Repeats allowed</b> (like a PIN): \\( k^{n} \\), not a permutation."
          ] },
          { t: "warn", x: "Decide \"order matters?\" <b>before</b> you write anything. Handshakes between 10 people are \\( ^{10}C_2=45 \\); if you count them as permutations you get 90, which is exactly the wrong answer the exam offers." },
          { t: "eg",
            q: "In how many ways can 5 people be seated in a row if two particular people must sit next to each other?",
            choices: ["24", "48", "60", "96", "120"],
            ans: "B",
            why: "Glue the pair into one block: now 4 items arrange in \\(4! = 24\\) ways, and the pair can swap inside the block in \\(2! = 2\\) ways. \\(24 \\times 2 = 48\\)."
          }
        ]
      },
      {
        id: "sp-probability",
        title: "Probability",
        mins: 4,
        blocks: [
          { t: "formula", x: "\\begin{gathered}P=\\frac{\\text{favourable outcomes}}{\\text{total outcomes}} \\\\[4pt] 0\\le P\\le 1\\end{gathered}" },
          { t: "p", x: "Every probability is a counting question with a denominator, so the whole of the previous section applies. If a probability you compute exceeds 1, you have double-counted the numerator." },
          { t: "h", x: "Combining events" },
          { t: "ul", items: [
            "<b>AND</b> → multiply. \\( P(A \\text{ and } B)=P(A)\\times P(B) \\) when the events are independent.",
            "<b>OR</b> → add, then remove the double-count: \\( P(A\\text{ or }B)=P(A)+P(B)-P(A\\text{ and }B) \\). The subtraction disappears only when the events cannot both happen.",
            "Notice this is the overlapping-sets formula again — the same bookkeeping, scaled to 1."
          ] },
          { t: "h", x: "The complement trick" },
          { t: "formula", x: "P(\\text{at least one}) = 1 - P(\\text{none})" },
          { t: "p", x: "Whenever you see <b>\"at least one\"</b>, compute the opposite first. Counting \"exactly one, plus exactly two, plus exactly three…\" is several times more work and far more error-prone." },
          { t: "h", x: "With and without replacement" },
          { t: "p", x: "If the item is <b>not</b> replaced, both the numerator and the denominator shrink on the next draw. Drawing two aces from a deck is \\( \\frac{4}{52}\\times\\frac{3}{51} \\) — the second fraction changes on top and bottom." },
          { t: "warn", x: "Independence is an assumption, not a default. Draws without replacement are dependent, and so is anything where one outcome physically restricts the next." },
          { t: "tip", x: "For draws where order is irrelevant you may count with combinations top and bottom, or multiply sequential probabilities and then multiply by the number of orders. Both are correct — pick whichever gives smaller numbers." },
          { t: "eg",
            q: "A bag holds 3 red and 5 blue marbles. Two are drawn at random without replacement. What is the probability that at least one is red?",
            choices: ["3/14", "5/14", "3/8", "9/14", "11/14"],
            ans: "D",
            why: "Go via the complement. \\(P(\\text{no red}) = \\frac{5}{8}\\times\\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}\\), so \\(P(\\text{at least one red}) = 1-\\frac{5}{14} = \\frac{9}{14}\\)."
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
        mins: 3,
        blocks: [
          { t: "p", x: "Data Insights (DI) is really <b>IR + Data Sufficiency</b> merged. It's ~20 questions in 45 minutes, split across four types:" },
          { t: "table", head: ["Type", "Questions"], rows: [
            ["Data Sufficiency", "8"],
            ["Two-Part Analysis", "4"],
            ["Graphics & Table", "5"],
            ["Multi-Source Reasoning (MSR)", "3"]
          ] },
          { t: "p", x: "Roughly half are math-flavoured and half verbal-flavoured — but the <b>real skill being tested is reading</b>: pulling the few relevant facts out of a jungle of information, fast." },
          { t: "ul", items: [
            "It's <b>~75% reading &amp; reasoning, ~25% (very basic) math</b> — mostly percentages and mean/median. Even the “math” questions are won on reading.",
            "A question can have <b>up to 3 sub-parts</b>, and you must get <b>all</b> of them right for any credit — there's <b>no partial credit</b>.",
            "You get an <b>on-screen calculator</b>, sortable tables, dropdowns, and tabbed sources.",
            "<b>MSR wastes the most time</b> — a common plan is to flag the 3 MSR questions for review and handle them last."
          ] },
          { t: "tip", x: "The fastest way to level up DI is to read a lot of dense LSAT-style RC/CR in long sittings — it trains the fast reading-and-analysing the section rewards." },
          { t: "h", x: "How it is scored" },
          { t: "p", x: "Data Insights is scored on the same 60–90 scale as Quant and Verbal and counts <b>equally</b> toward the 205–805 total. It is not a side section, and for most people it is the cheapest place to gain points because so few candidates prepare for it properly." },
          { t: "warn", x: "Multi-part questions are <b>all or nothing</b>. Two dropdowns right and one wrong scores exactly the same as three wrong, so the last check before you submit is worth more here than anywhere else on the exam." },
          { t: "h", x: "A workable order" },
          { t: "ol", items: [
            "Answer Data Sufficiency and Two-Part as you meet them — they are self-contained and quick.",
            "Take Graphics and Table questions next, but bail early if the chart is unusually dense.",
            "Bookmark the Multi-Source sets and come back with whatever time is left."
          ] },
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
            q: "If m and n are integers, what is the value of m + n?  (1) (x+m)(x+n) = x² + 5x + mn, and x ≠ 0.   (2) mn = 4",
            choices: [
              "(1) alone sufficient, (2) alone not",
              "(2) alone sufficient, (1) alone not",
              "Both together, neither alone",
              "Each alone is sufficient",
              "Together still not sufficient"
            ],
            ans: "A",
            why: "(1): expanding gives x²+(m+n)x+mn = x²+5x+mn, so (m+n)x = 5x, and since x ≠ 0, m+n = 5 — a unique value, sufficient. (2): mn = 4 allows 1·4, 2·2, −1·−4… so m+n could be 5, 4, −5… not unique, insufficient."
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
  }
];
