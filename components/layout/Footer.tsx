import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-900 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-zinc-900">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4 lg:pr-8">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.25em] text-white font-normal uppercase">
                Deevaya
              </span>
              <span className="block text-[10px] tracking-[0.35em] text-zinc-500 uppercase font-medium mt-0.5">
                Interior & Living
              </span>
            </Link>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              Every home has a story waiting to be told. We believe beautiful homes aren’t
              defined by expensive furniture or passing trends. They’re created through comfort,
              warmth, and the moments shared.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={siteConfig.socials.amazonStorefront}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors inline-flex items-center gap-1.5 bg-zinc-900/50"
              >
                <span>Amazon Storefront</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
              <a
                href={siteConfig.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors inline-flex items-center gap-1.5 bg-zinc-900/50"
              >
                <span>Pinterest</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors inline-flex items-center gap-1.5 bg-zinc-900/50"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Curated Rooms Col */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Curated Rooms
            </p>
            <ul className="space-y-2 text-xs">
              {siteConfig.footerNav.curatedRooms.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial & Guides */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Journal & Guides
            </p>
            <ul className="space-y-2 text-xs">
              {siteConfig.footerNav.editorial.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Transparency */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Trust & Legal
            </p>
            <ul className="space-y-2 text-xs">
              {siteConfig.footerNav.compliance.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure Notice */}
        <div className="pt-8 pb-5 text-zinc-500 text-[11px] leading-relaxed border-b border-zinc-900/60 font-light">
          <p>
            <strong className="text-zinc-400 font-medium">Affiliate Disclosure:</strong> Deevaya
            is a participant in the Amazon Services LLC Associates Program, an affiliate
            advertising program designed to provide a means for sites to earn advertising fees by
            advertising and linking to Amazon.com. When you purchase through links on our site, we
            may earn an affiliate commission at no additional cost to you.
          </p>
        </div>

        {/* Bottom Bar with Developer Credit & Legal Links */}
        <div className="pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Deevaya Interiors. All rights reserved.</p>
            <span className="hidden sm:inline text-zinc-800">•</span>
            <div className="inline-flex items-center gap-1.5 text-zinc-400">
              <span>Made by</span>
              <a
                href="https://xstreaminfotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-600 transition-all font-semibold tracking-wide uppercase text-[10px] group"
              >
                <span>XSTREAM INFOTECH</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-800">•</span>
            <Link href="/terms-conditions" className="hover:text-zinc-300 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-zinc-800">•</span>
            <Link href="/affiliate-disclosure" className="hover:text-zinc-300 transition-colors">
              Affiliate Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
