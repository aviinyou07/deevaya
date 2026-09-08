"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { RoomFormula } from "@/lib/types";

interface RoomFormulaCardProps {
  formula: RoomFormula;
  onOpenModal?: (formula: RoomFormula) => void;
}

export function RoomFormulaCard({ formula, onOpenModal }: RoomFormulaCardProps) {
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-amber-900/10 shadow-sm hover:shadow-xl hover:border-amber-900/30 transition-all duration-300 overflow-hidden">
      {/* Visual Header */}
      <div className="relative aspect-[4/3] w-full bg-zinc-900 overflow-hidden">
        {formula.image ? (
          <Image
            src={formula.image}
            alt={formula.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-amber-100/60 font-serif italic">
            Room Formula
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 bg-amber-950/85 backdrop-blur-md text-amber-200 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-md border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-amber-400" /> Digital Guide
          </span>
          <span className="bg-white/95 backdrop-blur-md text-zinc-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {formula.formattedPrice}
          </span>
        </div>

        {/* Bottom Title on Image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-serif text-base sm:text-lg text-white font-medium drop-shadow-md leading-tight line-clamp-2">
            {formula.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        {/* Features included */}
        <div className="space-y-2">
          <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
            {formula.cleanDescription.split("\n")[0] || formula.cleanDescription}
          </p>

          <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-zinc-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Paint Swatches</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Furniture Layout</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Lighting Blueprint</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Direct Decor Links</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {onOpenModal ? (
            <button
              type="button"
              onClick={() => onOpenModal(formula)}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-950 hover:bg-amber-900 text-amber-50 text-xs font-semibold uppercase tracking-wider transition-all shadow hover:shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>View Guide Details</span>
            </button>
          ) : (
            <Link
              href="/deevaya-room-formula"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-950 hover:bg-amber-900 text-amber-50 text-xs font-semibold uppercase tracking-wider transition-all shadow hover:shadow-md"
            >
              <span>Explore Formula</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
