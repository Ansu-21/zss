"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = () => {
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        source: "contact-page",
        capturedAt: new Date().toISOString(),
      }),
    }).catch(() => {});
    setSent(true);
  };

  return (
    <main>
      <section className="hero-wash relative overflow-hidden pt-36 pb-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-[400px] w-[400px] rounded-full opacity-60 blur-[130px]" style={{ background: "var(--color-sky-soft)" }} />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <div className="mono text-[12px] tracking-[0.12em] text-3">CONTACT US</div>
          <h1 className="display mt-3 max-w-[18ch] text-[clamp(34px,5.4vw,64px)] font-bold leading-[1.0] tracking-[-0.03em] text-app">
            Let&apos;s talk about your safety career.
          </h1>
          <p className="mt-5 max-w-[52ch] text-[18px] leading-[1.6] text-2">
            Call, message, or send an enquiry — a real person will get back to you, usually on WhatsApp.
          </p>
        </div>
      </section>

      <section className="bg-app py-16">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
          {/* details */}
          <div className="space-y-5">
            {[
              ["Visit us", "1st Floor, Canara Bank ATM Upstairs, Pudukottai Main Road, Subramaniapuram, Trichy – 620020", null],
              ["Call us", "+91 958 525 2099", "tel:9585252099"],
              ["Landline", "0431-2962580", "tel:04312962580"],
              ["Email", "info@zss.co.in", "mailto:info@zss.co.in"],
            ].map(([label, value, href]) => (
              <div key={label as string} className="rounded-2xl border bd bg-card p-6">
                <div className="mono text-[12px] tracking-[0.08em] text-3">{(label as string).toUpperCase()}</div>
                {href ? (
                  <a href={href as string} className="mt-1.5 block text-[17px] font-medium text-app hover:underline">{value}</a>
                ) : (
                  <p className="mt-1.5 text-[16px] leading-relaxed text-2">{value}</p>
                )}
              </div>
            ))}
            <div className="overflow-hidden rounded-2xl border bd">
              <iframe
                title="Zenith Safety Solutions location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3324567822824!2d78.69683111534755!3d10.785829061968103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5b8bfe3963f%3A0x4474a22e296bc653!2szenith%20safety%20solutions!5e0!3m2!1sen!2sin!4v1669883311717!5m2!1sen!2sin"
                width="100%" height="240" loading="lazy" style={{ border: 0 }}
              />
            </div>
          </div>

          {/* form */}
          <div className="rounded-[24px] border bd bg-card p-8">
            {!sent ? (
              <>
                <h2 className="display text-[24px] font-bold tracking-[-0.02em] text-app">Send an enquiry</h2>
                <p className="mt-2 text-[14.5px] text-2">Tell us what you&apos;re looking for and we&apos;ll guide you to the right course.</p>
                <div className="mt-6 space-y-3">
                  <input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border bd bg-app px-4 py-3.5 text-[16px] text-app outline-none focus:border-[var(--color-violet)]" />
                  <input placeholder="WhatsApp / phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-xl border bd bg-app px-4 py-3.5 text-[16px] text-app outline-none focus:border-[var(--color-violet)]" />
                  <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border bd bg-app px-4 py-3.5 text-[16px] text-app outline-none focus:border-[var(--color-violet)]" />
                  <textarea placeholder="Which course or career are you interested in?" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-xl border bd bg-app px-4 py-3.5 text-[16px] text-app outline-none focus:border-[var(--color-violet)]" />
                  <button onClick={submit} disabled={!form.name || !form.phone} className="w-full rounded-xl py-4 text-[16px] font-semibold text-white transition-opacity disabled:opacity-40" style={{ background: "var(--color-coral)" }}>
                    Send enquiry
                  </button>
                  <a href="https://wa.me/919585252099" className="block w-full rounded-xl border bd py-4 text-center text-[16px] font-medium text-app">Or message us on WhatsApp</a>
                </div>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full text-[24px] text-white" style={{ background: "var(--color-emerald)" }}>✓</div>
                <h2 className="display mt-5 text-[24px] font-bold text-app">Thank you, {form.name.split(" ")[0]}.</h2>
                <p className="mt-2 max-w-[34ch] text-[15px] text-2">We&apos;ve received your enquiry and a Zenith advisor will reach out shortly.</p>
                <a href="https://wa.me/919585252099" className="mt-6 rounded-full px-6 py-3 text-[15px] font-semibold text-white" style={{ background: "var(--color-coral)" }}>Message us now</a>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
