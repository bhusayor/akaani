"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SlotPicker from "@/components/booking/SlotPicker";
import { cancelConsultation, getConsultation, rescheduleConsultation, type Consultation } from "@/lib/booking";

/**
 * Section 7.6. Reschedule mounts the same SlotPicker the booking flow uses,
 * per "do not build a second scheduler". Access is the signed token from the
 * confirmation email, since the site has no accounts.
 */
export default function Manage({ id, token }: { id: string; token?: string }) {
  const [c, setC] = useState<Consultation | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [mode, setMode] = useState<"view" | "reschedule" | "confirmCancel">("view");
  const [slot, setSlot] = useState<{ date: string; time: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setC(await getConsultation(id, token));
      setState("ready");
    } catch {
      setState("error");
    }
  }, [id, token]);

  useEffect(() => {
    load();
  }, [load]);

  if (state === "loading") return <p className="text-center text-ink-soft">Loading your booking…</p>;

  if (state === "error" || !c) {
    return (
      <Wrap title="We cannot open that booking">
        <p className="text-ink-soft">
          The link may have been cut short by your mail app. Open it again from the confirmation email, or email
          hello@useakaani.com and we will help.
        </p>
      </Wrap>
    );
  }

  if (c.status === "CANCELLED") {
    return (
      <Wrap title="This booking is cancelled">
        <p className="mb-6 text-ink-soft">Nothing is scheduled. You can book again whenever you are ready.</p>
        <Link href="/dietitian/book" className="inline-block rounded-full bg-accent px-6 py-3 text-[0.95rem] font-bold text-white transition-colors hover:bg-ink">
          Book a new session
        </Link>
      </Wrap>
    );
  }

  const when = new Date(c.selected_start_time);

  async function doReschedule() {
    if (!slot || !c) return;
    setBusy(true);
    setErr(null);
    try {
      // section 9: akaani only shows the new time once the backend confirms it
      const next = await rescheduleConsultation(
        c.consultation_id,
        new Date(`${slot.date}T${slot.time}:00`).toISOString(),
        c.timezone,
        token,
      );
      setC(next);
      setMode("view");
      setSlot(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Could not change the time.");
    }
    setBusy(false);
  }

  async function doCancel() {
    if (!c) return;
    setBusy(true);
    setErr(null);
    try {
      setC(await cancelConsultation(c.consultation_id, token));
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Could not cancel.");
    }
    setBusy(false);
  }

  return (
    <Wrap title="Your booking">
      <dl className="mb-6 divide-y divide-line overflow-hidden rounded-2xl border border-line text-left">
        {[
          ["When", when.toLocaleString(undefined, { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })],
          ["Timezone", c.timezone.replace(/_/g, " ")],
          ["Length", `${c.duration_minutes} minutes, on video`],
          ["With", c.dietitian_name],
          ["Reference", c.booking_reference ?? "—"],
        ].map(([k, v]) => (
          <div key={k} className="flex flex-wrap justify-between gap-2 bg-white px-5 py-3.5">
            <dt className="text-[0.9rem] text-ink-soft">{k}</dt>
            <dd className="text-[0.95rem] font-bold">{v}</dd>
          </div>
        ))}
      </dl>

      {err && (
        <p role="alert" className="mb-5 rounded-xl border border-accent/40 bg-accent/5 px-4 py-3 text-left text-[0.92rem]">
          {err}
        </p>
      )}

      {/* section 7.6: actions disappear once the window has passed */}
      {!c.can_reschedule && !c.can_cancel && (
        <p className="rounded-xl border border-line bg-mist px-5 py-4 text-[0.92rem] text-ink-soft">
          This session is within 24 hours, so it can no longer be changed here. Email hello@useakaani.com if you need
          to move it.
        </p>
      )}

      {mode === "view" && (c.can_reschedule || c.can_cancel) && (
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          {c.can_reschedule && (
            <button
              type="button"
              onClick={() => setMode("reschedule")}
              className="rounded-full bg-ink px-6 py-3 text-[0.95rem] font-bold text-bg transition-colors hover:bg-accent"
            >
              Change the time
            </button>
          )}
          {c.can_cancel && (
            <button
              type="button"
              onClick={() => setMode("confirmCancel")}
              className="rounded-full border-[1.5px] border-line px-6 py-3 text-[0.95rem] font-bold transition-colors hover:border-ink"
            >
              Cancel booking
            </button>
          )}
        </div>
      )}

      {mode === "reschedule" && (
        <div className="text-left">
          <p className="mb-4 text-[0.95rem] font-semibold">Pick a new time</p>
          <SlotPicker timezone={c.timezone} value={slot} onChange={setSlot} />
          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button type="button" onClick={() => { setMode("view"); setSlot(null); }} className="rounded-full border-[1.5px] border-line px-6 py-3 text-[0.95rem] font-bold transition-colors hover:border-ink">
              Keep my time
            </button>
            <button type="button" disabled={!slot || busy} onClick={doReschedule} className="rounded-full bg-accent px-6 py-3 text-[0.95rem] font-bold text-white transition-colors hover:bg-ink disabled:opacity-40">
              {busy ? "Moving it…" : "Confirm new time"}
            </button>
          </div>
        </div>
      )}

      {mode === "confirmCancel" && (
        <div className="rounded-2xl border border-line bg-white p-6 text-left">
          <p className="mb-2 text-[1.05rem] font-bold">Cancel this session?</p>
          <p className="mb-5 text-[0.95rem] text-ink-soft">
            The time goes back into the calendar and you will get a cancellation email.
          </p>
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button type="button" onClick={() => setMode("view")} className="rounded-full border-[1.5px] border-line px-6 py-3 text-[0.95rem] font-bold transition-colors hover:border-ink">
              Keep it
            </button>
            <button type="button" disabled={busy} onClick={doCancel} className="rounded-full bg-ink px-6 py-3 text-[0.95rem] font-bold text-bg transition-colors hover:bg-accent disabled:opacity-40">
              {busy ? "Cancelling…" : "Yes, cancel"}
            </button>
          </div>
        </div>
      )}
    </Wrap>
  );
}

function Wrap({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[620px] text-center">
      <h1 className="mb-6 text-[clamp(1.8rem,3.4vw,2.6rem)]">{title}</h1>
      {children}
    </div>
  );
}
