"use client";

import { getSingleBlog } from "@/src/app/services/blog.api";
import { useQuery } from "@tanstack/react-query"; 
import { useParams } from "next/navigation";

export default function BlogDetails() {
    const params = useParams();
  const { data } = useQuery({
    queryKey: ["blog", params?.id],
    queryFn: () => getSingleBlog(params?.id as string)
  });

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p>{data?.content}</p>
    </div>
  );
}