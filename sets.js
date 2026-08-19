/* GMAT Prep — Practice Sets repository
   Math is written in LaTeX inside \\( ... \\) and rendered with KaTeX.
   question: { n, topic, correct:"A".."E", options, text, choices[], hint, expl, note? }
   Some sets carry a shared `passage` (Reading Comprehension, and Data
   Insights table / graphics / multi-source context) shown above the question.
*/
window.GMAT_SETS = [
  {
    "id": "quant-numbersystem-2-2",
    "title": "Number System & Simplification — Exercise",
    "section": "quant",
    "source": "2.2 Number System Exercise (with answer key)",
    "questions": [
      {
        "n": 1,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 5,
        "text": "Minimum difference between \\(x\\) and \\(y\\) such that \\(1x71y61\\) is exactly divisible by 11 is:",
        "choices": [
          "2",
          "3",
          "1",
          "0",
          "4"
        ],
        "hint": "Use the divisibility rule for 11: compare the sum of the odd-position digits with the sum of the even-position digits.",
        "expl": "Step 1 — Divisibility rule for 11: (sum of digits in odd positions) − (sum in even positions) must be 0 or a multiple of 11.\nStep 2 — In \\(1x71y61\\), odd positions hold \\(1,7,y,1\\); even positions hold \\(x,1,6\\).\nStep 3 — Odd sum \\(=9+y\\); even sum \\(=7+x\\).\nStep 4 — Set the difference to 0: \\((9+y)-(7+x)=0 \\Rightarrow x-y=2\\).\nStep 5 — So the minimum difference is 2.\nAnswer: 2 (A).",
        "level": "medium"
      },
      {
        "n": 2,
        "topic": "Divisibility & remainders",
        "correct": "B",
        "options": 5,
        "text": "The four integers next lower than 81, and the four next higher than 81, are written down and added together. This sum is divisible by:",
        "choices": [
          "7",
          "9",
          "11",
          "13",
          "15"
        ],
        "hint": "Don't add all eight — pair each lower number with a higher one symmetric about 81.",
        "expl": "Step 1 — The eight numbers are \\(77,78,79,80\\) and \\(82,83,84,85\\).\nStep 2 — Pair smallest with largest: \\((77+85),(78+84),(79+83),(80+82)\\), each \\(=162\\).\nStep 3 — Sum \\(=4\\times162=648=8\\times81\\).\nStep 4 — Since \\(81=3^4\\), the sum is divisible by 9.\nAnswer: 9 (B).",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Odd / even & sign rules",
        "correct": "A",
        "options": 4,
        "text": "If \\(n\\) is a natural number, then the greatest integer less than or equal to \\((2+\\sqrt3)^{n}\\) is:",
        "choices": [
          "odd",
          "even",
          "even when \\(n\\) is even and odd when \\(n\\) is odd",
          "even when \\(n\\) is odd and odd when \\(n\\) is even"
        ],
        "hint": "Look at \\((2+\\sqrt3)^{n}\\) together with its conjugate \\((2-\\sqrt3)^{n}\\).",
        "expl": "Step 1 — Let \\(S=(2+\\sqrt3)^n+(2-\\sqrt3)^n\\); the \\(\\sqrt3\\) terms cancel, leaving an even integer.\nStep 2 — Since \\(0<(2-\\sqrt3)^n<1\\), we get \\((2+\\sqrt3)^n=S-(\\text{small fraction})\\).\nStep 3 — So the floor \\(=S-1=\\) an odd number.\nStep 4 — Check \\(n=1\\): \\(2+\\sqrt3\\approx3.73\\), floor \\(=3\\) (odd).\nAnswer: odd (A).",
        "level": "hard"
      },
      {
        "n": 4,
        "topic": "Integers, factors & multiples",
        "correct": "C",
        "options": 5,
        "text": "How many numbers between 1 and 300 are divisible by 3 and 5 together?",
        "choices": [
          "16",
          "18",
          "20",
          "100",
          "102"
        ],
        "hint": "'Divisible by 3 and 5' means divisible by their LCM.",
        "expl": "Step 1 — 'Divisible by 3 and 5' means divisible by \\(\\operatorname{lcm}(3,5)=15\\) (don't add \\(3+5\\)).\nStep 2 — Multiples of 15 up to 300: \\(15,30,\\dots,300\\).\nStep 3 — Count \\(=300\\div15=20\\).\nAnswer: 20 (C).",
        "level": "easy"
      },
      {
        "n": 5,
        "topic": "Divisibility & remainders",
        "correct": "B",
        "options": 5,
        "text": "What is the remainder when \\(1!+2!+3!+\\dots+100!\\) is divided by 7?",
        "choices": [
          "0",
          "5",
          "6",
          "3",
          "1"
        ],
        "hint": "Which factorials are already multiples of 7? Ignore those.",
        "expl": "Step 1 — For \\(k\\ge7\\), \\(k!\\) is a multiple of 7, contributing remainder 0.\nStep 2 — Only \\(1!\\) to \\(6!\\) matter: \\(1+2+6+24+120+720=873\\).\nStep 3 — \\(873=7\\times124+5\\).\nAnswer: 5 (B).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Integers, factors & multiples",
        "correct": "B",
        "options": 5,
        "text": "How many numbers lying between 1 and 500 are divisible by 13?",
        "choices": [
          "40",
          "38",
          "41",
          "46",
          "48"
        ],
        "hint": "Find the largest multiple of 13 that is still under 500.",
        "expl": "Step 1 — Largest multiple of 13 under 500: \\(500\\div13\\approx38.4\\), so \\(13\\times38=494\\).\nStep 2 — Hence 38 numbers.\nAnswer: 38 (B).",
        "level": "easy"
      },
      {
        "n": 7,
        "topic": "Divisibility & remainders",
        "correct": "B",
        "options": 5,
        "text": "Two different numbers when divided by the same divisor left remainders 11 and 21 respectively, and when their sum was divided by the same divisor the remainder was 4. What is the divisor?",
        "choices": [
          "36",
          "28",
          "14",
          "9",
          "44"
        ],
        "hint": "There's a shortcut: divisor relates to the remainders and the remainder of the sum.",
        "expl": "Step 1 — The numbers are \\(da+11\\) and \\(db+21\\); their sum \\(=d(a+b)+32\\).\nStep 2 — Remainder of the sum \\(=32\\bmod d=4\\), so \\(d\\mid(32-4)=28\\), with \\(d>21\\).\nStep 3 — Thus \\(d=28\\). Shortcut: \\((11+21)-4=28\\).\nAnswer: 28 (B).",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Divisibility & remainders",
        "correct": "C",
        "options": 4,
        "text": "A number when divided by a divisor left remainder 23. When twice the number was divided by the same divisor the remainder was 11. Find the divisor.",
        "choices": [
          "12",
          "34",
          "35",
          "data inadequate"
        ],
        "hint": "The remainder condition forces the divisor to be a factor of a specific number — and to be bigger than 23.",
        "expl": "Step 1 — \\(N = dq_1 + 23\\), so \\(2N = 2dq_1 + 46\\). The \\(2dq_1\\) part is a multiple of d, so the remainder of \\(2N\\) comes from 46.\nStep 2 — We are told that remainder is 11, so \\(46 - 11 = 35\\) must be a multiple of d, i.e. \\(d \\mid 35\\).\nStep 3 — A remainder of 23 also forces \\(d > 23\\). Of the divisors of 35 — 1, 5, 7, 35 — only 35 clears that.\nStep 4 — Check: \\(N = 23\\) leaves remainder 23 on division by 35, and \\(2N = 46\\) leaves remainder 11. ✓\nStep 5 — So the divisor is uniquely determined; the data is not inadequate.\nAnswer: C.",
        "level": "hard"
      },
      {
        "n": 9,
        "topic": "Divisibility & remainders",
        "correct": "D",
        "options": 5,
        "text": "A number when divided by 5 leaves a remainder 3. What is the remainder when the square of the same number is divided by 5?",
        "choices": [
          "9",
          "3",
          "0",
          "4",
          "1"
        ],
        "hint": "The remainder of \\(N^2\\bmod 5\\) depends only on \\(N\\bmod 5\\) — try the smallest such \\(N\\).",
        "expl": "Step 1 — \\(N=5q+3\\); the remainder of \\(N^2\\) depends only on \\(N\\bmod5\\), so take \\(N=3\\).\nStep 2 — \\(N^2=9\\).\nStep 3 — \\(9\\div5=1\\) remainder 4.\nAnswer: 4 (D).",
        "level": "easy"
      },
      {
        "n": 11,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 5,
        "text": "A number when successively divided by 7 and 8 leaves the remainders 3 and 5 respectively. What is the remainder when the same number is divided by 56?",
        "choices": [
          "38",
          "31",
          "37",
          "26",
          "43"
        ],
        "hint": "For two successive divisions, combine as (first divisor \\(\\times\\) second remainder) + first remainder.",
        "expl": "Step 1 — Rebuild the smallest \\(N\\): quotient after \\(\\div7\\) is \\(8\\cdot0+5=5\\), so \\(N=7\\times5+3=38\\).\nStep 2 — Since \\(7\\times8=56\\), \\(38\\div56\\) leaves 38.\nStep 3 — Shortcut: \\(7\\times5+3=38\\).\nAnswer: 38 (A).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Integers, factors & multiples",
        "correct": "B",
        "options": 5,
        "text": "A boy wanted to write the numbers from the smallest number to the greatest three-digit number. How many times does he need to press the keys of the computer to do this job?",
        "choices": [
          "2708",
          "2889",
          "2644",
          "2978",
          "3067"
        ],
        "hint": "Split the count by 1-digit, 2-digit and 3-digit numbers.",
        "expl": "Step 1 — Writing 1 to 999, count presses by digit-length:\n • 1–9: \\(9\\times1=9\\).\n • 10–99: \\(90\\times2=180\\).\n • 100–999: \\(900\\times3=2700\\).\nStep 2 — Total \\(=9+180+2700=2889\\).\nAnswer: 2889 (B).",
        "level": "medium"
      },
      {
        "n": 13,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 4,
        "text": "A number, being successively divided by 3, 5 and 8, leaves 1, 2 and 4 as remainders respectively. What are the remainders if the order of divisors is reversed?",
        "choices": [
          "3, 3, 1",
          "3, 1, 3",
          "1, 3, 3",
          "None of these"
        ],
        "hint": "Build the smallest number that fits, then re-divide it in the new order.",
        "expl": "Step 1 — Build \\(N\\): \\(8\\cdot0+4=4;\\ 5\\times4+2=22;\\ 3\\times22+1=67\\).\nStep 2 — Reverse the order \\((\\div8,\\div5,\\div3)\\) on 67: \\(67\\to r3;\\ 8\\to r3;\\ 1\\to r1\\).\nStep 3 — Remainders: 3, 3, 1.\nAnswer: 3, 3, 1 (A).",
        "level": "hard"
      },
      {
        "n": 14,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 4,
        "text": "The numbers 1 to 29 are written side by side as follows: \\(1234567891011\\ldots2829\\). If this number is divided by 9, what is the remainder?",
        "choices": [
          "3",
          "1",
          "0",
          "None of these"
        ],
        "hint": "A number's remainder \\(\\bmod\\,9\\) equals the remainder of the sum of its parts.",
        "expl": "Step 1 — Since \\(10\\equiv1\\ (\\bmod\\,9)\\), the number \\(\\equiv\\) sum of its parts \\((\\bmod\\,9)\\).\nStep 2 — Sum \\(1+2+\\dots+29=\\frac{29\\times30}{2}=435\\).\nStep 3 — \\(435\\bmod9\\): \\(4+3+5=12\\to3\\).\nAnswer: 3 (A).",
        "level": "medium"
      },
      {
        "n": 15,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 4,
        "text": "If \\(x959y\\) is divisible by 44 and \\(y>5\\), then what are the values of the digits \\(x\\) and \\(y\\)?",
        "choices": [
          "\\(x=7,\\ y=6\\)",
          "\\(x=4,\\ y=8\\)",
          "\\(x=6,\\ y=7\\)",
          "None of these"
        ],
        "hint": "\\(44=4\\times11\\) — apply the rules for 4 and for 11 separately.",
        "expl": "Step 1 — \\(44=4\\times11\\); test both.\nStep 2 — \\(\\div4\\): last two digits \\(9y\\) divisible by 4 with \\(y>5 \\Rightarrow y=6\\).\nStep 3 — \\(\\div11\\): \\((x+5+6)-(9+9)=0 \\Rightarrow x=7\\).\nAnswer: \\(x=7,\\ y=6\\) (A).",
        "level": "medium"
      },
      {
        "n": 16,
        "topic": "Fractions & decimals",
        "correct": "D",
        "options": 4,
        "text": "When \\(\\left(\\frac{1}{2}-\\frac{1}{4}+\\frac{1}{5}-\\frac{1}{6}\\right)\\) is divided by \\(\\left(\\frac{2}{5}-\\frac{5}{9}+\\frac{3}{5}-\\frac{7}{18}\\right)\\), the result is:",
        "choices": [
          "\\(2\\tfrac{1}{3}\\)",
          "\\(3\\tfrac{1}{6}\\)",
          "\\(3\\tfrac{1}{10}\\)",
          "\\(5\\tfrac{1}{10}\\)"
        ],
        "hint": "Simplify the numerator bracket and denominator bracket separately, then divide.",
        "expl": "Step 1 — Simplify the numerator and denominator brackets separately.\nStep 2 — Divide one by the other to get \\(5\\tfrac{1}{10}\\).\nNote — The fractions were garbled in the source PDF; verify. Intended \\(5\\tfrac{1}{10}\\).\nAnswer: \\(5\\tfrac{1}{10}\\) (D).",
        "note": "Math from the PDF was ambiguous — verify the exact expression.",
        "level": "hard"
      },
      {
        "n": 17,
        "topic": "Fractions & decimals",
        "correct": "C",
        "options": 5,
        "text": "A boy multiplied a certain number \\(x\\) by 13. He found that the resulting product consisted entirely of nines. Find the smallest value of \\(x\\).",
        "choices": [
          "76913",
          "76933",
          "76923",
          "75933",
          "76943"
        ],
        "hint": "'All nines' means the product is 999999 — what is \\(999999\\div13\\)?",
        "expl": "Step 1 — 'All nines' means the product is \\(999999\\) (since \\(10^6-1\\) is divisible by 13).\nStep 2 — \\(999999\\div13=76923\\).\nAnswer: 76923 (C).",
        "level": "medium"
      },
      {
        "n": 18,
        "topic": "Divisibility & remainders",
        "correct": "D",
        "options": 5,
        "text": "A number is successively divided by 5, 6, 8 leaving remainders 3, 4, 7 respectively. What will be the remainders if the order of divisors is reversed?",
        "choices": [
          "7, 4, 3",
          "5, 3, 4",
          "2, 5, 4",
          "1, 5, 4",
          "9"
        ],
        "hint": "Build the actual number from the remainders, then re-divide in reverse order.",
        "expl": "Step 1 — Build \\(N\\): \\(8\\cdot0+7=7;\\ 6\\times7+4=46;\\ 5\\times46+3=233\\).\nStep 2 — Reverse \\((\\div8,\\div6,\\div5)\\) on 233: \\(233\\to r1;\\ 29\\to r5;\\ 4\\to r4\\).\nStep 3 — Remainders: 1, 5, 4.\nAnswer: 1, 5, 4 (D).",
        "level": "hard"
      },
      {
        "n": 19,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 4,
        "text": "A certain number is divided by 385 by division by factors. The quotient is 102, the first remainder is 4, the second is 6 and the third is 10. Find the number.",
        "choices": [
          "39654",
          "32754",
          "38554",
          "None of these"
        ],
        "hint": "Rebuild the number outward from the final quotient using each remainder.",
        "expl": "Step 1 — \\(385=5\\times7\\times11\\). Rebuild outward: \\(11\\times102+10=1132\\).\nStep 2 — \\(7\\times1132+6=7930\\).\nStep 3 — \\(5\\times7930+4=39654\\).\nAnswer: 39654 (A).",
        "level": "medium"
      },
      {
        "n": 20,
        "topic": "Divisibility & remainders",
        "correct": "B",
        "options": 5,
        "text": "Two numbers when divided by a certain divisor leave the remainders 4375 and 2986 respectively; but when the sum of the two numbers is divided by the same divisor, the remainder is 2361. The divisor is:",
        "choices": [
          "2014",
          "5000",
          "625",
          "2639",
          "6389"
        ],
        "hint": "Same divisor-from-remainders shortcut as the earlier problem.",
        "expl": "Step 1 — Divisor \\(=(\\text{sum of remainders})-(\\text{remainder of sum})\\).\nStep 2 — \\(=(4375+2986)-2361=5000\\).\nAnswer: 5000 (B).",
        "level": "medium"
      },
      {
        "n": 21,
        "topic": "Exponent rules",
        "correct": "B",
        "options": 5,
        "text": "Find the unit digit in the product \\((2467)^{153}\\times(341)^{72}\\).",
        "choices": [
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "hint": "Only the unit digit matters — use the 4-step cycle of the unit digit.",
        "expl": "Step 1 — Unit digit of \\(2467^{153}\\): 7 cycles \\(7,9,3,1\\); \\(153\\bmod4=1\\to7\\).\nStep 2 — Unit digit of \\(341^{72}=1\\).\nStep 3 — \\(7\\times1=7\\).\nAnswer: B (the unit digit is 7).",
        "level": "medium"
      },
      {
        "n": 22,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 5,
        "text": "Which digits should come in place of \\(*\\) and \\(\\$\\) if the number \\(62684{*}{\\$}\\) is divisible by both 8 and 5?",
        "choices": [
          "4, 0",
          "0, 4",
          "2, 0",
          "4, 4",
          "8"
        ],
        "hint": "Use the \\(\\div5\\) rule to fix \\(\\$\\) first, then the \\(\\div8\\) rule for \\(*\\).",
        "expl": "Step 1 — Divisible by 5 means the last digit is 0 or 5; divisible by 8 means the number is even, so the last digit must be 0.\nStep 2 — Divisibility by 8 depends only on the last three digits, here \\(4{*}0\\). Testing: 400 ✓, 420 ✗, 440 ✓, 480 ✓.\nStep 3 — Of the pairs offered, only \\(*=4,\\ \\$=0\\) gives a last-three of 440, which 8 divides.\nAnswer: A.",
        "level": "medium"
      },
      {
        "n": 23,
        "topic": "Divisibility & remainders",
        "correct": "C",
        "options": 5,
        "text": "A boy multiplies 987 by a certain number and obtains 559981 as his answer. If in the answer both 9's are wrong but the other digits are correct, then the correct answer will be:",
        "choices": [
          "553681",
          "555181",
          "555681",
          "556581",
          "557481"
        ],
        "hint": "The true product must be a multiple of \\(987=3\\times7\\times47\\).",
        "expl": "Step 1 — \\(987=3\\times7\\times47\\); the true product is a multiple of 987 matching \\(5\\,5\\,\\_\\,6\\,8\\,1\\).\nStep 2 — \\(987\\times563=555681\\).\nAnswer: 555681 (C).",
        "level": "hard"
      },
      {
        "n": 24,
        "topic": "Integers, factors & multiples",
        "correct": "C",
        "options": 4,
        "text": "There is one number which is formed by writing one digit 6 times (e.g. 111111, 444444, etc.). Such a number is always divisible by:",
        "choices": [
          "7 and 11",
          "11 and 13",
          "7, 11 and 13",
          "None of these"
        ],
        "hint": "A digit repeated six times equals that digit \\(\\times\\,111111\\) — factor 111111.",
        "expl": "Step 1 — A digit repeated six times \\(=d\\times111111\\).\nStep 2 — \\(111111=3\\times7\\times11\\times13\\times37\\).\nStep 3 — So it's divisible by 7, 11 and 13.\nAnswer: 7, 11 and 13 (C).",
        "level": "medium"
      },
      {
        "n": 26,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 5,
        "text": "A number when divided by 296 gives a remainder 75. When the same number is divided by 37, the remainder will be:",
        "choices": [
          "1",
          "2",
          "8",
          "11",
          "14"
        ],
        "hint": "296 is a multiple of 37 — reduce 75 against 37.",
        "expl": "Step 1 — \\(296=8\\times37\\) and \\(75=2\\times37+1\\).\nStep 2 — So \\(N=37k+1 \\Rightarrow N\\div37\\) leaves remainder 1.\nAnswer: 1 (A).",
        "level": "medium"
      },
      {
        "n": 27,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 5,
        "text": "A number was divided successively in order by 4, 5 and 6. The remainders were respectively 2, 3 and 4. The number is:",
        "choices": [
          "214",
          "476",
          "954",
          "1908",
          "2386"
        ],
        "hint": "Reconstruct the number from the last quotient using each remainder.",
        "expl": "Step 1 — Rebuild from the last quotient \\(=1\\): \\(6\\times1+4=10;\\ 5\\times10+3=53;\\ 4\\times53+2=214\\).\nAnswer: 214 (A).",
        "level": "medium"
      },
      {
        "n": 28,
        "topic": "Divisibility & remainders",
        "correct": "C",
        "options": 5,
        "text": "The least number which must be subtracted from 6709 to make it exactly divisible by 9 is:",
        "choices": [
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "hint": "Find \\(6709\\bmod 9\\) via its digit sum, then subtract that remainder.",
        "expl": "Step 1 — Digit sum of 6709 \\(=22\\); \\(22\\bmod9=4\\).\nStep 2 — Subtract 4 to reach a multiple of 9.\nAnswer: 4 (C).",
        "level": "easy"
      },
      {
        "n": 29,
        "topic": "Fractions & decimals",
        "correct": "D",
        "options": 5,
        "text": "\\(2.002 + 7.9\\times\\{2.8 - 6.3\\times(3.6-1.5) + 15.6\\} = \\; ?\\)",
        "choices": [
          "2.002",
          "4.2845",
          "40.843",
          "42.845",
          "45.130"
        ],
        "hint": "Follow BODMAS; estimate \\(7.9\\times(\\text{bracket})\\) to sanity-check.",
        "expl": "Step 1 — Inner: \\(3.6-1.5=2.1\\).\nStep 2 — \\(2.8-6.3\\times2.1+15.6=2.8-13.23+15.6=5.17\\).\nStep 3 — \\(7.9\\times5.17=40.843\\).\nStep 4 — \\(2.002+40.843=42.845\\).\nAnswer: 42.845 (D).",
        "level": "medium"
      },
      {
        "n": 30,
        "topic": "Fractions & decimals",
        "correct": "D",
        "options": 4,
        "text": "\\(9 - 1\\tfrac{2}{9}\\text{ of }3\\tfrac{3}{11} + 5\\tfrac{1}{7}\\text{ of }\\frac{7}{9} = \\; ?\\)",
        "choices": [
          "\\(\\frac{5}{4}\\)",
          "8",
          "\\(8\\tfrac{32}{81}\\)",
          "9"
        ],
        "hint": "\"of\" means multiply, and it is evaluated before the addition and subtraction.",
        "expl": "Step 1 — Convert the mixed numbers: \\(1\\tfrac29 = \\tfrac{11}{9}\\), \\(3\\tfrac{3}{11} = \\tfrac{36}{11}\\), \\(5\\tfrac17 = \\tfrac{36}{7}\\).\nStep 2 — \\(\\tfrac{11}{9} \\text{ of } \\tfrac{36}{11} = \\tfrac{11}{9} \\times \\tfrac{36}{11} = 4\\).\nStep 3 — \\(\\tfrac{36}{7} \\text{ of } \\tfrac{7}{9} = \\tfrac{36}{7} \\times \\tfrac{7}{9} = 4\\).\nStep 4 — \\(9 - 4 + 4 = 9\\).\nAnswer: D.",
        "note": "Math from the PDF was ambiguous — verify the exact expression.",
        "level": "hard"
      },
      {
        "n": 31,
        "topic": "Divisibility & remainders",
        "correct": "B",
        "options": 5,
        "text": "A number when divided successively by 4 and 5 leaves remainders 1 and 4 respectively. When it is successively divided by 5 and 4, then the respective remainders will be:",
        "choices": [
          "1, 2",
          "2, 3",
          "3, 2",
          "4, 1",
          "5"
        ],
        "hint": "Build the smallest number, then divide it in the reversed order.",
        "expl": "Step 1 — Build \\(N=4\\times4+1=17\\).\nStep 2 — \\(17\\div5=3\\ r2;\\ 3\\div4=0\\ r3\\).\nStep 3 — Remainders: 2, 3.\nAnswer: 2, 3 (B).",
        "level": "medium"
      },
      {
        "n": 32,
        "topic": "Integers, factors & multiples",
        "correct": "C",
        "options": 5,
        "text": "How many times must 79 be subtracted from \\(5\\times10^{4}\\) so as to obtain 43759?",
        "choices": [
          "77",
          "78",
          "79",
          "80",
          "81"
        ],
        "hint": "It's a single division: \\((50000-43759)\\div79\\).",
        "expl": "Step 1 — \\((50000-43759)\\div79=6241\\div79\\).\nStep 2 — \\(6241=79^2\\), so the answer is 79.\nAnswer: 79 (C).",
        "level": "easy"
      },
      {
        "n": 33,
        "topic": "Prime numbers & factorization",
        "correct": "A",
        "options": 5,
        "text": "If the product of the first sixty positive consecutive integers is divisible by \\(8^{n}\\), where \\(n\\) is an integer, then the largest possible value of \\(n\\) is:",
        "choices": [
          "18",
          "19",
          "17",
          "16",
          "20"
        ],
        "hint": "Use Legendre's rule for the power of 2 in \\(60!\\), then divide by 3 for 8.",
        "expl": "Step 1 — Power of 2 in \\(60!=\\lfloor60/2\\rfloor+\\lfloor60/4\\rfloor+\\lfloor60/8\\rfloor+\\lfloor60/16\\rfloor+\\lfloor60/32\\rfloor\\).\nStep 2 — \\(=30+15+7+3+1=56\\).\nStep 3 — \\(8=2^3\\), so \\(n=\\lfloor56/3\\rfloor=18\\).\nAnswer: 18 (A).",
        "level": "hard"
      },
      {
        "n": 34,
        "topic": "Exponent rules",
        "correct": "B",
        "options": 5,
        "text": "The digit in the unit's place of the number represented by \\((7^{95}-3^{58})\\) is:",
        "choices": [
          "0",
          "4",
          "6",
          "7",
          "9"
        ],
        "hint": "Track unit digits only using each base's 4-cycle; mind the borrow in subtraction.",
        "expl": "Step 1 — \\(7^{95}\\): \\(95\\bmod4=3\\to\\) ends in 3.\nStep 2 — \\(3^{58}\\): \\(58\\bmod4=2\\to\\) ends in 9.\nStep 3 — Unit of \\((\\dots3)-(\\dots9)\\): borrow \\(\\to13-9=4\\).\nAnswer: 4 (B).",
        "level": "medium"
      },
      {
        "n": 35,
        "topic": "Prime numbers & factorization",
        "correct": "B",
        "options": 5,
        "text": "If the product of the first forty positive consecutive integers is divisible by \\(5^{n}\\), where \\(n\\) is an integer, then the largest possible value of \\(n\\) is:",
        "choices": [
          "8",
          "9",
          "10",
          "7",
          "11"
        ],
        "hint": "Legendre's rule: power of 5 in \\(40!=\\lfloor40/5\\rfloor+\\lfloor40/25\\rfloor\\).",
        "expl": "Step 1 — Power of 5 in \\(40!=\\lfloor40/5\\rfloor+\\lfloor40/25\\rfloor=8+1=9\\).\nAnswer: 9 (B).",
        "level": "medium"
      },
      {
        "n": 36,
        "topic": "Expressions & factoring",
        "correct": "C",
        "options": 4,
        "text": "\\(55^{3}+17^{3}-72^{3}\\) is divisible by:",
        "choices": [
          "both 3 and 13",
          "both 7 and 17",
          "both 3 and 17",
          "both 7 and 13"
        ],
        "hint": "Notice \\(72=55+17\\) and use the \\(a^3+b^3-(a+b)^3\\) identity.",
        "expl": "Step 1 — \\(72=55+17\\), so use \\(a^3+b^3-(a+b)^3=-3ab(a+b)\\).\nStep 2 — \\(=-3\\times55\\times17\\times72\\), divisible by 3 and 17.\nAnswer: both 3 and 17 (C).",
        "level": "hard"
      },
      {
        "n": 37,
        "topic": "Divisibility & remainders",
        "correct": "D",
        "options": 5,
        "text": "After the division of a number successively by 3, 4 and 7, the remainders obtained are 2, 1 and 4 respectively. What will be the remainder if 84 divides the same number?",
        "choices": [
          "80",
          "76",
          "41",
          "53",
          "92"
        ],
        "hint": "Build the number from the remainders; compare with \\(84=3\\times4\\times7\\).",
        "expl": "Step 1 — Build \\(N\\): \\(7\\cdot0+4=4;\\ 4\\times4+1=17;\\ 3\\times17+2=53\\).\nStep 2 — \\(84=3\\times4\\times7\\) and \\(53<84\\), so remainder is 53.\nAnswer: 53 (D).",
        "level": "medium"
      },
      {
        "n": 38,
        "topic": "Fractions & decimals",
        "correct": "A",
        "options": 5,
        "text": "At a college football game, \\(\\frac{4}{5}\\) of the seats in the lower deck of the stadium were sold. If \\(\\frac{1}{4}\\) of all the seating in the stadium is located in the lower deck, and if \\(\\frac{2}{3}\\) of all the seats in the stadium were sold, then what fraction of the unsold seats in the stadium was in the lower deck?",
        "choices": [
          "\\(\\frac{3}{20}\\)",
          "\\(\\frac{1}{6}\\)",
          "\\(\\frac{1}{5}\\)",
          "\\(\\frac{1}{3}\\)",
          "\\(\\frac{1}{20}\\)"
        ],
        "hint": "Pick a convenient total number of seats (e.g. 20) and count directly.",
        "expl": "Step 1 — Let total \\(=20\\). Lower deck \\(=\\frac{1}{4}\\times20=5\\); sold there \\(=\\frac{4}{5}\\times5=4\\), unsold \\(=1\\).\nStep 2 — Total unsold \\(=\\frac{1}{3}\\times20=\\frac{20}{3}\\).\nStep 3 — Fraction \\(=1\\div\\frac{20}{3}=\\frac{3}{20}\\).\nAnswer: \\(\\frac{3}{20}\\) (A).",
        "level": "medium"
      },
      {
        "n": 39,
        "topic": "Divisibility & remainders",
        "correct": "B",
        "options": 5,
        "text": "A number \\(A4571203B\\) is divisible by 18. Find the values of \\(A\\) and \\(B\\).",
        "choices": [
          "8, 4",
          "6, 8",
          "4, 6",
          "6, 6",
          "10"
        ],
        "hint": "\\(18=2\\times9\\): use the even rule for \\(B\\) and the digit-sum rule for 9.",
        "expl": "Step 1 — \\(18=2\\times9\\); \\(B\\) even for \\(\\div2\\).\nStep 2 — Digit sum \\(=A+B+22\\) divisible by 9 \\(\\Rightarrow A+B=5\\) or 14.\nStep 3 — With \\(B\\) even, \\(A=6,B=8\\) (sum 14).\nAnswer: 6, 8 (B).",
        "level": "medium"
      },
      {
        "n": 40,
        "topic": "Sequences & series",
        "correct": "C",
        "options": 5,
        "text": "What is the sum of all two-digit numbers that give a remainder of 3 when they are divided by 7?",
        "choices": [
          "0",
          "666",
          "676",
          "683",
          "777"
        ],
        "hint": "These form an arithmetic sequence — use \\(n\\times(\\text{first}+\\text{last})/2\\).",
        "expl": "Step 1 — Numbers \\(10,17,24,\\dots,94\\) (each \\(7k+3\\)) — 13 terms.\nStep 2 — Sum \\(=13\\times\\frac{10+94}{2}=13\\times52=676\\).\nAnswer: C (the sum is 676).",
        "level": "medium"
      },
      {
        "n": 41,
        "topic": "Prime numbers & factorization",
        "correct": "D",
        "options": 4,
        "text": "Let \\(x\\) and \\(y\\) be positive integers such that \\(x\\) is prime and \\(y\\) is composite. Then:",
        "choices": [
          "\\(y-x\\) cannot be an even integer",
          "\\(xy\\) cannot be an even integer",
          "\\(\\frac{x+y}{x}\\) cannot be an even integer",
          "None of the above statements is true"
        ],
        "hint": "Try a small prime \\(x\\) and a composite \\(y\\) to test each 'cannot' statement.",
        "expl": "Step 1 — Test \\(x=2\\) (prime), \\(y=6\\) (composite).\nStep 2 — \\(y-x=4\\) (even); \\(xy=12\\) (even); \\(\\frac{x+y}{x}=4\\) (even) — all break.\nStep 3 — So none of (a)–(c) is always true.\nAnswer: None of the above (D).",
        "level": "hard"
      },
      {
        "n": 42,
        "topic": "Roots & radicals",
        "correct": "B",
        "options": 5,
        "text": "Evaluate \\(\\dfrac{\\sqrt{24}+\\sqrt6}{\\sqrt{24}-\\sqrt6}\\).",
        "choices": [
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "hint": "Simplify \\(\\sqrt{24}\\) to \\(2\\sqrt6\\) first.",
        "expl": "Step 1 — \\(\\sqrt{24}=2\\sqrt6\\).\nStep 2 — \\(\\dfrac{2\\sqrt6+\\sqrt6}{2\\sqrt6-\\sqrt6}=\\dfrac{3\\sqrt6}{\\sqrt6}=3\\).\nAnswer: 3 (B).",
        "level": "medium"
      },
      {
        "n": 43,
        "topic": "Exponent rules",
        "correct": "B",
        "options": 4,
        "text": "Arranging the following in descending order: \\(2^{57},\\ 4^{38},\\ 16^{19}\\), we get:",
        "choices": [
          "\\(2^{57}>4^{38}>16^{19}\\)",
          "\\(4^{38}>16^{19}>2^{57}\\)",
          "\\(16^{19}>2^{57}>4^{38}\\)",
          "\\(2^{57}>16^{19}>4^{38}\\)"
        ],
        "hint": "Rewrite each as a power with exponent 19, then compare bases.",
        "expl": "Step 1 — To exponent 19: \\(2^{57}=8^{19},\\ 4^{38}=16^{19}\\).\nStep 2 — \\(16\\ge8\\), so \\(4^{38}(=16^{19})\\ge16^{19}>2^{57}\\).\nAnswer: \\(4^{38}>16^{19}>2^{57}\\) (B).",
        "level": "medium"
      },
      {
        "n": 44,
        "topic": "Exponent rules",
        "correct": "A",
        "options": 4,
        "text": "Arranging the following in ascending order: \\(2^{10000},\\ 10^{3000},\\ 3^{6000},\\ 7^{4000}\\), we get:",
        "choices": [
          "\\(3^{6000}<10^{3000}<2^{10000}<7^{4000}\\)",
          "\\(2^{10000}<7^{4000}<10^{3000}<3^{6000}\\)",
          "\\(10^{3000}<3^{6000}<7^{4000}<2^{10000}\\)",
          "\\(7^{4000}<3^{6000}<2^{10000}<10^{3000}\\)"
        ],
        "hint": "Rewrite each as a power with exponent 1000, then compare bases.",
        "expl": "Step 1 — To exponent 1000: \\(2^{10000}=1024^{1000},\\ 10^{3000}=1000^{1000},\\ 3^{6000}=729^{1000},\\ 7^{4000}=2401^{1000}\\).\nStep 2 — Bases: \\(729<1000<1024<2401\\).\nStep 3 — So \\(3^{6000}<10^{3000}<2^{10000}<7^{4000}\\).\nAnswer: (A).",
        "level": "medium"
      },
      {
        "n": 45,
        "topic": "Fractions & decimals",
        "correct": "B",
        "options": 5,
        "text": "If all the fractions \\(\\frac{3}{5},\\ \\frac{1}{8},\\ \\frac{8}{11},\\ \\frac{4}{9},\\ \\frac{2}{7}\\) and \\(\\frac{5}{12}\\) are arranged in descending order of their values, which one will be the third?",
        "choices": [
          "\\(\\frac{1}{8}\\)",
          "\\(\\frac{4}{9}\\)",
          "\\(\\frac{5}{12}\\)",
          "\\(\\frac{8}{11}\\)",
          "\\(\\frac{2}{8}\\)"
        ],
        "hint": "Convert the fractions to decimals to order them quickly.",
        "expl": "Step 1 — Decimals: \\(\\frac{3}{5}=0.60,\\ \\frac{1}{8}=0.125,\\ \\frac{8}{11}\\approx0.727,\\ \\frac{4}{9}\\approx0.444,\\ \\frac{2}{7}\\approx0.286,\\ \\frac{5}{12}\\approx0.417\\).\nStep 2 — Descending: \\(\\frac{8}{11}>\\frac{3}{5}>\\frac{4}{9}>\\frac{5}{12}>\\frac{2}{7}>\\frac{1}{8}\\).\nStep 3 — Third value \\(=\\frac{4}{9}\\).\nNote — Source list partly garbled; verify.\nAnswer: \\(\\frac{4}{9}\\) (B).",
        "note": "Math from the PDF was ambiguous — verify the exact expression.",
        "level": "medium"
      },
      {
        "n": 46,
        "topic": "Roots & radicals",
        "correct": "D",
        "options": 4,
        "text": "The smallest of \\(\\sqrt8+\\sqrt5,\\ \\sqrt7+\\sqrt6,\\ \\sqrt{10}+\\sqrt3\\) and \\(\\sqrt{11}+\\sqrt2\\) is:",
        "choices": [
          "\\(\\sqrt8+\\sqrt5\\)",
          "\\(\\sqrt7+\\sqrt6\\)",
          "\\(\\sqrt{10}+\\sqrt3\\)",
          "\\(\\sqrt{11}+\\sqrt2\\)"
        ],
        "hint": "Square each expression: \\((\\sqrt a+\\sqrt b)^2=a+b+2\\sqrt{ab}\\), then compare.",
        "expl": "Step 1 — \\((\\sqrt a+\\sqrt b)^2=a+b+2\\sqrt{ab}\\); each \\(a+b=13\\).\nStep 2 — Compare \\(ab\\): \\(40,42,30,22\\) — smallest is 22.\nStep 3 — Smallest value \\(=\\sqrt{11}+\\sqrt2\\).\nAnswer: \\(\\sqrt{11}+\\sqrt2\\) (D).",
        "level": "medium"
      },
      {
        "n": 47,
        "topic": "Roots & radicals",
        "correct": "D",
        "options": 4,
        "text": "Which one of the following is the least: \\(\\sqrt2,\\ \\sqrt[4]{3},\\ \\sqrt[3]{3},\\ \\sqrt[3]{2}\\)?",
        "choices": [
          "\\(\\sqrt2\\)",
          "\\(\\sqrt[4]{3}\\)",
          "\\(\\sqrt[3]{3}\\)",
          "\\(\\sqrt[3]{2}\\)"
        ],
        "hint": "Raise all four to the 12th power to clear the roots.",
        "expl": "Step 1 — Raise each to the 12th power: \\((\\sqrt2)^{12}=64,\\ (\\sqrt[4]{3})^{12}=27,\\ (\\sqrt[3]{3})^{12}=81,\\ (\\sqrt[3]{2})^{12}=16\\).\nStep 2 — Smallest is 16 \\(\\Rightarrow \\sqrt[3]{2}\\).\nNote — Option wording garbled in source; verify.\nAnswer: \\(\\sqrt[3]{2}\\) (D).",
        "note": "Math from the PDF was ambiguous — verify the exact expression.",
        "level": "hard"
      },
      {
        "n": 49,
        "topic": "Roots & radicals",
        "correct": "C",
        "options": 4,
        "text": "\\(\\dfrac{1}{\\sqrt2+\\sqrt3-\\sqrt5}+\\dfrac{1}{\\sqrt2-\\sqrt3-\\sqrt5}\\), in simplified form, equals:",
        "choices": [
          "1",
          "\\(\\sqrt2\\)",
          "\\(\\frac{1}{\\sqrt2}\\)",
          "0"
        ],
        "hint": "Rationalize each fraction using its conjugate; watch the surds cancel.",
        "expl": "Step 1 — Rationalize \\(\\frac{1}{\\sqrt2+\\sqrt3-\\sqrt5}\\) to \\(\\frac{\\sqrt2+\\sqrt3+\\sqrt5}{2\\sqrt6}\\).\nStep 2 — Rationalize the second term similarly.\nStep 3 — Adding, the surds cancel to \\(\\frac{\\sqrt3}{\\sqrt6}=\\frac{1}{\\sqrt2}\\).\nAnswer: \\(\\frac{1}{\\sqrt2}\\) (C).",
        "level": "hard"
      },
      {
        "n": 51,
        "topic": "Sequences & series",
        "correct": "B",
        "options": 4,
        "text": "When a ball bounces, it rises to \\(\\frac{3}{4}\\) of the height from which it fell. If the ball is dropped from a height of 32 m, how high will it rise at the third bounce?",
        "choices": [
          "13 m",
          "\\(13\\tfrac{1}{2}\\) m",
          "\\(14\\tfrac{1}{2}\\) m",
          "None of these"
        ],
        "hint": "Apply the \\(\\frac{3}{4}\\) ratio three times.",
        "expl": "Step 1 — After three bounces: height \\(=32\\times\\left(\\frac{3}{4}\\right)^3\\).\nStep 2 — \\(=32\\times\\frac{27}{64}=\\frac{27}{2}=13.5\\) m.\nAnswer: \\(13\\tfrac{1}{2}\\) m (B).",
        "level": "easy"
      },
      {
        "n": 52,
        "topic": "Fractions & decimals",
        "correct": "A",
        "options": 5,
        "text": "\\(\\frac{1}{10}\\) of a pole is coloured red, \\(\\frac{1}{20}\\) white, \\(\\frac{1}{30}\\) blue, \\(\\frac{1}{40}\\) black, \\(\\frac{1}{50}\\) violet, \\(\\frac{1}{60}\\) yellow and the rest is green. If the length of the green portion of the pole is 12.08 metres, then the length of the pole is:",
        "choices": [
          "16 m",
          "18 m",
          "20 m",
          "30 m",
          "32 m"
        ],
        "hint": "Add all the coloured fractions; green is the remainder of the whole.",
        "expl": "Step 1 — Coloured \\(=\\frac{1}{10}+\\frac{1}{20}+\\frac{1}{30}+\\frac{1}{40}+\\frac{1}{50}+\\frac{1}{60}=\\frac{147}{600}\\).\nStep 2 — Green \\(=1-\\frac{147}{600}=\\frac{453}{600}\\).\nStep 3 — Length \\(=12.08\\times\\frac{600}{453}=16\\) m.\nAnswer: 16 m (A).",
        "level": "hard"
      },
      {
        "n": 53,
        "topic": "Fractions & decimals",
        "correct": "B",
        "options": 5,
        "text": "The fluid contained in a bucket can fill four large bottles or seven small bottles. A full large bottle is used to fill an empty small bottle. What fraction of the fluid is left over in the large bottle when the small one is full?",
        "choices": [
          "\\(\\frac{2}{7}\\)",
          "\\(\\frac{3}{7}\\)",
          "\\(\\frac{4}{7}\\)",
          "\\(\\frac{5}{7}\\)",
          "\\(\\frac{1}{7}\\)"
        ],
        "hint": "Let the bucket equal the LCM of 4 and 7.",
        "expl": "Step 1 — Let bucket \\(=28\\) (LCM of 4, 7). Large bottle \\(=7\\), small \\(=4\\).\nStep 2 — Filling a small (4) from a large (7) leaves \\(7-4=3\\).\nStep 3 — Fraction \\(=\\frac{3}{7}\\).\nAnswer: \\(\\frac{3}{7}\\) (B).",
        "level": "medium"
      },
      {
        "n": 54,
        "topic": "Fractions & decimals",
        "correct": "D",
        "options": 5,
        "text": "At an International Dinner, \\(\\frac{1}{5}\\) of the people attending were French men. If the number of French women at the dinner was \\(\\frac{2}{3}\\) greater than the number of French men, and there were no other French people at the dinner, then what fraction of the people at the dinner were not French?",
        "choices": [
          "\\(\\frac{1}{5}\\)",
          "\\(\\frac{2}{5}\\)",
          "\\(\\frac{2}{3}\\)",
          "\\(\\frac{7}{15}\\)",
          "\\(\\frac{3}{5}\\)"
        ],
        "hint": "'\\(\\frac{2}{3}\\) greater' means multiply by \\(\\frac{5}{3}\\), not add \\(\\frac{2}{3}\\).",
        "expl": "Step 1 — French men \\(=\\frac{1}{5}\\).\nStep 2 — French women \\(=\\frac{1}{5}\\times\\frac{5}{3}=\\frac{1}{3}\\).\nStep 3 — Total French \\(=\\frac{1}{5}+\\frac{1}{3}=\\frac{8}{15}\\); not French \\(=\\frac{7}{15}\\).\nAnswer: \\(\\frac{7}{15}\\) (D).",
        "level": "medium"
      },
      {
        "n": 55,
        "topic": "Fractions & decimals",
        "correct": "C",
        "options": 5,
        "text": "From a number of apples, a man sells half the number of existing apples plus 1 to the first customer, sells \\(\\frac{1}{3}\\) of the remaining apples plus 1 to the second customer, and \\(\\frac{1}{5}\\) of the remaining apples plus 1 to the third customer. He then finds that he has 3 apples left. How many apples did he have originally?",
        "choices": [
          "15",
          "18",
          "20",
          "25",
          "28"
        ],
        "hint": "Work backwards from the 3 apples left, reversing each step.",
        "expl": "Step 1 — Work backwards from 3 left: before \\(=(\\text{after}+1)\\div(1-\\text{fraction})\\).\nStep 2 — Before 3rd \\(=(3+1)\\div\\frac{4}{5}=5\\).\nStep 3 — Before 2nd \\(=(5+1)\\div\\frac{2}{3}=9\\).\nStep 4 — Before 1st \\(=(9+1)\\div\\frac{1}{2}=20\\).\nAnswer: 20 (C).",
        "level": "hard"
      },
      {
        "n": 56,
        "topic": "Linear equations",
        "correct": "A",
        "options": 4,
        "text": "The charges of a hired car are Rs 4 per km for the first 60 km, Rs 5 per km for the next 60 km, and Rs 8 for every 5 km for the further journey. If the balance amount left over with Rohit is one-fourth of what he paid towards the charges of the hired car for travelling 320 km, how much money did he have initially?",
        "choices": [
          "Rs. 1075",
          "Rs. 1255",
          "Rs. 1540",
          "None of these"
        ],
        "hint": "Compute the fare in blocks (first 60 km, next 60 km, then per 5 km).",
        "expl": "Step 1 — Fare for 320 km:\n • \\(60\\times4=240\\)\n • \\(60\\times5=300\\)\n • \\(\\frac{200}{5}\\times8=320\\)\nStep 2 — Total \\(=860\\).\nStep 3 — Balance \\(=\\frac{1}{4}\\times860=215\\).\nStep 4 — Initial \\(=860+215=1075\\).\nAnswer: Rs. 1075 (A).",
        "level": "medium"
      },
      {
        "n": 57,
        "topic": "Exponent rules",
        "correct": "A",
        "options": 4,
        "text": "Arrange the following (from greatest to least): \\(3^{34},\\ 2^{51},\\ 7^{17}\\). We get:",
        "choices": [
          "\\(3^{34}>2^{51}>7^{17}\\)",
          "\\(7^{17}>2^{51}>3^{34}\\)",
          "\\(3^{34}>7^{17}>2^{51}\\)",
          "\\(25^{51}>3^{34}>7^{17}\\)"
        ],
        "hint": "34, 51 and 17 share a factor of 17 — rewrite all three with the same exponent.",
        "expl": "Step 1 — Put all three over the exponent 17: \\(3^{34} = (3^{2})^{17} = 9^{17}\\), \\(2^{51} = (2^{3})^{17} = 8^{17}\\), and \\(7^{17}\\).\nStep 2 — With a common positive exponent, the larger base wins: \\(9^{17} > 8^{17} > 7^{17}\\).\nStep 3 — So \\(3^{34} > 2^{51} > 7^{17}\\).\nAnswer: A.",
        "level": "medium"
      },
      {
        "n": 58,
        "topic": "Prime numbers & factorization",
        "correct": "B",
        "options": 5,
        "text": "If the product of the first fifty positive consecutive integers is divisible by \\(7^{n}\\), where \\(n\\) is an integer, then the largest possible value of \\(n\\) is:",
        "choices": [
          "7",
          "8",
          "10",
          "5",
          "12"
        ],
        "hint": "Legendre's rule: power of 7 in \\(50!=\\lfloor50/7\\rfloor+\\lfloor50/49\\rfloor\\).",
        "expl": "Step 1 — Power of 7 in \\(50!=\\lfloor50/7\\rfloor+\\lfloor50/49\\rfloor=7+1=8\\).\nAnswer: 8 (B).",
        "level": "medium"
      },
      {
        "n": 59,
        "topic": "Linear equations",
        "correct": "D",
        "options": 5,
        "text": "In an examination, a boy was asked to multiply a given number by \\(\\frac{7}{19}\\). By mistake, he divided the given number by \\(\\frac{7}{19}\\) and got a result 624 more than the correct answer. The sum of the digits of the given number is:",
        "choices": [
          "10",
          "11",
          "13",
          "14",
          "15"
        ],
        "hint": "Set up the difference between multiplying and dividing by \\(\\frac{7}{19}\\).",
        "expl": "Step 1 — Correct \\(=N\\times\\frac{7}{19}\\); mistake \\(=N\\times\\frac{19}{7}\\).\nStep 2 — Difference: \\(N\\left(\\frac{19}{7}-\\frac{7}{19}\\right)=624\\).\nStep 3 — \\(\\frac{19}{7}-\\frac{7}{19}=\\frac{312}{133}\\), so \\(N=624\\times\\frac{133}{312}=266\\).\nStep 4 — Digit sum of 266 \\(=2+6+6=14\\).\nAnswer: 14 (D).",
        "level": "hard"
      }
    ]
  },
  {
    "id": "quant-percentage-ex",
    "title": "Percentages — Exercise",
    "section": "quant",
    "source": "Percentage exercise (answer key, hints & explanations)",
    "questions": [
      {
        "n": 1,
        "topic": "Percentages & percent change",
        "correct": "C",
        "options": 4,
        "text": "\\(p\\) is six times as large as \\(q\\). The percent that \\(q\\) is less than \\(p\\) is:",
        "choices": [
          "\\(16\\tfrac23\\%\\)",
          "60%",
          "\\(83\\tfrac13\\%\\)",
          "90%"
        ],
        "hint": "Express the gap (p − q) as a fraction of p, the larger quantity.",
        "expl": "Step 1 — \\(p = 6q\\), so the gap is \\(p-q = 5q\\).\nStep 2 — “q is less than p” compares the gap to \\(p\\): \\(\\frac{5q}{6q}\\times100\\).\nStep 3 — \\(=\\frac{5}{6}\\times100 = 83\\tfrac13\\%\\).\nAnswer: \\(83\\tfrac13\\%\\) (C).",
        "level": "easy"
      },
      {
        "n": 2,
        "topic": "Percentages & percent change",
        "correct": "D",
        "options": 5,
        "text": "Two numbers are respectively 20% and 50% of a third number. The first number is what percent of the second?",
        "choices": [
          "10%",
          "20%",
          "30%",
          "40%",
          "50%"
        ],
        "hint": "Let the third number be 100 and read off the first two.",
        "expl": "Step 1 — Let the third number be 100. First \\(=20\\), second \\(=50\\).\nStep 2 — First as a percent of second: \\(\\frac{20}{50}\\times100 = 40\\%\\).\nAnswer: 40% (D).",
        "level": "easy"
      },
      {
        "n": 3,
        "topic": "Percentages & percent change",
        "correct": "B",
        "options": 5,
        "text": "40% of a store's customers purchase items, and of those, 15% purchase hats. What percent of the store's customers purchase hats?",
        "choices": [
          "4%",
          "6%",
          "15%",
          "24%",
          "33%"
        ],
        "hint": "Take a percent of a percent — multiply the two.",
        "expl": "Step 1 — Of 100 customers, 40 purchase items.\nStep 2 — 15% of those 40 buy hats: \\(0.15\\times40 = 6\\).\nStep 3 — That's 6 of every 100 customers = 6%.\nAnswer: 6% (B).",
        "level": "easy"
      },
      {
        "n": 4,
        "topic": "Percentages & percent change",
        "correct": "D",
        "options": 4,
        "text": "The price of a cooker was increased by 15%, and the number sold then fell by 15%. What was the net effect on sales revenue?",
        "choices": [
          "15% decrease",
          "No effect",
          "2.25% increase",
          "2.25% decrease"
        ],
        "hint": "Up x% then down x% is never a wash — use \\(-\\frac{x^2}{100}\\).",
        "expl": "Step 1 — Revenue \\(= \\text{price}\\times\\text{quantity}\\), changed by factors \\(1.15\\) and \\(0.85\\).\nStep 2 — \\(1.15\\times0.85 = 0.9775\\), a 2.25% drop.\nStep 3 — Shortcut: up x% then down x% gives \\(-\\frac{x^2}{100} = -\\frac{225}{100} = -2.25\\%\\).\nAnswer: 2.25% decrease (D).",
        "level": "easy"
      },
      {
        "n": 5,
        "topic": "Percentages & percent change",
        "correct": "B",
        "options": 4,
        "text": "A's salary is 25% higher than B's salary. By what percent is B's salary lower than A's?",
        "choices": [
          "\\(16\\tfrac13\\%\\)",
          "20%",
          "25%",
          "\\(33\\tfrac13\\%\\)"
        ],
        "hint": "The base flips: use \\(\\frac{r}{100+r}\\times100\\).",
        "expl": "Step 1 — Let B \\(=100\\), so A \\(=125\\).\nStep 2 — B is lower than A by \\(\\frac{125-100}{125}\\times100 = \\frac{25}{125}\\times100\\).\nStep 3 — \\(=20\\%\\). (Not 25% — the base is now the larger number, A.)\nAnswer: 20% (B).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Percentages & percent change",
        "correct": "B",
        "options": 5,
        "text": "In a housing society, 30% of residents are men over 18 and 40% are women over 18. If the 24 remaining residents are children, how many residents are there in total?",
        "choices": [
          "32",
          "80",
          "94",
          "112",
          "130"
        ],
        "hint": "Find what percent the children represent first.",
        "expl": "Step 1 — Adults are \\(30\\%+40\\% = 70\\%\\), so children are 30%.\nStep 2 — 30% of the total \\(=24\\).\nStep 3 — Total \\(=\\frac{24}{0.30} = 80\\).\nAnswer: 80 (B).",
        "level": "easy"
      },
      {
        "n": 7,
        "topic": "Percentages & percent change",
        "correct": "D",
        "options": 5,
        "text": "Production of milk chocolates rose 30% in one month to 9,100 per month. What was it one month ago?",
        "choices": [
          "10,000",
          "9,000",
          "8,000",
          "7,000",
          "11,000"
        ],
        "hint": "9,100 is 130% of the earlier value — divide, don't subtract 30%.",
        "expl": "Step 1 — \\(130\\%\\text{ of old} = 9100\\).\nStep 2 — Old \\(=\\frac{9100}{1.3} = 7000\\).\nAnswer: 7,000 (D).",
        "level": "easy"
      },
      {
        "n": 8,
        "topic": "Percentages & percent change",
        "correct": "B",
        "options": 5,
        "text": "In an election between two candidates, one got 40% of the votes and was defeated by 160 votes. How many votes were polled in total?",
        "choices": [
          "900",
          "800",
          "700",
          "600",
          "1000"
        ],
        "hint": "The winner got 60%; the margin is the difference of the two shares.",
        "expl": "Step 1 — Shares are 40% and 60%, so the margin is \\(60\\%-40\\% = 20\\%\\) of the total.\nStep 2 — 20% of total \\(=160\\).\nStep 3 — Total \\(=\\frac{160}{0.20} = 800\\).\nAnswer: 800 (B).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Percentages & percent change",
        "correct": "A",
        "options": 4,
        "text": "The price of groundnut oil rose from $24 to $27 per kg. By what percent should a family cut consumption to keep its expenditure unchanged?",
        "choices": [
          "\\(11\\tfrac19\\%\\)",
          "\\(11\\tfrac{1}{11}\\%\\)",
          "\\(11\\tfrac{1}{10}\\%\\)",
          "\\(9\\tfrac{1}{10}\\%\\)"
        ],
        "hint": "Price up r%, consumption must drop \\(\\frac{r}{100+r}\\times100\\).",
        "expl": "Step 1 — Price rise \\(=\\frac{27-24}{24}\\times100 = 12.5\\%\\).\nStep 2 — Required cut \\(=\\frac{12.5}{100+12.5}\\times100 = \\frac{12.5}{112.5}\\times100\\).\nStep 3 — \\(=\\frac{100}{9} = 11\\tfrac19\\%\\).\nAnswer: \\(11\\tfrac19\\%\\) (A).",
        "level": "medium"
      },
      {
        "n": 10,
        "topic": "Percentages & percent change",
        "correct": "B",
        "options": 5,
        "text": "10% of a village's inhabitants died of cholera; then 25% of the remainder left. The population is now 4,050. What was the original population?",
        "choices": [
          "5,000",
          "6,000",
          "7,000",
          "8,000",
          "9,000"
        ],
        "hint": "Apply the two survival factors 0.90 and 0.75 to the original.",
        "expl": "Step 1 — After deaths: 90% remain. After departures: 75% of that remain.\nStep 2 — \\(0.75\\times0.90\\times x = 4050\\), so \\(0.675x = 4050\\).\nStep 3 — \\(x = \\frac{4050}{0.675} = 6000\\).\nAnswer: 6,000 (B).",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Percentages & percent change",
        "correct": "C",
        "options": 5,
        "text": "A scooter costs $25,000 new. At the end of each year its value is 80% of its value at the start of that year. What is its value after 3 years?",
        "choices": [
          "$10,000",
          "$12,500",
          "$12,800",
          "$12,000",
          "$13,300"
        ],
        "hint": "Multiply by 0.8 three times (compound depreciation).",
        "expl": "Step 1 — Value \\(=25000\\times(0.8)^3\\).\nStep 2 — \\((0.8)^3 = 0.512\\).\nStep 3 — \\(25000\\times0.512 = 12800\\).\nAnswer: $12,800 (C).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Percentages & percent change",
        "correct": "D",
        "options": 5,
        "text": "A's income is 150% of B's, and C's income is 120% of A's. If A, B and C together earn $86,000, what is C's income?",
        "choices": [
          "$30,000",
          "$32,000",
          "$20,000",
          "$36,000",
          "$40,000"
        ],
        "hint": "Write everything in terms of B, then solve for B first.",
        "expl": "Step 1 — Let B \\(=x\\). Then A \\(=1.5x\\), C \\(=1.2\\times1.5x = 1.8x\\).\nStep 2 — \\(x + 1.5x + 1.8x = 4.3x = 86000\\), so \\(x = 20000\\).\nStep 3 — C \\(=1.8\\times20000 = 36000\\).\nAnswer: $36,000 (D).",
        "level": "medium"
      },
      {
        "n": 13,
        "topic": "Ratios & proportions",
        "correct": "C",
        "options": 4,
        "text": "Ravi's salary is 150% of Amit's, and Amit's salary is 80% of Ram's. What is the ratio of Ram's salary to Ravi's?",
        "choices": [
          "1 : 2",
          "2 : 3",
          "5 : 6",
          "6 : 5"
        ],
        "hint": "Anchor Ram at 100 and work outward.",
        "expl": "Step 1 — Let Ram \\(=100\\). Amit \\(=80\\% = 80\\).\nStep 2 — Ravi \\(=150\\%\\text{ of }80 = 120\\).\nStep 3 — Ram : Ravi \\(=100:120 = 5:6\\).\nAnswer: 5 : 6 (C).",
        "level": "medium"
      },
      {
        "n": 14,
        "topic": "Percentages & percent change",
        "correct": "B",
        "options": 5,
        "text": "In a shipment of 120 parts, 5% were defective; in another of 80 parts, 10% were defective. For the two shipments combined, what percent were defective?",
        "choices": [
          "6.5%",
          "7.0%",
          "7.5%",
          "8.0%",
          "8.5%"
        ],
        "hint": "Count actual defectives, then divide by the combined total.",
        "expl": "Step 1 — Defectives: \\(5\\%\\times120 = 6\\) and \\(10\\%\\times80 = 8\\); total \\(=14\\).\nStep 2 — Combined parts \\(=120+80 = 200\\).\nStep 3 — \\(\\frac{14}{200}\\times100 = 7\\%\\) (a weighted average, not \\(7.5\\%\\)).\nAnswer: 7.0% (B).",
        "level": "medium"
      },
      {
        "n": 15,
        "topic": "Percentages & percent change",
        "correct": "D",
        "options": 5,
        "text": "In January, 4,000 ticketless travellers were caught. In February the number rose 5%, in March it fell 5%, and in April it fell a further 10%. How many were caught in April?",
        "choices": [
          "3,125",
          "3,255",
          "3,575",
          "3,591",
          "3,721"
        ],
        "hint": "Apply the factors 1.05, 0.95, 0.90 in turn.",
        "expl": "Step 1 — \\(4000\\times1.05 = 4200\\).\nStep 2 — \\(4200\\times0.95 = 3990\\).\nStep 3 — \\(3990\\times0.90 = 3591\\).\nAnswer: 3,591 (D).",
        "level": "medium"
      },
      {
        "n": 16,
        "topic": "Percentages & percent change",
        "correct": "C",
        "options": 5,
        "text": "A village of 5,000 people sees its men increase 10% and its women increase 15%, so the population becomes 5,600. How many men were there originally?",
        "choices": [
          "2,000",
          "2,500",
          "3,000",
          "4,000",
          "4,500"
        ],
        "hint": "Let men = x, women = 5000 − x; the total increase is 600.",
        "expl": "Step 1 — \\(0.10x + 0.15(5000-x) = 600\\).\nStep 2 — \\(0.10x + 750 - 0.15x = 600 \\Rightarrow -0.05x = -150\\).\nStep 3 — \\(x = 3000\\).\nAnswer: 3,000 (C).",
        "level": "medium"
      },
      {
        "n": 17,
        "topic": "Percentages & percent change",
        "correct": "C",
        "options": 5,
        "text": "When the price of petrol rises 40%, a man cuts his consumption by 20%. What is the percent change in his expenditure?",
        "choices": [
          "20% increase",
          "16% increase",
          "12% increase",
          "40% increase",
          "44%"
        ],
        "hint": "Expenditure = price × consumption; multiply the factors.",
        "expl": "Step 1 — New expenditure factor \\(=1.40\\times0.80 = 1.12\\).\nStep 2 — That's a 12% increase.\nAnswer: 12% increase (C).",
        "level": "medium"
      },
      {
        "n": 18,
        "topic": "Percentages & percent change",
        "correct": "B",
        "options": 4,
        "text": "A man saves 10% of his income. Two years later his income has risen 20%, yet he saves the same dollar amount as before. By what percent has his expenditure increased?",
        "choices": [
          "22%",
          "\\(22\\tfrac29\\%\\)",
          "\\(23\\tfrac13\\%\\)",
          "24%"
        ],
        "hint": "Fix income at 100; track saving (constant) and the new expenditure.",
        "expl": "Step 1 — Income 100 → saving 10, expenditure 90.\nStep 2 — New income \\(=120\\); saving still 10, so expenditure \\(=110\\).\nStep 3 — Increase \\(=\\frac{110-90}{90}\\times100 = \\frac{20}{90}\\times100 = 22\\tfrac29\\%\\).\nAnswer: \\(22\\tfrac29\\%\\) (B).",
        "level": "hard"
      },
      {
        "n": 19,
        "topic": "Overlapping sets (Venn)",
        "correct": "C",
        "options": 5,
        "text": "40% of people read newspaper X, 50% read Y, and 10% read both. What percent read neither?",
        "choices": [
          "10%",
          "15%",
          "20%",
          "25%",
          "30%"
        ],
        "hint": "Use \\(|X\\cup Y| = |X| + |Y| - |X\\cap Y|\\), then subtract from 100%.",
        "expl": "Step 1 — At least one \\(=40\\%+50\\%-10\\% = 80\\%\\).\nStep 2 — Neither \\(=100\\%-80\\% = 20\\%\\).\nAnswer: 20% (C).",
        "level": "easy"
      },
      {
        "n": 20,
        "topic": "Overlapping sets (Venn)",
        "correct": "A",
        "options": 5,
        "text": "65% of students passed Civics, 60% passed History, and 40% passed both. If 90 students failed both subjects, how many students are there in total?",
        "choices": [
          "600",
          "650",
          "700",
          "750",
          "800"
        ],
        "hint": "Find the percent who passed at least one, then the percent who failed both.",
        "expl": "Step 1 — Passed at least one \\(=65\\%+60\\%-40\\% = 85\\%\\).\nStep 2 — Failed both \\(=100\\%-85\\% = 15\\%\\).\nStep 3 — \\(15\\%\\text{ of total} = 90\\Rightarrow \\text{total} = \\frac{90}{0.15} = 600\\).\nAnswer: 600 (A).",
        "level": "hard"
      }
    ]
  },
  {
    "id": "quant-ratio-ex",
    "title": "Ratios & Proportions — Exercise",
    "section": "quant",
    "source": "Ratio, Proportion & Partnership exercise (with answers & explanations)",
    "questions": [
      {
        "n": 1,
        "topic": "Ratios & proportions",
        "correct": "A",
        "options": 5,
        "text": "If \\(x : y = 2 : 3\\) and \\(2 : x = 4 : 8\\), what is the value of \\(y\\)?",
        "choices": [
          "6",
          "8",
          "4",
          "12",
          "14"
        ],
        "hint": "Use the second proportion to find x first.",
        "expl": "Step 1 — From \\(2 : x = 4 : 8\\): \\(4x = 16\\), so \\(x = 4\\).\nStep 2 — Then \\(x : y = 2 : 3\\) gives \\(4 : y = 2 : 3\\), so \\(y = 6\\).\nAnswer: 6 (A).",
        "level": "easy"
      },
      {
        "n": 2,
        "topic": "Ratios & proportions",
        "correct": "D",
        "options": 4,
        "text": "If \\(a : b = 2 : 3\\), \\(b : c = 3 : 4\\) and \\(c : d = 4 : 5\\), then \\(a : b : c : d\\) is:",
        "choices": [
          "5 : 4 : 3 : 2",
          "30 : 20 : 15 : 12",
          "2 : 3 : 4 : 6",
          "2 : 3 : 4 : 5"
        ],
        "hint": "The shared terms already line up — just chain them.",
        "expl": "Step 1 — b is 3 in both a:b and b:c, and c is 4 in both b:c and c:d, so the ratios link directly.\nStep 2 — \\(a : b : c : d = 2 : 3 : 4 : 5\\).\nAnswer: 2 : 3 : 4 : 5 (D).",
        "level": "easy"
      },
      {
        "n": 3,
        "topic": "Ratios & proportions",
        "correct": "C",
        "options": 5,
        "text": "What is the least positive integer which, when added to both terms of the ratio \\(5 : 9\\), makes the ratio greater than \\(7 : 10\\)?",
        "choices": [
          "6",
          "8",
          "5",
          "7",
          "9"
        ],
        "hint": "Set up (5+x)/(9+x) > 7/10 and solve for x.",
        "expl": "Step 1 — Require \\(\\frac{5+x}{9+x} > \\frac{7}{10}\\).\nStep 2 — Cross-multiply: \\(10(5+x) > 7(9+x)\\Rightarrow 50+10x > 63+7x\\).\nStep 3 — \\(3x > 13\\Rightarrow x > 4.33\\); least integer is 5.\nAnswer: 5 (C).",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Ratios & proportions",
        "correct": "B",
        "options": 5,
        "text": "The dimensions of a rectangular room, when each is increased by 4 m, are in ratio \\(4 : 3\\); when each is decreased by 4 m, they are in ratio \\(2 : 1\\). The dimensions are:",
        "choices": [
          "6 m and 4 m",
          "12 m and 8 m",
          "16 m and 12 m",
          "24 m and 16 m",
          "30 m and 4 m"
        ],
        "hint": "Write two equations from the two ratio conditions in l and b.",
        "expl": "Step 1 — \\(\\frac{l+4}{b+4} = \\frac{4}{3}\\Rightarrow 3l - 4b = 4\\).\nStep 2 — \\(\\frac{l-4}{b-4} = \\frac{2}{1}\\Rightarrow l - 2b = -4\\).\nStep 3 — Solving: \\(l = 12,\\ b = 8\\).\nAnswer: 12 m and 8 m (B).",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Ratios & proportions",
        "correct": "B",
        "options": 5,
        "text": "The sum of three numbers is 98. If the first to the second is \\(2 : 3\\) and the second to the third is \\(5 : 8\\), the second number is:",
        "choices": [
          "20",
          "30",
          "38",
          "48",
          "58"
        ],
        "hint": "Make the shared term (the second) equal before combining.",
        "expl": "Step 1 — Scale so 'second' matches: \\(A:B = 10:15\\), \\(B:C = 15:24\\), so \\(A:B:C = 10:15:24\\).\nStep 2 — \\(10x+15x+24x = 49x = 98\\Rightarrow x = 2\\).\nStep 3 — Second \\(= 15x = 30\\).\nAnswer: 30 (B).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Ratios & proportions",
        "correct": "C",
        "options": 5,
        "text": "The ratio of ladies to gents at a party was \\(1 : 2\\); after 2 ladies and 2 gents left, it became \\(1 : 3\\). How many people were originally present?",
        "choices": [
          "6",
          "9",
          "12",
          "15",
          "18"
        ],
        "hint": "Let ladies = x, gents = 2x, then apply the change.",
        "expl": "Step 1 — \\(\\frac{x-2}{2x-2} = \\frac{1}{3}\\).\nStep 2 — \\(3x - 6 = 2x - 2\\Rightarrow x = 4\\).\nStep 3 — Total \\(= x + 2x = 4 + 8 = 12\\).\nAnswer: 12 (C).",
        "level": "medium"
      },
      {
        "n": 7,
        "topic": "Ratios & proportions",
        "correct": "C",
        "options": 4,
        "text": "The ratio of boys to girls in a college is \\(7 : 8\\). If the numbers rise by 20% and 10% respectively, what is the new ratio?",
        "choices": [
          "8 : 9",
          "17 : 18",
          "21 : 22",
          "Cannot be determined"
        ],
        "hint": "Apply the growth factors to 7x and 8x.",
        "expl": "Step 1 — New boys \\(= 1.2\\times7x = 8.4x\\); new girls \\(= 1.1\\times8x = 8.8x\\).\nStep 2 — Ratio \\(= 8.4 : 8.8 = 84 : 88 = 21 : 22\\).\nAnswer: 21 : 22 (C).",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Mixtures & solutions",
        "correct": "C",
        "options": 5,
        "text": "In 45 litres of a mixture, milk and water are in ratio \\(4 : 1\\). How much water must be added to make the ratio \\(3 : 2\\)?",
        "choices": [
          "7.2 L",
          "24 L",
          "15 L",
          "1.5 L",
          "31.8 L"
        ],
        "hint": "The milk amount doesn't change — only water is added.",
        "expl": "Step 1 — Milk \\(= \\frac{4}{5}\\times45 = 36\\) L; water \\(= 9\\) L.\nStep 2 — Add x L water: \\(\\frac{36}{9+x} = \\frac{3}{2}\\).\nStep 3 — \\(72 = 27 + 3x\\Rightarrow x = 15\\).\nAnswer: 15 L (C).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Ratios & proportions",
        "correct": "C",
        "options": 5,
        "text": "Zinc and copper are melted in ratio \\(9 : 11\\). What is the weight of the mixture if 28.8 kg of zinc is used?",
        "choices": [
          "58 kg",
          "60 kg",
          "64 kg",
          "70 kg",
          "74 kg"
        ],
        "hint": "Zinc is 9 of every 20 parts of the mixture.",
        "expl": "Step 1 — Zinc fraction \\(= \\frac{9}{9+11} = \\frac{9}{20}\\).\nStep 2 — \\(\\frac{9}{20}\\times M = 28.8\\Rightarrow M = 28.8\\times\\frac{20}{9} = 64\\).\nAnswer: 64 kg (C).",
        "level": "easy"
      },
      {
        "n": 10,
        "topic": "Ratios & proportions",
        "correct": "D",
        "options": 4,
        "text": "If \\(A : B : C = 2 : 3 : 4\\), then \\(\\dfrac{A}{B} : \\dfrac{B}{C} : \\dfrac{C}{A}\\) equals:",
        "choices": [
          "4 : 9 : 16",
          "8 : 9 : 12",
          "8 : 9 : 16",
          "8 : 9 : 24"
        ],
        "hint": "Substitute A = 2x, B = 3x, C = 4x and simplify each fraction.",
        "expl": "Step 1 — \\(\\frac{A}{B} = \\frac{2}{3},\\ \\frac{B}{C} = \\frac{3}{4},\\ \\frac{C}{A} = \\frac{4}{2} = 2\\).\nStep 2 — Ratio \\(= \\frac{2}{3} : \\frac{3}{4} : 2\\); multiply through by 12.\nStep 3 — \\(= 8 : 9 : 24\\).\nAnswer: 8 : 9 : 24 (D).",
        "level": "hard"
      },
      {
        "n": 11,
        "topic": "Ratios & proportions",
        "correct": "C",
        "options": 4,
        "text": "If \\(A : B = 3 : 4\\), \\(B : C = 5 : 6\\) and \\(C : D = 7 : 5\\), who gets the largest share when a sum is divided as A : B : C : D?",
        "choices": [
          "A",
          "B",
          "C",
          "D"
        ],
        "hint": "Build one combined ratio, scaling shared terms to match.",
        "expl": "Step 1 — \\(A:B:C = 15:20:24\\) (making B = 20).\nStep 2 — Extend with C:D = 7:5 scaled to C = 24: \\(A:B:C:D = 105:140:168:120\\).\nStep 3 — Largest is C (168).\nAnswer: C (C).",
        "level": "hard"
      },
      {
        "n": 12,
        "topic": "Ratios & proportions",
        "correct": "B",
        "options": 5,
        "text": "The incomes of A and B are in ratio \\(3 : 2\\) and their expenses in ratio \\(5 : 3\\). If each saves $200, what is A's income?",
        "choices": [
          "$1,000",
          "$1,200",
          "$1,500",
          "$1,800",
          "$2,100"
        ],
        "hint": "Saving = income − expense; write both savings and set each to 200.",
        "expl": "Step 1 — Incomes \\(3x, 2x\\); expenses \\(5y, 3y\\).\nStep 2 — \\(3x - 5y = 200\\) and \\(2x - 3y = 200\\).\nStep 3 — Subtract: \\(x - 2y = 0\\Rightarrow x = 2y\\); then \\(2x-3y = 4y-3y = y = 200\\), so \\(x = 400\\).\nStep 4 — A's income \\(= 3x = 1200\\).\nAnswer: $1,200 (B).",
        "level": "medium"
      },
      {
        "n": 13,
        "topic": "Ratios & proportions",
        "correct": "B",
        "options": 4,
        "text": "A sum is divided among A, B, C in ratio \\(2 : 3 : 7\\). If A and B together get $1,500 less than C, what is A's share?",
        "choices": [
          "$1,000",
          "$1,500",
          "$2,000",
          "Cannot be determined"
        ],
        "hint": "The gap C − (A + B) equals 1,500 in ratio units.",
        "expl": "Step 1 — Shares \\(2x, 3x, 7x\\).\nStep 2 — \\(7x - (2x + 3x) = 2x = 1500\\Rightarrow x = 750\\).\nStep 3 — A's share \\(= 2x = 1500\\).\nAnswer: $1,500 (B).",
        "level": "medium"
      },
      {
        "n": 14,
        "topic": "Ratios & proportions",
        "correct": "A",
        "options": 5,
        "text": "An ice-cream shop sold Vanilla to Chocolate cones in ratio \\(2 : 3\\). Had it sold 4 more Vanilla cones, the ratio would have been \\(3 : 4\\). How many Vanilla cones were sold?",
        "choices": [
          "32",
          "35",
          "42",
          "48",
          "54"
        ],
        "hint": "Chocolate is unchanged; write both ratios with the same C.",
        "expl": "Step 1 — \\(\\frac{V}{C} = \\frac{2}{3}\\Rightarrow C = \\frac{3V}{2}\\).\nStep 2 — \\(\\frac{V+4}{C} = \\frac{3}{4}\\Rightarrow 4(V+4) = 3C = 3\\cdot\\frac{3V}{2}\\).\nStep 3 — \\(4V + 16 = 4.5V\\Rightarrow 0.5V = 16\\Rightarrow V = 32\\).\nAnswer: 32 (A).",
        "level": "medium"
      },
      {
        "n": 15,
        "topic": "Ratios & proportions",
        "correct": "C",
        "options": 5,
        "text": "81 is divided into three parts such that \\(\\tfrac12\\) of the first, \\(\\tfrac13\\) of the second and \\(\\tfrac14\\) of the third are all equal. The three parts are:",
        "choices": [
          "36, 27, 18",
          "27, 18, 36",
          "18, 27, 36",
          "30, 27, 24",
          "42"
        ],
        "hint": "Set each equal expression to k, then write the parts in terms of k.",
        "expl": "Step 1 — Let \\(\\tfrac12 x = \\tfrac13 y = \\tfrac14 z = k\\), so \\(x = 2k,\\ y = 3k,\\ z = 4k\\).\nStep 2 — \\(x+y+z = 9k = 81\\Rightarrow k = 9\\).\nStep 3 — Parts are \\(18, 27, 36\\).\nAnswer: 18, 27, 36 (C).",
        "level": "medium"
      },
      {
        "n": 16,
        "topic": "Ratios & proportions",
        "correct": "B",
        "options": 5,
        "text": "$1,800 is divided among A, B, C so that 4 times A's share = 6 times B's share = 3 times C's share. What is A's share?",
        "choices": [
          "$400",
          "$600",
          "$700",
          "$800",
          "$900"
        ],
        "hint": "Set 4A = 6B = 3C = k and express each share via k.",
        "expl": "Step 1 — \\(4A = 6B = 3C = k\\Rightarrow A = \\frac{k}{4},\\ B = \\frac{k}{6},\\ C = \\frac{k}{3}\\).\nStep 2 — Ratio \\(A:B:C = \\frac{1}{4}:\\frac{1}{6}:\\frac{1}{3} = 3:2:4\\).\nStep 3 — A \\(= \\frac{3}{9}\\times1800 = 600\\).\nAnswer: $600 (B).",
        "level": "medium"
      }
    ]
  },
  {
    "id": "quant-interest-ex",
    "title": "Simple & Compound Interest — Exercise",
    "section": "quant",
    "source": "Simple & Compound Interest exercise (with answers & explanations)",
    "questions": [
      {
        "n": 1,
        "topic": "Simple & compound interest",
        "correct": "A",
        "options": 4,
        "text": "A sum lent at simple interest amounts to $1,008 in 2 years and $1,164 in 3½ years. Find the rate % per annum.",
        "choices": [
          "13%",
          "14%",
          "12½%",
          "15%"
        ],
        "hint": "The growth between the two times is pure interest — find interest per year first.",
        "expl": "Step 1 — SI for 1½ years \\(= 1164 - 1008 = 156\\), so SI/year \\(= 104\\).\nStep 2 — SI for 2 years \\(= 208\\); principal \\(= 1008 - 208 = 800\\).\nStep 3 — Rate \\(= \\frac{208\\times100}{800\\times2} = 13\\%\\).\nAnswer: 13% (A).",
        "level": "medium"
      },
      {
        "n": 2,
        "topic": "Simple & compound interest",
        "correct": "B",
        "options": 5,
        "text": "A sum lent at simple interest amounts to $720 after 2 years and to $1,020 after a further 5 years. Find the sum and the rate.",
        "choices": [
          "$500, 10%",
          "$600, 10%",
          "$500, 12%",
          "$600, 12%",
          "$700%"
        ],
        "hint": "The $300 over 5 years is interest; scale down to find yearly interest.",
        "expl": "Step 1 — SI for 5 years \\(= 1020 - 720 = 300\\), so SI/year \\(= 60\\).\nStep 2 — SI for 2 years \\(= 120\\); principal \\(= 720 - 120 = 600\\).\nStep 3 — Rate \\(= \\frac{120\\times100}{600\\times2} = 10\\%\\).\nAnswer: $600, 10% (B).",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Simple & compound interest",
        "correct": "C",
        "options": 5,
        "text": "A sum was put at simple interest for 4 years. Had the rate been 2% higher, it would have earned $56 more. Find the sum.",
        "choices": [
          "$500",
          "$600",
          "$700",
          "$800",
          "$900"
        ],
        "hint": "Extra interest = P × (extra rate) × time ÷ 100.",
        "expl": "Step 1 — Extra interest \\(= \\frac{P\\times2\\times4}{100} = 56\\).\nStep 2 — \\(\\frac{8P}{100} = 56\\Rightarrow P = 700\\).\nAnswer: $700 (C).",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Simple & compound interest",
        "correct": "A",
        "options": 5,
        "text": "The simple interest on a sum is \\(\\tfrac{16}{25}\\) of the sum. If the rate percent and the number of years are equal, find the rate.",
        "choices": [
          "8% for 8 years",
          "6% for 6 years",
          "10% for 10 years",
          "12% for 12 years",
          "14%"
        ],
        "hint": "With rate = time = R, SI = P·R²/100.",
        "expl": "Step 1 — \\(\\frac{16}{25}P = \\frac{P\\cdot R\\cdot R}{100}\\).\nStep 2 — \\(R^2 = \\frac{1600}{25} = 64\\Rightarrow R = 8\\).\nStep 3 — So rate 8% and time 8 years.\nAnswer: 8% for 8 years (A).",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Simple & compound interest",
        "correct": "B",
        "options": 5,
        "text": "A person borrowed $2,500 in two parts, one at 5% p.a. and the other at 7% p.a. The total simple interest over 2 years was $275. How much was borrowed at 7%?",
        "choices": [
          "$600",
          "$625",
          "$650",
          "$675",
          "$700"
        ],
        "hint": "Let the 5% part be x; write both interests over 2 years.",
        "expl": "Step 1 — \\(\\frac{x\\cdot5\\cdot2}{100} + \\frac{(2500-x)\\cdot7\\cdot2}{100} = 275\\).\nStep 2 — \\(10x + 14(2500-x) = 27500\\Rightarrow -4x = -7500\\Rightarrow x = 1875\\).\nStep 3 — At 7%: \\(2500 - 1875 = 625\\).\nAnswer: $625 (B).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Simple & compound interest",
        "correct": "C",
        "options": 4,
        "text": "What is the ratio of the simple interest earned by a fixed sum at a fixed rate over 6 years to that over 9 years?",
        "choices": [
          "1 : 3",
          "1 : 4",
          "2 : 3",
          "Cannot be determined"
        ],
        "hint": "With P and R fixed, SI is proportional to time.",
        "expl": "Step 1 — SI \\(\\propto\\) time when P and R are constant.\nStep 2 — Ratio \\(= 6 : 9 = 2 : 3\\).\nAnswer: 2 : 3 (C).",
        "level": "easy"
      },
      {
        "n": 7,
        "topic": "Simple & compound interest",
        "correct": "D",
        "options": 4,
        "text": "A lent $5,000 to B for 2 years and $3,000 to C for 4 years at the same simple interest rate, receiving $2,200 in interest in all. Find the rate per annum.",
        "choices": [
          "5%",
          "7%",
          "7⅛%",
          "10%"
        ],
        "hint": "Add the two interest expressions and solve for R.",
        "expl": "Step 1 — \\(\\frac{5000\\cdot R\\cdot2}{100} + \\frac{3000\\cdot R\\cdot4}{100} = 2200\\).\nStep 2 — \\(100R + 120R = 2200\\Rightarrow 220R = 2200\\).\nStep 3 — \\(R = 10\\%\\).\nAnswer: 10% (D).",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Simple & compound interest",
        "correct": "A",
        "options": 5,
        "text": "$13,900 is split between scheme A (14% p.a.) and scheme B (11% p.a.) at simple interest. If the total interest over 2 years is $3,508, how much was invested in scheme B?",
        "choices": [
          "$6,400",
          "$6,500",
          "$7,200",
          "$7,500",
          "$7,800"
        ],
        "hint": "Let A's amount be x; the rest is in B.",
        "expl": "Step 1 — \\(\\frac{x\\cdot14\\cdot2}{100} + \\frac{(13900-x)\\cdot11\\cdot2}{100} = 3508\\).\nStep 2 — \\(28x + 22(13900-x) = 350800\\Rightarrow 6x = 45000\\Rightarrow x = 7500\\).\nStep 3 — Scheme B \\(= 13900 - 7500 = 6400\\).\nAnswer: $6,400 (A).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Simple & compound interest",
        "correct": "D",
        "options": 5,
        "text": "$2,600 is invested at 4%, 6% and 8% p.a. (simple interest) so that the interest from each is the same after one year. How much was invested at 4%?",
        "choices": [
          "$200",
          "$600",
          "$800",
          "$1,200",
          "$1600"
        ],
        "hint": "Equal interest at equal time means the amounts are inversely proportional to the rates.",
        "expl": "Step 1 — Equal interest ⟹ amounts \\(\\propto \\frac{1}{4} : \\frac{1}{6} : \\frac{1}{8} = 6 : 4 : 3\\).\nStep 2 — Total parts \\(= 13\\); the 4% share is the largest, \\(\\frac{6}{13}\\times2600 = 1200\\).\nAnswer: $1,200 (D).",
        "level": "medium"
      },
      {
        "n": 10,
        "topic": "Simple & compound interest",
        "correct": "A",
        "options": 5,
        "text": "$12,000 is invested at 10% p.a. and another amount at 20% p.a. (simple interest). If the blended return on the whole is 14% p.a., what is the total amount invested?",
        "choices": [
          "$20,000",
          "$22,000",
          "$24,000",
          "$25,000",
          "$27,000"
        ],
        "hint": "Use alligation on the rates: distances from 14% give the amount ratio.",
        "expl": "Step 1 — Alligation: 10% and 20% around 14% give ratio \\((20-14):(14-10) = 6:4 = 3:2\\).\nStep 2 — The 10% part (3 parts) is $12,000, so 1 part \\(= 4000\\); 20% part (2 parts) \\(= 8000\\).\nStep 3 — Total \\(= 12000 + 8000 = 20000\\).\nAnswer: $20,000 (A).",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Simple & compound interest",
        "correct": "B",
        "options": 5,
        "text": "If the difference between simple and compound interest for 2 years on a sum at 5% p.a. is $6, find the sum.",
        "choices": [
          "$2,200",
          "$2,400",
          "$2,600",
          "$2,000",
          "$2,800"
        ],
        "hint": "For 2 years, CI − SI \\(= P\\left(\\frac{r}{100}\\right)^2\\).",
        "expl": "Step 1 — \\(P\\left(\\frac{5}{100}\\right)^2 = 6\\).\nStep 2 — \\(\\frac{P}{400} = 6\\Rightarrow P = 2400\\).\nAnswer: $2,400 (B).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Simple & compound interest",
        "correct": "B",
        "options": 5,
        "text": "The difference between compound and simple interest on $4,000 for 2 years at 5% p.a. (compounded yearly) is:",
        "choices": [
          "$20",
          "$10",
          "$50",
          "$60",
          "$70"
        ],
        "hint": "Same shortcut: \\(P(r/100)^2\\).",
        "expl": "Step 1 — \\(4000\\left(\\frac{5}{100}\\right)^2 = 4000\\times0.0025\\).\nStep 2 — \\(= 10\\).\nAnswer: $10 (B).",
        "level": "easy"
      },
      {
        "n": 13,
        "topic": "Simple & compound interest",
        "correct": "A",
        "options": 5,
        "text": "A sum placed at compound interest doubles itself in 5 years. In how many years will it become 8 times itself?",
        "choices": [
          "15 years",
          "20 years",
          "25 years",
          "30 years",
          "35 years"
        ],
        "hint": "8 = 2³, and each doubling takes 5 years.",
        "expl": "Step 1 — Doubling takes 5 years, and \\(8 = 2^3\\).\nStep 2 — So three doublings \\(= 3\\times5 = 15\\) years.\nAnswer: 15 years (A).",
        "level": "medium"
      },
      {
        "n": 14,
        "topic": "Simple & compound interest",
        "correct": "B",
        "options": 5,
        "text": "A sum doubles itself in 8 years under simple interest. What is the rate per annum?",
        "choices": [
          "10%",
          "12.5%",
          "15%",
          "20%",
          "23%"
        ],
        "hint": "Doubling means the interest equals the principal.",
        "expl": "Step 1 — Interest \\(= P\\) over 8 years: \\(P = \\frac{P\\cdot R\\cdot8}{100}\\).\nStep 2 — \\(R = \\frac{100}{8} = 12.5\\%\\).\nAnswer: 12.5% (B).",
        "level": "easy"
      },
      {
        "n": 15,
        "topic": "Simple & compound interest",
        "correct": "A",
        "options": 5,
        "text": "The compound interest on a sum for the 4th year at 8% p.a. is $486. What was the compound interest for the 3rd year on the same sum?",
        "choices": [
          "$450",
          "$475",
          "$456",
          "$500",
          "$519"
        ],
        "hint": "Each year's CI is (1 + r) times the previous year's CI.",
        "expl": "Step 1 — Year-on-year, CI grows by the factor \\(1.08\\).\nStep 2 — 3rd-year CI \\(= \\frac{486}{1.08} = 450\\).\nAnswer: $450 (A).",
        "level": "medium"
      }
    ]
  },
  {
    "id": "quant-profitloss-ex",
    "title": "Profit, Loss & Discount — Exercise",
    "section": "quant",
    "source": "Profit & Loss examples (converted to multiple-choice)",
    "questions": [
      {
        "n": 1,
        "topic": "Profit, loss & discount",
        "correct": "A",
        "options": 5,
        "text": "A cycle bought for $1,600 was sold for $1,400. What is the loss percent?",
        "choices": [
          "12.5%",
          "12%",
          "14%",
          "10%",
          "15.5%"
        ],
        "hint": "Loss% is on the cost price.",
        "expl": "Step 1 — Loss \\(= 1600 - 1400 = 200\\).\nStep 2 — Loss% \\(= \\frac{200}{1600}\\times100 = 12.5\\%\\).\nAnswer: 12.5% (A).",
        "level": "easy"
      },
      {
        "n": 2,
        "topic": "Profit, loss & discount",
        "correct": "A",
        "options": 5,
        "text": "By selling a table for $330 a trader gains 10%. What is the cost price?",
        "choices": [
          "$300",
          "$297",
          "$303",
          "$320",
          "$323"
        ],
        "hint": "SP = CP × (1 + gain%); solve for CP.",
        "expl": "Step 1 — \\(CP = \\frac{100}{100+10}\\times330 = \\frac{100}{110}\\times330\\).\nStep 2 — \\(= 300\\).\nAnswer: $300 (A).",
        "level": "easy"
      },
      {
        "n": 3,
        "topic": "Profit, loss & discount",
        "correct": "C",
        "options": 5,
        "text": "A sells a bicycle to B at 20% profit, and B sells it to C at 25% profit. If C pays $225, what did A pay?",
        "choices": [
          "$140",
          "$160",
          "$150",
          "$180",
          "$190"
        ],
        "hint": "Divide back through each profit factor.",
        "expl": "Step 1 — For B→C: B's cost \\(= \\frac{225}{1.25} = 180\\).\nStep 2 — For A→B: A's cost \\(= \\frac{180}{1.20} = 150\\).\nAnswer: $150 (C).",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Profit, loss & discount",
        "correct": "D",
        "options": 5,
        "text": "Some articles were bought at 6 for $5 and sold at 5 for $6. What is the gain percent?",
        "choices": [
          "20%",
          "25%",
          "36%",
          "44%",
          "52%"
        ],
        "hint": "Find cost and selling price per article, or take LCM of quantities.",
        "expl": "Step 1 — CP per article \\(= \\frac{5}{6}\\); SP per article \\(= \\frac{6}{5}\\).\nStep 2 — Gain% \\(= \\frac{6/5 - 5/6}{5/6}\\times100 = \\frac{11/30}{25/30}\\times100\\).\nStep 3 — \\(= \\frac{11}{25}\\times100 = 44\\%\\).\nAnswer: 44% (D).",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Profit, loss & discount",
        "correct": "B",
        "options": 4,
        "text": "Two radios are each sold for $792 — one at a 10% gain and the other at a 10% loss. What is the net result?",
        "choices": [
          "No gain or loss",
          "1% loss",
          "1% gain",
          "2% loss"
        ],
        "hint": "Same selling price with equal +p% and −p% always gives a loss of p²/100.",
        "expl": "Step 1 — CPs: \\(\\frac{792}{1.1} = 720\\) and \\(\\frac{792}{0.9} = 880\\); total CP \\(= 1600\\).\nStep 2 — Total SP \\(= 1584\\), so loss \\(= 16\\), i.e. \\(\\frac{16}{1600} = 1\\%\\).\nStep 3 — Shortcut: loss \\(= \\frac{10^2}{100} = 1\\%\\).\nAnswer: 1% loss (B).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Profit, loss & discount",
        "correct": "A",
        "options": 4,
        "text": "A man buys two apartments for $200,000 each. He sells one at a 20% loss and the other at a 20% gain. What is his overall result?",
        "choices": [
          "No gain or loss",
          "4% loss",
          "4% gain",
          "2% loss"
        ],
        "hint": "When the cost prices are equal and the +% equals the −%, they cancel.",
        "expl": "Step 1 — Loss on one \\(= 40{,}000\\); gain on the other \\(= 40{,}000\\).\nStep 2 — They exactly offset — net zero. (This only cancels because the CPs are equal.)\nAnswer: No gain or loss (A).",
        "level": "medium"
      },
      {
        "n": 7,
        "topic": "Profit, loss & discount",
        "correct": "C",
        "options": 4,
        "text": "By selling a radio for $1,536, Ramesh loses 20%. What percent would he gain or lose by selling it for $2,000?",
        "choices": [
          "4% gain",
          "5% gain",
          "\\(4\\tfrac16\\%\\) gain",
          "\\(4\\tfrac16\\%\\) loss"
        ],
        "hint": "Find the cost price first from the 20% loss.",
        "expl": "Step 1 — \\(CP = \\frac{1536}{0.8} = 1920\\).\nStep 2 — At $2,000: gain \\(= 80\\), so \\(\\frac{80}{1920}\\times100 = 4\\tfrac16\\%\\) gain.\nAnswer: \\(4\\tfrac16\\%\\) gain (C).",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Profit, loss & discount",
        "correct": "A",
        "options": 5,
        "text": "What single discount is equivalent to successive discounts of 15% and 20%?",
        "choices": [
          "32%",
          "35%",
          "30%",
          "33%",
          "37%"
        ],
        "hint": "Combine with \\(a + b - \\frac{ab}{100}\\), or multiply the surviving fractions.",
        "expl": "Step 1 — Surviving fraction \\(= 0.85\\times0.80 = 0.68\\).\nStep 2 — So the discount is \\(1 - 0.68 = 0.32 = 32\\%\\).\nAnswer: 32% (A).",
        "level": "easy"
      },
      {
        "n": 9,
        "topic": "Profit, loss & discount",
        "correct": "B",
        "options": 5,
        "text": "After a 12% discount on the marked price, an article sells for $880. What is the marked price?",
        "choices": [
          "$990",
          "$1,000",
          "$1,024",
          "$950",
          "$1048"
        ],
        "hint": "$880 is 88% of the marked price.",
        "expl": "Step 1 — \\(0.88\\times MP = 880\\).\nStep 2 — \\(MP = \\frac{880}{0.88} = 1000\\).\nAnswer: $1,000 (B).",
        "level": "easy"
      },
      {
        "n": 10,
        "topic": "Profit, loss & discount",
        "correct": "B",
        "options": 5,
        "text": "A shopkeeper gives a 10% discount and still makes a 26% profit. If an article is marked $280, what did it cost him?",
        "choices": [
          "$210",
          "$200",
          "$220",
          "$190",
          "$230"
        ],
        "hint": "Find the selling price after discount, then work back through the profit.",
        "expl": "Step 1 — SP \\(= 0.90\\times280 = 252\\).\nStep 2 — \\(CP = \\frac{252}{1.26} = 200\\).\nAnswer: $200 (B).",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Profit, loss & discount",
        "correct": "B",
        "options": 4,
        "text": "If the cost price of 15 tables equals the selling price of 20 tables, what is the loss percent?",
        "choices": [
          "20%",
          "25%",
          "\\(33\\tfrac13\\%\\)",
          "30%"
        ],
        "hint": "Use loss% \\(= \\frac{x-y}{y}\\times100\\) when CP of x = SP of y.",
        "expl": "Step 1 — \\(\\frac{x-y}{y}\\times100 = \\frac{15-20}{20}\\times100\\).\nStep 2 — \\(= \\frac{-5}{20}\\times100 = -25\\%\\) — a 25% loss.\nAnswer: 25% (B).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Profit, loss & discount",
        "correct": "B",
        "options": 4,
        "text": "If the cost price of 6 articles equals the selling price of 4 articles, what is the gain percent?",
        "choices": [
          "\\(33\\tfrac13\\%\\)",
          "50%",
          "40%",
          "\\(66\\tfrac23\\%\\)"
        ],
        "hint": "SP of 4 = CP of 6, so find gain on those 4.",
        "expl": "Step 1 — Let each article cost $1. SP of 4 articles \\(= CP of 6 = 6\\).\nStep 2 — Cost of those 4 \\(= 4\\); gain \\(= 2\\).\nStep 3 — Gain% \\(= \\frac{2}{4}\\times100 = 50\\%\\).\nAnswer: 50% (B).",
        "level": "medium"
      },
      {
        "n": 13,
        "topic": "Profit, loss & discount",
        "correct": "B",
        "options": 4,
        "text": "By what percent must the cost price be marked up so that, after a 10% discount, a 20% profit is still made?",
        "choices": [
          "30%",
          "\\(33\\tfrac13\\%\\)",
          "32%",
          "35%"
        ],
        "hint": "Let CP = 100; find the SP needed, then the marked price.",
        "expl": "Step 1 — CP = 100, required SP \\(= 120\\).\nStep 2 — \\(0.90\\times MP = 120\\Rightarrow MP = \\frac{1200}{9} = 133\\tfrac13\\).\nStep 3 — Markup \\(= 33\\tfrac13\\%\\) above cost.\nAnswer: \\(33\\tfrac13\\%\\) (B).",
        "level": "hard"
      },
      {
        "n": 14,
        "topic": "Profit, loss & discount",
        "correct": "B",
        "options": 4,
        "text": "Pure ghee costs $100/kg. After mixing it with oil at $50/kg, a shopkeeper sells the mixture at $96/kg for a 20% profit. In what ratio (ghee : oil) does he mix them?",
        "choices": [
          "2 : 3",
          "3 : 2",
          "1 : 1",
          "2 : 1"
        ],
        "hint": "Find the mixture's cost per kg, then apply alligation.",
        "expl": "Step 1 — Mixture cost \\(= \\frac{96}{1.2} = 80\\) per kg.\nStep 2 — Alligation around 80: ghee:oil \\(= (80-50):(100-80) = 30:20\\).\nStep 3 — \\(= 3:2\\).\nAnswer: 3 : 2 (B).",
        "level": "medium"
      },
      {
        "n": 15,
        "topic": "Profit, loss & discount",
        "correct": "A",
        "options": 5,
        "text": "The sale price of an article, including 10% sales tax, is $616. If the shopkeeper made a 12% profit, what was the cost price?",
        "choices": [
          "$500",
          "$550",
          "$480",
          "$560",
          "$580"
        ],
        "hint": "$616 = CP × (1 + profit) × (1 + tax).",
        "expl": "Step 1 — \\(CP\\times1.12\\times1.10 = 616\\).\nStep 2 — \\(CP\\times1.232 = 616\\Rightarrow CP = \\frac{616}{1.232} = 500\\).\nAnswer: $500 (A).",
        "level": "medium"
      }
    ]
  },
  {
    "id": "quant-speed-ex",
    "title": "Speed, Time & Distance — Exercise",
    "section": "quant",
    "source": "Time, Speed & Distance question bank (with solutions)",
    "questions": [
      {
        "n": 1,
        "topic": "Speed, distance & time",
        "correct": "A",
        "options": 5,
        "text": "Over a distance of 540 km, increasing the speed by 3 km/h saves 2 hours. What is the new (increased) speed?",
        "choices": [
          "30 km/h",
          "40 km/h",
          "50 km/h",
          "45 km/h",
          "55 km/h"
        ],
        "hint": "Let original speed be S; write time = 540/S for both cases.",
        "expl": "Step 1 — \\(\\frac{540}{S} - \\frac{540}{S+3} = 2\\).\nStep 2 — Solving gives \\(S = 27\\).\nStep 3 — New speed \\(= 27 + 3 = 30\\) km/h.\nAnswer: 30 km/h (A).",
        "level": "medium"
      },
      {
        "n": 2,
        "topic": "Speed, distance & time",
        "correct": "B",
        "options": 4,
        "text": "A cycle covers 75 km in 15 hours and a bike covers 80 km in 5 hours. What is the average speed over the whole journey?",
        "choices": [
          "7 km/h",
          "7.75 km/h",
          "6.65 km/h",
          "8 km/h"
        ],
        "hint": "Average speed = total distance ÷ total time.",
        "expl": "Step 1 — Total distance \\(= 75 + 80 = 155\\) km; total time \\(= 15 + 5 = 20\\) h.\nStep 2 — Average \\(= \\frac{155}{20} = 7.75\\) km/h.\nAnswer: 7.75 km/h (B).",
        "level": "easy"
      },
      {
        "n": 3,
        "topic": "Speed, distance & time",
        "correct": "D",
        "options": 4,
        "text": "If the speed ratio of P, Q and R covering the same distance is \\(5 : 2 : 1\\), what is the ratio of the times they take?",
        "choices": [
          "2 : 15 : 1",
          "2 : 5 : 1",
          "2 : 1 : 10",
          "2 : 5 : 10"
        ],
        "hint": "For a fixed distance, time is inversely proportional to speed.",
        "expl": "Step 1 — Time \\(\\propto \\frac{1}{\\text{speed}}\\): \\(\\frac{1}{5} : \\frac{1}{2} : \\frac{1}{1}\\).\nStep 2 — Multiply by 10: \\(2 : 5 : 10\\).\nAnswer: 2 : 5 : 10 (D).",
        "level": "easy"
      },
      {
        "n": 4,
        "topic": "Speed, distance & time",
        "correct": "C",
        "options": 5,
        "text": "If Gopal walked at 10 km/h instead of 7 km/h, he would cover 30 km more in the same time. How far does he actually travel at 7 km/h?",
        "choices": [
          "50 km",
          "60 km",
          "70 km",
          "80 km",
          "90 km"
        ],
        "hint": "The 3 km/h extra over the same time accounts for the 30 km.",
        "expl": "Step 1 — Extra distance \\(= (10-7)\\times t = 30\\), so \\(t = 10\\) h.\nStep 2 — Actual distance \\(= 7\\times10 = 70\\) km.\nAnswer: 70 km (C).",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Speed, distance & time",
        "correct": "B",
        "options": 5,
        "text": "Over 540 km, Car A takes 6 hours more than Car B, and their speed ratio is \\(3 : 5\\). What is Car B's speed?",
        "choices": [
          "80 km/h",
          "60 km/h",
          "50 km/h",
          "70 km/h",
          "90 km/h"
        ],
        "hint": "Speed ratio 3:5 means time ratio 5:3.",
        "expl": "Step 1 — Time ratio \\(= 5 : 3\\), difference \\(= 2\\) parts \\(= 6\\) h, so 1 part \\(= 3\\) h.\nStep 2 — B's time \\(= 3\\times3 = 9\\) h; B's speed \\(= \\frac{540}{9} = 60\\) km/h.\nAnswer: 60 km/h (B).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Speed, distance & time",
        "correct": "A",
        "options": 5,
        "text": "A truck's speed is 30% less than a bus's, and their average speed (over equal distances) is 70 km/h. What is the truck's speed?",
        "choices": [
          "59.5 km/h",
          "60 km/h",
          "31.5 km/h",
          "25.7 km/h",
          "65.8 km/h"
        ],
        "hint": "Equal distances → average = harmonic mean of the two speeds.",
        "expl": "Step 1 — 30% less means the speeds are in the ratio \\(7 : 10\\); call them \\(7s\\) and \\(10s\\).\nStep 2 — Over equal distances the average is the harmonic mean: \\(\\dfrac{2(7s)(10s)}{7s + 10s} = \\dfrac{140s}{17}\\).\nStep 3 — Setting \\(\\dfrac{140s}{17} = 70\\) gives \\(s = 8.5\\).\nStep 4 — Truck \\(= 7s = 59.5\\) km/h (and the bus is \\(10s = 85\\); check: \\(\\dfrac{2(59.5)(85)}{144.5} = 70\\) ✓).\nAnswer: A.",
        "level": "hard"
      },
      {
        "n": 7,
        "topic": "Speed, distance & time",
        "correct": "C",
        "options": 5,
        "text": "Naval walks at 3 km/h for 3.5 hours, then at 5.5 km/h for 3 hours. What is his average speed for the whole journey?",
        "choices": [
          "3.5 km/h",
          "7.15 km/h",
          "4.15 km/h",
          "6.35 km/h",
          "8.0 km/h"
        ],
        "hint": "Total distance ÷ total time — never just average the two speeds.",
        "expl": "Step 1 — Distances: \\(3\\times3.5 = 10.5\\) and \\(5.5\\times3 = 16.5\\); total \\(= 27\\) km.\nStep 2 — Total time \\(= 6.5\\) h; average \\(= \\frac{27}{6.5} \\approx 4.15\\) km/h.\nAnswer: 4.15 km/h (C).",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Speed, distance & time",
        "correct": "A",
        "options": 5,
        "text": "A driver's actual speed is 45 km/h, but due to traffic he drives at 36 km/h and takes 2 hours longer. What is the total distance?",
        "choices": [
          "360 km",
          "450 km",
          "180 km",
          "330 km",
          "540 km"
        ],
        "hint": "Speed ratio 45:36 = 5:4, so time ratio 4:5.",
        "expl": "Step 1 — Time ratio \\(= 4 : 5\\), difference \\(1\\) part \\(= 2\\) h.\nStep 2 — Actual time \\(= 4\\times2 = 8\\) h; distance \\(= 45\\times8 = 360\\) km.\nAnswer: 360 km (A).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Speed, distance & time",
        "correct": "B",
        "options": 5,
        "text": "Two bikes travel toward each other at 10 km/h and 12 km/h, starting 396 km apart. After how many hours do they meet?",
        "choices": [
          "10 hours",
          "18 hours",
          "16 hours",
          "17 hours",
          "19 hours"
        ],
        "hint": "Approaching each other means speeds add (relative speed).",
        "expl": "Step 1 — Relative speed \\(= 10 + 12 = 22\\) km/h.\nStep 2 — Time \\(= \\frac{396}{22} = 18\\) h.\nAnswer: 18 hours (B).",
        "level": "easy"
      },
      {
        "n": 10,
        "topic": "Speed, distance & time",
        "correct": "D",
        "options": 5,
        "text": "Driving at 20 km/h, Arjun reaches the office 5 minutes early; at 16 km/h he arrives 5 minutes late. What is the on-time travel duration?",
        "choices": [
          "15 minutes",
          "35 minutes",
          "40 minutes",
          "45 minutes",
          "50 minutes"
        ],
        "hint": "Speed ratio 20:16 = 5:4 → time ratio 4:5; the gap is 10 minutes.",
        "expl": "Step 1 — Time ratio \\(= 4 : 5\\); the difference (1 part) equals \\(5 + 5 = 10\\) min.\nStep 2 — Faster time \\(= 4\\times10 = 40\\) min; on-time \\(= 40 + 5 = 45\\) min.\nAnswer: 45 minutes (D).",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Speed, distance & time",
        "correct": "A",
        "options": 5,
        "text": "Sumit takes 2 hours less to cover 160 km when he increases his speed by 4 km/h. How long does the (original) trip take?",
        "choices": [
          "10 hours",
          "12 hours",
          "9 hours",
          "13 hours",
          "14 hours"
        ],
        "hint": "Let original speed S, time T = 160/S; write the faster case too.",
        "expl": "Step 1 — \\(S = \\frac{160}{T}\\) and \\(S + 4 = \\frac{160}{T-2}\\).\nStep 2 — Solving gives \\(S = 16,\\ T = 10\\) h.\nAnswer: 10 hours (A).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Speed, distance & time",
        "correct": "C",
        "options": 5,
        "text": "A ship at 80% of its usual speed takes 10 minutes longer to cover 480 km. What is its usual speed?",
        "choices": [
          "240 km/h",
          "480 km/h",
          "720 km/h",
          "360 km/h",
          "840 km/h"
        ],
        "hint": "80% speed → time ratio 4:5; the extra 1 part is 10 minutes.",
        "expl": "Step 1 — Time ratio usual:slow \\(= 4 : 5\\); 1 part \\(= 10\\) min, so usual time \\(= 40\\) min \\(= \\frac{2}{3}\\) h.\nStep 2 — Usual speed \\(= \\frac{480}{2/3} = 720\\) km/h.\nAnswer: 720 km/h (C).",
        "level": "hard"
      },
      {
        "n": 13,
        "topic": "Speed, distance & time",
        "correct": "C",
        "options": 5,
        "text": "A bus starts at 45 km/h and its speed increases by 10% each subsequent hour. How far does it travel in 3 hours?",
        "choices": [
          "140.95 km",
          "145.95 km",
          "148.95 km",
          "150.95 km",
          "153.95 km"
        ],
        "hint": "Add each hour's distance: 45, then 45×1.1, then that ×1.1.",
        "expl": "Step 1 — Hour 1: 45; hour 2: \\(49.5\\); hour 3: \\(54.45\\).\nStep 2 — Total \\(= 45 + 49.5 + 54.45 = 148.95\\) km.\nAnswer: 148.95 km (C).",
        "level": "medium"
      },
      {
        "n": 14,
        "topic": "Speed, distance & time",
        "correct": "B",
        "options": 5,
        "text": "A train's speed is 20% more than a bus's. Over 120 km each, the train takes 30 minutes less than the bus. What is the bus's speed?",
        "choices": [
          "20 km/h",
          "40 km/h",
          "60 km/h",
          "50 km/h",
          "70 km/h"
        ],
        "hint": "Speed ratio bus:train = 5:6, so time ratio = 6:5.",
        "expl": "Step 1 — Time ratio bus:train \\(= 6 : 5\\); difference (1 part) \\(= 30\\) min \\(= 0.5\\) h.\nStep 2 — Bus time \\(= 6\\times0.5 = 3\\) h; bus speed \\(= \\frac{120}{3} = 40\\) km/h.\nAnswer: 40 km/h (B).",
        "level": "medium"
      },
      {
        "n": 15,
        "topic": "Speed, distance & time",
        "correct": "D",
        "options": 5,
        "text": "P's speed is 50% of Q's, and P takes 4 hours longer than Q to cover 120 km. What is the average speed of P and Q together (total distance ÷ total time)?",
        "choices": [
          "10 km/h",
          "40 km/h",
          "30 km/h",
          "20 km/h",
          "50 km/h"
        ],
        "hint": "Half the speed means double the time; find both times.",
        "expl": "Step 1 — Speeds \\(1 : 2\\Rightarrow\\) times \\(2t : t\\); difference \\(t = 4\\) h.\nStep 2 — P: 8 h, Q: 4 h; each covers 120 km, total \\(= 240\\) km in \\(12\\) h.\nStep 3 — Average \\(= \\frac{240}{12} = 20\\) km/h.\nAnswer: 20 km/h (D).",
        "level": "hard"
      }
    ]
  },
  {
    "id": "quant-timework-ex",
    "title": "Time & Work — Exercise",
    "section": "quant",
    "source": "Time & Work question bank (with solutions)",
    "questions": [
      {
        "n": 1,
        "topic": "Work & rate",
        "correct": "C",
        "options": 5,
        "text": "A can do a job in 12 days. A, B and C together finish it in 6 days. If B is half as efficient as A, how many days does C alone need?",
        "choices": [
          "12",
          "16",
          "24",
          "18",
          "28"
        ],
        "hint": "Work in daily fractions: rate of C = combined − A − B.",
        "expl": "Step 1 — Rates: A \\(= \\frac{1}{12}\\), combined \\(= \\frac{1}{6}\\), B \\(= \\frac{1}{2}\\cdot\\frac{1}{12} = \\frac{1}{24}\\).\nStep 2 — C \\(= \\frac{1}{6} - \\frac{1}{12} - \\frac{1}{24} = \\frac{4-2-1}{24} = \\frac{1}{24}\\).\nStep 3 — C alone \\(= 24\\) days.\nAnswer: 24 days (C).",
        "level": "medium"
      },
      {
        "n": 2,
        "topic": "Work & rate",
        "correct": "B",
        "options": 4,
        "text": "A + B can do a job in 12 days, B + C in 16 days, and A + C in 24 days. How long do A, B and C together take?",
        "choices": [
          "\\(10\\tfrac13\\) days",
          "\\(10\\tfrac23\\) days",
          "12 days",
          "9 days"
        ],
        "hint": "Add the three pair-rates to get twice the combined rate.",
        "expl": "Step 1 — Take total work \\(= 48\\). Pair rates: \\(A+B = 4\\), \\(B+C = 3\\), \\(A+C = 2\\) units/day.\nStep 2 — Sum \\(= 9 = 2(A+B+C)\\), so \\(A+B+C = 4.5\\) units/day.\nStep 3 — Days \\(= \\frac{48}{4.5} = \\frac{32}{3} = 10\\tfrac23\\).\nAnswer: \\(10\\tfrac23\\) days (B).",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Work & rate",
        "correct": "D",
        "options": 5,
        "text": "A alone needs 36 days. B is 1.5 times as efficient as A, and C is twice as efficient as A. How many days do all three together take?",
        "choices": [
          "15",
          "9",
          "12",
          "8",
          "18"
        ],
        "hint": "Set total work to a convenient number so each rate is an integer.",
        "expl": "Step 1 — Total \\(= 72\\). Rates: A \\(= 2\\), B \\(= 3\\), C \\(= 4\\) units/day.\nStep 2 — Together \\(= 9\\) units/day; days \\(= \\frac{72}{9} = 8\\).\nAnswer: 8 (D).",
        "level": "easy"
      },
      {
        "n": 4,
        "topic": "Work & rate",
        "correct": "B",
        "options": 4,
        "text": "A needs 24 days and B needs 36 days. C is twice as efficient as A and B working together. How many days does C alone take?",
        "choices": [
          "\\(4\\tfrac15\\)",
          "\\(7\\tfrac15\\)",
          "\\(5\\tfrac15\\)",
          "\\(6\\tfrac15\\)"
        ],
        "hint": "Find A+B's combined rate, double it for C.",
        "expl": "Step 1 — Total \\(= 72\\): A \\(= 3\\), B \\(= 2\\) units/day, so A+B \\(= 5\\).\nStep 2 — C \\(= 2\\times5 = 10\\) units/day.\nStep 3 — C alone \\(= \\frac{72}{10} = 7\\tfrac15\\) days.\nAnswer: \\(7\\tfrac15\\) (B).",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Work & rate",
        "correct": "A",
        "options": 5,
        "text": "A and B together do a job in 30 days. C, working against them, can undo the whole job in 120 days. B and C together take 240 days. How long does A alone take?",
        "choices": [
          "48 days",
          "36 days",
          "60 days",
          "42 days",
          "66 days"
        ],
        "hint": "Treat C's destruction as a negative rate.",
        "expl": "Step 1 — Total \\(= 240\\): A+B \\(= 8\\), C \\(= -2\\) units/day.\nStep 2 — B+C \\(= 1\\Rightarrow B = 1 - (-2) = 3\\).\nStep 3 — A \\(= 8 - 3 = 5\\); A alone \\(= \\frac{240}{5} = 48\\) days.\nAnswer: 48 days (A).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Work & rate",
        "correct": "A",
        "options": 5,
        "text": "P, Q and R finish a job together and are paid $84,000. Alone they would take 12, 15 and 20 days respectively. What is P and Q's combined share?",
        "choices": [
          "$63,000",
          "$56,000",
          "$42,000",
          "$49,000",
          "$70,000"
        ],
        "hint": "Pay splits by efficiency (daily rate), not by days.",
        "expl": "Step 1 — Efficiency ratio \\(= \\frac{1}{12}:\\frac{1}{15}:\\frac{1}{20} = 5:4:3\\).\nStep 2 — P+Q share \\(= \\frac{5+4}{12}\\times84000 = \\frac{9}{12}\\times84000\\).\nStep 3 — \\(= 63000\\).\nAnswer: $63,000 (A).",
        "level": "medium"
      },
      {
        "n": 7,
        "topic": "Work & rate",
        "correct": "A",
        "options": 5,
        "text": "A, B and C finish a job in 6 days and are paid $480 total. If their efficiencies are in ratio 4 : 5 : 7, what is B's daily pay?",
        "choices": [
          "$25",
          "$30",
          "$20",
          "$40",
          "$45"
        ],
        "hint": "Daily total pay ÷ efficiency share.",
        "expl": "Step 1 — Daily pay \\(= \\frac{480}{6} = 80\\).\nStep 2 — B's share \\(= \\frac{5}{4+5+7}\\times80 = \\frac{5}{16}\\times80 = 25\\).\nAnswer: $25 (A).",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Work & rate",
        "correct": "A",
        "options": 5,
        "text": "24 men are set to finish a job in 35 days. After 20 days they have done only 50%. How many extra men are needed to finish on time?",
        "choices": [
          "8",
          "10",
          "12",
          "11",
          "13"
        ],
        "hint": "The two halves are equal work, so the man-days for each half are equal.",
        "expl": "Step 1 — First half: \\(24\\times20 = 480\\) man-days for 50% of the job.\nStep 2 — The remaining 50% must also equal 480 man-days, now over 15 days: \\((24+x)\\times15 = 480\\).\nStep 3 — \\(24 + x = 32\\Rightarrow x = 8\\).\nAnswer: 8 (A).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Work & rate",
        "correct": "A",
        "options": 5,
        "text": "10 men finish a job in 18 days; 15 women finish the same job in 24 days. 5 men and 6 women work for 10 days, then 5 men finish the rest. What is the total number of days?",
        "choices": [
          "30 days",
          "20 days",
          "26 days",
          "13 days",
          "36 days"
        ],
        "hint": "First convert women into man-equivalents.",
        "expl": "Step 1 — \\(10\\times18 = 15\\times24\\) in the respective units ⟹ \\(1\\) man \\(= 2\\) women.\nStep 2 — So \\(5\\) men + \\(6\\) women \\(= 5 + 3 = 8\\) men-equivalent. Total work \\(= 10\\times18 = 180\\) man-days.\nStep 3 — First 10 days: \\(8\\times10 = 80\\); remaining \\(100\\) by 5 men \\(= 20\\) days.\nStep 4 — Total \\(= 10 + 20 = 30\\) days.\nAnswer: 30 days (A).",
        "level": "medium"
      },
      {
        "n": 10,
        "topic": "Work & rate",
        "correct": "C",
        "options": 5,
        "text": "A job would take one man 11 days alone. Starting with one man, a new man joins each day; after the 8th day no more are added. In how many days is 4 times the original job completed?",
        "choices": [
          "11",
          "10",
          "9",
          "8",
          "12"
        ],
        "hint": "Day k has k men working (until day 8). Add up the man-days.",
        "expl": "Step 1 — 4× work \\(= 4\\times11 = 44\\) man-days.\nStep 2 — Days 1–8 give \\(1+2+\\dots+8 = 36\\) man-days.\nStep 3 — Remaining \\(8\\) man-days done on day 9 by the 8 men.\nStep 4 — Total \\(= 9\\) days.\nAnswer: 9 (C).",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Work & rate",
        "correct": "A",
        "options": 5,
        "text": "Together, Rashmi and Pallavi make a carpet in x days. Alone, Rashmi takes 3 days more than x and Pallavi takes 12 days more than x. How long does Rashmi take alone?",
        "choices": [
          "9 days",
          "6 days",
          "12 days",
          "8 days",
          "14 days"
        ],
        "hint": "Set 1/(x+3) + 1/(x+12) = 1/x and solve for x.",
        "expl": "Step 1 — \\(\\frac{1}{x+3} + \\frac{1}{x+12} = \\frac{1}{x}\\).\nStep 2 — Clearing gives \\(x^2 = 36\\Rightarrow x = 6\\).\nStep 3 — Rashmi alone \\(= x + 3 = 9\\) days.\nAnswer: 9 days (A).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Work & rate",
        "correct": "C",
        "options": 5,
        "text": "A alone can do half a job in 35 days. B takes as long to do one-third of the job as A takes to do one-quarter. How many days do A and B together take for the whole job?",
        "choices": [
          "35 days",
          "40 days",
          "30 days",
          "60 days",
          "65 days"
        ],
        "hint": "Get A's full time first, then translate B's condition into a rate ratio.",
        "expl": "Step 1 — A does half in 35 days ⟹ whole in 70 days.\nStep 2 — A does ¼ in \\(17.5\\) days; B does ⅓ in \\(17.5\\) days ⟹ B whole \\(= 52.5\\) days.\nStep 3 — Rates ratio A:B \\(= 3:4\\); together \\(\\frac{70\\times3}{7} = 30\\) days.\nAnswer: 30 days (C).",
        "level": "hard"
      },
      {
        "n": 13,
        "topic": "Work & rate",
        "correct": "C",
        "options": 5,
        "text": "B takes 4 times as long as A and C together; C takes 3 times as long as A and B together. If all three together finish in 20 days, how long does B alone take?",
        "choices": [
          "110 days",
          "80 days",
          "100 days",
          "90 days",
          "120 days"
        ],
        "hint": "\"B = 4×(A+C)\" in time means B's rate relates to the rest; convert to efficiencies.",
        "expl": "Step 1 — From the two conditions the efficiency ratio works out to A:B:C \\(= 11:4:5\\).\nStep 2 — Total work \\(= 20\\times(11+4+5) = 400\\) units.\nStep 3 — B alone \\(= \\frac{400}{4} = 100\\) days.\nAnswer: 100 days (C).",
        "level": "hard"
      },
      {
        "n": 14,
        "topic": "Work & rate",
        "correct": "C",
        "options": 5,
        "text": "A is \\(166\\tfrac23\\%\\) as efficient as B (i.e. 66⅔% more). Working together they complete \\(88\\tfrac89\\%\\) of the job in 10 days. How many days does B alone need for the whole job?",
        "choices": [
          "40",
          "25",
          "30",
          "35",
          "45"
        ],
        "hint": "Efficiency ratio A:B = 5:3 → days ratio 3:5.",
        "expl": "Step 1 — A:B efficiency \\(= 5:3\\). Let total \\(= 15k\\): A \\(= 5\\), B \\(= 3\\) units/day, together \\(8\\).\nStep 2 — \\(\\frac{8}{9}\\) of work in 10 days ⟹ \\(8\\times10 = \\frac{8}{9}\\times15k\\Rightarrow k = 6\\).\nStep 3 — B alone \\(= 5k = 30\\) days.\nAnswer: 30 (C).",
        "level": "hard"
      },
      {
        "n": 15,
        "topic": "Work & rate",
        "correct": "A",
        "options": 5,
        "text": "In 15 minutes Sunder can cut 112 onions, and Subhash is 125% as efficient. Working together, how long do they take to cut 4,200 onions?",
        "choices": [
          "4 h 10 min",
          "4 h 20 min",
          "4 h 50 min",
          "4 h 15 min",
          "5 h 10 min"
        ],
        "hint": "Find their combined onions-per-hour rate.",
        "expl": "Step 1 — Subhash cuts \\(1.25\\times112 = 140\\) per 15 min; together \\(252\\) per 15 min.\nStep 2 — Per hour \\(= 252\\times4 = 1008\\) onions.\nStep 3 — Time \\(= \\frac{4200}{1008} = 4\\tfrac16\\) h \\(=\\) 4 h 10 min.\nAnswer: 4 h 10 min (A).",
        "level": "medium"
      }
    ]
  },
  {
    "id": "quant-average-ex",
    "title": "Averages — Exercise",
    "section": "quant",
    "source": "Average exercise (with answers, hints & explanations)",
    "questions": [
      {
        "n": 1,
        "topic": "Weighted averages",
        "correct": "D",
        "options": 5,
        "text": "Of 40 boys, the average weight of 30 of them is 60 kg and of the remaining 10 is 56 kg. What is the average weight of the whole class?",
        "choices": [
          "58.5",
          "58",
          "57",
          "59",
          "59.5"
        ],
        "hint": "Weight by group size — total weight ÷ total count.",
        "expl": "Step 1 — Total \\(= 30\\times60 + 10\\times56 = 1800 + 560 = 2360\\).\nStep 2 — Average \\(= \\frac{2360}{40} = 59\\).\nAnswer: 59 (D).",
        "level": "easy"
      },
      {
        "n": 2,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 5,
        "text": "The average of six numbers is 3.95. Two of them average 3.4 and another two average 3.85. What is the average of the remaining two?",
        "choices": [
          "4.5",
          "4.6",
          "4.7",
          "4.8",
          "4.9"
        ],
        "hint": "Work with sums: subtract the known groups' sums from the total.",
        "expl": "Step 1 — Total \\(= 6\\times3.95 = 23.7\\).\nStep 2 — Remaining sum \\(= 23.7 - 2(3.4) - 2(3.85) = 23.7 - 6.8 - 7.7 = 9.2\\).\nStep 3 — Average \\(= \\frac{9.2}{2} = 4.6\\).\nAnswer: 4.6 (B).",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Mean, median & mode",
        "correct": "A",
        "options": 5,
        "text": "A picnic group averages 16 years. When 20 new people averaging 15 years join, the average becomes 15.5. How many were in the group originally?",
        "choices": [
          "20",
          "18",
          "22",
          "24",
          "26"
        ],
        "hint": "Set up total-age equation before and after the join.",
        "expl": "Step 1 — \\(\\frac{16x + 15\\cdot20}{x+20} = 15.5\\).\nStep 2 — \\(16x + 300 = 15.5x + 310\\Rightarrow 0.5x = 10\\).\nStep 3 — \\(x = 20\\).\nAnswer: 20 (A).",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Mean, median & mode",
        "correct": "C",
        "options": 5,
        "text": "The average age of 36 students is 14 years. Adding the teacher raises the average by 1 year. How old is the teacher?",
        "choices": [
          "31",
          "36",
          "51",
          "48",
          "56"
        ],
        "hint": "New total (37 people) minus old total gives the teacher's age.",
        "expl": "Step 1 — Teacher \\(= 37\\times15 - 36\\times14 = 555 - 504\\).\nStep 2 — \\(= 51\\).\nAnswer: 51 (C).",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 5,
        "text": "In his 12th innings a batsman scores 65 and raises his average by 2. What is his average after the 12th innings (he was never 'not out')?",
        "choices": [
          "42",
          "43",
          "44",
          "45",
          "46"
        ],
        "hint": "If the new average is x, the previous 11 averaged x−2.",
        "expl": "Step 1 — \\(12x = 11(x-2) + 65\\).\nStep 2 — \\(12x = 11x - 22 + 65\\Rightarrow x = 43\\).\nAnswer: 43 (B).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Mean, median & mode",
        "correct": "A",
        "options": 5,
        "text": "In the first 10 overs the run rate was 3.2. What rate is needed in the remaining 40 overs to reach a target of 282?",
        "choices": [
          "6.25",
          "6.50",
          "6.75",
          "7.00",
          "7.25"
        ],
        "hint": "Runs still needed ÷ overs remaining.",
        "expl": "Step 1 — Runs so far \\(= 10\\times3.2 = 32\\); needed \\(= 282 - 32 = 250\\).\nStep 2 — Rate \\(= \\frac{250}{40} = 6.25\\).\nAnswer: 6.25 (A).",
        "level": "medium"
      },
      {
        "n": 7,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 5,
        "text": "The average attendance for the first 4 days of a week is 30, and for the first 5 days is 32. What was the attendance on the 5th day?",
        "choices": [
          "32",
          "40",
          "38",
          "36",
          "42"
        ],
        "hint": "Difference of the two running totals.",
        "expl": "Step 1 — 5-day total \\(= 5\\times32 = 160\\); 4-day total \\(= 4\\times30 = 120\\).\nStep 2 — Day 5 \\(= 160 - 120 = 40\\).\nAnswer: 40 (B).",
        "level": "easy"
      },
      {
        "n": 8,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 5,
        "text": "A batsman scores 87 in his 17th innings and raises his average by 3. What is his average after the 17th innings?",
        "choices": [
          "36",
          "39",
          "42",
          "45",
          "48"
        ],
        "hint": "Previous 16 innings averaged (x−3) if x is the new average.",
        "expl": "Step 1 — \\(16(x-3) + 87 = 17x\\).\nStep 2 — \\(16x - 48 + 87 = 17x\\Rightarrow x = 39\\).\nAnswer: 39 (B).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Mean, median & mode",
        "correct": "D",
        "options": 5,
        "text": "A student's average is 63 per paper. With 20 more marks in Geography and 2 more in History, the average would be 65. How many papers were there?",
        "choices": [
          "8",
          "9",
          "10",
          "11",
          "12"
        ],
        "hint": "The extra 22 marks raise the average by 2 across all papers.",
        "expl": "Step 1 — \\(63x + 22 = 65x\\).\nStep 2 — \\(2x = 22\\Rightarrow x = 11\\).\nAnswer: 11 (D).",
        "level": "medium"
      },
      {
        "n": 10,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 5,
        "text": "A hostel has 35 students. When 7 more join, daily mess expenses rise by $42 but the average per head drops by $1. What was the original daily expenditure?",
        "choices": [
          "$400",
          "$420",
          "$445",
          "$465",
          "$485"
        ],
        "hint": "Let original average be x; write the new average two ways.",
        "expl": "Step 1 — Original total \\(= 35x\\); new total \\(= 35x + 42\\) over 42 heads at \\(x-1\\).\nStep 2 — \\(35x + 42 = 42(x-1)\\Rightarrow 35x + 42 = 42x - 42\\).\nStep 3 — \\(7x = 84\\Rightarrow x = 12\\); original \\(= 35\\times12 = 420\\).\nAnswer: $420 (B).",
        "level": "hard"
      },
      {
        "n": 11,
        "topic": "Weighted averages",
        "correct": "B",
        "options": 4,
        "text": "A class of 45 averages 52 kg. Five students averaging 48 kg leave and five averaging 54 kg join. What is the new average weight?",
        "choices": [
          "52.6 kg",
          "\\(52\\tfrac23\\) kg",
          "\\(52\\tfrac13\\) kg",
          "53 kg"
        ],
        "hint": "Adjust the total by what left and what joined.",
        "expl": "Step 1 — New total \\(= 45\\times52 - 5\\times48 + 5\\times54 = 2340 - 240 + 270 = 2370\\).\nStep 2 — Average \\(= \\frac{2370}{45} = 52\\tfrac23\\) kg.\nAnswer: \\(52\\tfrac23\\) kg (B).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 5,
        "text": "The average temperature for Mon–Tue–Wed was 55°, and for Tue–Wed–Thu was 60°. If Thursday was 56°, what was Monday's temperature?",
        "choices": [
          "39°",
          "41°",
          "45°",
          "43°",
          "47 °"
        ],
        "hint": "Subtract the overlapping (Tue+Wed) from each triple.",
        "expl": "Step 1 — Mon+Tue+Wed \\(= 165\\); Tue+Wed+Thu \\(= 180\\).\nStep 2 — Tue+Wed \\(= 180 - 56 = 124\\).\nStep 3 — Mon \\(= 165 - 124 = 41\\).\nAnswer: 41° (B).",
        "level": "medium"
      },
      {
        "n": 13,
        "topic": "Weighted averages",
        "correct": "B",
        "options": 5,
        "text": "One section of 20 students averages 66% and another of 15 students averages 70%. What is the combined average?",
        "choices": [
          "66.7%",
          "67.7%",
          "68.7%",
          "69.7%",
          "70.7%"
        ],
        "hint": "Weight each average by its section size.",
        "expl": "Step 1 — \\(\\frac{20\\times66 + 15\\times70}{35} = \\frac{1320 + 1050}{35} = \\frac{2370}{35}\\).\nStep 2 — \\(= 67.7\\%\\).\nAnswer: 67.7% (B).",
        "level": "medium"
      },
      {
        "n": 14,
        "topic": "Weighted averages",
        "correct": "C",
        "options": 5,
        "text": "A taxi averages 40 km/h for 60% of a journey's distance, 30 km/h for 20%, and 10 km/h for the last 20%. What is the average speed for the whole journey?",
        "choices": [
          "25 km/h",
          "26 km/h",
          "24 km/h",
          "30 km/h",
          "31 km/h"
        ],
        "hint": "Average speed = total distance ÷ total time; use a convenient total distance.",
        "expl": "Step 1 — For distance D, time \\(= \\frac{0.6D}{40} + \\frac{0.2D}{30} + \\frac{0.2D}{10} = 0.015D + 0.00667D + 0.02D = 0.04167D\\).\nStep 2 — Average \\(= \\frac{D}{0.04167D} = 24\\) km/h.\nAnswer: 24 km/h (C).",
        "level": "hard"
      },
      {
        "n": 15,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 4,
        "text": "The average of 5 consecutive integers is n. If the next two consecutive integers are also included, the average of the 7 numbers will:",
        "choices": [
          "increase by 2",
          "increase by 1",
          "remain the same",
          "increase by 1.4"
        ],
        "hint": "For consecutive integers the average is the middle value.",
        "expl": "Step 1 — Five consecutive: \\(n-2,\\dots,n+2\\), average \\(= n\\).\nStep 2 — Seven consecutive: \\(n-2,\\dots,n+4\\), average \\(= n+1\\) (the new middle).\nAnswer: increase by 1 (B).",
        "level": "medium"
      }
    ]
  },
  {
    "id": "quant-mixture-ex",
    "title": "Mixtures & Alligation — Exercise",
    "section": "quant",
    "source": "Mixture & Alligation exercise (with answers & explanations)",
    "questions": [
      {
        "n": 1,
        "topic": "Mixtures & solutions",
        "correct": "B",
        "options": 4,
        "text": "Gold is 19 times as heavy as water and copper 9 times. In what ratio (gold : copper) must they be mixed so the result is 15 times as heavy as water?",
        "choices": [
          "2 : 3",
          "3 : 2",
          "1 : 3",
          "2 : 1"
        ],
        "hint": "Alligation: distances from the mean are inversely proportional to amounts.",
        "expl": "Step 1 — Around mean 15: gold is 4 above (19), copper is 6 below (9).\nStep 2 — Amounts are inverse to distances: gold : copper \\(= 6 : 4 = 3 : 2\\).\nAnswer: 3 : 2 (B).",
        "level": "medium"
      },
      {
        "n": 2,
        "topic": "Mixtures & solutions",
        "correct": "C",
        "options": 5,
        "text": "6 litres of a 20% alcohol solution are mixed with 4 litres of a 60% alcohol solution. What is the alcohol strength of the mixture?",
        "choices": [
          "80%",
          "40%",
          "36%",
          "48%",
          "88%"
        ],
        "hint": "Total alcohol ÷ total volume.",
        "expl": "Step 1 — Alcohol \\(= 0.20\\times6 + 0.60\\times4 = 1.2 + 2.4 = 3.6\\) L in 10 L.\nStep 2 — Strength \\(= \\frac{3.6}{10}\\times100 = 36\\%\\).\nAnswer: 36% (C).",
        "level": "easy"
      },
      {
        "n": 3,
        "topic": "Mixtures & solutions",
        "correct": "C",
        "options": 5,
        "text": "80 kg of tea at $15/kg is mixed with 20 kg at $20/kg. To earn 25% profit, at what price per kg should the mix be sold?",
        "choices": [
          "$23.75",
          "$22",
          "$20",
          "$19.20",
          "$25.50"
        ],
        "hint": "Find the blended cost, then add 25%.",
        "expl": "Step 1 — Cost \\(= \\frac{80\\times15 + 20\\times20}{100} = \\frac{1600}{100} = 16\\).\nStep 2 — SP \\(= 1.25\\times16 = 20\\).\nAnswer: $20 (C).",
        "level": "easy"
      },
      {
        "n": 4,
        "topic": "Mixtures & solutions",
        "correct": "C",
        "options": 4,
        "text": "Two tea varieties costing $20/kg and $25/kg are blended in ratio 5 : 4 and sold at $23/kg. What is the profit percent?",
        "choices": [
          "5% profit",
          "3.5% loss",
          "3.5% profit",
          "No profit, no loss"
        ],
        "hint": "Weighted cost per kg vs. selling price.",
        "expl": "Step 1 — Cost \\(= \\frac{5\\times20 + 4\\times25}{9} = \\frac{200}{9} \\approx 22.22\\).\nStep 2 — Profit% \\(= \\frac{23 - 22.22}{22.22}\\times100 \\approx 3.5\\%\\).\nAnswer: 3.5% profit (C).",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Mixtures & solutions",
        "correct": "A",
        "options": 5,
        "text": "A chemist has 10 litres of a 10% nitric-acid solution. How much water must be added to dilute it to 4% strength?",
        "choices": [
          "15 L",
          "20 L",
          "18 L",
          "25 L",
          "28 L"
        ],
        "hint": "The amount of acid stays fixed; only water increases.",
        "expl": "Step 1 — Acid \\(= 10\\%\\times10 = 1\\) L (constant).\nStep 2 — \\(4\\%\\times(10 + x) = 1\\Rightarrow 10 + x = 25\\).\nStep 3 — \\(x = 15\\) L.\nAnswer: 15 L (A).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Mixtures & solutions",
        "correct": "D",
        "options": 5,
        "text": "How many millilitres of water must be added to 9 ml of aftershave containing 50% alcohol to make it 30% alcohol?",
        "choices": [
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "hint": "Alcohol amount is fixed; solve for the new total volume.",
        "expl": "Step 1 — Alcohol \\(= 0.50\\times9 = 4.5\\) ml.\nStep 2 — \\(0.30\\times(9 + x) = 4.5\\Rightarrow 9 + x = 15\\).\nStep 3 — \\(x = 6\\) ml.\nAnswer: 6 (D).",
        "level": "easy"
      },
      {
        "n": 7,
        "topic": "Mixtures & solutions",
        "correct": "B",
        "options": 5,
        "text": "55 litres of adulterated milk has milk : water = 7 : 4. How much water must be added to make it 7 : 6?",
        "choices": [
          "5 L",
          "10 L",
          "15 L",
          "25 L",
          "30 L"
        ],
        "hint": "Milk stays fixed; find the water needed for the new ratio.",
        "expl": "Step 1 — Milk \\(= \\frac{7}{11}\\times55 = 35\\) L; water \\(= 20\\) L.\nStep 2 — For 7 : 6 with milk 35, water \\(= \\frac{6}{7}\\times35 = 30\\) L.\nStep 3 — Add \\(30 - 20 = 10\\) L.\nAnswer: 10 L (B).",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Mixtures & solutions",
        "correct": "C",
        "options": 4,
        "text": "Alloys A and B have gold : copper in ratios 7 : 2 and 7 : 11. Equal quantities are melted into alloy C. What is gold : copper in C?",
        "choices": [
          "5 : 7",
          "5 : 9",
          "7 : 5",
          "9 : 5"
        ],
        "hint": "Take equal amounts (LCM of 9 and 18) and add the gold and copper parts.",
        "expl": "Step 1 — Per 18 units of each: A has gold 14, copper 4; B has gold 7, copper 11.\nStep 2 — Gold \\(= 21\\), copper \\(= 15\\).\nStep 3 — Ratio \\(= 21 : 15 = 7 : 5\\).\nAnswer: 7 : 5 (C).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Mixtures & solutions",
        "correct": "C",
        "options": 5,
        "text": "A can holds liquids A and B in ratio 7 : 5. When 9 litres are drawn off and the can is refilled with B, the ratio becomes 7 : 9. How many litres of A did the can hold originally?",
        "choices": [
          "10",
          "20",
          "21",
          "25",
          "29"
        ],
        "hint": "Removing mixture keeps the A:B ratio; then only B is added.",
        "expl": "Step 1 — Let A \\(= 7x\\), B \\(= 5x\\), total \\(12x\\). Drawing 9 removes \\(\\frac{7}{12}\\cdot9\\) of A.\nStep 2 — A left \\(= 7x - \\frac{63}{12}\\); setting the new ratio \\(\\frac{A}{B}=\\frac{7}{9}\\) solves to \\(x = 3\\).\nStep 3 — A originally \\(= 7\\times3 = 21\\) L.\nAnswer: 21 (C).",
        "level": "hard"
      },
      {
        "n": 10,
        "topic": "Mixtures & solutions",
        "correct": "B",
        "options": 5,
        "text": "A jar of whisky is 40% alcohol. Part is replaced by whisky that is 19% alcohol, giving 26% overall. What fraction was replaced?",
        "choices": [
          "1/3",
          "2/3",
          "2/5",
          "3/5",
          "4 /3"
        ],
        "hint": "Alligation of the two strengths around the final 26%.",
        "expl": "Step 1 — Around mean 26: original (40) is 14 above, added (19) is 7 below.\nStep 2 — Original : added \\(= 7 : 14 = 1 : 2\\).\nStep 3 — Replaced (added) fraction \\(= \\frac{2}{3}\\).\nAnswer: 2/3 (B).",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Mixtures & solutions",
        "correct": "B",
        "options": 5,
        "text": "How many kg of custard powder at $40/kg must be mixed with 16 kg at $55/kg so that selling the mix at $60/kg gives 25% profit?",
        "choices": [
          "11 kg",
          "14 kg",
          "12 kg",
          "20 kg",
          "22 kg"
        ],
        "hint": "Find the mixture's required cost, then apply alligation.",
        "expl": "Step 1 — Cost of mix \\(= \\frac{60}{1.25} = 48\\).\nStep 2 — Alligation around 48: cheaper(40) : dearer(55) \\(= (55-48):(48-40) = 7:8\\).\nStep 3 — \\(\\frac{40\\text{-powder}}{16} = \\frac{7}{8}\\Rightarrow 40\\text{-powder} = 14\\) kg.\nAnswer: 14 kg (B).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Mixtures & solutions",
        "correct": "B",
        "options": 5,
        "text": "From a 50-litre cask full of milk, 10 litres are drawn and replaced with water. This is done twice. How much milk remains?",
        "choices": [
          "20 litres",
          "32 litres",
          "25 litres",
          "30 litres",
          "37 litres"
        ],
        "hint": "Each replacement multiplies the milk by (1 − 10/50).",
        "expl": "Step 1 — Milk left \\(= 50\\left(1 - \\frac{10}{50}\\right)^2 = 50(0.8)^2\\).\nStep 2 — \\(= 50\\times0.64 = 32\\) litres.\nAnswer: 32 litres (B).",
        "level": "medium"
      },
      {
        "n": 13,
        "topic": "Mixtures & solutions",
        "correct": "C",
        "options": 5,
        "text": "From a 54-litre vessel full of acid, some is drawn off and replaced with water; the same is repeated once more, leaving 24 litres of pure acid. How much acid was drawn off each time?",
        "choices": [
          "12 L",
          "16 L",
          "18 L",
          "24 L",
          "28 L"
        ],
        "hint": "Use 54(1 − y/54)² = 24.",
        "expl": "Step 1 — \\(54\\left(1 - \\frac{y}{54}\\right)^2 = 24\\Rightarrow \\left(1 - \\frac{y}{54}\\right)^2 = \\frac{4}{9}\\).\nStep 2 — \\(1 - \\frac{y}{54} = \\frac{2}{3}\\Rightarrow \\frac{y}{54} = \\frac{1}{3}\\).\nStep 3 — \\(y = 18\\) L.\nAnswer: 18 L (C).",
        "level": "medium"
      },
      {
        "n": 14,
        "topic": "Mixtures & solutions",
        "correct": "B",
        "options": 5,
        "text": "A tank is filled with A, then refilled with B each time it is half-empty, alternating A, B, A, B. After four fills, what percent of the tank is A-type?",
        "choices": [
          "33.5%",
          "37.5%",
          "40%",
          "50%",
          "54.0%"
        ],
        "hint": "Track A through each half-emptying (each halves the current A).",
        "expl": "Step 1 — Start 100% A. Half-empty + fill B → 50 A. Again + A → 75 A. Again + B → 37.5 A. Again + B → the last fill... tracking gives A = 37.5.\nStep 2 — Working the four steps: 100 → 50 → 75 → 37.5% A.\nAnswer: 37.5% (B).",
        "level": "hard"
      }
    ]
  },
  {
    "id": "di-datasufficiency-ex",
    "title": "Data Sufficiency — Exercise",
    "section": "data",
    "source": "Data Sufficiency practice (value, yes/no, and classic traps)",
    "questions": [
      {
        "n": 1,
        "topic": "Value questions",
        "correct": "D",
        "options": 5,
        "text": "If today the price of an item is $3,600, what was its price exactly 2 years ago?\n(1) The price increased by 10 percent per year during this 2-year period.\n(2) Today the price is 1.21 times its price exactly 2 years ago.",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "For a value question, each statement is sufficient only if it pins down one number.",
        "expl": "Step 1 — (1): \\(3600 = P(1.1)^2\\) gives a unique P — sufficient.\nStep 2 — (2): \\(3600 = 1.21P\\) gives a unique P — sufficient.\nStep 3 — Each alone works.\nAnswer: D.",
        "level": "easy"
      },
      {
        "n": 2,
        "topic": "Common traps & C-trap",
        "correct": "C",
        "options": 5,
        "text": "What is the value of x?\n(1) x² = 36\n(2) x is negative.",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "A squared value has two roots — watch the sign.",
        "expl": "Step 1 — (1): \\(x = \\pm6\\) — not unique.\nStep 2 — (2): x negative — not unique.\nStep 3 — Together: \\(x = -6\\) — unique.\nAnswer: C.",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Yes / No questions",
        "correct": "D",
        "options": 5,
        "text": "Is n equal to zero?\n(1) The product of n and some nonzero number is 0.\n(2) The sum of n and 0 is 0.",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "Each statement forces n to a single value.",
        "expl": "Step 1 — (1): \\(n\\times(\\text{nonzero}) = 0\\Rightarrow n = 0\\) — definite YES.\nStep 2 — (2): \\(n + 0 = 0\\Rightarrow n = 0\\) — definite YES.\nAnswer: D.",
        "level": "easy"
      },
      {
        "n": 4,
        "topic": "Common traps & C-trap",
        "correct": "C",
        "options": 5,
        "text": "Is x even?\n(1) 7x is even.\n(2) 5x is even.",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "Don't assume x is an integer.",
        "expl": "Step 1 — (1): 7x even is true for x = 0 (even) but also x = 2/7 (not even) — not sufficient.\nStep 2 — (2): same issue with x = 2/5 — not sufficient.\nStep 3 — Together, both 7x and 5x even forces x to be an even integer — definite YES.\nAnswer: C.",
        "level": "hard"
      },
      {
        "n": 5,
        "topic": "Value questions",
        "correct": "E",
        "options": 5,
        "text": "Every object in a box is either a sphere or a cube, and either red or green. How many objects are in the box?\n(1) There are 6 cubes and 5 green objects.\n(2) There are 2 red spheres.",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "Try to fill a 2×2 grid (sphere/cube × red/green) — is every cell determined?",
        "expl": "Step 1 — Even combining, we know 6 cubes, 5 green, 2 red spheres — but green spheres and red cubes stay unknown.\nStep 2 — The total can't be pinned down.\nAnswer: E.",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Yes / No questions",
        "correct": "C",
        "options": 5,
        "text": "If a and b are 3-digit integers, is the units digit of the product a×b greater than 5?\n(1) The units digit of a is 4.\n(2) The units digit of b is 7.",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "The units digit of a product depends only on the units digits.",
        "expl": "Step 1 — (1) alone: 4 × (unknown) varies — not sufficient. (2) alone: similarly not sufficient.\nStep 2 — Together: units of 4 × 7 = 28 → 8, and 8 > 5 — definite YES.\nAnswer: C.",
        "level": "medium"
      },
      {
        "n": 7,
        "topic": "Common traps & C-trap",
        "correct": "B",
        "options": 5,
        "text": "Mary's salary is the highest of three. The difference between Mary and Jim equals twice the difference between Mary and Kate. What is the average of the three salaries?\n(1) Jim's salary is $30,000.\n(2) Kate's salary is $40,000.",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "Simplify the condition first — the average may equal one person's salary.",
        "expl": "Step 1 — M − J = 2(M − K) ⟹ M + J = 2K, so the average \\(\\frac{M+J+K}{3} = \\frac{3K}{3} = K\\).\nStep 2 — The average is exactly Kate's salary, so (2) alone is sufficient; (1) isn't.\nAnswer: B.",
        "level": "hard"
      },
      {
        "n": 8,
        "topic": "Common traps & C-trap",
        "correct": "B",
        "options": 5,
        "text": "What is the value of a − b?\n(1) a + 2b = 11\n(2) 4a + b = 5b + 8",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "Simplify statement (2) before deciding.",
        "expl": "Step 1 — (2): \\(4a + b = 5b + 8\\Rightarrow 4a - 4b = 8\\Rightarrow a - b = 2\\) — sufficient.\nStep 2 — (1) alone can't give a − b.\nAnswer: B.",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Common traps & C-trap",
        "correct": "B",
        "options": 5,
        "text": "What is the value of a² − b²?\n(1) a + b = 16\n(2) a − b = 0",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "Factor: a² − b² = (a − b)(a + b).",
        "expl": "Step 1 — (2): \\(a - b = 0\\Rightarrow (a-b)(a+b) = 0\\) regardless of a+b — sufficient (value is 0).\nStep 2 — (1) alone gives a+b but not the product.\nAnswer: B.",
        "level": "medium"
      },
      {
        "n": 10,
        "topic": "Yes / No questions",
        "correct": "D",
        "options": 5,
        "text": "Is 5^(x+2) / 25 < 1 ?\n(1) 5^x < 1\n(2) x < 0",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "Simplify the question stem first.",
        "expl": "Step 1 — \\(\\frac{5^{x+2}}{25} = 5^x\\), so the question is just: is \\(5^x < 1\\)?\nStep 2 — (1) says exactly that — YES. (2): x < 0 ⟹ \\(5^x < 1\\) — YES.\nAnswer: D.",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Common traps & C-trap",
        "correct": "E",
        "options": 5,
        "text": "What is the value of a?\n(1) 6a − 14b = 10\n(2) 21b = 9a − 15",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "Simplify both — are they really two different equations?",
        "expl": "Step 1 — (1): \\(6a - 14b = 10\\Rightarrow 3a - 7b = 5\\).\nStep 2 — (2): \\(21b = 9a - 15\\Rightarrow 3a - 7b = 5\\) — the same equation.\nStep 3 — One equation, two unknowns even together — not sufficient.\nAnswer: E.",
        "level": "hard"
      },
      {
        "n": 12,
        "topic": "Yes / No questions",
        "correct": "B",
        "options": 5,
        "text": "Is a > 5?\n(1) a < 6\n(2) a < 4",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "a need not be an integer.",
        "expl": "Step 1 — (1): a < 6 allows 5.5 (YES) and 4 (NO) — not sufficient.\nStep 2 — (2): a < 4 is always ≤ 5 — definite NO — sufficient.\nAnswer: B.",
        "level": "medium"
      },
      {
        "n": 13,
        "topic": "Common traps & C-trap",
        "correct": "A",
        "options": 5,
        "text": "Is a > b?\n(1) −4a + 2b < b − 3a\n(2) ca > cb",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "Don't divide by a variable whose sign you don't know.",
        "expl": "Step 1 — (1): \\(-4a + 2b < b - 3a\\Rightarrow b < a\\) — definite YES — sufficient.\nStep 2 — (2): dividing by c needs its sign; if c < 0 the inequality flips — not sufficient.\nAnswer: A.",
        "level": "hard"
      },
      {
        "n": 14,
        "topic": "Common traps & C-trap",
        "correct": "B",
        "options": 5,
        "text": "Shank bought 3 books at an average price of $15. What was the median price?\n(1) The maths book cost $13.\n(2) The history book cost $15.",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "The three prices sum to $45; what does a book priced at the mean force?",
        "expl": "Step 1 — Sum = 45. (1): with one book $13 the median varies (e.g. 13,14,18 vs 12,13,20) — not sufficient.\nStep 2 — (2): one book = 15 (the mean); the other two sum to 30, so one is ≤15 and one ≥15 — the median is always 15 — sufficient.\nAnswer: B.",
        "level": "hard"
      },
      {
        "n": 15,
        "topic": "Common traps & C-trap",
        "correct": "A",
        "options": 5,
        "text": "A jeweler first offered a bracelet at a price giving a 40% profit on cost. What was the original cost?\n(1) After cutting that asking price by 10%, the bracelet sold at a profit of $403.\n(2) The bracelet sold for $1,953.",
        "choices": [
          "(1) ALONE sufficient, (2) alone not",
          "(2) ALONE sufficient, (1) alone not",
          "BOTH together sufficient, neither alone",
          "EACH alone sufficient",
          "Together still NOT sufficient"
        ],
        "hint": "Statement (2) alone: do we know what profit % the final sale represents?",
        "expl": "Step 1 — (1): asking = 1.4·cost; sold at 90% of asking; profit $403 gives one equation in cost — solvable, sufficient.\nStep 2 — (2): $1,953 alone doesn't tell us the profit rate actually realized (the 40% was only the initial ask) — not sufficient.\nAnswer: A.",
        "level": "hard"
      }
    ]
  },
  {
    "id": "cr-inference",
    "title": "Inference — Must Be True",
    "section": "cr",
    "source": "CR practice — inference — must be true",
    "questions": [
      {
        "n": 1,
        "topic": "Inference / must be true",
        "correct": "D",
        "options": 5,
        "text": "Ten years ago, taxpayers in Greenspace County slightly outnumbered registered voters. Since then taxpayers doubled (up 100%), while registered voters increased but by less than 100%. Which must be true now?",
        "choices": [
          "Taxpayers are now fewer than registered voters.",
          "Every registered voter is also a taxpayer.",
          "The ratio of registered voters to taxpayers has increased.",
          "The ratio of taxpayers to voters has increased over the last ten years.",
          "The ratio of voters to taxpayers is unchanged."
        ],
        "hint": "Taxpayers grew faster than voters from a larger starting base.",
        "expl": "Taxpayers started higher and grew 100%; voters grew less. So taxpayers grew faster, and the taxpayer-to-voter ratio must have risen.\nAnswer: D.",
        "level": "medium"
      },
      {
        "n": 2,
        "topic": "Inference / must be true",
        "correct": "B",
        "options": 5,
        "text": "All adults in country X consume increasing amounts of fat as they age, yet the percentage of fat in their diet stays constant throughout adult life. Which is most strongly supported?",
        "choices": [
          "They consume more fat than same-age people in other countries.",
          "They eat more (total food) when older than earlier in adulthood.",
          "Their diets have a lower fat percentage than children's diets in X.",
          "They eat more varied foods as they age.",
          "They tend to lose weight as they age."
        ],
        "hint": "Fat amount rises but fat's share of the diet is constant — so what must the total do?",
        "expl": "If fat grams increase while fat stays the same fraction of the diet, total food intake must be increasing.\nAnswer: B.",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Inference / must be true",
        "correct": "E",
        "options": 5,
        "text": "Half of Metroburg's budget comes from a 2% tax on salaries of people who work in the city (only public- and private-sector employees). A large private employer will relocate out, taking all its employees; all other public and private employee counts stay constant. Which can be concluded?",
        "choices": [
          "Unless others add many jobs, the move will cut the city's operating-budget revenue by 1 percent.",
          "The departure will not raise unemployment among city residents.",
          "The company will pay lower taxes at its new location.",
          "The city's tax revenue will decline by 1 percent if jobs aren't replaced.",
          "The relocation will increase the percentage of Metroburg jobs that are public-sector."
        ],
        "hint": "Public jobs stay the same; total private jobs fall — what happens to the public share?",
        "expl": "Private-sector jobs drop while public-sector jobs stay constant, so public jobs become a larger share of the remaining total. (The revenue claims overstate a precise 1% — salaries, not headcount, drive the 2% tax.)\nAnswer: E.",
        "level": "hard"
      },
      {
        "n": 4,
        "topic": "Inference / must be true",
        "correct": "C",
        "options": 5,
        "text": "A library's copiers cost 10¢/copy. It will add prepaid cards allowing up to 50 copies at 9¢/copy. The number of copies made will be unchanged after the refit. Which is most supported?",
        "choices": [
          "No patron will increase their copier usage after the refit.",
          "The number of people using the copiers will fall.",
          "Revenue will increase if every purchased card is always used to less than 90% of capacity.",
          "Patrons will buy a card only on days they need 50+ copies.",
          "Revenue will increase if no patron prefers the remaining coin machines."
        ],
        "hint": "A 50-copy card costs $4.50 (50×9¢); think about the effective per-copy price if under-used.",
        "expl": "A card is prepaid for 50 copies ($4.50). If used to under 90% of capacity (fewer than 45 copies), the effective price exceeds 10¢/copy, so revenue rises versus coins.\nAnswer: C.",
        "level": "hard"
      },
      {
        "n": 5,
        "topic": "Inference / must be true",
        "correct": "E",
        "options": 5,
        "text": "Most people invest without doing their own research; some rely only on a broker, some go on hunches, and some do their own research. Nonetheless, a majority of investors make a profit. Which must be true?",
        "choices": [
          "Most investors either rely solely on a broker or go on hunches.",
          "All who invest without any research make a profit.",
          "Most who rely solely on a broker make a profit.",
          "All who do their own research make a profit.",
          "Some who make a profit do so without doing any research of their own."
        ],
        "hint": "Most do no research; a majority profit — the two big groups must overlap.",
        "expl": "Most investors do no research and a majority profit; two majorities of the same set must overlap, so some profitable investors did no research.\nAnswer: E.",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Inference / must be true",
        "correct": "A",
        "options": 5,
        "text": "In medieval Spain most gold coins used Senegalese gold, the purest known at 92%, minted without refining. Mints also regularly refined gold to make purer coins, but Senegalese gold was never refined. Which is most supported about coins minted there?",
        "choices": [
          "Some refined gold coins came from unrefined gold that was less than 92% pure.",
          "Coins from Senegalese gold all had the same weight and proportion of gold.",
          "Coins had the same monetary value despite differing gold percentages.",
          "All minted gold coins had less than 92% gold.",
          "The only unrefined gold that could be minted directly was non-Senegalese."
        ],
        "hint": "Refining raises purity; Senegalese (92%, purest) was never refined. So what was refined?",
        "expl": "Refining was done to gold other than the Senegalese (which was purest and left unrefined). Since Senegalese at 92% was the purest known, the refined gold started below 92%.\nAnswer: A.",
        "level": "hard"
      },
      {
        "n": 7,
        "topic": "Inference / must be true",
        "correct": "B",
        "options": 5,
        "text": "Mashika: Some segments of the electorate support Ms. Puerta. If those segments also support Mr. Quintana, then no segment supporting Quintana supports Mr. Ramirez. Salim: But the latest data shows some segments support both Quintana and Ramirez. Which is most reasonable to infer?",
        "choices": [
          "All segments support neither Quintana nor Ramirez.",
          "There are segments that support Ms. Puerta but not Mr. Quintana.",
          "Each segment strongly supports Ms. Puerta.",
          "Each segment strongly supports Mr. Quintana.",
          "Each segment strongly supports Mr. Ramirez."
        ],
        "hint": "Salim contradicts the consequent, so the antecedent (Puerta-segments also support Quintana) must fail.",
        "expl": "Salim shows some Quintana supporters do support Ramirez, contradicting Mashika's conclusion. So Mashika's condition (Puerta-supporting segments also support Quintana) is false — i.e., some segments support Puerta but not Quintana.\nAnswer: B.",
        "level": "hard"
      }
    ]
  },
  {
    "id": "cr-conditional",
    "title": "Conditional Reasoning",
    "section": "cr",
    "source": "CR practice — conditional reasoning",
    "questions": [
      {
        "n": 1,
        "topic": "Inference / must be true",
        "correct": "B",
        "options": 5,
        "text": "Unless residents band together, the rezoning proposal passes. If it passes, the city can build water/sewer systems developers need for apartments. Apartments attract residents; the higher population will congest roads so new roads get built. Neither new roads nor new schools can be built without substantial tax increases. Which can be properly concluded?",
        "choices": [
          "If residents band together, developers will not build apartments.",
          "If developers build apartments, there will be substantial tax increases.",
          "If the proposal fails, residents' taxes will not rise substantially.",
          "If developers do not build apartments, taxes will not rise substantially.",
          "If developers do not build apartments, roads will not be congested."
        ],
        "hint": "Follow the forward chain from 'apartments built'.",
        "expl": "Apartments → more residents → congested roads → new roads; new roads require substantial tax increases. So building apartments forces substantial tax increases.\nAnswer: B.",
        "level": "hard"
      },
      {
        "n": 2,
        "topic": "Inference / must be true",
        "correct": "D",
        "options": 5,
        "text": "Interior decorator: All coffeehouses and restaurants are public places. Most well-designed public places feature artwork. If a public place is uncomfortable it is not well designed, and all comfortable public places have spacious interiors. If all statements are true, which must be true?",
        "choices": [
          "Any restaurant with a spacious interior is comfortable.",
          "Most public places featuring artwork are well designed.",
          "Most well-designed coffeehouses feature artwork.",
          "Any well-designed coffeehouse or restaurant has a spacious interior.",
          "Any coffeehouse with a spacious interior is well designed."
        ],
        "hint": "Chain: well designed → comfortable → spacious.",
        "expl": "'Uncomfortable → not well designed' contrapositive gives 'well designed → comfortable', and 'comfortable → spacious'. Coffeehouses/restaurants are public places, so any well-designed one has a spacious interior.\nAnswer: D.",
        "level": "hard"
      },
      {
        "n": 3,
        "topic": "Inference / must be true",
        "correct": "E",
        "options": 5,
        "text": "None of the students taking literature are taking physics, but several taking physics are taking art. Also, none taking rhetoric are taking physics. Which follows logically?",
        "choices": [
          "There are students taking both art and literature.",
          "None of the literature students are taking art.",
          "There are students taking rhetoric but not literature.",
          "None of the rhetoric students are taking literature.",
          "Some students are taking art but not literature."
        ],
        "hint": "The physics-and-art students can't be literature students.",
        "expl": "Several physics students take art; since no literature student takes physics, those art-takers aren't literature students — so some students take art but not literature.\nAnswer: E.",
        "level": "medium"
      }
    ]
  },
  {
    "id": "cr-weaken",
    "title": "Weaken the Argument",
    "section": "cr",
    "source": "CR practice — weaken the argument",
    "questions": [
      {
        "n": 1,
        "topic": "Weaken",
        "correct": "D",
        "options": 5,
        "text": "Five years ago the death rate from cattle disease CXC was 5% of reported cases; today it is over 18%. Therefore the number of cows dying of CXC has increased. Which most weakens the argument?",
        "choices": [
          "Recent CXC deaths have been mistakenly attributed to a disease that mimics CXC.",
          "During the first outbreak, many deaths reported as CXC were due to other causes.",
          "An inoculation program 70% effective at preventing serious illness recently began.",
          "Since the first outbreak, farmers treat mild cases themselves and no longer report them.",
          "Cattle that survive CXC rarely contract it a second time."
        ],
        "hint": "A higher death-rate percentage can come from a shrinking denominator (reported cases).",
        "expl": "Rate = deaths ÷ reported cases. If mild cases are no longer reported (D), the denominator shrinks, so the percentage rises even if the number of deaths did not increase.\nAnswer: D.",
        "level": "medium"
      },
      {
        "n": 2,
        "topic": "Weaken",
        "correct": "D",
        "options": 5,
        "text": "Waste companies report that plastics make up an ever-increasing percentage of the waste they handle, so the amount of plastic reaching landfills is increasing. Which most weakens the argument?",
        "choices": [
          "Plastics create pollutants when burned, so more are sent to landfills than incinerators.",
          "Most plastics disposed of are not recyclable.",
          "People reuse plastic containers more than glass or metal ones.",
          "An increasing proportion of non-plastic waste is now recycled and no longer reaches disposal.",
          "The percentage of products using plastic packaging is rising while total plastic made is unchanged."
        ],
        "hint": "A rising share of the total needn't mean a rising amount — the total could be shrinking.",
        "expl": "Plastic's percentage can rise simply because non-plastic waste is being diverted to recycling (D), shrinking the total handled — so plastic's amount could be flat or falling.\nAnswer: D.",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Weaken",
        "correct": "D",
        "options": 5,
        "text": "There is relatively little room for growth in the overall carpet market, which is tied to the size of the population. Most who purchase carpet do so only once or twice, first in their twenties or thirties, and then perhaps again in their fifties or sixties. Thus, as the population ages, companies producing carpet will be able to gain market share in the carpet market only through purchasing competitors, and not through more aggressive marketing. Which one of the following, if true, casts the most doubt on the conclusion above?",
        "choices": [
          "Two of the three mergers in the industry's last ten years led to a decline in profits and revenues for the newly merged companies.",
          "Most of the major carpet producers market other floor coverings as well.",
          "Most established carpet producers market several different brand names and varieties, and there is no remaining niche in the market for new brands to fill.",
          "Price reductions, achieved by cost-cutting in production, by some of the dominant firms in the carpet market are causing other producers to leave the market altogether.",
          "The carpet market is unlike most markets in that consumers are becoming increasingly resistant to new patterns and styles."
        ],
        "hint": "Rule out the choices that attack profits or brand crowding — the conclusion is about how share is gained, not about how profitable it is.",
        "expl": "Step 1 — Conclusion: as the population ages, carpet companies can gain market share [[only]] by purchasing competitors, not through more aggressive marketing.\nStep 2 — An \"only by X\" conclusion is weakened by showing share moving some other way.\nStep 3 — (D) does exactly that: dominant firms are cutting costs, cutting prices, and driving rival producers out of the market entirely. Their share grows as those rivals exit — no acquisition involved.\nStep 4 — (A) is about profits and revenues after mergers, not about how share is obtained. (B) says producers sell other floor coverings, which is outside the carpet market. (C) says there is no niche left for new brands, which if anything supports the conclusion. (E) resistance to new patterns also supports the claim that marketing cannot win share.\nAnswer: D.",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Weaken",
        "correct": "C",
        "options": 5,
        "text": "In the United States, of the people who moved from one state to another when they retired, the percentage who retired to Florida has decreased by three percentage points over the past ten years. Since many local businesses in Florida cater to retirees, these declines are likely to have a noticeably negative economic effect on these businesses and therefore on the economy of Florida. Which of the following, if true, most seriously weakens the argument given?",
        "choices": [
          "People who moved from one state to another when they retired moved a greater distance, on average, last year than such people did ten years ago.",
          "People were more likely to retire to North Carolina from another state last year than people were ten years ago.",
          "The number of people who moved from one state to another when they retired has increased significantly over the past ten years.",
          "The number of people who left Florida when they retired to live in another state was greater last year than it was ten years ago.",
          "Florida attracts more people who move from one state to another when they retire than does any other state."
        ],
        "hint": "Attack the link between evidence and conclusion - look for an overlooked alternative.",
        "expl": "Correct answer: C. A. Distance is irrelevant. B. We are concerned specifically with the number of retirees moving to Florida. C. CORRECT Assume that last year 1000 people retired and moved to another state. Out of these 1000 people, 100 of them move to Florida. That means, 10% of the people moved to Florida. This year, the % of the people moved to Florida decreased by 3%.",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Weaken",
        "correct": "C",
        "options": 5,
        "text": "In the past, most children who went sledding in the winter snow in Verland used wooden sleds with runners and steering bars. Ten years ago, smooth plastic sleds became popular; they go faster than wooden sleds but are harder to steer and slow. The concern that plastic sleds are more dangerous is clearly borne out by the fact that the number of children injured while sledding was much higher last winter than it was ten years ago. Which of the following, if true in Verland, most seriously undermines the force of the evidence cited?",
        "choices": [
          "A few children still use traditional wooden sleds.",
          "Very few children wear any kind of protective gear, such as helmets, while sledding.",
          "Plastic sleds can be used in a much wider variety of snow conditions than wooden sleds can.",
          "Most sledding injuries occur when a sled collides with a tree, a rock, or another sled.",
          "Because the traditional wooden sled can carry more than one rider, an accident involving a wooden sled can result in several children being injured."
        ],
        "hint": "Attack the link between evidence and conclusion - look for an overlooked alternative.",
        "expl": "Correct answer: C. The passage connects an increased NUMBER of injuries with a contention that the plastic sleds are MORE LIKELY to cause injuries (i.e., that the plastic sleds cause a higher RATE / FREQUENCY of injuries).",
        "level": "medium"
      },
      {
        "n": 7,
        "topic": "Weaken",
        "correct": "B",
        "options": 5,
        "text": "Twelve years ago, and again five years ago, there were extended periods when Darfir Republic's currency, the pundra, was weak: its value was unusually low relative to the world's most stable currencies. Both times a weak pundra made Darfir's manufactured products a bargain on the world markets, and Darfir's exports were up substantially. Now some politicians are saying that, in order to cause another similarly sized increase in exports, the government should allow the pundra to become weak again. Which of the following if true provides the government with the strongest grounds to doubt the politician's recommendation, if followed, will achieve its aim?",
        "choices": [
          "several of the politicians no recommending that the pundra be allowed to become weak made that same recommendation before each of the last two periods of currency weakness.",
          "after several decades of operating well below its peak capacity, Darfir's manufacturing sector is now operating at near-peak levels",
          "the economy of a country experiencing a rise in exports will become healthier only if the country's currency is strong or the rise in exports is significant.",
          "those countries whose manufactured products compete with Darfir's on the world market currently all have stable currencies",
          "a sharp improvement in the efficiency of Darfir's manufacturing plants would make Darfir's products a bargain on the world markets even without weakening of the pundra relative to other currencies."
        ],
        "hint": "Attack the link between evidence and conclusion - look for an overlooked alternative.",
        "expl": "Correct answer: B. \"Which of the following, if true, provides the government with the strongest grounds to doubt that the politicians' recommendation, if followed, will achieve its aim?\" Answer choice E does not address \"if followed\". E says, essentially: there is a better way to achieve the goal of increasing exports.",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Weaken",
        "correct": "E",
        "options": 5,
        "text": "Kernland imposes a high tariff on the export of unprocessed cashew nuts in order to ensure that the nuts are sold to domestic processing plants. If the tariff were lifted and unprocessed cashews were sold at world market prices, more farmers could profit by growing cashews. However, since all the processing plants are in urban areas, removing the tariff would seriously hamper the government's effort to reduce urban unemployment rate over the next five years. Which of the following, if true, most seriously weakens the argument?",
        "choices": [
          "Some of the byproducts of processing cashews are used for manufacturing paints and plastics.",
          "Other countries in which cashews are processed subsidize their processing plants.",
          "More people in Kernland are engaged in farming cashews than in processing them.",
          "Buying unprocessed cashews at lower than world market prices enables cashew processors in Kernland to sell processed nuts at competitive prices",
          "A lack of profitable crops is driving an increasing number of small farmers in Kernland off their land and into the cities."
        ],
        "hint": "Attack the link between evidence and conclusion - look for an overlooked alternative.",
        "expl": "Correct answer: E. E is right because it shows us that without good crops to grow for profit, poor farmers move to the city. Well, the tariff, if removed, would allow those poor farmers to make money growing cashews (and maybe they will come back from the cities - where they were working in the domestic processing plants - and will start growing the profitable crop).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Weaken",
        "correct": "A",
        "options": 5,
        "text": "Several companies will soon offer personalized electronic news services, delivered via cable or telephone lines and displayed on a television. People using these services can view continually updated stories on those topics for which they subscribe. Since these services will provide people with the information they are looking for more quickly and efficiently than printed newspapers can, newspaper sales will decline drastically if these services become widely available. Which one of the following, if true, most seriously weakens the argument?",
        "choices": [
          "In reading newspapers, most people not only look for stories on specific topics but also like to idly browse through headlines or pictures for amusing stories on unfamiliar or unusual topics.",
          "Companies offering personalized electronic news services will differ greatly in what they charge for access to their services, depending on how wide a range of topics they cover.",
          "Approximately 30 percent of people have never relied on newspapers for information but instead have always relied on news programs broadcast on television and radio.",
          "The average monthly cost of subscribing to several channels on a personalized electronic news service will approximately equal the cost of a month's subscription to a newspaper.",
          "Most people who subscribe to personalized electronic news services will not have to pay extra costs for installation since the services will use connections installed by cable and telephone companies."
        ],
        "hint": "Attack the link between evidence and conclusion - look for an overlooked alternative.",
        "expl": "Correct answer: A. These (electronic news) services will provide people with the information they are looking for more quickly and efficiently than printed newspapers can -> newspaper sales will decline drastically if these services become widely available. Do people primarily read newspapers searching for stuff they already know about? No.",
        "level": "medium"
      },
      {
        "n": 10,
        "topic": "Weaken",
        "correct": "B",
        "options": 5,
        "text": "Navigation in animals is defined as the animal's ability to find its way from unfamiliar territory to points familiar to the animal but beyond the immediate range of the animal's senses. Some naturalists claim that polar bears can navigate over considerable distances. As evidence, they cite an instance of a polar bear that returned to its home territory after being released over 500 kilometers (300 miles) away. Which one of the following, if true, casts the most doubt on the validity of the evidence offered in support of the naturalists' claim?",
        "choices": [
          "The polar bear stopped and changed course several times as it moved toward its home territory.",
          "The site at which the polar bear was released was on the bear's annual migration route.",
          "The route along which the polar bear traveled consisted primarily of snow and drifting ice.",
          "Polar bears are only one of many species of mammal whose members have been known to find their way home from considerable distances.",
          "Polar bears often rely on their extreme sensitivity to smell in order to scent out familiar territory."
        ],
        "hint": "Attack the link between evidence and conclusion - look for an overlooked alternative.",
        "expl": "Correct answer: B. (B) is correct. First of all, to fit the definition of navigation, the animal must find its way from unfamiliar territory to familiar territory beyond the range of its senses. Next, a polar bear returned home after being released 300 miles away. (A) ... so what? Nothing in the given definition of navigation says that changing direction is not allowed.",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Weaken",
        "correct": "B",
        "options": 5,
        "text": "Tiger beetles are such fast runners that they can capture virtually any nonflying insect. However, when running toward an insect, a tiger beetle will intermittently stop and then, a moment later, resume its attack. Perhaps the beetles cannot maintain their pace and must pause for a moment's rest; but an alternative hypothesis is that while running, tiger beetles are unable to adequately process the resulting rapidly changing visual information and so quickly go blind and stop. Which of the following, if discovered in experiments using artificially moved prey insects, would support one of the two hypotheses and undermine the other?",
        "choices": [
          "When a prey insect is moved directly toward a beetle that has been chasing it, the beetle immediately stops and runs away without its usual intermittent stopping.",
          "In pursuing a swerving insect, a beetle alters its course while running and its pauses become more frequent as the chase progresses.",
          "In pursuing a moving insect, a beetle usually responds immediately to changes in the insect's direction, and it pauses equally frequently whether the chase is up or down an incline.",
          "If, when a beetle pauses, it has not gained on the insect it is pursuing, the beetle generally ends its pursuit.",
          "The faster a beetle pursues an insect fleeing directly away from it, the more frequently the beetle stops."
        ],
        "hint": "Attack the link between evidence and conclusion - look for an overlooked alternative.",
        "expl": "Correct answer: B. The keywords here are: rapidly changing visual information … The word \"move / moving\" does not guarantee rapidly changing visual information. An insect can move at the rate of 1 inch per hour as well. So, A and C can be eliminated.",
        "level": "medium"
      }
    ]
  },
  {
    "id": "cr-strengthen",
    "title": "Strengthen the Argument",
    "section": "cr",
    "source": "CR practice — strengthen the argument",
    "questions": [
      {
        "n": 1,
        "topic": "Strengthen",
        "correct": "C",
        "options": 5,
        "text": "Historically, urban waterfront lots were left to industry; today beachfront homes sell for huge sums. So a developer wanting a large profit should buy urban waterfront lots and build homes on them. Which most strengthens the argument?",
        "choices": [
          "People today have more money for real estate than in past centuries.",
          "Cities offer developers tax incentives to rehabilitate the waterfront.",
          "Homeowners will pay large sums for residential properties in traditionally industrial districts.",
          "Many urban waterfront lots are available to buy.",
          "Interior residential districts are more expensive than the waterfront."
        ],
        "hint": "The plan needs buyers for homes on formerly industrial urban waterfront.",
        "expl": "The profit depends on people paying well for homes on formerly industrial urban waterfront. (C) supplies exactly that; negate it and the profit disappears. The others give cheaper costs, incentives, or supply — none establishes buyers.\nAnswer: C.",
        "level": "medium"
      },
      {
        "n": 2,
        "topic": "Strengthen",
        "correct": "B",
        "options": 5,
        "text": "After a city installed speed cameras on Main Street, accidents there fell 30% in a year. Officials conclude the cameras caused the drop. Which most strengthens the conclusion?",
        "choices": [
          "The speed cameras were the first of their kind installed in the city.",
          "On comparable streets without cameras, accident numbers stayed about the same that year.",
          "Drivers reported disliking the new cameras.",
          "The city plans to install more cameras next year.",
          "Most accidents on Main Street had involved speeding."
        ],
        "hint": "Rule out a city-wide decline that would explain the drop without the cameras.",
        "expl": "If similar camera-free streets saw no such decline (B), a general downward trend is ruled out, making the cameras the likely cause. The others don't isolate the cameras as the reason.\nAnswer: B.",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Strengthen",
        "correct": "B",
        "options": 5,
        "text": "During the 1930s, Roosevelt's New Deal expanded federal authority by creating several new government agencies designed to administer financial relief to the country, which had been devastated by the 1929 stock market crash and the ensuing economic depression. In the decades following the depression, however, policymakers grew uncomfortable with the amount of power that had been given to the federal government and sought to discontinue many of the agencies created under the New Deal. Although they feared another economic depression, many prominent economists of that time sided with those policymakers. Which of the following, if true, most strengthens the stance taken by the prominent economists?",
        "choices": [
          "further expansion of federal authority would hinder economic growth and increase the risk of another economic depression.",
          "many agencies created under the New Deal were designed to provide financial relief, not to maintain economic stability.",
          "most Americans feared expansion of federal authority more than they feared another economic depression.",
          "the power and authority of many agencies created under the New Deal had expanded well beyond the limits defined in their respective agency charters.",
          "most policymakers of that time considered federal regulation of the market to be an emergency measure that, as such, should only be temporary."
        ],
        "hint": "The economists feared a depression yet still wanted the agencies gone — find the fact that makes those two positions consistent.",
        "expl": "Step 1 — The stance to strengthen: the economists sided with discontinuing the New Deal agencies, [[although]] they feared another depression.\nStep 2 — That looks self-defeating only if the agencies would help prevent a depression. So the stance is strengthened by anything showing they would not.\nStep 3 — (B) does that: the agencies were built to deliver financial relief [[after]] the crash, not to maintain economic stability. Keeping them would not reduce the risk of a new depression, so the economists lose nothing by scrapping them.\nStep 4 — (A) argues against [[further]] expansion, but the question is about dismantling what already exists. (C) reports public fears, which is not a reason for economists. (D) says the agencies exceeded their charters — a governance objection, not an economic one. (E) describes what policymakers considered, restating their view rather than supporting it.\nAnswer: B.",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Strengthen",
        "correct": "C",
        "options": 5,
        "text": "There should be a greater use of gasohol. Gasohol is a mixture of alcohol and gasoline, and has a higher-octane rating and fewer carbon monoxide emissions than straight gasoline. Burning gasohol adds no more carbon dioxide to the atmosphere than plants remove by photosynthesis. Each of the following, if true, strengthens the argument above EXCEPT:",
        "choices": [
          "Cars run less well on gasoline than they do on gasohol.",
          "Since less gasoline is needed with the use of gasohol, an energy shortage is less likely.",
          "Cars burn on the average slightly more gasohol per kilometer than they do gasoline.",
          "Gasohol is cheaper to produce and hence costs less at the pump than gasoline.",
          "Burning gasoline adds more carbon dioxide to the atmosphere than plants can remove."
        ],
        "hint": "Support the conclusion by confirming its key link or ruling out an alternative.",
        "expl": "Correct answer: C. (C) is correct. Here, the author's conclusion is that there should be a greater use of gasohol. The support given is that gasohol is higher in octane and has fewer emissions than gasoline. Also, burning gasohol adds no more carbon to the atmosphere than plants remove.",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Strengthen",
        "correct": "A",
        "options": 5,
        "text": "Consumer advocate: The introduction of a new drug into the marketplace should be contingent upon our having a good understanding of its social impact. However, the social impact of the newly marketed antihistamine is far from clear. It is obvious, then, that there should be a general reduction in the pace of bringing to the marketplace new drugs that are now being tested. Which one of the following, if true, most strengthens the argument?",
        "choices": [
          "The social impact of the new antihistamine is much better understood than that of most new drugs being tested.",
          "The social impact of some of the new drugs being tested is poorly understood.",
          "The economic success of some drugs is inversely proportional to how well we understand their social impact.",
          "The new antihistamine is chemically similar to some of the new drugs being tested.",
          "The new antihistamine should be on the market only if most new drugs being tested should be on the market also."
        ],
        "hint": "Support the conclusion by confirming its key link or ruling out an alternative.",
        "expl": "Correct answer: A. (A) is correct. Here's the core: Introduction of drugs to marketplace should be contingent on understanding social impact + the social impact of a certain antihistamine (one already on the market) is unclear -> there should be a general reduction in the pace of bringing to market new drugs now being tested.",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Strengthen",
        "correct": "B",
        "options": 5,
        "text": "In the year following an eight-cent increase in the federal tax on a pack of cigarettes, sales of cigarettes fell ten percent. In contrast, in the year prior to the tax increase, sales had fallen one percent. The volume of cigarette sales is therefore strongly related to the after-tax price of a pack of cigarettes. Which of the following, if true, would most strengthen the argument given?",
        "choices": [
          "During the second year after the tax increase, cigarette sales increased by a significant amount.",
          "The information available to consumers on the health risks of smoking remained largely unchanged in the period before and after the tax increase.",
          "Most consumers were unaware that the tax on cigarettes was going to increase.",
          "During the year following the cigarette tax increase, many consumers had less income, in inflation- adjusted dollars, than they had had in the previous year.",
          "During the year after the tax increase, there was a greater variety of cigarettes on the market than there had been during the previous year."
        ],
        "hint": "Support the conclusion by confirming its key link or ruling out an alternative.",
        "expl": "Correct answer: B. Note: this is an absolutely classic type of problem: it CONFLATES CORRELATION WITH CAUSATION. It takes a statistical correlation between cigarette tax and cigarette consumption, and postulates that one has a CAUSAL effect on the other.",
        "level": "medium"
      },
      {
        "n": 7,
        "topic": "Strengthen",
        "correct": "D",
        "options": 5,
        "text": "Some people believe that good health is due to luck. However, studies from many countries indicate a strong correlation between good health and high educational levels It is well known that high educational levels allow people to make more informed lifestyle choices. Thus, research supports the view that good health is largely the result of making informed lifestyle choices. The reasoning in the argument is most vulnerable to criticism on the grounds that the argument",
        "choices": [
          "presumes, without providing justification, that only highly educated people make informed lifestyle choices",
          "overlooks the possibility that people who make informed lifestyle choices may nonetheless suffer from inherited diseases",
          "presumes, without providing justification, that informed lifestyle choices are available to everyone",
          "overlooks the possibility that the same thing may causally contribute both to education and to good health",
          "does not acknowledge that some people who fail to make informed lifestyle choices are in good health"
        ],
        "hint": "Support the conclusion by confirming its key link or ruling out an alternative.",
        "expl": "Correct answer: D. Note that the conclusion of the argument is an explicit claim of causation: \"Thus research supports the view that good health is largely the result of making informed lifestyle choices.\" That is, making informed lifestyle choices has a direct impact on good health.",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Strengthen",
        "correct": "C",
        "options": 5,
        "text": "Premiums for automobile accident insurance are often higher for red cars than for cars of other colors. To justify these higher charges, insurance companies claim that, overall, a greater percentage of red cars are involved in accidents than are cars of any other color. If this claim is true, then lives could undoubtedly be saved by banning red cars from the roads altogether. The reasoning in the argument is flawed because the argument",
        "choices": [
          "accepts without question that insurance companies have the right to charge higher premiums for higher-risk clients",
          "fails to consider whether red cars cost the same to repair as cars of other colors",
          "ignores the possibility that drivers who drive recklessly have a preference for red cars",
          "does not specify precisely what percentage of red cars are involved in accidents",
          "makes an unsupported assumption that every automobile accident results in some loss of life"
        ],
        "hint": "Support the conclusion by confirming its key link or ruling out an alternative.",
        "expl": "Correct answer: C. C is correct. Red color cars have highest likelihood of accident -> Lives could be saved by banning red cars. (1) Is it possible that having a higher likelihood of having an accident impacts whether the car is red? This may seem implausible at first, but it actually makes a lot of sense.",
        "level": "medium"
      }
    ]
  },
  {
    "id": "cr-assumption",
    "title": "Assumption Questions",
    "section": "cr",
    "source": "CR practice — assumption questions",
    "questions": [
      {
        "n": 5,
        "topic": "Assumption",
        "correct": "D",
        "options": 5,
        "text": "Alusia offers a $1,000-per-worker tax credit to any company employing more than 20 manufacturing workers, expecting most Calonian manufacturers to relocate there. The plan's success relies on the assumption that:",
        "choices": [
          "Tax credits are the most effective incentive for luring companies.",
          "Calonia will not offer a matching tax credit to companies that stay.",
          "Calonian companies are less likely to succeed if they relocate.",
          "Most Calonian manufacturers expect to employ at least 20 workers within ten years.",
          "Calonian companies pay each worker more than $1,000 per year on average."
        ],
        "hint": "An incentive only works on companies that can actually qualify for it.",
        "expl": "Conclusion — most Calonian manufacturers will relocate to Alusia to get the credit.\nSupport — Alusia pays $1,000 per worker to any company employing more than 20 manufacturing workers.\nThe gap — the credit is worth nothing to a company that will never hit 20 workers. For the plan to draw [[most]] manufacturers, most of them have to be able to clear that threshold. That is (D).\nNegation test — if most Calonian manufacturers will never employ 20 workers, the credit is unreachable for them and they have no reason to move. The prediction collapses, so (D) is required.\n(A) The plan does not need credits to be the [[best]] incentive, only a sufficient one. An argument that something will work need not assume nothing else would work better.\n(B) A matching Calonian credit would hurt the plan, but the argument never rules it out — and an assumption is something the argument needs, not merely something convenient.\n(C) Whether relocating companies succeed afterwards is irrelevant; the conclusion is only that they will move.\n(E) Wage levels do not bear on eligibility, which turns on head count, not pay.",
        "level": "hard"
      },
      {
        "n": 6,
        "topic": "Assumption",
        "correct": "D",
        "options": 5,
        "text": "Country B's oil production is not sufficient to meet its domestic demand. In order to sharply reduce its dependence on foreign sources of oil, Country B recently embarked on a program requiring all of its automobiles to run on ethanol in addition to gasoline. Combined with its oil production, Country B produces enough ethanol from agricultural by-products to meet its current demand for energy. Which of the following must be assumed in order to conclude that Country B will succeed in its plan to reduce its dependence on foreign oil?",
        "choices": [
          "Electric power is not a superior alternative to ethanol in supplementing automobile gasoline consumption.",
          "In Country B, domestic production of ethanol is increasing more quickly than domestic oil production.",
          "Ethanol is suitable for the heating of homes and other applications aside from automobiles.",
          "In Country B, gasoline consumption is not increasing at a substantially higher rate than domestic oil and ethanol production.",
          "Ethanol is as efficient as gasoline in terms of mileage per gallon when used as fuel for automobiles."
        ],
        "hint": "Producing enough today does not settle whether you will still produce enough tomorrow.",
        "expl": "Conclusion — the ethanol programme will sharply reduce Country B's dependence on foreign oil.\nSupport — combined domestic oil and ethanol output currently meets domestic energy demand.\nThe gap — \"currently\" is doing a lot of work. If consumption climbs faster than domestic production, the country has to import again and the dependence returns. The argument must be assuming that does not happen. That is (D).\nNegation test — if gasoline consumption is rising substantially faster than domestic oil and ethanol production, the shortfall grows and foreign oil is needed after all. The conclusion fails, so (D) is required.\n(A) Whether electric power would be a better alternative is beside the point; the question is whether [[this]] plan reduces dependence, not whether a superior plan exists.\n(B) Which of the two domestic sources is growing faster does not matter — what matters is the combined total against demand.\n(C) The programme is about automobiles. Home heating is outside the argument.\n(E) Mileage per gallon would matter if the argument compared fuels, but it compares total domestic supply with total demand.",
        "level": "hard"
      },
      {
        "n": 7,
        "topic": "Assumption",
        "correct": "A",
        "options": 5,
        "text": "Although there has been great scientific debate for decades over global warming, most scientists now agree that human activity is causing the Earth's temperature to rise. Though predictions vary, many global warming experts believe that average global temperatures will rise between three- and eight-degrees Fahrenheit during the next century. Such an increase would cause an alarming rise in sea levels, displacing millions of people by destroying major population centers along the world's coastlines. Which of the following is an assumption in support of the argument's conclusion?",
        "choices": [
          "New technological developments in the next century will not divert rising seas from the world's coastal cities.",
          "Individuals will not become more aware of the steps they can take to reduce the emission of greenhouse gases.",
          "Rising sea levels similarly affect all coastal population centers.",
          "Some global warming experts predict a greater than eight-degree Fahrenheit increase in global temperatures during the next century.",
          "Human activity is the sole cause of increasing global temperatures."
        ],
        "hint": "The prediction runs from a temperature rise all the way to displaced people. Look for the link that could be broken.",
        "expl": "Conclusion — rising seas will destroy coastal population centres and displace millions.\nSupport — global temperatures are expected to rise several degrees, which would raise sea levels.\nThe gap — a higher sea only destroys cities if nothing stops the water from reaching them. The argument quietly assumes no future technology will divert it. That is (A).\nNegation test — if new technology in the next century [[will]] divert rising seas from coastal cities, the cities are not destroyed and nobody is displaced. The conclusion collapses, so (A) is required.\n(B) Awareness of how to cut emissions is not the same as cutting them, and in any case the argument already grants the temperature rise.\n(C) The argument needs coastal centres to be harmed, not to be harmed [[equally]]. Uniformity is a stronger claim than it requires.\n(D) An even larger predicted rise would strengthen the case, not underpin it. Assumptions are load-bearing, not bonus support.\n(E) The argument needs human activity to be [[a]] cause, which it states; it never needs it to be the only one.",
        "level": "hard"
      },
      {
        "n": 8,
        "topic": "Assumption",
        "correct": "C",
        "options": 5,
        "text": "In response to the increasing cost of producing energy through traditional means, such as combustion, many utility companies have begun investing in renewable energy sources, chiefly wind and solar power, hoping someday to rely on them completely and thus lower energy costs. These sources require significant initial capital investment, but the operating costs are not so high; so, the utility companies claim that they will be able to provide stable energy supplies to all their clients. As one can easily see, these sources will be less risky for the utilities than non- renewable sources, such as gas, oil, and coal, whose prices can fluctuate dramatically according to availability. The claim of the utility companies assumes which of the following?",
        "choices": [
          "The public will embrace the development of wind and solar power.",
          "No new deposits of gas, oil, and coal will be discovered in the near future.",
          "Weather patterns are consistent and predictable.",
          "The necessary technology for conversion to wind and solar power is not more expensive than the technology needed to create energy through combustion.",
          "Obtaining energy from non-renewable sources, such as gas, oil and coal, cannot be made less risky."
        ],
        "hint": "Ask what wind and solar actually depend on, and whether that thing is dependable.",
        "expl": "Conclusion — the utilities will be able to provide [[stable]] energy supplies to all their clients from wind and solar.\nSupport — these sources need heavy up-front investment but have low operating costs, and unlike gas, oil and coal their price does not swing with availability.\nThe gap — stable [[prices]] are not stable [[supply]]. Wind and solar deliver only as much power as the weather allows, so the promise of stable supply assumes the weather itself is dependable. That is (C).\nNegation test — if weather patterns are erratic and unpredictable, output swings and supply is not stable, whatever the operating costs. The conclusion fails, so (C) is required.\n(A) Public enthusiasm has no bearing on whether the supply is steady.\n(B) New fossil-fuel discoveries would affect the comparison of prices, but the claim at issue is about the reliability of the renewable supply.\n(D) The passage concedes that the initial capital investment is significant, so the argument plainly does not depend on the technology being no more expensive.\n(E) Whether non-renewables could be made less risky is a separate question; the claim is about what wind and solar can deliver.",
        "level": "hard"
      },
      {
        "n": 9,
        "topic": "Assumption",
        "correct": "A",
        "options": 5,
        "text": "In 1992 outlaw fishing boats began illegally harvesting lobsters from the territorial waters of the country of Belukia. Soon after, the annual tonnage of lobster legally harvested in Belukian waters began declining; in 1996, despite there being no reduction in the level of legal lobster fishing activity, the local catch was 9,000 tons below pre-1992 levels. It is therefore highly likely that the outlaw fishing boats harvested about 9,000 tons of lobster illegally that year. Which of the following is an assumption on which the argument depends?",
        "choices": [
          "Compared to 1992 levels, the population of catchable lobsters in Belukia's territorial waters had not sharply declined by 1996.",
          "The average annual lobster catch, in tons, of an outlaw fishing boat has increased steadily since 1992.",
          "Outlaw fishing boats do not, as a group, harvest more lobsters than do licensed lobster-fishing boats.",
          "The annual legal lobster harvest in Belukia in 1996 was not significantly less than 9,000 tons.",
          "A significant proportion of Belukia's operators of licensed lobster-fishing boats went out of business between 1992 and 1996."
        ],
        "hint": "A shortfall is only evidence of theft if there was still something there to steal.",
        "expl": "Conclusion — the outlaw boats took roughly 9,000 tons of lobster in 1996.\nSupport — legal catches fell 9,000 tons below pre-1992 levels even though legal fishing activity did not decline.\nThe gap — the missing 9,000 tons has to have gone somewhere, and the argument assumes it went into outlaw nets rather than simply never existing. That requires the lobster population itself not to have crashed. That is (A).\nNegation test — if the catchable population had sharply declined by 1996, the shortfall is explained by there being fewer lobsters, not by theft. The conclusion collapses, so (A) is required.\n(B) A trend in the per-boat catch says nothing about the total taken in one particular year.\n(C) How outlaw boats compare with licensed ones is a comparison the argument never makes and does not need.\n(D) This concerns the size of the legal harvest, not the size of the shortfall, which is already given.\n(E) Licensed operators going out of business would [[reduce]] legal fishing activity — which the passage explicitly rules out — so this works against the argument rather than supporting it.",
        "level": "hard"
      },
      {
        "n": 10,
        "topic": "Assumption",
        "correct": "A",
        "options": 5,
        "text": "Agricultural societies cannot exist without staple crops. Several food plants, such as kola and okra, are known to have been domesticated in western Africa, but they are all supplemental, not staple, foods. All the recorded staple crops grown in western Africa were introduced from elsewhere, beginning, at some unknown date, with rice and yams. Therefore, discovering when rice and yams were introduced into western Africa would establish the earliest date at which agricultural societies could have arisen there. Which of the following is an assumption on which the argument depends?",
        "choices": [
          "People in western Africa did not develop staple crops that they stopped cultivating once rice and yams were introduced.",
          "There are no plants native to western Africa that, if domesticated, could serve as staple food crops.",
          "Rice and yams were grown as staple crops by the earliest agricultural societies outside of western Africa.",
          "Kola and okra are better suited to growing conditions in western Africa than domesticated rice and yams are.",
          "Kola and okra were domesticated in western Africa before rice and yams were introduced there."
        ],
        "hint": "The conclusion is about the [[earliest]] possible date. Ask what would push that date back.",
        "expl": "Conclusion — dating the introduction of rice and yams would establish the earliest date at which agricultural societies could have arisen in western Africa.\nSupport — agricultural societies need staple crops, and every recorded staple grown in western Africa was introduced from elsewhere, beginning with rice and yams.\nThe gap — \"every recorded staple\" is a claim about the record, not about history. If western Africans had once grown a staple of their own and abandoned it, agriculture could predate rice and yams and the method would give the wrong date. The argument must assume that did not happen. That is (A).\nNegation test — if people there [[did]] develop staple crops that they stopped cultivating once rice and yams arrived, the earliest possible date moves earlier and the method fails. So (A) is required.\n(B) Too strong. The argument only needs that no native staple was actually cultivated, not that no native plant [[could]] have served as one.\n(C) What the earliest societies elsewhere grew is irrelevant to when agriculture began in western Africa.\n(D) Growing conditions do not bear on the dating method at all.\n(E) The order in which kola and okra were domesticated does not matter, because the passage already establishes that they are supplemental rather than staple foods.",
        "level": "hard"
      },
      {
        "n": 11,
        "topic": "Assumption",
        "correct": "D",
        "options": 5,
        "text": "Doctor: Research shows that adolescents who play video games on a regular basis are three times as likely to develop carpal tunnel syndrome as are adolescents who do not play video games. Federal legislation that prohibits the sale of video games to minors would help curb this painful wrist condition among adolescents. The doctor's conclusion depends on which of the following assumptions?",
        "choices": [
          "The majority of federal legislators would vote for a bill that prohibits the sale of video games to minors.",
          "Not all adolescents who play video games on a regular basis suffer from carpal tunnel syndrome.",
          "Playing video games is the only way an adolescent can develop carpal tunnel syndrome.",
          "Most parents would refuse to purchase video games for their adolescent children.",
          "The regular playing of video games by adolescents does not produce such beneficial effects as better hand-eye coordination and improved reaction time."
        ],
        "hint": "A ban on [[selling]] to minors only helps if it actually stops minors from getting the games.",
        "expl": "Conclusion — banning the sale of video games to minors would help curb carpal tunnel syndrome among adolescents.\nSupport — adolescents who play regularly are three times as likely to develop the condition.\nThe gap — the ban blocks one route to the games, not all of them. If parents simply buy the games instead, adolescents keep playing and nothing changes. The argument assumes they will not. That is (D).\nNegation test — if most parents [[would]] buy video games for their children, play continues at the same level and the ban curbs nothing. The conclusion collapses, so (D) is required.\n(A) Whether the bill could pass is about political feasibility. The claim is about what the law would do [[if]] enacted.\n(B) True but useless: the argument rests on a raised risk, not on every player being affected.\n(C) Far too strong. The argument needs games to be [[a]] significant cause, not the only one.\n(E) Benefits like hand-eye coordination would be a reason to weigh against the ban, not a premise the argument needs.",
        "level": "hard"
      },
      {
        "n": 12,
        "topic": "Assumption",
        "correct": "E",
        "options": 5,
        "text": "Researchers studying the spread of the Black Plague in sixteenth-century England claim that certain people survived the epidemic because they carried a genetic mutation, known as Delta-32, that is known to prevent the bacteria that causes the Plague from overtaking the immune system. To support this hypothesis, the researchers tested the direct descendants of the residents of an English town where an unusually large proportion of people survived the Plague. More than half of these descendants tested positive for the mutation Delta-32, a figure nearly three times higher than that found in other locations. The researchers' hypothesis is based on which of the following assumptions?",
        "choices": [
          "Delta-32 does not prevent a carrier from contracting any disease other than the Plague.",
          "The Plague is not similar to other diseases caused by bacteria.",
          "Delta-32 did not exist in its current form until the sixteenth century.",
          "No one who tested positive for Delta-32 has ever contracted a disease caused by bacteria.",
          "The Plague does not cause genetic mutations such as Delta-32."
        ],
        "hint": "The researchers infer that the mutation caused survival. Ask what else could produce the same pattern.",
        "expl": "Conclusion — people survived the Plague because they carried the Delta-32 mutation.\nSupport — descendants of a town with unusually high survival carry Delta-32 at nearly three times the normal rate.\nThe gap — the mutation being common among survivors' descendants fits two stories: the mutation helped people survive, or surviving the Plague somehow produced the mutation. The argument has to rule the second one out. That is (E).\nNegation test — if the Plague [[does]] cause mutations like Delta-32, then the high rate among descendants is a consequence of infection rather than the reason for survival. The causal claim collapses, so (E) is required.\n(A) Protection against other diseases is outside the hypothesis, which is only about the Plague.\n(B) Similarity to other bacterial diseases is never used in the reasoning.\n(C) When the mutation first arose does not matter, only whether it protected people who had it.\n(D) Far too strong. The claim concerns one disease, not immunity to every bacterial illness.",
        "level": "hard"
      },
      {
        "n": 13,
        "topic": "Assumption",
        "correct": "A",
        "options": 5,
        "text": "If the appropriate timely surgery is not performed on someone who has suffered from appendicitis, the outcome can be potentially fatal; consequently, patients with symptoms strongly suggesting appendicitis are almost always made to undergo a surgery, whether they have actually had appendicitis or not. The appropriate surgery is extremely low-risk but is performed unnecessarily in about 20 percent of all cases. A newly developed internal scan to determine whether someone with symptoms of appendicitis has actually had appendicitis produces absolutely correct diagnosis in 98% of the cases. Clearly, using this scan, doctors can largely avoid unnecessary surgeries related to appendicitis, without, however, performing any fewer necessary surgeries. Which of the following assumption is required for the conclusion to be always true?",
        "choices": [
          "the misdiagnoses produced by this scan are always instances of attributing appendicitis to someone who has not had it",
          "the misdiagnoses produced by this scan are never instances of attributing appendicitis to someone who has not had it",
          "all of the patients who are diagnosed with this scan as having had appendicitis have actually had appendicitis",
          "every patient who is diagnosed with this scan as having had appendicitis always has more than one of the symptoms associated with appendicitis",
          "the only patients who are misdiagnosed using this scan are patients who lack one or more of the symptoms that are generally associated with appendicitis"
        ],
        "hint": "A scan can be wrong in two directions. Only one of them costs a necessary surgery.",
        "expl": "Conclusion — the scan lets doctors cut unnecessary surgeries [[without]] losing any necessary ones.\nSupport — the scan is correct in 98 percent of cases, and 20 percent of current surgeries are unnecessary.\nThe gap — the 2 percent of errors comes in two flavours. A false positive says \"appendicitis\" when there is none: harmless here, because that patient would have been operated on anyway. A false negative sends home someone who really has appendicitis, and a necessary surgery is lost. The conclusion survives only if none of the errors are of the second kind. That is (A).\nNegation test — if the errors were never false positives, they would all be false negatives, necessary surgeries would be missed, and the conclusion fails. So (A) is required.\n(B) This is the exact reverse of what the argument needs, and it is what would break the conclusion.\n(C) This rules out false positives, which the argument can happily tolerate — those patients were being operated on regardless.\n(D) Symptom counts never enter the reasoning.\n(E) Another claim about which patients are misdiagnosed, but it says nothing about the direction of the error, which is the only thing that matters here.",
        "level": "hard"
      },
      {
        "n": 14,
        "topic": "Assumption",
        "correct": "D",
        "options": 5,
        "text": "Until now, only injectable vaccines against influenza have been available. Parents are reluctant to subject children to the pain of injections, but adults, who are at risk of serious complications from influenza, are commonly vaccinated. A new influenza vaccine, administered painlessly in a nasal spray, is effective for children. However, since children seldom develop serious complications from influenza, no significant public health benefit would result from widespread vaccination of children using the nasal spray. Which of the following is an assumption on which the argument depends?",
        "choices": [
          "Any person who has received the injectable vaccine can safely receive the nasal- spray vaccine as well.",
          "The new vaccine uses the same mechanism to ward off influenza as injectable vaccines do.",
          "The injectable vaccine is affordable for all adults.",
          "Adults do not contract influenza primarily from children who have influenza.",
          "The nasal spray vaccine is not effective when administered to adults."
        ],
        "hint": "The children are not the only people a childhood vaccination could protect.",
        "expl": "Conclusion — vaccinating children with the nasal spray would bring no significant public-health benefit.\nSupport — children themselves seldom develop serious complications from influenza.\nThe gap — that only rules out a benefit [[to the children]]. Vaccinating children could still protect the adults who do suffer serious complications, if children are a major source of adult infection. The argument must be assuming they are not. That is (D).\nNegation test — if adults [[do]] catch influenza primarily from children, vaccinating children would cut adult cases, which is exactly the significant public-health benefit the conclusion denies. So (D) is required.\n(A) Whether the two vaccines are safe in combination has no bearing on whether a benefit exists.\n(B) The mechanism does not matter, only the effect. The passage already grants the spray is effective for children.\n(C) Affordability for adults concerns the existing injectable vaccine and sits outside the argument.\n(E) If the spray also worked on adults, that would be a separate route to a benefit — an objection to the conclusion, not something the argument relies on.",
        "level": "hard"
      },
      {
        "n": 15,
        "topic": "Assumption",
        "correct": "E",
        "options": 5,
        "text": "To decrease the number of crimes in city Y, the city's Police Commissioner proposed taking some police officers from low-crime districts of the city and moving them to high-crime districts of the city. His proposal is based on city Y crime data that show that the number of crimes in any district of the city decreases when additional police officers are moved into that district. The Police Commissioner's proposal depends on which of the following assumptions?",
        "choices": [
          "City X experienced a drastic reduction in crime after implementing a proposal similar to that proposed by the Police Commissioner of city Y.",
          "The severity of crimes committed in any district of the city decreases when additional police officers are moved into that district.",
          "The number of crimes committed in all high-crime districts of city Y is more than triple the number of crimes committed in all low-crime districts of city Y.",
          "There are more low-crime districts than high-crime districts in city Y.",
          "Districts of the city from which police officers are removed do not experience significant crime increases shortly after the removal of those officers."
        ],
        "hint": "Moving officers is not the same as adding them. Something happens to the district they leave.",
        "expl": "Conclusion — moving officers from low-crime to high-crime districts will reduce crime in city Y overall.\nSupport — crime in any district falls when officers are moved into it.\nThe gap — the data covers what happens where officers arrive, and says nothing about where they leave. If crime rises in the stripped districts, the city-wide total may not fall at all. The argument assumes it does not. That is (E).\nNegation test — if the districts losing officers [[do]] see significant crime increases, the gains in one place are cancelled by losses in another and the proposal fails. So (E) is required.\n(A) Another city's experience might make the proposal plausible, but the argument never appeals to it and does not need it.\n(B) Severity is a different measure from number, and the proposal is about reducing the number of crimes.\n(C) The ratio of crime between district types does not determine whether the move produces a net reduction.\n(D) The count of districts is irrelevant; what matters is the net effect of the transfer.",
        "level": "hard"
      },
      {
        "n": 16,
        "topic": "Assumption",
        "correct": "A",
        "options": 5,
        "text": "The Earth's rivers constantly carry dissolved salts into its oceans. Clearly, therefore, by taking the resulting increase in salt levels in the oceans over the past hundred years and then determining how many centuries of such increases it would have taken the oceans to reach current salt levels from a hypothetical initial salt-free state, the maximum age of the Earth's oceans can be accurately estimated. Which of the following is an assumption on which the argument depends?",
        "choices": [
          "The quantities of dissolved salts deposited by rivers in the Earth's oceans have not been unusually large during the past hundred years.",
          "At any given time, all the Earth's rivers have about the same salt levels.",
          "There are salts that leach into the Earth's oceans directly from the ocean floor.",
          "There is no method superior to that based on salt levels for estimating the maximum age of the Earth's oceans.",
          "None of the salts carried into the Earth's oceans by rivers are used up by biological activity in the oceans."
        ],
        "hint": "The method reads today's rate backwards across the whole history of the oceans.",
        "expl": "Conclusion — dividing the current salt level by the recent rate of increase gives an accurate maximum age for the oceans.\nSupport — rivers continuously carry dissolved salts into the oceans, so salt accumulates over time.\nThe gap — extrapolating one century's rate across geological time only works if that century is not atypical. If the past hundred years happen to be unusually salty, dividing by that inflated rate makes the oceans look far younger than they are. The argument assumes they are not unusual. That is (A).\nNegation test — if the past hundred years [[have]] seen unusually large salt deposits, the computed age is badly wrong and the method is not accurate. So (A) is required.\n(B) The method uses the total delivered to the oceans; variation between individual rivers washes out.\n(C) Salts leaching from the ocean floor would be an [[additional]] source, which undermines the method rather than supporting it — and an assumption must support.\n(D) The argument claims the method works, not that it is the best available.\n(E) This is close, but too strong: the argument needs the [[rate]] to be representative, not that biological activity consumes precisely none of the salt.",
        "level": "hard"
      },
      {
        "n": 17,
        "topic": "Assumption",
        "correct": "C",
        "options": 5,
        "text": "Two centuries ago, Tufe Peninsula became separated from the mainland, isolating on the newly formed Tufe Island a population of Turfil sunflowers. This population's descendants grow to be, on average, 40 centimeters shorter than Turfil sunflowers found on the mainland. Tufe Island is significantly drier than Tufe Peninsula was. So, the current average height of Tufe's Turfil sunflowers is undoubtedly at least partially attributable to changes in Tufe's environmental conditions. Which of the following is an assumption on which the argument depends?",
        "choices": [
          "There are no types of vegetation on Tufe Island that are known to benefit from dry conditions.",
          "There were about as many Turfil sunflowers on Tufe Peninsula two centuries ago as there are on Tufe Island today.",
          "The mainland's environment has not changed in ways that have resulted in Turfil sunflowers on the mainland growing to be 40 centimeters taller than they did two centuries ago.",
          "The soil on Tufe Island, unlike that on the mainland, lacks important nutrients that help Turfil sunflowers survive and grow tall in a dry environment.",
          "The 40-centimeter height difference between the Turfil sunflowers on Tufe Island and those on the mainland is the only difference between the two populations."
        ],
        "hint": "The 40-centimetre gap is a comparison. Either side of it could have moved.",
        "expl": "Conclusion — the island sunflowers' current height is at least partly due to Tufe's changed environmental conditions.\nSupport — the island population is 40 centimetres shorter than the mainland population, and the island is significantly drier than the peninsula was.\nThe gap — a gap between two populations can open because one shrank or because the other grew. If the mainland plants got 40 centimetres taller over the same two centuries, the island plants need not have changed at all. The argument must rule that out. That is (C).\nNegation test — if the mainland's environment [[did]] change so that its sunflowers grew 40 centimetres taller, the difference is fully explained without any change on the island. The conclusion collapses, so (C) is required.\n(A) Other vegetation on the island is beside the point; the claim concerns these sunflowers.\n(B) Population sizes are never used in the reasoning.\n(D) A soil difference would be a [[rival]] explanation to the dry conditions, so assuming it would work against the argument.\n(E) Far too strong. The argument needs the height difference to be environmental, not to be the only difference of any kind.",
        "level": "hard"
      },
      {
        "n": 18,
        "topic": "Assumption",
        "correct": "E",
        "options": 5,
        "text": "The spacing of the four holes on a fragment of a bone flute excavated at a Neanderthal campsite is just what is required to play the third through sixth notes of the diatonic scale-the seven-note musical scale used in much of Western music since the Renaissance. Musicologists therefore hypothesize that the diatonic musical scale was developed and used thousands of years before it was adopted by Western musicians. Which of the following is an assumption required by the argument above?",
        "choices": [
          "Bone flutes were probably the only musical instrument made by Neanderthals.",
          "No musical instrument that is known to have used a diatonic scale is of an earlier date than the flute found at the Neanderthal campsite.",
          "The flute was made from a cave-bear bone and the campsite at which the flute fragment was excavated was in a cave that also contained skeletal remains of cave bears.",
          "Flutes are the simplest wind instrument that can be constructed to allow playing a diatonic scale.",
          "The bone used to make the Neanderthal flute would have been long enough to make a flute capable of playing a complete diatonic scale."
        ],
        "hint": "Four holes are not a scale. Ask what the whole instrument would have needed to be.",
        "expl": "Conclusion — the diatonic scale was developed and used thousands of years before Western musicians adopted it.\nSupport — the spacing of four holes on a fragment of a Neanderthal bone flute matches the third through sixth notes of that scale.\nThe gap — a fragment with four holes shows only that four notes line up, which could be coincidence. For it to be evidence of the scale itself, the original instrument has to have been capable of playing the scale. That requires a long enough bone. That is (E).\nNegation test — if the bone was too short to make a flute that could play a complete diatonic scale, the four matching holes are an accident of spacing and the hypothesis loses its support. So (E) is required.\n(A) What other instruments Neanderthals made is irrelevant to what this one could play.\n(B) The argument is about whether the scale was used early, not about which surviving instrument is oldest.\n(C) The material of the bone and what else lay in the cave bear on dating the site, not on the musical claim.\n(D) Whether flutes are the simplest such instrument does not affect what this flute could do.",
        "level": "hard"
      },
      {
        "n": 19,
        "topic": "Assumption",
        "correct": "B",
        "options": 5,
        "text": "Student Advisor: One of our exchange students faced multiple arguments with her parents over the course of the past year. Not surprisingly, her grade point average (GPA) over the same period showed a steep decline. This is just one example of a general truth: problematic family relationships can cause significant academic difficulties for our students. Which of the following is required for the Student Advisor to claim that problematic family relationships can cause academic difficulties?",
        "choices": [
          "Last year, the exchange student reduced the amount of time spent on academic work, resulting in a lower GPA.",
          "The decline in the GPA of the exchange student was not the reason for the student's arguments with her parents.",
          "School GPA is an accurate measure of a student's intellectual ability.",
          "If proper measures are not taken, the decline in the student's academic performance may become irreversible.",
          "Fluctuations in academic performance are typical for many students."
        ],
        "hint": "One student, one correlation, one causal conclusion. Ask which way the causation runs.",
        "expl": "Conclusion — problematic family relationships can cause significant academic difficulties.\nSupport — one exchange student had repeated arguments with her parents and her GPA fell over the same period.\nThe gap — two things happening together does not fix which caused which. The falling GPA could just as easily have been what the arguments were about. Any causal reading has to rule that reversal out. That is (B).\nNegation test — if the decline in her GPA [[was]] the reason for the arguments, then the academic trouble caused the family trouble, not the other way round, and the advisor's general claim loses its only example. So (B) is required.\n(A) This supplies a plausible mechanism, but the claim can hold through other mechanisms, so it is not required.\n(C) Whether GPA measures intellectual ability does not bear on whether family problems caused it to fall.\n(D) A prediction about the future is not something the past causal claim rests on.\n(E) If fluctuations were typical, that would [[weaken]] the inference by suggesting the drop was ordinary noise.",
        "level": "hard"
      },
      {
        "n": 20,
        "topic": "Assumption",
        "correct": "B",
        "options": 5,
        "text": "Science writer: All scientists have beliefs and values that might slant their interpretations of the data from which they draw their conclusions. However, serious scientific papers are carefully reviewed by many other scientists before publication. These reviewers are likely to notice and object to biases that they do not share. Thus, any slanted interpretations of scientific data will generally have been removed before publication. Which one of the following is an assumption required by the science writer's argument?",
        "choices": [
          "The scientists reviewing serious scientific papers for publication do not always have biases likely to slant their interpretations of the data in those papers.",
          "In general, biases that slant interpretations of data in serious scientific papers being reviewed for publication are not shared among all scientists.",
          "Biases that are present in published scientific papers and shared by most scientists, including those who review the papers, are unlikely to impair the scientific value of those papers.",
          "The interpretation of data is the only part of a serious scientific paper that is sometimes slanted by the beliefs and values of scientists.",
          "Slanted interpretations of data in a scientific paper can be removed only through careful review by scientists who do not share the biases of the author or authors of the paper."
        ],
        "hint": "Peer review only catches a bias if the reviewer does not share it.",
        "expl": "Conclusion — slanted interpretations of data will generally have been removed before publication.\nSupport — papers are reviewed by many scientists, who are likely to notice and object to biases they do not share.\nThe gap — the mechanism has a blind spot built into it. A bias held by every scientist would sail past every reviewer. For review to catch biases generally, they generally must not be universal. That is (B).\nNegation test — if the biases that slant papers [[are]] shared among all scientists, no reviewer objects, nothing is removed, and the conclusion fails. So (B) is required.\n(A) This says reviewers are not [[always]] biased, which is far weaker than what the argument needs: it needs the author's particular bias not to be shared by the reviewers.\n(C) Whether shared biases damage a paper's scientific value is a separate question from whether review removes them.\n(D) The argument is about interpretation because that is what it discusses; it never needs interpretation to be the only vulnerable part.\n(E) \"Only through careful review\" claims review is [[necessary]]. The argument claims it is sufficient — a different, and here unneeded, direction.",
        "level": "hard"
      }
    ]
  },
  {
    "id": "cr-evaluate",
    "title": "Evaluate the Argument",
    "section": "cr",
    "source": "CR practice — evaluate the argument",
    "questions": [
      {
        "n": 1,
        "topic": "Evaluate the argument",
        "correct": "E",
        "options": 5,
        "text": "The recording industry lacks the resources to prosecute more than a small number of illegal downloaders, so prosecuting them will have minimal impact on the overall number of people who download music illegally. Answering which question would most help evaluate this argument?",
        "choices": [
          "Whether the industry's lawyers could work more efficiently.",
          "Whether illegally downloaded songs are then shared with others.",
          "Whether new security technology could identify downloaders faster.",
          "Whether illegal downloading has increased in recent years.",
          "Whether the threat of prosecution would deter other people from downloading illegally."
        ],
        "hint": "Apply the extremes test: which answer's two extremes push the conclusion opposite ways?",
        "expl": "If the threat of prosecution strongly deters others, the impact is large (weakens); if it deters no one, the impact is minimal (strengthens). (E)'s two extremes swing the argument opposite ways, so it tests the conclusion.\nAnswer: E.",
        "level": "hard"
      },
      {
        "n": 2,
        "topic": "Evaluate the argument",
        "correct": "B",
        "options": 5,
        "text": "To increase profits, MillCo plans to cut costs by laying off nonessential employees. Answering which question would most help evaluate whether the plan will work?",
        "choices": [
          "Whether MillCo could cut costs more by trimming health benefits.",
          "Whether revenues will be hurt badly enough to threaten MillCo's profits.",
          "Whether the laid-off employees will find new jobs.",
          "Whether MillCo's competitors are also cutting staff.",
          "Whether employee morale will fall after the layoffs."
        ],
        "hint": "Profit = revenue − cost; the plan cuts cost, so what about revenue?",
        "expl": "If revenues fall enough to outweigh the savings, the plan fails (weakens); if they don't, it works (strengthens). (B) is the question whose two answers test the argument. (A) offers a different cost cut, irrelevant to THIS plan.\nAnswer: B.",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Evaluate the argument",
        "correct": "E",
        "options": 5,
        "text": "Profits for one of Company X's flagship products have been declining slowly for several years. The CFO investigated and determined that inflation has raised the cost of producing the product but consumers who were surveyed reported that they weren't willing to pay more than the current price. As a result, the CFO recommended that the company stop producing this product because the CEO only wants products whose profit margins are increasing. The answer to which of the following questions would be most useful in evaluating whether the CFO's decision to divest the company of its flagship product is warranted?",
        "choices": [
          "Does the company have new and profitable products available with which to replace the flagship product?",
          "What percentage of Company X's revenues is represented by sales of the flagship product in question?",
          "Are there additional features which could be added to the product and for which consumers might be willing to pay a higher price?",
          "Will the rest of Company X's management team agree with the CFO's recommendation?",
          "Is there a way to reduce the cost to produce the flagship product?"
        ],
        "hint": "Extremes test: the right question's two answers push the argument opposite ways.",
        "expl": "Correct answer: E. Profits for a particular product have been going down and the CFO has determined that this is because, on the one hand, the cost to make the product has increased and, on the other, consumers won't pay more than the current price (recall that Profit = Revenues - Costs).",
        "level": "hard"
      },
      {
        "n": 4,
        "topic": "Evaluate the argument",
        "correct": "E",
        "options": 5,
        "text": "Columnist: George Orwell's book 1984 seems to have exercised a lot of influence on many intellectuals. Ten thousand readers of the most intellectually stimulating national daily were surveyed and asked to name that specific one book that had had the most influence on their lives. The maximum number of respondents chose the Bible; 1984 was chosen by the second highest number of respondents. The answer to which one of the following questions would most help in evaluating the argument above?",
        "choices": [
          "How many of those surveyed had actually read the books they chose?",
          "How many books had each person surveyed read?",
          "Did people speak the truth while answering the survey question?",
          "Overall, how many book titles were nominated by these 10000 people?",
          "How many people chose 1984?"
        ],
        "hint": "Extremes test: the right question's two answers push the argument opposite ways.",
        "expl": "Correct answer: E. The correct answer choice is (E). The conclusion of the argument is the first sentence: George Orwell's book 1984 seems to have exercised a lot of influence on many intellectuals. The basis for this conclusion is that 1984 was the second most named book in a survey about influential books.",
        "level": "hard"
      },
      {
        "n": 5,
        "topic": "Evaluate the argument",
        "correct": "D",
        "options": 5,
        "text": "Though sucking zinc lozenges has been promoted as a treatment for the common cold, research has revealed no consistent effect. Recently, however, a zinc gel applied nasally has been shown to greatly reduce the duration of colds. Since the gel contains zinc in the same form and concentration as the lozenges, the greater effectiveness of the gel must be due to the fact that cold viruses tend to concentrate in the nose, not the mouth. In order to evaluate the argument, it would be most helpful to determine which of the following?",
        "choices": [
          "Whether zinc is effective only against colds, or also has an effect on other virally caused diseases",
          "Whether there are other herbal remedies that do not contain zinc but that, when taken orally, can reduce the duration of colds",
          "Whether people who frequently catch colds have a zinc deficiency",
          "Whether either the zinc gel or the lozenges contain ingredients that have an impact on the activity of the zinc",
          "Whether the zinc gel has an effect on the severity of cold symptoms, as well as on their duration"
        ],
        "hint": "Extremes test: the right question's two answers push the argument opposite ways.",
        "expl": "Correct answer: D. We're trying to figure out why the gel is more effective than the lozenge. The author's explanation focuses on where cold viruses congregate. In any argument in which an author is explaining a phenomenon, we should always wonder if there are any other viable explanations.",
        "level": "hard"
      },
      {
        "n": 6,
        "topic": "Evaluate the argument",
        "correct": "B",
        "options": 5,
        "text": "Scientists have determined that an effective way to lower cholesterol is to eat three servings of whole grains every day. Studies have shown that the cholesterol levels of people who did so were significantly lower after six months than were those of people who did not, even though the cholesterol levels of the two groups were the same before the studies began. Clearly, eating whole grains can have an appreciable effect on cholesterol levels. The answer to which of the following questions, if true, would be most useful in evaluating the claim about whole grains above?",
        "choices": [
          "Is it realistic to expect people to eat three servings of whole grains per day?",
          "Were the two groups of people in the study involved in the same exercise program?",
          "Can the same drop in cholesterol be achieved through medication?",
          "Did the study continue to track the subjects beyond six months?",
          "Are most consumers aware of the different between whole grains and processed grains?"
        ],
        "hint": "Extremes test: the right question's two answers push the argument opposite ways.",
        "expl": "Correct answer: B. A caused B C didn't cause B strengthens C caused B weakens (A) The passage already shows that it is realistic to have whole grains 3 times a day. (C) We are not trying to find alternatives. (D) Out of context since the study is primarily concerned about lowering cholesterol by eating whole grains. (E) We do not care about awareness. The correct answer is B.",
        "level": "hard"
      },
      {
        "n": 7,
        "topic": "Evaluate the argument",
        "correct": "C",
        "options": 5,
        "text": "In a certain wildlife park, park rangers are able to track the movements of many rhinoceroses because those animals wear radio collars. When, as often happens, a collar slips off, it is put back on. Putting a collar on a rhinoceros involves immobilizing the animal by shooting it with a tranquilizer dart. Female rhinoceroses that have been frequently re-collared have significantly lower fertility rate than un-collared females. Probably, therefore, some substances in the tranquilizer inhibit fertility. In evaluating the argument, it would be most useful to determine which of the following?",
        "choices": [
          "Whether there are more collared female rhinoceroses than un-collared female rhinoceroses in the park.",
          "How the tranquilizer that is used for immobilizing rhinoceroses differs, if at all, from tranquilizers used in working with other large mammals.",
          "How often park rangers need to use tranquilizer dart to immobilize rhinoceroses for reasons other than attaching radio collars.",
          "Whether male rhinoceroses in the wild park lose their collar any more often than the park's female rhinoceroses do",
          "Whether radio collar is the only practical means that park rangers have for tracking the movements of rhinoceroses in the park."
        ],
        "hint": "Extremes test: the right question's two answers push the argument opposite ways.",
        "expl": "Correct answer: C. Imagine there are 100 female rhinos: Scenario 1: In this case, the females are NEVER tranquilized for any reason other than re- collaring.",
        "level": "hard"
      },
      {
        "n": 8,
        "topic": "Evaluate the argument",
        "correct": "A",
        "options": 5,
        "text": "Following several years of declining advertising sales, the Greenville Times reorganized its advertising sales force two years ago. Before the reorganization, the sales force was organized geographically, with some sales representatives concentrating on city-center businesses and others concentrating on different outlying regions. The reorganization attempted to increase the sales representatives' knowledge of clients' businesses by having each sales representative deal with only one type of industry or of retailing. After the reorganization, advertising sales increased. In assessing whether the improvement in advertising sales can properly be attributed to the reorganization, it would be helpful to find out each of the following EXCEPT:",
        "choices": [
          "Two years ago, what was the figure for Greenville Times' advertising sales?",
          "Has the circulation of the Greenville Times increased substantially in the last two years?",
          "Has there been a substantial turnover in personnel in the advertising sales force over the last two years?",
          "Before the reorganization, had sales representatives found it difficult to keep up with relevant developments in all types of businesses to which they are assigned?",
          "Has the economy in Greenville and the surrounding regions been growing rapidly over the last two years?"
        ],
        "hint": "Extremes test: the right question's two answers push the argument opposite ways.",
        "expl": "Correct answer: A. A. CORRECT. We don't care about the actual value of advertising-sales revenue … all we care about is that it increased … B. If the circulation has increased this could lead attract more advertisers and thereby lead to increased advertisement sales. In this case, the increased sales will not be because of reorganization. Therefore, B is definitely relevant.",
        "level": "hard"
      },
      {
        "n": 9,
        "topic": "Evaluate the argument",
        "correct": "C",
        "options": 5,
        "text": "Community activist: If Morganville wants to keep its central shopping district healthy, it should prevent the opening of a huge SaveAll discount department store on the outskirts of Morganville. Records from other small towns show that whenever SaveAll has opened a store outside the central shopping district of a small town, within five years the town has experienced the bankruptcies of more than a quarter of the stores in the shopping district. The answer to which of the following would be most useful for evaluating the community activist's reasoning?",
        "choices": [
          "Have community activists in other towns successfully campaigned against the opening of a SaveAll store on the outskirts of their towns?",
          "Do a large percentage of the residents of Morganville currently do almost all of their shopping at stores in Morganville?",
          "In towns with healthy central shopping districts, what proportion of the stores in those districts suffer bankruptcy during a typical five-year period?",
          "What proportion of the employees at the SaveAll store on the outskirts of Morganville will be drawn from Morganville?",
          "Do newly opened SaveAll stores ever lose money during their first five years of operation?"
        ],
        "hint": "Extremes test: the right question's two answers push the argument opposite ways.",
        "expl": "Correct answer: C. B is the most chosen wrong answer. Remember one thing: the shop that has the maximum numbers of customers may be the first to go bankrupt (imagine giving away things at 90% discount) … and the shop that has very few customers can be extremely profitable. So, this answer is PLAIN wrong.",
        "level": "hard"
      },
      {
        "n": 10,
        "topic": "Evaluate the argument",
        "correct": "C",
        "options": 5,
        "text": "Between 1976 and 1985, chemical wastes were dumped into Cod Bay. Today, 3 percent of the bay's bluefin cod population have deformed fins, and wary consumers have stopped buying the fish. In seeking financial reparations from companies that dumped the chemicals, representatives of Cod Bay's fishing industry have claimed that since the chemicals are known to cause genetic mutations, the deformity in the bluefin cod must have been caused by the presence of those chemicals in Cod Bay. The answer to each of the following questions would be helpful in evaluating the representatives' claim EXCEPT:",
        "choices": [
          "What is the incidence of deformed fins in bluefin cod that are not exposed to chemicals such as those dumped into Cod Bay?",
          "What was the incidence of deformed fins in bluefin cod in Cod Bay before the chemical dumping began?",
          "Has the consumption of the bluefin cod from Cod Bay that have deformed fins caused any health problems in the people who ate them?",
          "Are bluefin cod prone to any naturally occurring diseases that can cause fin deformities of the same kind as those displayed by the bluefin cod of Cod Bay?",
          "Are there gene-altering pollutants present in Cod Bay other than the chemical wastes that were dumped by the companies?"
        ],
        "hint": "Extremes test: the right question's two answers push the argument opposite ways.",
        "expl": "Correct answer: C. The argument opens by presenting two premises: in the past chemical wastes were dumped into Cod Bay, and today 3 percent of the bluefin cod have deformed fins, which has caused consumers to stop buying the cod.",
        "level": "hard"
      },
      {
        "n": 11,
        "topic": "Evaluate the argument",
        "correct": "C",
        "options": 5,
        "text": "A translation invariably reflects the writing style of the translator. Sometimes when a long document needs to be translated quickly, several translators are put to work on the job, each assigned to translate part of the document. In these cases, the result is usually a translation marked by different and often incompatible writing styles. Certain computer programs for language translation that work without the intervention of human translators can finish the job faster than human translators and produce a stylistically uniform translation with an 80 percent accuracy rate. Therefore, when a long document needs to be translated quickly, it is better to use a computer translation program than human translators. Which one of the following issues would be LEAST important to resolve in evaluating the argument?",
        "choices": [
          "whether the problem of stylistic variety in human translation could be solved by giving stylistic guidelines to human translators",
          "whether numerical comparisons of the accuracy of translations can reasonably be made",
          "whether computer translation programs, like human translators, each have their own distinct writing style",
          "whether the computer translation contains errors of grammar and usage that drastically alter the meaning of the text",
          "how the accuracy rate of computer translation programs compares with that of human translators in relation to the users' needs"
        ],
        "hint": "Four of these could change your mind about the recommendation. Find the one that cannot.",
        "expl": "Step 1 — The recommendation: for a long document needing a fast turnaround, use a computer program rather than several human translators.\nStep 2 — The whole case for the computer rests on speed plus [[stylistic uniformity]], since splitting the job across humans produces clashing styles.\nStep 3 — (C) asks whether different computer programs each have their own distinct style. That does not matter: a single document is run through a single program, so the output is uniform whatever that program's style happens to be. Resolving it changes nothing — so it is LEAST important.\nStep 4 — Each of the others matters. (A) would remove the human side's only disadvantage. (B) questions whether the 80 percent figure is even meaningful. (D) asks whether the 20 percent of errors distort meaning badly. (E) compares the two accuracy rates against what users actually need.\nAnswer: C.",
        "level": "hard"
      },
      {
        "n": 12,
        "topic": "Evaluate the argument",
        "correct": "D",
        "options": 5,
        "text": "Very powerful volcanic eruptions send large amounts of ash high into the atmosphere, blocking sunlight and causing abnormally cold temperatures for a year or more after the eruption. In 44 B.C. there was a powerful eruption of Mount Etna in Sicily. In the following year, Chinese historians recorded summer frosts and dimmed sunlight in China, thousands of miles east of Sicily. If these phenomena were caused by volcanic ash in the atmosphere, then the ash sent into the atmosphere by Mount Etna's eruption must have spread over great distances. In evaluating the support given for the conclusion advanced in the last sentence of the passage, it would be most important to determine whether",
        "choices": [
          "modern monitoring equipment can detect the precise path of volcanic ash in the atmosphere",
          "the abnormal weather in China lasted for a full year or longer",
          "temperatures in Sicily were abnormally cold after Mount Etna erupted",
          "there were any volcanic eruptions near China around the time of Mount Etna's eruption",
          "subsequent eruptions of Mount Etna were as powerful as the one in 44 B.C."
        ],
        "hint": "Extremes test: the right question's two answers push the argument opposite ways.",
        "expl": "Correct answer: D. Conclusion: If atmospheric volcanic ash caused China's weird weather in 43 B.C., then Mt. Etna's erupted ash must have spread over great distances Premise: There was weird weather in China the year after Mt. Etna erupted In order to assess assumptions/objections to arguments, we frequently assume the opposite of the conclusion.",
        "level": "hard"
      }
    ]
  },
  {
    "id": "cr-paradox",
    "title": "Explain the Paradox",
    "section": "cr",
    "source": "CR practice — explain the paradox",
    "questions": [
      {
        "n": 1,
        "topic": "Explain the paradox",
        "correct": "B",
        "options": 5,
        "text": "Since moving to a better time slot, a TV show's audience nearly doubled, yet sales of its branded merchandise fell sharply over the same period. Which best explains this?",
        "choices": [
          "Rising popularity of a show usually raises the price of its merchandise.",
          "Six months ago the producers ended the deep merchandise discounts they had used to build the show's popularity.",
          "The show's writers changed six months ago.",
          "Merchandise for other shows sold well that year.",
          "The new time slot is later in the evening."
        ],
        "hint": "Find a new fact that lets both facts (more viewers, fewer sales) be true at once.",
        "expl": "Ending the deep discounts (B) raised prices, so more viewers can coincide with fewer units sold — both facts stand. The others don't connect audience growth to falling merchandise sales.\nAnswer: B.",
        "level": "medium"
      },
      {
        "n": 2,
        "topic": "Explain the paradox",
        "correct": "C",
        "options": 5,
        "text": "An anti-theft device is known to lower the chance that a car is stolen. Yet cars fitted with the device are stolen at a higher rate than cars without it. Which best resolves the paradox?",
        "choices": [
          "The device is inexpensive to install.",
          "Thieves generally avoid cars they know have the device.",
          "The device is chosen mainly for expensive, highly desirable cars that thieves target most.",
          "Most car owners choose not to install the device.",
          "The device occasionally malfunctions."
        ],
        "hint": "A selection effect: what kind of car tends to get the device?",
        "expl": "If the device is installed mostly on the most theft-prone luxury cars (C), those cars are stolen more often despite the device lowering each car's individual risk — both facts hold.\nAnswer: C.",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Explain the paradox",
        "correct": "E",
        "options": 5,
        "text": "Which of the following most logically completes the passage? Concerned about financial well-being of its elderly citizens, the government of Runagia decided two years ago to increase by 20 percent the government-provided pension paid to all Runagians over 65. Inflation in the intervening period has been negligible, and the increase has been duly received by all eligible Runagians. Nevertheless, many of them are no better off financially than they were before the increase, in large part because .",
        "choices": [
          "They rely entirely on the government pension for their income",
          "Runagian banks are so inefficient that it can take up to three weeks to cash a pension check",
          "They buy goods whose prices tend to rise especially fast in times of inflation",
          "The pension was increased when the number of elderly Runagians below the poverty level reached an all-time high",
          "In Runagia children typically supplement the income of elderly parents, but only by enough to provide them with a comfortable living"
        ],
        "hint": "Find a new fact that lets both surprising facts be true at once.",
        "expl": "Correct answer: E. Summary: The government increased all the elderly people's pensions but, for some reason, the elderly people don't actually have any more money now. Our challenge is to find the \"some reason\" here. We need a reason why the increase will have NO EFFECT on the elderly people's income.",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Explain the paradox",
        "correct": "E",
        "options": 5,
        "text": "Which of the following, if true, most logically completes the passage? A recent poll found that almost all residents of Nalmed Province favored a massive expansion of the commuter rail system as a means of significantly easing congestion on the province's highways and were willing to help pay for the expansion through an increase in their taxes. Nevertheless, the poll results indicate that expansion of the rail system, if successfully completed, would be unlikely to achieve its goal of easing congestion, because .",
        "choices": [
          "the proposed expansion to the commuter rail system will make it possible for some people who both live and work at suburban locations to commute by rail",
          "of the less than 20 percent of residents not counted as favoring the expansion, about half claimed to have no opinion one way or the other",
          "the twice-daily periods of peak congestion caused by people commuting in cars have grown from about an hour each to almost two and a half hours each in the past 20 years",
          "expanding the commuter rail system will require the construction of dozens of miles of new railbed",
          "all people in favor of expanding the rail system reported less congestion during their highway commute as the primary benefit that they will experience once the expansion of the railway network is complete"
        ],
        "hint": "Find a new fact that lets both surprising facts be true at once.",
        "expl": "Correct answer: E. E. CORRECT. This indicates that all people taking the survey plan to use the highway even after the railways are expanded. Therefore, if all these people continued to drive to work, the congestion on the highway won't ease despite the expansion of the railways.",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Explain the paradox",
        "correct": "E",
        "options": 5,
        "text": "In order to raise revenue, the federal government planned a tax amnesty program that allows tax delinquents to pay all owed tax without added financial penalty. However, economists projected that the federal government would collect a far lower percentage of total tax owed by delinquents than did state governments that implement similar programs. Which of the following, if true, would most contribute to an explanation of the economists' projections?",
        "choices": [
          "Tax amnesty programs are only successful if they are widely publicized.",
          "Most people who honestly pay their state tax are equally honest in paying their federal tax.",
          "Although federal tax delinquents usually must pay high financial penalties, the states require far lower financial penalties.",
          "The state tax rate varies considerably from state to state, but the federal tax is levied according to laws which apply to citizens of all the states.",
          "Unlike most federal tax delinquents, most state tax delinquents fail to pay state tax because of an oversight rather than a decision not to pay."
        ],
        "hint": "Find a new fact that lets both surprising facts be true at once.",
        "expl": "Correct answer: E. Summary: Fact 1: Federal government implemented a tax amnesty program. Fact 2: Tax amnesty program allows tax delinquents to pay all owed tax without added financial penalty. Prediction: This program will not be as effective for the federal government as it was for the state government. We need an option that supports this prediction: A.",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Explain the paradox",
        "correct": "C",
        "options": 5,
        "text": "For several years, per capita expenditure on prescription drugs in Voronia rose by fifteen percent or more annually. In order to curb these dramatic increases, the ministry of health prohibited drug manufacturers from raising any of their existing products' prices. Even though use of prescription drugs did not expand after this price freeze, per capita expenditure for prescription drugs continued to increase by a substantial percentage each year. Which of the following, if true, most helps to explain why the ministry's action did not achieve its goal?",
        "choices": [
          "The population of Voronia rose steadily throughout the period.",
          "Improvements in manufacturing processes enabled drug manufacturers to maintain high profit levels on drugs despite the price freeze.",
          "After price increases were prohibited, drug manufacturers changed the brand names and labels of most of their existing prescription drug products.",
          "In addition to imposing a price freeze, the government encouraged doctors to prescribe generic versions of common drugs instead of the more expensive brand- name versions.",
          "After price increases were prohibited, some foreign manufacturers of expensive drugs ceased marketing them in Voronia."
        ],
        "hint": "Find a new fact that lets both surprising facts be true at once.",
        "expl": "Correct answer: C. If we introduce a new product at a very high price, we can't be accused of \"increasing\" the price … increase happens on an existing price. \"Per-capita expenditure\" is the total price paid for drugs (price per pill * # of pills) divided by the number of people.",
        "level": "medium"
      },
      {
        "n": 7,
        "topic": "Explain the paradox",
        "correct": "D",
        "options": 5,
        "text": "In Rubaria, excellent health care is available to virtually the entire population, whereas very few people in Terland receive adequate medical care. Yet, although the death rate for most diseases is higher in Terland than in Rubaria, the percentage of the male population that dies from prostate cancer is significantly higher in Rubaria than in Terland. Which of the following, if true, most helps to explain the disparity between the prostate cancer death rate in Rubaria and Terland?",
        "choices": [
          "Effective treatment of prostate cancer in its early stages generally requires medical techniques available in Rubaria but not in Terland.",
          "Being in poor general health does not increase one's risk of developing prostate cancer.",
          "It is possible to decrease one's risk of getting prostate cancer by eating certain kinds of foods, and such foods are more readily available in Rubaria than in Terland.",
          "All men who have prostate cancer around the world are older than the life expectancy for male inhabitants of Terland, whereas men live to a ripe old age in Rubaria owing to Rubaria's excellent healthcare system.",
          "Among men in Rubaria, the death rate from prostate cancer is significantly higher for those who do not take full advantage of Rubaria's health care system than for those who do."
        ],
        "hint": "Find a new fact that lets both surprising facts be true at once.",
        "expl": "Correct answer: D. This problem is an exact analogue of the real-world situation with such maladies as heart disease and breast/prostate cancer, which generally strike older individuals. There are often strikingly low rates of death from those maladies in countries with otherwise horrible public health (such as sub- Saharan African countries).",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Explain the paradox",
        "correct": "E",
        "options": 5,
        "text": "The cotton farms of Country Q became so productive that the market could not absorb all that they produced. Consequently, cotton prices fell. The government tried to boost cotton prices by offering farmers who took 25 percent of their cotton acreage out of production direct support payments up to a specified maximum per farm. The government's program, if successful, will not be a net burden on the budget. Which of the following, if true, is the best basis for an explanation of how this could be so?",
        "choices": [
          "Cotton production in several counties other than Q declined slightly the year that the support- payment program went into effect in Q.",
          "The first year that the support-payment program was in effect, cotton acreage in Q was 5% below its level in the base year for the program.",
          "The specified maximum per farm meant that for very large cotton farms the support payments were less per acre for those acres that were withdrawn from production than they were for smaller farms.",
          "Farmers who wished to qualify for support payments could not use the cotton acreage that was withdrawn from production to grow any other crop.",
          "Depressed cotton prices meant operating losses for cotton farms, and the government lost revenue from taxes on farm profits, but by introducing the new plan, the government hopes that prices will go up again and, thus enabling the government to collect more taxes than it currently collects."
        ],
        "hint": "Find a new fact that lets both surprising facts be true at once.",
        "expl": "Correct answer: E. CORRECT option: E The government is giving away money (negative budget) to farmers who take 25% of their farms‟ acreage out of cotton. If the farmers have operating losses as of now, they are likely to have a lower income and hence they would pay less tax to the government (negative budget).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Explain the paradox",
        "correct": "E",
        "options": 5,
        "text": "Finding of a survey of Systems magazine subscribers: Thirty percent of all merchandise orders placed by subscribers in response to advertisements in the magazine last year were placed by subscribers under age thirty-five. Finding of a survey of advertisers in Systems magazine: Most of the merchandise orders placed in response to advertisements in Systems last year were placed by people under age thirty-five. For both of the findings to be accurate, which of the following must be true?",
        "choices": [
          "More subscribers to Systems who have never ordered merchandise in response to advertisements in the magazine are age thirty-five or over than are under age thirty- five.",
          "Among subscribers to Systems, the proportion who are under age thirty-five was considerably lower last year than it is now.",
          "Most merchandise orders placed in response to advertisements in Systems last year were placed by Systems subscribers over age thirty-five.",
          "Last year, the average dollar amount of merchandise orders placed was less for subscribers under age thirty-five than for those aged thirty-five or over.",
          "Last year many people who placed orders for merchandise in response to advertisements in Systems were not subscribers to the magazine."
        ],
        "hint": "Find a new fact that lets both surprising facts be true at once.",
        "expl": "Correct answer: E. The number of orders placed = those by subscribers + those by nonsubscribers If say 100 subscribers placed orders and 30 of them were below thirty-five. If there were 1000 nonsubscribers who placed orders, out of whom 900 were below thirty-five, we can reason thus: The total orders placed = 1100 and out of them 930 are from people below thirty-five.",
        "level": "medium"
      },
      {
        "n": 10,
        "topic": "Explain the paradox",
        "correct": "D",
        "options": 5,
        "text": "Because dinosaurs were reptiles, scientists once assumed that, like all reptiles alive today, dinosaurs were cold-blooded. The recent discovery of dinosaur fossils in the northern arctic, however, has led a number of researchers to conclude that at least some dinosaurs might have been warm-blooded. These researchers point out that only warm-blooded animals could have withstood the frigid temperatures that are characteristic of arctic winters, whereas cold-blooded animals would have frozen to death in the extreme cold. Which one of the following, if true, weakens the researchers' argument?",
        "choices": [
          "Today's reptiles are generally confined to regions of temperate or even tropical climates.",
          "The fossils show the arctic dinosaurs to have been substantially smaller than other known species of dinosaurs.",
          "The arctic dinosaur fossils were found alongside fossils of plants known for their ability to withstand extremely cold temperatures.",
          "The number of fossils found together indicates herds of dinosaurs so large that they would need to migrate to find a continual food supply.",
          "Experts on prehistoric climatic conditions believe that winter temperatures in the prehistoric northern arctic were not significantly different from what they are today."
        ],
        "hint": "Find a new fact that lets both surprising facts be true at once.",
        "expl": "Correct answer: D. Dinosaur fossils in northern arctic + Only warm-blooded animals can withstand arctic winters -> Some dinosaurs were warm-blooded. What are the gaps in this argument? For one, perhaps the winters may have been different when the dinosaurs were around.",
        "level": "medium"
      }
    ]
  },
  {
    "id": "cr-flaw",
    "title": "Identify the Flaw",
    "section": "cr",
    "source": "CR practice — identify the flaw",
    "questions": [
      {
        "n": 1,
        "topic": "Identify the flaw",
        "correct": "D",
        "options": 5,
        "text": "Airline representative: The percentage of flight delays caused by airline error fell significantly this year, so airlines have clearly addressed preventable problems; the number of preventable delays is decreasing. Which most clearly points to a logical flaw in the reasoning?",
        "choices": [
          "Airlines may underreport the percentage of delays caused by airline error for financial reasons.",
          "Uncontrollable delays could have increased complaints to airlines.",
          "Complaints may not reliably measure how many errors occurred.",
          "Delays from weather and other uncontrollable factors could have risen dramatically this year.",
          "Customers might not believe particular delays were caused by uncontrollable factors."
        ],
        "hint": "A falling percentage of a whole needn't mean a falling count — the whole may have grown.",
        "expl": "The argument treats a smaller percentage as a smaller number. If uncontrollable delays surged (D), the total grew, so the percentage from airline error could drop even while the count of preventable delays stayed the same or rose.\nAnswer: D.",
        "level": "medium"
      },
      {
        "n": 2,
        "topic": "Identify the flaw",
        "correct": "D",
        "options": 5,
        "text": "If a garden does not get plenty of water and sunlight and is not planted in rich soil, it will not be productive. Patricia's garden gets ideal water and sunlight and has rich soil. Hence it will be productive. The reasoning is flawed because it:",
        "choices": [
          "fails to define the term “ideal” adequately.",
          "infers a cause from a correlation.",
          "confuses a cause with its effect.",
          "treats a set of necessary conditions as sufficient.",
          "relies on an unrepresentative sample."
        ],
        "hint": "The premise gives what's needed to avoid failure, not what guarantees success.",
        "expl": "Water, sunlight and rich soil are stated as necessary (their absence guarantees failure). Having them doesn't guarantee productivity — the argument treats necessary conditions as sufficient.\nAnswer: D.",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Identify the flaw",
        "correct": "E",
        "options": 5,
        "text": "Restaurant manager: In response to requests from our patrons for vegetarian main dishes, we recently introduced three: an eggplant and zucchini casserole with tomatoes, brown rice with mushrooms, and potatoes baked with cheese. The first two are frequently ordered, but no one orders the potato dish, although it costs less than the other two. Clearly, then, our patrons prefer not to eat potatoes. Which one of the following is an error of reasoning in the restaurant manager's argument?",
        "choices": [
          "concluding that two things that occur at the same time have a common cause",
          "drawing a conclusion that is inconsistent with one premise of the argument",
          "ignoring possible differences between what people say they want and what they actually choose",
          "attempting to prove a claim on the basis of evidence that a number of people hold that claim to be true",
          "treating one of several plausible explanations of a phenomenon as the only possible explanation"
        ],
        "hint": "Name the reasoning error - often a number/percentage, cause-effect, or scope gap.",
        "expl": "Correct answer: E. We can think of the argument core as follows: No one orders the potato dish -> Our patrons prefer not to eat potatoes. Did you see a flaw when you read the argument initially? The author concludes that the patrons must not prefer potatoes, and the evidence he presents is that no one orders the potato dish.",
        "level": "hard"
      },
      {
        "n": 4,
        "topic": "Identify the flaw",
        "correct": "E",
        "options": 5,
        "text": "A controversial program rewards prison inmates who behave particularly well in prison by giving them the chance to receive free cosmetic plastic surgery performed by medical students. The program is obviously morally questionable, both in its assumptions about what inmates might want and in its use of the prison population to train future surgeons. Putting these moral issues aside, however, the surgery clearly has a powerful rehabilitative effect, as is shown by the fact that, among recipients of the surgery, the proportion who are convicted of new crimes committed after release is only half that for the prison population as a whole. A flaw in the reasoning of the passage is that it",
        "choices": [
          "allows moral issues to be a consideration in presenting evidence about matters of fact",
          "dismisses moral considerations on the grounds that only matters of fact are relevant",
          "labels the program as \"controversial\" instead of discussing the issues that give rise to controversy",
          "asserts that the rehabilitation of criminals is not a moral issue",
          "relies on evidence drawn from a sample that there is reason to believe is unrepresentative"
        ],
        "hint": "Name the reasoning error - often a number/percentage, cause-effect, or scope gap.",
        "expl": "Correct answer: E. (E) is correct. The conclusion that the surgery has \"a powerful rehabilitative effect\" contains a word that lets us know the author is asserting a causal relationship -\"effect.\" Does surgery truly cause lower rates of recidivism? Let's go to our checklist.",
        "level": "hard"
      },
      {
        "n": 5,
        "topic": "Identify the flaw",
        "correct": "D",
        "options": 5,
        "text": "The violent crime rate (number of violent crimes per 1,000 residents) in Meadowbrook is 60 percent higher now than it was four years ago. The corresponding increase for Parkdale is only 10 percent. These figures support the conclusion that residents of Meadowbrook are more likely to become victims of violent crime than are residents of Parkdale. The argument above is flawed because it fails to take into account",
        "choices": [
          "changes in the population density of both Parkdale and Meadowbrook over the past four years",
          "how the rate of population growth in Meadowbrook over the past four years compares to the corresponding rate for Parkdale",
          "the ratio of violent to nonviolent crimes committed during the past four years in Meadowbrook and Parkdale",
          "the violent crime rates in Meadowbrook and Parkdale four years ago",
          "how Meadowbrook's expenditures for crime prevention over the past four years compare to Parkdale's expenditures"
        ],
        "hint": "Name the reasoning error - often a number/percentage, cause-effect, or scope gap.",
        "expl": "Correct answer: D. Crime Rate at Meadowbrook → 60% higher than 4 years ago Crime Rate at Parkdale → 10% higher than 4 years ago. The argument concludes that people of Meadowbrook are more likely to become victims due to 60% increase. This obviously fails to take into account the initial rate of crime 4 years ago.",
        "level": "hard"
      }
    ]
  },
  {
    "id": "cr-boldface",
    "title": "Boldface & Method of Reasoning",
    "section": "cr",
    "source": "CR practice — boldface & method of reasoning",
    "questions": [
      {
        "n": 1,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "Critic: The mayor claims the new subway line will ease the city's traffic. But [[the line serves only the wealthy suburbs, whose residents rarely use public transit]]. Therefore [[the line will do little to reduce traffic]].\nIn the critic's argument, the two boldface portions play which roles?",
        "choices": [
          "The first is the critic's conclusion; the second is evidence for it.",
          "The first is evidence the critic uses; the second is the critic's conclusion.",
          "Both are conclusions the critic rejects.",
          "The first is the mayor's conclusion; the second supports the mayor.",
          "The first is an assumption; the second is a counterexample."
        ],
        "hint": "Find the claim everything else is there to support — that is the conclusion, whoever holds it.",
        "expl": "Step 1 — Map the argument. The mayor's claim (traffic will ease) is what the critic is attacking, so it is not the critic's own conclusion.\nStep 2 — \"Therefore\" points at the critic's conclusion: the line will do little to reduce traffic. That is the [[second]] boldface.\nStep 3 — The [[first]] boldface — the line serves suburbs whose residents rarely use transit — is the reason offered for that conclusion, i.e. evidence.\nStep 4 — So the order is evidence → conclusion, which is (B). (A) reverses the two. (C) is wrong because the critic asserts the second, not rejects it. (D) misassigns the first to the mayor, who never said it. (E) calls the first an assumption, but it is stated outright, not assumed.\nAnswer: B.",
        "level": "medium"
      }
    ]
  },
  {
    "id": "rc-science-lichen",
    "title": "Passage — Lichens & Air Quality",
    "section": "rc",
    "source": "Adapted from your course material",
    "passage": {
      "title": "Lichens as Bioindicators",
      "paras": [
        "For more than a century, ecologists have recognized that lichens—composite organisms formed from a fungus living in partnership with an alga or cyanobacterium—are unusually sensitive to air pollution. Because lichens lack roots and absorb water and nutrients directly from the atmosphere across their entire surface, they cannot filter out airborne contaminants the way rooted plants can. Sulfur dioxide, in particular, disrupts the photosynthetic partner within the lichen, and even modest concentrations can kill sensitive species. As a result, the presence, absence, and diversity of lichens in a given area have long served as a rough gauge of local air quality.",
        "Early surveys exploited this sensitivity in a straightforward way: researchers mapped the “lichen deserts” that surrounded industrial cities, zones in which few or no species survived, and correlated their extent with measured sulfur dioxide levels. The method was inexpensive and required no instruments, but it was also crude. It could reveal that pollution was severe, yet it said little about which pollutants were responsible or how concentrations varied over time. Two cities with identical lichen deserts might have very different pollution profiles.",
        "More recent work has refined the approach considerably. Rather than simply noting whether lichens are present, investigators now measure the chemical composition of lichen tissue itself, which accumulates heavy metals and nitrogen compounds in proportion to atmospheric deposition. This tissue analysis allows researchers to distinguish among pollutants and to detect contaminants, such as certain metals, that leave no visible mark on the organism. Critics counter that tissue concentrations reflect not only current air quality but also the age of the lichen and the peculiarities of the site, and that laboratory analysis sacrifices the very cheapness that made lichen surveys attractive in the first place. Even so, few dispute that lichens remain among the most cost-effective monitors available."
      ]
    },
    "questions": [
      {
        "n": 1,
        "topic": "Main idea / primary purpose",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "The primary purpose of the passage is to",
        "choices": [
          "argue that tissue analysis should replace all earlier methods of monitoring air quality",
          "explain why lichens are more sensitive to pollution than rooted plants are",
          "describe how the use of lichens to assess air quality has developed and been refined",
          "compare the pollution profiles of two industrial cities",
          "warn that lichen-based monitoring is too crude to be scientifically useful"
        ],
        "hint": "Look for the choice that captures the whole passage, not just one paragraph.",
        "expl": "The passage traces lichen monitoring from early 'lichen desert' mapping to modern tissue analysis, noting strengths and limits at each stage — a description of how the method developed and was refined (C). (A) overstates: the passage says tissue analysis sacrifices cheapness and doesn't call for replacing all methods. (B) and (D) are details, not the main point. (E) contradicts the closing sentence, which affirms lichens are cost-effective monitors."
      },
      {
        "n": 2,
        "topic": "Supporting detail",
        "correct": "B",
        "options": 5,
        "level": "easy",
        "text": "According to the passage, lichens are especially vulnerable to air pollution because they",
        "choices": [
          "grow only in regions with heavy industrial activity",
          "absorb water and nutrients directly from the air across their whole surface",
          "depend on a single photosynthetic partner that cannot be replaced",
          "accumulate heavy metals faster than rooted plants do",
          "lack the ability to reproduce in contaminated soil"
        ],
        "hint": "Find the sentence that explains why lichens can't filter contaminants.",
        "expl": "Paragraph 1 states lichens 'absorb water and nutrients directly from the atmosphere across their entire surface' and so 'cannot filter out airborne contaminants' — choice B. The other options are not given as the reason for their vulnerability."
      },
      {
        "n": 3,
        "topic": "Inference",
        "correct": "D",
        "options": 5,
        "level": "hard",
        "text": "The passage suggests that a limitation of the early 'lichen desert' surveys was that they",
        "choices": [
          "required expensive laboratory equipment",
          "could not detect severe pollution",
          "killed the sensitive lichen species they relied on",
          "could not distinguish which pollutants were present",
          "overestimated the extent of contaminated zones"
        ],
        "hint": "Contrast what the early method could show with what the modern method adds.",
        "expl": "Paragraph 2 says the early method 'said little about which pollutants were responsible,' and paragraph 3 credits tissue analysis with letting researchers 'distinguish among pollutants' — so the early surveys could not identify which pollutants were present (D). (A) is wrong: the early method needed no instruments. (B) is contradicted — it revealed severe pollution. (C) and (E) are not supported."
      },
      {
        "n": 4,
        "topic": "Function of a detail or paragraph",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "The author mentions that 'two cities with identical lichen deserts might have very different pollution profiles' primarily in order to",
        "choices": [
          "illustrate a shortcoming of the early survey method",
          "argue that industrial cities are the worst polluters",
          "show that lichens are unreliable indicators of any pollution",
          "introduce the chemical composition of lichen tissue",
          "question whether sulfur dioxide harms lichens"
        ],
        "hint": "What point is that sentence supporting in its paragraph?",
        "expl": "The sentence closes the paragraph on the early method's crudeness, giving a concrete example of what that method could not reveal — it illustrates a shortcoming (A). It is not an argument about who pollutes most (B), a claim that lichens are useless (C, contradicted later), an introduction to tissue analysis (D, next paragraph), or doubt about sulfur dioxide (E)."
      },
      {
        "n": 5,
        "topic": "Author's tone & attitude",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "The author's attitude toward modern tissue-analysis methods can best be described as",
        "choices": [
          "unqualified enthusiasm",
          "deep skepticism",
          "appreciation tempered by awareness of limitations",
          "indifference",
          "nostalgia for older methods"
        ],
        "hint": "Weigh how the author balances the method's advantages against the critics' points.",
        "expl": "The author credits tissue analysis with real refinements yet reports critics' concerns about site effects, lichen age, and lost cheapness — appreciation tempered by awareness of limitations (C). The balanced treatment rules out unqualified enthusiasm (A) and deep skepticism (B); the author is clearly engaged, not indifferent (D); and nothing expresses nostalgia (E)."
      }
    ]
  },
  {
    "id": "rc-business-remote",
    "title": "Passage — Remote Work Productivity",
    "section": "rc",
    "source": "Adapted from your course material",
    "passage": {
      "title": "Measuring Remote-Work Productivity",
      "paras": [
        "When large numbers of office employees began working from home, many executives predicted a collapse in productivity, while enthusiasts of remote work forecast the opposite. Several years of data have complicated both stories. Studies that measure output per hour—code shipped, claims processed, calls resolved—generally find modest gains for remote workers, on the order of a few percent. But studies that track career outcomes over longer periods find that fully remote employees are promoted less often and are more likely to leave their firms, suggesting that short-run output and long-run advancement can move in opposite directions.",
        "One explanation for the divergence focuses on the nature of the tasks being measured. Routine, well-defined work—the kind most easily quantified—may indeed be done faster at home, where interruptions are fewer. The activities that drive promotion, however, are often the hardest to measure: mentoring junior colleagues, shaping a team's direction, building the informal relationships through which influence flows. These activities depend on unplanned, face-to-face contact, precisely what remote work eliminates. On this view, remote work does not make employees less capable; it makes their most valuable contributions less visible and less likely to occur.",
        "A competing explanation puts the burden on management rather than on remote work itself. If managers reward presence over performance—favoring the employees they see in the hallway—then remote workers will be overlooked regardless of their output. Proponents of this view argue that hybrid schedules and deliberate, structured opportunities for contact can capture most of the flexibility of remote work while restoring the visibility that careers require. The debate is far from settled, but it has already shifted: the question is no longer whether remote work 'works,' but which of its effects are inherent and which are artifacts of how firms choose to manage it."
      ]
    },
    "questions": [
      {
        "n": 1,
        "topic": "Main idea / primary purpose",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "The passage is primarily concerned with",
        "choices": [
          "proving that remote work reduces employee productivity",
          "examining why short-term output and long-term careers diverge under remote work",
          "recommending that firms abandon fully remote arrangements",
          "describing how executives mistakenly predicted a productivity collapse",
          "comparing the pay of remote and in-office employees"
        ],
        "hint": "The whole passage returns to one puzzle. What is it?",
        "expl": "The passage sets up the puzzle that output rises modestly while promotions and retention fall, then explores two explanations — it examines why the two diverge (B). (A) and (C) overstate; the passage is careful and non-prescriptive. (D) is only the opening setup. (E) pay is never discussed."
      },
      {
        "n": 2,
        "topic": "Supporting detail",
        "correct": "A",
        "options": 5,
        "level": "easy",
        "text": "According to the passage, studies of output per hour for remote workers generally find",
        "choices": [
          "modest gains of a few percent",
          "large gains of twenty percent or more",
          "no measurable change",
          "steep declines",
          "results too inconsistent to summarize"
        ],
        "hint": "Re-read the first paragraph's description of output studies.",
        "expl": "Paragraph 1 says output studies 'generally find modest gains... on the order of a few percent' (A)."
      },
      {
        "n": 3,
        "topic": "Inference",
        "correct": "D",
        "options": 5,
        "level": "hard",
        "text": "The first explanation described in the passage implies that the tasks most responsible for promotion are",
        "choices": [
          "the same tasks that are easiest to measure",
          "performed better by remote employees than by in-office employees",
          "irrelevant to a firm's overall productivity",
          "difficult to quantify and dependent on in-person contact",
          "valued less by managers than routine work is"
        ],
        "hint": "The first explanation contrasts measurable routine work with the drivers of promotion.",
        "expl": "The second paragraph says promotion-driving activities 'are often the hardest to measure' and 'depend on unplanned, face-to-face contact' — difficult to quantify and dependent on in-person contact (D). (A) reverses the contrast; (E) belongs to the second, management-focused explanation, not the first."
      },
      {
        "n": 4,
        "topic": "Function of a detail or paragraph",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "The third paragraph functions chiefly to",
        "choices": [
          "restate the productivity data from the first paragraph",
          "concede that remote work has no measurable benefits",
          "present an alternative explanation that locates the problem in management",
          "prove that hybrid schedules always outperform remote work",
          "dismiss the concerns raised in the second paragraph"
        ],
        "hint": "How does paragraph 3 relate to paragraph 2's explanation?",
        "expl": "Paragraph 3 opens with 'A competing explanation puts the burden on management,' offering an alternative to the task-nature account of paragraph 2 (C). It doesn't restate data (A), deny benefits (B), prove a universal claim — 'always' is too strong (D), or dismiss paragraph 2 (E)."
      },
      {
        "n": 5,
        "topic": "Application / extension",
        "correct": "B",
        "options": 5,
        "level": "hard",
        "text": "Which of the following findings, if true, would most strengthen the second (management-focused) explanation over the first?",
        "choices": [
          "Remote workers doing routine tasks ship more code than in-office peers.",
          "At firms that promote strictly by measured output, remote and in-office workers are promoted at equal rates.",
          "Mentoring is more effective when done face-to-face than over video.",
          "Employees who leave remote jobs cite isolation as their main reason.",
          "Hybrid workers report higher job satisfaction than fully remote workers."
        ],
        "hint": "The management view says the gap comes from how firms reward presence, not from remote work itself.",
        "expl": "If firms that reward measured output rather than presence show no promotion gap, the disadvantage tracks management practices rather than remote work itself — supporting the management-focused view (B). (C) supports the first (task-nature) explanation. (A), (D), and (E) don't isolate management practice as the cause."
      }
    ]
  },
  {
    "id": "rc-social-commons",
    "title": "Passage — Governing the Commons",
    "section": "rc",
    "source": "Adapted from your course material",
    "passage": {
      "title": "Rethinking the Tragedy of the Commons",
      "paras": [
        "A famous argument in economics holds that resources owned in common—a pasture, a fishery, a forest—are inevitably overused. Each individual, the reasoning goes, captures the full benefit of taking one more unit while bearing only a fraction of the cost, which is spread across all users; the predictable result is depletion. For decades this 'tragedy of the commons' was invoked to justify a stark choice: either privatize the resource or place it under centralized state control.",
        "The political scientist Elinor Ostrom challenged the completeness of this dichotomy. Studying communities that had managed shared resources for generations—Swiss alpine pastures, Japanese forests, Spanish irrigation networks—she found many that had avoided depletion without either privatization or top-down regulation. These communities had instead devised their own rules: who could harvest, how much, and when; how the rules would be monitored; and how violations would be penalized, typically through graduated sanctions that began with small fines and escalated only for repeat offenders.",
        "Ostrom did not claim that communities always succeed; many do collapse. Her point was narrower and, for that reason, more powerful. The tragedy is not a law of nature that follows automatically from common ownership. Whether a shared resource is depleted depends on whether its users can communicate, build trust, and enforce agreements among themselves—capacities that vary from one community to the next. By identifying the conditions under which self-governance tends to work, she reframed a supposedly inevitable outcome as a contingent one, and redirected attention from ownership toward the institutions that ownership does or does not supply."
      ]
    },
    "questions": [
      {
        "n": 1,
        "topic": "Main idea / primary purpose",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "The main point of the passage is that",
        "choices": [
          "common ownership of resources always leads to depletion",
          "privatization is the only reliable way to protect shared resources",
          "the depletion of shared resources is a contingent outcome, not an inevitable one",
          "state control of resources is superior to community management",
          "Elinor Ostrom proved that shared resources are never overused"
        ],
        "hint": "The passage builds to Ostrom's reframing in the last paragraph.",
        "expl": "The passage presents the classic 'tragedy' and then Ostrom's finding that depletion depends on whether users can self-govern — reframing an 'inevitable' outcome as contingent (C). (A) and (B) state the very view Ostrom challenges. (D) reverses her point. (E) overstates — she acknowledged many communities collapse."
      },
      {
        "n": 2,
        "topic": "Supporting detail",
        "correct": "E",
        "options": 5,
        "level": "easy",
        "text": "The passage indicates that the communities Ostrom studied enforced their rules through",
        "choices": [
          "privatization of the shared resource",
          "centralized government inspectors",
          "a single large penalty for any violation",
          "prohibiting all harvesting of the resource",
          "graduated sanctions that escalated for repeat offenders"
        ],
        "hint": "Find the sentence describing how violations were penalized.",
        "expl": "Paragraph 2 says penalties came 'through graduated sanctions that began with small fines and escalated only for repeat offenders' (E)."
      },
      {
        "n": 3,
        "topic": "Inference",
        "correct": "B",
        "options": 5,
        "level": "hard",
        "text": "It can be inferred that the traditional 'tragedy of the commons' argument assumes that users of a shared resource",
        "choices": [
          "will always devise rules to protect it",
          "act on individual incentives without coordinating with one another",
          "bear the full cost of their own overuse",
          "are prevented by the state from communicating",
          "prefer state control to privatization"
        ],
        "hint": "Why, on the traditional view, does each person overuse the resource?",
        "expl": "The traditional argument has each individual pursue private benefit while cost is 'spread across all users,' with no mention of coordination — it assumes users act on individual incentives without coordinating (B). Ostrom's contribution was precisely to add coordination. (C) is the opposite of the model's premise — users bear only a fraction of the cost."
      },
      {
        "n": 4,
        "topic": "Function of a detail or paragraph",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "The examples of Swiss pastures, Japanese forests, and Spanish irrigation networks serve to",
        "choices": [
          "provide evidence that self-governance of commons can succeed",
          "show that only European communities manage resources well",
          "prove that privatization is unnecessary anywhere",
          "illustrate resources that have already collapsed",
          "explain why centralized control usually fails"
        ],
        "hint": "What claim are these real cases marshaled to support?",
        "expl": "They are cases Ostrom studied that 'had avoided depletion without either privatization or top-down regulation' — evidence that self-governance can succeed (A). They are not about geography (B), a universal claim (C), collapses (D — the opposite), or the failure of central control (E)."
      },
      {
        "n": 5,
        "topic": "Author's tone & attitude",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "The author's attitude toward Ostrom's argument is best described as",
        "choices": [
          "dismissive",
          "openly hostile",
          "skeptical but curious",
          "approving of its measured scope",
          "indifferent to its conclusions"
        ],
        "hint": "Note how the author frames the narrowness of her claim.",
        "expl": "The author calls her point 'narrower and, for that reason, more powerful,' endorsing its careful, limited scope — approving of its measured scope (D). The passage is clearly favorable, ruling out dismissive (A), hostile (B), skeptical (C), or indifferent (E)."
      }
    ]
  },
  {
    "id": "rc-humanities-jazz",
    "title": "Passage — Improvisation in Jazz",
    "section": "rc",
    "source": "Adapted from your course material",
    "passage": {
      "title": "The Myth of Pure Spontaneity",
      "paras": [
        "Popular accounts of jazz often celebrate improvisation as pure spontaneity—music invented in the moment, unburdened by score or plan. This image is romantic and largely misleading. A soloist stepping forward to improvise is not creating from nothing; she is drawing on a deep reservoir of learned material: scales and their variations, characteristic phrases, rhythmic figures, and the harmonic conventions of the tune being played. What sounds like invention is more accurately described as the rapid, fluent recombination of elements the musician has practiced for years.",
        "This does not diminish the achievement. Language offers a useful analogy. A speaker composing a sentence has never uttered before is nonetheless constrained by vocabulary and grammar; her fluency lies not in escaping those constraints but in deploying them so quickly and appropriately that the result feels effortless. The jazz soloist's freedom is of the same kind. Indeed, the constraints are what make the freedom legible: a listener recognizes a daring substitution or an unexpected rhythmic displacement only against the background of the conventions being bent.",
        "Some critics resist the analogy, arguing that it understates the emotional and physical immediacy of performance—the way a phrase can be shaped by the feel of a room or the response of a fellow musician. The objection has force, but it does not overturn the central point. Even the most responsive improvisation works by selecting, in real time, from possibilities the musician already commands. Spontaneity in jazz is not the absence of preparation; it is preparation made so thorough that it can be redirected instantly."
      ]
    },
    "questions": [
      {
        "n": 1,
        "topic": "Main idea / primary purpose",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "The primary purpose of the passage is to",
        "choices": [
          "trace the historical origins of jazz improvisation",
          "correct a common misconception about what improvisation involves",
          "argue that jazz is inferior to composed music",
          "explain how to learn to improvise",
          "compare jazz with classical performance traditions"
        ],
        "hint": "The first sentence names a popular view; what does the author do with it?",
        "expl": "The passage rejects the 'pure spontaneity' image and reframes improvisation as fluent recombination of learned material — correcting a misconception (B). It is not a history (A), a value judgment against jazz (C), an instructional guide (D), or a genre comparison (E)."
      },
      {
        "n": 2,
        "topic": "Function of a detail or paragraph",
        "correct": "C",
        "options": 5,
        "level": "hard",
        "text": "The analogy to language in the second paragraph is used mainly to",
        "choices": [
          "prove that music and language share a common origin",
          "suggest that improvisation is easier than speaking",
          "clarify how fluency can operate within constraints without being diminished",
          "argue that jazz should be studied like a foreign language",
          "show that grammar rules are as rigid as musical scales"
        ],
        "hint": "What does the speaker-and-sentence comparison help the reader understand?",
        "expl": "The analogy shows that a speaker, though bound by vocabulary and grammar, achieves fluency by deploying those constraints — clarifying that constrained improvisation is no less an achievement (C). It's not about shared origins (A), relative ease (B), pedagogy (D), or the rigidity of grammar (E)."
      },
      {
        "n": 3,
        "topic": "Inference",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "The passage implies that a listener's ability to appreciate a bold improvised choice depends on",
        "choices": [
          "familiarity with the conventions the soloist is bending",
          "having studied the specific tune in advance",
          "the physical layout of the performance room",
          "the soloist's years of practice",
          "the absence of any harmonic plan"
        ],
        "hint": "Re-read the sentence about what makes freedom 'legible.'",
        "expl": "Paragraph 2 says a listener recognizes a daring move 'only against the background of the conventions being bent' — appreciation depends on familiarity with those conventions (A). The other options are not what the passage ties recognition to."
      },
      {
        "n": 4,
        "topic": "Author's tone & attitude",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "In the third paragraph, the author's response to the critics' objection is to",
        "choices": [
          "reject it as entirely without merit",
          "accept it and abandon the language analogy",
          "ignore it in favor of new evidence",
          "grant that it has force while maintaining the central claim",
          "concede that spontaneity requires no preparation"
        ],
        "hint": "Note the phrase 'The objection has force, but...'",
        "expl": "The author writes 'The objection has force, but it does not overturn the central point' — granting the objection while maintaining the claim (D). This rules out outright rejection (A), abandonment (B), ignoring (C), and (E), which contradicts the passage's thesis."
      },
      {
        "n": 5,
        "topic": "Supporting detail",
        "correct": "E",
        "options": 5,
        "level": "easy",
        "text": "According to the passage, a jazz soloist beginning to improvise draws on all of the following EXCEPT",
        "choices": [
          "scales and their variations",
          "characteristic phrases",
          "rhythmic figures",
          "the harmonic conventions of the tune",
          "a fully written-out score of the solo"
        ],
        "hint": "Four items are listed in paragraph 1; one contradicts the passage's whole point.",
        "expl": "Paragraph 1 lists scales, phrases, rhythmic figures, and harmonic conventions as the soloist's reservoir. A 'fully written-out score of the solo' (E) is exactly what improvisation lacks — the EXCEPT answer."
      }
    ]
  },
  {
    "id": "rc-science-dwarf",
    "title": "Passage — Island Dwarfism",
    "section": "rc",
    "source": "Adapted from your course material",
    "passage": {
      "title": "Why Island Animals Shrink",
      "paras": [
        "Paleontologists have long noted a striking pattern: large mammals stranded on islands tend, over many generations, to evolve smaller body sizes than their mainland relatives. Dwarf elephants no taller than a large dog once roamed several Mediterranean islands; miniature hippos and deer appear in island fossil records around the world. The pattern is consistent enough to have earned a name, the 'island rule,' yet its causes remain debated.",
        "The most widely cited explanation is resource limitation. Islands support smaller populations of prey and less total vegetation than continents, and a smaller body requires less food to sustain. Under chronic scarcity, natural selection should favor individuals that can survive and reproduce on less—and, all else equal, those are the smaller ones. A complementary factor is the absence of large predators. On the mainland, big body size offers protection against being eaten; remove the predators, as isolation on an island often does, and that pressure toward large size relaxes, allowing the food-driven pressure toward small size to prevail.",
        "Not every case fits neatly. Some island species grow larger, not smaller—giant tortoises and oversized rodents are familiar examples—and the direction of change seems to depend on the animal's starting size: very large mainland species tend to shrink, while very small ones tend to grow. This has led some researchers to argue that the 'island rule' is less a single rule than a convergence toward an optimal intermediate size, one at which the trade-offs between finding enough food and avoiding starvation are best balanced for a given environment. On this account, islands do not so much shrink animals as strip away the mainland pressures that had pushed them away from that optimum in the first place."
      ]
    },
    "questions": [
      {
        "n": 1,
        "topic": "Main idea / primary purpose",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "The passage is primarily concerned with",
        "choices": [
          "proving that all island mammals eventually become smaller",
          "describing the discovery of dwarf elephant fossils",
          "presenting and refining explanations for size changes in island animals",
          "arguing that predators are the sole cause of body-size evolution",
          "comparing Mediterranean islands with tropical ones"
        ],
        "hint": "The passage offers explanations and then complicates them.",
        "expl": "The passage lays out the 'island rule,' its leading explanations, and then a refinement (the convergence-to-optimum view) — presenting and refining explanations (C). (A) is contradicted by paragraph 3; (B), (D), and (E) are details or overstatements."
      },
      {
        "n": 2,
        "topic": "Supporting detail",
        "correct": "A",
        "options": 5,
        "level": "easy",
        "text": "According to the passage, one reason smaller body size may be favored on islands is that",
        "choices": [
          "a smaller body requires less food to sustain",
          "smaller animals reproduce more slowly",
          "islands have colder climates than continents",
          "small animals are better swimmers",
          "predators prefer to hunt larger prey"
        ],
        "hint": "Look at the resource-limitation explanation.",
        "expl": "Paragraph 2 states 'a smaller body requires less food to sustain,' which under scarcity favors smaller individuals (A)."
      },
      {
        "n": 3,
        "topic": "Inference",
        "correct": "D",
        "options": 5,
        "level": "hard",
        "text": "The passage suggests that the loss of large predators on an island contributes to dwarfism because it",
        "choices": [
          "directly kills off the largest individuals",
          "reduces the amount of vegetation available",
          "makes islands colder over time",
          "removes an advantage that had favored large body size",
          "causes prey populations to grow without limit"
        ],
        "hint": "Big body size does what against predators? What happens when predators vanish?",
        "expl": "Paragraph 2 says big size 'offers protection against being eaten'; removing predators 'relaxes' that pressure so the food-driven push toward smallness can win — it removes an advantage that had favored large size (D)."
      },
      {
        "n": 4,
        "topic": "Function of a detail or paragraph",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "The examples of giant tortoises and oversized rodents in the third paragraph are introduced primarily to",
        "choices": [
          "confirm the resource-limitation explanation",
          "show that the island rule does not apply uniformly",
          "prove that predators never affect body size",
          "explain why elephants shrank on islands",
          "demonstrate that islands lack vegetation"
        ],
        "hint": "These are cases that don't fit the shrinking pattern. Why raise them?",
        "expl": "The paragraph opens 'Not every case fits neatly' and cites species that grew larger — showing the rule doesn't apply uniformly (B) and motivating the refined 'optimal size' view."
      },
      {
        "n": 5,
        "topic": "Application / extension",
        "correct": "E",
        "options": 5,
        "level": "hard",
        "text": "Which finding would most support the 'convergence toward an optimal intermediate size' view described in the last paragraph?",
        "choices": [
          "A large island species that continued to grow larger for millions of years",
          "A mainland species larger than any island species",
          "An island with no vegetation at all",
          "A predator that migrated from an island to the mainland",
          "Two island species—one starting large, one starting small—that both evolved toward the same middling size"
        ],
        "hint": "The optimum view predicts both giants and dwarfs move toward one middle size.",
        "expl": "The convergence view predicts that very large and very small colonizers both move toward a shared intermediate size. Two species converging on the same middling size from opposite starting points is exactly that prediction (E). (A) contradicts the view; the others are irrelevant to convergence."
      }
    ]
  },
  {
    "id": "di-twopart-ex",
    "title": "Two-Part Analysis — Exercise",
    "section": "data",
    "source": "Adapted from your course material",
    "questions": [
      {
        "n": 1,
        "topic": "Quantitative two-part",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "A company sells pens at $3 each and notebooks at $5 each. In one order the total number of items was 20 and the total cost was $76. Which pair gives (number of pens, number of notebooks)?",
        "choices": [
          "(8, 12)",
          "(10, 10)",
          "(12, 8)",
          "(14, 6)",
          "(16, 4)"
        ],
        "hint": "Set up 3p + 5n = 76 with p + n = 20, then test.",
        "expl": "With p + n = 20, cost = 3p + 5(20 − p) = 100 − 2p = 76, so 2p = 24, p = 12 and n = 8 → (12, 8), choice C."
      },
      {
        "n": 2,
        "topic": "Quantitative two-part",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "Two numbers have a sum of 30 and a difference of 8. Which pair is (larger number, smaller number)?",
        "choices": [
          "(20, 10)",
          "(19, 11)",
          "(18, 12)",
          "(22, 8)",
          "(21, 9)"
        ],
        "hint": "Larger = (sum + difference)/2.",
        "expl": "Larger = (30 + 8)/2 = 19; smaller = (30 − 8)/2 = 11 → (19, 11), choice B."
      },
      {
        "n": 3,
        "topic": "Trade-off & optimization",
        "correct": "A",
        "options": 5,
        "level": "hard",
        "text": "A traveler has a $300 budget and wants to maximize nights away. Hotel A costs $80/night with no fee; Hotel B costs $50/night but requires a one-time $40 booking fee. Which pair gives (max nights with A only, max nights with B including the fee)?",
        "choices": [
          "(3, 5)",
          "(4, 4)",
          "(3, 4)",
          "(4, 5)",
          "(3, 3)"
        ],
        "hint": "A: floor(300/80). B: floor((300−40)/50).",
        "expl": "Hotel A: 300/80 = 3.75 → 3 nights. Hotel B: (300 − 40)/50 = 260/50 = 5.2 → 5 nights. So the pair is (3, 5), choice A."
      },
      {
        "n": 4,
        "topic": "Quantitative two-part",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "A recipe uses flour and sugar in the ratio 5 : 2 by weight. To make 2,100 g of the mixture, which pair gives (grams of flour, grams of sugar)?",
        "choices": [
          "(1500, 600)",
          "(1400, 700)",
          "(1200, 900)",
          "(1600, 500)",
          "(1050, 1050)"
        ],
        "hint": "Total parts = 7; each part = 2100/7.",
        "expl": "7 parts = 2,100 g, so 1 part = 300 g. Flour = 5×300 = 1,500 g; sugar = 2×300 = 600 g → (1500, 600), choice A."
      },
      {
        "n": 5,
        "topic": "Verbal / logical two-part",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "A committee claims: 'Our program reduced costs and improved service.' Which pair of findings would, respectively, (support the cost claim) and (support the service claim)?",
        "choices": [
          "Costs rose 5%; complaints fell 20%",
          "Costs fell 10%; complaints rose 15%",
          "Costs fell 10%; complaints fell 20%",
          "Staffing rose; costs rose",
          "Complaints fell; costs rose"
        ],
        "hint": "Each half of the claim needs its own supporting finding.",
        "expl": "The cost claim is supported by falling costs; the service claim by falling complaints. Only 'Costs fell 10%; complaints fell 20%' supports both parts (C). Every other option fails at least one half."
      },
      {
        "n": 6,
        "topic": "Quantitative two-part",
        "correct": "B",
        "options": 5,
        "level": "hard",
        "text": "A tank is filled by pipe X in 6 hours and by pipe Y in 12 hours. Which pair gives (fraction filled in 1 hour by X and Y together, hours to fill the tank together)?",
        "choices": [
          "(1/6, 6)",
          "(1/4, 4)",
          "(1/3, 3)",
          "(1/8, 8)",
          "(1/12, 12)"
        ],
        "hint": "Add the rates 1/6 + 1/12.",
        "expl": "Combined rate = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 per hour, so the tank fills in 4 hours → (1/4, 4), choice B."
      },
      {
        "n": 7,
        "topic": "Trade-off & optimization",
        "correct": "E",
        "options": 5,
        "level": "hard",
        "text": "A factory can run Line 1 (200 units/day at $500/day) or Line 2 (150 units/day at $300/day). It must produce 600 units. Which pair gives (days & cost using only Line 1, days & cost using only Line 2)?",
        "choices": [
          "(3 days/$1500, 3 days/$900)",
          "(4 days/$2000, 4 days/$1200)",
          "(3 days/$1500, 5 days/$1200)",
          "(2 days/$1000, 4 days/$1200)",
          "(3 days/$1500, 4 days/$1200)"
        ],
        "hint": "Days = ceil(600/rate); cost = days × daily cost.",
        "expl": "Line 1: 600/200 = 3 days, cost 3×$500 = $1,500. Line 2: 600/150 = 4 days, cost 4×$300 = $1,200 → (3 days/$1500, 4 days/$1200), choice E."
      },
      {
        "n": 8,
        "topic": "Quantitative two-part",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "After a 20% discount, a jacket sells for $96. Sales tax of 10% is then added to the discounted price. Which pair gives (original price, final price paid)?",
        "choices": [
          "(120, 105.60)",
          "(115, 105.60)",
          "(120, 96.00)",
          "(116, 105.60)",
          "(120, 96.60)"
        ],
        "hint": "Original = 96 / 0.8; final = 96 × 1.1.",
        "expl": "Original price = 96 / 0.80 = $120. Final price = 96 × 1.10 = $105.60 → (120, 105.60), choice A."
      }
    ]
  },
  {
    "id": "di-table-sales",
    "title": "Table Analysis — Regional Sales",
    "section": "data",
    "source": "Adapted from your course material",
    "passage": {
      "label": "📊 Data",
      "title": "Quarterly sales by region ($ thousands)",
      "paras": [
        "The table below lists one company's sales, in thousands of dollars, for four regions across four quarters."
      ],
      "tables": [
        {
          "head": [
            "Region",
            "Q1",
            "Q2",
            "Q3",
            "Q4",
            "Year"
          ],
          "rows": [
            [
              "North",
              "120",
              "150",
              "130",
              "200",
              "600"
            ],
            [
              "South",
              "90",
              "90",
              "110",
              "110",
              "400"
            ],
            [
              "East",
              "200",
              "180",
              "220",
              "200",
              "800"
            ],
            [
              "West",
              "50",
              "70",
              "80",
              "100",
              "300"
            ]
          ],
          "total": [
            "Total",
            "460",
            "490",
            "540",
            "610",
            "2,100"
          ]
        }
      ]
    },
    "questions": [
      {
        "n": 1,
        "topic": "Statistics from a table",
        "correct": "C",
        "options": 5,
        "level": "easy",
        "text": "Which region had the highest total sales for the year?",
        "choices": [
          "North",
          "South",
          "East",
          "West",
          "North and East tied"
        ],
        "hint": "Compare the four annual totals.",
        "expl": "Annual totals: North 600, South 400, East 800, West 300. East is highest (C)."
      },
      {
        "n": 2,
        "topic": "Statistics from a table",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "What was the company's average (arithmetic mean) sales per region for the year, in thousands of dollars?",
        "choices": [
          "500",
          "525",
          "600",
          "540",
          "480"
        ],
        "hint": "Divide the company total by the number of regions.",
        "expl": "Company total 2,100 across 4 regions → 2,100 / 4 = 525 (B)."
      },
      {
        "n": 3,
        "topic": "Sorting & filtering",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "How many of the four regions had Q4 sales of at least 150 (thousand dollars)?",
        "choices": [
          "0",
          "1",
          "3",
          "2",
          "4"
        ],
        "hint": "List each region's Q4 figure and count those ≥ 150.",
        "expl": "Q4 sales: North 200, South 110, East 200, West 100. Those ≥ 150 are North and East → 2 regions (D)."
      },
      {
        "n": 4,
        "topic": "Ratios & proportions in tables",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "East's annual sales were what percent of the company's total annual sales?",
        "choices": [
          "About 38%",
          "About 30%",
          "About 42%",
          "About 25%",
          "About 50%"
        ],
        "hint": "East total ÷ company total × 100.",
        "expl": "800 / 2,100 ≈ 0.381 = about 38% (A)."
      },
      {
        "n": 5,
        "topic": "Statistics from a table",
        "correct": "A",
        "options": 5,
        "level": "hard",
        "text": "Which region showed the largest increase from its Q1 sales to its Q4 sales?",
        "choices": [
          "North",
          "South",
          "East",
          "West",
          "South and West tied"
        ],
        "hint": "Compute Q4 − Q1 for each region.",
        "expl": "Increases Q1→Q4: North 200−120 = 80; South 110−90 = 20; East 200−200 = 0; West 100−50 = 50. North's 80 is the largest → North, choice A."
      }
    ]
  },
  {
    "id": "di-graphics-temp",
    "title": "Graphics Interpretation — Trends",
    "section": "data",
    "source": "Adapted from your course material",
    "passage": {
      "label": "📈 Graphs",
      "title": "Temperature through the year, and ice-cream sales",
      "paras": [
        "Graph 1 shows a city's average monthly high temperature. Graph 2 plots one day's ice-cream sales at each of several shops against that day's high temperature."
      ],
      "charts": [
        {
          "type": "line",
          "title": "Graph 1 — Average monthly high temperature (°C)",
          "xLabel": "Month",
          "yLabel": "°C",
          "yMax": 35,
          "points": [
            {
              "x": "J",
              "y": 5
            },
            {
              "x": "F",
              "y": 8
            },
            {
              "x": "M",
              "y": 13
            },
            {
              "x": "A",
              "y": 18
            },
            {
              "x": "M",
              "y": 23
            },
            {
              "x": "J",
              "y": 28
            },
            {
              "x": "J",
              "y": 30
            },
            {
              "x": "A",
              "y": 29
            },
            {
              "x": "S",
              "y": 24
            },
            {
              "x": "O",
              "y": 18
            },
            {
              "x": "N",
              "y": 11
            },
            {
              "x": "D",
              "y": 6
            }
          ]
        },
        {
          "type": "scatter",
          "title": "Graph 2 — Ice-cream sales vs. temperature",
          "xLabel": "Day's high temperature (°C)",
          "yLabel": "Sales ($)",
          "xMin": 5,
          "xMax": 35,
          "yMax": 700,
          "points": [
            {
              "x": 7,
              "y": 90
            },
            {
              "x": 9,
              "y": 130
            },
            {
              "x": 12,
              "y": 170
            },
            {
              "x": 14,
              "y": 210
            },
            {
              "x": 16,
              "y": 250
            },
            {
              "x": 18,
              "y": 300
            },
            {
              "x": 20,
              "y": 330
            },
            {
              "x": 22,
              "y": 390
            },
            {
              "x": 24,
              "y": 420
            },
            {
              "x": 26,
              "y": 470
            },
            {
              "x": 28,
              "y": 520
            },
            {
              "x": 30,
              "y": 560
            },
            {
              "x": 32,
              "y": 610
            },
            {
              "x": 19,
              "y": 270
            },
            {
              "x": 25,
              "y": 450
            }
          ]
        }
      ]
    },
    "questions": [
      {
        "n": 1,
        "topic": "Bar & line graphs",
        "correct": "B",
        "options": 5,
        "level": "easy",
        "text": "According to Graph 1, in which month is the average high temperature greatest?",
        "choices": [
          "January",
          "July",
          "December",
          "April",
          "October"
        ],
        "hint": "The peak of the curve.",
        "expl": "Graph 1 peaks at 30°C in July (B)."
      },
      {
        "n": 2,
        "topic": "Scatter plots & correlation",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "The scatter plot in Graph 2 best illustrates",
        "choices": [
          "a positive correlation between temperature and sales",
          "a negative correlation between temperature and sales",
          "no relationship between the two variables",
          "a perfectly horizontal trend",
          "sales that decrease as temperature rises"
        ],
        "hint": "Which way does the band of points slope?",
        "expl": "Points rise from lower-left to upper-right, so higher temperature goes with higher sales — a positive correlation (A)."
      },
      {
        "n": 3,
        "topic": "Interpreting relationships",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "Based on Graph 2, which statement is best supported?",
        "choices": [
          "Higher temperatures cause higher ice-cream sales.",
          "Higher sales cause higher temperatures.",
          "Days with higher temperatures tend to have higher sales.",
          "Temperature and sales are unrelated.",
          "Sales are highest on the coldest days."
        ],
        "hint": "A scatter plot shows association, not necessarily causation.",
        "expl": "A scatter plot supports an association claim, not a causal one: days with higher temperatures tend to have higher sales (C). (A) and (B) assert causation the plot alone can't establish; (D) and (E) contradict the upward band."
      },
      {
        "n": 4,
        "topic": "Bar & line graphs",
        "correct": "D",
        "options": 5,
        "level": "hard",
        "text": "According to Graph 1, between which pair of consecutive months is the change in average high temperature closest to zero?",
        "choices": [
          "Jan to Apr",
          "Apr to Jul",
          "Aug to Sep",
          "Jul to Aug",
          "Sep to Oct"
        ],
        "hint": "Read each pair's two heights off the line and compare the gaps, ignoring direction.",
        "expl": "Step 1 — From Graph 1: Jan 5, Apr 18, Jul 30, Aug 29, Sep 24, Oct 18.\nStep 2 — Gaps: Jan→Apr 13, Apr→Jul 12, Aug→Sep 5, Jul→Aug 1, Sep→Oct 6.\nStep 3 — The smallest change is the 1 degree between July and August — the curve is flattest at its peak.\nAnswer: D."
      },
      {
        "n": 5,
        "topic": "Interpreting relationships",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "The absence of points in the upper-left corner of Graph 2 indicates that",
        "choices": [
          "cold days sometimes produced very high sales",
          "very high sales did not occur on cold days",
          "hot days produced no sales",
          "the axes were mislabeled",
          "sales were unrelated to temperature"
        ],
        "hint": "Upper-left = low temperature (left) with high sales (up).",
        "expl": "The upper-left corner is low temperature with high sales; its emptiness means very high sales did not occur on cold days (B)."
      }
    ]
  },
  {
    "id": "di-msr-startup",
    "title": "Multi-Source Reasoning — Project Bids",
    "section": "data",
    "source": "Adapted from your course material",
    "passage": {
      "label": "🗂 Sources",
      "title": "Three sources on a contracting decision",
      "paras": [
        "Source 1 — Requirements: The client needs the project finished within 10 weeks, at a cost of no more than $80,000, and requires the vendor to hold a Tier-2 safety certification.",
        "Source 2 — Bids: Vendor A: 8 weeks, $85,000, Tier-2 certified. Vendor B: 9 weeks, $78,000, Tier-1 certified. Vendor C: 10 weeks, $75,000, Tier-2 certified. Vendor D: 12 weeks, $70,000, Tier-2 certified.",
        "Source 3 — Note: A Tier-2 certification also counts as satisfying any Tier-1 requirement, but not the reverse. The client will not waive any of its three requirements."
      ]
    },
    "questions": [
      {
        "n": 1,
        "topic": "Reading across tabs",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "Which single vendor meets all three of the client's requirements?",
        "choices": [
          "Vendor A",
          "Vendor B",
          "Vendor C",
          "Vendor D",
          "None of them"
        ],
        "hint": "Check each vendor against time ≤ 10 wk, cost ≤ $80k, and Tier-2.",
        "expl": "A fails on cost ($85k > $80k); B fails on certification (Tier-1, not Tier-2); D fails on time (12 wk > 10). Vendor C (10 weeks, $75,000, Tier-2) meets all three (C)."
      },
      {
        "n": 2,
        "topic": "Inference from combined data",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "Vendor A fails to meet the requirements solely because of its",
        "choices": [
          "cost",
          "completion time",
          "certification level",
          "cost and time both",
          "certification and cost both"
        ],
        "hint": "Check A's three figures against the three requirements.",
        "expl": "Vendor A: 8 weeks (≤10 ✓), $85,000 (>$80,000 ✗), Tier-2 (✓). Only cost fails (A)."
      },
      {
        "n": 3,
        "topic": "True / False judgment sets",
        "correct": "D",
        "options": 5,
        "level": "hard",
        "text": "Consider the statement: 'If the client raised its cost ceiling to $86,000 but kept all other requirements, exactly two vendors would qualify.' This statement is",
        "choices": [
          "false, because only one vendor would qualify",
          "false, because three vendors would qualify",
          "false, because no vendor would qualify",
          "true",
          "impossible to determine from the sources"
        ],
        "hint": "Re-test each vendor with cost ≤ $86,000, time ≤ 10 wk, Tier-2.",
        "expl": "With cost ≤ $86,000: A now passes cost (8 wk, Tier-2) → qualifies; B still fails certification; C still qualifies; D still fails time. That is exactly two vendors (A and C), so the statement is true (D)."
      },
      {
        "n": 4,
        "topic": "Synthesizing multiple sources",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "Vendor B holds a Tier-1 certification. Based on Source 3, Vendor B",
        "choices": [
          "satisfies the Tier-2 requirement",
          "does not satisfy the Tier-2 requirement",
          "exceeds the Tier-2 requirement",
          "is exempt from the certification requirement",
          "can substitute a lower cost for the certification"
        ],
        "hint": "Tier-2 covers Tier-1, but not the reverse.",
        "expl": "Source 3 says Tier-2 satisfies a Tier-1 requirement but 'not the reverse,' so a Tier-1 vendor does not satisfy a Tier-2 requirement (B)."
      },
      {
        "n": 5,
        "topic": "Inference from combined data",
        "correct": "E",
        "options": 5,
        "level": "hard",
        "text": "If the client's top priority were the lowest cost among vendors that meet the time and certification requirements (ignoring the cost ceiling), which vendor would it choose?",
        "choices": [
          "Vendor A",
          "Vendor B",
          "Vendor D",
          "Vendor A or C",
          "Vendor C"
        ],
        "hint": "First keep only vendors with time ≤ 10 wk and Tier-2, then pick the cheapest.",
        "expl": "Vendors meeting time ≤ 10 weeks and Tier-2: A ($85k, 8 wk), C ($75k, 10 wk). (B is Tier-1; D is 12 weeks.) The cheaper of A and C is C at $75,000 → Vendor C, choice E."
      }
    ]
  },
  {
    "id": "quant-exponents-ex",
    "title": "Exponents & Roots — Exercise",
    "section": "quant",
    "source": "Adapted from your course material",
    "questions": [
      {
        "n": 1,
        "topic": "Exponent rules",
        "correct": "D",
        "options": 5,
        "level": "easy",
        "text": "Simplify \\(2^3 \\cdot 2^4\\).",
        "choices": [
          "\\(2^{12}\\)",
          "64",
          "32",
          "128",
          "256"
        ],
        "hint": "When multiplying like bases, add the exponents.",
        "expl": "\\(2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128\\) (D)."
      },
      {
        "n": 2,
        "topic": "Exponent rules",
        "correct": "A",
        "options": 5,
        "level": "easy",
        "text": "Evaluate \\(\\dfrac{5^6}{5^4}\\).",
        "choices": [
          "25",
          "5",
          "125",
          "1",
          "5^{10}"
        ],
        "hint": "When dividing like bases, subtract the exponents.",
        "expl": "\\(5^{6-4} = 5^2 = 25\\) (A)."
      },
      {
        "n": 3,
        "topic": "Exponent rules",
        "correct": "C",
        "options": 5,
        "level": "easy",
        "text": "Evaluate \\((3^2)^3\\).",
        "choices": [
          "3^5",
          "243",
          "729",
          "81",
          "3^{18}"
        ],
        "hint": "A power raised to a power: multiply the exponents.",
        "expl": "\\((3^2)^3 = 3^{2 \\cdot 3} = 3^6 = 729\\) (C)."
      },
      {
        "n": 4,
        "topic": "Exponent rules",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "If \\(2^{x+1} = 16\\), what is \\(x\\)?",
        "choices": [
          "2",
          "3",
          "4",
          "5",
          "8"
        ],
        "hint": "Write 16 as a power of 2.",
        "expl": "\\(16 = 2^4\\), so \\(x+1 = 4\\) and \\(x = 3\\) (B)."
      },
      {
        "n": 5,
        "topic": "Exponent rules",
        "correct": "E",
        "options": 5,
        "level": "medium",
        "text": "Evaluate \\(3^{-2}\\).",
        "choices": [
          "-9",
          "-6",
          "6",
          "9",
          "1/9"
        ],
        "hint": "A negative exponent means the reciprocal.",
        "expl": "\\(3^{-2} = \\dfrac{1}{3^2} = \\dfrac{1}{9}\\) (E)."
      },
      {
        "n": 6,
        "topic": "Roots & radicals",
        "correct": "C",
        "options": 5,
        "level": "easy",
        "text": "What is \\(\\sqrt{144}\\)?",
        "choices": [
          "10",
          "11",
          "12",
          "14",
          "16"
        ],
        "hint": "Find the number whose square is 144.",
        "expl": "\\(12^2 = 144\\), so \\(\\sqrt{144} = 12\\) (C)."
      },
      {
        "n": 7,
        "topic": "Roots & radicals",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "Simplify \\(\\sqrt{50}\\).",
        "choices": [
          "\\(2\\sqrt{5}\\)",
          "\\(5\\sqrt{2}\\)",
          "\\(10\\sqrt{5}\\)",
          "\\(25\\sqrt{2}\\)",
          "\\(5\\sqrt{10}\\)"
        ],
        "hint": "Factor out the largest perfect square.",
        "expl": "\\(\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}\\) (B)."
      },
      {
        "n": 8,
        "topic": "Roots & radicals",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "Evaluate \\(\\sqrt{\\dfrac{9}{16}}\\).",
        "choices": [
          "3/4",
          "4/3",
          "9/16",
          "1/2",
          "3/16"
        ],
        "hint": "The square root of a fraction is the root of top over root of bottom.",
        "expl": "\\(\\sqrt{9}/\\sqrt{16} = 3/4\\) (A)."
      },
      {
        "n": 9,
        "topic": "Roots & radicals",
        "correct": "D",
        "options": 5,
        "level": "hard",
        "text": "Evaluate \\(27^{2/3}\\).",
        "choices": [
          "3",
          "6",
          "18",
          "9",
          "12"
        ],
        "hint": "Take the cube root first, then square.",
        "expl": "\\(27^{1/3} = 3\\), then \\(3^2 = 9\\) (D)."
      },
      {
        "n": 10,
        "topic": "Exponent rules",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "Evaluate \\(\\dfrac{3^5 \\cdot 3^2}{3^4}\\).",
        "choices": [
          "3",
          "9",
          "27",
          "81",
          "243"
        ],
        "hint": "Add exponents on top, then subtract the bottom exponent.",
        "expl": "Numerator \\(3^{5+2} = 3^7\\); \\(3^{7-4} = 3^3 = 27\\) (C)."
      },
      {
        "n": 11,
        "topic": "Exponent rules",
        "correct": "A",
        "options": 5,
        "level": "hard",
        "text": "Which of the following is the greatest?",
        "choices": [
          "\\(2^{10}\\)",
          "\\(3^6\\)",
          "\\(10^3\\)",
          "\\(5^4\\)",
          "\\(4^4\\)"
        ],
        "hint": "Compute each: powers can be deceiving.",
        "expl": "\\(2^{10}=1024\\), \\(3^6=729\\), \\(10^3=1000\\), \\(5^4=625\\), \\(4^4=256\\). The greatest is \\(2^{10}=1024\\) (A)."
      },
      {
        "n": 12,
        "topic": "Scientific notation & estimation",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "Express 4,500,000 in scientific notation.",
        "choices": [
          "\\(45 \\times 10^5\\)",
          "\\(4.5 \\times 10^6\\)",
          "\\(4.5 \\times 10^5\\)",
          "\\(0.45 \\times 10^7\\)",
          "\\(4.5 \\times 10^7\\)"
        ],
        "hint": "One nonzero digit before the decimal point; count the places moved.",
        "expl": "4,500,000 = \\(4.5 \\times 10^6\\) (the point moves 6 places), choice B. (A) and (D) aren't in standard form."
      }
    ]
  },
  {
    "id": "quant-linear-ex",
    "title": "Linear Equations & Systems — Exercise",
    "section": "quant",
    "source": "Adapted from your course material",
    "questions": [
      {
        "n": 1,
        "topic": "Linear equations",
        "correct": "C",
        "options": 5,
        "level": "easy",
        "text": "Solve for \\(x\\): \\(3x + 5 = 20\\).",
        "choices": [
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "hint": "Subtract 5, then divide by 3.",
        "expl": "\\(3x = 15\\), so \\(x = 5\\) (C)."
      },
      {
        "n": 2,
        "topic": "Linear equations",
        "correct": "D",
        "options": 5,
        "level": "easy",
        "text": "Solve for \\(x\\): \\(2(x - 3) = 10\\).",
        "choices": [
          "2",
          "5",
          "7",
          "8",
          "11"
        ],
        "hint": "Divide by 2 first, or distribute.",
        "expl": "\\(x - 3 = 5\\), so \\(x = 8\\) (D)."
      },
      {
        "n": 3,
        "topic": "Linear equations",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "Solve for \\(x\\): \\(5x - 2 = 3x + 8\\).",
        "choices": [
          "3",
          "4",
          "5",
          "6",
          "10"
        ],
        "hint": "Gather the x-terms on one side.",
        "expl": "\\(5x - 3x = 8 + 2 \\Rightarrow 2x = 10 \\Rightarrow x = 5\\) (C)."
      },
      {
        "n": 4,
        "topic": "Linear equations",
        "correct": "E",
        "options": 5,
        "level": "medium",
        "text": "Solve for \\(x\\): \\(\\dfrac{x}{4} + 3 = 7\\).",
        "choices": [
          "4",
          "8",
          "12",
          "14",
          "16"
        ],
        "hint": "Subtract 3, then multiply by 4.",
        "expl": "\\(\\dfrac{x}{4} = 4 \\Rightarrow x = 16\\) (E)."
      },
      {
        "n": 5,
        "topic": "Linear equations",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "Solve for \\(x\\): \\(3(x + 2) - 2(x - 1) = 15\\).",
        "choices": [
          "5",
          "7",
          "9",
          "11",
          "13"
        ],
        "hint": "Distribute both products, then combine.",
        "expl": "\\(3x + 6 - 2x + 2 = 15 \\Rightarrow x + 8 = 15 \\Rightarrow x = 7\\) (B)."
      },
      {
        "n": 6,
        "topic": "Linear equations",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "Solve for \\(x\\): \\(\\dfrac{x}{3} - \\dfrac{x}{4} = 2\\).",
        "choices": [
          "6",
          "12",
          "18",
          "24",
          "30"
        ],
        "hint": "Use a common denominator of 12.",
        "expl": "\\(\\dfrac{4x - 3x}{12} = \\dfrac{x}{12} = 2 \\Rightarrow x = 24\\) (D)."
      },
      {
        "n": 7,
        "topic": "Systems of equations",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "If \\(x + y = 10\\) and \\(x - y = 4\\), what is \\(xy\\)?",
        "choices": [
          "12",
          "18",
          "21",
          "24",
          "30"
        ],
        "hint": "Add the equations to find x, subtract to find y.",
        "expl": "Adding: \\(2x = 14 \\Rightarrow x = 7\\); then \\(y = 3\\). \\(xy = 21\\) (C)."
      },
      {
        "n": 8,
        "topic": "Systems of equations",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "If \\(3x + 2y = 16\\) and \\(x + y = 6\\), what is \\(x\\)?",
        "choices": [
          "2",
          "4",
          "6",
          "8",
          "10"
        ],
        "hint": "From the second equation, y = 6 − x; substitute.",
        "expl": "\\(3x + 2(6 - x) = 16 \\Rightarrow x + 12 = 16 \\Rightarrow x = 4\\) (B)."
      },
      {
        "n": 9,
        "topic": "Systems of equations",
        "correct": "D",
        "options": 5,
        "level": "hard",
        "text": "If \\(2a = 3b\\) and \\(a + b = 15\\), what is \\(a\\)?",
        "choices": [
          "5",
          "6",
          "7.5",
          "9",
          "10"
        ],
        "hint": "Express a in terms of b, then substitute.",
        "expl": "\\(a = 1.5b\\); \\(1.5b + b = 2.5b = 15 \\Rightarrow b = 6\\), so \\(a = 9\\) (D)."
      },
      {
        "n": 10,
        "topic": "Linear equations",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "The sum of two consecutive integers is 47. What is the larger integer?",
        "choices": [
          "22",
          "23",
          "24",
          "25",
          "26"
        ],
        "hint": "Let the integers be n and n+1.",
        "expl": "\\(n + (n+1) = 47 \\Rightarrow 2n + 1 = 47 \\Rightarrow n = 23\\); the larger is 24 (C)."
      },
      {
        "n": 11,
        "topic": "Linear equations",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "A number increased by 12 equals three times the number. What is the number?",
        "choices": [
          "6",
          "8",
          "10",
          "12",
          "4"
        ],
        "hint": "Translate to n + 12 = 3n.",
        "expl": "\\(n + 12 = 3n \\Rightarrow 12 = 2n \\Rightarrow n = 6\\) (A)."
      },
      {
        "n": 12,
        "topic": "Systems of equations",
        "correct": "B",
        "options": 5,
        "level": "hard",
        "text": "Two tickets and three programs cost $23; four tickets and one program cost $31. What is the price of one ticket?",
        "choices": [
          "$6.50",
          "$7.00",
          "$7.50",
          "$8.00",
          "$5.00"
        ],
        "hint": "Set up 2t + 3p = 23 and 4t + p = 31.",
        "expl": "From the second, p = 31 − 4t. Substitute: 2t + 3(31 − 4t) = 23 → 2t + 93 − 12t = 23 → −10t = −70 → t = 7. One ticket costs $7.00 (B)."
      }
    ]
  },
  {
    "id": "quant-quadratic-ex",
    "title": "Quadratics & Factoring — Exercise",
    "section": "quant",
    "source": "Adapted from your course material",
    "questions": [
      {
        "n": 1,
        "topic": "Quadratic equations",
        "correct": "B",
        "options": 5,
        "level": "easy",
        "text": "What is the larger root of \\(x^2 - 5x + 6 = 0\\)?",
        "choices": [
          "2",
          "3",
          "5",
          "6",
          "-2"
        ],
        "hint": "Factor into two binomials that multiply to 6 and add to 5.",
        "expl": "\\((x-2)(x-3) = 0\\), so \\(x = 2\\) or \\(x = 3\\); the larger is 3 (B)."
      },
      {
        "n": 2,
        "topic": "Quadratic equations",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "What is the sum of the solutions of \\(x^2 + 7x + 12 = 0\\)?",
        "choices": [
          "7",
          "12",
          "-7",
          "-12",
          "5"
        ],
        "hint": "For \\(x^2 + bx + c\\), the sum of roots is −b.",
        "expl": "\\((x+3)(x+4)=0\\) gives roots −3 and −4; their sum is −7 (C)."
      },
      {
        "n": 3,
        "topic": "Quadratic equations",
        "correct": "D",
        "options": 5,
        "level": "easy",
        "text": "What is the nonzero solution of \\(x^2 - 4x = 0\\)?",
        "choices": [
          "-4",
          "-2",
          "2",
          "4",
          "0"
        ],
        "hint": "Factor out x.",
        "expl": "\\(x(x - 4) = 0\\) gives \\(x = 0\\) or \\(x = 4\\); the nonzero solution is 4 (D)."
      },
      {
        "n": 4,
        "topic": "Expressions & factoring",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "Expand \\((x + 3)(x - 5)\\).",
        "choices": [
          "\\(x^2 - 2x - 15\\)",
          "\\(x^2 + 2x - 15\\)",
          "\\(x^2 - 2x + 15\\)",
          "\\(x^2 - 8x - 15\\)",
          "\\(x^2 + 8x + 15\\)"
        ],
        "hint": "Use FOIL: first, outer, inner, last.",
        "expl": "\\(x^2 - 5x + 3x - 15 = x^2 - 2x - 15\\) (A)."
      },
      {
        "n": 5,
        "topic": "Quadratic equations",
        "correct": "E",
        "options": 5,
        "level": "medium",
        "text": "Which value is a solution of \\(x^2 - 9 = 0\\)?",
        "choices": [
          "9",
          "6",
          "4.5",
          "1",
          "3"
        ],
        "hint": "This is a difference of squares.",
        "expl": "\\((x-3)(x+3) = 0\\) gives \\(x = 3\\) or \\(x = -3\\); of the choices, 3 works (E)."
      },
      {
        "n": 6,
        "topic": "Quadratic equations",
        "correct": "C",
        "options": 5,
        "level": "hard",
        "text": "If \\(x^2 + bx + 12 = 0\\) has roots 2 and 6, what is \\(b\\)?",
        "choices": [
          "8",
          "12",
          "-8",
          "-12",
          "6"
        ],
        "hint": "Sum of roots = −b; product = 12.",
        "expl": "Roots 2 and 6 multiply to 12 (checks) and sum to 8, and the sum equals −b, so \\(b = -8\\) (C)."
      },
      {
        "n": 7,
        "topic": "Quadratic equations",
        "correct": "D",
        "options": 5,
        "level": "hard",
        "text": "The product of a positive number and 3 less than itself is 40. What is the number?",
        "choices": [
          "5",
          "6",
          "7",
          "8",
          "10"
        ],
        "hint": "Set up n(n − 3) = 40 and factor.",
        "expl": "\\(n^2 - 3n - 40 = 0 \\Rightarrow (n-8)(n+5)=0\\); the positive solution is 8 (D)."
      },
      {
        "n": 8,
        "topic": "Expressions & factoring",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "Factor completely: \\(x^2 - x - 6\\).",
        "choices": [
          "\\((x-2)(x+3)\\)",
          "\\((x-3)(x+2)\\)",
          "\\((x-6)(x+1)\\)",
          "\\((x-1)(x+6)\\)",
          "\\((x-3)(x-2)\\)"
        ],
        "hint": "Find two numbers that multiply to −6 and add to −1.",
        "expl": "−3 and +2 multiply to −6 and add to −1: \\((x-3)(x+2)\\) (B)."
      },
      {
        "n": 9,
        "topic": "Quadratic equations",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "A rectangle's length is 2 more than its width, and its area is 24. What is the width?",
        "choices": [
          "4",
          "6",
          "8",
          "3",
          "5"
        ],
        "hint": "Let width = w; then w(w + 2) = 24.",
        "expl": "\\(w^2 + 2w - 24 = 0 \\Rightarrow (w+6)(w-4) = 0\\); width = 4 (B is the length). Width is 4 (A)."
      },
      {
        "n": 10,
        "topic": "Expressions & factoring",
        "correct": "C",
        "options": 5,
        "level": "hard",
        "text": "If \\(x + \\dfrac{1}{x} = 3\\), what is \\(x^2 + \\dfrac{1}{x^2}\\)?",
        "choices": [
          "6",
          "8",
          "7",
          "9",
          "11"
        ],
        "hint": "Square both sides; \\((x + 1/x)^2 = x^2 + 2 + 1/x^2\\).",
        "expl": "\\((x + 1/x)^2 = 9 = x^2 + 2 + 1/x^2\\), so \\(x^2 + 1/x^2 = 9 - 2 = 7\\) (C)."
      }
    ]
  },
  {
    "id": "quant-inequalities-ex",
    "title": "Inequalities & Absolute Value — Exercise",
    "section": "quant",
    "source": "Adapted from your course material",
    "questions": [
      {
        "n": 1,
        "topic": "Inequalities & absolute value",
        "correct": "D",
        "options": 5,
        "level": "easy",
        "text": "Which value satisfies \\(3x - 5 > 7\\)?",
        "choices": [
          "2",
          "3",
          "4",
          "5",
          "-1"
        ],
        "hint": "Solve for x first.",
        "expl": "\\(3x > 12 \\Rightarrow x > 4\\); only 5 is greater than 4 (D)."
      },
      {
        "n": 2,
        "topic": "Inequalities & absolute value",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "If \\(-2x < 6\\), which of the following must be true?",
        "choices": [
          "\\(x < -3\\)",
          "\\(x < 3\\)",
          "\\(x > -3\\)",
          "\\(x > 3\\)",
          "\\(x = -3\\)"
        ],
        "hint": "Dividing by a negative flips the inequality sign.",
        "expl": "Divide by −2 and flip: \\(x > -3\\) (C)."
      },
      {
        "n": 3,
        "topic": "Absolute value",
        "correct": "B",
        "options": 5,
        "level": "easy",
        "text": "If \\(|x - 3| = 4\\), what are the possible values of \\(x\\)?",
        "choices": [
          "7 only",
          "7 or -1",
          "-1 only",
          "4 or -4",
          "1 or 7"
        ],
        "hint": "The expression inside can be +4 or −4.",
        "expl": "\\(x - 3 = 4 \\Rightarrow x = 7\\), or \\(x - 3 = -4 \\Rightarrow x = -1\\). So 7 or −1 (B)."
      },
      {
        "n": 4,
        "topic": "Absolute value",
        "correct": "E",
        "options": 5,
        "level": "medium",
        "text": "If \\(|x| < 3\\), which value is NOT possible for \\(x\\)?",
        "choices": [
          "-2",
          "0",
          "2",
          "2.5",
          "3"
        ],
        "hint": "|x| < 3 means −3 < x < 3, strictly.",
        "expl": "\\(|x| < 3\\) means \\(-3 < x < 3\\); 3 is excluded (E)."
      },
      {
        "n": 5,
        "topic": "Inequalities & absolute value",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "What is the largest integer \\(x\\) satisfying \\(2x + 1 \\le 9\\)?",
        "choices": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "hint": "Solve, then take the greatest integer that fits.",
        "expl": "\\(2x \\le 8 \\Rightarrow x \\le 4\\); the largest integer is 4 (D)."
      },
      {
        "n": 6,
        "topic": "Inequalities & absolute value",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "Solve for \\(x\\): \\(4 - x > 1\\).",
        "choices": [
          "\\(x > 3\\)",
          "\\(x < 3\\)",
          "\\(x > -3\\)",
          "\\(x < -3\\)",
          "\\(x = 3\\)"
        ],
        "hint": "Isolate x, remembering to flip when needed.",
        "expl": "\\(-x > -3\\); multiply by −1 and flip: \\(x < 3\\) (B)."
      },
      {
        "n": 7,
        "topic": "Inequalities & absolute value",
        "correct": "C",
        "options": 5,
        "level": "hard",
        "text": "If \\(x > 2\\) and \\(y < -1\\), which expression is always negative?",
        "choices": [
          "\\(x + y\\)",
          "\\(x - y\\)",
          "\\(xy\\)",
          "\\(x^2 + y\\)",
          "\\(y^2\\)"
        ],
        "hint": "A positive times a negative is always negative.",
        "expl": "\\(x > 2\\) is positive and \\(y < -1\\) is negative, so \\(xy\\) is always negative (C). The others can be positive (e.g., \\(x + y\\) with x large)."
      },
      {
        "n": 8,
        "topic": "Absolute value",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "If \\(|2x| = 10\\), what are the possible values of \\(x\\)?",
        "choices": [
          "5 or -5",
          "10 or -10",
          "5 only",
          "-5 only",
          "2 or 5"
        ],
        "hint": "|2x| = 10 means 2x = ±10.",
        "expl": "\\(2x = 10\\) or \\(2x = -10\\), so \\(x = 5\\) or \\(x = -5\\) (A)."
      },
      {
        "n": 9,
        "topic": "Absolute value",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "If \\(-3 \\le x \\le 5\\), what is the maximum possible value of \\(|x|\\)?",
        "choices": [
          "3",
          "4",
          "5",
          "8",
          "2"
        ],
        "hint": "Check both endpoints.",
        "expl": "\\(|{-3}| = 3\\) and \\(|5| = 5\\); the maximum is 5 (C)."
      },
      {
        "n": 10,
        "topic": "Inequalities & absolute value",
        "correct": "B",
        "options": 5,
        "level": "hard",
        "text": "How many integers satisfy \\(5 < x < 12\\) and are multiples of 3?",
        "choices": [
          "1",
          "2",
          "3",
          "4",
          "0"
        ],
        "hint": "List the multiples of 3 strictly between 5 and 12.",
        "expl": "Between 5 and 12 the multiples of 3 are 6 and 9 — 2 integers (B)."
      }
    ]
  },
  {
    "id": "quant-functions-ex",
    "title": "Functions & Sequences — Exercise",
    "section": "quant",
    "source": "Adapted from your course material",
    "questions": [
      {
        "n": 1,
        "topic": "Functions & custom symbols",
        "correct": "C",
        "options": 5,
        "level": "easy",
        "text": "If \\(f(x) = 2x + 3\\), what is \\(f(4)\\)?",
        "choices": [
          "7",
          "9",
          "11",
          "14",
          "8"
        ],
        "hint": "Substitute 4 for x.",
        "expl": "\\(f(4) = 2(4) + 3 = 11\\) (C)."
      },
      {
        "n": 2,
        "topic": "Functions & custom symbols",
        "correct": "B",
        "options": 5,
        "level": "easy",
        "text": "If \\(f(x) = x^2 - 1\\), what is \\(f(3)\\)?",
        "choices": [
          "6",
          "8",
          "9",
          "10",
          "5"
        ],
        "hint": "Square first, then subtract 1.",
        "expl": "\\(f(3) = 9 - 1 = 8\\) (B)."
      },
      {
        "n": 3,
        "topic": "Functions & custom symbols",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "If \\(f(x) = 3x - 1\\) and \\(f(a) = 14\\), what is \\(a\\)?",
        "choices": [
          "3",
          "4",
          "4.5",
          "5",
          "6"
        ],
        "hint": "Set 3a − 1 = 14 and solve.",
        "expl": "\\(3a - 1 = 14 \\Rightarrow 3a = 15 \\Rightarrow a = 5\\) (D)."
      },
      {
        "n": 4,
        "topic": "Functions & custom symbols",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "Define \\(x \\diamond y = x^2 - y\\). What is \\(3 \\diamond 2\\)?",
        "choices": [
          "7",
          "5",
          "11",
          "1",
          "9"
        ],
        "hint": "Replace x with 3 and y with 2.",
        "expl": "\\(3^2 - 2 = 9 - 2 = 7\\) (A)."
      },
      {
        "n": 5,
        "topic": "Functions & custom symbols",
        "correct": "C",
        "options": 5,
        "level": "hard",
        "text": "If \\(f(x) = 2x + 1\\), what is \\(f(f(1))\\)?",
        "choices": [
          "3",
          "5",
          "7",
          "9",
          "4"
        ],
        "hint": "Work from the inside out.",
        "expl": "\\(f(1) = 3\\); then \\(f(3) = 2(3) + 1 = 7\\) (C)."
      },
      {
        "n": 6,
        "topic": "Functions & custom symbols",
        "correct": "B",
        "options": 5,
        "level": "hard",
        "text": "If \\(f(x) = x^2\\), what is \\(f(a + 1) - f(a)\\) when \\(a = 3\\)?",
        "choices": [
          "5",
          "7",
          "9",
          "16",
          "1"
        ],
        "hint": "Compute f(4) − f(3).",
        "expl": "\\(f(4) - f(3) = 16 - 9 = 7\\) (B)."
      },
      {
        "n": 7,
        "topic": "Sequences & series",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "In the arithmetic sequence 3, 7, 11, 15, …, what is the 10th term?",
        "choices": [
          "36",
          "37",
          "38",
          "39",
          "40"
        ],
        "hint": "Term = first + (n − 1)·(common difference).",
        "expl": "Common difference 4: \\(3 + (10-1)\\cdot 4 = 3 + 36 = 39\\) (D)."
      },
      {
        "n": 8,
        "topic": "Sequences & series",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "In the geometric sequence 2, 4, 8, 16, …, what is the 6th term?",
        "choices": [
          "32",
          "48",
          "64",
          "96",
          "128"
        ],
        "hint": "Each term doubles; term = 2·2^{n−1}.",
        "expl": "\\(2 \\cdot 2^{5} = 2 \\cdot 32 = 64\\) (C)."
      },
      {
        "n": 9,
        "topic": "Sequences & series",
        "correct": "A",
        "options": 5,
        "level": "easy",
        "text": "What is the sum of the first five terms of 1, 4, 7, 10, 13?",
        "choices": [
          "35",
          "30",
          "40",
          "25",
          "45"
        ],
        "hint": "Add them, or use (first + last)/2 × count.",
        "expl": "\\((1 + 13)/2 \\times 5 = 7 \\times 5 = 35\\) (A)."
      },
      {
        "n": 10,
        "topic": "Sequences & series",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "The nth term of a sequence is \\(2n + 1\\). What is the 20th term?",
        "choices": [
          "39",
          "41",
          "43",
          "40",
          "42"
        ],
        "hint": "Substitute n = 20.",
        "expl": "\\(2(20) + 1 = 41\\) (B)."
      }
    ]
  },
  {
    "id": "quant-statistics-ex",
    "title": "Statistics — Exercise",
    "section": "quant",
    "source": "Adapted from your course material",
    "questions": [
      {
        "n": 1,
        "topic": "Mean, median & mode",
        "correct": "C",
        "options": 5,
        "level": "easy",
        "text": "What is the mean of 4, 8, 10, 6, and 12?",
        "choices": [
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "hint": "Add them and divide by 5.",
        "expl": "Sum = 40; 40 / 5 = 8 (C)."
      },
      {
        "n": 2,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 5,
        "level": "easy",
        "text": "What is the median of 3, 7, 2, 9, and 5?",
        "choices": [
          "3",
          "5",
          "7",
          "6",
          "9"
        ],
        "hint": "Sort the numbers first.",
        "expl": "Sorted: 2, 3, 5, 7, 9; the middle value is 5 (B)."
      },
      {
        "n": 3,
        "topic": "Mean, median & mode",
        "correct": "A",
        "options": 5,
        "level": "easy",
        "text": "What is the mode of 2, 3, 3, 5, 7, and 3?",
        "choices": [
          "3",
          "5",
          "2",
          "7",
          "4"
        ],
        "hint": "The mode is the most frequent value.",
        "expl": "3 appears three times — the mode is 3 (A)."
      },
      {
        "n": 4,
        "topic": "Mean, median & mode",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "The mean of 5 numbers is 12. What is their sum?",
        "choices": [
          "12",
          "17",
          "24",
          "60",
          "72"
        ],
        "hint": "Sum = mean × count.",
        "expl": "Sum = 12 × 5 = 60 (D)."
      },
      {
        "n": 5,
        "topic": "Mean, median & mode",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "Four numbers have a mean of 10. If one of the numbers is 16, what is the mean of the other three?",
        "choices": [
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "hint": "Find the total, remove 16, divide by 3.",
        "expl": "Total = 40; remove 16 → 24; 24 / 3 = 8 (C)."
      },
      {
        "n": 6,
        "topic": "Range & standard deviation",
        "correct": "B",
        "options": 5,
        "level": "easy",
        "text": "What is the range of 4, 15, 8, 23, and 16?",
        "choices": [
          "16",
          "19",
          "23",
          "15",
          "11"
        ],
        "hint": "Range = greatest − least.",
        "expl": "23 − 4 = 19 (B)."
      },
      {
        "n": 7,
        "topic": "Weighted averages",
        "correct": "D",
        "options": 5,
        "level": "hard",
        "text": "In a class, 30 students average 80 on a test and 20 students average 90. What is the class's overall average?",
        "choices": [
          "82",
          "83",
          "83.5",
          "84",
          "85"
        ],
        "hint": "Total points ÷ total students, not the simple average of 80 and 90.",
        "expl": "Points = 30·80 + 20·90 = 2400 + 1800 = 4200; 4200 / 50 = 84 (D)."
      },
      {
        "n": 8,
        "topic": "Mean, median & mode",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "If the mean of 6, \\(x\\), 10, and 14 is 10, what is \\(x\\)?",
        "choices": [
          "6",
          "8",
          "10",
          "12",
          "14"
        ],
        "hint": "Set the sum equal to 4 × 10.",
        "expl": "\\(6 + x + 10 + 14 = 40 \\Rightarrow 30 + x = 40 \\Rightarrow x = 10\\) (C)."
      },
      {
        "n": 9,
        "topic": "Range & standard deviation",
        "correct": "B",
        "options": 5,
        "level": "hard",
        "text": "Which data set has the greater standard deviation? Set P = {5, 5, 5}; Set Q = {1, 5, 9}.",
        "choices": [
          "Set P",
          "Set Q",
          "They are equal",
          "Cannot be determined",
          "Both are zero"
        ],
        "hint": "Standard deviation measures spread around the mean.",
        "expl": "Both have mean 5, but P has no spread (SD = 0) while Q is spread out, so Q has the greater standard deviation (B)."
      },
      {
        "n": 10,
        "topic": "Range & standard deviation",
        "correct": "A",
        "options": 5,
        "level": "hard",
        "text": "If every value in a data set is increased by 5, which statement is true?",
        "choices": [
          "The mean increases by 5 and the standard deviation is unchanged.",
          "The mean and standard deviation both increase by 5.",
          "The mean is unchanged and the standard deviation increases by 5.",
          "Both the mean and standard deviation are unchanged.",
          "The mean increases by 5 and the standard deviation decreases."
        ],
        "hint": "Adding a constant shifts the data but doesn't change how spread out it is.",
        "expl": "Adding a constant shifts every value equally: the mean rises by 5, but the spread — and thus the standard deviation — is unchanged (A)."
      },
      {
        "n": 11,
        "topic": "Weighted averages",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "The average of 10 numbers is 15. A new number equal to 15 is added to the set. What is the new average?",
        "choices": [
          "13.6",
          "14",
          "15",
          "15.5",
          "16.5"
        ],
        "hint": "Adding a value equal to the current mean doesn't move the mean.",
        "expl": "New sum = 150 + 15 = 165 over 11 numbers = 15 (C). Adding the mean itself leaves the mean unchanged."
      },
      {
        "n": 12,
        "topic": "Mean, median & mode",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "What is the median of 4, 6, 8, and 10?",
        "choices": [
          "6",
          "8",
          "9",
          "7",
          "5"
        ],
        "hint": "With an even count, average the two middle values.",
        "expl": "Middle two are 6 and 8; median = (6 + 8)/2 = 7 (D)."
      }
    ]
  },
  {
    "id": "quant-probability-ex",
    "title": "Counting & Probability — Exercise",
    "section": "quant",
    "source": "Adapted from your course material",
    "questions": [
      {
        "n": 1,
        "topic": "Permutations & combinations",
        "correct": "C",
        "options": 5,
        "level": "easy",
        "text": "In how many ways can 4 distinct books be arranged in a row?",
        "choices": [
          "12",
          "16",
          "24",
          "48",
          "4"
        ],
        "hint": "That's 4 factorial.",
        "expl": "\\(4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24\\) (C)."
      },
      {
        "n": 2,
        "topic": "Permutations & combinations",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "In how many ways can 2 people be chosen from a group of 5 (order does not matter)?",
        "choices": [
          "5",
          "10",
          "20",
          "25",
          "15"
        ],
        "hint": "Use the combination formula C(5,2).",
        "expl": "\\(\\binom{5}{2} = \\dfrac{5 \\cdot 4}{2} = 10\\) (B)."
      },
      {
        "n": 3,
        "topic": "Probability",
        "correct": "D",
        "options": 5,
        "level": "easy",
        "text": "A fair coin is flipped twice. What is the probability of getting two heads?",
        "choices": [
          "1/2",
          "1/3",
          "1/8",
          "1/4",
          "2/3"
        ],
        "hint": "Multiply the probability of heads on each flip.",
        "expl": "\\(\\tfrac12 \\cdot \\tfrac12 = \\tfrac14\\) (D)."
      },
      {
        "n": 4,
        "topic": "Probability",
        "correct": "A",
        "options": 5,
        "level": "easy",
        "text": "A standard die is rolled once. What is the probability of an even number?",
        "choices": [
          "1/2",
          "1/3",
          "1/6",
          "2/3",
          "5/6"
        ],
        "hint": "Count the even faces out of 6.",
        "expl": "Even faces are 2, 4, 6 — three of six, or 1/2 (A)."
      },
      {
        "n": 5,
        "topic": "Probability",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "A bag has 3 red and 2 blue marbles. What is the probability of drawing a red marble?",
        "choices": [
          "2/5",
          "1/2",
          "3/5",
          "3/2",
          "2/3"
        ],
        "hint": "Favorable over total.",
        "expl": "3 red of 5 total → 3/5 (C)."
      },
      {
        "n": 6,
        "topic": "Permutations & combinations",
        "correct": "E",
        "options": 5,
        "level": "medium",
        "text": "From 6 people, in how many ways can a president and a vice-president be chosen (the two roles are distinct)?",
        "choices": [
          "12",
          "15",
          "20",
          "36",
          "30"
        ],
        "hint": "Order matters here; 6 choices then 5 choices.",
        "expl": "\\(6 \\times 5 = 30\\) (E)."
      },
      {
        "n": 7,
        "topic": "Permutations & combinations",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "How many distinct three-digit codes can be formed using digits 0–9 if repetition is allowed?",
        "choices": [
          "720",
          "1000",
          "900",
          "500",
          "999"
        ],
        "hint": "Each of the three positions has 10 options.",
        "expl": "\\(10 \\times 10 \\times 10 = 1000\\) (B). (All codes 000 through 999.)"
      },
      {
        "n": 8,
        "topic": "Probability",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "Two fair dice are rolled. What is the probability that the sum is 7?",
        "choices": [
          "1/12",
          "1/9",
          "5/36",
          "1/6",
          "1/4"
        ],
        "hint": "Count the ordered pairs that sum to 7 out of 36.",
        "expl": "Pairs summing to 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — 6 of 36 = 1/6 (D)."
      },
      {
        "n": 9,
        "topic": "Permutations & combinations",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "At a party, every pair of 5 people shakes hands exactly once. How many handshakes occur?",
        "choices": [
          "5",
          "20",
          "10",
          "25",
          "15"
        ],
        "hint": "Each handshake is a pair — a combination.",
        "expl": "\\(\\binom{5}{2} = 10\\) handshakes (C)."
      },
      {
        "n": 10,
        "topic": "Probability",
        "correct": "A",
        "options": 5,
        "level": "hard",
        "text": "A committee of 2 is chosen at random from 4 men and 3 women. What is the probability both are women?",
        "choices": [
          "1/7",
          "2/7",
          "1/3",
          "3/7",
          "1/2"
        ],
        "hint": "P = (ways to pick 2 women) / (ways to pick any 2).",
        "expl": "\\(\\binom{3}{2} = 3\\) all-women pairs; \\(\\binom{7}{2} = 21\\) total; \\(3/21 = 1/7\\) (A)."
      },
      {
        "n": 11,
        "topic": "Permutations & combinations",
        "correct": "B",
        "options": 5,
        "level": "easy",
        "text": "How many ways can the letters of the word CAT be arranged?",
        "choices": [
          "3",
          "6",
          "9",
          "12",
          "24"
        ],
        "hint": "Three distinct letters.",
        "expl": "\\(3! = 6\\) (B)."
      },
      {
        "n": 12,
        "topic": "Probability",
        "correct": "B",
        "options": 5,
        "level": "hard",
        "text": "A bag has 4 red and 6 green marbles. Two are drawn without replacement. What is the probability both are green?",
        "choices": [
          "9/25",
          "1/3",
          "5/9",
          "1/2",
          "3/5"
        ],
        "hint": "Multiply P(first green) by P(second green given the first was green).",
        "expl": "\\(\\tfrac{6}{10} \\cdot \\tfrac{5}{9} = \\tfrac{30}{90} = \\tfrac13\\), choice B. (9/25 would be the with-replacement answer.)"
      }
    ]
  },
  {
    "id": "quant-sets-ages-ex",
    "title": "Overlapping Sets & Ages — Exercise",
    "section": "quant",
    "source": "Adapted from your course material",
    "questions": [
      {
        "n": 1,
        "topic": "Overlapping sets (Venn)",
        "correct": "A",
        "options": 5,
        "level": "medium",
        "text": "In a class of 30 students, 18 play soccer, 15 play tennis, and 8 play both. How many play neither?",
        "choices": [
          "5",
          "7",
          "3",
          "8",
          "10"
        ],
        "hint": "Use |A ∪ B| = |A| + |B| − |both|.",
        "expl": "Play at least one = 18 + 15 − 8 = 25; neither = 30 − 25 = 5 (A)."
      },
      {
        "n": 2,
        "topic": "Overlapping sets (Venn)",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "Of 40 people, 25 like coffee, 20 like tea, and 10 like both. How many like coffee only?",
        "choices": [
          "10",
          "15",
          "20",
          "25",
          "5"
        ],
        "hint": "Coffee only = coffee total − both.",
        "expl": "25 − 10 = 15 like coffee only (B)."
      },
      {
        "n": 3,
        "topic": "Overlapping sets (Venn)",
        "correct": "C",
        "options": 5,
        "level": "medium",
        "text": "Of 50 students, 30 study French and 25 study Spanish; every student studies at least one. How many study both?",
        "choices": [
          "10",
          "3",
          "5",
          "15",
          "0"
        ],
        "hint": "|both| = |A| + |B| − |A ∪ B|, and everyone is in the union.",
        "expl": "Both = 30 + 25 − 50 = 5 (C)."
      },
      {
        "n": 4,
        "topic": "Overlapping sets (Venn)",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "In a survey of 100 people, 60 read newspaper A, 50 read B, and 20 read both. How many read neither?",
        "choices": [
          "30",
          "20",
          "0",
          "10",
          "40"
        ],
        "hint": "Find how many read at least one first.",
        "expl": "At least one = 60 + 50 − 20 = 90; neither = 100 − 90 = 10 (D)."
      },
      {
        "n": 5,
        "topic": "Overlapping sets (Venn)",
        "correct": "C",
        "options": 5,
        "level": "hard",
        "text": "Of 200 people, 120 own a car, 90 own a bike, and 40 own both. How many own a car but not a bike?",
        "choices": [
          "40",
          "120",
          "80",
          "90",
          "30"
        ],
        "hint": "Car only = car total − both.",
        "expl": "120 − 40 = 80 own a car but not a bike (C)."
      },
      {
        "n": 6,
        "topic": "Age & number problems",
        "correct": "B",
        "options": 5,
        "level": "medium",
        "text": "Alia is twice as old as Ben. In 5 years, the sum of their ages will be 40. How old is Alia now?",
        "choices": [
          "10",
          "20",
          "15",
          "25",
          "30"
        ],
        "hint": "Let Ben = b; Alia = 2b; write the future-sum equation.",
        "expl": "\\((2b + 5) + (b + 5) = 40 \\Rightarrow 3b + 10 = 40 \\Rightarrow b = 10\\); Alia = 20 (B)."
      },
      {
        "n": 7,
        "topic": "Age & number problems",
        "correct": "D",
        "options": 5,
        "level": "hard",
        "text": "A father is 30 years older than his son. In 10 years, the father will be twice as old as the son. How old is the father now?",
        "choices": [
          "40",
          "45",
          "48",
          "50",
          "55"
        ],
        "hint": "Let son = s; father = s + 30; set up the future condition.",
        "expl": "\\((s + 30) + 10 = 2(s + 10) \\Rightarrow s + 40 = 2s + 20 \\Rightarrow s = 20\\); father = 50 (D)."
      },
      {
        "n": 8,
        "topic": "Age & number problems",
        "correct": "A",
        "options": 5,
        "level": "hard",
        "text": "A mother is 4 times as old as her daughter. In 16 years, she will be twice as old as her daughter. How old is the daughter now?",
        "choices": [
          "8",
          "10",
          "12",
          "16",
          "6"
        ],
        "hint": "Let daughter = d; mother = 4d; write the future condition.",
        "expl": "\\(4d + 16 = 2(d + 16) \\Rightarrow 4d + 16 = 2d + 32 \\Rightarrow 2d = 16 \\Rightarrow d = 8\\) (A)."
      },
      {
        "n": 9,
        "topic": "Age & number problems",
        "correct": "C",
        "options": 5,
        "level": "easy",
        "text": "The sum of the ages of three children born in consecutive years is 30. What is the middle child's age?",
        "choices": [
          "8",
          "9",
          "10",
          "11",
          "12"
        ],
        "hint": "Consecutive integers centered on the middle value.",
        "expl": "Ages n−1, n, n+1 sum to 3n = 30, so n = 10 (C)."
      },
      {
        "n": 10,
        "topic": "Age & number problems",
        "correct": "D",
        "options": 5,
        "level": "medium",
        "text": "Anya is 5 years older than Bala, and Bala is 3 years older than Chetan. How much older is Anya than Chetan?",
        "choices": [
          "2",
          "5",
          "3",
          "8",
          "15"
        ],
        "hint": "Add the two age gaps.",
        "expl": "Anya − Chetan = 5 + 3 = 8 years (D)."
      }
    ]
  },
  {
    "id": "cr-method-reasoning",
    "title": "Method of Reasoning — Exercise",
    "section": "cr",
    "source": "Adapted from your course material",
    "questions": [
      {
        "n": 1,
        "topic": "Boldface & method of reasoning",
        "correct": "C",
        "options": 5,
        "text": "Xavier: Demand by tourists in Nepal for inexpensive thangka paintings has resulted in the proliferation of inferior thangkas containing symbolic inaccuracies—a sure sign of a dying art form. Nepal should prohibit sales of thangkas to tourists, for such a prohibition will induce artists to create thangkas that meet traditional standards. Yvette: An art form without dedicated young artists will decay and die. If tourists were forbidden to buy thangkas, young artists would cease making thangkas and concentrate instead on an art form tourists can buy. Yvette responds to Xavier by",
        "choices": [
          "denying the existence of the problem that Xavier’s proposal is designed to ameliorate",
          "challenging the integrity of Xavier’s sources of information",
          "arguing that Xavier’s proposal, if implemented, would result in the very consequences it is meant to prevent",
          "using an analogy to draw a conclusion that is inconsistent with the conclusion drawn by Xavier",
          "showing that the evidence presented by Xavier has no bearing on the point at issue"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "By summarizing each person’s point of view, you can characterize how one responds to the other. Xavier’s purpose in proposing that Nepal prohibit tourist sales of thangkas is to encourage young artists to create the traditional ones rather than cheap knockoffs. But if Nepal does so, Yvette replies, thangkas won’t be made at all—just as correct choice (C) describes. (A) Yvette’s concern with the decay and death of Nepalese art shows that she’s just as cognizant of the problem as Xavier is. (B) , (D) Yvette presents a necessary condition for healthy art and then speculates on what would happen if Xavier’s plan went through. None of that challenges his information (B) or makes any analogy (D). (E) Yvette accepts Xavier’s evidence; she just feels his proposed solution would intensify the problem.",
        "level": "easy"
      },
      {
        "n": 2,
        "topic": "Boldface & method of reasoning",
        "correct": "C",
        "options": 5,
        "text": "Mark: To convey an understanding of past events, a historian should try to capture what it was like to experience those events. For instance, a foot soldier in the Battle of Waterloo knew through direct experience what the battle was like, and it is this kind of knowledge that the historian must capture. Carla: But how do you go about choosing whose perspective is the valid one? Is the foot soldier’s perspective more valid than that of a general? Should it be a French or an English soldier? Your approach would generate a biased version of history, and to avoid that, historians must stick to general and objective characterizations of the past. Carla does which one of the following in disputing Mark’s position?",
        "choices": [
          "contests Mark’s understanding of historical events",
          "questions Mark’s presupposition that one person can understand another’s feelings",
          "argues that the selection involved in carrying out Mark’s proposal would distort the result",
          "questions whether Mark accurately describes the kind of historical writing he deplores",
          "gives reason to believe that Mark’s recommendation is motivated by his professional self-interest"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Carla says, “But how do you go about choosing which perspective is the valid one? . . . Your approach would generate a biased version of history .... ” This is nicely summed up in (C). Although Carla says that Mark’s proposed method of history would “generate a biased version of history,” she never indicates that such a method would be impossible (B), nor does she actually question Mark’s own understanding of historical events (A). (D) uses the phrase “the kind of writing \\[Mark\\] deplores,” but there is no indication that Mark deplores anything. (E) is also way off base, introducing “professional self-interest.”",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Boldface & method of reasoning",
        "correct": "C",
        "options": 5,
        "text": "Adam: Marking road edges with reflecting posts gives drivers a clear view of the edges, thereby enabling them to drive more safely. Therefore, marking road edges with reflecting posts will decrease the annual number of road accidents. Aiesha: You seem to forget that drivers exceed the speed limit more frequently and drive close to the road edge more frequently on roads that are marked with reflecting posts than on similar roads without posts, and those are driving behaviors that cause road accidents. Aiesha responds to Adam’s argument by",
        "choices": [
          "questioning Adam’s assertion that reflecting posts give drivers a clear view of road edges",
          "presenting a possible alternative method for decreasing road accidents",
          "raising a consideration that challenges the argument’s assumption that facilitating safe driving will result in safer driving",
          "denying that the drivers’ view of the road is relevant to the number of road accidents",
          "providing additional evidence to undermine the claim that safer driving does not necessarily reduce the number of road accidents"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Adam assumes that “enabling \\[drivers\\] to drive more safely” will “decrease the annual number of accidents.” That’s a reasonable assumption, but Aiesha points out an alternative outcome—clearer markings will actually make it easier for people to drive faster and closer to the edge of the road, behaviors that causes accidents. Aiesha is thus pointing out the sad fact that making it easier for people to drive safely will not necessarily ensure that people do so (C). Aiesha disagrees that reflecting posts will decrease accidents, but she doesn’t disagree that they will make the road edge easier to see (A), or that they are relevant to the number of accidents (D) (though she thinks they will increase, not decrease, that number). Although she disagrees with Adam, she doesn’t present an alternative suggestion (B).",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "Robert: Speed limits on residential streets in Crownsbury are routinely ignored by drivers. People crossing those streets are endangered by speeding drivers, yet the city does not have enough police officers to patrol every street. So, the city should install speed bumps and signs warning of their presence on residential streets to slow down traffic. Sheila: That is a bad idea. People who are driving too fast can easily lose control of their vehicles when they hit a speed bump. The relationship of Sheila’s statement to Robert’s argument is that Sheila’s statement",
        "choices": [
          "raises the objection that the problem with which Robert is concerned may not be as serious as he takes it to be",
          "argues that the solution Robert advocates is likely to have undesirable side effects of its own",
          "defends an alternative course of action as more desirable than the one advocated by Robert",
          "concedes that the solution advocated by Robert would be effective, but insists that the reasons for this are not those given by Robert",
          "charges that Robert’s proposal would have no net effect on the problem he describes"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Sheila is worried that putting up signs and speed bumps is likely to cause serious accidents when speeders hit the speed bumps. In other words, Robert’s solution is likely to have serious new side effects (B). Sheila certainly never implies that speeding isn’t a serious problem, so we can rule out (A). (C) and (D) are also out, since Sheila only attacks Robert’s suggestion, and never suggests any alternative course of action (C) or endorses Robert’s suggestion for alternate reasons (D). (E) might be tempting, but beware of the phrase “no net effect.” Sheila doesn’t just think Robert’s suggestion would be ineffective—she feels it would actually cause new accidents.",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Boldface & method of reasoning",
        "correct": "A",
        "options": 5,
        "text": "Joanna: The only way for a company to be successful, after emerging from bankruptcy, is to produce the same goods or services that it did before going bankrupt. It is futile for such a company to try to learn a whole new business. Ruth: Wrong. The Kelton Company was a major mining operation that went into bankruptcy. On emerging from bankruptcy, Kelton turned its mines into landfills and is presently a highly successful waste-management concern. Ruth uses which one of the following argumentative techniques in countering Joanna’s argument?",
        "choices": [
          "She presents a counterexample to a claim.",
          "She offers an alternative explanation for a phenomenon.",
          "She supports a claim by offering a developed and relevant analogy.",
          "She undermines a claim by showing that it rests on an ambiguity.",
          "She establishes a conclusion by excluding the only plausible alternative to that conclusion."
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Joanna says that a company emerging from bankruptcy must not (“the only way”) change its business. Yet Ruth is quick to point to such a company that diversifies and succeeds in a way that Joanna deems “futile.” Simply put, that’s a “counter” to Joanna’s “claim,” (A). Ruth “explains” (B) how the Kelton Co. turned itself around, but that’s not an “alternative” to any “phenomenon” Joanna describes. An analogy (C) is a declaration that two unlike things share some significant similarity; but Kelton is an example of a once-bankrupt company, not an analogy to one. Both Joanna and Ruth’s claims are concrete, and neither accuses the other of ambiguity (D). And if anyone here is “excluding a plausible alternative” (E) it’s Joanna, who refuses to accept that a company can change its nature after bankruptcy and become successful.",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Boldface & method of reasoning",
        "correct": "C",
        "options": 5,
        "text": "A newspaper article on Britain’s unions argued that their strength was declining. The article’s evidence was the decreasing number and size of strikes, as if the reason for the unions’ existence was to organize strikes. Surely, in a modern industrial society, the calling of a strike is evidence that the negotiating position of the union was too weak. Strong unions do not need to call strikes. They can concentrate their efforts on working with others in the labor market to achieve common goals, such as profitable and humane working conditions. The argument criticizing the newspaper article employs which one of the following strategies?",
        "choices": [
          "questioning the accuracy of the statistical evidence that the newspaper article uses",
          "detailing historical changes that make the newspaper article’s analysis outdated",
          "reinterpreting evidence that the newspaper article uses as indicating the opposite of what the newspaper concludes",
          "arguing that the newspaper article’s conclusion is motivated by a desire to change the role of unions",
          "pointing to common interests among unions and management which the newspaper article ignores"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "(C) has it right: The author takes the very evidence (few and tiny strikes) used by the paper to belittle unions, and shows that it can speak to unions’ strength. Far from questioning the evidence’s accuracy (A) the author accepts it and uses it to his own ends. The author’s evidence is interpretive rather than historical (B) and no hint of “outdatedness” appears. In questioning the article’s conclusion, the author does not impugn its writer’s motives (D) nor does he need to; (E) seems to put its toe in the water of impugning motives as well.",
        "level": "easy"
      },
      {
        "n": 7,
        "topic": "Boldface & method of reasoning",
        "correct": "E",
        "options": 5,
        "text": "Proponent: Irradiation of food by gamma rays would keep it from spoiling before it reaches the consumer in food stores. The process leaves no radiation behind, and vitamin losses are comparable to those that occur in cooking, so there is no reason to reject irradiation on the grounds of nutrition or safety. Indeed, it kills harmful Salmonella bacteria, which in contaminated poultry have caused serious illness to consumers. Opponent: The irradiation process has no effect on the bacteria that cause botulism, a very serious form of food poisoning, while those that cause bad odors that would warn consumers of botulism are killed. Moreover, Salmonella and the bacteria that cause botulism can easily be killed in poultry by using a safe chemical dip. The opponent’s argument proceeds by",
        "choices": [
          "isolating an ambiguity in a crucial term in the proponent’s argument",
          "showing that claims made in the proponent’s argument result in a self-contradiction",
          "establishing that undesirable consequences result from the adoption of either one of two proposed remedies",
          "shifting perspective from safety with respect to consumers to safety with respect to producers",
          "pointing out an alternative way of obtaining an advantage claimed by the proponent without risking a particular disadvantage"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "What the proponent propounds is the subjecting of food to gamma irradiation which, he asserts, retards spoilage, doesn’t compromise nutrition or safety, and kills Salmonella. The opponent in effect says, hey, we should employ this chemical dip, which will not only kill Salmonella but will also avoid a disadvantage of irradiation (namely that irradiation both leaves botulism bacteria unscathed and eliminates a botulism warning). The above states in specific terms that which (E) asserts in abstract ones. Both arguments are quite concrete and leave no room for verbal ambiguity (A). That the opponent contradicts the proponent is not the same as saying that he proves a self- contradiction (B). Besides irradiation, the only other proposed remedy mentioned (C) is the chemical dip, about which the opponent establishes no undesirable consequences.",
        "level": "hard"
      },
      {
        "n": 8,
        "topic": "Boldface & method of reasoning",
        "correct": "E",
        "options": 5,
        "text": "Linguist: Some people have understood certain studies as showing that bilingual children have a reduced “conceptual map” because bilingualism overstresses the child’s linguistic capacities. Vocabulary tests taken by bilingual children appear to show that these children tend to have a smaller vocabulary than do most children of the same age group. But these studies are deeply flawed, since the tests were given in only one language. Dual-language tests revealed that the children often expressed a given concept with a word from only one of their two languages. The linguist’s argument proceeds by",
        "choices": [
          "offering evidence for the advantages of bilingualism over monolingualism",
          "pointing out an inconsistency in the view that bilingualism overstresses a child’s linguistic capabilities",
          "offering evidence that undermines the use of any vocabulary test to provide information about a child’s conceptual map",
          "providing a different explanation for the apparent advantages of bilingualism from the explanation suggested by the results of certain studies",
          "pointing out a methodological error in the technique used to obtain the purported evidence of a problem with bilingualism"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "“Abstracting” an argument means reducing each sentence to its purpose. We do it a lot in Parallel Reasoning, and it comes in handy in Method questions too. Sentence 1: allegation (studies show that bilingual kids have a reduced “conceptual map,” whatever that means; the important thing is that it sounds bad). Sentence 2: some detail about those studies (i.e., that which they “appear to show”). Sentence 3: author’s value judgment (the studies are flawed). Sentence 4: the truth behind the test results. Since the author’s overall purpose is clearly to discredit this rap at bilingualism—and since she does so by pointing out where the vocabulary tests went wrong—(E) must be the right answer.",
        "level": "hard"
      },
      {
        "n": 9,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "Dr. Jones: The new technology dubbed “telemedicine” will provide sustained improvement in at least rural patient care since it allows rural physicians to televise medical examinations to specialists who live at great distances—specialists who will thus be able to provide advice the rural patient would otherwise not receive. Dr. Carabella: Not so. Telemedicine might help rural patient care initially. However, small hospitals will soon realize that they can minimize expenses by replacing physicians with technicians who can use telemedicine to transmit examinations to large medical centers, resulting in fewer patients being able to receive traditional, direct medical examination. Eventually, it will be the rare individual who ever gets truly personal attention. Hence, rural as well as urban patient care will suffer. Dr. Carabella uses which one of the following strategies in responding to Dr. Jones?",
        "choices": [
          "listing a set of considerations to show that a prescribed treatment that seems to be benefiting a patient in fact harms that patient",
          "describing the application of the technology discussed by Dr. Jones as one step that initiates a process that leads to an undesirable end",
          "citing evidence that Dr. Jones lacks the professional training to judge the case at issue",
          "invoking medical statistics that cast doubt on the premises used in Dr. Jones’s argument",
          "providing grounds for dismissing Dr. Jones’s interpretation of a key term in medical technology"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "“Which of the following strategies . . .” signals a Method question; form a solid prephrase before attacking the choices. Carabella’s sheer movement from “initially” to “eventually,” and her dire predictions as to the ultimate bitter end of what at first seems to be a smart technology, should make (B) stand out. Carabella never claims that a seeming benefit is in fact harmful, (A), though she does feel that the initial benefits of telemedicine will turn into debits. There’s no personal criticism that amounts to an ad hominem attack, (C), nor are any statistics cited whatsoever, (D). And while Carabella takes strong issue with Jones’s optimism, she does not challenge any of his terminology, (E).",
        "level": "hard"
      },
      {
        "n": 10,
        "topic": "Boldface & method of reasoning",
        "correct": "A",
        "options": 5,
        "text": "P: Complying with the new safety regulations is useless. Even if the new regulations had been in effect before last year’s laboratory fire, they would not have prevented the fire or the injuries resulting from it because they do not address its underlying causes. Q: But any regulations that can potentially prevent money from being wasted are useful. If obeyed, the new safety regulations will prevent some accidents, and whenever there is an accident here at the laboratory, money is wasted even if no one is injured. Q responds to P’s position by",
        "choices": [
          "extending the basis for assessing the utility of complying with the new regulations",
          "citing additional evidence that undermines P’s assessment of the extent to which the new regulations would have prevented injuries in last year’s laboratory fire",
          "giving examples to show that the uselessness of all regulations cannot validly be inferred from the uselessness of one particular set of regulations",
          "showing that P’s argument depends on the false assumption that compliance with any regulations that would have prevented last year’s fire would be useful",
          "pointing out a crucial distinction, overlooked by P, between potential benefits and actual benefits"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "So, what’s Q’s method of argument? You should have had a pretty good feel for this, whether or not you were able to prephrase it precisely. The best way to go here is probably to knock off the things she doesn’t do on our way to the choice that sounds like a reasonable description of her method. (A) sounds pretty darn reasonable—she does broaden the concept of utility by bringing up the money issue whereas P spoke only of preventing injuries. It makes it easier to debate P on the usefulness of the regulations when she extends the argument in this way. Let’s keep (A) on hold just to scan the rest of the choices to make sure they’re as wrong as they need to be: (B) Q doesn’t attack on this front—she never argues that the regulations would have prevented injuries from last year’s fire. Instead, she switches the focus to saving money.",
        "level": "hard"
      },
      {
        "n": 11,
        "topic": "Boldface & method of reasoning",
        "correct": "C",
        "options": 5,
        "text": "Frankie: If jelly makers were given incentives to make a certain percentage of their jellies from cloudberries, income for cloudberry gatherers would increase. Anna: That plan would fail. Cacao, like cloudberries, was once harvested from wild plants. When chocolate became popular in Europe, the cacao gathers could not supply enough to meet the increased demand, and farmers began to grow large quantities of it at low cost. Now all cacao used in commercial chocolate production is grown on farms. Likewise, if the demand for cloudberries increases, domesticated berries grown on farms will completely supplant berries gathered in the wild. Anna’s argument proceeds by",
        "choices": [
          "giving a reason why a proposed course of action would be beneficial to all those affected by it",
          "reinterpreting evidence presented in support of a proposal as a reason to reject the proposal",
          "projecting the result of following a proposal in a given situation by comparing that situation with a past situation",
          "proposing a general theory as a way of explaining a specific market situation",
          "contending that the uses for one product are similar to the uses for another product"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "It’s Anna we’re concerned with here, as the stem helpfully points out—specifically, her method of argument. Only a gong or buzzer would state her opinion of Frankie’s plan more emphatically than does her first sentence—the plan’s a loser. Frankie believes that if it could be made worth their while for jellymakers to use cloudberries, cloudberry gatherers would make more money. But Anna rains on that parade by bringing up the subject of cacao, a product also once harvested in the wild. When demand for it rose, she claims, cacao began to be grown cheaply on farms, to the point where no commercial production of it relied on cacao gatherers.",
        "level": "easy"
      },
      {
        "n": 12,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "From the tenth century until around the year 1500, there were Norse settlers living in Greenland. During that time, average yearly temperatures fell slightly worldwide, and some people claim that this temperature drop wiped out the Norse settlements by rendering Greenland too cold for human habitation. But this explanation cannot be correct, because Inuit settlers from North America, who were living in Greenland during the time the Norse settlers were there, continued to thrive long after 1500. Which one of the following is a technique of reasoning used in the argument?",
        "choices": [
          "denying the relevance of an analogy",
          "producing evidence that is inconsistent with the claim being opposed",
          "presenting an alternative explanation that purports to account for more of the known facts",
          "citing a general rule that undermines the claim being opposed",
          "redefining a term in a way that is favorable to the argument’s conclusion"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The writer argues that blaming inhuman cold for the disappearance of the Norse from Greenland doesn’t work because another group, the Inuit, thrived there even as the Norse disappeared. In more generic terms, the author rejects the original conclusion (that cold killed off the Norse) after considering additional evidence (the survival of the Inuit during the same time period). This method of argument is described in (B). (A) The author doesn’t present an analogy to refute, so (A) cannot be the method of argument. An analogy is a likening of the mechanism of one phenomenon or event to another seemingly unrelated phenomenon or event; and no such thing happens here. (C) The author explicitly states that the inhuman-cold explanation doesn’t suffice, but then fails to offer an alternative explanation.",
        "level": "medium"
      },
      {
        "n": 13,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "A group of unusual meteorites was found in Shergotty, India. Their structure indicates that they originated on one of the geologically active planets, Mercury, Venus, or Mars. Because of Mercury’s proximity to the Sun, any material dislodged from that planet’s surface would have been captured by the Sun, rather than falling to Earth as meteorites. Nor could Venus be the source of the meteorites, because its gravity would have prevented dislodged material from escaping into space. The meteorites, therefore, probably fell to Earth after being dislodged from Mars, perhaps as the result of a collision with a large object. The argument derives its conclusion by",
        "choices": [
          "offering a counterexample to a theory",
          "eliminating competing alternative explanations",
          "contrasting present circumstances with past circumstances",
          "questioning an assumption",
          "abstracting a general principle from specific data"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Since we’re asked how the author puts together her argument, we need to identify the author’s Method of Argument. The argument proceeds in a linear fashion: Meteors came from either Mercury, Venus, or Mars. The source wasn’t Mercury (too close to the Sun), and it wasn’t Venus (gravity problems), and so, the author announces, the source must be Mars. We don’t learn anything else about Mars, but we don’t need to, as long as the only candidates are those three planets and the other two are out. So, the author came to her conclusion by eliminating the competing explanations, as (B) points out. (A) No particular examples are cited, and the author isn’t disputing one theory; she’s supporting a theory by debunking its alternatives. (C) What contrast? The story describes what must have been the case, based on what is known about the planets.",
        "level": "medium"
      },
      {
        "n": 14,
        "topic": "Boldface & method of reasoning",
        "correct": "D",
        "options": 5,
        "text": "Land developer: By attempting to preserve endangered species that otherwise would become extinct during our lifetime, we are wasting money on species that will disappear over time regardless of our efforts. Paleontologists have established that extinction is the normal fate of species on the geological time scale of millions of years. Environmentalist: To claim that we should let species disappear because all species eventually die out makes about as much sense as arguing that we should not spend money to find a cure for cancer because all humans are inevitably mortal. The method the environmentalist uses to object to the land developer’s argument is to",
        "choices": [
          "clarify a dilemma that is embedded in the land developer’s argument",
          "attack the character of the land developer rather than the position the land developer is taking",
          "show that more evidence is needed to substantiate the land developer’s conclusion",
          "show that the land developer’s line of reasoning would lead to an unacceptable conclusion if applied to a different situation",
          "argue that there are problems that money, however judiciously spent, cannot solve"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The question stem alerts us to look for the method used by the environmentalist in objecting to the land developer’s position. That is, we want to know how the environmentalist argues, not what the argument is. The developer’s main point is that it’s a waste of money to try to preserve species that will soon become extinct anyway. How does the environmentalist argue against this point? The environmentalist responds by comparing this reasoning to not spending money on cancer research just because everyone must eventually die. The environmentalist strongly implies that it would be unheard of to take this position with respect to humans. The environmentalist brings up a totally different situation in order to show that it would be reprehensible to espouse the developer’s philosophy in other circumstances.",
        "level": "medium"
      },
      {
        "n": 15,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "Party spokesperson: The opposition party’s proposal to stimulate economic activity in the province by refunding $600 million in provincial taxes to taxpayers, who could be expected to spend the money, envisions an illusory benefit. Since the province’s budget is required to be in balance, either new taxes would be needed to make up the shortfall, in which case the purpose of the refund would be defeated, or else workers for the province would be dismissed. So, either the province’s taxpayers or its workers, who are also residents of the province, will have the $600 million to spend, but there can be no resulting net increase in spending to stimulate the province’s economy. The spokesperson proceeds by",
        "choices": [
          "reinterpreting a term that is central to an opposing argument",
          "arguing that a predicted advantage would be offset by an accompanying disadvantage",
          "casting doubt on the motives of opponents",
          "drawing a distinction between different kinds of economic activity",
          "seeking to show that the assumption that taxpayers would spend money that might be refunded to them is dubious"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The stem asks us to find the choice that describes how the argument proceeds, so this is another Method of Argument question. The spokesperson asserts that the tax refund will not result in a net increase in spending since other taxes would have to be raised or province employees must lose their jobs to compensate for the lost revenue. Even though the taxpayers received a refund, either all of the taxpayers must pay more taxes and won’t have the extra money to spend, or some province employees will lose their jobs and not have any money to spend. If one of these two scenarios must occur, as the spokesperson contends, then the refund will not result in more money being spent in the province. In both scenarios, the province offsets the refund by imposing a financial penalty on at least some of the people.",
        "level": "medium"
      },
      {
        "n": 16,
        "topic": "Boldface & method of reasoning",
        "correct": "E",
        "options": 5,
        "text": "Although Damon had ample time earlier in the month to complete the paper he is scheduled to present at a professional conference tomorrow morning, he repeatedly put off doing it. Damon could still get the paper ready in time, but only if he works on it all evening without interruption. However, his seven-year- old daughter’s tap-dance recital takes place this evening, and Damon had promised both to attend and to take his daughter and her friends out for ice cream afterward. Thus, because of his procrastination, Damon will be forced to choose between his professional and his family responsibilities. The argument proceeds by",
        "choices": [
          "providing evidence that one event will occur in order to establish that an alternative event cannot occur",
          "showing that two situations are similar in order to justify the claim that someone with certain responsibilities in the first situation has similar responsibilities in the second situation",
          "invoking sympathy for someone who finds himself in a dilemma in order to excuse that person’s failure to meet all of his responsibilities",
          "making clear the extent to which someone’s actions resulted in harm to others in order to support the claim that those actions were irresponsible",
          "demonstrating that two situations cannot both occur by showing that something necessary for one of those situations is incompatible with something necessary for the other situation"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Here the choices are ever so much denser than the situation, which is pretty simple. Damon cannot attend the recital and go out afterwards and finish the paper in time. The need for 100% uninterrupted effort to finish the paper is the necessary condition about which (E) is speaking. Because he must stay home, he cannot go out. (A) distorts the situation badly. Contrary to (A), the author doesn’t predict which choice Damon will make (to finish the paper or go to the recital); she simply argues that he cannot do both. (B) is an even more egregious distortion. No essential similarities between the work and family situations are described, and there’s no claim of similar responsibilities that needs “justifying.” (C) The author demonstrates no sympathy for Damon, and no interest whatsoever in excusing him. Damon’s dilemma is of his own making.",
        "level": "easy"
      },
      {
        "n": 17,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "Alan: Government subsidies have been proposed in Cariana to encourage farmers in Rochelle, the country’s principal agricultural region, to implement certain new farming techniques. Unless these techniques are implemented, erosion of productive topsoil cannot be controlled. Unfortunately, farmers cannot afford to shoulder the entire cost of the new techniques, which are more expensive than those currently used. Therefore, without subsidies, agricultural output in Rochelle will inevitably decline. Betty: But erosion in Rochelle is caused by recurring floods, which will end next year once Cariana completes the hydroelectric dam it is building across the region’s major river. Therefore, Rochelle’s total agricultural output will stabilize at its present level even without subsidies. Betty uses which one of the following argumentative techniques in countering Alan’s argument?",
        "choices": [
          "showing that one premise in Alan’s argument is inconsistent with another premise in his argument",
          "making additional claims that, if correct, undermine a premise in Alan’s argument",
          "demonstrating that Alan’s conclusion is true but not for the reasons Alan gives to support it",
          "presenting evidence indicating that the policy Alan argues in favor of would have damaging consequences that outweigh its positive consequences",
          "pointing out that Alan’s argument mistakenly identifies something as the cause of a trend when it is really an effect of that trend"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Alan concluded that subsidies are necessary to prevent a decline in agricultural output. He came to this conclusion based on two main premises: that soil erosion can’t be controlled without the implementation of new techniques and that farmers can’t implement the techniques without subsidies. In order to disprove this conclusion, Betty introduces a new factor, the hydroelectric dam. She claims that floods cause erosion, and that the dam will prevent the floods (and thus control the erosion). Thus, as (B) says, she uses new claims (the dam will end flooding) to undermine Alan’s premise that the new farming techniques are necessary to control soil erosion. (A) Betty doesn’t try to show an internal contradiction in Alan’s argument, but instead introduces an entirely new consideration.",
        "level": "hard"
      },
      {
        "n": 18,
        "topic": "Boldface & method of reasoning",
        "correct": "D",
        "options": 5,
        "text": "A number of seriously interested amateur astronomers have tested the new Exodus refractor telescope. With it, they were able to observe in crisp detail planetary features that were seen only as fuzzy images in their 8-inch (approximately 20-centimeter) Newtonian telescopes, even though the 8-inch telescopes, with their wider apertures, gather more light than the 4-inch (approximately 10-centimeter) Exodus. Given these amateur astronomers’ observational findings, any serious amateur astronomer ought to choose the Exodus if she or he is buying a telescope for planetary observation. The argument proceeds by",
        "choices": [
          "evaluating the credibility of claims made by a particular group",
          "detailing the ways in which a testing situation approximates the conditions of ordinary use",
          "placing a phenomenon in a wider context in order to explain it",
          "supporting a recommendation to a group on the basis of the experience of a subset of that group",
          "distinguishing between the actual reasons why a certain group did a particular thing and the best reasons for doing that thing"
        ],
        "hint": "Ask who was tested and who the recommendation is aimed at.",
        "expl": "The recommendation is aimed at every serious amateur astronomer, but the only evidence is what one subset of them experienced — that is (D). This ad for Exodus telescopes is directed at “any serious amateur astronomer,” and makes its appeal based on the nifty findings of other serious amateur astronomers—a clear-cut case of appealing to a group based on the experience of a subset. (A) Astronomers’ claims are reported but not evaluated as to credibility. Indeed, they are taken on faith. (B) suggests a dichotomy—between testing conditions and “ordinary” conditions—not supported by the passage. The ad seems to assume that the large group of astronomers will work with the Exodus in the same way, and have the same success, that the subgroup did. (C) is just gibberish. There’s no “wide context” here, just some specific test results by amateur astronomers that (it is suggested) are replicable by others. (E) Motive never enters into it.\nAnswer: D.",
        "level": "hard"
      },
      {
        "n": 19,
        "topic": "Boldface & method of reasoning",
        "correct": "A",
        "options": 5,
        "text": "Whittaker: There can be no such thing as the number of medical school students who drop out before their second year, because if they drop out, they never have a second year. Hudson: By your reasoning I cannot help but become rich, because there is similarly no such thing as my dying before my first million dollars is in the bank. Hudson responds to Whittaker by",
        "choices": [
          "showing that a relevantly analogous argument leads to an untenable conclusion",
          "citing a specific example to counter Whittaker’s general claim",
          "pointing out that Whittaker mistakes a necessary situation for a possible situation",
          "claiming that what Whittaker says cannot be true because Whittaker acts as if it were false",
          "showing that Whittaker’s argument relies on analyzing an extreme and unrepresentative case"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Hudson does not respond directly to Whittaker’s argument. Instead, he applies Whittaker’s reasoning— “by your reasoning”—to an entirely different situation. A big clue that Hudson is applying Whittaker’s logic to a different situation is his use of the word “similarly.” Hudson claims, based on Whittaker’s reasoning, that it is inevitable that he will become rich because he cannot die before he has his first million dollars in the bank\\! Now, it’s certainly possible, if not likely, that you can die before you have your first million in the bank. And not having your first million in the bank is very unlikely to prevent you from dying. Thus, Hudson responds to Whittaker by making an analogy that leads to a silly conclusion— choice (A).",
        "level": "hard"
      },
      {
        "n": 20,
        "topic": "Boldface & method of reasoning",
        "correct": "E",
        "options": 5,
        "text": "Wife: The work of the artist who painted the portrait of my grandparents 50 years ago has become quite popular lately, so the portrait has recently become valuable. But since these sorts of artistic fads fade rapidly, the practical thing to do would be to sell the portrait while it is still worth something, and thereby enable our daughter to attend the college she has chosen. Husband: How could you make such a suggestion? That painting is the only thing you own that belonged to your grandparents. I don’t think it’s a very good painting, but it has great sentimental value. Besides, you owe it to our daughter to keep it in the family as a link to her family’s past. The husband uses which one of the following argumentative techniques in replying to the wife’s suggestion?",
        "choices": [
          "taking issue with the practicality of her suggestion",
          "questioning her aesthetic judgment",
          "claiming that the reasons she gives are based on emotions rather than on rational considerations",
          "asserting that the evidence she cites in support of her suggestion is false",
          "invoking a competing obligation that he judges to override her practical considerations"
        ],
        "hint": "The husband gives three reasons — decide which one actually engages his wife's argument.",
        "expl": "The husband's decisive move is to set a competing obligation — the family tie — above his wife's practical case, which is (E). In response to his wife’s desire to sell a painting in order to pay for their daughter’s college education, the husband offers three different reasons for hanging on to the thing, but it’s the third reason that relates most to her argument: the husband sees the family link as an obligation that overrides the practical consideration of paying for college. (A) and (D) The husband doesn’t argue that her solution is either impractical or false: he doesn’t argue that the painting won’t pay for college, only that that shouldn’t be the governing consideration. (B) Since the wife doesn’t say that the painting is lovely (just that it’s valuable), the husband’s criticism is not a slur on her taste. (C) If anything, it’s the husband whose recommendation is based on emotion—sentimental value and family connections and all that—not the wife.\nAnswer: E.",
        "level": "hard"
      },
      {
        "n": 21,
        "topic": "Boldface & method of reasoning",
        "correct": "D",
        "options": 5,
        "text": "Walter: For the economically privileged in a society to tolerate an injustice perpetrated against one of society’s disadvantaged is not just morally wrong but also shortsighted: a system that inflicts an injustice on a disadvantaged person today can equally well inflict that same injustice on a well- to-do person tomorrow. Larissa: In our society, the wealthy as well as the well-educated can protect themselves against all sorts of injustices suffered by the less well-off. Allowing such injustices to persist is bad policy not because it places everyone at equal risk of injustice but because it is a potent source of social unrest. Larissa responds to Walter by doing which one of the following?",
        "choices": [
          "giving reason to doubt the truth of Walter’s conclusion",
          "drawing implausible consequences from Walter’s assumptions",
          "questioning Walter’s authority to address matters of social policy",
          "providing an alternative reason for accepting the truth of Walter’s conclusion",
          "charging Walter with stopping short of recognizing the full implications of his position"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Walter’s conclusion is that tolerating an injustice is morally wrong and shortsighted. His evidence follows the colon (always pay attention to punctuation). Larissa also believes that allowing injustices is bad policy, but disagrees with Walter as to the reason. The key to understanding Larissa’s evidence is the phrase “not because . . . but because.” She disagrees with Walter’s reason for the conclusion and provides her own. Therefore, you’re looking for an answer choice, such as (D), which states that Larissa agrees with Walter’s conclusion but disagrees with his evidence (reason). (A) might have been tricky if you didn’t read the stimulus critically. Larissa agrees with Walter’s conclusion, she only disagrees with his reasoning.",
        "level": "easy"
      },
      {
        "n": 22,
        "topic": "Boldface & method of reasoning",
        "correct": "E",
        "options": 5,
        "text": "Gamba: Muñoz claims that the Southwest Hopeville Neighbors Association overwhelmingly opposes the new water system, citing this as evidence of citywide opposition. The association did pass a resolution opposing the new water system, but only 25 of 350 members voted, with 10 in favor of the system. Furthermore, the 15 opposing votes represent far less than 1 percent of Hopeville’s population. One should not assume that so few votes represent the view of the majority of Hopeville’s residents. Of the following, which one most accurately describes Gamba’s strategy of argumentation?",
        "choices": [
          "questioning a conclusion based on the results of a vote, on the grounds that people with certain views are more likely to vote",
          "questioning a claim supported by statistical data by arguing that statistical data can be manipulated to support whatever view the interpreter wants to support",
          "attempting to refute an argument by showing that, contrary to what has been claimed, the truth of the premises does not guarantee the truth of the conclusion",
          "criticizing a view on the grounds that the view is based on evidence that is in principle impossible to disconfirm",
          "attempting to cast doubt on a conclusion by claiming that the statistical sample on which the conclusion is based is too small to be dependable"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "An author will often proceed by pointing out a flaw in a position she opposes. Whenever the GMAT begins with the formulation “so-and-so claims that . . .” you should expect the author to contradict the claim somehow. After all, if they weren’t going to contradict a claim, they’d make it themselves, instead of pointing out who is responsible for such a ridiculous idea. This argument is no different. Gamba begins by outlining Muñoz’s claims: that the Hopewell Neighbors Association opposes the new water system, and that this means the city opposes it. She then goes on to shred Muñoz’s evidence for his claims. As Gamba tells us, it turns out that less than 10% of the 350-member Association even voted on the water system, and that even then the vote was pretty close—it came out 15 to 10 against the water system.",
        "level": "medium"
      },
      {
        "n": 23,
        "topic": "Boldface & method of reasoning",
        "correct": "A",
        "options": 5,
        "text": "According to the proposed Factory Safety Act, a company may operate an automobile factory only if that factory is registered as a class B factory. In addressing whether a factory may postpone its safety inspections, this Act also stipulates that no factory can be class B without punctual inspections. Thus, under the Factory Safety Act, a factory that manufactures automobiles would not be able to postpone its safety inspections. The argument proceeds by",
        "choices": [
          "pointing out how two provisions of the proposed Factory Safety Act jointly entail the unacceptability of a certain state of affairs",
          "considering two possible interpretations of a proposed legal regulation and eliminating the less plausible one",
          "showing that the terms of the proposed Factory Safety Act are incompatible with existing legislation",
          "showing that two different provisions of the proposed Factory Safety Act conflict and thus cannot apply to a particular situation",
          "pointing out that if a provision applies in a specific situation, it must apply in any analogous situation"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The correct answer to a Method of Argument question will be a 1:1 matchup between the stimulus and the answer choice. This question, which deals with a proposed Factory Safety Act, includes the most obvious Formal Logic statement of the entire section, with an “only-if” in the first sentence. We know from translating this statement that if a company operates an auto factory, it must register that facility as a “class B” factory. The second statement tells us that class B factories must have punctual inspections, and the argument concludes that the Factory Safety Act would prevent auto factories from postponing inspections. This is a classic Formal Logic formulation: If A, then B; If B, then C, therefore, if A, then C.",
        "level": "medium"
      },
      {
        "n": 24,
        "topic": "Boldface & method of reasoning",
        "correct": "D",
        "options": 5,
        "text": "Editorial: Many observers note with dismay the decline in the number of nongovernmental, voluntary community organizations. They argue that this decline is caused by the corresponding growth of government services once provided by these voluntary community groups. But this may not be true. The increase in government services may coincide with a decrease in volunteerism, but the former does not necessarily cause the latter; the latter may indeed cause the former. The editorial undermines the conclusion of the causal argument by",
        "choices": [
          "showing that there is no causality involved",
          "offering a counterexample to the alleged correlation",
          "proving that no generalization can properly be drawn about people’s motives for volunteering",
          "offering an alternate explanation of the correlation cited",
          "proving that governments must do what community organizations fail to do"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Remember the three classic alternatives to causal arguments. We know from the question stem that we’ll be dealing with a causal argument: X caused Y. You should immediately think of the three classic alternatives: Y caused X; Z caused Y and/or X; or the link was a coincidence. Here, the author is the one weakening a causal argument, so we’ll see if he uses one of these three. Sure enough, the last sentence, “the latter may indeed cause the former,” tells us that we’re looking for “Y caused X,” a reversal of the causal argument. We find this in (D). (A) contradicts the stimulus—the author tells us that the causal relationship is reversed, not nonexistent. (B) There is no counterexample cited. (C) “People’s motives for volunteering” are not part of the argument; we only know that fewer people are volunteering, not why.",
        "level": "medium"
      },
      {
        "n": 25,
        "topic": "Boldface & method of reasoning",
        "correct": "C",
        "options": 5,
        "text": "Phoebe: There have been many reported sightings of strange glowing lights, but a number of these sightings have a straightforward, natural explanation. They occurred clustered in time and location around the epicenters of three earthquakes, and so were almost certainly earthquake lights, a form of ball lightning caused by stresses in the ground. Quincy: I am skeptical that the association between the lights and the earthquakes is anything more than a coincidence. The theory that ground stresses related to earthquakes can cause any kind of lightning is extremely speculative. In responding to Phoebe, Quincy",
        "choices": [
          "takes a correlation to be a causal relation",
          "challenges the accuracy of the data about sightings that Phoebe takes for granted",
          "criticizes Phoebe’s explanation as unsubstantiated",
          "offers an explanation of the glowing lights different from Phoebe’s",
          "accuses Phoebe of introducing irrelevant information"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "In dialog-based Method of Argument questions, first read the part of the stimulus for which you are asked to find the method, especially if the two speakers’ remarks are about the same length. We must describe Quincy’s method of argument, and because Quincy says quite a lot, the odds are in our favor that we can predict the answer by reading Quincy’s remarks alone. If, by contrast, Quincy uttered only two or three lines, it would definitely be necessary to read both arguments. Quincy questions what is probably Phoebe’s conclusion, and, getting more specific, says that a theory (probably central to Phoebe’s argument) is “speculative,” or in other words, not proven. So, we can characterize his reasoning in general terms: he objects to Phoebe on the ground that she uses a dubious theory as her central support.",
        "level": "medium"
      },
      {
        "n": 26,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "Yang: Yeast has long been known to be a leaven, that is, a substance used in baking to make breads rise. Since biblical evidence ties the use of leavens to events dating back to 1200 B.c., we can infer that yeast was already known to be a leaven at that time. Campisi: I find your inference unconvincing; several leavens other than yeast could have been known in 1200 B.c. Campisi counters Yang’s argument by",
        "choices": [
          "suggesting that an alternative set of evidence better supports Yang’s conclusion",
          "questioning the truth of a presumption underlying Yang’s argument",
          "denying the truth of Yang’s conclusion without considering the reason given for that conclusion",
          "pointing out that the premises of Yang’s argument more strongly support a contrary conclusion",
          "calling into question the truth of the evidence presented in Yang’s argument"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "When the question stem asks about one of two speakers, define the important speaker’s objection before scanning the choices. Reading Campisi first, we see that Campisi thinks an “inference” Yang makes is unconvincing, and offers what appears to be an alternative. An inference is something that is unstated. Yang says people knew yeast was a leaven at least as early as 1200 B.C. because they used leavens at that time. Yang’s assumption, then, is that it was yeast that they were using, an assumption that Campisi challenges, which leads us to (B). (A) Campisi’s “alternative” isn’t a “set of evidence” nor does it “support Yang’s conclusion”—it works against Yang’s conclusion. (C) Campisi does consider the reason given and argues specifically that it fails to prove Yang’s point.",
        "level": "easy"
      },
      {
        "n": 27,
        "topic": "Boldface & method of reasoning",
        "correct": "E",
        "options": 5,
        "text": "Peter: Because the leaves of mildly drought-stressed plants are tougher in texture than the leaves of abundantly watered plants, insects prefer to feed on the leaves of abundantly watered plants. Therefore, to minimize crop damage, farmers should water crops only just enough to ensure that there is no substantial threat, from a lack of water, to either the growth or the yield of the crops. Jennifer: Indeed. In fact, a mildly drought-stressed plant will divert a small amount of its resources from normal growth to the development of pesticidal toxins, but abundantly watered plants will not. Jennifer’s comment is related to Peter’s argument in which one of the following ways?",
        "choices": [
          "It offers information that supports each of the claims that Peter makes in his argument.",
          "It supports Peter’s argument by supplying a premise without which Peter’s conclusion cannot properly be drawn.",
          "It supports Peter’s argument by offering an explanation of all of Peter’s premises.",
          "It supports one of Peter’s premises although it undermines Peter’s conclusion.",
          "It supports the conclusion of Peter’s argument by offering independent grounds for that conclusion."
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Peter’s argument is one for underwatering, which he implies makes leaves less desirable to insect predators than the less- tough leaves produced by abundant watering. “Indeed, in fact” signals Jennifer’s agreement with Peter’s conclusion that farmers should not overwater. But her evidence comes from a different but related place: She approvingly cites the greater likelihood that underwatered plants will develop poisons to kill insects. So, her point is the same as his, but she cites alternative evidence for it, and that’s (E). Jennifer can’t be supporting (A) or explaining (C) Peter’s claims because each person’s evidence focuses on a different factor. And as such, she can’t be supplying a missing premise (B) either.",
        "level": "hard"
      },
      {
        "n": 28,
        "topic": "Boldface & method of reasoning",
        "correct": "A",
        "options": 5,
        "text": "Conservationist: The risk to airplane passengers from collisions between airplanes using the airport and birds from the wildlife refuge is negligible. In the 10 years since the refuge was established, only 20 planes have been damaged in collisions with birds, and no passenger has been injured as a result of such a collision. The wildlife refuge therefore poses no safety risk. Pilot: You neglect to mention that 17 of those 20 collisions occurred within the past 2 years, and that the number of birds in the refuge is rapidly increasing. As the number of collisions between birds and airplanes increases, so does the likelihood that at least one such collision will result in passenger injuries. The pilot counters the conservationist by",
        "choices": [
          "attempting to show that the conservationist’s description of the facts is misleading",
          "questioning the conservationist’s motives for reaching a certain conclusion",
          "asserting that dangerous situations inevitably become more dangerous with the passage of time",
          "discrediting the moral principle on which the conservationist’s argument is based",
          "disputing the accuracy of the figures cited by the conservationist"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "“Counters . . . by” tells you to assess the approach or method. Why, according to the conservationist, is the wildlife refuge “therefore” no safety risk? Only 20 damaged planes in 10 years, and no passenger injuries. But the pilot sheds new light on those stats: Most of the 20 are extremely recent, and the bird population is skyrocketing. In other words, the context of the conservationists’ facts suggests that the refuge is not a place of safety, but a place of tragedy just waiting to happen. It all amounts to identifying a misleading use of statistics, (A). The most tempting wrong choice is (E), but note that the pilot accepts the accuracy of the statistics. He merely suggests that they have a very different meaning.",
        "level": "hard"
      },
      {
        "n": 29,
        "topic": "Boldface & method of reasoning",
        "correct": "A",
        "options": 5,
        "text": "Some people claim that the reason herbs are not prescribed as drugs by licensed physicians is that the medical effectiveness of herbs is seriously in doubt. No drug can be offered for sale, however, unless it has regulatory-agency approval for medicinal use in specific illnesses or conditions. It costs about $200 million to get regulatory-agency approval for a drug, and only the holder of a patent can expect to recover such large expenses. Although methods of extracting particular substances from herbs can be patented, herbs themselves and their medicinal uses cannot be. Therefore, under the current system licensed physicians cannot recommend the medicinal use of herbs. Which one of the following most accurately describes the argumentative technique used in the argument?",
        "choices": [
          "questioning a claim about why something is the case by supplying an alternative explanation",
          "attacking the validity of the data on which a competing claim is based",
          "revealing an inconsistency in the reasoning used to develop an opposing position",
          "identifying all plausible explanations for why something is the case and arguing that all but one of them can be eliminated",
          "testing a theory by determining the degree to which a specific situation conforms to the predictions of that theory"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The author’s sheer purpose is to counter the claim made in the first sentence by providing another reason—or “an alternative explanation,” in (A)’s words—why physicians don’t prescribe herbs. The data (if any) used by the people mentioned in sentence 1 goes unmentioned, let alone attacked (B). The author doesn’t see an inconsistency (C) in the claim that physicians mistrust herbs; she just sees the story from a different angle. Many other explanations for the physician/herb situation (D) go unmentioned here, and (E) would be closer if it said that the author rejects one theory (if we can call it that) by proposing another one. But that would turn (E) into (A), after all.",
        "level": "hard"
      },
      {
        "n": 30,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "Mall manager: By congregating in large groups near the stores in our mall, teenagers create an atmosphere in which many adult shoppers feel uncomfortable. As a result, the adults have begun to spend less time shopping than they have in the past. The mall’s goal in this situation is to prevent a significant loss in overall sales, so merchants should do their utmost to discourage teenagers from congregating near stores. Merchant: But the amount spent by teenagers who congregate near mall stores constitutes a significant percentage of the total amount spent in those stores. The merchant’s response to the manager’s argument is most accurately described as",
        "choices": [
          "disputing the truth of claims the manager offers as support for the recommendation",
          "giving information that pertains to the relation between the manager’s recommendation and the mall’s goal",
          "suggesting that the mall’s goal is an undesirable one",
          "contending that the manager’s recommendation is sound but for reasons other than those given by the manager",
          "using the information cited by the manager to make an additional recommendation that would help achieve the goal"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "A short response most likely focuses on a narrow segment of the first argument; zero in on that narrow focus to paraphrase the answer. The mall manager is concerned by the large groups of teenagers congregating in his mall, and argues that their presence causes adults to spend less time shopping in the mall’s stores. He uses this information to conclude that merchants in the mall should discourage teenagers from congregating near their stores, giving as a reason the fact that the mall’s goal is to prevent a loss in sales. The merchant (perhaps one of those being told to kick the teenagers out?) counters that the teenagers themselves account for a significant percentage of the total sales in the stores. This response is short and to the point, so we can quickly figure out which part of the mall manager’s argument it responds to.",
        "level": "hard"
      },
      {
        "n": 31,
        "topic": "Boldface & method of reasoning",
        "correct": "C",
        "options": 5,
        "text": "Anthropologist: After mapping the complete dominance hierarchy for a troupe of vervet monkeys by examining their pairwise interaction, we successfully predicted more complex forms of their group behavior by assuming that each monkey had knowledge of the complete hierarchy. Since our prediction was so accurate, it follows that the assumption we used to reach it was in fact true. Primatologist: Although I agree that your assumption helped you make those predictions, your conclusion does not follow. You might as well argue that since we can predict the output of some bank cash machines by assuming that these machines actually want to satisfy the customers’ requests, these cash machines must really have desires. The primatologist uses which one of the following argumentative techniques in countering the anthropologist’s argument?",
        "choices": [
          "citing various facts that could not obtain if the anthropologist’s conclusion were correct",
          "offering another argument that has as its premise the denial of the thesis that the anthropologist defends",
          "applying one of the anthropologist’s reasoning steps in another argument in an attempt to show that it leads to an absurd conclusion",
          "attacking the anthropologist’s expertise by suggesting the anthropologist is ignorant of the analogy that can be drawn between animals and machines",
          "suggesting that the anthropologist’s argument relies on a misinterpretation of a key scientific term"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The anthropologist details an experiment he was a part of and the conclusions that experiment arrived at. In short, the experiment involved mapping out the hierarchy for a troupe of monkeys, then using that hierarchy to predict the behavior of the monkeys. But in making his predictions, the anthropologist informs us, he made one key assumption: that every monkey knew the hierarchy in the same way that the anthropologist did. He concludes that this assumption is correct from the fact that his predictions were correct. But the primatologist begs to differ, and does so by way of analogy. His analogy leads to the conclusion that bank cash machines really have desires, simply from the fact that we can predict their behavior by assuming that they have desires.",
        "level": "easy"
      },
      {
        "n": 32,
        "topic": "Boldface & method of reasoning",
        "correct": "D",
        "options": 5,
        "text": "James: Chemists have recently invented a new technique for extracting rhodium, an element necessary for manufacturing catalytic converters for automobiles, from nuclear waste. Catalytic converters function to remove noxious gases from automobile exhaust. The use of nuclear power is therefore contributing in at least one way to creating a cleaner environment. Marta: The technique you mention, though effective, is still at an experimental stage, so there has been no shift in the sources of the rhodium currently used in manufacturing catalytic converters. Marta responds to James’s argument by",
        "choices": [
          "casting doubt on the accuracy of the claims made by James in support of his conclusion",
          "questioning the credibility of advocates of nuclear power",
          "indicating that James is assuming the truth of the conclusion that he intends to establish",
          "pointing out a fact that James, in drawing his conclusion, did not take into account",
          "point out that James’s premises are no more plausible than is his conclusion"
        ],
        "hint": "Marta accepts every fact James gives. So her response cannot be an attack on his evidence.",
        "expl": "Step 1 — James argues: rhodium can now be extracted from nuclear waste → rhodium makes catalytic converters → converters clean exhaust → therefore nuclear power is helping the environment.\nStep 2 — Marta grants every one of those facts. What she adds is that the technique is still experimental, so none of the rhodium in converters actually comes from nuclear waste yet.\nStep 3 — That is a fact James left out of account, and it undercuts his present-tense conclusion — (D).\nStep 4 — (A) is wrong because Marta disputes none of James's evidence. (B) is wrong: she never mentions nuclear-power advocates. (C) accuses him of circular reasoning, but his conclusion is nowhere among his premises. (E) claims his premises are no more plausible than his conclusion, but Marta treats the premises as true.\nAnswer: D.",
        "level": "medium"
      },
      {
        "n": 33,
        "topic": "Boldface & method of reasoning",
        "correct": "A",
        "options": 5,
        "text": "Inez: In these poor economic times, people want to be sure they are getting good value for their money. I predict people would be more willing to buy antiques at our fair if we first have the object inspected by professional appraisers who would remove any objects of questionable authenticity. Anika: I disagree with your prediction. Our customers already are antiques experts. Furthermore, hiring professional appraisers would push up our costs considerably, thus forcing us to raise the prices on all our antiques. Anika’s response proceeds by",
        "choices": [
          "indicating that a particular plan would have an effect contrary to the anticipated effect",
          "claiming that a particular plan should not be adopted because, while effective, it would have at least one undesirable consequence",
          "arguing that an alternative plan could achieve a desired result more easily than the plan originally proposed",
          "questioning the assumption that authorities are available who have special knowledge of the problem under discussion",
          "offering a counterexample in order to show that a particular general claim is too broadly stated"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "This question asks you to determine the way Anika’s response flows, and her statement “I disagree with your prediction” is a great clue. Inez’s prediction is that having antiques professionally appraised would make customers more willing to buy the antiques, because it would remove the possibility of getting suckered into purchasing fake items. Anika disagreeing with the prediction is a pretty blatant sign that she believes the opposite—this plan would not make customers more willing to buy the antiques. And the rest of her statement bears this out: the customers are already experts, so hiring a professional would only raise costs, causing people to buy fewer antiques. Pretty straightforward: Anika feels that Inez’s plan would have the opposite of the anticipated effect, which is (A) precisely. (B) is a half-right, half wrong choice.",
        "level": "medium"
      },
      {
        "n": 34,
        "topic": "Boldface & method of reasoning",
        "correct": "C",
        "options": 5,
        "text": "Sarah: Some schools seek to foster a habit of volunteering in their students by requiring them to perform community service. But since a person who has been forced to do something has not really volunteered and since the habit of volunteering cannot be said to have been fostered in a person who has not yet volunteered for anything, there is no way this policy can succeed by itself. Paul: I disagree. Some students forced to perform community service have enjoyed it so much that they subsequently actually volunteer to do something similar. In such cases, the policy can clearly be said to have fostered a habit of volunteering. Paul responds to Sarah’s argument using which one of the following argumentative techniques?",
        "choices": [
          "He argues that Sarah is assuming just what she sets out to prove.",
          "He argues that Sarah’s conception of what it means to volunteer excludes certain activities that ought to be considered instances of volunteering.",
          "He introduces considerations that call into question one of Sarah’s assumptions.",
          "He questions Sarah’s motives for advancing an argument against the school policy.",
          "He argues that a policy Sarah fails to consider could accomplish the same aim as the policy that Sarah considers."
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Next, we’re faced with another disagreeing pair, Sarah and Paul. And Paul is up front in his opposition as he flatly states “I disagree.” Paul disagrees with Sarah’s opinion that programs that require students to volunteer don’t succeed in producing people who like to volunteer because those students are forced to participate. Au contraire, says Paul: Some students enjoy their community service so much that they eventually decide to volunteer on their own. In other words, he brings up a situation which breaks down Sarah’s assumption that all volunteering is necessarily forced volunteering. Choice (C) gets the point.",
        "level": "medium"
      },
      {
        "n": 35,
        "topic": "Boldface & method of reasoning",
        "correct": "D",
        "options": 5,
        "text": "M: The Greek alphabet must have been invented by some individual who knew the Phoenician writing system and who wanted to have some way of recording Homeric epics and thereby preserving expressions of a highly developed tradition of oral poetry. P: Your hypothesis is laughable\\! What would have been the point of such a person’s writing Homeric epics down? Surely a person who knew them well enough to write them down would not need to read them; and no one else could read them, according to your hypothesis. Which one of the following is an argumentative strategy that P uses in responding to M?",
        "choices": [
          "attacking M’s understanding of the literary value of oral poetry",
          "disagreeing with M’s thesis without attempting to refute it",
          "challenging M’s knowledge of the Phoenician writing system",
          "attempting to undermine M’s hypothesis by making it appear absurd",
          "providing an alternative interpretation of evidence put forward by M"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "If, when two people are talking in a stimulus, you’re used to reading the second person first, simply seeing that P calls M’s hypothesis laughable might have caused you to stop right there and check out what M’s hypothesis is. The issue is, who invented the Greek alphabet? M’s idea is that it was someone who knew how to write Phoenician and wanted to record and preserve Homer’s cool (but orally transmitted in Greek) poetry. This idea is laughable, according to P, because the inventor of the Greek alphabet by definition must have been the only person who could read Homer in Greek; and since that particular guy already knew Homer by heart, why on earth would he bother to write it down? Anyway, M’s idea is ridiculous and self-contradictory, P implies—or “absurd,” as (D) has it.",
        "level": "medium"
      },
      {
        "n": 36,
        "topic": "Boldface & method of reasoning",
        "correct": "A",
        "options": 5,
        "text": "The widespread staff reductions in a certain region’s economy are said to be causing people who still have their jobs to cut back on new purchases as though they, too, had become economically distressed. Clearly, however, actual spending by such people is undiminished, because there has been no unusual increase in the amount of money held by those people in savings account. The argument in the passage proceeds by doing which one of the following?",
        "choices": [
          "concluding that since an expected consequence of a supposed development did not occur, that development itself did not take place",
          "concluding that since only one of the two predictable consequences of a certain kind of behavior is observed to occur, this observed occurrence cannot, in the current situation, be a consequence of such behavior",
          "arguing that since people’s economic behavior is guided by economic self-interest, only misinformation or error will cause people to engage in economic behavior that harms them economically",
          "arguing that since two alternative developments exhaust all the plausible possibilities, one of those developments occurred and the other did not",
          "concluding that since the evidence concerning a supposed change is ambiguous, it is most likely that no change is actually taking place"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The issue at hand, we learn from sentence 1, is: What has been the effect of a region’s high unemployment on the employed people there? Rumor seems to have it that even the working folks have cut back on their spending, as if they too were in financial trouble. But the author rebuts that rumor: “Clearly,” he concludes, workers are spending as usual. What makes him think so is that workers’ savings accounts are about normal. He seems to think that if the working folks were cutting back on their spending, they’d be putting more money away in savings. And since they’re not saving more (see the contrapositive at work here?), they must not be cutting back on spending. This Method of Argument question wants us to translate that analysis into abstract terms. One way you might approach it is like so: If a certain thing were happening (e.g.",
        "level": "easy"
      },
      {
        "n": 37,
        "topic": "Boldface & method of reasoning",
        "correct": "E",
        "options": 5,
        "text": "Astronomer: Astronomical observations in many areas have become useless because light from nearby cities obscures the stars Many people argue that since streetlights are needed for safety, such interference from lights is inevitable. Here in Sandsville, however, the local observatory’s view remains relatively clear, since the city has restricted unnecessary lighting and installed special street lamps that direct all their light downward. It is therefore possible to have both well-lighted streets and relatively dark skies. The astronomer’s argument proceeds by",
        "choices": [
          "appealing to a scientific authority to challenge a widely held belief",
          "questioning the accuracy of evidence given in support of the opposing position",
          "proposing an alternative scientific explanation for a natural phenomenon",
          "making a distinction between terms",
          "offering a counter example to a general claim"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Since we know from the stem that we’re looking for the method of argument, we can focus on how the astronomer makes her argument. The keyword “therefore” indicates the conclusion. It is possible to have well-lit streets and relatively dark skies. How does the author back up this claim? She notes that many people believe that interference from light is unfortunate but necessary, since people need bright lights for safe streets. “Here in Sandsville, however,” indicates that the example of Sandsville will be used to counter that claim. And it does. Sandville’s experience demonstrates that it is possible to have it both ways, so the astronomer does offer a counterexample to a general claim, (E). (A) What scientific authority? No one’s expertise is at issue.",
        "level": "hard"
      },
      {
        "n": 38,
        "topic": "Boldface & method of reasoning",
        "correct": "C",
        "options": 5,
        "text": "Charles: During recessions unemployment typically rises. Thus, during a recession air pollution due to automobile exhaust decreases, since fewer people commute in cars to jobs and so cars emitting pollutants into the air are used less. Darla: Why think that air pollution would decrease? During a recession fewer people can afford to buy new cars, and cars tend to emit more pollutants as they get older. Which one of the following most accurately describes how Darla’s response is related to Charles’s argument?",
        "choices": [
          "It calls into question the truth of the premises that Charles uses to support his conclusion.",
          "It makes an additional claim that can be true only if Charles’s conclusion is false.",
          "It presents an additional consideration that weakens the support given to Charles’s conclusion by his evidence.",
          "It argues that Charles’s conclusion is true, although not for the reasons Charles gives to support that conclusion.",
          "It presents an argument showing that the premises in Charles’ s argument support an absurd conclusion that Charles has overlooked."
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Charles indicates that during recessions a greater percentage of people are out of work. The keyword “thus” signals the conclusion: During a recession air pollution caused by cars decreases. Why? The keyword “since” indicates supporting evidence follows: Fewer people are commuting, which means fewer cars and therefore less pollution. Darla then challenges the conclusion, but she doesn’t challenge Charles’ evidence. Instead, she brings up a competing consideration: If fewer people have jobs, then fewer people have new cars, which means more old cars are on the road. Old cars pollute more, which could mean more pollution. Generally speaking, Darla undermines Charles’ argument by introducing an additional consideration, (C). (A) Darla doesn’t contest Charles’ evidence; she just claims that it doesn’t justify his conclusion.",
        "level": "hard"
      },
      {
        "n": 39,
        "topic": "Boldface & method of reasoning",
        "correct": "D",
        "options": 5,
        "text": "Politician: The mandatory jail sentences that became law two years ago for certain crimes have enhanced the integrity of our system of justice, for no longer are there two kinds of justice, the kind dispensed by lenient judges and the kind dispensed by severe ones. Public advocate: But with judges stripped of discretionary powers, there can be no leniency even where it would be appropriate. So, juries now sometimes acquit a given defendant solely because the jurors feel that the mandatory sentence would be too harsh. Those juries, then, do not return an accurate verdict on the defendant’s guilt. This is why it is imperative that the legislation instituting mandatory jail sentences be repealed. The public advocate responds to the politician’s argument by doing which one of the following?",
        "choices": [
          "trying to show that the politician’s conclusion merely paraphrases the politician’s evidence",
          "claiming that the politician’s evidence, properly analyzed, has no bearing on the conclusion the politician derives from it",
          "arguing that leniency is not a trait of individuals but that, rather, it is a property of certain kinds of decisions",
          "arguing that an analysis of the consequences of certain legislation undermines the politician’s conclusion",
          "charging that the politician exaggerated the severity of a problem in order to justify a sweeping solution"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The issue is mandatory sentencing, which the politician esteems as a positive vehicle for justice, since (to him) it makes justice less subject to whether a judge happens to be strict or lenient. The advocate wants to see it repealed because of its effects on juries, who (she argues) may acquit not because they’re convinced the accused is not guilty, but because they feel the mandatory sentence would be too harsh. So, the advocate’s response, as (D) says, examines the consequences of the policy in an effort to show that mandatory sentencing doesn’t ensure, but rather perverts, justice. (A) would only be accurate if the advocate were accusing the politician of circular reasoning. But her point deals with the ramifications of the proposal, not the politician’s repeating himself.",
        "level": "hard"
      },
      {
        "n": 40,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "Millions of female bats rear their pups in Bracken Cave. Although the mothers all leave the cave nightly, on their return each mother is almost always swiftly reunited with her own pup. Since the bats’ calls are their only means of finding one another, and a bat pup cannot distinguish the call of its mother from that of any other adult bat, it is clear that each mother bat can recognize the call of her pup. The argument seeks to do which one of the following?",
        "choices": [
          "derive a general conclusion about all members of a group from facts known about representative members of that group",
          "establish the validity of one explanation for a phenomenon by excluding alternative explanations",
          "support, by describing a suitable mechanism, the hypothesis that a certain phenomenon can occur",
          "conclude that members of two groups are likely to share a certain ability because of other characteristics they share",
          "demonstrate that a general rule applies in a particular case"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The issue here concerns the method by which female bats reunite with their “pups” amongst millions of bats in Bracken Cave. The only possible way to find one another is through bat calls (by way of the Bat Phone?), but the pups are clueless— they can’t tell mommy from a hole in the wall. But since the moms do hook up swiftly with their pups upon return, the author concludes that the mother bat must be able to recognize the call of her pup. What, in general terms, is the argument trying to do? It asserts a conclusion regarding a phenomenon by ruling out the only other possible explanation for the phenomenon.",
        "level": "hard"
      },
      {
        "n": 41,
        "topic": "Boldface & method of reasoning",
        "correct": "D",
        "options": 5,
        "text": "Tom: Employers complain that people graduating from high school too often lack the vocational skills required for full-time employment. Therefore, since these skills are best acquired on the job, we should require high school students to work at part-time jobs so that they acquire the skills needed for today’s job market. Mary: There are already too few part-time jobs for students who want to work, and simply requiring students to work will not create jobs for them. Which one of the following most accurately describes how Mary’s response is related to Tom’s argument?",
        "choices": [
          "It analyzes an undesirable result of undertaking the course of action that Tom recommends.",
          "It argues that Tom has mistaken an unavoidable trend for an avoidable one.",
          "It provides information that is inconsistent with an explicitly stated premise in Tom’s argument.",
          "It presents a consideration that undercuts an assumption on which Tom’s argument depends.",
          "It defends an alternative solution to the problem that Tom describes."
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Does Mary come right out and tell Tom that it’s a terrible idea? No. But she does introduce a new consideration that certainly puts a damper on his proposal. Tom believes that high school students should work part-time jobs to help prepare them for the work world, but what if these job opportunities simply aren’t available? He assumes that the opportunity for part-time work exists for high school students, but Mary strongly implies that this may not be the case. (D) describes her response perfectly: she presents a consideration (the lack of part-time job opportunities for high schoolers) that undercuts Tom’s basic assumption (that high-schoolers can get part-time work). (A) No, Mary never says “here’s a really bad thing that will happen if we require high school students to work part-time jobs.",
        "level": "easy"
      },
      {
        "n": 42,
        "topic": "Boldface & method of reasoning",
        "correct": "C",
        "options": 5,
        "text": "Philosopher: The eighteenth-century thesis that motion is absolute asserts that the change in an object’s position over time could be measured without reference to the position of any other object. A well-respected physicist, however, claims that this thesis is incoherent. Since a thesis that is incoherent cannot be accepted as a description of reality, motion cannot be absolute. The argument uses which one of the following argumentative techniques?",
        "choices": [
          "attempting to persuade by the mere use of technical terminology",
          "using experimental results to justify a change in definition",
          "relying on the authority of an expert to support a premise",
          "inferring from what has been observed to be the case under experimental conditions to what is in principle true",
          "generalizing from what is true in one region of space to what must be true in all regions of space"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "This argument begins by describing an eighteenth-century theory, and continues by asserting that a “well-respected physicist” has deemed the theory to be incoherent. The author then rejects the theory on the grounds that it’s incoherent. The only support for rejecting the theory is the statement by the physicist. (C), therefore, best describes the method of argumentation. (A) Although there is some technical terminology in the argument (motion is absolute, object’s position over time), it’s fairly simple and certainly not used as a means of argumentation. (B) , (D) No experimental results were used in the argument; the sole support for the argument is the statement by a single authority. (E) is way off the mark. The conclusion has nothing to do with accepting a theory about “all regions of space” based on a generalization.",
        "level": "medium"
      },
      {
        "n": 43,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "It is widely believed that eating chocolate can cause definition of knowledge acne. report Indeed, that, in many their own people experience, who are susceptible eating large to acne amounts of chocolate is invariably followed by an outbreak of that skin condition. However, it is likely that common wisdom has mistaken an effect for a cause. Several recent scientific studies indicate that hormonal changes associated with stress can cause acne and there is good evidence that people who are fond of chocolate tend to eat more chocolate when they are under stress. The argument employs which one of the following argumentative strategies?",
        "choices": [
          "It cites counterevidence that calls into question the accuracy of the evidence advanced in support of the position being challenged.",
          "It provides additional evidence that points to an alternative interpretation of the evidence offered in support of the position being challenged.",
          "It invokes the superior authority of science over common opinion in order to dismiss out of hand the relevance of evidence based on everyday experience.",
          "It demonstrates that the position being challenged is inconsistent with certain well-established facts.",
          "It provides counterexamples to show that, contrary to the assumption on which the commonly held position rests, causes do not always precede their effects."
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The author bolsters her belief as to the true cause + effect by citing scientific studies (the “additional evidence” of which (B) speaks), studies whose results question the sentence 2 evidence that people think supports the “widespread belief” of sentence 1. Each phrase of (B)’s has a parallel in the argument. All five choices look good without a prephrased idea of the right one. The author doesn’t “question the accuracy” of the chocolate/acne correlation; rather, she reinterprets that connection, so (A) distorts the logic. Since the author accepts the chocolate/acne correlation that is part of “everyday experience,” she is hardly “dismissing it out of hand” (C), nor is she relying on the mere authority of science over common sense. The chocolate/acne correlation is consistent with science’s view of the role of stress, so (D) is a 180.",
        "level": "medium"
      },
      {
        "n": 44,
        "topic": "Boldface & method of reasoning",
        "correct": "E",
        "options": 5,
        "text": "Lydia: Red squirrels are known to make holes in the bark of sugar maple trees and to consume the trees' sap. Since sugar maple sap is essentially water with a small concentration of sugar, the squirrels almost certainly are after either water or sugar. Water is easily available from other sources in places where maple trees grow, so the squirrels would not go to the trouble of chewing holes in trees just to get water. Therefore, they are probably after the sugar.\nLydia's argument proceeds by",
        "choices": [
          "dismissing potentially disconfirming data",
          "citing a general rule of which the conclusion is a specific instance",
          "presenting an observed action as part of a larger pattern of behavior",
          "drawing an analogy between well-understood phenomena and an unexplained phenomenon",
          "rejecting a possible alternative explanation for an observed phenomenon"
        ],
        "hint": "Lydia names two candidate motives and then removes one of them.",
        "expl": "Step 1 — Lydia narrows the squirrels' motive to two possibilities: water or sugar.\nStep 2 — She then rules out water, on the ground that water is easily available elsewhere and would not be worth chewing through bark for.\nStep 3 — With one of the two candidates eliminated, she concludes the other — sugar — is the motive. That is rejecting a possible alternative explanation, which is (E).\nStep 4 — (A) is wrong: she does not dismiss data, she reasons about which motive fits it. (B) cites no general rule. (C) never places the behaviour in a wider pattern. (D) draws no analogy.\nAnswer: E.",
        "level": "medium"
      },
      {
        "n": 45,
        "topic": "Boldface & method of reasoning",
        "correct": "E",
        "options": 5,
        "text": "Hospital auditor: The Rodríguez family stipulated that the funds they donated to the neurological clinic all be used to minimize patients’ suffering. The clinic administration is clearly violating those terms, since it has allocated nearly one fifth of those funds for research into new diagnostic technologies, instead of letting that money flow directly to its patients. Clinic administrator: But the successful development of new technologies will allow early diagnosis of many neurological disorders. In most cases, patients who are treated in the early stages of neurological disorders suffer far less than do patients who are not treated until their neurological disorders reach advanced stages. The clinic administrator responds to the hospital auditor by doing which one of the following?",
        "choices": [
          "demonstrating that the hospital auditor’s conclusion, though broadly correct, stands in need of a minor qualification",
          "showing that the hospital auditor’s argument fails to separate what is the case from what ought to be the case",
          "reminding the hospital auditor that, in the case at issue, being told what to do is tantamount to being told how to do it",
          "arguing that, in assessing the severity of a violation, the reasoning motivating the violation needs to be considered",
          "reinterpreting a key phrase in the hospital auditor’s argument so as to undermine an assumption underlying that argument"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The administrator’s first word, “But,” hints that she is going to take issue with the auditor’s point of view, and so she does. But how? She believes that the money is in fact working to alleviate patient suffering, through the development of diagnostic tools that will minimize the suffering of patients who’d feel much worse if their disorder were discovered late rather than early. The choices here confound prephrasing a bit, because they indulge in a lot of confusing abstract verbiage. But wrestling the language down to the ground should lead you to (E). The “key phrase” that the administrator “reinterprets” in order to undermine the auditor’s assumption is as follows: “instead of letting that money flow directly to \\[the\\] patients.",
        "level": "easy"
      },
      {
        "n": 46,
        "topic": "Boldface & method of reasoning",
        "correct": "D",
        "options": 5,
        "text": "Dillworth: More and more people are deciding not to have children because of the personal and economic sacrifices children require and because so often children are ungrateful for the considerable sacrifices their parents do make for them. However, such considerations have no bearing on the fact that their children provide the best chance most people have of ensuring that their values live on after them. Therefore, for anyone with deeply held values, foregoing parenthood out of reluctance to make sacrifices for which little gratitude can be expected would probably be a mistake. Travers: Your reasoning ignores another fact that deserves consideration: children’s ingratitude for parental sacrifices usually stems from a wholesale rejection of parental values. Dillworth employs which one of the following argumentative strategies?",
        "choices": [
          "showing that considerations cited as drawbacks to a given course of action are not really drawbacks at all",
          "exposing as morally suspect the motives of people who would make the choice that Dillworth rejects",
          "indirectly establishing that a given course of action is obligatory by arguing that the alternative course of action is prohibited",
          "distinguishing a category of person for whom the reason presented in favor of a given course of action is more telling than the reasons cited against that course of action",
          "using evidence that a certain course of action would be appropriate under one set of conditions to arrive at a general conclusion about what would be appropriate in all cases"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Keywords help you navigate your way through Dillworth’s unusually lengthy diatribe. Situation: People are deciding against kids for two reasons: a lot of sacrifice is required, and the kids end up ungrateful, grumble grumble. Contrast Keyword “However”: He brings up another consideration that, in his mind, outweighs the first: the fact that kids are the best way of passing on one’s values. Conclusion Keyword “Therefore”: Dillworth’s point is that those who hold values should separate themselves from the pack mentioned in sentence 1, and have kids despite all the sacrifice and ingratitude. (D) puts all of that in abstract language. The “category” is people with deep values, the “given course of action” is having kids, and the “reasons cited against \\[it\\]” are the sacrifices and ingratitude.",
        "level": "hard"
      },
      {
        "n": 47,
        "topic": "Boldface & method of reasoning",
        "correct": "B",
        "options": 5,
        "text": "Philosopher: It is absurd to argue that people are morally obligated to act in a certain way simply because not acting in that way would be unnatural. An unnatural action is either a violation of the laws of nature or a statistical anomaly. There is no possibility of acting as one cannot, nor does the mere fact that something is not usually done provide any good reason not to do it. Which one of the following most accurately describes a technique used in the philosopher’s argument?",
        "choices": [
          "undermining a concept by showing that its acceptance would violate a law of nature",
          "stating the definition of a key term of the argument",
          "using statistical findings to dispute a claim",
          "undermining a claim by showing that the claim is self-contradictory",
          "using empirical evidence to support one definition of a key term of the argument over another"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Reading and analyzing a question stem carefully can render a question much easier than it might at first appear. The stem asks for “a” technique used by the philosopher, not “the” technique; and as soon as we read “An unnatural action is either...” we can see that he has employed technique (B): yes, he has defined that key term, namely “unnatural action.” No other understanding of the dense stimulus is required, solely because we noticed the “a” rather than “the.” (A) The only concept the author might be accused of undermining is the concept of “unnatural action.” But he does so not by alleging that it violates nature’s laws, but by arguing that no such action can exist, that neither definition of the concept makes any sense. (C) No statistical findings are offered.",
        "level": "hard"
      },
      {
        "n": 48,
        "topic": "Boldface & method of reasoning",
        "correct": "A",
        "options": 5,
        "text": "Zachary: The term “fresco” refers to paint that has been applied to wet plaster. Once dried, a fresco indelibly preserves the paint that a painter has applied in this way. Unfortunately, additions known to have been made by later painters have obscured the original fresco work done by Michelangelo in the Sistine Chapel. Therefore, in order to restore Michelangelo’s Sistine Chapel paintings to the appearance that Michelangelo intended them to have, everything except the original fresco work must be stripped away. Stephen: But it was extremely common for painters of Michelangelo’s era to add painted details to their own fresco work after the frescos had dried. Stephen’s response to Zachary proceeds by",
        "choices": [
          "calling into question an assumption on which Zachary’s conclusion depends",
          "challenging the definition of a key term in Zachary’s argument",
          "drawing a conclusion other than the one that Zachary reaches",
          "denying the truth of one of the stated premises of Zachary’s argument",
          "demonstrating the Zachary’s conclusion is not consistent with the premises he uses to support it"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Stephen is playing good GMAT test-taker in his response. Zachary’s argument concludes (“Therefore”) that to return the Sistine Chapel to what Michelangelo intended, it’s necessary to strip away “everything except” the original fresco work. The evidence for this is that later painters made additions. Stephen identifies the gap between evidence and conclusion: What if Michelangelo himself had made additions after his original work, in order to fulfill his intentions? (And it sounds as if he may well have done so.) If so, stripping away “everything except” the original work would not achieve Michelangelo’s intentions at all. Stephen is doing exactly what you should be doing on a large portion of Logical Reasoning questions: identifying the assumption (A).",
        "level": "hard"
      },
      {
        "n": 49,
        "topic": "Boldface & method of reasoning",
        "correct": "A",
        "options": 5,
        "text": "Statistician: Changes in the Sun’s luminosity correlate exceedingly well with average land temperatures on Earth. Clearly—and contrary to accepted opinion among meteorologists—the Sun’s luminosity essentially controls land temperatures on Earth. Meteorologist: I disagree. Any professional meteorologist will tell you that in a system as complicated as that giving rise to the climate, no significant aspect can be controlled by a single variable. The rejection by the meteorologist of the statistician’s conclusion employs which one of the following techniques of argumentation?",
        "choices": [
          "supporting a conclusion about a specific case by invoking a relevant generalization",
          "producing a single counterexample that establishes that a generalization is false as stated",
          "reanalyzing a correlation as reflecting the multiple effects of a single cause",
          "rejecting a conclusion because it is a proposition that cannot be experimentally tested",
          "pointing out that potentially unfavorable evidence has been systematically neglected"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The statistician argues from correlation to causation: the Sun’s luminosity correlates with Earth’s land temperatures, therefore the Sun’s luminosity determines Earth’s land temperatures. The meteorologist doesn’t attack this reasoning, as you might expect, but instead simply declares that the conclusion is impossible because it’s a recognized rule among meteorologists that in a complex system (like the Earth’s climate) no significant aspect (like land temperature) can be controlled by a single variable (like the Sun’s luminosity). As (A) says, the meteorologist invokes a relevant generalization (The above-mentioned rule) to draw a conclusion about this particular problem.",
        "level": "hard"
      },
      {
        "n": 50,
        "topic": "Boldface & method of reasoning",
        "correct": "A",
        "options": 5,
        "text": "Some people have been promoting a new herbal mixture as a remedy for the common cold. The mixture contains, among other things, extracts of the plants purple coneflower and goldenseal. A cold sufferer, skeptical of the claim that the mixture is an effective cold remedy, argued, “Suppose that the mixture were an effective cold remedy. Since most people with colds wish to recover quickly, it follows that almost everybody with a cold would be using it. Therefore, since there are many people who have colds but do not use the mixture, it is obviously not effective.” Which one of the following most accurately describes the method of reasoning the cold sufferer uses to reach the conclusion of the argument?",
        "choices": [
          "finding a claim to be false on the grounds that it would if true have consequences that are false",
          "accepting a claim on the basis of public opinion of the claim",
          "showing that conditions necessary to establish the truth of a claim are met",
          "basing a generalization on a representative group of instances",
          "showing that a measure claimed to be effective in achieving a certain effect would actually make achieving the effect more difficult"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Now we’re asked for the cold sufferer’s method of argument, so let’s check the choices against the argument until we find a match. Choice (A) has a few different parts, so let’s take it a bit at a time. Does the cold sufferer find a claim to be false? Sure; our grumpy cold sufferer is skeptical of the claim that the herbal mixture is an effective cold remedy, and in fact proceeds to pronounce this claim false. So far so good. But does the rest hold up? Yes: The cold sufferer denounces the claim because he feels that, if the claim were true, there would be consequences (almost everyone with a cold would be using it) that in fact are false (many people with colds don’t use it). All elements match up, so (A) fits the bill of the cold sufferer’s method of argument. (B) The cold sufferer denounces the claim; he doesn’t accept it.",
        "level": "easy"
      },
      {
        "n": 51,
        "topic": "Boldface & method of reasoning",
        "correct": "D",
        "options": 5,
        "text": "S: It would be premature to act to halt the threatened “global warming trend,” since that alleged trend might not be real. After all, scientists disagree about it, some predicting over twice as much warming as others, so clearly their predictions cannot be based on firm evidence. W: Most scientists consider discussions of accepted ideas boring, and prefer to argue about what is not known. According to the International Science Council, there is a consensus among reputable investigators that average global warming in the next century will be from 1.5° to 4.5°C. W’s rejoinder proceeds by",
        "choices": [
          "denying the existence of the disagreements cited by S",
          "accepting S’s conclusion while disputing the reasons offered for it",
          "relying on authorities whose views conflict with the views of the authorities cited by S",
          "putting disagreements cited by S in perspective by emphasizing similarities",
          "reasoning in a circle by accepting evidence only if it agrees with a desired conclusion"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "Since W draws no conclusion, the facts she cites make sense only in the context of S’s argument that we shouldn’t try to halt future global warming because scientists disagree all over the place; the evidence isn’t firm; global warming may not even be real. What W does is suggest that scientists don’t bother to argue when facts are established, and that scientists do accept one fact: global warming is happening, albeit within an uncertain 3°C range. W’s facts are the “similarities” among scientists to which (D) refers. (A) W and S are equally aware of the disagreements among scientists; it’s just that W denies those disagreements’ relevance to the global warming debate.",
        "level": "medium"
      },
      {
        "n": 52,
        "topic": "Boldface & method of reasoning",
        "correct": "D",
        "options": 5,
        "text": "Psychologists have claimed that many people are more susceptible to psychological problems in the winter than in the summer; the psychologists call this condition seasonal affective disorder. Their claim is based on the results of surveys in which people were asked to recall how they felt at various times in the past. However, it is not clear that people are able to report accurately on their past psychological states. Therefore, these survey results do not justify the psychologists’ claim that there is any such condition as seasonal affective disorder. The author criticizes the psychologists’ claim by",
        "choices": [
          "offering an alternative explanation of the variation in the occurrence of psychological problems across seasons",
          "questioning whether any seasonal variation in the occurrence of psychological problems could properly be labeled a disorder",
          "questioning the representativeness of the population sample surveyed by the psychologists",
          "questioning an assumption that the author attributes to the psychologists",
          "demonstrating that fewer people actually suffer from seasonal affective disorder than psychologists had previously thought"
        ],
        "hint": "Summarize each speaker's point, then pick the answer that describes how the second speaker's argument works in relation to the first.",
        "expl": "The stimulus begins with the psychologists’ claim that people are more susceptible to psychological problems in the winter than in the summer (seasonal affective disorder). The only support cited for this claim comes from the survey. The psychologists are assuming that the self-reported results of the survey are accurate. The author disagrees with this assumption and uses the word “however” to signal that she disputes the validity of the survey results because she does not believe that self-reported results about the past are accurate. The author, “therefore,” does not believe that the survey results support the existence of the disorder. The author disputes the psychologists’ conclusion by questioning their central assumption that the results of such a survey can be accurate—choice (D).",
        "level": "medium"
      }
    ]
  }
];
