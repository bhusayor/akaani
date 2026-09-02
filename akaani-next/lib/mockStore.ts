import type { BookingStatus, Consultation } from "./booking";

/**
 * Stand-in for the backend described in section 6, so the booking journey can
 * be built and tested before Zoho and Stripe exist. In-memory on purpose: it
 * resets on restart, which is what you want while iterating on the UI.
 *
 * Everything here is replaced by the real backend. Nothing in the UI imports
 * this file; it only talks to the routes.
 */

export const DIETITIAN = "akaani Registered Dietitian";
export const DURATION_MIN = 45;
export const PRICE = { NGN: 50000, USD: 50 } as const;
/** Section 10: cancellation and reschedule deadlines. Defaulted, confirm before launch. */
export const WINDOW_HOURS = 24;

type Row = Consultation & { created_at: number };
const rows = new Map<string, Row>();

/** Deterministic pseudo-availability so the UI is stable between reloads. */
export function slotsFor(dateISO: string): string[] {
  const d = new Date(dateISO + "T00:00:00Z");
  const day = d.getUTCDay();
  if (day === 0) return []; // closed Sundays
  const seed = d.getUTCDate();
  const all = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];
  if (seed % 7 === 3) return []; // an occasional fully booked day
  return all.filter((_, i) => (seed + i) % 3 !== 0);
}

export function create(c: Omit<Consultation, "consultation_id" | "status" | "can_reschedule" | "can_cancel">): Row {
  const id = "cons_" + Math.random().toString(36).slice(2, 10);
  const row: Row = {
    ...c,
    consultation_id: id,
    status: "PAYMENT_PENDING",
    can_reschedule: true,
    can_cancel: true,
    booking_reference: "AK-" + id.slice(5).toUpperCase(),
    created_at: Date.now(),
  };
  rows.set(id, row);
  return row;
}

export function get(id: string): Row | undefined {
  const row = rows.get(id);
  if (!row) return undefined;
  // Section 7.6: actions close once the window has passed.
  const hoursOut = (new Date(row.selected_start_time).getTime() - Date.now()) / 36e5;
  const open = hoursOut > WINDOW_HOURS && !["CANCELLED", "BOOKING_FAILED"].includes(row.status);
  return { ...row, can_reschedule: open, can_cancel: open };
}

export function update(id: string, patch: Partial<Row>): Row | undefined {
  const row = rows.get(id);
  if (!row) return undefined;
  const next = { ...row, ...patch };
  rows.set(id, next);
  return get(id);
}

/**
 * Stands in for section 6.5: Stripe confirms, then the backend books Zoho.
 * The delay is deliberate so the confirmation screen's polling state is real
 * and gets exercised rather than skipped.
 */
export function settleAfterPayment(id: string) {
  setTimeout(() => {
    const row = rows.get(id);
    if (!row || row.status !== "PAID") return;
    // one slot in twenty is gone by the time payment clears, so the
    // paid-but-unbooked path in 7.4 is reachable in testing
    const taken = Math.random() < 0.05;
    rows.set(id, {
      ...row,
      status: (taken ? "PAID_BOOKING_ATTENTION" : "BOOKING_CONFIRMED") as BookingStatus,
      join_url: taken ? undefined : "https://meet.example.com/" + row.consultation_id,
    });
  }, 2500);
}

export function markPaid(id: string) {
  update(id, { status: "PAID" });
  settleAfterPayment(id);
}

/** Stands in for the signed token in the confirmation email. */
export function tokenFor(id: string) {
  return Buffer.from("akaani:" + id).toString("base64url");
}
export function verifyToken(id: string, token?: string) {
  return !!token && token === tokenFor(id);
}
