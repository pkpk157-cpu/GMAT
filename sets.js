/* GMAT Prep — Practice Sets repository
   Math is written in LaTeX inside \( ... \) and rendered with KaTeX.
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
        "n": 1, "topic": "Percentages & percent change", "correct": "C", "options": 4,
        "text": "\\(p\\) is six times as large as \\(q\\). The percent that \\(q\\) is less than \\(p\\) is:",
        "choices": ["\\(16\\tfrac23\\%\\)", "60%", "\\(83\\tfrac13\\%\\)", "90%"],
        "hint": "Express the gap (p − q) as a fraction of p, the larger quantity.",
        "expl": "Step 1 — \\(p = 6q\\), so the gap is \\(p-q = 5q\\).\nStep 2 — “q is less than p” compares the gap to \\(p\\): \\(\\frac{5q}{6q}\\times100\\).\nStep 3 — \\(=\\frac{5}{6}\\times100 = 83\\tfrac13\\%\\).\nAnswer: \\(83\\tfrac13\\%\\) (C).",
        "level": "easy"
      },
      {
        "n": 2, "topic": "Percentages & percent change", "correct": "D", "options": 4,
        "text": "Two numbers are respectively 20% and 50% of a third number. The first number is what percent of the second?",
        "choices": ["10%", "20%", "30%", "40%"],
        "hint": "Let the third number be 100 and read off the first two.",
        "expl": "Step 1 — Let the third number be 100. First \\(=20\\), second \\(=50\\).\nStep 2 — First as a percent of second: \\(\\frac{20}{50}\\times100 = 40\\%\\).\nAnswer: 40% (D).",
        "level": "easy"
      },
      {
        "n": 3, "topic": "Percentages & percent change", "correct": "B", "options": 4,
        "text": "40% of a store's customers purchase items, and of those, 15% purchase hats. What percent of the store's customers purchase hats?",
        "choices": ["4%", "6%", "15%", "24%"],
        "hint": "Take a percent of a percent — multiply the two.",
        "expl": "Step 1 — Of 100 customers, 40 purchase items.\nStep 2 — 15% of those 40 buy hats: \\(0.15\\times40 = 6\\).\nStep 3 — That's 6 of every 100 customers = 6%.\nAnswer: 6% (B).",
        "level": "easy"
      },
      {
        "n": 4, "topic": "Percentages & percent change", "correct": "D", "options": 4,
        "text": "The price of a cooker was increased by 15%, and the number sold then fell by 15%. What was the net effect on sales revenue?",
        "choices": ["15% decrease", "No effect", "2.25% increase", "2.25% decrease"],
        "hint": "Up x% then down x% is never a wash — use \\(-\\frac{x^2}{100}\\).",
        "expl": "Step 1 — Revenue \\(= \\text{price}\\times\\text{quantity}\\), changed by factors \\(1.15\\) and \\(0.85\\).\nStep 2 — \\(1.15\\times0.85 = 0.9775\\), a 2.25% drop.\nStep 3 — Shortcut: up x% then down x% gives \\(-\\frac{x^2}{100} = -\\frac{225}{100} = -2.25\\%\\).\nAnswer: 2.25% decrease (D).",
        "level": "easy"
      },
      {
        "n": 5, "topic": "Percentages & percent change", "correct": "B", "options": 4,
        "text": "A's salary is 25% higher than B's salary. By what percent is B's salary lower than A's?",
        "choices": ["\\(16\\tfrac13\\%\\)", "20%", "25%", "\\(33\\tfrac13\\%\\)"],
        "hint": "The base flips: use \\(\\frac{r}{100+r}\\times100\\).",
        "expl": "Step 1 — Let B \\(=100\\), so A \\(=125\\).\nStep 2 — B is lower than A by \\(\\frac{125-100}{125}\\times100 = \\frac{25}{125}\\times100\\).\nStep 3 — \\(=20\\%\\). (Not 25% — the base is now the larger number, A.)\nAnswer: 20% (B).",
        "level": "medium"
      },
      {
        "n": 6, "topic": "Percentages & percent change", "correct": "B", "options": 4,
        "text": "In a housing society, 30% of residents are men over 18 and 40% are women over 18. If the 24 remaining residents are children, how many residents are there in total?",
        "choices": ["32", "80", "94", "112"],
        "hint": "Find what percent the children represent first.",
        "expl": "Step 1 — Adults are \\(30\\%+40\\% = 70\\%\\), so children are 30%.\nStep 2 — 30% of the total \\(=24\\).\nStep 3 — Total \\(=\\frac{24}{0.30} = 80\\).\nAnswer: 80 (B).",
        "level": "easy"
      },
      {
        "n": 7, "topic": "Percentages & percent change", "correct": "D", "options": 4,
        "text": "Production of milk chocolates rose 30% in one month to 9,100 per month. What was it one month ago?",
        "choices": ["10,000", "9,000", "8,000", "7,000"],
        "hint": "9,100 is 130% of the earlier value — divide, don't subtract 30%.",
        "expl": "Step 1 — \\(130\\%\\text{ of old} = 9100\\).\nStep 2 — Old \\(=\\frac{9100}{1.3} = 7000\\).\nAnswer: 7,000 (D).",
        "level": "easy"
      },
      {
        "n": 8, "topic": "Percentages & percent change", "correct": "B", "options": 4,
        "text": "In an election between two candidates, one got 40% of the votes and was defeated by 160 votes. How many votes were polled in total?",
        "choices": ["900", "800", "700", "600"],
        "hint": "The winner got 60%; the margin is the difference of the two shares.",
        "expl": "Step 1 — Shares are 40% and 60%, so the margin is \\(60\\%-40\\% = 20\\%\\) of the total.\nStep 2 — 20% of total \\(=160\\).\nStep 3 — Total \\(=\\frac{160}{0.20} = 800\\).\nAnswer: 800 (B).",
        "level": "medium"
      },
      {
        "n": 9, "topic": "Percentages & percent change", "correct": "A", "options": 4,
        "text": "The price of groundnut oil rose from $24 to $27 per kg. By what percent should a family cut consumption to keep its expenditure unchanged?",
        "choices": ["\\(11\\tfrac19\\%\\)", "\\(11\\tfrac{1}{11}\\%\\)", "\\(11\\tfrac{1}{10}\\%\\)", "\\(9\\tfrac{1}{10}\\%\\)"],
        "hint": "Price up r%, consumption must drop \\(\\frac{r}{100+r}\\times100\\).",
        "expl": "Step 1 — Price rise \\(=\\frac{27-24}{24}\\times100 = 12.5\\%\\).\nStep 2 — Required cut \\(=\\frac{12.5}{100+12.5}\\times100 = \\frac{12.5}{112.5}\\times100\\).\nStep 3 — \\(=\\frac{100}{9} = 11\\tfrac19\\%\\).\nAnswer: \\(11\\tfrac19\\%\\) (A).",
        "level": "medium"
      },
      {
        "n": 10, "topic": "Percentages & percent change", "correct": "B", "options": 4,
        "text": "10% of a village's inhabitants died of cholera; then 25% of the remainder left. The population is now 4,050. What was the original population?",
        "choices": ["5,000", "6,000", "7,000", "8,000"],
        "hint": "Apply the two survival factors 0.90 and 0.75 to the original.",
        "expl": "Step 1 — After deaths: 90% remain. After departures: 75% of that remain.\nStep 2 — \\(0.75\\times0.90\\times x = 4050\\), so \\(0.675x = 4050\\).\nStep 3 — \\(x = \\frac{4050}{0.675} = 6000\\).\nAnswer: 6,000 (B).",
        "level": "medium"
      },
      {
        "n": 11, "topic": "Percentages & percent change", "correct": "C", "options": 4,
        "text": "A scooter costs $25,000 new. At the end of each year its value is 80% of its value at the start of that year. What is its value after 3 years?",
        "choices": ["$10,000", "$12,500", "$12,800", "$12,000"],
        "hint": "Multiply by 0.8 three times (compound depreciation).",
        "expl": "Step 1 — Value \\(=25000\\times(0.8)^3\\).\nStep 2 — \\((0.8)^3 = 0.512\\).\nStep 3 — \\(25000\\times0.512 = 12800\\).\nAnswer: $12,800 (C).",
        "level": "medium"
      },
      {
        "n": 12, "topic": "Percentages & percent change", "correct": "D", "options": 4,
        "text": "A's income is 150% of B's, and C's income is 120% of A's. If A, B and C together earn $86,000, what is C's income?",
        "choices": ["$30,000", "$32,000", "$20,000", "$36,000"],
        "hint": "Write everything in terms of B, then solve for B first.",
        "expl": "Step 1 — Let B \\(=x\\). Then A \\(=1.5x\\), C \\(=1.2\\times1.5x = 1.8x\\).\nStep 2 — \\(x + 1.5x + 1.8x = 4.3x = 86000\\), so \\(x = 20000\\).\nStep 3 — C \\(=1.8\\times20000 = 36000\\).\nAnswer: $36,000 (D).",
        "level": "medium"
      },
      {
        "n": 13, "topic": "Ratios & proportions", "correct": "C", "options": 4,
        "text": "Ravi's salary is 150% of Amit's, and Amit's salary is 80% of Ram's. What is the ratio of Ram's salary to Ravi's?",
        "choices": ["1 : 2", "2 : 3", "5 : 6", "6 : 5"],
        "hint": "Anchor Ram at 100 and work outward.",
        "expl": "Step 1 — Let Ram \\(=100\\). Amit \\(=80\\% = 80\\).\nStep 2 — Ravi \\(=150\\%\\text{ of }80 = 120\\).\nStep 3 — Ram : Ravi \\(=100:120 = 5:6\\).\nAnswer: 5 : 6 (C).",
        "level": "medium"
      },
      {
        "n": 14, "topic": "Percentages & percent change", "correct": "B", "options": 4,
        "text": "In a shipment of 120 parts, 5% were defective; in another of 80 parts, 10% were defective. For the two shipments combined, what percent were defective?",
        "choices": ["6.5%", "7.0%", "7.5%", "8.0%"],
        "hint": "Count actual defectives, then divide by the combined total.",
        "expl": "Step 1 — Defectives: \\(5\\%\\times120 = 6\\) and \\(10\\%\\times80 = 8\\); total \\(=14\\).\nStep 2 — Combined parts \\(=120+80 = 200\\).\nStep 3 — \\(\\frac{14}{200}\\times100 = 7\\%\\) (a weighted average, not \\(7.5\\%\\)).\nAnswer: 7.0% (B).",
        "level": "medium"
      },
      {
        "n": 15, "topic": "Percentages & percent change", "correct": "D", "options": 4,
        "text": "In January, 4,000 ticketless travellers were caught. In February the number rose 5%, in March it fell 5%, and in April it fell a further 10%. How many were caught in April?",
        "choices": ["3,125", "3,255", "3,575", "3,591"],
        "hint": "Apply the factors 1.05, 0.95, 0.90 in turn.",
        "expl": "Step 1 — \\(4000\\times1.05 = 4200\\).\nStep 2 — \\(4200\\times0.95 = 3990\\).\nStep 3 — \\(3990\\times0.90 = 3591\\).\nAnswer: 3,591 (D).",
        "level": "medium"
      },
      {
        "n": 16, "topic": "Percentages & percent change", "correct": "C", "options": 4,
        "text": "A village of 5,000 people sees its men increase 10% and its women increase 15%, so the population becomes 5,600. How many men were there originally?",
        "choices": ["2,000", "2,500", "3,000", "4,000"],
        "hint": "Let men = x, women = 5000 − x; the total increase is 600.",
        "expl": "Step 1 — \\(0.10x + 0.15(5000-x) = 600\\).\nStep 2 — \\(0.10x + 750 - 0.15x = 600 \\Rightarrow -0.05x = -150\\).\nStep 3 — \\(x = 3000\\).\nAnswer: 3,000 (C).",
        "level": "medium"
      },
      {
        "n": 17, "topic": "Percentages & percent change", "correct": "C", "options": 4,
        "text": "When the price of petrol rises 40%, a man cuts his consumption by 20%. What is the percent change in his expenditure?",
        "choices": ["20% increase", "16% increase", "12% increase", "40% increase"],
        "hint": "Expenditure = price × consumption; multiply the factors.",
        "expl": "Step 1 — New expenditure factor \\(=1.40\\times0.80 = 1.12\\).\nStep 2 — That's a 12% increase.\nAnswer: 12% increase (C).",
        "level": "medium"
      },
      {
        "n": 18, "topic": "Percentages & percent change", "correct": "B", "options": 4,
        "text": "A man saves 10% of his income. Two years later his income has risen 20%, yet he saves the same dollar amount as before. By what percent has his expenditure increased?",
        "choices": ["22%", "\\(22\\tfrac29\\%\\)", "\\(23\\tfrac13\\%\\)", "24%"],
        "hint": "Fix income at 100; track saving (constant) and the new expenditure.",
        "expl": "Step 1 — Income 100 → saving 10, expenditure 90.\nStep 2 — New income \\(=120\\); saving still 10, so expenditure \\(=110\\).\nStep 3 — Increase \\(=\\frac{110-90}{90}\\times100 = \\frac{20}{90}\\times100 = 22\\tfrac29\\%\\).\nAnswer: \\(22\\tfrac29\\%\\) (B).",
        "level": "hard"
      },
      {
        "n": 19, "topic": "Overlapping sets (Venn)", "correct": "C", "options": 4,
        "text": "40% of people read newspaper X, 50% read Y, and 10% read both. What percent read neither?",
        "choices": ["10%", "15%", "20%", "25%"],
        "hint": "Use \\(|X\\cup Y| = |X| + |Y| - |X\\cap Y|\\), then subtract from 100%.",
        "expl": "Step 1 — At least one \\(=40\\%+50\\%-10\\% = 80\\%\\).\nStep 2 — Neither \\(=100\\%-80\\% = 20\\%\\).\nAnswer: 20% (C).",
        "level": "easy"
      },
      {
        "n": 20, "topic": "Overlapping sets (Venn)", "correct": "A", "options": 4,
        "text": "65% of students passed Civics, 60% passed History, and 40% passed both. If 90 students failed both subjects, how many students are there in total?",
        "choices": ["600", "650", "700", "750"],
        "hint": "Find the percent who passed at least one, then the percent who failed both.",
        "expl": "Step 1 — Passed at least one \\(=65\\%+60\\%-40\\% = 85\\%\\).\nStep 2 — Failed both \\(=100\\%-85\\% = 15\\%\\).\nStep 3 — \\(15\\%\\text{ of total} = 90\\Rightarrow \\text{total} = \\frac{90}{0.15} = 600\\).\nAnswer: 600 (A).",
        "level": "hard"
      }
    ]
  }
];
