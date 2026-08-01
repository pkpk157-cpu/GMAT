/* GMAT Prep — Flash cards (quick-reference rules, tricks & formulas)
   Grouped into decks per section. Each card: { f: front, b: back }.
   Front and back may contain HTML and LaTeX (\( \) inline, \[ \] display),
   rendered with KaTeX — same as concepts and questions.
*/
window.GMAT_FLASHCARDS = [
{ section: "quant", decks: [
  { id: "fc-q-pct", title: "Percentages", cards: [
    { f: "Percent change", b: "\\(\\displaystyle \\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%\\)" },
    { f: "Increase by \\(x\\%\\) then decrease by \\(x\\%\\) — net effect?", b: "A net <b>decrease</b> of \\(\\left(\\dfrac{x}{10}\\right)^2\\%\\). e.g. +20% then −20% → −4%." },
    { f: "\\(A\\) is \\(x\\%\\) of \\(B\\). \\(B\\) is what % of \\(A\\)?", b: "\\(\\dfrac{100}{x}\\times100\\%\\). Percentages are not symmetric — always divide by the base." },
    { f: "Handy fraction ↔ percent", b: "\\(\\tfrac18=12.5\\%\\), \\(\\tfrac16\\approx16.7\\%\\), \\(\\tfrac15=20\\%\\), \\(\\tfrac13\\approx33.3\\%\\), \\(\\tfrac38=37.5\\%\\), \\(\\tfrac58=62.5\\%\\)." },
    { f: "Successive percentage changes", b: "Multiply factors, don't add. +10% then +20% → \\(1.1\\times1.2=1.32\\) → +32% (not +30%)." },
    { f: "\"Percent more/less than\"", b: "Compare to the <b>second</b> quantity (the base after \"than\"). \"A is 25% more than B\" → \\(A=1.25B\\)." }
  ]},
  { id: "fc-q-pl", title: "Profit, Loss & Discount", cards: [
    { f: "Profit %", b: "\\(\\displaystyle \\frac{SP-CP}{CP}\\times100\\%\\) (always on <b>cost</b> price unless told otherwise)." },
    { f: "Selling price from profit %", b: "\\(SP = CP\\times\\left(1+\\dfrac{\\text{profit }\\%}{100}\\right)\\)" },
    { f: "Discount %", b: "\\(\\displaystyle \\frac{\\text{marked}-\\text{selling}}{\\text{marked}}\\times100\\%\\) (discount is on the <b>marked</b> price)." },
    { f: "Marked up \\(m\\%\\), then discount \\(d\\%\\) — net?", b: "Net factor \\(=(1+\\tfrac{m}{100})(1-\\tfrac{d}{100})\\). Profit only if this exceeds 1." },
    { f: "Two items sold at same price, one +x%, one −x%", b: "Always a net <b>loss</b> of \\(\\left(\\dfrac{x}{10}\\right)^2\\%\\)." }
  ]},
  { id: "fc-q-int", title: "Simple & Compound Interest", cards: [
    { f: "Simple interest", b: "\\(\\displaystyle SI=\\frac{P\\cdot R\\cdot T}{100}\\)  \\(P\\)=principal, \\(R\\)=rate %/yr, \\(T\\)=years." },
    { f: "Compound amount", b: "\\(\\displaystyle A=P\\left(1+\\frac{R}{100}\\right)^{T}\\) Interest \\(=A-P\\)." },
    { f: "CI − SI for 2 years", b: "\\(\\displaystyle P\\left(\\frac{R}{100}\\right)^2\\) (the interest-on-interest for year 2)." },
    { f: "Compounded \\(n\\) times a year", b: "\\(A=P\\left(1+\\dfrac{R}{100n}\\right)^{nT}\\)." },
    { f: "Rule of 72 (doubling time)", b: "Time to double \\(\\approx\\dfrac{72}{R}\\) years at rate \\(R\\%\\) compounded annually." }
  ]},
  { id: "fc-q-ratio", title: "Ratios, Proportions & Mixtures", cards: [
    { f: "Divide \\(N\\) in ratio \\(a:b:c\\)", b: "Each share \\(=\\dfrac{\\text{its part}}{a+b+c}\\times N\\)." },
    { f: "Alligation rule (mixing two grades)", b: "\\(\\displaystyle \\frac{\\text{qty cheaper}}{\\text{qty dearer}}=\\frac{\\text{dearer}-\\text{mean}}{\\text{mean}-\\text{cheaper}}\\)" },
    { f: "Combine \\(A:B\\) and \\(B:C\\)", b: "Scale so the common term \\(B\\) matches, then read \\(A:B:C\\)." },
    { f: "Replacement: remove & replace fraction \\(f\\), \\(n\\) times", b: "Pure remaining \\(=\\left(1-f\\right)^{n}\\) of the original." }
  ]},
  { id: "fc-q-speed", title: "Speed, Time & Distance", cards: [
    { f: "Core relation", b: "\\(\\displaystyle \\text{distance}=\\text{speed}\\times\\text{time}\\)" },
    { f: "Average speed for equal distances at \\(x\\) and \\(y\\)", b: "\\(\\displaystyle \\frac{2xy}{x+y}\\) (harmonic mean — <b>not</b> the plain average)." },
    { f: "Relative speed", b: "Opposite directions → <b>add</b> speeds. Same direction → <b>subtract</b>." },
    { f: "Unit conversion", b: "\\(\\text{km/h}\\to\\text{m/s}\\): multiply by \\(\\dfrac{5}{18}\\). Reverse: multiply by \\(\\dfrac{18}{5}\\)." },
    { f: "Train crossing a pole vs. a platform", b: "Pole: distance = train length. Platform: distance = train + platform length." }
  ]},
  { id: "fc-q-work", title: "Time & Work & Pipes", cards: [
    { f: "Combined rate", b: "If A finishes in \\(a\\) and B in \\(b\\) days, together \\(=\\dfrac{1}{\\frac1a+\\frac1b}=\\dfrac{ab}{a+b}\\) days." },
    { f: "Work = rate × time", b: "Treat total work as 1 (or the LCM of the times, to avoid fractions)." },
    { f: "Man-days", b: "\\(M_1 D_1 = M_2 D_2\\) for the same job (more workers → fewer days)." },
    { f: "Pipes: fill vs. drain", b: "A drain pipe's rate is <b>negative</b>. Net rate = sum of signed rates." }
  ]},
  { id: "fc-q-avg", title: "Averages & Statistics", cards: [
    { f: "Mean", b: "\\(\\displaystyle \\text{mean}=\\frac{\\text{sum of terms}}{\\text{number of terms}}\\)" },
    { f: "Adding a value equal to the mean", b: "The mean does not change." },
    { f: "Weighted average", b: "\\(\\displaystyle \\frac{w_1x_1+w_2x_2}{w_1+w_2}\\) — always closer to the group with more weight." },
    { f: "Median", b: "Middle value when sorted; average of the two middle values if the count is even." },
    { f: "Evenly spaced set", b: "Mean = median = (first + last)/2." },
    { f: "Effect of adding a constant \\(k\\) to every value", b: "Mean shifts by \\(k\\); range and standard deviation are <b>unchanged</b>." },
    { f: "Standard deviation, intuitively", b: "Measures spread around the mean. Same values → SD 0. More spread → larger SD." }
  ]},
  { id: "fc-q-exp", title: "Exponents & Roots", cards: [
    { f: "Multiply / divide same base", b: "\\(a^m\\cdot a^n=a^{m+n}\\), \\(\\dfrac{a^m}{a^n}=a^{m-n}\\)." },
    { f: "Power of a power", b: "\\((a^m)^n=a^{mn}\\)." },
    { f: "Zero & negative exponents", b: "\\(a^0=1\\) (for \\(a\\neq0\\)), \\(a^{-n}=\\dfrac{1}{a^n}\\)." },
    { f: "Fractional exponent", b: "\\(a^{m/n}=\\sqrt[n]{a^{m}}=\\left(\\sqrt[n]{a}\\right)^{m}\\)." },
    { f: "Roots of products / fractions", b: "\\(\\sqrt{ab}=\\sqrt a\\,\\sqrt b\\), \\(\\sqrt{\\tfrac ab}=\\dfrac{\\sqrt a}{\\sqrt b}\\)." },
    { f: "Simplify a surd", b: "Pull out the largest perfect square: \\(\\sqrt{50}=\\sqrt{25\\cdot2}=5\\sqrt2\\)." }
  ]},
  { id: "fc-q-alg", title: "Algebra & Quadratics", cards: [
    { f: "Roots of \\(ax^2+bx+c=0\\)", b: "Sum \\(=-\\dfrac{b}{a}\\), product \\(=\\dfrac{c}{a}\\)." },
    { f: "Quadratic formula", b: "\\(\\displaystyle x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\)" },
    { f: "Difference of squares", b: "\\(a^2-b^2=(a-b)(a+b)\\)." },
    { f: "Perfect-square expansions", b: "\\((a\\pm b)^2=a^2\\pm2ab+b^2\\)." },
    { f: "Sum / difference of cubes", b: "\\(a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)\\)." },
    { f: "\\(x+\\frac1x=k\\Rightarrow x^2+\\frac1{x^2}=?\\)", b: "\\(k^2-2\\) (square both sides)." }
  ]},
  { id: "fc-q-num", title: "Number Properties & Divisibility", cards: [
    { f: "Divisible by 3 or 9", b: "By 3 if digit sum is divisible by 3; by 9 if digit sum is divisible by 9." },
    { f: "Divisible by 4 / 8", b: "By 4 if last 2 digits form a multiple of 4; by 8 if last 3 digits do." },
    { f: "Divisible by 11", b: "Alternating digit sum (odd positions − even positions) is 0 or a multiple of 11." },
    { f: "LCM × HCF", b: "\\(\\text{LCM}(a,b)\\times\\text{HCF}(a,b)=a\\times b\\)." },
    { f: "Number of factors", b: "If \\(N=p^a q^b r^c\\), it has \\((a+1)(b+1)(c+1)\\) factors." },
    { f: "Odd / even", b: "even±even=even, odd±odd=even, odd±even=odd; odd×odd=odd, anything×even=even." },
    { f: "Prime check", b: "\\(N\\) is prime if no prime \\(\\le\\sqrt N\\) divides it." }
  ]},
  { id: "fc-q-prob", title: "Counting & Probability", cards: [
    { f: "Permutations (order matters)", b: "\\(^nP_r=\\dfrac{n!}{(n-r)!}\\)." },
    { f: "Combinations (order doesn't)", b: "\\(^nC_r=\\dfrac{n!}{r!(n-r)!}\\)." },
    { f: "Probability", b: "\\(\\displaystyle P=\\frac{\\text{favorable outcomes}}{\\text{total outcomes}}\\)" },
    { f: "Complement", b: "\\(P(\\text{not }A)=1-P(A)\\) — often faster for \"at least one.\"" },
    { f: "AND vs OR", b: "Independent AND → multiply. Mutually exclusive OR → add." },
    { f: "Arrangements with repetition", b: "\\(n\\) slots, \\(k\\) options each, repeats allowed → \\(k^n\\)." }
  ]},
  { id: "fc-q-seq", title: "Sequences (AP & GP)", cards: [
    { f: "Arithmetic: \\(n\\)th term", b: "\\(a_n=a_1+(n-1)d\\)." },
    { f: "Arithmetic: sum of \\(n\\) terms", b: "\\(S_n=\\dfrac{n}{2}\\big(a_1+a_n\\big)=\\dfrac{n}{2}\\big(2a_1+(n-1)d\\big)\\)." },
    { f: "Geometric: \\(n\\)th term", b: "\\(a_n=a_1 r^{\\,n-1}\\)." },
    { f: "Geometric: sum of \\(n\\) terms", b: "\\(S_n=a_1\\dfrac{r^n-1}{r-1}\\) (for \\(r\\neq1\\))." },
    { f: "Count of integers from \\(a\\) to \\(b\\) inclusive", b: "\\(b-a+1\\)." }
  ]}
]},
{ section: "data", decks: [
  { id: "fc-d-ds", title: "Data Sufficiency — the 5 answers", cards: [
    { f: "Choice A", b: "Statement (1) ALONE is sufficient, but (2) alone is not." },
    { f: "Choice B", b: "Statement (2) ALONE is sufficient, but (1) alone is not." },
    { f: "Choice C", b: "BOTH together are sufficient, but NEITHER alone is." },
    { f: "Choice D", b: "EACH statement ALONE is sufficient." },
    { f: "Choice E", b: "Together they are still NOT sufficient." },
    { f: "Decision shortcut", b: "If (1) works → answer is A or D. If (1) fails → B, C, or E. (\"AD / BCE\" split.)" }
  ]},
  { id: "fc-d-ds2", title: "Data Sufficiency — strategy & traps", cards: [
    { f: "Golden rule", b: "You don't need the value — only whether a statement <b>pins it down</b>. Don't fully solve." },
    { f: "Value question is sufficient when…", b: "…it yields exactly ONE value. Two possible values → not sufficient." },
    { f: "Yes/No question is sufficient when…", b: "…the answer is always Yes or always No. \"Sometimes\" → not sufficient." },
    { f: "The C-trap", b: "Statements look like they're needed together, but one alone already works. Test each alone first." },
    { f: "Watch for", b: "Hidden negatives, zero, and fractions — they often break a \"sufficient\"-looking statement." }
  ]},
  { id: "fc-d-graph", title: "Graphs, Tables & Multi-Source", cards: [
    { f: "Correlation ≠ causation", b: "A scatter's upward trend shows association, not that one variable causes the other." },
    { f: "Reading a scatter plot", b: "Up-right band = positive correlation; down-right = negative; shapeless cloud = none." },
    { f: "Tables: sort mentally", b: "For \"highest/lowest\" or \"how many exceed X,\" scan one column — don't compute everything." },
    { f: "Multi-source", b: "Answers usually require combining tabs. Note which source holds each fact before answering." },
    { f: "Two-part analysis", b: "The two columns are answered <b>independently</b> — solve each condition separately." }
  ]}
]},
{ section: "rc", decks: [
  { id: "fc-rc-oct", title: "OCTAAVE reading approach", cards: [
    { f: "O — Opinion", b: "Track whose opinion is whose. Separate the author's view from views they merely report." },
    { f: "C — Contradiction", b: "Watch for shifts: <i>but, however, yet, although</i> — they mark the passage's key turns." },
    { f: "T — Tone", b: "Is the author neutral, critical, or supportive? Tone narrows the answer on purpose/attitude questions." },
    { f: "A — Awareness", b: "Know the purpose of each paragraph — what job it does in the argument, not every detail." },
    { f: "A — Avoid", b: "Don't over-read or import outside knowledge. Answer only from the passage." },
    { f: "V & E — Verify and Eliminate", b: "Confirm each choice against the text; cut anything unsupported, extreme, or off-scope." }
  ]},
  { id: "fc-rc-types", title: "RC question types", cards: [
    { f: "Main idea / primary purpose", b: "Pick the choice that covers the WHOLE passage — not one paragraph, not too broad." },
    { f: "Supporting detail", b: "The answer is stated in the text. Locate it; don't rely on memory." },
    { f: "Inference", b: "Must be true from the passage — the safest, least extreme choice, not a big logical leap." },
    { f: "Function / purpose of a detail", b: "Ask why the author included it — the role it plays, not what it says." },
    { f: "Tone / attitude", b: "Match the author's wording. Extreme emotions (\"contempt,\" \"elation\") are usually wrong." }
  ]},
  { id: "fc-rc-traps", title: "Trap answers to avoid", cards: [
    { f: "Too extreme", b: "Words like <i>always, never, all, impossible</i> rarely match a measured passage." },
    { f: "Out of scope", b: "True in the real world but never addressed in the passage → wrong." },
    { f: "Half-right", b: "One clause is accurate, another distorts the passage. A wrong half makes the whole choice wrong." },
    { f: "Opposite / reversal", b: "Swaps two viewpoints or reverses a cause and effect. Check direction carefully." },
    { f: "Distortion", b: "Uses the passage's words but changes the meaning or strength of the claim." }
  ]}
]},
{ section: "cr", decks: [
  { id: "fc-cr-anatomy", title: "Argument anatomy", cards: [
    { f: "Conclusion", b: "The main claim the author wants you to accept. Often after <i>therefore, thus, so, hence</i>." },
    { f: "Premise", b: "The evidence given to support the conclusion. Often after <i>because, since, given that</i>." },
    { f: "Assumption", b: "An unstated premise the argument needs to be true — the gap between evidence and conclusion." },
    { f: "Find the conclusion trick", b: "The \"Therefore\" test: X, therefore Y. Y is the conclusion." }
  ]},
  { id: "fc-cr-types", title: "Question-type playbook", cards: [
    { f: "Assumption", b: "Find the unstated link the argument depends on. Test with the Negation technique." },
    { f: "Strengthen", b: "Add a fact that supports the conclusion or confirms the assumption / closes the gap." },
    { f: "Weaken", b: "Attack the assumption or offer an alternative explanation. You need not disprove — just dent it." },
    { f: "Evaluate", b: "Find the question whose answer would most change how strong the argument is." },
    { f: "Inference / must be true", b: "Choose what MUST follow from the stimulus — not what could be or is likely." },
    { f: "Resolve the paradox", b: "Find the fact that lets BOTH surprising statements be true at once." },
    { f: "Identify the flaw", b: "Name the reasoning error the author commits (see the flaws deck)." },
    { f: "Boldface / method", b: "Describe the ROLE each portion plays (evidence, conclusion, opposing view) — ignore the topic." }
  ]},
  { id: "fc-cr-tools", title: "Assumptions & logic tools", cards: [
    { f: "Assumption negation test", b: "Negate a candidate assumption. If the argument falls apart, it WAS a required assumption." },
    { f: "Conditional: contrapositive", b: "\\(A\\to B\\) is equivalent to \\(\\lnot B\\to\\lnot A\\). Negate and flip." },
    { f: "Necessary vs. sufficient", b: "Sufficient triggers the result; necessary is required for it. Don't confuse the two directions." },
    { f: "Strengthen / weaken = the gap", b: "Both target the same assumption — one props it up, the other knocks it down." }
  ]},
  { id: "fc-cr-flaws", title: "Common reasoning flaws", cards: [
    { f: "Correlation ↔ causation", b: "Two things move together, so one is assumed to cause the other. Classic GMAT trap." },
    { f: "Sampling / representativeness", b: "A biased or tiny sample is treated as representative of the whole." },
    { f: "Percent vs. number", b: "A higher percentage need not mean a higher count (the totals may differ)." },
    { f: "Ad hominem", b: "Attacking the person, not their argument." },
    { f: "Straw man", b: "Distorting an opponent's claim into a weaker one, then knocking that down." },
    { f: "Equivocation", b: "A key word shifts meaning between premise and conclusion." }
  ]}
]}
];
