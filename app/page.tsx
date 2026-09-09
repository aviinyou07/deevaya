import { getFeaturedProducts, getRoomFormulas, getRecentPosts, getProductsForRoom } from "@/lib/content";
import { HomeClient } from "@/components/home/HomeClient";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(8);
  const roomFormulas = getRoomFormulas();
  const recentPosts = getRecentPosts(2);
  const seasonalProducts = getProductsForRoom("fall-decor-finds").slice(0, 4);

  return (
    <HomeClient
      featuredProducts={featuredProducts}
      roomFormulas={roomFormulas}
      recentPosts={recentPosts}
      seasonalProducts={seasonalProducts}
    />
  );
}
