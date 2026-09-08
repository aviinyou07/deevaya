"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ShoppingBag,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SearchModal } from "../ui/SearchModal";
import { Post, Product, RoomFormula } from "@/lib/types";

interface NavbarProps {
  posts: Post[];
  products: Product[];
  roomFormulas: RoomFormula[];
}

export function Navbar({ posts, products, roomFormulas }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const pathname = usePathname();

  const rooms = [
    { label: "Living Room Finds", href: "/shop/deevaya-living-room-finds", count: "114 Items" },
    { label: "Bedroom Finds", href: "/shop/deevaya-bedroom-finds", count: "112 Items" },
    { label: "Kitchen Finds", href: "/shop/deevaya-kitchen-finds", count: "56 Items" },
    { label: "Bathroom Favorites", href: "/shop/deevaya-bathroom-favorites", count: "23 Items" },
    { label: "Fall Decor Finds", href: "/fall-decor-finds", count: "Seasonal" },
  ];

  return (
    <>
      {/* Top Editorial Announcement Strip */}
      <div className="bg-zinc-950 text-zinc-300 text-[11px] sm:text-xs py-2 px-4 text-center tracking-widest uppercase font-light border-b border-zinc-900 flex items-center justify-center gap-3">
        <span>Curating Timeless Homes & Signature Room Formulas</span>
        <span className="hidden md:inline text-zinc-600">•</span>
        <Link
          href="/deevaya-room-formula"
          className="hidden md:inline-flex items-center gap-1 text-amber-300/90 hover:text-white underline underline-offset-4 transition-colors"
        >
          Explore Room Formulas <Sparkles className="w-3 h-3 inline" />
        </Link>
      </div>

      {/* Main Sticky Nav */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-zinc-700 hover:text-zinc-900 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo & Editorial Typography */}
            <div className="flex flex-col items-center lg:items-start">
              <Link href="/" className="group text-center lg:text-left">
                <span className="block font-serif text-2xl sm:text-3xl tracking-[0.22em] text-zinc-950 font-normal uppercase leading-tight group-hover:text-zinc-700 transition-colors">
                  Deevaya
                </span>
                <span className="block text-[10px] tracking-[0.35em] text-zinc-400 uppercase font-medium mt-0.5">
                  Interior & Living
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wider uppercase font-medium text-zinc-700">
              <Link
                href="/"
                className={`transition-colors hover:text-zinc-950 ${
                  pathname === "/" ? "text-zinc-950 font-semibold border-b border-zinc-900 pb-0.5" : ""
                }`}
              >
                Home
              </Link>

              {/* Rooms Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsRoomsOpen(true)}
                onMouseLeave={() => setIsRoomsOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 uppercase hover:text-zinc-950 py-2 transition-colors"
                >
                  <span>Rooms</span>
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                </button>

                {isRoomsOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-zinc-100 py-3 px-2 transition-all animate-in fade-in-50 slide-in-from-top-2">
                    <div className="px-3 pb-2 mb-1 border-b border-zinc-100 text-[10px] tracking-widest text-zinc-400 uppercase">
                      Curated Room Finds
                    </div>
                    {rooms.map((room) => (
                      <Link
                        key={room.href}
                        href={room.href}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-xs hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                      >
                        <span>{room.label}</span>
                        <span className="text-[10px] text-zinc-400 tracking-normal capitalize font-serif">
                          {room.count}
                        </span>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-zinc-100">
                      <Link
                        href="/shop"
                        className="flex items-center justify-between px-3 py-1.5 rounded-lg text-[11px] font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
                      >
                        <span>View All Decor</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/shop"
                className={`transition-colors hover:text-zinc-950 ${
                  pathname === "/shop" ? "text-zinc-950 font-semibold border-b border-zinc-900 pb-0.5" : ""
                }`}
              >
                Shop All
              </Link>

              {/* Room Formula Highlight link */}
              <Link
                href="/deevaya-room-formula"
                className={`group flex items-center gap-1.5 transition-colors hover:text-amber-900 ${
                  pathname.startsWith("/deevaya-room-formula")
                    ? "text-zinc-950 font-semibold border-b border-zinc-900 pb-0.5"
                    : ""
                }`}
              >
                <span>Room Formulas</span>
                <span className="text-[9px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-bold tracking-wider group-hover:bg-amber-200 transition-colors">
                  DIGITAL
                </span>
              </Link>

              <Link
                href="/blog"
                className={`transition-colors hover:text-zinc-950 ${
                  pathname.startsWith("/blog") ? "text-zinc-950 font-semibold border-b border-zinc-900 pb-0.5" : ""
                }`}
              >
                Journal
              </Link>

              <Link
                href="/explore-deevaya"
                className={`transition-colors hover:text-zinc-950 ${
                  pathname === "/explore-deevaya" ? "text-zinc-950 font-semibold border-b border-zinc-900 pb-0.5" : ""
                }`}
              >
                Explore
              </Link>

              <Link
                href="/about-us"
                className={`transition-colors hover:text-zinc-950 ${
                  pathname === "/about-us" ? "text-zinc-950 font-semibold border-b border-zinc-900 pb-0.5" : ""
                }`}
              >
                About
              </Link>
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-3">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 text-zinc-600 hover:text-zinc-950 p-2 rounded-full hover:bg-zinc-100 transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline text-xs tracking-wider uppercase text-zinc-400 font-medium">
                  Search <kbd className="font-mono text-[10px] bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-200">⌘K</kbd>
                </span>
              </button>

              {/* Amazon Storefront Link */}
              <a
                href={siteConfig.socials.amazonStorefront}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs uppercase tracking-wider text-zinc-700 hover:text-zinc-950 px-3 py-1.5 rounded-full border border-zinc-200 hover:border-zinc-400 transition-colors font-medium"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Storefront</span>
                <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-200 bg-white px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-3">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-medium uppercase tracking-wider text-zinc-900 py-1"
              >
                Home
              </Link>

              <div className="pt-2 pb-1 border-t border-zinc-100">
                <span className="text-[11px] font-semibold text-zinc-400 tracking-widest uppercase">
                  Curated Rooms
                </span>
                <div className="mt-2 space-y-2 pl-2">
                  {rooms.map((room) => (
                    <Link
                      key={room.href}
                      href={room.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between text-xs text-zinc-700 hover:text-zinc-950 py-1"
                    >
                      <span>{room.label}</span>
                      <span className="text-[10px] text-zinc-400">{room.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-100 space-y-3">
                <Link
                  href="/shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium uppercase tracking-wider text-zinc-900 py-1"
                >
                  Shop All Finds
                </Link>

                <Link
                  href="/deevaya-room-formula"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-medium uppercase tracking-wider text-amber-900 py-1"
                >
                  <span>Room Formulas</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">
                    11 GUIDES
                  </span>
                </Link>

                <Link
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium uppercase tracking-wider text-zinc-900 py-1"
                >
                  Journal / Articles
                </Link>

                <Link
                  href="/explore-deevaya"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium uppercase tracking-wider text-zinc-900 py-1"
                >
                  Explore (Bio Links)
                </Link>

                <Link
                  href="/about-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium uppercase tracking-wider text-zinc-900 py-1"
                >
                  About Us
                </Link>

                <Link
                  href="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium uppercase tracking-wider text-zinc-900 py-1"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile Socials */}
              <div className="pt-4 border-t border-zinc-100 flex items-center gap-4">
                <a
                  href={siteConfig.socials.amazonStorefront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 bg-zinc-900 text-white text-xs uppercase tracking-wider rounded-lg font-medium"
                >
                  Amazon Storefront ↗
                </a>
                <a
                  href={siteConfig.socials.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 border border-zinc-300 text-zinc-800 text-xs uppercase tracking-wider rounded-lg font-medium hover:bg-zinc-50"
                >
                  Pinterest ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        posts={posts}
        products={products}
        roomFormulas={roomFormulas}
      />
    </>
  );
}
