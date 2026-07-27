/* GMAT Prep — concept guides (theory). Rendered by the in-app concept reader.
   Block types: h (sub-heading), p (paragraph, inline \( \) math ok),
   ul / ol (lists), tip, warn (callouts), formula (display math),
   table {head, rows}, eg (worked example {q, choices, ans, why}). */
window.GMAT_CONCEPTS = [
  {
    id: "cr-class-sessions",
    section: "cr",
    title: "Critical Reasoning — Class Sessions Guide",
    source: "Adapted from your Sandeep Gupta CR guide",
    sample: true,
    parts: [
      {
        id: "cr-framework",
        title: "How CR works & the elimination mindset",
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
          { t: "p", x: "Any percentage is a part over a whole:" },
          { t: "formula", x: "\\%\\ \\text{women} = \\dfrac{\\text{women}}{\\text{women} + \\text{men}} \\times 100 = \\dfrac{\\text{part}}{\\text{total base}} \\times 100" },
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
        title: "Conditional reasoning & the contrapositive",
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
          { t: "note", x: "This is the first of the CR concept sections. Weaken, Strengthen, Flaw, Evaluate and Assumption follow the same layout — tell me to add them and they'll drop in here." }
        ]
      }
    ]
  },

  {
    id: "rc-octaave",
    section: "rc",
    title: "Reading Comprehension — the OCTAAVE method",
    source: "Adapted from your Sandeep Gupta RC guide",
    parts: [
      {
        id: "rc-how",
        title: "How RC works & the OCTAAVE map",
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
    title: "Quant — how the section really works",
    source: "Adapted from your Sandeep Gupta Quant guide",
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
  }
];
