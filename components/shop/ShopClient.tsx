"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Sparkles, X, ChevronDown } from "lucide-react";
import { Product } from "@/lib/types";
import { ProductCard } from "@/components/ui/ProductCard";

interface ShopClientProps {
  initialProducts: Product[];
}

const POPULAR_FILTERS = [
  { label: "All Finds", value: "all" },
  { label: "Living Room", value: "living" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Bathroom", value: "bathroom" },
  { label: "Fall Decor", value: "fall" },
  { label: "Bedding & Linens", value: "bedding" },
  { label: "Wall Decor", value: "wall" },
  { label: "Candles & Scents", value: "candle" },
];

export function ShopClient({ initialProducts }: ShopClientProps) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "name-asc" | "name-desc">("featured");
  const [visibleCount, setVisibleCount] = useState(24);

  const filteredProducts = useMemo(() => {
    let list = initialProducts.filter((p) => !p.isRoomFormula);

    // 1. Category Filter
    if (selectedFilter !== "all") {
      list = list.filter((p) =>
        p.categories.some((c) =>
          c.toLowerCase().includes(selectedFilter.toLowerCase())
        ) ||
        p.categorySlugs.some((s) =>
          s.toLowerCase().includes(selectedFilter.toLowerCase())
        )
      );
    }

    // 2. Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.cleanDescription.toLowerCase().includes(q) ||
          p.categories.some((c) => c.toLowerCase().includes(q))
      );
    }

    // 3. Sorting
    if (sortBy === "name-asc") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [initialProducts, selectedFilter, searchQuery, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <div className="space-y-8">
      {/* Controls Bar: Search, Category Pills & Sort */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search 470+ decor finds (e.g., rug, console, lamp)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(24);
              }}
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Dropdown & Count */}
          <div className="flex items-center justify-between md:justify-end gap-3">
            <span className="text-xs text-zinc-500">
              Showing <strong className="text-zinc-900 font-medium">{displayedProducts.length}</strong> of{" "}
              <strong className="text-zinc-900 font-medium">{filteredProducts.length}</strong> finds
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/30 shadow-sm"
            >
              <option value="featured">Featured Order</option>
              <option value="name-asc">Alphabetical (A - Z)</option>
              <option value="name-desc">Alphabetical (Z - A)</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {POPULAR_FILTERS.map((f) => {
            const isActive = selectedFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => {
                  setSelectedFilter(f.value);
                  setVisibleCount(24);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-sm"
                    : "bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      {displayedProducts.length === 0 ? (
        <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-zinc-200 p-8">
          <p className="font-serif text-xl text-zinc-900 italic">
            No decor finds found matching your criteria.
          </p>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto">
            Try adjusting your search terms or clearing your current category filters.
          </p>
          <button
            onClick={() => {
              setSelectedFilter("all");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-xl bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="pt-8 pb-4 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 24)}
            className="px-8 py-3.5 rounded-xl bg-white border border-zinc-300 hover:border-zinc-900 text-zinc-900 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
          >
            Load More Finds ({filteredProducts.length - displayedProducts.length} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
