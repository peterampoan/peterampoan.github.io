// Typewriter effect for the role line; skipped when the user prefers reduced motion.
(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  var el = document.getElementById("typed");
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var text = el.dataset.text;
  var i = 0;
  el.textContent = "";

  function tick() {
    el.textContent = text.slice(0, ++i);
    if (i < text.length) setTimeout(tick, 45);
  }
  setTimeout(tick, 400);
})();
