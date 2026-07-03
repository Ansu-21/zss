"use client";

import { useEffect, useRef, useState } from "react";
import Mascot from "./Mascot";

type Msg = { from: "bot" | "user"; text: string };

const interestOptions = [
  "Diploma course",
  "International (IOSH/OSHA/ISO)",
  "Gulf placement",
  "Corporate / on-site training",
  "Just exploring",
];

export default function ContactDock() {
  const [open, setOpen] = useState(false);      // FAB expanded (quick actions)
  const [chat, setChat] = useState(false);      // chat panel open
  const [step, setStep] = useState(0);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi there! 👋 I'm Zen, your safety guide. I'll help you find the right course in under a minute. What's your name?" },
  ]);
  const [data, setData] = useState({ name: "", interest: "", looking: "", whatsapp: "" });
  const [input, setInput] = useState("");
  const [sent, setSent] = useState(false);
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, chat, typing]);

  const push = (m: Msg) => setMsgs((p) => [...p, m]);

  // bot replies after a short "typing" beat for a lively feel
  const botReply = (text: string, after: () => void, delay = 850) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      push({ from: "bot", text });
      after();
    }, delay);
  };

  const submitName = () => {
    if (!input.trim()) return;
    const name = input.trim();
    push({ from: "user", text: name });
    setData((d) => ({ ...d, name }));
    setInput("");
    botReply(`Nice to meet you, ${name.split(" ")[0]}! 🙌 What are you most interested in?`, () => setStep(1));
  };

  const pickInterest = (interest: string) => {
    push({ from: "user", text: interest });
    setData((d) => ({ ...d, interest }));
    botReply("Great choice! In a line or two — what are you hoping to achieve?", () => setStep(2));
  };

  const submitLooking = () => {
    if (!input.trim()) return;
    const looking = input.trim();
    push({ from: "user", text: looking });
    setData((d) => ({ ...d, looking }));
    setInput("");
    botReply("Perfect. Last thing — your WhatsApp number so an advisor can reach you?", () => setStep(3));
  };

  const submitWhatsapp = () => {
    if (!input.trim()) return;
    const whatsapp = input.trim();
    push({ from: "user", text: whatsapp });
    const payload = { ...data, whatsapp, source: "chat-widget", capturedAt: new Date().toISOString() };
    setData((d) => ({ ...d, whatsapp }));
    setInput("");
    fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }).catch(() => {});
    botReply("Thank you! 🎉 A Zenith advisor will message you on WhatsApp shortly. You can also reach us right now below.", () => { setStep(4); setSent(true); }, 950);
  };

  const mood: "happy" | "talking" | "thinking" | "celebrate" = sent ? "celebrate" : typing ? "talking" : "happy";

  return (
    <>
      {/* CHAT PANEL */}
      <div
        className={`fixed bottom-[164px] right-5 z-[120] w-[min(380px,calc(100vw-2.5rem))] origin-bottom-right transition-all duration-300 sm:right-6 lg:bottom-24 ${chat ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}
      >
        <div className="flex h-[520px] max-h-[calc(100vh-7rem)] flex-col overflow-hidden rounded-[24px] border bd shadow-[0_30px_80px_-24px_rgba(20,30,60,0.45)]" style={{ background: "var(--card)" }}>
          {/* header */}
          <div className="flex items-center gap-3 px-5 py-4 text-white" style={{ background: "linear-gradient(135deg, var(--color-sky), var(--color-violet))" }}>
            <div className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
              <Mascot mood={mood} size={34} />
            </div>
            <div className="flex-1">
              <div className="text-[15px] font-semibold">Zen · your safety guide</div>
              <div className="flex items-center gap-1.5 text-[12px] text-white/85"><span className="h-1.5 w-1.5 rounded-full bg-[#5EE6A8]" /> Online · replies on WhatsApp</div>
            </div>
            <button onClick={() => setChat(false)} aria-label="Close chat" className="grid h-8 w-8 place-items-center rounded-full bg-white/15 hover:bg-white/25">✕</button>
          </div>

          {/* messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" style={{ background: "var(--bg)" }}>
            {msgs.map((m, i) => (
              <div key={i} className={`flex items-end gap-2 ${m.from === "user" ? "justify-end" : "justify-start"}`} style={{ animation: "chatIn .35s ease" }}>
                {m.from === "bot" && <div className="mb-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full" style={{ background: "color-mix(in srgb, var(--color-violet) 14%, var(--card))" }}><Mascot mood="happy" size={22} /></div>}
                <div
                  className="max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-snug"
                  style={m.from === "user"
                    ? { background: "var(--color-violet)", color: "#fff", borderBottomRightRadius: 4 }
                    : { background: "var(--card)", color: "var(--text)", border: "1px solid var(--border)", borderBottomLeftRadius: 4 }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-end gap-2" style={{ animation: "chatIn .3s ease" }}>
                <div className="mb-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full" style={{ background: "color-mix(in srgb, var(--color-violet) 14%, var(--card))" }}><Mascot mood="talking" size={22} /></div>
                <div className="flex items-center gap-1 rounded-2xl border bd px-3.5 py-3" style={{ background: "var(--card)", borderBottomLeftRadius: 4 }}>
                  {[0, 1, 2].map((d) => <span key={d} className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--text-3)", animation: `dotPulse 1.2s ease-in-out ${d * 0.15}s infinite` }} />)}
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {interestOptions.map((o) => (
                  <button key={o} onClick={() => pickInterest(o)} className="rounded-full border bd px-3 py-1.5 text-[13px] text-app transition-colors hover:border-[var(--color-violet)]" style={{ background: "var(--card)" }}>{o}</button>
                ))}
              </div>
            )}
            {sent && (
              <div className="flex flex-wrap gap-2 pt-1">
                <a href="https://wa.me/919585252099" className="rounded-full px-3.5 py-2 text-[13px] font-medium text-white" style={{ background: "#25D366" }}>WhatsApp now</a>
                <a href="tel:9585252099" className="rounded-full border bd px-3.5 py-2 text-[13px] font-medium text-app" style={{ background: "var(--card)" }}>Call us</a>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* input */}
          {step !== 1 && step !== 4 && (
            <div className="flex items-center gap-2 border-t bd p-3" style={{ background: "var(--card)" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { step === 0 ? submitName() : step === 2 ? submitLooking() : submitWhatsapp(); } }}
                placeholder={step === 0 ? "Type your name…" : step === 2 ? "What you're looking for…" : "Your WhatsApp number…"}
                inputMode={step === 3 ? "tel" : "text"}
                className="flex-1 rounded-full border bd px-4 py-2.5 text-[14px] text-app outline-none focus:border-[var(--color-violet)]"
                style={{ background: "var(--bg)" }}
              />
              <button
                onClick={() => step === 0 ? submitName() : step === 2 ? submitLooking() : submitWhatsapp()}
                aria-label="Send"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white"
                style={{ background: "var(--color-violet)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* QUICK ACTIONS (FAB expanded) */}
      <div className={`fixed bottom-[164px] right-5 z-[110] flex flex-col items-end gap-2.5 transition-all duration-300 sm:right-6 lg:bottom-24 ${open && !chat ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}>
        {[
          ["Start a chat", "💬", () => { setChat(true); setOpen(false); }, "var(--color-violet)"],
          ["WhatsApp", "🟢", () => { window.location.href = "https://wa.me/919585252099"; }, "#25D366"],
          ["Call us", "📞", () => { window.location.href = "tel:9585252099"; }, "var(--color-sky)"],
        ].map(([label, icon, fn, bg]) => (
          <button key={label as string} onClick={fn as () => void} className="flex items-center gap-2.5 rounded-full border bd py-2 pl-3 pr-2 text-[14px] font-medium text-app shadow-lg transition-transform hover:-translate-x-0.5" style={{ background: "var(--card)" }}>
            {label as string}
            <span className="grid h-9 w-9 place-items-center rounded-full text-[16px]" style={{ background: bg as string }}>{icon as string}</span>
          </button>
        ))}
      </div>

      {/* FAB */}
      <button
        onClick={() => { if (chat) { setChat(false); } else { setOpen((v) => !v); } }}
        aria-label="Contact us"
        className="fixed bottom-[88px] right-5 z-[130] grid h-16 w-16 place-items-center rounded-full text-white shadow-[0_16px_40px_-10px_rgba(124,108,240,0.6)] transition-transform hover:scale-105 sm:right-6 lg:bottom-5"
        style={{ background: "linear-gradient(135deg, var(--color-sky), var(--color-violet))" }}
      >
        {/* pulse ring */}
        <span className="absolute inset-0 rounded-full" style={{ background: "var(--color-violet)", animation: "fabPulse 2.4s ease-out infinite", opacity: 0.5 }} />
        <span className="relative">
          {open || chat ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          ) : (
            <Mascot mood="happy" size={40} />
          )}
        </span>
      </button>

      <style>{`
        @keyframes fabPulse{0%{transform:scale(1);opacity:.5}70%{transform:scale(1.6);opacity:0}100%{opacity:0}}
        @keyframes chatIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
        @keyframes dotPulse{0%,60%,100%{opacity:.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-2px)}}
      `}</style>
    </>
  );
}
