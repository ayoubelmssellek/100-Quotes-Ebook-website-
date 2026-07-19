import Link from "next/link";
import { site } from "@/data/content";

export default function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${site.whatsappIntl}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${site.whatsappDisplay}`}
      className="fixed bottom-5 right-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition hover:bg-[#20BD5A] hover:shadow-[0_10px_28px_rgba(37,211,102,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M19.11 17.53c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.17.19-.28.28-.47.1-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.62.6.68.21 1.3.18 1.79.11.55-.08 1.66-.68 1.9-1.33.23-.66.23-1.22.16-1.33-.07-.12-.26-.19-.54-.33z" />
        <path d="M16.02 3C9.39 3 4 8.38 4 15c0 2.12.56 4.18 1.62 6L4 29l8.2-2.15A11.94 11.94 0 0 0 16.02 27C22.65 27 28 21.62 28 15S22.65 3 16.02 3zm0 21.82c-1.9 0-3.76-.5-5.39-1.46l-.39-.23-4.87 1.28 1.3-4.75-.25-.41A9.8 9.8 0 0 1 6.2 15c0-5.42 4.41-9.82 9.82-9.82 5.42 0 9.82 4.4 9.82 9.82 0 5.41-4.4 9.82-9.82 9.82z" />
      </svg>
    </Link>
  );
}
