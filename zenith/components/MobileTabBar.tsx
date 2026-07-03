"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Native-feeling bottom navigation for phones. Hidden on lg+ screens.
const tabs = [
  { href: "/", label: "Home", icon: <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
  { href: "/courses", label: "Courses", icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></> },
  { href: "/login", label: "Apply", icon: null }, // raised centre button
  { href: "/plan", label: "Fees & EMI", icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M8 2v4M16 2v4M3 10h18" /></> },
  { href: "/contact", label: "Contact", icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /> },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-[95] border-t bd lg:hidden"
      style={{
        background: "color-mix(in srgb, var(--bg) 92%, transparent)",
        backdropFilter: "saturate(160%) blur(16px)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="mx-auto grid h-16 max-w-[520px] grid-cols-5 items-center px-2">
        {tabs.map((t) => {
          const active = t.href === "/" ? pathname === "/" : pathname.startsWith(t.href);
          if (t.label === "Apply") {
            return (
              <Link key={t.href} href={t.href} className="flex justify-center" aria-label="Apply now">
                <span
                  className="grid h-12 w-12 -translate-y-3 place-items-center rounded-full text-white shadow-[0_12px_28px_-8px_var(--color-coral)] transition-transform active:scale-95"
                  style={{ background: "var(--color-coral)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </Link>
            );
          }
          return (
            <Link
              key={t.href}
              href={t.href}
              aria-current={active ? "page" : undefined}
              className="flex flex-col items-center gap-1 py-1.5"
              style={{ color: active ? "var(--color-violet)" : "var(--text-3)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{t.icon}</svg>
              <span className="text-[10.5px] font-medium leading-none">{t.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
