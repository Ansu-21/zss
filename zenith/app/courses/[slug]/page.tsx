import { courses, getCourse } from "@/data/courses";
import { notFound } from "next/navigation";
import Link from "next/link";
import CourseTracker from "@/components/CourseTracker";
import Img from "@/components/Img";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) return {};
  return {
    title: `${c.title} — Course, Careers & Salary | Zenith Safety Solutions`,
    description: `${c.title} in Trichy. ${c.short} Careers: ${c.outcomes.join(", ")}. Eligibility, duration, certification and placement support.`,
    alternates: { canonical: `/courses/${slug}` },
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) notFound();

  const related = c.related.map(getCourse).filter(Boolean);
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.title,
    description: c.blurb,
    url: `https://zss.co.in/courses/${c.slug}`,
    provider: { "@type": "EducationalOrganization", name: "Zenith Safety Solutions", sameAs: "https://zss.co.in" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: c.mode.toLowerCase().includes("online") ? ["online", "onsite"] : ["onsite"],
      location: { "@type": "Place", name: "Zenith Safety Solutions, Trichy", address: "Trichy, Tamil Nadu, India" },
    },
    occupationalCredentialAwarded: c.level || c.title,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zss.co.in/" },
      { "@type": "ListItem", position: 2, name: "Courses", item: "https://zss.co.in/courses" },
      { "@type": "ListItem", position: 3, name: c.title, item: `https://zss.co.in/courses/${c.slug}` },
    ],
  };
  const faqSchema = c.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <main className="mx-auto max-w-[1180px] px-6 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <CourseTracker slug={c.slug} />

      {/* breadcrumb */}
      <div className="pt-8 text-[13px] text-3">
        <Link href="/courses" className="hover:text-app">Courses</Link> <span className="mx-1.5">/</span>
        <span className="capitalize">{c.track}</span> <span className="mx-1.5">/</span> {c.title}
      </div>

      {/* HERO */}
      <section className="grid gap-10 pt-8 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2">
            {c.gulf && <span className="rounded-full bg-[var(--color-violet-soft)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-violet)]">Strong Gulf demand</span>}
            <span className="mono text-[12px] text-3">{c.level || c.track.toUpperCase()}</span>
          </div>
          <h1 className="text-[clamp(32px,5vw,58px)] font-semibold leading-[1] tracking-[-0.04em]">{c.title}</h1>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex" aria-label="Rated 4.9 out of 5">
              {[0, 1, 2, 3, 4].map((s) => (
                <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={s < 5 ? "#F5A524" : "none"} stroke="#F5A524" strokeWidth="1.5">
                  <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21l1.4-6.8L2.2 9.5l6.9-.8L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-[14px] font-medium text-app">4.9</span>
            <span className="text-[13px] text-2">· trusted by students across India &amp; the Gulf</span>
          </div>
          <p className="mt-5 max-w-[50ch] text-[18px] leading-[1.55] text-2">{c.blurb}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/login" className="rounded-full px-7 py-3.5 text-[15px] font-medium text-white transition-transform hover:-translate-y-px" style={{background:"var(--color-coral)"}}>Apply / get details</Link>
            <a href="https://wa.me/919585252099" className="rounded-full border bd px-6 py-3.5 text-[15px] font-medium transition-colors hover:bd">Ask on WhatsApp</a>
          </div>
        </div>
        {/* image placeholder — set c.image in data/courses.ts to render a photo */}
        <div className="aspect-[4/3] overflow-hidden rounded-2xl border bd bg-alt">
          {c.image ? (
            <Img src={c.image} alt={`${c.title} training at Zenith`} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-[13px] text-3">Course image</div>
          )}
        </div>
      </section>

      {/* FACT STRIP */}
      <section className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bd bg-[var(--border)] md:grid-cols-4">
        {[
          ["Duration", c.duration],
          ["Mode", c.mode],
          ["Salary range*", `₹${c.salaryLow}–${c.salaryHigh} LPA`],
          ["Industry demand", c.demand],
        ].map(([k, v]) => (
          <div key={k} className="bg-card p-6">
            <div className="text-[12px] uppercase tracking-[0.06em] text-3">{k}</div>
            <div className="mt-1.5 text-[19px] font-semibold tracking-[-0.02em]">{v}</div>
          </div>
        ))}
      </section>

      {/* BODY GRID */}
      <section className="mt-14 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-[24px] font-semibold tracking-[-0.03em]">What you&apos;ll learn</h2>
          <ul className="mt-4 space-y-2.5">
            {c.curriculum.map((x) => (
              <li key={x} className="flex gap-3 text-[16px] text-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-sky)]" />{x}</li>
            ))}
          </ul>

          <h2 className="mt-12 text-[24px] font-semibold tracking-[-0.03em]">Where it takes you</h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {c.outcomes.map((o) => (
              <span key={o} className="rounded-full border bd bg-card px-4 py-2 text-[14px]">{o}</span>
            ))}
          </div>

          <h2 className="mt-12 text-[24px] font-semibold tracking-[-0.03em]">Questions students ask</h2>
          <div className="mt-4 divide-y divide-line border-y bd">
            {c.faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between text-[16px] font-medium">{f.q}<span className="text-3 transition-transform group-open:rotate-45">+</span></summary>
                <p className="mt-2.5 max-w-[55ch] text-[15px] text-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* SIDEBAR: eligibility + Zenith's suggestion */}
        <aside className="space-y-5">
          <div className="rounded-2xl border bd bg-card p-6">
            <div className="text-[12px] uppercase tracking-[0.06em] text-3">Who it&apos;s for</div>
            <p className="mt-2 text-[15px] text-2">{c.eligibility}</p>
          </div>
          <div className="rounded-2xl border border-[var(--color-violet)]/30 bg-[var(--color-violet-soft)] p-6">
            <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--color-violet)]">Zenith&apos;s honest take</div>
            <p className="mt-2 text-[15px] text-2">
              {c.gulf
                ? "If the Gulf is your goal, this is one of the credentials employers there actually name. Pair it with a placement conversation early — that's where the real difference is made."
                : "A solid foundation. On its own it opens doors in India; stack an international certification on top when you're ready to look abroad."}
            </p>
            <Link href="/login" className="mt-4 inline-block rounded-full px-5 py-2.5 text-[14px] font-medium text-white" style={{background:"var(--color-coral)"}}>Get my personal plan</Link>
          </div>
        </aside>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-5 text-[22px] font-semibold tracking-[-0.03em]">People also look at</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((r) => r && (
              <Link key={r.slug} href={`/courses/${r.slug}`} className="rounded-2xl border bd bg-card p-5 transition-all hover:-translate-y-0.5 hover:bd">
                <h3 className="text-[17px] font-semibold tracking-[-0.02em]">{r.title}</h3>
                <p className="mt-1.5 text-[13px] text-2">{r.short}</p>
                <div className="mono mt-2 text-[12px] text-[var(--color-emerald)]">↑ ₹{r.salaryLow}–{r.salaryHigh} LPA</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="mt-12 text-[12px] text-3">*Salary ranges are illustrative guidance, not a guarantee. Actual outcomes depend on experience, location and effort.</p>
    </main>
  );
}
