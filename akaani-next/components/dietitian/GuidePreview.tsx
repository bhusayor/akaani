"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

/* ---------- small pieces the preview pages are built from ---------- */

function Rows({ items }: { items: [string, string][] }) {
  return (
    <dl className="space-y-3.5">
      {items.map(([k, v]) => (
        <div key={k} className="flex items-baseline justify-between gap-4 border-b border-line pb-3.5 last:border-0">
          <dt className="text-[0.9rem] text-ink-soft">{k}</dt>
          <dd className="text-[0.98rem] font-bold tabular-nums">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Plate() {
  const C = 2 * Math.PI * 54;
  const arcs = [
    { part: 0.5, offset: 0, color: "var(--color-ink)", label: "Vegetables & soup" },
    { part: 0.25, offset: 0.5, color: "var(--color-accent)", label: "Protein" },
    { part: 0.25, offset: 0.75, color: "rgba(0,51,51,0.25)", label: "Swallow or rice" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-7">
      <svg viewBox="0 0 120 120" className="h-[126px] w-[126px] flex-none" aria-hidden="true">
        {arcs.map((a) => (
          <circle
            key={a.label}
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="13"
            stroke={a.color}
            strokeDasharray={`${C * a.part} ${C}`}
            strokeDashoffset={-C * a.offset}
            transform="rotate(-90 60 60)"
          />
        ))}
      </svg>
      <ul className="space-y-2.5">
        {arcs.map((a) => (
          <li key={a.label} className="flex items-center gap-2.5 text-[0.9rem]">
            <span className="h-2.5 w-2.5 flex-none rounded-full" style={{ background: a.color }} />
            <b className="font-bold">{Math.round(a.part * 100)}%</b>
            <span className="text-ink-soft">{a.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 h-4 w-4 flex-none text-accent"
            aria-hidden="true"
          >
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
          <span className="text-[0.94rem] leading-[1.5]">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line px-3.5 py-2 text-[0.88rem] font-semibold">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Swaps({ items }: { items: [string, string][] }) {
  return (
    <ul className="space-y-3">
      {items.map(([from, to]) => (
        <li key={from} className="flex flex-wrap items-center gap-3 border-b border-line pb-3 last:border-0">
          <span className="text-[0.92rem] text-ink-soft line-through decoration-ink/25">{from}</span>
          <span className="text-accent" aria-hidden="true">
            &rarr;
          </span>
          <b className="text-[0.94rem] font-bold">{to}</b>
        </li>
      ))}
    </ul>
  );
}

function Meals({ items }: { items: [string, string][] }) {
  return (
    <ul className="space-y-4">
      {items.map(([when, what]) => (
        <li key={when} className="flex gap-4 border-b border-line pb-4 last:border-0">
          <span className="w-[74px] flex-none pt-0.5 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-ink/35">
            {when}
          </span>
          <span className="text-[0.94rem] leading-[1.5]">{what}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- the six sections, each with the page it produces ---------- */

const SECTIONS: { title: string; body: string; page: ReactNode; note: string }[] = [
  {
    title: "Your nutrition targets",
    body: "Personalized calorie and macro targets, where appropriate for your goals.",
    note: "Set with your dietitian on the call, and adjusted to your health, not a formula.",
    page: (
      <Rows
        items={[
          ["Energy", "2,100 kcal"],
          ["Protein", "105 g"],
          ["Fibre", "30 g"],
          ["Added sugar", "Under 25 g"],
        ]}
      />
    ),
  },
  {
    title: "Your plate & portion guidance",
    body: "Practical portions using familiar measures and the foods you already eat.",
    note: "One plate, three parts. It works whether you are eating rice, swallow or beans.",
    page: <Plate />,
  },
  {
    title: "Your nutrition priorities",
    body: "3 to 5 clear areas to focus on, based on your consultation.",
    note: "Few enough to actually do. Nobody changes ten things at once.",
    page: (
      <Checks
        items={[
          "Anchor breakfast with a protein, not just bread or pap.",
          "Cut frying to twice a week. Boil, grill or bake the rest.",
          "Bring vegetables into the two meals you cook most often.",
          "Move your heaviest swallow to earlier in the day.",
        ]}
      />
    ),
  },
  {
    title: "Foods & meals to prioritize",
    body: "Nigerian foods and meal combinations that support your goals.",
    note: "Foods you can buy at your usual market, not imported substitutes.",
    page: (
      <Chips
        items={[
          "Efo riro",
          "Moi moi",
          "Ofada rice",
          "Beans & plantain",
          "Okra soup",
          "Mackerel",
          "Garden egg",
          "Unripe plantain",
        ]}
      />
    ),
  },
  {
    title: "Practical Nigerian food swaps",
    body: "Simple changes that improve nutrition without giving up the foods you enjoy.",
    note: "Same meal, small change. Nothing on this list is a food you have to give up.",
    page: (
      <Swaps
        items={[
          ["White rice", "Ofada or brown rice"],
          ["Fried plantain", "Boiled or grilled plantain"],
          ["Soft drink", "Zobo, no sugar"],
          ["Buttered bread", "Bread with eggs or beans"],
        ]}
      />
    ),
  },
  {
    title: "Sample meal combinations",
    body: "Examples of what breakfast, lunch and dinner could look like based on your recommendations.",
    note: "Mix, match and repeat across the week. These are starting points, not rules.",
    page: (
      <Meals
        items={[
          ["Breakfast", "Pap with moi moi, and a boiled egg."],
          ["Lunch", "Ofada rice, efo riro, grilled fish."],
          ["Dinner", "Beans and unripe plantain porridge."],
          ["If hungry", "Groundnuts, garden egg, or an orange."],
        ]}
      />
    ),
  },
];

/* ---------- the section itself ---------- */

export default function GuidePreview() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  /** Arrow keys walk the list, the way a tablist is expected to behave. */
  function onKeyDown(e: React.KeyboardEvent) {
    const last = SECTIONS.length - 1;
    const next = { ArrowDown: active + 1, ArrowRight: active + 1, ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: last }[
      e.key
    ];
    if (next === undefined) return;
    e.preventDefault();
    const i = Math.min(last, Math.max(0, next));
    setActive(i);
    tabs.current[i]?.focus();
  }

  const current = SECTIONS[active];

  return (
    <div className="mx-auto grid max-w-[1180px] items-start gap-[clamp(28px,4vw,60px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      {/* contents: a chip strip on small screens, a list on large ones */}
      <div
        role="tablist"
        aria-label="Sections of the guide"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="-mx-5 flex snap-x gap-2.5 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {SECTIONS.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.title}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`guide-tab-${i}`}
              aria-selected={on}
              aria-controls="guide-page"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={`group relative flex-none snap-start rounded-full border px-4 py-2.5 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent lg:w-full lg:flex-auto lg:rounded-none lg:border-0 lg:border-b lg:border-line lg:py-5 lg:pl-5 lg:pr-0 ${
                on ? "border-ink bg-ink text-bg lg:bg-transparent lg:text-ink" : "border-line hover:border-ink/30 lg:hover:border-line"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-y-3 left-0 hidden w-[3px] rounded-full bg-accent transition-opacity duration-300 lg:block ${
                  on ? "opacity-100" : "opacity-0"
                }`}
              />
              <span className="flex items-baseline gap-3 lg:gap-4">
                <span
                  className={`text-[0.72rem] font-extrabold tabular-nums transition-colors duration-300 ${
                    on ? "text-accent" : "text-accent/40 group-hover:text-accent"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block">
                  <b
                    className={`block whitespace-nowrap text-[0.92rem] font-bold leading-[1.3] transition-colors duration-300 lg:whitespace-normal lg:text-[1.05rem] ${
                      on ? "lg:text-accent" : "group-hover:text-accent"
                    }`}
                  >
                    {s.title}
                  </b>
                  <span className="mt-1.5 hidden text-[0.93rem] leading-[1.6] text-ink-soft lg:block">{s.body}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* the page that section produces */}
      <div className="lg:sticky lg:top-28">
        <div className="overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_30px_60px_-34px_rgba(0,51,51,0.45)]">
          <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4 md:px-8">
            <span className="text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-ink/35">
              Personal Nutrition Guide
            </span>
            <span className="rounded-full border border-line px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-ink/35">
              Example
            </span>
          </div>

          <div
            role="tabpanel"
            id="guide-page"
            aria-labelledby={`guide-tab-${active}`}
            className="min-h-[352px] px-6 py-7 md:px-8 md:py-9"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="mb-1.5 text-[0.66rem] font-extrabold uppercase tracking-[0.2em] text-accent">
                  Section {String(active + 1).padStart(2, "0")} of {String(SECTIONS.length).padStart(2, "0")}
                </p>
                <h3 className="mb-6 text-[clamp(1.2rem,1.7vw,1.45rem)] leading-[1.2]">{current.title}</h3>
                {current.page}
                <p className="mt-6 border-t border-line pt-5 text-[0.88rem] leading-[1.55] text-ink-soft">
                  {current.note}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-4 text-center text-[0.82rem] text-ink-soft lg:text-left">
          A preview. Your own guide is written after your call.
        </p>
      </div>
    </div>
  );
}
