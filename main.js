/* ============================================================
   akaani motion system (GSAP 3 + ScrollTrigger)
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============ LENIS: buttery smooth scrolling ============ */
let lenis = null;
if (window.Lenis && !prefersReduced) {
  document.documentElement.style.scrollBehavior = "auto";
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function smoothScrollTo(target) {
  if (lenis) lenis.scrollTo(target, { duration: 1.4 });
  else if (typeof target === "number") window.scrollTo({ top: target, behavior: "smooth" });
  else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}

// route anchor links through Lenis
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      smoothScrollTo(id);
    }
  });
});

/* ---------- helpers ---------- */

// Split an element's text into word spans (keeps existing accent styling simple)
function splitWords(el, accentWords = []) {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words
    .map((w) => {
      const isAccent = accentWords.some((a) => w.toLowerCase().includes(a));
      return `<span class="w${isAccent ? " w--accent" : ""}">${w}</span>`;
    })
    .join(" ");
  return el.querySelectorAll(".w");
}

/* ============ NAV: solid after hero, hide on scroll down ============ */
const nav = document.getElementById("nav");

// sticky nav: always visible and solid (light hero)
nav.classList.add("nav--solid");

/* mobile menu */
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  mobileMenu.classList.toggle("is-open");
  document.body.style.overflow = mobileMenu.classList.contains("is-open") ? "hidden" : "";
});
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    burger.classList.remove("is-open");
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  })
);

/* ============ HERO: entrance ============ */
const heroIntro = gsap.timeline({ defaults: { ease: "power4.out" } });
heroIntro
  .to(".hero .line__inner", { y: 0, duration: 1.2, stagger: 0.12, delay: 0.25 })
  .from(".hero__proof", { y: 24, autoAlpha: 0, duration: 0.8 }, "-=0.35")
  .from(".hero__desc", { y: 30, autoAlpha: 0, duration: 0.9 }, "-=0.7")
  .from(".hero__actions .btn", { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.1 }, "-=0.6")
  .from(".hero__photo", { y: 80, autoAlpha: 0, rotation: -4, duration: 1, ease: "power4.out" }, "-=0.9")
  .from(".hero__pop", { scale: 0, autoAlpha: 0, duration: 0.55, ease: "back.out(1.9)", stagger: 0.18, transformOrigin: "bottom left" }, "-=0.4");

// UI bubbles drift at different rhythms; photo eases down slightly on scroll
if (!prefersReduced) {
  gsap.utils.toArray(".hero__pop").forEach((p, i) => {
    gsap.to(p, { y: i % 2 ? -9 : 8, duration: 2.3 + i * 0.35, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.8 });
  });
  gsap.to(".hero__visual", {
    y: 60, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });
}

/* ============ MANIFESTO: word-by-word read + floating plates ============ */
const headWords = splitWords(document.getElementById("manifestoHeadline"));
const bodyWords = splitWords(document.getElementById("manifestoBody"));
const allWords = [...headWords, ...bodyWords];

ScrollTrigger.create({
  trigger: ".manifesto",
  start: "top 70%",
  end: "center 45%",
  scrub: 0.4,
  onUpdate: (self) => {
    const n = Math.floor(self.progress * allWords.length);
    allWords.forEach((w, i) => w.classList.toggle("is-on", i < n));
  },
});

// plates drift in at different speeds (parallax) + rotate settle
gsap.from(".manifesto__img--main", {
  y: 120, rotation: 4, autoAlpha: 0, duration: 1.2, ease: "power3.out",
  scrollTrigger: { trigger: ".manifesto__media", start: "top 80%" },
});
gsap.from(".manifesto__img--float1", {
  y: 160, rotation: -6, autoAlpha: 0, duration: 1.2, ease: "power3.out", delay: 0.15,
  scrollTrigger: { trigger: ".manifesto__media", start: "top 80%" },
});
gsap.from(".manifesto__img--float2", {
  y: 200, rotation: 8, autoAlpha: 0, duration: 1.2, ease: "power3.out", delay: 0.3,
  scrollTrigger: { trigger: ".manifesto__media", start: "top 80%" },
});
gsap.to(".manifesto__img--float1", {
  y: -46, ease: "none",
  scrollTrigger: { trigger: ".manifesto__media", start: "top bottom", end: "bottom top", scrub: true },
});
gsap.to(".manifesto__img--float2", {
  y: -90, ease: "none",
  scrollTrigger: { trigger: ".manifesto__media", start: "top bottom", end: "bottom top", scrub: true },
});

