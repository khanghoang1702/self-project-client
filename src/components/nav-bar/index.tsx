import NavLeft from "./nav-left.tsx";
import NavCenter from "./nav-center.tsx";
import NavRight from "./nav-right.tsx";

const Navbar = () => {
    return (
        <div style={{marginBottom: '65px'}}>
            <div className='nav'>
                <div className='nav-group'>
                    <NavLeft/>
                    <NavCenter/>
                    <NavRight/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;