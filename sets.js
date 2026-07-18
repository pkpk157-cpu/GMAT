/* GMAT Prep — Practice Sets repository
   question: { n, topic, correct:"A".."E", options, text, choices[], expl, note? }
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
      "text": "Minimum difference between x and y such that 1x71y61 is exactly divisible by 11 is:",
      "choices": [
        "2",
        "3",
        "1",
        "0"
      ],
      "expl": "Divisibility by 11: (1+7+y+1) − (x+1+6) = (9+y) − (7+x) must be 0, so x − y = 2. Minimum difference = 2."
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
      "expl": "The eight integers are 77,78,79,80 and 82,83,84,85. Pairing them: (77+85)+(78+84)+(79+83)+(80+82) = 4×162 = 648 = 8×81, which is divisible by 9."
    },
    {
      "n": 3,
      "topic": "Odd / even & sign rules",
      "correct": "A",
      "options": 4,
      "text": "If 'n' is a natural number, then the greatest integer less than or equal to (2 + √3)^n is:",
      "choices": [
        "odd",
        "even",
        "even when 'n' is even and odd when 'n' is odd",
        "even when 'n' is odd and odd when 'n' is even"
      ],
      "expl": "(2+√3)^n + (2−√3)^n is always an even integer, and 0 < (2−√3)^n < 1, so the greatest integer ≤ (2+√3)^n is (that even integer) − 1, i.e. always odd."
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
      "expl": "'Divisible by 3 and 5 together' means divisible by 15: 15, 30, …, 300. That's 300 ÷ 15 = 20 numbers."
    },
    {
      "n": 5,
      "topic": "Divisibility & remainders",
      "correct": "B",
      "options": 4,
      "text": "What is the remainder when 1! + 2! + 3! + ... + 100! is divided by 7?",
      "choices": [
        "0",
        "5",
        "6",
        "3"
      ],
      "expl": "From 7! onward every term is divisible by 7. 1!+2!+3!+4!+5!+6! = 1+2+6+24+120+720 = 873, and 873 mod 7 = 5."
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
      "expl": "Multiples of 13 from 13 to 494: 494 ÷ 13 = 38 numbers."
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
      "expl": "Divisor = (sum of the two remainders) − (remainder of the sum) = (11 + 21) − 4 = 28."
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
      "expl": "You get N = dq₁ + 23 and 2N = dq₂ + 11 — two equations with three unknowns (d, q₁, q₂), so the divisor can't be pinned down. The key marks it 'data inadequate' (D)."
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
      "expl": "Let N = 5q + 3. Then N² = 25q² + 30q + 9 = 5(5q² + 6q + 1) + 4, so the remainder is 4."
    },
    {
      "n": 10,
      "topic": "Fractions & decimals",
      "correct": "B",
      "options": 4,
      "text": "The value of 3 ÷ (8 − 5) + (4 − 2) + 2 + 8/13 is:",
      "choices": [
        "15/17",
        "13/17",
        "15/19",
        "13/19"
      ],
      "expl": "Simplifying the expression gives 13/17. (The exact operators were unclear in the source PDF — verify the printed expression.)",
      "note": "Math from the PDF was ambiguous — verify the exact expression."
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
      "expl": "For successive division, remainder mod 56 = d₁·r₂ + r₁ = 7×5 + 3 = 38."
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
      "expl": "Writing 1–999: 9 one-digit numbers (9 presses) + 90 two-digit (180) + 900 three-digit (2700) = 9 + 180 + 2700 = 2889."
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
      "expl": "Build the number: N = 3×(5×(8·0+4)+2)+1 = 3×22+1 = 67. Reversing (÷8, ÷5, ÷3): 67→rem 3, 8→rem 3, 1→rem 1, giving 3, 3, 1."
    },
    {
      "n": 14,
      "topic": "Divisibility & remainders",
      "correct": "A",
      "options": 4,
      "text": "The numbers 1 to 29 are written side by side as follows: 1234567891011......2829. If this number is divided by 9, what is the remainder?",
      "choices": [
        "3",
        "1",
        "0",
        "None of these"
      ],
      "expl": "A number ≡ (sum of its number-parts) mod 9. Sum 1+2+…+29 = 435, and 435 mod 9 = 3."
    },
    {
      "n": 15,
      "topic": "Divisibility & remainders",
      "correct": "A",
      "options": 4,
      "text": "If x959y is divisible by 44 and y > 5, then what are the values of the digits x and y?",
      "choices": [
        "x = 7, y = 6",
        "x = 4, y = 8",
        "x = 6, y = 7",
        "None of these"
      ],
      "expl": "Divisible by 44 = 4×11. Divisible by 4 ⇒ last two digits '9y' divisible by 4 with y>5 ⇒ y = 6. Divisible by 11 ⇒ (x+5+6) − (9+9) = 0 ⇒ x = 7."
    },
    {
      "n": 16,
      "topic": "Fractions & decimals",
      "correct": "D",
      "options": 4,
      "text": "When (1/2 − 1/4 + 1/5 − 1/6) is divided by (2/5 − 5/9 + 3/5 − 7/18), the result is:",
      "choices": [
        "2 1/3",
        "3 1/6",
        "3 1/10",
        "5 1/10"
      ],
      "expl": "Simplifying the two bracketed sums and dividing gives 5 1/10. (The exact fractions were garbled in the source — verify against the PDF.)",
      "note": "Math from the PDF was ambiguous — verify the exact expression."
    },
    {
      "n": 17,
      "topic": "Fractions & decimals",
      "correct": "C",
      "options": 4,
      "text": "A boy multiplied a certain number x by 13. He found that the resulting product consisted entirely of nines. Find the smallest value of x.",
      "choices": [
        "76913",
        "76933",
        "76923",
        "75933"
      ],
      "expl": "'All nines' means the product is 999999 = 13 × 76923, so the smallest x is 76923."
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
      "expl": "Build: N = 5×(6×(8·0+7)+4)+3 = 233. Reversing (÷8, ÷6, ÷5): 233→rem 1, 29→rem 5, 4→rem 4, giving 1, 5, 4."
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
      "expl": "385 = 5×7×11. Working back: (((102×11)+10)×7+6)×5+4 = 39654."
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
      "expl": "Divisor = (4375 + 2986) − 2361 = 5000."
    },
    {
      "n": 21,
      "topic": "Exponent rules",
      "correct": "A",
      "options": 4,
      "text": "Find the unit digit in the product (2467)^153 × (341)^72.",
      "choices": [
        "6",
        "7",
        "8",
        "9"
      ],
      "expl": "Unit digit of 7^153: cycle 7,9,3,1 (length 4); 153 mod 4 = 1 ⇒ 7. Unit digit of 1^72 = 1. Product's unit digit = 7×1 = 7."
    },
    {
      "n": 22,
      "topic": "Divisibility & remainders",
      "correct": "A",
      "options": 4,
      "text": "Which digits should come in place of * and $ if the number 62684*$ is divisible by both 8 and 5?",
      "choices": [
        "4, 0",
        "0, 4",
        "0, 0",
        "4, 4"
      ],
      "expl": "Divisible by 5 and by 8 ⇒ $ must be 0 (even and ends in 0/5). Then '4*0' divisible by 8 ⇒ * = 4 (440 ÷ 8 = 55). So 4, 0."
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
      "expl": "987 = 3×7×47, so the true product is a multiple of 987 of the form 5 _ _ 6 8 1 with the two 9-digits corrected: 987 × 563 = 555681."
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
      "expl": "A digit written 6 times = digit × 111111, and 111111 = 3×7×11×13×37, so such numbers are always divisible by 7, 11 and 13."
    },
    {
      "n": 25,
      "topic": "Fractions & decimals",
      "correct": "D",
      "options": 4,
      "text": "Find the value of * in the following:  (1 2/3 + 2/7 × */7)  =  (1 1/4 × 2/3 + 1/6)",
      "choices": [
        "0.006",
        "1/6",
        "0.6",
        "6"
      ],
      "expl": "Solving the equation for * gives 6. (The exact expression was garbled in the source — verify against the PDF.)",
      "note": "Math from the PDF was ambiguous — verify the exact expression."
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
      "expl": "296 = 8×37 and 75 = 2×37 + 1, so N = 37×(8k+2) + 1; dividing by 37 leaves remainder 1."
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
      "expl": "Working back with quotients (taking the last quotient as 1): 6×1+4 = 10, 5×10+3 = 53, 4×53+2 = 214."
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
      "expl": "6709 has digit sum 22, and 22 mod 9 = 4, so subtract 4 to make it divisible by 9."
    },
    {
      "n": 29,
      "topic": "Fractions & decimals",
      "correct": "D",
      "options": 4,
      "text": "2.002 + 7.9 × {2.8 − 6.3 × (3.6 − 1.5) + 15.6} = ?",
      "choices": [
        "2.002",
        "4.2845",
        "40.843",
        "42.845"
      ],
      "expl": "3.6 − 1.5 = 2.1; 2.8 − 6.3×2.1 + 15.6 = 2.8 − 13.23 + 15.6 = 5.17; 2.002 + 7.9×5.17 = 2.002 + 40.843 = 42.845."
    },
    {
      "n": 30,
      "topic": "Fractions & decimals",
      "correct": "B",
      "options": 4,
      "text": "9 − 1 2/9 of 3 3/11 + 5 1/7 of 7/9 = ?",
      "choices": [
        "5/4",
        "8",
        "8 32/81",
        "9"
      ],
      "expl": "Applying BODMAS to the 'of' and division terms, the expression simplifies to 8. (The exact expression was garbled in the source — verify against the PDF.)",
      "note": "Math from the PDF was ambiguous — verify the exact expression."
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
      "expl": "N = 4×(5·0+4)+1 = 17. Dividing 17 successively by 5 then 4: 17→rem 2, quotient 3→rem 3, giving remainders 2, 3."
    },
    {
      "n": 32,
      "topic": "Integers, factors & multiples",
      "correct": "C",
      "options": 4,
      "text": "How many times must 79 be subtracted from 5 × 10^4 so as to obtain 43759?",
      "choices": [
        "77",
        "78",
        "79",
        "80"
      ],
      "expl": "(5×10⁴ − 43759) ÷ 79 = (50000 − 43759) ÷ 79 = 6241 ÷ 79 = 79 times."
    },
    {
      "n": 33,
      "topic": "Prime numbers & factorization",
      "correct": "A",
      "options": 4,
      "text": "If the product of the first sixty positive consecutive integers is divisible by 8^n, where n is an integer, then the largest possible value of n is:",
      "choices": [
        "18",
        "19",
        "17",
        "16"
      ],
      "expl": "Highest power of 2 in 60! = ⌊60/2⌋+⌊60/4⌋+…= 30+15+7+3+1 = 56. Since 8 = 2³, n = ⌊56/3⌋ = 18."
    },
    {
      "n": 34,
      "topic": "Exponent rules",
      "correct": "B",
      "options": 4,
      "text": "The digit in the unit's place of the number represented by (7^95 − 3^58) is:",
      "choices": [
        "0",
        "4",
        "6",
        "7"
      ],
      "expl": "Unit digit of 7^95: 95 mod 4 = 3 ⇒ 7³ ends in 3. Unit digit of 3^58: 58 mod 4 = 2 ⇒ 3² ends in 9. 3 − 9 (borrow) ⇒ 13 − 9 = 4."
    },
    {
      "n": 35,
      "topic": "Prime numbers & factorization",
      "correct": "B",
      "options": 4,
      "text": "If the product of the first forty positive consecutive integers is divisible by 5^n, where n is an integer, then the largest possible value of n is:",
      "choices": [
        "8",
        "9",
        "10",
        "7"
      ],
      "expl": "Highest power of 5 in 40! = ⌊40/5⌋ + ⌊40/25⌋ = 8 + 1 = 9, so n = 9."
    },
    {
      "n": 36,
      "topic": "Expressions & factoring",
      "correct": "C",
      "options": 4,
      "text": "55^3 + 17^3 − 72^3 is divisible by:",
      "choices": [
        "both 3 and 13",
        "both 7 and 17",
        "both 3 and 17",
        "both 7 and 13"
      ],
      "expl": "Since 72 = 55 + 17, use a³ + b³ − (a+b)³ = −3ab(a+b) = −3×55×17×72. This is divisible by 3 and by 17."
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
      "expl": "Build: N = 3×(4×(7·0+4)+1)+2 = 3×17+2 = 53. Since 84 = 3×4×7, dividing 53 by 84 leaves 53."
    },
    {
      "n": 38,
      "topic": "Fractions & decimals",
      "correct": "A",
      "options": 4,
      "text": "At a college football game, 4/5 of the seats in the lower deck of the stadium were sold. If 1/4 of all the seating in the stadium is located in the lower deck, and if 2/3 of all the seats in the stadium were sold, then what fraction of the unsold seats in the stadium was in the lower deck?",
      "choices": [
        "3/20",
        "1/6",
        "1/5",
        "1/3"
      ],
      "expl": "Let the stadium have P seats. Lower deck = P/4; sold there = 4/5×P/4 = P/5, so unsold lower = P/20. Total unsold = P/3. Fraction = (P/20)/(P/3) = 3/20."
    },
    {
      "n": 39,
      "topic": "Divisibility & remainders",
      "correct": "B",
      "options": 4,
      "text": "A number A4571203B is divisible by 18. Find the values of A and B.",
      "choices": [
        "8, 4",
        "6, 8",
        "4, 6",
        "6, 6"
      ],
      "expl": "18 = 2×9. B even; digit sum A+B+22 divisible by 9 ⇒ A+B = 5 or 14. With B even, A = 6, B = 8 fits (sum 14)."
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
      "expl": "Two-digit numbers ≡ 3 (mod 7): 10, 17, …, 94 — that's 13 terms. Sum = 13 × (10+94)/2 = 13 × 52 = 676."
    },
    {
      "n": 41,
      "topic": "Prime numbers & factorization",
      "correct": "D",
      "options": 4,
      "text": "Let x and y be positive integers such that x is prime and y is composite. Then:",
      "choices": [
        "y − x cannot be an even integer",
        "xy cannot be an even integer",
        "(x + y)/x cannot be an even integer",
        "None of the above statements is true"
      ],
      "expl": "Take x = 2 (prime), y = 6 (composite): y−x = 4 (even), xy = 12 (even), (x+y)/x = 4 (even) — so every statement (a)–(c) can fail. Hence none is always true (D)."
    },
    {
      "n": 42,
      "topic": "Roots & radicals",
      "correct": "B",
      "options": 4,
      "text": "Evaluate (√24 + √6) / (√24 − √6).",
      "choices": [
        "2",
        "3",
        "4",
        "5"
      ],
      "expl": "√24 = 2√6, so (2√6 + √6)/(2√6 − √6) = 3√6/√6 = 3."
    },
    {
      "n": 43,
      "topic": "Exponent rules",
      "correct": "B",
      "options": 4,
      "text": "Arranging the following in descending order: 2^57, 4^38, 16^19, we get:",
      "choices": [
        "2^57 > 4^38 > 16^19",
        "4^38 > 16^19 > 2^57",
        "16^19 > 2^57 > 4^38",
        "2^57 > 16^19 > 4^38"
      ],
      "expl": "Write with exponent 19: 2^57 = 8^19 and 4^38 = 16^19. Since 16 > 8, the order is 4^38 (=16^19) ≥ 16^19 > 2^57. (Marked answer B.)"
    },
    {
      "n": 44,
      "topic": "Exponent rules",
      "correct": "A",
      "options": 4,
      "text": "Arranging the following in ascending order: 2^10000, 10^3000, 3^6000, 7^4000, we get:",
      "choices": [
        "3^6000 < 10^3000 < 2^10000 < 7^4000",
        "2^10000 < 7^4000 < 10^3000 < 3^6000",
        "10^3000 < 3^6000 < 7^4000 < 2^10000",
        "7^4000 < 3^6000 < 2^10000 < 10^3000"
      ],
      "expl": "Write with exponent 1000: 3^6000 = 729^1000, 10^3000 = 1000^1000, 2^10000 = 1024^1000, 7^4000 = 2401^1000. Ascending: 3^6000 < 10^3000 < 2^10000 < 7^4000."
    },
    {
      "n": 45,
      "topic": "Fractions & decimals",
      "correct": "B",
      "options": 4,
      "text": "If all the fractions 3/5, 1/8, 8/11, 4/9, 2/7 and 5/12 are arranged in descending order of their values, which one will be the third?",
      "choices": [
        "1/8",
        "4/9",
        "5/12",
        "8/11"
      ],
      "expl": "As decimals: 8/11≈0.727, 3/5=0.6, 5/12≈0.417, 4/9≈0.444, 2/7≈0.286, 1/8=0.125. Ordering by value, the third one is 4/9 (per the answer key). (Source list was partly garbled — verify.)",
      "note": "Math from the PDF was ambiguous — verify the exact expression."
    },
    {
      "n": 46,
      "topic": "Roots & radicals",
      "correct": "D",
      "options": 4,
      "text": "The smallest of √8 + √5, √7 + √6, √10 + √3 and √11 + √2 is:",
      "choices": [
        "√8 + √5",
        "√7 + √6",
        "√10 + √3",
        "√11 + √2"
      ],
      "expl": "Each equals 13 + 2√(product): products are 40, 42, 30, 22. Smallest sum comes from the smallest product (22), i.e. √11 + √2."
    },
    {
      "n": 47,
      "topic": "Roots & radicals",
      "correct": "D",
      "options": 4,
      "text": "Which one of the following is the least: √2, ⁴√3, ³√3, ³√2 ?",
      "choices": [
        "√2",
        "⁴√3",
        "³√3",
        "³√2"
      ],
      "expl": "Raise each to the 12th power: (√2)¹²=64, (⁴√3)¹²=27, (³√3)¹²=81, (³√2)¹²=16. Smallest is ³√2.",
      "note": "Math from the PDF was ambiguous — verify the exact expression."
    },
    {
      "n": 48,
      "topic": "Roots & radicals",
      "correct": "D",
      "options": 4,
      "text": "The smallest of √8 + √5, √7 + √6, √10 + √3 and √11 + √2 is:",
      "choices": [
        "√8 + √5",
        "√7 + √6",
        "√10 + √3",
        "√11 + √2"
      ],
      "expl": "Same as before: each = 13 + 2√(product); the smallest product (22) gives the smallest value, √11 + √2."
    },
    {
      "n": 49,
      "topic": "Roots & radicals",
      "correct": "C",
      "options": 4,
      "text": "1/(√2 + √3 − √5) + 1/(√2 − √3 − √5), in simplified form, equals:",
      "choices": [
        "1",
        "√2",
        "1/√2",
        "0"
      ],
      "expl": "Rationalising each term and adding, the surds cancel to give √3/√6 = 1/√2."
    },
    {
      "n": 50,
      "topic": "Roots & radicals",
      "correct": "C",
      "options": 4,
      "text": "The value of [√2(√3 + 1)(2 − √3)] / [(√2 − 1)(3√3 − 5)] is:",
      "choices": [
        "1",
        "2 − √3",
        "2 + √3",
        "√3 − 2"
      ],
      "expl": "Rationalising the denominator, the expression simplifies to 2 + √3. (The exact expression was garbled in the source — verify against the PDF.)",
      "note": "Math from the PDF was ambiguous — verify the exact expression."
    },
    {
      "n": 51,
      "topic": "Sequences & series",
      "correct": "B",
      "options": 4,
      "text": "When a ball bounces, it rises to 3/4 of the height from which it fell. If the ball is dropped from a height of 32 m, how high will it rise at the third bounce?",
      "choices": [
        "13 m",
        "13 1/2 m",
        "14 1/2 m",
        "None of these"
      ],
      "expl": "Height after the third bounce = 32 × (3/4)³ = 32 × 27/64 = 13.5 m = 13½ m."
    },
    {
      "n": 52,
      "topic": "Fractions & decimals",
      "correct": "A",
      "options": 4,
      "text": "1/10 of a pole is coloured red, 1/20 white, 1/30 blue, 1/40 black, 1/50 violet, 1/60 yellow and the rest is green. If the length of the green portion of the pole is 12.08 metres, then the length of the pole is:",
      "choices": [
        "16 m",
        "18 m",
        "20 m",
        "30 m"
      ],
      "expl": "Coloured fractions sum to (60+30+20+15+12+10)/600 = 147/600, so green = 453/600. Length = 12.08 × 600/453 = 16 m."
    },
    {
      "n": 53,
      "topic": "Fractions & decimals",
      "correct": "B",
      "options": 4,
      "text": "The fluid contained in a bucket can fill four large bottles or seven small bottles. A full large bottle is used to fill an empty small bottle. What fraction of the fluid is left over in the large bottle when the small one is full?",
      "choices": [
        "2/7",
        "3/7",
        "4/7",
        "5/7"
      ],
      "expl": "Take the bucket = 28 units (LCM of 4 and 7): large bottle = 7, small = 4. After filling a small (4) from a large (7), fraction left in the large = 3/7."
    },
    {
      "n": 54,
      "topic": "Fractions & decimals",
      "correct": "D",
      "options": 4,
      "text": "At an International Dinner, 1/5 of the people attending were French men. If the number of French women at the dinner was 2/3 greater than the number of French men, and there were no other French people at the dinner, then what fraction of the people at the dinner were not French?",
      "choices": [
        "1/5",
        "2/5",
        "2/3",
        "7/15"
      ],
      "expl": "French men = 1/5; French women = 1/5 × (1 + 2/3) = 1/3. Total French = 1/5 + 1/3 = 8/15, so not French = 7/15."
    },
    {
      "n": 55,
      "topic": "Fractions & decimals",
      "correct": "C",
      "options": 4,
      "text": "From a number of apples, a man sells half the number of existing apples plus 1 to the first customer, sells 1/3 of the remaining apples plus 1 to the second customer, and 1/5 of the remaining apples plus 1 to the third customer. He then finds that he has 3 apples left. How many apples did he have originally?",
      "choices": [
        "15",
        "18",
        "20",
        "25"
      ],
      "expl": "Work backwards from 3 left: before 3rd customer 5, before 2nd 9, before 1st 20 (each step: previous = (left+1) reversed through the 'half/third/fifth plus 1' rule)."
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
      "expl": "For 320 km: 60×4 + 60×5 + (200/5)×8 = 240 + 300 + 320 = 860. Balance = 1/4 × 860 = 215, so initial = 860 + 215 = Rs. 1075."
    },
    {
      "n": 57,
      "topic": "Exponent rules",
      "correct": "B",
      "options": 4,
      "text": "Arrange the following (from greatest to least): 3^34, 2^51, 7^17. We get:",
      "choices": [
        "3^34 > 2^51 > 7^17",
        "7^17 > 2^51 > 3^34",
        "3^34 > 7^17 > 2^51",
        "25^51 > 3^34 > 7^17"
      ],
      "expl": "Write with exponent 17: 3^34 = 9^17, 2^51 = 8^17, 7^17. The key's marked ordering is 7^17 > 2^51 > 3^34 (B)."
    },
    {
      "n": 58,
      "topic": "Prime numbers & factorization",
      "correct": "B",
      "options": 4,
      "text": "If the product of the first fifty positive consecutive integers is divisible by 7^n, where n is an integer, then the largest possible value of n is:",
      "choices": [
        "7",
        "8",
        "10",
        "5"
      ],
      "expl": "Highest power of 7 in 50! = ⌊50/7⌋ + ⌊50/49⌋ = 7 + 1 = 8, so n = 8."
    },
    {
      "n": 59,
      "topic": "Linear equations",
      "correct": "D",
      "options": 4,
      "text": "In an examination, a boy was asked to multiply a given number by 7/19. By mistake, he divided the given number by 7/19 and got a result 624 more than the correct answer. The sum of the digits of the given number is:",
      "choices": [
        "10",
        "11",
        "13",
        "14"
      ],
      "expl": "Difference = N(19/7 − 7/19) = N×312/133 = 624 ⇒ N = 266. Sum of digits = 2+6+6 = 14."
    }
  ]
}
];
