"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 pb-2 border-b border-stone-200">
        <List className="w-4 h-4 text-amber-800" />
        <span>In This Guide</span>
      </div>

      <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto scrollbar-thin text-xs">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={`block py-1 transition-colors leading-snug ${
                h.level === 3 ? "pl-0 font-medium" : "pl-3 text-zinc-500 text-[11px]"
              } ${
                isActive
                  ? "text-amber-900 font-semibold underline underline-offset-4"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              {h.text}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
