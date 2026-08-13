"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, staggerReveal, drawRules, magneticButtons, prefersReduced } from "@/lib/animations";

/** Scroll and entrance choreography for the dietitian page. */
export default function Motion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".dh .section-head__kicker, .dh h1, .dh__sub", {
          y: 44,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.12,
          delay: 0.2,
        })
        .from(".dh__actions .btn", { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.5")
        .from(".dh__photo", { y: 90, autoAlpha: 0, rotation: -4, duration: 1, ease: "power4.out" }, "-=0.9")
        .from(
          ".dh__pricebadge, .dh__planbadge",
          { scale: 0, autoAlpha: 0, duration: 0.55, ease: "back.out(1.9)", stagger: 0.18, transformOrigin: "bottom left" },
          "-=0.4",
        );

      if (!prefersReduced()) {
        gsap.to(".dh__pricebadge", { y: -8, duration: 2.4, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.8 });
        gsap.to(".dh__planbadge", { y: 7, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 2.1 });
        gsap.to(".dh__ghost", {
          xPercent: -12,
          ease: "none",
          scrollTrigger: { trigger: ".dh", start: "top top", end: "bottom top", scrub: true },
        });
      }

      staggerReveal(".ask__head > *", { stagger: 0.1 });
      staggerReveal(".askpanel", { stagger: 0.14 });
      staggerReveal(".ask__foot");
      staggerReveal(".why__head > *", { stagger: 0.1 });
      staggerReveal(".whycard", { stagger: 0.12 });
      staggerReveal(".how__inner");
      staggerReveal(".guide__head > *", { stagger: 0.1 });
      staggerReveal(".guidecard", { stagger: 0.1 });
      staggerReveal(".guide__note");
      staggerReveal(".faq2__head");
      staggerReveal(".faq2__item", { lift: false, stagger: 0.07 });
      staggerReveal(".faq2__cta");
      drawRules();

      ScrollTrigger.refresh();
    });

    const cleanupMagnets = magneticButtons();
    return () => {
      cleanupMagnets();
      ctx.revert();
    };
  }, []);

  return null;
}
