import { NextResponse } from "next/server";

// Best-effort one-play-per-IP gate.
// NOTE: this in-memory set resets on every deploy/restart and isn't shared
// across serverless instances. For a real one-play-per-IP guarantee, back this
// with a database or KV store (e.g. Upstash Redis, Vercel KV) keyed by IP.
const played = new Set<string>();

function getIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function GET(req: Request) {
  const ip = getIp(req);
  return NextResponse.json({ played: played.has(ip) });
}

export async function POST(req: Request) {
  try {
    const ip = getIp(req);
    const body = await req.json();

    // record the play + forward the lead (name, score, coupon) to your webhook
    played.add(ip);

    const webhook = process.env.LEADS_WEBHOOK_URL;
    const payload = { ...body, ip, source: "quiz", capturedAt: new Date().toISOString() };
    if (webhook) {
      fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }).catch(() => {});
    } else {
      console.log("QUIZ LEAD:", payload);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
