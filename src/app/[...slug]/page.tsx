import { redirect } from "next/navigation";

/** Any unknown path → closed return page (no catalog browsing). */
export default function LockedCatchAll() {
  redirect("/return");
}
