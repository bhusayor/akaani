"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, staggerReveal, parallaxVar, magneticButtons, prefersReduced } from "@/lib/animations";

export default function Motion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".rh .section-head__kicker, .rh h1, .rh__sub", { y: 44, autoAlpha: 0, duration: 0.9, stagger: 0.12, delay: 0.2 })
        .from(".rh__actions .btn", { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.5")
        .from(".rh__tick", { y: 18, autoAlpha: 0, duration: 0.5, stagger: 0.07 }, "-=0.4")
        .from(".rh__card--back", { y: 110, autoAlpha: 0, rotation: 14, duration: 1, ease: "power4.out" }, "-=0.9")
        .from(".rh__card--front", { y: 140, autoAlpha: 0, rotation: -12, duration: 1, ease: "power4.out" }, "-=0.8");

      if (!prefersReduced()) {
        gsap.to(".rh__card--front", { y: -12, duration: 2.6, yoyo: true, repeat: -1, ease: "sine.inOut" });
        gsap.to(".rh__card--back", { y: 10, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" });
      }

      staggerReveal(".inside__inner");
      staggerReveal(".shop__head");
      staggerReveal(".product", { lift: false, stagger: 0.12 });
      staggerReveal(".bridge2__inner");
      parallaxVar(".product", [14, 40, 20, 44]);

      ScrollTrigger.refresh();
    });
    const cleanup = magneticButtons();
    return () => { cleanup(); ctx.revert(); };
  }, []);

  return null;
}
