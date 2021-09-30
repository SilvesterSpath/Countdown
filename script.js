const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();

const halloweenTime = new Date(`October 31 ${currentYear} 00:00:00`);

function uptdateCountdown() {
  const present = new Date();
  /* present.getDate(); */

  const diff = halloweenTime - present;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60);
  const min = Math.floor(diff / 1000 / 60);
  const sec = Math.floor(diff / 1000);

  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = min;
  seconds.innerText = sec;
}

/* uptdateCountdown(); */

setInterval(uptdateCountdown, 100);
