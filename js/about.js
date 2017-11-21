(function() {
  if (document.querySelector('.about').length === 0) return;

  const btnToday = document.querySelector('.btn-today');
  const btnMonth = document.querySelector('.btn-month');

  btnToday.addEventListener('click', (ev) => { window.location.href = 'today.html' });
  btnMonth.addEventListener('click', (ev) => { window.location.href = 'month.html' });
})();
