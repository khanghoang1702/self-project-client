import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';
import draftToHtml from 'draftjs-to-html';
import {useEffect, useRef, useState} from "react";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {blogDetail, blogLoading} from "../../reducers/blog.reducer.ts";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getBlogDetailRequest} from "../../reducers/actions/blog.action.ts";
import Comments from "../../components/comments";
import LoadingPage from "../loading-page";

const BlogDetail = () => {
    const blog = useAppSelector(blogDetail);
    const loading = useAppSelector(blogLoading)
    const {blogId} = useParams<string>();
    const dispatch = useDispatch();
    const blogContentRef = useRef<HTMLDivElement>(null)
    const listElement = useRef<HTMLHeadingElement[]>([])
    const [headings, setHeadings] = useState<any[]>([])

    useEffect(() => {
        if (blogId) {
            dispatch(getBlogDetailRequest(blogId))
        }
    }, [blogId]);

    useEffect(() => {
        if (blogContentRef.current) {
            const elements = blogContentRef.current
                .querySelectorAll<HTMLHeadingElement>('h1, h2, h3, h4, h5, h6')
            listElement.current = Array.from(elements)
            const headingsArr = Array.from(elements)
                .map((e) => {

                    return {
                        text: e.innerText,
                        level: Number(e.nodeName.charAt(1))
                    }
                })
            setHeadings(headingsArr)
        }
    }, [blog])

    const getClassName = (level: number) => {
        switch (level) {
            case 2:
                return 'head2'
            case 3:
                return 'head3'
            case 4:
                return 'head4'
            default:
                return ''
        }
    }

    return (
        loading ? <LoadingPage/> :
        <div className='m-auto'>
             <div className='row'>
                <div className='blog col-9'>
                    <h1 className='title mb-5'>
                        {blog.title}
                    </h1>
                    <div ref={blogContentRef} dangerouslySetInnerHTML={{__html: draftToHtml(blog.content)}}></div>
                </div>
                <div className='col-3'>
                    <div className='blog-toc'>
                        <div className='d-flex'>
                            <h4 className='blog-toc-header'>Indexes</h4>
                            <hr className='mx-3 flex-grow-1'/>
                        </div>
                        <ul>
                            {headings.map(heading => {
                                const elementRef = listElement.current.find((v) => v.innerText === heading.text)
                                return <li className={`${getClassName(heading.level)} heading`} key={heading.text}>
                                    <a
                                        className='small text-black-50'
                                        onClick={() => {
                                            elementRef?.scrollIntoView({
                                                behavior: "smooth"
                                            })
                                        }}
                                    >
                                        {heading.text}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='blog-comments col-12'>
                    <Comments comments={blog.comments} blog={blogId ? blogId : ''}/>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;