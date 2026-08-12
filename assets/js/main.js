/* Leon Mayer Fund — minimal progressive enhancement (mobile nav only). */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close the menu when a link is tapped or when the viewport grows past the breakpoint.
  document.querySelector('.nav').addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 940) {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
