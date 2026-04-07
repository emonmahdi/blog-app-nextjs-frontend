"use client";

import { getSingleBlog } from "@/src/app/services/blog.api";
import { useQuery } from "@tanstack/react-query"; 
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogDetailsClient() {
  const params = useParams();
  const router = useRouter();

  const { data, error } = useQuery({
    queryKey: ["blog", params?.id],
    queryFn: () => getSingleBlog(params?.id as string),
    enabled: !!params?.id,
  });

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">
          Failed to load blog. Please try again.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-lg md:shadow-xl my-10"
    >
      {/* Blog Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">
        {data?.title || "Blog Title"}
      </h1>

      {/* Blog Date */}
      <p className="text-sm text-gray-400 mb-6">
        Published on: {data?.createdAt ? new Date(data.createdAt).toLocaleDateString() : "--"}
      </p>

      {/* Blog Content */}
      <div className="prose prose-lg sm:prose-xl text-gray-700 max-w-full">
        <p>{data?.content || "Blog content loading..."}</p>
      </div>

      {/* Back Button */}
      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/"
          className="text-blue-500 hover:underline font-medium"
        >
          ← Back to Home
        </Link>

        <button
          onClick={() => router.refresh()}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Refresh
        </button>
      </div>
    </motion.div>
  );
}