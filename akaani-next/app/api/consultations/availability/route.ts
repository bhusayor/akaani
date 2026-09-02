import { NextResponse } from "next/server";
import { slotsFor } from "@/lib/mockStore";

/** Section 8: GET /consultations/availability. Backend calls Zoho and normalizes. */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const from = url.searchParams.get("from") ?? new Date().toISOString().slice(0, 10);
  const days = Math.min(Number(url.searchParams.get("days") ?? 14), 60);
  const timezone = url.searchParams.get("timezone") ?? "UTC";

  // section 9: a Zoho failure must not be papered over with invented slots
  if (url.searchParams.get("simulate") === "fail") {
    return NextResponse.json({ error: "Availability is unavailable right now." }, { status: 503 });
  }

  const out = [];
  for (let i = 0; i < days; i++) {
    const d = new Date(from + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() + i);
    const date = d.toISOString().slice(0, 10);
    out.push({ date, timezone, slots: url.searchParams.get("simulate") === "empty" ? [] : slotsFor(date) });
  }
  return NextResponse.json({ timezone, days: out });
}
