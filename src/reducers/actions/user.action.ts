import {createAction} from "@reduxjs/toolkit";
import {User} from "../../interfaces/user.interface.ts";
import {PaginationResponse} from "../../interfaces/pagination-response.interface.ts";
import {Blog} from "../../interfaces/blog.interface.ts";
import {UpdateUser} from "../../interfaces/update-user.interface.ts";
import {UpdateBlog} from "../../interfaces/update-blog.interface.ts";

export const GET_DETAIL_REQUEST = 'user/getUserDetailRequest'
export const GET_DETAIL_SUCCESS = 'user/getUserDetailSuccess'

export const GET_USER_BLOGS_REQUEST = 'user/getUserBlogsRequest'
export const GET_USER_BLOGS_SUCCESS = 'user/getUserBlogsSuccess'

export const CLEAR_DETAIL = 'user/clearUserDetail'

export const getUserDetailRequest = createAction(GET_DETAIL_REQUEST);

export const getUserDetailSuccess = createAction<User>(GET_DETAIL_SUCCESS);

export const clearUserDetail = createAction<{}>(CLEAR_DETAIL);

export const getUserBlogsRequest = createAction<string>(GET_USER_BLOGS_REQUEST)

export const getUserBlogsSuccess = createAction<PaginationResponse<Blog>>(GET_USER_BLOGS_SUCCESS)

export const PUBLISH_BLOG_REQUEST = 'user/publishBlogRequest'
export const PUBLISH_BLOG_SUCCESS = 'user/publishBlogSuccess'

export const publishBlogRequest = createAction<string>(PUBLISH_BLOG_REQUEST)
export const publishBlogSuccess = createAction<Blog>(PUBLISH_BLOG_SUCCESS)

export const UPDATE_USER_REQUEST = 'user/updateUserRequest'
export const UPDATE_USER_SUCCESS = 'user/updateUserSuccess'

export const updateUserRequest = createAction<UpdateUser>(UPDATE_USER_REQUEST)
export const updateUserSuccess = createAction<User>(UPDATE_USER_SUCCESS)

export const UPDATE_BLOG_REQUEST = 'user/updateBlogRequest'
export const UPDATE_BLOG_SUCCESS = 'user/updateBlogSuccess'

export const updateBlogRequest = createAction<{id: string, data: UpdateBlog}>(UPDATE_BLOG_REQUEST)
export const updateBlogSuccess = createAction<Blog>(UPDATE_BLOG_SUCCESS)