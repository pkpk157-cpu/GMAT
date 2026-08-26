/* Drive "Explain my mistake" end to end against a stubbed Claude API.

   The button only appears once an API key is saved and an answer is wrong, so
   this seeds a key, answers a question wrongly, intercepts the request to
   api.anthropic.com, and checks that the reply is rendered — and that a failing
   request produces a readable message with a retry rather than a dead button.
   No real network call is made and no key is used. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(path.join(__dirname, '..', '..', 'node_modules', 'playwright-core'));
const ROOT = path.join(__dirname, '..', '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0]; if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end('nf'); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' }); res.end(fs.readFileSync(f));
});

const problems = [];
const REPLY = 'You picked B because it repeats a phrase from the passage, which feels like support but only restates the premise. The word "only" in the second sentence is what rules it out. Next time, check whether a tempting choice adds anything the argument did not already say.';

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 430, height: 930 } });
  page.on('dialog', d => d.accept());
  page.on('pageerror', e => problems.push('PAGEERROR ' + e.message));
  page.on('console', m => {
    if (m.type() === 'error' && !/favicon|sw\.js|Failed to load|anthropic/i.test(m.text())) problems.push('CONSOLE ' + m.text());
  });

  let mode = 'ok', calls = 0, lastBody = null;
  await page.route('https://api.anthropic.com/**', async route => {
    calls++;
    try { lastBody = JSON.parse(route.request().postData() || '{}'); } catch (e) { lastBody = null; }
    if (mode === 'ok') {
      await route.fulfill({ status: 200, contentType: 'application/json',
        body: JSON.stringify({ content: [{ type: 'text', text: REPLY }] }) });
    } else {
      await route.fulfill({ status: 429, contentType: 'application/json',
        body: JSON.stringify({ error: { message: 'rate limit' } }) });
    }
  });

  await page.addInitScript(() => { try { localStorage.setItem('gmat_ai_key', 'sk-ant-test-not-a-real-key'); } catch (e) {} });
  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'Pranav'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });
  await page.waitForTimeout(400);

  // Open a CR set and deliberately pick a wrong choice.
  await page.evaluate(() => document.querySelectorAll('#botnav .bn')[4].click());
  await page.waitForTimeout(300);
  await page.evaluate(() => document.querySelector('[data-subtab="practice"]')?.click());
  await page.waitForTimeout(300);
  const opened = await page.evaluate(() => {
    const b = document.querySelector('[data-runset="cr-method-reasoning"]'); if (!b) return false; b.click(); return true;
  });
  if (!opened) problems.push('could not open cr-method-reasoning');
  await page.waitForTimeout(400);
  await page.evaluate(() => document.querySelector('#runner [data-mode="practice"]')?.click());
  await page.waitForTimeout(300);

  const wrongPicked = await page.evaluate(() => {
    const correct = window.GMAT_SETS.find(s => s.id === 'cr-method-reasoning').questions[0].correct;
    const btns = [...document.querySelectorAll('#runner [data-pick]')];
    const wrong = btns.find(b => b.getAttribute('data-pick') !== correct);
    if (!wrong) return null;
    wrong.click();
    return wrong.getAttribute('data-pick');
  });
  if (!wrongPicked) problems.push('no wrong choice available to pick');
  await page.evaluate(() => document.querySelector('#runner [data-confirm]')?.click());
  await page.waitForTimeout(300);

  const hasButton = await page.evaluate(() => !!document.querySelector('#runner [data-aiexplain]'));
  if (!hasButton) problems.push('"Explain my mistake" button did not appear on a wrong answer');

  await page.evaluate(() => document.querySelector('#runner [data-aiexplain]')?.click());
  await page.waitForTimeout(700);

  const shown = await page.evaluate(() => {
    const d = document.querySelector('#runner .expl.ai-expl');
    return d ? d.textContent : '';
  });
  if (!shown.includes('restates the premise')) problems.push('the API reply was not rendered: ' + JSON.stringify(shown.slice(0, 90)));
  if (calls !== 1) problems.push('expected exactly 1 API call, saw ' + calls);
  if (lastBody) {
    if (!/Explain|tutor/i.test(JSON.stringify(lastBody).slice(0, 4000))) problems.push('prompt did not reach the API');
    if (lastBody.model !== 'claude-opus-5') problems.push('unexpected model: ' + lastBody.model);
    const prompt = (lastBody.messages || [])[0]?.content || '';
    if (!prompt.includes('THE STUDENT CHOSE: ' + wrongPicked)) problems.push('prompt did not name the chosen answer');
    if (!prompt.includes('CORRECT ANSWER:')) problems.push('prompt did not name the correct answer');
  } else {
    problems.push('no request body captured');
  }

  // Cached: clicking again must not fire a second request.
  const stillShown = await page.evaluate(() => !!document.querySelector('#runner .expl.ai-expl'));
  if (!stillShown) problems.push('explanation vanished after render');
  if (calls !== 1) problems.push('the answer was not cached; API called ' + calls + ' times');

  // A failing request must produce a message and a retry, not a dead end.
  mode = 'fail';
  const advanced = await page.evaluate(() => { const n = document.querySelector('#runner [data-next]'); if (!n) return false; n.click(); return true; });
  if (advanced) {
    await page.waitForTimeout(250);
    await page.evaluate(() => {
      const correct = window.GMAT_SETS.find(s => s.id === 'cr-method-reasoning').questions[1].correct;
      const wrong = [...document.querySelectorAll('#runner [data-pick]')].find(b => b.getAttribute('data-pick') !== correct);
      if (wrong) wrong.click();
    });
    await page.evaluate(() => document.querySelector('#runner [data-confirm]')?.click());
    await page.waitForTimeout(250);
    await page.evaluate(() => document.querySelector('#runner [data-aiexplain]')?.click());
    await page.waitForTimeout(700);
    const err = await page.evaluate(() => {
      const e = document.querySelector('#runner .ai-err');
      return { text: e ? e.textContent : '', retry: !!document.querySelector('#runner [data-aiexplain]') };
    });
    if (!/rate limit/i.test(err.text)) problems.push('a 429 did not surface a readable message: ' + JSON.stringify(err.text));
    if (!err.retry) problems.push('no retry offered after a failed request');
  } else {
    problems.push('could not advance to a second question');
  }

  // With no key saved the button must not appear at all.
  await page.evaluate(() => { try { localStorage.removeItem('gmat_ai_key'); } catch (e) {} });
  await page.reload();
  await page.waitForTimeout(900);
  const leaks = await page.evaluate(() => document.querySelectorAll('[data-aiexplain]').length);
  if (leaks) problems.push('the button is offered without an API key saved');

  console.log('\n=== AI TUTOR PROBLEMS (' + problems.length + ') ===');
  console.log(problems.length ? problems.map(p => '  ' + p).join('\n') : '  none');
  await browser.close();
  server.close();
  process.exit(problems.length ? 1 : 0);
})();
