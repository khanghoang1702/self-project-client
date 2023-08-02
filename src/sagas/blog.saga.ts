import {blogApi} from "../apis/blog.api.ts";
import {call, fork, put, take, takeEvery} from "redux-saga/effects";
import {
    CREATE_BLOG_REQUEST,
    createBlogSuccess,
    GET_BLOG_DETAIL_REQUEST,
    getCategoriesSuccess,
    getBlogDetailSuccess,
    getBlogsSuccess,
    GET_CATEGORIES_REQUEST,
    GET_BLOGS_REQUEST,
    GET_TOP_BLOGS_REQUEST,
    getTopBlogsSuccess,
    GET_TOP_BLOGGERS_REQUEST,
    getTopBloggersSuccess,
    POST_COMMENT_REQUEST,
    postCommentSuccess,
} from "../reducers/actions/blog.action.ts";
import {commentApi} from "../apis/comment.api.ts";
import {Criteria} from "../interfaces/criteria.interface.ts";
import {PostComment} from "../interfaces/post-comment.interface.ts";

const getBlogs = async (criteria?: Criteria) => {
    const res = await blogApi.getBlogs(criteria);
    return res.data
}

const getTopBlogs = async (limit?: number )=> {
    const res = await blogApi.getTopBlogs(limit);
    return res.data
}

const getTopBloggers = async (limit?: number )=> {
    const res = await blogApi.getTopBloggers(limit);
    return res.data
}

const getBlogDetail = async (blogId: string) => {
    const blog = await blogApi.getBlog(blogId);
    const comments = await commentApi.getBlogComments(blogId);
    blog.data.comments = comments.data
    return blog.data
}

const createBlog = async (createBlog: any) => {
    const res = await blogApi.createBlog(createBlog);
    return res.data
}



const getCategories = async () => {
    const res = await blogApi.getCategories();
    return res.data
}
const postComment = async (comment: PostComment) => {
    const res = await commentApi.comment(comment);
    return res.data
}

function* postCommentHandler(action: any) : any {
    const res = yield call(postComment, action.payload)

    yield put(postCommentSuccess(res));
}

function* getBlogsHandler (): any {
    while (true) {
        const action = yield take(GET_BLOGS_REQUEST);
        if(action) {
            const res = yield call(getBlogs,  action.payload);
            const payload = {blogs: res.blogs, pagination: res.pagination}
            yield put(getBlogsSuccess(payload))
        }
    }
}

function* getTopBlogsHandler (): any {
    while (true) {
        const action = yield take(GET_TOP_BLOGS_REQUEST);
        if(action) {
            const res = yield call(getTopBlogs,  action.payload);
            yield put(getTopBlogsSuccess(res))
        }
    }
}

function* getTopBloggersHandler (): any {
    while (true) {
        const action = yield take(GET_TOP_BLOGGERS_REQUEST);
        if(action) {
            const res = yield call(getTopBloggers,  action.payload);
            yield put(getTopBloggersSuccess(res))
        }
    }
}

function* getBlogDetailHandler (): any {
    while (true) {
        const action = yield take(GET_BLOG_DETAIL_REQUEST)
        if(action) {
            const res = yield call(getBlogDetail, action.payload);
            yield put(getBlogDetailSuccess(res))
            yield
        }
    }
}

function* createBlogHandler (): any {
    while (true) {
        const action = yield take(CREATE_BLOG_REQUEST)
        if(action) {
            const res = yield call(createBlog, action.payload);
            yield put(createBlogSuccess(res))
        }
    }
}




function* getCategoriesHandler (): any {
        const res = yield call(getCategories);
        yield put(getCategoriesSuccess(res));
}

const blogSaga = function* (){
    yield fork(getBlogsHandler);
    yield fork(getTopBlogsHandler);
    yield fork(getTopBloggersHandler);
    yield fork(getBlogDetailHandler);
    yield fork(createBlogHandler);
    yield takeEvery(GET_CATEGORIES_REQUEST, getCategoriesHandler)
    yield takeEvery(POST_COMMENT_REQUEST, postCommentHandler)
}

export default blogSaga