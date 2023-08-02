import {call, takeEvery, put} from "redux-saga/effects";
import {userApi} from "../apis/user.api.ts";
import {
    GET_DETAIL_REQUEST,
    GET_USER_BLOGS_REQUEST,
    PUBLISH_BLOG_REQUEST,
    getUserBlogsSuccess,
    getUserDetailSuccess, updateUserSuccess, UPDATE_USER_REQUEST, UPDATE_BLOG_REQUEST,
} from "../reducers/actions/user.action.ts";
import {blogApi} from "../apis/blog.api.ts";
import {publishBlogSuccess} from "../reducers/actions/user.action.ts";
import {UpdateUser} from "../interfaces/update-user.interface.ts";
import {UpdateBlog} from "../interfaces/update-blog.interface.ts";

const getUserDetail = async () => {
    const res = await userApi.getUserDetail();
    return res.data
}

const updateUser = async (data: UpdateUser) => {
    const res = await userApi.update(data);
    return res.data
}

const getUserBlogs = async (userId: string) => {
    const res = await blogApi.getUserBlogs(userId);
    return res.data
}

const publishBlog = async (blogId: string) => {
    const blog = await blogApi.publishBlog(blogId);
    return blog
}

const updateBlog = async (payload: {id: string, data: UpdateBlog}) => {
    const blog = await blogApi.updateBlog(payload.id, payload.data);
    return blog
}

function* getUserDetailHandler (): any {
    const res = yield call(getUserDetail);
    yield put(getUserDetailSuccess(res))
}

function* getUserBlogsHandler (action: any): any {
    const res = yield call(getUserBlogs, action.payload);
    yield put(getUserBlogsSuccess(res.blogs))
}

function* publishBlogHandler (action: any): any {
    const res = yield call(publishBlog,  action.payload);
    yield put(publishBlogSuccess(res))
}

function* updateBlogHandler (action: any): any {
    const res = yield call(updateBlog,  action.payload);
    yield put(publishBlogSuccess(res))
}

function* updateUserHandler (action: any): any {
    const res = yield call(updateUser,  action.payload);
    yield put(updateUserSuccess(res))
}
const userSaga = function* () {
    yield takeEvery(GET_DETAIL_REQUEST, getUserDetailHandler)
    yield takeEvery(GET_USER_BLOGS_REQUEST, getUserBlogsHandler)
    yield takeEvery(PUBLISH_BLOG_REQUEST, publishBlogHandler)
    yield takeEvery(UPDATE_USER_REQUEST, updateUserHandler)
    yield takeEvery(UPDATE_BLOG_REQUEST, updateBlogHandler)
}

export default userSaga