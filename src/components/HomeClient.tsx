"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeClient({ blogs }: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-gray-900">Latest Blogs</h1>
        <p className="text-gray-500 text-lg">
          Discover insights, stories, and creative ideas
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {blogs?.map((blog: any, index: number) => (
          <motion.div
            key={blog._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            {/* Gradient Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-30 transition-opacity rounded-3xl"></div>

            <div className="p-6 flex flex-col h-full relative z-10">
              <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm mb-5 flex-grow">
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