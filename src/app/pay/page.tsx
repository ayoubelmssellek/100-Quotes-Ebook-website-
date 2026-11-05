"use client";

import { useEffect } from "react";
import { isSafeHttpsUrl, PENDING_PAY_URL_KEY } from "@/lib/payment-handoff";

/** Legacy entry — forward to /return keeping to/lang/prices query intact. */
export default function PayExitPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to") || "";
    if (to && isSafeHttpsUrl(to)) {
      sessionStorage.setItem(PENDING_PAY_URL_KEY, to);
    }
    const q = params.toString();
    window.location.replace(q ? `/return?${q}` : "/return");
  }, []);

  return (
    <main style={{ minHeight: "100vh", margin: 0, background: "#000" }} aria-hidden />
  );
}
