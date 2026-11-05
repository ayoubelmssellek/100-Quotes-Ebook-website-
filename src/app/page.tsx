import { redirect } from "next/navigation";

/** Root → closed return page (no catalog). */
export default function Home() {
  redirect("/return");
}
