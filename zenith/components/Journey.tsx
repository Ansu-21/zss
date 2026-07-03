import Link from "next/link";

// The learning journey — from first conversation to first day on site.
const steps = [
  {
    n: "01",
    title: "Free counselling",
    d: "A real conversation about where you stand — education, budget, goals. We tell you honestly which route fits, even if the answer is 'not yet'.",
    meta: "Day 0 · free",
  },
  {
    n: "02",
    title: "Choose your course",
    d: "One-day certificates, one-month diplomas or international credentials like IOSH and OSHA. We map the course to the job you actually want.",
    meta: "Same week",
  },
  {
    n: "03",
    title: "Train hands-on",
    d: "Real drills, real equipment, real site exposure — not slideware. Online or classroom, whichever fits your life.",
    meta: "1 day – 1 month",
  },
  {
    n: "04",
    title: "Get certified",
    d: "Assessment, then a credential employers recognise — NSDI-accredited diplomas or internationally issued IOSH, OSHA, OTHM and ISO certificates.",
    meta: "On completion",
  },
  {
    n: "05",
    title: "Interview preparation",
    d: "Résumé, mock interviews and the paperwork guidance that Gulf recruitment actually requires. This is where most institutes stop. We don't.",
    meta: "Ongoing",
  },
  {
    n: "06",
    title: "Placed — and supported",
    d: "Our placement team works your case across India and the Gulf until you're earning. Then we stay reachable for the next step up.",
    meta: "The goal",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-alt py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="max-w-[640px]" data-reveal>
          <div className="mono text-[12px] tracking-[0.12em]" style={{ color: "var(--color-violet)" }}>YOUR LEARNING JOURNEY</div>
          <h2 className="display mt-3 text-[clamp(28px,4.2vw,48px)] font-bold leading-[1.05] tracking-[-0.03em] text-app">
            Six steps from &ldquo;thinking about it&rdquo; to your first site badge.
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed text-2">
            No mystery, no fine print. This is exactly what happens after you say hello.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.n} className="lift relative rounded-[22px] border bd bg-card p-7" data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <div className="flex items-center justify-between">
                <span
                  className="display text-[34px] font-bold leading-none tracking-[-0.03em]"
                  style={{
                    background: "linear-gradient(120deg, var(--color-sky), var(--color-violet))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {s.n}
                </span>
                <span className="mono rounded-full border bd px-2.5 py-1 text-[11px] text-3">{s.meta}</span>
              </div>
              <h3 className="display mt-4 text-[19px] font-bold text-app">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-2">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-4" data-reveal>
          <Link
            href="/login"
            className="rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--color-coral)", boxShadow: "0 18px 40px -14px var(--color-coral)" }}
          >
            Start step one — it&apos;s free
          </Link>
          <Link href="/plan" className="rounded-full border bd bg-card px-6 py-3.5 text-[15px] font-medium text-app transition-colors hover:border-[var(--color-violet)]">
            Estimate fees &amp; check eligibility →
          </Link>
        </div>
      </div>
    </section>
  );
}
