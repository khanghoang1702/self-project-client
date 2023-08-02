import {PropsWithChildren, useEffect} from "react";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {getToken} from "../reducers/auth.reducer.ts";
import attachHeaderAuthorization from "../utils/attach-header-authorization.ts";
import {getUserDetailRequest} from "../reducers/actions/user.action.ts";
import {useDispatch} from "react-redux";


const AuthenticatedRoute = ({children}: PropsWithChildren) => {
    const dispatch = useDispatch();
    const accessToken = useAppSelector(getToken);

    useEffect(()=> {
        if (accessToken !== '') {
            attachHeaderAuthorization(accessToken);
            dispatch(getUserDetailRequest());
        }
    }, [accessToken])


    return <>{children}</>
};

export default AuthenticatedRoute;