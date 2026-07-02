"use client";
import { useEffect } from "react";
import { trackView } from "@/lib/lead";

export default function CourseTracker({ slug }: { slug: string }) {
  useEffect(() => { trackView(slug); }, [slug]);
  return null;
}
