import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ChevronRight,
  ExternalLink,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Explore Deevaya — Curated Finds, Room Formulas & Social Links",
  description:
    "Explore Deevaya's curated Amazon collections, signature room formulas, and social platforms in one place.",
};

export default function ExploreDeevayaPage() {
  const linkCards = [
    {
      title: "Shop My Favorite Home Finds",
      subtitle: "Beautiful decor finds curated for every room",
      href: "/shop",
      image: "https://deevaya.com/wp-content/uploads/2026/08/CE7F2E46-6B5C-4504-BDD3-5B2653795387.png",
      isInternal: true,
      badge: "470+ Items",
    },
    {
      title: "Recreate Your Favorite Deevaya Room",
      subtitle: "Downloadable paint, furniture & lighting formulas",
      href: "/deevaya-room-formula",
      image: "https://deevaya.com/wp-content/uploads/2026/08/3289CB6E-99B9-496B-96E7-96EAD7E91DE9-3.png",
      isInternal: true,
      badge: "Exclusive Guides",
    },
    {
      title: "Deevaya Living Room Finds",
      subtitle: "Comfortable, stylish finds for everyday living",
      href: "/shop/deevaya-living-room-finds",
      image: "https://deevaya.com/wp-content/uploads/2026/09/ChatGPT-Image-Aug-31-2026-07_20_17-PM-3-300x450.png",
      isInternal: true,
    },
    {
      title: "Deevaya Bedroom Finds",
      subtitle: "Cozy essentials for a peaceful bedroom",
      href: "/shop/deevaya-bedroom-finds",
      image: "https://deevaya.com/wp-content/uploads/2026/09/ChatGPT-Image-Aug-31-2026-07_20_17-PM-2-300x450.png",
      isInternal: true,
    },
    {
      title: "Deevaya Kitchen Finds",
      subtitle: "Beautiful finds for a warm, functional kitchen",
      href: "/shop/deevaya-kitchen-finds",
      image: "https://deevaya.com/wp-content/uploads/2026/09/661C10EA-5A29-4C4B-9DDF-66A437A8063E6.jpeg",
      isInternal: true,
    },
    {
      title: "Deevaya Bathroom Favorites",
      subtitle: "Smart storage and calming bathroom decor",
      href: "/shop/deevaya-bathroom-favorites",
      image: "https://deevaya.com/wp-content/uploads/2026/09/IMG_4479.jpeg",
      isInternal: true,
    },
    {
      title: "Discover Cozy Fall Decor Finds",
      subtitle: "Warm and inviting seasonal favorites",
      href: "/fall-decor-finds",
      image: "https://deevaya.com/wp-content/uploads/2026/08/B0AFD930-733C-4392-A24C-F4C45A141D6F.png",
      isInternal: true,
      badge: "Seasonal",
    },
    {
      title: "Visit My Amazon Storefront",
      subtitle: "Explore all curated Amazon favorites and shoppable lists",
      href: siteConfig.socials.amazonStorefront,
      isInternal: false,
      icon: <ShoppingBag className="w-5 h-5 text-amber-900" />,
      badge: "Amazon Prime",
    },
    {
      title: "Follow Deevaya on Pinterest",
      subtitle: "Save and pin thousands of home styling ideas",
      href: siteConfig.socials.pinterest,
      isInternal: false,
      badge: "Pinterest Board",
    },
    {
      title: "Chat With Deevaya on WhatsApp",
      subtitle: "Let us help you design your dream room",
      href: siteConfig.socials.whatsapp,
      isInternal: false,
      icon: <MessageCircle className="w-5 h-5 text-emerald-700" />,
      badge: "Personal Concierge",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-xl mx-auto space-y-8">
        {/* Profile Header */}
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-zinc-900/10 shadow-md bg-white p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-stone-100 flex items-center justify-center">
              <span className="font-serif text-2xl font-normal text-zinc-900 tracking-wider">
                D
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="font-serif text-3xl font-normal text-zinc-950 uppercase tracking-[0.18em]">
              Deevaya
            </h1>
            <p className="text-xs text-amber-900 font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interior & Living</span>
            </p>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed font-light">
            Create a home you never want to leave ✨ <br />
            Cozy Decor • Curated Finds • Room Formulas <br />
            Tap below to shop your favorite looks.
          </p>

          {/* Social Icons Bar */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://www.instagram.com/deevayahome/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-all text-xs font-semibold"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://pin.it/KNDdGQw5Q"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-all text-xs font-semibold"
              aria-label="Pinterest"
            >
              PIN
            </a>
            <a
              href="https://www.youtube.com/@Deevayahom_e"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-all text-xs font-semibold"
              aria-label="YouTube"
            >
              YT
            </a>
            <a
              href="https://wa.me/message/Y5CAISUT5X5EP1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-all text-xs font-semibold"
              aria-label="WhatsApp"
            >
              WA
            </a>
          </div>
        </div>

        {/* Link Cards List */}
        <div className="space-y-3.5">
          {linkCards.map((card, idx) => {
            const content = (
              <div className="group relative flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-200">
                {card.image ? (
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-stone-100 border border-zinc-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="64px"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                    {card.icon || <Sparkles className="w-6 h-6 text-amber-800" />}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h2 className="font-serif text-sm sm:text-base text-zinc-950 font-normal truncate group-hover:text-amber-900 transition-colors">
                      {card.title}
                    </h2>
                  </div>
                  <p className="text-xs text-zinc-500 truncate font-light">
                    {card.subtitle}
                  </p>
                  {card.badge && (
                    <span className="inline-block mt-1 text-[9px] uppercase tracking-wider font-bold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded">
                      {card.badge}
                    </span>
                  )}
                </div>

                <div className="shrink-0 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all">
                  {card.isInternal ? (
                    <ChevronRight className="w-5 h-5" />
                  ) : (
                    <ExternalLink className="w-4 h-4" />
                  )}
                </div>
              </div>
            );

            return card.isInternal ? (
              <Link key={idx} href={card.href}>
                {content}
              </Link>
            ) : (
              <a
                key={idx}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center pt-6 space-y-1">
          <p className="text-xs text-zinc-400 font-serif italic">
            Cozy home, timeless style ♡
          </p>
          <p className="text-[10px] text-zinc-400 tracking-wider uppercase">
            © {new Date().getFullYear()} Deevaya Interiors
          </p>
        </div>
      </div>
    </div>
  );
}
