"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShoppingBag,
  ExternalLink,
  Heart,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { Post, Product, RoomFormula } from "@/lib/types";
import { ProductCard } from "@/components/ui/ProductCard";
import { PostCard } from "@/components/ui/PostCard";
import { RoomFormulaCard } from "@/components/ui/RoomFormulaCard";
import { RoomFormulaModal } from "@/components/ui/RoomFormulaModal";
import { NewsletterSection } from "@/components/ui/NewsletterSection";
import { siteConfig } from "@/lib/site-config";

interface HomeClientProps {
  featuredProducts: Product[];
  roomFormulas: RoomFormula[];
  recentPosts: Post[];
}

export function HomeClient({
  featuredProducts,
  roomFormulas,
  recentPosts,
}: HomeClientProps) {
  const [selectedFormula, setSelectedFormula] = useState<RoomFormula | null>(null);

  const roomCategories = [
    {
      title: "Living Room",
      count: "114 Finds",
      href: "/shop/deevaya-living-room-finds",
      image: "https://deevaya.com/wp-content/uploads/2026/09/IMG_4978.png",
      tagline: "Warm seating, consoles & ambient light",
    },
    {
      title: "Bedroom",
      count: "112 Finds",
      href: "/shop/deevaya-bedroom-finds",
      image: "https://deevaya.com/wp-content/uploads/2026/09/B4C0298B-567F-4966-8FE0-5EBACFCB06D9-1.png",
      tagline: "Layered bedding, nightstands & soft glow",
    },
    {
      title: "Kitchen & Dining",
      count: "56 Finds",
      href: "/shop/deevaya-kitchen-finds",
      image: "https://deevaya.com/wp-content/uploads/2026/09/E49700ED-86C7-4706-ABFB-483AC59A5F4F.png",
      tagline: "Wicker accents, pantry jars & shelving",
    },
    {
      title: "Bathroom",
      count: "23 Finds",
      href: "/shop/deevaya-bathroom-favorites",
      image: "https://deevaya.com/wp-content/uploads/2026/09/98F44317-0AFE-4F50-A600-5A6CF37091D2.png",
      tagline: "Vanity organizers & bamboo storage",
    },
    {
      title: "Fall Decor",
      count: "16 Finds",
      href: "/fall-decor-finds",
      image: "https://deevaya.com/wp-content/uploads/2026/09/58F88186-674A-4A03-8DF8-38DCBE5CA22E-1.png",
      tagline: "Warm autumn pillows, candles & centerpieces",
    },
    {
      title: "Room Formulas",
      count: "11 Guides",
      href: "/deevaya-room-formula",
      image: roomFormulas[0]?.image || "https://deevaya.com/wp-content/uploads/2026/09/IMG_4978.png",
      tagline: "Downloadable blueprints & paint codes",
      isHighlight: true,
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-12 sm:pb-24 border-b border-zinc-200/70 overflow-hidden bg-gradient-to-b from-stone-50/60 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-[11px] font-medium tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Interior Inspiration & Curated Finds</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-950 tracking-tight leading-[1.15]">
                Create a Home You’ll Love Coming Back To.
              </h1>

              <p className="text-zinc-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                Every home has a story waiting to be told. Beautiful spaces aren’t defined by
                expensive furniture or fleeting trends—they’re created through comfort, warmth,
                and the moments shared.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/shop"
                  className="px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Amazon Finds</span>
                </Link>

                <Link
                  href="/deevaya-room-formula"
                  className="px-6 py-3.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-semibold uppercase tracking-wider transition-all border border-amber-300/60 inline-flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  <span>Room Formulas</span>
                </Link>

                <a
                  href={siteConfig.socials.amazonStorefront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl border border-zinc-300 hover:border-zinc-900 text-zinc-800 text-xs font-medium uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
                >
                  <span>Amazon Storefront</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>

              {/* Reassurance pills */}
              <div className="pt-6 border-t border-zinc-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="font-serif text-2xl font-medium text-zinc-950">470+</p>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider">Curated Finds</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-medium text-zinc-950">11</p>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider">Room Formulas</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-medium text-zinc-950">62</p>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider">Design Guides</p>
                </div>
              </div>
            </div>

            {/* Right Editorial Collage */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80 bg-zinc-100">
                    <Image
                      src="https://deevaya.com/wp-content/uploads/2026/09/IMG_4978.png"
                      alt="Deevaya curated living room"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 300px"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-md rounded-lg p-2 text-white text-[11px] font-serif">
                      Living Room Styling
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-zinc-200/80 bg-zinc-100">
                    <Image
                      src="https://deevaya.com/wp-content/uploads/2026/09/E49700ED-86C7-4706-ABFB-483AC59A5F4F.png"
                      alt="Deevaya kitchen decor"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 300px"
                    />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 pt-6">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-zinc-200/80 bg-zinc-100">
                    <Image
                      src="https://deevaya.com/wp-content/uploads/2026/09/B4C0298B-567F-4966-8FE0-5EBACFCB06D9-1.png"
                      alt="Deevaya cozy bedroom"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 300px"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80 bg-zinc-100">
                    <Image
                      src="https://deevaya.com/wp-content/uploads/2026/09/58F88186-674A-4A03-8DF8-38DCBE5CA22E-1.png"
                      alt="Deevaya seasonal fall decor"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 300px"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-amber-950/80 backdrop-blur-md rounded-lg p-2 text-amber-100 text-[11px] font-serif">
                      Seasonal Inspiration
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CURATED ROOM SPACES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
              Explore By Room
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-zinc-950 font-normal mt-1">
              Shop Curated Spaces
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-wider text-zinc-900 hover:text-amber-900 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            <span>Browse All 470+ Finds</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roomCategories.map((room) => (
            <Link
              key={room.title}
              href={room.href}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                room.isHighlight
                  ? "border-amber-900/30 bg-amber-950 text-white shadow-md hover:shadow-xl"
                  : "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-400 hover:shadow-lg"
              }`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div
                  className={`absolute inset-0 transition-opacity ${
                    room.isHighlight
                      ? "bg-gradient-to-t from-amber-950/90 via-amber-950/40 to-transparent"
                      : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  }`}
                />
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md ${
                      room.isHighlight
                        ? "bg-amber-400 text-amber-950"
                        : "bg-white/90 text-zinc-900"
                    }`}
                  >
                    {room.count}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-normal drop-shadow-sm">
                    {room.title}
                  </h3>
                  <p className="text-xs text-zinc-200 font-light mt-0.5 opacity-90 line-clamp-1">
                    {room.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. SIGNATURE PRODUCT LINE: THE DEEVAYA ROOM FORMULAS */}
      <section className="bg-stone-900 text-white py-16 sm:py-24 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.25em] text-amber-300 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Signature Digital Guides
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight">
                The Deevaya Room Formulas
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                Recreate full designer rooms effortlessly. Each formula includes exact paint
                codes, coordinated furniture specs, statement lighting blueprints, and direct links
                to recreate the complete look.
              </p>
            </div>

            <Link
              href="/deevaya-room-formula"
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shrink-0 self-start md:self-end shadow-md"
            >
              <span>View All 11 Formulas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomFormulas.slice(0, 4).map((formula) => (
              <RoomFormulaCard
                key={formula.id}
                formula={formula}
                onOpenModal={(f) => setSelectedFormula(f)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CURATED AMAZON FINDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
              Curated Amazon Finds
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-zinc-950 font-normal mt-1">
              Thoughtfully Chosen for Your Home
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-wider text-zinc-900 hover:text-amber-900 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            <span>Explore Entire Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 4} />
          ))}
        </div>
      </section>

      {/* 5. EDITORIAL PHILOSOPHY & BRAND MANIFESTO */}
      <section className="bg-stone-50 py-16 sm:py-24 border-y border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.25em] text-amber-900 uppercase">
              Our Core Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-950 leading-tight">
              A Home Is Built One Beautiful Moment at a Time.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              Some rooms look impressive, but feel cold. The most memorable rooms feel warm the
              second you walk in—where every lamp gives off a soft glow, every blanket invites you to
              curl up, and every piece of decor has a place and purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-stone-200">
            <div className="p-6 bg-white rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800">
                <Heart className="w-5 h-5 text-amber-800" />
              </div>
              <h3 className="font-serif text-lg text-zinc-950 font-medium">Real Homes First</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                We focus on livable, functional beauty. No stiff showroom setups—just real spaces
                created for family dinners, quiet coffee mornings, and peaceful evenings.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800">
                <Compass className="w-5 h-5 text-amber-800" />
              </div>
              <h3 className="font-serif text-lg text-zinc-950 font-medium">Accessible Luxury</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                Beautiful doesn’t have to mean expensive. We spend hours scouring Amazon to find
                high-end textures, solid finishes, and designer dupes that save you thousands.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800">
                <CheckCircle2 className="w-5 h-5 text-amber-800" />
              </div>
              <h3 className="font-serif text-lg text-zinc-950 font-medium">Harmonious Formulas</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                Eliminate the guesswork of decorating. Our formulas ensure every paint shade,
                cushion fabric, and metal accent work together in seamless harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LATEST FROM THE JOURNAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
              The Deevaya Journal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-zinc-950 font-normal mt-1">
              Interior Guides & Inspiration
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs uppercase tracking-wider text-zinc-900 hover:text-amber-900 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            <span>Read All 62 Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* 7. NEWSLETTER SECTION */}
      <NewsletterSection />

      {/* Modal for Room Formulas */}
      <RoomFormulaModal
        formula={selectedFormula}
        onClose={() => setSelectedFormula(null)}
      />
    </div>
  );
}
