/**
 * The frontend/backend contract from section 8 of the implementation guide.
 * Endpoint names and shapes match the document so the real backend can drop
 * in behind them without the UI changing.
 */

/** Section 6.2. The frontend only ever reads these. */
export type BookingStatus =
  | "SLOT_SELECTED"
  | "PAYMENT_PENDING"
  | "PAID"
  | "BOOKING_CONFIRMED"
  | "BOOKING_FAILED"
  | "PAID_BOOKING_ATTENTION"
  | "RESCHEDULED"
  | "CANCELLED";

/** Section 6.3's recommended response shape. */
export type Availability = {
  date: string;
  timezone: string;
  slots: string[];
};

export type Consultation = {
  consultation_id: string;
  status: BookingStatus;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  service_type: string;
  selected_start_time: string;
  timezone: string;
  duration_minutes: number;
  price: number;
  currency: "NGN" | "USD";
  dietitian_name: string;
  join_url?: string;
  booking_reference?: string;
  /** Set by the backend; drives whether manage actions are offered. */
  can_reschedule: boolean;
  can_cancel: boolean;
};

export type CheckoutRequest = {
  selected_start_time: string;
  timezone: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  currency: "NGN" | "USD";
};

export type CheckoutResponse = {
  consultation_id: string;
  /** Where to send the customer for payment. Stripe Checkout in production. */
  checkout_url: string;
};

const BASE = process.env.NEXT_PUBLIC_BOOKING_API ?? "/api";

async function call<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `Request failed (${res.status})`);
  }
  return res.json();
}

/** Section 6.3. The browser never calls Zoho; it asks akaani. */
export function getAvailability(from: string, days: number, timezone: string) {
  const q = new URLSearchParams({ from, days: String(days), timezone });
  return call<{ timezone: string; days: Availability[] }>(`/consultations/availability?${q}`);
}

export function startCheckout(body: CheckoutRequest) {
  return call<CheckoutResponse>("/consultations/checkout", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function getConsultation(id: string, token?: string) {
  const q = token ? `?t=${encodeURIComponent(token)}` : "";
  return call<Consultation>(`/consultations/${id}${q}`);
}

export function rescheduleConsultation(id: string, selected_start_time: string, timezone: string, token?: string) {
  return call<Consultation>(`/consultations/${id}/reschedule`, {
    method: "POST",
    body: JSON.stringify({ selected_start_time, timezone, token }),
  });
}

export function cancelConsultation(id: string, token?: string) {
  return call<Consultation>(`/consultations/${id}/cancel`, {
    method: "POST",
    body: JSON.stringify({ token }),
  });
}
