import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  priority?: boolean;
}

export function PostCard({ post, priority = false }: PostCardProps) {
  return (
    <article className="group flex flex-col bg-white rounded-xl border border-zinc-200/80 overflow-hidden hover:shadow-lg hover:border-zinc-300 transition-all duration-300">
      {/* Featured Image */}
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full bg-zinc-100 overflow-hidden">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-50 text-zinc-400 font-serif italic text-sm">
            Deevaya Journal
          </div>
        )}

        {post.categories[0] && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-white/95 backdrop-blur-md text-zinc-900 text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm border border-zinc-200/60">
              {post.categories[0]}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2.5">
          <div className="flex items-center gap-3 text-[11px] text-zinc-400">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTime} min read
            </span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl text-zinc-900 group-hover:text-zinc-700 transition-colors leading-snug line-clamp-2">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed font-light">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-900 group-hover:text-amber-900 transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
