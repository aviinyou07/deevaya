export interface Post {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  categories: string[];
  categoryIds: number[];
  readingTime: number;
  wordCount: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  formattedPrice: string;
  image: string;
  images: string[];
  categories: string[];
  categorySlugs: string[];
  affiliateUrl: string;
  buttonText: string;
  description: string;
  cleanDescription: string;
  isRoomFormula: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
  parent: number;
  description: string;
}

export interface PageContent {
  id: number;
  title: string;
  slug: string;
  content: string;
}

export interface RoomFormula extends Product {
  palette?: { name: string; hex: string }[];
}
