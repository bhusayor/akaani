"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type FaqItem = { q: string; a: string };

/** Accordion with a Framer Motion height transition. */
export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <div className="mx-auto max-w-[900px] border-t border-line">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-5 py-6 pr-1 text-left text-[clamp(1rem,1.2vw,1.1rem)] font-semibold text-ink transition-colors duration-300 hover:text-accent"
            >
              {item.q}
              <span
                className={
                  "grid h-7 w-7 flex-none place-items-center rounded-full border-[1.5px] transition-colors duration-300 " +
                  (open ? "border-accent" : "border-line")
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={
                    "h-3 w-3 text-accent transition-transform duration-300 ease-brand " +
                    (open ? "rotate-180" : "rotate-0")
                  }
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="answer"
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 pr-11 text-[1rem] leading-[1.65] text-ink-soft">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
