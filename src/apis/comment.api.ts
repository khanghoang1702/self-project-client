import commentService from "../services/comment.service.ts";
import {Comment} from "../interfaces/comment.interface.ts";
import {ApiResponse} from "../interfaces/response.interface.ts";
import {PostComment} from "../interfaces/post-comment.interface.ts";

const comment = async (data: PostComment) => {
    const res = await commentService.post<ApiResponse<Comment>>('', data)
    return res.data
}

const getBlogComments = async (blogId: string) => {
    const res = await commentService.get<ApiResponse<Comment[]>>(`/${blogId}`)
    return res.data
}

export const commentApi = {comment, getBlogComments}