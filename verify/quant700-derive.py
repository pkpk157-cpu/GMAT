"""Independently re-derive every Quant 700-800 key before the question is accepted."""
from fractions import Fraction as F

R = {}   # "part#n" -> computed answer, as it should read among the choices

# ---- Overlapping sets ----
R["Overlapping Sets#1"]  = 0.75*24 + 0.25*16                     # 22
R["Overlapping Sets#2"]  = (80-75) + 0.70*20                     # 19
def os3():
    # 20% in both, 50% band-only -> orchestra-only 30%; band total 70% = 119
    T = 119/0.70; return 0.30*T
R["Overlapping Sets#3"]  = os3()                                  # 51
R["Overlapping Sets#4"]  = 150*6                                  # 900  (neither = T/6)
def os5():
    S = (80-40)/0.5                       # supposed-on
    off = 100-S; on_from_off = 0.40*off
    return on_from_off/80*100
R["Overlapping Sets#5"]  = os5()                                  # 10
def os6():
    f = (645-45)/3                        # female speckled
    mr = f*3/4                            # male rainbow
    total = mr*20/3
    return (total-645) - mr
R["Overlapping Sets#6"]  = os6()                                  # 205
R["Overlapping Sets#7"]  = min(30,70)                             # 30
R["Overlapping Sets#8"]  = (40-10) + 0.25*60                      # 45
R["Overlapping Sets#9"]  = 0.90*240 + 167                         # 383
R["Overlapping Sets#10"] = 100 - 10/0.40                          # 75
def os12():
    e3 = F(3,8); s = F(1,2)+F(5,8)+F(3,4)
    # e1+e2+e3 = 1 ; e1+2e2+3e3 = s
    e2 = s - 3*e3 - (1 - e3); return e2
R["Overlapping Sets#12"] = os12()                                 # 1/8
R["Overlapping Sets#13"] = 100 - 60/0.80                          # 25
def os14():
    hw = 60; hw_no_win = hw-50; no_win = hw_no_win/0.25
    return 50/(100-no_win)*100
R["Overlapping Sets#14"] = os14()                                 # 83.33
def os15():
    T = 187/0.85; return T - 0.75*T - 0.10*T
R["Overlapping Sets#15"] = os15()                                 # 33
def three(total, sizes, e3=None, e2=None):
    s = sum(sizes)
    if e3 is not None:                       # solve for e2
        return F(s - 3*e3 - (total - e3), 1)
    return None
R["Overlapping Sets#16"] = (25+25+34) - 3*3 - (68-3)              # 10
def os17():
    s = 22+27+28; e2 = 6
    # e1+e2+e3 = 59 ; e1+2e2+3e3 = s
    # subtract: e2 + 2e3 = s - 59 -> e3 = (s-59-e2)/2
    return (s-59-e2)/2
R["Overlapping Sets#17"] = os17()                                 # 6
def os18():
    # p = only peanuts; onlyR=10p, onlyA=5p, R&P-only = onlyA/20 = p/4
    # almonds total 210 = onlyA + (other almond regions)
    # total 435 = 10p + 5p + p + p/4 + (210 - 5p)
    p = (435-210) / (10+5+1+0.25-5)
    return 10*p + 5*p + p
R["Overlapping Sets#18"] = os18()                                 # 320

# ---- Work / rate ----
R["Work / Rate#3"] = (35+55)*30                                   # 2700
def wr4():
    tom,pet,john = F(1,6),F(1,3),F(1,2)
    done = tom + (tom+pet)                       # after 2 hours
    t3 = (1-done)/(tom+pet+john)
    return pet*1 + pet*t3
R["Work / Rate#4"] = wr4()                                        # 4/9
def wr7():
    # s+e = 1/2 ; s+2f = 1/2 ; e+f = 1/4
    # => e = 2f ; 3f = 1/4 -> f = 1/12, e = 1/6, s = 1/3
    f = F(1,12); e = F(1,6); s = F(1,2)-e
    return 1/(s+e+f)
R["Work / Rate#7"] = wr7()                                        # 12/7
def wr9(y=40, x=10):
    actual = F(y,x) + F(80-y,1)/(F(5,4)*x)
    orig = F(80,x)
    return actual/orig, F(8,10) + F(25,10000)*y
R["Work / Rate#9"] = wr9()                                        # ratio == 0.8 + 0.0025y

# ---- Percentages ----
def p1():
    each = F(20,100)
    tot = 3*each*F(150,100) + 2*each*F(60,100)
    # year 2
    alice = each*F(150,100)*F(110,100); bob = alice
    carol = each*F(150,100)*F(40,100)
    dave  = each*F(60,100)*F(125,100); errol = 0
    return (alice+bob+carol+dave+errol)*100
