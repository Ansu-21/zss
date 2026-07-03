"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { serviceGroups } from "@/data/services";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);          // mobile drawer
  const [svcOpen, setSvcOpen] = useState(false);     // desktop mega-menu
  const [mobileSvc, setMobileSvc] = useState(false); // mobile services accordion

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 16);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const Logo = (
    <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
      <img src="https://www.zss.co.in/assets/images/logo/logo-dark.png" alt="Zenith Safety Solutions" className="block h-12 w-auto dark:hidden sm:h-14" onError={(e) => { e.currentTarget.style.display = "none"; }} />
      <img src="https://www.zss.co.in/assets/images/logo/logo-white.png" alt="Zenith Safety Solutions" className="hidden h-12 w-auto dark:block sm:h-14" onError={(e) => { e.currentTarget.style.display = "none"; }} />
    </Link>
  );

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "color-mix(in srgb, var(--bg) 88%, transparent)" : "color-mix(in srgb, var(--bg) 55%, transparent)",
          backdropFilter: "saturate(160%) blur(16px)",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          paddingTop: scrolled ? 12 : 16,
          paddingBottom: scrolled ? 12 : 16,
        }}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6">
          {Logo}

          {/* desktop links */}
          <div className="hidden items-center gap-7 text-[14.5px] text-2 lg:flex">
            <Link href="/courses" className="transition-colors hover:text-app">Courses</Link>
            <Link href="/about" className="transition-colors hover:text-app">About</Link>

            {/* services mega-menu */}
            <div className="relative" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
              <button className="flex items-center gap-1 transition-colors hover:text-app">
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${svcOpen ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6" /></svg>
              </button>
              <div
                className="absolute left-1/2 top-full -translate-x-1/2 pt-4 transition-all duration-200"
                style={{ opacity: svcOpen ? 1 : 0, visibility: svcOpen ? "visible" : "hidden", transform: `translateX(-50%) translateY(${svcOpen ? 0 : 8}px)` }}
              >
                <div className="grid w-[680px] grid-cols-3 gap-6 rounded-2xl border bd p-6 shadow-[0_30px_70px_-30px_rgba(20,30,60,0.4)]" style={{ background: "var(--card)" }}>
                  {serviceGroups.map((g) => (
                    <div key={g.heading}>
                      <div className="mono mb-3 text-[11px] tracking-[0.08em]" style={{ color: "var(--color-violet)" }}>{g.heading.toUpperCase()}</div>
                      <ul className="space-y-2">
                        {g.items.slice(0, 7).map((it) => (
                          <li key={it.slug}>
                            <Link href={`/courses/${it.slug}`} className="text-[13.5px] text-2 transition-colors hover:text-app">{it.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-3 border-t bd pt-4">
                    <Link href="/courses" className="text-[13.5px] font-semibold" style={{ color: "var(--color-violet)" }}>View all 40 courses →</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/plan" className="transition-colors hover:text-app">Fees &amp; EMI</Link>
            <Link href="/industrial-training" className="transition-colors hover:text-app">Industrial Training</Link>
            <Link href="/gallery" className="transition-colors hover:text-app">Gallery</Link>
            <Link href="/contact" className="transition-colors hover:text-app">Contact</Link>
          </div>

          {/* right cluster */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/login"
              className="hidden rounded-full px-5 py-2.5 text-[14.5px] font-semibold text-white transition-transform hover:-translate-y-px sm:inline-block"
              style={{ background: "var(--color-coral)", boxShadow: "0 10px 24px -10px var(--color-coral)" }}
            >
              Get my career report
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border bd lg:hidden"
              style={{ background: "var(--card)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* mobile drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        <div onClick={() => setOpen(false)} className="absolute inset-0 transition-opacity duration-300" style={{ background: "rgba(8,12,22,0.5)", backdropFilter: "blur(4px)", opacity: open ? 1 : 0 }} />
        <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-[380px] flex-col transition-transform duration-300" style={{ background: "var(--bg)", transform: open ? "translateX(0)" : "translateX(100%)", boxShadow: "-20px 0 60px -20px rgba(8,12,22,0.4)" }}>
          <div className="flex items-center justify-between border-b bd px-6 py-5">
            {Logo}
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full border bd" style={{ background: "var(--card)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
            <Link href="/courses" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3.5 text-[17px] font-medium text-app hover:bg-[var(--card)]">Courses</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3.5 text-[17px] font-medium text-app hover:bg-[var(--card)]">About</Link>

            {/* mobile services accordion */}
            <button onClick={() => setMobileSvc((v) => !v)} className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[17px] font-medium text-app hover:bg-[var(--card)]">
              Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${mobileSvc ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6" /></svg>
            </button>
            {mobileSvc && (
              <div className="mb-2 ml-3 border-l bd pl-3">
                {serviceGroups.map((g) => (
                  <div key={g.heading} className="mt-2">
                    <div className="mono px-1 py-1 text-[11px] tracking-[0.08em] text-3">{g.heading.toUpperCase()}</div>
                    {g.items.slice(0, 6).map((it) => (
                      <Link key={it.slug} href={`/courses/${it.slug}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-[14.5px] text-2 hover:bg-[var(--card)]">{it.label}</Link>
                    ))}
                  </div>
                ))}
                <Link href="/courses" onClick={() => setOpen(false)} className="mt-2 block px-3 py-2 text-[14px] font-semibold" style={{ color: "var(--color-violet)" }}>View all 40 courses →</Link>
              </div>
            )}

            <Link href="/plan" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3.5 text-[17px] font-medium text-app hover:bg-[var(--card)]">Fees &amp; EMI</Link>
            <Link href="/industrial-training" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3.5 text-[17px] font-medium text-app hover:bg-[var(--card)]">Industrial Training</Link>
            <Link href="/gallery" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3.5 text-[17px] font-medium text-app hover:bg-[var(--card)]">Gallery</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3.5 text-[17px] font-medium text-app hover:bg-[var(--card)]">Contact</Link>
          </div>

          <div className="border-t bd p-5">
            <Link href="/login" onClick={() => setOpen(false)} className="block rounded-full px-5 py-3.5 text-center text-[16px] font-semibold text-white" style={{ background: "var(--color-coral)" }}>Get my career report</Link>
            <a href="https://wa.me/919585252099" className="mt-3 block rounded-full border bd py-3.5 text-center text-[15px] font-medium text-app" style={{ background: "var(--card)" }}>WhatsApp us</a>
          </div>
        </div>
      </div>
    </>
  );
}
