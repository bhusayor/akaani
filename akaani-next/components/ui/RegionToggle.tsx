"use client";

import { useEffect, useState } from "react";

type Region = "ng" | "us";

/**
 * Manual override for the detected region. Detection is good, not perfect:
 * a VPN, a traveller, or a diaspora buyer paying in Naira all need a way out.
 * The choice is remembered so the page does not argue with them next visit.
 */
export default function RegionToggle() {
  const [region, setRegion] = useState<Region | null>(null);

  // follow whatever the detection script settles on, including the async
  // country-by-IP pass that lands after first paint
  useEffect(() => {
    const read = () => setRegion(document.documentElement.dataset.region === "us" ? "us" : "ng");
    read();
    const onRegion = () => read();
    document.addEventListener("akaani:region", onRegion);
    return () => document.removeEventListener("akaani:region", onRegion);
  }, []);

  function pick(next: Region) {
    setRegion(next);
    document.documentElement.dataset.region = next;
    try {
      localStorage.setItem("akaani-region", next);
    } catch {
      /* private mode: the choice just does not persist */
    }
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-line p-1" role="group" aria-label="Currency">
      {(
        [
          ["ng", "₦ NGN"],
          ["us", "$ USD"],
        ] as const
      ).map(([key, label]) => {
        const on = region === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => pick(key)}
            aria-pressed={on}
            className={`rounded-full px-2.5 py-1 text-[0.68rem] font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              on ? "bg-ink text-bg" : "text-ink-soft hover:text-ink"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
