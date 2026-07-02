"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((s) => (
        <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#F5A524">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21l1.4-6.8L2.2 9.5l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-alt py-24">
      <div className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full opacity-40 blur-[130px]" style={{ background: "var(--color-violet-soft)" }} />
      <div className="relative mx-auto max-w-[1240px] px-6">
        <div className="text-center" data-reveal>
          <div className="mono text-[12px] tracking-[0.12em] text-3">IN THEIR WORDS</div>
          <h2 className="display mx-auto mt-3 max-w-[22ch] text-[clamp(28px,4.2vw,48px)] font-bold leading-[1.05] tracking-[-0.03em] text-app">
            The proof isn&apos;t the certificate. It&apos;s where people are now.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-stretch">
          {/* FEATURE */}
          <figure
            className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border bd p-10"
            style={{ background: "linear-gradient(150deg, color-mix(in srgb, var(--color-violet) 12%, var(--card)), var(--card))" }}
          >
            {/* big watermark quote */}
            <span className="display pointer-events-none absolute -right-2 -top-10 select-none text-[220px] leading-none" style={{ color: "color-mix(in srgb, var(--color-violet) 16%, transparent)" }}>&rdquo;</span>

            <div className="relative">
              <Stars />
              <blockquote className="display mt-5 text-[clamp(20px,2.5vw,30px)] font-semibold leading-[1.32] tracking-[-0.02em] text-app">
                {t.quote}
              </blockquote>
            </div>

            <figcaption className="relative mt-9 flex items-center gap-4">
              <div className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full text-white" style={{ background: "linear-gradient(135deg, var(--color-sky), var(--color-violet))" }}>
                <span className="absolute text-[20px] font-bold">{t.name[0]}</span>
                {t.photo && <img src={t.photo} alt={t.name} className="relative h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />}
              </div>
              <div>
                <div className="text-[16px] font-semibold text-app">{t.name}</div>
                <div className="text-[14px] text-2">{t.role} &middot; {t.location}</div>
                <div className="mono mt-0.5 text-[12px]" style={{ color: "var(--color-emerald)" }}>{t.course}</div>
              </div>
            </figcaption>
          </figure>

          {/* selectable list */}
          <div className="flex flex-col gap-3">
            {testimonials.map((x, idx) => (
              <button
                key={x.name}
                onClick={() => setActive(idx)}
                className="group rounded-2xl border p-5 text-left transition-all hover:-translate-y-0.5"
                style={{
                  background: idx === active ? "var(--card)" : "var(--card-alt)",
                  borderColor: idx === active ? "var(--color-violet)" : "var(--border)",
                  boxShadow: idx === active ? "0 18px 40px -24px color-mix(in srgb, var(--color-violet) 60%, transparent)" : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full text-[14px] font-bold text-white" style={{ background: "linear-gradient(135deg, var(--color-sky), var(--color-violet))" }}>
                    <span className="absolute">{x.name[0]}</span>
                    {x.photo && <img src={x.photo} alt="" className="relative h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[14.5px] font-semibold text-app">{x.name}</div>
                    <div className="truncate text-[12.5px] text-2">{x.role} &middot; {x.location}</div>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-[13.5px] leading-snug text-2">{x.quote}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
