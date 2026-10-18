// 모바일 메뉴 열고 닫기
(function () {
  var btn = document.querySelector('.menu-btn');
  if (!btn) return;
  var root = document.documentElement;
  function setOpen(open) {
    root.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  }
  btn.addEventListener('click', function () {
    setOpen(!root.classList.contains('menu-open'));
  });
  document.querySelectorAll('.drawer a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
