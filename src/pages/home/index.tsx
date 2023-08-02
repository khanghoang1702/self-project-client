import BlogCard from "../../components/blog-card";
import PaginationComponent from "../../components/pagination";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {blogList, topBlogs, topBloggers} from "../../reducers/blog.reducer.ts";
import {getBlogsRequest} from "../../reducers/actions/blog.action.ts";
import {useDispatch} from "react-redux";
import {TopBlogs} from "../../interfaces/top-blogs.interface.ts";
// import {User} from "../../interfaces/user.interface.ts";
import {Link} from "react-router-dom";

const HomePage = () => {
    const dispatch = useDispatch();

    const blogs = useAppSelector(blogList)
    const topBlogList = useAppSelector(topBlogs)
    const topBloggersList = useAppSelector(topBloggers)
    const pagination = useAppSelector(state => state.blog.data.pagination)
    const handleOnPageChange = (page: number, pageSize: number) => {
        dispatch(getBlogsRequest({page: page, pageSize: pageSize}))
    }
    const renderBlogs = (data: any) => {
        return data.map((blog: any) => {
            return <BlogCard key={blog.id} blog={blog}/>
        })
    }

    const renderTopBlogs = (data: TopBlogs[]) => {
        return data.map((e) => {
            return <li key={e.id}>
                <div className='top-blogs-container'>
                    <a className='link-custom'>{e.title}</a>
                    <div className='comment-point-group'>
                        <div className='comment-count'>
                            <i className="fa-regular fa-comment"></i>
                            <span>{e.comments}</span>
                        </div>
                        <div className='point-count'>
                            <div className='carets'>
                                <i className="fa-solid fa-caret-up"></i>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                            <span>{e.like}</span>
                        </div>
                    </div>
                    <p>{e.authorName}</p>
                </div>
            </li>
        })
    }

    const renderTopBloggers = (data: any[]) => {
        return data.map((e) => {
            return <li key={e.id} className='mb-2'>
                <div className='top-bloggers-container row gx-0 mb-1'>
                    <div className='col-2'>
                        <img style={{borderRadius: '50%'}} src={e.avatar} width={60} height={60}/>
                    </div>
                    <div className='col-8 d-flex flex-column'>
                        <Link to={`/blogger/${e.id}`} className='link-custom'>{e.displayname}</Link>
                        <span>@{e.email.split('@')[0].toLowerCase()}</span>
                    </div>
                </div>
                <div>
                    <div className='comment-count'>
                        <i className="fa-solid fa-pencil"></i>
                        <span>{e.blogs}</span>
                    </div>
                </div>
            </li>
        })
    }

    return (
        <>
            <div className='home-container'>
                <div className='row gx-5'>
                    <div className='col-8 blog-items-container'>
                        {renderBlogs(blogs)}
                        <PaginationComponent pagination={pagination} handleOnPageChange={handleOnPageChange}/>
                    </div>
                    <div className='col-4  sidebar-container'>
                        <div className='top-sidebar'>
                            <div className='d-flex'>
                                <a href='#'><h4>TOP BLOGS</h4></a>
                                <hr className='mx-3 flex-grow-1'/>
                            </div>
                            <ul>
                                {renderTopBlogs(topBlogList)}
                            </ul>
                        </div>
                        <div className='top-sidebar'>
                            <div className='d-flex'>
                                <a href='#'><h4>TOP BLOGGERS</h4></a>
                                <hr className='mx-3 flex-grow-1'/>
                            </div>
                            <ul>
                                {renderTopBloggers(topBloggersList)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;