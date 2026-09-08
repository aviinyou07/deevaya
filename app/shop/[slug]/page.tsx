import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductsForRoom, ROOM_MAPPINGS, getPageBySlug } from "@/lib/content";
import { ShopClient } from "@/components/shop/ShopClient";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface RoomPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(ROOM_MAPPINGS)
    .filter((k) => k !== "fall-decor-finds")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = ROOM_MAPPINGS[slug];
  if (!room) return { title: "Room Not Found" };

  return {
    title: `${room.title} — Curated Decor & Amazon Finds`,
    description: room.defaultDesc,
  };
}

export default async function RoomShopPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = ROOM_MAPPINGS[slug];
  if (!room) notFound();

  const products = getProductsForRoom(slug);
  const pageData = getPageBySlug(slug);

  const otherRooms = Object.entries(ROOM_MAPPINGS).filter(([k]) => k !== slug);

  return (
    <div className="bg-stone-50/50 min-h-screen pb-20">
      {/* Editorial Room Header */}
      <section className="py-14 sm:py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-zinc-900 transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-zinc-800 font-medium">{room.title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-semibold tracking-widest uppercase">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-800" />
                <span>{products.length} Curated Pieces</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zinc-950 font-normal tracking-tight">
                {room.title}
              </h1>

              <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
                {room.defaultDesc}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={siteConfig.socials.amazonStorefront}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl border border-zinc-300 hover:border-zinc-900 text-zinc-800 text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 bg-white shadow-sm"
              >
                <span>Amazon Storefront</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <ShopClient initialProducts={products} />

        {/* Other Curated Spaces Navigation */}
        <div className="mt-20 pt-12 border-t border-zinc-200">
          <h2 className="font-serif text-2xl text-zinc-950 font-normal mb-6">
            Explore Other Curated Spaces
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {otherRooms.map(([k, r]) => (
              <Link
                key={k}
                href={k === "fall-decor-finds" ? "/fall-decor-finds" : `/shop/${k}`}
                className="group p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-zinc-400 hover:shadow-md transition-all space-y-2"
              >
                <p className="font-serif text-base text-zinc-950 group-hover:text-amber-900 transition-colors">
                  {r.title}
                </p>
                <div className="flex items-center justify-between text-xs text-zinc-500 font-light">
                  <span>View collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
