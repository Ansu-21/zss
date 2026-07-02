"use client";

import { useState } from "react";
import Link from "next/link";

const reasons = [
  { stat: "2.9M+", label: "workplace deaths a year globally", icon: "⚠️" },
  { stat: "Every site", label: "by law needs trained safety officers", icon: "📋" },
  { stat: "₹3–14 LPA", label: "typical safety officer salary range", icon: "📈" },
];

type Path = {
  course: string;
  slug: string;
  color: string;
  becomes: string[];
  ceiling: string;
};

const paths: Path[] = [
  { course: "Diploma in Fire & Safety", slug: "diploma-fire-safety", color: "#FF7A59", becomes: ["Fire Safety Officer", "Fire Supervisor", "Fire Safety Manager"], ceiling: "Chief Fire Officer" },
  { course: "Diploma in Industrial Safety", slug: "diploma-industrial-safety", color: "#4F8FF0", becomes: ["Safety Steward", "Plant Safety Officer", "HSE Engineer"], ceiling: "Head of EHS" },
  { course: "IOSH / NEBOSH path", slug: "iosh-managing-safely", color: "#7C6CF0", becomes: ["Site HSE Officer", "HSE Supervisor", "HSE Lead"], ceiling: "Regional HSE Manager" },
];

export default function WhySafety() {
  const [active, setActive] = useState(0);
  const p = paths[active];

  return (
    <section className="relative overflow-hidden bg-app py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full opacity-30 blur-[130px]" style={{ background: "var(--color-coral)" }} />
      <div className="relative mx-auto max-w-[1240px] px-6">
        <div className="max-w-[640px]" data-reveal>
          <div className="mono text-[12px] tracking-[0.14em]" style={{ color: "var(--color-coral)" }}>WHY A SAFETY CAREER</div>
          <h2 className="display mt-3 text-[clamp(30px,4.6vw,54px)] font-bold leading-[1.04] tracking-[-0.03em] text-app">
            Safety isn&apos;t a subject. It&apos;s the reason everyone goes home.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.65] text-2">
            Every factory, tower, rig and refinery is legally required to run on trained safety professionals.
            That&apos;s not a niche — it&apos;s one of the most resilient careers in the world.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3" data-reveal>
          {reasons.map((r) => (
            <div key={r.label} className="rounded-2xl border bd bg-card p-6">
              <div className="text-[26px]">{r.icon}</div>
              <div className="display mt-3 text-[28px] font-bold tracking-[-0.02em] text-app">{r.stat}</div>
              <div className="mt-1 text-[14px] leading-snug text-2">{r.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="display text-[clamp(22px,3vw,34px)] font-bold tracking-[-0.02em] text-app">Pick a course. See where it takes you.</h3>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {paths.map((x, i) => (
              <button
                key={x.slug}
                onClick={() => setActive(i)}
                className="rounded-full border px-5 py-2.5 text-[14px] font-medium transition-all"
                style={{ background: i === active ? x.color : "var(--card)", color: i === active ? "#fff" : "var(--text-2)", borderColor: i === active ? x.color : "var(--border)" }}
              >
                {x.course}
              </button>
            ))}
          </div>

          <div key={p.slug} className="mt-8 rounded-[26px] border bd bg-cardAlt p-8" style={{ animation: "pathIn .4s ease" }}>
            <div className="flex flex-col gap-5 md:flex-row md:items-stretch">
              {p.becomes.map((role, i) => (
                <div key={role} className="flex flex-1 items-center gap-4">
                  <div className="flex-1">
                    <div className="mono text-[11px] tracking-[0.08em] text-3">{i === 0 ? "YOU START AS" : "GROW INTO"}</div>
                    <div className="mt-1.5 flex min-h-[58px] items-center justify-center rounded-2xl border bg-card px-4 py-3 text-center text-[15px] font-semibold text-app" style={{ borderColor: `color-mix(in srgb, ${p.color} 40%, var(--border))` }}>
                      {role}
                    </div>
                  </div>
                  <span className="hidden text-[20px] md:block" style={{ color: p.color }}>→</span>
                </div>
              ))}
              <div className="flex items-center">
                <div>
                  <div className="mono text-[11px] tracking-[0.08em]" style={{ color: p.color }}>CEILING</div>
                  <div className="mt-1.5 flex min-h-[58px] items-center justify-center rounded-2xl px-4 py-3 text-center text-[15px] font-bold text-white" style={{ background: p.color }}>
                    {p.ceiling}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t bd pt-6">
              <p className="text-[14px] text-2">This path starts with <span className="font-semibold text-app">{p.course}</span>.</p>
              <Link href={`/courses/${p.slug}`} className="rounded-full px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5" style={{ background: p.color }}>
                Explore this course →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes pathIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
