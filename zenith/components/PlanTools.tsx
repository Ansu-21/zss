"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { courses, getCourse } from "@/data/courses";

// Three self-serve admission tools: eligibility, fee/EMI planning and
// course comparison. Everything runs instantly in the browser — no forms,
// no waiting — and every result ends in a one-tap path to a human advisor.

const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

/* ---------------- eligibility ---------------- */

const eduLevels = ["10th / 12th pass", "ITI", "Diploma", "Engineering / Degree"] as const;
const goals = ["A job in India", "A job in the Gulf", "Move into HSE management"] as const;

function recommend(edu: string, goal: string): { verdict: string; slugs: string[] } {
  if (goal === "Move into HSE management") {
    return {
      verdict:
        edu === "Engineering / Degree"
          ? "You're eligible for the senior route directly — degree-equivalent diplomas and lead-auditor credentials."
          : "You're eligible. Start with an international certificate, then step up to the degree-level diplomas as you gain experience.",
      slugs: edu === "Engineering / Degree" ? ["othm-level-6", "iso-45001", "iosh-level-6"] : ["iosh-managing-safely", "iosh-level-3", "othm-level-6"],
    };
  }
  if (goal === "A job in the Gulf") {
    return {
      verdict:
        "You're eligible — IOSH and OSHA have no prerequisite, and they're the credentials Gulf employers name in job postings. Pair one with a diploma for the strongest profile.",
      slugs: ["iosh-managing-safely", "osha-30-construction", "diploma-oil-gas-safety"],
    };
  }
  return {
    verdict:
      edu === "10th / 12th pass" || edu === "ITI"
        ? "You're eligible. The one-month diploma is your recognised entry qualification — most safety careers in India start exactly here."
        : "You're eligible for everything in the catalogue. A diploma plus one international certificate makes you stand out immediately.",
    slugs:
      edu === "Engineering / Degree"
        ? ["diploma-industrial-safety", "iosh-managing-safely", "iso-45001"]
        : ["diploma-industrial-safety", "diploma-fire-safety", "cert-first-aid"],
  };
}

/* ---------------- shared UI ---------------- */

