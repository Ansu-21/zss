import CourseRow from "@/components/CourseRow";
import { collections } from "@/data/courses";

export const metadata = {
  title: "All Safety Courses — IOSH, OSHA, OTHM, ISO & Diplomas | Zenith Safety Solutions",
  description: "Browse 40 safety and HSE courses in Trichy: IOSH, OSHA, OTHM, ISO Lead Auditor, fire, industrial, construction and electrical safety diplomas and certificates.",
};

export default function CoursesPage() {
  return (
    <main className="mx-auto max-w-[1180px] px-6 pb-24 pt-12">
      <div className="text-[13px] uppercase tracking-[0.1em] text-3">The course universe</div>
      <h1 className="mt-3 max-w-[18ch] text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.04em]">
        Forty ways in. One of them is yours.
      </h1>
      <p className="mt-5 max-w-[50ch] text-[18px] text-2">
        Grouped by where they take you, not by catalogue codes. Open any one to see careers, salary, eligibility and our honest take.
      </p>
      <div className="mt-12">
        {collections.map((row) => <CourseRow key={row.title} title={row.title} slugs={row.slugs} />)}
      </div>
    </main>
  );
}
