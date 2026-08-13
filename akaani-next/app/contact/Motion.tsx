"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, magneticButtons, revealLines, prefersReduced } from "@/lib/animations";

export default function Motion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      revealLines(".ch h1 .line__inner", 0.2);
      gsap.from(".ch .section-head__kicker", { y: 20, autoAlpha: 0, duration: 0.6, delay: 0.3 });
      gsap.from(".ch__sub", { y: 26, autoAlpha: 0, duration: 0.8, delay: 0.45 });
      gsap.from(".ch__photo", { y: 90, autoAlpha: 0, rotation: -4, duration: 1, ease: "power4.out", delay: 0.4 });
      gsap.from(".ch__bubble, .ch__stamp", { scale: 0, autoAlpha: 0, duration: 0.55, ease: "back.out(2)", stagger: 0.18, delay: 0.9 });
      gsap.from(".chan__card", { y: 50, autoAlpha: 0, duration: 0.8, stagger: 0.1, delay: 0.5 });
      gsap.from(".cform", { y: 60, autoAlpha: 0, duration: 0.9, delay: 0.6 });

      if (!prefersReduced()) {
        gsap.to(".ch__bubble", { y: -8, duration: 2.4, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.6 });
        gsap.to(".ch__stamp", { y: 6, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.9 });
      }

      gsap.from(".cfaq__inner", { y: 50, autoAlpha: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".cfaq", start: "top 85%", once: true } });

      ScrollTrigger.refresh();
    });
    const cleanup = magneticButtons();
    return () => { cleanup(); ctx.revert(); };
  }, []);

  return null;
}
