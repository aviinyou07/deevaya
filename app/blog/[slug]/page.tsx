import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPosts, getPostBySlug, getRelatedPosts } from "@/lib/content";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar";
import { PostCard } from "@/components/ui/PostCard";
import { formatDate } from "@/lib/utils";
import { Clock, Calendar, ArrowLeft, Share2, Sparkles, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
  };
}

function processArticleContent(html: string) {
  const headings: { id: string; text: string; level: number }[] = [];
  let counter = 0;

  const processed = html.replace(
    /<h([2-4])([^>]*)>(.*?)<\/h\1>/gi,
    (match, levelStr, attrs, innerText) => {
      const level = parseInt(levelStr, 10);
      const cleanText = innerText.replace(/<.*?>/g, "").trim();
      if (!cleanText) return match;

      const slugified = cleanText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .slice(0, 40);
      const id = `heading-${counter++}-${slugified}`;

      headings.push({ id, text: cleanText, level });
      return `<h${level} id="${id}" class="scroll-mt-28" ${attrs}>${innerText}</h${level}>`;
    }
  );

  return { processedHtml: processed, headings };
}

export default async function SinglePostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { processedHtml, headings } = processArticleContent(post.content);
  const relatedPosts = getRelatedPosts(post.slug, post.categories, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Reading Progress Indicator */}
      <ReadingProgressBar />

      {/* Article Header & Hero */}
      <header className="py-12 sm:py-16 bg-stone-50/50 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-zinc-900 transition-colors">
              Journal
            </Link>
            <span>/</span>
            <span className="text-zinc-700 font-medium truncate max-w-xs sm:max-w-md">
              {post.categories[0] || "Guide"}
            </span>
          </div>

          {/* Category Badge */}
          {post.categories[0] && (
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-semibold tracking-wider uppercase">
                {post.categories[0]}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zinc-950 font-normal tracking-tight leading-[1.2]">
            {post.title}
          </h1>

          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-zinc-500 border-t border-zinc-200/80">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              <span>{formatDate(post.date)}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>{post.readingTime} min read</span>
            </div>
            <span>•</span>
            <span>By The Deevaya Editorial Team</span>
          </div>
        </div>
      </header>

      {/* Featured Hero Media */}
      {post.featuredImage && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-100">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      )}

      {/* Main Content & Sidebar Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Body */}
          <main className="lg:col-span-8 space-y-8">
            {/* Amazon Associates Disclosure Callout */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-zinc-600 leading-relaxed font-light">
              <strong className="text-zinc-900 font-medium">Reader Note:</strong> We
              thoughtfully hand-select every piece we recommend. When you purchase through links on
              our site, we may earn an affiliate commission from Amazon at no extra cost to you.
            </div>

            {/* Rendered HTML */}
            <article
              className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-zinc-950 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-3 prose-h3:pt-4 prose-h3:border-t prose-h3:border-zinc-100 prose-h4:text-lg prose-h4:mt-6 prose-h4:text-amber-950 prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:text-base prose-p:font-light prose-strong:text-zinc-900 prose-strong:font-semibold prose-a:text-amber-900 prose-a:underline prose-a:font-medium prose-img:rounded-2xl prose-img:shadow-md prose-img:border prose-img:border-zinc-200"
              dangerouslySetInnerHTML={{ __html: processedHtml }}
            />

            {/* Bottom Sharing & Return */}
            <div className="mt-14 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-800 hover:text-zinc-950 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Journal</span>
              </Link>

              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-zinc-800 text-xs font-medium uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Pin on Pinterest</span>
                </a>
              </div>
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 self-start">
            {/* Table of Contents */}
            <TableOfContents headings={headings} />

            {/* Curated Shop Callout */}
            <div className="p-6 rounded-2xl bg-stone-900 text-white space-y-4">
              <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-amber-300">
                <ShoppingBag className="w-3.5 h-3.5" />
                Deevaya Storefront
              </div>
              <h3 className="font-serif text-lg font-normal">
                Shop Our Curated Decor Finds
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                Discover the exact furnishings, cozy lighting, and autumn accents featured in our
                latest styling articles.
              </p>
              <Link
                href="/shop"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Browse All 470+ Finds
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-stone-50/70 border-t border-zinc-200 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
                  More Inspiration
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal mt-1">
                  Related Design Guides
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-xs uppercase tracking-wider text-zinc-900 hover:text-amber-900 font-semibold"
              >
                All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <PostCard key={rPost.id} post={rPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
