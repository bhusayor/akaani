"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SlotPicker from "@/components/booking/SlotPicker";
import { startCheckout } from "@/lib/booking";
import { PRICE, useRegion } from "@/lib/useRegion";
import { browserTimezone, tzLabel } from "@/lib/timezone";

const STEPS = ["Choose a time", "Your details", "Review and pay"] as const;
const DURATION = 45;

function slotLabel(date: string, time: string) {
  const d = new Date(`${date}T${time}:00`);
  return `${d.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })} at ${time}`;
}

/** Short enough that the time survives on a phone, where the bar is narrow. */
function slotLabelShort(date: string, time: string) {
  const d = new Date(`${date}T${time}:00`);
  return `${d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" })} at ${time}`;
}

/** Shared input so every field on the form behaves and looks the same. */
function Field({
  label,
  hint,
  error,
  optional,
  ...input
}: {
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline justify-between gap-2">
        <span className="text-[0.88rem] font-bold">{label}</span>
        {optional && <span className="text-[0.78rem] font-medium text-ink-soft">Optional</span>}
      </span>
      <input
        {...input}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-xl border-[1.5px] bg-white px-4 py-3.5 text-[1rem] outline-none transition-colors placeholder:text-ink/25 ${
          error ? "border-accent" : "border-line focus:border-ink"
        }`}
      />
      {(error || hint) && (
        <span className={`mt-2 block text-[0.82rem] ${error ? "font-semibold text-accent" : "text-ink-soft"}`}>
          {error ?? hint}
        </span>
      )}
    </label>
  );
}

export default function BookFlow() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [slot, setSlot] = useState<{ date: string; time: string } | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // the customer's real timezone, which is what Zoho books against; separate
  // from the region, which only decides the currency
  const timezone = useMemo(browserTimezone, []);
  const [region] = useRegion();
  const price = PRICE[region];

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const nameOk = name.trim().length > 1;
  const canContinue = [Boolean(slot), nameOk && emailOk, true][step];

  async function pay() {
    if (!slot) return;
    setBusy(true);
    setErr(null);
    try {
      const { checkout_url } = await startCheckout({
        selected_start_time: new Date(`${slot.date}T${slot.time}:00`).toISOString(),
        timezone,
        customer_name: name.trim(),
        customer_email: email.trim(),
        customer_phone: phone.trim() || undefined,
        currency: price.currency,
      });
      window.location.href = checkout_url;
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Something went wrong. Nothing has been charged.");
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-[720px]">
      <ol className="mb-8 flex items-center gap-2.5" aria-label="Booking steps">
        {STEPS.map((label, i) => (
          <li key={label} className="flex flex-1 items-center gap-2.5">
            <span
              aria-current={i === step ? "step" : undefined}
              className={`grid h-8 w-8 flex-none place-items-center rounded-full text-[0.78rem] font-extrabold transition-colors ${
                i < step ? "bg-accent text-white" : i === step ? "bg-ink text-bg" : "border-[1.5px] border-line text-ink/30"
              }`}
            >
              {i < step ? "✓" : i + 1}
            </span>
            <span className={`hidden text-[0.88rem] font-semibold sm:block ${i === step ? "text-ink" : "text-ink-soft"}`}>
              {label}
            </span>
            {i < STEPS.length - 1 && <span className="h-px flex-1 bg-line" />}
          </li>
        ))}
      </ol>

      {/* keeps the chosen time in front of them once they leave the picker */}
      {slot && step > 0 && (
        <button
          type="button"
          onClick={() => setStep(0)}
          className="mb-4 flex w-full items-center gap-3 rounded-xl border border-line bg-mist px-4 py-3 text-left transition-colors hover:border-ink/30"
        >
          <span className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-ink text-bg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18M8 3v4M16 3v4" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[0.95rem] font-bold">
              <span className="sm:hidden">{slotLabelShort(slot.date, slot.time)}</span>
              <span className="hidden sm:inline">{slotLabel(slot.date, slot.time)}</span>
            </span>
            <span className="block text-[0.8rem] text-ink-soft">
              {DURATION} minutes · {tzLabel(timezone)}
            </span>
          </span>
          <span className="flex-none text-[0.82rem] font-bold text-accent">Change</span>
        </button>
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {step === 0 && <SlotPicker timezone={timezone} value={slot} onChange={setSlot} />}

          {step === 1 && (
            <div className="rounded-2xl border border-line bg-white p-5 sm:p-7">
              <p className="mb-6 text-[0.95rem] leading-[1.6] text-ink-soft">
                Just enough to confirm the session and send your guide. Nothing else.
              </p>
              <div className="grid gap-5">
                <Field
                  label="Full name"
                  value={name}
                  autoComplete="name"
                  placeholder="Adaeze Okafor"
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  error={touched.name && !nameOk ? "Please enter your name." : undefined}
                />
                <Field
                  label="Email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  placeholder="you@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  hint="Your confirmation, your guide, and the link to change this booking all go here."
                  error={touched.email && !emailOk ? "That does not look like an email address." : undefined}
                />
                <Field
                  label="Phone"
                  optional
                  type="tel"
                  value={phone}
                  autoComplete="tel"
                  placeholder="+234"
                  onChange={(e) => setPhone(e.target.value)}
                  hint="Only used if we cannot reach you by email on the day."
                />
              </div>
            </div>
          )}

          {step === 2 && slot && (
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="border-b border-line px-5 py-5 sm:px-7">
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink/40">Total</p>
                <p className="text-[2rem] font-extrabold leading-tight">{price.label}</p>
                {/* the currency follows their location, so name the reason */}
                <p className="mt-1 text-[0.82rem] text-ink-soft">
                  Charged in {price.currency}, based on your location.
                </p>
              </div>

              <dl className="divide-y divide-line">
                {[
                  ["Consultation", "Nutrition consultation"],
                  ["With", "An akaani Registered Dietitian"],
                  ["When", slotLabel(slot.date, slot.time)],
                  ["Timezone", tzLabel(timezone)],
                  ["Length", `${DURATION} minutes, on video`],
                  ["Your guide", "In your mail within 24 hours"],
                  ["Email", email],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-wrap justify-between gap-2 px-5 py-3.5 sm:px-7">
                    <dt className="text-[0.92rem] text-ink-soft">{k}</dt>
                    <dd className="text-[0.96rem] font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="border-t border-line bg-mist px-5 py-4 text-[0.86rem] leading-[1.55] text-ink-soft sm:px-7">
                You can change or cancel this up to 24 hours before the session.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {err && (
        <p role="alert" className="mt-4 rounded-xl border-[1.5px] border-accent bg-accent/5 px-4 py-3 text-[0.92rem] font-semibold">
          {err}
        </p>
      )}

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="rounded-full border-[1.5px] border-line px-6 py-3.5 text-[0.95rem] font-bold transition-colors hover:border-ink"
          >
            Back
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          disabled={!canContinue || busy}
          onClick={() => (step === 2 ? pay() : setStep((s) => s + 1))}
          className="rounded-full bg-accent px-8 py-3.5 text-[1rem] font-bold text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
        >
          {busy ? "Taking you to payment…" : step === 2 ? `Pay ${price.label}` : "Continue"}
        </button>
      </div>
    </div>
  );
}
