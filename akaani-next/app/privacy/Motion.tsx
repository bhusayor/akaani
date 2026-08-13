"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, magneticButtons } from "@/lib/animations";

/** Legal pages: reading progress bar and scroll-spy for the table of contents. */
export default function Motion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".lg__head > *", { y: 34, autoAlpha: 0, duration: 0.8, stagger: 0.1, delay: 0.2 })
        .from(".lgwrap__inner > *", { y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, "-=0.5");

      const bar = document.querySelector<HTMLElement>("#progressBar");
      if (bar) {
        ScrollTrigger.create({
          trigger: "#lgBody",
          start: "top 20%",
          end: "bottom 70%",
          onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
        });
      }

      document.querySelectorAll<HTMLElement>("#lgBody section[id]").forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec,
          start: "top 130px",
          end: "bottom 130px",
          onToggle: (self) => {
            if (!self.isActive) return;
            document.querySelectorAll<HTMLAnchorElement>(".lgtoc a").forEach((a) =>
              a.classList.toggle("is-on", a.getAttribute("href") === "#" + sec.id),
            );
          },
        });
      });

      ScrollTrigger.refresh();
    });
    const cleanup = magneticButtons();
    return () => { cleanup(); ctx.revert(); };
  }, []);

  return null;
}
