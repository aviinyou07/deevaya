import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getPosts, getProducts, getRoomFormulas } from "@/lib/content";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "home decor",
    "amazon home finds",
    "room formula",
    "interior styling",
    "living room decor",
    "bedroom decor",
    "kitchen finds",
    "warm minimal interior",
    "cozy home aesthetic",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  other: {
    "p:domain_verify": siteConfig.verifications.pinterest,
    impact_site_verification: siteConfig.verifications.impact,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = getPosts();
  const products = getProducts();
  const roomFormulas = getRoomFormulas();

  return (
      <html
        lang="en"
        className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans selection:bg-amber-900 selection:text-white">
        <Navbar posts={posts} products={products} roomFormulas={roomFormulas} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
