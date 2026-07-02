import { NextResponse } from "next/server";

// Receives a lead and forwards it to Zenith.
//
// To send leads to a Google Sheet:
// 1. In your Sheet: Extensions → Apps Script, paste a doPost that appends e.parameter
//    (or JSON.parse(e.postData.contents)) as a row, then Deploy → Web app (Anyone).
// 2. Put that web-app URL in .env.local as  LEADS_WEBHOOK_URL=...
// Without the env var, leads are logged to the server console so nothing breaks.

export async function POST(req: Request) {
  try {
    const lead = await req.json();

    const webhook = process.env.LEADS_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      }).catch((e) => console.error("Webhook forward failed:", e));
    } else {
      console.log("LEAD (no webhook configured):", lead);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Lead handler error:", e);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
