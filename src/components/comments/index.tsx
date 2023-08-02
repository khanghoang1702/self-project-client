import {Comment} from '../../interfaces/comment.interface.ts';
import RequiredLink from '../required-link';
import {useAppSelector} from '../../hooks/useAppSelector.ts';
import {handleTime} from '../../utils/handle-time.ts';
import {useDispatch} from 'react-redux';
import {postCommentRequest} from '../../reducers/actions/blog.action.ts';
import {useRef} from 'react';
import {userDetail} from '../../reducers/user.reducer.ts';
import {User} from '../../interfaces/user.interface.ts';
import {useLocation} from "react-router-dom";

type CommentsProps = {
    comments: Comment[],
    blog: string,
}

type CommentFormProps = {
    reader: User,
    handleComment: (comment: string) => void
}
const CommentForm = ({reader, handleComment}: CommentFormProps) => {
    const ref = useRef<HTMLTextAreaElement>(null)
    const location = useLocation()
    return (
        <>
            {!reader.id ? <RequiredLink redirectUrl={location.pathname}>
                <div className='card mb-4'>
                    <div className='card-body text-center'>
                        <i className='fa-regular fa-comment me-1'></i>
                        Sign in to leave a comment
                    </div>
                </div>
            </RequiredLink> : <div className='card mb-4'>
                <div className='card-body'>
                    <div className='d-flex flex-row align-items-start'>
                        <img className='rounded-circle me-2' src={`${reader.avatar}`} width='50'/>
                        <textarea ref={ref} className='form-control ml-1 shadow-none textarea'/>
                    </div>
                    <div className='ms-5 mt-2 text-right'>
                        <button className='btn btn-primary btn-sm shadow-none'
                                onClick={() => handleComment(ref.current!.value)} type='button'>Post comment
                        </button>
                    </div>
                </div>
            </div>}
        </>
    )
}
const Comments = ({comments, blog}: CommentsProps) => {
    const dispatch = useDispatch();
    const user = useAppSelector(userDetail)

    const renderComments = (data: Comment[]) => {
        return data.map((comment) => {
            return (
                <div key={comment.id} className='card-body'>
                    <div className='d-flex flex-row'><img className='rounded-circle me-2'
                                                          src={comment.author.avatar}
                                                          width='50'/>
                        <div className='d-flex flex-column justify-content-start ml-2'>
                            <div>
                                <span className='font-weight-bold name me-2'>
                                    {comment.author.displayName}
                                </span>
                                <span className='text-black-50 small'>
                                    @{comment.author.email.split('@')[0].toLowerCase()}
                                </span>
                            </div>
                            <span className='text-black-50 small'>
                                commented at {handleTime(comment.createdAt, 'ddd, MMM DD, hh:mm A')}
                            </span>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p className='comment-text'>{comment.content}</p>
                    </div>
                    <div className='d-flex flex-row fs-6'>
                        <div className='like p-2'>
                            <RequiredLink>
                                <i className='fa-solid fa-chevron-up text-black-50 link'></i>
                            </RequiredLink>
                            {comment.likeCount !== 0 && <span className='ml-1'>comment.likeCount</span>}
                        </div>
                        <div className='like p-2'>
                            <RequiredLink>
                                <i className='fa-solid fa-chevron-down text-black-50 link'></i>
                            </RequiredLink>
                            {comment.dislikeCount !== 0 && <span className='ml-1'>comment.dislikeCount</span>}
                        </div>
                        <div className='like p-2'>
                            <RequiredLink>
                                <span className='ml-1 text-black-50 link' onClick={() => {
                                    console.log('todo')
                                }}>Reply</span>
                            </RequiredLink>
                        </div>
                    </div>
                </div>
            )
        })
    }
    const handleComment = (comment: string) => {
        const payload = {
            blog: blog,
            content: comment,
            author: user.id
        }
        dispatch(postCommentRequest(payload))
    }

    return (
        <div>
            <div className='mt-5'>
                {<CommentForm reader={user} handleComment={handleComment}/>}

                <div className='card'>
                    {comments.length ? renderComments(comments) : <div className='card-body text-center'>
                        There is no comment
                    </div>}
                </div>

            </div>
        </div>
    );
};

export default Comments;