import Footer from "@/components/Footer";
import Img from "@/components/Img";
import Clients from "@/components/Clients";
import Link from "next/link";

export const metadata = {
  title: "Industrial & Corporate Safety Training | Zenith Safety Solutions",
  description:
    "On-site and corporate HSE training, fire drills, audits, compliance and consultancy for industries across Tamil Nadu and beyond. Tailored to your workplace.",
};

const services = [
  ["On-site safety training", "We bring practical HSE training to your factory, plant or site — tailored to your real hazards and processes."],
  ["Fire drills & mock drills", "Hands-on emergency response and evacuation drills that prepare your team for the real thing."],
  ["Safety audits", "Independent assessment of your workplace against safety standards, with a clear action report."],
  ["Compliance programmes", "Structured programmes to meet statutory safety requirements and stay audit-ready."],
  ["First aid training", "Certified first-aid and emergency-care training for your workforce."],
  ["Consultancy & advisory", "Ongoing expert support to build a genuine safety culture, not just tick boxes."],
];

const steps = [
  ["Understand", "We assess your workplace, hazards and goals."],
  ["Tailor", "We design a programme around your industry and team."],
  ["Deliver", "On-site or classroom training by experienced trainers."],
  ["Support", "Follow-up, audits and advisory to keep standards high."],
];

export default function IndustrialTrainingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-deep pt-36 pb-24" style={{ background: "var(--bg-alt)" }}>
        <div className="pointer-events-none absolute -right-32 top-10 h-[440px] w-[440px] rounded-full opacity-50 blur-[130px]" style={{ background: "var(--color-violet-soft)" }} />
        <div className="relative mx-auto grid max-w-[1240px] gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mono text-[12px] tracking-[0.12em]" style={{ color: "var(--color-violet)" }}>FOR ORGANISATIONS</div>
            <h1 className="display mt-3 max-w-[18ch] text-[clamp(34px,5.2vw,64px)] font-bold leading-[1.0] tracking-[-0.03em] text-app">
              Bring world-class safety training to your workplace.
            </h1>
            <p className="mt-6 max-w-[50ch] text-[18px] leading-[1.6] text-2">
              We deliver flexible, innovative safety solutions on your site or ours — listening to your needs
              and tailoring every programme to your industry, your hazards, and your team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full px-7 py-3.5 text-[15px] font-semibold text-white" style={{ background: "var(--color-coral)" }}>Request a proposal</Link>
              <a href="https://wa.me/919585252099" className="rounded-full border bd bg-card px-7 py-3.5 text-[15px] font-medium text-app">Talk to our team</a>
            </div>
          </div>
          <div className="photo relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-30px_rgba(80,100,200,0.4)]">
            <Img src="https://www.zss.co.in/assets/images/about/3.jpg" alt="On-site industrial training" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,25,55,0.7), transparent 60%)" }} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-app py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mono text-[12px] tracking-[0.12em] text-3">WHAT WE OFFER</div>
          <h2 className="display mt-3 max-w-[22ch] text-[clamp(26px,3.6vw,44px)] font-bold leading-[1.1] tracking-[-0.03em] text-app">
            Everything your organisation needs to be safe and compliant.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([h, d], i) => (
              <div key={h} className="rounded-[22px] border bd bg-card p-7">
                <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: i % 3 === 0 ? "var(--color-sky)" : i % 3 === 1 ? "var(--color-violet)" : "var(--color-coral)" }}>
                  {i + 1}
                </div>
                <h3 className="display mt-5 text-[19px] font-bold text-app">{h}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-alt py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center">
            <div className="mono text-[12px] tracking-[0.12em] text-3">HOW IT WORKS</div>
            <h2 className="display mt-3 text-[clamp(26px,3.6vw,42px)] font-bold tracking-[-0.03em] text-app">A simple, tailored process</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([h, d], i) => (
              <div key={h} className="relative rounded-2xl border bd bg-card p-6">
                <div className="display text-[40px] font-bold leading-none" style={{ color: `color-mix(in srgb, var(--color-violet) 35%, var(--card))` }}>0{i + 1}</div>
                <h3 className="display mt-3 text-[18px] font-bold text-app">{h}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Clients />

      {/* CTA */}
      <section className="bg-app py-20 text-center">
        <div className="mx-auto max-w-[1240px] px-6">
          <h2 className="display mx-auto max-w-[22ch] text-[clamp(26px,4vw,46px)] font-bold tracking-[-0.03em] text-app">
            Let&apos;s build a safer workplace together.
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[16.5px] text-2">Tell us about your organisation and we&apos;ll put together a tailored proposal.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-full px-7 py-3.5 text-[15px] font-semibold text-white" style={{ background: "var(--color-coral)" }}>Request a proposal</Link>
            <a href="tel:9585252099" className="rounded-full border bd bg-card px-7 py-3.5 text-[15px] font-medium text-app">Call +91 958 525 2099</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
