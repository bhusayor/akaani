"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

/**
 * Attaches the animated open/close to server-rendered <details> accordions.
 * Used by pages whose FAQ markup is static.
 */
export default function FaqBehavior({ selector = ".faq__item" }: { selector?: string }) {
  useEffect(() => {
    const answerClass = selector.includes("faq2") ? ".faq2__answer" : ".faq__answer";
    const items = Array.from(document.querySelectorAll<HTMLDetailsElement>(selector));

    const handlers = items.map((item) => {
      const summary = item.querySelector("summary");
      const answer = item.querySelector<HTMLElement>(answerClass);
      if (!summary || !answer) return null;

      const onClick = (e: Event) => {
        e.preventDefault();
        if (item.open) {
          gsap.to(answer, {
            height: 0,
            autoAlpha: 0,
            duration: 0.4,
            ease: "power2.inOut",
            onComplete: () => {
              item.open = false;
              gsap.set(answer, { clearProps: "all" });
            },
          });
        } else {
          item.open = true;
          gsap.fromTo(
            answer,
            { height: 0, autoAlpha: 0 },
            {
              height: "auto",
              autoAlpha: 1,
              duration: 0.5,
              ease: "power3.out",
              onComplete: () => gsap.set(answer, { clearProps: "height" }),
            },
          );
        }
      };

      summary.addEventListener("click", onClick);
      return () => summary.removeEventListener("click", onClick);
    });

    return () => handlers.forEach((off) => off?.());
  }, [selector]);

  return null;
}
