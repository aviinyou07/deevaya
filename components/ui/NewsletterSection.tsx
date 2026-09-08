"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Sparkles } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[#FAF8F5] border-y border-stone-200">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(154,123,86,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900/10 text-amber-950 text-[11px] font-semibold tracking-[0.25em] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-800" />
          <span>Deevaya Weekend Journal</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-950 max-w-3xl mx-auto leading-tight">
          Create a Home You Never Want to Leave
        </h2>

        <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
          Get weekly curated Amazon decor finds, paint palette blueprints, and seasonal room
          refresh guides delivered directly to your inbox.
        </p>

        {isSubmitted ? (
          <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm animate-in fade-in zoom-in-95">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Thank you for subscribing! Welcome to the Deevaya community.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2"
          >
            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-stone-300 text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-700 transition-all shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shadow-md hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[11px] text-zinc-500 tracking-wide">
          No spam, ever. Unsubscribe at any time with a single click.
        </p>
      </div>
    </section>
  );
}
