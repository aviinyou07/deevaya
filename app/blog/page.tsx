import type { Metadata } from "next";
import { getPosts, getCategories } from "@/lib/content";
import { BlogClient } from "@/components/blog/BlogClient";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "The Journal — Interior Decor Guides & Design Inspiration",
  description:
    "Explore 62 in-depth interior design guides, room refresh ideas, color palette formulas, and lighting advice by Deevaya.",
};

export default function BlogArchivePage() {
  const posts = getPosts();
  const categories = getCategories();

  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      {/* Header Banner */}
      <section className="py-14 sm:py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-stone-100 text-stone-800 text-[11px] font-semibold tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5 text-amber-800" />
            <span>The Deevaya Journal</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zinc-950 font-normal tracking-tight">
            Interior Design & Living Guides
          </h1>

          <p className="text-zinc-600 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Thoughtful decorating stories, whole-home tours, color palette directions, and practical
            tips designed for real homes and everyday living.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <BlogClient posts={posts} categories={categories} />
      </main>
    </div>
  );
}
