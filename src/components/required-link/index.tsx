import {Link} from 'react-router-dom';
import {PropsWithChildren} from "react";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {getToken} from "../../reducers/auth.reducer.ts";

type RequiredLinkProps = {
    redirectUrl?: string
}
const RequiredLink = ({children}: PropsWithChildren<RequiredLinkProps>) => {

    const accessToken = useAppSelector(getToken);

    if (accessToken) {
        return children;
    }

    return (
        // <Link to={redirectUrl ? `/auth${redirectUrl}` : '/auth'}>
        //     {children}
        // </Link>
        <Link to='/auth'>
            {children}
        </Link>
    )
};

export default RequiredLink;