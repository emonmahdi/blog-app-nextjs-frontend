"use client";

import { motion } from "framer-motion";

export default function BlogLoading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <p className="mt-6 text-gray-500 text-lg animate-pulse">
        Loading blog details...
      </p>
    </div>
  );
}