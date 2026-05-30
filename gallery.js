/* Wings International — gallery grid + lightbox */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };

  // Build item list (interleave photos & documents, matching original order)
  var items = [
    ["i1", "photo"], ["i2", "photo"], ["p1", "doc"], ["i3", "photo"], ["p2", "doc"],
    ["i4", "photo"], ["i5", "photo"], ["p3", "doc"], ["i6", "photo"], ["p4", "doc"],
    ["i7", "photo"], ["p5", "doc"], ["i8", "photo"], ["p6", "doc"], ["i9", "photo"],
    ["p7", "doc"], ["i10", "photo"], ["p8", "doc"], ["p9", "doc"], ["i11", "photo"],
    ["i12", "photo"], ["i13", "photo"], ["i14", "photo"], ["i15", "photo"]
  ].map(function (x) {
    return { src: "assets/gallery/" + x[0] + ".jpg", type: x[1],
      tag: x[1] === "doc" ? "Document" : "Photo" };
  });

  var grid = $("galleryGrid");
  grid.innerHTML = items.map(function (it, i) {
    return '<a class="g-item" data-type="' + it.type + '" data-i="' + i + '" role="button" tabindex="0">' +
      '<img src="' + it.src + '" alt="Wings International gallery — ' + it.tag + '" loading="lazy" />' +
      '<span class="g-tag">' + it.tag + "</span></a>";
  }).join("");

  // ---- Filters ----
  var filterBar = $("gpFilters");
  filterBar.addEventListener("click", function (e) {
    var btn = e.target.closest(".gp-filter");
    if (!btn) return;
    filterBar.querySelectorAll(".gp-filter").forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    var f = btn.getAttribute("data-filter");
    grid.querySelectorAll(".g-item").forEach(function (el) {
      var show = f === "all" || el.getAttribute("data-type") === f;
      el.classList.toggle("hide", !show);
    });
  });

  // ---- Lightbox ----
  var lb = $("lightbox"), lbImg = $("lbImg"), lbCount = $("lbCount");
  var cur = 0;
  function visibleItems() {
    return Array.prototype.slice.call(grid.querySelectorAll(".g-item:not(.hide)"));
  }
  function openAt(el) {
    var vis = visibleItems();
    cur = vis.indexOf(el);
    render();
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function render() {
    var vis = visibleItems();
    if (!vis.length) return;
    if (cur < 0) cur = vis.length - 1;
    if (cur >= vis.length) cur = 0;
    var img = vis[cur].querySelector("img");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCount.textContent = (cur + 1) + " / " + vis.length;
  }
  function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }
  function step(d) { cur += d; render(); }

  grid.addEventListener("click", function (e) {
    var el = e.target.closest(".g-item");
    if (el) { e.preventDefault(); openAt(el); }
  });
  grid.addEventListener("keydown", function (e) {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("g-item")) {
      e.preventDefault(); openAt(e.target);
    }
  });
  $("lbClose").addEventListener("click", close);
  $("lbPrev").addEventListener("click", function () { step(-1); });
  $("lbNext").addEventListener("click", function () { step(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });

  // ---- Footer destinations ----
  var fd = $("footDest");
  if (fd) {
    [["russia", "Russia"], ["georgia", "Georgia"], ["kazakhstan", "Kazakhstan"],
     ["kyrgyzstan", "Kyrgyzstan"], ["belarus", "Belarus"], ["philippines", "Philippines"]
    ].forEach(function (c) {
      fd.insertAdjacentHTML("beforeend", '<li><a href="country.html?c=' + c[0] + '">' + c[1] + "</a></li>");
    });
  }
})();
