"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/meals", label: "Meals" },
  { href: "/dietitian", label: "Dietitian" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

type NavProps = {
  /** Label of the primary button on the right of the pill. */
  ctaLabel?: string;
  ctaHref?: string;
  /** External CTAs (Calendly) open in a new tab. */
  ctaExternal?: boolean;
  /** Light pages need the solid pill from the first paint. */
  alwaysSolid?: boolean;
};

export default function Nav({
  ctaLabel = "Get the app",
  ctaHref = "/#cta",
  ctaExternal = false,
  alwaysSolid = true,
}: NavProps) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(alwaysSolid);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (alwaysSolid) return;
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysSolid]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const cta = ctaExternal ? (
    <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn--accent nav__cta">
      {ctaLabel}
    </a>
  ) : (
    <Link href={ctaHref} className="btn btn--accent nav__cta">
      {ctaLabel}
    </Link>
  );

  return (
    <>
      <header className={`nav${solid ? " nav--solid" : ""}`} id="nav">
        <div className="nav__inner">
          <Link className="nav__logo" href="/">
            akaani<span className="nav__dot">.</span>
          </Link>
          <nav className="nav__links">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={pathname === l.href ? "is-active" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          {cta}
          <button
            className={`nav__burger${menuOpen ? " is-open" : ""}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} id="mobileMenu">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? "is-active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        {ctaExternal ? (
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn--accent" onClick={() => setMenuOpen(false)}>
            {ctaLabel}
          </a>
        ) : (
          <Link href={ctaHref} className="btn btn--accent" onClick={() => setMenuOpen(false)}>
            {ctaLabel}
          </Link>
        )}
      </div>
    </>
  );
}