// counters
document.querySelectorAll(".stat strong").forEach((el) => {
  const target = +el.dataset.count;
  ScrollTrigger.create({
    trigger: el,
    start: "top 88%",
    once: true,
    onEnter: () =>
      gsap.to(el, {
        innerText: target,
        duration: 1.6,
        ease: "power2.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          el.innerText = Math.round(+el.innerText).toLocaleString();
        },
      }),
  });
});

/* ============ MEET LU: pinned phone, swapping screens ============ */
const luSteps = 5;
const panels = gsap.utils.toArray(".lu__panel");
const screens = gsap.utils.toArray(".screen");
const chips = gsap.utils.toArray(".lu-chip");
const stepBtns = document.querySelectorAll("#luProgress button");
const ghost = document.getElementById("luGhost");
const phoneEl = document.querySelector(".phone");
const mascot = document.getElementById("luMascot");
const luSection = document.querySelector(".lu");
// a different backdrop for every feature: teal, toasted clay, deep green, plum, midnight
const luColors = ["#003333", "#4A2606", "#143B2E", "#3A2138", "#122840"];
let currentStep = 0;

gsap.set(ghost, { xPercent: -50, yPercent: -55 });
gsap.set(phoneEl, { transformPerspective: 900 });

function animateChips(step, dir) {
  gsap.killTweensOf(chips);
  const incoming = chips.filter((c) => +c.dataset.step === step);
  chips.forEach((c) => { if (+c.dataset.step !== step) gsap.to(c, { autoAlpha: 0, y: -22 * dir, scale: 0.85, duration: 0.28, ease: "power2.in", overwrite: true }); });
  gsap.fromTo(incoming, { autoAlpha: 0, y: 30 * dir, scale: 0.8 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.9)", stagger: 0.13, delay: 0.35, overwrite: true });
}

// micro-animations inside each phone screen, replayed on every activation
function animateScreenContent(step) {
  const s = screens[step];
  const d = 0.3; // let the screen slide in first
  if (step === 0) {
    gsap.fromTo(s.querySelector(".intro-splash__mascot"), { scale: 0.5, y: 30, autoAlpha: 0 },
      { scale: 1, y: 0, autoAlpha: 1, duration: 0.7, ease: "back.out(1.7)", delay: d, overwrite: true });
    gsap.fromTo(s.querySelectorAll(".intro-splash b, .intro-splash em, .intro-splash__cta"), { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: d + 0.35, overwrite: true });
  } else if (step === 1) {
    gsap.fromTo(s.querySelectorAll(".chat__msg"), { autoAlpha: 0, y: 16, scale: 0.85 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.8)", stagger: 0.15, delay: d, overwrite: true });
    gsap.fromTo(s.querySelector(".chat__input"), { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.4, delay: d + 0.7, overwrite: true });
  } else if (step === 2) {
    gsap.fromTo(s.querySelector(".ring__arc"), { strokeDashoffset: 264 },
      { strokeDashoffset: 84, duration: 1.2, ease: "power2.out", delay: d, overwrite: true });
    gsap.fromTo(s.querySelectorAll(".macro__bar i"), { scaleX: 0 },
      { scaleX: 1, transformOrigin: "left center", duration: 0.9, ease: "power3.out", stagger: 0.12, delay: d + 0.2, overwrite: true });
    gsap.fromTo(s.querySelectorAll(".logrow"), { autoAlpha: 0, x: 26 },
      { autoAlpha: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: d + 0.45, overwrite: true });
  } else if (step === 3) {
    gsap.fromTo(s.querySelectorAll(".plan"), { autoAlpha: 0, x: 32 },
      { autoAlpha: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: d, overwrite: true });
    gsap.fromTo(s.querySelector(".plan__cta"), { autoAlpha: 0, scale: 0.85 },
      { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(2)", delay: d + 0.55, overwrite: true });
  } else {
    gsap.fromTo(s.querySelector(".goalcard"), { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", delay: d, overwrite: true });
    gsap.fromTo(s.querySelector(".goalcard__track i"), { scaleX: 0 },
      { scaleX: 1, transformOrigin: "left center", duration: 1, ease: "power2.out", delay: d + 0.3, overwrite: true });
    gsap.fromTo(s.querySelectorAll(".nudge"), { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.13, delay: d + 0.35, overwrite: true });
  }
}

function setStep(step) {
  if (step === currentStep) return;
  const dir = step > currentStep ? 1 : -1;
  const prev = currentStep;
  currentStep = step;

  // hard-reset anything not involved in this transition (fast scrolls can skip steps)
  gsap.killTweensOf([...panels, ...screens]);
  panels.forEach((p, i) => { if (i !== step && i !== prev) gsap.set(p, { autoAlpha: 0 }); });
  screens.forEach((s, i) => { if (i !== step && i !== prev) gsap.set(s, { autoAlpha: 0 }); });

  // text panel out / in
  gsap.to(panels[prev], { autoAlpha: 0, y: -34 * dir, duration: 0.25, ease: "power2.in", overwrite: true });
  gsap.fromTo(panels[step], { autoAlpha: 0, y: 46 * dir },
    { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 0.08, overwrite: true });

  // phone screen swap
  gsap.to(screens[prev], { autoAlpha: 0, y: -52 * dir, scale: 0.94, duration: 0.25, ease: "power2.in", overwrite: true });
  gsap.fromTo(screens[step], { autoAlpha: 0, y: 70 * dir, scale: 0.94 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out", delay: 0.06, overwrite: true });

  // 3D tilt on the phone + glow pulse
  if (!prefersReduced) {
    gsap.fromTo(phoneEl, { rotationY: 15 * dir, rotation: 2.5 * dir },
      { rotationY: 0, rotation: 0, duration: 0.95, ease: "power3.out", overwrite: "auto" });
    gsap.fromTo(".lu__phone-glow", { scale: 0.82, opacity: 0.45 },
      { scale: 1, opacity: 1, duration: 0.9, ease: "power2.out", overwrite: true });
  }

  // giant ghost number crossfade
  gsap.to(ghost, {
    autoAlpha: 0, y: -46 * dir, duration: 0.22, ease: "power2.in", overwrite: true,
    onComplete: () => {
      ghost.textContent = "0" + (step + 1);
      gsap.fromTo(ghost, { y: 64 * dir }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" });
    },
  });

  // backdrop shifts with every feature
  gsap.to(luSection, { backgroundColor: luColors[step], duration: 0.9, ease: "power2.inOut", overwrite: "auto" });

  // big Lu owns the stage on step 01, bows out after
  if (step === 0) {
    gsap.fromTo(mascot, { autoAlpha: 0, y: 90, rotation: -6 },
      { autoAlpha: 1, y: 0, rotation: 0, duration: 0.8, ease: "back.out(1.6)", overwrite: true });
  } else if (prev === 0) {
    gsap.to(mascot, { autoAlpha: 0, y: 70, rotation: 5, duration: 0.4, ease: "power2.in", overwrite: true });
  }

  animateChips(step, dir);
  animateScreenContent(step);
  stepBtns.forEach((b, i) => b.classList.toggle("is-active", i === step));
}

// continuous scrub motion (disjoint props from setStep tweens, so they never fight)
const ghostX = gsap.quickSetter(ghost, "x", "px");
const phoneX = gsap.quickSetter(phoneEl, "x", "px");
const glowRot = gsap.quickSetter(".lu__phone-glow", "rotation", "deg");
// scroll progress rail, driven 1:1 by scroll, so it moves the instant you do
const railFill = gsap.quickSetter("#luRailFill", "scaleY");
const railDotY = gsap.quickSetter("#luRailDot", "y", "px");
const railEl = document.querySelector(".lu__rail");
let railH = railEl ? railEl.offsetHeight : 0;
ScrollTrigger.addEventListener("refresh", () => { railH = railEl ? railEl.offsetHeight : 0; });

const luST = ScrollTrigger.create({
  trigger: "#luPin",
  start: "top top",
  end: () => "+=" + window.innerHeight * (luSteps + 0.5),
  pin: true,
  scrub: false,
  anticipatePin: 1,
  onUpdate: (self) => {
    const p = self.progress;
    setStep(Math.min(luSteps - 1, Math.floor(p * luSteps)));
    // constant motion under the scroll so the pin never feels frozen
    const sub = (p * luSteps) % 1;
    ghostX((p - 0.5) * -180);
    phoneX((sub - 0.5) * 16);
    glowRot(p * 140);
    railFill(p);
    railDotY(p * railH);
  },
});

// first-view intro: mascot walks in, chips + splash play
gsap.set(mascot, { autoAlpha: 0 });
let luIntroPlayed = false;
ScrollTrigger.create({
  trigger: "#lu",
  start: "top 65%",
  onEnter: () => {
    if (luIntroPlayed) return;
    luIntroPlayed = true;
    gsap.fromTo(mascot, { autoAlpha: 0, y: 110, rotation: -8 },
      { autoAlpha: 1, y: 0, rotation: 0, duration: 0.9, ease: "back.out(1.5)", delay: 0.2 });
    animateChips(0, 1);
    animateScreenContent(0);
  },
});

// idle bob for the big Lu
if (!prefersReduced) {
  gsap.to("#luMascot svg", { y: -14, duration: 2.2, yoyo: true, repeat: -1, ease: "sine.inOut" });
}

// clicking a step label scrolls to that step within the pin
stepBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const y = luST.start + ((i + 0.5) / luSteps) * (luST.end - luST.start);
    smoothScrollTo(y);
  });
});

// gentle idle float on the phone + drifting chips
if (!prefersReduced) {
  gsap.to(".phone", { y: -12, duration: 2.6, yoyo: true, repeat: -1, ease: "sine.inOut" });
  chips.forEach((c, i) => {
    gsap.to(c.firstElementChild, {
      y: i % 2 ? -9 : 9, duration: 2 + (i % 3) * 0.4,
      yoyo: true, repeat: -1, ease: "sine.inOut", delay: i * 0.2,
    });
  });
}

/* ============ BRIDGE: statement word reveal ============ */
const bridgeWords = splitWords(document.getElementById("bridgeText"), ["akaani"]);
ScrollTrigger.create({
  trigger: ".bridge",
  start: "top 75%",
  end: "center 50%",
  scrub: 0.4,
  onUpdate: (self) => {
    const n = Math.floor(self.progress * bridgeWords.length);
    bridgeWords.forEach((w, i) => w.classList.toggle("is-on", i < n));
  },
});

/* ============ GENERIC SECTION REVEALS ============ */
function staggerReveal(selector, opts = {}) {
  const { lift = true, ...tween } = opts;
  const items = gsap.utils.toArray(selector);
  if (!items.length) return;
  gsap.set(items, lift ? { y: 60, autoAlpha: 0 } : { autoAlpha: 0 });
  ScrollTrigger.batch(items, {
    start: "top 86%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        ...(lift ? { y: 0 } : {}), autoAlpha: 1,
        duration: 0.9, ease: "power3.out", stagger: 0.12,
        onComplete: () => lift && gsap.set(batch, { clearProps: "transform" }),
        ...tween,
      }),
  });
}

staggerReveal(".section-head");
// cards fade in without a transform of their own, the parallax CSS var owns translateY
staggerReveal(".bundle", { lift: false, stagger: 0.15 });
staggerReveal(".post", { lift: false, stagger: 0.12 });

/* The featured post had no entrance while the cards beside it animated,
   so it read as the flattest thing in the section. */
if (!prefersReduced) {
  const fp = document.querySelector(".feature-post");
  if (fp) {
    gsap.timeline({ scrollTrigger: { trigger: fp, start: "top 80%", once: true } })
      .from(fp, { y: 44, autoAlpha: 0, duration: 0.85, ease: "power3.out" })
      .from(fp.querySelector(".feature-post__img img"), { scale: 1.2, duration: 1.4, ease: "power3.out" }, "-=0.75")
      .from(fp.querySelectorAll(".feature-post__body > *"), { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.09, ease: "power3.out" }, "-=1.05")
      .from(fp.querySelector(".feature-post__badge"), { scale: 0, autoAlpha: 0, duration: 0.5, ease: "back.out(1.9)" }, "-=0.6");
  }
}
staggerReveal(".faq__item", { stagger: 0.08 });
staggerReveal(".waitlist__inner");
staggerReveal(".faq__head");

/* ============ PARALLAX LAYER ============ */
// drives a --plx CSS variable so it never fights hover/reveal transforms
function plxVar(el, amount) {
  gsap.fromTo(el, { "--plx": amount + "px" }, {
    "--plx": -amount + "px", ease: "none",
    scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
  });
}
// direct y parallax for elements with no competing transforms
function plxY(el, amount, trigger) {
  gsap.fromTo(el, { y: amount }, {
    y: -amount, ease: "none",
    scrollTrigger: { trigger: trigger || el, start: "top bottom", end: "bottom top", scrub: true },
  });
}
// slow drift inside a masked image (image is oversized in CSS)
function plxImg(img) {
  gsap.fromTo(img, { yPercent: -5 }, {
    yPercent: 5, ease: "none",
    scrollTrigger: { trigger: img.closest("figure, div, section"), start: "top bottom", end: "bottom top", scrub: true },
  });
}

if (!prefersReduced) {
  gsap.utils.toArray(".bundle").forEach((el) => plxVar(el, 26));
  gsap.utils.toArray(".post").forEach((el) => plxVar(el, 22));
  gsap.utils.toArray(".section-head h2").forEach((el) => plxY(el, 26));
  plxY(".manifesto__text", 34);
  plxY(".waitlist__text", 24);
  plxY(".bridge__float--1", 90);
  plxY(".bridge__float--2", -70);
  document.querySelectorAll(".manifesto__img--main img, .waitlist__media img, .feature-post__img img").forEach(plxImg);
}

/* ============ BLOG: featured story clip-wipe + rise ============ */
const featurePost = document.querySelector(".feature-post");
if (featurePost) {
  gsap.set(featurePost, { clipPath: "inset(0 100% 0 0 round 28px)" });
  gsap.set(".feature-post__body > *", { autoAlpha: 0, y: 30 });
  ScrollTrigger.create({
    trigger: featurePost,
    start: "top 78%",
    once: true,
    onEnter: () => {
      gsap.to(featurePost, { clipPath: "inset(0 0% 0 0 round 28px)", duration: 1.1, ease: "power4.inOut" });
      gsap.to(".feature-post__body > *", {
        autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.55,
      });
    },
  });
}

/* ============ MICRO-INTERACTIONS ============ */
// magnetic buttons, they lean toward the cursor
if (!prefersReduced && window.matchMedia("(pointer: fine)").matches) {
  document.querySelectorAll(".btn, .storebtn, .lu__progress button").forEach((btn) => {
    const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.25);
      yTo((e.clientY - r.top - r.height / 2) * 0.35);
    });
    btn.addEventListener("mouseleave", () => { xTo(0); yTo(0); });
  });
}

