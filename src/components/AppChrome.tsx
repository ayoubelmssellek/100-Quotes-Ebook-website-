"use client";

import { usePathname } from "next/navigation";

/**
 * Payment-only shell: no store header, footer, or catalog chrome.
 * Buyers who land here after IPTV checkout cannot browse other site pages.
 */
export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPayExit = pathname.startsWith("/pay");

  if (isPayExit) {
    return <>{children}</>;
  }

  return <main className="flex min-h-full flex-1 flex-col bg-black">{children}</main>;
}
