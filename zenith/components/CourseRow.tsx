"use client";

import Link from "next/link";
import { useRef } from "react";
import { courses, type Course } from "@/data/courses";

function Tile({ c }: { c: Course }) {
  return (
    <Link
      href={`/courses/${c.slug}`}
      className="group relative flex h-[300px] w-[290px] shrink-0 flex-col justify-end overflow-hidden rounded-[22px] border bd transition-all duration-300 hover:-translate-y-1.5"
      style={{ boxShadow: "0 1px 2px rgba(20,30,60,0.04)" }}
    >
      <div className="photo absolute inset-0">
        {c.image ? <img src={c.image} alt="" loading="lazy" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} /> : null}
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,25,55,0.92) 14%, rgba(20,25,55,0.45) 52%, rgba(20,25,55,0.05) 100%)" }} />
      {c.gulf && (
        <span className="absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white" style={{ background: "var(--color-coral)" }}>
          In demand · Gulf
        </span>
      )}
      <div className="relative p-5">
        <div className="mono mb-1.5 flex items-center gap-2 text-[11px] text-white/75">
          {c.duration}
          <span className="flex items-center gap-0.5 text-[#FFC23D]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21l1.4-6.8L2.2 9.5l6.9-.8L12 2z" /></svg>
            4.9
          </span>
        </div>
        <h3 className="display text-[21px] font-bold leading-[1.06] tracking-[-0.02em] text-white">{c.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug text-white/70">{c.short}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="mono text-[12.5px] font-medium" style={{ color: "#5EE6A8" }}>↑ ₹{c.salaryLow}–{c.salaryHigh} LPA</span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition-all group-hover:bg-white group-hover:text-[var(--color-violet)]">→</span>
        </div>
      </div>
    </Link>
  );
}

export default function CourseRow({ title, slugs }: { title: string; slugs: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const items = slugs.map((s) => courses.find((c) => c.slug === s)).filter(Boolean) as Course[];
  const scroll = (d: number) => ref.current?.scrollBy({ left: d * 320, behavior: "smooth" });

  return (
    <div className="mb-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="display text-[24px] font-bold tracking-[-0.02em] text-app">{title}</h2>
        <div className="hidden gap-2 md:flex">
          <button onClick={() => scroll(-1)} aria-label="Scroll left" className="grid h-9 w-9 place-items-center rounded-full border bd text-2 transition-colors bg-card hover:text-app">←</button>
          <button onClick={() => scroll(1)} aria-label="Scroll right" className="grid h-9 w-9 place-items-center rounded-full border bd text-2 transition-colors bg-card hover:text-app">→</button>
        </div>
      </div>
      <div ref={ref} className="noscroll flex gap-5 overflow-x-auto pb-2">
        {items.map((c) => <Tile key={c.slug} c={c} />)}
      </div>
    </div>
  );
}
