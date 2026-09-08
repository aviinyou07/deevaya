import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const isDigital = product.isRoomFormula;

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-zinc-200/80 overflow-hidden hover:shadow-lg hover:border-zinc-300 transition-all duration-300">
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] w-full bg-zinc-100 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400 font-serif italic text-sm">
            Deevaya Curated
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {isDigital ? (
            <span className="inline-flex items-center gap-1 bg-amber-900/90 backdrop-blur-md text-amber-100 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3 h-3" /> Formula Guide
            </span>
          ) : product.categories[0] ? (
            <span className="bg-white/95 backdrop-blur-md text-zinc-800 text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm border border-zinc-200/60">
              {product.categories[0]}
            </span>
          ) : null}
        </div>

        {product.formattedPrice && product.formattedPrice !== "Featured Find" && (
          <div className="absolute bottom-3 right-3 z-10">
            <span className="bg-zinc-950/85 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
              {product.formattedPrice}
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div className="space-y-1.5">
          <h3 className="font-serif text-sm sm:text-base text-zinc-900 group-hover:text-zinc-700 transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
          {product.cleanDescription && (
            <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
              {product.cleanDescription}
            </p>
          )}
        </div>

        <div className="pt-2">
          {product.affiliateUrl ? (
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium uppercase tracking-wider transition-colors shadow-sm group-hover:bg-zinc-950"
            >
              <span>{product.buttonText || "View on Amazon"}</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          ) : (
            <button
              type="button"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-zinc-100 text-zinc-800 text-xs font-medium uppercase tracking-wider"
            >
              Curated Find
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
