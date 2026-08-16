"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-teal/10 border-t border-b border-teal/10">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            className="w-full flex items-center justify-between py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-heading font-medium text-navy">{item.q}</span>
            <svg
              className={`h-4 w-4 text-teal shrink-0 transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
              viewBox="0 0 12 12"
              fill="none"
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {open === i && (
            <p className="pb-5 text-navy/70 font-body leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
