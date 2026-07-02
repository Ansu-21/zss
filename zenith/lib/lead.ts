"use client";

// This is the single source of truth for what a "lead" contains —
// i.e. exactly what gets sent to Zenith when a student logs in to unlock
// their report. In production this object is POSTed to /api/leads and
// written to a Google Sheet / CRM. Here it's kept in memory for the demo.

export type Lead = {
  // identity (collected at login)
  name: string;
  whatsapp: string;
  email: string;
  // career profile (from the simulator)
  education: string;
  experience: string;
  interest: string;
  gulfInterest: boolean;
  // computed
  careerScore: number;
  recommendedCourses: string[]; // slugs Zenith suggests
  // behaviour (so the counselor knows what they care about)
  viewedCourses: string[];      // slugs they opened
  capturedAt: string;
};

const KEY = "zenith_lead";
const VIEWED = "zenith_viewed";

export function isLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return !!sessionStorage.getItem(KEY);
}

export function getLead(): Lead | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as Lead) : null;
}

export function trackView(slug: string) {
  if (typeof window === "undefined") return;
  const raw = sessionStorage.getItem(VIEWED);
  const list: string[] = raw ? JSON.parse(raw) : [];
  if (!list.includes(slug)) {
    list.push(slug);
    sessionStorage.setItem(VIEWED, JSON.stringify(list));
  }
}

export function getViewed(): string[] {
  if (typeof window === "undefined") return [];
  const raw = sessionStorage.getItem(VIEWED);
  return raw ? JSON.parse(raw) : [];
}

export function saveLead(partial: Omit<Lead, "viewedCourses" | "capturedAt">) {
  const lead: Lead = {
    ...partial,
    viewedCourses: getViewed(),
    capturedAt: new Date().toISOString(),
  };
  sessionStorage.setItem(KEY, JSON.stringify(lead));

  // Send the lead to Zenith (forwarded to a Google Sheet / CRM by /api/leads).
  fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  }).catch((e) => console.error("Lead send failed:", e));

  return lead;
}
