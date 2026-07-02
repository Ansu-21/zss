import Img from "@/components/Img";

export default function Founder() {
  return (
    <section className="relative overflow-hidden py-28" style={{ background: "var(--bg-alt)" }}>
      {/* cinematic backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.55]" style={{ background: "radial-gradient(60% 80% at 80% 20%, var(--color-violet-soft), transparent 70%), radial-gradient(50% 60% at 10% 90%, var(--color-sky-soft), transparent 70%)" }} />
      {/* faint chevron motif (air-force nod) */}
      <div className="pointer-events-none absolute right-[-60px] top-1/2 hidden -translate-y-1/2 opacity-[0.06] lg:block" style={{ color: "var(--color-violet)" }}>
        <svg width="520" height="520" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M10 30 50 10 90 30M10 50 50 30 90 50M10 70 50 50 90 70" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          {/* portrait with layered frame */}
          <div className="relative mx-auto w-full max-w-[380px]" data-reveal>
            <div className="absolute -inset-3 rounded-[32px] opacity-70 blur-2xl" style={{ background: "linear-gradient(140deg, var(--color-sky), var(--color-violet))" }} />
            <div className="relative overflow-hidden rounded-[28px] border bd" style={{ background: "var(--card)" }}>
              <div className="photo relative" style={{ aspectRatio: "4 / 5" }}>
                <Img src="https://www.zss.co.in/assets/images/about/2.jpg" alt="Founder of Zenith Safety Solutions" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,20,45,0.82) 6%, rgba(15,20,45,0.05) 50%)" }} />
              </div>
              {/* service ribbon */}
              <div className="absolute left-0 top-6 flex items-center gap-2 rounded-r-full py-2 pl-4 pr-5 text-[12px] font-semibold tracking-wide text-white" style={{ background: "linear-gradient(90deg, var(--color-violet), var(--color-sky))" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 4 5v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V5z" /></svg>
                INDIAN AIR FORCE VETERAN
              </div>
              {/* name plate */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="display text-[22px] font-bold leading-tight text-white">The Founder</div>
                <div className="text-[13px] text-white/80">Retired Officer, Indian Air Force · Founder, Zenith Safety Solutions</div>
              </div>
            </div>
          </div>

          {/* editorial content */}
          <div data-reveal>
            <div className="mono text-[12px] tracking-[0.14em]" style={{ color: "var(--color-violet)" }}>OUR HERITAGE</div>
            <h2 className="display mt-4 max-w-[16ch] text-[clamp(30px,4.6vw,56px)] font-bold leading-[1.02] tracking-[-0.035em] text-app">
              Discipline learned in the
              <span style={{ background: "linear-gradient(120deg, var(--color-sky), var(--color-violet))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}> skies</span>,
              taught on the ground.
            </h2>

            {/* signature quote */}
            <blockquote className="relative mt-7 max-w-[52ch] pl-6 text-[18px] leading-[1.6] text-2" style={{ borderLeft: "3px solid var(--color-coral)" }}>
              In the Air Force, safety isn&apos;t paperwork — it&apos;s the discipline that decides who comes home.
              Zenith was built to carry that same standard into every classroom.
            </blockquote>

            {/* three pillars */}
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                ["Discipline", "Military-grade rigour in how we train and assess.", "var(--color-sky)"],
                ["Duty", "A real responsibility for every learner's outcome.", "var(--color-violet)"],
                ["Standards", "We hold ourselves to what we teach — always.", "var(--color-coral)"],
              ].map(([h, d, c]) => (
                <div key={h} className="rounded-2xl border bd p-5" style={{ background: "var(--card)" }}>
                  <div className="h-1 w-8 rounded-full" style={{ background: c }} />
                  <div className="display mt-3 text-[17px] font-bold text-app">{h}</div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-2">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-[14px] text-2">
              <span className="grid h-9 w-9 place-items-center rounded-full text-white" style={{ background: "var(--color-emerald)" }}>★</span>
              An institute that lives by the standards it certifies.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
