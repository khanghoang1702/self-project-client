import React, {useEffect} from 'react';
import './App.css'
import {
    Routes,
    Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Layout from './pages/layout';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import AuthPage from './pages/auth';
import BlogEditor from './pages/blog-editor';
import UnauthenticatedRoute from "./routes/unauthenticated.route.tsx";
import AuthenticatedRoute from "./routes/authenticated.route.tsx";
import {useDispatch} from "react-redux";
import {getBlogsRequest, getTopBloggersRequest, getTopBlogsRequest} from "./reducers/actions/blog.action.ts";
import Profile from "./pages/profile";
import MyInfo from "./pages/profile/my-info.tsx";
import MyBlogs from "./pages/profile/my-blogs.tsx";
import MyBlogDetail from "./pages/profile/blog-detail.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const HomePage = React.lazy(() => import('./pages/home'));
const BlogDetail = React.lazy(() => import('./pages/blog-detail'));

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBlogsRequest({page: 1, pageSize: 5}))
        dispatch(getTopBlogsRequest(3))
        dispatch(getTopBloggersRequest(3))
    }, [])
    return (
        <>
            <AuthenticatedRoute>
                <Routes>
                    <Route index element={
                        <React.Suspense fallback={<>...</>}>
                                <Layout excludeBanner={false} excludeFooter={false}>
                                    <HomePage/>
                                </Layout>
                        </React.Suspense>
                    }/>
                    <Route path='profile' element={
                        <Profile/>
                    }>
                        <Route index element={<MyInfo />}/>
                        <Route path='my-blogs' element={<MyBlogs/>}/>
                        <Route path='blog/:blogId' element={<MyBlogDetail/>}/>
                    </Route>
                    <Route path='auth/*' element={
                        <UnauthenticatedRoute>
                            <AuthPage/>
                        </UnauthenticatedRoute>
                    }>
                        <Route index element={<SignIn/>}/>
                        <Route path='resgister' element={<SignUp/>}/>
                    </Route>
                    <Route path='blog/:blogId' element={
                        <React.Suspense fallback={<>...</>}>
                            <Layout excludeBanner={true}>
                                <BlogDetail/>
                            </Layout>
                        </React.Suspense>
                    }/>
                    <Route path='/b/create' element={
                        <React.Suspense fallback={<>...</>}>
                            <Layout excludeBanner={true} excludeFooter={true}>
                                <BlogEditor/>
                            </Layout>
                        </React.Suspense>
                    }/>
                </Routes>
                <ToastContainer hideProgressBar={false} position={'bottom-right'}/>
            </AuthenticatedRoute>
        </>
    )
}

export default App
