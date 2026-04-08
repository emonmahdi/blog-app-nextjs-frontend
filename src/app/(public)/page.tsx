import HomeClient from "@/src/components/HomeClient";
import { getBlogs } from "../services/blog.api";
import Hero from "@/src/components/Hero";

export const revalidate = 30; // 🔥 ISR (30 sec)

export default async function HomePage() {
  const data = await getBlogs();

  return (
    <>
      <Hero />
      <HomeClient blogs={data} />;
    </>
  );
}
