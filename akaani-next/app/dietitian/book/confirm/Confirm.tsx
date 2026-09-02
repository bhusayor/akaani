"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsultation, type Consultation } from "@/lib/booking";

/**
 * Section 7.4. Stripe redirecting back is not proof of a booking: the webhook
 * creates the Zoho appointment, so this polls akaani for the real state and
 * refuses to say "booked" until the backend says BOOKING_CONFIRMED.
 */
const POLL_MS = 1500;
const GIVE_UP_MS = 30000;

export default function Confirm({ id, token }: { id: string; token?: string }) {
  const [c, setC] = useState<Consultation | null>(null);
  const [phase, setPhase] = useState<"working" | "done" | "slow" | "error">("working");

  useEffect(() => {
    let alive = true;
    const started = Date.now();
    let timer: ReturnType<typeof setTimeout>;

    async function tick() {
      try {
        const next = await getConsultation(id, token);
        if (!alive) return;
        setC(next);
        const settled = ["BOOKING_CONFIRMED", "RESCHEDULED", "CANCELLED", "BOOKING_FAILED", "PAID_BOOKING_ATTENTION"];
        if (settled.includes(next.status)) return setPhase("done");
        // bounded, then hand over to a support state rather than spinning forever
        if (Date.now() - started > GIVE_UP_MS) return setPhase("slow");
        timer = setTimeout(tick, POLL_MS);
      } catch {
        if (alive) setPhase("error");
      }
    }
    tick();
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [id, token]);

  if (phase === "error") {
    return (
      <Shell title="We cannot find that booking">
        <p className="text-ink-soft">
          The link may be incomplete. If you have paid, email hello@useakaani.com with your name and we will sort it.
        </p>
      </Shell>
    );
  }

  if (phase === "working" || !c) {
    return (
      <Shell title="Confirming your appointment">
        <p className="text-ink-soft">
          Your payment went through. We are putting the time in the dietitian&apos;s calendar now. This takes a few
          seconds, so please do not close this page.
        </p>
        <span className="mt-6 block h-1 w-full overflow-hidden rounded-full bg-line">
          <span className="block h-full w-1/3 animate-[slide_1.4s_ease-in-out_infinite] rounded-full bg-accent" />
        </span>
      </Shell>
    );
  }

  if (phase === "slow") {
    return (
      <Shell title="This is taking longer than usual">
        <p className="text-ink-soft">
          Your payment is safe and your booking is still being confirmed. We will email you as soon as it is done. If
          you have not heard within an hour, email hello@useakaani.com quoting <b className="text-ink">{c.booking_reference}</b>.
        </p>
      </Shell>
    );
  }

  // section 7.4: paid but the slot went. Never show "Booked".
  if (c.status === "PAID_BOOKING_ATTENTION" || c.status === "BOOKING_FAILED") {
    return (
      <Shell title="Your payment went through, but that time has gone">
        <p className="mb-5 text-ink-soft">
          Someone took the slot while you were paying. We have not booked you into another time on your behalf. Reply to
          your receipt or email hello@useakaani.com quoting{" "}
          <b className="text-ink">{c.booking_reference}</b> and we will move you to a time that works, at no extra cost.
        </p>
        <Link
          href="/dietitian/book"
          className="inline-block rounded-full bg-ink px-6 py-3 text-[0.95rem] font-bold text-bg transition-colors hover:bg-accent"
        >
          Pick another time
        </Link>
      </Shell>
    );
  }

  if (c.status === "CANCELLED") {
    return (
      <Shell title="This booking is cancelled">
        <p className="text-ink-soft">Nothing further is scheduled. You are welcome to book again whenever you like.</p>
      </Shell>
    );
  }

  const when = new Date(c.selected_start_time);
  return (
    <Shell title="You are booked" accent>
      <p className="mb-7 text-ink-soft">
        A confirmation is on its way to <b className="text-ink">{c.customer_email}</b>. That email holds the link you
        use to change or cancel this session.
      </p>

      <dl className="mb-7 divide-y divide-line overflow-hidden rounded-2xl border border-line text-left">
        {[
          ["When", when.toLocaleString(undefined, { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })],
          ["Timezone", c.timezone.replace(/_/g, " ")],
          ["Length", `${c.duration_minutes} minutes, on video`],
          ["With", c.dietitian_name],
          ["Joining", c.join_url ? "Link below" : "Sent by email before the session"],
          ["Reference", c.booking_reference ?? "—"],
        ].map(([k, v]) => (
          <div key={k} className="flex flex-wrap justify-between gap-2 bg-white px-5 py-3.5">
            <dt className="text-[0.9rem] text-ink-soft">{k}</dt>
            <dd className="text-[0.95rem] font-bold">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        {c.join_url && (
          <a
            href={c.join_url}
            className="rounded-full bg-accent px-6 py-3 text-[0.95rem] font-bold text-white transition-colors hover:bg-ink"
          >
            Join link
          </a>
        )}
        <Link
          href={`/booking/${c.consultation_id}${token ? `?t=${token}` : ""}`}
          className="rounded-full border-[1.5px] border-line px-6 py-3 text-[0.95rem] font-bold transition-colors hover:border-ink"
        >
          Manage this booking
        </Link>
      </div>
    </Shell>
  );
}

function Shell({ title, children, accent }: { title: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <div className="mx-auto max-w-[620px] text-center">
      {accent && (
        <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-accent text-[1.5rem] text-white">
          ✓
        </span>
      )}
      <h1 className="mb-3 text-[clamp(1.8rem,3.4vw,2.6rem)]">{title}</h1>
      <div className="text-[1.02rem] leading-[1.6]">{children}</div>
    </div>
  );
}
