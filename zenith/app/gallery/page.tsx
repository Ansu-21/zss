"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

const B = "https://www.zss.co.in/assets/images";

// Mix of real image paths from the live site.
const photos = [
  { src: `${B}/about/1.jpg`, cat: "Training" },
  { src: `${B}/about/2.jpg`, cat: "Training" },
  { src: `${B}/about/3.jpg`, cat: "Training" },
  { src: `${B}/about/4.jpg`, cat: "Campus" },
  { src: `${B}/about/about-03.webp`, cat: "Campus" },
  { src: `${B}/course/course-01.jpg`, cat: "Courses" },
  { src: `${B}/course/course-02.jpg`, cat: "Courses" },
  { src: `${B}/course/course-03.jpg`, cat: "Courses" },
  { src: `${B}/banner/1.jpg`, cat: "Events" },
  { src: `${B}/banner/2.jpg`, cat: "Events" },
  { src: `${B}/offers/chirsmas-2025/1.jpeg`, cat: "Events" },
  { src: `${B}/offers/chirsmas-2025/2.jpeg`, cat: "Events" },
];

const cats = ["All", "Training", "Courses", "Campus", "Events"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const shown = filter === "All" ? photos : photos.filter((p) => p.cat === filter);

  return (
    <main>
      <section className="hero-wash relative overflow-hidden pt-36 pb-16">
        <div className="pointer-events-none absolute -right-24 top-10 h-[380px] w-[380px] rounded-full opacity-60 blur-[130px]" style={{ background: "var(--color-violet-soft)" }} />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <div className="mono text-[12px] tracking-[0.12em] text-3">GALLERY</div>
          <h1 className="display mt-3 max-w-[18ch] text-[clamp(34px,5.4vw,64px)] font-bold leading-[1.0] tracking-[-0.03em] text-app">
            Inside Zenith — training, people, moments.
          </h1>
          <p className="mt-5 max-w-[48ch] text-[18px] leading-[1.6] text-2">
            A look at our classes, drills, campus and events across the years.
          </p>
        </div>
      </section>

      <section className="bg-app pb-24 pt-6">
        <div className="mx-auto max-w-[1240px] px-6">
          {/* filters */}
          <div className="mb-8 flex flex-wrap gap-2.5">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="rounded-full border px-5 py-2 text-[14px] font-medium transition-all"
                style={{
                  background: filter === c ? "var(--color-violet)" : "var(--card)",
                  color: filter === c ? "#fff" : "var(--text-2)",
                  borderColor: filter === c ? "var(--color-violet)" : "var(--border)",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* masonry-ish grid */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {shown.map((p, i) => (
              <button
                key={p.src + i}
                onClick={() => setOpen(p.src)}
                className="group relative block w-full overflow-hidden rounded-2xl border bd"
                style={{ breakInside: "avoid" }}
              >
                <div className="photo" style={{ aspectRatio: i % 3 === 0 ? "4 / 5" : "4 / 3" }}>
                  <img src={p.src} alt={p.cat} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/55 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-[13px] font-medium text-white">{p.cat}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* lightbox */}
      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
        >
          <button className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white" aria-label="Close">✕</button>
          <img src={open} alt="" className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain" />
        </div>
      )}

      <Footer />
    </main>
  );
}
