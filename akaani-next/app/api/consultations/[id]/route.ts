import { NextResponse } from "next/server";
import { get, verifyToken } from "@/lib/mockStore";

/**
 * Section 8: GET /consultations/{id}. Payment plus booking state.
 *
 * The token is required to read, not only to mutate. Without it the id alone
 * would expose the customer's name, email and appointment to anyone who has
 * the link or guesses an id. Section 6.6 asks for ownership to be verified;
 * with no accounts on the site, the signed token is that ownership check.
 */
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const token = new URL(req.url).searchParams.get("t") ?? undefined;
  const row = get(id);
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (!verifyToken(id, token)) return NextResponse.json({ error: "Invalid link" }, { status: 403 });
  return NextResponse.json(row);
}
