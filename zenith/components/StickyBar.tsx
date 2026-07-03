"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Sticky admission bar (desktop) + back-to-top (all sizes).
// Appears once the visitor has scrolled past the hero, so it never
// competes with the first impression.
export default function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const f = () => setShow(window.scrollY > 720);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <>
      {/* back to top — sits bottom-left so it never collides with the chat FAB */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-[88px] left-4 z-[90] grid h-11 w-11 place-items-center rounded-full border bd text-app shadow-lg transition-all duration-300 lg:bottom-6 lg:left-6 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
        style={{ background: "var(--card)" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
      </button>

      {/* admission bar — desktop only; mobile has the tab bar instead */}
      <div
        className={`fixed bottom-6 left-1/2 z-[90] hidden -translate-x-1/2 items-center gap-4 rounded-full border bd py-2 pl-5 pr-2 shadow-[0_24px_60px_-20px_rgba(20,30,60,0.45)] transition-all duration-300 lg:flex ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        style={{ background: "color-mix(in srgb, var(--card) 92%, transparent)", backdropFilter: "saturate(160%) blur(14px)" }}
        role="region"
        aria-label="Admissions"
      >
        <span className="flex items-center gap-2 text-[14px] font-medium text-app">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: "var(--color-emerald)" }} />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--color-emerald)" }} />
          </span>
          Admissions open — counselling is free
        </span>
        <span className="h-5 w-px" style={{ background: "var(--border)" }} />
        <a href="https://wa.me/919585252099?text=Hi%20Zenith%2C%20I%27d%20like%20to%20book%20a%20free%20counselling%20session." className="text-[14px] font-medium text-2 transition-colors hover:text-app">
          WhatsApp
        </a>
        <a href="tel:9585252099" className="text-[14px] font-medium text-2 transition-colors hover:text-app">
          Call
        </a>
        <Link
          href="/login"
          className="rounded-full px-5 py-2.5 text-[14px] font-semibold text-white transition-transform hover:-translate-y-px"
          style={{ background: "var(--color-coral)", boxShadow: "0 10px 24px -10px var(--color-coral)" }}
        >
          Apply now
        </Link>
      </div>
    </>
  );
}
