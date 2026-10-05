(function () {
  var root = document.documentElement;

  // Language: Japanese by default, English optional (remembered per browser)
  function setLang(lang) {
    root.setAttribute('lang', lang);
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on);
    });
    var title = document.querySelector('title');
    if (title && title.dataset[lang]) title.textContent = title.dataset[lang];
    try { localStorage.setItem('bkn-lang', lang); } catch (e) {}
  }
  setLang(root.getAttribute('lang') === 'en' ? 'en' : 'ja');
  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
  }

  // Header border on scroll
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 0.08 + 's';
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Vehicle gallery filter
(function () {
  var chips = document.querySelectorAll('.chip');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      chips.forEach(function (x) { x.classList.toggle('on', x === c); });
      var f = c.dataset.filter;
      document.querySelectorAll('.car').forEach(function (car) {
        var show = f === 'all' || car.dataset.cat === f;
        car.classList.toggle('hide', !show);
        if (show) car.classList.add('in');
      });
    });
  });
})();
