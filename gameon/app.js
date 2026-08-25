/* ==========================================================================
   app.js — UI: tabs, rendering for every competition, refresh flow, admin.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.GO_STORE, K = window.GO_COMPUTE;
  var ME_KEY = "go12.me", THEME_KEY = "go12.theme";
  var state = { view: "classic", me: lsGet(ME_KEY), monthKey: null, seasonKey: null, group: 0, h2hComp: "UCL" };

  /* Minimal line icons (24px, currentColor). */
  var ICONS = {
    classic: '<path d="M6 4h12v3a6 6 0 0 1-12 0V4Z"/><path d="M6 5H4v1a3 3 0 0 0 3 3M18 5h2v1a3 3 0 0 1-3 3"/><path d="M12 13v3M9 20h6M10 20a2 2 0 0 1 4 0"/>',
    monthly: '<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3"/><circle cx="8.5" cy="13.5" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="13.5" r="1" fill="currentColor" stroke="none"/>',
    lms: '<path d="M12 3s4 3.5 4 8a4 4 0 0 1-8 0c0-1.6.8-3 1.5-4"/><path d="M12 21a6 6 0 0 0 6-6c0-1-.2-2-.6-2.9"/><path d="M12 21a6 6 0 0 1-6-6"/>',
    pyramid: '<path d="M12 4 4 19h16L12 4Z"/><path d="M7.7 12.5h8.6M6 16h12"/>',
    h2h: '<circle cx="12" cy="12" r="8.5"/><path d="m12 7 3 2.2-1.1 3.5h-3.8L9 9.2 12 7Z"/><path d="m12 7 .0-3M9 9.2 6.2 7.6M14.9 9.2l2.9-1.6M13.9 12.7l1.9 2.5M10.1 12.7 8.2 15.2"/>',
    person: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>',
    auto: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18Z" fill="currentColor" stroke="none"/>',
    refresh: '<path d="M20 11a8 8 0 1 0-.6 4"/><path d="M20 4v5h-5"/>',
    download: '<path d="M12 4v10m0 0 4-4m-4 4-4-4"/><path d="M5 19h14"/>',
    upload: '<path d="M12 20V10m0 0 4 4m-4-4-4 4"/><path d="M5 5h14"/>',
    book: '<path d="M5 4.5A2 2 0 0 1 7 3h11v15H7a2 2 0 0 0-2 2V4.5Z"/><path d="M5 18.5A2 2 0 0 0 7 21h11"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>'
  };
  function svg(name, size) {
    return '<svg viewBox="0 0 24 24" width="' + (size || 24) + '" height="' + (size || 24) +
      '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      (ICONS[name] || "") + '</svg>';
  }

  var TABS = [
    { id: "classic", label: "Classic", icon: "classic" },
    { id: "monthly", label: "Monthly", icon: "monthly" },
    { id: "lms",     label: "LMS",     icon: "lms" },
    { id: "pyramid", label: "Pyramid", icon: "pyramid" },
    { id: "h2h",     label: "UCL",     icon: "h2h" }
  ];

  /* ---- tiny DOM/util helpers ------------------------------------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function num(n) { if (n == null || isNaN(n)) return "—"; return Number(n).toLocaleString("en-US"); }
  function money(n) { return num(n); }
  function lsGet(k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function ordinal(n) { var s = ["th","st","nd","rd"], v = n % 100; return n + (s[(v-20)%10] || s[v] || s[0]); }

  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }
  function modal(title, bodyHtml) {
    $("#modalTitle").textContent = title; $("#modalBody").innerHTML = bodyHtml;
    $("#modalBack").classList.add("show");
    return $("#modalBody");
  }
  function closeModal() { $("#modalBack").classList.remove("show"); }

  /* ---- profile sheet --------------------------------------------------- */
  function openProfile() {
    var ds = S.dataset();
    var me = null;
    if (ds && state.me) me = ds.managers.filter(function (m) { return +m.id === +state.me; })[0];
    var freshness = ds
      ? (ds.managers.length + " managers · GW " + (K.currentGw(ds) || "?") + " · updated " + new Date(ds.updatedAt).toLocaleDateString())
      : "No data loaded yet";
    var theme = getTheme();

    var h = '';
    h += '<div class="profile-hd"><div class="av">' + svg("person", 24) + '</div>' +
      '<div><div class="who">' + esc(me ? me.entryName : "Your team") + '</div>' +
      '<div class="sub">' + esc(me ? me.playerName : "Link your FPL entry to highlight yourself") + '</div></div></div>';

    h += '<label class="field" style="margin-top:10px"><span class="lab">My team (FPL entry ID)</span>' +
      '<div style="display:flex;gap:8px"><input class="in" id="pfMe" value="' + esc(state.me || "") + '" placeholder="e.g. 1234567" inputmode="numeric">' +
      '<button class="btn" id="pfMeSave">Save</button></div></label>';

    h += '<div class="menu"><div class="lab-sm">Appearance</div>' +
      '<div class="seg" id="pfTheme">' +
      segBtn("system", "auto", "System", theme) +
      segBtn("light", "sun", "Light", theme) +
      segBtn("dark", "moon", "Dark", theme) +
      '</div></div>';

    h += '<div class="menu">' +
      menuItem("pfRefresh", "refresh", "Refresh from FPL") +
      menuItem("pfRules", "book", "Rules & prize tables") +
      menuItem("pfSettings", "gear", "League settings & admin") +
      '<div class="divider"></div>' +
      menuItem("pfExport", "download", "Export data file") +
      menuItem("pfImport", "upload", "Import data file") +
      '</div>';

    h += '<div class="note" style="margin-top:14px;text-align:center">' + esc(freshness) + '</div>';

    $("#profileBody").innerHTML = h;
    $("#profileBack").classList.add("show");

    $("#pfMeSave").addEventListener("click", function () {
      var v = parseInt($("#pfMe").value, 10);
      state.me = isNaN(v) ? null : v; lsSet(ME_KEY, state.me);
      toast("Saved"); render(); openProfile();
    });
    $all("#pfTheme button").forEach(function (b) {
      b.addEventListener("click", function () { applyTheme(b.getAttribute("data-th")); openProfile(); });
    });
    $("#pfRefresh").addEventListener("click", function () { closeProfile(); startRefresh(); });
    $("#pfRules").addEventListener("click", function () { closeProfile(); location.hash = "rules"; });
    $("#pfSettings").addEventListener("click", function () { closeProfile(); location.hash = "settings"; });
    $("#pfExport").addEventListener("click", function () {
      var bundle = S.exportBundle();
      if (!bundle.dataset) { toast("Nothing to export — refresh first"); return; }
      download("data.json", JSON.stringify(bundle)); toast("Exported data.json");
    });
    $("#pfImport").addEventListener("click", function () { importFile(function () { closeProfile(); }); });
  }
  function closeProfile() { $("#profileBack").classList.remove("show"); }
  function segBtn(val, icon, label, cur) {
    return '<button data-th="' + val + '" class="' + (cur === val ? "on" : "") + '">' + svg(icon, 16) + label + '</button>';
  }
  function menuItem(id, icon, label) {
    return '<button id="' + id + '">' + svg(icon, 19) + esc(label) + '</button>';
  }
  function importFile(after) {
    var inp = document.createElement("input");
    inp.type = "file"; inp.accept = "application/json"; inp.style.display = "none";
    inp.addEventListener("change", function (e) {
      var f = e.target.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try { S.importBundle(JSON.parse(rd.result)).then(function () { toast("Imported"); updateDataState(); render(); if (after) after(); }); }
        catch (err) { toast("Invalid file"); }
      };
      rd.readAsText(f);
    });
    document.body.appendChild(inp); inp.click();
    setTimeout(function () { document.body.removeChild(inp); }, 60000);
  }

  /* ---- boot ------------------------------------------------------------ */
  function boot() {
    buildNav();
    $("#btnProfile").innerHTML = svg("person", 20);
    $("#btnProfile").addEventListener("click", openProfile);
    $("#modalClose").addEventListener("click", closeModal);
    $("#modalBack").addEventListener("click", function (e) { if (e.target === $("#modalBack")) closeModal(); });
    $("#profileBack").addEventListener("click", function (e) { if (e.target === $("#profileBack")) closeProfile(); });
    window.addEventListener("hashchange", syncFromHash);

    S.load().then(function () {
      syncFromHash();
      updateDataState();
    });
  }

  function buildNav() {
    var nav = $("#navbar");
    nav.innerHTML = TABS.map(function (t) {
      return '<button class="navitem" data-tab="' + t.id + '">' + svg(t.icon) + '<span>' + esc(t.label) + '</span></button>';
    }).join("");
    $all(".navitem", nav).forEach(function (b) {
      b.addEventListener("click", function () { location.hash = b.getAttribute("data-tab"); });
    });
  }

  function syncFromHash() {
    var h = (location.hash || "#classic").replace("#", "");
    var parts = h.split("/");
    var view = parts[0];
    var known = TABS.map(function (t) { return t.id; }).concat(["rules", "settings", "home"]);
    if (known.indexOf(view) === -1) view = "classic";
    state.view = view;
    if (view === "monthly" && parts[1]) state.monthKey = parts[1];
    if (view === "pyramid" && parts[1]) state.seasonKey = parts[1];
    render();
  }

  function setActiveView() {
    $all(".navitem").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-tab") === state.view); });
    $all(".view").forEach(function (v) { v.classList.toggle("active", v.getAttribute("data-view") === state.view); });
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function updateDataState() { /* data freshness now lives in the profile sheet */ }

  /* ---- theme ----------------------------------------------------------- */
  function getTheme() { var t = lsGet(THEME_KEY); return (t === "light" || t === "dark") ? t : "system"; }
  function applyTheme(pref) {
    if (pref === "system") { document.documentElement.removeAttribute("data-theme"); localStorage.removeItem(THEME_KEY); }
    else { document.documentElement.setAttribute("data-theme", pref); lsSet(THEME_KEY, pref); }
  }

  /* ---- render dispatch ------------------------------------------------- */
  function render() {
    setActiveView();
    var host = $('.view[data-view="' + state.view + '"]');
    if (!host) return;
    var ds = S.dataset();

    if (state.view === "settings") return renderSettings(host);
    if (state.view === "rules") return renderRules(host);

    if (!ds || !ds.managers || !ds.managers.length) {
      host.innerHTML = emptyState();
      var b = $("#emptyCta", host); if (b) b.addEventListener("click", function () { location.hash = "settings"; });
      var r = $("#emptyRefresh", host); if (r) r.addEventListener("click", startRefresh);
      return;
    }

    if (state.view === "home") return renderHome(host, ds);
    if (state.view === "classic") return renderClassic(host, ds);
    if (state.view === "monthly") return renderMonthly(host, ds);
    if (state.view === "lms") return renderLms(host, ds);
    if (state.view === "h2h") return renderH2h(host, ds);
    if (state.view === "pyramid") return renderPyramid(host, ds);
  }

  function emptyState() {
    var cfg = S.config();
    var hasId = !!cfg.classicLeagueId;
    return '<div class="empty"><div class="big">🏆</div>' +
      '<h3>Welcome to Game On V12</h3>' +
      '<p class="note">' + (hasId
        ? 'League ID is set. Pull the latest data from FPL to populate every tab.'
        : 'First, add your <b>Classic League ID</b> in Settings, then refresh.') + '</p>' +
      '<div class="btnrow" style="justify-content:center;margin-top:16px">' +
      (hasId ? '<button class="btn primary" id="emptyRefresh">↻ Refresh from FPL</button>' : '') +
      '<button class="btn" id="emptyCta">Open Settings</button>' +
      '</div></div>';
  }

  /* ====================================================================== */
  /* HOME                                                                   */
  /* ====================================================================== */
  function renderHome(host, ds) {
    var cfg = S.config();
    var classic = K.classic(ds);
    var lms = K.lms(ds);
    var gw = K.currentGw(ds);
    var finished = K.finishedGws(ds).length;
    var leader = classic[0];
    var pot = cfg.joiningFee ? cfg.joiningFee * ds.managers.length : null;

    var h = '';
    h += '<div class="grid cols-4">' +
      stat(ds.managers.length, "Managers") +
      stat(gw || "—", "Current GW") +
      stat(finished + "/" + cfg.totalGameweeks, "GWs scored") +
      stat(lms.survivorsCount, "LMS alive") +
      '</div>';

    if (pot) h += '<div class="grid cols-2" style="margin-top:14px">' +
      stat(money(pot), "Prize pool (est.)") +
      stat(money(cfg.joiningFee), "Joining fee") + '</div>';

    // Snapshot cards
    h += '<div class="section-title"><h2>Where things stand</h2><div class="rule"></div></div>';
    h += '<div class="grid cols-2">';

    h += linkCard("classic", "🏆 Classic League", leader
      ? '<b>' + esc(leader.entryName) + '</b> leads with <b>' + num(leader.total) + '</b> pts'
        + '<div class="note">' + esc(leader.playerName) + '</div>'
      : 'No standings yet');

    var lmsLine = lms.champion
      ? '👑 <b>' + esc(lms.champion.name) + '</b> is the Last Manager Standing!'
      : '<b>' + lms.survivorsCount + '</b> still alive · ' + finished + ' GWs played';
    h += linkCard("lms", "🎯 Last Manager Standing", lmsLine);

    var mExpand = K.monthly(ds).filter(function (m) { return m.played > 0; });
    var curMonth = mExpand.length ? mExpand[mExpand.length - 1] : null;
    h += linkCard("monthly", "📅 Monthly Race", curMonth && curMonth.rows.length
      ? curMonth.name + ' leader: <b>' + esc(curMonth.rows[0].entryName) + '</b> (' + num(curMonth.rows[0].score) + ')'
        + (curMonth.complete ? ' <span class="pill gold">final</span>' : ' <span class="pill live">live</span>')
      : 'Awaiting first gameweek');

    var pyr = K.pyramid(ds);
    var s1 = pyr.seasons[0];
    var eliteLeader = s1 && s1.divisions[0] && s1.divisions[0].rows[0];
    h += linkCard("pyramid", "🔺 Pyramid Battle", eliteLeader
      ? s1.name + ' · Elite top: <b>' + esc(eliteLeader.name) + '</b>'
      : '4 divisions · 3 mini-seasons');

    h += '</div>';

    // Data freshness
    var when = new Date(ds.updatedAt);
    h += '<div class="section-title"><h2>Data</h2><div class="rule"></div></div>';
    h += '<div class="card pad"><div class="bd">' +
      '<div class="note">Last updated <b>' + when.toLocaleString() + '</b> from FPL' +
      (ds._failed ? ' · <span class="note warn">' + ds._failed + ' manager histories failed to load — refresh again</span>' : '') +
      '</div><div class="btnrow" style="margin-top:12px">' +
      '<button class="btn primary" id="homeRefresh">↻ Refresh</button>' +
      '<button class="btn" id="homeSettings">Settings</button></div></div></div>';

    host.innerHTML = h;
    $all(".linkcard", host).forEach(function (c) {
      c.addEventListener("click", function () { location.hash = c.getAttribute("data-go"); });
    });
    $("#homeRefresh", host).addEventListener("click", startRefresh);
    $("#homeSettings", host).addEventListener("click", function () { location.hash = "settings"; });
  }

  function stat(k, l) { return '<div class="stat"><div class="k">' + esc(k) + '</div><div class="l">' + esc(l) + '</div></div>'; }
  function linkCard(go, title, body) {
    return '<div class="card linkcard" data-go="' + go + '" style="cursor:pointer">' +
      '<div class="hd"><h3>' + title + '</h3><span class="sub">›</span></div>' +
      '<div class="bd"><div class="note" style="color:var(--ink-soft);font-size:13.5px">' + body + '</div></div></div>';
  }

  /* ====================================================================== */
  /* CLASSIC                                                                */
  /* ====================================================================== */
  function renderClassic(host, ds) {
    var rows = K.classic(ds);
    var h = '';

    h += '<div class="section-title"><h2>Classic League</h2><div class="rule"></div>' +
      '<span class="chip">' + esc(ds.league && ds.league.name ? ds.league.name : "Overall") + '</span></div>';

    h += '<label class="field" style="margin-bottom:12px">' +
      '<input class="in" id="classicSearch" placeholder="Search manager or team…"></label>';

    h += '<div class="freeze"><table class="t"><thead><tr>' +
      '<th class="num">#</th><th>Team</th><th class="num">GW</th><th class="num">Total</th><th class="num">Move</th><th class="num">Prize</th>' +
      '</tr></thead><tbody id="classicBody">' + classicRows(rows) + '</tbody></table></div>';

    h += '<div style="margin-top:14px">' + prizeReferenceCard() + '</div>';

    host.innerHTML = h;
    var search = $("#classicSearch", host);
    search.addEventListener("input", function () {
      var q = search.value.toLowerCase().trim();
      var filtered = !q ? rows : rows.filter(function (r) {
        return (r.entryName + " " + r.playerName).toLowerCase().indexOf(q) !== -1;
      });
      $("#classicBody", host).innerHTML = classicRows(filtered);
    });
  }

  function classicRows(rows) {
    return rows.map(function (r) {
      var mv = r.move > 0 ? '<span class="move up">▲' + r.move + '</span>'
             : r.move < 0 ? '<span class="move down">▼' + Math.abs(r.move) + '</span>'
             : '<span class="move flat">–</span>';
      var rc = r.computedRank <= 3 ? "rk" + r.computedRank : "";
      return '<tr' + (isMe(r.id) ? ' class="me"' : '') + '>' +
        '<td class="num"><span class="rankcell"><span class="r ' + rc + '">' + r.computedRank + '</span></span></td>' +
        '<td class="name"><span class="who">' + esc(r.entryName) + '</span><div class="mgr">' + esc(r.playerName) + '</div></td>' +
        '<td class="num">' + num(r.eventTotal) + '</td>' +
        '<td class="num"><b>' + num(r.total) + '</b></td>' +
        '<td class="num">' + mv + '</td>' +
        '<td class="num">' + (r.prize ? '<span class="prize">' + money(r.prize) + '</span>' : '') + '</td>' +
        '</tr>';
    }).join("");
  }

  function podiumCard(cls, medal, r, place) {
    return '<div class="p ' + cls + '"><div class="medal">' + medal + '</div>' +
      '<div class="amt">' + money(r.prize) + '</div>' +
      '<div class="who">' + esc(r.entryName) + '</div>' +
      '<div class="sub">' + esc(r.playerName) + ' · ' + num(r.total) + ' pts</div></div>';
  }

  function prizeReferenceCard() {
    var p = S.config().classicPrizes;
    var rows = '';
    Object.keys(p.exact).forEach(function (k) {
      rows += '<tr><td>' + ordinal(+k) + ' place</td><td class="num">' + money(p.exact[k]) + '</td></tr>';
    });
    (p.ranges || []).forEach(function (r) {
      var label = r.from === r.to ? ordinal(r.from) : (ordinal(r.from) + " – " + ordinal(r.to));
      rows += '<tr><td>' + label + '</td><td class="num">' + money(r.amount) + '</td></tr>';
    });
    return '<div class="card"><div class="hd"><h3>Prize breakdown</h3></div><div class="bd">' +
      '<table class="prizetable">' + rows + '</table></div></div>';
  }

  /* ====================================================================== */
  /* MONTHLY                                                                */
  /* ====================================================================== */
  function renderMonthly(host, ds) {
    var months = K.monthly(ds);
    var active = months.filter(function (m) { return m.played > 0; });
    var cur = state.monthKey && months.some(function (m) { return m.key === state.monthKey; })
      ? state.monthKey
      : (active.length ? active[active.length - 1].key : months[0].key);
    state.monthKey = cur;

    var h = '<div class="section-title"><h2>Monthly Winners</h2><div class="rule"></div></div>';
    h += '<label class="field"><span class="lab">Month</span><select class="in" id="monthSel">' +
      months.map(function (m) {
        var badge = m.complete ? " — final" : (m.played > 0 ? " — live" : " — upcoming");
        return '<option value="' + m.key + '"' + (m.key === cur ? " selected" : "") + '>' + esc(m.name + badge) + '</option>';
      }).join("") + '</select></label>';

    var M = months.filter(function (m) { return m.key === cur; })[0];
    h += '<div id="monthPanel">' + monthPanel(M) + '</div>';

    host.innerHTML = h;
    $("#monthSel", host).addEventListener("change", function () {
      state.monthKey = this.value;
      location.hash = "monthly/" + this.value;
    });
  }

  function monthPanel(M) {
    if (!M) return '';
    var statusPill = M.complete ? '<span class="pill gold">Final</span>'
      : M.played > 0 ? '<span class="pill live">Live · GW ' + M.played + '/' + M.total + '</span>'
      : '<span class="pill">Not started</span>';
    var h = '<div class="section-title" style="margin-top:6px"><h2>' + esc(M.name) + '</h2><div class="rule"></div>' +
      '<span class="chip">GW ' + M.gws.join(", ") + '</span></div>';
    h += '<div style="margin-bottom:10px">' + statusPill + '</div>';

    if (!M.rows.length) { return h + '<div class="callout">No gameweeks scored yet for ' + esc(M.name) + '.</div>'; }

    h += '<div class="freeze"><table class="t"><thead><tr><th class="num">#</th><th>Team</th><th class="num">Points</th><th class="num">Bench</th><th class="num">Prize</th></tr></thead><tbody>';
    h += M.rows.map(function (r) {
      var rc = r.pos <= 3 ? "rk" + r.pos : "";
      return '<tr' + (isMe(r.id) ? ' class="me"' : '') + '><td class="num"><span class="r ' + rc + '">' + r.pos + '</span></td>' +
        '<td class="name"><span class="who">' + esc(r.entryName) + '</span><div class="mgr">' + esc(r.playerName) + '</div></td>' +
        '<td class="num"><b>' + num(r.score) + '</b></td><td class="num">' + num(r.bench) + '</td>' +
        '<td class="num">' + (r.prize ? '<span class="prize">' + money(r.prize) + '</span>' : '') + '</td></tr>';
    }).join("");
    h += '</tbody></table></div>';
    h += '<div class="note" style="margin-top:8px">Monthly score includes hits. Ties shown by bench points; deeper tie-breaks (goals/CS/assists) can be set in Admin.</div>';
    return h;
  }

  /* ====================================================================== */
  /* LMS                                                                    */
  /* ====================================================================== */
  function renderLms(host, ds) {
    var lms = K.lms(ds);
    var cfg = S.config();
    var started = ds.managers.length;

    var h = '<div class="section-title"><h2>Last Manager Standing</h2><div class="rule"></div>' +
      '<span class="chip">Only 1 can stand</span></div>';

    h += '<div class="grid cols-4">' +
      stat(started, "Started") +
      stat(lms.survivorsCount, "Still alive") +
      stat(lms.finishedCount, "GWs played") +
      stat(started - lms.survivorsCount, "Eliminated") + '</div>';

    if (lms.champion) {
      h += '<div class="card" style="margin-top:14px;border-color:var(--gold)"><div class="bd" style="text-align:center">' +
        '<div style="font-size:34px">👑</div><h3 style="margin:6px 0">' + esc(lms.champion.name) + '</h3>' +
        '<div class="note">The Last Manager Standing — ' + money(lms.prizes.champion) + '</div></div></div>';
    }

    // Prizes
    h += '<div class="grid cols-3" style="margin-top:14px">' +
      prizeTile("🏆 Champion", lms.prizes.champion, "g1") +
      prizeTile("🥈 Runner-up", lms.prizes.runnerUp, "g2") +
      prizeTile("🥉 3rd place", lms.prizes.third, "g3") + '</div>';

    // Survivors
    if (lms.survivorsCount > 1) {
      h += '<div class="section-title"><h2>Survivors (' + lms.survivorsCount + ')</h2><div class="rule"></div></div>';
      h += '<div class="card"><div class="bd">' + lms.survivors.map(function (s) {
        return '<span class="pill live" style="margin:3px">' + esc(s.name) + '</span>';
      }).join(" ") + '</div></div>';
    }

    // Recent eliminations
    var recent = lms.perGw.slice(-4).reverse();
    if (recent.length) {
      h += '<div class="section-title"><h2>Recent eliminations</h2><div class="rule"></div></div>';
      recent.forEach(function (g) {
        h += '<div class="card"><div class="hd"><h3>GW ' + g.gw + '</h3><span class="sub">' + g.eliminated.length + ' out</span></div><div class="bd">';
        h += g.eliminated.length ? g.eliminated.map(function (e) {
          return '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--line)">' +
            '<span class="pill out">' + esc(e.name) + '</span><span class="note">' + num(e.score) + ' pts · bench ' + num(e.bench) + '</span></div>';
        }).join("") : '<div class="note">No eliminations recorded.</div>';
        h += '</div></div>';
      });
    }

    // Elimination grid (two columns, like the poster)
    h += '<div class="section-title"><h2>Elimination grid</h2><div class="rule"></div>' +
      '<span class="chip">SOG=start · EOG=end</span></div>';
    var g = lms.grid, mid = Math.ceil(g.length / 2);
    h += '<div class="lmsgrid">' + gridTable(g.slice(0, mid)) + gridTable(g.slice(mid)) + '</div>';

    host.innerHTML = h;
  }

  function gridTable(rows) {
    var body = rows.map(function (r) {
      var cls = r.eliminated === null ? "" : (r.eog === 1 ? "champ" : "now");
      var elim = r.eliminated === null ? '<span class="note">' + r.expected + '</span>' : '<b>' + r.eliminated + '</b>';
      return '<tr class="' + cls + '"><td>GW' + r.gw + '</td><td class="num">' + r.sog + '</td>' +
        '<td class="num">' + elim + '</td><td class="num">' + (r.eog === 1 ? '🏆 1' : r.eog) + '</td></tr>';
    }).join("");
    return '<div class="card"><div class="tablewrap"><table class="t"><thead><tr><th>GW</th><th class="num">SOG</th><th class="num">Out</th><th class="num">EOG</th></tr></thead><tbody>' + body + '</tbody></table></div></div>';
  }
  function prizeTile(label, amount, cls) {
    return '<div class="stat"><div class="k">' + money(amount) + '</div><div class="l">' + esc(label) + '</div></div>';
  }

  /* ====================================================================== */
  /* H2H (Game On UCL)                                                      */
  /* ====================================================================== */
  function renderH2h(host, ds) {
    var h2h = K.h2h(ds);
    var cfg = S.config();
    var h = '<div class="section-title"><h2>Game On UCL — H2H</h2><div class="rule"></div>' +
      '<span class="chip">' + h2h.groups.length + ' groups</span></div>';

    // Prizes
    h += '<div class="grid cols-4">' +
      prizeTile("🏆 UCL Winner", h2h.prizes.ucl.winner, "") +
      prizeTile("🥈 UCL Runner-up", h2h.prizes.ucl.runnerUp, "") +
      prizeTile("🏆 UEL Winner", h2h.prizes.uel.winner, "") +
      prizeTile("🥈 UEL Runner-up", h2h.prizes.uel.runnerUp, "") + '</div>';

    if (!h2h.groupsConfigured) {
      h += '<div class="callout" style="margin-top:14px">Groups are <b>auto-seeded</b> by league rank (16 balanced groups). ' +
        'To match your real draw, set the group rosters in <b>Settings → Admin → H2H groups</b>. ' +
        'Group tables below follow FPL gameweek scores as the rules specify.</div>';
    }

    // Group selector
    h += '<div class="section-title"><h2>Group stage</h2><div class="rule"></div>' +
      '<span class="chip">GW ' + h2h.groupGwsPlayed + '/' + h2h.groupGwsTotal + '</span></div>';
    h += '<div class="subnav" id="grpNav">' + h2h.groups.map(function (g, i) {
      return '<button class="tab' + (i === state.group ? ' active' : '') + '" data-g="' + i + '">' + esc(g.name) + '</button>';
    }).join("") + '</div>';
    h += '<div id="grpPanel">' + groupPanel(h2h.groups[state.group] || h2h.groups[0], cfg) + '</div>';

    // Knockouts
    h += '<div class="section-title"><h2>Knockout stage</h2><div class="rule"></div></div>';
    h += '<div class="card"><div class="bd">';
    h += '<div class="note">Schedule: ' + h2h.schedule.map(function (r) {
      return esc(r.name) + ' (GW' + r.gws.join("–") + (r.legs === 2 ? ", 2 legs" : "") + ')';
    }).join(" → ") + '</div>';
    h += '<div class="btnrow" style="margin-top:12px">' +
      '<button class="btn" id="autoSeed">⚙︎ Auto-seed bracket from groups</button>' +
      (h2h.bracket ? '<button class="btn ghost" id="editBracket">Edit bracket JSON</button>' : '') + '</div>';
    if (h2h.bracket) {
      h += renderBracket(ds, h2h.bracket, "UCL");
      h += renderBracket(ds, h2h.bracket, "UEL");
    } else {
      h += '<div class="note" style="margin-top:12px">No bracket yet. Once the group stage completes, auto-seed to generate the R32 draw, then adjust in Admin.</div>';
    }
    h += '</div></div>';

    host.innerHTML = h;
    $all("[data-g]", host).forEach(function (b) {
      b.addEventListener("click", function () {
        state.group = +b.getAttribute("data-g");
        $("#grpPanel", host).innerHTML = groupPanel(h2h.groups[state.group], cfg);
        $all("[data-g]", host).forEach(function (x) { x.classList.toggle("active", x === b); });
      });
    });
    $("#autoSeed", host).addEventListener("click", function () { autoSeedBracket(ds); });
    var eb = $("#editBracket", host);
    if (eb) eb.addEventListener("click", function () { editOverrideJson("H2H bracket", ["h2h", "bracket"]); });
  }

  function groupPanel(g, cfg) {
    if (!g) return '';
    var rows = g.table.map(function (t) {
      var pill = t.dest === "UCL" ? '<span class="pill ucl">UCL</span>' : t.dest === "UEL" ? '<span class="pill uel">UEL</span>' : '';
      var zone = t.dest === "UCL" ? "zone-top" : "";
      return '<tr class="' + zone + (isMe(t.id) ? ' me' : '') + '"><td class="num">' + t.pos + '</td>' +
        '<td class="name"><span class="who">' + esc(t.name) + '</span> ' + pill + '<div class="mgr">' + esc(t.player) + '</div></td>' +
        '<td class="num">' + t.w + '</td><td class="num">' + t.d + '</td><td class="num">' + t.l + '</td>' +
        '<td class="num"><b>' + t.pts + '</b></td><td class="num">' + num(t.gwPts) + '</td></tr>';
    }).join("");
    return '<div class="card"><div class="hd"><h3>' + esc(g.name) + '</h3><span class="sub">' + g.table.length + ' managers</span></div>' +
      '<div class="tablewrap"><table class="t"><thead><tr><th class="num">#</th><th>Team</th><th class="num">W</th><th class="num">D</th><th class="num">L</th><th class="num">Pts</th><th class="num">GW pts</th></tr></thead><tbody>' +
      rows + '</tbody></table></div>' +
      '<div class="bd"><div class="note">Top 2 → UCL knockouts · 3rd–4th → UEL knockouts. Points from H2H results (3/1/0); ties by group-stage score.</div></div></div>';
  }

  function renderBracket(ds, bracket, comp) {
    var rounds = (bracket[comp] && bracket[comp].rounds) || [];
    if (!rounds.length) return '';
    var mm = K.managerMap(ds);
    var sched = S.config().h2h.knockout;
    var h = '<div class="section-title" style="margin-top:18px"><h2>' + comp + ' bracket</h2><div class="rule"></div></div><div class="bracket">';
    rounds.forEach(function (rd, ri) {
      var meta = sched[ri] || sched[sched.length - 1];
      h += '<div class="bround"><h4>' + esc(rd.name || (meta ? meta.name : "Round " + (ri + 1))) + '</h4>';
      (rd.ties || []).forEach(function (tie) {
        var gws = meta ? meta.gws : [];
        var aS = tie.a ? K.tieScore(ds, tie.a, gws).score : 0;
        var bS = tie.b ? K.tieScore(ds, tie.b, gws).score : 0;
        var aWin = tie.a && (aS >= bS), bWin = tie.b && (bS > aS);
        h += '<div class="btie">' +
          teamRow(tie.a, aS, aWin, mm) + teamRow(tie.b, bS, bWin, mm) + '</div>';
      });
      h += '</div>';
    });
    h += '</div>';
    return h;
    function teamRow(id, score, win, mm) {
      var name = id ? ((mm[id] && mm[id].entryName) || ("#" + id)) : "—";
      return '<div class="bteam' + (win ? ' win' : '') + '"><span>' + esc(name) + '</span><span class="s">' + (id ? num(score) : "") + '</span></div>';
    }
  }

  function autoSeedBracket(ds) {
    var h2h = K.h2h(ds);
    var ucl = [], uel = [];
    h2h.groups.forEach(function (g) {
      if (g.table[0]) ucl.push(g.table[0].id);
      if (g.table[1]) ucl.push(g.table[1].id);
      if (g.table[2]) uel.push(g.table[2].id);
      if (g.table[3]) uel.push(g.table[3].id);
    });
    var bracket = {
      UCL: { rounds: seedRounds(ucl, ["Round of 32", "Round of 16", "Quarter Finals", "Semi Finals", "Final"]) },
      UEL: { rounds: seedRounds(uel, ["Round of 32", "Round of 16", "Quarter Finals", "Semi Finals", "Final"]) }
    };
    S.setOverridePath(["h2h", "bracket"], bracket);
    toast("Bracket seeded from group results");
    render();
  }
  function seedRounds(ids, names) {
    // First round: pair 1v last, 2v2nd-last (standard seeding). Later rounds empty (filled as results come, or manually).
    var rounds = [];
    var n = ids.length;
    var first = [];
    for (var i = 0; i < Math.floor(n / 2); i++) first.push({ a: ids[i], b: ids[n - 1 - i] });
    rounds.push({ name: names[0], ties: first });
    var count = first.length;
    var idx = 1;
    while (count > 1 && idx < names.length) {
      count = Math.floor(count / 2);
      var ties = [];
      for (var j = 0; j < count; j++) ties.push({ a: null, b: null });
      rounds.push({ name: names[idx], ties: ties });
      idx++;
    }
    return rounds;
  }

  /* ====================================================================== */
  /* PYRAMID                                                                */
  /* ====================================================================== */
  function renderPyramid(host, ds) {
    var pyr = K.pyramid(ds);
    var cur = state.seasonKey && pyr.seasons.some(function (s) { return s.key === state.seasonKey; })
      ? state.seasonKey : (function () {
        var active = pyr.seasons.filter(function (s) { return s.played > 0; });
        return active.length ? active[active.length - 1].key : pyr.seasons[0].key;
      })();
    state.seasonKey = cur;

    var h = '<div class="section-title"><h2>The Pyramid Battle</h2><div class="rule"></div>' +
      '<span class="chip">4 divisions · 3 mini-seasons</span></div>';

    // Pyramid visual
    h += '<div class="card"><div class="bd"><div class="pyr">' +
      '<div class="lvl elite">ELITE<small>promotion top · biggest prizes</small></div>' +
      '<div class="lvl championship">CHAMPIONSHIP</div>' +
      '<div class="lvl challenger">CHALLENGER</div>' +
      '<div class="lvl conference">CONFERENCE<small>climb up · top 5 promoted, bottom 5 relegated</small></div>' +
      '</div></div></div>';

    if (pyr.autoInitial) {
      h += '<div class="callout" style="margin-top:14px">Division rosters are <b>auto-assigned</b> by overall league rank (Elite = best ranks). ' +
        'Set the real Season-1 rosters in <b>Settings → Admin → Pyramid rosters</b>; Seasons 2 & 3 then follow promotion/relegation automatically.</div>';
    }

    h += '<div class="subnav">' + pyr.seasons.map(function (s) {
      var badge = s.complete ? ' ●' : (s.played > 0 ? ' ○' : '');
      return '<button class="tab' + (s.key === cur ? ' active' : '') + '" data-s="' + s.key + '">' + esc(s.name) + badge + '</button>';
    }).join("") + '</div>';

    var SEA = pyr.seasons.filter(function (s) { return s.key === cur; })[0];
    var statusPill = SEA.complete ? '<span class="pill gold">Final</span>'
      : SEA.played > 0 ? '<span class="pill live">GW ' + SEA.played + '/' + SEA.total + '</span>'
      : '<span class="pill">Not started</span>';
    h += '<div class="section-title"><h2>' + esc(SEA.name) + '</h2><div class="rule"></div>' +
      '<span class="chip">GW ' + SEA.gws[0] + '–' + SEA.gws[SEA.gws.length - 1] + '</span></div>';
    h += '<div class="note" style="margin-bottom:10px">' + statusPill + '</div>';

    var cfg = S.config();
    SEA.divisions.forEach(function (div) {
      h += divisionCard(div, cfg);
    });

    host.innerHTML = h;
    $all("[data-s]", host).forEach(function (b) {
      b.addEventListener("click", function () {
        state.seasonKey = b.getAttribute("data-s");
        location.hash = "pyramid/" + state.seasonKey;
      });
    });
  }

  function divisionCard(div, cfg) {
    var pcfg = cfg.pyramid;
    var body = div.rows.map(function (r) {
      var zone = r.pos <= pcfg.promoteCount ? "zone-top"
        : (r.pos > div.rows.length - pcfg.relegateCount ? "zone-bot" : "");
      var badge = r.pos <= pcfg.promoteCount ? '<span class="pill up">▲</span>'
        : (r.pos > div.rows.length - pcfg.relegateCount ? '<span class="pill down">▼</span>' : '');
      var rc = r.pos <= 3 ? "rk" + r.pos : "";
      return '<tr class="' + zone + (isMe(r.id) ? ' me' : '') + '"><td class="num"><span class="r ' + rc + '">' + r.pos + '</span></td>' +
        '<td class="name"><span class="who">' + esc(r.name) + '</span> ' + badge + '<div class="mgr">' + esc(r.player) + '</div></td>' +
        '<td class="num"><b>' + num(r.score) + '</b></td><td class="num">' +
        (r.prize ? '<span class="prize">' + money(r.prize) + '</span>' : '') + '</td></tr>';
    }).join("");
    return '<div class="card"><div class="hd"><h3>' + esc(div.name) + '</h3>' +
      '<span class="sub">' + div.size + ' managers · 1st ' + money(div.prizes[1]) + '</span></div>' +
      (div.rows.length ? '<div class="tablewrap"><table class="t"><thead><tr><th class="num">#</th><th>Team</th><th class="num">Points</th><th class="num">Prize</th></tr></thead><tbody>' + body + '</tbody></table></div>'
        : '<div class="bd"><div class="note">No managers assigned to this division.</div></div>') + '</div>';
  }

  /* ====================================================================== */
  /* RULES                                                                  */
  /* ====================================================================== */
  function renderRules(host) {
    var cfg = S.config();
    var h = '<div class="section-title"><h2>General Rules</h2><div class="rule"></div>' +
      '<span class="chip">Fair play</span></div>';
    cfg.rules.forEach(function (r) {
      h += '<div class="card"><div class="hd"><h3>' + r.n + '. ' + esc(r.title) + '</h3></div>' +
        '<div class="bd"><div class="note" style="color:var(--ink-soft);font-size:13.5px;line-height:1.6">' + esc(r.body) + '</div></div></div>';
    });

    // Monthly prize reference
    h += '<div class="section-title"><h2>Monthly prizes</h2><div class="rule"></div></div>';
    h += '<div class="card"><div class="tablewrap"><table class="t"><thead><tr><th>Month</th><th class="num">1st</th><th class="num">2nd</th><th class="num">3rd</th><th>Gameweeks</th></tr></thead><tbody>';
    cfg.months.forEach(function (m) {
      h += '<tr><td>' + esc(m.name) + '</td><td class="num prize">' + money(m.prizes[1]) + '</td>' +
        '<td class="num">' + money(m.prizes[2]) + '</td><td class="num">' + money(m.prizes[3]) + '</td>' +
        '<td class="note">GW ' + m.gws.join(", ") + '</td></tr>';
    });
    h += '</tbody></table></div></div>';

    // Pyramid + H2H prize reference
    h += '<div class="section-title"><h2>Pyramid prizes (per mini-season)</h2><div class="rule"></div></div>';
    h += '<div class="card"><div class="tablewrap"><table class="t"><thead><tr><th>Division</th><th class="num">1st</th><th class="num">2nd</th><th class="num">3rd</th></tr></thead><tbody>';
    cfg.pyramid.divisions.forEach(function (d) {
      h += '<tr><td>' + esc(d.name) + '</td><td class="num prize">' + money(d.prizes[1]) + '</td><td class="num">' + money(d.prizes[2]) + '</td><td class="num">' + money(d.prizes[3]) + '</td></tr>';
    });
    h += '</tbody></table></div></div>';

    host.innerHTML = h;
  }

  /* ====================================================================== */
  /* SETTINGS + ADMIN                                                       */
  /* ====================================================================== */
  function renderSettings(host) {
    var cfg = S.config();
    var ds = S.dataset();
    var h = '<div class="section-title"><h2>Settings</h2><div class="rule"></div></div>';

    // League config
    h += '<div class="card"><div class="hd"><h3>League</h3></div><div class="bd">';
    h += field("Classic League ID", '<input class="in" id="cfgClassic" value="' + esc(cfg.classicLeagueId || "") + '" placeholder="e.g. 314" inputmode="numeric">');
    h += field("H2H group League IDs (comma-separated, optional)", '<input class="in" id="cfgH2h" value="' + esc((cfg.h2hGroupLeagueIds || []).join(", ")) + '" placeholder="one FPL H2H league id per group">');
    h += field("Joining fee (optional, for prize pool)", '<input class="in" id="cfgFee" value="' + esc(cfg.joiningFee || "") + '" inputmode="numeric">');
    h += field("Highlight my team (entry ID)", '<input class="in" id="cfgMe" value="' + esc(state.me || "") + '" placeholder="your FPL entry id" inputmode="numeric">');
    h += '<div class="btnrow"><button class="btn primary" id="saveLeague">Save</button></div>';
    h += '</div></div>';

    // Data source
    h += '<div class="card"><div class="hd"><h3>Data source (CORS proxy)</h3></div><div class="bd">';
    h += '<div class="note">The FPL API has no CORS, so requests route through a proxy. If one stops working, switch it here.</div>';
    var opts = (cfg.proxy.alternatives || []).map(function (t) {
      var label = t === "" ? "(direct / own proxy)" : t;
      return '<option value="' + esc(t) + '"' + (t === cfg.proxy.template ? ' selected' : '') + '>' + esc(label) + '</option>';
    }).join("");
    h += field("Active proxy", '<select class="in" id="cfgProxy">' + opts + '</select>');
    h += field("Custom proxy template ({url} = encoded FPL url)", '<input class="in" id="cfgProxyCustom" placeholder="https://your-proxy/?url={url}">');
    h += '<div class="btnrow"><button class="btn" id="saveProxy">Save proxy</button></div>';
    h += '</div></div>';

    // Refresh + data
    h += '<div class="card"><div class="hd"><h3>Data</h3></div><div class="bd">';
    h += '<div class="note">' + (ds ? ('Loaded ' + ds.managers.length + ' managers · updated ' + new Date(ds.updatedAt).toLocaleString()) : 'No data loaded yet.') + '</div>';
    h += '<div id="refreshBox" style="margin:12px 0"></div>';
    h += '<div class="btnrow">' +
      '<button class="btn primary" id="btnDoRefresh">↻ Refresh from FPL</button>' +
      '<button class="btn" id="btnExport">⬇ Export data.json</button>' +
      '<button class="btn" id="btnImport">⬆ Import bundle</button>' +
      '<input type="file" id="fileImport" accept="application/json" style="display:none">' +
      '</div>';
    h += '<div class="note" style="margin-top:10px">Organiser tip: refresh once per gameweek, <b>Export</b>, and commit the file as <code>gameon/data.json</code>. Everyone else\'s app will load it automatically — no proxy load for 245 people.</div>';
    h += '</div></div>';

    // Admin overrides
    h += '<div class="section-title"><h2>Admin — custom rules</h2><div class="rule"></div></div>';
    h += '<div class="card"><div class="bd">';
    h += '<div class="note" style="margin-bottom:12px">The app auto-computes everything it can. Use these to lock outcomes that need human judgement or the real draw. Each opens a JSON editor with the current auto value pre-filled.</div>';
    h += '<div class="btnrow">' +
      '<button class="btn" data-ov="months">Month → GW map & prizes</button>' +
      '<button class="btn" data-ov="classicPrizes">Classic prizes</button>' +
      '<button class="btn" data-ov="lmsElim">LMS manual eliminations</button>' +
      '<button class="btn" data-ov="pyramidRosters">Pyramid rosters</button>' +
      '<button class="btn" data-ov="h2hGroups">H2H groups</button>' +
      '<button class="btn" data-ov="h2hBracket">H2H bracket</button>' +
      '</div>';
    h += '<div class="btnrow" style="margin-top:16px"><button class="btn danger" id="btnReset">Reset all settings & overrides</button></div>';
    h += '</div></div>';

    host.innerHTML = h;
    wireSettings(host);
  }

  function field(lab, control) {
    return '<label class="field"><span class="lab">' + esc(lab) + '</span>' + control + '</label>';
  }

  function wireSettings(host) {
    $("#saveLeague", host).addEventListener("click", function () {
      var classic = parseInt($("#cfgClassic", host).value, 10);
      var h2h = $("#cfgH2h", host).value.split(",").map(function (s) { return parseInt(s.trim(), 10); }).filter(function (n) { return !isNaN(n); });
      var fee = parseInt($("#cfgFee", host).value, 10);
      S.saveConfig({
        classicLeagueId: isNaN(classic) ? null : classic,
        h2hGroupLeagueIds: h2h,
        joiningFee: isNaN(fee) ? null : fee
      });
      var me = parseInt($("#cfgMe", host).value, 10);
      state.me = isNaN(me) ? null : me; lsSet(ME_KEY, state.me);
      toast("Saved");
    });

    $("#saveProxy", host).addEventListener("click", function () {
      var custom = $("#cfgProxyCustom", host).value.trim();
      var template = custom || $("#cfgProxy", host).value;
      var cfg = S.config();
      var alts = cfg.proxy.alternatives.slice();
      if (custom && alts.indexOf(custom) === -1) alts.unshift(custom);
      S.saveConfig({ proxy: { template: template, alternatives: alts } });
      toast("Proxy saved");
    });

    $("#btnDoRefresh", host).addEventListener("click", startRefresh);

    $("#btnExport", host).addEventListener("click", function () {
      var bundle = S.exportBundle();
      if (!bundle.dataset) { toast("Nothing to export — refresh first"); return; }
      download("data.json", JSON.stringify(bundle));
      toast("Exported data.json");
    });
    $("#btnImport", host).addEventListener("click", function () { $("#fileImport", host).click(); });
    $("#fileImport", host).addEventListener("change", function (e) {
      var f = e.target.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var bundle = JSON.parse(rd.result);
          S.importBundle(bundle).then(function () { toast("Imported"); updateDataState(); render(); });
        } catch (err) { toast("Invalid file"); }
      };
      rd.readAsText(f);
    });

    $all("[data-ov]", host).forEach(function (b) {
      b.addEventListener("click", function () { openOverrideEditor(b.getAttribute("data-ov")); });
    });

    $("#btnReset", host).addEventListener("click", function () {
      if (!confirm("Reset all settings and admin overrides? Pulled data is kept.")) return;
      S.resetConfig(); S.saveOverrides({}); localStorage.removeItem("go12.overrides");
      location.reload();
    });
  }

  function openOverrideEditor(kind) {
    var cfg = S.config(), ov = S.overrides(), ds = S.dataset();
    var title, path, value, help;
    if (kind === "months") { title = "Month → GW map & prizes"; path = ["_configMonths"]; value = cfg.months;
      help = "Set which gameweeks belong to each month and the prizes. This drives the Monthly tab."; }
    else if (kind === "classicPrizes") { title = "Classic prizes"; path = ["_configClassicPrizes"]; value = cfg.classicPrizes;
      help = "exact = rank→amount; ranges = inclusive from/to bands."; }
    else if (kind === "lmsElim") { title = "LMS manual eliminations"; path = ["lms", "elim"]; value = (ov.lms && ov.lms.elim) || {};
      help = 'Override who is eliminated in a GW: { "5": [entryId, entryId] }. Leave empty to auto-compute.'; }
    else if (kind === "pyramidRosters") { title = "Pyramid rosters"; path = ["pyramid", "rosters"];
      value = (ov.pyramid && ov.pyramid.rosters) || (ds ? { s1: K.pyramid(ds).rosters.s1 } : {});
      help = 'Season rosters: { "s1": { "elite":[ids], "championship":[ids], ... } }. S2/S3 auto-follow promotion/relegation unless set.'; }
    else if (kind === "h2hGroups") { title = "H2H groups"; path = ["h2h", "groups"];
      value = (ov.h2h && ov.h2h.groups) || (ds ? K.h2h(ds).groups.map(function (g) { return { name: g.name, entries: g.table.map(function (t) { return t.id; }) }; }) : []);
      help = 'Array of { "name":"Group A", "entries":[entryIds] }. 16 groups of 15.'; }
    else if (kind === "h2hBracket") { title = "H2H bracket"; path = ["h2h", "bracket"]; value = (ov.h2h && ov.h2h.bracket) || null;
      help = 'Use "Auto-seed" on the Game On UCL tab first, then fine-tune here.'; }
    else return;

    if (path[0] === "_configMonths" || path[0] === "_configClassicPrizes") {
      // These edit config, not overrides.
      var body = modal(title, '<div class="note" style="margin-bottom:10px">' + esc(help) + '</div>' +
        '<textarea class="in" id="ovText" spellcheck="false">' + esc(JSON.stringify(value, null, 2)) + '</textarea>' +
        '<div class="btnrow" style="margin-top:12px"><button class="btn primary" id="ovSave">Save</button><button class="btn ghost" id="ovCancel">Cancel</button></div>');
      $("#ovCancel").addEventListener("click", closeModal);
      $("#ovSave").addEventListener("click", function () {
        try {
          var parsed = JSON.parse($("#ovText").value);
          if (path[0] === "_configMonths") S.saveConfig({ months: parsed });
          else S.saveConfig({ classicPrizes: parsed });
          closeModal(); toast("Saved"); render();
        } catch (e) { toast("Invalid JSON"); }
      });
      return;
    }
    editOverrideJson(title, path, value, help);
  }

  function editOverrideJson(title, path, value, help) {
    if (value === undefined) value = getPath(S.overrides(), path);
    var body = modal(title, '<div class="note" style="margin-bottom:10px">' + esc(help || "") + '</div>' +
      '<textarea class="in" id="ovText" spellcheck="false">' + esc(JSON.stringify(value == null ? null : value, null, 2)) + '</textarea>' +
      '<div class="btnrow" style="margin-top:12px"><button class="btn primary" id="ovSave">Save</button>' +
      '<button class="btn ghost" id="ovClear">Clear (use auto)</button>' +
      '<button class="btn ghost" id="ovCancel">Cancel</button></div>');
    $("#ovCancel").addEventListener("click", closeModal);
    $("#ovClear").addEventListener("click", function () { S.setOverridePath(path, undefined); closeModal(); toast("Cleared — using auto"); render(); });
    $("#ovSave").addEventListener("click", function () {
      try { var parsed = JSON.parse($("#ovText").value); S.setOverridePath(path, parsed); closeModal(); toast("Saved"); render(); }
      catch (e) { toast("Invalid JSON"); }
    });
  }
  function getPath(obj, path) { var n = obj; for (var i = 0; i < path.length; i++) { if (!n) return undefined; n = n[path[i]]; } return n; }

  /* ---- refresh flow ---------------------------------------------------- */
  function startRefresh() {
    var cfg = S.config();
    if (!cfg.classicLeagueId) {
      toast("Set your Classic League ID in Settings first");
      location.hash = "settings";
      return;
    }
    var body = modal("Refreshing from FPL", progressHtml("Starting…", 0));
    S.refresh(function (p) {
      var pct = (p.total && p.done != null) ? Math.round((p.done / p.total) * 100) : (p.phase === "done" ? 100 : null);
      $("#modalBody").innerHTML = progressHtml(p.message || p.phase, pct);
    }).then(function () {
      closeModal(); updateDataState(); render();
      toast("Updated from FPL");
    }).catch(function (err) {
      $("#modalBody").innerHTML = '<div class="callout" style="border-color:var(--red);color:var(--red)">' +
        esc(err.message || "Refresh failed") + '</div>' +
        '<div class="note" style="margin-top:10px">If proxies are down, try a different one in Settings → Data source, then refresh again.</div>' +
        '<div class="btnrow" style="margin-top:12px"><button class="btn" id="errClose">Close</button></div>';
      $("#errClose").addEventListener("click", closeModal);
    });
  }
  function progressHtml(msg, pct) {
    return '<div class="note" style="margin-bottom:10px">' + esc(msg) + '</div>' +
      '<div class="progress"><i style="width:' + (pct == null ? 12 : pct) + '%"></i></div>' +
      (pct == null ? '<div class="note" style="margin-top:8px">Working…</div>' : '');
  }

  function download(name, text) {
    var blob = new Blob([text], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a"); a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function isMe(id) { return state.me && +id === +state.me; }

  document.addEventListener("DOMContentLoaded", boot);
})();
