"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Sparkles, Check, Download, ShieldCheck, Heart } from "lucide-react";
import { RoomFormula } from "@/lib/types";

interface RoomFormulaModalProps {
  formula: RoomFormula | null;
  onClose: () => void;
}

export function RoomFormulaModal({ formula, onClose }: RoomFormulaModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (formula) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [formula, onClose]);

  if (!formula) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-zinc-700 shadow-md backdrop-blur-sm transition-all"
          aria-label="Close formula details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Media */}
        <div className="relative aspect-[16/9] w-full bg-zinc-950 shrink-0 overflow-hidden">
          {formula.image ? (
            <Image
              src={formula.image}
              alt={formula.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-amber-500 text-zinc-950 text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" /> Deevaya Room Formula
              </span>
              <span className="text-amber-200 font-serif italic text-sm">
                Instant PDF Download
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-medium leading-tight">
              {formula.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 text-zinc-800">
          {/* Price & Guarantee Callout */}
          <div className="flex items-center justify-between p-4 bg-amber-50/70 border border-amber-200/60 rounded-2xl">
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-900 font-bold">
                Formula Decorating Blueprint
              </p>
              <p className="text-xs text-amber-800/80">
                Complete styling & color breakdown ready to print or view on tablet
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-2xl font-serif font-bold text-zinc-950">
                {formula.formattedPrice}
              </span>
            </div>
          </div>

          {/* What's Inside */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Everything Included Inside
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-700">
              {[
                "Curated Room Color Palette with Hex Codes",
                "Exact Paint Brand & Undertone Recommendations",
                "Coordinated Furniture Specs (Sofas, Chairs, Tables)",
                "Statement Lighting & Warm Ambient Fixtures",
                "Pillow, Rug & Textile Layering Blueprint",
                "Direct Curated Amazon Links for Every Piece",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
              About This Design Direction
            </h4>
            <div className="text-xs leading-relaxed text-zinc-600 whitespace-pre-line space-y-2">
              {formula.cleanDescription}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Secure 256-bit instant download delivery</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {formula.affiliateUrl ? (
              <a
                href={formula.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Guide ({formula.formattedPrice})</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider"
              >
                <span>Available Soon</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
