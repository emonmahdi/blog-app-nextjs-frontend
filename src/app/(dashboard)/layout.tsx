import Link from "next/link";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-5">Dashboard</h2>

        <nav className="space-y-3">
          <Link href="/dashboard">Overview</Link>
          <br />
          <Link href="/dashboard/blogs">Manage Blogs</Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}