"use client";

import { useState } from "react";
import { faqs } from "@/data/content";

export default function FAQ({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-[16px] font-medium tracking-[-0.16px] text-white md:text-[20px]">
                {item.q}
              </span>
              <span className="text-[20px] text-slate">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <p className="max-w-3xl pb-5 text-[14px] leading-[1.45] text-slate md:text-[16px]">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
