"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SlotPicker from "@/components/booking/SlotPicker";
import { startCheckout } from "@/lib/booking";

const STEPS = ["Choose a time", "Your details", "Review and pay"] as const;
const DURATION = 45;

function money(currency: "NGN" | "USD") {
  return currency === "USD" ? "$50" : "₦50,000";
}

/** Renders the chosen slot the way it will read on the confirmation and email. */
function slotLabel(date: string, time: string, timezone: string) {
  const d = new Date(`${date}T${time}:00`);
  return `${d.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })}, ${time} (${timezone.replace(/_/g, " ")})`;
}

export default function BookFlow() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [slot, setSlot] = useState<{ date: string; time: string } | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // the customer's real timezone, which is what Zoho needs; separate from the
  // NGN/USD region toggle, which only decides what they are charged in
  const timezone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    [],
  );
  const currency: "NGN" | "USD" = useMemo(() => {
    if (typeof document === "undefined") return "NGN";
    return document.documentElement.dataset.region === "us" ? "USD" : "NGN";
  }, []);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canContinue = [Boolean(slot), name.trim().length > 1 && emailOk, true][step];

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
        currency,
      });
      // production sends them to Stripe Checkout here
      window.location.href = checkout_url;
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Something went wrong.");
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-[760px]">
      {/* progress */}
      <ol className="mb-8 flex items-center gap-2" aria-label="Booking steps">
        {STEPS.map((label, i) => (
          <li key={label} className="flex flex-1 items-center gap-2">
            <span
              aria-current={i === step ? "step" : undefined}
              className={`flex h-7 w-7 flex-none items-center justify-center rounded-full text-[0.75rem] font-extrabold transition-colors ${
                i < step ? "bg-accent text-white" : i === step ? "bg-ink text-bg" : "border-[1.5px] border-line text-ink/35"
              }`}
            >
              {i < step ? "✓" : i + 1}
            </span>
            <span className={`hidden text-[0.85rem] font-semibold sm:block ${i === step ? "text-ink" : "text-ink-soft"}`}>
              {label}
            </span>
            {i < STEPS.length - 1 && <span className="h-px flex-1 bg-line" />}
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {step === 0 && (
            <SlotPicker timezone={timezone} value={slot} onChange={setSlot} />
          )}

          {step === 1 && (
            <div className="rounded-2xl border border-line bg-white p-5 sm:p-7">
              <p className="mb-5 text-[0.95rem] text-ink-soft">
                We only need enough to confirm the session and send your guide.
              </p>
              <div className="grid gap-4">
                <label className="block">
                  <span className="mb-1.5 block text-[0.85rem] font-semibold">Full name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className="w-full rounded-xl border-[1.5px] border-line px-4 py-3 text-[0.98rem] outline-none focus:border-accent"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[0.85rem] font-semibold">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    aria-invalid={email.length > 0 && !emailOk}
                    className="w-full rounded-xl border-[1.5px] border-line px-4 py-3 text-[0.98rem] outline-none focus:border-accent"
                  />
                  <span className="mt-1.5 block text-[0.8rem] text-ink-soft">
                    Your confirmation and your guide go here.
                  </span>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[0.85rem] font-semibold">
                    Phone <span className="font-normal text-ink-soft">(optional)</span>
                  </span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    className="w-full rounded-xl border-[1.5px] border-line px-4 py-3 text-[0.98rem] outline-none focus:border-accent"
                  />
                </label>
              </div>
            </div>
          )}

          {step === 2 && slot && (
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <dl className="divide-y divide-line">
                {[
                  ["Consultation", "Nutrition consultation"],
                  ["With", "An akaani Registered Dietitian"],
                  ["When", slotLabel(slot.date, slot.time, timezone)],
                  ["Length", `${DURATION} minutes, on video`],
                  ["Your guide", "In your mail within 24 hours"],
                  ["Email", email],
                  ["Price", money(currency)],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-wrap justify-between gap-2 px-5 py-4 sm:px-7">
                    <dt className="text-[0.92rem] text-ink-soft">{k}</dt>
                    <dd className="text-[0.98rem] font-bold">{v}</dd>
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
        <p role="alert" className="mt-4 rounded-xl border border-accent/40 bg-accent/5 px-4 py-3 text-[0.92rem]">
          {err}
        </p>
      )}

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="rounded-full border-[1.5px] border-line px-6 py-3 text-[0.95rem] font-bold transition-colors hover:border-ink"
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
          className="rounded-full bg-accent px-7 py-3 text-[0.98rem] font-bold text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
        >
          {busy ? "Taking you to payment…" : step === 2 ? `Pay ${money(currency)}` : "Continue"}
        </button>
      </div>
    </div>
  );
}
