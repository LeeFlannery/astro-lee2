import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function runAnimations() {
  // Fade-in scroll animation
  gsap.utils.toArray(".fade-in").forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });
  });

  // You can add more animations here
}
