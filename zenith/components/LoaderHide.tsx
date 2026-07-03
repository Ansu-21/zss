"use client";

import { useEffect } from "react";

export default function LoaderHide() {
  useEffect(() => {
    const el = document.getElementById("zload");
    if (!el) return;
    // Brand moment on the first visit only — returning within the same
    // session, get straight to the content.
    let seen = false;
    try { seen = !!sessionStorage.getItem("zenith-seen"); sessionStorage.setItem("zenith-seen", "1"); } catch {}
    const hideDelay = seen ? 0 : 900;
    const t1 = setTimeout(() => el.classList.add("hide"), hideDelay);
    const t2 = setTimeout(() => el.classList.add("gone"), hideDelay + 650);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return null;
}
