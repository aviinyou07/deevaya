"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Clock, ArrowRight, X } from "lucide-react";
import { Post, Category } from "@/lib/types";
import { PostCard } from "@/components/ui/PostCard";
import { formatDate } from "@/lib/utils";

interface BlogClientProps {
  posts: Post[];
  categories: Category[];
}

export function BlogClient({ posts, categories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  const filteredPosts = useMemo(() => {
    let list = otherPosts;

    if (selectedCategory !== "all") {
      list = list.filter((p) =>
        p.categories.some(
          (c) => c.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.categories.some((c) => c.toLowerCase().includes(q))
      );
    }

    return list;
  }, [otherPosts, selectedCategory, searchQuery]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div className="space-y-16">
      {/* Hero Featured Article (Shown when no search/filter active) */}
      {selectedCategory === "all" && !searchQuery.trim() && featuredPost && (
        <div className="group relative rounded-3xl overflow-hidden bg-white border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Col */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[420px] bg-zinc-100 overflow-hidden">
              {featuredPost.featuredImage ? (
                <Image
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              ) : null}
              {featuredPost.categories[0] && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/95 backdrop-blur-md text-zinc-900 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm">
                    {featuredPost.categories[0]}
                  </span>
                </div>
              )}
            </div>

            {/* Content Col */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <span className="font-semibold uppercase tracking-widest text-amber-900">
                    Featured Story
                  </span>
                  <span>•</span>
                  <span>{formatDate(featuredPost.date)}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readingTime} min read
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-zinc-950 font-normal leading-snug group-hover:text-amber-900 transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-zinc-600 text-sm leading-relaxed font-light line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>Read Featured Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter & Search Bar */}
      <div className="space-y-4 pt-4 border-t border-zinc-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search 62 articles & guides..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
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

          <span className="text-xs text-zinc-500">
            Showing <strong className="text-zinc-900">{displayedPosts.length}</strong> of{" "}
            <strong className="text-zinc-900">{filteredPosts.length}</strong> articles
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => {
              setSelectedCategory("all");
              setVisibleCount(12);
            }}
            className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-zinc-950 text-white shadow-sm"
                : "bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-400"
            }`}
          >
            All Articles
          </button>
          {categories.slice(0, 10).map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.name.toLowerCase();
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setVisibleCount(12);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-sm"
                    : "bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-400"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid */}
      {displayedPosts.length === 0 ? (
        <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-zinc-200 p-8">
          <p className="font-serif text-xl text-zinc-900 italic">
            No articles found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-xl bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="pt-8 pb-4 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="px-8 py-3.5 rounded-xl bg-white border border-zinc-300 hover:border-zinc-900 text-zinc-900 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
          >
            Load More Articles ({filteredPosts.length - displayedPosts.length} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
