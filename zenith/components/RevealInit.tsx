"use client";

import { useEffect } from "react";

// Scroll-reveal engine. Content is visible by default (see globals.css);
// this only activates the effect once JS is actually running, so nothing
// can ever be stuck blank. A MutationObserver picks up elements added
// later (client-side navigations, conditional renders).
export default function RevealInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Anything already on screen is marked revealed BEFORE we start hiding
    // unrevealed elements — no flash for above-the-fold content.
    const markInView = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("revealed");
      });
    };
    markInView();
    document.documentElement.classList.add("reveal-ready");

    // threshold 0: reveal as soon as any part of the element enters view —
    // tall sections must never wait for a percentage of their own height.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)").forEach((el) => io.observe(el));
    };
    observeAll();

    // Catch elements mounted after this effect ran (route changes etc.).
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);
  return null;
}
