/* Rewritten explanations — exponents, roots and scientific notation.

   The rules are short and worth holding exactly: same base multiplied → add the
   powers; divided → subtract; a power of a power → multiply; a negative power →
   reciprocal; a fractional power p/q → the q-th root raised to p. The GMAT's
   difficulty here is almost never the rule — it is spotting that two different-
   looking numbers share a base. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-exponents-ex#1": {
  steps: "Step 1 — Both factors have base 2, so the rule \\(a^m \\cdot a^n = a^{m+n}\\) applies. It is not a shortcut but a restatement: three 2s times four 2s is seven 2s.\n" +
    "Step 2 — \\(2^3 \\cdot 2^4 = 2^{3+4} = 2^7\\).\n" +
    "Step 3 — \\(2^7 = 128\\).\n" +
    "Step 4 — The choices are numbers, not powers, so convert before selecting.",
  fast: "Add the exponents, then read off \\(2^7 = 128\\) from the powers of 2 you should know by heart: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.\n" +
    "Those ten values come up constantly — knowing them removes the arithmetic from most exponent questions.",
  traps: "(A) \\(2^{12}\\) multiplies the exponents instead of adding them; that is the rule for \\((2^3)^4\\), a different expression.\n" +
    "(B) 64 is \\(2^6\\), an off-by-one in the addition.\n" +
    "(E) 256 is \\(2^8\\), the same slip the other way. (C) 32 is \\(2^5\\).",
  take: "Multiplying powers of the same base adds the exponents; raising a power to a power multiplies them. Every wrong answer here is one of those two rules misapplied."
},

"quant-exponents-ex#2": {
  steps: "Step 1 — Same base, so dividing subtracts the exponents: \\(\\dfrac{a^m}{a^n} = a^{m-n}\\).\n" +
    "Step 2 — \\(\\dfrac{5^6}{5^4} = 5^{6-4} = 5^2\\).\n" +
    "Step 3 — \\(5^2 = 25\\).\n" +
    "Why it works: four of the six 5s in the numerator cancel against the four in the denominator, leaving two.",
  fast: "Subtract: \\(6 - 4 = 2\\), so \\(5^2 = 25\\).\n" +
    "Never expand \\(5^6 = 15{,}625\\) and divide — with the same base, cancelling in the exponent is always the intended route.",
  traps: "(E) \\(5^{10}\\) adds the exponents, the rule for multiplication.\n" +
    "(B) 5 is \\(5^1\\), subtracting one too many.\n" +
    "(C) 125 is \\(5^3\\), subtracting one too few.\n" +
    "(D) 1 is \\(5^0\\), which would be the answer if the two exponents were equal.",
  take: "Division subtracts exponents. Note that \\(a^0 = 1\\) for any non-zero \\(a\\) — it follows directly from \\(\\dfrac{a^n}{a^n} = a^{n-n}\\)."
},

"quant-exponents-ex#3": {
  steps: "Step 1 — A power raised to a power multiplies the exponents: \\((a^m)^n = a^{mn}\\).\n" +
    "Step 2 — \\((3^2)^3 = 3^{2 \\times 3} = 3^6\\).\n" +
    "Step 3 — \\(3^6 = 729\\).\n" +
    "Why it works: \\((3^2)^3\\) is \\(3^2\\) written three times and multiplied, which is six 3s in all.",
  fast: "Multiply the exponents and use the powers of 3: 3, 9, 27, 81, 243, 729. So \\(3^6 = 729\\).\n" +
    "Alternatively \\((3^2)^3 = 9^3 = 729\\) — cubing 9 is quick and is a useful cross-check.",
  traps: "(A) \\(3^5\\) adds the exponents, the rule for \\(3^2 \\cdot 3^3\\).\n" +
    "(B) 243 is \\(3^5\\) evaluated — the same error carried through.\n" +
    "(D) 81 is \\(3^4\\); (E) \\(3^{18}\\) cubes the exponent instead of multiplying by 3.",
  take: "\\((a^m)^n = a^{mn}\\). Keep the powers of 2 and 3 memorised to at least \\(2^{10}\\) and \\(3^6\\) — they turn these into recall rather than arithmetic."
},

"quant-exponents-ex#4": {
  steps: "Step 1 — Get both sides onto the same base. \\(16\\) is a power of 2: \\(16 = 2^4\\).\n" +
    "Step 2 — So \\(2^{x+1} = 2^4\\).\n" +
    "Step 3 — With equal bases the exponents must be equal: \\(x + 1 = 4\\).\n" +
    "Step 4 — \\(x = 3\\).",
  fast: "Rewrite 16 as \\(2^4\\) and match exponents: \\(x + 1 = 4\\), so \\(x = 3\\).\n" +
    "Getting everything onto one base is the move for essentially every exponential equation on this test — the numbers are always chosen to make it possible.",
  traps: "(C) 4 is the exponent of 16 itself, ignoring the \\(+1\\) — the most common slip, and the reason the question includes it.\n" +
    "(A) 2 solves \\(2^{x+1} = 8\\); (D) 5 solves \\(2^{x+1} = 64\\).\n" +
    "(E) 8 is \\(2^3\\), the answer squared into the wrong slot.\n" +
    "A one-second check disposes of all of them: \\(2^{3+1} = 2^4 = 16\\) ✓.",
  take: "Same base on both sides → set the exponents equal. Then substitute back; the check takes two seconds and catches every off-by-one."
},

"quant-exponents-ex#5": {
  steps: "Step 1 — A negative exponent means the reciprocal, not a negative number: \\(a^{-n} = \\dfrac{1}{a^n}\\).\n" +
    "Step 2 — \\(3^{-2} = \\dfrac{1}{3^2}\\).\n" +
    "Step 3 — \\(= \\dfrac19\\).\n" +
    "Why it works: the pattern \\(3^2 = 9,\\ 3^1 = 3,\\ 3^0 = 1\\) divides by 3 each step, so \\(3^{-1} = \\tfrac13\\) and \\(3^{-2} = \\tfrac19\\).",
  fast: "Flip and square: \\(3^{-2} = \\left(\\dfrac13\\right)^2 = \\dfrac19\\).\n" +
    "The sign of the exponent has nothing to do with the sign of the result — a positive base always gives a positive answer.",
  traps: "(A) −9 and (B) −6 treat the minus sign as belonging to the value. It does not: \\(3^{-2}\\) is a small positive number.\n" +
    "(D) 9 drops the negative entirely, giving \\(3^2\\).\n" +
    "(C) 6 multiplies the base by the exponent, which is not an exponent rule at all.",
  take: "A negative exponent inverts; it never makes the result negative. \\(a^{-n} = 1/a^n\\), and for a positive base the answer is always positive."
},

"quant-exponents-ex#6": {
  steps: "Step 1 — \\(\\sqrt{144}\\) asks for the positive number whose square is 144.\n" +
    "Step 2 — Factor: \\(144 = 12 \\times 12\\), or \\(2^4 \\times 3^2\\).\n" +
    "Step 3 — \\(\\sqrt{2^4 \\times 3^2} = 2^2 \\times 3 = 12\\).",
  fast: "144 is one of the squares worth knowing cold: \\(11^2 = 121\\), \\(12^2 = 144\\), \\(13^2 = 169\\), \\(14^2 = 196\\), \\(15^2 = 225\\).\n" +
    "Knowing the squares up to 25 removes the estimation from most root questions on the test.",
  traps: "(B) 11 and (D) 14 are the neighbouring integers, giving 121 and 196.\n" +
    "(A) 10 and (E) 16 are further off (100 and 256).\n" +
    "Every wrong answer here is a square you can check in one multiplication, which is why guessing and verifying is a legitimate route.",
  take: "Memorise \\(1^2\\) through \\(25^2\\). Where a root is not exact, factor into primes and pull out the pairs."
},

"quant-exponents-ex#7": {
  steps: "Step 1 — Factor the radicand into a perfect square times a remainder.\n" +
    "Step 2 — \\(50 = 25 \\times 2\\), and 25 is a perfect square.\n" +
    "Step 3 — \\(\\sqrt{50} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}\\).\n" +
    "The rule that licenses the split is \\(\\sqrt{ab} = \\sqrt{a}\\sqrt{b}\\), valid for non-negative \\(a\\) and \\(b\\).",
  fast: "Pull out the largest perfect square that divides 50 — that is 25 — and take its root outside: \\(5\\sqrt2\\).\n" +
    "A quick numeric check: \\(5\\sqrt2 \\approx 5(1.414) = 7.07\\), and \\(7.07^2 \\approx 50\\) ✓. Knowing \\(\\sqrt2 \\approx 1.414\\) and \\(\\sqrt3 \\approx 1.732\\) makes this instant.",
  traps: "(A) \\(2\\sqrt5\\) swaps which factor comes out; squaring it gives 20, not 50.\n" +
    "(D) \\(25\\sqrt2\\) forgets to take the root of 25 and squares to 1,250.\n" +
    "(E) \\(5\\sqrt{10}\\) squares to 250 and (C) \\(10\\sqrt5\\) to 500.\n" +
    "Squaring the candidate is the fastest possible check and settles all four.",
  take: "Simplify a root by extracting the largest perfect-square factor. To check an answer, square it — that is one step and it is decisive."
},

"quant-exponents-ex#8": {
  steps: "Step 1 — The root of a quotient is the quotient of the roots: \\(\\sqrt{\\dfrac{a}{b}} = \\dfrac{\\sqrt a}{\\sqrt b}\\).\n" +
    "Step 2 — \\(\\sqrt{\\dfrac{9}{16}} = \\dfrac{\\sqrt9}{\\sqrt{16}}\\).\n" +
    "Step 3 — \\(= \\dfrac{3}{4}\\).",
  fast: "Both 9 and 16 are perfect squares, so take the root of each: \\(\\dfrac34\\).\n" +
    "Sanity check on size: \\(\\tfrac{9}{16}\\) is a bit above \\(\\tfrac12\\), and its root should be [[larger]] than it (roots of numbers below 1 move toward 1). \\(\\tfrac34 > \\tfrac9{16}\\) ✓.",
  traps: "(C) \\(\\tfrac{9}{16}\\) is the number itself, unrooted.\n" +
    "(B) \\(\\tfrac43\\) inverts the fraction.\n" +
    "(E) \\(\\tfrac{3}{16}\\) takes the root of the numerator only, and (D) \\(\\tfrac12\\) is a rough guess.",
  take: "Roots distribute over multiplication and division, but never over addition: \\(\\sqrt{a+b} \\ne \\sqrt a + \\sqrt b\\). That distinction is worth remembering — the test uses it."
},

"quant-exponents-ex#9": {
  steps: "Step 1 — A fractional exponent \\(\\dfrac{p}{q}\\) means the \\(q\\)-th root raised to the \\(p\\)-th power: \\(a^{p/q} = \\left(\\sqrt[q]{a}\\right)^p\\).\n" +
    "Step 2 — Take the root first, because it keeps the numbers small: \\(\\sqrt[3]{27} = 3\\).\n" +
    "Step 3 — Then raise to the numerator: \\(3^2 = 9\\).\n" +
    "Step 4 — Doing it the other way gives \\(27^2 = 729\\) and \\(\\sqrt[3]{729} = 9\\) — the same answer, more work.",
  fast: "Rewrite the base as a power: \\(27 = 3^3\\), so \\(27^{2/3} = (3^3)^{2/3} = 3^{2} = 9\\).\n" +
    "The exponents multiply and the 3s cancel. Whenever the base is a perfect cube or square, converting it to a prime power makes fractional exponents trivial.",
  traps: "(A) 3 is \\(27^{1/3}\\) — the root taken without the squaring.\n" +
    "(C) 18 is \\(27 \\times \\tfrac23\\), multiplying by the exponent rather than applying it.\n" +
    "(B) 6 and (E) 12 have no derivation; they fill out the list.",
  take: "\\(a^{p/q} = \\left(\\sqrt[q]{a}\\right)^p\\). Take the root first to keep numbers small, or rewrite the base as a prime power and let the exponents cancel."
},

"quant-exponents-ex#10": {
  steps: "Step 1 — Everything shares base 3, so combine the exponents in one pass.\n" +
    "Step 2 — Numerator: \\(3^5 \\cdot 3^2 = 3^{7}\\).\n" +
    "Step 3 — Divide: \\(\\dfrac{3^7}{3^4} = 3^{7-4} = 3^3\\).\n" +
    "Step 4 — \\(3^3 = 27\\).",
  fast: "Add the top exponents, subtract the bottom: \\(5 + 2 - 4 = 3\\), so \\(3^3 = 27\\).\n" +
    "With one base throughout, the whole expression collapses to a single arithmetic line in the exponent — never evaluate the individual powers.",
  traps: "(E) 243 is \\(3^5\\), stopping after the numerator's first term.\n" +
    "(D) 81 is \\(3^4\\), an off-by-one in the subtraction.\n" +
    "(B) 9 is \\(3^2\\) and (A) 3 is \\(3^1\\) — the same slip continued.\n" +
    "All five choices are consecutive powers of 3, so the question is purely a test of the exponent arithmetic.",
  take: "One base throughout means one line of exponent arithmetic: add for products, subtract for quotients. Evaluate only at the very end."
},

"quant-exponents-ex#11": {
  steps: "Step 1 — The bases differ, so they must be compared numerically or brought to a common footing.\n" +
    "Step 2 — Evaluate each: \\(2^{10} = 1024\\); \\(3^6 = 729\\); \\(10^3 = 1000\\); \\(5^4 = 625\\); \\(4^4 = 256\\).\n" +
    "Step 3 — The largest is \\(2^{10} = 1024\\).",
  fast: "Only two are serious candidates: \\(2^{10}\\) and \\(10^3\\), both about a thousand. \\(2^{10} = 1024\\) is the famous one — just above \\(10^3\\).\n" +
    "The others can be dismissed quickly: \\(3^6 = 729\\), \\(5^4 = 625\\), \\(4^4 = 256\\), all comfortably under 1,000.\n" +
    "Knowing \\(2^{10} = 1024\\) by heart settles this in about five seconds.",
  traps: "(C) \\(10^3\\) is the trap: the biggest base, so it looks largest, but a large exponent beats a large base here. It falls 24 short.\n" +
    "(E) \\(4^4 = 256\\) has the highest-looking base-and-exponent pairing among the small ones and is in fact the [[smallest]].\n" +
    "(B) \\(3^6\\) and (D) \\(5^4\\) are close to each other and both well short.",
  take: "You cannot compare powers with different bases by inspecting bases or exponents alone. Evaluate, or bring to a common base. And know \\(2^{10} = 1024\\)."
},

"quant-exponents-ex#12": {
  steps: "Step 1 — Scientific notation requires the coefficient to satisfy \\(1 \\le |a| < 10\\), with one non-zero digit before the decimal point.\n" +
    "Step 2 — Write 4,500,000 with that coefficient: \\(4.5\\).\n" +
    "Step 3 — Count how many places the decimal point moves from \\(4.5\\) to \\(4{,}500{,}000\\): six.\n" +
    "Step 4 — So the number is \\(4.5 \\times 10^6\\).\n" +
    "Check: \\(10^6 = 1{,}000{,}000\\), and \\(4.5\\) million is 4,500,000 ✓.",
  fast: "Count the digits after the leading one: 4,500,000 has 6 digits following the 4, so the exponent is 6.\n" +
    "That digit count is always the exponent when the coefficient is written with a single leading digit.",
  traps: "(A) \\(45 \\times 10^5\\) and (D) \\(0.45 \\times 10^7\\) both equal 4,500,000 but violate the \\(1 \\le a < 10\\) rule — correct arithmetic, wrong [[form]]. That is what the question is testing.\n" +
    "(C) \\(4.5 \\times 10^5\\) is 450,000 and (E) \\(4.5 \\times 10^7\\) is 45,000,000 — off by one place in each direction.",
  take: "Scientific notation needs exactly one non-zero digit before the point. A choice with the right value but the wrong coefficient range is still wrong."
},

"quant-exponents-ex#13": {
  steps: "Step 1 — All base 2, so work entirely in the exponents.\n" +
    "Step 2 — Numerator: \\(2^{10} \\times 2^{5} = 2^{15}\\).\n" +
    "Step 3 — Divide: \\(2^{15 - 12} = 2^{3}\\).\n" +
    "Step 4 — \\(2^3 = 8\\).",
  fast: "\\(10 + 5 - 12 = 3\\), so \\(2^3 = 8\\). One line.\n" +
    "Resist evaluating \\(2^{15} = 32{,}768\\) — with a shared base the exponents are the only thing that needs arithmetic.",
  traps: "(D) \\(2^{7}\\) subtracts before adding (\\(12 - 10 + 5\\) mis-grouped) and is also left unevaluated while the other choices are numbers.\n" +
    "(A) 4 is \\(2^2\\) and (C) 16 is \\(2^4\\) — off-by-one either way.\n" +
    "(E) 32 is \\(2^5\\), the second numerator term reported alone.",
  take: "Collapse the whole expression to one exponent first, then evaluate once. Mixed answer formats — some numbers, one power — usually mean the unevaluated one is a decoy."
},

"quant-exponents-ex#14": {
  steps: "Step 1 — Solve for \\(x\\) by matching bases. \\(81 = 3^4\\), so \\(3^x = 3^4\\) gives \\(x = 4\\).\n" +
    "Step 2 — Substitute: \\(3^{x-2} = 3^{4-2} = 3^2\\).\n" +
    "Step 3 — \\(3^2 = 9\\).",
  fast: "Skip solving for \\(x\\) altogether. \\(3^{x-2} = \\dfrac{3^x}{3^2} = \\dfrac{81}{9} = 9\\).\n" +
    "Treating the expression as the given power divided by \\(3^2\\) works even when \\(x\\) is not a whole number — a habit worth having for harder versions of this question.",
  traps: "(E) 81 is the given value, unchanged — the answer if you ignore the \\(-2\\).\n" +
    "(C) 27 is \\(3^3\\), subtracting 1 instead of 2.\n" +
    "(A) 3 is \\(3^1\\), subtracting 3.\n" +
    "(D) 1 is \\(3^0\\), subtracting 4.",
  take: "\\(a^{x-k} = \\dfrac{a^x}{a^k}\\). Dividing the given value by \\(a^k\\) is faster than solving for \\(x\\), and it generalises to non-integer exponents."
},

"quant-exponents-ex#15": {
  steps: "Step 1 — Handle the inner power first: \\((2^3)^2 = 2^{3 \\times 2} = 2^6\\).\n" +
    "Step 2 — Now multiply by \\(2^{-4}\\), which adds the exponents: \\(2^{6} \\times 2^{-4} = 2^{6 + (-4)} = 2^{2}\\).\n" +
    "Step 3 — \\(2^2 = 4\\).\n" +
    "Note that multiplying by a negative power is the same as dividing by the positive one: \\(\\dfrac{2^6}{2^4} = 2^2\\).",
  fast: "\\(3 \\times 2 - 4 = 2\\), so the answer is \\(2^2 = 4\\).\n" +
    "Multiply for the nested power, add for the product — the negative sign takes care of itself, with no need to convert to a fraction at any stage.",
  traps: "(C) 8 is \\(2^3\\), the base power left unsquared.\n" +
    "(D) 16 is \\(2^4\\), treating \\(2^{-4}\\) as \\(2^{+4}\\) somewhere in the working.\n" +
    "(E) 1 is \\(2^0\\), which is what \\((2^3)^2 \\times 2^{-6}\\) would give.\n" +
    "(A) 2 is \\(2^1\\), an off-by-one.",
  take: "Negative exponents obey exactly the same addition rule as positive ones. Convert to fractions only if you actually need a fractional answer."
},

"quant-exponents-ex#16": {
  steps: "Step 1 — Recognise the structure: \\(5^{2x} = \\left(5^{x}\\right)^{2}\\), because \\(a^{mn} = (a^m)^n\\).\n" +
    "Step 2 — So the equation says \\(\\left(5^{x}\\right)^{2} = 100\\).\n" +
    "Step 3 — Take the positive square root: \\(5^{x} = 10\\).\n" +
    "Step 4 — The negative root is rejected because \\(5^x\\) is positive for every real \\(x\\).",
  fast: "\\(5^{2x}\\) is the square of \\(5^{x}\\), so \\(5^x = \\sqrt{100} = 10\\).\n" +
    "You never need to find \\(x\\) itself — it is an irrational number here, which is the clue that the question wants the expression, not the variable.",
  traps: "(C) 25 is \\(5^2\\), the answer if you read \\(5^{2x}\\) as \\(5^2 \\cdot x\\).\n" +
    "(D) 50 is half of 100, treating the doubled exponent as a doubled value.\n" +
    "(A) 5 and (E) 20 have no derivation; note that \\(5^x = 5\\) would make \\(5^{2x} = 25\\), not 100.",
  take: "\\(a^{2x} = (a^x)^2\\). When a question asks for \\(a^x\\) rather than \\(x\\), it is telling you the exponent is not a nice number — work with the whole expression."
}

});
