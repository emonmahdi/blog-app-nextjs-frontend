"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeClient({ blogs }: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Latest Blogs</h1>
        <p className="text-gray-500">
          Discover insights, stories and ideas
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog: any, index: number) => (
          <motion.div
            key={blog._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-5 flex flex-col h-full">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {blog.content.slice(0, 120)}...
              </p>

              <div className="flex justify-between items-center mt-auto">
                <Link
                  href={`/blog/${blog._id}`}
                  className="text-blue-500 font-medium hover:underline"
                >
                  Read More →
                </Link>

                <span className="text-xs text-gray-400">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}