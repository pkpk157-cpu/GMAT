# Answer verification

Every question in the bank has had its answer checked. This directory holds
the parts of that check that are repeatable; the Critical Reasoning and
Reading Comprehension questions were verified by hand, since their answers
cannot be computed.

## Runnable checks

    node verify/run.js               # re-derives 407 answers independently
    node verify/check-source-keys.js # 124 answers vs the printed source keys
    node verify/coverage.js          # what run.js does and does not cover

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
| Quant + Data Insights | 569 | 407 re-derived here, 124 against printed source keys, 38 by the derivation recorded in the question's own explanation |
| Critical Reasoning | 154 | by hand — each answer re-derived from the argument before consulting the key |
| Reading Comprehension | 107 | by hand — each answer re-derived from the passage before consulting the key |

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
