/* Rewritten explanations — linear equations and systems.

   Two habits carry this topic. First, when the answer choices are values of the
   unknown, substituting is often faster and always safer than solving — and it
   cannot produce a sign error. Second, in a system, look for the combination
   that kills a variable in one step before reaching for substitution. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-linear-ex#1": {
  steps: "Step 1 — Isolate the term containing \\(x\\) by undoing the addition. Subtract 5 from both sides:\n" +
    "\\(3x + 5 - 5 = 20 - 5\\), so \\(3x = 15\\).\n" +
    "Step 2 — Undo the multiplication. Divide both sides by 3: \\(x = 5\\).\n" +
    "Step 3 — Check by substituting back: \\(3(5) + 5 = 20\\) ✓.\n" +
    "The order matters: undo addition and subtraction first, then multiplication and division — the reverse of the order of operations.",
  fast: "Substitute the middle choice. \\(x = 5\\) gives \\(15 + 5 = 20\\) ✓ — done in one line.\n" +
    "With five numeric choices, testing beats solving whenever the arithmetic is this small, and starting in the middle lets you tell which direction to move if it misses.",
  traps: "(B) 4 gives 17 and (D) 6 gives 23 — the neighbours, for anyone dividing 15 by 3 carelessly.\n" +
    "(A) 3 is what you get by subtracting 5 from 20 and then from 15 again.\n" +
    "(E) 7 has no derivation; it fills out the list.",
  take: "Undo operations in reverse order, then substitute your answer back. The check costs five seconds and catches every arithmetic slip."
},

"quant-linear-ex#2": {
  steps: "Step 1 — The bracket is multiplied by 2, so the cleanest first move is to divide both sides by 2 rather than expand:\n" +
    "\\(x - 3 = 5\\).\n" +
    "Step 2 — Add 3: \\(x = 8\\).\n" +
    "Step 3 — Check: \\(2(8 - 3) = 2(5) = 10\\) ✓.\n" +
    "Expanding first also works — \\(2x - 6 = 10\\) → \\(2x = 16\\) → \\(x = 8\\) — but it is one more step and one more chance to lose a sign.",
  fast: "Divide by the bracket's coefficient before doing anything else: \\(x - 3 = 5\\), so \\(x = 8\\).\n" +
    "Whenever a bracket sits alone on one side, dividing is faster than distributing.",
  traps: "(B) 5 is \\(x - 3\\), the value inside the bracket — a correct intermediate result, and the most likely wrong pick.\n" +
    "(A) 2 comes from subtracting 3 instead of adding it.\n" +
    "(C) 7 and (E) 11 are neighbours from a mishandled expansion (e.g. \\(2x - 3 = 10\\)).",
  take: "A lone bracket with a coefficient: divide first. And when a choice equals your intermediate value, that is a sign the question is testing whether you finished."
},

"quant-linear-ex#3": {
  steps: "Step 1 — Variables appear on both sides, so gather them on one side. Subtract \\(3x\\):\n" +
    "\\(5x - 3x - 2 = 8\\), i.e. \\(2x - 2 = 8\\).\n" +
    "Step 2 — Add 2 to both sides: \\(2x = 10\\).\n" +
    "Step 3 — Divide by 2: \\(x = 5\\).\n" +
    "Step 4 — Check: \\(5(5) - 2 = 23\\) and \\(3(5) + 8 = 23\\) ✓.",
  fast: "Move the smaller \\(x\\)-term and the smaller constant, so nothing goes negative: \\(2x = 10\\), \\(x = 5\\).\n" +
    "Or substitute: \\(x = 5\\) makes both sides 23. With both sides evaluating to the same number, the check is the answer.",
  traps: "(A) 3 gives \\(13\\) versus \\(17\\); (B) 4 gives \\(18\\) versus \\(20\\) — near-misses that punish a hurried subtraction.\n" +
    "(E) 10 is the value of \\(2x\\), an intermediate result.\n" +
    "(D) 6 gives 28 versus 26, overshooting.",
  take: "Collect the variable on the side that keeps its coefficient positive. Then substitute both sides back — equality confirms the answer outright."
},

"quant-linear-ex#4": {
  steps: "Step 1 — Isolate the fraction: subtract 3 from both sides.\n" +
    "\\(\\dfrac{x}{4} = 4\\).\n" +
    "Step 2 — Multiply both sides by 4: \\(x = 16\\).\n" +
    "Step 3 — Check: \\(\\dfrac{16}{4} + 3 = 4 + 3 = 7\\) ✓.",
  fast: "Strip the constant, then multiply by the denominator: \\(x = 4 \\times 4 = 16\\).\n" +
    "Resist multiplying through by 4 at the start — that turns the 3 into a 12 and adds a step for no gain.",
  traps: "(A) 4 is \\(\\dfrac{x}{4}\\), the fraction's value rather than \\(x\\) — the intended trap, and the one that catches people who stop a step early.\n" +
    "(D) 14 gives \\(3.5 + 3 = 6.5\\), a near-miss placed just below the answer.\n" +
    "(C) 12 comes from multiplying 3 by 4 and calling that the answer; (B) 8 halves the result.",
  take: "Clear the constant before the denominator. When a choice matches the value of the fractional term itself, it exists to catch anyone who stops one operation short."
},

"quant-linear-ex#5": {
  steps: "Step 1 — Expand both brackets, taking care with the minus sign in front of the second:\n" +
    "\\(3(x + 2) = 3x + 6\\) and \\(-2(x - 1) = -2x + 2\\).\n" +
    "Step 2 — Combine: \\(3x + 6 - 2x + 2 = x + 8\\).\n" +
    "Step 3 — So \\(x + 8 = 15\\), giving \\(x = 7\\).\n" +
    "Step 4 — Check: \\(3(9) - 2(6) = 27 - 12 = 15\\) ✓.",
  fast: "The \\(x\\) terms are \\(3x - 2x = x\\) and the constants are \\(6 + 2 = 8\\), so the whole left side is just \\(x + 8\\). Then \\(x = 7\\).\n" +
    "Collecting the coefficients mentally before writing anything turns this into a one-line question.",
  traps: "(A) 5 comes from \\(-2(x-1) = -2x - 2\\) — distributing the minus onto the \\(-1\\) incorrectly, which gives \\(x + 4 = 15\\)… and the sign error is exactly what the bracket is there for.\n" +
    "(C) 9 and (D) 11 come from dropping a constant.\n" +
    "(E) 13 treats the left side as \\(x + 2\\).",
  take: "A minus in front of a bracket flips [[both]] signs inside it. Expand the negative bracket separately and write it out — that single discipline removes the most common algebra error on the test."
},

"quant-linear-ex#6": {
  steps: "Step 1 — Combine the fractions using the common denominator 12:\n" +
    "\\(\\dfrac{x}{3} = \\dfrac{4x}{12}\\) and \\(\\dfrac{x}{4} = \\dfrac{3x}{12}\\).\n" +
    "Step 2 — Subtract: \\(\\dfrac{4x - 3x}{12} = \\dfrac{x}{12}\\).\n" +
    "Step 3 — So \\(\\dfrac{x}{12} = 2\\), giving \\(x = 24\\).\n" +
    "Step 4 — Check: \\(8 - 6 = 2\\) ✓.",
  fast: "\\(\\dfrac13 - \\dfrac14 = \\dfrac{1}{12}\\) — for unit fractions with consecutive denominators, the difference is always \\(\\dfrac{1}{ab}\\).\n" +
    "So \\(\\dfrac{x}{12} = 2\\) and \\(x = 24\\). One line, no expansion.",
  traps: "(B) 12 is the common denominator, sitting right there in the working.\n" +
    "(A) 6 comes from \\(\\dfrac13 - \\dfrac14 = \\dfrac{1}{7}\\)-style subtraction of denominators.\n" +
    "(C) 18 and (E) 30 are near-misses; note that \\(x\\) must be divisible by 12 for both fractions to be whole, which alone points at 24.",
  take: "\\(\\dfrac1a - \\dfrac1b = \\dfrac{b-a}{ab}\\). For consecutive integers that is \\(\\dfrac{1}{ab}\\) — worth knowing, since it turns up constantly in rate and fraction questions."
},

"quant-linear-ex#7": {
  steps: "Step 1 — Add the two equations to eliminate \\(y\\):\n" +
    "\\((x + y) + (x - y) = 10 + 4\\), so \\(2x = 14\\) and \\(x = 7\\).\n" +
    "Step 2 — Substitute back: \\(7 + y = 10\\), so \\(y = 3\\).\n" +
    "Step 3 — The question asks for the [[product]]: \\(xy = 7 \\times 3 = 21\\).",
  fast: "Sum and difference: \\(x\\) is the average of the two right-hand sides, \\(\\dfrac{10+4}{2} = 7\\), and \\(y\\) is half their difference, \\(\\dfrac{10-4}{2} = 3\\).\n" +
    "That pattern — add for one variable, subtract for the other — solves any \\(x+y\\), \\(x-y\\) pair instantly. Then \\(7 \\times 3 = 21\\).",
  traps: "(D) 24 and (A) 12 come from finding \\(x\\) and \\(y\\) correctly and then adding or mis-multiplying.\n" +
    "(E) 30 is \\(10 \\times 3\\), pairing the sum with \\(y\\).\n" +
    "(B) 18 is a decoy. The question asks for \\(xy\\), not \\(x\\) or \\(y\\) — and 7 and 3 are deliberately absent so you must finish.",
  take: "Given \\(x+y\\) and \\(x-y\\): \\(x\\) is their average, \\(y\\) is half their difference. Then re-read what the question actually wants."
},

"quant-linear-ex#8": {
  steps: "Step 1 — Scale the simpler equation so one variable matches. Multiply \\(x + y = 6\\) by 2:\n" +
    "\\(2x + 2y = 12\\).\n" +
    "Step 2 — Subtract from the first equation: \\((3x + 2y) - (2x + 2y) = 16 - 12\\).\n" +
    "Step 3 — \\(x = 4\\).\n" +
    "Step 4 — Check: \\(y = 2\\), and \\(3(4) + 2(2) = 16\\) ✓.",
  fast: "The \\(y\\) coefficients are 2 and 1, so doubling the second equation lines them up and one subtraction gives \\(x\\) directly — no substitution and no fractions.\n" +
    "Always scan for the variable that is cheapest to eliminate before choosing a method.",
  traps: "(A) 2 is \\(y\\), the other variable — correct work, wrong answer reported.\n" +
    "(C) 6 is the total \\(x + y\\), lifted from the second equation.\n" +
    "(D) 8 and (E) 10 overshoot; substituting either breaks the first equation immediately.",
  take: "In a two-variable system, scale to match one coefficient and eliminate. Then check which variable the question named — the other one is always among the choices."
},

"quant-linear-ex#9": {
  steps: "Step 1 — Express one variable in terms of the other. From \\(2a = 3b\\): \\(b = \\dfrac{2a}{3}\\).\n" +
    "Step 2 — Substitute into \\(a + b = 15\\): \\(a + \\dfrac{2a}{3} = 15\\).\n" +
    "Step 3 — Combine: \\(\\dfrac{5a}{3} = 15\\).\n" +
    "Step 4 — \\(a = 9\\), and then \\(b = 6\\).\n" +
    "Step 5 — Check: \\(2(9) = 18 = 3(6)\\) ✓ and \\(9 + 6 = 15\\) ✓.",
  fast: "\\(2a = 3b\\) means \\(a : b = 3 : 2\\) — the coefficients swap. That is 5 parts, and the total is 15, so a part is 3.\n" +
    "\\(a = 3 \\times 3 = 9\\).\n" +
    "Reading a proportional equation straight off as a ratio is much faster than substitution, and it removes the fraction entirely.",
  traps: "(B) 6 is \\(b\\) — the ratio read the wrong way round, which is the error the swapped coefficients are designed to cause.\n" +
    "(C) 7.5 is half the total, the answer if \\(a = b\\).\n" +
    "(A) 5 is one part mis-sized; (E) 10 is a round decoy.",
  take: "\\(pa = qb\\) means \\(a : b = q : p\\) — the coefficients cross over. Convert to parts and the whole system becomes one division."
},

"quant-linear-ex#10": {
  steps: "Step 1 — Name the integers. Consecutive means they differ by 1: call them \\(n\\) and \\(n + 1\\).\n" +
    "Step 2 — Their sum is 47: \\(2n + 1 = 47\\).\n" +
    "Step 3 — \\(2n = 46\\), so \\(n = 23\\).\n" +
    "Step 4 — The two integers are 23 and 24; the question asks for the [[larger]], which is 24.",
  fast: "Two consecutive integers straddle the average. \\(\\dfrac{47}{2} = 23.5\\), so they are 23 and 24 — the larger is 24.\n" +
    "For any pair of consecutive integers, halve the sum and take the integers either side. No algebra at all.",
  traps: "(B) 23 is the [[smaller]] integer — the value \\(n\\) that the algebra produces, and by far the most likely wrong selection.\n" +
    "(A) 22 and (D) 25 are the next ones out on each side.\n" +
    "(E) 26 pairs with 21, which sums to 47 but they are not consecutive.",
  take: "Consecutive integers summing to an odd number are the two either side of half that number. Then read whether the question wants the larger, the smaller, or both."
},

"quant-linear-ex#11": {
  steps: "Step 1 — Translate word by word. \"A number increased by 12\" is \\(n + 12\\); \"three times the number\" is \\(3n\\).\n" +
    "Step 2 — Set them equal: \\(n + 12 = 3n\\).\n" +
    "Step 3 — Subtract \\(n\\): \\(12 = 2n\\).\n" +
    "Step 4 — \\(n = 6\\). Check: \\(6 + 12 = 18 = 3 \\times 6\\) ✓.",
  fast: "Adding 12 has the same effect as doubling the number (going from \\(n\\) to \\(3n\\) means adding \\(2n\\)), so \\(2n = 12\\) and \\(n = 6\\).\n" +
    "Or just test the choices: 6 is the first one that works, and the check is a single line.",
  traps: "(D) 12 is the number from the stem reused as the answer.\n" +
    "(E) 4 gives \\(16\\) versus \\(12\\); (B) 8 gives \\(20\\) versus \\(24\\) — the two nearest misses, one on each side.\n" +
    "(C) 10 gives 22 versus 30.",
  take: "Translate each phrase into symbols before combining anything. \"Increased by\" is addition, \"times\" is multiplication, and \"is\" is the equals sign."
},

"quant-linear-ex#12": {
  steps: "Step 1 — Let \\(t\\) be a ticket and \\(p\\) a programme.\n" +
    "\\(2t + 3p = 23\\) and \\(4t + p = 31\\).\n" +
    "Step 2 — The second equation has a lone \\(p\\), so solve it for \\(p\\): \\(p = 31 - 4t\\).\n" +
    "Step 3 — Substitute: \\(2t + 3(31 - 4t) = 23\\).\n" +
    "Step 4 — \\(2t + 93 - 12t = 23\\), so \\(-10t = -70\\) and \\(t = 7\\).\n" +
    "Step 5 — Check: \\(p = 31 - 28 = 3\\), and \\(2(7) + 3(3) = 14 + 9 = 23\\) ✓.",
  fast: "Elimination is tidier here: multiply the second equation by 3 to get \\(12t + 3p = 93\\), then subtract the first:\n" +
    "\\(10t = 70\\), so \\(t = \\$7\\).\n" +
    "Look for the variable with a coefficient of 1 — scaling to match it is always the cheapest elimination.",
  traps: "(A) $6.50 and (C) $7.50 bracket the answer; substituting either gives a non-integer programme price, which a ticket-and-programme question will not do.\n" +
    "(E) $5.00 makes \\(p = 11\\), failing the first equation.\n" +
    "(D) $8.00 fails outright: the second equation would give \\(p = 31 - 32 = -1\\), a negative programme price. A choice that forces an impossible companion value eliminates itself.\n" +
    "The programme price of $3 is deliberately absent — the question names the ticket.",
  take: "Two equations, two unknowns: scale to match a coefficient and subtract. Substituting back is not optional — it is what catches an arithmetic slip in seconds."
},

"quant-linear-ex#13": {
  steps: "Step 1 — Subtract 5 from both sides: \\(3x = 15\\).\n" +
    "Step 2 — Divide by 3: \\(x = 5\\).\n" +
    "Step 3 — Check: \\(3(5) + 5 = 15 + 5 = 20\\) ✓.\n" +
    "The two operations are undone in the reverse of the order they were applied: the 5 was added last, so it comes off first.",
  fast: "\\(20 - 5 = 15\\), and \\(15 \\div 3 = 5\\). Two mental steps.\n" +
    "Or substitute the middle choice and stop when it works.",
  traps: "(D) 15 is \\(3x\\), the value one step before the answer — the classic \"stopped too early\" trap.\n" +
    "(A) 3 and (B) 4 are neighbours from a division slip.\n" +
    "(E) 8 comes from adding 5 to 3 rather than working the equation.",
  take: "Undo in reverse order, and always ask whether the number you have is \\(x\\) or a multiple of it. Intermediate values are the most common distractors in this topic."
},

"quant-linear-ex#14": {
  steps: "Step 1 — Add the equations: \\(2x = 14\\), so \\(x = 7\\).\n" +
    "Step 2 — Subtract them: \\(2y = 6\\), so \\(y = 3\\).\n" +
    "Step 3 — The product: \\(xy = 21\\).\n" +
    "A useful identity to notice: \\((x+y)^2 - (x-y)^2 = 4xy\\), so \\(xy = \\dfrac{100 - 16}{4} = 21\\) without finding either variable.",
  fast: "Use the identity directly: \\(xy = \\dfrac{(x+y)^2 - (x-y)^2}{4} = \\dfrac{100 - 16}{4} = 21\\).\n" +
    "Or, just as fast, \\(x\\) is the average (7) and \\(y\\) is half the difference (3).",
  traps: "(A) 16 is \\((x-y)^2\\), a number that appears in the identity.\n" +
    "(D) 25 and (C) 24 are near-misses from a slip in \\(x\\) or \\(y\\).\n" +
    "(E) 10 is the sum from the stem. As in question 7, neither 7 nor 3 is offered — the question wants the product.",
  take: "\\((x+y)^2 - (x-y)^2 = 4xy\\). Worth memorising: it gives the product straight from the sum and difference, with no need to solve for either variable."
},

"quant-linear-ex#15": {
  steps: "Step 1 — Translate: \"a number added to twice itself\" is \\(n + 2n\\).\n" +
    "Step 2 — That equals 27: \\(3n = 27\\).\n" +
    "Step 3 — \\(n = 9\\).\n" +
    "Step 4 — Check: \\(9 + 18 = 27\\) ✓.",
  fast: "\\(n + 2n = 3n\\), so divide by 3: \\(n = 9\\). One step.\n" +
    "The whole question is whether \"added to twice itself\" means \\(3n\\) or \\(2n\\) — it is \\(3n\\), because the number itself is one of the things being added.",
  traps: "(D) 13.5 is \\(27 \\div 2\\), reading the phrase as \\(2n = 27\\) — the intended misreading.\n" +
    "(E) 27 is the total.\n" +
    "(A) 8 and (C) 10 bracket the answer for anyone guessing.",
  take: "\"Added to twice itself\" is \\(n + 2n = 3n\\), not \\(2n\\). Write the phrase out in symbols rather than jumping to an equation."
},

"quant-linear-ex#16": {
  steps: "Step 1 — Let \\(a\\) be adult tickets and \\(c\\) child tickets.\n" +
    "\\(a + c = 10\\) and \\(8a + 5c = 68\\).\n" +
    "Step 2 — Substitute \\(a = 10 - c\\): \\(8(10 - c) + 5c = 68\\).\n" +
    "Step 3 — \\(80 - 8c + 5c = 68\\), so \\(80 - 3c = 68\\).\n" +
    "Step 4 — \\(3c = 12\\), giving \\(c = 4\\).\n" +
    "Step 5 — Check: 6 adults at $8 is $48, plus 4 children at $5 is $20, totalling $68 ✓.",
  fast: "Assume all ten are adults: that would cost \\(10 \\times 8 = \\$80\\). The actual bill is $68, i.e. $12 less.\n" +
    "Every child ticket saves \\(8 - 5 = \\$3\\), so there are \\(12 \\div 3 = 4\\) children.\n" +
    "This \"assume the extreme, then price the shortfall\" move solves every two-price counting question in two lines.",
  traps: "(D) 6 is the number of [[adult]] tickets — right work, wrong group.\n" +
    "(E) 5 is the even split, which would cost $65.\n" +
    "(A) 2 and (B) 3 come from dividing 12 by the wrong difference (e.g. by 5 or 8 rather than 3).",
  take: "Assume everything is the expensive item, then divide the overshoot by the price difference. It replaces the whole system with one subtraction and one division."
}

});
