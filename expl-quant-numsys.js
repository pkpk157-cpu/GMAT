/* GMAT Prep — in-depth explanations for the Number System set.
   Every answer was independently re-derived before the explanation was written;
   no stored key was changed. Keys are "setId#n"; index.html merges these over
   the transcribed question files at load. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-numbersystem-2-2#1": {
  steps: "Step 1 — The test for 11: take the sum of the digits in the odd positions, subtract the sum of the digits in the even positions, and the result must be 0 or a multiple of 11.\n" +
    "Step 2 — Write out \\(1\\,x\\,7\\,1\\,y\\,6\\,1\\) with positions 1 through 7. Odd positions hold \\(1, 7, y, 1\\); even positions hold \\(x, 1, 6\\).\n" +
    "Step 3 — Odd sum \\(= 9 + y\\). Even sum \\(= 7 + x\\).\n" +
    "Step 4 — The difference is \\((9+y) - (7+x) = 2 + y - x\\), and this must be a multiple of 11 — including 0.\n" +
    "Step 5 — Setting \\(2 + y - x = 0\\) gives \\(x - y = 2\\), a difference of [[2]].\n" +
    "Step 6 — The only other option is \\(2 + y - x = 11\\), i.e. \\(y - x = 9\\), a difference of 9. Between 2 and 9, the minimum is 2.",
  fast: "Five of the seven digits are fixed, so the whole question is: what does \\(x\\) versus \\(y\\) do to the alternating sum? It contributes \\(2 + y - x\\). Force that to 0 and the gap is 2 — you never have to write the number out.",
  traps: "(D) 0 would mean \\(x = y\\), leaving an alternating sum of 2 — not a multiple of 11.\n" +
    "(C) 1 leaves 1 or 3; (B) 3 leaves \\(-1\\) or 5; (E) 4 leaves \\(-2\\) or 6. None of those is 0 or 11, so none of these differences can ever make the number divisible by 11.\n" +
    "The trap that produces all four is answering \"how small can a difference be?\" instead of \"how small can a difference be *and still satisfy the rule*?\"",
  take: "Divisibility by 11 = (odd-place sum) − (even-place sum) is 0 or a multiple of 11. When most digits are fixed, only the unknowns' net contribution matters."
},

"quant-numbersystem-2-2#2": {
  steps: "Step 1 — The four integers below 81 are \\(77, 78, 79, 80\\); the four above are \\(82, 83, 84, 85\\).\n" +
    "Step 2 — Pair the outermost with the innermost: \\(77+85 = 162\\), \\(78+84 = 162\\), \\(79+83 = 162\\), \\(80+82 = 162\\).\n" +
    "Step 3 — Sum \\(= 4 \\times 162 = 648\\).\n" +
    "Step 4 — Factor it: \\(648 = 8 \\times 81 = 2^3 \\times 3^4\\).\n" +
    "Step 5 — Test the choices against \\(2^3 \\times 3^4\\). Only [[9]] \\(= 3^2\\) appears in that factorisation.",
  fast: "The eight numbers are symmetric about 81, so their average is exactly 81 and the sum is \\(8 \\times 81\\). You never add anything: the sum's prime factors are just those of 8 and of 81, so the answer has to be a factor of \\(2^3 \\times 3^4\\).",
  traps: "(A) 7, (C) 11 and (D) 13 are primes that appear nowhere in \\(2^3 \\times 3^4\\) — one glance at the factorisation kills all three.\n" +
    "(E) 15 is the subtle one: it needs a factor of 5, and \\(8 \\times 81\\) has none. Choosing it usually means you added \\(648\\) and then eyeballed \"ends in 8, close to 645\" rather than factoring.",
  take: "A run of consecutive integers symmetric about a centre sums to (count) × (centre). Factor that product instead of dividing the total by each option."
},

"quant-numbersystem-2-2#3": {
  steps: "Step 1 — The trick is to bring in the conjugate. Let \\(S = (2+\\sqrt3)^n + (2-\\sqrt3)^n\\).\n" +
    "Step 2 — Expand both by the binomial theorem. Every term containing an odd power of \\(\\sqrt3\\) appears with \\(+\\) in one expansion and \\(-\\) in the other, so those cancel. What survives is twice the sum of the even-power terms — an [[even integer]].\n" +
    "Step 3 — Now size the conjugate: \\(2-\\sqrt3 \\approx 0.268\\), so \\(0 < (2-\\sqrt3)^n < 1\\) for every natural \\(n\\).\n" +
    "Step 4 — Therefore \\((2+\\sqrt3)^n = S - (\\text{something strictly between 0 and 1})\\), which sits just below the even integer \\(S\\).\n" +
    "Step 5 — Its greatest integer part is \\(S - 1\\), and one less than an even number is [[odd]].\n" +
    "Step 6 — Sanity check both parities of \\(n\\): \\(n=1\\) gives \\(3.73\\), floor 3 (odd); \\(n=2\\) gives \\(7+4\\sqrt3 \\approx 13.93\\), floor 13 (odd).",
  fast: "Test \\(n=1\\) and \\(n=2\\). You get floors of 3 and 13 — both odd, and that single pair of tests eliminates everything except one option. The conjugate argument is what tells you it keeps holding forever.",
  traps: "(C) and (D) are the pair of \"it depends on \\(n\\)\" answers, and they are designed to be attractive because surd expressions so often do alternate. Two test values, one odd \\(n\\) and one even \\(n\\), destroy both at once — always spend that ten seconds.\n" +
    "(B) even is what you land on if you compute \\(S\\) and stop: \\(S\\) is even, but the floor of \\((2+\\sqrt3)^n\\) is \\(S-1\\).\n" +
    "(E) is the answer of someone who never tried a value. On the GMAT, \"cannot be determined\" is rarely right when a single substitution is available.",
  take: "For \\((a+\\sqrt b)^n\\), add the conjugate \\((a-\\sqrt b)^n\\): the irrational parts cancel and you get an integer. If the conjugate is between 0 and 1, the floor is that integer minus 1."
},

"quant-numbersystem-2-2#4": {
  steps: "Step 1 — \"Divisible by 3 and 5\" means divisible by both at once, which means divisible by \\(\\operatorname{lcm}(3,5) = 15\\). Do not add the two divisors.\n" +
    "Step 2 — List the multiples of 15 in range: \\(15, 30, 45, \\dots, 300\\).\n" +
    "Step 3 — Count them by dividing the top of the range: \\(300 \\div 15 = 20\\).\n" +
    "Step 4 — So there are [[20]] such numbers.",
  fast: "Two coprime divisors combine into their product, so this is just \"how many multiples of 15 up to 300?\" — one division, \\(300/15 = 20\\). The whole question is testing whether you reach for the lcm instead of the sum.",
  traps: "(D) 100 is \\(300 \\div 3\\) — the count of multiples of 3 alone, i.e. you answered \"divisible by 3 *or* 5\"-flavoured question by ignoring the 5 entirely.\n" +
    "(E) 102 is that same count nudged, the sort of number you get by mixing counts of 3s and 5s together.\n" +
    "(A) 16 and (B) 18 are undercounts from stopping the list of multiples of 15 short of 300 (at 240 or 270).",
  take: "\"Divisible by \\(a\\) and \\(b\\)\" = divisible by \\(\\operatorname{lcm}(a,b)\\). For coprime \\(a, b\\) that is simply \\(ab\\) — never \\(a+b\\)."
},

"quant-numbersystem-2-2#5": {
  steps: "Step 1 — Ask which terms can possibly matter. For \\(k \\ge 7\\), the product \\(k!\\) contains the factor 7, so \\(k!\\) is a multiple of 7 and contributes remainder 0.\n" +
    "Step 2 — That collapses a 100-term sum to six terms: \\(1! + 2! + 3! + 4! + 5! + 6!\\).\n" +
    "Step 3 — Evaluate: \\(1 + 2 + 6 + 24 + 120 + 720 = 873\\).\n" +
    "Step 4 — Divide: \\(873 = 7 \\times 124 + 5\\).\n" +
    "Step 5 — Remainder [[5]].",
  fast: "The cut-off is the only real content: factorials from \\(7!\\) onward are all multiples of 7, so 94 of the 100 terms vanish. Reduce the six survivors mod 7 as you go — \\(1+2+6+3+1+6 = 19\\), and \\(19 \\bmod 7 = 5\\) — and you never write 873 at all.",
  traps: "(C) 6 is the sharpest trap: it is exactly what you get by summing only \\(1!\\) through \\(5!\\), i.e. cutting off one term too early because \\(6!\\) \"feels\" big enough to contain a 7. It doesn't — \\(6! = 720\\) and \\(720 = 7 \\times 102 + 6\\).\n" +
    "(A) 0 is the opposite error: assuming that because the tail is divisible by 7, the whole sum is.\n" +
    "(D) 3 and (E) 1 are arithmetic slips in adding the six factorials or in the final division.",
  take: "In a factorial sum modulo \\(m\\), every term from \\(m!\\) onward is 0. Find the cut-off first, then only the short head of the sum needs computing."
},

"quant-numbersystem-2-2#6": {
  steps: "Step 1 — The multiples of 13 in range run \\(13 \\times 1, 13 \\times 2, \\dots\\) up to the largest one below 500.\n" +
    "Step 2 — Divide: \\(500 \\div 13 = 38.46\\ldots\\)\n" +
    "Step 3 — Take the integer part: the largest multiple is \\(13 \\times 38 = 494\\), and \\(13 \\times 39 = 507\\) is past 500.\n" +
    "Step 4 — So the multiples are \\(13 \\times 1\\) through \\(13 \\times 38\\), which is [[38]] numbers.",
  fast: "Counting multiples of \\(d\\) up to \\(N\\) is always \\(\\lfloor N/d \\rfloor\\). One division, then floor. Anchor it with a fact worth memorising: \\(13 \\times 4 = 52\\), so \\(13 \\times 40 = 520\\) — already past 500 — and you back off two steps to 494.",
  traps: "(A) 40 is \\(520 \\div 13\\): you used the friendly anchor \\(13 \\times 40 = 520\\) and forgot that 520 exceeds the range.\n" +
    "(C) 41 rounds \\(38.46\\) in a direction it should never be rounded, or counts past 500.\n" +
    "(D) 46 and (E) 48 correspond to a ceiling near 600 rather than 500 — a misread of the range.",
  take: "Multiples of \\(d\\) from 1 to \\(N\\): \\(\\lfloor N/d \\rfloor\\). Always floor, never round, and check that your anchor product hasn't overshot the limit."
},

"quant-numbersystem-2-2#7": {
  steps: "Step 1 — Name the divisor \\(d\\). The two numbers are \\(N_1 = da + 11\\) and \\(N_2 = db + 21\\).\n" +
    "Step 2 — Add them: \\(N_1 + N_2 = d(a+b) + 32\\). The \\(d(a+b)\\) part is a multiple of \\(d\\), so the remainder of the sum is whatever 32 leaves on division by \\(d\\).\n" +
    "Step 3 — We are told that remainder is 4, so \\(32 - 4 = 28\\) must be a multiple of \\(d\\): \\(d \\mid 28\\).\n" +
    "Step 4 — A remainder of 21 occurred, so the divisor must be larger than 21.\n" +
    "Step 5 — The divisors of 28 are \\(1, 2, 4, 7, 14, 28\\). Only [[28]] exceeds 21.\n" +
    "Step 6 — Check: \\(11 + 21 = 32\\), and \\(32 = 28 \\times 1 + 4\\). ✓",
  fast: "The remainders add: \\(11 + 21 = 32\\). Since the reported remainder is 4, the divisor has swallowed \\(32 - 4 = 28\\) exactly once. Add the remainders, subtract the new one — that single line is the whole problem.",
  traps: "(C) 14 and (D) 9 both divide into the picture arithmetically but are smaller than 21, and a remainder can never reach or exceed its divisor. That constraint alone eliminates them before any calculation.\n" +
    "(A) 36 is \\(32 + 4\\) — adding the leftover instead of subtracting it.\n" +
    "(E) 44 doesn't divide 28, so \\(32 \\bmod 44 = 32\\), not 4.",
  take: "Remainders add when the numbers add. If the sum's remainder is smaller than the sum of the remainders, the difference is a multiple of the divisor — and the divisor always exceeds every remainder it produced."
},

"quant-numbersystem-2-2#8": {
  steps: "Step 1 — Write \\(N = dq + 23\\) for some quotient \\(q\\).\n" +
    "Step 2 — Double it: \\(2N = 2dq + 46\\). The \\(2dq\\) term is a multiple of \\(d\\), so the remainder of \\(2N\\) is whatever 46 leaves on division by \\(d\\).\n" +
    "Step 3 — That remainder is given as 11, so \\(46 - 11 = 35\\) is a multiple of \\(d\\): \\(d \\mid 35\\).\n" +
    "Step 4 — The divisors of 35 are \\(1, 5, 7, 35\\).\n" +
    "Step 5 — Because a remainder of 23 was produced, \\(d > 23\\). Only [[35]] survives.\n" +
    "Step 6 — Verify: \\(N = 23\\) gives \\(23 \\div 35\\) with remainder 23 ✓, and \\(2N = 46\\) gives \\(46 = 35 + 11\\) ✓.",
  fast: "Doubling doubles the remainder: \\(2 \\times 23 = 46\\). The reported remainder is 11, so the divisor was subtracted out of 46 once, leaving \\(46 - 11 = 35\\). Then the rule \"divisor > remainder\" — here \\(> 23\\) — picks the unique divisor of 35 that qualifies.",
  traps: "(D) 23 is the trap of copying the remainder into the answer slot. A divisor can never equal its own remainder.\n" +
    "(A) 12 fails the same test from further away — with \\(d = 12\\) you could never see a remainder of 23 at all.\n" +
    "(B) 34 comes from \\(46 - 12\\) or similar slips; check it and \\(46 \\bmod 34 = 12\\), not 11.\n" +
    "(E) \"data inadequate\" is tempting because two unknowns appear, but the two constraints — \\(d \\mid 35\\) and \\(d > 23\\) — pin the divisor to a single value.",
  take: "If \\(N\\) leaves remainder \\(r\\), then \\(kN\\) leaves \\(kr \\bmod d\\). Subtract the observed remainder from \\(kr\\) and the result is a multiple of \\(d\\); the rule \\(d > r\\) usually finishes the job."
},

"quant-numbersystem-2-2#9": {
  steps: "Step 1 — Write \\(N = 5q + 3\\).\n" +
    "Step 2 — Square it: \\(N^2 = 25q^2 + 30q + 9\\). The first two terms are multiples of 5, so the remainder of \\(N^2\\) depends only on the 9.\n" +
    "Step 3 — \\(9 = 5 \\times 1 + 4\\).\n" +
    "Step 4 — Remainder [[4]].\n" +
    "Step 5 — Confirm with actual numbers: \\(8^2 = 64 = 5 \\times 12 + 4\\); \\(13^2 = 169 = 5 \\times 33 + 4\\). Always 4.",
  fast: "Remainders are all that survive under squaring, so replace \\(N\\) by its remainder: \\(3^2 = 9\\), and \\(9\\) leaves \\(4\\). Picking the smallest legal \\(N\\) — here \\(N=3\\) itself — is the fastest legitimate move on any remainder question.",
  traps: "(A) 9 is the square of the remainder, not the remainder of the square — you stopped one step early. Any \"remainder\" that is larger than the divisor is instantly wrong.\n" +
    "(B) 3 simply recycles the given remainder.\n" +
    "(E) 1 is the answer to the same question with a starting remainder of 1 or 4 rather than 3 (\\(4^2 = 16\\) leaves 1).\n" +
    "(C) 0 would require \\(N^2\\) to be a multiple of 5, which forces \\(N\\) itself to be one — contradicting the given remainder.",
  take: "To find \\((N^k) \\bmod d\\), reduce \\(N\\) mod \\(d\\) first, then take the power. And a remainder must always be smaller than the divisor — that check alone kills a choice or two."
},

"quant-numbersystem-2-2#11": {
  steps: "Step 1 — \"Successively divided\" means the *quotient* from the first division is fed into the second. So \\(N = 7q_1 + 3\\), and \\(q_1 = 8q_2 + 5\\).\n" +
    "Step 2 — Take the smallest case, \\(q_2 = 0\\): then \\(q_1 = 5\\).\n" +
    "Step 3 — Substitute back: \\(N = 7 \\times 5 + 3 = 38\\).\n" +
    "Step 4 — Now divide by \\(56 = 7 \\times 8\\). Since \\(38 < 56\\), the remainder is [[38]] itself.\n" +
    "Step 5 — Check the general case: \\(N = 7(8q_2 + 5) + 3 = 56q_2 + 38\\), so every such \\(N\\) leaves 38 on division by 56 — the answer does not depend on which \\(N\\) you picked.",
  fast: "Rebuild the number from the back: take the last remainder, multiply by the first divisor, add the first remainder — \\(5 \\times 7 + 3 = 38\\). Because \\(7 \\times 8 = 56\\) is exactly the combined divisor, that reconstructed number *is* the remainder.",
  traps: "(D) 26 is \\(7 \\times 3 + 5\\) — the remainders swapped into each other's roles.\n" +
    "(E) 43 is \\(8 \\times 5 + 3\\) — the divisors swapped, working back through 8 instead of 7.\n" +
    "(B) 31 and (C) 37 sit near the right value, close enough to survive a rushed reconstruction but produced by dropping or double-counting one step.\n" +
    "The single guard against all four: rebuild the number, then verify it really does leave 3 on division by 7 and that the quotient leaves 5 on division by 8.",
  take: "Successive division: work backwards, \\(N = d_1 \\times (\\text{next quotient}) + r_1\\). When the combined divisor is \\(d_1 d_2\\), the smallest rebuilt number is the remainder."
},

"quant-numbersystem-2-2#12": {
  steps: "Step 1 — \"From the smallest number to the greatest three-digit number\" means writing \\(1\\) through \\(999\\), and each digit typed is one key press.\n" +
    "Step 2 — Split by digit length. One-digit numbers: \\(1\\) to \\(9\\), that is 9 numbers × 1 digit \\(= 9\\) presses.\n" +
    "Step 3 — Two-digit numbers: \\(10\\) to \\(99\\), that is 90 numbers × 2 digits \\(= 180\\) presses.\n" +
    "Step 4 — Three-digit numbers: \\(100\\) to \\(999\\), that is 900 numbers × 3 digits \\(= 2700\\) presses.\n" +
    "Step 5 — Total \\(= 9 + 180 + 2700 = 2889\\).",
  fast: "The three band sizes — 9, 90, 900 — are worth knowing by reflex, and each band's digit count is just its size times its length. \\(9 + 180 + 2700\\) is then a five-second sum, and the leading 2700 already tells you the answer must start with 28 or 29.",
  traps: "(A) 2708 and (C) 2644 fall short — they come from mis-sizing a band, most often calling the two-digit range 89 numbers or the three-digit range 899.\n" +
    "(D) 2978 and (E) 3067 overshoot, typically by charging three key presses to numbers that need only one or two, or by running the count to 1000.\n" +
    "Every wrong answer here is a counting error, not a reasoning error — which is exactly why the band sizes 9 / 90 / 900 should be automatic.",
  take: "Digit-counting problems split into bands: 9 one-digit, 90 two-digit, 900 three-digit numbers. Multiply each band's size by its digit length and add."
},

"quant-numbersystem-2-2#13": {
  steps: "Step 1 — Successive division by 3, 5, 8 with remainders 1, 2, 4 means: \\(N = 3a + 1\\), \\(a = 5b + 2\\), \\(b = 8c + 4\\).\n" +
    "Step 2 — Build the smallest such \\(N\\) from the bottom up. Take \\(c = 0\\), so \\(b = 4\\).\n" +
    "Step 3 — Then \\(a = 5 \\times 4 + 2 = 22\\).\n" +
    "Step 4 — Then \\(N = 3 \\times 22 + 1 = 67\\).\n" +
    "Step 5 — Now run the divisors in reverse order, 8 then 5 then 3, on 67:\n" +
    "\\(67 = 8 \\times 8 + 3\\) → remainder [[3]], quotient 8.\n" +
    "\\(8 = 5 \\times 1 + 3\\) → remainder [[3]], quotient 1.\n" +
    "\\(1 = 3 \\times 0 + 1\\) → remainder [[1]].\n" +
    "Step 6 — Reversed remainders: 3, 3, 1.",
  fast: "There is no shortcut past building \\(N\\), but there is a shortcut in *how* you build it: start from the last remainder and fold backwards — \\(4 \\to 5(4)+2 = 22 \\to 3(22)+1 = 67\\). Then one pass of three short divisions finishes it, and you report the remainders in the order you produced them.",
  traps: "(C) 1, 3, 3 is the correct trio written backwards — the classic slip of reading your own scratch work bottom-up instead of top-down. Label each remainder with its divisor as you go.\n" +
    "(B) 3, 1, 3 and (D) 1, 1, 3 shuffle the same digits; they come from losing track of which division produced which remainder.\n" +
    "(E) attracts anyone who built \\(N\\) in the wrong direction (\\(3 \\to 5 \\to 8\\) instead of folding back from the last remainder) and got a value not on the list.",
  take: "Successive division rebuilds from the last remainder backwards. Reversing the divisor order changes the remainders, so recompute — and record each remainder next to its divisor."
},

"quant-numbersystem-2-2#14": {
  steps: "Step 1 — Since \\(10 \\equiv 1 \\pmod 9\\), every power of 10 is congruent to 1, so any number is congruent to the sum of its digits mod 9.\n" +
    "Step 2 — That means the giant concatenated number is congruent to the sum of all the digits used in writing \\(1\\) through \\(29\\).\n" +
    "Step 3 — Better still, each individual number is itself congruent to its own digit sum, so the whole thing is congruent to \\(1 + 2 + 3 + \\dots + 29\\).\n" +
    "Step 4 — \\(1 + 2 + \\dots + 29 = \\dfrac{29 \\times 30}{2} = 435\\).\n" +
    "Step 5 — \\(435 \\bmod 9\\): its digit sum is \\(4+3+5 = 12\\), whose digit sum is 3.\n" +
    "Step 6 — Remainder [[3]].\n" +
    "Step 7 — Cross-check the long way: digits of 1–9 sum to 45; of 10–19 to \\(10 + 45 = 55\\); of 20–29 to \\(20 + 45 = 65\\). Total \\(165\\), and \\(1+6+5 = 12 \\to 3\\). ✓",
  fast: "Mod 9 you may replace any number by its digit sum, so the 49-digit monster collapses to \\(1+2+\\dots+29 = \\frac{29 \\cdot 30}{2} = 435\\), and \\(435\\) collapses to 12, then to 3. Two collapses and you're done — no part of that number ever gets written out.",
  traps: "(C) 0 is the intuition that a long, orderly string of consecutive digits \"must\" be divisible by 9. Nothing about consecutiveness guarantees that.\n" +
    "(B) 1 and (D) 6 come from mis-adding \\(1\\) to \\(29\\) — the sum is 435, and the formula \\(\\frac{n(n+1)}{2}\\) should be reflex rather than a hand-addition.\n" +
    "(E) is unnecessary the moment you know \\(10 \\equiv 1 \\pmod 9\\); the congruence makes this a ten-second question.",
  take: "Mod 9, a number equals its digit sum — so a concatenation of \\(1\\) to \\(n\\) is congruent to \\(1+2+\\dots+n = \\frac{n(n+1)}{2}\\)."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-numbersystem-2-2#15": {
  steps: "Step 1 — Factor the divisor into coprime pieces: \\(44 = 4 \\times 11\\). A number is divisible by 44 exactly when it passes both tests.\n" +
    "Step 2 — Divisibility by 4 depends only on the last two digits, here \\(9y\\). The two-digit numbers \\(9y\\) divisible by 4 are 92 and 96.\n" +
    "Step 3 — The condition \\(y > 5\\) rules out 92, so \\(y = 6\\).\n" +
    "Step 4 — Now the 11 test on \\(x\\,9\\,5\\,9\\,6\\). Odd positions (1st, 3rd, 5th) hold \\(x, 5, 6\\), summing to \\(x + 11\\). Even positions hold \\(9, 9\\), summing to 18.\n" +
    "Step 5 — \\((x + 11) - 18 = x - 7\\) must be 0 or a multiple of 11. Only \\(x = 7\\) works for a single digit.\n" +
    "Step 6 — So \\(x = 7,\\ y = 6\\), giving 79596. Check: \\(79596 \\div 44 = 1809\\). ✓",
  fast: "Do the cheap test first. Divisibility by 4 looks at just two digits and, with \\(y > 5\\), pins \\(y = 6\\) immediately. Scan the choices at that point and only one even has \\(y = 6\\) — you can stop before ever running the 11 test.",
  traps: "(B) \\(y=8\\), (C) \\(y=7\\) and (D) \\(y=8\\) all die on the very first test: 98, 97 and 98 are not multiples of 4, so those numbers are not even divisible by 4, let alone 44.\n" +
    "(E) is there for anyone who tries 11 first, gets tangled in the alternating sum with two unknowns, and gives up.\n" +
    "The lesson is ordering: run the test that involves fewer unknowns first.",
  take: "Split a composite divisor into coprime factors and test each. Divisibility by 4 uses the last two digits; by 11, the alternating digit sum. Run the cheaper test first."
},

"quant-numbersystem-2-2#16": {
  steps: "Step 1 — Handle the numerator bracket. Common denominator 60: \\(\\dfrac12 - \\dfrac14 + \\dfrac15 - \\dfrac16 = \\dfrac{30 - 15 + 12 - 10}{60} = \\dfrac{17}{60}\\).\n" +
    "Step 2 — Handle the denominator bracket. Common denominator 90: \\(\\dfrac25 = \\dfrac{36}{90}\\), \\(\\dfrac59 = \\dfrac{50}{90}\\), \\(\\dfrac35 = \\dfrac{54}{90}\\), \\(\\dfrac{7}{18} = \\dfrac{35}{90}\\).\n" +
    "Step 3 — Combine: \\(\\dfrac{36 - 50 + 54 - 35}{90} = \\dfrac{5}{90} = \\dfrac{1}{18}\\).\n" +
    "Step 4 — Dividing by a fraction means multiplying by its reciprocal: \\(\\dfrac{17}{60} \\times 18 = \\dfrac{306}{60}\\).\n" +
    "Step 5 — \\(\\dfrac{306}{60} = \\dfrac{51}{10} = 5\\tfrac{1}{10}\\).",
  fast: "The second bracket is the one that collapses: \\(\\tfrac25 + \\tfrac35 = 1\\) exactly, so it is really \\(1 - \\tfrac59 - \\tfrac{7}{18} = \\tfrac{18 - 10 - 7}{18} = \\tfrac{1}{18}\\). Spotting that pair turns a four-fraction grind into one line, and dividing by \\(\\tfrac1{18}\\) is just multiplying by 18.",
  traps: "(A) \\(2\\tfrac13\\) and (C) \\(3\\tfrac1{10}\\) are what a sign slip in the alternating brackets produces — mis-handling one minus changes the denominator bracket enormously because it is so close to zero.\n" +
    "(B) \\(3\\tfrac16\\) and (E) \\(4\\tfrac1{10}\\) come from multiplying the two brackets instead of dividing, or from inverting the wrong one.\n" +
    "Before dividing, note that the denominator bracket is tiny (\\(\\tfrac1{18}\\)) while the numerator is about \\(0.28\\) — the answer must therefore be around 5, which alone singles out one choice.",
  take: "Scan an alternating fraction string for pairs that make a whole number before finding a common denominator. Then estimate the size of the quotient as a sanity check."
},

"quant-numbersystem-2-2#17": {
  steps: "Step 1 — \"Consists entirely of nines\" means the product is one of \\(9, 99, 999, 9999, \\dots\\), i.e. \\(10^k - 1\\).\n" +
    "Step 2 — We need the smallest \\(k\\) with \\(13 \\mid 10^k - 1\\). Test in turn: \\(9, 99, 999, 9999, 99999\\) all leave a remainder.\n" +
    "Step 3 — \\(999999\\) works: \\(999999 = 13 \\times 76923\\).\n" +
    "Step 4 — So the smallest \\(x\\) is [[76923]].\n" +
    "Step 5 — Check: \\(76923 \\times 13 = 76923 \\times 10 + 76923 \\times 3 = 769230 + 230769 = 999999\\). ✓",
  fast: "Know the identity \\(999999 = 999 \\times 1001 = 3^3 \\times 37 \\times 7 \\times 11 \\times 13\\). Because 13 sits inside 1001, six nines is the first all-nines number 13 divides, and \\(999999 \\div 13 = 76923\\) follows. Failing that, every choice is close to \\(999999/13 \\approx 76{,}923\\), so just multiply each by 13 and look for the one ending in 9.",
  traps: "Every distractor is a single-digit edit of the right value and every one of them ends in 3, so the usual last-digit filter separates nothing here — you have to multiply.\n" +
    "(A) 76913 gives \\(999869\\) and (D) 75933 gives \\(987129\\): both land below \\(999999\\), and neither is all nines.\n" +
    "(B) 76933 gives \\(1000129\\) and (E) 76943 gives \\(1000259\\): both overshoot into seven digits, far short of \\(9999999\\).\n" +
    "The useful size check is that \\(999999 \\div 13 \\approx 76{,}923\\), so anything above that value cannot produce a six-digit product at all.",
  take: "A string of \\(k\\) nines is \\(10^k - 1\\). Memorise \\(1001 = 7 \\times 11 \\times 13\\) and \\(999999 = 999 \\times 1001\\) — they answer a whole family of repunit questions."
},

"quant-numbersystem-2-2#18": {
  steps: "Step 1 — Successive division by 5, 6, 8 with remainders 3, 4, 7 means \\(N = 5a + 3\\), \\(a = 6b + 4\\), \\(b = 8c + 7\\).\n" +
    "Step 2 — Take the smallest case \\(c = 0\\), so \\(b = 7\\).\n" +
    "Step 3 — Then \\(a = 6 \\times 7 + 4 = 46\\).\n" +
    "Step 4 — Then \\(N = 5 \\times 46 + 3 = 233\\).\n" +
    "Step 5 — Now divide successively by 8, 6, 5 instead:\n" +
    "\\(233 = 8 \\times 29 + 1\\) → remainder [[1]], quotient 29.\n" +
    "\\(29 = 6 \\times 4 + 5\\) → remainder [[5]], quotient 4.\n" +
    "\\(4 = 5 \\times 0 + 4\\) → remainder [[4]].\n" +
    "Step 6 — Reversed remainders: 1, 5, 4.",
  fast: "Fold backwards from the last remainder: \\(7 \\to 6(7)+4 = 46 \\to 5(46)+3 = 233\\). Then three quick divisions. A useful check before you even start: the reversed remainders must be legal for their new divisors, so the first one must be under 8, the second under 6, the third under 5.",
  traps: "(A) 7, 4, 3 is the original list of remainders simply written backwards — the single most common answer here, and it ignores that the actual divisions change completely.\n" +
    "(B) 5, 3, 4 and (C) 2, 5, 4 come from building \\(N\\) in the wrong direction or dividing in the wrong order.\n" +
    "(E) tempts anyone whose reconstruction produced a triple not on the list, which almost always means the folding order went wrong rather than the arithmetic.\n" +
    "All four numeric triples happen to be legal for the divisors 8, 6, 5, so no shortcut screens them — the only defence is to rebuild 233 and divide it properly.",
  take: "Reversing the divisors does not reverse the remainders — rebuild the number and divide again. Each new remainder must be smaller than its own divisor."
},

"quant-numbersystem-2-2#19": {
  steps: "Step 1 — \"Division by factors\" means 385 was split as \\(385 = 5 \\times 7 \\times 11\\) and the divisions were done one after another in that order.\n" +
    "Step 2 — So \\(N = 5a + 4\\), \\(a = 7b + 6\\), \\(b = 11 \\times 102 + 10\\) — the final quotient 102 and the third remainder 10 sit at the innermost level.\n" +
    "Step 3 — \\(b = 1122 + 10 = 1132\\).\n" +
    "Step 4 — \\(a = 7 \\times 1132 + 6 = 7924 + 6 = 7930\\).\n" +
    "Step 5 — \\(N = 5 \\times 7930 + 4 = 39650 + 4 = 39654\\).\n" +
    "Step 6 — Check: \\(39654 = 385 \\times 102 + 384\\), and \\(385 \\times 102 = 39270\\), leaving 384 — a legal remainder under 385. ✓",
  fast: "Work strictly outward from the innermost division: multiply by 11 and add 10, then by 7 and add 6, then by 5 and add 4. Even faster, check the units digit: \\(5 \\times (\\text{anything}) + 4\\) must end in 4 or 9, and only two choices end that way — then one multiplication separates them.",
  traps: "(B) 32754 and (C) 38554 come from folding the remainders in the wrong order — pairing 4 with 11 and 10 with 5 instead of the order the divisions were performed.\n" +
    "(D) 39954 is a near-miss on the last step, the sort of thing a slip in \\(5 \\times 7930\\) produces; it is close enough to the right value to survive a careless check.\n" +
    "(E) tempts anyone whose reconstruction produced a number not on the list — which usually means the folding order, not the arithmetic, went wrong.",
  take: "Division by factors rebuilds outward from the innermost quotient: multiply by the last divisor, add the last remainder, and repeat back to the first."
},

"quant-numbersystem-2-2#20": {
  steps: "Step 1 — Write the numbers as \\(N_1 = da + 4375\\) and \\(N_2 = db + 2986\\).\n" +
    "Step 2 — Their sum is \\(d(a+b) + 7361\\), so the remainder of the sum is whatever \\(7361\\) leaves on division by \\(d\\).\n" +
    "Step 3 — That remainder is 2361, so \\(7361 - 2361 = 5000\\) is a multiple of \\(d\\).\n" +
    "Step 4 — Also, a remainder of 4375 was produced, so \\(d > 4375\\).\n" +
    "Step 5 — The divisors of 5000 above 4375 are just 5000 itself.\n" +
    "Step 6 — Check: \\(7361 = 5000 + 2361\\). ✓",
  fast: "Add the two remainders and subtract the remainder of the sum: \\((4375 + 2986) - 2361 = 5000\\). The divisor went into that combined excess exactly once, so it *is* 5000 — a one-line calculation once you see that remainders add.",
  traps: "(C) 625 is a genuine divisor of 5000, so it survives the first test — but it is far smaller than 4375, and a remainder can never reach its divisor. That size check is what makes the answer unique.\n" +
    "(A) 2014 and (D) 2639 fail on both counts: too small, and neither divides 5000.\n" +
    "(E) 6389 is \\(4375 + 2014\\)-flavoured noise; check it against \\(7361 \\bmod 6389 = 972\\), not 2361.",
  take: "Remainders add. (Sum of remainders) − (remainder of the sum) is a multiple of the divisor, and the divisor must exceed every remainder seen."
},

"quant-numbersystem-2-2#21": {
  steps: "Step 1 — Only the units digits matter, so the problem is the units digit of \\(7^{153} \\times 1^{72}\\).\n" +
    "Step 2 — Powers of 7 cycle their units digit with period 4: \\(7^1 \\to 7\\), \\(7^2 \\to 9\\), \\(7^3 \\to 3\\), \\(7^4 \\to 1\\), then it repeats.\n" +
    "Step 3 — Reduce the exponent: \\(153 = 4 \\times 38 + 1\\), so \\(153\\) sits at position 1 in the cycle, giving units digit 7.\n" +
    "Step 4 — Any power of a number ending in 1 ends in 1, so \\(341^{72}\\) contributes units digit 1.\n" +
    "Step 5 — Multiply the units digits: \\(7 \\times 1 = 7\\).",
  fast: "Strip everything but the last digit of each base and the last two digits of each exponent. The 7-cycle is 7, 9, 3, 1 with period 4; \\(153\\) leaves 1 on division by 4, so you are back at 7. The second factor ends in 1 and can be ignored entirely.",
  traps: "(E) 10 is not a digit — a units digit is a single digit, so this choice is impossible on sight and exists purely to catch a careless scan.\n" +
    "(D) 9 is the second entry of the 7-cycle: you get it by taking \\(153 \\bmod 4 = 1\\) and then counting the cycle as though position 1 meant \\(7^2\\), an off-by-one in the cycle.\n" +
    "(A) 6 and (C) 8 come from multiplying whole numbers or mixing in the digits 4 and 6 of 2467 rather than isolating the last digit.\n" +
    "Note the trap in \\(153 \\bmod 4\\): when the remainder is 0 you use the *fourth* entry, not the first — here the remainder is 1, so the first entry is right.",
  take: "Units digits cycle with period at most 4. Reduce the exponent mod 4 (using 4 itself when the remainder is 0) and multiply the units digits of the factors."
},

"quant-numbersystem-2-2#22": {
  steps: "Step 1 — Take the divisibility by 5 first: the last digit must be 0 or 5.\n" +
    "Step 2 — Divisibility by 8 requires the number to be even, and 5 is odd, so the last digit must be 0. That fixes the second blank at 0.\n" +
    "Step 3 — Divisibility by 8 depends only on the last three digits, which here are \\(4\\), the first blank, and \\(0\\).\n" +
    "Step 4 — Test the possibilities: 400 ÷ 8 = 50 ✓, 410 ✗, 420 ✗, 430 ✗, 440 ÷ 8 = 55 ✓, 450 ✗, 460 ✗, 470 ✗, 480 ÷ 8 = 60 ✓, 490 ✗. So the first blank may be 0, 4 or 8.\n" +
    "Step 5 — Among the pairs offered, only [[4, 0]] has second digit 0 and a valid first digit.\n" +
    "Step 6 — Check: \\(6268440 \\div 8 = 783555\\) and it ends in 0, so 5 divides it too. ✓",
  fast: "Two rules, applied in the right order, do all the work. \"Divisible by 8 and by 5\" forces the last digit to 0 straight away — that alone eliminates the choices whose second entry isn't 0. Then only the last three digits matter for 8.",
  traps: "(B) 0, 4 puts the digits in the wrong slots — the number would end in 4, which is not divisible by 5. Read carefully which symbol comes first.\n" +
    "(D) 4, 4 fails for the same reason.\n" +
    "(C) 2, 0 clears the 5 test but not the 8 test: 420 ÷ 8 = 52.5.\n" +
    "(E) is only correct if no pair works, and one does.",
  take: "For 8, look at the last three digits; for 5, the last one; for 4, the last two. When two rules overlap, apply the more restrictive one first."
},

"quant-numbersystem-2-2#23": {
  steps: "Step 1 — The boy wrote 559981. Both 9s are wrong, so the true product has the shape \\(5\\,5\\,\\square\\,\\square\\,8\\,1\\) — the third and fourth digits are unknown, the rest are correct — and it must be a multiple of 987.\n" +
    "Step 2 — Attack it with the last two digits. If \\(987k\\) ends in 81, then \\(87k \\equiv 81 \\pmod{100}\\).\n" +
    "Step 3 — Since \\(87 \\times 23 = 2001 \\equiv 1 \\pmod{100}\\), multiply both sides by 23: \\(k \\equiv 23 \\times 81 = 1863 \\equiv 63 \\pmod{100}\\). So \\(k\\) ends in 63.\n" +
    "Step 4 — Size it: the product starts with 55, so \\(k\\) is near \\(555000 \\div 987 \\approx 562\\). The only value ending in 63 in that neighbourhood is \\(k = 563\\).\n" +
    "Step 5 — \\(987 \\times 563 = 493500 + 62181 = 555681\\).\n" +
    "Step 6 — It matches the fixed digits 5, 5, _, _, 8, 1 with the two 9s replaced by 5 and 6. ✓",
  fast: "Don't reconstruct anything — test the choices. The true answer must be divisible by 987, and dividing each option by 987 takes seconds: only \\(555681 = 987 \\times 563\\) comes out whole. On a question that hands you five candidates and one clean divisibility condition, checking beats deriving.",
  traps: "Every distractor keeps the fixed digits 5, 5, ?, ?, 8, 1, so the shape test cannot separate them — only the divisibility test can.\n" +
    "(A) 553681, (B) 555181, (D) 556581 and (E) 557481 all fail: dividing by 987 gives 561.0-ish, 562.5-ish, 563.9-ish and 564.8-ish, none of them integers.\n" +
    "The temptation is to assume the third digit is the only wrong one; the problem says *both* 9s are wrong, so two positions are free.",
  take: "When a corrupted product is given with the multiplier known, use divisibility to screen the choices — one division per option is faster than reconstructing the number."
},

"quant-numbersystem-2-2#24": {
  steps: "Step 1 — A digit \\(d\\) written six times is \\(d \\times 111111\\), since \\(111111\\) is the six-digit repunit.\n" +
    "Step 2 — Factor the repunit: \\(111111 = 111 \\times 1001\\).\n" +
    "Step 3 — And \\(111 = 3 \\times 37\\), while \\(1001 = 7 \\times 11 \\times 13\\).\n" +
    "Step 4 — So \\(111111 = 3 \\times 7 \\times 11 \\times 13 \\times 37\\), and every such six-digit number carries all of those factors whatever \\(d\\) is.\n" +
    "Step 5 — The set [[7, 11 and 13]] is therefore guaranteed.\n" +
    "Step 6 — Check with 444444: \\(444444 \\div 7 = 63492\\), \\(\\div 11 = 40404\\), \\(\\div 13 = 34188\\). ✓",
  fast: "\\(1001 = 7 \\times 11 \\times 13\\) is the single most useful factorisation in number-property questions, and \\(111111 = 111 \\times 1001\\). Once you see the 1001 hiding inside, the answer is immediate without dividing anything.",
  traps: "(A) 17 and (B) 19 appear nowhere in \\(3 \\times 7 \\times 11 \\times 13 \\times 37\\), so both fail on the factor that was slipped in beside a true one — the trap is checking only the first factor listed and accepting the pair.\n" +
    "(D) offers 9, and the repunit's digit sum is 6, so 9 never divides it (for \\(d = 3\\) it happens to, but the question says *always*).\n" +
    "(E) is for anyone who tried dividing 111111 by hand and lost confidence.",
  take: "\\(1001 = 7 \\times 11 \\times 13\\) and \\(111111 = 3 \\times 7 \\times 11 \\times 13 \\times 37\\). \"Always divisible\" means it must hold for every digit, so one counterexample kills a claim."
},

"quant-numbersystem-2-2#26": {
  steps: "Step 1 — Write what is given: \\(N = 296k + 75\\).\n" +
    "Step 2 — Notice that 37 divides 296: \\(296 = 8 \\times 37\\). So the \\(296k\\) term contributes nothing to a remainder mod 37.\n" +
    "Step 3 — The remainder therefore comes entirely from 75: \\(75 = 2 \\times 37 + 1\\).\n" +
    "Step 4 — So \\(N = 37(8k + 2) + 1\\), and the remainder on division by 37 is [[1]].\n" +
    "Step 5 — Check with the smallest case \\(N = 75\\): \\(75 \\div 37 = 2\\) remainder 1. ✓",
  fast: "The whole question is the observation \\(296 = 8 \\times 37\\). When the new divisor divides the old one, the big multiple vanishes and you only need to reduce the remainder itself: \\(75 \\bmod 37 = 1\\). One subtraction of 74.",
  traps: "(B) 2 is the *quotient* when 75 is divided by 37, not the remainder — the classic one-line-too-early stop.\n" +
    "(C) 8 is the other factor of 296, grabbed from the factorisation instead of the reduction.\n" +
    "(D) 11 and (E) 14 come from reducing 75 by the wrong multiple of 37, or from dividing 296 rather than 75.\n" +
    "This shortcut only works because 37 divides 296. If it did not, the remainder would not be determined at all — worth noticing, since that is how the same question gets turned into a data-sufficiency trap.",
  take: "If the new divisor divides the old one, the new remainder is just the old remainder reduced: \\(N \\bmod d = r \\bmod d\\) whenever \\(d \\mid D\\) and \\(N = Dk + r\\)."
},

"quant-numbersystem-2-2#27": {
  steps: "Step 1 — Successive division by 4, 5, 6 with remainders 2, 3, 4 means \\(N = 4a + 2\\), \\(a = 5b + 3\\), \\(b = 6c + 4\\).\n" +
    "Step 2 — Substitute upward to get the general form: \\(a = 5(6c+4) + 3 = 30c + 23\\), so \\(N = 4(30c + 23) + 2 = 120c + 94\\).\n" +
    "Step 3 — So the numbers with this property are \\(94, 214, 334, 454, \\dots\\) — every one of them is a valid answer to the underlying arithmetic.\n" +
    "Step 4 — Which of them is on the list? \\(94\\) is not offered; \\(214 = 120 \\times 1 + 94\\) is.\n" +
    "Step 5 — Verify [[214]] directly: \\(214 \\div 4 = 53\\) remainder 2 ✓; \\(53 \\div 5 = 10\\) remainder 3 ✓; \\(10 \\div 6 = 1\\) remainder 4 ✓.\n" +
    "Step 6 — And none of the other choices is \\(94\\) more than a multiple of 120.",
  fast: "Fold backwards with the smallest quotient: \\(6 \\times 1 + 4 = 10\\), \\(5 \\times 10 + 3 = 53\\), \\(4 \\times 53 + 2 = 214\\). Alternatively, run the three divisions on each choice and stop at the first that survives all three — with five options that is often quicker than deriving the general form.",
  traps: "(B) 476, (C) 954, (D) 1908 and (E) 2386 all fail at some stage of the three-step division; none of them is congruent to 94 modulo 120.\n" +
    "(D) 1908 is especially tempting because it is a multiple of 4 and looks \"constructed\", but \\(1908 \\div 4 = 477\\) with remainder 0, not 2 — it fails immediately.\n" +
    "The deeper trap is assuming the answer is unique. Infinitely many numbers fit; the question is really \"which of these five fits\", so always finish by testing.",
  take: "Successive division fixes the number only modulo the product of the divisors — here \\(N \\equiv 94 \\pmod{120}\\). Rebuild the smallest one, then find its relative on the list."
},

"quant-numbersystem-2-2#28": {
  steps: "Step 1 — A number is divisible by 9 exactly when its digit sum is.\n" +
    "Step 2 — Digit sum of 6709: \\(6 + 7 + 0 + 9 = 22\\).\n" +
    "Step 3 — \\(22 = 9 \\times 2 + 4\\), so 6709 is 4 more than a multiple of 9.\n" +
    "Step 4 — Subtracting [[4]] removes exactly that excess: \\(6709 - 4 = 6705\\), whose digit sum is \\(6+7+0+5 = 18\\), a multiple of 9. ✓\n" +
    "Step 5 — Anything smaller than 4 leaves a positive remainder, so 4 is the least.",
  fast: "The amount to subtract is simply the remainder: reduce the digit sum mod 9. \\(6+7+0+9 = 22 \\to 2+2 = 4\\). That single digit is the answer — no division of 6709 by 9 is ever needed.",
  traps: "(D) 5 is the amount you would need to *add* to reach the next multiple of 9 (\\(9 - 4 = 5\\)) — the question asks to subtract, and the two answers are always complements.\n" +
    "(A) 2, (B) 3 and (E) 6 come from mis-adding the digits, usually by dropping the 0 or by reading 6709 as 6079.\n" +
    "Always finish by checking the digit sum of your result: 6705 gives 18, which settles it in two seconds.",
  take: "To make a number divisible by 9, subtract (digit sum mod 9) or add its complement to 9. The digit-sum shortcut replaces the division entirely."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-numbersystem-2-2#29": {
  steps: "Step 1 — Work from the innermost bracket outward. \\(3.6 - 1.5 = 2.1\\).\n" +
    "Step 2 — Inside the braces, multiplication comes before addition and subtraction: \\(6.3 \\times 2.1 = 13.23\\).\n" +
    "Step 3 — Now finish the braces left to right: \\(2.8 - 13.23 + 15.6 = 5.17\\).\n" +
    "Step 4 — Multiply: \\(7.9 \\times 5.17 = 40.843\\).\n" +
    "Step 5 — Add the leading term: \\(2.002 + 40.843\\) = [[42.845]].",
  fast: "Estimate before you compute. The braces are roughly \\(2.8 - 13 + 15.6 \\approx 5\\), so the product is about \\(7.9 \\times 5 \\approx 40\\), and adding 2 puts the answer in the low 40s. That single pass already separates the choices; the exact decimals are only needed to confirm.\n" +
    "Also track decimal places rather than digits: \\(7.9\\) (one place) times \\(5.17\\) (two places) gives three places, and adding \\(2.002\\) keeps three.",
  traps: "(C) 40.843 is the single most likely wrong answer — it is the correct product, with the leading \\(2.002\\) never added. Whenever a choice equals your second-to-last line, suspect exactly this.\n" +
    "(B) 4.2845 is the right answer with the decimal point moved, which happens when the three decimal places get miscounted.\n" +
    "(A) 2.002 is what you write down if you decide the braces come out to zero and give up.\n" +
    "(E) 45.130 is a near-miss from a sign slip inside the braces, close enough to survive a rushed check — which is why the braces must be fully resolved before the multiplication happens.",
  take: "Innermost bracket first, then multiplication, then left-to-right addition and subtraction. Estimate the size first, and beware of choices that match an intermediate line."
},

"quant-numbersystem-2-2#30": {
  steps: "Step 1 — \"Of\" means multiply, and it binds before the \\(+\\) and \\(-\\). So this is \\(9 - \\left(1\\tfrac29 \\times 3\\tfrac3{11}\\right) + \\left(5\\tfrac17 \\times \\tfrac79\\right)\\).\n" +
    "Step 2 — Convert the mixed numbers: \\(1\\tfrac29 = \\tfrac{11}{9}\\), \\(3\\tfrac3{11} = \\tfrac{36}{11}\\), \\(5\\tfrac17 = \\tfrac{36}{7}\\).\n" +
    "Step 3 — First product: \\(\\dfrac{11}{9} \\times \\dfrac{36}{11} = \\dfrac{36}{9} = 4\\) — the 11s cancel outright.\n" +
    "Step 4 — Second product: \\(\\dfrac{36}{7} \\times \\dfrac{7}{9} = \\dfrac{36}{9} = 4\\) — the 7s cancel outright.\n" +
    "Step 5 — \\(9 - 4 + 4\\) = [[9]].",
  fast: "The whole question is built so that both products cancel to the same clean number. \\(1\\tfrac29\\) has denominator 9 and \\(3\\tfrac3{11}\\) has numerator 36 over 11 — the 11s vanish; the second pair does the same with 7s. Convert, cancel, and you get \\(4\\) twice, so the \\(-4\\) and \\(+4\\) annihilate and the expression is just the leading 9.",
  traps: "(C) \\(8\\tfrac{32}{81}\\) carries a denominator of 81, which can only come from a mixed-number conversion that left a stray ninth — a sure sign that \\(1\\tfrac29\\) was turned into something other than \\(\\tfrac{11}{9}\\).\n" +
    "(B) 8 and (E) \\(7\\tfrac12\\) come from mishandling the order: reading the expression as \\(9 - \\left(\\text{first product} + \\text{second product}\\right)\\), or subtracting where the sign is plus.\n" +
    "(A) \\(\\tfrac54\\) is what a full order-of-operations collapse produces — treating \"of\" as though it applied to the running total \\(9 - 1\\tfrac29\\).\n" +
    "The guard is to compute each \"of\" product on its own line before touching the \\(+\\) and \\(-\\).",
  take: "\"Of\" is multiplication and binds tighter than \\(+\\) or \\(-\\). Convert mixed numbers to improper fractions first, then look for cancellations before multiplying anything out."
},

"quant-numbersystem-2-2#31": {
  steps: "Step 1 — Successive division by 4 then 5 with remainders 1 and 4 means \\(N = 4a + 1\\) and \\(a = 5b + 4\\).\n" +
    "Step 2 — Smallest case \\(b = 0\\) gives \\(a = 4\\), so \\(N = 4 \\times 4 + 1 = 17\\).\n" +
    "Step 3 — Now divide successively by 5 then 4:\n" +
    "\\(17 = 5 \\times 3 + 2\\) → remainder [[2]], quotient 3.\n" +
    "\\(3 = 4 \\times 0 + 3\\) → remainder [[3]].\n" +
    "Step 4 — Reversed remainders: 2, 3.\n" +
    "Step 5 — The general \\(N\\) is \\(20b + 17\\); check \\(N = 37\\): \\(37 \\div 5 = 7\\) r2, \\(7 \\div 4 = 1\\) r3 — same pair, as it must be.",
  fast: "Build \\(N\\) by folding back — \\(4 \\times 4 + 1 = 17\\) — then two divisions finish it. Note that the second quotient is 0 here, so the second remainder is just the first quotient itself; that happens whenever the number is small relative to the divisors, and it is easy to mis-handle.",
  traps: "(D) 4, 1 is the original pair of remainders written backwards — the reflex answer, and it is wrong because reversing the divisors changes the arithmetic completely, not just the order of the output.\n" +
    "(C) 3, 2 is the correct pair reversed, produced by reporting the divisions bottom-up.\n" +
    "(A) 1, 2 mixes one remainder from each list.\n" +
    "(E) is for anyone whose reconstruction of \\(N\\) went wrong and produced a pair not on the list.",
  take: "Reversing the order of successive divisors gives genuinely different remainders. Rebuild the smallest number and redo the divisions — never just reverse the given list."
},

"quant-numbersystem-2-2#32": {
  steps: "Step 1 — Subtracting 79 a total of \\(k\\) times means removing \\(79k\\), so \\(5 \\times 10^4 - 79k = 43759\\).\n" +
    "Step 2 — Rearrange: \\(79k = 50000 - 43759 = 6241\\).\n" +
    "Step 3 — Divide: \\(k = 6241 \\div 79\\).\n" +
    "Step 4 — Recognise that \\(79^2 = 6241\\), so \\(k\\) = [[79]].\n" +
    "Step 5 — Check: \\(79 \\times 79 = 79 \\times 80 - 79 = 6320 - 79 = 6241\\). ✓",
  fast: "Two lines: the gap is \\(50000 - 43759 = 6241\\), and the question is how many 79s fit in it. Since \\(80^2 = 6400\\) and the gap is a little under that, the answer is a little under 80 — and \\(79 \\times 80 = 6320\\), \\(6320 - 79 = 6241\\), so it is exactly 79.",
  traps: "The distractors are 77, 78, 80 and 81 — all within two of the right value, so estimation alone will not finish this question. You must land the division exactly.\n" +
    "(D) 80 is the trap of rounding: \\(6241\\) is close to \\(6400 = 80^2\\), and stopping at \"about 80\" gives it.\n" +
    "(A) 77 and (B) 78 come from an off-by-one or off-by-two in the long division, or from mis-subtracting \\(50000 - 43759\\).\n" +
    "(E) 81 overshoots — \\(79 \\times 81 = 6399\\), which would take you below 43759.",
  take: "\"How many times must \\(d\\) be subtracted\" is just \\((\\text{start} - \\text{end}) \\div d\\). Anchor the division with a nearby square or round multiple, then correct exactly."
},

"quant-numbersystem-2-2#33": {
  steps: "Step 1 — The product of the first sixty positive integers is \\(60!\\).\n" +
    "Step 2 — Count the factor 2 in \\(60!\\) with Legendre's method — add up how many multiples of each power of 2 there are:\n" +
    "\\(\\lfloor 60/2 \\rfloor = 30\\), \\(\\lfloor 60/4 \\rfloor = 15\\), \\(\\lfloor 60/8 \\rfloor = 7\\), \\(\\lfloor 60/16 \\rfloor = 3\\), \\(\\lfloor 60/32 \\rfloor = 1\\), \\(\\lfloor 60/64 \\rfloor = 0\\).\n" +
    "Step 3 — Total power of 2: \\(30 + 15 + 7 + 3 + 1 = 56\\). So \\(2^{56}\\) divides \\(60!\\) but \\(2^{57}\\) does not.\n" +
    "Step 4 — Since \\(8 = 2^3\\), \\(8^n = 2^{3n}\\), and we need \\(3n \\le 56\\).\n" +
    "Step 5 — \\(n = \\lfloor 56/3 \\rfloor\\) = [[18]] (since \\(3 \\times 18 = 54 \\le 56\\) but \\(3 \\times 19 = 57 > 56\\)).",
  fast: "Two mechanical steps and no arithmetic beyond division: sum the floors \\(60/2, 60/4, 60/8, \\dots\\) to get 56, then divide by 3 and take the floor. The only place people lose the question is forgetting to convert 8 into \\(2^3\\).",
  traps: "(B) 19 is what you get from \\(56 \\div 3 = 18.67\\) rounded the wrong way. The exponent must be floored — \\(8^{19} = 2^{57}\\) needs one more 2 than \\(60!\\) contains.\n" +
    "(E) 20 comes from dropping a term in the floor sum, or from dividing 60 by 3 somewhere.\n" +
    "(C) 17 and (D) 16 are undercounts — usually from stopping the sum at \\(\\lfloor 60/8 \\rfloor\\) or \\(\\lfloor 60/16 \\rfloor\\) instead of running it until the terms hit zero.\n" +
    "Run the sum all the way down to a zero term every time; the tail is small but it is exactly what separates 17, 18 and 19.",
  take: "Power of a prime \\(p\\) in \\(n!\\) is \\(\\lfloor n/p \\rfloor + \\lfloor n/p^2 \\rfloor + \\lfloor n/p^3 \\rfloor + \\dots\\). For a composite base like 8, convert to \\(2^3\\) and divide the total by 3, flooring."
},

"quant-numbersystem-2-2#34": {
  steps: "Step 1 — Find the units digit of \\(7^{95}\\). Powers of 7 cycle 7, 9, 3, 1 with period 4. \\(95 = 4 \\times 23 + 3\\), so it sits at position 3: the units digit is 3.\n" +
    "Step 2 — Find the units digit of \\(3^{58}\\). Powers of 3 cycle 3, 9, 7, 1 with period 4. \\(58 = 4 \\times 14 + 2\\), position 2: the units digit is 9.\n" +
    "Step 3 — Now subtract. \\(7^{95}\\) is astronomically larger than \\(3^{58}\\), so the difference is positive and the subtraction is genuine.\n" +
    "Step 4 — The units column is \\(3 - 9\\), which requires a borrow: \\(13 - 9\\) = [[4]].\n" +
    "Step 5 — So the difference ends in 4.",
  fast: "Both cycles have period 4, so reduce both exponents mod 4: \\(95 \\to 3\\) and \\(58 \\to 2\\), giving units digits 3 and 9. The only real skill left is the borrow — write it as \\(13 - 9\\), not \\(3 - 9\\).",
  traps: "(C) 6 is the trap the whole question is built around: \\(|3 - 9| = 6\\). Taking the absolute value instead of borrowing is the single most common error in units-digit subtraction.\n" +
    "(A) 0 assumes the two units digits are equal, which happens if you reduce both exponents to the same cycle position.\n" +
    "(D) 7 is the units digit of \\(3^{58}\\)'s neighbour in its cycle — an off-by-one in \\(58 \\bmod 4\\).\n" +
    "(E) 9 is simply the units digit of the subtrahend, copied across.\n" +
    "Before borrowing, confirm the difference really is positive: \\(7^{95}\\) dwarfs \\(3^{58}\\), so it is.",
  take: "For a difference of units digits, borrow rather than take the absolute value: if the top digit is smaller, compute \\((\\text{top} + 10) - \\text{bottom}\\). And check which term is larger first."
},

"quant-numbersystem-2-2#35": {
  steps: "Step 1 — The product of the first forty positive integers is \\(40!\\).\n" +
    "Step 2 — Count the factor 5 by adding the floors: \\(\\lfloor 40/5 \\rfloor = 8\\), \\(\\lfloor 40/25 \\rfloor = 1\\), \\(\\lfloor 40/125 \\rfloor = 0\\).\n" +
    "Step 3 — Total: \\(8 + 1\\) = [[9]].\n" +
    "Step 4 — So \\(5^9\\) divides \\(40!\\) and \\(5^{10}\\) does not.\n" +
    "Step 5 — Sense-check the extra 1: among \\(1..40\\) the multiples of 5 are \\(5, 10, 15, 20, 25, 30, 35, 40\\) — eight numbers — and 25 alone contributes a second 5, making nine.",
  fast: "Count the multiples of 5 (eight of them), then add one for each multiple of 25 (just 25 itself). Eight plus one is nine. The \\(\\lfloor n/25 \\rfloor\\) term is the whole point of the question.",
  traps: "(A) 8 is the answer for anyone who counts the multiples of 5 and stops — it forgets that \\(25 = 5^2\\) contributes two factors of 5, not one. This is by far the most common miss.\n" +
    "(C) 10 double-counts: it adds an extra 5 for a number that does not have one (perhaps 40 or 35 treated as a higher power).\n" +
    "(D) 7 undercounts the multiples of 5 themselves.\n" +
    "(E) 11 comes from adding a \\(\\lfloor 40/125 \\rfloor\\)-style term that is actually zero.",
  take: "Multiples of \\(p^2\\), \\(p^3\\), … each contribute an extra factor. Always run the floor sum past the first term until it reaches zero."
},

"quant-numbersystem-2-2#36": {
  steps: "Step 1 — Spot the relationship between the numbers: \\(55 + 17 = 72\\).\n" +
    "Step 2 — So the expression has the form \\(a^3 + b^3 - (a+b)^3\\) with \\(a = 55\\), \\(b = 17\\).\n" +
    "Step 3 — Expand \\((a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\\), so \\(a^3 + b^3 - (a+b)^3 = -3a^2b - 3ab^2 = -3ab(a+b)\\).\n" +
    "Step 4 — Substitute: \\(-3 \\times 55 \\times 17 \\times 72\\).\n" +
    "Step 5 — Its prime factors are \\(3\\) (from the \\(-3\\) and again from 72), \\(5\\) and \\(11\\) (from 55), [[17]] (from 17), and \\(2^3 \\times 3^2\\) (from 72).\n" +
    "Step 6 — So the expression is divisible by [[3 and 17]] — and 7 and 13 appear nowhere in that list.",
  fast: "The identity \\(a^3 + b^3 - (a+b)^3 = -3ab(a+b)\\) turns a three-cube monster into a product you can read the factors straight off. Once you notice \\(55 + 17 = 72\\), the answer is visible without multiplying anything: the factorisation contains 3, 5, 11, 17 and the factors of 72.",
  traps: "(A) 13, (B) 7, (D) 7 and 13, (E) 13 — every wrong choice smuggles in 7 or 13, and neither divides \\(3 \\times 55 \\times 17 \\times 72\\). Neither 7 nor 13 divides any of 3, 55, 17 or 72.\n" +
    "The design is that each distractor pairs one true factor with one false one, so checking only the first-listed factor and accepting the pair is fatal — verify both.\n" +
    "Cubing the numbers out by hand is the other trap: it costs three minutes and invites arithmetic errors, when the identity settles it in one line.",
  take: "When the third number is the sum of the first two, use \\(a^3 + b^3 - (a+b)^3 = -3ab(a+b)\\). Then read the prime factors off the product — and check every factor a choice claims, not just the first."
},

"quant-numbersystem-2-2#37": {
  steps: "Step 1 — Successive division by 3, 4, 7 with remainders 2, 1, 4 means \\(N = 3a + 2\\), \\(a = 4b + 1\\), \\(b = 7c + 4\\).\n" +
    "Step 2 — Take \\(c = 0\\), so \\(b = 4\\).\n" +
    "Step 3 — Then \\(a = 4 \\times 4 + 1 = 17\\).\n" +
    "Step 4 — Then \\(N = 3 \\times 17 + 2 = 53\\).\n" +
    "Step 5 — The combined divisor is \\(3 \\times 4 \\times 7 = 84\\), which is exactly what the question asks about, and \\(53 < 84\\), so the remainder is [[53]] itself.\n" +
    "Step 6 — General form: \\(N = 84c + 53\\), so every such number leaves 53 on division by 84 — the answer does not depend on the choice of \\(c\\).",
  fast: "The product of the three divisors is 84, the very number in the question — that is the signal. Rebuild the smallest \\(N\\) by folding back (\\(4 \\to 17 \\to 53\\)) and it *is* the remainder, because it is already below 84.",
  traps: "(E) 92 is impossible on sight: a remainder must be smaller than its divisor, and \\(92 > 84\\). That check costs one second and removes a choice.\n" +
    "(A) 80 and (B) 76 come from folding the remainders in the wrong order — using \\(3 \\to 4 \\to 7\\) forwards instead of rebuilding from the last remainder backwards.\n" +
    "(C) 41 drops one step of the reconstruction, typically the final \\(+2\\) or the multiplication by 3.\n" +
    "Always verify your rebuilt number against all three original divisions before trusting it: \\(53 \\div 3 = 17\\) r2 ✓, \\(17 \\div 4 = 4\\) r1 ✓, \\(4 \\div 7 = 0\\) r4 ✓.",
  take: "When the divisor asked about equals the product of the successive divisors, the smallest rebuilt number is the remainder. And a remainder is always smaller than its divisor."
},

"quant-numbersystem-2-2#38": {
  steps: "Step 1 — Pick a convenient total. The denominators are 5, 4 and 3, so take the stadium to hold 60 seats.\n" +
    "Step 2 — Lower deck: \\(\\tfrac14 \\times 60 = 15\\) seats.\n" +
    "Step 3 — Sold in the lower deck: \\(\\tfrac45 \\times 15 = 12\\), so [[3]] lower-deck seats went unsold.\n" +
    "Step 4 — Sold in the stadium: \\(\\tfrac23 \\times 60 = 40\\), so [[20]] seats in total went unsold.\n" +
    "Step 5 — The question asks what fraction of the *unsold* seats sat in the lower deck: \\(\\dfrac{3}{20}\\).",
  fast: "Choose the total as the lcm of the denominators — 60 — and every quantity becomes a whole number you can hold in your head: 15 lower-deck seats, 3 of them unsold, 20 unsold overall. The answer is \\(3/20\\) with no fraction arithmetic at all.\n" +
    "The one thing to read twice is the denominator the question wants: *of the unsold seats*, not of the lower deck and not of the stadium.",
  traps: "This question's four distractors are all correct answers to slightly different questions — which is exactly why the final sentence must be read carefully.\n" +
    "(C) \\(\\tfrac15\\) is \\(3/15\\): the fraction of the *lower deck* that went unsold.\n" +
    "(E) \\(\\tfrac1{20}\\) is \\(3/60\\): unsold lower-deck seats as a fraction of the *whole stadium*.\n" +
    "(D) \\(\\tfrac13\\) is \\(20/60\\): the fraction of the whole stadium that went unsold, ignoring the lower deck entirely.\n" +
    "(B) \\(\\tfrac16\\) is \\(\\tfrac14 \\times \\tfrac23\\) — multiplying the two given stadium fractions together without asking what that product would mean.",
  take: "Set the total to the lcm of the denominators. Then identify the exact numerator and denominator the question names — in overlapping-group questions the distractors are the other three plausible ratios."
},

"quant-numbersystem-2-2#39": {
  steps: "Step 1 — \\(18 = 2 \\times 9\\), and 2 and 9 are coprime, so test both.\n" +
    "Step 2 — Divisibility by 2: the last digit \\(B\\) must be even.\n" +
    "Step 3 — Divisibility by 9: the digit sum must be a multiple of 9. The known digits are \\(4+5+7+1+2+0+3 = 22\\), so we need \\(A + B + 22\\) to be a multiple of 9.\n" +
    "Step 4 — That gives \\(A + B = 5\\) or \\(A + B = 14\\) (the next option, 23, is impossible for two digits).\n" +
    "Step 5 — Check the offered pairs: \\(8+4 = 12\\) ✗, \\(6+8 = 14\\) ✓, \\(4+6 = 10\\) ✗, \\(6+6 = 12\\) ✗.\n" +
    "Step 6 — And \\(B = 8\\) is even ✓, so \\(A = 6,\\ B = 8\\).\n" +
    "Step 7 — Verify: \\(645712038\\) has digit sum 36, a multiple of 9, and ends in 8. ✓",
  fast: "Add the seven known digits once — they come to 22 — and then the whole question is \"which offered pair makes \\(A + B\\) equal 5 or 14?\" One addition per choice, and only one lands on a valid total. You never write the nine-digit number out.",
  traps: "(A) 8, 4 sums to 12, (C) 4, 6 sums to 10 and (D) 6, 6 sums to 12 — none of these makes \\(A+B+22\\) a multiple of 9, so all three fail the 9 test regardless of the parity of \\(B\\).\n" +
    "(C) is the sharpest of the three because it is the right pair with the digits swapped into each other's slots; note that it also fails on its own terms, since \\(4 + 6 = 10\\).\n" +
    "(E) is only right if no pair works, and one does.\n" +
    "The trap the question is set for is checking only that \\(B\\) is even and stopping — three of the four pairs have an even \\(B\\).",
  take: "For 18, test 2 and 9 separately. Sum the known digits once, then ask what the unknowns must add to; the required total is fixed modulo 9."
},

"quant-numbersystem-2-2#40": {
  steps: "Step 1 — The numbers wanted have the form \\(7k + 3\\). The smallest two-digit one is \\(10\\) (\\(=7+3\\)); the largest is \\(94\\) (\\(=91+3\\)), since \\(101\\) is three digits.\n" +
    "Step 2 — So the list is \\(10, 17, 24, \\dots, 94\\) — an arithmetic sequence with common difference 7.\n" +
    "Step 3 — Count the terms: \\(\\dfrac{94 - 10}{7} + 1 = \\dfrac{84}{7} + 1 = 12 + 1 = 13\\).\n" +
    "Step 4 — Sum an arithmetic sequence as (number of terms) × (average of first and last): \\(13 \\times \\dfrac{10 + 94}{2} = 13 \\times 52\\).\n" +
    "Step 5 — \\(13 \\times 52\\) = [[676]].",
  fast: "An arithmetic list's sum is always (count) × (middle term). With 13 terms the middle one is the 7th, \\(10 + 6 \\times 7 = 52\\), so the sum is \\(13 \\times 52 = 676\\) — and \\(13 \\times 52 = 13 \\times 13 \\times 4 = 169 \\times 4\\) if you prefer that route.\n" +
    "The two places to be careful are the endpoints: 10 is the first two-digit member, and 94 the last.",
  traps: "(B) 666 and (D) 683 bracket the right answer and come from getting an endpoint wrong — starting at 17 instead of 10, or running past 94 to 101.\n" +
    "(E) 777 is the sum you would get with an extra term or two tacked on; it is also suspiciously \"neat\", which on this question is a warning sign rather than a reassurance.\n" +
    "(A) 0 is there for anyone who concludes no two-digit number qualifies — 10 itself does.\n" +
    "The count is where this question is won or lost: \\(\\frac{\\text{last} - \\text{first}}{\\text{difference}} + 1\\), and the \\(+1\\) is not optional.",
  take: "Sum of an evenly spaced list = (count) × (average of first and last). Count = \\(\\frac{\\text{last} - \\text{first}}{d} + 1\\) — and pin the true first and last terms before anything else."
},

"quant-numbersystem-2-2#41": {
  steps: "Step 1 — Four \"cannot be\" claims are made. A single counterexample destroys any one of them, and the cheapest counterexamples use \\(x = 2\\), the one even prime.\n" +
    "Step 2 — Take \\(x = 2\\), \\(y = 6\\) (composite). Then \\(y - x = 4\\), which is even — so the claim that \\(y - x\\) cannot be even is false.\n" +
    "Step 3 — Same values: \\(xy = 12\\), which is even — so the claim that \\(xy\\) cannot be even is false.\n" +
    "Step 4 — Same values: \\(\\dfrac{x+y}{x} = \\dfrac{8}{2} = 4\\), which is even — so that claim is false too.\n" +
    "Step 5 — Now take \\(x = 2\\), \\(y = 9\\) (composite). Then \\(x + y = 11\\), which is odd — so the claim that \\(x+y\\) cannot be odd is false.\n" +
    "Step 6 — All four \"cannot\" statements are refuted, so [[none of them is true]].",
  fast: "On any \"cannot be\" question, hunt for the one value that breaks the pattern — and in prime questions that value is almost always \\(x = 2\\), the only even prime. With \\(x = 2\\) and \\(y = 6\\), three of the four claims fall to a single pair of numbers; swapping to \\(y = 9\\) kills the fourth.",
  traps: "(A), (B) and (C) all feel right if you unconsciously assume primes are odd — which is true of every prime except 2, and 2 is precisely what the question is testing.\n" +
    "(D) survives a little longer because \\(x + y\\) with two odd numbers is even; but \\(y\\) need not be odd either (\\(y = 6\\) is composite) and \\(x\\) need not be odd, so both parities are reachable.\n" +
    "The structural trap is treating \"cannot\" as \"usually is not\". A claim of impossibility falls to one example, so spend the time finding one rather than reasoning about the typical case.",
  take: "2 is the only even prime, and composites include both parities. To refute a \"cannot be\" claim, produce one counterexample — start with the boundary cases \\(x = 2\\) and \\(y = 4\\) or \\(9\\)."
},

"quant-numbersystem-2-2#42": {
  steps: "Step 1 — Simplify the surd: \\(\\sqrt{24} = \\sqrt{4 \\times 6} = 2\\sqrt6\\).\n" +
    "Step 2 — Rewrite the fraction entirely in terms of \\(\\sqrt6\\): \\(\\dfrac{2\\sqrt6 + \\sqrt6}{2\\sqrt6 - \\sqrt6}\\).\n" +
    "Step 3 — Combine like terms: numerator \\(= 3\\sqrt6\\), denominator \\(= \\sqrt6\\).\n" +
    "Step 4 — Cancel: \\(\\dfrac{3\\sqrt6}{\\sqrt6}\\) = [[3]].\n" +
    "Step 5 — Numerical check: \\(\\sqrt{24} \\approx 4.899\\), \\(\\sqrt6 \\approx 2.449\\), so the fraction is \\(\\dfrac{7.348}{2.450} \\approx 3\\). ✓",
  fast: "Both surds are multiples of \\(\\sqrt6\\), so treat \\(\\sqrt6\\) as a single unit \\(u\\): the expression is \\(\\dfrac{2u + u}{2u - u} = \\dfrac{3u}{u} = 3\\). No rationalising, no conjugates — the moment you write \\(\\sqrt{24}\\) as \\(2\\sqrt6\\) the question is over.",
  traps: "(A) 2 is the ratio \\(\\sqrt{24}/\\sqrt6\\) on its own — you simplified the surds and then answered a different question.\n" +
    "(C) 4 comes from squaring somewhere, usually from multiplying top and bottom by the conjugate and then mishandling the result.\n" +
    "(D) 5 and (E) 6 come from adding the coefficients (\\(2+3\\)) or from carrying the 6 inside the radical out as the answer.\n" +
    "Rationalising the denominator with a conjugate does work here, but it is three times the labour and three times the chance of a slip — always reduce the radicals first and look for a common unit.",
  take: "Reduce every radical to its simplest form first: \\(\\sqrt{24} = 2\\sqrt6\\). If all terms share the same surd, treat it as a variable and cancel it — no rationalising needed."
}

});
