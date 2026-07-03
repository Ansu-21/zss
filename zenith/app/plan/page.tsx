import Link from "next/link";
import PlanTools from "@/components/PlanTools";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Fees, EMI & Eligibility — Plan Your Safety Course | Zenith Safety Solutions",
  description:
    "Check your eligibility, plan course fees with monthly instalments, and compare IOSH, OSHA, OTHM, ISO and diploma safety courses side by side. Free counselling in Trichy and online.",
  alternates: { canonical: "/plan" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://zss.co.in/" },
    { "@type": "ListItem", position: 2, name: "Plan your admission", item: "https://zss.co.in/plan" },
  ],
};

export default function PlanPage() {
  return (
    <>
      <main className="mx-auto max-w-[1080px] px-6 pb-24 pt-32">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

        <nav aria-label="Breadcrumb" className="text-[13px] text-3">
          <Link href="/" className="hover:text-app">Home</Link> <span className="mx-1.5">/</span> Plan your admission
        </nav>

        <header className="mt-6 max-w-[680px]">
          <div className="mono text-[12px] tracking-[0.12em]" style={{ color: "var(--color-violet)" }}>PLAN YOUR ADMISSION</div>
          <h1 className="display mt-3 text-[clamp(32px,5vw,56px)] font-bold leading-[1.04] tracking-[-0.03em] text-app">
            Eligibility, fees and the honest comparison — in two minutes.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-2">
            Three small tools, zero friction. Answer nothing you don&apos;t want to, get numbers you can
            actually plan around, and talk to a human only when you&apos;re ready.
          </p>
        </header>

        <div className="mt-12">
          <PlanTools />
        </div>

        <section className="mt-14 rounded-[26px] border bd p-9 text-center" style={{ background: "linear-gradient(135deg, var(--color-violet-soft), var(--color-sky-soft))" }} data-reveal>
          <h2 className="display mx-auto max-w-[24ch] text-[clamp(22px,3vw,32px)] font-bold tracking-[-0.02em] text-app">
            Numbers are a start. A plan is better.
          </h2>
          <p className="mx-auto mt-3 max-w-[46ch] text-[15px] text-2">
            Get your free personalised career report — course, timeline, salary trajectory and the route to the Gulf if that&apos;s your goal.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/login" className="rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5" style={{ background: "var(--color-coral)", boxShadow: "0 18px 40px -14px var(--color-coral)" }}>
              Get my free career report
            </Link>
            <a href="https://wa.me/919585252099" className="rounded-full border bd bg-card px-6 py-3.5 text-[15px] font-medium text-app transition-colors hover:border-[var(--color-violet)]">
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
