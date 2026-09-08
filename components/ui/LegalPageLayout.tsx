import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  content: string;
}

export function LegalPageLayout({
  title,
  subtitle,
  content,
}: LegalPageLayoutProps) {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 sm:py-20 border-b border-zinc-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-zinc-700 font-medium">Compliance</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zinc-950 font-normal tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div
          className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-zinc-950 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-zinc-100 prose-h3:text-lg prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base prose-p:font-light prose-strong:text-zinc-900 prose-strong:font-semibold prose-a:text-amber-900 prose-a:underline prose-li:text-zinc-600 prose-li:text-sm sm:prose-li:text-base prose-hr:border-zinc-200 prose-hr:my-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Reassurance Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
            <span>Deevaya Reader Trust & Transparency Guarantee</span>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-zinc-800 hover:text-zinc-950 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
