"use client";

import { useState } from "react";
import Link from "next/link";

type World = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  topCountry: string;
  flag: string;
  blurb: string;
  courses: { label: string; slug: string }[];
  roles: string[];
};

const worlds: World[] = [
  { id: "construction", name: "Construction", emoji: "🏗️", color: "#F5A524", topCountry: "Saudi Arabia", flag: "🇸🇦", blurb: "Mega-projects and giga-cities make construction safety officers in relentless demand across the Gulf.", courses: [{ label: "Diploma in Construction Safety", slug: "diploma-construction-safety" }, { label: "Certificate in Construction Safety", slug: "cert-construction-safety" }, { label: "Working at Height", slug: "cert-working-at-height" }], roles: ["Site Safety Officer", "HSE Supervisor", "Scaffolding Inspector"] },
  { id: "oil-gas", name: "Oil & Gas", emoji: "🛢️", color: "#7C6CF0", topCountry: "Qatar", flag: "🇶🇦", blurb: "LNG and petrochemical hubs pay a premium for safety pros who understand high-hazard environments.", courses: [{ label: "Diploma in Oil & Gas Safety", slug: "diploma-oil-gas-safety" }, { label: "Oil Exploration & Production", slug: "diploma-oil-exploration" }, { label: "Confined Space", slug: "cert-confined-space" }], roles: ["Offshore Safety Officer", "Rig HSE Advisor", "Permit Coordinator"] },
  { id: "fire", name: "Fire & Safety", emoji: "🔥", color: "#FF7A59", topCountry: "UAE", flag: "🇦🇪", blurb: "Strict civil-defence codes in the UAE make certified fire & safety officers essential in every tower.", courses: [{ label: "Diploma in Fire & Safety", slug: "diploma-fire-safety" }, { label: "Fire Alarm Technician", slug: "diploma-fire-alarm-technician" }, { label: "Fire & Emergency Plan", slug: "diploma-fire-emergency-plan" }], roles: ["Fire Safety Officer", "Fire Technician", "Emergency Response Lead"] },
  { id: "industrial", name: "Industrial", emoji: "⚙️", color: "#4F8FF0", topCountry: "India", flag: "🇮🇳", blurb: "India's manufacturing push and factory-act compliance keep industrial safety officers in steady demand.", courses: [{ label: "Diploma in Industrial Safety", slug: "diploma-industrial-safety" }, { label: "Certificate in Industrial Safety", slug: "cert-industrial-safety" }, { label: "HIRA", slug: "cert-hira" }], roles: ["Factory Safety Officer", "Plant HSE Engineer", "Risk Assessor"] },
  { id: "offshore", name: "Offshore", emoji: "🌊", color: "#16A974", topCountry: "Oman", flag: "🇴🇲", blurb: "Offshore platforms and marine operations need specialists trained for the most unforgiving conditions.", courses: [{ label: "IOSH – Managing Safely", slug: "iosh-managing-safely" }, { label: "OSHA 30 — General", slug: "osha-30-general" }, { label: "Diploma in HSE", slug: "diploma-hse" }], roles: ["Offshore HSE Officer", "Marine Safety Advisor", "OIM Support"] },
  { id: "environmental", name: "Environmental", emoji: "🌱", color: "#15B87A", topCountry: "Kuwait", flag: "🇰🇼", blurb: "Tightening environmental regulation across the Gulf is creating a new wave of EHS and sustainability roles.", courses: [{ label: "ISO 14001 Lead Auditor", slug: "iso-14001" }, { label: "Industrial Environmental Safety", slug: "diploma-industrial-env-safety" }, { label: "Chemical Handling", slug: "cert-chemical-handling" }], roles: ["EHS Officer", "Environmental Auditor", "Sustainability Lead"] },
];

