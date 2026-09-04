"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, staggerReveal, parallaxVar, parallaxY, scrubWords, magneticButtons, revealLines, prefersReduced } from "@/lib/animations";

/** Home page choreography: hero intro, manifesto scrub, pinned Lu, parallax. */
export default function Motion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      revealLines(".hero .line__inner");
      // the CTA headline uses the same line mask as the hero, but nothing ever
      // revealed it, so it stayed parked at translateY(110%) and read as missing
      revealLines(".cta .line__inner", 0);
      staggerReveal(".cta__content p, .cta__actions");
      gsap.from(".hero__proof", { y: 24, autoAlpha: 0, duration: 0.8, delay: 0.75 });
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

      parallaxVar(".bundle", [26, 26, 26]);
      parallaxVar(".post", [22, 22, 22]);
      parallaxY(".section-head h2", 26);
      parallaxY(".manifesto__text", 34);

      // The featured post was the only card in the section with no entrance,
      // so it read as the flattest thing on a page full of movement.
      if (!prefersReduced()) {
        const fp = document.querySelector<HTMLElement>(".feature-post");
        if (fp) {
          gsap
            .timeline({ scrollTrigger: { trigger: fp, start: "top 80%", once: true } })
            .from(fp, { y: 44, autoAlpha: 0, duration: 0.85, ease: "power3.out" })
            .from(fp.querySelector(".feature-post__img img"), { scale: 1.2, duration: 1.4, ease: "power3.out" }, "-=0.75")
            .from(
              fp.querySelectorAll(".feature-post__body > *"),
              { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.09, ease: "power3.out" },
              "-=1.05",
            )
            .from(
              fp.querySelector(".feature-post__badge"),
              { scale: 0, autoAlpha: 0, duration: 0.5, ease: "back.out(1.9)" },
              "-=0.6",
            );
        }
      }

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
