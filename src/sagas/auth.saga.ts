import {authApi} from "../apis/auth.api.ts";
import {call, take, put, fork, takeEvery} from "redux-saga/effects";
import {
    SIGN_IN_REQUEST,
    SIGN_OUT_REQUEST,
    SIGN_UP_REQUEST,
    signInSuccess,
    signOutSuccess
} from "../reducers/actions/auth.action.ts";
import {Auth} from "../interfaces/auth.interface.ts";
import {clearUserDetail} from "../reducers/actions/user.action.ts";
import {SignUp} from "../interfaces/sign-up.interface.ts";

const login = async (data: {email: string, password: string}) => {
    const res = await authApi.signIn(data)
    return res.data
}

const resgister = async (data: SignUp) => {
    const res = await authApi.signUp(data)
    return res.data
}
function* loginHandler(payload: {email: string, password: string}): any {
    const credentials: Auth = yield call(login,payload)
    yield put(signInSuccess(credentials))
    localStorage.setItem('access_token', credentials.access_token)
}

function* registerHandler(action: any): any {
    yield call(resgister, action.payload)
}


function* logOutHandler(): any {
    const credentials: Auth = {access_token: '', refresh_token: ''}
    yield put(signOutSuccess(credentials))
    yield put(clearUserDetail({}))
    localStorage.removeItem('access_token')
}

function* watchLoginFlow(): any {
    while (true) {
        const isLogged = localStorage.getItem('access_token');
        if (!isLogged) {
            const action = yield take(SIGN_IN_REQUEST);
            yield fork(loginHandler, action.payload)
        }
        yield take(SIGN_OUT_REQUEST);
        yield call(logOutHandler)
    }
}

function* authSaga() {
    yield fork(watchLoginFlow)
    yield takeEvery(SIGN_UP_REQUEST, registerHandler)
}

export default authSaga

