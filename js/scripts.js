/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// Language toggle (EN / VI), remembered across pages
(function () {
    var root = document.documentElement;
    var btns = document.querySelectorAll('.langs button');
    function set(l) {
        root.setAttribute('data-lang', l);
        root.setAttribute('lang', l);
        btns.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.set === l ? 'true' : 'false'); });
        try { localStorage.setItem('lang', l); } catch (e) {}
    }
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (saved !== 'vi' && saved !== 'en') {
        saved = (navigator.language || '').toLowerCase().indexOf('vi') === 0 ? 'vi' : 'en';
    }
    set(saved);
    btns.forEach(function (b) { b.addEventListener('click', function () { set(b.dataset.set); }); });
})();
