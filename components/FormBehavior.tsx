"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

type Kind = "waitlist" | "contact" | "newsletter" | "blogFilters";

/** Attaches the original page behaviour to server-rendered forms and filters. */
export default function FormBehavior({ kind }: { kind: Kind }) {
  useEffect(() => {
    const offs: Array<() => void> = [];

    if (kind === "waitlist") {
      const range = document.getElementById("mealsRange") as HTMLInputElement | null;
      const out = document.getElementById("mealsOut");
      if (range && out) {
        const sync = () => (out.textContent = range.value);
        range.addEventListener("input", sync);
        offs.push(() => range.removeEventListener("input", sync));
      }

      const form = document.getElementById("waitlistForm") as HTMLFormElement | null;
      const success = document.getElementById("wformSuccess");
      if (form && success) {
        const onSubmit = (e: Event) => {
          e.preventDefault();
          if (!form.checkValidity()) return form.reportValidity();
          gsap.to(form, {
            autoAlpha: 0,
            y: -24,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
              form.style.display = "none";
              success.style.display = "flex";
              success.style.alignItems = "center";
              success.style.justifyContent = "center";
              gsap.from(success, { autoAlpha: 0, y: 30, duration: 0.6, ease: "power3.out" });
            },
          });
        };
        form.addEventListener("submit", onSubmit);
        offs.push(() => form.removeEventListener("submit", onSubmit));
      }
    }

    if (kind === "contact") {
      const form = document.getElementById("contactForm") as HTMLFormElement | null;
      const success = document.getElementById("cformSuccess");
      if (form && success) {
        const onSubmit = (e: Event) => {
          e.preventDefault();
          if (!form.checkValidity()) return form.reportValidity();
          const d = new FormData(form);
          const subject = `[${d.get("topic")}] ${d.get("subject")}`;
          const body = `${d.get("message")}\n\nFrom ${d.get("name")} (${d.get("email")})`;
          window.location.href = `mailto:hello@useakaani.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          gsap.to(form, {
            autoAlpha: 0,
            y: -24,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
              form.style.display = "none";
              success.style.display = "block";
              gsap.from(success, { autoAlpha: 0, y: 30, duration: 0.6, ease: "power3.out" });
            },
          });
        };
        form.addEventListener("submit", onSubmit);
        offs.push(() => form.removeEventListener("submit", onSubmit));
      }
    }

    if (kind === "newsletter") {
      const form = document.getElementById("newsForm") as HTMLFormElement | null;
      const note = document.getElementById("newsNote");
      if (form && note) {
        const onSubmit = (e: Event) => {
          e.preventDefault();
          note.textContent = "You're in! First issue lands next month. 🍲";
          note.style.color = "#DA7000";
          gsap.from(note, { y: 10, autoAlpha: 0, duration: 0.5 });
          form.reset();
        };
        form.addEventListener("submit", onSubmit);
        offs.push(() => form.removeEventListener("submit", onSubmit));
      }
    }

    if (kind === "blogFilters") {
      const posts = Array.from(document.querySelectorAll<HTMLElement>(".jpost"));
      const empty = document.getElementById("gridEmpty");
      const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("#filters button"));

      buttons.forEach((btn) => {
        const onClick = () => {
          buttons.forEach((b) => b.classList.remove("is-on"));
          btn.classList.add("is-on");
          const f = btn.dataset.filter;
          const showing = posts.filter((p) => f === "all" || p.dataset.cat === f);
          const hiding = posts.filter((p) => !(f === "all" || p.dataset.cat === f));

          const reveal = () => {
            hiding.forEach((p) => p.classList.add("is-hidden"));
            showing.forEach((p) => p.classList.remove("is-hidden"));
            if (empty) empty.style.display = showing.length ? "none" : "block";
            gsap.fromTo(
              showing,
              { autoAlpha: 0, y: 30, scale: 0.97 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", stagger: 0.07, clearProps: "scale" },
            );
          };

          if (hiding.length) {
            gsap.to(hiding, { autoAlpha: 0, scale: 0.94, duration: 0.25, ease: "power2.in", stagger: 0.03, onComplete: reveal });
          } else {
            reveal();
          }
        };
        btn.addEventListener("click", onClick);
        offs.push(() => btn.removeEventListener("click", onClick));
      });
    }

    return () => offs.forEach((off) => off());
  }, [kind]);

  return null;
}
