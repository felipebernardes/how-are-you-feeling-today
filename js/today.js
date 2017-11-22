(function() {
  if (document.querySelector('.today').length === 0) return;

  const btnAbout = document.querySelector('.btn-about');
  const btnMonth = document.querySelector('.btn-month');
  const choices = document.querySelectorAll('.choice-button');
  const deviceId = 01;

  btnAbout.addEventListener('click', (ev) => { window.location.href = 'about.html' });
  btnMonth.addEventListener('click', (ev) => { window.location.href = 'month.html' });

  function updateFeeling(feeling) {
    todayId = localStorage.getItem("todayId");
    const url = `https://hayft-55a4a.firebaseio.com/${deviceId}/${todayId}/feeling.json`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(feeling),
    }).then(function(response) {
      response.json().then(function(data){
        console.log(data);
      });
    })
    .catch(function(error) {
      console.log('An error has ocurred: ' + error.message);
    });
  }

  function addFeeling(feeling) {
    const url = `https://hayft-55a4a.firebaseio.com/${deviceId}.json`;

    now = new Date();
    today = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString();

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        date: new Date(),
        feeling: feeling
      }),
    }).then(function (response) {
        response.json().then(function(data){
          console.log(data);
          localStorage.setItem("todayId", data.name);
        });
    }).catch(function(error) {
      console.log('An error has ocurred: ' + error.message);
    });
  }

  choices.forEach(choice => {
    choice.addEventListener('click', (ev) => {
      feeling = choice.getAttribute("data-feeling");
      if (localStorage.getItem("todayId")) {
        updateFeeling(feeling);
      } else {
        addFeeling(feeling);
      }
    });
  })
})();
