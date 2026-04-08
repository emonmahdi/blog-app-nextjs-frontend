import Link from "next/link";
import { IBlog } from "../../services/blog.api";

const AllBlogPage = async () => {
  async function getBlogs() {
    const res = await fetch("http://localhost:5000/api/blogs", {
      next: {
        revalidate: 30,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.data;
  }
  const blogs = await getBlogs();
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-gray-900">All Blogs</h1>
        <p className="text-gray-500 text-lg">
          Explore all published articles and insights
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {blogs?.map((blog: IBlog) => (
          <div
            key={blog._id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition">
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
        ))}
      </div>
    </div>
  );
};

export default AllBlogPage;