R["Percentages#1"] = p1()                                         # 93
R["Percentages#2"] = (0.30*40 + 0.60*80)/120*100                  # 50
def p3():
    Rx = F(100); P = Rx*F(60,100); Q = P*F(80,100); S = P*F(60,100)
    Qn = Q + Rx*F(40,100); Sn = S + Rx*F(60,100)
    return Qn/Sn
R["Percentages#3"] = p3()                                         # 11/12
R["Percentages#4"] = (F(160,100)/F(120,100) - 1)*100              # 33.33
def p5():
    # pop two years from now = 2 * pop one year ago
    # p0*(1.1)^2 = 2*p_{-1};  p0 = p_{-1}*(1+g)
    g = 2/(1.1**2) - 1
    return g*100
R["Percentages#5"] = p5()                                         # ~65
def p6():
    w = 45/1.8; return 2*w - 45
R["Percentages#6"] = p6()                                         # 5
def p8():
    # 20 gal at 5% ethanol -> add x pure ethanol for 10%
    # (1+x)/(20+x) = 0.10
    return F(1 - F(2,1), 1) if False else F(20*F(10,100) - 1, 1)/(1 - F(10,100))
R["Percentages#8"] = p8()                                         # 10/9
R["Percentages#9"] = float(F(1,3)) + 0.4 + 0.65                   # ~1.383 -> 1.4
def p10():
    vol = 24/4; salt = 0.40*vol; water = vol - salt
    water -= 0.5*2
    return water/(water+salt)*100
R["Percentages#10"] = p10()                                       # 52
R["Percentages#11"] = ((2/ (0.5**2)) - 1)*100                     # 700
def p14():
    A = 60*1.20*1.05
    B = 60*1.30*0.90*1.05
    return A - B
R["Percentages#14"] = p14()                                       # 1.89
R["Percentages#15"] = (1100*1.10/1000 - 1)*100                    # 21
R["Percentages#16"] = 1.20*0.85*100                               # 102
def p18():
    # cost c; sold 1.2c; bought back 0.6c; diff c - 0.6c = 0.4c = 100 -> c = 250
    c = 100/0.4; bb = 0.6*c; return bb*1.8
R["Percentages#18"] = p18()                                       # 270  (choice A)
def p19():
    # 90 = (x/100)*boys ; boys = 0.40*x  -> 90 = x*0.4x/100
    return (90*100/0.4) ** 0.5
R["Percentages#19"] = p19()                                       # 150
def p20():
    sale = 68; orig = sale/0.85; final = sale*1.25
    return final - orig
R["Percentages#20"] = p20()                                       # 5
def p21():
    # J = B + 60 ; B + J/5 = 0.75*(J - J/5)
    from sympy import symbols, solve, Eq
    return None
def p21b():
    for J in range(1, 100000):
        B = J - 60
        if abs((B + J/5) - 0.75*(J*4/5)) < 1e-9: return J
R["Percentages#21"] = p21b()                                      # 100
R["Percentages#22"] = (700/(0.80*700) - 1)*100                    # 25
def p23():
    # 300 gal raises current by 30% -> current = 1000 ; 1000+300 = 0.8C
    cur = 300/0.30; return (cur+300)/0.80
R["Percentages#23"] = p23()                                       # 1625
R["Percentages#25"] = 0.35/0.007*100                              # 5000
def p45():
    # rate ~ A^2 / B ; B doubles -> A^2 must double -> A * sqrt(2)
    return (2**0.5 - 1)*100
R["Percentages#45"] = p45()                                       # ~41 -> 40% increase
def p48():
    # 11 districts, none more than 10% greater than any other; minimise the least
    # least = m, greatest <= 1.1m ; to minimise m push others to 1.1m
    return 132000/ (1 + 10*1.1)
R["Percentages#48"] = p48()                                       # 11000
R["Percentages#49"] = (1.50/1.20 - 1)*100                         # 25
def p50():
    # selling = 150 + 0.40*selling -> selling = 250 ; profit = 100
    s = 150/0.60; return s - 150
R["Percentages#50"] = p50()                                       # 100  (choice E)
def p52():
    # May: Mr = 60, rest = 40, total 100. June: Mr = 72, rest 40, total 112.
    # "Mrs. Lee's earnings" here means the rest of the family.
    return 40/112*100, 72/112*100
R["Percentages#52"] = p52()                                       # rest 35.7 ; Mr 64.3

for k in sorted(R, key=lambda s: (s.split('#')[0], int(s.split('#')[1]))):
    v = R[k]
    print("%-26s %s" % (k, v))
