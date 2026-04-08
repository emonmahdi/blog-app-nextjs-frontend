"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, FileText, PlusCircle, Menu, X } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Manage Blogs",
      href: "/dashboard/blogs",
      icon: FileText,
    },
    {
      name: "Create Blog",
      href: "/dashboard/create",
      icon: PlusCircle,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 🔥 Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 w-64 bg-gray-900 text-white p-6 transform h-screen ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        {/* Logo */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-800 text-gray-300"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* 🔥 Main Area */}
      <div className="flex-1 flex flex-col">
        {/* 🔥 Topbar */}
        <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu />
          </button>

          <h1 className="text-xl font-semibold text-gray-800">Admin Panel</h1>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Hello, Admin</span>
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
              A
            </div>
          </div>
        </header>

        {/* 🔥 Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
