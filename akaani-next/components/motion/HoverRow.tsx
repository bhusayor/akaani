"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Row in the guide contents list. Nudges right on hover so the whole
 * list feels alive without any fill colour.
 */
export default function HoverRow({
  children,
  className,
  index = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  as?: "div" | "li";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduced ? undefined : { x: 6, transition: { type: "spring", stiffness: 380, damping: 26 } }}
    >
      {children}
    </MotionTag>
  );
}
