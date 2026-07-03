import Link from "next/link";

// Homepage FAQ — the questions counsellors actually get asked, answered
// honestly. Rendered with native <details> so it works without JS, and
// mirrored as FAQPage structured data for search.
const faqs = [
  {
    q: "Who can join a safety course at Zenith?",
    a: "Almost anyone. Diplomas and certificates are open to 10th/12th pass, ITI, diploma and degree holders. International courses like IOSH Managing Safely have no prerequisite at all — they're designed as entry points.",
  },
  {
    q: "Are the courses online or classroom?",
    a: "Both. Every program is available online or at our Trichy campus — choose whichever fits your schedule. Practical sessions and drills happen hands-on.",
  },
  {
    q: "Are your certifications recognised in the Gulf?",
    a: "Yes. IOSH, OSHA, OTHM and ISO credentials are recognised across the UAE, Qatar, Saudi Arabia, Oman and Kuwait, and are frequently named directly in Gulf job postings. Our diplomas are NSDI-accredited in India.",
  },
  {
    q: "How long do the courses take?",
    a: "Certificates run 1–4 days, diplomas take one month, and IOSH Managing Safely is just 3 days. Degree-level programs like OTHM Level 6 run longer — we'll map the timeline in your counselling session.",
  },
  {
    q: "Do you actually help with placement?",
    a: "Yes — and it doesn't stop at the certificate. Our team works on résumés, interview preparation and placement guidance across India and the Gulf until you're employed. It's the part of the service students value most.",
  },
  {
    q: "What does a course cost?",
    a: "Fees vary by course and mode. Talk to an advisor for the exact figure — counselling is free — and use our fee & EMI planner to see what a monthly payment would look like before you commit.",
  },
  {
    q: "Which course should I start with?",
    a: "If the Gulf is your goal, IOSH Managing Safely is the credential employers there ask for by name. Starting from scratch in India, the one-month Diploma in Industrial Safety is the classic first step. Our free career report will tell you which fits you.",
  },
  {
    q: "Where is Zenith Safety Solutions located?",
    a: "1st Floor, Canara Bank ATM Upstairs, Pudukottai Main Road, Subramaniapuram, Trichy – 620020, Tamil Nadu. We've trained safety professionals here since 2013 — and online, everywhere.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="bg-app py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal>
          <div className="mono text-[12px] tracking-[0.12em] text-3">STRAIGHT ANSWERS</div>
          <h2 className="display mt-3 max-w-[16ch] text-[clamp(28px,4.2vw,46px)] font-bold leading-[1.06] tracking-[-0.03em] text-app">
            The questions everyone asks before joining.
          </h2>
          <p className="mt-5 max-w-[42ch] text-[16.5px] leading-relaxed text-2">
            If yours isn&apos;t here, ask a human — an advisor replies on WhatsApp within minutes during working hours.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://wa.me/919585252099?text=Hi%20Zenith%2C%20I%20have%20a%20question%20about%20your%20courses."
              className="rounded-full px-6 py-3 text-[14.5px] font-semibold text-white transition-transform hover:-translate-y-px"
              style={{ background: "var(--color-coral)", boxShadow: "0 14px 30px -12px var(--color-coral)" }}
            >
              Ask on WhatsApp
            </a>
            <Link href="/contact" className="rounded-full border bd bg-card px-6 py-3 text-[14.5px] font-medium text-app transition-colors hover:border-[var(--color-violet)]">
              Contact us
            </Link>
          </div>
        </div>

        <div className="divide-y bd border-y" data-reveal>
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16.5px] font-semibold text-app">
                {f.q}
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border bd text-[14px] text-3 transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
