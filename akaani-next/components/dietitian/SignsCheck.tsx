"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/Button";

/**
 * A self-check, not a list. Reading six symptoms is passive; picking the ones
 * that apply makes the reader argue the case to themselves, which is the whole
 * job of this section. The card itself carries the state, so the section fills
 * with ink as the case builds and the count is legible at a glance.
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
      ? "Pick the ones that sound like you."
      : n === 1
        ? "Even one is worth a conversation."
        : `${n} of ${signs.length}. That is exactly what the session is for.`;

  return (
    <div className="mx-auto max-w-[1000px]">
      <div
        role="group"
        aria-label="Signs you might need a dietitian"
        className="grid gap-[clamp(10px,1.2vw,14px)] sm:grid-cols-2"
      >
        {signs.map((s, i) => {
          const on = picked.includes(i);
          return (
            <motion.button
              key={s}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(i)}
              whileHover={reduced ? undefined : { y: -3 }}
              whileTap={reduced ? undefined : { scale: 0.985 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              className={`flex w-full cursor-pointer items-center rounded-[18px] border p-[clamp(18px,2vw,24px)] text-left text-[0.99rem] leading-[1.5] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                on
                  ? "border-ink bg-ink font-semibold text-bg"
                  : "border-line bg-white text-ink-soft hover:border-ink/30"
              }`}
            >
              {s}
            </motion.button>
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
