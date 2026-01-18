gsap.registerPlugin(ScrollTrigger);


gsap.to(".water-layer", {
  scale: 1.2,
  scrollTrigger: {
    scrub: true
  }
});


const panels = gsap.utils.toArray(".panel");

gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal",
    pin: true,
    scrub: 1,
    end: "+=3000"
  }
});

gsap.utils.toArray(".feature-card img").forEach(img => {
  gsap.to(img, {
    y: -20,
    scrollTrigger: {
      trigger: img,
      scrub: true
    }
  });
});
