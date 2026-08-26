/* The "keep the screen awake" setting, against a stubbed Screen Wake Lock API.

   Headless Chromium may refuse a real screen lock, and a test that depends on
   the device's power state would be flaky anyway — so navigator.wakeLock is
   replaced with a recorder before the page loads. What matters is the policy:
   a lock is held exactly while a question surface is open and the setting is
   on, and released the moment it is not. A lock that outlives the question is
   the real failure here: it would sit there burning the user's battery. */
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
const note = (msg) => problems.push('  ' + msg);

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 430, height: 930 } });
  page.on('pageerror', e => note('PAGEERROR ' + e.message));
  page.on('console', m => {
    if (m.type() === 'error' && !/favicon|sw\.js|Failed to load|anthropic/i.test(m.text())) note('CONSOLE ' + m.text());
  });
  page.on('dialog', d => d.accept());

  await page.addInitScript(() => {
    window.__wake = { requests: 0, releases: 0, held: 0 };
    Object.defineProperty(navigator, 'wakeLock', {
      configurable: true,
      value: {
        request: async (type) => {
          if (type !== 'screen') throw new Error('unexpected wake lock type: ' + type);
          window.__wake.requests++; window.__wake.held++;
          const listeners = [];
          return {
            type: 'screen', released: false,
            addEventListener: (ev, fn) => { if (ev === 'release') listeners.push(fn); },
            release: async () => { window.__wake.releases++; window.__wake.held--; listeners.forEach(f => f()); },
          };
        },
      },
    });
  });

  const wake = () => page.evaluate(() => window.__wake);
  const open = (tab) => page.evaluate(async k => {
    document.querySelectorAll('#botnav .bn')[k].click();
  }, tab);

  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'Wake Test'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });
  await page.waitForTimeout(400);

  // Browsing the app is not answering a question: nothing should be held.
  for (const t of [0, 2, 4]) { await open(t); await page.waitForTimeout(250); }
  let w = await wake();
  if (w.held) note(`the screen is held awake while just browsing (held=${w.held})`);
  if (w.requests) note(`${w.requests} wake lock(s) requested before any question was opened`);

  // Opening a topic must take exactly one lock.
  await open(4); await page.waitForTimeout(300);
  await page.evaluate(() => document.querySelector('[data-subtab="practice"]')?.click());
  await page.waitForTimeout(300);
  await page.evaluate(() => document.querySelector('#view [data-runset]')?.click());
  await page.waitForTimeout(450);
  w = await wake();
  if (w.held !== 1) note(`opening a topic left ${w.held} locks held, expected 1`);
  const afterOpen = w.requests;

  // Re-rendering the runner must not stack up more locks.
  await page.evaluate(() => document.querySelector('#runner [data-mode="practice"]')?.click());
  await page.waitForTimeout(250);
  await page.evaluate(() => document.querySelector('#runner [data-pick="A"]')?.click());
  await page.waitForTimeout(150);
  w = await wake();
  if (w.requests !== afterOpen) note(`answering re-requested the lock ${w.requests - afterOpen} more time(s)`);
  if (w.held !== 1) note(`held=${w.held} while answering, expected 1`);

  // Closing the question must release it.
  await page.evaluate(() => document.getElementById('rn-close')?.click());
  await page.waitForTimeout(400);
  w = await wake();
  if (w.held !== 0) note(`closing the runner left ${w.held} lock(s) held — the screen would stay lit`);

  // A section mock counts as answering too.
  await open(2); await page.waitForTimeout(300);
  const mockStarted = await page.evaluate(() => {
    const b = document.querySelector('#view [data-mock]'); if (!b) return false; b.click(); return true;
  });
  if (mockStarted) {
    await page.waitForTimeout(700);
    w = await wake();
    if (w.held !== 1) note(`a section mock held ${w.held} locks, expected 1`);
    // Mid-session the only way out is the ✕ in the header; [data-sessclose]
    // exists on the results screen only.
    await page.evaluate(() => document.getElementById('ss-close')?.click());
    await page.waitForTimeout(500);
    w = await wake();
    if (w.held !== 0) note(`leaving a section mock left ${w.held} lock(s) held`);
  } else {
    note('no section mock button to start from Overall');
  }

  // Turning the setting off must stop it happening at all.
  await page.evaluate(() => document.getElementById('btn-profile')?.click());
  await page.waitForTimeout(400);
  const toggled = await page.evaluate(() => {
    const c = document.getElementById('wake-on'); if (!c) return null;
    const was = c.checked; c.checked = false; c.dispatchEvent(new Event('change', { bubbles: true }));
    return was;
  });
  if (toggled === null) note('no "keep the screen awake" toggle in the profile');
  if (toggled === false) note('the setting was off by default');
  await page.waitForTimeout(300);
  await page.evaluate(() => { const e = document.getElementById('profile'); if (e) e.hidden = true; document.body.style.overflow = ''; });
  await page.waitForTimeout(200);

  const before = (await wake()).requests;
  await open(4); await page.waitForTimeout(300);
  await page.evaluate(() => document.querySelector('[data-subtab="practice"]')?.click());
  await page.waitForTimeout(300);
  await page.evaluate(() => document.querySelector('#view [data-runset]')?.click());
  await page.waitForTimeout(450);
  w = await wake();
  if (w.requests !== before) note('a lock was taken with the setting turned off');
  if (w.held) note(`held=${w.held} with the setting turned off`);
  await page.evaluate(() => document.getElementById('rn-close')?.click());
  await page.waitForTimeout(300);

  // And the choice has to survive a reload.
  await page.reload(); await page.waitForTimeout(900);
  const persisted = await page.evaluate(() => JSON.parse(localStorage.getItem('gmat_tracker_v2') || '{}').wake);
  if (persisted !== false) note('turning the setting off did not persist (wake=' + JSON.stringify(persisted) + ')');

  console.log('\n=== WAKE LOCK PROBLEMS (' + problems.length + ') ===');
  console.log(problems.length ? problems.join('\n') : '  none');
  await browser.close(); server.close();
  process.exit(problems.length ? 1 : 0);
})();
