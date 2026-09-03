"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * GSAP owns the scroll-driven choreography on this page (parallax, drift,
 * idle float). Entrance and interaction states are handled by Framer Motion
 * in the components themselves, so the two never animate the same property.
 */
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Hero photo lifts in, then the badges idle-float forever.
      gsap.from('[data-gsap="hero-visual"]', {
        y: 70,
        autoAlpha: 0,
        rotation: -3,
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.to('[data-gsap="price"]', {
        y: -8,
        duration: 2.4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.6,
      });
      gsap.to('[data-gsap="plan"]', {
        y: 7,
        duration: 2.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.9,
      });

      // The oversized word drifts as the hero scrolls away.
      gsap.to('[data-gsap="ghost"]', {
        xPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: '[data-gsap="ghost"]', start: "top bottom", end: "bottom top", scrub: true },
      });

      // Slow counter-scroll on the hero portrait.
      gsap.fromTo(
        '[data-gsap="hero-visual"] img',
        { yPercent: -3 },
        {
          yPercent: 3,
          ease: "none",
          scrollTrigger: { trigger: '[data-gsap="hero-visual"]', start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return null;
}
