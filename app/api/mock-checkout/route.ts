import { NextResponse } from "next/server";
import { markPaid, tokenFor } from "@/lib/mockStore";

/**
 * Stands in for Stripe Checkout. Production replaces this with a real Session
 * URL, and payment is confirmed by the webhook in section 6.5, not by this
 * redirect. Section 7.3 step 61 is why the confirmation screen still polls.
 */
export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  markPaid(id);
  const url = new URL(req.url);
  return NextResponse.redirect(new URL(`/dietitian/book/confirm?id=${id}&t=${tokenFor(id)}`, url.origin));
}
