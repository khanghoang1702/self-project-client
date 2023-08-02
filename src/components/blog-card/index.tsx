import {Link} from "react-router-dom";
import {Blog} from "../../interfaces/blog.interface.ts";
import {handleTime} from "../../utils/handle-time.ts";

type BlogCardProps = {
    blog: Blog
}
const BlogCard = ({blog}: BlogCardProps) => {
    return (
        <div className='blog-card row border-bottom'>
            <div className='col-1 author-avatar'>
                <img src={blog.author.avatar}/>
            </div>
            <div className='col-11 blog-general-content'>
                <div className='blog-info'>
                    <Link to={`blog/${blog.author.id}`}>{blog.author.displayName}</Link>
                    <span>{handleTime(blog.createdAt)}</span>
                </div>
                <div className='blog-title'>
                    <Link to={`blog/${blog.id}`}>
                        <h3>{blog.title}</h3>
                    </Link>
                </div>
                <div className='comment-point-group'>
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
    );
};

export default BlogCard;