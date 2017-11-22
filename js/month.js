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
  const mock = {"deviceId":1,"days":[{"date":"2017-11-21","feeling":"happy"},{"date":"2017-11-22","feeling":"sad"}]};

  const calendar = document.querySelector('.calendar tbody');


  const daysOfCurrentMonth = getDaysInMonth(new Date().getMonth(), new Date().getFullYear());

  let firstWeekDay = new Date(daysOfCurrentMonth[0]).getDay();

  daysOfCurrentMonth.forEach(day => {
    const dayOfWeek = day.getDay();
    const dayOfMonth = day.getDate();
    let currentRow;

    if (firstWeekDay < 7) {
      currentRow = 0;
    } else if (dayOfMonth > 7 && dayOfMonth <= 14) {
      currentRow = 1;
    } else if (dayOfMonth > 14 && dayOfMonth <= 21) {
      currentRow = 2;
    } else if (dayOfMonth > 21 && dayOfMonth <= 28) {
      currentRow = 2;
    }
    const tds = calendar.querySelectorAll('td');

    tds[dayOfWeek].innerHTML = dayOfMonth;
  });

  const calendarEntriesMarkup = mock.days.map(day => {
    let date = luxon.DateTime.fromISO(day.date);
    return `<td class="${day.feeling}">${date.get('day')}</td>`
  }).join("");

  //calendar.innerHTML = calendarEntriesMarkup;

  function getDaysInMonth(month, year) {
       var date = new Date(year, month, 1);
       var days = [];
       while (date.getMonth() === month) {
          days.push(new Date(date));
          date.setDate(date.getDate() + 1);
       }
       return days;
  }
})();
