(function() {
  if (document.querySelector('.today').length === 0) return;

  const btnAbout = document.querySelector('.btn-about');
  const btnMonth = document.querySelector('.btn-month');
  const choices = document.querySelectorAll('.choice-button');

  btnAbout.addEventListener('click', (ev) => { window.location.href = 'about.html' });
  btnMonth.addEventListener('click', (ev) => { window.location.href = 'month.html' });

  function addFeeling(feeling) {
    deviceId = 01;
    const url = `https://hayft-55a4a.firebaseio.com/${deviceId}.json`;

    now = new Date();
    today = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString();

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        date: new Date(),
        feeling: feeling
      }),
    });
  }

  choices.forEach(choice => {
    choice.addEventListener('click', (ev) => {
      feeling = choice.getAttribute("data-feeling");
      addFeeling(feeling);
    });
  })
})();
