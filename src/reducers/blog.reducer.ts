import {createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Blog} from "../interfaces/blog.interface.ts";
import {Category} from "../interfaces/category.interface.ts";
import {IPagination} from "../interfaces/pagination.interface.ts";
import {User} from "../interfaces/user.interface.ts";
import {TopBlogs} from "../interfaces/top-blogs.interface.ts";

interface BlogState {
    data: {
        blogs: Blog[],
        pagination: IPagination,
        topBlogs: TopBlogs[],
        topBloggers: User[],
        blogDetail: Blog,
        categories: Category[]
    },
    loading: boolean
    error: any
}

const initialState: BlogState = {
    data: {
        blogs: [],
        pagination: {} as IPagination,
        topBloggers:[],
        topBlogs:[],
        blogDetail: {} as Blog,
        categories: []
    },
    loading: true,
    error: null,
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        getCategoriesRequest(state) {
            state.loading = true
            state.error = null
        },
        getCategoriesSuccess(state, action) {
            state.loading = false
            state.data = {...state.data, categories: action.payload}
            state.error = null
        },
        getBlogsRequest(state) {
            state.loading = true
            state.error = null
        },
        getBlogsSuccess(state, action) {
            state.loading = false
            state.data = {...state.data, ...action.payload}
            state.error = null
        },
        getTopBlogsRequest(state) {
            state.loading = true
            state.error = null
        },
        getTopBlogsSuccess(state, action) {
            state.loading = false
            state.data = {...state.data, topBlogs: action.payload}
            state.error = null
        },
        getTopBloggersRequest(state) {
            state.loading = true
            state.error = null
        },
        getTopBloggersSuccess(state, action) {
            state.loading = false
            state.data = {...state.data, topBloggers: action.payload}
            state.error = null
        },

        getBlogDetailRequest(state) {
            state.loading = true
            state.error = null
        },
        getBlogDetailSuccess(state, action) {
            state.loading = false
            state.data = {...state.data, blogDetail: action.payload}
            state.error = null
        },
        createBlogRequest(state) {
            state.loading = true
            state.error = null
        },
        createBlogSuccess(state, action) {
            state.loading = false
            state.data = {...state.data, blogs: [action.payload, ...state.data.blogs]}
            state.error = null
        },
        updateBlogRequest(state) {
            state.loading = true
            state.error = null
        },
        updateBlogSuccess(state, action) {
            state.loading = false
            state.data = {...state.data, blogs: [...state.data.blogs, action.payload]}
            state.error = null
        },
        postCommentRequest() {
        },
        postCommentSuccess(state, action) {
            state.loading = false
            state.data.blogDetail.comments = [action.payload, ...state.data.blogDetail.comments]
            state.error = null
        },
    }
})

const reducer = blogSlice.reducer
const blogSelector = (state: RootState) => state.blog
export const blogList = createSelector(blogSelector, (state) => state.data.blogs)
export const topBlogs = createSelector(blogSelector, (state) => state.data.topBlogs)
export const topBloggers = createSelector(blogSelector, (state) => state.data.topBloggers)
export const blogDetail = createSelector(blogSelector, (state) => state.data.blogDetail)
export const categoryList = createSelector(blogSelector, (state) => state.data.categories)
export const blogLoading = createSelector(blogSelector, (state) => state.loading)
export default reducer