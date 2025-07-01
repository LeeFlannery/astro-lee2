import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function runAnimations() {
  // Initial page load fade-in animation
  gsap.fromTo('.fade-in', 
    {
      opacity: 0,
      y: 30,
      duration: 0
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2
    }
  );

  // Scroll-triggered animations for elements that come into view
  gsap.utils.toArray(".scroll-fade-in").forEach(el => {
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
