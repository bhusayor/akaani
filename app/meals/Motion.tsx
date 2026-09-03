"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, staggerReveal, parallaxVar, parallaxY, magneticButtons, revealLines, prefersReduced } from "@/lib/animations";

export default function Motion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      revealLines(".mh .line__inner");
      gsap.from(".mh__cities .mh__city", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.08, delay: 0.35 });
      gsap.from(".mh__desc", { y: 30, autoAlpha: 0, duration: 0.9, delay: 0.5 });
      gsap.from(".mh .hero__actions .btn", { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.1, delay: 0.6 });
      gsap.from(".mh__photo", { y: 80, autoAlpha: 0, rotation: -4, duration: 1, ease: "power4.out", delay: 0.3 });
      gsap.from(".mh__badge, .mh__badge2", { scale: 0, autoAlpha: 0, duration: 0.55, ease: "back.out(1.9)", stagger: 0.18, delay: 0.9 });

      if (!prefersReduced()) {
        gsap.to(".mh__badge", { y: -8, duration: 2.4, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.8 });
        gsap.to(".mh__badge2", { y: 7, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 2.1 });
        gsap.to("#mhVisual", { y: 60, ease: "none",
          scrollTrigger: { trigger: ".mh", start: "top top", end: "bottom top", scrub: true } });
      }

      ScrollTrigger.create({
        trigger: ".steps__grid",
        start: "top 82%",
        once: true,
        onEnter: () => gsap.fromTo(".step__rule i", { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: "power3.inOut", stagger: 0.18, delay: 0.2 }),
      });

      staggerReveal(".section-head");
      staggerReveal(".step", { stagger: 0.15 });
      staggerReveal(".plan-card", { stagger: 0.15 });
      staggerReveal(".dish", { lift: false, stagger: 0.12 });
      staggerReveal(".city", { stagger: 0.1 });
      staggerReveal(".faq__item", { stagger: 0.08 });
      staggerReveal(".faq__head");
      staggerReveal(".wform__inner");
      parallaxVar(".dish", [12, 38, 18, 44]);
      parallaxY(".section-head h2", 24);

      ScrollTrigger.refresh();
    });
    const cleanup = magneticButtons();
    return () => { cleanup(); ctx.revert(); };
  }, []);

  return null;
}
