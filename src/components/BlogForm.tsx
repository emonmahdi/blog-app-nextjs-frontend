"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createBlog } from "@/src/app/services/blog.api";
import { useState } from "react"; 
import { Toast } from "./toast";

type FormData = {
  title: string;
  content: string;
  author: string;
  isPublished: boolean;
};

export default function BlogForm() {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: { isPublished: false },
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  // React Query mutation
  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      setToastType("success");
      setToastMessage("Blog created successfully!");
      reset();
    },
    onError: (error: any) => {
      setToastType("error");
      setToastMessage(error?.message || "Failed to create blog.");
    },
  });

  const onSubmit = (data: FormData) => mutation.mutate(data);

  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Create New Blog</h2>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", { required: true })}
          placeholder="Title"
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <textarea
          {...register("content", { required: true })}
          placeholder="Content"
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-44 resize-none"
        />

        <input
          {...register("author", { required: true })}
          placeholder="Author"
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            {...register("isPublished")}
            className="w-5 h-5 accent-blue-500 rounded"
          />
          <label className="font-medium">Publish Now</label>
        </div>

        <button
          type="submit"
          disabled={mutation.isLoading} // ✅ fix: use isLoading directly from mutation
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {mutation.isLoading ? "Creating..." : "Create Blog"}
        </button>
      </form>

      {/* Toast */}
      {toastMessage && <Toast message={toastMessage} type={toastType} />}
    </div>
  );
}