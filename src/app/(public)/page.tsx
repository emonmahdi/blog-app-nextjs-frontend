"use client";
 
import { motion } from "framer-motion";
import Link from "next/link";
import { useBlogs } from "../hooks/useBlogs";

export default function HomePage() {
  const { data, isLoading } = useBlogs();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {data?.map((blog: any) => (
        <motion.div
          key={blog._id}
          whileHover={{ scale: 1.05 }}
          className="p-4 border rounded-xl shadow"
        >
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p>{blog.content.slice(0, 100)}</p>

          <Link href={`/blog/${blog._id}`}>
            Read More →
          </Link>
        </motion.div>
      ))}
    </div>
  );
}