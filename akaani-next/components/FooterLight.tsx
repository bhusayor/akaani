import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/meals", label: "Meals" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

const SOCIAL_CLS =
  "grid h-[34px] w-[34px] place-items-center rounded-full border border-line text-ink transition-[background-color,color,border-color,transform] duration-300 ease-brand hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white";

export default function FooterLight() {
  return (
    <footer className="border-t border-line px-5 pb-10 pt-[clamp(50px,7vh,80px)] sm:px-8 lg:px-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-8 pb-9">
        <Link href="/" className="text-[1.7rem] font-extrabold text-ink">
          akaani<span className="text-accent">.</span>
        </Link>

        <nav className="flex flex-wrap gap-[clamp(18px,2.6vw,38px)]">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.97rem] font-medium text-ink-soft transition-colors duration-300 hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className={SOCIAL_CLS}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <a href="#" aria-label="X" className={SOCIAL_CLS}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]">
                <path d="M18.2 3H21l-6.5 7.4L22 21h-6l-4.7-6.1L5.9 21H3l7-8-7.3-10h6.2l4.2 5.6L18.2 3zm-1 16h1.6L7.9 4.7H6.2L17.2 19z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className={SOCIAL_CLS}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-[15px] w-[15px]">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
          <div className="flex gap-5 text-[0.86rem]">
            <Link href="/terms" className="text-ink-soft transition-colors duration-300 hover:text-accent">
              Terms of service
            </Link>
            <Link href="/privacy" className="text-ink-soft transition-colors duration-300 hover:text-accent">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-wrap items-start justify-between gap-6 border-t border-line pt-[26px] text-[0.85rem] text-ink-soft">
        <p className="max-w-[620px] leading-[1.6]">
          akaani provides nutritional guidance for informational purposes only and is not a substitute for medical
          advice.{" "}
          <Link href="/disclaimer" className="text-accent underline underline-offset-[3px]">
            Read our full disclaimer.
          </Link>
        </p>
        <span>© 2026 akaani. All rights reserved.</span>
      </div>
    </footer>
  );
}