export default function SafetyUniverse() {
  const [activeId, setActiveId] = useState<string>("fire");
  const active = worlds.find((w) => w.id === activeId)!;

  return (
    <section className="relative overflow-hidden py-24" style={{ background: "#0B1020" }}>
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 60% 70%, #fff, transparent), radial-gradient(1px 1px at 80% 20%, #cdd, transparent), radial-gradient(1.5px 1.5px at 35% 80%, #fff, transparent), radial-gradient(1px 1px at 90% 60%, #fff, transparent), radial-gradient(1px 1px at 10% 60%, #aab, transparent)" }} />
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full opacity-25 blur-[150px]" style={{ background: "#7C6CF0" }} />

      <div className="relative mx-auto max-w-[1240px] px-6">
        <div className="text-center" data-reveal>
          <div className="mono text-[12px] tracking-[0.14em]" style={{ color: "#A99CFF" }}>THE SAFETY UNIVERSE</div>
          <h2 className="display mx-auto mt-3 max-w-[22ch] text-[clamp(28px,4.2vw,50px)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
            Explore where your career can take you.
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[15px] leading-relaxed text-white/70">
            Tap a world to see its courses — and the country where that skill is most in demand.
          </p>
        </div>

        {/* side-by-side: orbit + live panel */}
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* ORBIT (smaller, fits viewport) */}
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            {[100, 70].map((r) => (
              <div key={r} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border" style={{ width: `${r}%`, height: `${r}%`, borderColor: "rgba(255,255,255,0.08)" }} />
            ))}
            {/* core */}
            <div className="absolute left-1/2 top-1/2 z-10 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-center" style={{ background: "radial-gradient(circle at 35% 30%, #9C8FFF, #5B4BD6)", boxShadow: "0 0 50px -6px #7C6CF0, inset 0 0 26px rgba(255,255,255,0.25)" }}>
              <span className="display text-[14px] font-bold leading-tight text-white">Zenith<br /><span className="text-[10px] font-medium text-white/80">Safety</span></span>
            </div>
            {worlds.map((w, i) => {
              const angle = (i / worlds.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 45;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              const on = activeId === w.id;
              return (
                <button key={w.id} onClick={() => setActiveId(w.id)}
                  className="group absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition-transform duration-300 hover:scale-110"
                  style={{ left: `${x}%`, top: `${y}%`, animation: `floaty ${4 + i * 0.4}s ease-in-out ${i * 0.3}s infinite` }}>
                  <span className="grid place-items-center rounded-full text-[22px] transition-all" style={{ width: on ? 64 : 52, height: on ? 64 : 52, background: `radial-gradient(circle at 35% 30%, color-mix(in srgb, ${w.color} 80%, white), ${w.color})`, boxShadow: on ? `0 0 36px -2px ${w.color}` : `0 6px 18px -6px ${w.color}`, border: on ? "2px solid #fff" : "2px solid transparent" }}>
                    {w.emoji}
                  </span>
                  <span className="mt-1.5 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-medium transition-colors" style={{ background: on ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.06)", color: on ? "#fff" : "rgba(255,255,255,0.7)" }}>{w.name}</span>
                </button>
              );
            })}
          </div>

          {/* LIVE PANEL (always visible, updates instantly) */}
          <div key={active.id} className="rounded-[24px] border p-7" style={{ background: "rgba(255,255,255,0.04)", borderColor: `color-mix(in srgb, ${active.color} 30%, rgba(255,255,255,0.12))`, animation: "panelIn .4s ease" }}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-2xl text-[28px]" style={{ background: `color-mix(in srgb, ${active.color} 28%, transparent)` }}>{active.emoji}</span>
                <div>
                  <div className="display text-[22px] font-bold text-white">{active.name}</div>
                  <div className="text-[12px] text-white/55">Safety domain</div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full px-3.5 py-2 text-[12.5px] font-medium text-white" style={{ background: `color-mix(in srgb, ${active.color} 24%, transparent)` }}>
                <span className="text-[16px]">{active.flag}</span> Top demand: <span className="font-bold">{active.topCountry}</span>
              </div>
            </div>

            <p className="mt-4 text-[14.5px] leading-relaxed text-white/80">{active.blurb}</p>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <div className="mono mb-2.5 text-[11px] tracking-[0.1em] text-white/45">COURSES</div>
                <ul className="space-y-2">
                  {active.courses.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/courses/${c.slug}`} className="flex items-center gap-2 text-[13.5px] text-white/90 transition-colors hover:text-white">
                        <span style={{ color: active.color }}>→</span> {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mono mb-2.5 text-[11px] tracking-[0.1em] text-white/45">JOB ROLES</div>
                <div className="flex flex-wrap gap-2">
                  {active.roles.map((r) => (
                    <span key={r} className="rounded-full px-3 py-1.5 text-[12px] text-white/90" style={{ background: "rgba(255,255,255,0.08)" }}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floaty{0%,100%{transform:translate(-50%,-50%)}50%{transform:translate(-50%,calc(-50% - 7px))}}
        @keyframes panelIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
      `}</style>
    </section>
  );
}
