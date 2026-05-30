/* ============================================================
   Wings International — interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Data ---------- */
  var DEST = [
    { key: "russia",      name: "Russia",        blurb: "Our flagship destination for affordable, NMC-recognised MBBS." },
    { key: "georgia",     name: "Georgia" },
    { key: "kyrgyzstan",  name: "Kyrgyzstan" },
    { key: "kazakhstan",  name: "Kazakhstan" },
    { key: "belarus",     name: "Belarus" },
    { key: "philippines", name: "Philippines" },
    { key: "armenia",     name: "Armenia" },
    { key: "india",       name: "India" },
    { key: "bosnia",      name: "Bosnia & Herzegovina" },
    { key: "japan",       name: "Japan" },
    { key: "korea",       name: "South Korea" },
    { key: "uk",          name: "United Kingdom" },
    { key: "usa",         name: "USA" },
    { key: "canada",      name: "Canada" },
    { key: "australia",   name: "Australia" },
    { key: "ireland",     name: "Ireland" },
    { key: "italy",       name: "Italy" },
    { key: "germany",     name: "Germany" }
  ];

  var TESTI = [
    { img: "assets/people/student1.jpg", quote: "Wings International guided me through every step of my admission. I honestly couldn't have done it without their support.", name: "Aarav Sharma", role: "MBBS, Russia" },
    { img: "assets/people/student2.jpg", quote: "Their team was extremely helpful and friendly. I secured a scholarship at a top university abroad.", name: "Priya Nair", role: "MBBS, Georgia" },
    { img: "assets/people/student3.jpg", quote: "My dream to study abroad came true thanks to Wings. Genuinely, highly recommended to every student.", name: "Rohan Patil", role: "MBBS, Kazakhstan" }
  ];

  var flag = function (k) { return "assets/flags/" + k + ".png"; };
  var land = function (k) { return "assets/landmarks/" + k + ".jpg"; };
  var arrowSVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17 17 7M9 7h8v8"/></svg>';

  function $(s, ctx) { return (ctx || document).querySelector(s); }

  /* ---------- Build destinations grid ---------- */
  (function buildDest() {
    var grid = $("#destGrid");
    if (!grid) return;
    var html = "";
    DEST.forEach(function (d, i) {
      var featured = i === 0;
      html += '<a class="dest-card' + (featured ? " featured" : "") + '" href="country.html?c=' + d.key + '" aria-label="Study in ' + d.name + '">';
      html += '<img src="' + land(d.key) + '" alt="' + d.name + ' landmark" loading="lazy" />';
      html += '<div class="go">' + arrowSVG + "</div>";
      html += '<div class="dest-meta"><img src="' + flag(d.key) + '" alt="" /><div><div class="dname">' + d.name + "</div>";
      if (featured && d.blurb) html += '<div class="dlead">' + d.blurb + "</div>";
      html += "</div></div></a>";
    });
    grid.innerHTML = html;
  })();

  /* ---------- Mega menu + footer destinations ---------- */
  (function buildMenus() {
    var mega = $("#megaGrid");
    if (mega) {
      var mh = '<div class="mega-title">18 Destinations</div>';
      DEST.forEach(function (d) {
        mh += '<a class="mega-item" href="country.html?c=' + d.key + '"><img src="' + flag(d.key) + '" alt="" />' + d.name + "</a>";
      });
      mega.innerHTML = mh;
    }
    var fd = $("#footDest");
    if (fd) {
      var picks = ["russia", "georgia", "germany", "uk", "canada", "australia"];
      fd.innerHTML = picks.map(function (k) {
        var d = DEST.filter(function (x) { return x.key === k; })[0];
        return '<li><a href="country.html?c=' + d.key + '">' + d.name + "</a></li>";
      }).join("");
    }
  })();

  /* ---------- Marquee (partner logos + words) ---------- */
  (function buildMarquee() {
    var track = $("#marqueeTrack");
    if (!track) return;
    var items = [
      '<img src="assets/logos/ku.png" alt="Kazan University" />',
      '<span class="word">Monash</span>',
      '<img src="assets/logos/monash.png" alt="Monash University" />',
      '<span class="word">NMC Recognised</span>',
      '<img src="assets/logos/unsw.png" alt="UNSW" />',
      '<span class="word">WHO Listed</span>',
      '<span class="word">FAIMER</span>'
    ];
    track.innerHTML = (items.join("") + items.join(""));
  })();

  /* ---------- Build testimonials ---------- */
  (function buildTesti() {
    var track = $("#testiTrack");
    var dots = $("#testiDots");
    if (!track) return;
    track.innerHTML = TESTI.map(function (t) {
      return '<div class="testi-slide"><div class="ph"><img src="' + t.img + '" alt="' + t.name + '" /></div>' +
             '<div><blockquote>&ldquo;' + t.quote + '&rdquo;</blockquote>' +
             '<div class="who">' + t.name + "<span>" + t.role + "</span></div></div></div>";
    }).join("");
    dots.innerHTML = TESTI.map(function (_, i) {
      return '<button class="tdot' + (i === 0 ? " active" : "") + '" data-i="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>';
    }).join("");

    var idx = 0;
    function go(n) {
      idx = (n + TESTI.length) % TESTI.length;
      track.style.transform = "translateX(-" + idx * 100 + "%)";
      Array.prototype.forEach.call(dots.children, function (d, i) {
        d.classList.toggle("active", i === idx);
      });
    }
    $("#testiNext").addEventListener("click", function () { go(idx + 1); reset(); });
    $("#testiPrev").addEventListener("click", function () { go(idx - 1); reset(); });
    Array.prototype.forEach.call(dots.children, function (d) {
      d.addEventListener("click", function () { go(+d.getAttribute("data-i")); reset(); });
    });
    var timer = setInterval(function () { go(idx + 1); }, 6000);
    function reset() { clearInterval(timer); timer = setInterval(function () { go(idx + 1); }, 6000); }
  })();

  /* ---------- Reveal on scroll (robust: never stays hidden) ---------- */
  (function reveals() {
    var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function canAnimate() { return !reduce && document.visibilityState === "visible"; }
    function snap(el) { el.style.transition = "none"; el.style.transitionDelay = "0s"; el.classList.add("in"); }
    function reveal(el, pos) {
      if (el.classList.contains("in")) return;
      if (!canAnimate()) { snap(el); return; }     // transitions stall in hidden/inactive views → show instantly
      el.style.transitionDelay = Math.min(pos || 0, 8) * 0.07 + "s";
      el.classList.add("in");
    }
    function check() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(function (e) {
        if (e.classList.contains("in")) return;
        var r = e.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > -50) {
          var sibs = e.parentElement.querySelectorAll(":scope > .reveal");
          var pos = Array.prototype.indexOf.call(sibs, e);
          reveal(e, pos);
        }
      });
    }
    function snapAll() { els.forEach(function (e) { if (!e.classList.contains("in")) snap(e); }); }

    check();
    requestAnimationFrame(check);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    window.addEventListener("load", check);
    // If the page is/!becomes hidden, transitions won't run — guarantee visibility.
    document.addEventListener("visibilitychange", function () { if (document.hidden) snapAll(); });
    // Unconditional failsafe: nothing stays hidden past ~0.9s.
    setTimeout(snapAll, 900);
  })();

  /* ---------- Animated counters ---------- */
  (function counters() {
    var nums = document.querySelectorAll(".num[data-count]");
    var fmt = function (n) { return n.toLocaleString("en-US"); };
    function setFinal(el) {
      var target = +el.getAttribute("data-count");
      var suffix = el.getAttribute("data-suffix") || "";
      el.innerHTML = fmt(target) + '<span class="suffix">' + suffix + "</span>";
    }
    function run(el) {
      if (el.getAttribute("data-done")) return;
      el.setAttribute("data-done", "1");
      // rAF is paused in hidden/inactive views → just show the final number.
      if (document.visibilityState !== "visible") { setFinal(el); return; }
      var target = +el.getAttribute("data-count");
      var suffix = el.getAttribute("data-suffix") || "";
      var dur = 1800, start = null;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.innerHTML = fmt(Math.floor(eased * target)) + '<span class="suffix">' + suffix + "</span>";
        if (p < 1) requestAnimationFrame(step);
        else el.innerHTML = fmt(target) + '<span class="suffix">' + suffix + "</span>";
      }
      requestAnimationFrame(step);
    }
    function manual() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      nums.forEach(function (n) {
        if (n.getAttribute("data-done")) return;
        var r = n.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) run(n);
      });
    }
    manual();
    window.addEventListener("scroll", manual, { passive: true });
    window.addEventListener("load", manual);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) nums.forEach(function (n) { if (!n.getAttribute("data-done")) { n.setAttribute("data-done", "1"); setFinal(n); } });
    });
    // Failsafe: ensure final numbers show even if nothing triggered.
    setTimeout(function () { nums.forEach(function (n) { if (!n.getAttribute("data-done")) { n.setAttribute("data-done", "1"); setFinal(n); } }); }, 1000);
  })();

  /* ---------- Nav: shrink on scroll (stays sticky) ---------- */
  (function navScroll() {
    var nav = $("#nav");
    window.addEventListener("scroll", function () {
      nav.classList.toggle("shrink", window.scrollY > 20);
      nav.classList.remove("hide");
    }, { passive: true });
  })();

  /* ---------- Hero parallax ---------- */
  (function parallax() {
    var img = $("#heroImg");
    if (!img) return;
    var ticking = false;
    function update() {
      if (document.documentElement.getAttribute("data-motion") === "off") { img.style.transform = ""; ticking = false; return; }
      var y = window.scrollY;
      if (y < 900) img.style.transform = "translateY(" + y * 0.12 + "px) scale(1.02)";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
  })();

  /* ---------- Mobile drawer ---------- */
  (function drawer() {
    var d = $("#drawer"), t = $("#navToggle");
    if (!d || !t) return;
    t.addEventListener("click", function () { d.classList.add("open"); document.body.style.overflow = "hidden"; });
    d.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close") || e.target.closest("[data-close]")) {
        d.classList.remove("open"); document.body.style.overflow = "";
      }
    });
  })();

  /* ---------- Smooth anchor scrolling ---------- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href");
    if (id.length < 2) return;
    var tgt = document.querySelector(id);
    if (!tgt) return;
    e.preventDefault();
    var top = tgt.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: top, behavior: "smooth" });
  });

  /* ---------- Lead form ---------- */
  (function leadForm() {
    var form = $("#leadForm"), success = $("#formSuccess");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.style.display = "none";
      success.classList.add("show");
    });
  })();
})();
