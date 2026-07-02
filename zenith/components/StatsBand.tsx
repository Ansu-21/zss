"use client";

import CountUp from "./CountUp";

const stats: { n: React.ReactNode; l: string }[] = [
  { n: <><CountUp to={29.3} decimals={1} />K+</>, l: "Students enrolled" },
  { n: <><CountUp to={32.4} decimals={1} />K+</>, l: "Classes completed" },
  { n: <><CountUp to={100} />%</>, l: "Satisfaction rate" },
  { n: <><CountUp to={354} />+</>, l: "Expert instructors" },
];

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-alt py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[680px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]" style={{ background: "var(--color-violet-soft)" }} />
      <div className="relative mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i > 0 ? "lg:border-l bd" : ""}`}>
              <span className="display text-[clamp(34px,4.6vw,58px)] font-bold leading-none tracking-[-0.03em]" style={{ color: "var(--color-violet)" }}>
                {s.n}
              </span>
              <span className="mt-3 text-[14px] text-2">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
