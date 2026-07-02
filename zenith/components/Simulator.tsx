"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const model: Record<string, { grow: number[]; wait: number[] }> = {
  school: { grow: [14, 30, 46, 64, 92, 140, 210], wait: [14, 15, 17, 19, 22, 26, 32] },
  diploma: { grow: [16, 34, 52, 74, 108, 165, 240], wait: [16, 18, 20, 23, 27, 33, 42] },
  degree: { grow: [20, 40, 62, 90, 130, 195, 280], wait: [20, 23, 27, 32, 40, 50, 64] },
};

const W = 880, H = 300, pad = { l: 8, r: 8, t: 18, b: 28 };

function fmt(k: number) {
  const lpa = (k * 12) / 100;
  return lpa >= 1 ? "₹" + lpa.toFixed(1).replace(/\.0$/, "") + "L" : "₹" + Math.round(k) + "k";
}

function linePath(points: number[], maxV: number) {
  const n = points.length, w = W - pad.l - pad.r, h = H - pad.t - pad.b;
  return points
    .map((v, i) => {
      const x = pad.l + (i / (n - 1)) * w;
      const y = pad.t + h - (v / maxV) * h;
      return (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
    })
    .join(" ");
}

export default function Simulator() {
  const [start, setStart] = useState("school");
  const [gulf, setGulf] = useState(true);

  const { gd, wd, endG, endW, yG, yW, gapLabel } = useMemo(() => {
    const base = model[start];
    const m = gulf ? 1 : 0.62;
    const grow = base.grow.map((v) => v * m);
    const wait = base.wait;
    const maxV = Math.max(...grow) * 1.08;
    const h = H - pad.t - pad.b;
    const eG = grow[grow.length - 1], eW = wait[wait.length - 1];
    const gap = ((eG - eW) * 12) / 100;
    return {
      gd: linePath(grow, maxV),
      wd: linePath(wait, maxV),
      endG: eG, endW: eW,
      yG: pad.t + h - (eG / maxV) * h,
      yW: pad.t + h - (eW / maxV) * h,
      gapLabel: "₹" + gap.toFixed(1).replace(/\.0$/, "") + "L / year",
    };
  }, [start, gulf]);

  const labels = ["Now", "Yr 1", "Yr 2", "Yr 3", "Yr 4", "Yr 5"];
  const w = W - pad.l - pad.r;

  const Seg = ({ value, set, options }: { value: string; set: (v: string) => void; options: [string, string][] }) => (
    <div className="flex rounded-[11px] bg-paper2 p-[3px]">
      {options.map(([v, label]) => (
        <button
          key={v}
          onClick={() => set(v)}
          aria-pressed={value === v}
          className={`whitespace-nowrap rounded-lg px-[13px] py-[7px] text-[13px] transition-all ${
            value === v ? "bg-white font-medium text-ink shadow-[0_1px_3px_rgba(10,11,13,0.12)]" : "text-ink2"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <section id="sim" className="mt-[54px] overflow-hidden rounded-3xl border border-line bg-white shadow-[0_1px_0_rgba(10,11,13,.02),0_24px_60px_-32px_rgba(10,11,13,.18)]">
      <div className="flex flex-wrap items-end justify-between gap-7 border-b border-line px-[30px] py-[26px]">
        <div className="text-[13px] text-ink3">Your next five years, projected from real placement data</div>
        <div className="flex flex-wrap gap-2.5">
          <div className="flex flex-col gap-[7px]">
            <label className="text-[11px] uppercase tracking-[0.06em] text-ink3">Where you start</label>
            <Seg value={start} set={setStart} options={[["school", "12th / ITI"], ["diploma", "Diploma"], ["degree", "Engineering"]]} />
          </div>
          <div className="flex flex-col gap-[7px]">
            <label className="text-[11px] uppercase tracking-[0.06em] text-ink3">Open to the Gulf?</label>
            <Seg value={gulf ? "y" : "n"} set={(v) => setGulf(v === "y")} options={[["y", "Yes"], ["n", "India only"]]} />
          </div>
        </div>
      </div>

      <div className="px-[30px] pb-2.5 pt-[34px]">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="block h-[300px] w-full overflow-visible">
          {labels.map((lb, i) => {
            const x = pad.l + (i / 6) * w;
            return (
              <g key={i}>
                <line x1={x} y1={pad.t} x2={x} y2={pad.t + (H - pad.t - pad.b)} stroke="#EFF0F2" />
                <text x={x} y={H - 8} fill="#83878E" fontSize="11" className="mono">{lb}</text>
              </g>
            );
          })}
          <path d={wd} fill="none" stroke="var(--color-wait)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
          <path key={`${start}-${gulf}`} d={gd} fill="none" stroke="var(--color-grow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            style={{ strokeDasharray: 1400, strokeDashoffset: 1400, animation: "draw 1.1s ease forwards" }} />
          <circle cx={W - pad.r} cy={yW} r="4" fill="var(--color-wait)" />
          <circle cx={W - pad.r} cy={yG} r="5" fill="var(--color-grow)" />
          <text x={W - pad.r - 6} y={yG - 12} textAnchor="end" fill="var(--color-grow)" fontSize="15" fontWeight="600" className="mono">{fmt(endG)}/mo</text>
          <text x={W - pad.r - 6} y={yW + 18} textAnchor="end" fill="var(--color-wait)" fontSize="13" className="mono">{fmt(endW)}/mo</text>
          <style>{`@keyframes draw{to{stroke-dashoffset:0}}`}</style>
        </svg>
      </div>

      <div className="flex flex-wrap gap-6 px-[30px] pb-[18px]">
        <div className="flex items-center gap-2.5 text-[13px] text-ink2"><span className="h-[3px] w-[22px] rounded-sm bg-grow" /><b className="font-medium text-ink">With Zenith</b> — certified, guided, placed</div>
        <div className="flex items-center gap-2.5 text-[13px] text-ink2"><span className="h-[3px] w-[22px] rounded-sm bg-wait" /> If you wait — same you, one year later</div>
      </div>

      <div className="mx-[30px] mb-[30px] flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-paper2 px-[22px] py-[18px]">
        <div>
          <div className="text-[30px] font-semibold tracking-[-0.03em] text-grow">{gapLabel}</div>
          <div className="max-w-[38ch] text-[14px] text-ink2">the difference between the two paths, five years from now</div>
        </div>
        <Link href="/login" className="whitespace-nowrap rounded-full bg-ink px-5 py-[11px] text-[14px] font-medium text-white transition-transform hover:-translate-y-px">
          See how the green path works →
        </Link>
      </div>
    </section>
  );
}
