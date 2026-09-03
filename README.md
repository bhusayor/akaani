# akaani — Next.js app

TypeScript port of the akaani marketing site (App Router, static export friendly).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Layout

```
app/
  layout.tsx            root layout: Outfit font, global CSS, Lenis
  page.tsx              /            home
  meals/                /meals       weekly meal delivery + waitlist
  dietitian/            /dietitian   consultation booking (primary conversion page)
  recipes/              /recipes     recipe bundles + cart
  blog/  article/       /blog, /article
  about/  contact/      /about, /contact
  disclaimer/ terms/ privacy/        legal pages
  <route>/Motion.tsx    client component holding that page's GSAP choreography
components/
  Nav.tsx               sticky nav + mobile menu, active route highlighting
  Footer.tsx            dark footer (most pages)
  FooterLight.tsx       light footer (dietitian design)
  Cart.tsx              bundle cart: fab, drawer, toast, localStorage
  Faq.tsx               data-driven accordion
  FaqBehavior.tsx       attaches the same accordion to static markup
  FormBehavior.tsx      waitlist / contact / newsletter / blog filters
  Lu.tsx                the mascot as inline SVG (waves and blinks via SMIL)
  ProgressBar.tsx       reading progress bar for long pages
  SmoothScroll.tsx      Lenis + GSAP ticker wiring
lib/animations.ts       reveal, parallax, magnetic buttons, word scrub helpers
styles/                 base.css (design system) + one stylesheet per page
public/assets/          images
```

## Conventions

- **Design tokens** live in `styles/base.css` as CSS custom properties
  (`--bg`, `--ink`, `--accent`, `--paper`, `--line`).
- **Animation** runs only in client components. Each page keeps its
  choreography in `Motion.tsx`, wrapped in `gsap.context()` so it is reverted
  on unmount.
- **Reduced motion** is respected: `prefersReduced()` guards the decorative
  parallax and idle loops, and Lenis is not started at all.

## Notes

- Calendly links point at `https://calendly.com/useakaani` — swap in the real
  event URL when it exists.
- The cart is front-end only; wire `Cart.tsx`'s checkout link to a real
  payment flow when ready.
