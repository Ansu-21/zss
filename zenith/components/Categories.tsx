"use client";

import Link from "next/link";

const cats = [
  {
    title: "Diploma Courses",
    desc: "A wide range of government-approved safety diploma courses.",
    count: "15 Courses",
    tint: "var(--color-emerald)",
    soft: "rgba(22,169,116,0.12)",
    href: "/courses",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" /></svg>
    ),
  },
  {
    title: "Certificate Courses",
    desc: "Kick-start today and become a certified professional, fast.",
    count: "13 Courses",
    tint: "#E5577E",
    soft: "rgba(229,87,126,0.12)",
    href: "/courses",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" /></svg>
    ),
  },
  {
    title: "IOSH",
    desc: "A three-day class with an objective exam and practical assessment.",
    count: "1 Course",
    tint: "var(--color-sky)",
    soft: "rgba(79,143,240,0.12)",
    href: "/courses/iosh-managing-safely",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
    ),
  },
  {
    title: "International Certification",
    desc: "UK certifications — general certificate and diploma routes.",
    count: "2 Courses",
    tint: "#F5A524",
    soft: "rgba(245,165,36,0.14)",
    href: "/courses",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></svg>
    ),
  },
];

export default function Categories() {
  return (
    <section className="bg-app py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mx-auto max-w-[640px] text-center" data-reveal>
          <div className="mono text-[12px] tracking-[0.12em]" style={{ color: "var(--color-violet)" }}>CATEGORIES</div>
          <h2 className="display mt-3 text-[clamp(28px,4.2vw,46px)] font-bold leading-[1.05] tracking-[-0.03em] text-app">
            Government-certified courses we offer
          </h2>
          <p className="mt-4 text-[16px] text-2">
            Become a specialist in your chosen area — and highly employable across India and the Gulf.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative flex flex-col items-center overflow-hidden rounded-[22px] border p-8 text-center transition-all hover:-translate-y-1.5"
              style={{
                background: `color-mix(in srgb, ${c.tint} 14%, var(--card))`,
                borderColor: `color-mix(in srgb, ${c.tint} 30%, var(--border))`,
              }}
            >
              {/* soft top glow of the tint */}
              <span
                className="pointer-events-none absolute -top-16 left-1/2 h-32 w-40 -translate-x-1/2 rounded-full opacity-50 blur-3xl transition-opacity group-hover:opacity-80"
                style={{ background: c.tint }}
              />
              <div className="relative grid h-16 w-16 place-items-center rounded-full" style={{ background: `color-mix(in srgb, ${c.tint} 22%, var(--card))`, color: c.tint }}>
                {c.icon}
              </div>
              <h3 className="display relative mt-5 text-[19px] font-bold tracking-[-0.01em] text-app">{c.title}</h3>
              <p className="relative mt-2.5 text-[14px] leading-relaxed text-2">{c.desc}</p>
              <span className="relative mt-5 rounded-full px-4 py-1.5 text-[13px] font-semibold" style={{ background: `color-mix(in srgb, ${c.tint} 18%, var(--card))`, color: c.tint }}>
                {c.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
