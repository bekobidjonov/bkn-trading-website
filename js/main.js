// Language switch: Japanese is the default, English is optional.
(function () {
  var root = document.documentElement;

  function setLang(lang) {
    root.setAttribute('lang', lang);
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.classList.toggle('on', b.dataset.lang === lang);
      b.setAttribute('aria-pressed', b.dataset.lang === lang);
    });
    var title = document.querySelector('title');
    if (title && title.dataset[lang]) title.textContent = title.dataset[lang];
    try { localStorage.setItem('bkn-lang', lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem('bkn-lang'); } catch (e) {}
  setLang(saved === 'en' ? 'en' : 'ja');

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

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
