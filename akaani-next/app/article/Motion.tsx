"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, magneticButtons, revealLines } from "@/lib/animations";

export default function Motion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      revealLines(".art__title .line__inner", 0.2);
      gsap.from(".art__back, .art__meta", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.08, delay: 0.3 });
      gsap.from(".art__author", { y: 20, autoAlpha: 0, duration: 0.6, delay: 0.5 });
      gsap.from("#artCover", { y: 70, autoAlpha: 0, duration: 1, ease: "power3.out", delay: 0.6 });

      const bar = document.querySelector<HTMLElement>("#progressBar");
      if (bar) {
        ScrollTrigger.create({
          trigger: "#artBody",
          start: "top 20%",
          end: "bottom 60%",
          onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
        });
      }

      gsap.utils.toArray<HTMLElement>("#artBody > *").forEach((el) => {
        gsap.from(el, { y: 34, autoAlpha: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>(".jpost, .section-head, .art__foot").forEach((el) => {
        gsap.from(el, { y: 50, autoAlpha: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });

      ScrollTrigger.refresh();
    });
    const cleanup = magneticButtons();
    return () => { cleanup(); ctx.revert(); };
  }, []);

  return null;
}
