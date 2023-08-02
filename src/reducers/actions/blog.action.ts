import {createAction} from "@reduxjs/toolkit";
import {Blog} from "../../interfaces/blog.interface.ts";
import {Category} from "../../interfaces/category.interface.ts";
import {BlogDraft} from "../../interfaces/blog-draft.interface.ts";
import {IPagination} from "../../interfaces/pagination.interface.ts";
import {Criteria} from "../../interfaces/criteria.interface.ts";
import {User} from "../../interfaces/user.interface.ts";
import {TopBlogs} from "../../interfaces/top-blogs.interface.ts";
import {PostComment} from "../../interfaces/post-comment.interface.ts";

export const GET_BLOGS_REQUEST = 'blog/getBlogsRequest'
export const GET_BLOGS_SUCCESS = 'blog/getBlogsSuccess'
export const GET_CATEGORIES_REQUEST = 'blog/getCategoriesRequest'
export const GET_CATEGORIES_SUCCESS = 'blog/getCategoriesSuccess'
export const GET_BLOG_DETAIL_REQUEST = 'blog/getBlogDetailRequest'
export const GET_BLOG_DETAIL_SUCCESS = 'blog/getBlogDetailSuccess'
export const GET_BLOG_COMMENTS_REQUEST = 'blog/getBlogCommentsRequest'
export const GET_BLOG_COMMENTS_SUCCESS = 'blog/getBlogCommentsSuccess'
export const CREATE_BLOG_REQUEST = 'blog/createBlogRequest'
export const CREATE_BLOG_SUCCESS = 'blog/createBlogSuccess'



export const getBlogsRequest = createAction<Criteria>(GET_BLOGS_REQUEST)
export const getBlogsSuccess = createAction<{blogs: Blog[], pagination: IPagination}>(GET_BLOGS_SUCCESS)
export const getCategoriesRequest = createAction(GET_CATEGORIES_REQUEST)
export const getCategoriesSuccess = createAction<Category[]>(GET_CATEGORIES_SUCCESS)
export const getBlogDetailRequest = createAction<string>(GET_BLOG_DETAIL_REQUEST)
export const getBlogDetailSuccess = createAction<Comment>(GET_BLOG_DETAIL_SUCCESS)

export const getBlogCommentsRequest = createAction<string>(GET_BLOG_COMMENTS_REQUEST)
export const getBlogCommentsSuccess = createAction(GET_BLOG_COMMENTS_SUCCESS)
export const createBlogRequest = createAction<BlogDraft>(CREATE_BLOG_REQUEST)
export const createBlogSuccess = createAction(CREATE_BLOG_SUCCESS)



export const GET_TOP_BLOGS_REQUEST = 'blog/getTopBlogsRequest'
export const GET_TOP_BLOGS_SUCCESS = 'blog/getTopBlogsSuccess'

export const getTopBlogsRequest = createAction<number>(GET_TOP_BLOGS_REQUEST)
export const getTopBlogsSuccess = createAction<TopBlogs[]>(GET_TOP_BLOGS_SUCCESS)

export const GET_TOP_BLOGGERS_REQUEST = 'blog/getTopBloggersRequest'
export const GET_TOP_BLOGGERS_SUCCESS = 'blog/getTopBloggersSuccess'

export const getTopBloggersRequest = createAction<number>(GET_TOP_BLOGGERS_REQUEST)
export const getTopBloggersSuccess = createAction<User[]>(GET_TOP_BLOGGERS_SUCCESS)

export const POST_COMMENT_REQUEST = 'blog/postCommentRequest'
export const POST_COMMENT_SUCCESS = 'blog/postCommentSuccess'

export const postCommentRequest = createAction<PostComment>(POST_COMMENT_REQUEST)

export const postCommentSuccess = createAction<Comment>(POST_COMMENT_SUCCESS)