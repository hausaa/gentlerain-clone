// animations.js
const words = ["Practice", "Upskill", "Play", "Improve"];
let index = 0;
const textEl = document.querySelector(".rotating-text");

setInterval(() => {
  index = (index + 1) % words.length;
  textEl.textContent = words[index];
}, 2000);
