"use client";

import { useState } from "react";
import Link from "next/link";

type World = {
  id: string;
  label: string;
  emoji: string;
  tint: string;
  topCountry: string;
  blurb: string;
  courses: { title: string; slug: string }[];
  // orbital position (% of container)
  x: number;
  y: number;
  size: number;
};

const worlds: World[] = [
  {
    id: "construction", label: "Construction", emoji: "🏗️", tint: "#F5A524", topCountry: "🇶🇦 Qatar",
    blurb: "Site safety officers keep the world's skylines rising without a single life lost.",
    courses: [
      { title: "Diploma in Construction Safety", slug: "diploma-construction-safety" },
      { title: "Certificate in Construction Safety", slug: "cert-construction-safety" },
      { title: "Working at Height", slug: "cert-working-at-height" },
    ],
    x: 18, y: 24, size: 116,
  },
  {
    id: "oilgas", label: "Oil & Gas", emoji: "🛢️", tint: "#7C6CF0", topCountry: "🇸🇦 Saudi Arabia",
    blurb: "The highest-paying frontier in safety — refineries and rigs demand the best.",
    courses: [
      { title: "Diploma in Oil & Gas Safety", slug: "diploma-oil-gas-safety" },
      { title: "Oil Exploration & Production", slug: "diploma-oil-exploration" },
      { title: "OSHA 30 — General", slug: "osha-30-general" },
    ],
    x: 74, y: 16, size: 128,
  },
  {
    id: "fire", label: "Fire & Safety", emoji: "🔥", tint: "#FF7A59", topCountry: "🇦🇪 UAE",
    blurb: "The original safety discipline — controlling, preventing and beating fire.",
    courses: [
      { title: "Diploma in Fire & Safety", slug: "diploma-fire-safety" },
      { title: "Fire Alarm Technician", slug: "diploma-fire-alarm-technician" },
      { title: "Fireman Technician", slug: "diploma-fireman-technician" },
    ],
    x: 12, y: 66, size: 120,
  },
  {
    id: "industrial", label: "Industrial Safety", emoji: "⚙️", tint: "#4F8FF0", topCountry: "🇮🇳 India",
    blurb: "Factories and plants run on people who manage risk every single shift.",
    courses: [
      { title: "Diploma in Industrial Safety", slug: "diploma-industrial-safety" },
      { title: "Certificate in Industrial Safety", slug: "cert-industrial-safety" },
      { title: "HIRA", slug: "cert-hira" },
    ],
    x: 52, y: 50, size: 150,
  },
  {
    id: "offshore", label: "Offshore", emoji: "🌊", tint: "#16A974", topCountry: "🇴🇲 Oman",
    blurb: "Out on the water, safety officers are the lifeline of every platform.",
    courses: [
      { title: "Confined Space", slug: "cert-confined-space" },
      { title: "Scaffolding Inspector", slug: "cert-scaffolding-inspector" },
      { title: "OSHA 30 — Construction", slug: "osha-30-construction" },
    ],
    x: 80, y: 62, size: 112,
  },
  {
    id: "environmental", label: "Environmental", emoji: "🌱", tint: "#15B87A", topCountry: "🇬🇧 UK",
    blurb: "The future of safety — protecting people and the planet together.",
    courses: [
      { title: "Diploma in HSE", slug: "diploma-hse" },
      { title: "Industrial Environmental Safety", slug: "diploma-industrial-env-safety" },
      { title: "ISO 14001 Lead Auditor", slug: "iso-14001" },
    ],
    x: 40, y: 80, size: 104,
  },
];

