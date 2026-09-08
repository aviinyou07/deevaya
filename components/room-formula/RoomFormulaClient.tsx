"use client";

import { useState, useMemo } from "react";
import { Sparkles, CheckCircle2, ShieldCheck, Download, Palette, Layers, Lightbulb } from "lucide-react";
import { RoomFormula } from "@/lib/types";
import { RoomFormulaCard } from "@/components/ui/RoomFormulaCard";
import { RoomFormulaModal } from "@/components/ui/RoomFormulaModal";

interface RoomFormulaClientProps {
  roomFormulas: RoomFormula[];
}

export function RoomFormulaClient({ roomFormulas }: RoomFormulaClientProps) {
  const [selectedFormula, setSelectedFormula] = useState<RoomFormula | null>(null);
  const [filter, setFilter] = useState("all");

  const filteredFormulas = useMemo(() => {
    if (filter === "all") return roomFormulas;
    return roomFormulas.filter((r) =>
      r.name.toLowerCase().includes(filter.toLowerCase()) ||
      r.cleanDescription.toLowerCase().includes(filter.toLowerCase())
    );
  }, [roomFormulas, filter]);

  return (
    <div className="space-y-16">
      {/* Value Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-2xl bg-white border border-amber-900/10 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-900">
            <Palette className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg text-zinc-950 font-medium">
            Exact Paint Colors & Codes
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed font-light">
            No more guessing undertones under store lighting. Every guide includes tested paint
            names, hex codes, and trim pairings.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-amber-900/10 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-900">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg text-zinc-950 font-medium">
            Coordinated Furniture Specs
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed font-light">
            Sofas, accent chairs, coffee tables, and console styling curated to work together in
            effortless harmony.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-amber-900/10 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-900">
            <Lightbulb className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg text-zinc-950 font-medium">
            Lighting & Amazon Links
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed font-light">
            Ambient lighting temperatures and direct shoppable links to Amazon decor finds that fit
            the formula’s exact budget.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-zinc-200 pb-4">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal">
            Signature Room Guides ({filteredFormulas.length})
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Instant PDF download delivered immediately upon purchase
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          {[
            { label: "All Formulas", value: "all" },
            { label: "Living Room", value: "living" },
            { label: "Entryway & Stairs", value: "entry" },
            { label: "Bedroom", value: "bedroom" },
            { label: "Balcony & Pantry", value: "balcony" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                filter === tab.value
                  ? "bg-amber-950 text-amber-50 shadow-sm"
                  : "bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Formulas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFormulas.map((formula) => (
          <RoomFormulaCard
            key={formula.id}
            formula={formula}
            onOpenModal={(f) => setSelectedFormula(f)}
          />
        ))}
      </div>

      {/* Guarantee Banner */}
      <div className="p-8 rounded-3xl bg-stone-100 border border-stone-200 text-center max-w-2xl mx-auto space-y-3">
        <ShieldCheck className="w-8 h-8 text-amber-800 mx-auto" />
        <h3 className="font-serif text-xl text-zinc-950 font-medium">
          The Deevaya Design Guarantee
        </h3>
        <p className="text-xs text-zinc-600 leading-relaxed font-light">
          Each formula is meticulously styled and color-matched. If you ever have questions
          implementing a guide in your home, email our design team directly for personalized advice.
        </p>
      </div>

      {/* Modal */}
      <RoomFormulaModal
        formula={selectedFormula}
        onClose={() => setSelectedFormula(null)}
      />
    </div>
  );
}
