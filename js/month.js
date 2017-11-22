(async function() {
  if (document.querySelector('.month').length === 0) return;

  const btnAbout = document.querySelector('.btn-about');
  const btnToday = document.querySelector('.btn-today');

  btnAbout.addEventListener('click', (ev) => { window.location.href = 'about.html' });
  btnToday.addEventListener('click', (ev) => { window.location.href = 'today.html' });

  const deviceId = 01;
  const feelingsRequest = await fetch(`https://hayft-55a4a.firebaseio.com/${deviceId}.json`);
  const feelingsData = await feelingsRequest.json();
  const feelings =  Object.values(feelingsData);
  const db = { deviceId: deviceId, days: feelings };

  localStorage.setItem("feelings", JSON.stringify(db));
})();
