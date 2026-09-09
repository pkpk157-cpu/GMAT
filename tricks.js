/* Tricks — ways to get a GMAT question right without doing the whole question.
   Same shape as concepts.js (guides → parts → blocks), so they open in the same
   reader; `kind: "trick"` is what files them under the Tricks sub-tab instead of
   Concepts. Every trick states when it is safe as well as how it works — a
   shortcut applied to the wrong question is slower than the long way round. */
window.GMAT_TRICKS = [

/* ============================ QUANT ============================ */
{
  id: "tr-quant", section: "quant", kind: "trick", icon: "⚡",
  title: "Quant speed tricks",
  source: "Ten shortcuts that answer a question without solving it",
  parts: [

  { id: "tr-q-backsolve", title: "Backsolve — plug the answers in", mins: 4, blocks: [
    { t:"p", x:"The answer is printed on the screen. On a question that asks for <b>one number</b>, you do not have to find it — you only have to recognise it. Testing a choice is nearly always easier than building and solving the equation, because plugging a number into a story is arithmetic, while setting it up is algebra." },
    { t:"h", x:"When to use it" },
    { t:"ul", items:[
      "The five answers are <b>plain numbers</b>, not expressions.",
      "The question asks \"how many\", \"what was the original\", \"what is the value of\".",
      "The relationship in the stem is easy to check but awkward to write down — ages, mixtures, two people working, \"if he had bought 3 more…\"."
    ]},
    { t:"h", x:"How it works" },
    { t:"p", x:"GMAT numeric answers are printed in order, smallest to largest. That ordering is what makes this fast." },
    { t:"ol", items:[
      "Start with <b>(C)</b>, the middle value. Run it through the story.",
      "If it works, you are done — one test.",
      "If it is too big, (D) and (E) are dead too. If it is too small, (A) and (B) are dead.",
      "Test the middle of what survives. Worst case you have answered in <b>three</b> tests; usually two."
    ]},
    { t:"tip", x:"<b>Pick the friendliest number, not always the middle.</b> If (B) is 42 and (C) is 54.5, start with (B). Whatever it tells you, you still learn a direction — and you may just be finished." },
    { t:"eg",
      q:"Jane has twice as many coins as Ken. If Jane gives Ken 12 coins, Ken will then have 3 more coins than Jane. How many coins does Jane have now?",
      choices:["30","42","54","66","78"], ans:"B",
      why:"Start at (C) = 54. Then Ken has 27. After the transfer Jane has 42 and Ken has 39 — Ken is 3 <i>short</i>, not 3 ahead, so 54 is too big and (D) and (E) go with it. Test (B) = 42: Ken has 21; after the transfer Jane has 30 and Ken has 33, which is 3 more. Done in two tests, with no equation written." },
    { t:"warn", x:"Backsolving stalls when a choice takes a minute to test, or when the stem hides <b>two</b> unknowns you would have to guess at. If the first test is painful, abandon it and solve — do not grind through five painful tests." }
  ]},

  { id: "tr-q-smart", title: "Plug in your own values", mins: 3, blocks: [
    { t:"p", x:"When the answers contain <b>letters</b>, the question is not really about a quantity, it is about a relationship. Replace every unknown with a number you choose — the technique is usually called <b>smart numbers</b> — compute the one number the question asks for, then see which answer choice produces it." },
    { t:"h", x:"Which numbers to pick" },
    { t:"table", head:["Question is about…","Pick"], rows:[
      ["Percents","100 — every percent becomes a whole number"],
      ["Fractions of a total","the least common multiple of the denominators"],
      ["A rate over a time","a total that both rates divide into cleanly"],
      ["Plain algebra","small, distinct primes: 2, 3, 5, 7"]
    ]},
    { t:"warn", x:"Avoid <b>0</b> and <b>1</b>, and avoid any number already printed in the problem. Those are the values that make several answer choices agree by coincidence, which is exactly the tie you were trying to avoid." },
    { t:"p", x:"If two choices survive your first number, do not solve — run the same test with a second number. Only the real answer survives both." },
    { t:"eg",
      q:"If \\(x\\) is \\(p\\) percent of \\(y\\), then \\(y\\) is what percent of \\(x\\)?",
      choices:["\\(p\\)","\\(\\dfrac{p}{100}\\)","\\(\\dfrac{100}{p}\\)","\\(\\dfrac{10000}{p}\\)","\\(100p\\)"], ans:"D",
      why:"Let \\(p = 50\\) and \\(y = 100\\), so \\(x = 50\\). Now \\(y\\) is \\(100/50 = 200\\%\\) of \\(x\\). Test the choices at \\(p = 50\\): (A) 50, (B) 0.5, (C) 2, (D) \\(10000/50 = 200\\) ✓, (E) 5000. One substitution kills four choices." },
    { t:"tip", x:"The percent-change version of this trick is worth memorising on its own: for \"a shirt is marked up then discounted\", start the shirt at <b>$100</b> and just walk the price forward." }
  ]},

  { id: "tr-q-estimate", title: "Estimate first, compute only if forced", mins: 3, blocks: [
    { t:"p", x:"<b>Read the answer choices before you start working.</b> They tell you how much precision the question is actually asking for. Choices of 12, 48, 190, 800, 3400 are a licence to round hard; choices of 47, 48, 49, 50, 51 are a warning that you must be exact." },
    { t:"h", x:"Round in opposite directions to bracket" },
    { t:"p", x:"If you round the numerator up and the denominator down, the result is <b>too big</b> — and you have an upper bound. Do it the other way for a lower bound. Two rough calculations often trap the answer between them and leave one choice standing." },
    { t:"h", x:"Benchmarks worth knowing cold" },
    { t:"table", head:["Value","≈","Value","≈"], rows:[
      ["\\(\\sqrt{2}\\)","1.41","\\(1/3\\)","33.3%"],
      ["\\(\\sqrt{3}\\)","1.73","\\(1/6\\)","16.7%"],
      ["\\(\\sqrt{5}\\)","2.24","\\(1/7\\)","14.3%"],
      ["\\(\\sqrt{7}\\)","2.65","\\(1/8\\)","12.5%"],
      ["\\(\\pi\\)","3.14","\\(1/9\\)","11.1%"],
      ["\\(2^{10}\\)","≈ 1,000","\\(1/11\\)","9.1%"]
    ]},
    { t:"eg",
      q:"A machine fills 1,148 bottles per hour and runs for 6 hours and 48 minutes. Which is closest to the number of bottles filled?",
      choices:["5,200","6,900","7,800","9,300","11,400"], ans:"C",
      why:"Round to 1,150 × 6.8. Take 1,000 × 6.8 = 6,800 and 150 × 6.8 ≈ 1,020, so about 7,820. The choices are hundreds apart, so the estimate alone decides it — the exact product is never needed." },
    { t:"tip", x:"Estimate the <b>size</b> before the digits. Is the answer in the tens, the hundreds, the thousands? On a question with a wide spread of choices, order of magnitude finishes the job." }
  ]},

  { id: "tr-q-percent", title: "Percents: multiply, never add", mins: 3, blocks: [
    { t:"p", x:"Turn every percent change into a <b>multiplier</b>, then multiply the multipliers together. That single habit removes the most common arithmetic error on the section." },
    { t:"table", head:["In words","Multiplier"], rows:[
      ["up 20%","× 1.20"],
      ["down 15%","× 0.85"],
      ["up 100%","× 2"],
      ["down 60%","× 0.40"],
      ["\\(k\\%\\) of it","\\(\\times\\ k/100\\)"]
    ]},
    { t:"h", x:"Successive changes" },
    { t:"p", x:"Up 20% then down 15% is <b>not</b> up 5%:" },
    { t:"formula", x:"1.20 \\times 0.85 = 1.02 \\quad\\Rightarrow\\quad \\text{a 2\\% increase}" },
    { t:"p", x:"And a rise of \\(x\\%\\) followed by a fall of \\(x\\%\\) never gets you home — it always loses ground:" },
    { t:"formula", x:"\\left(1+\\tfrac{x}{100}\\right)\\left(1-\\tfrac{x}{100}\\right)=1-\\frac{x^{2}}{10000}" },
    { t:"p", x:"So up 50% then down 50% is \\(1.5 \\times 0.5 = 0.75\\) — a <b>25% loss</b>, not a wash. That gap is a favourite trap answer." },
    { t:"h", x:"Reversing a comparison" },
    { t:"p", x:"\"A is 25% more than B\" means \\(A = 1.25B\\), so \\(B = 0.8A\\) — B is <b>20%</b> less than A, not 25%. The two percentages differ because they are measured against different bases. Always ask <i>percent of what</i>." },
    { t:"tip", x:"<b>Swap the numbers.</b> \\(a\\%\\) of \\(b\\) equals \\(b\\%\\) of \\(a\\). So 18% of 50 is the same as 50% of 18, which is 9 — instantly. Likewise 4% of 75 is 75% of 4 = 3." },
    { t:"h", x:"Percent change" },
    { t:"formula", x:"\\text{percent change} = \\frac{\\text{new}-\\text{old}}{\\text{old}}\\times 100" },
    { t:"warn", x:"The denominator is always the <b>starting</b> value. Going from 40 to 50 is a 25% rise; going from 50 back to 40 is a 20% fall. Same 10 units, different bases, different answers." }
  ]},

  { id: "tr-q-units", title: "Units digits and cycles", mins: 3, blocks: [
    { t:"p", x:"Questions about \\(7^{83}\\) are never asking you to compute \\(7^{83}\\). They are asking for its last digit, and the last digit of a power depends only on the last digit of the base — which repeats on a short cycle." },
    { t:"table", head:["Units digit of base","Cycle","Length"], rows:[
      ["2","2, 4, 8, 6","4"],
      ["3","3, 9, 7, 1","4"],
      ["7","7, 9, 3, 1","4"],
      ["8","8, 4, 2, 6","4"],
      ["4","4, 6","2"],
      ["9","9, 1","2"],
      ["0, 1, 5, 6","itself, always","1"]
    ]},
    { t:"h", x:"The method" },
    { t:"ol", items:[
      "Take the units digit of the base and look up its cycle.",
      "Divide the exponent by the cycle length and keep the <b>remainder</b>.",
      "Count that far into the cycle. A remainder of 0 means the <b>last</b> entry."
    ]},
    { t:"eg",
      q:"What is the units digit of \\(7^{83}\\)?",
      choices:["1","3","7","8","9"], ans:"B",
      why:"7 cycles 7, 9, 3, 1 with length 4. \\(83 = 4(20) + 3\\), so take the third entry: 3. No exponent was ever evaluated." },
    { t:"tip", x:"The same idea covers sums and products. The last digit of a product is the last digit of the product of the last digits, so \\(37 \\times 42\\) ends in the last digit of \\(7 \\times 2 = 14\\), namely 4." },
    { t:"note", x:"Every cycle length divides 4, so <b>dividing the exponent by 4</b> is enough for every base — you just may find the cycle repeats sooner." }
  ]},

  { id: "tr-q-divis", title: "Divisibility and remainders without dividing", mins: 4, blocks: [
    { t:"h", x:"The rules worth having by reflex" },
    { t:"table", head:["Divisible by","Test"], rows:[
      ["2","last digit even"],
      ["3","digit sum divisible by 3"],
      ["4","last <b>two</b> digits form a multiple of 4"],
      ["5","last digit 0 or 5"],
      ["6","passes both the 2 test and the 3 test"],
      ["8","last <b>three</b> digits form a multiple of 8"],
      ["9","digit sum divisible by 9"],
      ["11","alternating digit sum divisible by 11"]
    ]},
    { t:"note", x:"The pattern behind the 4 and 8 rules: \\(2^{k}\\) is decided by the last \\(k\\) digits, and \\(5^{k}\\) likewise. That is why 25 and 100 need two digits and 125 needs three." },
    { t:"h", x:"Consecutive integers" },
    { t:"p", x:"The product of any \\(k\\) consecutive integers is divisible by \\(k!\\). So any three in a row are divisible by 6, any four in a row by 24. Expressions like \\(n(n+1)(n+2)\\) are asking about this and nothing else." },
    { t:"h", x:"Remainders" },
    { t:"p", x:"Write the definition down and the question usually answers itself:" },
    { t:"formula", x:"N = dq + r, \\qquad 0 \\le r &lt; d" },
    { t:"p", x:"Remainders also survive arithmetic — you may reduce first and multiply after:" },
    { t:"formula", x:"\\text{rem}(a\\cdot b,\\, d) = \\text{rem}\\big(\\text{rem}(a,d)\\cdot \\text{rem}(b,d),\\, d\\big)" },
    { t:"eg",
      q:"What is the remainder when \\(7^{83}\\) is divided by 5?",
      choices:["0","1","2","3","4"], ans:"D",
      why:"Dividing by 5 depends only on the units digit. From the cycle trick, \\(7^{83}\\) ends in 3, and a number ending in 3 leaves remainder 3 on division by 5. Two shortcuts stacked, no exponent computed." },
    { t:"h", x:"Counting factors" },
    { t:"p", x:"Factor into primes, add one to each exponent, multiply: \\(72 = 2^{3}\\cdot 3^{2}\\) has \\((3+1)(2+1) = 12\\) factors. Faster and safer than listing them in pairs." },
    { t:"tip", x:"For \"which of the following <b>must</b> be true\" about integers, do not prove anything — <b>test numbers</b>. Try an even, an odd, a negative, and 0 (when 0 is allowed). One counterexample kills a choice outright." }
  ]},

  { id: "tr-q-weighted", title: "Weighted averages — the teeter-totter", mins: 3, blocks: [
    { t:"p", x:"Any mixture question — two salaries, two solutions, two class averages — is a see-saw. The combined average is the balance point, and it always sits <b>closer to the heavier group</b>." },
    { t:"formula", x:"\\begin{gathered}\\text{amount of A}\\ :\\ \\text{amount of B}\\\\[4pt]=\\ \\text{B's distance}\\ :\\ \\text{A's distance}\\end{gathered}" },
    { t:"warn", x:"Note the cross: the amount of A pairs with the distance on <b>B's</b> side. The side that is further from the balance point must be the lighter one." },
    { t:"eg",
      q:"A chemist mixes a 20% acid solution with a 50% acid solution to make 30 litres of a 30% solution. How many litres of the 20% solution are used?",
      choices:["10","15","18","20","24"], ans:"D",
      why:"The target 30 is 10 away from 20 and 20 away from 50. Distances 10 and 20 reverse to a 20 : 10 = 2 : 1 ratio in favour of the 20% solution. Two of the three parts of 30 litres is 20 litres. No equation, no variable." },
    { t:"h", x:"The other direction" },
    { t:"p", x:"When you know the two group sizes, walk the fraction across the gap instead of computing two totals:" },
    { t:"p", x:"30 boys average 72, 20 girls average 82. The girls are \\(20/50 = 2/5\\) of the class, so the average is \\(72 + \\tfrac{2}{5}(10) = 76\\)." },
    { t:"tip", x:"A weighted average can <b>never</b> land outside the two values being mixed. If a choice does, strike it without a calculation." }
  ]},

  { id: "tr-q-ratio", title: "Ratios: scale them, don't solve them", mins: 2, blocks: [
    { t:"p", x:"A ratio is not a set of numbers, it is a <b>shape</b>. Give it a multiplier and the algebra disappears: 3 : 4 : 5 becomes \\(3k,\\ 4k,\\ 5k\\), and the whole question becomes a question about \\(k\\)." },
    { t:"h", x:"The instant elimination" },
    { t:"p", x:"The parts add to \\(12k\\), so the total must be a <b>multiple of 12</b>. On a \"which could be the total\" question, that single observation kills every choice that is not." },
    { t:"h", x:"Chaining two ratios" },
    { t:"p", x:"Given \\(A:B = 2:3\\) and \\(B:C = 4:5\\), make the shared term match. Scale the first by 4 and the second by 3 so B is 12 in both:" },
    { t:"formula", x:"\\begin{gathered}A:B = 8:12, \\qquad B:C = 12:15\\\\[4pt]\\Rightarrow\\quad A:B:C = 8:12:15\\end{gathered}" },
    { t:"warn", x:"Ratios of parts and fractions of the whole are different animals. \"Boys to girls is 2 : 3\" means boys are \\(2/5\\) of the class, not \\(2/3\\). Read which one the question wants." },
    { t:"tip", x:"When a ratio <b>changes</b> — 5 more boys join and the ratio becomes 3 : 4 — set the original as \\(2k, 3k\\) and write one equation in \\(k\\). One unknown beats two every time." }
  ]},

  { id: "tr-q-algebra", title: "Algebra you can skip", mins: 3, blocks: [
    { t:"p", x:"Most GMAT algebra questions ask for an <b>expression</b>, not for the variables. Solving for \\(x\\) and \\(y\\) separately is the long way round, and often it is impossible — which is the hint that you were not meant to." },
    { t:"h", x:"The three identities that do the work" },
    { t:"formula", x:"\\begin{gathered}(a+b)^{2}=a^{2}+2ab+b^{2}\\\\[4pt](a-b)^{2}=a^{2}-2ab+b^{2}\\\\[4pt]a^{2}-b^{2}=(a+b)(a-b)\\end{gathered}" },
    { t:"p", x:"Read them right to left as often as left to right. Seeing \\(x^{2}-y^{2}\\) in a stem should make you look for \\(x+y\\) or \\(x-y\\) somewhere else on the screen." },
    { t:"eg",
      q:"If \\(x + y = 10\\) and \\(xy = 21\\), what is \\(x^{2}+y^{2}\\)?",
      choices:["42","58","79","100","142"], ans:"B",
      why:"\\((x+y)^{2}=x^{2}+2xy+y^{2}\\), so \\(x^{2}+y^{2} = 100 - 2(21) = 58\\). Solving for \\(x = 3\\) and \\(y = 7\\) also works, but takes a factorisation you did not need." },
    { t:"h", x:"Symmetric systems" },
    { t:"p", x:"When two equations look like each other, <b>add them and subtract them</b> before you substitute. \\(x+2y=11\\) and \\(2x+y=13\\) add to \\(3x+3y=24\\), so \\(x+y=8\\) — and if that is what was asked, you are finished." },
    { t:"h", x:"Quadratics" },
    { t:"p", x:"For \\(x^{2}+bx+c=0\\), the roots sum to \\(-b\\) and multiply to \\(c\\). Hunt the pair that fits rather than reaching for the formula." },
    { t:"tip", x:"If an equation has more unknowns than equations, stop looking for a unique solution and look for the combination the question actually names. That is nearly always what the question is testing." }
  ]},

  { id: "tr-q-choices", title: "Read the answers as evidence", mins: 2, blocks: [
    { t:"p", x:"The five choices are part of the question. Before working, spend five seconds looking at them — they tell you the method, the precision, and often the trap." },
    { t:"table", head:["What you see","What it means"], rows:[
      ["Plain numbers, well spread","Backsolve, or estimate"],
      ["Numbers, tightly clustered","Be exact — no rounding"],
      ["Expressions with variables","Smart numbers"],
      ["Fractions with the same denominator","Compare numerators only"],
      ["One choice much smaller or larger than the rest","Check the units — a scale trap is likely"]
    ]},
    { t:"h", x:"Answer the question that was asked" },
    { t:"p", x:"The most expensive error in Quant is not arithmetic, it is solving correctly for the wrong quantity. Before you pick, re-read the last line of the stem." },
    { t:"ul", items:[
      "It asks for \\(2x\\), and \\(x\\) is sitting there as a choice.",
      "It asks for the <b>smaller</b> of the two numbers.",
      "It asks how many were <b>left</b>, not how many were used.",
      "It asks for the percent, and the raw amount is a choice."
    ]},
    { t:"h", x:"Sanity limits that kill choices for free" },
    { t:"ul", items:[
      "A percent <b>decrease</b> cannot exceed 100%.",
      "A probability must sit between 0 and 1.",
      "An average must sit between the smallest and largest value.",
      "A distance, a count, and a length cannot be negative."
    ]},
    { t:"warn", x:"If you are two minutes into a question with nothing to show, eliminate what you can and move on. On an adaptive test a guess costs one question; a five-minute rescue costs three." }
  ]}

]},

/* ======================== DATA INSIGHTS ======================== */
{
  id: "tr-data", section: "data", kind: "trick", icon: "🎯",
  title: "Data Insights speed tricks",
  source: "Sufficiency, graphs and tables — answered without full calculation",
  parts: [

  { id: "tr-d-adbce", title: "Data Sufficiency: the AD / BCE ladder", mins: 2, blocks: [
    { t:"p", x:"Every Data Sufficiency question has the same five answers, so the elimination is always the same shape. Learn the ladder and you never re-read the choices again." },
    { t:"table", head:["","Meaning"], rows:[
      ["A","(1) alone is enough, (2) alone is not"],
      ["B","(2) alone is enough, (1) alone is not"],
      ["C","Neither alone, but together they are enough"],
      ["D","Each one alone is enough"],
      ["E","Even together they are not enough"]
    ]},
    { t:"h", x:"The ladder" },
    { t:"ol", items:[
      "Evaluate statement (1) on its own. Sufficient? Then the answer is <b>A or D</b> — cross out B, C and E.",
      "Not sufficient? Then the answer is <b>B, C or E</b> — cross out A and D.",
      "Now evaluate statement (2) on its own, and the two survivors resolve immediately.",
      "Only if <b>both</b> failed alone do you combine them, and that decides between C and E."
    ]},
    { t:"warn", x:"The single most common Data Sufficiency error is letting what you learned in (1) leak into your reading of (2). Physically cover statement (1) — or write the given facts down again from the stem alone — before you look at (2)." },
    { t:"tip", x:"Do the <b>easier</b> statement first and just remember which one you did. Two statements, two independent tests, order irrelevant." }
  ]},

  { id: "tr-d-stop", title: "Sufficient means \"one answer\" — so stop early", mins: 3, blocks: [
    { t:"p", x:"Data Sufficiency does not ask you to answer the question. It asks whether the question <b>can</b> be answered. Those are different jobs, and the second one is far quicker." },
    { t:"h", x:"Two ways to finish a statement instantly" },
    { t:"ul", items:[
      "<b>Prove insufficient:</b> find two values that both satisfy the statement and give different answers. Two examples and you are done — no algebra at all.",
      "<b>Prove sufficient:</b> show the value is pinned. You do not have to compute it. Recognising that you have one linear equation in one unknown is enough."
    ]},
    { t:"eg",
      q:"What is the value of \\(x\\)?  (1) \\(x^{2} = 49\\)  (2) \\(x &gt; 0\\) and \\(x\\) is an integer with \\(4 &lt; x &lt; 8\\)",
      choices:["A","B","C","D","E"], ans:"C",
      why:"(1) allows \\(x = 7\\) and \\(x = -7\\) — two values, insufficient, so cross out A and D. (2) allows 5, 6 and 7 — insufficient, so B is out too. Together, only 7 satisfies both, so C. Nothing was solved; two counterexamples and one overlap settled it." },
    { t:"warn", x:"The even/odd, positive/negative and zero cases are where sufficiency goes to die. Before calling a statement sufficient, ask: could the value be <b>negative</b>? A <b>fraction</b>? <b>Zero</b>?" },
    { t:"tip", x:"When the statement gives you a number you would need for a formula you already know, it is sufficient — write nothing. \"What is the area of the circle?\" plus \"the circumference is 10π\" is sufficient the instant you see it." }
  ]},

  { id: "tr-d-ctrap", title: "The C-trap and the E-trap", mins: 3, blocks: [
    { t:"h", x:"The C-trap" },
    { t:"p", x:"A C-trap question is built so the two statements <b>look</b> like two halves of one calculation. Combining them feels natural, and C feels obviously right — which is precisely the warning sign. When C feels too easy, go back and test each statement alone, hard." },
    { t:"p", x:"The usual mechanism: one statement quietly does the whole job by itself, because a constraint in the stem (\"\\(x\\) is a positive integer\", \"the price is a whole number of dollars\") narrows it more than you noticed." },
    { t:"h", x:"The E-trap" },
    { t:"p", x:"The mirror image: the question looks unanswerable, so E is tempting. But sufficiency does not require you to find every unknown — only the one thing asked. Two unknowns and one equation is often enough when the question asks for a <b>combination</b> such as \\(x + y\\)." },
    { t:"eg",
      q:"What is the value of \\(x + y\\)?  (1) \\(2x + 2y = 14\\)  (2) \\(x - y = 3\\)",
      choices:["A","B","C","D","E"], ans:"A",
      why:"Statement (1) gives \\(x + y = 7\\) directly — sufficient, even though neither \\(x\\) nor \\(y\\) is knowable. Reaching for both statements to solve the system is the C-trap in its purest form." },
    { t:"tip", x:"Ask of every statement: <b>why is this one here?</b> The test writer put it there to be sufficient, to be a near-miss, or to make the other one look incomplete. Naming its job usually names the answer." }
  ]},

  { id: "tr-d-yesno", title: "Value questions vs yes/no questions", mins: 3, blocks: [
    { t:"p", x:"Sufficiency means something different depending on what was asked, and mixing the two up produces confident wrong answers." },
    { t:"table", head:["Question type","Sufficient means"], rows:[
      ["Value — \"what is \\(x\\)?\"","Exactly one value is possible"],
      ["Yes/no — \"is \\(x &gt; 5\\)?\"","The answer is always yes, or always no"]
    ]},
    { t:"warn", x:"On a yes/no question, a <b>consistent no</b> is just as sufficient as a consistent yes. Insufficient means \"sometimes yes, sometimes no\" — nothing else." },
    { t:"p", x:"This is why yes/no questions are often faster. You never need the value, only the side of the line. \"Is \\(n\\) even?\" plus \"\\(n = 4k+2\\) for some integer \\(k\\)\" is sufficient without ever knowing \\(n\\)." },
    { t:"eg",
      q:"Is the integer \\(n\\) divisible by 6?  (1) \\(n\\) is divisible by 3  (2) \\(n\\) is divisible by 4",
      choices:["A","B","C","D","E"], ans:"C",
      why:"(1) alone: 3 gives no, 6 gives yes — insufficient. (2) alone: 4 gives no, 12 gives yes — insufficient. Together \\(n\\) carries a factor of 3 and a factor of 2, so it is always divisible by 6: a consistent yes, so C. Each step was one small number, not a proof." },
    { t:"tip", x:"For yes/no, hunt for a <b>yes case and a no case</b> first. If you find both in ten seconds the statement is dead and you have lost nothing." }
  ]},

  { id: "tr-d-graph", title: "Graphs: title, axes, then estimate", mins: 2, blocks: [
    { t:"p", x:"Graphics Interpretation questions are read, not calculated. Almost every wrong answer comes from misreading the frame rather than from arithmetic." },
    { t:"ol", items:[
      "Read the <b>title</b> — it names the units and the population.",
      "Read <b>both axis labels</b>, including the small print: thousands? percentages? a log scale? does the axis start at zero?",
      "Note the <b>gridline spacing</b> once. That single number converts every later eyeball into a value.",
      "Only then read the drop-down sentence you have to complete."
    ]},
    { t:"warn", x:"A vertical axis that starts above zero exaggerates every difference. If the question asks whether one bar is \"twice\" another, check the <b>values</b>, never the heights." },
    { t:"h", x:"Estimate against the choices" },
    { t:"p", x:"The drop-down options are usually far apart, so reading a point to the nearest gridline is enough. Take the value at the nearest gridline, adjust by eye, and pick the nearest option." },
    { t:"tip", x:"For scatter plots, ignore individual dots and look at the <b>cloud</b>: does it rise, fall, or sit flat? Most questions ask about direction and outliers, not about coordinates." },
    { t:"note", x:"Trend line questions: the line of best fit is a summary, so a question about \"predicted\" values is asking you to read the <b>line</b>, and a question about \"actual\" values is asking you to read the <b>dot</b>." }
  ]},

  { id: "tr-d-table", title: "Table analysis: sort, don't compute", mins: 2, blocks: [
    { t:"p", x:"The sortable table exists so that you never have to scan it. Each statement you have to judge as true or false is almost always a <b>ranking</b> question in disguise, and one sort answers it." },
    { t:"table", head:["Statement says…","Sort by"],
      rows:[
        ["\"the highest / the lowest\"","that column — read the top or bottom row"],
        ["\"more than half of\"","that column — count down to the midpoint"],
        ["\"every X with a high A also has a high B\"","column A, then look at B down the list"],
        ["\"the median is…\"","that column — take the middle row"]
      ]},
    { t:"h", x:"Compute only what you must" },
    { t:"p", x:"When a statement needs a ratio the table does not print — revenue per employee, cost as a percent of sales — do not build the whole column. Sort by the closest printed column, then check only the <b>two or three rows</b> that could possibly win." },
    { t:"tip", x:"Judge each of the three statements <b>independently</b>. They are scored as one item, but they are not connected, and assuming that they must disagree is a way to talk yourself out of a correct read." },
    { t:"warn", x:"Watch the quantifier. \"All\", \"every\" and \"none\" fall to a <b>single</b> counter-row, so hunt for the exception first. \"Some\" and \"at least one\" need only one supporting row." }
  ]},

  { id: "tr-d-twopart", title: "Two-Part Analysis: two questions in one", mins: 2, blocks: [
    { t:"p", x:"The two columns are usually two separate questions sharing one setup. Answer each on its own — trying to satisfy both at once is what makes them feel hard." },
    { t:"ol", items:[
      "Read the prompt and name what each column is asking for, in your own words.",
      "Solve column one against the row options as if column two did not exist.",
      "Then do column two the same way."
    ]},
    { t:"note", x:"Unless the prompt says otherwise, the <b>same row can be the answer to both columns</b>. Do not rule out an option just because you used it once." },
    { t:"h", x:"When the two columns are linked" },
    { t:"p", x:"On \"largest and smallest\" or \"which pair satisfies\" prompts, the columns really are a pair. Then use the constraint to prune: if the two must sum to a fixed total, work down the options for one column and read the partner off the constraint." },
    { t:"tip", x:"For algebraic two-parters, the rows are numbers, so <b>test the rows</b> rather than solving. Same backsolving logic as Quant, with a shorter list to test." }
  ]},

  { id: "tr-d-msr", title: "Multi-Source Reasoning: find the tab, don't read the tabs", mins: 2, blocks: [
    { t:"p", x:"Two or three tabs of text and a question that needs one sentence from one of them. Reading all of it carefully is the trap; the tabs are a reference document, not a passage." },
    { t:"ol", items:[
      "Skim each tab once for <b>what kind of thing it holds</b> — a schedule, an email of objections, a table of costs. Ten seconds each, no detail.",
      "Read the question and decide which tab owns the answer.",
      "Go to that tab and read only what you need."
    ]},
    { t:"warn", x:"The classic wrong answer is true — but true according to a <b>different tab</b> from the one the question is about, or true of a different person's opinion. Track who said what: an email from a sceptical manager is that manager's view, not a fact of the case." },
    { t:"tip", x:"For the three-statement inference items, judge each statement against the tabs <b>separately</b> and resist filling gaps with common sense. If no tab supports it, the answer is no — even when it sounds plausible." },
    { t:"note", x:"Numbers scattered across two tabs are the standard hard variant: one tab gives the rate, another gives the quantity. Expect to combine exactly two facts, not five." }
  ]}

]},

/* ====================== READING COMPREHENSION ====================== */
{
  id: "tr-rc", section: "rc", kind: "trick", icon: "📖",
  title: "RC speed tricks",
  source: "Read less, answer faster, and let the wrong answers eliminate themselves",
  parts: [

  { id: "tr-rc-map", title: "Map the passage, don't memorise it", mins: 2, blocks: [
    { t:"p", x:"You are not being tested on recall. The passage stays on the screen the whole time, so everything you memorise is wasted effort. What you need is a <b>map</b>: what each paragraph does and where to go back to." },
    { t:"table", head:["Passage","Target reading time"], rows:[
      ["Short (about 200 words)","60 – 90 seconds"],
      ["Long (about 350 words)","2 – 2.5 minutes"]
    ]},
    { t:"h", x:"Read for the skeleton" },
    { t:"ul", items:[
      "<b>First and last sentence</b> of each paragraph carry the structure; the middle carries examples you can retrieve later.",
      "Note in your head what each paragraph <b>does</b> — introduces a theory, raises an objection, gives evidence — rather than what it says.",
      "Track the <b>author's attitude</b>. Most questions in a passage turn on whether the author endorses, doubts, or merely reports the view under discussion."
    ]},
    { t:"tip", x:"Skim examples, names, dates and statistics on the first pass. They exist to support a point, and you only need them if a question asks — at which point they are easy to find." },
    { t:"warn", x:"Do not slow down to understand technical content. A passage about protein folding is not testing biochemistry; the argument's shape works the same whether the nouns mean anything to you or not." }
  ]},

  { id: "tr-rc-signals", title: "Contrast words are the exam's highlighter", mins: 2, blocks: [
    { t:"p", x:"Test writers build questions where the passage <b>turns</b>. Those turns are always announced, and the announcements are short words that are easy to skim past — which is why slowing down on exactly those words is the highest-value habit in RC." },
    { t:"table", head:["Signal","What follows"], rows:[
      ["however, yet, but, nevertheless","the author's real position, or the objection"],
      ["although, despite, while","a concession — the point comes after it"],
      ["therefore, thus, consequently","a conclusion drawn from what came before"],
      ["for example, for instance","support you can skim now, retrieve later"],
      ["surprisingly, notably, in fact","emphasis — questions cluster here"],
      ["some argue, it has been suggested","a view the author may be about to reject"]
    ]},
    { t:"warn", x:"\"Some scholars argue…\" almost never states the author's opinion. Expect a <b>however</b> within two sentences, and expect a question about who believed what." },
    { t:"tip", x:"Slow down at contrast words and speed up in the sentences after \"for example\". That single change in pace usually pays for the whole passage." }
  ]},

  { id: "tr-rc-main", title: "Main idea: build it before you look", mins: 2, blocks: [
    { t:"p", x:"Answer the main-idea question <b>in your own words</b> before reading a single choice. Once you have read five polished options, four of them will sound reasonable." },
    { t:"p", x:"The main idea is nearly always the opening paragraph's point, adjusted by whatever the biggest <b>however</b> in the passage did to it." },
    { t:"h", x:"What a right main-idea answer looks like" },
    { t:"ul", items:[
      "It covers the <b>whole</b> passage, not one paragraph.",
      "Its verb matches what the author did — explains, questions, compares, corrects.",
      "It matches the author's <b>strength</b> of view: a cautious passage does not get a sweeping answer."
    ]},
    { t:"h", x:"What the four wrong ones look like" },
    { t:"ul", items:[
      "<b>Too narrow</b> — true, but it is only paragraph three.",
      "<b>Too broad</b> — a claim about the whole field the passage never made.",
      "<b>Right topic, wrong verb</b> — says the author proposes a solution when the author only diagnosed a problem.",
      "<b>Opposite view</b> — states the position the author spent the passage rejecting."
    ]},
    { t:"tip", x:"If you are down to two, ask which one a <b>single paragraph</b> could support on its own. That one is the narrow trap." }
  ]},

  { id: "tr-rc-detail", title: "Detail questions: always go back", mins: 2, blocks: [
    { t:"p", x:"Detail and \"according to the passage\" questions are free marks — and the only way to lose them is to answer from memory. Locate the line, read the sentence before and after it, then choose." },
    { t:"h", x:"Finding the line fast" },
    { t:"ul", items:[
      "The question usually contains an unusual noun from the passage. Scan for that word, not for the idea.",
      "Questions tend to follow the passage's order, so the next question is usually below the last one you answered.",
      "Read one sentence either side. The GMAT loves to put the qualifier in the neighbouring sentence."
    ]},
    { t:"warn", x:"The correct answer is a <b>paraphrase</b>. A choice that repeats the passage's exact words is more often a trap that reuses the vocabulary while changing what is claimed about it." },
    { t:"tip", x:"Preserve the passage's hedges. If the text says a result \"may suggest\", the answer says \"may suggest\" — an option that upgrades it to \"demonstrates\" is wrong however well it matches otherwise." }
  ]},

  { id: "tr-rc-infer", title: "Inference: pick the boring choice", mins: 2, blocks: [
    { t:"p", x:"On the GMAT an inference is not a leap. It is something that <b>must</b> be true given the text — usually one small step from a sentence you have already read. The correct answer is nearly always the least exciting one on the list." },
    { t:"h", x:"The test" },
    { t:"p", x:"For each survivor ask: <i>could the passage be entirely true and this choice still be false?</i> If yes, it is not an inference." },
    { t:"table", head:["Choice language","Verdict"], rows:[
      ["may, can, some, at least one, not necessarily","usually safe"],
      ["all, never, only, must always, cannot ever","usually too strong"],
      ["a cause the passage never named","out of scope"],
      ["a comparison the passage never made","out of scope"]
    ]},
    { t:"warn", x:"\"Out of scope\" is the biggest wrong-answer family in RC. A choice can be true in the real world, sensible, and even something the author would probably agree with — and still be wrong, because the passage did not say it." },
    { t:"tip", x:"Where a passage separates two things people usually conflate, expect an inference question asserting they can <b>come apart</b>. Choose the option that keeps them independent." }
  ]},

  { id: "tr-rc-function", title: "Function: why is this sentence here?", mins: 2, blocks: [
    { t:"p", x:"\"The author mentions X primarily in order to…\" is not asking what X is. It is asking what <b>job</b> X does for the paragraph around it. Answer it by covering X and asking what would be missing." },
    { t:"h", x:"The standard jobs" },
    { t:"ul", items:[
      "To give an <b>example</b> of the claim just made.",
      "To raise an <b>objection</b> the author will then answer.",
      "To provide <b>evidence</b> for the paragraph's point.",
      "To draw a <b>contrast</b> with what came before.",
      "To qualify a claim that was stated too strongly."
    ]},
    { t:"p", x:"Read the sentence <b>before</b> the reference. Nine times out of ten it states the point the detail was brought in to serve, and the correct answer is a restatement of that point." },
    { t:"warn", x:"A choice that accurately describes what X <i>is</i> — rather than what it is doing — is the standard trap here. It will feel right because it is true." },
    { t:"tip", x:"Keep straight which motive belongs to which group. If journalists in the passage are confused and consultants have an interest, do not let an answer choice swap them." }
  ]},

  { id: "tr-rc-kill", title: "Killing wrong answers by language", mins: 2, blocks: [
    { t:"p", x:"You will often be faster eliminating four choices than confirming one. Most wrong RC answers are wrong for a small number of recognisable reasons, and several are visible in the wording alone." },
    { t:"table", head:["Fingerprint","Example wording"], rows:[
      ["<b>Extreme</b>","\"proves that all…\", \"is never\", \"the only reason\""],
      ["<b>Out of scope</b>","introduces a group, cause or period the passage never mentions"],
      ["<b>Reversed</b>","states the opposite relationship — cause and effect swapped"],
      ["<b>Half right</b>","a true clause welded to a false one"],
      ["<b>Wrong tone</b>","hostile wording for a measured author, or praise for a critic"],
      ["<b>Right words, wrong claim</b>","reuses the passage's vocabulary to say something it did not"]
    ]},
    { t:"warn", x:"\"Half right\" is the hardest to catch because the first half reads perfectly. Check <b>every</b> clause of a long answer choice; one false word is enough to kill it." },
    { t:"tip", x:"When two choices are left and both look supportable, find the <b>single word</b> that differs in strength or scope. That word is the whole question." }
  ]}

]},

/* ======================= CRITICAL REASONING ======================= */
{
  id: "tr-cr", section: "cr", kind: "trick", icon: "🧠",
  title: "CR speed tricks",
  source: "Work the gap in the argument, not the wall of answer choices",
  parts: [

  { id: "tr-cr-stem", title: "Read the question stem first", mins: 2, blocks: [
    { t:"p", x:"Two seconds spent on the stem before the argument changes how you read the argument. You will be hunting for a specific thing instead of absorbing everything and then deciding what mattered." },
    { t:"table", head:["Stem says","Read looking for"], rows:[
      ["weaken / cast doubt","the gap between evidence and conclusion"],
      ["strengthen / support","the same gap, to be filled"],
      ["assumption / depends on","what must be true but is never stated"],
      ["must be true / inferred","only what the facts force — there is no conclusion to attack"],
      ["explain / resolve","the two facts that appear to clash"],
      ["flaw","the name of the reasoning error"],
      ["boldface","the role of each marked sentence"]
    ]},
    { t:"warn", x:"\"Must be true\" questions have <b>no gap to criticise</b>. Treating one like a weaken question is the fastest way to a wrong answer, because you will start looking for what the argument assumed instead of what it established." },
    { t:"tip", x:"If the stem names a person or a specific claim — \"which most weakens <b>Dr. Chen's</b> conclusion\" — that is the only conclusion in play. Arguments with two speakers hang on exactly this." }
  ]},

  { id: "tr-cr-conclusion", title: "Find the conclusion in one pass", mins: 2, blocks: [
    { t:"p", x:"Every weaken, strengthen and assumption question is about a single sentence: the conclusion. Everything else is either evidence for it or background." },
    { t:"h", x:"The therefore test" },
    { t:"p", x:"Take the two candidate sentences and put \"therefore\" between them. Only one order makes sense — the sentence after \"therefore\" is the conclusion." },
    { t:"table", head:["Signal","Introduces"], rows:[
      ["therefore, thus, so, hence, clearly","the conclusion"],
      ["because, since, given that, after all","evidence"],
      ["but, however, yet","often the author's conclusion, after a view they reject"]
    ]},
    { t:"warn", x:"The conclusion is often <b>not</b> the last sentence. A very common shape is: someone's claim, then \"but\", then the author's counter-claim, then evidence for it. The conclusion sits in the middle." },
    { t:"tip", x:"Strip the conclusion to its bones — <b>X causes Y</b>, <b>the plan will work</b>, <b>A is better than B</b>. The shape tells you what to attack: a cause, a plan, or a comparison." }
  ]},

  { id: "tr-cr-gap", title: "Prephrase the gap before you read the choices", mins: 3, blocks: [
    { t:"p", x:"An argument reaches further than its evidence does. The distance between them is the gap, and on nearly every question type the answer lives there. Name the gap out loud before looking down — then you are matching against your own idea, not being persuaded by five well-written ones." },
    { t:"h", x:"The three gaps that cover most arguments" },
    { t:"table", head:["Argument shape","The gap"], rows:[
      ["Two things happen together, so one causes the other","something else could cause both, or the causation runs the other way"],
      ["This survey / sample shows…","the sample may not represent the whole"],
      ["The plan will achieve the goal","the plan may have a side effect, or the obstacle may lie elsewhere"]
    ]},
    { t:"eg",
      q:"Town councillors note that since the new cycle lane opened, injuries to cyclists in the town have fallen by 40 percent. They conclude that the lane has made cycling safer.",
      choices:["The lane cost more than budgeted.","Cyclist numbers in the town fell by 60 percent after a nearby employer relocated.","Neighbouring towns have no cycle lanes.","Most injuries occur at junctions.","The council plans a second lane."],
      ans:"B",
      why:"Prephrase the gap: fewer <i>injuries</i> does not mean a lower <i>risk</i> — the number of cyclists could have dropped. (B) is exactly that objection, and it was predictable before the choices were read. Everything else changes the subject to cost, other towns, or future plans." },
    { t:"tip", x:"If your prephrase matches nothing, do not force it — you have probably mis-identified the conclusion. Re-read the stem's last clause rather than re-reading all five choices." }
  ]},

  { id: "tr-cr-negate", title: "Assumption: the negation test", mins: 2, blocks: [
    { t:"p", x:"An assumption is something the argument <b>needs</b> in order to work. So there is a mechanical test: negate the choice. If the argument collapses, that was the assumption. If the argument survives, it was not." },
    { t:"ol", items:[
      "Take the choice and make it false in the smallest possible way.",
      "Re-read the conclusion with the negated statement in place.",
      "Does the conclusion still follow? Then this choice is not required."
    ]},
    { t:"note", x:"Negate gently. The opposite of \"all trains were late\" is \"at least one train was not late\", not \"no trains were late\". An over-negation breaks arguments that were fine." },
    { t:"warn", x:"Assumption answers are usually <b>modest</b>: \"the sample was not unrepresentative\", \"no other factor accounts for the change\". A choice that would make the conclusion certain is doing too much — that is a strengthener, not an assumption." },
    { t:"tip", x:"Watch for the assumption that simply rules out an alternative explanation. On a causal conclusion it is nearly always the answer." }
  ]},

  { id: "tr-cr-weaken", title: "Weaken and strengthen: aim at the gap", mins: 2, blocks: [
    { t:"p", x:"You do not need to disprove the conclusion — only to make it <b>less likely</b>. One relevant new fact is enough, and the correct answer is usually a single sentence that walks into the gap you already named." },
    { t:"table", head:["Conclusion is…","Weaken it by","Strengthen it by"], rows:[
      ["X causes Y","naming another cause, or reversing the direction","ruling other causes out"],
      ["the plan will work","showing an obstacle it does not address","showing the obstacle is handled"],
      ["the sample shows…","showing the sample is unusual","showing the sample is typical"],
      ["A is better than B","showing the comparison ignores a cost","closing the ignored dimension"]
    ]},
    { t:"h", x:"Instant eliminations" },
    { t:"ul", items:[
      "<b>Attacks a premise</b> — premises are given as true, so a choice that disputes one is out.",
      "<b>Restates the evidence</b> — adding nothing changes nothing.",
      "<b>Wrong direction</b> — a strengthener sitting in a weaken question. This is the most seductive wrong answer on the section; check the stem again before you pick.",
      "<b>Out of scope</b> — true, interesting, and about something the conclusion never claimed."
    ]},
    { t:"tip", x:"Ask of each survivor: <i>if this were true, would I be more or less willing to bet on the conclusion?</i> If the honest answer is \"about the same\", it is wrong." }
  ]},

  { id: "tr-cr-paradox", title: "Paradox: let both facts stand", mins: 2, blocks: [
    { t:"p", x:"Explain-the-discrepancy questions give you two facts that seem to conflict. The correct answer adds a third fact that makes both of them true at once — it never denies either one." },
    { t:"ol", items:[
      "State the puzzle in one line: <i>sales rose but revenue fell</i>.",
      "Ask what could be true of the world that makes both happen.",
      "Test each choice against <b>both</b> facts, not just one."
    ]},
    { t:"p", x:"The usual mechanisms: a change in mix or price, a hidden group, a change in how something is measured or reported, or a difference between a rate and a total." },
    { t:"warn", x:"A choice that explains away one of the two facts is wrong. Both facts are given as true, and the question is why they coexist." },
    { t:"tip", x:"Numbers and percentages are the workhorse of this question type. \"More accidents but a lower accident rate\" resolves the moment you notice the population grew." }
  ]},

  { id: "tr-cr-infer", title: "Must be true: stay inside the text", mins: 2, blocks: [
    { t:"p", x:"Inference questions invert everything else. There is no argument to attack and no gap to fill — only facts, and an answer that <b>cannot be false</b> if those facts hold." },
    { t:"ul", items:[
      "The right answer often combines <b>two</b> statements from the stimulus and does nothing else.",
      "It is usually weaker than the stimulus, not stronger — \"some\", \"at least\", \"not all\".",
      "Anything requiring outside knowledge is wrong, however obvious it seems."
    ]},
    { t:"warn", x:"Do not pick the choice that <b>would explain</b> the facts. That is a hypothesis, not an inference — a very common trap on this question type." },
    { t:"tip", x:"When two survive, ask which one you could argue against using only the stimulus. That one is out; the other must be true." }
  ]},

  { id: "tr-cr-boldface", title: "Boldface and evaluate: label before you choose", mins: 2, blocks: [
    { t:"h", x:"Boldface" },
    { t:"p", x:"Before reading any choice, label each bold portion with one word: <b>evidence</b>, <b>conclusion</b>, <b>opposing view</b>, or <b>the author's counter</b>. Then read the choices as a matching exercise and drop any whose first label is wrong — that alone usually leaves two." },
    { t:"ul", items:[
      "Find the author's own conclusion first; every label is relative to it.",
      "A bold sentence that the author disagrees with is a view being reported, not a premise.",
      "Check <b>both</b> labels in every choice. Half-right is the standard trap here."
    ]},
    { t:"h", x:"Evaluate the argument" },
    { t:"p", x:"\"Which would be most useful to know?\" is a weaken question wearing a disguise. Apply the <b>two-answer test</b>: imagine the answer to the proposed question coming back yes, then no. If the two answers push the conclusion in opposite directions, the choice is relevant. If the conclusion is unaffected either way, it is not." },
    { t:"tip", x:"Both types reward labelling over reading. Decide what the argument is doing first, and the five choices become a checklist rather than five new arguments to evaluate." }
  ]}

]}

];