from fractions import Fraction as F
R={}
# Speed & distance
R["S&D#2"]=("Lexy avg = 10/(1+1/3)=7.5; Ben=3.75 mph; 10/3.75 h", 10/(1+F(5,15))/2, 10/float(10/(1+5/15)/2)*60)
lex=F(10,1)/(1+F(5,15)); ben=lex/2; R["S&D#2"]=float(10/ben*60)                      # minutes
def sd4():
    # Linda 2mph from t=0. Tom 6mph from t=1.
    # Tom covers half Linda's distance: 6(t-1) = 0.5*2t -> 6t-6 = t -> t = 6/5 -> Tom's time = 1/5 h
    t1 = F(6,5); tomA = t1-1
    # twice: 6(t-1) = 2*2t -> 6t-6 = 4t -> t = 3 -> Tom's time = 2 h
    t2 = F(3,1); tomB = t2-1
    return float((tomB-tomA)*60)
R["S&D#4"]=sd4()
def sd10():
    d = 40*F(45,60); nd = d*F(80,100)
    return float(nd/12*60 - 45)
R["S&D#10"]=sd10()
def sd13():
    # avg = 100 / (x/60 + (100-x)/50) = 30000/(500 + ... ) reduce
    # total time for 100 units of distance: x/60 + (100-x)/50
    # avg = 100 / [ (5x + 6(100-x))/300 ] = 30000/(600 - x)
    return "30000/(600-x) -> numerator 30,000"
R["S&D#13"]=sd13()
def sd14():
    # c1 rate 45/60 of real; c2 = c1*(75/60); c3 = c2*(40/60); c4 = c3*(80/60)
    r = F(45,60)*F(75,60)*F(40,60)*F(80,60)
    mins = r*6*60
    return float(mins)   # minutes advanced in 6 real hours
R["S&D#14"]=sd14()
def sd15():
    # at 7:00 hour hand at 210 deg; minute 0. minute gains 5.5 deg/min.
    # perpendicular first when 210 - 5.5t = 90 -> t = 120/5.5 = 240/11
    return float(F(240,11)), "21 9/11"
R["S&D#15"]=sd15()
# SI/CI
R["SI#1"]=10000*1.02*1.03*1.04-10000
def si2():
    r=(F(250000,2000))**F(1,3)
    return 2000*float(125)**(2/3)
R["SI#2"]=2000*(125**(2/3))
def si3():
    # 4h ago 1000; doubles every 2h -> now (t=0) 1000*2^2 = 4000
    n=0
    while 4000*2**(n/2) <= 250000: n+=1
    return n
R["SI#3"]=si3()
def si7():
    # balance grows 10%/mo, three equal payments P
    # 1000*1.1^3 = P(1.1^2 + 1.1 + 1)
    return 1000*1.1**3/(1.1**2+1.1+1)
R["SI#7"]=si7()
def si8():
    # quarterly 2%; 6 months -> two quarters: x(1.02^2 - 1) > 100
    return 100/((1.02**2)-1)
R["SI#8"]=si8()
# Ratios
def r1():
    from fractions import Fraction as Fr
    t=Fr(11,50)*2
    for s in ["2/5","11/34","43/99","8/21","9/20"]:
        a,b=s.split("/"); 
        if Fr(int(a),int(b))>=t: return s
R["R#1"]=r1()
def r2():
    for k in range(1,200):
        j,s=3*k,4*k
        if (j-10)*5==(s-20)*4: return s
R["R#2"]=r2()
def r4():
    for g in range(1,60):
        if g%4: continue
        bA,gA=3*g//4,g
        for gB in range(1,60):
            if gB%5: continue
            bB=4*gB//5
            if bB==bA-1 and gB==gA-2 and (bA+bB)*22==(gA+gB)*17: return gA
R["R#4"]=r4()
R["R#7"]=4e11/5e7
def r11():
    # cats+bunnies = 5k+7k = 12k = 48 -> k=4 -> dogs 3k=12
    return 48/12*3
R["R#11"]=r11()
def r13():
    # N players, N/2 right, N/2 left. 1/3 present. of present, 1/3 left.
    # present = N/3 ; left present = N/9 ; right present = 2N/9
    # left absent = N/2 - N/9 = 7N/18 ; right absent = N/2 - 2N/9 = 5N/18
    return F(5,18)/F(7,18)
R["R#13"]=r13()
def r14():
    # A: r:w = 1:3, w:b = 2:3 -> r:w:b = 2:6:9 -> white in A multiple of 6
    # B: r:w = 1:4 -> white in B multiple of 4
    out=[]
    for wA in range(6,31,6):
        wB=30-wA
        if wB>0 and wB%4==0: out.append(wA//3)   # red in A = wA/3
    return out
R["R#14"]=r14()
for k,v in R.items(): print("%-8s %s"%(k,v))