function Seg<T extends string>({ value, set, options, label }: { value: T; set: (v: T) => void; options: readonly T[]; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          role="radio"
          aria-checked={value === o}
          onClick={() => set(o)}
          className="rounded-full border px-4 py-2 text-[13.5px] font-medium transition-all"
          style={
            value === o
              ? { background: "var(--color-violet)", borderColor: "var(--color-violet)", color: "#fff" }
              : { background: "var(--card)", borderColor: "var(--border)", color: "var(--text-2)" }
          }
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function ToolCard({ step, title, sub, children }: { step: string; title: string; sub: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[26px] border bd bg-card p-7 sm:p-9" data-reveal>
      <div className="mono text-[11px] tracking-[0.14em]" style={{ color: "var(--color-violet)" }}>{step}</div>
      <h2 className="display mt-2 text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.02em] text-app">{title}</h2>
      <p className="mt-2 max-w-[56ch] text-[14.5px] leading-relaxed text-2">{sub}</p>
      <div className="mt-7">{children}</div>
    </section>
  );
}

/* ---------------- main ---------------- */

export default function PlanTools() {
  // eligibility
  const [edu, setEdu] = useState<(typeof eduLevels)[number]>("10th / 12th pass");
  const [goal, setGoal] = useState<(typeof goals)[number]>("A job in the Gulf");
  const rec = useMemo(() => recommend(edu, goal), [edu, goal]);

  // EMI
  const [fee, setFee] = useState(40000);
  const [months, setMonths] = useState(6);
  const monthly = fee / months;

  // compare
  const [picks, setPicks] = useState<string[]>(["iosh-managing-safely", "osha-30-general", "diploma-industrial-safety"]);
  const picked = picks.map(getCourse);

  const waText = encodeURIComponent(
    `Hi Zenith! I used your fee planner. My profile: ${edu}, goal: ${goal}. I'm budgeting around ${inr(fee)} over ${months} months (~${inr(monthly)}/month). Can you confirm exact fees and next batch dates?`
  );

  const rows: { label: string; get: (c: NonNullable<ReturnType<typeof getCourse>>) => React.ReactNode }[] = [
    { label: "Duration", get: (c) => c.duration },
    { label: "Mode", get: (c) => c.mode },
    { label: "Level", get: (c) => c.level || { international: "International", diploma: "Diploma", certificate: "Certificate" }[c.track] },
    { label: "Salary range*", get: (c) => `₹${c.salaryLow}–${c.salaryHigh} LPA` },
    { label: "Industry demand", get: (c) => c.demand },
    { label: "Gulf demand", get: (c) => (c.gulf ? "Strong ✓" : "Moderate") },
    { label: "Eligibility", get: (c) => c.eligibility },
  ];

  return (
    <div className="space-y-8">
      {/* 1 — ELIGIBILITY */}
      <ToolCard
        step="TOOL 01 · ELIGIBILITY CHECK"
        title="Can I join? (Almost certainly — here's your route.)"
        sub="Pick where you stand and where you're headed. We'll show the exact courses that fit — the same logic our counsellors use."
      >
        <div className="space-y-5">
          <div>
            <div className="mb-2 text-[13px] font-semibold text-app">Your education</div>
            <Seg value={edu} set={setEdu} options={eduLevels} label="Your education" />
          </div>
          <div>
            <div className="mb-2 text-[13px] font-semibold text-app">Your goal</div>
            <Seg value={goal} set={setGoal} options={goals} label="Your goal" />
          </div>
          <div className="rounded-2xl p-5" style={{ background: "var(--color-violet-soft)" }} aria-live="polite">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-[13px] text-white" style={{ background: "var(--color-emerald)" }}>✓</span>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-ink)" }}>{rec.verdict}</p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {rec.slugs.map(getCourse).map(
                (c) =>
                  c && (
                    <Link key={c.slug} href={`/courses/${c.slug}`} className="lift rounded-xl border bd bg-card p-4">
                      <div className="text-[14.5px] font-semibold text-app">{c.title}</div>
                      <div className="mono mt-1.5 text-[12px] text-3">{c.duration} · {c.demand} demand</div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      </ToolCard>

      {/* 2 — FEE / EMI */}
      <ToolCard
        step="TOOL 02 · FEE & EMI PLANNER"
        title="See the monthly number before you commit."
        sub="Course fees vary by program and mode — an advisor confirms the exact figure. Use this to plan a comfortable instalment before that conversation."
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-baseline justify-between">
                <label htmlFor="fee-range" className="text-[13px] font-semibold text-app">Estimated course budget</label>
                <span className="mono text-[15px] font-semibold" style={{ color: "var(--color-violet)" }}>{inr(fee)}</span>
              </div>
              <input
                id="fee-range"
                type="range"
                min={10000}
                max={150000}
                step={5000}
                value={fee}
                onChange={(e) => setFee(Number(e.target.value))}
                className="w-full accent-[var(--color-violet)]"
              />
              <div className="mono mt-1 flex justify-between text-[11px] text-3"><span>₹10k</span><span>₹1.5L</span></div>
            </div>
            <div>
              <div className="mb-2 text-[13px] font-semibold text-app">Spread over</div>
              <Seg value={String(months) as "3" | "6" | "9" | "12"} set={(v) => setMonths(Number(v))} options={["3", "6", "9", "12"] as const} label="Instalment months" />
              <div className="mt-1.5 text-[12px] text-3">months</div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, var(--color-sky), var(--color-violet))" }}>
            <div>
              <div className="mono text-[11px] tracking-[0.14em] text-white/75">YOUR MONTHLY PLAN</div>
              <div className="display mt-2 text-[clamp(34px,4vw,46px)] font-bold leading-none" aria-live="polite">
                {inr(monthly)}<span className="text-[16px] font-medium text-white/80"> / month</span>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/85">
                {inr(fee)} across {months} equal instalments. Most Zenith students earn this back within their first weeks on the job.
              </p>
            </div>
            <a
              href={`https://wa.me/919585252099?text=${waText}`}
              className="mt-6 rounded-full bg-white px-6 py-3 text-center text-[14.5px] font-semibold transition-transform hover:-translate-y-px"
              style={{ color: "var(--color-violet)" }}
            >
              Confirm exact fee on WhatsApp →
            </a>
          </div>
        </div>
        <p className="mt-5 text-[12px] text-3">Illustrative planning tool only — instalment availability and exact fees are confirmed by your advisor for the specific course and batch.</p>
      </ToolCard>

      {/* 3 — COMPARE */}
      <ToolCard
        step="TOOL 03 · COMPARE COURSES"
        title="Put any three side by side."
        sub="Duration, salary range, demand, Gulf recognition and eligibility — the honest comparison, in one table."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {picks.map((slug, i) => (
            <select
              key={i}
              aria-label={`Course ${i + 1} to compare`}
              value={slug}
              onChange={(e) => setPicks((p) => p.map((s, j) => (j === i ? e.target.value : s)))}
              className="w-full rounded-xl border bd px-3.5 py-3 text-[14px] font-medium text-app outline-none focus:border-[var(--color-violet)]"
              style={{ background: "var(--card)" }}
            >
              {courses.map((c) => (
                <option key={c.slug} value={c.slug}>{c.title}</option>
              ))}
            </select>
          ))}
        </div>
        <div className="mt-6 overflow-x-auto rounded-2xl border bd">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b bd" style={{ background: "var(--bg-alt)" }}>
                <th scope="col" className="p-4 text-[12px] font-semibold uppercase tracking-[0.06em] text-3">Compare</th>
                {picked.map((c, i) => (
                  <th key={i} scope="col" className="p-4 text-[15px] font-bold text-app">{c?.title ?? "—"}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b bd last:border-0">
                  <th scope="row" className="p-4 align-top text-[13px] font-semibold text-3">{r.label}</th>
                  {picked.map((c, i) => (
                    <td key={i} className="p-4 align-top text-[14px] text-2">{c ? r.get(c) : "—"}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <th scope="row" className="p-4" />
                {picked.map((c, i) => (
                  <td key={i} className="p-4">
                    {c && (
                      <Link href={`/courses/${c.slug}`} className="inline-block rounded-full px-5 py-2.5 text-[13.5px] font-semibold text-white transition-transform hover:-translate-y-px" style={{ background: "var(--color-coral)" }}>
                        View course →
                      </Link>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[12px] text-3">*Salary ranges are illustrative guidance, not a guarantee — actual outcomes depend on experience, location and effort.</p>
      </ToolCard>
    </div>
  );
}
