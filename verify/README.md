# Answer verification

Every question in the bank has had its answer checked. This directory holds
the parts of that check that are repeatable. Critical Reasoning and Reading
Comprehension answers cannot be computed, so those were checked against the
answer key printed in the source document and, separately, re-derived by hand
from the argument or passage before that key was consulted; where the two
disagreed the question was dropped rather than guessed.

Set ids used here — `cr-assumption`, `quant-percentage-ex` and the rest — are
the *source* sets: one per document a batch of questions was transcribed from.
The app no longer practises those directly; at load it re-files every question
under the syllabus topic it tests. These checks deliberately stay on the source
sets, because that is the level at which a printed answer key exists.

## Runnable checks

    node verify/run.js               # re-derives 2,215 answers independently
    node verify/dupes.js             # no question is served twice
    node verify/check-source-keys.js # answers vs the printed source keys
    python3 verify/di4-derive.py     # re-derives the non-DS Data Insights answers
    node verify/coverage.js          # what those checks do and do not cover
    node verify/ui/deep.js           # clicks every control on every surface
    node verify/ui/state.js          # what saved progress does across upgrades
    sh verify/ui/run-all.sh          # all of the above plus the UI sweep

## The explanation layer

The rewritten explanations live in `expl-*.js` at the repo root, keyed
`setId#n` and merged over the questions at load. The question files themselves
are never touched, so everything above still checks the data exactly as it was
transcribed and verified.

Each record has four parts — `steps` (the full method), `fast` (the route that
fits inside GMAT time), `traps` (what each wrong choice is built to catch) and
`take` (the transferable rule). Two checks guard them:

`explain.js` reads the source. A key that matches no question would silently do
nothing, so it reports those; it also catches a `steps` block that announces a
different letter from the verified key, a `traps` block that discusses the
correct answer or names a choice the question does not have, unbalanced `\( \)`
or `[[bold]]` markers, and sections too short to be doing their job.

`ui/expl-render.js` reads the screen: it renders every block through the app's
own escape → bold → KaTeX pipeline and fails on a literal backslash reaching the
reader, an unconverted `[[` marker, or a formula KaTeX could not parse. It
exists because `\$` is correct inside a `\( … \)` span and wrong outside one —
a distinction invisible in the source and obvious to anyone reading the page.

`notation.js` reads the source for typesetting: a power, root, fraction or
comparison written as the ASCII a reader would type (`x^2`, `sqrt(`, `2/3`,
`<=`), a unicode superscript or root sign in prose, an exponent inside `\( \)`
that needs braces (`x^10` typesets as x¹0), an expression split half in and half
out of the delimiters, and every math span parsed with the app's own KaTeX
build. `ui/notation-render.js` then renders every stem, choice, hint, record
and block inside the real page and fails if KaTeX marks an error or a delimiter,
caret or LaTeX command reaches the reader as text.

`dupes.js` guards against the same question being drilled twice. It keys every
stem (whitespace- and markup-insensitive, and prefixed with its passage for RC
and Data Insights, where "The primary purpose of the passage is to" repeats
legitimately) and fails on an identical or near-identical stem with the same
choices. A source question that repeats one already in the bank stays in its
file so the printed-key checks still line up, but carries `dup:"setId#n"`
naming the copy that is served; the app drops it at load, and the check
confirms every such flag points at a question that is itself served.

`answers-700b.js` is generated from the transcription workbook for the
"700–800 Level" Quant book, where every stored answer was derived by a Python
check (brute force for Data Sufficiency) before the record was accepted; the
book's own printed keys were found to be misnumbered and were not trusted.

`answers-bank2.js` is generated the same way from the workbook for the other
course documents (live-session question sets, the coordinate-geometry
"recent questions" file and the DS 436 collection). Every Data Sufficiency
answer there was brute-forced over a grid of values before the record was
accepted, and items whose extraction lost a figure or garbled a statement were
left out rather than guessed. Questions that repeat one already in the bank
carry the `dup` flag described above, so the served bank stays free of repeats
while the workbook keeps the source's numbering.

`ui/deep.js` is the broad net: it opens every pane, clicks every control on it,
and after each click scans what is on screen for the signatures of a broken
template — `undefined`, `NaN`, `[object Object]`, an unexpanded `${`, escaped
markup, a pane that rendered nothing. It then drives the runner at every
difficulty on every section and checks the topic counts add up.

`ui/wakelock.js` stubs the Screen Wake Lock API and checks the policy rather
than the device: the screen is held awake exactly while a question is open and
the setting is on, one lock and no more, released the moment the question
closes. A lock that outlives the question is the failure that matters — it would
sit there draining the battery with nothing on screen.

