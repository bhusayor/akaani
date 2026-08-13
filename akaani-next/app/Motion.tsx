"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, staggerReveal, parallaxVar, parallaxY, scrubWords, magneticButtons, revealLines, prefersReduced } from "@/lib/animations";

/** Home page choreography: hero intro, manifesto scrub, pinned Lu, parallax. */
export default function Motion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      revealLines(".hero .line__inner");
      gsap.from(".hero__eyebrow", { y: 24, autoAlpha: 0, duration: 0.8, delay: 0.3 });
      gsap.from(".hero__desc", { y: 30, autoAlpha: 0, duration: 0.9, delay: 0.5 });
      gsap.from(".hero__actions .btn", { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.1, delay: 0.7 });
      gsap.from(".hero__pop", { scale: 0, autoAlpha: 0, duration: 0.6, ease: "back.out(1.8)", stagger: 0.14, delay: 0.9 });

      scrubWords("#manifestoHeadline", ".manifesto");
      scrubWords("#manifestoBody", ".manifesto");
      scrubWords("#bridgeText", ".bridge", ["akaani"]);

      staggerReveal(".section-head");
      staggerReveal(".bundle", { lift: false, stagger: 0.15 });
      staggerReveal(".post", { lift: false, stagger: 0.12 });
      staggerReveal(".faq__item", { stagger: 0.08 });
      staggerReveal(".faq__head");
      staggerReveal(".waitlist__inner");

      parallaxVar(".bundle", [16, 46, 28]);
      parallaxVar(".post", [14, 44, 24]);
      parallaxY(".section-head h2", 26);
      parallaxY(".manifesto__text", 34);

      if (!prefersReduced()) {
        gsap.to(".hero__photo img", { y: -14, duration: 2.6, yoyo: true, repeat: -1, ease: "sine.inOut" });
      }

      ScrollTrigger.refresh();
    });
    const cleanup = magneticButtons();
    return () => { cleanup(); ctx.revert(); };
  }, []);

  return null;
}
