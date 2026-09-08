"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, BookOpen, ShoppingBag, Sparkles } from "lucide-react";
import { Post, Product, RoomFormula } from "@/lib/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
  products: Product[];
  roomFormulas: RoomFormula[];
}

export function SearchModal({
  isOpen,
  onClose,
  posts,
  products,
  roomFormulas,
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered from parent or global handler
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { posts: [], products: [], roomFormulas: [] };

    const matchedPosts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.categories.some((c) => c.toLowerCase().includes(q))
    ).slice(0, 5);

    const matchedProducts = products.filter(
      (p) =>
        !p.isRoomFormula &&
        (p.name.toLowerCase().includes(q) ||
          p.categories.some((c) => c.toLowerCase().includes(q)))
    ).slice(0, 6);

    const matchedRoomFormulas = roomFormulas.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.cleanDescription.toLowerCase().includes(q)
    ).slice(0, 4);

    return {
      posts: matchedPosts,
      products: matchedProducts,
      roomFormulas: matchedRoomFormulas,
    };
  }, [query, posts, products, roomFormulas]);

  if (!isOpen) return null;

  const totalResults =
    results.posts.length + results.products.length + results.roomFormulas.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-sm transition-opacity">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-zinc-100 gap-3">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            type="text"
            placeholder="Search decor finds, room formulas, articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-zinc-900 placeholder:text-zinc-400 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-zinc-400 hover:text-zinc-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs tracking-wider uppercase text-zinc-400 hover:text-zinc-900 px-2 py-1 rounded border border-zinc-200 font-medium"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-5 space-y-6 flex-1">
          {query.trim() === "" ? (
            <div className="py-8 text-center space-y-4">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                Popular Searches
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Plum Living Room",
                  "Bedroom Finds",
                  "Kitchen Storage",
                  "Fall Decor",
                  "Room Formulas",
                  "Lamps & Lighting",
                  "Warm Neutrals",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-zinc-500">
              <p className="text-base font-serif italic mb-1">No matches found</p>
              <p className="text-xs text-zinc-400">
                Try searching for room categories, colors, or formulas.
              </p>
            </div>
          ) : (
            <>
              {/* Room Formulas */}
              {results.roomFormulas.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-amber-900/80 uppercase mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                    <span>Room Formulas</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {results.roomFormulas.map((formula) => (
                      <Link
                        key={formula.id}
                        href={`/deevaya-room-formula`}
                        onClick={onClose}
                        className="group flex items-center gap-3 p-2.5 rounded-xl border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50/80 transition-all"
                      >
                        {formula.image ? (
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-zinc-100">
                            <Image
                              src={formula.image}
                              alt={formula.name}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                        ) : null}
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium text-zinc-900 truncate group-hover:text-amber-900">
                            {formula.name}
                          </p>
                          <p className="text-[11px] text-zinc-500 font-serif italic">
                            {formula.formattedPrice}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Curated Products */}
              {results.products.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-3">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Decor Finds ({results.products.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.products.map((product) => (
                      <a
                        key={product.id}
                        href={product.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="group flex items-center justify-between p-2 rounded-xl hover:bg-zinc-50 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {product.image && (
                            <div className="relative w-10 h-10 rounded-md overflow-hidden shrink-0 bg-zinc-100">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="40px"
                              />
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="text-xs font-medium text-zinc-900 truncate group-hover:underline">
                              {product.name}
                            </p>
                            <p className="text-[11px] text-zinc-400 truncate">
                              {product.categories[0] || "Amazon Decor"}
                            </p>
                          </div>
                        </div>
                        <span className="text-[11px] font-medium text-zinc-600 bg-zinc-100 px-2 py-1 rounded shrink-0 flex items-center gap-1 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                          View ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Editorial Articles */}
              {results.posts.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-3">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Articles & Guides ({results.posts.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.posts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        onClick={onClose}
                        className="group flex items-center justify-between p-2 rounded-xl hover:bg-zinc-50 transition-colors"
                      >
                        <div className="min-w-0 pr-4">
                          <p className="text-xs font-medium text-zinc-900 truncate group-hover:underline">
                            {post.title}
                          </p>
                          <p className="text-[11px] text-zinc-400">
                            {post.categories[0] || "Design Guide"} • {post.readingTime} min read
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 shrink-0 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
          <span>Search curated decor, room formulas & guides</span>
          <span className="font-mono">Deevaya Editorial</span>
        </div>
      </div>
    </div>
  );
}
