"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, staggerReveal, parallaxVar, magneticButtons, revealLines } from "@/lib/animations";

export default function Motion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      revealLines(".jh h1 .line__inner");
      gsap.from(".jh__kicker-row", { y: 24, autoAlpha: 0, duration: 0.7, delay: 0.3 });
      gsap.from(".jh__filters button", { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.07, delay: 0.5 });

      const feat = document.querySelector<HTMLElement>("#featCard");
      if (feat) {
        gsap.set(feat, { clipPath: "inset(0 100% 0 0 round 28px)" });
        gsap.set(".jfeat__body > *", { autoAlpha: 0, y: 30 });
        ScrollTrigger.create({
          trigger: feat,
          start: "top 82%",
          once: true,
          onEnter: () => {
            gsap.to(feat, { clipPath: "inset(0 0% 0 0 round 28px)", duration: 1.1, ease: "power4.inOut" });
            gsap.to(".jfeat__body > *", { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.5 });
          },
        });
      }

      staggerReveal(".jpost", { lift: false, stagger: 0.1 });
      staggerReveal(".jnews__inner");
      parallaxVar(".jpost", [12, 38, 20, 44, 16, 34]);

      ScrollTrigger.refresh();
    });
    const cleanup = magneticButtons();
    return () => { cleanup(); ctx.revert(); };
  }, []);

  return null;
}
