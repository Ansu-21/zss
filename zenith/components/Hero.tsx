"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const places = ["refineries", "skyscrapers", "oil rigs", "construction sites", "power plants", "hospitals"];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % places.length), 2300);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-wash relative flex min-h-screen items-center overflow-hidden">
      {/* soft floating colour orbs */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full opacity-60 blur-[130px]" style={{ background: "var(--color-violet-soft)" }} />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[440px] w-[440px] rounded-full opacity-70 blur-[130px]" style={{ background: "var(--color-sky-soft)" }} />

      <div className="relative mx-auto grid w-full max-w-[1240px] gap-12 px-6 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* LEFT — the message */}
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border bd bg-card px-3.5 py-1.5 text-[13px] font-medium text-2">
            <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-emerald)" }} />
            Safety &amp; HSE training · Trichy · since 2013
          </div>

          <h1 className="display mt-7 max-w-[15ch] text-[clamp(42px,6.6vw,84px)] font-bold leading-[0.98] tracking-[-0.03em] text-app">
            Keep the world{" "}
            <span style={{ background: "linear-gradient(120deg, var(--color-sky), var(--color-violet))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              running.
            </span>
          </h1>

          <p className="mt-6 text-[clamp(17px,2.2vw,22px)] leading-snug text-2">
            The people who make{" "}
            <span key={i} className="font-semibold" style={{ color: "var(--color-violet)", animation: "swap .5s ease" }}>{places[i]}</span>{" "}
            safe are trained somewhere.
          </p>

          <p className="mt-6 max-w-[44ch] text-[16.5px] leading-[1.6] text-2">
            Learn the craft of safety from people who&apos;ve done the work — globally recognised
            certifications, real practical training, and guidance that doesn&apos;t stop at the certificate.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/login" className="rounded-full px-8 py-4 text-[16px] font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-coral)", boxShadow: "0 18px 40px -14px var(--color-coral)" }}>
              Find my career path
            </Link>
            <Link href="/courses" className="group inline-flex items-center gap-2 rounded-full border bd bg-card px-7 py-4 text-[16px] font-medium text-app transition-colors hover:border-[var(--color-violet)]">
              Explore courses
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>

        {/* cinematic but light-friendly visual card */}
        <div className="relative hidden lg:block">
          <div className="photo relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_44px_90px_-34px_rgba(80,100,200,0.5)]">
            <img src="https://www.zss.co.in/assets/images/about/about-03.webp" alt="Zenith safety training" className="absolute inset-0 h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,25,55,0.85) 8%, rgba(20,25,55,0.15) 55%, rgba(124,108,240,0.25) 100%)" }} />
            <div className="absolute inset-x-7 bottom-7">
              <div className="display text-[26px] font-bold leading-[1.1] text-white">
                Every site. Every country.<br />Someone keeps it safe.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes swap{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
