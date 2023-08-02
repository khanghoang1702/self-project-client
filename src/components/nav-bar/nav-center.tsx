import {Link} from "react-router-dom";

const NavCenter = () => {
    return (
        <div className='nav-center'>
            <div className='nav-center-links'>
                <ul>
                    <li>
                        <Link to='/' className=''>Latest Blogs</Link>
                    </li>
                </ul>
            </div>
            <div className='search'>
                <form action="#">
                    <input type="text"
                           placeholder=" Search anything"
                           name="search"/>
                    <button>
                        <i className="fa fa-search">
                        </i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NavCenter;