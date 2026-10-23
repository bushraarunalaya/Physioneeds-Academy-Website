import { NextResponse } from "next/server";

/** Single entry point for every enquiry form. Swap the TODO for a DB / CRM / Google Sheet call when the backend lands. */
const KINDS = ["handbook", "masterclass", "review", "callback", "newsletter"] as const;

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b || !KINDS.includes(b.kind)) return NextResponse.json({ ok: false, error: "Unknown form." }, { status: 400 });
  if (b.kind !== "newsletter" && !/^\d{10}$/.test(String(b.phone ?? "").replace(/\D/g, "").slice(-10))) {
    return NextResponse.json({ ok: false, error: "Enter a ten-digit phone number." }, { status: 422 });
  }
  if (b.email && !/^\S+@\S+\.\S+$/.test(b.email)) return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 422 });
  // TODO(backend): persist `b` (lib/leads.ts) and trigger WhatsApp / email follow-up.
  console.log("lead", b);
  return NextResponse.json({ ok: true });
}
