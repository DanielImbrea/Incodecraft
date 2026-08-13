"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-surface-border border-y border-surface-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-base text-ink-50 md:text-lg">{item.question}</span>
              <Plus size={20} className={cn("shrink-0 text-signal transition-transform duration-300", isOpen && "rotate-45")} />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <p className="overflow-hidden text-sm leading-relaxed text-ink-300 md:text-base">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
