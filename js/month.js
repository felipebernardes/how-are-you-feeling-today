(async function() {
  if (document.querySelector('.month').length === 0) return;

  const btnAbout = document.querySelector('.btn-about');
  const btnToday = document.querySelector('.btn-today');

  btnAbout.addEventListener('click', (ev) => { window.location.href = 'about.html' });
  btnToday.addEventListener('click', (ev) => { window.location.href = 'today.html' });
})();
