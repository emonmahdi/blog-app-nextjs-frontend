import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "../services/blog.api"


export const useBlogs = () => {
    return useQuery({
        queryKey:['blogs'],
        queryFn: getBlogs
    })
}