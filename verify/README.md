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

    node verify/run.js               # re-derives 407 answers independently
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

`source-keys.js` records the answer keys exactly as printed in the source
documents, for the sets transcribed from handouts that publish one. Sets whose
printed key is not available to check against are marked `null` rather than
filled in from memory.

## Coverage

| Section | Questions | How verified |
|---|---|---|
| Quant + Data Insights | 707 | 407 re-derived by `answers.js`, 26 by `di4-derive.py`, the rest against printed source keys or by the derivation recorded in the question's own explanation |
| Critical Reasoning | 528 | against the printed key in the source AND re-derived by hand from the argument before the key was consulted |
| Reading Comprehension | 155 | against the source's marked answer AND re-derived by hand from the passage before that answer was consulted |

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
