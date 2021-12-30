const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();

const birthdayTime = new Date(`December 30 ${currentYear} 00:00:00`);

const today = new Date();
const currentDateTime = new Date(
  `${today.getMonth()} ${today.getDate()} ${currentYear}`
);

const age =
  currentDateTime < birthdayTime ? currentYear - 1994 - 1 : currentYear - 1994;

// Set background year
// year.innerText = `${age + 1}y`;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const newYearBirthday = new Date(`December 30 ${currentYear + 1} 00:00:00`)
  const diff = (birthdayTime < currentTime) ? newYearBirthday - currentTime : birthdayTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
