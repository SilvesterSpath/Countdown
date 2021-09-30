const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const halloweenTime = new Date(`October 31 ${currentYear} 00:00:00`);

// Set background year
year.innerText = currentYear;

// Update countdown time
function uptdateCountdown() {
  countdown.classList.add('show');
  const present = new Date();
  /* present.getDate(); */

  const diff = halloweenTime - present;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24; //this is the modulo operator wich gives us the remainding if the 24 divident
  const min = Math.floor(diff / 1000 / 60) % 60;
  const sec = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerText = d;
  hours.innerText = h < 10 ? '0' + h : h;
  minutes.innerText = min < 10 ? '0' + min : min;
  seconds.innerText = sec < 10 ? '0' + sec : sec;
}

// Show spinner before countdown
/* setTimeout(() => {
  /* loading.remove(); */
/* countdown.style.visibility = 'visible'; 
}, 1000); */

// Run every second
setInterval(uptdateCountdown, 100);
