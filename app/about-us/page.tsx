import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Heart, Compass, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Every Beautiful Home Begins With a Feeling",
  description:
    "Learn about Deevaya's philosophy on home decor, real livable spaces, and helping people create a home they love coming back to.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* Editorial Hero Header */}
      <section className="relative py-16 sm:py-24 border-b border-zinc-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-bold tracking-[0.25em] text-amber-900 uppercase">
            The Story of Deevaya
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-zinc-950 font-normal tracking-tight leading-tight">
            Every Beautiful Home Begins With a Feeling.
          </h1>
          <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Have you ever stepped into a room and instantly felt at peace? Not because it was
            filled with expensive furniture, but because it simply felt warm, welcoming, and
            wonderfully like home.
          </p>
        </div>
      </section>

      {/* Main Narrative Article Layout */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12 text-zinc-800 leading-relaxed font-light">
        {/* Intro Highlight */}
        <div className="space-y-6 text-base sm:text-lg">
          <p>
            No two homes are exactly alike. Every family creates memories differently. Every
            apartment has its own personality. Every bedroom reflects someone’s dreams, and every
            living room becomes the heart of countless conversations.
          </p>
          <p>
            Your home tells your story long before you ever say a word. That’s why decorating isn’t
            about copying someone else’s style. It’s about creating a space that feels like you.
          </p>
        </div>

        {/* Big Serif Pull Quote */}
        <div className="my-10 p-8 sm:p-10 rounded-3xl bg-stone-50 border border-stone-200/80 text-center space-y-3">
          <p className="font-serif text-xl sm:text-2xl text-zinc-900 italic leading-snug">
            “The most beautiful homes aren’t remembered for how they looked. They’re remembered
            for how they made people feel.”
          </p>
          <p className="text-xs uppercase tracking-widest text-amber-900 font-semibold">
            — The Deevaya Core Belief
          </p>
        </div>

        {/* Philosophy Block */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal">
            Our Philosophy: Created Slowly
          </h2>
          <p>
            We believe beautiful homes are created slowly. Not overnight. Not by spending thousands
            of dollars. But through thoughtful choices made over time:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-zinc-700">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
              <span>A soft bedding set that invites restful sleep</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
              <span>A warm lamp that shifts the entire mood</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
              <span>Natural textures that make a space feel inviting</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
              <span>Color combinations that bring calm into daily life</span>
            </li>
          </ul>
        </div>

        {/* Beautiful Doesn't Have to Mean Expensive */}
        <div className="space-y-4 pt-6 border-t border-zinc-200">
          <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal">
            Beautiful Doesn’t Have To Mean Expensive
          </h2>
          <p>
            One of the biggest decorating myths is that beautiful homes cost a fortune. We don’t
            believe that. Some of the most inspiring homes aren’t the biggest or most luxurious.
            They’re simply filled with intention.
          </p>
          <p>
            Sometimes a cozy blanket creates warmth. Sometimes a beautiful lamp transforms a room.
            And sometimes all you need is one small idea to fall in love with your home all over
            again.
          </p>
        </div>

        {/* Designed For Real Homes */}
        <div className="space-y-4 pt-6 border-t border-zinc-200">
          <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal">
            Designed For Real Homes
          </h2>
          <p>
            At Deevaya, we celebrate real homes. Homes where kids leave toys on the floor, where
            pets find the sunniest corner to nap, where friends gather around coffee, and where
            family recipes are passed down through generations.
          </p>
          <p>
            Perfection isn’t what makes a home beautiful. Love does. Comfort does. Memories do.
          </p>
        </div>

        {/* Our Promise */}
        <div className="space-y-4 pt-6 border-t border-zinc-200">
          <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal">
            A Promise From Deevaya
          </h2>
          <p>
            We will always choose authenticity over perfection, meaning over trends, comfort over
            clutter, and timeless inspiration over temporary beauty.
          </p>
          <p>
            Thank you for welcoming Deevaya into your home. We hope every visit leaves you
            inspired, and every space you create becomes a place where your most beautiful memories
            begin.
          </p>
        </div>

        {/* Signature */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-serif italic text-zinc-600">With warmth,</p>
            <p className="font-serif text-xl text-zinc-950 font-medium">The Deevaya Team</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/shop"
              className="px-5 py-2.5 rounded-xl bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
            >
              Explore Decor Finds
            </Link>
            <Link
              href="/contact-us"
              className="px-5 py-2.5 rounded-xl border border-zinc-300 text-zinc-800 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
