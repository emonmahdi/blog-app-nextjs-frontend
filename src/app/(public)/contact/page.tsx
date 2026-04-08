"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 mt-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-3">
          Contact Us
        </h1>
        <p className="text-gray-500">
          Have questions? We’d love to hear from you.
        </p>
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
      >
        <form className="grid gap-6">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}