import {ArrowLeftOutlined} from '@ant-design/icons'
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {userBlogs} from "../../reducers/user.reducer.ts";
import {Blog} from "../../interfaces/blog.interface.ts";
import LoadingPage from "../loading-page";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import {EditorState, convertFromRaw, convertToRaw} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import {useDispatch} from "react-redux";
import {publishBlogRequest, updateBlogRequest} from "../../reducers/actions/user.action.ts";

const MyBlogDetail = () => {
    const {blogId} = useParams<string>();
    const dispatch = useDispatch()
    const blogList = useAppSelector(userBlogs)
    const [blog, setBlog] = useState<Blog>({} as Blog)
    const [edit, setEdit] = useState<boolean>(false)
    const [content, setcontent] = useState<string>('')
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    useEffect(() => {
        if (blogId) {
            const blog = blogList.find((blog) => blog.id === blogId)
            if (blog) {
                setBlog(blog)
                console.log('cccc', blog.content)
                setcontent(draftToHtml(blog.content))
            }
        }
    }, [blogId, blogList]);

    const handleEditOnclick = () => {
        setEdit((prevState) => !prevState)
        if(blog) {
            setEditorState(() => EditorState.createWithContent(convertFromRaw(blog.content)))
        }
    }

    const handlePublish = () => {
        if (blog) {
            dispatch(publishBlogRequest(blog.id))
        }
    }

    const handleUpdate = () => {
        if (blog) {
            const rawContent = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
            const json = JSON.parse(rawContent);
            const data = {content: json}
            dispatch(updateBlogRequest({id: blog.id, data}))

            setEdit(false);
        }
    }

    return (
        <div>
            <div>
                <Link style={{borderRadius: '5px', fontSize: '25px', color: '#000'}} to='/profile/my-blogs'>
                    <ArrowLeftOutlined/>
                </Link>
            </div>
            {
                !blog.id ? <LoadingPage/> : <div className='mt-3'>
                    <div className='text-end'>
                        <button className='btn btn-primary me-2' onClick={handleEditOnclick}><i
                            className="fa-regular fa-pen-to-square"></i></button>
                        {edit && <button className='btn btn-success' onClick={handleUpdate}>Save</button>}
                        {!blog.published && <button className='btn btn-success' onClick={handlePublish}>Publish</button>}
                    </div>
                    <h1 className='text-black'>
                        {blog.title}
                    </h1>
                    {!edit ? <div dangerouslySetInnerHTML={{__html: content}}></div> :
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                            wrapperClassName='wrapper-class'
                            editorClassName='editor-class'
                            toolbarClassName='toolbar-class'
                            wrapperStyle={{
                                border: '1px solid #bbb',
                                borderRadius: '5px',
                                minHeight: '460px',
                                overflow: 'hidden'
                            }}
                            editorStyle={{
                                color: '#1a1a1a',
                                padding: '0 20px',
                                maxHeight: '700px',
                                overflow: 'hidden',
                                overflowY: 'auto'
                            }}
                            toolbarStyle={{
                                backgroundColor: '#e8e6e6',
                                borderStartStartRadius: '5px',
                                marginBottom: 0
                            }}
                        />
                    }
                </div>
            }
        </div>
    );
};

export default MyBlogDetail;