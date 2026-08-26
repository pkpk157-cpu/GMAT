/* Rewritten explanations — ratios and proportions.

   The habit worth building here: turn a ratio into "parts", find what one part
   is worth, and read off whatever the question asks for. Chained ratios link by
   scaling the shared term to match. Almost nothing in this topic needs algebra
   once the parts are in place. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-ratio-ex#1": {
  steps: "Step 1 — Deal with the second relationship first, because it pins down an actual value.\n" +
    "Step 2 — \\(2 : x = 4 : 8\\) means \\(\\dfrac{2}{x} = \\dfrac{4}{8} = \\dfrac12\\), so \\(x = 4\\).\n" +
    "Step 3 — Now use \\(x : y = 2 : 3\\) with \\(x = 4\\): \\(\\dfrac{4}{y} = \\dfrac23\\).\n" +
    "Step 4 — Cross-multiply: \\(2y = 12\\), so \\(y = 6\\).",
  fast: "\\(4 : 8\\) reduces to \\(1 : 2\\), so \\(2 : x = 1 : 2\\) gives \\(x = 4\\) by inspection. Then \\(2 : 3\\) scaled to start at 4 is \\(4 : 6\\).\n" +
    "Reduce every ratio before using it — \\(4 : 8\\) is doing nothing that \\(1 : 2\\) does not do more clearly.",
  traps: "(C) 4 is \\(x\\), not \\(y\\) — the intermediate value the question makes you compute on the way.\n" +
    "(B) 8 is lifted straight from the second ratio.\n" +
    "(D) 12 is what you get by scaling \\(2:3\\) as though \\(x\\) were 8.\n" +
    "(E) 14 has no derivation; it is there to fill the list.",
  take: "When one relationship contains a number and the other is pure ratio, solve the numbered one first. And always check the last line: the value you computed first is often the trap."
},

"quant-ratio-ex#2": {
  steps: "Step 1 — Chained ratios link through their shared term, so check whether the shared terms already match.\n" +
    "Step 2 — \\(a : b = 2 : 3\\) and \\(b : c = 3 : 4\\) share \\(b\\), and it is 3 in both — no scaling needed.\n" +
    "Step 3 — \\(b : c = 3 : 4\\) and \\(c : d = 4 : 5\\) share \\(c\\), and it is 4 in both — again no scaling.\n" +
    "Step 4 — So the chain links directly: \\(a : b : c : d = 2 : 3 : 4 : 5\\).",
  fast: "Read down the shared terms: 3 matches 3, 4 matches 4. The chain is already consistent, so just write it out: \\(2 : 3 : 4 : 5\\).\n" +
    "Test writers usually make you scale; when they hand you a chain that already lines up, the answer is a five-second read.",
  traps: "(B) \\(30 : 20 : 15 : 12\\) is the chain of [[reciprocals]] — correct for a question about inversely proportional quantities, wrong here.\n" +
    "(A) \\(5 : 4 : 3 : 2\\) is the answer reversed.\n" +
    "(C) \\(2 : 3 : 4 : 6\\) and (E) \\(2 : 3 : 5 : 4\\) corrupt the last term or two, catching anyone who stops checking after the first link.",
  take: "To chain ratios, scale each so the shared term matches, then write them as one. Check every link — the wrong answers here differ only in the final term."
},

"quant-ratio-ex#3": {
  steps: "Step 1 — Let the integer added be \\(k\\); it goes on both the numerator and the denominator.\n" +
    "Step 2 — The condition is \\(\\dfrac{5 + k}{9 + k} > \\dfrac{7}{10}\\).\n" +
    "Step 3 — Cross-multiply (both denominators are positive, so the inequality direction holds):\n" +
    "\\(10(5 + k) > 7(9 + k)\\).\n" +
    "Step 4 — \\(50 + 10k > 63 + 7k\\), so \\(3k > 13\\).\n" +
    "Step 5 — \\(k > 4.33\\), and the least [[integer]] satisfying that is \\(k = 5\\).",
  fast: "Test the smallest choice first, since the question asks for the least. \\(k = 5\\) gives \\(\\dfrac{10}{14} = \\dfrac57 = 0.714\\), and \\(\\dfrac{7}{10} = 0.7\\). Since \\(0.714 > 0.7\\), it works.\n" +
    "Then check \\(k = 4\\): \\(\\dfrac{9}{13} = 0.692\\), which fails. So 5 is the least.\n" +
    "Two divisions settle it, and testing the smallest candidate first is the right order for any \"least value\" question.",
  traps: "(D) 7, (A) 6, (B) 8 and (E) 9 all satisfy the inequality — they are just not the [[least]] such integer. That is the trap: four of the five choices are technically valid values of \\(k\\), so only the word \"least\" separates them.\n" +
    "Adding the same amount to both terms of a ratio always moves it toward \\(1 : 1\\), so larger \\(k\\) always works once one does.",
  take: "Adding the same number to both terms of a ratio pushes it toward 1. For \"least value\" questions, test the smallest choice first — and check the one below it to prove minimality."
},

"quant-ratio-ex#4": {
  steps: "Step 1 — Let the dimensions be \\(L\\) and \\(W\\).\n" +
    "Step 2 — Decreased by 4: \\(\\dfrac{L - 4}{W - 4} = \\dfrac21\\), so \\(L - 4 = 2W - 8\\), giving \\(L = 2W - 4\\).\n" +
    "Step 3 — Increased by 4: \\(\\dfrac{L + 4}{W + 4} = \\dfrac43\\), so \\(3(L + 4) = 4(W + 4)\\).\n" +
    "Step 4 — Substitute \\(L = 2W - 4\\): \\(3(2W - 4 + 4) = 4W + 16\\), i.e. \\(6W = 4W + 16\\).\n" +
    "Step 5 — \\(W = 8\\) and \\(L = 12\\).",
  fast: "Backsolve — the choices are complete dimension pairs, so each takes two subtractions and two divisions.\n" +
    "Try 12 and 8: minus 4 gives \\(8 : 4 = 2 : 1\\) ✓; plus 4 gives \\(16 : 12 = 4 : 3\\) ✓. Both conditions hold, so stop.\n" +
    "With two conditions and five concrete pairs, checking beats solving a simultaneous system every time.",
  traps: "(A) 6 and 4 satisfies neither condition (\\(2 : 0\\) is undefined).\n" +
    "(C) 16 and 12 satisfies the [[increase]] condition read as the dimensions themselves — it is the \\(4 : 3\\) pair you would write down if you forgot to add the 4.\n" +
    "(D) 24 and 16 keeps the \\(3 : 2\\) shape but fails both tests.\n" +
    "(E) 30 and 4 is nowhere near.",
  take: "Two conditions plus five concrete candidate pairs is a backsolving question, not an algebra question. Check the simpler condition first to eliminate fast."
},

"quant-ratio-ex#5": {
  steps: "Step 1 — The two ratios share the second number, so scale them until it matches.\n" +
    "Step 2 — First : second \\(= 2 : 3\\). Second : third \\(= 5 : 8\\).\n" +
    "Step 3 — The shared term is 3 in one and 5 in the other; the LCM is 15. Scale the first by 5 and the second by 3:\n" +
    "\\(10 : 15\\) and \\(15 : 24\\).\n" +
    "Step 4 — Chain them: \\(10 : 15 : 24\\), a total of 49 parts.\n" +
    "Step 5 — \\(\\dfrac{98}{49} = 2\\) per part, so the second number is \\(15 \\times 2 = 30\\).",
  fast: "Scale to the shared term's LCM (15), giving \\(10 : 15 : 24\\) = 49 parts. That 98 is exactly \\(2 \\times 49\\) confirms the chain is right — test writers pick totals that divide.\n" +
    "Second number \\(= 15 \\times 2 = 30\\).",
  traps: "(A) 20 is the [[first]] number (\\(10 \\times 2\\)) and (D) 48 is the third (\\(24 \\times 2\\)). Both are correct values reported for the wrong position.\n" +
    "(C) 38 and (E) 58 come from chaining without scaling — writing \\(2 : 3 : 8\\) or \\(2 : 5 : 8\\) and dividing 98 by the wrong number of parts.\n" +
    "If the total does not divide evenly by your parts count, you have scaled wrongly.",
  take: "Chain through the LCM of the shared term. Then use the total dividing cleanly by the parts count as your check that the chain is correct."
},

"quant-ratio-ex#6": {
  steps: "Step 1 — Write the original counts in parts: ladies \\(= x\\), gents \\(= 2x\\).\n" +
    "Step 2 — After 2 of each leave: ladies \\(= x - 2\\), gents \\(= 2x - 2\\).\n" +
    "Step 3 — The new ratio is \\(1 : 3\\): \\(\\dfrac{x - 2}{2x - 2} = \\dfrac13\\).\n" +
    "Step 4 — Cross-multiply: \\(3x - 6 = 2x - 2\\), so \\(x = 4\\).\n" +
    "Step 5 — Originally there were \\(x + 2x = 3x = 12\\) people.",
  fast: "Backsolve using the total, which must be a multiple of 3 (the parts sum to 3). Try 12: that is 4 ladies and 8 gents; after 2 of each leave, 2 and 6, which is \\(1 : 3\\) ✓.\n" +
    "Screen first and there is very little left to test: 6 would mean only 2 ladies, and removing 2 of them leaves none at all.",
  traps: "(A) 6 leaves zero ladies after the departure, so the new ratio is undefined.\n" +
    "(B) 9 and (D) 15 are not consistent with a \\(1 : 2\\) split into whole people plus the later condition.\n" +
    "(E) 18 gives 6 and 12 → after departures 4 and 10, which is \\(2 : 5\\), not \\(1 : 3\\).\n" +
    "The answer 4 (the number of ladies) is deliberately absent — the question asks for the [[total]].",
  take: "Ratios are about parts, so the total must be divisible by the sum of the parts. Use that to screen the choices before testing any of them properly."
},

"quant-ratio-ex#7": {
  steps: "Step 1 — Percentage changes act on each group separately, so apply them to the parts.\n" +
    "Step 2 — Boys: \\(7 \\times 1.2 = 8.4\\).\n" +
    "Step 3 — Girls: \\(8 \\times 1.1 = 8.8\\).\n" +
    "Step 4 — New ratio: \\(8.4 : 8.8\\).\n" +
    "Step 5 — Clear the decimals (×10) and reduce by 4: \\(84 : 88 = 21 : 22\\).",
  fast: "Work with the parts directly: \\(7 \\times 1.2 = 8.4\\) and \\(8 \\times 1.1 = 8.8\\), then \\(\\times 5\\) gives \\(42 : 44 = 21 : 22\\).\n" +
    "You never need the actual numbers of students — the ratio is preserved under scaling, which is why (E) \"cannot be determined\" is wrong.",
  traps: "(E) \"Cannot be determined\" tempts anyone who thinks the missing head count matters. It does not: percentage changes preserve ratios.\n" +
    "(A) \\(8 : 9\\) is \\(8.4 : 8.8\\) rounded to whole numbers — close, and wrong.\n" +
    "(B) \\(17 : 18\\) and (D) \\(20 : 21\\) are consecutive-integer decoys of the right general shape.\n" +
    "Useful check: boys grew faster, so the new ratio must be [[closer to equal]] than \\(7 : 8 = 0.875\\). \\(21/22 = 0.955\\) ✓, while \\(8/9 = 0.889\\) barely moves.",
  take: "Percentage changes applied to a ratio work directly on the parts — no head count needed. \"Cannot be determined\" is almost never right when only a ratio is asked for."
},

"quant-ratio-ex#8": {
  steps: "Step 1 — Split the existing 45 litres by the \\(4 : 1\\) ratio: 5 parts of 9 litres each.\n" +
    "Step 2 — Milk \\(= 4 \\times 9 = 36\\) L; water \\(= 1 \\times 9 = 9\\) L.\n" +
    "Step 3 — Adding water leaves the [[milk unchanged]] at 36 L. Let \\(w\\) litres be added.\n" +
    "Step 4 — The new ratio must be \\(3 : 2\\): \\(\\dfrac{36}{9 + w} = \\dfrac32\\).\n" +
    "Step 5 — \\(72 = 27 + 3w\\), so \\(w = 15\\) litres.",
  fast: "Anchor on the quantity that does not change. Milk stays at 36 L, and in the new \\(3 : 2\\) mixture milk is 3 parts, so one part is 12 L.\n" +
    "Water must therefore become \\(2 \\times 12 = 24\\) L, and it is currently 9 L — so add 15 L.\n" +
    "Fixing the unchanged component and re-pricing the part is the standard move for every add-one-ingredient question.",
  traps: "(B) 24 L is the [[final]] amount of water, not the amount added — the most common way to lose this question.\n" +
    "(A) 7.2 L and (D) 1.5 L come from applying the ratio change to the total rather than to the water.\n" +
    "(E) 31.8 L is a decoy near the total volume increase.",
  take: "When one ingredient is added, the other is constant — anchor on the constant one, re-price the part, and subtract what is already there to get the amount [[added]]."
},

"quant-ratio-ex#9": {
  steps: "Step 1 — The ratio \\(9 : 11\\) means 20 parts in total.\n" +
    "Step 2 — Zinc is 9 parts and weighs 28.8 kg, so one part is \\(\\dfrac{28.8}{9} = 3.2\\) kg.\n" +
    "Step 3 — The whole mixture is 20 parts: \\(20 \\times 3.2 = 64\\) kg.",
  fast: "Find the part, then multiply by the total parts: \\(28.8 / 9 = 3.2\\), and \\(3.2 \\times 20 = 64\\).\n" +
    "\\(28.8/9\\) is easier as \\(288/9 = 32\\), then shift the decimal.",
  traps: "(A) 58 and (B) 60 are what you get by adding a mis-scaled copper weight; copper is actually \\(11 \\times 3.2 = 35.2\\) kg, and \\(28.8 + 35.2 = 64\\) ✓.\n" +
    "(D) 70 and (E) 74 overshoot.\n" +
    "A quick bound: zinc is 9 of 20 parts, slightly under half, so the total must be a bit more than \\(2 \\times 28.8 = 57.6\\) — and 64 is the only choice in the right neighbourhood once you require whole-number tidiness.",
  take: "Ratio questions reduce to one number: the value of a single part. Find it first and every other quantity is a multiplication away."
},

"quant-ratio-ex#10": {
  steps: "Step 1 — Assign concrete values from \\(A : B : C = 2 : 3 : 4\\): take \\(A = 2\\), \\(B = 3\\), \\(C = 4\\).\n" +
    "Step 2 — Compute each required fraction.\n" +
    "\\(\\dfrac{A}{B} = \\dfrac23\\), \\(\\dfrac{B}{C} = \\dfrac34\\), \\(\\dfrac{C}{A} = \\dfrac42 = 2\\).\n" +
    "Step 3 — The ratio wanted is \\(\\dfrac23 : \\dfrac34 : 2\\).\n" +
    "Step 4 — Clear denominators by multiplying every term by 12 (the LCM of 3, 4 and 1):\n" +
    "\\(8 : 9 : 24\\).",
  fast: "Substitute 2, 3, 4 and then multiply the three fractions by the LCM of their denominators. \\(\\tfrac23, \\tfrac34, 2\\) times 12 gives \\(8, 9, 24\\).\n" +
    "A check that costs nothing: \\(\\tfrac{C}{A} = 2\\) is the largest of the three by a wide margin, so the last term of the answer must be far bigger than the first two — which only (D) satisfies.",
  traps: "(A) \\(4 : 9 : 16\\) squares the original terms.\n" +
    "(C) \\(8 : 9 : 16\\) gets the first two right and then uses \\(\\tfrac{C}{A}\\) as \\(\\tfrac43\\) instead of 2 — the most likely genuine slip.\n" +
    "(B) \\(8 : 9 : 12\\) makes the third term far too small.\n" +
    "(E) \\(6 : 8 : 24\\) mis-scales the first two.",
  take: "Turn a ratio into actual numbers before manipulating it. Then clear the fractions with one LCM — and sanity-check the [[relative sizes]] of the three terms against the fractions you computed."
},

"quant-ratio-ex#11": {
  steps: "Step 1 — Chain the ratios by scaling each shared term.\n" +
    "Step 2 — \\(A : B = 3 : 4\\) and \\(B : C = 5 : 6\\). The shared \\(B\\) is 4 and 5, so scale to 20: \\(A : B = 15 : 20\\) and \\(B : C = 20 : 24\\).\n" +
    "Step 3 — So \\(A : B : C = 15 : 20 : 24\\).\n" +
    "Step 4 — Now bring in \\(C : D = 7 : 5\\) with \\(C = 24\\): \\(D = 24 \\times \\dfrac57 = \\dfrac{120}{7} \\approx 17.1\\).\n" +
    "Step 5 — Compare \\(15,\\ 20,\\ 24,\\ 17.1\\). The largest is \\(C\\).",
  fast: "You only need the largest, so you can stop early. \\(A : B : C = 15 : 20 : 24\\) already makes C the biggest of those three, and \\(C : D = 7 : 5\\) says D is [[smaller]] than C.\n" +
    "So C beats everyone, and the fractional value of D never needs computing.",
  traps: "(E) \"Cannot be determined\" is the trap for anyone who stalls on \\(D\\) coming out fractional. A non-integer share is perfectly legitimate — the comparison is still decidable.\n" +
    "(B) B is the largest of the first two ratios and tempting if you stop after the first link.\n" +
    "(D) D is chosen by anyone who reads \\(C : D = 7 : 5\\) backwards.",
  take: "When the question only asks which is largest, chain far enough to decide and no further. A ratio like \\(C : D = 7 : 5\\) settles the comparison without any arithmetic."
},

"quant-ratio-ex#12": {
  steps: "Step 1 — Use different letters for the two ratios: incomes \\(3x\\) and \\(2x\\); expenses \\(5y\\) and \\(3y\\). They are unrelated, so they need separate variables.\n" +
    "Step 2 — Savings = income − expense, and each saves $200:\n" +
    "\\(3x - 5y = 200\\) and \\(2x - 3y = 200\\).\n" +
    "Step 3 — Multiply the first by 3 and the second by 5 to match the \\(y\\) terms:\n" +
    "\\(9x - 15y = 600\\) and \\(10x - 15y = 1000\\).\n" +
    "Step 4 — Subtract: \\(x = 400\\).\n" +
    "Step 5 — A's income is \\(3x = \\$1{,}200\\).",
  fast: "Set the two savings equal to each other rather than to 200 first: \\(3x - 5y = 2x - 3y\\) gives \\(x = 2y\\).\n" +
    "Substitute into \\(2x - 3y = 200\\): \\(4y - 3y = y = 200\\), so \\(x = 400\\) and A's income is \\(1200\\).\n" +
    "Using the equality before the value keeps the numbers to single steps.",
  traps: "(A) $1,000 and (C) $1,500 come from solving for \\(x\\) and forgetting to multiply by 3, or from using B's ratio term.\n" +
    "B's income is \\(2x = \\$800\\), deliberately not offered.\n" +
    "(D) $1,800 and (E) $2,100 overshoot; a check is quick — A spends \\(5y = \\$1{,}000\\) and saves $200, totalling the $1,200. ✓",
  take: "Two independent ratios need two different variables. Never write both as \\(x\\) — that is the single most common error in income-and-expense questions."
},

"quant-ratio-ex#13": {
  steps: "Step 1 — The shares are \\(2 : 3 : 7\\), so there are 12 parts in all.\n" +
    "Step 2 — A and B together hold \\(2 + 3 = 5\\) parts; C holds 7 parts.\n" +
    "Step 3 — C exceeds them by \\(7 - 5 = 2\\) parts.\n" +
    "Step 4 — That gap is $1,500, so one part is $750.\n" +
    "Step 5 — A's share is 2 parts: \\(2 \\times 750 = \\$1{,}500\\).",
  fast: "The gap is 2 parts and A's share is also 2 parts — so A's share equals the gap exactly: $1,500.\n" +
    "Noticing that \\(7 - (2+3) = 2 = A\\)'s parts turns the question into a single reading with no arithmetic at all.",
  traps: "(D) $750 is the value of one part, an intermediate result.\n" +
    "(A) $1,000 and (C) $2,000 are round decoys.\n" +
    "(E) \"Cannot be determined\" tempts anyone who thinks the total sum is needed — it is not, because the difference alone prices a part. (For the record the total is \\(12 \\times 750 = \\$9{,}000\\).)",
  take: "Differences between ratio groups are themselves whole numbers of parts. Price a part from whatever difference you are given — you rarely need the total."
},

"quant-ratio-ex#14": {
  steps: "Step 1 — Write the sales in parts: Vanilla \\(= 2k\\), Chocolate \\(= 3k\\).\n" +
    "Step 2 — Selling 4 more Vanilla changes only the Vanilla count: \\(\\dfrac{2k + 4}{3k} = \\dfrac34\\).\n" +
    "Step 3 — Cross-multiply: \\(4(2k + 4) = 9k\\), i.e. \\(8k + 16 = 9k\\).\n" +
    "Step 4 — \\(k = 16\\).\n" +
    "Step 5 — Vanilla sold \\(= 2k = 32\\).",
  fast: "Backsolve on the choices, which are Vanilla counts. If Vanilla is 32, Chocolate is 48 (keeping \\(2 : 3\\)). Add 4 Vanilla: \\(36 : 48\\), and \\(36/48 = 3/4\\) ✓.\n" +
    "Any correct Vanilla count must be even (it is 2 parts), which immediately removes (B) 35.",
  traps: "(B) 35 is odd, so it cannot be 2 parts of a \\(2 : 3\\) split — eliminable on sight.\n" +
    "(D) 48 is the [[Chocolate]] count, the other number in the working.\n" +
    "(C) 42 and (E) 54 fail the check: \\(46/63\\) and \\(58/81\\) are nowhere near \\(3/4\\).",
  take: "Adding to only one side of a ratio: hold the untouched side fixed in parts, and let the changed side absorb the addition. Then screen the choices by divisibility before testing."
},

"quant-ratio-ex#15": {
  steps: "Step 1 — Name the common value. Let \\(\\tfrac12 a = \\tfrac13 b = \\tfrac14 c = t\\).\n" +
    "Step 2 — Then \\(a = 2t\\), \\(b = 3t\\), \\(c = 4t\\) — the parts are the [[reciprocals]] of the fractions.\n" +
    "Step 3 — Their sum is 81: \\(2t + 3t + 4t = 9t = 81\\).\n" +
    "Step 4 — \\(t = 9\\).\n" +
    "Step 5 — The parts are \\(18, 27, 36\\).",
  fast: "\"Equal fractions\" means the parts are in the ratio of the denominators: \\(2 : 3 : 4\\), which is 9 parts. \\(81/9 = 9\\) per part → \\(18, 27, 36\\).\n" +
    "Check the order the question asks for: half of 18, a third of 27 and a quarter of 36 are all 9 ✓.",
  traps: "(A) \\(36, 27, 18\\) and (B) \\(27, 18, 36\\) contain exactly the right three numbers in the wrong [[order]]. The first part is the one halved, so it must be the smallest.\n" +
    "(D) \\(30, 27, 24\\) sums to 81 but fails the equal-fractions test.\n" +
    "(E) \"42\" is not three parts at all.",
  take: "\\(\\tfrac{a}{p} = \\tfrac{b}{q} = \\tfrac{c}{r}\\) means \\(a : b : c = p : q : r\\). Then check the ordering — three of the five choices here differ only by arrangement."
},

"quant-ratio-ex#16": {
  steps: "Step 1 — Set the equal quantity to a single letter: \\(4A = 6B = 3C = k\\).\n" +
    "Step 2 — Then \\(A = \\dfrac{k}{4}\\), \\(B = \\dfrac{k}{6}\\), \\(C = \\dfrac{k}{3}\\).\n" +
    "Step 3 — Sum to $1,800: \\(k\\left(\\dfrac14 + \\dfrac16 + \\dfrac13\\right) = 1800\\).\n" +
    "Step 4 — \\(\\dfrac14 + \\dfrac16 + \\dfrac13 = \\dfrac{3 + 2 + 4}{12} = \\dfrac{9}{12} = \\dfrac34\\).\n" +
    "Step 5 — \\(\\dfrac{3k}{4} = 1800\\), so \\(k = 2400\\) and \\(A = \\dfrac{2400}{4} = \\$600\\).",
  fast: "\\(4A = 6B = 3C\\) makes the shares inversely proportional to \\(4, 6, 3\\): \\(\\tfrac14 : \\tfrac16 : \\tfrac13 = 3 : 2 : 4\\) after multiplying by 12.\n" +
    "That is 9 parts; \\(1800/9 = 200\\) per part; A has 3 parts \\(= \\$600\\).\n" +
    "Inverting and clearing with one LCM is the whole method.",
  traps: "(A) $400 is B's share (\\(2 \\times 200\\)) and (D) $800 is C's (\\(4 \\times 200\\)) — correct values for the wrong person.\n" +
    "(C) $700 and (E) $900 are round decoys.\n" +
    "Check: \\(4 \\times 600 = 6 \\times 400 = 3 \\times 800 = 2400\\) ✓ — all three products equal, as required.",
  take: "\"\\(pA = qB = rC\\)\" means the shares are inversely proportional to \\(p, q, r\\). Invert, clear denominators with the LCM, and count parts."
},

"quant-ratio-ex#17": {
  steps: "Step 1 — The shared term is \\(b\\): it is 3 in the first ratio and 4 in the second.\n" +
    "Step 2 — Scale both so \\(b\\) becomes their LCM, 12.\n" +
    "Step 3 — \\(a : b = 2 : 3\\) becomes \\(8 : 12\\) (×4).\n" +
    "Step 4 — \\(b : c = 4 : 5\\) becomes \\(12 : 15\\) (×3).\n" +
    "Step 5 — So \\(a : b : c = 8 : 12 : 15\\), and \\(a : c = 8 : 15\\).",
  fast: "Multiply across: \\(a : c = (2 \\times 4) : (3 \\times 5) = 8 : 15\\).\n" +
    "For a two-link chain this always works — multiply the outer terms and the inner terms — and it skips the scaling step entirely.",
  traps: "(D) \\(10 : 15\\) scales the second ratio to 15 but leaves the first alone.\n" +
    "(B) \\(2 : 5\\) takes the outer numbers of the two given ratios without adjusting for the mismatched \\(b\\).\n" +
    "(C) \\(4 : 5\\) and (E) \\(3 : 5\\) copy fragments of the stem.\n" +
    "Sanity check: \\(a\\) is smaller than \\(b\\), which is smaller than \\(c\\), so \\(a : c\\) must be well under 1 — \\(8/15 = 0.53\\) ✓.",
  take: "Two-link chain: \\(a : c = (a_1 \\times b_2) : (b_1 \\times c_2)\\). Multiplying across is faster than scaling to the LCM and gives the same result."
},

"quant-ratio-ex#18": {
  steps: "Step 1 — Total parts: \\(2 + 3 + 4 = 9\\).\n" +
    "Step 2 — Value of one part: \\(\\dfrac{720}{9} = \\$80\\).\n" +
    "Step 3 — C has 4 parts: \\(4 \\times 80 = \\$320\\).",
  fast: "\\(720/9 = 80\\) per part; C takes 4 of them: $320.\n" +
    "That the total divides cleanly by the parts count is the confirmation you have read the ratio correctly.",
  traps: "(A) $160 is A's share (2 parts) and (B) $240 is B's (3 parts) — both correct amounts for the wrong person, and both sitting right above the answer in the list.\n" +
    "(D) $360 is half the total, which would be C's share only in a \\(1 : 1\\) split.\n" +
    "(E) $280 does not correspond to any whole number of parts.",
  take: "Sum the parts, divide the total, multiply by the share asked for. Then re-read which letter the question named — the other letters' shares are always among the choices."
},

"quant-ratio-ex#19": {
  steps: "Step 1 — Write the numbers as \\(5x\\) and \\(8x\\).\n" +
    "Step 2 — Adding 9 to each: \\(\\dfrac{5x + 9}{8x + 9} = \\dfrac{8}{11}\\).\n" +
    "Step 3 — Cross-multiply: \\(11(5x + 9) = 8(8x + 9)\\).\n" +
    "Step 4 — \\(55x + 99 = 64x + 72\\), so \\(9x = 27\\) and \\(x = 3\\).\n" +
    "Step 5 — The smaller number is \\(5x = 15\\).",
  fast: "Backsolve on the smaller number, which must be a multiple of 5. That immediately removes (D) 18 and (E) 12.\n" +
    "Try 15: the pair is \\(15\\) and \\(24\\). Add 9 to each: \\(24 : 33\\), and \\(24/33 = 8/11\\) ✓.",
  traps: "(C) 24 is the [[larger]] number — the other half of the correct pair, and the natural slip if you solve for \\(8x\\).\n" +
    "(B) 20 would pair with 32, giving \\(29 : 41\\) — nowhere near \\(8 : 11\\).\n" +
    "(D) 18 and (E) 12 are not multiples of 5 and so cannot be the smaller term of a \\(5 : 8\\) ratio.",
  take: "Screen by divisibility first: the smaller term of a \\(5 : 8\\) ratio must be a multiple of 5. Then test the survivors — usually one or two candidates."
},

"quant-ratio-ex#20": {
  steps: "Step 1 — Split the 60 litres by \\(2 : 1\\): 3 parts of 20 litres each.\n" +
    "Step 2 — Milk \\(= 40\\) L; water \\(= 20\\) L.\n" +
    "Step 3 — Adding water leaves milk fixed at 40 L.\n" +
    "Step 4 — For a \\(1 : 1\\) mixture the water must also be 40 L.\n" +
    "Step 5 — Water to add: \\(40 - 20 = 20\\) L.",
  fast: "Milk never changes, and \\(1 : 1\\) means water must match it. Milk is 40, water is 20, so add 20 L.\n" +
    "Same anchor-on-the-constant move as question 8 in this set — recognising the repeat is the shortcut.",
  traps: "(E) 40 L is the [[final]] water volume rather than the amount added.\n" +
    "(A) 10 L would give \\(40 : 30\\), still milk-heavy.\n" +
    "(C) 30 L overshoots into water-heavy territory (\\(40 : 50\\)).\n" +
    "(D) 15 L is a decoy between the two most likely errors.",
  take: "Adding one ingredient holds the other constant. Work out what the constant ingredient forces the new total to be, then subtract what is already present."
},

"quant-ratio-ex#21": {
  steps: "Step 1 — A chain of equal fractions means the variables are proportional to the denominators.\n" +
    "Step 2 — Let \\(\\dfrac{x}{3} = \\dfrac{y}{4} = \\dfrac{z}{7} = k\\), so \\(x = 3k\\), \\(y = 4k\\), \\(z = 7k\\).\n" +
    "Step 3 — Sum: \\(x + y + z = 14k\\).\n" +
    "Step 4 — \\(\\dfrac{x + y + z}{z} = \\dfrac{14k}{7k} = 2\\).",
  fast: "The denominators are the parts, so \\(x : y : z = 3 : 4 : 7\\), totalling 14. The question wants total ÷ \\(z\\) \\(= 14 : 7 = 2\\).\n" +
    "Notice \\(3 + 4 = 7\\), so the total is exactly twice \\(z\\) — the numbers were chosen for that.",
  traps: "(E) 7 and (C) 14 are the raw parts (\\(z\\) and the total), lifted out of the working.\n" +
    "(B) \\(\\tfrac72\\) is the reciprocal-ish decoy \\(\\dfrac{z}{\\text{something}}\\).\n" +
    "(D) 1 would require \\(x + y = 0\\).",
  take: "\\(\\dfrac{x}{p} = \\dfrac{y}{q} = \\dfrac{z}{r}\\) means \\(x : y : z = p : q : r\\). Once the parts are written down, any combination the question asks for is a ratio of small integers."
},

"quant-ratio-ex#22": {
  steps: "Step 1 — Work out how much juice is needed in total: \\(200 \\times 6 = 1{,}200\\) ounces.\n" +
    "Step 2 — The recipe is 1 part concentrate to 3 parts water, so concentrate is 1 of 4 parts — a quarter of the finished juice.\n" +
    "Step 3 — Concentrate needed: \\(\\dfrac{1{,}200}{4} = 300\\) ounces.\n" +
    "Step 4 — Each can holds 12 ounces: \\(\\dfrac{300}{12} = 25\\) cans.",
  fast: "One 12-oz can makes \\(12 \\times 4 = 48\\) oz of juice, which is exactly eight 6-oz servings.\n" +
    "\\(200 \\div 8 = 25\\) cans.\n" +
    "Computing the yield per can first is the cleanest route and avoids the 1,200 entirely.",
  traps: "(E) 100 is \\(1200/12\\) — the number of cans if concentrate were the whole drink rather than a quarter of it.\n" +
    "(D) 67 comes from using \\(1 : 3\\) as one-third rather than one-quarter (\\(1200/3/12 \\approx 33\\)) or from a similar mis-split.\n" +
    "(C) 50 halves the total; (B) 34 is a rounding decoy.\n" +
    "The recurring trap in every mixture question: \\(1 : 3\\) means one part in [[four]], not one in three.",
  take: "A ratio \\(1 : n\\) makes the first ingredient \\(\\dfrac{1}{n+1}\\) of the whole, not \\(\\dfrac1n\\). Getting that denominator right is the difference between (A) and (D) here."
}

});
