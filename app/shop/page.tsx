import type { Metadata } from "next";
import { getProducts } from "@/lib/content";
import { ShopClient } from "@/components/shop/ShopClient";
import { ShoppingBag, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shop Amazon Home Finds & Curated Decor",
  description:
    "Explore 470+ thoughtfully curated home decor items, furniture, lighting, and cozy textiles from Amazon.",
};

export default function ShopPage() {
  const products = getProducts();

  return (
    <div className="bg-stone-50/50 min-h-screen pb-20">
      {/* Header Banner */}
      <section className="py-14 sm:py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-[11px] font-semibold tracking-widest uppercase">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-800" />
            <span>Curated Amazon Catalog</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zinc-950 font-normal tracking-tight">
            Curated Home Finds
          </h1>

          <p className="text-zinc-600 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Every piece you see here has been thoughtfully chosen to help you create a space that
            feels warm, peaceful, and truly yours. Click any find to view details and shop directly
            on Amazon.
          </p>

          <div className="pt-2">
            <a
              href={siteConfig.socials.amazonStorefront}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-900 hover:text-amber-950 underline underline-offset-4 font-medium"
            >
              <span>Visit our verified Amazon Storefront for categorized idea lists</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Shop Filter & Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <ShopClient initialProducts={products} />
      </main>
    </div>
  );
}
