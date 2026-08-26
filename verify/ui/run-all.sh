#!/bin/sh
# Full UI + data health sweep. Run from the repo root: sh verify/ui/run-all.sh
set -e
d=$(dirname "$0")
echo "--- data integrity ---";       node "$d/integrity.js"
echo "--- answer keys ---";          node "$d/../run.js" | tail -1
echo "--- printed source keys ---";  node "$d/../check-source-keys.js" | tail -1
echo "--- Data Insights derivations ---"; python3 "$d/../di4-derive.py" | tail -1
echo "--- UI walkthrough ---";       node "$d/audit.js" | tail -5
echo "--- deep crawl ---";           node "$d/deep.js" | tail -4
echo "--- saved state ---";          node "$d/state.js" | tail -4
echo "--- resilience ---";           node "$d/robust.js" | tail -5
echo "--- narrow layout ---";        node "$d/overflow.js"
echo "--- service worker ---";       node "$d/sw-test.js"
echo "--- new features ---";       node "$d/features.js" | tail -3
echo "--- AI tutor ---";          node "$d/ai-tutor.js" | tail -2
echo "--- section mock + drill ---"; node "$d/mock.js" | tail -2
echo "--- readiness ---";          node "$d/readiness.js" | tail -2
echo "--- performance ---";          node "$d/perf.js"
