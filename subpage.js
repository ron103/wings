/* Shared behaviour for Wings sub-pages: sticky nav shrink + mobile drawer */
(function () {
  "use strict";
  var nav = document.getElementById("nav");
  if (nav) {
    window.addEventListener("scroll", function () {
      nav.classList.toggle("shrink", window.scrollY > 20);
    }, { passive: true });
  }
  var drawer = document.getElementById("drawer");
  var toggle = document.getElementById("navToggle");
  if (drawer && toggle) {
    var open = function () { drawer.classList.add("open"); document.body.style.overflow = "hidden"; };
    var close = function () { drawer.classList.remove("open"); document.body.style.overflow = ""; };
    toggle.addEventListener("click", open);
    drawer.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]") || e.target.classList.contains("drawer-scrim")) close();
    });
  }
})();
