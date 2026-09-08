import { MetadataRoute } from "next";
import { getPosts, getCategories, ROOM_MAPPINGS } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // 1. Static Core Pages
  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/explore-deevaya",
    "/shop",
    "/deevaya-room-formula",
    "/fall-decor-finds",
    "/blog",
    "/affiliate-disclosure",
    "/privacy-policy",
    "/terms-conditions",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Curated Room Pages
  const roomRoutes = Object.keys(ROOM_MAPPINGS)
    .filter((k) => k !== "fall-decor-finds")
    .map((slug) => ({
      url: `${baseUrl}/shop/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  // 3. Blog Posts (62 Articles)
  const posts = getPosts();
  const postRoutes = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 4. Categories (21 Categories)
  const categories = getCategories();
  const categoryRoutes = categories.map((c) => ({
    url: `${baseUrl}/category/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...roomRoutes, ...postRoutes, ...categoryRoutes];
}
