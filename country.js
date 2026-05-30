/* Wings International — country detail renderer */
(function () {
  "use strict";

  // destKey -> { j: countries.json key, name: display }
  var COUNTRIES = [
    { k: "russia",      j: "russia",      name: "Russia" },
    { k: "georgia",     j: "georgia",     name: "Georgia" },
    { k: "kyrgyzstan",  j: "kyrg",        name: "Kyrgyzstan" },
    { k: "kazakhstan",  j: "kazakh",      name: "Kazakhstan" },
    { k: "belarus",     j: "belarus",     name: "Belarus" },
    { k: "philippines", j: "philippines", name: "Philippines" },
    { k: "armenia",     j: "armenia",     name: "Armenia" },
    { k: "india",       j: "india",       name: "India" },
    { k: "bosnia",      j: "bosnia",      name: "Bosnia & Herzegovina" },
    { k: "japan",       j: "japan",       name: "Japan" },
    { k: "korea",       j: "korea",       name: "South Korea" },
    { k: "uk",          j: "uk",          name: "United Kingdom" },
    { k: "usa",         j: "usa",         name: "USA" },
    { k: "canada",      j: "canada",      name: "Canada" },
    { k: "australia",   j: "australia",   name: "Australia" },
    { k: "ireland",     j: "ireland",     name: "Ireland" },
    { k: "italy",       j: "italy",       name: "Italy" },
    { k: "germany",     j: "germany",     name: "Germany" }
  ];

  var DB = window.WINGS_COUNTRIES || {};
  var land = function (k) { return "assets/landmarks/" + k + ".jpg"; };
  var flag = function (k) { return "assets/flags/" + k + ".png"; };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var $ = function (id) { return document.getElementById(id); };

  // resolve requested country
  var key = (new URLSearchParams(location.search).get("c") || "russia").toLowerCase();
  var meta = COUNTRIES.filter(function (c) { return c.k === key || c.j === key; })[0] || COUNTRIES[0];
  var data = DB[meta.j] || {};

  // ---- Hero ----
  document.title = (data.title || ("Study in " + meta.name)) + " — Wings International";
  $("cpHeroImg").src = land(meta.k);
  $("cpHeroImg").alt = meta.name + " landmark";
  $("cpFlag").src = flag(meta.k);
  $("cpFlag").alt = meta.name + " flag";
  $("cpCrumb").textContent = meta.name;
  $("cpRegion").textContent = "Study Abroad · " + meta.name;
  $("cpTitle").textContent = data.title || ("Study in " + meta.name);
  $("cpIntro").textContent = data.introText || "";

  // ---- Benefits ----
  $("cpBenefitsTitle").textContent = data.benefitsTitle || ("Why Study in " + meta.name + "?");
  $("cpBenefits").innerHTML = (data.benefits || []).map(function (b) {
    return "<li>" + esc(b) + "</li>";
  }).join("");

  // ---- Universities ----
  $("cpUniTitle").textContent = data.universitiesTitle || "Universities & Fee Structure";
  $("cpUniSub").textContent = data.universitiesSubtitle || "";
  var unis = (data.universities || []).filter(function (u) { return u.name && u.name.trim(); });

  function hasAnyFee(u) {
    return (u.fees || []).some(function (f) { return (f.inr && f.inr.trim()) || (f.usd && f.usd.trim()); });
  }
  function feeTable(u) {
    if (!hasAnyFee(u)) {
      return '<p class="fee-empty">Fee details available on request — contact our counsellors for the latest structure.</p>';
    }
    var rows = (u.fees || []).filter(function (f) { return f.year && f.year.trim(); }).map(function (f) {
      return "<tr><td>" + esc(f.year) + "</td><td>" + esc(f.inr || "—") + "</td><td>" + esc(f.usd || "—") + "</td></tr>";
    }).join("");
    return '<table class="fee-table"><thead><tr><th>Year</th><th>INR</th><th>USD</th></tr></thead><tbody>' + rows + "</tbody></table>";
  }

  var list = $("cpUniList");
  if (unis.length) {
    list.innerHTML = unis.map(function (u, i) {
      return '<div class="uni-item' + (i === 0 ? " open" : "") + '">' +
        '<button class="uni-head" type="button" aria-expanded="' + (i === 0) + '">' +
          '<span class="uni-num">' + (i < 9 ? "0" : "") + (i + 1) + "</span>" +
          '<span class="uni-name">' + esc(u.name) + "</span>" +
          '<span class="uni-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9l6 6 6-6"/></svg></span>' +
        "</button>" +
        '<div class="uni-panel"><div class="uni-panel-inner"><div class="uni-panel-pad">' + feeTable(u) + "</div></div></div>" +
      "</div>";
    }).join("");
    list.addEventListener("click", function (e) {
      var head = e.target.closest(".uni-head");
      if (!head) return;
      var item = head.parentElement;
      var isOpen = item.classList.toggle("open");
      head.setAttribute("aria-expanded", isOpen);
    });
  } else {
    list.innerHTML = '<div class="uni-none">' +
      "<p>We are finalising partner universities and fee structures for " + esc(meta.name) +
      ". Get in touch and our team will share the latest options tailored to you.</p>" +
      '<a class="btn btn-primary" href="index.html#cta">Talk to a counsellor' +
      '<svg class="arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
      "</div>";
  }

  // ---- Quick facts ----
  function lowestFull() {
    var best = null;
    unis.forEach(function (u) {
      (u.fees || []).forEach(function (f) {
        if (/full/i.test(f.year || "") && f.inr) {
          var n = parseFloat(f.inr.replace(/[^0-9.]/g, ""));
          if (!isNaN(n) && (best === null || n < best)) best = n;
        }
      });
    });
    return best;
  }
  function inr(n) {
    return "INR " + Math.round(n).toLocaleString("en-IN");
  }
  var facts = [];
  facts.push(["Destination", meta.name]);
  facts.push(["Universities", unis.length ? String(unis.length) + "+" : "On request"]);
  facts.push(["Language", "English-medium"]);
  var lf = lowestFull();
  if (lf) facts.push(["Course fee from", inr(lf)]);
  facts.push(["Recognition", "NMC / WHO"]);
  $("cpQuick").innerHTML = facts.map(function (r) {
    return '<div class="row"><dt>' + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd></div>";
  }).join("");

  // ---- Related rail ----
  var others = COUNTRIES.filter(function (c) { return c.k !== meta.k; });
  // prioritise the popular MBBS destinations first
  var order = ["russia", "georgia", "kyrgyzstan", "kazakhstan", "belarus", "philippines", "armenia", "bosnia"];
  others.sort(function (a, b) {
    var ia = order.indexOf(a.k), ib = order.indexOf(b.k);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
  $("cpRelated").innerHTML = others.slice(0, 8).map(function (c) {
    return '<a class="rel-card" href="country.html?c=' + c.k + '">' +
      '<img class="land" src="' + land(c.k) + '" alt="" loading="lazy" />' +
      '<span class="rel-meta"><img class="flag" src="' + flag(c.k) + '" alt="" /><span>' + esc(c.name) + "</span></span>" +
    "</a>";
  }).join("");

  // ---- Footer destinations ----
  var fd = $("footDest");
  if (fd) {
    ["russia", "georgia", "kazakhstan", "kyrgyzstan", "belarus", "philippines"].forEach(function (k) {
      var c = COUNTRIES.filter(function (x) { return x.k === k; })[0];
      if (c) fd.insertAdjacentHTML("beforeend", '<li><a href="country.html?c=' + c.k + '">' + esc(c.name) + "</a></li>");
    });
  }
})();
