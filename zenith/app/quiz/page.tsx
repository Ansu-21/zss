"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";

type Q = { q: string; options: string[]; answer: number };

const questions: Q[] = [
  { q: "What does the 'S' in HSE stand for?", options: ["Standard", "Safety", "System", "Site"], answer: 1 },
  { q: "What's the first step in fire safety when you spot a fire?", options: ["Run", "Raise the alarm", "Take a photo", "Open windows"], answer: 1 },
  { q: "Which document identifies workplace hazards and their risks?", options: ["Invoice", "HIRA / Risk Assessment", "Resume", "Timesheet"], answer: 1 },
  { q: "PPE stands for…", options: ["Personal Protective Equipment", "Public Power Energy", "Process Plant Engineering", "Primary Permit Entry"], answer: 0 },
  { q: "A 'confined space' permit is mainly about controlling…", options: ["Noise", "Atmosphere & entry risk", "Lighting", "Parking"], answer: 1 },
];

const prizes = [
  { label: "20% OFF", weight: 30, color: "#7C6CF0" },
  { label: "Free study kit", weight: 25, color: "#4F8FF0" },
  { label: "10% OFF", weight: 30, color: "#FF7A59" },
  { label: "Free 1:1 counselling", weight: 15, color: "#16A974" },
];

function makeCoupon(name: string) {
  const initials = name.trim().split(/\s+/).map((w) => w[0]?.toUpperCase() || "").join("").slice(0, 3) || "ZSS";
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `ZSS-${initials}-${rand}`;
}

