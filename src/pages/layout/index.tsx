import Banner from '../../components/banner';
import Footer from '../../components/footer';
import {PropsWithChildren} from "react";
import NavBar from "../../components/nav-bar";

type LayoutProps = {
    excludeBanner?: boolean,

    excludeFooter?: boolean
}


const Layout = ({children, excludeBanner, excludeFooter}: PropsWithChildren<LayoutProps>) => {

    return (
        <>
                <NavBar/>
                <div>
                    {!excludeBanner && <Banner/>}
                    <div className='content-container'>
                        {children}
                    </div>
                </div>
                {!excludeFooter && <Footer/>}
        </>
    );
};

export default Layout;