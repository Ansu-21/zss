"use client";

import { useEffect } from "react";

export default function LoaderHide() {
  useEffect(() => {
    const el = document.getElementById("zload");
    if (!el) return;
    const t1 = setTimeout(() => el.classList.add("hide"), 1500);
    const t2 = setTimeout(() => el.classList.add("gone"), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return null;
}
