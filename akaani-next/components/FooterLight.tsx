import Link from "next/link";

const SOCIALS = [
  {
    label: "Facebook",
    path: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z",
  },
  {
    label: "X",
    path: "M18.2 3H21l-6.5 7.4L22 21h-6l-4.7-6.1L5.9 21H3l7-8-7.3-10h6.2l4.2 5.6L18.2 3zm-1 16h1.6L7.9 4.7H6.2L17.2 19z",
  },
] as const;

/** Light footer from the dietitian design. */
export default function FooterLight() {
  return (
    <footer className="lfoot">
      <div className="lfoot__top">
        <Link className="lfoot__logo" href="/">
          akaani<span>.</span>
        </Link>
        <nav className="lfoot__links">
          <Link href="/">Home</Link>
          <Link href="/meals">Meals</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
        </nav>
        <div className="lfoot__right">
          <div className="lfoot__social">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
          <div className="lfoot__legal">
            <Link href="/terms">Terms of service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="lfoot__bottom">
        <p>
          akaani provides nutritional guidance for informational purposes only and is not a substitute for medical
          advice. <Link href="/disclaimer">Read our full disclaimer.</Link>
        </p>
        <span>© 2026 akaani. All rights reserved.</span>
      </div>
    </footer>
  );
}
