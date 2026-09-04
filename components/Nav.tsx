"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { href: "/meals", label: "Meals" },
  { href: "/dietitian", label: "Dietitian" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;

type NavProps = {
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  /** Pages with a dark hero start transparent and turn solid on scroll. */
  transparentOnTop?: boolean;
};

export default function Nav({
  ctaLabel = "Get app",
  ctaHref = "/#cta",
  ctaExternal = false,
  transparentOnTop = false,
}: NavProps) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(!transparentOnTop);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ctaClass =
    "hidden md:inline-flex items-center justify-center rounded-full bg-accent px-[26px] py-3 text-[0.95rem] " +
    "font-semibold text-white transition-transform duration-300 ease-brand hover:-translate-y-[3px] hover:bg-ink";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] px-4 py-[18px] sm:px-8 lg:px-12">
        <div
          className={
            "mx-auto flex max-w-[1280px] items-center justify-between rounded-full px-[22px] py-3 transition-[background-color,box-shadow] duration-500 " +
            (solid || open ? "bg-paper shadow-[0_12px_40px_rgba(0,51,51,0.10)]" : "bg-transparent shadow-none")
          }
        >
          <Link
            href="/"
            aria-label="akaani home"
            className={"transition-colors duration-500 " + (solid || open ? "text-ink" : "text-white")}
          >
            <Logo className="h-[26px] w-auto" />
          </Link>

          <nav className="hidden items-center gap-[clamp(14px,2.4vw,34px)] md:flex">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={
                    "relative text-[0.95rem] transition-colors duration-300 hover:!text-accent " +
                    (active
                      ? "font-bold text-accent after:absolute after:-bottom-[9px] after:left-1/2 after:h-[5px] after:w-[5px] after:-translate-x-1/2 after:rounded-full after:bg-accent"
                      : solid
                        ? "font-medium text-ink-soft"
                        : "font-medium text-white/85")
                  }
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {ctaExternal ? (
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={ctaClass}>
              {ctaLabel}
            </a>
          ) : (
            <Link href={ctaHref} className={ctaClass}>
              {ctaLabel}
            </Link>
          )}

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-[6px] p-2 md:hidden"
          >
            <span
              className={
                "block h-[2.5px] w-[26px] rounded-sm transition-[transform,background-color] duration-300 ease-brand " +
                (open ? "translate-y-[4px] rotate-45 bg-ink" : solid ? "bg-ink" : "bg-white")
              }
            />
            <span
              className={
                "block h-[2.5px] w-[26px] rounded-sm transition-[transform,background-color] duration-300 ease-brand " +
                (open ? "-translate-y-[4px] -rotate-45 bg-ink" : solid ? "bg-ink" : "bg-white")
              }
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-7 bg-ink text-bg md:hidden"
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={"text-2xl font-bold " + (pathname === l.href ? "text-accent" : "text-bg")}
              >
                {l.label}
              </Link>
            ))}
            {ctaExternal ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white"
              >
                {ctaLabel}
              </a>
            ) : (
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white"
              >
                {ctaLabel}
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
