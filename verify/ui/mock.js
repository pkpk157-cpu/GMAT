/* Drive a section mock end to end (bookmark, review, three-edit budget) and a
   mental-math drill. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(require('path').join(__dirname, '..', '..', 'node_modules', 'playwright-core'));
const ROOT = require('path').join(__dirname, '..', '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0]; if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end('nf'); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' }); res.end(fs.readFileSync(f));
});
const problems = [];
(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 430, height: 930 } });
  page.on('dialog', d => d.accept());
  page.on('pageerror', e => problems.push('PAGEERROR ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !/favicon|sw\.js|Failed to load/i.test(m.text())) problems.push('CONSOLE ' + m.text()); });
  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'Mock'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });
  await page.waitForTimeout(500);
  await page.evaluate(() => document.querySelectorAll('#botnav .bn')[2].click());
  await page.waitForTimeout(400);

  /* ---- Section mock: Data Insights (20 questions) ---- */
  const launched = await page.evaluate(() => { const b = document.querySelector('[data-mock="data"]'); if (!b) return false; b.click(); return true; });
  if (!launched) { problems.push('no section-mock launcher on the dashboard'); }
  await page.waitForTimeout(600);
  const started = await page.evaluate(() => !document.getElementById('session').hidden);
  if (!started) problems.push('section mock did not start');

  const shape = await page.evaluate(() => ({
    hasBookmark: !!document.querySelector('#session [data-sessmark]'),
    clock: document.getElementById('ss-timer')?.textContent || null,
  }));
  if (!shape.hasBookmark) problems.push('mock offers no bookmark control');
  if (!shape.clock || !/4[45]:/.test(shape.clock)) problems.push('mock clock reads ' + shape.clock + ', expected ~45:00');

  let answered = 0;
  for (let i = 0; i < 30; i++) {
    if (await page.evaluate(() => !!document.querySelector('#session [data-sessdone]'))) break;
    if (i % 3 === 0) await page.evaluate(() => document.querySelector('#session [data-sessmark]')?.click());
    await page.waitForTimeout(60);
    const picked = await page.evaluate(() => { const b = document.querySelector('#session [data-sesspick="A"]'); if (!b) return false; b.click(); return true; });
    if (!picked) break;
    answered++;
    await page.evaluate(() => document.querySelector('#session [data-sessnext]')?.click());
    await page.waitForTimeout(90);
  }
  const rev = await page.evaluate(() => ({
    onReview: !!document.querySelector('#session [data-sessdone]'),
    budget: document.querySelector('#session .mr-budget')?.textContent?.trim() || null,
    rows: document.querySelectorAll('#session .mr-row').length,
    bookmarked: [...document.querySelectorAll('#session .mr-star')].length,
  }));
  console.log('mock: answered', answered, '| review screen', rev.onReview, '| budget', JSON.stringify(rev.budget), '| rows', rev.rows, '| bookmarked', rev.bookmarked);
  if (!rev.onReview) problems.push('mock never reached the review screen');
  if (rev.rows !== answered) problems.push(`review lists ${rev.rows} rows for ${answered} answers`);
  if (!rev.bookmarked) problems.push('review shows no bookmarked questions');

  // Spend the edit budget, then confirm a fourth edit is refused.
  for (let i = 0; i < 5; i++) {
    await page.evaluate(k => {
      const rows = [...document.querySelectorAll('#session .mr-row')];
      const row = rows[k]; if (!row) return;
      const alt = [...row.querySelectorAll('.mr-o')].find(b => !b.classList.contains('on') && !b.disabled);
      if (alt) alt.click();
    }, i);
    await page.waitForTimeout(120);
  }
  const after = await page.evaluate(() => ({
    budget: document.querySelector('#session .mr-budget')?.textContent?.trim() || null,
    disabled: [...document.querySelectorAll('#session .mr-o')].filter(b => b.disabled).length,
  }));
  console.log('after spending edits: budget', JSON.stringify(after.budget), '| disabled option buttons', after.disabled);
  if (!/0 edits left/.test(after.budget || '')) problems.push('edit budget did not reach zero (got ' + after.budget + ')');
  if (!after.disabled) problems.push('options stayed enabled after the edit budget was spent');

  await page.evaluate(() => document.querySelector('#session [data-sessdone]')?.click());
  await page.waitForTimeout(700);
  const res = await page.evaluate(() => ({
    submitted: !!document.querySelector('#session .rn-score'),
    text: document.getElementById('ss-body')?.textContent?.replace(/\s+/g, ' ').slice(0, 90),
  }));
  console.log('after submit:', res.submitted ? 'results shown' : 'NO RESULTS', '|', res.text);
  if (!res.submitted) problems.push('submitting the mock produced no results screen');
  await page.evaluate(() => document.querySelector('#session [data-sessclose]')?.click());
  await page.waitForTimeout(400);

  /* ---- Mental-math drill ---- */
  await page.evaluate(() => document.querySelectorAll('#botnav .bn')[2].click());
  await page.waitForTimeout(350);
  const mmOpen = await page.evaluate(() => { const b = document.querySelector('[data-mm-open]'); if (!b) return false; b.click(); return true; });
  if (!mmOpen) problems.push('no mental-math launcher');
  await page.waitForTimeout(500);
  if (!(await page.evaluate(() => !document.getElementById('mm').hidden))) problems.push('drill did not open');

  // Solve whatever the drill asks, the way a person would, so scoring is exercised.
  let got = 0, tried = 0;
  for (let i = 0; i < 8; i++) {
    const q = await page.evaluate(() => {
      const el = document.querySelector('#mm .mm-q');
      // KaTeX leaves the original source in an annotation node; prefer it.
      const tex = el?.querySelector('annotation')?.textContent;
      return { raw: (el?.textContent || '').trim(), tex: tex || null };
    });
    let want = null;
    let m;
    if ((m = /^(\d+)% of (\d+)/.exec(q.raw))) want = +m[1] * +m[2] / 100;
    else if (q.tex && (m = /^(\d+)\^2$/.exec(q.tex.trim()))) want = +m[1] * +m[1];
    else if ((m = /^(\d+) split in the ratio 1 : (\d+)/.exec(q.raw))) want = +m[1] / (+m[2] + 1);
    else if ((m = /^(\d+) (increased|decreased) by (\d+)%/.exec(q.raw))) {
      want = m[2] === 'increased' ? +m[1] * (1 + +m[3] / 100) : +m[1] * (1 - +m[3] / 100);
    }
    if (want === null) {   // a fraction-to-percent item; skip it and move on
      await page.evaluate(() => {
        const inp = document.getElementById('mm-in');
        if (inp) { inp.value = '-1'; inp.dispatchEvent(new Event('input', { bubbles: true })); }
        document.querySelector('#mm [data-mm-go]')?.click();
      });
      await page.waitForTimeout(110);
      continue;
    }
    tried++;
    await page.evaluate((v) => {
      const inp = document.getElementById('mm-in');
      if (inp) { inp.value = String(v); inp.dispatchEvent(new Event('input', { bubbles: true })); }
      document.querySelector('#mm [data-mm-go]')?.click();
    }, want);
    await page.waitForTimeout(110);
    const sc = await page.evaluate(() => parseInt(document.querySelector('#mm .mm-score')?.textContent || '0', 10));
    if (sc > got) got = sc;
  }
  if (tried && got < tried) problems.push(`drill scored ${got} of ${tried} correct answers`);

  const mmState = await page.evaluate(() => ({
    score: document.querySelector('#mm .mm-score')?.textContent || null,
    q: document.querySelector('#mm .mm-q')?.textContent?.trim().slice(0, 40) || null,
    clock: document.querySelector('#mm .mm-clock')?.textContent || null,
  }));
  console.log('drill:', JSON.stringify(mmState), '| scripted answers accepted:', got);
  if (!mmState.q) problems.push('drill rendered no question');
  if (!mmState.clock) problems.push('drill rendered no clock');
  await page.evaluate(() => document.getElementById('mm-close').click());
  await page.waitForTimeout(300);
  if (await page.evaluate(() => !document.getElementById('mm').hidden)) problems.push('drill did not close');

  console.log('\nproblems:', problems.length ? problems.join(' | ') : 'none');
  process.exitCode = problems.length ? 1 : 0;
  await browser.close(); server.close();
})();
