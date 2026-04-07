"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center text-center overflow-hidden">
      {/* Background Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/20 rounded-full animate-spin-slow-reverse"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Explore the World of Blogs
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Discover stories, ideas, and insights from creative minds around the globe.
        </p>

        <Link
          href="/blog"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          Explore Blogs
        </Link>
      </motion.div>
    </section>
  );
}