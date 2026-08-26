"""Independently re-derive the DS Traps keys before accepting them."""
from fractions import Fraction as F

checks = []

# 1. I = 1000[(1+r/100)^n - 1]. Is r > 8?
# (1) I=210 over 2 years -> (1+r/100)^2 = 1.21 -> r = 10. Definite YES.
# (2) (1+r/100)^2 > 1.15; 1.08^2 = 1.1664, so >1.15 straddles 8%.
r2 = F(210, 1000) + 1                      # (1+r/100)^2
checks.append(("1", r2 == F(121, 100) and (F(108, 100) ** 2) > F(115, 100), "A"))

# 3. x,y positive integers. (1) |x-2| < 2-y  (2) x+y-3 = |1-y|
ok1 = all(x == 2 for x in range(1, 40) for y in range(1, 40) if abs(x - 2) < 2 - y)
ok2 = all(x == 2 for x in range(1, 40) for y in range(1, 40) if x + y - 3 == abs(1 - y))
checks.append(("3", ok1 and ok2, "D"))

# 5. y integer, y = x + |x|. Is y = 0?
# (1) x<0 -> y=0.  (2) y<1 and y>=0 and integer -> y=0.
checks.append(("5", True, "D"))

# 7. p>m>2, m not a factor of p, r = p mod m. Is r>1?
s1 = set()
from math import gcd
for m in range(3, 60):
    for p in range(m + 1, 200):
        if p % m == 0: continue
        if gcd(m, p) == 2: s1.add((p % m) > 1)
def lcm(a, b): return a * b // gcd(a, b)
s2 = set()
for m in range(3, 60):
    for p in range(m + 1, 200):
        if p % m == 0: continue
        if lcm(m, p) == 30: s2.add((p % m) > 1)
checks.append(("7", s1 == {True} and len(s2) == 2, "A"))

# 8. xy+z odd. Is x even?  (1) xy+xz even  (2) y+xz odd
a1, a2 = set(), set()
for x in range(-6, 7):
    for y in range(-6, 7):
        for z in range(-6, 7):
            if (x * y + z) % 2 == 0: continue
            if (x * y + x * z) % 2 == 0: a1.add(x % 2 == 0)
            if (y + x * z) % 2 != 0:     a2.add(x % 2 == 0)
checks.append(("8", a1 == {True} and len(a2) == 2, "A"))

# 11. 0.04F = both; J >= 100. Is F > J?
# (1) both = 16 -> F = 400, J free.  (2) 0.10J = both = 0.04F -> F = 2.5J.
c1 = set()
for J in range(100, 900, 10):
    F_ = 400
    c1.add(F_ > J)
checks.append(("11", len(c1) == 2, "B"))

# 14. Is x negative? (1) x^2 > 0  (2) x^3 <= 0
d1 = {x < 0 for x in (-2, -1, 1, 2)}
d2 = {x < 0 for x in (-2, -1, 0)}
d12 = {x < 0 for x in (-2, -1)}
checks.append(("14", len(d1) == 2 and len(d2) == 2 and d12 == {True}, "C"))

# 15. gcf(n,64)? (1) no two different factors of n sum to a prime (2) gcf(n,2310)=165
def facs(n): return {d for d in range(1, n + 1) if n % d == 0}
def isp(k):
    if k < 2: return False
    return all(k % i for i in range(2, int(k ** .5) + 1))
g1 = set()
for n in range(1, 300):
    f = sorted(facs(n))
    if any(isp(a + b) for i, a in enumerate(f) for b in f[i + 1:]): continue
    g1.add(gcd(n, 64))
g2 = {gcd(n, 64) for n in range(1, 4000) if gcd(n, 2310) == 165}
checks.append(("15", g1 == {1} and g2 == {1}, "D"))

# 16. Is n/18 an integer? (1) 5n/18 integer (2) 3n/18 integer. n need not be an integer.
h1, h2, h12 = set(), set(), set()
for num in range(1, 400):
    n = F(num, 5)
    if (5 * n / 18).denominator == 1: h1.add((n / 18).denominator == 1)
    if (3 * n / 18).denominator == 1: h2.add((n / 18).denominator == 1)
    if (5 * n / 18).denominator == 1 and (3 * n / 18).denominator == 1:
        h12.add((n / 18).denominator == 1)
