import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const prefersReduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type RevealOpts = gsap.TweenVars & { lift?: boolean };

/** Fade/rise elements in as they enter the viewport, once each. */
export function staggerReveal(selector: string, opts: RevealOpts = {}) {
  const { lift = true, ...tween } = opts;
  const items = gsap.utils.toArray<HTMLElement>(selector);
  if (!items.length) return;

  gsap.set(items, lift ? { y: 54, autoAlpha: 0 } : { autoAlpha: 0 });
  ScrollTrigger.batch(items, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        ...(lift ? { y: 0 } : {}),
        autoAlpha: 1,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        onComplete: () => lift && gsap.set(batch, { clearProps: "transform" }),
        ...tween,
      }),
  });
}

/**
 * Scroll parallax driven through a `--plx` custom property so it never fights
 * a hover transform on the same element.
 */
export function parallaxVar(selector: string, amounts: number[]) {
  if (prefersReduced()) return;
  gsap.utils.toArray<HTMLElement>(selector).forEach((el, i) => {
    const amount = amounts[i] ?? amounts[amounts.length - 1] ?? 18;
    gsap.fromTo(
      el,
      { "--plx": `${amount}px` },
      {
        "--plx": `${-amount}px`,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });
}

/** Straight y-parallax for elements with no competing transforms. */
export function parallaxY(selector: string, amount: number) {
  if (prefersReduced()) return;
  gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { y: amount },
      { y: -amount, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
    );
  });
}

/** Hairline rules that draw themselves in accent as they scroll in. */
export function drawRules(selector = ".rule i, .step__rule i") {
  gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.1,
        ease: "power3.inOut",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      },
    );
  });
}

/** Buttons lean toward the pointer. Returns a cleanup function. */
export function magneticButtons(selector = ".btn") {
  if (prefersReduced() || !window.matchMedia("(pointer: fine)").matches) return () => {};

  const cleanups: Array<() => void> = [];
  document.querySelectorAll<HTMLElement>(selector).forEach((btn) => {
    const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });
    const move = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.25);
      yTo((e.clientY - r.top - r.height / 2) * 0.35);
    };
    const leave = () => {
      xTo(0);
      yTo(0);
    };
    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", leave);
    cleanups.push(() => {
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", leave);
    });
  });
  return () => cleanups.forEach((fn) => fn());
}

/** Word-by-word colour reveal tied to scroll position. */
export function scrubWords(headingSelector: string, sectionSelector: string, accentWords: string[] = []) {
  const el = document.querySelector<HTMLElement>(headingSelector);
  if (!el || el.dataset.split === "1") return;

  const words = el.textContent?.trim().split(/\s+/) ?? [];
  el.innerHTML = words
    .map((w) => {
      const accent = accentWords.some((a) => w.toLowerCase().includes(a));
      return `<span class="w${accent ? " w--accent" : ""}">${w}</span>`;
    })
    .join(" ");
  el.dataset.split = "1";

  const spans = el.querySelectorAll<HTMLElement>(".w");
  ScrollTrigger.create({
    trigger: sectionSelector,
    start: "top 72%",
    end: "center 45%",
    scrub: 0.4,
    onUpdate: (self) => {
      const n = Math.floor(self.progress * spans.length);
      spans.forEach((w, i) => w.classList.toggle("is-on", i < n));
    },
  });
}

/** Masked line intro used by the hero headlines. */
export function revealLines(selector: string, delay = 0.25) {
  const lines = gsap.utils.toArray<HTMLElement>(selector);
  if (!lines.length) return null;
  return gsap.to(lines, { y: 0, duration: 1.1, ease: "power4.out", stagger: 0.12, delay });
}

/**
 * Same masked reveal, held until the lines are actually on screen. The timed
 * version is right for the hero, which is above the fold; anywhere further
 * down the page it would play to nobody and be over before you arrived.
 */
export function revealLinesOnScroll(selector: string, trigger: string) {
  const lines = gsap.utils.toArray<HTMLElement>(selector);
  if (!lines.length) return null;
  return gsap.to(lines, {
    y: 0,
    duration: 1.1,
    ease: "power4.out",
    stagger: 0.12,
    scrollTrigger: { trigger, start: "top 75%", once: true },
  });
}

export { gsap, ScrollTrigger };
