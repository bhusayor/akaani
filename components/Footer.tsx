import Link from "next/link";

const DISCLAIMER = (
  <p className="footer__disclaimer">
    akaani provides nutritional guidance for informational purposes only
    <br />
    and is not a substitute for medical advice. <Link href="/disclaimer">Read our full disclaimer.</Link>
  </p>
);

/** Dark footer used on most pages. `giant` sets the oversized ghost wordmark. */
export default function Footer({ giant = "akaani" }: { giant?: string }) {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Link className="footer__logo" href="/">
            akaani<span>.</span>
          </Link>
          <p>
            Nigerian food was never the problem.
            <br />
            The apps were.
          </p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Product</h4>
            <Link href="/meals">Meals</Link>
            <Link href="/dietitian">Dietitian</Link>
            <Link href="/recipes">Recipes</Link>
            <Link href="/#cta">Download</Link>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about#contact">Contact</Link>
          </div>
          <div className="footer__col">
            <h4>Legal</h4>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
      <div className="footer__giant" aria-hidden="true">
        {giant}
      </div>
      <div className="footer__bottom">
        {DISCLAIMER}
        <span>© 2026 akaani. All rights reserved.</span>
        <div>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
