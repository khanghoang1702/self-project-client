import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {userBlogs} from "../../reducers/user.reducer.ts";
import {Blog} from "../../interfaces/blog.interface.ts";
import {Link} from "react-router-dom";
import {Tag} from "antd";

const MyBlogs = () => {
    const blogList = useAppSelector(userBlogs)

    const renderUserBlogs = (data: Blog[]) => {
        return (
            data.map((blog) => {
                return <div key={blog.id} className='card blog-general-content border-bottom mb-3'>
                    <div className='card-body'>
                        <div className='blog-title'>
                            <Link to={`/profile/blog/${blog.id}`}>
                                <h3>{blog.title}</h3>
                            </Link>
                            {
                                blog.published ?  <Tag color='green'>Published</Tag> :  <Tag color='volcano'>Unpublished</Tag>
                            }
                        </div>
                        <div className='comment-point-group mt-2'>
                            <div className='comment-count'>
                                <i className="fa-regular fa-comments"></i>
                                <span>{blog.comments.length}</span>
                            </div>
                            <div className='point-count'>
                                <div className='carets'>
                                    <i className="fa-solid fa-caret-up"></i>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                                <span>{blog.like}</span>
                            </div>
                        </div>
                    </div>

                </div>
            })
        )
    }
    return (
        <div className='row'>
            {blogList.length ?
                <div className='col-8'>{renderUserBlogs(blogList)}</div> :
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            You have not had any blogs yet
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default MyBlogs;