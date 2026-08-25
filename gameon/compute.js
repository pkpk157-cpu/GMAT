/* ==========================================================================
   compute.js — turn the raw dataset into competition standings.
   Everything derives from one primitive: per-manager, per-gameweek NET score
   (already includes hits) plus bench points, in dataset.history[entryId][gw].
   Admin overrides (store.overrides) can lock any human-judged outcome.
   ========================================================================== */
(function () {
  "use strict";

  var C = {};

  /* ---- helpers ---------------------------------------------------------- */
  function cfg() { return window.GO_STORE.config(); }
  function ov() { return window.GO_STORE.overrides(); }

  // Net GW score for a manager (includes hits). Missing => null (not played).
  function gwScore(ds, entryId, gw) {
    var h = ds.history[entryId];
    if (!h || !h[gw]) return null;
    return h[gw].p;
  }
  function gwBench(ds, entryId, gw) {
    var h = ds.history[entryId];
    if (!h || !h[gw]) return 0;
    return h[gw].b || 0;
  }
  function sumGws(ds, entryId, gws) {
    var s = 0, any = false;
    gws.forEach(function (gw) {
      var v = gwScore(ds, entryId, gw);
      if (v !== null) { s += v; any = true; }
    });
    return any ? s : null;
  }
  function benchSum(ds, entryId, gws) {
    var s = 0; gws.forEach(function (gw) { s += gwBench(ds, entryId, gw); }); return s;
  }

  // Which gameweeks are fully scored (finished + data checked).
  C.finishedGws = function (ds) {
    var out = [];
    if (!ds || !ds.bootstrap) return out;
    ds.bootstrap.events.forEach(function (e) {
      if (e.finished && e.data_checked) out.push(e.id);
    });
    return out;
  };
  C.currentGw = function (ds) {
    if (!ds || !ds.bootstrap) return null;
    var cur = null, next = null;
    ds.bootstrap.events.forEach(function (e) {
      if (e.is_current) cur = e.id;
      if (e.is_next) next = e.id;
    });
    return cur || (next ? next - 1 : null);
  };

  function managerMap(ds) {
    var m = {};
    ds.managers.forEach(function (x) { m[x.id] = x; });
    return m;
  }
  C.managerMap = managerMap;

  /* ---- prizes ----------------------------------------------------------- */
  C.classicPrize = function (rank) {
    var p = cfg().classicPrizes;
    if (p.exact[rank] != null) return p.exact[rank];
    var found = 0;
    (p.ranges || []).forEach(function (r) { if (rank >= r.from && rank <= r.to) found = r.amount; });
    return found;
  };

  /* ---- 1. Classic league ------------------------------------------------ */
  C.classic = function (ds) {
    var rows = ds.managers.slice().sort(function (a, b) {
      return (b.total - a.total) || (a.rank - b.rank);
    });
    rows.forEach(function (r, i) {
      r.computedRank = i + 1;
      r.prize = C.classicPrize(i + 1);
      r.move = (r.lastRank && r.lastRank > 0) ? (r.lastRank - (i + 1)) : 0;
    });
    return rows;
  };

  /* ---- 2. Monthly winners ---------------------------------------------- */
  C.monthly = function (ds) {
    var mm = managerMap(ds);
    var conf = cfg();
    var finished = C.finishedGws(ds);
    var fset = {}; finished.forEach(function (g) { fset[g] = true; });

    // Optionally derive each month's gameweeks from real fixture deadlines.
    var monthNum = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
    var evDate = {};
    if (ds.bootstrap) ds.bootstrap.events.forEach(function (e) { if (e.deadline_time) evDate[e.id] = new Date(e.deadline_time); });
    var canDerive = conf.autoMonths !== false && Object.keys(evDate).length > 0;

    return conf.months.map(function (month) {
      var gws = month.gws, yearForLabel = null;
      if (canDerive) {
        var mn = monthNum[month.key];
        var derived = Object.keys(evDate).map(Number).filter(function (gw) {
          return (evDate[gw].getUTCMonth() + 1) === mn;
        }).sort(function (a, b) { return a - b; });
        if (derived.length) { gws = derived; yearForLabel = evDate[derived[0]].getUTCFullYear(); }
      }
      var late = { jan: 1, feb: 1, mar: 1, apr: 1, may: 1, jun: 1, jul: 1 };
      var yr = (yearForLabel != null) ? yearForLabel : ((conf.seasonStartYear || 2025) + (late[month.key] ? 1 : 0));
      var label = month.name.slice(0, 3) + "-" + ("0" + (yr % 100)).slice(-2);

      var playedGws = gws.filter(function (g) { return fset[g]; });
      var complete = gws.length > 0 && gws.every(function (g) { return fset[g]; });
      var rows = ds.managers.map(function (m) {
        return {
          id: m.id, entryName: m.entryName, playerName: m.playerName,
          score: sumGws(ds, m.id, playedGws) || 0,
          bench: benchSum(ds, m.id, playedGws),
          gwsCounted: playedGws.length
        };
      }).filter(function (r) { return r.gwsCounted > 0; });

      rows.sort(function (a, b) { return (b.score - a.score) || (b.bench - a.bench); });
      applyOverrideOrder(rows, ov().monthlyOrder && ov().monthlyOrder[month.key]);
      rows.forEach(function (r, i) {
        r.pos = i + 1;
        r.prize = month.prizes[i + 1] || 0;
      });
      return {
        key: month.key, name: month.name, label: label, gws: gws,
        played: playedGws.length, total: gws.length,
        complete: complete, inProgress: playedGws.length > 0 && !complete,
        rows: rows, prizes: month.prizes
      };
    });
  };

  /* ---- 3. Last Manager Standing ---------------------------------------- */
  // Iterate finished GWs; eliminate the lowest scorers among survivors.
  C.lms = function (ds) {
    var mm = managerMap(ds);
    var finished = C.finishedGws(ds);
    var elimGrid = cfg().lms.elimPerGw;
    var manualElim = (ov().lms && ov().lms.elim) || {}; // { gw: [entryIds] }
    var carriedTies = (ov().lms && ov().lms.carry) || {}; // { gw: [entryIds] } forced survive

    var alive = {}; ds.managers.forEach(function (m) { alive[m.id] = true; });
    var eliminatedAt = {}; // entryId -> gw
    var grid = []; // per-gw summary rows
    var perGw = [];

    finished.forEach(function (gw) {
      var sog = Object.keys(alive).length;
      var need = elimGrid[gw] || 0;

      // Score every survivor this GW.
      var contenders = Object.keys(alive).map(function (id) {
        id = +id;
        return { id: id, score: gwScore(ds, id, gw), bench: gwBench(ds, id, gw) };
      });
      // A survivor with no score for a finished GW counts as 0 (didn't play).
      contenders.forEach(function (c) { if (c.score === null) c.score = 0; });

      var eliminatedIds;
      if (manualElim[gw]) {
        eliminatedIds = manualElim[gw].filter(function (id) { return alive[id]; });
      } else {
        // ascending by score, then FEWER bench points is worse (tie-break #1
        // rewards more bench points => higher bench survives).
        contenders.sort(function (a, b) { return (a.score - b.score) || (a.bench - b.bench); });
        var forced = carriedTies[gw] || [];
        var pick = [];
        for (var i = 0; i < contenders.length && pick.length < need; i++) {
          if (forced.indexOf(contenders[i].id) !== -1) continue; // forced survive
          pick.push(contenders[i].id);
        }
        eliminatedIds = pick;
      }

      eliminatedIds.forEach(function (id) { delete alive[id]; eliminatedAt[id] = gw; });
      var eog = Object.keys(alive).length;

      grid.push({ gw: gw, sog: sog, eliminated: eliminatedIds.length, expected: need, eog: eog });

      // Full week table: every survivor at start of GW, scored, worst first.
      var elimSet = {}; eliminatedIds.forEach(function (id) { elimSet[id] = 1; });
      var table = contenders.map(function (c) {
        var hh = (ds.history[c.id] && ds.history[c.id][gw]) ? ds.history[c.id][gw] : null;
        return { id: c.id, name: nm(mm, c.id), player: pl(mm, c.id),
                 score: c.score, bench: c.bench, hit: hh ? hh.h : 0,
                 played: (hh && hh.pl != null) ? hh.pl : null, playedTotal: (hh && hh.plt) ? hh.plt : 12,
                 eliminated: !!elimSet[c.id] };
      }).sort(function (a, b) { return (a.score - b.score) || (a.bench - b.bench); });

      perGw.push({
        gw: gw, need: need, sog: sog, eog: eog, table: table,
        eliminated: eliminatedIds.map(function (id) {
          var c = contenders.find(function (x) { return x.id === id; });
          return { id: id, name: nm(mm, id), score: c ? c.score : 0, bench: c ? c.bench : 0 };
        }).sort(function (a, b) { return a.score - b.score; })
      });
    });

    var survivors = Object.keys(alive).map(function (id) {
      return { id: +id, name: nm(mm, +id) };
    });

    // Build the full published grid (all 38 GWs) with expected numbers, so the
    // elimination grid renders even before the season starts.
    var fullGrid = [];
    var running = ds.managers.length;
    for (var g = 1; g <= cfg().totalGameweeks; g++) {
      var actual = grid.find(function (x) { return x.gw === g; });
      var exp = elimGrid[g] || 0;
      if (actual) { fullGrid.push(actual); running = actual.eog; }
      else {
        fullGrid.push({ gw: g, sog: running, eliminated: null, expected: exp, eog: running - exp });
        running = running - exp;
      }
    }

    // Live (in-progress) gameweek — the current GW that isn't finished yet.
    // Shows the survivors' running scores + how many players have played.
    var liveGw = null;
    ds.bootstrap.events.forEach(function (e) { if (e.is_current && !(e.finished && e.data_checked)) liveGw = e.id; });
    var live = null;
    if (liveGw != null) {
      var aliveIds = Object.keys(alive).map(Number);
      var need = elimGrid[liveGw] || 0;
      var ltable = aliveIds.map(function (id) {
        var hh = (ds.history[id] && ds.history[id][liveGw]) ? ds.history[id][liveGw] : null;
        return { id: id, name: nm(mm, id), player: pl(mm, id),
                 score: hh ? hh.p : 0, bench: hh ? hh.b : 0, hit: hh ? hh.h : 0,
                 played: (hh && hh.pl != null) ? hh.pl : null, playedTotal: (hh && hh.plt) ? hh.plt : 12,
                 eliminated: false, atRisk: false };
      }).sort(function (a, b) { return (a.score - b.score) || (a.bench - b.bench); });
      // Bottom `need` are in the drop zone (would be eliminated if the GW ended now).
      ltable.forEach(function (r, i) { r.atRisk = i < need; });
      live = { gw: liveGw, table: ltable, sog: aliveIds.length, eog: aliveIds.length - need, need: need, eliminated: [] };
    }

    return {
      finishedCount: finished.length,
      survivors: survivors,
      survivorsCount: survivors.length,
      eliminatedAt: eliminatedAt,
      grid: fullGrid,
      perGw: perGw,
      live: live,
      champion: survivors.length === 1 ? survivors[0] : null,
      prizes: cfg().lms.prizes
    };
  };

  /* ---- 4. Pyramid ------------------------------------------------------- */
  // Rosters per mini-season: S1 from override (or auto rank-quartiles);
  // S2/S3 auto from promotion/relegation unless overridden.
  C.pyramid = function (ds) {
    var mm = managerMap(ds);
    var p = cfg().pyramid;
    var divisions = p.divisions.map(function (d) { return d.key; });
    var finished = {}; C.finishedGws(ds).forEach(function (g) { finished[g] = true; });
    var over = (ov().pyramid && ov().pyramid.rosters) || {}; // { s1: { elite:[ids] } }

    // Base S1 rosters.
    var rosters = {};
    rosters[p.seasons[0].key] = over[p.seasons[0].key] || autoInitialRosters(ds, divisions);

    var seasonResults = [];
    p.seasons.forEach(function (season, si) {
      var key = season.key;
      if (si > 0) {
        // Derive from previous season unless an override exists.
        rosters[key] = over[key] || applyPromotionRelegation(rosters[p.seasons[si - 1].key], seasonResults[si - 1], p);
      }
      var playedGws = season.gws.filter(function (g) { return finished[g]; });
      var complete = season.gws.every(function (g) { return finished[g]; });

      var divResults = p.divisions.map(function (div) {
        var ids = (rosters[key] && rosters[key][div.key]) || [];
        var rows = ids.map(function (id) {
          return {
            id: id, name: nm(mm, id), player: pl(mm, id),
            score: sumGws(ds, id, playedGws) || 0,
            bench: benchSum(ds, id, playedGws),
            last: playedGws.length ? (gwScore(ds, id, playedGws[playedGws.length - 1]) || 0) : 0
          };
        });
        rows.sort(function (a, b) { return (b.score - a.score) || (b.last - a.last) || (b.bench - a.bench); });
        rows.forEach(function (r, i) { r.pos = i + 1; r.prize = div.prizes[i + 1] || 0; });
        return { key: div.key, name: div.name, prizes: div.prizes, rows: rows,
                 size: ids.length, played: playedGws.length, total: season.gws.length,
                 complete: complete };
      });
      seasonResults.push({ key: key, name: season.name, gws: season.gws,
                           played: playedGws.length, total: season.gws.length,
                           complete: complete, inProgress: playedGws.length > 0 && !complete,
                           divisions: divResults });
    });
    return { seasons: seasonResults, rosters: rosters, divisions: p.divisions,
             autoInitial: !over[p.seasons[0].key] };
  };

  function autoInitialRosters(ds, divisionKeys) {
    // Split managers by overall league rank into equal tiers (best -> Elite).
    var sorted = ds.managers.slice().sort(function (a, b) { return a.rank - b.rank; });
    var n = sorted.length, k = divisionKeys.length;
    var per = Math.ceil(n / k);
    var out = {};
    divisionKeys.forEach(function (key, i) {
      out[key] = sorted.slice(i * per, (i + 1) * per).map(function (m) { return m.id; });
    });
    return out;
  }
  function applyPromotionRelegation(prevRosters, prevResult, p) {
    if (!prevRosters || !prevResult) return prevRosters || {};
    var keys = p.divisions.map(function (d) { return d.key; });
    var next = {}; keys.forEach(function (key) { next[key] = []; });
    // Start with everyone where they were, then move promoted/relegated.
    prevResult.divisions.forEach(function (dr, di) {
      var promote = dr.rows.slice(0, p.promoteCount).map(function (r) { return r.id; });
      var relegate = dr.rows.slice(Math.max(0, dr.rows.length - p.relegateCount)).map(function (r) { return r.id; });
      dr.rows.forEach(function (r) {
        var target = di;
        if (promote.indexOf(r.id) !== -1 && di > 0) target = di - 1;
        else if (relegate.indexOf(r.id) !== -1 && di < keys.length - 1) target = di + 1;
        next[keys[target]].push(r.id);
      });
    });
    return next;
  }

  /* ---- 5. H2H (Game On UCL) -------------------------------------------- */
  // Group tables computed round-robin from GW scores (higher score wins). If
  // FPL H2H standings were pulled they can be shown too, but the group tables
  // here are self-contained and match "standings follow FPL scores".
  C.h2h = function (ds) {
    var mm = managerMap(ds);
    var h = cfg().h2h;
    var finished = {}; C.finishedGws(ds).forEach(function (g) { finished[g] = true; });
    var groupGws = h.groupStageGws.filter(function (g) { return finished[g]; });

    var groupsCfg = (ov().h2h && ov().h2h.groups) || autoGroups(ds, h);
    var groups = groupsCfg.map(function (grp, gi) {
      var ids = grp.entries || [];
      var table = ids.map(function (id) {
        return { id: id, name: nm(mm, id), player: pl(mm, id),
                 w: 0, d: 0, l: 0, pts: 0, sf: 0, sa: 0, gwPts: 0 };
      });
      var byId = {}; table.forEach(function (t) { byId[t.id] = t; });
      // Round-robin: each pair compared once per group GW they both played,
      // BUT a true round-robin plays each opponent once. We approximate the
      // group table by comparing every pair across ALL played group GWs using
      // their aggregate group-stage score (deterministic, ties = draw), which
      // reproduces the same ordering FPL H2H tends to give.
      for (var a = 0; a < ids.length; a++) {
        for (var b = a + 1; b < ids.length; b++) {
          var ta = byId[ids[a]], tb = byId[ids[b]];
          var sa = sumGws(ds, ids[a], groupGws) || 0;
          var sb = sumGws(ds, ids[b], groupGws) || 0;
          if (sa > sb) { ta.w++; tb.l++; ta.pts += h.pointsWin; tb.pts += h.pointsLoss; }
          else if (sb > sa) { tb.w++; ta.l++; tb.pts += h.pointsWin; ta.pts += h.pointsLoss; }
          else { ta.d++; tb.d++; ta.pts += h.pointsDraw; tb.pts += h.pointsDraw; }
        }
      }
      table.forEach(function (t) { t.gwPts = sumGws(ds, t.id, groupGws) || 0; });
      table.sort(function (x, y) { return (y.pts - x.pts) || (y.gwPts - x.gwPts); });
      table.forEach(function (t, i) {
        t.pos = i + 1;
        t.dest = (i < h.qualify.uclPerGroup) ? "UCL"
               : (i < h.qualify.uclPerGroup + h.qualify.uelPerGroup) ? "UEL" : "";
      });
      return { name: grp.name || ("Group " + (gi + 1)), table: table,
               played: groupGws.length, total: h.groupStageGws.length,
               complete: h.groupStageGws.every(function (g) { return finished[g]; }) };
    });

    // Knockout bracket (admin-managed; auto-seed offered from group results).
    var bracket = (ov().h2h && ov().h2h.bracket) || null;

    return { groups: groups, groupsConfigured: !!(ov().h2h && ov().h2h.groups),
             bracket: bracket, schedule: h.knockout, prizes: h.prizes,
             groupGwsPlayed: groupGws.length, groupGwsTotal: h.groupStageGws.length };
  };

  function autoGroups(ds, h) {
    // Snake-seed by rank into groupCount groups so groups are balanced.
    var sorted = ds.managers.slice().sort(function (a, b) { return a.rank - b.rank; });
    var groups = [];
    for (var i = 0; i < h.groupCount; i++) groups.push({ name: "Group " + String.fromCharCode(65 + i), entries: [] });
    var dir = 1, gi = 0;
    sorted.forEach(function (m) {
      groups[gi].entries.push(m.id);
      gi += dir;
      if (gi === h.groupCount) { gi = h.groupCount - 1; dir = -1; }
      else if (gi < 0) { gi = 0; dir = 1; }
    });
    return groups;
  }

  // Aggregate score across a knockout tie's legs (for the bracket UI).
  C.tieScore = function (ds, entryId, gws) {
    var played = gws.filter(function (g) {
      var e = ds.bootstrap.events.find(function (x) { return x.id === g; });
      return e && e.finished && e.data_checked;
    });
    return { score: sumGws(ds, entryId, played) || 0, legs: played.length, of: gws.length };
  };

  /* ---- small utils ------------------------------------------------------ */
  function nm(mm, id) { return (mm[id] && mm[id].entryName) || ("#" + id); }
  function pl(mm, id) { return (mm[id] && mm[id].playerName) || ""; }
  function applyOverrideOrder(rows, order) {
    if (!order || !order.length) return;
    var idx = {}; order.forEach(function (id, i) { idx[id] = i; });
    rows.sort(function (a, b) {
      var ia = (a.id in idx) ? idx[a.id] : 9999, ib = (b.id in idx) ? idx[b.id] : 9999;
      return ia - ib;
    });
  }

  C.nm = nm; C.pl = pl;
  window.GO_COMPUTE = C;
})();
