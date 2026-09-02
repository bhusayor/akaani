"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getAvailability, type Availability } from "@/lib/booking";

/**
 * Section 7.1. The one date/time component on the site: the booking flow and
 * the reschedule flow both mount this, per section 7.6's "do not build a
 * second scheduler".
 *
 * Every state section 7.1 lists is handled here: loading, slots available, no
 * availability for the selected date, none in the whole range, backend
 * unavailable, and selected.
 */
export default function SlotPicker({
  timezone,
  value,
  onChange,
  days = 21,
  simulate,
}: {
  timezone: string;
  value: { date: string; time: string } | null;
  onChange: (v: { date: string; time: string } | null) => void;
  days?: number;
  simulate?: "fail" | "empty";
}) {
  const reduced = useReducedMotion();
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [all, setAll] = useState<Availability[]>([]);
  const [date, setDate] = useState<string | null>(null);

  const load = useCallback(async () => {
    setState("loading");
    try {
      const from = new Date().toISOString().slice(0, 10);
      const q = simulate ? `&simulate=${simulate}` : "";
      const res = await getAvailability(from + q, days, timezone);
      setAll(res.days);
      setState("ready");
      const firstOpen = res.days.find((d) => d.slots.length > 0);
      setDate((prev) => prev ?? firstOpen?.date ?? res.days[0]?.date ?? null);
    } catch {
      setState("error");
    }
  }, [days, timezone, simulate]);

  useEffect(() => {
    load();
  }, [load]);

  const openDays = all.filter((d) => d.slots.length > 0);
  const selectedDay = all.find((d) => d.date === date);

  // section 9: a Zoho failure shows as unavailable and retryable, never as
  // invented slots
  if (state === "error") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center">
        <p className="mb-1 text-[1.05rem] font-bold">Times are not loading</p>
        <p className="mb-5 text-[0.95rem] text-ink-soft">
          We could not reach the calendar just now. Nothing has been booked.
        </p>
        <button
          type="button"
          onClick={load}
          className="rounded-full bg-ink px-6 py-3 text-[0.95rem] font-bold text-bg transition-colors hover:bg-accent"
        >
          Try again
        </button>
      </div>
    );
  }

  if (state === "loading") {
    return (
      <div className="rounded-2xl border border-line bg-white p-6" aria-busy="true" aria-live="polite">
        <p className="mb-4 text-[0.9rem] font-semibold text-ink-soft">Loading available times…</p>
        <div className="mb-5 flex gap-2 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="h-[74px] w-[68px] flex-none animate-pulse rounded-xl bg-mist" />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="h-11 animate-pulse rounded-xl bg-mist" />
          ))}
        </div>
      </div>
    );
  }

  if (openDays.length === 0) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center">
        <p className="mb-1 text-[1.05rem] font-bold">No times in the next {days} days</p>
        <p className="text-[0.95rem] text-ink-soft">
          The calendar is full. Email hello@useakaani.com and we will find you a slot.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-[0.9rem] font-semibold">Pick a day</p>
        <p className="text-[0.8rem] text-ink-soft">
          Times shown in <b className="text-ink">{timezone.replace(/_/g, " ")}</b>
        </p>
      </div>

      {/* horizontal day strip; only days with slots are selectable */}
      <div className="no-scrollbar -mx-5 mb-6 flex snap-x scroll-px-5 gap-2 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:scroll-px-6 sm:px-6">
        {all.map((d) => {
          const open = d.slots.length > 0;
          const on = d.date === date;
          const dt = new Date(d.date + "T00:00:00");
          return (
            <button
              key={d.date}
              type="button"
              disabled={!open}
              aria-pressed={on}
              onClick={() => {
                setDate(d.date);
                onChange(null);
              }}
              className={`flex-none snap-start rounded-xl border-[1.5px] px-3 py-2.5 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                on ? "border-ink bg-ink text-bg" : open ? "border-line hover:border-ink/40" : "border-line/60 opacity-40"
              }`}
            >
              <span className="block text-[0.68rem] font-bold uppercase tracking-[0.1em] opacity-70">
                {dt.toLocaleDateString(undefined, { weekday: "short" })}
              </span>
              <span className="block text-[1.05rem] font-extrabold leading-tight">{dt.getDate()}</span>
              <span className="block text-[0.66rem] uppercase opacity-70">
                {dt.toLocaleDateString(undefined, { month: "short" })}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mb-3 text-[0.9rem] font-semibold">Pick a time</p>
      {selectedDay && selectedDay.slots.length > 0 ? (
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {selectedDay.slots.map((t) => {
            const on = value?.date === selectedDay.date && value?.time === t;
            return (
              <motion.button
                key={t}
                type="button"
                aria-pressed={on}
                whileTap={reduced ? undefined : { scale: 0.97 }}
                onClick={() => onChange({ date: selectedDay.date, time: t })}
                className={`rounded-xl border-[1.5px] py-3 text-[0.95rem] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  on ? "border-accent bg-accent text-white" : "border-line hover:border-ink/40"
                }`}
              >
                {t}
              </motion.button>
            );
          })}
        </div>
      ) : (
        <p className="rounded-xl border border-line bg-mist px-4 py-5 text-center text-[0.95rem] text-ink-soft">
          No times available on this day. Try another.
        </p>
      )}
    </div>
  );
}