export default function UniverseMap() {
  const [active, setActive] = useState<World | null>(null);

  return (
    <section className="relative overflow-hidden py-24" style={{ background: "radial-gradient(120% 90% at 50% 0%, color-mix(in srgb, var(--color-violet) 14%, var(--bg)), var(--bg))" }}>
      {/* starfield */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.5]" style={{ backgroundImage: "radial-gradient(1.5px 1.5px at 20% 30%, var(--text-3) 50%, transparent), radial-gradient(1.5px 1.5px at 70% 20%, var(--text-3) 50%, transparent), radial-gradient(1px 1px at 40% 70%, var(--text-3) 50%, transparent), radial-gradient(1px 1px at 85% 60%, var(--text-3) 50%, transparent), radial-gradient(1.5px 1.5px at 60% 85%, var(--text-3) 50%, transparent), radial-gradient(1px 1px at 10% 80%, var(--text-3) 50%, transparent)", backgroundSize: "100% 100%" }} />

      <div className="relative mx-auto max-w-[1240px] px-6">
        <div className="text-center" data-reveal>
          <div className="mono text-[12px] tracking-[0.12em]" style={{ color: "var(--color-violet)" }}>EXPLORE THE UNIVERSE</div>
          <h2 className="display mx-auto mt-3 max-w-[20ch] text-[clamp(30px,4.6vw,54px)] font-bold leading-[1.05] tracking-[-0.03em] text-app">
            Six worlds of safety. Pick yours.
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[16.5px] text-2">
            Every industry on earth needs someone to keep it safe. Tap a world to see where it can take you — and which country wants you most.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          {/* THE MAP */}
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            {/* orbit rings */}
            {[92, 70, 46].map((r) => (
              <div key={r} className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border" style={{ width: `${r}%`, height: `${r}%`, transform: "translate(-50%,-50%)", borderColor: "color-mix(in srgb, var(--color-violet) 22%, transparent)" }} />
            ))}
            {/* center sun */}
            <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-center" style={{ background: "radial-gradient(circle at 35% 30%, var(--color-violet), var(--color-sky))", boxShadow: "0 0 60px -6px color-mix(in srgb, var(--color-violet) 70%, transparent)" }}>
              <span className="display text-[13px] font-bold leading-tight text-white">Safety<br />Universe</span>
            </div>

            {/* planets */}
            {worlds.map((w) => {
              const isActive = active?.id === w.id;
              return (
                <button
                  key={w.id}
                  onClick={() => setActive(w)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
                  style={{ left: `${w.x}%`, top: `${w.y}%`, animation: `float 6s ease-in-out ${w.x % 3}s infinite` }}
                  aria-label={w.label}
                >
                  <span
                    className="grid place-items-center rounded-full text-[26px] transition-all"
                    style={{
                      width: w.size * 0.62, height: w.size * 0.62,
                      background: `radial-gradient(circle at 32% 28%, color-mix(in srgb, ${w.tint} 75%, white), ${w.tint})`,
                      boxShadow: isActive
                        ? `0 0 0 4px color-mix(in srgb, ${w.tint} 40%, transparent), 0 18px 40px -10px ${w.tint}`
                        : `0 12px 30px -12px ${w.tint}`,
                    }}
                  >
                    {w.emoji}
                  </span>
                  <span className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[12px] font-semibold text-app">{w.label}</span>
                </button>
              );
            })}
          </div>

          {/* DETAIL PANEL */}
          <div className="rounded-[26px] border bd p-8" style={{ background: "var(--card)", minHeight: 340 }}>
            {!active ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="text-[40px]">🪐</div>
                <p className="mt-4 max-w-[26ch] text-[16px] text-2">Tap any world to begin exploring its courses and career destinations.</p>
              </div>
            ) : (
              <div key={active.id} style={{ animation: "panelIn .4s ease" }}>
                <div className="flex items-center gap-3">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl text-[28px]" style={{ background: `color-mix(in srgb, ${active.tint} 18%, var(--card))` }}>{active.emoji}</span>
                  <div>
                    <h3 className="display text-[24px] font-bold tracking-[-0.02em] text-app">{active.label}</h3>
                    <div className="text-[13px] text-2">Highest demand: <span className="font-semibold text-app">{active.topCountry}</span></div>
                  </div>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-2">{active.blurb}</p>
                <div className="mono mt-6 text-[11px] tracking-[0.1em] text-3">COURSES IN THIS WORLD</div>
                <div className="mt-3 space-y-2">
                  {active.courses.map((c) => (
                    <Link key={c.slug} href={`/courses/${c.slug}`} className="flex items-center justify-between rounded-xl border bd px-4 py-3 text-[14.5px] font-medium text-app transition-all hover:-translate-y-0.5" style={{ background: "var(--bg)" }}>
                      {c.title}
                      <span style={{ color: active.tint }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float{0%,100%{margin-top:0}50%{margin-top:-10px}}
        @keyframes panelIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
      `}</style>
    </section>
  );
}