export default function QuizPage() {
  const [stage, setStage] = useState<"intro" | "name" | "quiz" | "wheel" | "done" | "blocked">("intro");
  const [name, setName] = useState("");
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [coupon, setCoupon] = useState("");
  const [prize, setPrize] = useState<typeof prizes[number] | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [rot, setRot] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/quiz").then((r) => r.json()).then((d) => { if (d.played) setStage("blocked"); }).catch(() => {});
  }, []);

  const answer = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    const correct = i === questions[qi].answer;
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (qi < questions.length - 1) { setQi(qi + 1); setPicked(null); }
      else {
        const finalScore = score + (correct ? 1 : 0);
        if (finalScore >= 3) setStage("wheel");
        else {
          const c = makeCoupon(name);
          setCoupon(c);
          fetch("/api/quiz", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, score: finalScore, prize: "none", coupon: c }) }).catch(() => {});
          setStage("done");
        }
      }
    }, 700);
  };

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    // weighted pick
    const total = prizes.reduce((a, p) => a + p.weight, 0);
    let r = Math.random() * total, idx = 0;
    for (let i = 0; i < prizes.length; i++) { if (r < prizes[i].weight) { idx = i; break; } r -= prizes[i].weight; }
    const seg = 360 / prizes.length;
    const target = 360 * 5 + (360 - (idx * seg + seg / 2));
    setRot(target);
    setTimeout(() => {
      const c = makeCoupon(name);
      setPrize(prizes[idx]); setCoupon(c); setSpinning(false); setStage("done");
      fetch("/api/quiz", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, score: score, prize: prizes[idx].label, coupon: c }) }).catch(() => {});
    }, 4200);
  };


  return (
    <main>
      <section className="relative min-h-screen overflow-hidden pt-32 pb-20" style={{ background: "var(--bg-alt)" }}>
        <div className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full opacity-40 blur-[130px]" style={{ background: "var(--color-violet-soft)" }} />
        <div className="relative mx-auto max-w-[720px] px-6">

          {stage === "intro" && (
            <div className="text-center">
              <div className="mono text-[12px] tracking-[0.14em]" style={{ color: "var(--color-violet)" }}>SAFETY CHALLENGE</div>
              <h1 className="display mt-3 text-[clamp(32px,5vw,56px)] font-bold leading-[1.05] tracking-[-0.03em] text-app">Know your safety? Win a reward.</h1>
              <p className="mx-auto mt-5 max-w-[46ch] text-[16.5px] leading-relaxed text-2">5 quick questions. Score 3 or more and spin the wheel for a real discount or free perk — one try per person.</p>
              <button onClick={() => setStage("name")} className="mt-8 rounded-full px-8 py-4 text-[16px] font-semibold text-white transition-transform hover:-translate-y-0.5" style={{ background: "var(--color-coral)", boxShadow: "0 18px 40px -14px var(--color-coral)" }}>Start the challenge</button>
            </div>
          )}

          {stage === "blocked" && (
            <div className="rounded-[26px] border bd bg-card p-10 text-center">
              <div className="text-[40px]">🎯</div>
              <h1 className="display mt-3 text-[26px] font-bold text-app">You&apos;ve already played</h1>
              <p className="mx-auto mt-3 max-w-[40ch] text-[15px] text-2">The challenge is one try per person. Reach out on WhatsApp and our team will still help you find the right course.</p>
              <a href="https://wa.me/919585252099" className="mt-6 inline-block rounded-full px-6 py-3 text-[15px] font-semibold text-white" style={{ background: "var(--color-coral)" }}>Talk to us</a>
            </div>
          )}

          {stage === "name" && (
            <div className="mx-auto max-w-[440px] rounded-[26px] border bd bg-card p-8">
              <h2 className="display text-[24px] font-bold text-app">First, your name</h2>
              <p className="mt-2 text-[14px] text-2">Your reward coupon will be generated against this name.</p>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="mt-5 w-full rounded-xl border bd bg-app px-4 py-3.5 text-[16px] text-app outline-none focus:border-[var(--color-violet)]" />
              <button disabled={!name.trim()} onClick={() => setStage("quiz")} className="mt-4 w-full rounded-xl py-3.5 text-[16px] font-semibold text-white transition-opacity disabled:opacity-40" style={{ background: "var(--color-violet)" }}>Begin</button>
            </div>
          )}

          {stage === "quiz" && (
            <div>
              <div className="flex items-center justify-between text-[13px] text-2"><span>Question {qi + 1} of {questions.length}</span><span>Score: {score}</span></div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "var(--border)" }}>
                <div className="h-full rounded-full transition-all" style={{ width: `${((qi) / questions.length) * 100}%`, background: "var(--color-violet)" }} />
              </div>
              <h2 className="display mt-7 text-[clamp(22px,3.4vw,32px)] font-bold leading-snug tracking-[-0.02em] text-app">{questions[qi].q}</h2>
              <div className="mt-6 grid gap-3">
                {questions[qi].options.map((o, i) => {
                  const isAns = i === questions[qi].answer;
                  const show = picked !== null;
                  return (
                    <button key={o} onClick={() => answer(i)} disabled={picked !== null}
                      className="rounded-2xl border px-5 py-4 text-left text-[15px] font-medium transition-all"
                      style={{
                        background: show && isAns ? "color-mix(in srgb, var(--color-emerald) 16%, var(--card))" : show && i === picked ? "color-mix(in srgb, #E5577E 16%, var(--card))" : "var(--card)",
                        borderColor: show && isAns ? "var(--color-emerald)" : show && i === picked ? "#E5577E" : "var(--border)",
                        color: "var(--text)",
                      }}>
                      {o}{show && isAns ? "  ✓" : ""}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {stage === "wheel" && (
            <div className="text-center">
              <h2 className="display text-[clamp(26px,4vw,40px)] font-bold tracking-[-0.02em] text-app">Nice, {name.split(" ")[0]}! 🎉</h2>
              <p className="mt-3 text-[16px] text-2">You scored {score}/{questions.length}. Spin to claim your reward.</p>
              <div className="relative mx-auto mt-10 h-[300px] w-[300px]">
                {/* pointer */}
                <div className="absolute left-1/2 top-[-6px] z-10 -translate-x-1/2 text-[26px]" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,.3))" }}>▼</div>
                <div ref={wheelRef} className="h-full w-full rounded-full border-4 transition-transform duration-[4000ms] ease-out" style={{ borderColor: "var(--card)", transform: `rotate(${rot}deg)`, background: `conic-gradient(${prizes.map((p, i) => `${p.color} ${(i / prizes.length) * 360}deg ${((i + 1) / prizes.length) * 360}deg`).join(", ")})`, boxShadow: "0 20px 50px -20px rgba(80,100,200,0.5)" }}>
                  {prizes.map((p, i) => {
                    const a = (i / prizes.length) * 360 + 360 / prizes.length / 2;
                    return (
                      <div key={p.label} className="absolute left-1/2 top-1/2 origin-left text-[12px] font-bold text-white" style={{ transform: `rotate(${a}deg) translateX(36px)` }}>{p.label}</div>
                    );
                  })}
                </div>
                <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 text-[11px] font-bold text-app" style={{ background: "var(--card)", borderColor: "var(--border)" }}>SPIN</div>
              </div>
              <button onClick={spin} disabled={spinning} className="mt-8 rounded-full px-8 py-4 text-[16px] font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60" style={{ background: "var(--color-coral)" }}>{spinning ? "Spinning…" : "Spin the wheel"}</button>
            </div>
          )}

          {stage === "done" && (
            <div className="rounded-[26px] border bd bg-card p-10 text-center">
              {prize ? (
                <>
                  <div className="text-[44px]">🎁</div>
                  <h2 className="display mt-3 text-[28px] font-bold text-app">You won: {prize.label}</h2>
                  <p className="mt-2 text-[15px] text-2">Show this coupon code when you enrol to claim it.</p>
                  <div className="mx-auto mt-6 w-fit rounded-2xl border-2 border-dashed px-8 py-5" style={{ borderColor: "var(--color-violet)", background: "var(--color-violet-soft)" }}>
                    <div className="mono text-[12px] tracking-[0.1em] text-3">YOUR UNIQUE COUPON</div>
                    <div className="display mt-1 text-[26px] font-bold tracking-[0.05em]" style={{ color: "var(--color-violet)" }}>{coupon}</div>
                  </div>
                  <a href={`https://wa.me/919585252099?text=${encodeURIComponent(`Hi! I won "${prize.label}" on the Zenith safety quiz. My coupon is ${coupon} (name: ${name}).`)}`} className="mt-7 inline-block rounded-full px-7 py-3.5 text-[15px] font-semibold text-white" style={{ background: "#25D366" }}>Claim on WhatsApp</a>
                </>
              ) : (
                <>
                  <div className="text-[40px]">💪</div>
                  <h2 className="display mt-3 text-[26px] font-bold text-app">Good try, {name.split(" ")[0]}!</h2>
                  <p className="mx-auto mt-3 max-w-[40ch] text-[15px] text-2">You scored {score}/{questions.length}. You didn&apos;t hit the reward threshold this time — but our advisors would love to help you start the real thing.</p>
                  <a href="https://wa.me/919585252099" className="mt-5 inline-block rounded-full px-7 py-3.5 text-[15px] font-semibold text-white" style={{ background: "var(--color-coral)" }}>Talk to an advisor</a>
                </>
              )}
            </div>
          )}

        </div>
      </section>
      <Footer />
    </main>
  );
}
