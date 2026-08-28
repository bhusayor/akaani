"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/Button";

/**
 * A self-check, not a list. Ticking the ones that apply makes the reader argue
 * the case to themselves, which is the job of a section aimed at people who do
 * not yet think they need this.
 *
 * Each sign is its own bordered tile so it reads as tappable on a phone, where
 * a bare row with a hairline under it just looks like text.
 */
export default function SignsCheck({ signs, cta }: { signs: string[]; cta: string }) {
  const [picked, setPicked] = useState<number[]>([]);
  const reduced = useReducedMotion();
  const n = picked.length;
  const done = n >= 2;

  function toggle(i: number) {
    setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  }

  return (
    <div className="mx-auto max-w-[1000px]">
      {/* the count sits above the tiles, so the mechanic is clear before scrolling */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-[0.9rem] font-semibold text-ink-soft">Tap the ones that sound like you.</p>
        <p className="flex-none text-[0.8rem] font-extrabold uppercase tracking-[0.12em] text-ink/35">
          <span className={n ? "text-accent" : undefined}>{n}</span> / {signs.length}
        </p>
      </div>

      <div
        role="group"
        aria-label="Signs you might need a dietitian"
        className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {signs.map((s, i) => {
          const on = picked.includes(i);
          return (
            <button
              key={s}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(i)}
              className={`flex h-full w-full cursor-pointer items-start gap-3 rounded-2xl border-[1.5px] bg-white p-4 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-5 ${
                on ? "border-accent" : "border-line hover:border-ink/30"
              }`}
            >
              <span
                aria-hidden="true"
                className={`mt-[1px] grid h-[22px] w-[22px] flex-none place-items-center rounded-[7px] border-2 transition-colors duration-200 ${
                  on ? "border-accent bg-accent text-white" : "border-line text-transparent"
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <path d="m5 12.5 4.5 4.5L19 7.5" />
                </svg>
              </span>
              <span className={`text-[0.96rem] leading-[1.45] transition-colors duration-200 ${on ? "font-semibold text-ink" : "text-ink-soft"}`}>
                {s}
              </span>
            </button>
          );
        })}
      </div>

      {/* the verdict turns into a solid panel once enough is ticked to matter */}
      <motion.div
        initial={false}
        animate={reduced ? undefined : { scale: done ? 1 : 0.995 }}
        transition={{ duration: 0.25 }}
        className={`mt-3 flex flex-col items-center gap-4 rounded-2xl border-[1.5px] p-5 text-center transition-colors duration-300 sm:flex-row sm:justify-between sm:text-left ${
          done ? "border-ink bg-ink text-bg" : "border-line bg-white"
        }`}
      >
        <p aria-live="polite" className="text-[1rem] leading-[1.5]">
          {n === 0 ? (
            <span className="text-ink-soft">Nothing ticked yet. Most people recognise two or three.</span>
          ) : n === 1 ? (
            <span className="text-ink-soft">
              <b className="text-ink">One is enough.</b> That is a conversation worth having.
            </span>
          ) : (
            <>
              <b>{n} of {signs.length}.</b> <span className="text-bg/65">That is exactly what the session is for.</span>
            </>
          )}
        </p>
        <Button
          href={cta}
          external
          size="md"
          variant={done ? "accent" : "dark"}
          className={`w-full flex-none sm:w-auto ${done ? "hover:bg-white hover:text-ink" : ""}`}
        >
          Book consultation
        </Button>
      </motion.div>
    </div>
  );
}
