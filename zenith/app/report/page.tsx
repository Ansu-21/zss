"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getLead, type Lead } from "@/lib/lead";
import { getCourse } from "@/data/courses";

export default function ReportPage() {
  const [lead, setLead] = useState<Lead | null>(null);
  useEffect(() => { setLead(getLead()); }, []);

  if (!lead) {
    return (
      <main className="mx-auto max-w-[560px] px-6 py-24 text-center">
        <h1 className="text-[28px] font-semibold tracking-[-0.03em]">No report yet</h1>
        <p className="mt-3 text-2">Answer a few quick questions and we&apos;ll build your career report.</p>
        <Link href="/login" className="mt-6 inline-block rounded-full px-6 py-3 text-[15px] font-medium text-white" style={{background:"var(--color-coral)"}}>Start now</Link>
      </main>
    );
  }

  const recs = lead.recommendedCourses.map(getCourse).filter(Boolean);
  const first = lead.name.split(" ")[0];

  return (
    <main className="mx-auto max-w-[760px] px-6 py-16">
      <div className="text-[13px] uppercase tracking-[0.1em] text-[var(--color-emerald)]">Report unlocked</div>
      <h1 className="mt-3 text-[clamp(30px,5vw,48px)] font-semibold tracking-[-0.04em]">
        {first}, your career score is <span className="text-[var(--color-emerald)]">{lead.careerScore}</span><span className="text-3">/100</span>
      </h1>
      <p className="mt-4 max-w-[52ch] text-[18px] text-2">
        That&apos;s a {lead.careerScore >= 75 ? "strong" : lead.careerScore >= 60 ? "promising" : "workable"} starting position. Here&apos;s the route we&apos;d map for someone in your situation{lead.gulfInterest ? ", aimed at the Gulf" : ""}.
      </p>

      <h2 className="mt-12 text-[22px] font-semibold tracking-[-0.03em]">Your recommended path</h2>
      <div className="mt-4 space-y-3">
        {recs.map((c, i) => c && (
          <Link key={c.slug} href={`/courses/${c.slug}`} className="flex items-center gap-5 rounded-2xl border bd bg-card p-5 transition-all hover:-translate-y-0.5 hover:bd">
            <div className="mono text-[15px] text-3">0{i + 1}</div>
            <div className="flex-1">
              <h3 className="text-[18px] font-semibold tracking-[-0.02em]">{c.title}</h3>
              <p className="text-[14px] text-2">{c.short}</p>
            </div>
            <div className="mono text-[13px] text-[var(--color-emerald)]">↑ ₹{c.salaryLow}–{c.salaryHigh}L</div>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-alt p-7">
        <h2 className="text-[20px] font-semibold tracking-[-0.03em]">What happens next</h2>
        <p className="mt-3 max-w-[55ch] text-[16px] text-2">
          A Zenith advisor will message you on WhatsApp ({lead.whatsapp}) — not to sell, but to check this plan actually fits your situation, and to answer the questions a web page can&apos;t.
        </p>
        <a href="https://wa.me/919585252099" className="mt-5 inline-block rounded-full px-6 py-3 text-[15px] font-medium text-white" style={{background:"var(--color-coral)"}}>Start the conversation now</a>
      </div>

      {/* What Zenith receives — transparency + demo of the data flow */}
      <details className="mt-10 rounded-2xl border bd bg-card p-6">
        <summary className="cursor-pointer text-[14px] font-medium text-2">What we just shared with your advisor</summary>
        <pre className="mono mt-4 overflow-x-auto rounded-xl p-4 text-[12px] leading-relaxed text-white" style={{background:"#16203A"}}>{JSON.stringify(
          {
            name: lead.name,
            whatsapp: lead.whatsapp,
            email: lead.email,
            education: lead.education,
            experience: lead.experience,
            interest: lead.interest,
            gulfInterest: lead.gulfInterest,
            careerScore: lead.careerScore,
            recommendedCourses: lead.recommendedCourses,
            viewedCourses: lead.viewedCourses,
            capturedAt: lead.capturedAt,
          },
          null,
          2
        )}</pre>
      </details>
    </main>
  );
}
