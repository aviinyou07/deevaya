import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategories, getCategoryBySlug, getPosts } from "@/lib/content";
import { PostCard } from "@/components/ui/PostCard";
import { BookOpen, ArrowRight } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} Decor & Design Guides`,
    description: `Explore all Deevaya articles, styling ideas, and tips categorized under ${category.name}.`,
  };
}

export default async function CategoryArchivePage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const allPosts = getPosts();
  const matchingPosts = allPosts.filter((p) =>
    p.categories.some(
      (c) => c.toLowerCase() === category.name.toLowerCase()
    )
  );

  const otherCategories = getCategories().filter((c) => c.slug !== slug);

  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      {/* Header Banner */}
      <section className="py-14 sm:py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-zinc-900 transition-colors">
              Journal
            </Link>
            <span>/</span>
            <span className="text-zinc-800 font-medium">{category.name}</span>
          </div>

          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-[11px] font-semibold tracking-widest uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5 text-amber-800" />
              <span>Category Archive</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zinc-950 font-normal tracking-tight">
              {category.name} ({matchingPosts.length})
            </h1>

            {category.description ? (
              <p className="text-zinc-600 text-xs sm:text-sm max-w-2xl font-light leading-relaxed mt-2">
                {category.description}
              </p>
            ) : (
              <p className="text-zinc-600 text-xs sm:text-sm max-w-2xl font-light leading-relaxed mt-2">
                Curated articles, styling blueprints, and design guides focusing on {category.name}.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {matchingPosts.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-zinc-200 p-8">
            <p className="font-serif text-xl text-zinc-900 italic">
              No articles found in this category.
            </p>
            <Link
              href="/blog"
              className="inline-block px-5 py-2.5 rounded-xl bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
            >
              Browse All Articles
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {matchingPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {/* Other Categories */}
        <div className="mt-20 pt-12 border-t border-zinc-200">
          <h2 className="font-serif text-2xl text-zinc-950 font-normal mb-6">
            Other Topics to Explore
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {otherCategories.map((c) => (
              <Link
                key={c.id}
                href={`/category/${c.slug}`}
                className="px-4 py-2 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-700 text-xs font-medium uppercase tracking-wider transition-all"
              >
                {c.name} ({c.count})
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
