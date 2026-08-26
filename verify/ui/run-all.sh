#!/bin/sh
# Full UI + data health sweep. Run from the repo root: sh verify/ui/run-all.sh
#
# Every stage runs through step(), which keeps the stage's own exit status.
# Piping each command straight into `tail` — the way this script used to work —
# threw that status away: `set -e` saw only tail succeeding, so a stage that
# found problems, or crashed outright, left the sweep reporting success. Now a
# failing stage is announced on the spot and the sweep exits non-zero at the end,
# after running everything else so one failure does not hide the rest.
d=$(dirname "$0")
failed=""

# step <lines-to-show> <label> <command...>
step() {
  lines=$1; label=$2; shift 2
  echo "--- $label ---"
  out=$("$@" 2>&1); status=$?
  echo "$out" | tail -n "$lines"
  if [ "$status" -ne 0 ]; then
    echo "!! $label FAILED (exit $status)"
    failed="$failed $label"
  fi
}

step 3 "data integrity"            node "$d/integrity.js"
step 1 "answer keys"               node "$d/../run.js"
step 1 "printed source keys"       node "$d/../check-source-keys.js"
step 1 "Data Insights derivations" python3 "$d/../di4-derive.py"
step 3 "explanations"              node "$d/../explain.js"
step 3 "explanation render"        node "$d/expl-render.js"
step 5 "UI walkthrough"            node "$d/audit.js"
step 4 "deep crawl"                node "$d/deep.js"
step 4 "saved state"               node "$d/state.js"
step 5 "resilience"                node "$d/robust.js"
step 8 "narrow layout"             node "$d/overflow.js"
step 8 "service worker"            node "$d/sw-test.js"
step 3 "new features"              node "$d/features.js"
step 2 "AI tutor"                  node "$d/ai-tutor.js"
step 2 "screen wake lock"          node "$d/wakelock.js"
step 2 "section mock + drill"      node "$d/mock.js"
step 2 "readiness"                 node "$d/readiness.js"
step 8 "performance"               node "$d/perf.js"

echo
if [ -n "$failed" ]; then
  echo "=== SWEEP FAILED:$failed ==="
  exit 1
fi
echo "=== SWEEP CLEAN ==="
