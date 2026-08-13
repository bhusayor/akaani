"use client";

import { useRef } from "react";
import { gsap } from "gsap";

export type FaqEntry = { q: string; a: string };

type FaqProps = {
  items: FaqEntry[];
  /** `plus` matches the dietitian design, `bar` the older home/meals styling. */
  variant?: "plus" | "bar";
};

/** Accordion with a height tween, so the open/close matches the static build. */
export default function Faq({ items, variant = "plus" }: FaqProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const cls = variant === "plus" ? "faq2" : "faq";

  const toggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const item = (e.currentTarget as HTMLElement).closest("details") as HTMLDetailsElement | null;
    if (!item) return;
    const answer = item.querySelector<HTMLElement>(`.${cls}__answer`);
    if (!answer) return;

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

  return (
    <div className={`${cls}__list`} ref={listRef}>
      {items.map((item) => (
        <details className={`${cls}__item`} key={item.q}>
          <summary onClick={toggle}>
            {item.q}
            <span className={`${cls}__icon`} />
          </summary>
          <div className={`${cls}__answer`}>
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
