import { NextResponse } from "next/server";
import { create, DIETITIAN, DURATION_MIN, PRICE } from "@/lib/mockStore";

/** Section 8: POST /consultations/checkout. Saves the consultation, returns Stripe. */
export async function POST(req: Request) {
  const b = await req.json();
  for (const f of ["selected_start_time", "customer_name", "customer_email", "timezone", "currency"]) {
    if (!b?.[f]) return NextResponse.json({ error: `Missing ${f}` }, { status: 400 });
  }
  const currency: "NGN" | "USD" = b.currency === "USD" ? "USD" : "NGN";
  const row = create({
    customer_name: b.customer_name,
    customer_email: b.customer_email,
    customer_phone: b.customer_phone,
    service_type: "Dietitian Consultation",
    selected_start_time: b.selected_start_time,
    timezone: b.timezone,
    duration_minutes: DURATION_MIN,
    price: PRICE[currency],
    currency,
    dietitian_name: DIETITIAN,
  });
  // production returns a Stripe Checkout Session URL here
  return NextResponse.json({
    consultation_id: row.consultation_id,
    checkout_url: `/api/mock-checkout?id=${row.consultation_id}`,
  });
}