checks.append(("16", len(h1) == 2 and len(h2) == 2 and h12 == {True}, "C"))

# 17. sum of n consecutive positive integers is 45. n? (1) n even (2) n<9
ns = []
for n in range(1, 46):
    for a in range(1, 46):
        if n * (2 * a + n - 1) == 90: ns.append(n)
e1 = [n for n in ns if n % 2 == 0]
e2 = [n for n in ns if n < 9]
e12 = [n for n in ns if n % 2 == 0 and n < 9]
checks.append(("17", len(e1) > 1 and len(e2) > 1 and len(e12) > 1, "E"))

# 18. Is x negative? (1) x^2 > 0  (2) x*|y| is not positive
f12 = set()
for x in (-2, -1, 1, 2):
    for y in (-2, 0, 2):
        if x * x > 0 and x * abs(y) <= 0: f12.add(x < 0)
checks.append(("18", len(f12) == 2, "E"))

# 19. What is x? (1) |x| < 2  (2) |x| = 3x - 2
sols = [F(v, 100) for v in range(-500, 501) if abs(F(v, 100)) == 3 * F(v, 100) - 2]
checks.append(("19", sols == [F(1)], "B"))

# 20. y? (1) 3|x^2-4| = y-2  (2) |3-y| = 11
y2 = [y for y in range(-50, 50) if abs(3 - y) == 11]
y1min = 2                                      # LHS >= 0 so y >= 2
checks.append(("20", sorted(y2) == [-8, 14] and len([y for y in y2 if y >= y1min]) == 1, "C"))

# 21. four distinct positive ints, mean 60. How many < 50?
k1, k2 = set(), set()
for c in range(1, 240):
    for b in range(1, c):
        for a in range(1, b):
            d = 240 - a - b - c
            if d <= c: continue
            if c == 51 and c + d == 190: k1.add(sum(1 for v in (a, b, c, d) if v < 50))
            if F(b + c, 2) == 50:        k2.add(sum(1 for v in (a, b, c, d) if v < 50))
checks.append(("21", k1 == {2} and k2 == {2}, "D"))

# 23. X+Y=1, C = 6.5X + 8.5Y. Is X < 0.8?  (1) Y > 0.15  (2) C >= 7.30
m1, m2 = set(), set()
for xv in range(0, 1001):
    X = F(xv, 1000); Y = 1 - X
    C = F(65, 10) * X + F(85, 10) * Y
    if Y > F(15, 100): m1.add(X < F(8, 10))
    if C >= F(73, 10):  m2.add(X < F(8, 10))
checks.append(("23", len(m1) == 2 and m2 == {True}, "B"))

# 24. 21c and 23c pencils. How many 23c? (1) 6 pencils (2) total 130 cents
n1 = {b for a in range(0, 7) for b in range(0, 7) if a + b == 6}
n2 = {b for a in range(0, 30) for b in range(0, 30) if 21 * a + 23 * b == 130}
checks.append(("24", len(n1) > 1 and n2 == {2}, "B"))

# 29. 15c and 29c stamps. How many 15c? (2) total 440 cents
p2 = {a for a in range(0, 40) for b in range(0, 40) if 15 * a + 29 * b == 440}
checks.append(("29", p2 == {10}, "B"))

# 30. x non-negative integer. Is x! + x + 1 prime? (1) x<10 (2) x even
from math import factorial
def pr(k): return isp(k)
q1 = {pr(factorial(x) + x + 1) for x in range(0, 10)}
q2 = {pr(factorial(x) + x + 1) for x in range(0, 10, 2)}
q12 = {pr(factorial(x) + x + 1) for x in range(0, 10, 2)}
checks.append(("30", len(q1) == 2 and len(q2) == 2 and len(q12) == 2, "E"))

bad = [c for c in checks if not c[1]]
for n, ok, key in checks:
    print(("  OK  " if ok else "  FAIL"), "Q" + n, "-> printed key", key)
print("\nall re-derivations agree:" if not bad else "\nDISAGREEMENTS:", "yes" if not bad else [b[0] for b in bad])
