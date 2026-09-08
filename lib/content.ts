import postsData from "@/data/posts.json";
import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import pagesData from "@/data/pages.json";
import roomFormulasData from "@/data/room-formulas.json";
import { Post, Product, Category, PageContent, RoomFormula } from "./types";

const posts = postsData as unknown as Post[];
const products = productsData as unknown as Product[];
const categories = categoriesData as unknown as Category[];
const pages = pagesData as unknown as Record<string, PageContent>;
const roomFormulas = roomFormulasData as unknown as RoomFormula[];

export const ROOM_MAPPINGS: Record<
  string,
  { title: string; slugs: string[]; defaultDesc: string }
> = {
  "deevaya-living-room-finds": {
    title: "Deevaya Living Room Finds",
    slugs: ["living-room-decor", "living-room-furniture", "entryway-decor"],
    defaultDesc:
      "Create a living room that feels warm, comfortable, and naturally inviting. These curated living room finds bring together cozy seating, beautiful tables, layered rugs, soft pillows, warm lighting, and timeless decor designed for everyday life.",
  },
  "deevaya-bedroom-finds": {
    title: "Deevaya Bedroom Finds",
    slugs: ["bedroom-decor", "bedding-sets"],
    defaultDesc:
      "Turn your bedroom into a calm, cozy retreat with beautiful pieces chosen for comfort and everyday living. These curated bedroom finds bring together soft bedding, warm lighting, stylish storage, and soothing textures.",
  },
  "deevaya-kitchen-finds": {
    title: "Deevaya Kitchen Finds",
    slugs: ["kitchen-decor", "kitchen-fixtures"],
    defaultDesc:
      "Create a kitchen that feels organized, welcoming, and beautifully lived-in. These thoughtfully curated kitchen finds bring together practical storage, stylish serveware, warm lighting, and everyday pieces that make cooking more joyful.",
  },
  "deevaya-bathroom-favorites": {
    title: "Deevaya Bathroom Favorites",
    slugs: ["bathroom-decor", "bathroom-organization-storage"],
    defaultDesc:
      "Make everyday routines feel calmer with bathroom favorites that combine smart organization and clean, welcoming style. From useful storage and soft towels to mirrors, lighting, and decorative accents.",
  },
  "fall-decor-finds": {
    title: "Fall Decor Finds",
    slugs: ["fall-decor-finds", "fall-decor"],
    defaultDesc:
      "Welcome the beauty of autumn into your home with cozy textures, warm earthy colors, and charming seasonal details. These thoughtfully curated fall decor finds bring comfort and seasonal personality to any space.",
  },
};

export function getPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRecentPosts(limit = 4): Post[] {
  return posts.slice(0, limit);
}

export function getRelatedPosts(currentSlug: string, categoryNames: string[], limit = 3): Post[] {
  return posts
    .filter((p) => p.slug !== currentSlug)
    .filter((p) => p.categories.some((c) => categoryNames.includes(c)))
    .slice(0, limit);
}

export function getCategories(): Category[] {
  return categories.filter((c) => c.count > 0);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((p) => !p.isRoomFormula).slice(0, limit);
}

export function getProductsByCategorySlug(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlugs.includes(categorySlug));
}

export function getProductsForRoom(roomSlug: string): Product[] {
  const roomConfig = ROOM_MAPPINGS[roomSlug];
  if (!roomConfig) return [];
  return products.filter(
    (p) =>
      !p.isRoomFormula &&
      roomConfig.slugs.some((s) => p.categorySlugs.includes(s))
  );
}

export function getRoomFormulas(): RoomFormula[] {
  return roomFormulas;
}

export function getRoomFormulaBySlug(slug: string): RoomFormula | undefined {
  return roomFormulas.find((r) => r.slug === slug);
}

export function getPageBySlug(slug: string): PageContent | undefined {
  return pages[slug];
}

export function searchContent(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return { posts: [], products: [], roomFormulas: [] };

  const matchedPosts = posts
    .filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.categories.some((c) => c.toLowerCase().includes(q))
    )
    .slice(0, 10);

  const matchedProducts = products
    .filter(
      (p) =>
        !p.isRoomFormula &&
        (p.name.toLowerCase().includes(q) ||
          p.cleanDescription.toLowerCase().includes(q) ||
          p.categories.some((c) => c.toLowerCase().includes(q)))
    )
    .slice(0, 15);

  const matchedRoomFormulas = roomFormulas.filter(
    (r) =>
      r.name.toLowerCase().includes(q) ||
      r.cleanDescription.toLowerCase().includes(q)
  );

  return {
    posts: matchedPosts,
    products: matchedProducts,
    roomFormulas: matchedRoomFormulas,
  };
}
