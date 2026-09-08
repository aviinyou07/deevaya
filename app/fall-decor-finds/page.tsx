import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProductsForRoom, getPageBySlug } from "@/lib/content";
import { ProductCard } from "@/components/ui/ProductCard";
import { Sparkles, ArrowRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Fall Decor Finds — Cozy Autumn Home Inspiration",
  description:
    "Welcome the beauty of autumn into your home with cozy textures, warm earthy colors, and charming seasonal details curated from Amazon.",
};

export default function FallDecorFindsPage() {
  const products = getProductsForRoom("fall-decor-finds");
  const pageData = getPageBySlug("fall-decor-finds");

  return (
    <div className="bg-stone-50/50 min-h-screen pb-20">
      {/* Warm Autumn Editorial Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-stone-900 to-stone-950 text-white border-b border-stone-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(180,83,9,0.2),transparent_60%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[11px] font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seasonal Collection</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight">
            Cozy Fall Decor Finds
          </h1>

          <p className="text-stone-300 text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Welcome the beauty of autumn into your home with cozy textures, warm earthy colors,
            and charming seasonal details. These thoughtfully curated fall decor finds bring
            comfort, harvest warmth, and timeless autumn charm to any space.
          </p>

          <div className="pt-4 flex items-center justify-center gap-4 text-xs text-amber-200/80">
            <span>🍁 Warm Earthy Tones</span>
            <span>•</span>
            <span>🕯️ Soft Autumn Glow</span>
            <span>•</span>
            <span>🍂 Textured Pillows & Throws</span>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal">
              Curated Autumn Favorites ({products.length})
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Click any piece to view details and shop on Amazon.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-wider text-zinc-800 hover:text-amber-900 font-semibold inline-flex items-center gap-1"
          >
            <span>All Decor Finds</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
