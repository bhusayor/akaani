"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, prefersReduced } from "@/lib/animations";

/**
 * Meet Lu: the pinned phone with swapping screens.
 *
 * Ported from the static site's main.js, which was never carried across when
 * the homepage moved to Next, so the section pinned nothing and neither the
 * panels nor the backdrop changed on scroll.
 */
const STEPS = 5;
/** A different backdrop per feature: teal, toasted clay, deep green, plum, midnight. */
const COLORS = ["#003333", "#4A2606", "#143B2E", "#3A2138", "#122840"];

export default function LuMotion() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".lu");
    const pin = document.getElementById("luPin");
    if (!section || !pin) return;

    const reduced = prefersReduced();
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".lu__panel");
      const screens = gsap.utils.toArray<HTMLElement>(".screen");
      const chips = gsap.utils.toArray<HTMLElement>(".lu-chip");
      const stepBtns = Array.from(document.querySelectorAll<HTMLButtonElement>("#luProgress button"));
      const ghost = document.getElementById("luGhost");
      const phoneEl = document.querySelector<HTMLElement>(".phone");
      const mascot = document.getElementById("luMascot");
      if (!panels.length || !ghost || !phoneEl) return;

      let current = 0;
      gsap.set(ghost, { xPercent: -50, yPercent: -55 });
      gsap.set(phoneEl, { transformPerspective: 900 });
      // only the first panel and screen start visible
      panels.forEach((p, i) => gsap.set(p, { autoAlpha: i === 0 ? 1 : 0 }));
      screens.forEach((s, i) => gsap.set(s, { autoAlpha: i === 0 ? 1 : 0 }));
      gsap.set(section, { backgroundColor: COLORS[0] });

      function animateChips(step: number, dir: number) {
        gsap.killTweensOf(chips);
        const incoming = chips.filter((c) => Number(c.dataset.step) === step);
        chips.forEach((c) => {
          if (Number(c.dataset.step) !== step)
            gsap.to(c, { autoAlpha: 0, y: -22 * dir, scale: 0.85, duration: 0.28, ease: "power2.in", overwrite: true });
        });
        gsap.fromTo(
          incoming,
          { autoAlpha: 0, y: 30 * dir, scale: 0.8 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.9)", stagger: 0.13, delay: 0.35, overwrite: true },
        );
      }

      /** Micro-animations inside each phone screen, replayed on every activation. */
      function animateScreen(step: number) {
        const s = screens[step];
        if (!s) return;
        const d = 0.3; // let the screen slide in first
        const q = (sel: string) => s.querySelectorAll(sel);
        if (step === 0) {
          gsap.fromTo(q(".intro-splash__mascot"), { scale: 0.5, y: 30, autoAlpha: 0 }, { scale: 1, y: 0, autoAlpha: 1, duration: 0.7, ease: "back.out(1.7)", delay: d, overwrite: true });
          gsap.fromTo(q(".intro-splash b, .intro-splash em, .intro-splash__cta"), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: d + 0.35, overwrite: true });
        } else if (step === 1) {
          gsap.fromTo(q(".chat__msg"), { autoAlpha: 0, y: 16, scale: 0.85 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.8)", stagger: 0.15, delay: d, overwrite: true });
          gsap.fromTo(q(".chat__input"), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.4, delay: d + 0.7, overwrite: true });
        } else if (step === 2) {
          gsap.fromTo(q(".ring__arc"), { strokeDashoffset: 264 }, { strokeDashoffset: 84, duration: 1.2, ease: "power2.out", delay: d, overwrite: true });
          gsap.fromTo(q(".macro__bar i"), { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", duration: 0.9, ease: "power3.out", stagger: 0.12, delay: d + 0.2, overwrite: true });
          gsap.fromTo(q(".logrow"), { autoAlpha: 0, x: 26 }, { autoAlpha: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: d + 0.45, overwrite: true });
        } else if (step === 3) {
          gsap.fromTo(q(".plan"), { autoAlpha: 0, x: 32 }, { autoAlpha: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: d, overwrite: true });
          gsap.fromTo(q(".plan__cta"), { autoAlpha: 0, scale: 0.85 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(2)", delay: d + 0.55, overwrite: true });
        } else {
          gsap.fromTo(q(".goalcard"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", delay: d, overwrite: true });
          gsap.fromTo(q(".goalcard__track i"), { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", duration: 1, ease: "power2.out", delay: d + 0.3, overwrite: true });
          gsap.fromTo(q(".nudge"), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.13, delay: d + 0.35, overwrite: true });
        }
      }

      function setStep(step: number) {
        if (step === current || !ghost) return;
        const dir = step > current ? 1 : -1;
        const prev = current;
        current = step;

        // a fast scroll can skip steps, so hard-reset anything not in this transition
        gsap.killTweensOf([...panels, ...screens]);
        panels.forEach((p, i) => { if (i !== step && i !== prev) gsap.set(p, { autoAlpha: 0 }); });
        screens.forEach((s, i) => { if (i !== step && i !== prev) gsap.set(s, { autoAlpha: 0 }); });

        gsap.to(panels[prev], { autoAlpha: 0, y: -34 * dir, duration: 0.25, ease: "power2.in", overwrite: true });
        gsap.fromTo(panels[step], { autoAlpha: 0, y: 46 * dir }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 0.08, overwrite: true });

        if (screens[prev]) gsap.to(screens[prev], { autoAlpha: 0, y: -52 * dir, scale: 0.94, duration: 0.25, ease: "power2.in", overwrite: true });
        if (screens[step]) gsap.fromTo(screens[step], { autoAlpha: 0, y: 70 * dir, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out", delay: 0.06, overwrite: true });

        if (!reduced) {
          gsap.fromTo(phoneEl, { rotationY: 15 * dir, rotation: 2.5 * dir }, { rotationY: 0, rotation: 0, duration: 0.95, ease: "power3.out", overwrite: "auto" });
          gsap.fromTo(".lu__phone-glow", { scale: 0.82, opacity: 0.45 }, { scale: 1, opacity: 1, duration: 0.9, ease: "power2.out", overwrite: true });
        }

        gsap.to(ghost, {
          autoAlpha: 0, y: -46 * dir, duration: 0.22, ease: "power2.in", overwrite: true,
          onComplete: () => {
            ghost.textContent = "0" + (step + 1);
            gsap.fromTo(ghost, { y: 64 * dir }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" });
          },
        });

        gsap.to(section, { backgroundColor: COLORS[step], duration: 0.9, ease: "power2.inOut", overwrite: "auto" });

        // big Lu owns the stage on step 01 and bows out after
        if (mascot) {
          if (step === 0) gsap.fromTo(mascot, { autoAlpha: 0, y: 90, rotation: -6 }, { autoAlpha: 1, y: 0, rotation: 0, duration: 0.8, ease: "back.out(1.6)", overwrite: true });
          else if (prev === 0) gsap.to(mascot, { autoAlpha: 0, y: 70, rotation: 5, duration: 0.4, ease: "power2.in", overwrite: true });
        }

        animateChips(step, dir);
        animateScreen(step);
        stepBtns.forEach((b, i) => b.classList.toggle("is-active", i === step));
      }

      // continuous scrub motion, on properties setStep never touches so they cannot fight
      const ghostX = gsap.quickSetter(ghost, "x", "px");
      const phoneX = gsap.quickSetter(phoneEl, "x", "px");
      const glowRot = gsap.quickSetter(".lu__phone-glow", "rotation", "deg");
      const railFill = gsap.quickSetter("#luRailFill", "scaleY");
      const railDotY = gsap.quickSetter("#luRailDot", "y", "px");
      const railEl = document.querySelector<HTMLElement>(".lu__rail");
      let railH = railEl?.offsetHeight ?? 0;
      const onRefresh = () => { railH = railEl?.offsetHeight ?? 0; };
      ScrollTrigger.addEventListener("refresh", onRefresh);

      const luST = ScrollTrigger.create({
        trigger: "#luPin",
        start: "top top",
        end: () => "+=" + window.innerHeight * (STEPS + 0.5),
        pin: true,
        scrub: false,
        anticipatePin: 1,
        // this pin inserts ~5800px of spacer, so it has to be measured before
        // any trigger below it, or they all compute against the unpinned page
        refreshPriority: 1,
        onUpdate: (self) => {
          const p = self.progress;
          setStep(Math.min(STEPS - 1, Math.floor(p * STEPS)));
          // constant motion under the scroll so the pin never feels frozen
          const sub = (p * STEPS) % 1;
          ghostX((p - 0.5) * -180);
          phoneX((sub - 0.5) * 16);
          glowRot(p * 140);
          railFill(p);
          railDotY(p * railH);
        },
      });

      if (mascot) gsap.set(mascot, { autoAlpha: 0 });
      let introPlayed = false;
      ScrollTrigger.create({
        trigger: "#lu",
        start: "top 65%",
        onEnter: () => {
          if (introPlayed) return;
          introPlayed = true;
          if (mascot) gsap.fromTo(mascot, { autoAlpha: 0, y: 110, rotation: -8 }, { autoAlpha: 1, y: 0, rotation: 0, duration: 0.9, ease: "back.out(1.5)", delay: 0.2 });
          animateChips(0, 1);
          animateScreen(0);
        },
      });

      if (!reduced) {
        gsap.to("#luMascot svg", { y: -14, duration: 2.2, yoyo: true, repeat: -1, ease: "sine.inOut" });
        gsap.to(".phone", { y: -12, duration: 2.6, yoyo: true, repeat: -1, ease: "sine.inOut" });
        chips.forEach((c, i) => {
          if (c.firstElementChild)
            gsap.to(c.firstElementChild, { y: i % 2 ? -9 : 9, duration: 2 + (i % 3) * 0.4, yoyo: true, repeat: -1, ease: "sine.inOut", delay: i * 0.2 });
        });
      }

      // a step label scrolls to that step inside the pin
      stepBtns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
          const y = luST.start + ((i + 0.5) / STEPS) * (luST.end - luST.start);
          const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, o?: object) => void } }).__lenis;
          if (lenis) lenis.scrollTo(y, { duration: 1.4 });
          else window.scrollTo({ top: y, behavior: "smooth" });
        });
      });

      // the pin only exists now, and every trigger further down the page was
      // positioned without it. Re-measure them all against the real layout.
      ScrollTrigger.refresh();

      return () => ScrollTrigger.removeEventListener("refresh", onRefresh);
    }, section);

    return () => ctx.revert();
  }, []);

  return null;
}
