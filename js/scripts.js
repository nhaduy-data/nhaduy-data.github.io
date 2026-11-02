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

// Round tabs on the home page
(function () {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.segs [role="tab"]'));
    if (!tabs.length) return;
    function show(tab, focus) {
        tabs.forEach(function (x) {
            var on = x === tab;
            x.setAttribute('aria-selected', on ? 'true' : 'false');
            x.tabIndex = on ? 0 : -1;
            document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
        });
        if (focus) tab.focus();
    }
    tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () { show(tab); });
        tab.addEventListener('keydown', function (e) {
            var j = null;
            if (e.key === 'ArrowRight') j = (i + 1) % tabs.length;
            if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
            if (j !== null) { e.preventDefault(); show(tabs[j], true); }
        });
    });
})();