/* ============ CTA: Lu peeks in ============ */
const ctaMascot = document.querySelector(".cta__mascot");
if (ctaMascot) {
  gsap.set(ctaMascot, { yPercent: 60, autoAlpha: 0 });
  ScrollTrigger.create({
    trigger: ".cta",
    start: "top 55%",
    once: true,
    onEnter: () => gsap.to(ctaMascot, { yPercent: 0, autoAlpha: 1, duration: 0.9, ease: "back.out(1.5)", delay: 0.4 }),
  });
}

/* ============ WAITLIST form ============ */
document.getElementById("waitlistForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const note = document.getElementById("waitlistNote");
  note.textContent = "You're on the list! We'll email you when your city opens. 🍲";
  note.style.color = "#DA7000";
  gsap.from(note, { y: 10, autoAlpha: 0, duration: 0.5, ease: "power2.out" });
  e.target.reset();
});

/* ============ FAQ: animated open/close ============ */
document.querySelectorAll(".faq__item").forEach((item) => {
  const summary = item.querySelector("summary");
  const answer = item.querySelector(".faq__answer");

  summary.addEventListener("click", (e) => {
    e.preventDefault();
    if (item.open) {
      gsap.to(answer, {
        height: 0, autoAlpha: 0, duration: 0.4, ease: "power2.inOut",
        onComplete: () => { item.open = false; gsap.set(answer, { clearProps: "all" }); },
      });
    } else {
      item.open = true;
      gsap.fromTo(answer, { height: 0, autoAlpha: 0 }, {
        height: "auto", autoAlpha: 1, duration: 0.5, ease: "power3.out",
        onComplete: () => gsap.set(answer, { clearProps: "height" }),
      });
    }
  });
});

/* ============ CTA: line reveal + video parallax ============ */
ScrollTrigger.create({
  trigger: ".cta",
  start: "top 70%",
  once: true,
  onEnter: () => {
    gsap.to(".cta .line__inner", { y: 0, duration: 1.1, ease: "power4.out", stagger: 0.12 });
    gsap.from(".cta__content > p, .cta__actions .storebtn", {
      y: 30, autoAlpha: 0, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.5,
    });
  },
});
gsap.fromTo(
  ".cta__media video",
  { yPercent: -8 },
  {
    yPercent: 0, ease: "none",
    scrollTrigger: { trigger: ".cta", start: "top bottom", end: "bottom top", scrub: true },
  }
);

/* ============ FOOTER: giant wordmark rise ============ */
gsap.from(".footer__giant", {
  yPercent: 60, autoAlpha: 0, duration: 1.2, ease: "power3.out",
  scrollTrigger: { trigger: ".footer__giant", start: "top 95%" },
});

/* refresh after images/videos settle layout */
window.addEventListener("load", () => ScrollTrigger.refresh());
