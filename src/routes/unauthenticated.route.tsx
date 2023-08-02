import {Navigate} from "react-router-dom";
import {PropsWithChildren} from "react";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {getToken} from "../reducers/auth.reducer.ts";

type UnauthenticatedRouteProps = {
    redirectUrl?: string
}

const UnauthenticatedRoute = ({children, redirectUrl}: PropsWithChildren<UnauthenticatedRouteProps>) => {
    const accessToken = useAppSelector(getToken);

    if (accessToken !== '') {
        return <Navigate replace to='/'/>
    }

    if (redirectUrl) {
        return <Navigate to={redirectUrl}/>
    }

    return <>{children}</>
};

export default UnauthenticatedRoute;