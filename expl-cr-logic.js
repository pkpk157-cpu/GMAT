/* GMAT Prep — fast routes and takeaways for the Critical Reasoning flaw,
   conditional and inference sets. No `steps`: the transcribed explanations
   already give the chain of reasoning and refute every wrong option, so they
   are kept as the full solution. Added here is the ⚡ fast route — how to get
   there under time pressure — and the transferable rule.
   Keys are "setId#n"; index.html merges these over the question files. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"cr-flaw#1": {
  fast: "One word decides this: [[percentage]]. The premise is a share of delays; the conclusion is a number of delays. Stop reading at that mismatch and prephrase \"the total grew\".\n" +
    "Then take only the option that inflates the denominator — a surge in delays from causes other than airline error. Three of the five options talk about complaints, which the argument never uses as evidence; sweep those out on sight.",
  take: "A falling share and a falling count are different claims. When a flaw question moves between them, the flaw is the move itself — look for something that changed the total."
},

"cr-flaw#2": {
  fast: "Translate the rule before touching the options: \"no water/sun/soil → not productive\" means water, sun and soil are each [[necessary]]. The argument has all three and concludes productive, which is treating necessary as sufficient.\n" +
    "You can prephrase that in five seconds, and one option states it almost word for word. Anything about vague wording, correlation or samples is describing a different argument.",
  take: "\"Without X, no Y\" makes X necessary for Y — never sufficient. Having every necessary condition still guarantees nothing."
},

"cr-flaw#3": {
  fast: "Whenever a conclusion explains an observation, ask what else would produce the same observation. Nobody orders the potato dish — it could be badly cooked, badly described, or simply dull next to a casserole.\n" +
    "Once you can name a rival explanation in your head, the flaw is \"only one explanation considered\" and you scan for that phrasing rather than reading each option on its merits.",
  take: "An explanation that fits the evidence is not the only explanation that fits. Generate one alternative yourself, and the flaw names itself."
},

"cr-flaw#4": {
  fast: "Ignore the moral framing entirely — the passage sets it aside, so any option about morality is scenery. The argument is a statistical comparison, so go straight to who is in the sample.\n" +
    "The surgery is a [[reward for good behaviour]]. That single phrase tells you the recipients were already the lowest-risk inmates, and \"unrepresentative sample\" is your prephrase before you read a word of the options.",
  take: "When a treatment group is selected for merit, the group's later success may be the selection, not the treatment. Always ask how people got into the sample."
},

"cr-flaw#5": {
  fast: "Two percentage [[changes]] are compared and a conclusion is drawn about current [[levels]]. A 60% rise on a tiny base can still sit below a 10% rise on a large one.\n" +
    "Prephrase \"we don't know where they started\" and pick the option asking for the original rates. Density, population growth and crime mix are all irrelevant once you notice the figures are already rates per 1,000.",
  take: "Percentage change says nothing about level. To compare two current levels you need both starting values, not just both growth rates."
},

"cr-conditional#1": {
  fast: "Do not read the options first. Chain the arrows: apartments → more residents → congestion → new roads → substantial tax increases. That is the whole passage.\n" +
    "Now look only for an option that runs the chain forwards. Anything starting \"if residents band together\" or \"if developers do not build\" is negating an antecedent, and every one of those is wrong by construction.",
  take: "In a conditional chain only forward inference is valid: front of the chain gives you the back. Negating the front proves nothing."
},

"cr-conditional#2": {
  fast: "Rewrite the awkward premise first: \"uncomfortable → not well designed\" contraposes to \"well designed → comfortable\", which joins the last premise to give well designed → comfortable → spacious.\n" +
    "Then reject on direction alone. Options running spacious back to comfortable or spacious back to well designed are reversals; the \"most\" claim about artwork cannot be reversed or narrowed to a subset either.",
  take: "Contrapose every negative conditional on sight — it is usually the link that completes the chain. And \"most A are B\" never yields \"most B are A\"."
},

"cr-conditional#3": {
  fast: "Draw it rather than reason verbally. Physics and literature are disjoint circles; some physics students sit in art. Those students are in art and, by the first premise, outside literature.\n" +
    "That gives you \"some art, not literature\" before you read the options. Rhetoric is connected to nothing but physics, so any option pairing rhetoric with literature is unprovable — cross those out unread.",
  take: "In overlapping-set inference, only the group you can actually locate on the diagram supports a conclusion. Two groups that merely share an exclusion have no proven relationship."
},

"cr-inference#1": {
  fast: "You do not need numbers, only directions. Taxpayers started ahead and grew faster, so taxpayers per voter rose.\n" +
    "Read the options watching for the ratio written the wrong way up — that is the standard trap here — and for the claim that the ratio is unchanged, which one side doubling makes impossible.",
  take: "When one quantity grows faster than another, the ratio's direction is fixed regardless of starting values. Check which way the tested ratio is written before you accept it."
},

"cr-inference#2": {
  fast: "Amount of fat up, [[share]] of fat constant. Share = fat ÷ total, so if the top rises and the fraction holds, the bottom must rise too.\n" +
    "Prephrase \"they eat more overall\" and take it. Comparisons with other countries, with children, or claims about variety and weight all reach outside a passage that only gives you one country's adults.",
  take: "Amount and percentage together pin down the total. If the part grows while its share is flat, the whole grew at the same rate."
},

"cr-inference#3": {
  fast: "Two options put a number on the revenue loss — reject both immediately, because nothing tells you what fraction of the city's payroll this one employer was.\n" +
    "What is certain is a composition shift: public jobs unchanged, total jobs down, so the public share is up. That is pure arithmetic and needs no extra assumption.",
  take: "On inference questions, distrust any option carrying a specific figure the passage cannot compute. Shares of a shrinking total, by contrast, are always derivable."
},

"cr-inference#4": {
  fast: "Price the card: 50 copies at 9¢ is $4.50 paid up front, used or not. Break-even against 10¢ coins is 45 copies — below that the card costs more per copy than coins did.\n" +
    "45 out of 50 is 90% of capacity, so the option about cards used to under 90% capacity is the arithmetic restated. Options about how many patrons use the machines never touch revenue.",
  take: "With a prepaid block, effective price per unit = block price ÷ units actually used. Find the usage level where that equals the old price; that is the break-even the answer hides behind."
},

"cr-inference#5": {
  fast: "Two \"more than half\" groups drawn from the same population must overlap — that is the entire question. Most investors do no research; most investors profit; so somebody does both.\n" +
    "Prephrase \"some profitable investors did no research\" and take it. Every option saying [[all]] of a group profits is dead on arrival, since \"most\" never licenses \"all\".",
  take: "Two majorities of one population always share a member. That guaranteed overlap is the most common source of a valid \"some\" inference."
},

"cr-inference#6": {
  fast: "Hold two facts side by side: Senegalese gold is the purest known at 92%, and it is never refined. So whatever the mints did refine was not Senegalese — and therefore started below 92%.\n" +
    "That is the answer, reached in one step. Weight, uniformity and monetary value are all topics the passage never raises, so those options can go unread.",
  take: "\"Purest known\" plus \"never refined\" forces every refined batch below that purity. Combine a superlative with an exclusion and the inference usually falls straight out."
},

"cr-inference#7": {
  fast: "Set it up as a plain conditional: if the Puerta segments also back Quintana, then no Quintana segment backs Ramirez. Salim reports Quintana segments that do back Ramirez — the consequent is false.\n" +
    "Modus tollens: the antecedent fails, so some Puerta segments do not back Quintana. Three options add the word \"strongly\", a degree of support nobody in the dialogue mentioned; drop them on that word alone.",
  take: "In a two-speaker exchange, the second speaker usually falsifies the first's consequent. Denying the consequent is valid — and the inference is the negated antecedent, nothing more."
},

"cr-inference#8": {
  fast: "\"Every passer completed the course\" means the course is necessary for passing. Maria lacks it, so she did not pass. One contrapositive, done.\n" +
    "The trap is the near-synonym: \"failed\" implies she sat the exam, which you cannot know. \"Did not pass\" is the weaker, safer wording — and on inference questions the weaker wording wins.",
  take: "Not passing covers failing and never sitting. Prefer the option that claims the least while still following from the premises."
},

"cr-inference#9": {
  fast: "Link the two conditionals in the order given: third floor → reference → not borrowable. The conclusion is just the endpoints joined.\n" +
    "Then check every other option for a reversed arrow — unborrowable back to third floor, reference back to third floor — and for invented facts like a first floor the passage never mentions.",
  take: "Chain conditionals only in the direction stated. Most wrong inference options are the correct chain read backwards."
},

"cr-inference#10": {
  fast: "\"Only if\" marks a necessary condition: 30 sign-ups are required for the picnic. Only 22 signed up, so the requirement fails and the picnic does not happen.\n" +
    "Everything else — rescheduling, late sign-ups, last year, how employees feel — is narrative you are invited to supply. Inference answers never come from outside the passage.",
  take: "\"Only if\" introduces the necessary condition, not the sufficient one. When a necessary condition fails, the outcome is ruled out — and nothing beyond that is licensed."
}

});
