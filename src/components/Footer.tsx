"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Blogify</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              A modern blogging platform to share ideas, stories, and insights
              with the world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get latest blogs directly in your inbox.
            </p>

            <div className="relative max-w-sm w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-5 pr-32 py-3 text-sm text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 outline-none placeholder:text-gray-300"
              />

              <button className="absolute right-1 top-1 bottom-1 px-5 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Blogify. All rights reserved.
          </p>

          {/* Social Icons */}
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {[
              { icon: FaGlobe, link: "#" },
              { icon: FaTwitter, link: "#" },
              { icon: FaLinkedinIn, link: "#" },
              { icon: FaFacebookF, link: "#" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                >
                  <Icon size={16} className="text-white" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
