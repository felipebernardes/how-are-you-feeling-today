(function() {
  if (document.querySelector('.today').length === 0) return;

  const btnAbout = document.querySelector('.btn-about');
  const btnMonth = document.querySelector('.btn-month');
  const choices = document.querySelectorAll('.choice-button');

  btnAbout.addEventListener('click', (ev) => { window.location.href = 'about.html' });
  btnMonth.addEventListener('click', (ev) => { window.location.href = 'month.html' });

  choices.forEach(choice => {
    choice.addEventListener('click', (ev) => {
      alert('mock');
    });
  })
})();
