import {Editor} from "react-draft-wysiwyg";
import {convertToRaw, EditorState} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {categoryList} from "../../reducers/blog.reducer.ts";
import {createBlogRequest, getCategoriesRequest} from "../../reducers/actions/blog.action.ts";
import {Category} from "../../interfaces/category.interface.ts";

const BlogEditor = () => {
    const categories = useAppSelector(categoryList);
    const dispatch = useDispatch();
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const titleRef = useRef<HTMLInputElement>(null)
    const cateRef = useRef<HTMLSelectElement>(null)

    const [rawContent, setRawContent] = useState<{}>()

    useEffect(() => {
        dispatch(getCategoriesRequest())
    }, [])

    useEffect(() => {
        const rawContent = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        const json = JSON.parse(rawContent);
        setRawContent(json)
    }, [editorState])

    const handleSaveBlog = () => {
        const payload = {title: titleRef.current!.value, category:cateRef.current!.value, content: rawContent}
        dispatch(createBlogRequest(payload))
    }

    const renderCategories = (categoryList: Category[]) => {
        return categoryList.map((cate) => {
            return <option key={cate.id} value={cate.id}>{cate.category}</option>
        })
    }

    return (
        <div className='blog-editor'>
            <div>
                <div className='title-cat-container'>
                    <input ref={titleRef} placeholder='Title'/>
                    <div className='row mb-3'>
                        <div className='col-9'>
                            <select ref={cateRef} className='w-100 p-2' name='category' defaultValue={'Category'}>
                                {categories &&
                                    <>
                                        <option value='Category' disabled>Category</option>
                                        {renderCategories(categories)}
                                    </>
                                }
                            </select>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-primary me-3' onClick={handleSaveBlog}>Save Draft</button>
                            <button className='btn btn-success'>Save & Publish</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Editor
                        defaultEditorState={editorState}
                        onEditorStateChange={setEditorState}
                        wrapperClassName='wrapper-class'
                        editorClassName='editor-class'
                        toolbarClassName='toolbar-class'
                        wrapperStyle={{
                            border: '1px solid #bbb',
                            borderRadius:'5px',
                            minHeight: '460px',
                            overflow:'hidden'
                        }}
                        editorStyle={{
                            color: '#1a1a1a',
                            padding: '0 20px',
                            maxHeight: '460px',
                            overflow: 'hidden',
                            overflowY: 'auto'
                        }}
                        toolbarStyle={{
                            backgroundColor: '#e8e6e6',
                            borderStartStartRadius:'5px',
                            marginBottom: 0
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogEditor;