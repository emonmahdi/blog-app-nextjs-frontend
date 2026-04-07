/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "../lib/axios"


export const getBlogs = async() => {
    const res = await axiosInstance.get('/blogs');
    const data  = res.data.data;
    return data;
}


export const getSingleBlog = async(id: string) => {
    const res = await axiosInstance.get(`/blogs/${id}`)
    return res.data.data;
}

export const deleteBlog = async(id: string) => {
    const res = await axiosInstance.delete(`/blogs/${id}`)
    return res.data.data;
}

export const updateBlog = async(id: string, data:any) => {
    const res = await axiosInstance.patch(`/blogs/${id}`, data)
    return res.data.data;
}