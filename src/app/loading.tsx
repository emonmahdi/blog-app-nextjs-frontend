// app/loading.tsx
"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <p className="absolute mt-24 text-gray-500 text-lg animate-pulse">
        Loading...
      </p>
    </div>
  );
}