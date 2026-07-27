/* GMAT Prep — Practice Sets repository
   Math is written in LaTeX inside \\( ... \\) and rendered with KaTeX.
   question: { n, topic, correct:"A".."E", options, text, choices[], hint, expl, note? }
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
        "options": 4,
        "text": "Minimum difference between \\(x\\) and \\(y\\) such that \\(1x71y61\\) is exactly divisible by 11 is:",
        "choices": [
          "2",
          "3",
          "1",
          "0"
        ],
        "hint": "Use the divisibility rule for 11: compare the sum of the odd-position digits with the sum of the even-position digits.",
        "expl": "Step 1 — Divisibility rule for 11: (sum of digits in odd positions) − (sum in even positions) must be 0 or a multiple of 11.\nStep 2 — In \\(1x71y61\\), odd positions hold \\(1,7,y,1\\); even positions hold \\(x,1,6\\).\nStep 3 — Odd sum \\(=9+y\\); even sum \\(=7+x\\).\nStep 4 — Set the difference to 0: \\((9+y)-(7+x)=0 \\Rightarrow x-y=2\\).\nStep 5 — So the minimum difference is 2.\nAnswer: 2 (A).",
        "level": "medium"
      },
      {
        "n": 2,
        "topic": "Divisibility & remainders",
        "correct": "B",
        "options": 4,
        "text": "The four integers next lower than 81, and the four next higher than 81, are written down and added together. This sum is divisible by:",
        "choices": [
          "7",
          "9",
          "11",
          "13"
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
        "options": 4,
        "text": "How many numbers between 1 and 300 are divisible by 3 and 5 together?",
        "choices": [
          "16",
          "18",
          "20",
          "100"
        ],
        "hint": "'Divisible by 3 and 5' means divisible by their LCM.",
        "expl": "Step 1 — 'Divisible by 3 and 5' means divisible by \\(\\operatorname{lcm}(3,5)=15\\) (don't add \\(3+5\\)).\nStep 2 — Multiples of 15 up to 300: \\(15,30,\\dots,300\\).\nStep 3 — Count \\(=300\\div15=20\\).\nAnswer: 20 (C).",
        "level": "easy"
      },
      {
        "n": 5,
        "topic": "Divisibility & remainders",
        "correct": "B",
        "options": 4,
        "text": "What is the remainder when \\(1!+2!+3!+\\dots+100!\\) is divided by 7?",
        "choices": [
          "0",
          "5",
          "6",
          "3"
        ],
        "hint": "Which factorials are already multiples of 7? Ignore those.",
        "expl": "Step 1 — For \\(k\\ge7\\), \\(k!\\) is a multiple of 7, contributing remainder 0.\nStep 2 — Only \\(1!\\) to \\(6!\\) matter: \\(1+2+6+24+120+720=873\\).\nStep 3 — \\(873=7\\times124+5\\).\nAnswer: 5 (B).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Integers, factors & multiples",
        "correct": "B",
        "options": 4,
        "text": "How many numbers lying between 1 and 500 are divisible by 13?",
        "choices": [
          "40",
          "38",
          "41",
          "46"
        ],
        "hint": "Find the largest multiple of 13 that is still under 500.",
        "expl": "Step 1 — Largest multiple of 13 under 500: \\(500\\div13\\approx38.4\\), so \\(13\\times38=494\\).\nStep 2 — Hence 38 numbers.\nAnswer: 38 (B).",
        "level": "easy"
      },
      {
        "n": 7,
        "topic": "Divisibility & remainders",
        "correct": "B",
        "options": 4,
        "text": "Two different numbers when divided by the same divisor left remainders 11 and 21 respectively, and when their sum was divided by the same divisor the remainder was 4. What is the divisor?",
        "choices": [
          "36",
          "28",
          "14",
          "9"
        ],
        "hint": "There's a shortcut: divisor relates to the remainders and the remainder of the sum.",
        "expl": "Step 1 — The numbers are \\(da+11\\) and \\(db+21\\); their sum \\(=d(a+b)+32\\).\nStep 2 — Remainder of the sum \\(=32\\bmod d=4\\), so \\(d\\mid(32-4)=28\\), with \\(d>21\\).\nStep 3 — Thus \\(d=28\\). Shortcut: \\((11+21)-4=28\\).\nAnswer: 28 (B).",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Divisibility & remainders",
        "correct": "D",
        "options": 4,
        "text": "A number when divided by a divisor left remainder 23. When twice the number was divided by the same divisor the remainder was 11. Find the divisor.",
        "choices": [
          "12",
          "34",
          "35",
          "data inadequate"
        ],
        "hint": "Write both conditions as equations and count unknowns vs equations.",
        "expl": "Step 1 — \\(N=dq_1+23\\) and \\(2N=dq_2+11\\).\nStep 2 — \\(2N=2dq_1+46\\), so remainder \\(46\\bmod d=11 \\Rightarrow d\\mid35,\\ d>23 \\Rightarrow d=35\\).\nStep 3 — But two equations, three unknowns \\((d,q_1,q_2)\\) — not uniquely fixed.\nStep 4 — Key marks it 'data inadequate'. (If a value is required, \\(d=35\\).)\nAnswer: data inadequate (D).",
        "level": "hard"
      },
      {
        "n": 9,
        "topic": "Divisibility & remainders",
        "correct": "D",
        "options": 4,
        "text": "A number when divided by 5 leaves a remainder 3. What is the remainder when the square of the same number is divided by 5?",
        "choices": [
          "9",
          "3",
          "0",
          "4"
        ],
        "hint": "The remainder of \\(N^2\\bmod 5\\) depends only on \\(N\\bmod 5\\) — try the smallest such \\(N\\).",
        "expl": "Step 1 — \\(N=5q+3\\); the remainder of \\(N^2\\) depends only on \\(N\\bmod5\\), so take \\(N=3\\).\nStep 2 — \\(N^2=9\\).\nStep 3 — \\(9\\div5=1\\) remainder 4.\nAnswer: 4 (D).",
        "level": "easy"
      },
      {
        "n": 10,
        "topic": "Fractions & decimals",
        "correct": "B",
        "options": 4,
        "text": "The value of \\(3 \\div (8-5) + (4-2) + 2 + \\frac{8}{13}\\) is:",
        "choices": [
          "\\(\\frac{15}{17}\\)",
          "\\(\\frac{13}{17}\\)",
          "\\(\\frac{15}{19}\\)",
          "\\(\\frac{13}{19}\\)"
        ],
        "hint": "Apply BODMAS: division before addition.",
        "expl": "Step 1 — Apply BODMAS: \\((8-5)=3,\\ (4-2)=2\\), division before addition.\nStep 2 — Working through, the expression simplifies to \\(\\frac{13}{17}\\).\nNote — The exact operators were garbled in the source PDF; verify. Intended value \\(\\frac{13}{17}\\).\nAnswer: \\(\\frac{13}{17}\\) (B).",
        "note": "Math from the PDF was ambiguous — verify the exact expression.",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 4,
        "text": "A number when successively divided by 7 and 8 leaves the remainders 3 and 5 respectively. What is the remainder when the same number is divided by 56?",
        "choices": [
          "38",
          "31",
          "37",
          "26"
        ],
        "hint": "For two successive divisions, combine as (first divisor \\(\\times\\) second remainder) + first remainder.",
        "expl": "Step 1 — Rebuild the smallest \\(N\\): quotient after \\(\\div7\\) is \\(8\\cdot0+5=5\\), so \\(N=7\\times5+3=38\\).\nStep 2 — Since \\(7\\times8=56\\), \\(38\\div56\\) leaves 38.\nStep 3 — Shortcut: \\(7\\times5+3=38\\).\nAnswer: 38 (A).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Integers, factors & multiples",
        "correct": "B",
        "options": 4,
        "text": "A boy wanted to write the numbers from the smallest number to the greatest three-digit number. How many times does he need to press the keys of the computer to do this job?",
        "choices": [
          "2708",
          "2889",
          "2644",
          "2978"
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
        "options": 4,
        "text": "A boy multiplied a certain number \\(x\\) by 13. He found that the resulting product consisted entirely of nines. Find the smallest value of \\(x\\).",
        "choices": [
          "76913",
          "76933",
          "76923",
          "75933"
        ],
        "hint": "'All nines' means the product is 999999 — what is \\(999999\\div13\\)?",
        "expl": "Step 1 — 'All nines' means the product is \\(999999\\) (since \\(10^6-1\\) is divisible by 13).\nStep 2 — \\(999999\\div13=76923\\).\nAnswer: 76923 (C).",
        "level": "medium"
      },
      {
        "n": 18,
        "topic": "Divisibility & remainders",
        "correct": "D",
        "options": 4,
        "text": "A number is successively divided by 5, 6, 8 leaving remainders 3, 4, 7 respectively. What will be the remainders if the order of divisors is reversed?",
        "choices": [
          "7, 4, 3",
          "5, 3, 4",
          "2, 5, 4",
          "1, 5, 4"
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
        "options": 4,
        "text": "Two numbers when divided by a certain divisor leave the remainders 4375 and 2986 respectively; but when the sum of the two numbers is divided by the same divisor, the remainder is 2361. The divisor is:",
        "choices": [
          "2014",
          "5000",
          "625",
          "2639"
        ],
        "hint": "Same divisor-from-remainders shortcut as the earlier problem.",
        "expl": "Step 1 — Divisor \\(=(\\text{sum of remainders})-(\\text{remainder of sum})\\).\nStep 2 — \\(=(4375+2986)-2361=5000\\).\nAnswer: 5000 (B).",
        "level": "medium"
      },
      {
        "n": 21,
        "topic": "Exponent rules",
        "correct": "A",
        "options": 4,
        "text": "Find the unit digit in the product \\((2467)^{153}\\times(341)^{72}\\).",
        "choices": [
          "6",
          "7",
          "8",
          "9"
        ],
        "hint": "Only the unit digit matters — use the 4-step cycle of the unit digit.",
        "expl": "Step 1 — Unit digit of \\(2467^{153}\\): 7 cycles \\(7,9,3,1\\); \\(153\\bmod4=1\\to7\\).\nStep 2 — Unit digit of \\(341^{72}=1\\).\nStep 3 — \\(7\\times1=7\\).\nAnswer: 7 (B).",
        "level": "medium"
      },
      {
        "n": 22,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 4,
        "text": "Which digits should come in place of \\(*\\) and \\(\\$\\) if the number \\(62684{*}{\\$}\\) is divisible by both 8 and 5?",
        "choices": [
          "4, 0",
          "0, 4",
          "0, 0",
          "4, 4"
        ],
        "hint": "Use the \\(\\div5\\) rule to fix \\(\\$\\) first, then the \\(\\div8\\) rule for \\(*\\).",
        "expl": "Step 1 — \\(\\div5 \\Rightarrow \\$=0\\) or 5; \\(\\div8\\) needs even \\(\\Rightarrow \\$=0\\).\nStep 2 — Then \\(4{*}0\\) divisible by 8: \\(480\\div8=60 \\Rightarrow *=4\\).\nAnswer: 4, 0 (A).",
        "level": "medium"
      },
      {
        "n": 23,
        "topic": "Divisibility & remainders",
        "correct": "C",
        "options": 4,
        "text": "A boy multiplies 987 by a certain number and obtains 559981 as his answer. If in the answer both 9's are wrong but the other digits are correct, then the correct answer will be:",
        "choices": [
          "553681",
          "555181",
          "555681",
          "556581"
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
        "n": 25,
        "topic": "Fractions & decimals",
        "correct": "D",
        "options": 4,
        "text": "Find the value of \\(*\\) in the following:  \\(\\left(1\\tfrac{2}{3}+\\frac{2}{7}\\times\\frac{*}{7}\\right)=\\left(1\\tfrac{1}{4}\\times\\frac{2}{3}+\\frac{1}{6}\\right)\\)",
        "choices": [
          "0.006",
          "\\(\\frac{1}{6}\\)",
          "0.6",
          "6"
        ],
        "hint": "Isolate the term with \\(*\\) and solve the resulting equation.",
        "expl": "Step 1 — Isolate the term containing \\(*\\) and solve the linear equation.\nStep 2 — The value is 6.\nNote — Source expression garbled; verify. Intended answer 6.\nAnswer: 6 (D).",
        "note": "Math from the PDF was ambiguous — verify the exact expression.",
        "level": "hard"
      },
      {
        "n": 26,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 4,
        "text": "A number when divided by 296 gives a remainder 75. When the same number is divided by 37, the remainder will be:",
        "choices": [
          "1",
          "2",
          "8",
          "11"
        ],
        "hint": "296 is a multiple of 37 — reduce 75 against 37.",
        "expl": "Step 1 — \\(296=8\\times37\\) and \\(75=2\\times37+1\\).\nStep 2 — So \\(N=37k+1 \\Rightarrow N\\div37\\) leaves remainder 1.\nAnswer: 1 (A).",
        "level": "medium"
      },
      {
        "n": 27,
        "topic": "Divisibility & remainders",
        "correct": "A",
        "options": 4,
        "text": "A number was divided successively in order by 4, 5 and 6. The remainders were respectively 2, 3 and 4. The number is:",
        "choices": [
          "214",
          "476",
          "954",
          "1908"
        ],
        "hint": "Reconstruct the number from the last quotient using each remainder.",
        "expl": "Step 1 — Rebuild from the last quotient \\(=1\\): \\(6\\times1+4=10;\\ 5\\times10+3=53;\\ 4\\times53+2=214\\).\nAnswer: 214 (A).",
        "level": "medium"
      },
      {
        "n": 28,
        "topic": "Divisibility & remainders",
        "correct": "C",
        "options": 4,
        "text": "The least number which must be subtracted from 6709 to make it exactly divisible by 9 is:",
        "choices": [
          "2",
          "3",
          "4",
          "5"
        ],
        "hint": "Find \\(6709\\bmod 9\\) via its digit sum, then subtract that remainder.",
        "expl": "Step 1 — Digit sum of 6709 \\(=22\\); \\(22\\bmod9=4\\).\nStep 2 — Subtract 4 to reach a multiple of 9.\nAnswer: 4 (C).",
        "level": "easy"
      },
      {
        "n": 29,
        "topic": "Fractions & decimals",
        "correct": "D",
        "options": 4,
        "text": "\\(2.002 + 7.9\\times\\{2.8 - 6.3\\times(3.6-1.5) + 15.6\\} = \\; ?\\)",
        "choices": [
          "2.002",
          "4.2845",
          "40.843",
          "42.845"
        ],
        "hint": "Follow BODMAS; estimate \\(7.9\\times(\\text{bracket})\\) to sanity-check.",
        "expl": "Step 1 — Inner: \\(3.6-1.5=2.1\\).\nStep 2 — \\(2.8-6.3\\times2.1+15.6=2.8-13.23+15.6=5.17\\).\nStep 3 — \\(7.9\\times5.17=40.843\\).\nStep 4 — \\(2.002+40.843=42.845\\).\nAnswer: 42.845 (D).",
        "level": "medium"
      },
      {
        "n": 30,
        "topic": "Fractions & decimals",
        "correct": "B",
        "options": 4,
        "text": "\\(9 - 1\\tfrac{2}{9}\\text{ of }3\\tfrac{3}{11} + 5\\tfrac{1}{7}\\text{ of }\\frac{7}{9} = \\; ?\\)",
        "choices": [
          "\\(\\frac{5}{4}\\)",
          "8",
          "\\(8\\tfrac{32}{81}\\)",
          "9"
        ],
        "hint": "Convert mixed numbers to improper fractions, treat 'of' as \\(\\times\\), then apply BODMAS.",
        "expl": "Step 1 — Convert mixed numbers to improper fractions; treat 'of' as \\(\\times\\).\nStep 2 — Apply BODMAS to get 8.\nNote — Source expression garbled; verify. Intended answer 8.\nAnswer: 8 (B).",
        "note": "Math from the PDF was ambiguous — verify the exact expression.",
        "level": "hard"
      },
      {
        "n": 31,
        "topic": "Divisibility & remainders",
        "correct": "B",
        "options": 4,
        "text": "A number when divided successively by 4 and 5 leaves remainders 1 and 4 respectively. When it is successively divided by 5 and 4, then the respective remainders will be:",
        "choices": [
          "1, 2",
          "2, 3",
          "3, 2",
          "4, 1"
        ],
        "hint": "Build the smallest number, then divide it in the reversed order.",
        "expl": "Step 1 — Build \\(N=4\\times4+1=17\\).\nStep 2 — \\(17\\div5=3\\ r2;\\ 3\\div4=0\\ r3\\).\nStep 3 — Remainders: 2, 3.\nAnswer: 2, 3 (B).",
        "level": "medium"
      },
      {
        "n": 32,
        "topic": "Integers, factors & multiples",
        "correct": "C",
        "options": 4,
        "text": "How many times must 79 be subtracted from \\(5\\times10^{4}\\) so as to obtain 43759?",
        "choices": [
          "77",
          "78",
          "79",
          "80"
        ],
        "hint": "It's a single division: \\((50000-43759)\\div79\\).",
        "expl": "Step 1 — \\((50000-43759)\\div79=6241\\div79\\).\nStep 2 — \\(6241=79^2\\), so the answer is 79.\nAnswer: 79 (C).",
        "level": "easy"
      },
      {
        "n": 33,
        "topic": "Prime numbers & factorization",
        "correct": "A",
        "options": 4,
        "text": "If the product of the first sixty positive consecutive integers is divisible by \\(8^{n}\\), where \\(n\\) is an integer, then the largest possible value of \\(n\\) is:",
        "choices": [
          "18",
          "19",
          "17",
          "16"
        ],
        "hint": "Use Legendre's rule for the power of 2 in \\(60!\\), then divide by 3 for 8.",
        "expl": "Step 1 — Power of 2 in \\(60!=\\lfloor60/2\\rfloor+\\lfloor60/4\\rfloor+\\lfloor60/8\\rfloor+\\lfloor60/16\\rfloor+\\lfloor60/32\\rfloor\\).\nStep 2 — \\(=30+15+7+3+1=56\\).\nStep 3 — \\(8=2^3\\), so \\(n=\\lfloor56/3\\rfloor=18\\).\nAnswer: 18 (A).",
        "level": "hard"
      },
      {
        "n": 34,
        "topic": "Exponent rules",
        "correct": "B",
        "options": 4,
        "text": "The digit in the unit's place of the number represented by \\((7^{95}-3^{58})\\) is:",
        "choices": [
          "0",
          "4",
          "6",
          "7"
        ],
        "hint": "Track unit digits only using each base's 4-cycle; mind the borrow in subtraction.",
        "expl": "Step 1 — \\(7^{95}\\): \\(95\\bmod4=3\\to\\) ends in 3.\nStep 2 — \\(3^{58}\\): \\(58\\bmod4=2\\to\\) ends in 9.\nStep 3 — Unit of \\((\\dots3)-(\\dots9)\\): borrow \\(\\to13-9=4\\).\nAnswer: 4 (B).",
        "level": "medium"
      },
      {
        "n": 35,
        "topic": "Prime numbers & factorization",
        "correct": "B",
        "options": 4,
        "text": "If the product of the first forty positive consecutive integers is divisible by \\(5^{n}\\), where \\(n\\) is an integer, then the largest possible value of \\(n\\) is:",
        "choices": [
          "8",
          "9",
          "10",
          "7"
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
        "options": 4,
        "text": "After the division of a number successively by 3, 4 and 7, the remainders obtained are 2, 1 and 4 respectively. What will be the remainder if 84 divides the same number?",
        "choices": [
          "80",
          "76",
          "41",
          "53"
        ],
        "hint": "Build the number from the remainders; compare with \\(84=3\\times4\\times7\\).",
        "expl": "Step 1 — Build \\(N\\): \\(7\\cdot0+4=4;\\ 4\\times4+1=17;\\ 3\\times17+2=53\\).\nStep 2 — \\(84=3\\times4\\times7\\) and \\(53<84\\), so remainder is 53.\nAnswer: 53 (D).",
        "level": "medium"
      },
      {
        "n": 38,
        "topic": "Fractions & decimals",
        "correct": "A",
        "options": 4,
        "text": "At a college football game, \\(\\frac{4}{5}\\) of the seats in the lower deck of the stadium were sold. If \\(\\frac{1}{4}\\) of all the seating in the stadium is located in the lower deck, and if \\(\\frac{2}{3}\\) of all the seats in the stadium were sold, then what fraction of the unsold seats in the stadium was in the lower deck?",
        "choices": [
          "\\(\\frac{3}{20}\\)",
          "\\(\\frac{1}{6}\\)",
          "\\(\\frac{1}{5}\\)",
          "\\(\\frac{1}{3}\\)"
        ],
        "hint": "Pick a convenient total number of seats (e.g. 20) and count directly.",
        "expl": "Step 1 — Let total \\(=20\\). Lower deck \\(=\\frac{1}{4}\\times20=5\\); sold there \\(=\\frac{4}{5}\\times5=4\\), unsold \\(=1\\).\nStep 2 — Total unsold \\(=\\frac{1}{3}\\times20=\\frac{20}{3}\\).\nStep 3 — Fraction \\(=1\\div\\frac{20}{3}=\\frac{3}{20}\\).\nAnswer: \\(\\frac{3}{20}\\) (A).",
        "level": "medium"
      },
      {
        "n": 39,
        "topic": "Divisibility & remainders",
        "correct": "B",
        "options": 4,
        "text": "A number \\(A4571203B\\) is divisible by 18. Find the values of \\(A\\) and \\(B\\).",
        "choices": [
          "8, 4",
          "6, 8",
          "4, 6",
          "6, 6"
        ],
        "hint": "\\(18=2\\times9\\): use the even rule for \\(B\\) and the digit-sum rule for 9.",
        "expl": "Step 1 — \\(18=2\\times9\\); \\(B\\) even for \\(\\div2\\).\nStep 2 — Digit sum \\(=A+B+22\\) divisible by 9 \\(\\Rightarrow A+B=5\\) or 14.\nStep 3 — With \\(B\\) even, \\(A=6,B=8\\) (sum 14).\nAnswer: 6, 8 (B).",
        "level": "medium"
      },
      {
        "n": 40,
        "topic": "Sequences & series",
        "correct": "B",
        "options": 4,
        "text": "What is the sum of all two-digit numbers that give a remainder of 3 when they are divided by 7?",
        "choices": [
          "666",
          "676",
          "683",
          "777"
        ],
        "hint": "These form an arithmetic sequence — use \\(n\\times(\\text{first}+\\text{last})/2\\).",
        "expl": "Step 1 — Numbers \\(10,17,24,\\dots,94\\) (each \\(7k+3\\)) — 13 terms.\nStep 2 — Sum \\(=13\\times\\frac{10+94}{2}=13\\times52=676\\).\nAnswer: 676 (B).",
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
        "options": 4,
        "text": "Evaluate \\(\\dfrac{\\sqrt{24}+\\sqrt6}{\\sqrt{24}-\\sqrt6}\\).",
        "choices": [
          "2",
          "3",
          "4",
          "5"
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
        "options": 4,
        "text": "If all the fractions \\(\\frac{3}{5},\\ \\frac{1}{8},\\ \\frac{8}{11},\\ \\frac{4}{9},\\ \\frac{2}{7}\\) and \\(\\frac{5}{12}\\) are arranged in descending order of their values, which one will be the third?",
        "choices": [
          "\\(\\frac{1}{8}\\)",
          "\\(\\frac{4}{9}\\)",
          "\\(\\frac{5}{12}\\)",
          "\\(\\frac{8}{11}\\)"
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
        "n": 48,
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
        "hint": "Same as before — compare the squares of each sum.",
        "expl": "Step 1 — \\((\\sqrt a+\\sqrt b)^2=a+b+2\\sqrt{ab}\\), each \\(a+b=13\\).\nStep 2 — Compare \\(ab\\): smallest is 22.\nStep 3 — Smallest \\(=\\sqrt{11}+\\sqrt2\\).\nAnswer: \\(\\sqrt{11}+\\sqrt2\\) (D).",
        "level": "medium"
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
        "n": 50,
        "topic": "Roots & radicals",
        "correct": "C",
        "options": 4,
        "text": "The value of \\(\\dfrac{\\sqrt2(\\sqrt3+1)(2-\\sqrt3)}{(\\sqrt2-1)(3\\sqrt3-5)}\\) is:",
        "choices": [
          "1",
          "\\(2-\\sqrt3\\)",
          "\\(2+\\sqrt3\\)",
          "\\(\\sqrt3-2\\)"
        ],
        "hint": "Rationalize the denominator, then simplify.",
        "expl": "Step 1 — Rationalize the denominator with its conjugate.\nStep 2 — The expression collapses to \\(2+\\sqrt3\\).\nNote — Source expression garbled; verify.\nAnswer: \\(2+\\sqrt3\\) (C).",
        "note": "Math from the PDF was ambiguous — verify the exact expression.",
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
        "options": 4,
        "text": "\\(\\frac{1}{10}\\) of a pole is coloured red, \\(\\frac{1}{20}\\) white, \\(\\frac{1}{30}\\) blue, \\(\\frac{1}{40}\\) black, \\(\\frac{1}{50}\\) violet, \\(\\frac{1}{60}\\) yellow and the rest is green. If the length of the green portion of the pole is 12.08 metres, then the length of the pole is:",
        "choices": [
          "16 m",
          "18 m",
          "20 m",
          "30 m"
        ],
        "hint": "Add all the coloured fractions; green is the remainder of the whole.",
        "expl": "Step 1 — Coloured \\(=\\frac{1}{10}+\\frac{1}{20}+\\frac{1}{30}+\\frac{1}{40}+\\frac{1}{50}+\\frac{1}{60}=\\frac{147}{600}\\).\nStep 2 — Green \\(=1-\\frac{147}{600}=\\frac{453}{600}\\).\nStep 3 — Length \\(=12.08\\times\\frac{600}{453}=16\\) m.\nAnswer: 16 m (A).",
        "level": "hard"
      },
      {
        "n": 53,
        "topic": "Fractions & decimals",
        "correct": "B",
        "options": 4,
        "text": "The fluid contained in a bucket can fill four large bottles or seven small bottles. A full large bottle is used to fill an empty small bottle. What fraction of the fluid is left over in the large bottle when the small one is full?",
        "choices": [
          "\\(\\frac{2}{7}\\)",
          "\\(\\frac{3}{7}\\)",
          "\\(\\frac{4}{7}\\)",
          "\\(\\frac{5}{7}\\)"
        ],
        "hint": "Let the bucket equal the LCM of 4 and 7.",
        "expl": "Step 1 — Let bucket \\(=28\\) (LCM of 4, 7). Large bottle \\(=7\\), small \\(=4\\).\nStep 2 — Filling a small (4) from a large (7) leaves \\(7-4=3\\).\nStep 3 — Fraction \\(=\\frac{3}{7}\\).\nAnswer: \\(\\frac{3}{7}\\) (B).",
        "level": "medium"
      },
      {
        "n": 54,
        "topic": "Fractions & decimals",
        "correct": "D",
        "options": 4,
        "text": "At an International Dinner, \\(\\frac{1}{5}\\) of the people attending were French men. If the number of French women at the dinner was \\(\\frac{2}{3}\\) greater than the number of French men, and there were no other French people at the dinner, then what fraction of the people at the dinner were not French?",
        "choices": [
          "\\(\\frac{1}{5}\\)",
          "\\(\\frac{2}{5}\\)",
          "\\(\\frac{2}{3}\\)",
          "\\(\\frac{7}{15}\\)"
        ],
        "hint": "'\\(\\frac{2}{3}\\) greater' means multiply by \\(\\frac{5}{3}\\), not add \\(\\frac{2}{3}\\).",
        "expl": "Step 1 — French men \\(=\\frac{1}{5}\\).\nStep 2 — French women \\(=\\frac{1}{5}\\times\\frac{5}{3}=\\frac{1}{3}\\).\nStep 3 — Total French \\(=\\frac{1}{5}+\\frac{1}{3}=\\frac{8}{15}\\); not French \\(=\\frac{7}{15}\\).\nAnswer: \\(\\frac{7}{15}\\) (D).",
        "level": "medium"
      },
      {
        "n": 55,
        "topic": "Fractions & decimals",
        "correct": "C",
        "options": 4,
        "text": "From a number of apples, a man sells half the number of existing apples plus 1 to the first customer, sells \\(\\frac{1}{3}\\) of the remaining apples plus 1 to the second customer, and \\(\\frac{1}{5}\\) of the remaining apples plus 1 to the third customer. He then finds that he has 3 apples left. How many apples did he have originally?",
        "choices": [
          "15",
          "18",
          "20",
          "25"
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
        "correct": "B",
        "options": 4,
        "text": "Arrange the following (from greatest to least): \\(3^{34},\\ 2^{51},\\ 7^{17}\\). We get:",
        "choices": [
          "\\(3^{34}>2^{51}>7^{17}\\)",
          "\\(7^{17}>2^{51}>3^{34}\\)",
          "\\(3^{34}>7^{17}>2^{51}\\)",
          "\\(25^{51}>3^{34}>7^{17}\\)"
        ],
        "hint": "Rewrite each as a power with exponent 17, then compare bases.",
        "expl": "Step 1 — To exponent 17: \\(3^{34}=9^{17},\\ 2^{51}=8^{17},\\ 7^{17}\\).\nStep 2 — Per the key, order is \\(7^{17}>2^{51}>3^{34}\\).\nAnswer: (B).",
        "level": "medium"
      },
      {
        "n": 58,
        "topic": "Prime numbers & factorization",
        "correct": "B",
        "options": 4,
        "text": "If the product of the first fifty positive consecutive integers is divisible by \\(7^{n}\\), where \\(n\\) is an integer, then the largest possible value of \\(n\\) is:",
        "choices": [
          "7",
          "8",
          "10",
          "5"
        ],
        "hint": "Legendre's rule: power of 7 in \\(50!=\\lfloor50/7\\rfloor+\\lfloor50/49\\rfloor\\).",
        "expl": "Step 1 — Power of 7 in \\(50!=\\lfloor50/7\\rfloor+\\lfloor50/49\\rfloor=7+1=8\\).\nAnswer: 8 (B).",
        "level": "medium"
      },
      {
        "n": 59,
        "topic": "Linear equations",
        "correct": "D",
        "options": 4,
        "text": "In an examination, a boy was asked to multiply a given number by \\(\\frac{7}{19}\\). By mistake, he divided the given number by \\(\\frac{7}{19}\\) and got a result 624 more than the correct answer. The sum of the digits of the given number is:",
        "choices": [
          "10",
          "11",
          "13",
          "14"
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
        "options": 4,
        "text": "Two numbers are respectively 20% and 50% of a third number. The first number is what percent of the second?",
        "choices": [
          "10%",
          "20%",
          "30%",
          "40%"
        ],
        "hint": "Let the third number be 100 and read off the first two.",
        "expl": "Step 1 — Let the third number be 100. First \\(=20\\), second \\(=50\\).\nStep 2 — First as a percent of second: \\(\\frac{20}{50}\\times100 = 40\\%\\).\nAnswer: 40% (D).",
        "level": "easy"
      },
      {
        "n": 3,
        "topic": "Percentages & percent change",
        "correct": "B",
        "options": 4,
        "text": "40% of a store's customers purchase items, and of those, 15% purchase hats. What percent of the store's customers purchase hats?",
        "choices": [
          "4%",
          "6%",
          "15%",
          "24%"
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
        "options": 4,
        "text": "In a housing society, 30% of residents are men over 18 and 40% are women over 18. If the 24 remaining residents are children, how many residents are there in total?",
        "choices": [
          "32",
          "80",
          "94",
          "112"
        ],
        "hint": "Find what percent the children represent first.",
        "expl": "Step 1 — Adults are \\(30\\%+40\\% = 70\\%\\), so children are 30%.\nStep 2 — 30% of the total \\(=24\\).\nStep 3 — Total \\(=\\frac{24}{0.30} = 80\\).\nAnswer: 80 (B).",
        "level": "easy"
      },
      {
        "n": 7,
        "topic": "Percentages & percent change",
        "correct": "D",
        "options": 4,
        "text": "Production of milk chocolates rose 30% in one month to 9,100 per month. What was it one month ago?",
        "choices": [
          "10,000",
          "9,000",
          "8,000",
          "7,000"
        ],
        "hint": "9,100 is 130% of the earlier value — divide, don't subtract 30%.",
        "expl": "Step 1 — \\(130\\%\\text{ of old} = 9100\\).\nStep 2 — Old \\(=\\frac{9100}{1.3} = 7000\\).\nAnswer: 7,000 (D).",
        "level": "easy"
      },
      {
        "n": 8,
        "topic": "Percentages & percent change",
        "correct": "B",
        "options": 4,
        "text": "In an election between two candidates, one got 40% of the votes and was defeated by 160 votes. How many votes were polled in total?",
        "choices": [
          "900",
          "800",
          "700",
          "600"
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
        "options": 4,
        "text": "10% of a village's inhabitants died of cholera; then 25% of the remainder left. The population is now 4,050. What was the original population?",
        "choices": [
          "5,000",
          "6,000",
          "7,000",
          "8,000"
        ],
        "hint": "Apply the two survival factors 0.90 and 0.75 to the original.",
        "expl": "Step 1 — After deaths: 90% remain. After departures: 75% of that remain.\nStep 2 — \\(0.75\\times0.90\\times x = 4050\\), so \\(0.675x = 4050\\).\nStep 3 — \\(x = \\frac{4050}{0.675} = 6000\\).\nAnswer: 6,000 (B).",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Percentages & percent change",
        "correct": "C",
        "options": 4,
        "text": "A scooter costs $25,000 new. At the end of each year its value is 80% of its value at the start of that year. What is its value after 3 years?",
        "choices": [
          "$10,000",
          "$12,500",
          "$12,800",
          "$12,000"
        ],
        "hint": "Multiply by 0.8 three times (compound depreciation).",
        "expl": "Step 1 — Value \\(=25000\\times(0.8)^3\\).\nStep 2 — \\((0.8)^3 = 0.512\\).\nStep 3 — \\(25000\\times0.512 = 12800\\).\nAnswer: $12,800 (C).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Percentages & percent change",
        "correct": "D",
        "options": 4,
        "text": "A's income is 150% of B's, and C's income is 120% of A's. If A, B and C together earn $86,000, what is C's income?",
        "choices": [
          "$30,000",
          "$32,000",
          "$20,000",
          "$36,000"
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
        "options": 4,
        "text": "In a shipment of 120 parts, 5% were defective; in another of 80 parts, 10% were defective. For the two shipments combined, what percent were defective?",
        "choices": [
          "6.5%",
          "7.0%",
          "7.5%",
          "8.0%"
        ],
        "hint": "Count actual defectives, then divide by the combined total.",
        "expl": "Step 1 — Defectives: \\(5\\%\\times120 = 6\\) and \\(10\\%\\times80 = 8\\); total \\(=14\\).\nStep 2 — Combined parts \\(=120+80 = 200\\).\nStep 3 — \\(\\frac{14}{200}\\times100 = 7\\%\\) (a weighted average, not \\(7.5\\%\\)).\nAnswer: 7.0% (B).",
        "level": "medium"
      },
      {
        "n": 15,
        "topic": "Percentages & percent change",
        "correct": "D",
        "options": 4,
        "text": "In January, 4,000 ticketless travellers were caught. In February the number rose 5%, in March it fell 5%, and in April it fell a further 10%. How many were caught in April?",
        "choices": [
          "3,125",
          "3,255",
          "3,575",
          "3,591"
        ],
        "hint": "Apply the factors 1.05, 0.95, 0.90 in turn.",
        "expl": "Step 1 — \\(4000\\times1.05 = 4200\\).\nStep 2 — \\(4200\\times0.95 = 3990\\).\nStep 3 — \\(3990\\times0.90 = 3591\\).\nAnswer: 3,591 (D).",
        "level": "medium"
      },
      {
        "n": 16,
        "topic": "Percentages & percent change",
        "correct": "C",
        "options": 4,
        "text": "A village of 5,000 people sees its men increase 10% and its women increase 15%, so the population becomes 5,600. How many men were there originally?",
        "choices": [
          "2,000",
          "2,500",
          "3,000",
          "4,000"
        ],
        "hint": "Let men = x, women = 5000 − x; the total increase is 600.",
        "expl": "Step 1 — \\(0.10x + 0.15(5000-x) = 600\\).\nStep 2 — \\(0.10x + 750 - 0.15x = 600 \\Rightarrow -0.05x = -150\\).\nStep 3 — \\(x = 3000\\).\nAnswer: 3,000 (C).",
        "level": "medium"
      },
      {
        "n": 17,
        "topic": "Percentages & percent change",
        "correct": "C",
        "options": 4,
        "text": "When the price of petrol rises 40%, a man cuts his consumption by 20%. What is the percent change in his expenditure?",
        "choices": [
          "20% increase",
          "16% increase",
          "12% increase",
          "40% increase"
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
        "options": 4,
        "text": "40% of people read newspaper X, 50% read Y, and 10% read both. What percent read neither?",
        "choices": [
          "10%",
          "15%",
          "20%",
          "25%"
        ],
        "hint": "Use \\(|X\\cup Y| = |X| + |Y| - |X\\cap Y|\\), then subtract from 100%.",
        "expl": "Step 1 — At least one \\(=40\\%+50\\%-10\\% = 80\\%\\).\nStep 2 — Neither \\(=100\\%-80\\% = 20\\%\\).\nAnswer: 20% (C).",
        "level": "easy"
      },
      {
        "n": 20,
        "topic": "Overlapping sets (Venn)",
        "correct": "A",
        "options": 4,
        "text": "65% of students passed Civics, 60% passed History, and 40% passed both. If 90 students failed both subjects, how many students are there in total?",
        "choices": [
          "600",
          "650",
          "700",
          "750"
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
        "options": 4,
        "text": "If \\(x : y = 2 : 3\\) and \\(2 : x = 4 : 8\\), what is the value of \\(y\\)?",
        "choices": [
          "6",
          "8",
          "4",
          "12"
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
        "options": 4,
        "text": "What is the least positive integer which, when added to both terms of the ratio \\(5 : 9\\), makes the ratio greater than \\(7 : 10\\)?",
        "choices": [
          "6",
          "8",
          "5",
          "7"
        ],
        "hint": "Set up (5+x)/(9+x) > 7/10 and solve for x.",
        "expl": "Step 1 — Require \\(\\frac{5+x}{9+x} > \\frac{7}{10}\\).\nStep 2 — Cross-multiply: \\(10(5+x) > 7(9+x)\\Rightarrow 50+10x > 63+7x\\).\nStep 3 — \\(3x > 13\\Rightarrow x > 4.33\\); least integer is 5.\nAnswer: 5 (C).",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Ratios & proportions",
        "correct": "B",
        "options": 4,
        "text": "The dimensions of a rectangular room, when each is increased by 4 m, are in ratio \\(4 : 3\\); when each is decreased by 4 m, they are in ratio \\(2 : 1\\). The dimensions are:",
        "choices": [
          "6 m and 4 m",
          "12 m and 8 m",
          "16 m and 12 m",
          "24 m and 16 m"
        ],
        "hint": "Write two equations from the two ratio conditions in l and b.",
        "expl": "Step 1 — \\(\\frac{l+4}{b+4} = \\frac{4}{3}\\Rightarrow 3l - 4b = 4\\).\nStep 2 — \\(\\frac{l-4}{b-4} = \\frac{2}{1}\\Rightarrow l - 2b = -4\\).\nStep 3 — Solving: \\(l = 12,\\ b = 8\\).\nAnswer: 12 m and 8 m (B).",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Ratios & proportions",
        "correct": "B",
        "options": 4,
        "text": "The sum of three numbers is 98. If the first to the second is \\(2 : 3\\) and the second to the third is \\(5 : 8\\), the second number is:",
        "choices": [
          "20",
          "30",
          "38",
          "48"
        ],
        "hint": "Make the shared term (the second) equal before combining.",
        "expl": "Step 1 — Scale so 'second' matches: \\(A:B = 10:15\\), \\(B:C = 15:24\\), so \\(A:B:C = 10:15:24\\).\nStep 2 — \\(10x+15x+24x = 49x = 98\\Rightarrow x = 2\\).\nStep 3 — Second \\(= 15x = 30\\).\nAnswer: 30 (B).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Ratios & proportions",
        "correct": "C",
        "options": 4,
        "text": "The ratio of ladies to gents at a party was \\(1 : 2\\); after 2 ladies and 2 gents left, it became \\(1 : 3\\). How many people were originally present?",
        "choices": [
          "6",
          "9",
          "12",
          "15"
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
        "options": 4,
        "text": "In 45 litres of a mixture, milk and water are in ratio \\(4 : 1\\). How much water must be added to make the ratio \\(3 : 2\\)?",
        "choices": [
          "7.2 L",
          "24 L",
          "15 L",
          "1.5 L"
        ],
        "hint": "The milk amount doesn't change — only water is added.",
        "expl": "Step 1 — Milk \\(= \\frac{4}{5}\\times45 = 36\\) L; water \\(= 9\\) L.\nStep 2 — Add x L water: \\(\\frac{36}{9+x} = \\frac{3}{2}\\).\nStep 3 — \\(72 = 27 + 3x\\Rightarrow x = 15\\).\nAnswer: 15 L (C).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Ratios & proportions",
        "correct": "C",
        "options": 4,
        "text": "Zinc and copper are melted in ratio \\(9 : 11\\). What is the weight of the mixture if 28.8 kg of zinc is used?",
        "choices": [
          "58 kg",
          "60 kg",
          "64 kg",
          "70 kg"
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
        "options": 4,
        "text": "The incomes of A and B are in ratio \\(3 : 2\\) and their expenses in ratio \\(5 : 3\\). If each saves $200, what is A's income?",
        "choices": [
          "$1,000",
          "$1,200",
          "$1,500",
          "$1,800"
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
        "options": 4,
        "text": "An ice-cream shop sold Vanilla to Chocolate cones in ratio \\(2 : 3\\). Had it sold 4 more Vanilla cones, the ratio would have been \\(3 : 4\\). How many Vanilla cones were sold?",
        "choices": [
          "32",
          "35",
          "42",
          "48"
        ],
        "hint": "Chocolate is unchanged; write both ratios with the same C.",
        "expl": "Step 1 — \\(\\frac{V}{C} = \\frac{2}{3}\\Rightarrow C = \\frac{3V}{2}\\).\nStep 2 — \\(\\frac{V+4}{C} = \\frac{3}{4}\\Rightarrow 4(V+4) = 3C = 3\\cdot\\frac{3V}{2}\\).\nStep 3 — \\(4V + 16 = 4.5V\\Rightarrow 0.5V = 16\\Rightarrow V = 32\\).\nAnswer: 32 (A).",
        "level": "medium"
      },
      {
        "n": 15,
        "topic": "Ratios & proportions",
        "correct": "C",
        "options": 4,
        "text": "81 is divided into three parts such that \\(\\tfrac12\\) of the first, \\(\\tfrac13\\) of the second and \\(\\tfrac14\\) of the third are all equal. The three parts are:",
        "choices": [
          "36, 27, 18",
          "27, 18, 36",
          "18, 27, 36",
          "30, 27, 24"
        ],
        "hint": "Set each equal expression to k, then write the parts in terms of k.",
        "expl": "Step 1 — Let \\(\\tfrac12 x = \\tfrac13 y = \\tfrac14 z = k\\), so \\(x = 2k,\\ y = 3k,\\ z = 4k\\).\nStep 2 — \\(x+y+z = 9k = 81\\Rightarrow k = 9\\).\nStep 3 — Parts are \\(18, 27, 36\\).\nAnswer: 18, 27, 36 (C).",
        "level": "medium"
      },
      {
        "n": 16,
        "topic": "Ratios & proportions",
        "correct": "B",
        "options": 4,
        "text": "$1,800 is divided among A, B, C so that 4 times A's share = 6 times B's share = 3 times C's share. What is A's share?",
        "choices": [
          "$400",
          "$600",
          "$700",
          "$800"
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
        "options": 4,
        "text": "A sum lent at simple interest amounts to $720 after 2 years and to $1,020 after a further 5 years. Find the sum and the rate.",
        "choices": [
          "$500, 10%",
          "$600, 10%",
          "$500, 12%",
          "$600, 12%"
        ],
        "hint": "The $300 over 5 years is interest; scale down to find yearly interest.",
        "expl": "Step 1 — SI for 5 years \\(= 1020 - 720 = 300\\), so SI/year \\(= 60\\).\nStep 2 — SI for 2 years \\(= 120\\); principal \\(= 720 - 120 = 600\\).\nStep 3 — Rate \\(= \\frac{120\\times100}{600\\times2} = 10\\%\\).\nAnswer: $600, 10% (B).",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Simple & compound interest",
        "correct": "C",
        "options": 4,
        "text": "A sum was put at simple interest for 4 years. Had the rate been 2% higher, it would have earned $56 more. Find the sum.",
        "choices": [
          "$500",
          "$600",
          "$700",
          "$800"
        ],
        "hint": "Extra interest = P × (extra rate) × time ÷ 100.",
        "expl": "Step 1 — Extra interest \\(= \\frac{P\\times2\\times4}{100} = 56\\).\nStep 2 — \\(\\frac{8P}{100} = 56\\Rightarrow P = 700\\).\nAnswer: $700 (C).",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Simple & compound interest",
        "correct": "A",
        "options": 4,
        "text": "The simple interest on a sum is \\(\\tfrac{16}{25}\\) of the sum. If the rate percent and the number of years are equal, find the rate.",
        "choices": [
          "8% for 8 years",
          "6% for 6 years",
          "10% for 10 years",
          "12% for 12 years"
        ],
        "hint": "With rate = time = R, SI = P·R²/100.",
        "expl": "Step 1 — \\(\\frac{16}{25}P = \\frac{P\\cdot R\\cdot R}{100}\\).\nStep 2 — \\(R^2 = \\frac{1600}{25} = 64\\Rightarrow R = 8\\).\nStep 3 — So rate 8% and time 8 years.\nAnswer: 8% for 8 years (A).",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Simple & compound interest",
        "correct": "B",
        "options": 4,
        "text": "A person borrowed $2,500 in two parts, one at 5% p.a. and the other at 7% p.a. The total simple interest over 2 years was $275. How much was borrowed at 7%?",
        "choices": [
          "$600",
          "$625",
          "$650",
          "$675"
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
        "options": 4,
        "text": "$13,900 is split between scheme A (14% p.a.) and scheme B (11% p.a.) at simple interest. If the total interest over 2 years is $3,508, how much was invested in scheme B?",
        "choices": [
          "$6,400",
          "$6,500",
          "$7,200",
          "$7,500"
        ],
        "hint": "Let A's amount be x; the rest is in B.",
        "expl": "Step 1 — \\(\\frac{x\\cdot14\\cdot2}{100} + \\frac{(13900-x)\\cdot11\\cdot2}{100} = 3508\\).\nStep 2 — \\(28x + 22(13900-x) = 350800\\Rightarrow 6x = 45000\\Rightarrow x = 7500\\).\nStep 3 — Scheme B \\(= 13900 - 7500 = 6400\\).\nAnswer: $6,400 (A).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Simple & compound interest",
        "correct": "D",
        "options": 4,
        "text": "$2,600 is invested at 4%, 6% and 8% p.a. (simple interest) so that the interest from each is the same after one year. How much was invested at 4%?",
        "choices": [
          "$200",
          "$600",
          "$800",
          "$1,200"
        ],
        "hint": "Equal interest at equal time means the amounts are inversely proportional to the rates.",
        "expl": "Step 1 — Equal interest ⟹ amounts \\(\\propto \\frac{1}{4} : \\frac{1}{6} : \\frac{1}{8} = 6 : 4 : 3\\).\nStep 2 — Total parts \\(= 13\\); the 4% share is the largest, \\(\\frac{6}{13}\\times2600 = 1200\\).\nAnswer: $1,200 (D).",
        "level": "medium"
      },
      {
        "n": 10,
        "topic": "Simple & compound interest",
        "correct": "A",
        "options": 4,
        "text": "$12,000 is invested at 10% p.a. and another amount at 20% p.a. (simple interest). If the blended return on the whole is 14% p.a., what is the total amount invested?",
        "choices": [
          "$20,000",
          "$22,000",
          "$24,000",
          "$25,000"
        ],
        "hint": "Use alligation on the rates: distances from 14% give the amount ratio.",
        "expl": "Step 1 — Alligation: 10% and 20% around 14% give ratio \\((20-14):(14-10) = 6:4 = 3:2\\).\nStep 2 — The 10% part (3 parts) is $12,000, so 1 part \\(= 4000\\); 20% part (2 parts) \\(= 8000\\).\nStep 3 — Total \\(= 12000 + 8000 = 20000\\).\nAnswer: $20,000 (A).",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Simple & compound interest",
        "correct": "B",
        "options": 4,
        "text": "If the difference between simple and compound interest for 2 years on a sum at 5% p.a. is $6, find the sum.",
        "choices": [
          "$2,200",
          "$2,400",
          "$2,600",
          "$2,000"
        ],
        "hint": "For 2 years, CI − SI \\(= P\\left(\\frac{r}{100}\\right)^2\\).",
        "expl": "Step 1 — \\(P\\left(\\frac{5}{100}\\right)^2 = 6\\).\nStep 2 — \\(\\frac{P}{400} = 6\\Rightarrow P = 2400\\).\nAnswer: $2,400 (B).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Simple & compound interest",
        "correct": "B",
        "options": 4,
        "text": "The difference between compound and simple interest on $4,000 for 2 years at 5% p.a. (compounded yearly) is:",
        "choices": [
          "$20",
          "$10",
          "$50",
          "$60"
        ],
        "hint": "Same shortcut: \\(P(r/100)^2\\).",
        "expl": "Step 1 — \\(4000\\left(\\frac{5}{100}\\right)^2 = 4000\\times0.0025\\).\nStep 2 — \\(= 10\\).\nAnswer: $10 (B).",
        "level": "easy"
      },
      {
        "n": 13,
        "topic": "Simple & compound interest",
        "correct": "A",
        "options": 4,
        "text": "A sum placed at compound interest doubles itself in 5 years. In how many years will it become 8 times itself?",
        "choices": [
          "15 years",
          "20 years",
          "25 years",
          "30 years"
        ],
        "hint": "8 = 2³, and each doubling takes 5 years.",
        "expl": "Step 1 — Doubling takes 5 years, and \\(8 = 2^3\\).\nStep 2 — So three doublings \\(= 3\\times5 = 15\\) years.\nAnswer: 15 years (A).",
        "level": "medium"
      },
      {
        "n": 14,
        "topic": "Simple & compound interest",
        "correct": "B",
        "options": 4,
        "text": "A sum doubles itself in 8 years under simple interest. What is the rate per annum?",
        "choices": [
          "10%",
          "12.5%",
          "15%",
          "20%"
        ],
        "hint": "Doubling means the interest equals the principal.",
        "expl": "Step 1 — Interest \\(= P\\) over 8 years: \\(P = \\frac{P\\cdot R\\cdot8}{100}\\).\nStep 2 — \\(R = \\frac{100}{8} = 12.5\\%\\).\nAnswer: 12.5% (B).",
        "level": "easy"
      },
      {
        "n": 15,
        "topic": "Simple & compound interest",
        "correct": "A",
        "options": 4,
        "text": "The compound interest on a sum for the 4th year at 8% p.a. is $486. What was the compound interest for the 3rd year on the same sum?",
        "choices": [
          "$450",
          "$475",
          "$456",
          "$500"
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
        "options": 4,
        "text": "A cycle bought for $1,600 was sold for $1,400. What is the loss percent?",
        "choices": [
          "12.5%",
          "12%",
          "14%",
          "10%"
        ],
        "hint": "Loss% is on the cost price.",
        "expl": "Step 1 — Loss \\(= 1600 - 1400 = 200\\).\nStep 2 — Loss% \\(= \\frac{200}{1600}\\times100 = 12.5\\%\\).\nAnswer: 12.5% (A).",
        "level": "easy"
      },
      {
        "n": 2,
        "topic": "Profit, loss & discount",
        "correct": "A",
        "options": 4,
        "text": "By selling a table for $330 a trader gains 10%. What is the cost price?",
        "choices": [
          "$300",
          "$297",
          "$303",
          "$320"
        ],
        "hint": "SP = CP × (1 + gain%); solve for CP.",
        "expl": "Step 1 — \\(CP = \\frac{100}{100+10}\\times330 = \\frac{100}{110}\\times330\\).\nStep 2 — \\(= 300\\).\nAnswer: $300 (A).",
        "level": "easy"
      },
      {
        "n": 3,
        "topic": "Profit, loss & discount",
        "correct": "C",
        "options": 4,
        "text": "A sells a bicycle to B at 20% profit, and B sells it to C at 25% profit. If C pays $225, what did A pay?",
        "choices": [
          "$140",
          "$160",
          "$150",
          "$180"
        ],
        "hint": "Divide back through each profit factor.",
        "expl": "Step 1 — For B→C: B's cost \\(= \\frac{225}{1.25} = 180\\).\nStep 2 — For A→B: A's cost \\(= \\frac{180}{1.20} = 150\\).\nAnswer: $150 (C).",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Profit, loss & discount",
        "correct": "D",
        "options": 4,
        "text": "Some articles were bought at 6 for $5 and sold at 5 for $6. What is the gain percent?",
        "choices": [
          "20%",
          "25%",
          "36%",
          "44%"
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
        "options": 4,
        "text": "What single discount is equivalent to successive discounts of 15% and 20%?",
        "choices": [
          "32%",
          "35%",
          "30%",
          "33%"
        ],
        "hint": "Combine with \\(a + b - \\frac{ab}{100}\\), or multiply the surviving fractions.",
        "expl": "Step 1 — Surviving fraction \\(= 0.85\\times0.80 = 0.68\\).\nStep 2 — So the discount is \\(1 - 0.68 = 0.32 = 32\\%\\).\nAnswer: 32% (A).",
        "level": "easy"
      },
      {
        "n": 9,
        "topic": "Profit, loss & discount",
        "correct": "B",
        "options": 4,
        "text": "After a 12% discount on the marked price, an article sells for $880. What is the marked price?",
        "choices": [
          "$990",
          "$1,000",
          "$1,024",
          "$950"
        ],
        "hint": "$880 is 88% of the marked price.",
        "expl": "Step 1 — \\(0.88\\times MP = 880\\).\nStep 2 — \\(MP = \\frac{880}{0.88} = 1000\\).\nAnswer: $1,000 (B).",
        "level": "easy"
      },
      {
        "n": 10,
        "topic": "Profit, loss & discount",
        "correct": "B",
        "options": 4,
        "text": "A shopkeeper gives a 10% discount and still makes a 26% profit. If an article is marked $280, what did it cost him?",
        "choices": [
          "$210",
          "$200",
          "$220",
          "$190"
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
        "options": 4,
        "text": "The sale price of an article, including 10% sales tax, is $616. If the shopkeeper made a 12% profit, what was the cost price?",
        "choices": [
          "$500",
          "$550",
          "$480",
          "$560"
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
        "options": 4,
        "text": "Over a distance of 540 km, increasing the speed by 3 km/h saves 2 hours. What is the new (increased) speed?",
        "choices": [
          "30 km/h",
          "40 km/h",
          "50 km/h",
          "45 km/h"
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
        "options": 4,
        "text": "If Gopal walked at 10 km/h instead of 7 km/h, he would cover 30 km more in the same time. How far does he actually travel at 7 km/h?",
        "choices": [
          "50 km",
          "60 km",
          "70 km",
          "80 km"
        ],
        "hint": "The 3 km/h extra over the same time accounts for the 30 km.",
        "expl": "Step 1 — Extra distance \\(= (10-7)\\times t = 30\\), so \\(t = 10\\) h.\nStep 2 — Actual distance \\(= 7\\times10 = 70\\) km.\nAnswer: 70 km (C).",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Speed, distance & time",
        "correct": "B",
        "options": 4,
        "text": "Over 540 km, Car A takes 6 hours more than Car B, and their speed ratio is \\(3 : 5\\). What is Car B's speed?",
        "choices": [
          "80 km/h",
          "60 km/h",
          "50 km/h",
          "70 km/h"
        ],
        "hint": "Speed ratio 3:5 means time ratio 5:3.",
        "expl": "Step 1 — Time ratio \\(= 5 : 3\\), difference \\(= 2\\) parts \\(= 6\\) h, so 1 part \\(= 3\\) h.\nStep 2 — B's time \\(= 3\\times3 = 9\\) h; B's speed \\(= \\frac{540}{9} = 60\\) km/h.\nAnswer: 60 km/h (B).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Speed, distance & time",
        "correct": "A",
        "options": 4,
        "text": "A truck's speed is 30% less than a bus's, and their average speed (over equal distances) is 35 km/h. What is the truck's speed?",
        "choices": [
          "59.5 km/h",
          "60 km/h",
          "31.5 km/h",
          "25.7 km/h"
        ],
        "hint": "Equal distances → average = harmonic mean of the two speeds.",
        "expl": "Step 1 — Speeds in ratio \\(7 : 10\\), say \\(7s\\) and \\(10s\\).\nStep 2 — Harmonic mean \\(= \\frac{2\\cdot7s\\cdot10s}{17s} = \\frac{140s}{17} = 35\\Rightarrow s = 8.5\\).\nStep 3 — Truck \\(= 7s = 59.5\\) km/h.\nAnswer: 59.5 km/h (A).",
        "level": "hard"
      },
      {
        "n": 7,
        "topic": "Speed, distance & time",
        "correct": "C",
        "options": 4,
        "text": "Naval walks at 3 km/h for 3.5 hours, then at 5.5 km/h for 3 hours. What is his average speed for the whole journey?",
        "choices": [
          "3.5 km/h",
          "7.15 km/h",
          "4.15 km/h",
          "6.35 km/h"
        ],
        "hint": "Total distance ÷ total time — never just average the two speeds.",
        "expl": "Step 1 — Distances: \\(3\\times3.5 = 10.5\\) and \\(5.5\\times3 = 16.5\\); total \\(= 27\\) km.\nStep 2 — Total time \\(= 6.5\\) h; average \\(= \\frac{27}{6.5} \\approx 4.15\\) km/h.\nAnswer: 4.15 km/h (C).",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Speed, distance & time",
        "correct": "A",
        "options": 4,
        "text": "A driver's actual speed is 45 km/h, but due to traffic he drives at 36 km/h and takes 2 hours longer. What is the total distance?",
        "choices": [
          "360 km",
          "450 km",
          "180 km",
          "330 km"
        ],
        "hint": "Speed ratio 45:36 = 5:4, so time ratio 4:5.",
        "expl": "Step 1 — Time ratio \\(= 4 : 5\\), difference \\(1\\) part \\(= 2\\) h.\nStep 2 — Actual time \\(= 4\\times2 = 8\\) h; distance \\(= 45\\times8 = 360\\) km.\nAnswer: 360 km (A).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Speed, distance & time",
        "correct": "B",
        "options": 4,
        "text": "Two bikes travel toward each other at 10 km/h and 12 km/h, starting 396 km apart. After how many hours do they meet?",
        "choices": [
          "10 hours",
          "18 hours",
          "16 hours",
          "17 hours"
        ],
        "hint": "Approaching each other means speeds add (relative speed).",
        "expl": "Step 1 — Relative speed \\(= 10 + 12 = 22\\) km/h.\nStep 2 — Time \\(= \\frac{396}{22} = 18\\) h.\nAnswer: 18 hours (B).",
        "level": "easy"
      },
      {
        "n": 10,
        "topic": "Speed, distance & time",
        "correct": "D",
        "options": 4,
        "text": "Driving at 20 km/h, Arjun reaches the office 5 minutes early; at 16 km/h he arrives 5 minutes late. What is the on-time travel duration?",
        "choices": [
          "15 minutes",
          "35 minutes",
          "40 minutes",
          "45 minutes"
        ],
        "hint": "Speed ratio 20:16 = 5:4 → time ratio 4:5; the gap is 10 minutes.",
        "expl": "Step 1 — Time ratio \\(= 4 : 5\\); the difference (1 part) equals \\(5 + 5 = 10\\) min.\nStep 2 — Faster time \\(= 4\\times10 = 40\\) min; on-time \\(= 40 + 5 = 45\\) min.\nAnswer: 45 minutes (D).",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Speed, distance & time",
        "correct": "A",
        "options": 4,
        "text": "Sumit takes 2 hours less to cover 160 km when he increases his speed by 4 km/h. How long does the (original) trip take?",
        "choices": [
          "10 hours",
          "12 hours",
          "9 hours",
          "13 hours"
        ],
        "hint": "Let original speed S, time T = 160/S; write the faster case too.",
        "expl": "Step 1 — \\(S = \\frac{160}{T}\\) and \\(S + 4 = \\frac{160}{T-2}\\).\nStep 2 — Solving gives \\(S = 16,\\ T = 10\\) h.\nAnswer: 10 hours (A).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Speed, distance & time",
        "correct": "C",
        "options": 4,
        "text": "A ship at 80% of its usual speed takes 10 minutes longer to cover 480 km. What is its usual speed?",
        "choices": [
          "240 km/h",
          "480 km/h",
          "720 km/h",
          "360 km/h"
        ],
        "hint": "80% speed → time ratio 4:5; the extra 1 part is 10 minutes.",
        "expl": "Step 1 — Time ratio usual:slow \\(= 4 : 5\\); 1 part \\(= 10\\) min, so usual time \\(= 40\\) min \\(= \\frac{2}{3}\\) h.\nStep 2 — Usual speed \\(= \\frac{480}{2/3} = 720\\) km/h.\nAnswer: 720 km/h (C).",
        "level": "hard"
      },
      {
        "n": 13,
        "topic": "Speed, distance & time",
        "correct": "C",
        "options": 4,
        "text": "A bus starts at 45 km/h and its speed increases by 10% each subsequent hour. How far does it travel in 3 hours?",
        "choices": [
          "140.95 km",
          "145.95 km",
          "148.95 km",
          "150.95 km"
        ],
        "hint": "Add each hour's distance: 45, then 45×1.1, then that ×1.1.",
        "expl": "Step 1 — Hour 1: 45; hour 2: \\(49.5\\); hour 3: \\(54.45\\).\nStep 2 — Total \\(= 45 + 49.5 + 54.45 = 148.95\\) km.\nAnswer: 148.95 km (C).",
        "level": "medium"
      },
      {
        "n": 14,
        "topic": "Speed, distance & time",
        "correct": "B",
        "options": 4,
        "text": "A train's speed is 20% more than a bus's. Over 120 km each, the train takes 30 minutes less than the bus. What is the bus's speed?",
        "choices": [
          "20 km/h",
          "40 km/h",
          "60 km/h",
          "50 km/h"
        ],
        "hint": "Speed ratio bus:train = 5:6, so time ratio = 6:5.",
        "expl": "Step 1 — Time ratio bus:train \\(= 6 : 5\\); difference (1 part) \\(= 30\\) min \\(= 0.5\\) h.\nStep 2 — Bus time \\(= 6\\times0.5 = 3\\) h; bus speed \\(= \\frac{120}{3} = 40\\) km/h.\nAnswer: 40 km/h (B).",
        "level": "medium"
      },
      {
        "n": 15,
        "topic": "Speed, distance & time",
        "correct": "D",
        "options": 4,
        "text": "P's speed is 50% of Q's, and P takes 4 hours longer than Q to cover 120 km. What is the average speed of P and Q together (total distance ÷ total time)?",
        "choices": [
          "10 km/h",
          "40 km/h",
          "30 km/h",
          "20 km/h"
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
        "options": 4,
        "text": "A can do a job in 12 days. A, B and C together finish it in 6 days. If B is half as efficient as A, how many days does C alone need?",
        "choices": [
          "12",
          "16",
          "24",
          "18"
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
        "options": 4,
        "text": "A alone needs 36 days. B is 1.5 times as efficient as A, and C is twice as efficient as A. How many days do all three together take?",
        "choices": [
          "15",
          "9",
          "12",
          "8"
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
        "options": 4,
        "text": "A and B together do a job in 30 days. C, working against them, can undo the whole job in 120 days. B and C together take 240 days. How long does A alone take?",
        "choices": [
          "48 days",
          "36 days",
          "60 days",
          "42 days"
        ],
        "hint": "Treat C's destruction as a negative rate.",
        "expl": "Step 1 — Total \\(= 240\\): A+B \\(= 8\\), C \\(= -2\\) units/day.\nStep 2 — B+C \\(= 1\\Rightarrow B = 1 - (-2) = 3\\).\nStep 3 — A \\(= 8 - 3 = 5\\); A alone \\(= \\frac{240}{5} = 48\\) days.\nAnswer: 48 days (A).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Work & rate",
        "correct": "A",
        "options": 4,
        "text": "P, Q and R finish a job together and are paid $84,000. Alone they would take 12, 15 and 20 days respectively. What is P and Q's combined share?",
        "choices": [
          "$63,000",
          "$56,000",
          "$42,000",
          "$49,000"
        ],
        "hint": "Pay splits by efficiency (daily rate), not by days.",
        "expl": "Step 1 — Efficiency ratio \\(= \\frac{1}{12}:\\frac{1}{15}:\\frac{1}{20} = 5:4:3\\).\nStep 2 — P+Q share \\(= \\frac{5+4}{12}\\times84000 = \\frac{9}{12}\\times84000\\).\nStep 3 — \\(= 63000\\).\nAnswer: $63,000 (A).",
        "level": "medium"
      },
      {
        "n": 7,
        "topic": "Work & rate",
        "correct": "A",
        "options": 4,
        "text": "A, B and C finish a job in 6 days and are paid $480 total. If their efficiencies are in ratio 4 : 5 : 7, what is B's daily pay?",
        "choices": [
          "$25",
          "$30",
          "$20",
          "$40"
        ],
        "hint": "Daily total pay ÷ efficiency share.",
        "expl": "Step 1 — Daily pay \\(= \\frac{480}{6} = 80\\).\nStep 2 — B's share \\(= \\frac{5}{4+5+7}\\times80 = \\frac{5}{16}\\times80 = 25\\).\nAnswer: $25 (A).",
        "level": "medium"
      },
      {
        "n": 8,
        "topic": "Work & rate",
        "correct": "A",
        "options": 4,
        "text": "24 men are set to finish a job in 35 days. After 20 days they have done only 50%. How many extra men are needed to finish on time?",
        "choices": [
          "8",
          "10",
          "12",
          "11"
        ],
        "hint": "The two halves are equal work, so the man-days for each half are equal.",
        "expl": "Step 1 — First half: \\(24\\times20 = 480\\) man-days for 50% of the job.\nStep 2 — The remaining 50% must also equal 480 man-days, now over 15 days: \\((24+x)\\times15 = 480\\).\nStep 3 — \\(24 + x = 32\\Rightarrow x = 8\\).\nAnswer: 8 (A).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Work & rate",
        "correct": "A",
        "options": 4,
        "text": "10 men finish a job in 18 days; 15 women finish the same job in 24 days. 5 men and 6 women work for 10 days, then 5 men finish the rest. What is the total number of days?",
        "choices": [
          "30 days",
          "20 days",
          "26 days",
          "13 days"
        ],
        "hint": "First convert women into man-equivalents.",
        "expl": "Step 1 — \\(10\\times18 = 15\\times24\\) in the respective units ⟹ \\(1\\) man \\(= 2\\) women.\nStep 2 — So \\(5\\) men + \\(6\\) women \\(= 5 + 3 = 8\\) men-equivalent. Total work \\(= 10\\times18 = 180\\) man-days.\nStep 3 — First 10 days: \\(8\\times10 = 80\\); remaining \\(100\\) by 5 men \\(= 20\\) days.\nStep 4 — Total \\(= 10 + 20 = 30\\) days.\nAnswer: 30 days (A).",
        "level": "medium"
      },
      {
        "n": 10,
        "topic": "Work & rate",
        "correct": "C",
        "options": 4,
        "text": "A job would take one man 11 days alone. Starting with one man, a new man joins each day; after the 8th day no more are added. In how many days is 4 times the original job completed?",
        "choices": [
          "11",
          "10",
          "9",
          "8"
        ],
        "hint": "Day k has k men working (until day 8). Add up the man-days.",
        "expl": "Step 1 — 4× work \\(= 4\\times11 = 44\\) man-days.\nStep 2 — Days 1–8 give \\(1+2+\\dots+8 = 36\\) man-days.\nStep 3 — Remaining \\(8\\) man-days done on day 9 by the 8 men.\nStep 4 — Total \\(= 9\\) days.\nAnswer: 9 (C).",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Work & rate",
        "correct": "A",
        "options": 4,
        "text": "Together, Rashmi and Pallavi make a carpet in x days. Alone, Rashmi takes 3 days more than x and Pallavi takes 12 days more than x. How long does Rashmi take alone?",
        "choices": [
          "9 days",
          "6 days",
          "12 days",
          "8 days"
        ],
        "hint": "Set 1/(x+3) + 1/(x+12) = 1/x and solve for x.",
        "expl": "Step 1 — \\(\\frac{1}{x+3} + \\frac{1}{x+12} = \\frac{1}{x}\\).\nStep 2 — Clearing gives \\(x^2 = 36\\Rightarrow x = 6\\).\nStep 3 — Rashmi alone \\(= x + 3 = 9\\) days.\nAnswer: 9 days (A).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Work & rate",
        "correct": "C",
        "options": 4,
        "text": "A alone can do half a job in 35 days. B takes as long to do one-third of the job as A takes to do one-quarter. How many days do A and B together take for the whole job?",
        "choices": [
          "35 days",
          "40 days",
          "30 days",
          "60 days"
        ],
        "hint": "Get A's full time first, then translate B's condition into a rate ratio.",
        "expl": "Step 1 — A does half in 35 days ⟹ whole in 70 days.\nStep 2 — A does ¼ in \\(17.5\\) days; B does ⅓ in \\(17.5\\) days ⟹ B whole \\(= 52.5\\) days.\nStep 3 — Rates ratio A:B \\(= 3:4\\); together \\(\\frac{70\\times3}{7} = 30\\) days.\nAnswer: 30 days (C).",
        "level": "hard"
      },
      {
        "n": 13,
        "topic": "Work & rate",
        "correct": "C",
        "options": 4,
        "text": "B takes 4 times as long as A and C together; C takes 3 times as long as A and B together. If all three together finish in 20 days, how long does B alone take?",
        "choices": [
          "110 days",
          "80 days",
          "100 days",
          "90 days"
        ],
        "hint": "\"B = 4×(A+C)\" in time means B's rate relates to the rest; convert to efficiencies.",
        "expl": "Step 1 — From the two conditions the efficiency ratio works out to A:B:C \\(= 11:4:5\\).\nStep 2 — Total work \\(= 20\\times(11+4+5) = 400\\) units.\nStep 3 — B alone \\(= \\frac{400}{4} = 100\\) days.\nAnswer: 100 days (C).",
        "level": "hard"
      },
      {
        "n": 14,
        "topic": "Work & rate",
        "correct": "C",
        "options": 4,
        "text": "A is \\(166\\tfrac23\\%\\) as efficient as B (i.e. 66⅔% more). Working together they complete \\(88\\tfrac89\\%\\) of the job in 10 days. How many days does B alone need for the whole job?",
        "choices": [
          "40",
          "25",
          "30",
          "35"
        ],
        "hint": "Efficiency ratio A:B = 5:3 → days ratio 3:5.",
        "expl": "Step 1 — A:B efficiency \\(= 5:3\\). Let total \\(= 15k\\): A \\(= 5\\), B \\(= 3\\) units/day, together \\(8\\).\nStep 2 — \\(\\frac{8}{9}\\) of work in 10 days ⟹ \\(8\\times10 = \\frac{8}{9}\\times15k\\Rightarrow k = 6\\).\nStep 3 — B alone \\(= 5k = 30\\) days.\nAnswer: 30 (C).",
        "level": "hard"
      },
      {
        "n": 15,
        "topic": "Work & rate",
        "correct": "A",
        "options": 4,
        "text": "In 15 minutes Sunder can cut 112 onions, and Subhash is 125% as efficient. Working together, how long do they take to cut 4,200 onions?",
        "choices": [
          "4 h 10 min",
          "4 h 20 min",
          "4 h 50 min",
          "4 h 15 min"
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
        "options": 4,
        "text": "Of 40 boys, the average weight of 30 of them is 60 kg and of the remaining 10 is 56 kg. What is the average weight of the whole class?",
        "choices": [
          "58.5",
          "58",
          "57",
          "59"
        ],
        "hint": "Weight by group size — total weight ÷ total count.",
        "expl": "Step 1 — Total \\(= 30\\times60 + 10\\times56 = 1800 + 560 = 2360\\).\nStep 2 — Average \\(= \\frac{2360}{40} = 59\\).\nAnswer: 59 (D).",
        "level": "easy"
      },
      {
        "n": 2,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 4,
        "text": "The average of six numbers is 3.95. Two of them average 3.4 and another two average 3.85. What is the average of the remaining two?",
        "choices": [
          "4.5",
          "4.6",
          "4.7",
          "4.8"
        ],
        "hint": "Work with sums: subtract the known groups' sums from the total.",
        "expl": "Step 1 — Total \\(= 6\\times3.95 = 23.7\\).\nStep 2 — Remaining sum \\(= 23.7 - 2(3.4) - 2(3.85) = 23.7 - 6.8 - 7.7 = 9.2\\).\nStep 3 — Average \\(= \\frac{9.2}{2} = 4.6\\).\nAnswer: 4.6 (B).",
        "level": "medium"
      },
      {
        "n": 3,
        "topic": "Mean, median & mode",
        "correct": "A",
        "options": 4,
        "text": "A picnic group averages 16 years. When 20 new people averaging 15 years join, the average becomes 15.5. How many were in the group originally?",
        "choices": [
          "20",
          "18",
          "22",
          "24"
        ],
        "hint": "Set up total-age equation before and after the join.",
        "expl": "Step 1 — \\(\\frac{16x + 15\\cdot20}{x+20} = 15.5\\).\nStep 2 — \\(16x + 300 = 15.5x + 310\\Rightarrow 0.5x = 10\\).\nStep 3 — \\(x = 20\\).\nAnswer: 20 (A).",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Mean, median & mode",
        "correct": "C",
        "options": 4,
        "text": "The average age of 36 students is 14 years. Adding the teacher raises the average by 1 year. How old is the teacher?",
        "choices": [
          "31",
          "36",
          "51",
          "48"
        ],
        "hint": "New total (37 people) minus old total gives the teacher's age.",
        "expl": "Step 1 — Teacher \\(= 37\\times15 - 36\\times14 = 555 - 504\\).\nStep 2 — \\(= 51\\).\nAnswer: 51 (C).",
        "level": "medium"
      },
      {
        "n": 5,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 4,
        "text": "In his 12th innings a batsman scores 65 and raises his average by 2. What is his average after the 12th innings (he was never 'not out')?",
        "choices": [
          "42",
          "43",
          "44",
          "45"
        ],
        "hint": "If the new average is x, the previous 11 averaged x−2.",
        "expl": "Step 1 — \\(12x = 11(x-2) + 65\\).\nStep 2 — \\(12x = 11x - 22 + 65\\Rightarrow x = 43\\).\nAnswer: 43 (B).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Mean, median & mode",
        "correct": "A",
        "options": 4,
        "text": "In the first 10 overs the run rate was 3.2. What rate is needed in the remaining 40 overs to reach a target of 282?",
        "choices": [
          "6.25",
          "6.50",
          "6.75",
          "7.00"
        ],
        "hint": "Runs still needed ÷ overs remaining.",
        "expl": "Step 1 — Runs so far \\(= 10\\times3.2 = 32\\); needed \\(= 282 - 32 = 250\\).\nStep 2 — Rate \\(= \\frac{250}{40} = 6.25\\).\nAnswer: 6.25 (A).",
        "level": "medium"
      },
      {
        "n": 7,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 4,
        "text": "The average attendance for the first 4 days of a week is 30, and for the first 5 days is 32. What was the attendance on the 5th day?",
        "choices": [
          "32",
          "40",
          "38",
          "36"
        ],
        "hint": "Difference of the two running totals.",
        "expl": "Step 1 — 5-day total \\(= 5\\times32 = 160\\); 4-day total \\(= 4\\times30 = 120\\).\nStep 2 — Day 5 \\(= 160 - 120 = 40\\).\nAnswer: 40 (B).",
        "level": "easy"
      },
      {
        "n": 8,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 4,
        "text": "A batsman scores 87 in his 17th innings and raises his average by 3. What is his average after the 17th innings?",
        "choices": [
          "36",
          "39",
          "42",
          "45"
        ],
        "hint": "Previous 16 innings averaged (x−3) if x is the new average.",
        "expl": "Step 1 — \\(16(x-3) + 87 = 17x\\).\nStep 2 — \\(16x - 48 + 87 = 17x\\Rightarrow x = 39\\).\nAnswer: 39 (B).",
        "level": "medium"
      },
      {
        "n": 9,
        "topic": "Mean, median & mode",
        "correct": "D",
        "options": 4,
        "text": "A student's average is 63 per paper. With 20 more marks in Geography and 2 more in History, the average would be 65. How many papers were there?",
        "choices": [
          "8",
          "9",
          "10",
          "11"
        ],
        "hint": "The extra 22 marks raise the average by 2 across all papers.",
        "expl": "Step 1 — \\(63x + 22 = 65x\\).\nStep 2 — \\(2x = 22\\Rightarrow x = 11\\).\nAnswer: 11 (D).",
        "level": "medium"
      },
      {
        "n": 10,
        "topic": "Mean, median & mode",
        "correct": "B",
        "options": 4,
        "text": "A hostel has 35 students. When 7 more join, daily mess expenses rise by $42 but the average per head drops by $1. What was the original daily expenditure?",
        "choices": [
          "$400",
          "$420",
          "$445",
          "$465"
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
        "options": 4,
        "text": "The average temperature for Mon–Tue–Wed was 55°, and for Tue–Wed–Thu was 60°. If Thursday was 56°, what was Monday's temperature?",
        "choices": [
          "39°",
          "41°",
          "45°",
          "43°"
        ],
        "hint": "Subtract the overlapping (Tue+Wed) from each triple.",
        "expl": "Step 1 — Mon+Tue+Wed \\(= 165\\); Tue+Wed+Thu \\(= 180\\).\nStep 2 — Tue+Wed \\(= 180 - 56 = 124\\).\nStep 3 — Mon \\(= 165 - 124 = 41\\).\nAnswer: 41° (B).",
        "level": "medium"
      },
      {
        "n": 13,
        "topic": "Weighted averages",
        "correct": "B",
        "options": 4,
        "text": "One section of 20 students averages 66% and another of 15 students averages 70%. What is the combined average?",
        "choices": [
          "66.7%",
          "67.7%",
          "68.7%",
          "69.7%"
        ],
        "hint": "Weight each average by its section size.",
        "expl": "Step 1 — \\(\\frac{20\\times66 + 15\\times70}{35} = \\frac{1320 + 1050}{35} = \\frac{2370}{35}\\).\nStep 2 — \\(= 67.7\\%\\).\nAnswer: 67.7% (B).",
        "level": "medium"
      },
      {
        "n": 14,
        "topic": "Weighted averages",
        "correct": "C",
        "options": 4,
        "text": "A taxi averages 40 km/h for 60% of a journey's distance, 30 km/h for 20%, and 10 km/h for the last 20%. What is the average speed for the whole journey?",
        "choices": [
          "25 km/h",
          "26 km/h",
          "24 km/h",
          "30 km/h"
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
        "options": 4,
        "text": "6 litres of a 20% alcohol solution are mixed with 4 litres of a 60% alcohol solution. What is the alcohol strength of the mixture?",
        "choices": [
          "80%",
          "40%",
          "36%",
          "48%"
        ],
        "hint": "Total alcohol ÷ total volume.",
        "expl": "Step 1 — Alcohol \\(= 0.20\\times6 + 0.60\\times4 = 1.2 + 2.4 = 3.6\\) L in 10 L.\nStep 2 — Strength \\(= \\frac{3.6}{10}\\times100 = 36\\%\\).\nAnswer: 36% (C).",
        "level": "easy"
      },
      {
        "n": 3,
        "topic": "Mixtures & solutions",
        "correct": "C",
        "options": 4,
        "text": "80 kg of tea at $15/kg is mixed with 20 kg at $20/kg. To earn 25% profit, at what price per kg should the mix be sold?",
        "choices": [
          "$23.75",
          "$22",
          "$20",
          "$19.20"
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
        "options": 4,
        "text": "A chemist has 10 litres of a 10% nitric-acid solution. How much water must be added to dilute it to 4% strength?",
        "choices": [
          "15 L",
          "20 L",
          "18 L",
          "25 L"
        ],
        "hint": "The amount of acid stays fixed; only water increases.",
        "expl": "Step 1 — Acid \\(= 10\\%\\times10 = 1\\) L (constant).\nStep 2 — \\(4\\%\\times(10 + x) = 1\\Rightarrow 10 + x = 25\\).\nStep 3 — \\(x = 15\\) L.\nAnswer: 15 L (A).",
        "level": "medium"
      },
      {
        "n": 6,
        "topic": "Mixtures & solutions",
        "correct": "D",
        "options": 4,
        "text": "How many millilitres of water must be added to 9 ml of aftershave containing 50% alcohol to make it 30% alcohol?",
        "choices": [
          "3",
          "4",
          "5",
          "6"
        ],
        "hint": "Alcohol amount is fixed; solve for the new total volume.",
        "expl": "Step 1 — Alcohol \\(= 0.50\\times9 = 4.5\\) ml.\nStep 2 — \\(0.30\\times(9 + x) = 4.5\\Rightarrow 9 + x = 15\\).\nStep 3 — \\(x = 6\\) ml.\nAnswer: 6 (D).",
        "level": "easy"
      },
      {
        "n": 7,
        "topic": "Mixtures & solutions",
        "correct": "B",
        "options": 4,
        "text": "55 litres of adulterated milk has milk : water = 7 : 4. How much water must be added to make it 7 : 6?",
        "choices": [
          "5 L",
          "10 L",
          "15 L",
          "25 L"
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
        "options": 4,
        "text": "A can holds liquids A and B in ratio 7 : 5. When 9 litres are drawn off and the can is refilled with B, the ratio becomes 7 : 9. How many litres of A did the can hold originally?",
        "choices": [
          "10",
          "20",
          "21",
          "25"
        ],
        "hint": "Removing mixture keeps the A:B ratio; then only B is added.",
        "expl": "Step 1 — Let A \\(= 7x\\), B \\(= 5x\\), total \\(12x\\). Drawing 9 removes \\(\\frac{7}{12}\\cdot9\\) of A.\nStep 2 — A left \\(= 7x - \\frac{63}{12}\\); setting the new ratio \\(\\frac{A}{B}=\\frac{7}{9}\\) solves to \\(x = 3\\).\nStep 3 — A originally \\(= 7\\times3 = 21\\) L.\nAnswer: 21 (C).",
        "level": "hard"
      },
      {
        "n": 10,
        "topic": "Mixtures & solutions",
        "correct": "B",
        "options": 4,
        "text": "A jar of whisky is 40% alcohol. Part is replaced by whisky that is 19% alcohol, giving 26% overall. What fraction was replaced?",
        "choices": [
          "1/3",
          "2/3",
          "2/5",
          "3/5"
        ],
        "hint": "Alligation of the two strengths around the final 26%.",
        "expl": "Step 1 — Around mean 26: original (40) is 14 above, added (19) is 7 below.\nStep 2 — Original : added \\(= 7 : 14 = 1 : 2\\).\nStep 3 — Replaced (added) fraction \\(= \\frac{2}{3}\\).\nAnswer: 2/3 (B).",
        "level": "medium"
      },
      {
        "n": 11,
        "topic": "Mixtures & solutions",
        "correct": "B",
        "options": 4,
        "text": "How many kg of custard powder at $40/kg must be mixed with 16 kg at $55/kg so that selling the mix at $60/kg gives 25% profit?",
        "choices": [
          "11 kg",
          "14 kg",
          "12 kg",
          "20 kg"
        ],
        "hint": "Find the mixture's required cost, then apply alligation.",
        "expl": "Step 1 — Cost of mix \\(= \\frac{60}{1.25} = 48\\).\nStep 2 — Alligation around 48: cheaper(40) : dearer(55) \\(= (55-48):(48-40) = 7:8\\).\nStep 3 — \\(\\frac{40\\text{-powder}}{16} = \\frac{7}{8}\\Rightarrow 40\\text{-powder} = 14\\) kg.\nAnswer: 14 kg (B).",
        "level": "medium"
      },
      {
        "n": 12,
        "topic": "Mixtures & solutions",
        "correct": "B",
        "options": 4,
        "text": "From a 50-litre cask full of milk, 10 litres are drawn and replaced with water. This is done twice. How much milk remains?",
        "choices": [
          "20 litres",
          "32 litres",
          "25 litres",
          "30 litres"
        ],
        "hint": "Each replacement multiplies the milk by (1 − 10/50).",
        "expl": "Step 1 — Milk left \\(= 50\\left(1 - \\frac{10}{50}\\right)^2 = 50(0.8)^2\\).\nStep 2 — \\(= 50\\times0.64 = 32\\) litres.\nAnswer: 32 litres (B).",
        "level": "medium"
      },
      {
        "n": 13,
        "topic": "Mixtures & solutions",
        "correct": "C",
        "options": 4,
        "text": "From a 54-litre vessel full of acid, some is drawn off and replaced with water; the same is repeated once more, leaving 24 litres of pure acid. How much acid was drawn off each time?",
        "choices": [
          "12 L",
          "16 L",
          "18 L",
          "24 L"
        ],
        "hint": "Use 54(1 − y/54)² = 24.",
        "expl": "Step 1 — \\(54\\left(1 - \\frac{y}{54}\\right)^2 = 24\\Rightarrow \\left(1 - \\frac{y}{54}\\right)^2 = \\frac{4}{9}\\).\nStep 2 — \\(1 - \\frac{y}{54} = \\frac{2}{3}\\Rightarrow \\frac{y}{54} = \\frac{1}{3}\\).\nStep 3 — \\(y = 18\\) L.\nAnswer: 18 L (C).",
        "level": "medium"
      },
      {
        "n": 14,
        "topic": "Mixtures & solutions",
        "correct": "B",
        "options": 4,
        "text": "A tank is filled with A, then refilled with B each time it is half-empty, alternating A, B, A, B. After four fills, what percent of the tank is A-type?",
        "choices": [
          "33.5%",
          "37.5%",
          "40%",
          "50%"
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
        "n": 3,
        "topic": "Weaken",
        "correct": "C",
        "options": 5,
        "text": "The percentage of interstate retirees who moved to Florida fell three points over ten years. Since many Florida businesses cater to retirees, this decline will hurt those businesses and Florida's economy. Which most weakens the argument?",
        "choices": [
          "Florida attracts more interstate retirees than any other state.",
          "More people left Florida on retiring last year than ten years ago.",
          "The number of people who moved to another state on retiring has risen significantly over ten years.",
          "Such people moved a greater distance on average last year than ten years ago.",
          "People were more likely to retire to North Carolina last year than ten years ago."
        ],
        "hint": "A smaller slice of a much larger pie can still be more pie.",
        "expl": "If the total number of relocating retirees rose sharply (C), a three-point smaller percentage could still mean more retirees actually moving to Florida — no negative effect.\nAnswer: C.",
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
        "hint": "Attack the link between evidence and conclusion - look for an overlooked alternative.",
        "expl": "Correct answer: D. The key to success is to isolate the conclusion, which appears in the last sentence: \"companies producing carpet will be able to gain market share in the carpet market only through purchasing competitors.\" Answer choice (A) is about a decline in profits (nothing to do with the market share) and revenues (market share is about percentage … not absolute revenu",
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
        "hint": "Support the conclusion by confirming its key link or ruling out an alternative.",
        "expl": "Correct answer: B. The conclusion is that \"many prominent economists of that time sided with those policymakers\", implying that the economists, like the policymakers, \"grew uncomfortable with the amount of power that had been given to the federal government and sought to discontinue many of the agencies created under the New Deal.\" How do we arrive at that conclusion? The agen",
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
          "During the year after the tax increase, there was a greater variety of cigarettes on the market than there had been during the previous year. FLAW questions The approach to solving Flaw questions is identical to the approach to solving Weaken questions. The GMAT mainly tests only three types of flaws:"
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
        "n": 1,
        "topic": "Assumption",
        "correct": "D",
        "options": 5,
        "text": "Country B plans to power its cars with domestically produced oil and ethanol. The government says this will sharply reduce the country's reliance on foreign oil. The argument relies on the assumption that:",
        "choices": [
          "Ethanol is superior to every other alternative energy source.",
          "Ethanol production will grow faster than oil production.",
          "Ethanol is suitable for every application that currently uses oil.",
          "Gasoline consumption will not rise substantially faster than domestic oil-and-ethanol production.",
          "Ethanol is as fuel-efficient per gallon as gasoline."
        ],
        "hint": "Negate each choice; the one that breaks the conclusion is the assumption.",
        "expl": "You only avoid importing if domestic production keeps up with demand. Negate (D): if consumption rises much faster than production, the country must still import — the conclusion collapses. So (D) is required.\nAnswer: D.",
        "level": "hard"
      },
      {
        "n": 2,
        "topic": "Assumption",
        "correct": "A",
        "options": 5,
        "text": "Rising sea levels caused by global warming will, within the next century, destroy major coastal cities and displace millions of people. The argument assumes that:",
        "choices": [
          "New technology in the next century will not divert rising seas away from coastal cities.",
          "Individuals will not become more aware of ways to cut greenhouse-gas emissions.",
          "Rising seas affect all coastal centers to the same degree.",
          "Some experts predict more than an eight-degree temperature rise.",
          "Human activity is the sole cause of global warming."
        ],
        "hint": "What unstated fact must hold for 'the cities will be destroyed' to follow?",
        "expl": "Negate (A): if future technology can divert the rising seas, the cities aren't destroyed and no one is displaced — the conclusion fails. So the argument depends on (A).\nAnswer: A.",
        "level": "hard"
      },
      {
        "n": 3,
        "topic": "Assumption",
        "correct": "C",
        "options": 5,
        "text": "Utility companies say switching to solar and wind power will give all customers stable energy supplies at low cost. The claim assumes that:",
        "choices": [
          "The public will readily accept energy from renewable sources.",
          "No new supplies of oil and gas will be discovered.",
          "Weather patterns are consistent and predictable.",
          "Renewable conversion technology is no more expensive than current technology.",
          "Energy produced by combustion cannot be made less risky."
        ],
        "hint": "Solar and wind depend on something — what must be true for 'stable' supply?",
        "expl": "Negate (C): if weather is inconsistent and unpredictable, solar and wind output is unreliable, so supplies wouldn't be stable — breaking the conclusion. So (C) is assumed.\nAnswer: C.",
        "level": "medium"
      },
      {
        "n": 4,
        "topic": "Assumption",
        "correct": "D",
        "options": 5,
        "text": "Adolescents who play video games regularly are three times as likely to develop carpal tunnel syndrome. A doctor concludes that a federal law banning the sale of video games to minors would help reduce carpal tunnel among adolescents. The argument assumes that:",
        "choices": [
          "A majority of legislators would vote for such a ban.",
          "All adolescents who regularly play video games develop carpal tunnel syndrome.",
          "Adolescents cannot develop carpal tunnel syndrome from any other activity.",
          "Parents will not simply purchase video games for their adolescent children.",
          "Video games provide no benefits to adolescents."
        ],
        "hint": "For a sales ban to cut usage, minors must not get the games another way.",
        "expl": "Negate (D): if parents just buy the games for their kids, the sales ban leaves usage unchanged and carpal tunnel unaffected — the conclusion fails. So (D) is required.\nAnswer: D.",
        "level": "medium"
      },
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
        "hint": "The credit only applies above 20 workers — does it reach most companies?",
        "expl": "Negate (D): if most Calonian manufacturers don't expect 20+ workers, the credit doesn't apply to them and they won't relocate — the plan fails. So (D) is required.\nAnswer: D.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: D. The argument concludes that the program will sharply reduce Country B's reliance upon foreign oil. It means that the country will not have to import. The only condition that a country doesn't need to import is: Production ≥ Consumption Production alone or consumption alone can't decide the import.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: A. The argument concludes that rising sea levels caused by global warming will destroy major coastal population centers and displace millions of people. Any assumption in support of this conclusion would have to corroborate that these events will definitively take place.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: C. The claim of the companies is that the renewable sources will provide stable supplies of energy to all its customers. We are asked to find an assumption underlying this argument. In order for this argument to be valid, it must in fact be true that these renewable sources of energy will provide stable supplies. (C) CORRECT.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: A. Let's assume that before 1992 there were 100,000 catchable lobsters in the sea. Of 100,000 catchable lobsters, let's assume all 100,000 were legally harvested. In 1996, we know that the number of legally harvested lobsters were 91,000.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: A. Conclusion: if we can come to know the precise date when Rice and Yam cultivation started, we will come to know the precise date exactly when the agricultural society started … as it is given that agricultural societies can't exist without staple crops. So, in a way, the author has to assume that there was / were no other staple crop(s) before Rice and Yam.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: D. The doctor concludes that federal legislation prohibiting the sale of video games to minors would help reduce the incidence of carpal tunnel syndrome. This conclusion hinges on the assumption that the only way for adolescents to access video games is to purchase the games themselves.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: E. Conclusion: A causes B Assumption: B doesn't cause A … direct answer E The researchers claim that Delta-32 prevents its carriers from contracting the Plague. They support this claim by noting that a strikingly large percentage of descendants of Plague survivors carry the mutation. We are asked to find an assumption underlying the claim.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: A.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: D. D",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: E. E The Police Commissioner's proposal hopes to decrease the number of crimes in city Y by shifting police officers from low-crime to high-crime districts. His proposal is based on data that demonstrate that crime decreases when additional police officers are moved into a district.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: A. A Between A and E ... negate the assumption and the argument should fall apart. Negate E Some of the salts carried into the Earth's oceans by rivers are used up by biological activity in the oceans. But if the portion of salt consumed by biological activities has remained constant over the years ... we can still predict the age of the oceans ...",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: C. C Conclusion- the current average height of Tufe's Turfil sunflowers is undoubtedly at least partially attributable to changes in Tufe's environmental conditions This means that the changes in the newly formed island's climate caused the sunflower plants to get shorter.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: E. We can summarize the argument as follows: Flute fragment found with 4 notes of the diatonic scale. Therefore, creators of flute knew about and used the diatonic scale. In order to reach that conclusion, the author has to assume that the 4 notes on the fragment aren't just coincidentally on the diatonic scale.",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: B. Conclusion: A caused B Assumption: B didn't cause A Two things happened:",
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
        "hint": "Negation test: negating the correct choice should break the conclusion.",
        "expl": "Correct answer: B. B (A) says that the reviewers do not always have biases likely to slant their interpretations of the data in those papers. Let's negate (A) and say that reviewers do always have biases likely to slant their interpretations of the data. Does this negated answer destroy the argument? Not necessarily.",
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
        "hint": "Extremes test: the right question's two answers push the argument opposite ways.",
        "expl": "Correct answer: C. The core issue is: Should we use a computer program or human translators to translate a long document? What we know so far is: HUMAN TRANSLATORS - they have different writing styles, which can sometimes be incompatible COMPUTERS - faster than humans - stylistically uniform - 80% accuracy rate The author of this stimulus discusses large translations, which ar",
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
        "text": "Critic: The mayor claims the new subway line will ease the city's traffic. But the line serves only the wealthy suburbs, whose residents rarely use public transit. Therefore the line will do little to reduce traffic. In the critic's argument, the two boldface parts — 'the line serves only the wealthy suburbs, whose residents rarely use public transit' and 'the line will do little to reduce traffic' — play which roles?",
        "choices": [
          "The first is the critic's conclusion; the second is evidence for it.",
          "The first is evidence the critic uses; the second is the critic's conclusion.",
          "Both are conclusions the critic rejects.",
          "The first is the mayor's conclusion; the second supports the mayor.",
          "The first is an assumption; the second is a counterexample."
        ],
        "hint": "Which part is the claim being argued for, and which supports it?",
        "expl": "The first boldface is the evidence (suburb residents rarely use transit); the second is the critic's conclusion (the line won't reduce traffic). Evidence → conclusion.\nAnswer: B.",
        "level": "medium"
      }
    ]
  }
];
