"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, staggerReveal, parallaxVar, scrubWords, magneticButtons, revealLines, prefersReduced } from "@/lib/animations";

export default function Motion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      revealLines(".ah h1 .line__inner", 0.25);
      gsap.from(".ah .section-head__kicker", { y: 20, autoAlpha: 0, duration: 0.6, delay: 0.3 });
      gsap.from(".ah__sub", { y: 28, autoAlpha: 0, duration: 0.8, delay: 0.5 });
      gsap.from(".ah__actions .btn", { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.1, delay: 0.6 });
      gsap.from("#ahMascot", { y: 110, autoAlpha: 0, rotation: -7, duration: 0.9, ease: "back.out(1.5)", delay: 0.5 });
      if (!prefersReduced()) {
        gsap.to("#ahMascot svg", { y: -13, duration: 2.4, yoyo: true, repeat: -1, ease: "sine.inOut" });
      }

      scrubWords("#storyBody p", ".story");
      staggerReveal(".section-head");
      staggerReveal(".value", { stagger: 0.12 });
      staggerReveal(".member", { lift: false, stagger: 0.1 });
      staggerReveal(".acta__inner");
      parallaxVar(".member", [12, 38, 20, 34, 14, 44]);

      ScrollTrigger.refresh();
    });
    const cleanup = magneticButtons();
    return () => { cleanup(); ctx.revert(); };
  }, []);

  return null;
}
