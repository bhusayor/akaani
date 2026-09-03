"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Card wrapper that lifts on hover with a spring, and reveals itself on
 * first scroll into view. Used where a whole card is one hover target.
 */
export default function HoverLift({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduced ? undefined : { y: -6, transition: { type: "spring", stiffness: 340, damping: 24 } }}
    >
      {children}
    </motion.article>
  );
}
