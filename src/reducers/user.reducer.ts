import {createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {User} from "../interfaces/user.interface.ts";
import {Blog} from "../interfaces/blog.interface.ts";

interface UserState {
    data: {
        userDetail: User,
        userBlogs: Blog[],
    },
    loading: boolean
    error: any
}

const initialState: UserState = {
    data: {
        userDetail: {} as User,
        userBlogs: []
    },
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserDetailRequest(state) {
            state.loading = true
            state.error = null
        },
        getUserDetailSuccess(state, action) {
            state.loading = false
            state.data = {...state.data, userDetail: action.payload}
            state.error = null
        },
        clearUserDetail(state, action) {
            state.data.userDetail = {...action.payload}
        },
        getUserBlogsRequest(state) {
            state.loading = true
            state.error = null
        },
        getUserBlogsSuccess(state, action) {
            state.loading = false
            state.data = {...state.data, userBlogs: [...action.payload]}
            state.error = null
        },
        publishBlogRequest(state) {
            state.loading = true
            state.error = null
        },
        publishBlogSuccess(state, action) {
            state.loading = false
            const index = state.data.userBlogs.findIndex((blog) => blog.id === action.payload.id)
            const newItem = {...state.data.userBlogs[index], ...action.payload}
            state.data = {...state.data, userBlogs: Object.assign([], state.data.userBlogs, {[index]: newItem})}
            state.error = null
        },

        updateUserRequest() {

        },
        updateUserSuccess(state, action) {
            state.loading = false
            state.data = {...state.data, userDetail: action.payload}
            state.error = null
        },
        updateBlogRequest() {

        },
    }
})

const reducer = userSlice.reducer
const userSelector = (state: RootState) => state.user

export const userLoading = createSelector(userSelector, (state) => state.loading)
export const userDetail = createSelector(userSelector, (state) => state.data.userDetail)

export const userBlogs = createSelector(userSelector, (state) => state.data.userBlogs)
export default reducer