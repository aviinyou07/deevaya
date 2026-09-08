import type { Metadata } from "next";
import { getRoomFormulas } from "@/lib/content";
import { RoomFormulaClient } from "@/components/room-formula/RoomFormulaClient";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Deevaya Room Formulas — Digital Interior Decorating Guides",
  description:
    "Recreate signature designer rooms with our downloadable decorating guides featuring exact paint codes, coordinated furniture, lighting blueprints, and direct Amazon links.",
};

export default function RoomFormulaPage() {
  const roomFormulas = getRoomFormulas();

  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-stone-900 text-white border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[11px] font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Digital Blueprints</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight">
            The Deevaya Room Formulas
          </h1>

          <p className="text-stone-300 text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Recreate complete designer spaces without the guesswork. Each downloadable guide
            pairs exact paint colors and undertones with coordinated furniture specs, statement
            lighting, and shoppable decor links.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <RoomFormulaClient roomFormulas={roomFormulas} />
      </main>
    </div>
  );
}
