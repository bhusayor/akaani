import { NextResponse } from "next/server";
import { get, update, verifyToken } from "@/lib/mockStore";

/** Section 6.6 / 8: POST /consultations/{id}/reschedule. */
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const b = await req.json().catch(() => ({}));
  const row = get(id);
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (!verifyToken(id, b.token)) return NextResponse.json({ error: "Invalid link" }, { status: 403 });
  if (!row.can_reschedule) return NextResponse.json({ error: "Too close to the session to change it." }, { status: 409 });
  if (!b.selected_start_time) return NextResponse.json({ error: "Missing slot" }, { status: 400 });
  // section 9: akaani only updates once Zoho confirms
  return NextResponse.json(update(id, { selected_start_time: b.selected_start_time, timezone: b.timezone ?? row.timezone, status: "RESCHEDULED" }));
}
