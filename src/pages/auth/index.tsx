import {Outlet} from "react-router-dom";


const Auth = () => {
    return (
        <div className='auth-container w-100 h-auto'>
            <div>
                <div className='auth-content'>
                    <div className='text-center'>
                        <h3><span>Ꮆ</span>OLB</h3>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Auth;