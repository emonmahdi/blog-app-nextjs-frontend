"use client";

import { useBlogs } from "@/src/app/hooks/useBlogs";
import { deleteBlog } from "@/src/app/services/blog.api";

 
export default function ManageBlogs() {
  const { data, refetch } = useBlogs();

  const handleDelete = async (id: string) => {
    await deleteBlog(id);
    refetch();
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Manage Blogs</h1>

      {data?.map((blog: any) => (
        <div
          key={blog._id}
          className="flex justify-between border p-4 mb-2"
        >
          <span>{blog.title}</span>

          <div className="space-x-3">
            <button className="text-blue-500">Edit</button>
            <button
              onClick={() => handleDelete(blog._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}