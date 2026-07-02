import Footer from "@/components/Footer";
import Img from "@/components/Img";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export const metadata = {
  title: "About Zenith Safety Solutions — Health & Safety Training in Trichy",
  description:
    "Established in Trichy in 2013, Zenith Safety Solutions is an accredited health & safety training body. Our vision, mission, and why students across India and the Gulf choose us.",
};

const missionPoints = [
  "Provide a safe, potent environment where people can renew and evolve in ways they never imagined.",
  "Deliver quality programmes with the highest level of service and customer care, tailored to each learner.",
  "Offer training, advice and support across health & safety, first aid, supervision and industrial safety.",
  "Bring international best practices to Trichy across construction and industrial markets.",
  "Encourage people of all ages and backgrounds to develop a safety culture through training and practice.",
];

const whyChoose = [
  ["Expert trainers", "Qualified trainers and assessors with real operational experience in their fields."],
  ["Innovative training", "Practical, result-oriented methods that put learner experience first."],
  ["Lifelong support", "Technical support from our experts throughout your career, not just during the course."],
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero-wash relative overflow-hidden pt-36 pb-20">
        <div className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full opacity-60 blur-[130px]" style={{ background: "var(--color-violet-soft)" }} />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <div className="mono text-[12px] tracking-[0.12em] text-3">ABOUT US</div>
          <h1 className="display mt-3 max-w-[20ch] text-[clamp(34px,5.4vw,68px)] font-bold leading-[1.0] tracking-[-0.03em] text-app">
            Do you need an accredited health &amp; safety qualification?
          </h1>
          <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.6] text-2">
            Zenith Safety Solutions was established in Trichy on 1 June 2013 to meet the needs of local
            industry for high-quality technical training in Health, Safety &amp; Environment — accredited by
            various local and international bodies.
          </p>
        </div>
      </section>

      {/* STORY + GALLERY */}
      <section className="bg-app py-20">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mono text-[12px] tracking-[0.12em]" style={{ color: "var(--color-violet)" }}>WHO WE ARE</div>
            <h2 className="display mt-3 text-[clamp(26px,3.6vw,42px)] font-bold leading-[1.1] tracking-[-0.03em] text-app">
              The best education services for your safety career.
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-[1.65] text-2">
              <p>Zenith is a training body accredited by various local and international bodies, providing services in Health and Safety.</p>
              <p>Our institute is set in a pleasant environment with friendly staff. We provide a range of safety officer courses that enhance your career as a specialist in your chosen area and make you highly employable — helping you transition seamlessly between professional levels.</p>
            </div>
            <div className="mt-7 rounded-2xl border bd bg-cardAlt p-6">
              <div className="flex items-center gap-2 text-[15px] font-semibold text-app">
                <span className="grid h-7 w-7 place-items-center rounded-lg text-white" style={{ background: "var(--color-violet)" }}>★</span>
                Our Vision
              </div>
              <p className="mt-2.5 text-[15px] leading-relaxed text-2">
                To become a world leader in high-quality safety training and strive to create an accident-free world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["1", "2", "3", "4"].map((n, i) => (
              <div key={n} className={`photo overflow-hidden rounded-2xl ${i % 2 ? "mt-6" : ""}`} style={{ aspectRatio: "1 / 1.1" }}>
                <Img src={`https://www.zss.co.in/assets/images/about/${n}.jpg`} alt="Zenith training" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-alt py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mono text-[12px] tracking-[0.12em]" style={{ color: "var(--color-violet)" }}>OUR MISSION</div>
          <h2 className="display mt-3 max-w-[24ch] text-[clamp(26px,3.6vw,42px)] font-bold leading-[1.1] tracking-[-0.03em] text-app">
            Skilled, qualified professionals — responsive to every learner&apos;s needs.
          </h2>
          <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-2">
            We use highly skilled professionals with a wealth of operational experience. All our tutors are
            qualified as trainers and assessors as well as being technically competent — and we constantly
            review our courses, seeking client feedback to deliver flexible, innovative solutions.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {missionPoints.map((m, i) => (
              <div key={i} className="rounded-2xl border bd bg-card p-6">
                <div className="mono text-[13px]" style={{ color: "var(--color-violet)" }}>0{i + 1}</div>
                <p className="mt-2 text-[14.5px] leading-relaxed text-2">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-app py-16">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {[["29K+", "Students enrolled"], ["32K+", "Classes completed"], ["100%", "Satisfaction rate"], ["350+", "Top instructors"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="display text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.03em]" style={{ color: "var(--color-violet)" }}>{n}</div>
              <div className="mt-1 text-[14px] text-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-alt py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center">
            <div className="mono text-[12px] tracking-[0.12em] text-3">WHY CHOOSE ZSS</div>
            <h2 className="display mt-3 text-[clamp(26px,3.6vw,44px)] font-bold tracking-[-0.03em] text-app">
              The beneficial side of Zenith Safety Solutions
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {whyChoose.map(([h, d], i) => (
              <div key={h} className="rounded-[22px] border bd bg-card p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl text-white" style={{ background: i === 0 ? "var(--color-sky)" : i === 1 ? "var(--color-violet)" : "var(--color-coral)" }}>
                  {i === 0 ? "✓" : i === 1 ? "★" : "♾"}
                </div>
                <h3 className="display mt-5 text-[20px] font-bold text-app">{h}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* reuse testimonials + partners */}
      <Testimonials />
      <Clients />

      {/* CTA */}
      <section className="bg-app py-20 text-center">
        <div className="mx-auto max-w-[1240px] px-6">
          <h2 className="display mx-auto max-w-[20ch] text-[clamp(26px,4vw,46px)] font-bold tracking-[-0.03em] text-app">
            Ready to start? Talk to us first.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/login" className="rounded-full px-7 py-3.5 text-[15px] font-semibold text-white" style={{ background: "var(--color-coral)" }}>Get my career report</Link>
            <Link href="/contact" className="rounded-full border bd bg-card px-7 py-3.5 text-[15px] font-medium text-app">Contact us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
