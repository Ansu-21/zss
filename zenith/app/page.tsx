import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import CourseRow from "@/components/CourseRow";
import Categories from "@/components/Categories";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Certificates from "@/components/Certificates";
import Founder from "@/components/Founder";
import SafetyUniverse from "@/components/SafetyUniverse";
import WhySafety from "@/components/WhySafety";
import Journey from "@/components/Journey";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Img from "@/components/Img";
import Link from "next/link";
import { collections } from "@/data/courses";

export default function Home() {
  const gulfRows = collections.filter((r) => /Gulf|construction/i.test(r.title));
  const otherRows = collections.filter((r) => !/Gulf|construction/i.test(r.title));

  return (
    <main>
      <Hero />

      {/* STATS */}
      <StatsBand />

      {/* CATEGORIES */}
      <Categories />

      {/* THE WORK */}
      <section id="work" className="bg-alt py-24">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mono text-[12px] tracking-[0.12em]" style={{ color: "var(--color-violet)" }}>WHY THIS CAREER</div>
            <h2 className="display mt-4 text-[clamp(28px,4.2vw,48px)] font-bold leading-[1.06] tracking-[-0.03em] text-app">
              A safety officer is the reason everyone else gets home.
            </h2>
            <p className="mt-5 max-w-[46ch] text-[16.5px] leading-[1.65] text-2">
              It&apos;s a career that exists on every site, in every country, in every industry — and it pays
              accordingly. We don&apos;t just hand you a certificate. We get you to the job.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
              {[
                ["Recognised everywhere", "IOSH, OSHA, OTHM & ISO credentials employers name directly."],
                ["Practical, not theory", "Real drills, real equipment, real site exposure."],
                ["Placed, not abandoned", "Our team works your placement long after class ends."],
                ["Built for the Gulf", "The route most of our students are really asking for."],
              ].map(([h, d]) => (
                <div key={h}>
                  <div className="flex items-center gap-2 text-[15px] font-semibold text-app">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-coral)" }} />{h}
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-2">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="photo relative aspect-[5/6] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-30px_rgba(80,100,200,0.4)]">
            <Img src="https://www.zss.co.in/assets/images/about/1.jpg" alt="Safety officer on site" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,25,55,0.88) 10%, rgba(20,25,55,0.2) 55%, transparent 100%)" }} />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="mono text-[11px] text-white/80">THE QUIET PROFESSION</div>
              <p className="display mt-1 text-[19px] font-bold leading-snug text-white">Everyone goes home safe. That&apos;s the whole job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER / HERITAGE */}
      <Founder />

      {/* WHY SAFETY */}
      <WhySafety />

      {/* LEARNING JOURNEY */}
      <Journey />

      {/* COURSE UNIVERSE */}
      <section id="courses" className="bg-app py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mono text-[12px] tracking-[0.12em] text-3">THE COURSE UNIVERSE</div>
              <h2 className="display mt-3 max-w-[18ch] text-[clamp(28px,4.2vw,48px)] font-bold leading-[1.04] tracking-[-0.03em] text-app">
                Forty ways in. One of them is yours.
              </h2>
            </div>
            <Link href="/courses" className="rounded-full px-6 py-3 text-[14.5px] font-semibold text-white transition-transform hover:-translate-y-px" style={{ background: "var(--color-sky)" }}>
              See all 40 courses
            </Link>
          </div>
          {otherRows.map((r) => <CourseRow key={r.title} title={r.title} slugs={r.slugs} />)}
        </div>
      </section>

      {/* SAFETY UNIVERSE */}
      <SafetyUniverse />

      {/* QUIZ TEASER */}
      <section className="bg-app py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="relative overflow-hidden rounded-[28px] border bd p-10 text-center" style={{ background: "linear-gradient(135deg, var(--color-violet-soft), var(--color-sky-soft))" }} data-reveal>
            <div className="pointer-events-none absolute -right-10 -top-10 text-[120px] opacity-20">🎯</div>
            <div className="mono text-[12px] tracking-[0.14em]" style={{ color: "var(--color-violet)" }}>SAFETY CHALLENGE</div>
            <h2 className="display mx-auto mt-3 max-w-[22ch] text-[clamp(26px,3.8vw,42px)] font-bold tracking-[-0.03em] text-app">
              Test your safety knowledge. Win a real reward.
            </h2>
            <p className="mx-auto mt-3 max-w-[44ch] text-[16px] text-2">
              5 quick questions. Score well and spin the wheel for a discount or free perk — one try per person.
            </p>
            <a href="/quiz" className="mt-7 inline-block rounded-full px-8 py-4 text-[16px] font-semibold text-white transition-transform hover:-translate-y-0.5" style={{ background: "var(--color-coral)", boxShadow: "0 18px 40px -14px var(--color-coral)" }}>
              Take the challenge →
            </a>
          </div>
        </div>
      </section>

      {/* GULF */}
      <section id="gulf" className="bg-alt py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mb-12 max-w-[640px]">
            <div className="mono text-[12px] tracking-[0.12em]" style={{ color: "var(--color-violet)" }}>THE DESTINATION</div>
            <h2 className="display mt-3 text-[clamp(28px,4.2vw,48px)] font-bold leading-[1.05] tracking-[-0.03em] text-app">
              Most of our students are really asking one question.
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-2">
              How do I get to the Gulf? So we built the honest answer — which certification first, what the
              salary actually buys in Doha versus Trichy, and what the paperwork really takes. No rumours.
            </p>
          </div>
          {gulfRows.map((r) => <CourseRow key={r.title} title={r.title} slugs={r.slugs} />)}
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="bg-app py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mono text-[12px] tracking-[0.12em] text-3">WHY ZENITH</div>
          <h2 className="display mt-3 max-w-[20ch] text-[clamp(26px,3.8vw,44px)] font-bold leading-[1.05] tracking-[-0.03em] text-app">
            Rated the best safety training institute in India — and built to keep that title.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["NSDI accredited", "Recognised under the National Skill Development initiative."],
              ["ISO certified", "An institute held to the standards it teaches."],
              ["Since 2013", "Established in Trichy to serve local industry's HSE needs."],
              ["Expert trainers", "Qualified trainers and assessors with real operational experience."],
            ].map(([h, d], idx) => (
              <div key={h} className="rounded-[20px] border bd bg-card p-7">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl text-white" style={{ background: idx % 2 ? "var(--color-violet)" : "var(--color-sky)" }}>✓</div>
                <div className="display text-[18px] font-bold text-app">{h}</div>
                <p className="mt-2 text-[14px] leading-relaxed text-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <Certificates />

      {/* TESTIMONIALS */}
      <div id="stories"><Testimonials /></div>

      {/* CLIENTS */}
      <Clients />

      {/* PLAN TOOLS TEASER */}
      <section className="bg-app py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid gap-5 md:grid-cols-3" data-reveal>
            {[
              ["🎓", "Check eligibility", "Answer two questions, see exactly which courses fit you.", "/plan"],
              ["🧮", "Plan fees & EMI", "See the monthly number before you ever talk money.", "/plan"],
              ["⚖️", "Compare courses", "IOSH vs OSHA vs diploma — side by side, honestly.", "/plan"],
            ].map(([icon, h, d, href]) => (
              <Link key={h} href={href} className="lift group rounded-[22px] border bd bg-card p-7">
                <div className="text-[28px]">{icon}</div>
                <div className="display mt-3 text-[19px] font-bold text-app">{h}</div>
                <p className="mt-1.5 text-[14px] leading-relaxed text-2">{d}</p>
                <div className="mt-4 text-[14px] font-semibold" style={{ color: "var(--color-violet)" }}>
                  Try it free <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CLOSE */}
      <section className="relative overflow-hidden bg-alt py-28 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[620px] -translate-x-1/2 rounded-full opacity-50 blur-[130px]" style={{ background: "var(--color-violet-soft)" }} />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <h2 className="display mx-auto max-w-[20ch] text-[clamp(30px,4.6vw,56px)] font-bold leading-[1.04] tracking-[-0.03em] text-app">
            It doesn&apos;t start with a payment. It starts with a conversation.
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-[16.5px] text-2">
            Tell us where you stand. We&apos;ll tell you honestly whether this is your route — and if it is,
            exactly how to walk it.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/login" className="rounded-full px-8 py-4 text-[16px] font-semibold text-white transition-transform hover:-translate-y-0.5" style={{ background: "var(--color-coral)", boxShadow: "0 18px 40px -14px var(--color-coral)" }}>
              Get my free career report
            </Link>
            <a href="https://wa.me/919585252099" className="rounded-full border bd bg-card px-7 py-4 text-[16px] font-medium text-app transition-colors hover:border-[var(--color-violet)]">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
