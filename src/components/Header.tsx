"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-black/90 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="text-[16px] font-semibold tracking-[-0.16px] text-white">
          PortugalIPTV
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[16px] tracking-[-0.16px] transition ${
                  active ? "text-white" : "text-slate hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/subscriptions" className="btn btn-solid hidden sm:inline-flex" aria-label="Obter Acesso Instantâneo IPTV">
            Comprar Agora
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-line text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-black px-4 py-4 lg:hidden">
          <div className="section-shell flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[4px] px-2 py-3 text-[16px] text-slate hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/subscriptions"
              onClick={() => setOpen(false)}
              className="btn btn-solid mt-2 w-full"
              aria-label="Obter Acesso Instantâneo IPTV"
            >
              Comprar Agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