`ui/state.js` is the narrow one: it seeds saved progress from an older build and
checks it survives, that a difficulty-filtered run scores out of its own slice,
that restoring an old backup refiles it, and that rebuilding your stats does not
erase work done in adaptive sessions. Each check there was written against a bug
that was live at the time, so each one fails if that bug comes back.

`answers.js` recomputes each answer from the numbers in the question. It never
reads the stored key or the stored explanation, so agreement is real evidence
rather than a restatement. A disagreement means either the bank or this file
is wrong, and both times that happened during the original sweep it was worth
knowing.

`answers-uncovered.js` closes the gap the coverage check used to report: the
eight live-session Quant sets, the 700-level arithmetic and rates sets, and the
two Data Sufficiency sets that had been accepted on their printed keys alone.
Each entry was written from the question text without looking at the stored
key. Five of them disagreed with the key on the first run, and every one of the
five turned out to be the derivation's mistake, not the bank's — a misread
count, an assumption that a variable was an integer when the question never
said so, a total that lived in a statement rather than the stem. That is the
check doing its job in both directions: the reconciled entries now document
exactly why the key is right. With it, `coverage.js` reports every served
Quant and Data Insights question as re-derived.

`source-keys.js` records the answer keys exactly as printed in the source
documents, for the sets transcribed from handouts that publish one. Sets whose
printed key is not available to check against are marked `null` rather than
filled in from memory.

## Coverage

| Section | Questions | How verified |
|---|---|---|
| Quant + Data Insights | 2,061 served | every one re-derived: 2,215 entries across `answers.js`, `answers-gaps.js`, `answers-700b.js`, `answers-bank2.js` and `answers-uncovered.js` (the surplus covers flagged repeats), plus `di4-derive.py` and `ds-traps-derive.py` for the sets whose answers are computed from their own source data |
| Critical Reasoning | 857 | 659 against the printed key in the source AND re-derived by hand from the argument before the key was consulted; 198 have no printed key anywhere in the source and were derived from the argument alone, then blind-answered a second time (see below) |
| Reading Comprehension | 179 | against the source's marked answer AND re-derived by hand from the passage before that answer was consulted, then blind-answered a second time (see below) |

The 198 critical reasoning questions with no printed key come from the 700-800
Club practice file, which publishes questions without answers; the one answer
file in the Drive keys a different book. Each answer there was worked out from
the argument and each of the four wrong choices ruled out in writing, and any
question where more than one choice survived that scrutiny was left out rather
than guessed. The set ids are `cr-club-*`. Treat those answers as carefully
reasoned rather than as sourced, and prefer the keyed sets when a topic is
covered by both.

Because those 198 rest on reasoning alone, they were later answered a second
time, blind: every stem and its choices were printed without the key, answered
in batches, and only then compared. 191 matched outright. The seven that did
not were each re-examined, and in every case the stored key held and the blind
answer was the weaker reading — a missed constraint in the stem ("smokers who
smoke one pack a day" rules out "they smoke more cigarettes"), a choice whose
wording was subtly off ("isn't 18" is not "under 18"), or a sufficient
assumption mistaken for the necessary one. The same blind pass over all 179
Reading Comprehension questions matched the key on 175; the four
disagreements likewise resolved to the key on inspection.

`di4-derive.py` covers the four non-Data-Sufficiency Data Insights types. Those
questions have no printed letter key — the real exam poses them as Yes/No
triplets and drop-down completions — so each answer is computed straight from
the table, chart or scenario the question is built on.

## What the sweep found

Wrong keys: `quant-numbersystem-2-2` #21, #8, #57, #30.

Questions with no correct choice, or more than one: `quant-speed-ex` #6,
`quant-numbersystem-2-2` #22, `di-graphics-temp` #4.

Unrecoverable after OCR, removed rather than shipped broken:
`quant-numbersystem-2-2` #10, #25, #50.

Corrupted import: `cr-method-reasoning` #44 was two source questions
interleaved, with their answer choices mixed together. Rebuilt.

Duplicated arguments removed (an abbreviated paraphrase alongside the full
version, in each case with the same answer): `cr-assumption` #1, #2, #3, #4
and `cr-weaken` #3.

Damaged text: four CR explanations truncated mid-word, three that argued the
right answer without ever naming it, and one answer choice that ended with a
slab of instructional boilerplate from the source document.

Found by the later full sweep: 121 choice-E strings across the four 700-level
CR files ended in a stray ` | |`, a table-cell delimiter that survived the
transcription and was being shown to the reader; and `quant-live-3` #14, whose
explanation reasoned correctly to "nothing can be concluded about the median"
and then announced the wrong letter. A bank-wide check that every explanation
announces its own key, and (for the 726 questions with a plain numeric key)
states the key's value somewhere in its working, found nothing else.
