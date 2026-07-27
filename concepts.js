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
          { t: "tip", x: "Whenever the words <b>percent / percentage / proportion</b> appear, the correct answer must be mathematically justifiable. Do the number-vs-percent check first (see the next section) before eliminating on gut feel." }
        ]
      },
      {
        id: "cr-inference",
        title: "Inference (Must Be True)",
        mins: 5,
        blocks: [
          { t: "p", x: "About a third of the Verbal section (RC + CR combined) rests on inference — roughly 12 of 36 questions — so this is the highest-leverage CR skill." },
          { t: "h", x: "What an inference is" },
          { t: "p", x: "An inference is a conclusion that <b>must</b> follow from the facts given. If the passage states facts F1, F2, F3, the answer is whatever can be logically derived from one, two, or all of them:" },
          { t: "formula", x: "F_1 \\Rightarrow C \\qquad F_1 + F_2 \\Rightarrow C \\qquad F_1 + F_2 + F_3 \\Rightarrow C" },
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
        mins: 4,
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
          { t: "tip", x: "Market share is the portion of a market a company controls (by revenue or units). Regardless of market size, all shares must add up to 100%." }
        ]
      },
      {
        id: "cr-conditional",
        title: "Conditional reasoning",
        mins: 4,
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
          { t: "tip", x: "The category <i>musician</i> contains the category <i>guitarist</i>. So anything outside the bigger category (not a musician) must be outside the smaller one (not a guitarist). Flip <b>and</b> negate — that's the only safe move." }
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
          { t: "note", x: "Paradox is one of seven CR question families. The remaining five — Weaken, Strengthen, Flaw, Evaluate and Assumption — follow below." }
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
          { t: "warn", x: "<b>Correlation ≠ causation.</b> “Children of divorced parents have 50% more behavioural problems, so divorce causes them” fails: maybe hard-to-parent children strain marriages (B→A), or parental conflict drives both (C→both). Any of these breaks the causal claim." }
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
          }
        ]
      },
      {
        id: "cr-flaw",
        title: "Identify the flaw",
        mins: 3,
        blocks: [
          { t: "p", x: "Approached exactly like weaken — you're naming <i>why</i> the fact→conclusion link fails. The GMAT leans on just three flaw families:" },
          { t: "ul", items: [
            "<b>Number vs. percentage</b> — comparing percentages while ignoring the different-sized bases behind them.",
            "<b>Cause and effect</b> — treating a correlation as causation (the reversals above).",
            "<b>Wrong sample</b> — a biased or unrepresentative group used to conclude about a wider one."
          ] },
          { t: "warn", x: "Classic base-rate trap: “a scanner alerts on 100% of bombs and only 1% of clean bags, so 99% of alerts are real bombs.” Wrong — with 10 bomb-bags and 1,000 clean bags, that's 10 real alerts + 10 false alerts = only <b>50%</b> real. The flaw swaps one group's percentage for a different group's." }
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
          }
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
          { t: "note", x: "That completes all seven CR question families. Next up (once you're happy with the concepts): CR practice sets from your session and topic-wise question banks." }
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
          { t: "tip", x: "OCTAAVE has to become <b>subconscious</b> — like driving. Applied consciously it's slow; drilled over a few hundred official passages it becomes automatic." }
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
          { t: "tip", x: "The answer to a primary-purpose or main-idea question is almost a <b>restatement of the author's opinion</b>. If the author has no opinion, look instead at the key contradiction." }
        ]
      },
      {
        id: "rc-contradiction",
        title: "C — Contradiction",
        mins: 2,
        blocks: [
          { t: "p", x: "Opinions are often introduced — or reversed — at a <b>contradiction</b>. That's also where general and inference questions tend to be set. So the key contradiction location is prime real estate: mark it as you read." },
          { t: "h", x: "Contradiction words to watch for" },
          { t: "p", x: "<i>although, but, by contrast, contrary to, conversely, despite, even though, however, in contrast, in spite of, nevertheless, nonetheless, notwithstanding, on the other hand, regardless, still, yet.</i>" },
          { t: "tip", x: "When the author has no explicit opinion, the primary purpose is <b>most likely found right at the key contradiction</b>." }
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
          { t: "warn", x: "Tone answers using <b>extreme emotion</b> are traps: strong indignation, sharp derision, unabashed admiration, deep-rooted hostility, vehement condemnation. So is <b>indifference / ambivalence</b> — the author is never indifferent or wavering about their own writing." }
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
          { t: "tip", x: "Build a shallow-but-wide familiarity with these areas. You don't need expertise — just enough context that the vocabulary and setup feel familiar." }
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
          { t: "note", x: "Also never pick a choice that <b>disputes / challenges a stated fact</b> — that's disallowed across all of RC and CR." }
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
          { t: "tip", x: "Special case: if an RC question is really a CR task (weaken, strengthen, assumption, evaluate, paradox) and says <b>“if true”</b>, OCTAAVE's verify-from-passage rule is off — “if true” means the answer brings in outside information you can't check against the text." }
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
        mins: 3,
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
          { t: "note", x: "A one-point Quant drop can take about <b>four</b> Verbal points to make up for on the total score — that's how steep the Quant curve is at the top." }
        ]
      },
      {
        id: "q-how",
        title: "How GMAT Quant actually works",
        mins: 4,
        blocks: [
          { t: "p", x: "The single biggest misconception is that Quant rewards fast calculation. It doesn't." },
          { t: "ul", items: [
            "<b>No calculations needed.</b> Hard questions are won on faster <i>thinking</i>, not faster arithmetic. What separates people is <b>reaction time</b> — how quickly you see what to do.",
            "<b>Logic &gt; process.</b> The underlying math is <i>extremely</i> basic; the challenge is applying it to a brand-new problem. A rigid step-by-step process has almost no value — a scrappy approach with the right logic beats it every time.",
            "<b>Language (LINGO) is a trap.</b> The test is written by psychometricians. Many hard questions have two readings, and the answer from the <i>wrong</i> reading is sitting right there in the options. You miss it by misreading, not by weak math."
          ] },
          { t: "warn", x: "Practising only easy (500–650 level) content lulls you into false confidence. Because the test is adaptive, it climbs to its trickiest at the top — where the examiner's whole aim is mind-games." }
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
          { t: "tip", x: "The other side of the rule: with the right approach, <b>every</b> real GMAT Quant question is solvable in under 2 minutes (sometimes under 30 seconds). If your method routinely takes longer, dump it — the only measure of a better approach is that it's faster." }
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
            "<b>Geometry</b> — plane figures, solids, coordinate geometry.",
            "<b>Combinatorics</b> — counting, permutations & combinations, probability."
          ] }
        ]
      },
      {
        id: "q-ds-rules",
        title: "Data Sufficiency — the rules",
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
          ] }
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
          { t: "note", x: "This guide covers the strategy and DS layer. Per-topic concept notes (Number Properties, Algebra, Word Problems, and so on) can be built from your dedicated Quant topic PDFs — say the word." }
        ]
      }
    ]
  },

  {
    id: "quant-topics",
    section: "quant",
    title: "Quant — core concepts",
    source: "Adapted from your Quant topic concept notes",
    parts: [
      {
        id: "qt-percent",
        title: "Percentages",
        mins: 4,
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
          { t: "tip", x: "Turn “% of” into multiplication: 20% of 240 = 0.2 × 240, or use fractions — 37.5% of 240 = ⅜ × 240 = 90. Choose whichever is cleaner." }
        ]
      },
      {
        id: "qt-ratio",
        title: "Ratios & Proportions",
        mins: 3,
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
          }
        ]
      },
      {
        id: "qt-average",
        title: "Averages",
        mins: 3,
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
          { t: "tip", x: "The combined average always lands <b>between</b> the two group averages, closer to the bigger group — a quick sanity check and often enough to answer." }
        ]
      },
      {
        id: "qt-mixture",
        title: "Mixtures & Alligation",
        mins: 3,
        blocks: [
          { t: "p", x: "Alligation is weighted-average logic run backwards: given a blend's average, find the <b>ratio</b> of the two ingredients. With cheaper value c, dearer value d, and mean m:" },
          { t: "formula", x: "\\dfrac{\\text{qty of cheaper}}{\\text{qty of dearer}} = \\dfrac{d - m}{m - c}" },
          { t: "p", x: "(Each ingredient's 'distance' from the mean is inversely proportional to how much of it you use.)" },
          { t: "h", x: "Repeated replacement" },
          { t: "p", x: "If you remove x from a container of volume V and top up with the other liquid, n times, the original liquid left is:" },
          { t: "formula", x: "V\\left(1 - \\dfrac{x}{V}\\right)^{n}" },
          { t: "tip", x: "Alligation also cracks problems on average speed, blended interest rates, and salary/marks mixes — anything where two rates combine into one." }
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
          { t: "warn", x: "“Profit % on cost” and “profit % on selling price” are different — GMAT wording chooses the base deliberately, so read which one is meant." }
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
          { t: "tip", x: "Percentage growth, population, and appreciation/depreciation all use the compound formula — same machinery, different story." }
        ]
      },
      {
        id: "qt-speed",
        title: "Speed, Time & Distance",
        mins: 4,
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
          }
        ]
      },
      {
        id: "qt-work",
        title: "Time & Work & Pipes",
        mins: 3,
        blocks: [
          { t: "p", x: "The one idea: work in terms of <b>rate = 1 job per unit time</b>. If A finishes in a days, A's rate is 1/a per day; rates simply add." },
          { t: "formula", x: "\\dfrac{1}{T} = \\dfrac{1}{a} + \\dfrac{1}{b} \\quad\\Rightarrow\\quad T = \\dfrac{ab}{a+b}" },
          { t: "ul", items: [
            "Scaling: \\( \\frac{M_1 D_1 H_1}{W_1} = \\frac{M_2 D_2 H_2}{W_2} \\) (men · days · hours per unit work stays constant).",
            "<b>Pipes & cisterns</b> is the same maths: an inlet adds a positive rate, a leak/outlet subtracts.",
            "A handy trick: set total work = LCM of the given times, so each worker's rate is a whole number."
          ] },
          { t: "note", x: "That's the core arithmetic & word-problem concept layer. Number-properties, algebra and statistics notes can follow, and practice sets per topic come next." }
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
          { t: "tip", x: "The fastest way to level up DI is to read a lot of dense LSAT-style RC/CR in long sittings — it trains the fast reading-and-analysing the section rewards." }
        ]
      },
      {
        id: "di-ds-rules",
        title: "Data Sufficiency — the rules",
        mins: 3,
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
          }
        ]
      },
      {
        id: "di-ds-traps",
        title: "Data Sufficiency — traps",
        mins: 4,
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
          }
        ]
      },
      {
        id: "di-twopart",
        title: "Two-Part Analysis",
        mins: 2,
        blocks: [
          { t: "p", x: "You make <b>two selections</b> — one in each column of a table — to answer a question that has two linked parts. They can be math-based (pick two expressions/values) or verbal-based (e.g. pick the fact that most <b>strengthens</b> and the one that most <b>weakens</b> an argument)." },
          { t: "ul", items: [
            "Read what each <b>column</b> asks for before you evaluate options — the two columns often demand opposite things.",
            "Verbal two-parts are really CR in a grid — assumption, strengthen/weaken, inference logic all apply.",
            "Math two-parts are usually a single setup feeding two answers; solve the relationship once, then read off both."
          ] }
        ]
      },
      {
        id: "di-graphs",
        title: "Graphics Interpretation",
        mins: 2,
        blocks: [
          { t: "p", x: "You read a chart (line, bar, scatter, etc.) and complete sentences by choosing from <b>drop-down menus</b> so each statement is accurate." },
          { t: "ul", items: [
            "Nail the <b>axes and units</b> first — many traps hinge on <b>percent vs. absolute number</b> (a rising percentage needn't mean a rising count).",
            "Answer strictly from the graph — <b>don't extrapolate</b> beyond what's plotted unless the statement says to project a trend.",
            "For “rate of growth / change” dropdowns, compare <b>slopes</b>, not single points."
          ] }
        ]
      },
      {
        id: "di-tables",
        title: "Table Analysis",
        mins: 2,
        blocks: [
          { t: "p", x: "A sortable table with a set of statements you mark <b>Yes/No</b> or <b>True/False</b> — each judged independently against the data." },
          { t: "ul", items: [
            "<b>Sort</b> by the relevant column before judging a statement about order, max/min, or medians — it's faster and less error-prone.",
            "For <b>median</b> statements, remember to count all rows and find the middle after sorting.",
            "Each statement is its own mini true/false — a statement is True only if the data <b>must</b> make it so; one counterexample makes it False."
          ] }
        ]
      },
      {
        id: "di-msr",
        title: "Multi-Source Reasoning",
        mins: 2,
        blocks: [
          { t: "p", x: "Information is spread across <b>2–3 tabs</b> (text, a table, a graph). Questions ask you to synthesise across tabs — including Yes/No inference sets and single-answer questions." },
          { t: "ul", items: [
            "<b>Skim all tabs first</b> to learn where each kind of information lives; don't try to memorise it.",
            "Each question usually leans on <b>one or two</b> tabs — find them rather than re-reading everything.",
            "It's the most <b>time-expensive</b> type — flag the 3 MSR questions and do them in review/edit so they don't sink your pacing."
          ] },
          { t: "note", x: "That completes the Data Insights concept layer. Practice sets (Data Sufficiency question banks, IR practice) can be added next from your DI question PDFs." }
        ]
      }
    ]
  }
];
