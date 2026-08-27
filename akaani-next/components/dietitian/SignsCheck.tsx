"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/Button";

/**
 * A self-check, not a list. Reading six symptoms is passive; ticking the ones
 * that apply makes the reader argue the case to themselves, which is the whole
 * job of this section.
 */
export default function SignsCheck({ signs, cta }: { signs: string[]; cta: string }) {
  const [picked, setPicked] = useState<number[]>([]);
  const reduced = useReducedMotion();
  const n = picked.length;

  function toggle(i: number) {
    setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  }

  const verdict =
    n === 0
      ? "Tick the ones that sound like you."
      : n === 1
        ? "Even one is worth a conversation."
        : `${n} of ${signs.length}. That is exactly what the session is for.`;

  return (
    <div className="mx-auto max-w-[1000px] rounded-[28px] border border-line bg-white p-[clamp(20px,3vw,36px)]">
      <div role="group" aria-label="Signs you might need a dietitian" className="grid gap-x-[clamp(16px,2.4vw,32px)] sm:grid-cols-2">
        {signs.map((s, i) => {
          const on = picked.includes(i);
          return (
            <button
              key={s}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(i)}
              className="group flex w-full cursor-pointer items-start gap-3.5 border-b border-line py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span
                aria-hidden="true"
                className={`mt-[2px] grid h-[22px] w-[22px] flex-none place-items-center rounded-[7px] border-2 transition-colors duration-200 ${
                  on ? "border-accent bg-accent text-white" : "border-line text-transparent group-hover:border-ink/35"
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <path d="m5 12.5 4.5 4.5L19 7.5" />
                </svg>
              </span>
              <span
                className={`text-[0.99rem] leading-[1.5] transition-colors duration-200 ${
                  on ? "font-semibold text-ink" : "text-ink-soft"
                }`}
              >
                {s}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-[clamp(20px,2.4vw,28px)] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <motion.p
          key={verdict}
          initial={reduced ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          aria-live="polite"
          className={`text-[1.02rem] leading-[1.5] ${n >= 2 ? "font-bold text-ink" : "text-ink-soft"}`}
        >
          {verdict}
        </motion.p>
        <Button href={cta} external size="md" className="w-full flex-none sm:w-auto">
          Book consultation
        </Button>
      </div>
    </div>
  );
}
