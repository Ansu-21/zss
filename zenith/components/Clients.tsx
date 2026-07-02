"use client";

// Client logos load directly from the live site (https://www.zss.co.in/assets/images/brand/).
const logos = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11"];

export default function Clients() {
  return (
    <section className="bg-alt py-20">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="text-center" data-reveal>
          <div className="mono text-[12px] tracking-[0.12em] text-3">TRUSTED BY INDUSTRY</div>
          <h2 className="display mt-3 text-[clamp(24px,3.4vw,38px)] font-bold tracking-[-0.03em] text-app">
            Our partners
          </h2>
          <p className="mt-3 text-[15px] text-2">Companies that hire, train with, and trust Zenith graduates.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {logos.map((l) => (
            <div
              key={l}
              className="flex h-36 items-center justify-center rounded-2xl border bd bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(80,100,200,0.3)]"
            >
              <img
                src={`https://www.zss.co.in/assets/images/brand/${l}.jpg`}
                alt="Partner logo"
                loading="lazy"
                className="max-h-24 w-auto max-w-full object-contain"
                onError={(e) => { (e.currentTarget.style.display = "none"); }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
