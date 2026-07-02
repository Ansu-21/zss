"use client";

import { useState } from "react";

const B = "https://www.zss.co.in/assets/images";

const certs = [
  { title: "NSDI Accreditation", sub: "National Skill Development of India", src: `${B}/others/iso1.jpg` },
  { title: "ISO Certification", sub: "Internationally recognised quality standard", src: `${B}/others/iso2.jpg` },
];

const points = [
  "Government-recognised, accredited training body",
  "Certificates valued by employers across India & the Gulf",
  "IOSH, OSHA, OTHM & ISO international pathways",
];

export default function Certificates() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-app py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full opacity-40 blur-[130px]" style={{ background: "var(--color-sky-soft)" }} />
      <div className="relative mx-auto grid max-w-[1240px] gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div data-reveal>
          <div className="mono text-[12px] tracking-[0.12em]" style={{ color: "var(--color-violet)" }}>ACCREDITATION &amp; CERTIFICATION</div>
          <h2 className="display mt-3 max-w-[18ch] text-[clamp(28px,4.2vw,46px)] font-bold leading-[1.08] tracking-[-0.03em] text-app">
            Certificates that actually open doors.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[16.5px] leading-[1.65] text-2">
            Zenith is accredited by the National Skill Development of India and holds ISO certification — so the
            credential on your résumé is one employers recognise and trust.
          </p>
          <ul className="mt-7 space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15.5px] text-app">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] text-white" style={{ background: "var(--color-emerald)" }}>✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {certs.map((c) => (
            <button
              key={c.title}
              onClick={() => setOpen(c.src)}
              className="group overflow-hidden rounded-[22px] border bd bg-card p-4 text-left transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-28px_rgba(80,100,200,0.4)]"
            >
              <div className="photo overflow-hidden rounded-2xl" style={{ aspectRatio: "3 / 4" }}>
                <img src={c.src} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              </div>
              <div className="px-1 pt-4">
                <div className="display text-[17px] font-bold text-app">{c.title}</div>
                <div className="mt-1 text-[13px] text-2">{c.sub}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm">
          <button className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white" aria-label="Close">✕</button>
          <img src={open} alt="Certificate" className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain" />
        </div>
      )}
    </section>
  );
}
