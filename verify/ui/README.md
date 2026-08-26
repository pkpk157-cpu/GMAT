# UI & health checks

Run the lot from the repo root:

    sh verify/ui/run-all.sh

Each script is standalone and serves the app from an in-process HTTP server,
then drives a real Chromium via Playwright. None of them touch your data —
they run in a throwaway browser profile.

| script | what it proves |
|---|---|
| `integrity.js` | Every set and question is well formed: unique ids and numbers, 2–5 non-empty choices, a `correct` that exists among them, non-empty stem/topic/explanation, balanced `[[ ]]` and `\( \)`, no duplicate choices or repeated stems, no answer key skewed past 60% one letter. |
| `audit.js` | Walks every tab, sub-nav pane, the runner in both modes, the jumper, concepts, flash cards, the generator, the log sheet, the adaptive session, the review queue, the focus timer, profile settings and achievements — reporting any page error, console error or dead selector, plus horizontal overflow at three viewport widths. |
| `robust.js` | The app survives damaged saved state (malformed JSON, wrong types, v1 schema, runs pointing at deleted sets), a backup/restore round trip preserves data, submitting a set logs each question exactly once and never double-counts, and the focus timer leaks no intervals. |
| `overflow.js` | Names the specific elements that stick out past a 320px viewport, per tab. |
| `sw-test.js` | First load precaches; a second load fetches only the document; the app fully works offline. |
| `perf.js` | Payload, request count, load timing, tab-switch cost, DOM size and heap. |

`../run.js` and `../check-source-keys.js` cover the answer keys themselves.
