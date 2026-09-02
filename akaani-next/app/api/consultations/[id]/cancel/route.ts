import { NextResponse } from "next/server";
import { get, update, verifyToken } from "@/lib/mockStore";

/** Section 6.7 / 8: POST /consultations/{id}/cancel. */
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const b = await req.json().catch(() => ({}));
  const row = get(id);
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (!verifyToken(id, b.token)) return NextResponse.json({ error: "Invalid link" }, { status: 403 });
  if (!row.can_cancel) return NextResponse.json({ error: "Too close to the session to cancel it." }, { status: 409 });
  return NextResponse.json(update(id, { status: "CANCELLED" }));
}
