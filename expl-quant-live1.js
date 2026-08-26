/* Rewritten explanations — quant-live-1 (mostly Data Sufficiency).

   Data Sufficiency has its own discipline. You are never asked for the value,
   only whether it is pinned down, so the winning move is to hunt for TWO
   different answers consistent with a statement. Find two and the statement is
   insufficient; prove only one is possible and it is sufficient. The five
   choices are fixed: (A) statement 1 alone, (B) statement 2 alone, (C) both
   together only, (D) each alone, (E) not even together. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-1#1": {
  steps: "Step 1 — Work inside the speckled group first, since it has a total.\n" +
    "Let \\(F\\) be female speckled. Males are \\(2F + 45\\), and together they make 645:\n" +
    "\\(F + 2F + 45 = 645\\), so \\(3F = 600\\) and \\(F = 200\\).\n" +
    "Step 2 — Use the first ratio. Female speckled : male rainbow \\(= 4 : 3\\), so \\(\\dfrac{200}{MR} = \\dfrac43\\), giving \\(MR = 150\\).\n" +
    "Step 3 — Use the second ratio to get the grand total. Male rainbow : all trout \\(= 3 : 20\\), so \\(\\dfrac{150}{T} = \\dfrac{3}{20}\\) and \\(T = 1000\\).\n" +
    "Step 4 — Rainbow trout altogether: \\(1000 - 645 = 355\\).\n" +
    "Step 5 — Female rainbow \\(= 355 - 150 = 205\\).",
  fast: "The chain has one entry point — the 645 — so go through it in order and never look back: \\(200 \\to 150 \\to 1000 \\to 355 \\to 205\\).\n" +
    "Each step uses exactly one given fact, and each produces a whole number, which is your running confirmation that you have read the ratios the right way round.",
  traps: "(A) 192 and (B) 195 come from mis-scaling one of the two ratios (for instance reading \\(4:3\\) as male-to-female).\n" +
    "(C) 200 is the number of [[female speckled]] trout — a value computed on the way, and the most likely wrong selection.\n" +
    "(E) 208 is a near-miss for anyone who slips in the final subtraction.",
  take: "Multi-ratio questions have one anchor with a real number. Find it, then walk the chain one relationship at a time — and check that every intermediate count is a whole number."
},

"quant-live-1#2": {
  steps: "Step 1 — Translate the stem. Let \\(F\\) be French students and \\(J\\) Japanese students. \"4% of the French students also study Japanese\" means \\(\\text{both} = 0.04F\\).\n" +
    "Step 2 — The question is whether \\(F > J\\).\n" +
    "Step 3 — Statement (1): both \\(= 16\\), so \\(0.04F = 16\\) and \\(F = 400\\). But \\(J\\) is only known to be at least 100. If \\(J = 100\\) the answer is yes; if \\(J = 500\\) the answer is no. Two answers, so [[insufficient]].\n" +
    "Step 4 — Statement (2): 10% of Japanese students also study French, so \\(\\text{both} = 0.10J\\).\n" +
    "Step 5 — Both expressions describe the same group: \\(0.04F = 0.10J\\), so \\(F = 2.5J\\).\n" +
    "Step 6 — \\(F\\) is always 2.5 times \\(J\\), so \\(F > J\\) always. A definite yes — [[sufficient]].",
  fast: "Statement (2) gives a second expression for the same overlap, and setting the two equal makes the actual head counts cancel: \\(0.04F = 0.10J\\).\n" +
    "That is the whole question. A consistent \"yes\" answers a yes/no question just as completely as a number would — you never need to know how many students there are.",
  traps: "(A) is tempting because (1) produces a clean number, \\(F = 400\\). But a number for one variable is not enough when the comparison needs both, and \\(J\\) is bounded only below.\n" +
    "(C) and (D) both over-credit statement (1).\n" +
    "(E) misses that (2) alone pins the [[ratio]], which is all a comparison needs.",
  take: "In DS, a statement that fixes a ratio can settle a comparison without fixing any value. And \"at least 100\" is a range, not a number — it almost never makes a statement sufficient on its own."
},

"quant-live-1#3": {
  steps: "Step 1 — The fractions are thirds, quarters and fifths, so pick a total that all of them divide: 60 rooms.\n" +
    "Step 2 — Rented: \\(\\dfrac34 \\times 60 = 45\\). Not rented: \\(15\\).\n" +
    "Step 3 — Air-conditioned: \\(\\dfrac35 \\times 60 = 36\\).\n" +
    "Step 4 — Air-conditioned and rented: \\(\\dfrac23 \\times 36 = 24\\).\n" +
    "Step 5 — Air-conditioned and [[not]] rented: \\(36 - 24 = 12\\).\n" +
    "Step 6 — As a percent of the unrented rooms: \\(\\dfrac{12}{15} = 80\\%\\).",
  fast: "Choose 60 — the LCM of 3, 4 and 5 — and every figure comes out whole. Then it is a two-by-two table: 15 unrented rooms, 12 of them air-conditioned.\n" +
    "\\(\\dfrac{12}{15} = \\dfrac45 = 80\\%\\).\n" +
    "The surprise is that the answer is so high, and that is the point: only a third of the air-conditioned rooms went unrented, but unrented rooms are a small group.",
  traps: "(D) 40% is \\(\\dfrac{12}{30}\\) or a similar mis-set denominator — using the wrong base is the whole difficulty here.\n" +
    "(A) 20% is the unrented [[share of all rooms]] (\\(15/60\\)), not the answer.\n" +
    "(B) 33.33% is the fraction of air-conditioned rooms that went unrented (\\(12/36\\)) — a genuine quantity, and the wrong one.\n" +
    "(C) 35% is a decoy between them.",
  take: "Pick a smart total — the LCM of every denominator — and build the two-by-two table. Then read the question's base carefully: \"percent of the rooms that were not rented\" fixes the denominator at 15, not 36 or 60."
},

"quant-live-1#4": {
  steps: "Step 1 — Translate the instruction one clause at a time.\n" +
    "Step 2 — \"2 percent of one's annual income\" is \\(0.02A\\).\n" +
    "Step 3 — \"the average of 100 and 1 percent of one's annual income\" is \\(\\dfrac{100 + 0.01A}{2} = 50 + 0.005A\\).\n" +
    "Step 4 — Add the two parts: \\(0.02A + 50 + 0.005A = 50 + 0.025A\\).\n" +
    "Step 5 — Convert the decimal to a fraction: \\(0.025 = \\dfrac{1}{40}\\), so the tax is \\(50 + \\dfrac{A}{40}\\).",
  fast: "Test a value. Take \\(A = 1000\\): the tax is \\(20 + \\dfrac{100 + 10}{2} = 20 + 55 = 75\\).\n" +
    "Now check the choices at \\(A = 1000\\): (A) gives 55, (B) gives 80, (C) gives \\(50 + 25 = 75\\) ✓, (D) gives 120, (E) gives 130.\n" +
    "Picking a number is faster than the algebra and immune to a misread decimal.",
  traps: "(A) \\(50 + \\dfrac{A}{200}\\) uses only the 0.5% inside the average and drops the 2%.\n" +
    "(B) \\(50 + \\dfrac{3A}{100}\\) adds 2% and 1% without halving the second — the error of averaging incorrectly.\n" +
    "(D) and (E) both start at 100, forgetting that the 100 units are inside an [[average]] and so contribute only 50.",
  take: "For \"which formula\" questions, substitute one convenient value and test the choices. The averaging step is where these are won or lost — an average of two things halves both of them."
},

"quant-live-1#5": {
  steps: "Step 1 — The question is whether \\(r > 8\\).\n" +
    "Step 2 — Statement (1): \\(1000\\left[\\left(1 + \\dfrac{r}{100}\\right)^2 - 1\\right] = 210\\).\n" +
    "Divide by 1000 and add 1: \\(\\left(1 + \\dfrac{r}{100}\\right)^2 = 1.21\\).\n" +
    "Step 3 — Take the positive root (a rate makes the factor positive): \\(1 + \\dfrac{r}{100} = 1.1\\), so \\(r = 10\\). That is greater than 8 — [[sufficient]].\n" +
    "Step 4 — Statement (2) hands you \\(\\left(1 + \\dfrac{r}{100}\\right)^2 = 1.21\\) directly, which is the very equation statement (1) reduces to.\n" +
    "Step 5 — Same conclusion, \\(r = 10\\) — [[sufficient]].\n" +
    "Step 6 — Each alone is enough.",
  fast: "Reduce statement (1) and you arrive at exactly statement (2). Once you see that the two statements say the same thing, the answer must be (D) or (E) — and since either determines \\(r\\), it is (D).\n" +
    "Recognising \\(1.21 = (1.1)^2\\) on sight is what makes this quick.",
  traps: "(A) and (B) each credit one statement while denying the other, which is impossible once you notice they are equivalent.\n" +
    "(C) claims neither works alone — but both do.\n" +
    "(E) claims neither works at all, ignoring that a single equation in one unknown determines it.\n" +
    "A structural tip: when two DS statements turn out to be restatements of each other, they must stand or fall together — so the three choices that split them, (A), (B) and (C), are all off the table before you compute anything.",
  take: "Simplify each statement before judging it. Two statements that reduce to the same equation can only give (D) or (E) — and note you need \\(r\\) only well enough to answer yes/no."
},

"quant-live-1#6": {
  steps: "Step 1 — Set up the mixture equation. Gravel from each source must equal gravel in the result:\n" +
    "\\(0.10x + 0.02y = 0.05z\\), with \\(x + y = z\\).\n" +
    "Step 2 — Substitute \\(z = x + y\\): \\(0.10x + 0.02y = 0.05x + 0.05y\\).\n" +
    "Step 3 — Rearrange: \\(0.05x = 0.03y\\), so \\(x = 0.6y\\).\n" +
    "That single relationship is the key: \\(x\\) and \\(y\\) are locked in the ratio \\(3 : 5\\).\n" +
    "Step 4 — Statement (1): \\(y = 10\\) gives \\(x = 6\\) — [[sufficient]].\n" +
    "Step 5 — Statement (2): \\(z = 16\\). With \\(x = 0.6y\\) and \\(x + y = 16\\): \\(1.6y = 16\\), so \\(y = 10\\) and \\(x = 6\\) — [[sufficient]].\n" +
    "Step 6 — Each alone works.",
  fast: "Alligation gives the ratio instantly: 5% sits 3 points above the 2% mixture and 5 points below the 10% mixture, so \\(x : y = 3 : 5\\).\n" +
    "Once the ratio is fixed by the stem, [[any]] one absolute quantity determines all three. Both statements supply one, so both are sufficient — answer (D).\n" +
    "Realising that the stem alone fixes the ratio is what makes this a ten-second question.",
  traps: "(A) and (B) each miss that the other statement also supplies a single absolute quantity.\n" +
    "(C) is the classic over-caution: the two statements are not needed together because either one plus the stem's ratio is enough.\n" +
    "(E) ignores the ratio the stem hands you.",
  take: "When the stem fixes a ratio, one absolute value determines everything. Extract the ratio from the stem [[before]] reading the statements — it changes what each one is worth."
},

"quant-live-1#7": {
  steps: "Step 1 — Write both payments. Agent \\(= 0.15R\\). Publicist \\(= 0.05R + \\text{fee}\\), where \\(R\\) is total royalties.\n" +
    "Step 2 — The question \"did she pay the agent more\" becomes: is \\(0.15R > 0.05R + \\text{fee}\\), i.e. is \\(0.10R > \\text{fee}\\)?\n" +
    "So only two things matter: total royalties and the fee.\n" +
    "Step 3 — Statement (1): fee \\(= \\$2{,}000\\). Royalties unknown — [[insufficient]].\n" +
    "Step 4 — Statement (2): $3,500 average per novel, but the [[number of novels]] is never given, so \\(R\\) is unknown — insufficient.\n" +
    "Step 5 — Together: the condition is \\(0.10R > 2000\\), i.e. \\(R > \\$20{,}000\\), which needs more than about 5.7 novels. With 4 novels the answer is no; with 10 it is yes.\n" +
    "Step 6 — Still two answers, so not sufficient even together.",
  fast: "Reduce the question first: it is only \"is \\(0.10R > \\text{fee}\\)?\". Now scan the statements for those two quantities.\n" +
    "(1) gives the fee. (2) gives an average, not a total — and an average without a count is not a total. So \\(R\\) is never determined, and the answer is (E) without any testing.\n" +
    "Simplifying the question before reading the statements is the single highest-value habit in Data Sufficiency.",
  traps: "(C) is the trap: two statements that each supply \"half\" of what you need feel complete together, but (2) supplies an average rather than a total.\n" +
    "(A) and (B) each overstate one statement.\n" +
    "(D) is far off — neither works alone.",
  take: "Simplify the question to its minimal form before reading the statements. And treat \"an average of $X per item\" as insufficient for a total unless the number of items is also given."
},

"quant-live-1#8": {
  steps: "Step 1 — The stem gives women : children \\(= 5 : 2\\). The question asks for the [[number]] of men, so a ratio alone will never be enough — some absolute figure is needed.\n" +
    "Step 2 — Statement (1): children : men \\(= 5 : 11\\). Chain it with the stem by matching children: \\(5 : 2 = 25 : 10\\) and \\(5 : 11 = 10 : 22\\), so W : C : M \\(= 25 : 10 : 22\\).\n" +
    "That is still only a ratio — the group could be 25/10/22 or double that — [[insufficient]].\n" +
    "Step 3 — Statement (2): women \\(< 30\\). Alone this says nothing about men — insufficient.\n" +
    "Step 4 — Together: women \\(= 25k\\) for a positive integer \\(k\\), and \\(25k < 30\\) forces \\(k = 1\\).\n" +
    "Step 5 — So W \\(= 25\\), C \\(= 10\\), M \\(= 22\\). Sufficient together.",
  fast: "Chain the ratios to \\(25 : 10 : 22\\) — 57 people per \"unit\". The only thing missing is the scale factor, and \"fewer than 30 women\" allows just one: \\(k = 1\\).\n" +
    "The insight is that people come in whole numbers, so \\(k\\) must be a positive integer. That is what turns a loose inequality into an exact answer.",
  traps: "(A) treats the chained ratio as an answer — but a ratio has infinitely many scalings.\n" +
    "(B) is far too weak on its own.\n" +
    "(D) over-credits both.\n" +
    "(E) misses the integer constraint: without it, \\(25k < 30\\) would permit fractional groups and nothing would be determined.",
  take: "Ratios never give counts without a scale. Look for the constraint that pins the multiplier — an inequality plus the fact that people are whole numbers is a very common way the GMAT does it."
},

"quant-live-1#9": {
  steps: "Step 1 — Per capita income \\(= \\dfrac{\\text{total income}}{\\text{population}}\\). To decide whether it exceeds $16,500 you need control of both.\n" +
    "Step 2 — Statement (1) gives a [[lower]] limit for population, 330,000, and says nothing about income — insufficient.\n" +
    "Step 3 — Statement (2) gives a lower limit for income, $5.5 billion, and says nothing about population — insufficient.\n" +
    "Step 4 — Together: income \\(\\ge 5.5\\) billion and population \\(\\ge 330{,}000\\).\n" +
    "Step 5 — Test the extremes. At exactly 5.5 billion over exactly 330,000 people, per capita is \\(\\$16{,}667\\) — above the threshold.\n" +
    "Step 6 — But the population could be larger: 5.5 billion over 400,000 gives $13,750 — below it.\n" +
    "Step 7 — Both answers remain possible, so not sufficient together.",
  fast: "Both statements bound their quantity from [[below]], and the two quantities pull the ratio in opposite directions — a bigger numerator raises per capita income, a bigger denominator lowers it.\n" +
    "Two lower limits therefore bound the ratio in neither direction. Recognising that pattern answers (E) without testing any numbers.",
  traps: "(C) is the natural trap: two limits feel like a box, but they are limits on the same side.\n" +
    "To pin a ratio down you would need a lower limit on the numerator and an [[upper]] limit on the denominator — which is exactly what is not offered.\n" +
    "(A) and (B) each rely on one quantity alone; (D) doubles that error.",
  take: "For a ratio, a lower bound on the top and a lower bound on the bottom bound nothing. You need bounds that push the ratio the [[same]] way — min numerator with max denominator, or the reverse."
},

"quant-live-1#10": {
  steps: "Step 1 — Six distinct positive counts summing to 75, with country A second largest. Is A \\(> 10\\)?\n" +
    "Step 2 — Statement (1): one country sent 41. If 41 is the largest, the other five share 34 and A is the largest of those five.\n" +
    "Step 3 — Two cases fit: \\(34 = 12 + 9 + 7 + 5 + 1\\) gives A \\(= 12\\) (yes), while \\(34 = 10 + 9 + 8 + 6 + 1\\) gives A \\(= 10\\) (no) — [[insufficient]].\n" +
    "Step 4 — Statement (2): A \\(< 12\\), so A could be 11 (yes) or 9 (no) — insufficient.\n" +
    "Step 5 — Together: A \\(< 12\\) and one country sent 41.\n" +
    "A \\(= 11\\) works: the remaining four sum to 23, for instance \\(9 + 7 + 5 + 2\\).\n" +
    "A \\(= 10\\) also works: the remaining four sum to 24, for instance \\(9 + 8 + 6 + 1\\).\n" +
    "Step 6 — Both a yes and a no survive, so not sufficient together.",
  fast: "Attack it by construction. The question is a yes/no about a threshold, so build one example above the line and one below — if both exist, the statement fails.\n" +
    "Here both A \\(= 11\\) and A \\(= 10\\) can be completed into a legal set of six distinct numbers summing to 75, and both satisfy every constraint. Two answers means (E).\n" +
    "Constructing examples is almost always faster than reasoning abstractly about \"distinct positive integers\".",
  traps: "(C) is the trap: the two statements narrow A to 10 or 11, which feels decisive until you notice that 10 and 11 fall on [[opposite]] sides of the \"more than 10\" line.\n" +
    "(A) and (B) each miss the counterexample within a single statement.\n" +
    "(D) is far off.",
  take: "For yes/no DS with a threshold, try to build one case on each side. And check where the threshold actually falls — narrowing a value to two options is useless if those two options disagree."
},

"quant-live-1#11": {
  steps: "Step 1 — Constant rate means exponential growth: after \\(n\\) years the herd is \\(500(1+r)^n\\). The doubling time depends only on \\(r\\), so the question is really \"is \\(r\\) determined?\".\n" +
    "Step 2 — Statement (1): \\((1+r)^{10} > 10\\). That is an inequality, so \\(r\\) could be 26% or 40%, giving different doubling times — [[insufficient]].\n" +
    "Step 3 — Statement (2): at twice the current rate the herd would reach 980 in two years:\n" +
    "\\(500(1 + 2r)^2 = 980\\).\n" +
    "Step 4 — \\((1+2r)^2 = 1.96\\), so \\(1 + 2r = 1.4\\) and \\(r = 0.2\\).\n" +
    "Step 5 — With \\(r\\) pinned at 20%, the doubling time solves \\((1.2)^n = 2\\) — a single determined value — [[sufficient]].",
  fast: "The whole question reduces to \"does the statement fix \\(r\\)?\" — you never have to compute the doubling time itself.\n" +
    "(1) is an inequality, so it cannot fix anything. (2) is an equation with one unknown, so it does. Answer (B), decided by the [[form]] of each statement rather than its content.\n" +
    "Recognising \\(1.96 = (1.4)^2\\) confirms (2) resolves cleanly.",
  traps: "(A) treats an inequality as though it pinned a value.\n" +
    "(C) and (D) over-credit statement (1).\n" +
    "(E) misses that the doubling time need only be [[determinable]], not comfortably computable — you do not need to evaluate \\(\\log_{1.2} 2\\) to know it is a single number.",
  take: "In DS you need existence and uniqueness, not a tidy value. An inequality almost never determines a rate; an equation in one unknown almost always does."
},

"quant-live-1#12": {
  steps: "Step 1 — The culture multiplies by \\(x\\) every \\(y\\) minutes, so after \\(t\\) minutes it has grown by a factor of \\(x^{t/y}\\).\n" +
    "Step 2 — The question asks for the \\(t\\) making \\(x^{t/y} = 10{,}000\\). What matters is the growth factor [[per minute]], namely \\(x^{1/y}\\) — not \\(x\\) and \\(y\\) separately.\n" +
    "Step 3 — Statement (1): \\(\\sqrt[y]{x} = 10\\), which is exactly \\(x^{1/y} = 10\\). So the culture multiplies by 10 every minute, and \\(10^t = 10^4\\) gives \\(t = 4\\) — [[sufficient]].\n" +
    "Step 4 — Statement (2): in two minutes it grows 100-fold, so the per-minute factor is \\(\\sqrt{100} = 10\\) — the same information, giving \\(t = 4\\) — [[sufficient]].\n" +
    "Step 5 — Each alone is enough.",
  fast: "Identify the one quantity the answer depends on: the per-minute multiplier. Both statements deliver it — (1) literally, (2) after one square root.\n" +
    "Neither \\(x\\) nor \\(y\\) is ever needed on its own, which is why a statement that pins only their combination is still sufficient.",
  traps: "(A) and (B) each miss that the other statement encodes the same per-minute rate.\n" +
    "(C) is unnecessary caution.\n" +
    "(E) is the trap for anyone who insists on finding \\(x\\) and \\(y\\) individually — they are not determined, and they do not need to be.",
  take: "Work out which combination of unknowns the answer actually depends on. A statement that fixes that combination is sufficient even when the individual variables stay unknown."
},

"quant-live-1#13": {
  steps: "Step 1 — Growth is 20% a year, so the value is \\(P(1.2)^n\\) for a principal \\(P\\) and \\(n\\) years. The question asks for today's [[value]], so both \\(P\\) and \\(n\\) matter.\n" +
    "Step 2 — Statement (1): the value has risen 44%, so \\((1.2)^n = 1.44\\) and \\(n = 2\\). But \\(P\\) is unknown, so the current value could be anything — [[insufficient]].\n" +
    "Step 3 — Statement (2): withdrawing $600 one year ago would have removed \\(600 \\times 1.2 = \\$720\\) from today's value, since that $600 would itself have grown 20%.\n" +
    "Step 4 — That $720 is stated to be 12% of today's value: \\(0.12V = 720\\).\n" +
    "Step 5 — \\(V = \\$6{,}000\\) — [[sufficient]].",
  fast: "Statement (2) is a percentage of the [[unknown you want]], which is the shape that almost always makes a DS statement sufficient.\n" +
    "The only real step is remembering that money withdrawn a year ago would have grown for that year: \\(600 \\times 1.2 = 720\\).\n" +
    "Statement (1) fixes the elapsed time but never the size, so it cannot give a dollar figure — that asymmetry decides the question.",
  traps: "(A) mistakes knowing \\(n\\) for knowing the value.\n" +
    "(C) treats (1) as a necessary supplement, but (2) already determines \\(V\\) on its own.\n" +
    "(D) over-credits (1); (E) misses (2) entirely.\n" +
    "The subtlest error is using $600 rather than $720 in statement (2), which gives \\(V = \\$5{,}000\\) — still a single value, so the choice would not change, but the reasoning would be wrong.",
  take: "Ask what the question wants: a rate, a time, or an amount. A statement that fixes the growth rate or elapsed time can never produce an amount without a principal — but a statement expressing a known sum as a percentage of the target does."
}

});
