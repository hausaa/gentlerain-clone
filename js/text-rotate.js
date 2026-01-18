const words = ["Practice", "Upskill", "Play", "Improve"];
let index = 0;
const el = document.querySelector(".rotate");

gsap.timeline({ repeat: -1 })
  .to(el, { opacity: 0, duration: 0.5 })
  .call(() => {
    index = (index + 1) % words.length;
    el.textContent = words[index];
  })
  .to(el, { opacity: 1, duration: 0.5 })
  .delay(1.2);
