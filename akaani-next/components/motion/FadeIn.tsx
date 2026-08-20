"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Seconds to wait before this element animates in. */
  delay?: number;
  /** Distance in px the element travels upward as it fades in. */
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "aside";
};

/**
 * Framer Motion viewport reveal. Runs once per element and respects
 * prefers-reduced-motion by rendering the final state immediately.
 */
export default function FadeIn({ children, delay = 0, y = 28, className, as = "div" }: Props) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
