import { getFeaturedProducts, getRoomFormulas, getRecentPosts } from "@/lib/content";
import { HomeClient } from "@/components/home/HomeClient";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(8);
  const roomFormulas = getRoomFormulas();
  const recentPosts = getRecentPosts(3);

  return (
    <HomeClient
      featuredProducts={featuredProducts}
      roomFormulas={roomFormulas}
      recentPosts={recentPosts}
    />
  );
}
