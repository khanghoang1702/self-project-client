import {Link} from 'react-router-dom';
import {User} from "../../interfaces/user.interface.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {userDetail} from "../../reducers/user.reducer.ts";
import {useDispatch} from "react-redux";
import {signOutRequest} from "../../reducers/actions/auth.action.ts";

type LoggedUserProps = {
    detail: User
}
const LoggedUser = ({detail}: LoggedUserProps) => {
    const dispatch = useDispatch();
    return (
        <div className='logged-user d-flex align-items-center'>
            <div className='me-4'>
                <Link to='/b/create' style={{color: '#858383'}}>
                    <i className='fa-regular fa-pen-to-square'></i>
                </Link>
            </div>
            <div className='profile'>
                <img src={`${detail.avatar}`} style={{borderRadius: '50%'}} width='40' height='40'/>
                <div className='dropdown'>
                    <div className='user-info row gx-0 border-bottom p-2 m-0'>
                        <img className='col-4' src='https://picsum.photos/200'/>
                        <div className='col-7 ms-2 d-flex flex-column'>
                            <p className='m-0 fw-bold'>{detail.displayName}</p>
                            <span className='small text-black-60 overflow-hidden' title={detail.email}
                                  style={{textOverflow: 'ellipsis'}}>@{detail.email.split('@')[0].toLowerCase()}</span>
                        </div>
                    </div>
                    <ul className='profile-list text-start'>
                        <li className='p-2'>
                            <i className='fa-solid fa-user me-3'></i>
                            <Link to='/profile' className='link-custom'>Profile</Link>
                        </li>
                        <li className='p-2 border-top'>
                            <i className='fa-solid fa-right-from-bracket me-3'></i>
                            <a onClick={() => {
                                dispatch(signOutRequest())
                            }} className='link-custom'>Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const NavRight = () => {
    const detail = useAppSelector(userDetail)

    return (
        <div className='nav-right'>
            <div>
                {detail.id ? <LoggedUser detail={detail}/> : <div>
                    <Link to='/auth'>
                        <i className='fa-solid fa-arrow-right-to-bracket me-2'></i>
                        Sign in/
                        Sign up
                    </Link>
                </div>}
            </div>
        </div>
    );
};

export default NavRight;