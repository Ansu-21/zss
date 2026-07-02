"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveLead, getViewed } from "@/lib/lead";
import { courses } from "@/data/courses";

const steps = [
  { key: "education", q: "Where do you stand today?", opts: ["10th / 12th", "ITI", "Diploma", "Engineering / Degree"] },
  { key: "experience", q: "How much work experience?", opts: ["Fresher", "0–2 years", "2–5 years", "5+ years"] },
  { key: "interest", q: "What pulls you most?", opts: ["Fire & Safety", "Industrial / Oil & Gas", "Construction", "Not sure yet"] },
  { key: "gulf", q: "Are you open to working abroad?", opts: ["Yes, that's the goal", "Maybe later", "India only"] },
] as const;

function scoreAndRecommend(a: Record<string, string>) {
  let s = 55;
  if (a.education?.includes("Engineering")) s += 12;
  else if (a.education === "Diploma") s += 8;
  if (a.experience === "5+ years") s += 14;
  else if (a.experience === "2–5 years") s += 9;
  else if (a.experience === "0–2 years") s += 5;
  const gulf = a.gulf === "Yes, that's the goal";
  if (gulf) s += 12;
  else if (a.gulf === "Maybe later") s += 5;
  if (a.interest && a.interest !== "Not sure yet") s += 5;
  s = Math.min(98, s);

  let recs: string[] = [];
  if (gulf) recs = ["iosh-managing-safely", "osha-30-construction", "diploma-oil-gas-safety"];
  else if (a.education?.includes("Engineering")) recs = ["othm-level-6", "iosh-managing-safely", "iso-45001"];
  else if (a.interest === "Construction") recs = ["diploma-construction-safety", "osha-30-construction", "cert-scaffolding-inspector"];
  else if (a.interest === "Fire & Safety") recs = ["diploma-fire-safety", "iosh-managing-safely", "cert-fire-technician"];
  else recs = ["diploma-industrial-safety", "iosh-managing-safely", "osha-30-general"];
  return { score: s, recs, gulf };
}

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", whatsapp: "", email: "" });

  const inQuiz = step < steps.length;
  const pick = (v: string) => {
    setAns({ ...ans, [steps[step].key]: v });
    setStep(step + 1);
  };

  const submit = () => {
    const { score, recs, gulf } = scoreAndRecommend(ans);
    saveLead({
      name: form.name,
      whatsapp: form.whatsapp,
      email: form.email,
      education: ans.education || "",
      experience: ans.experience || "",
      interest: ans.interest || "",
      gulfInterest: gulf,
      careerScore: score,
      recommendedCourses: recs,
    });
    router.push("/report");
  };

  return (
    <main className="mx-auto flex min-h-[calc(100vh-58px)] max-w-[560px] flex-col justify-center px-6 py-16">
      <div className="text-[13px] text-3">{inQuiz ? `Question ${step + 1} of ${steps.length}` : "Last step"}</div>
      <div className="mt-3 h-1 rounded-full bg-alt">
        <div className="h-full rounded-full transition-all" style={{ background: "var(--color-violet)", width: `${(Math.min(step, steps.length) / steps.length) * 100}%` }} />
      </div>

      {inQuiz ? (
        <div className="mt-10">
          <h1 className="text-[clamp(26px,4vw,38px)] font-semibold tracking-[-0.03em]">{steps[step].q}</h1>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {steps[step].opts.map((o) => (
              <button key={o} onClick={() => pick(o)} className="rounded-xl border bd bg-card px-5 py-4 text-left text-[16px] transition-all hover:-translate-y-0.5 hover:border-[var(--color-violet)]">
                {o}
              </button>
            ))}
          </div>
          {step > 0 && <button onClick={() => setStep(step - 1)} className="mt-6 text-[14px] text-3 hover:text-app">← Back</button>}
        </div>
      ) : (
        <div className="mt-10">
          <h1 className="text-[clamp(26px,4vw,38px)] font-semibold tracking-[-0.03em]">Where should we send your report?</h1>
          <p className="mt-3 text-[16px] text-2">Your career score is ready. Tell us where to reach you and we&apos;ll unlock it — plus a real person will follow up on WhatsApp, not a bot.</p>
          <div className="mt-7 space-y-3">
            <input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border bd bg-card px-4 py-3.5 text-[16px] text-app outline-none focus:border-[var(--color-violet)]" />
            <input placeholder="WhatsApp number" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className="w-full rounded-xl border bd bg-card px-4 py-3.5 text-[16px] text-app outline-none focus:border-[var(--color-violet)]" />
            <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border bd bg-card px-4 py-3.5 text-[16px] text-app outline-none focus:border-[var(--color-violet)]" />
            <button onClick={submit} disabled={!form.name || !form.whatsapp} className="w-full rounded-xl py-4 text-[16px] font-medium text-white transition-opacity disabled:opacity-40" style={{background:"var(--color-coral)"}}>
              Unlock my career report →
            </button>
            <p className="text-center text-[12px] text-3">We&apos;ll never share your details. {getViewed().length > 0 && `We'll also note the ${getViewed().length} course${getViewed().length > 1 ? "s" : ""} you explored so your advisor is prepared.`}</p>
          </div>
        </div>
      )}
    </main>
  );
}
