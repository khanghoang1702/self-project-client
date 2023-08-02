import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import authReducer from "./auth.reducer.ts";
import userReducer from "./user.reducer.ts";
import blogReducer from "./blog.reducer.ts";

const rootPersistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    blog: blogReducer,
})

export default persistReducer(rootPersistConfig, rootReducer)