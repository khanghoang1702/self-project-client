import {ApiResponse} from "../interfaces/response.interface.ts";
import blogService from "../services/blog.service.ts";
import {Blog} from "../interfaces/blog.interface.ts";
import {Category} from "../interfaces/category.interface.ts";
import {PaginationResponse} from "../interfaces/pagination-response.interface.ts";
import {BlogList} from "../interfaces/blog-list.interface.ts";
import {Criteria} from "../interfaces/criteria.interface.ts";
import userService from "../services/user.service.ts";
import {User} from "../interfaces/user.interface.ts";
import {TopBlogs} from "../interfaces/top-blogs.interface.ts";
import {toast} from "react-toastify";
import {UpdateBlog} from "../interfaces/update-blog.interface.ts";

const createBlog = async (data: any) => {
    const res = await blogService.post<ApiResponse<Blog>>('', data);
    return res.data
}

const getBlogs = async (criteria?: Criteria) => {
    let params = {}
    if (criteria) {
        const {page, pageSize, keyword} = criteria
        params = {
            page: page,
            pageSize: pageSize,
            ...(keyword && {keyword: keyword})
        }
    }
    const res = await blogService.get<ApiResponse<PaginationResponse<BlogList>>>('', {params});
    return res.data
}

const getCategories = async () => {
    const res = await blogService.get<ApiResponse<Category[]>>('/categories');
    return res.data
}
const getBlog = async (blogId: string) => {
    const res = await blogService.get<ApiResponse<Blog>>(`/${blogId}`);
    return res.data
}

const getTopBlogs = async (limit?: number) => {
    let params = {}
    params = {
        ...(limit && {limit: limit})
    }
    const res = await blogService.get<ApiResponse<TopBlogs[]>>('/top-blogs', {params});
    return res.data
}

const getTopBloggers = async (limit?: number) => {
    let params = {}
    params = {
        ...(limit && {limit: limit})
    }
    const res = await userService.get<ApiResponse<User[]>>(`/top-bloggers`, {params});
    return res.data
}

const getUserBlogs = async (userId: string, criteria?: Criteria) => {
    let params = {}
    if (criteria) {
        const {page, pageSize, keyword} = criteria
        params = {
            page: page,
            pageSize: pageSize,
            ...(keyword && {keyword: keyword})
        }
    }
    const res = await blogService.get<ApiResponse<PaginationResponse<BlogList>>>(`/user-blog/${userId}`, {params});
    return res.data
}

const vote = async (blogId: string, type: string) => {
    const data = {type}
    const res = await blogService.post<ApiResponse<Blog>>(`/vote/${blogId}`, data);
    return res.data
}

const updateBlog = async (blogId: string, data: UpdateBlog) => {
    try {
        const res = await blogService.patch<ApiResponse<Blog>>(`/${blogId}`, data);
        toast('Update blog successfully', {
            type: 'success'
        })
        return res.data
    } catch (e: any) {
        toast(e?.message, {
            type: 'error'
        })
        return e
    }
}


const publishBlog = async (blogId: string): Promise<Blog> => {
    try {
        const res = await blogService.post<ApiResponse<Blog>>(`/publish/${blogId}`);

        toast('Publish blog successfully', {
            type: 'success'
        })
        return res.data.data
    } catch (e: any) {
        toast('Publishing blog error', {
            type: 'error'
        })
        return e
    }

}

export const blogApi = {
    createBlog,
    getBlogs,
    getTopBlogs,
    getTopBloggers,
    getCategories,
    getBlog,
    getUserBlogs,
    vote,
    updateBlog,
    publishBlog
}