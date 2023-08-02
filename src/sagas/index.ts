import { all } from "redux-saga/effects";
import authSaga from "./auth.saga.ts";
import userSaga from "./user.saga.ts";
import blogSaga from "./blog.saga.ts";

const sagas = function* sagas() {
    yield all([authSaga(), userSaga(), blogSaga()]);
};

export default sagas