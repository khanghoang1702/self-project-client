import {createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface AuthState {
    data: {
        access_token: string,
        refresh_token: string,
    },
    loading: boolean
    error: any
}

const initialState: AuthState = {
    data: {access_token: '', refresh_token: ''},
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInRequest(state) {
            state.loading = true
            state.error = null
        },
        signInSuccess(state, action) {
            state.loading = false
            state.data = action.payload
            state.error = null
        },
        signInFail(state, action) {
            state.loading = false
            state.error = action.payload
        },
        signUpRequest(state) {
            state.loading = true
            state.error = null
        },
        signOutRequest(state) {
            state.loading = true
            state.error = null
        },
        signOutSuccess(state, action) {
            state.loading = false
            state.data = action.payload
            state.error = null
        },
        signOutFail(state, action) {
            state.loading = false
            state.error = action.payload
        },
    }
})

const reducer = authSlice.reducer
const authSelector = (state: RootState) => state.auth

export const getToken = createSelector(authSelector, (state) => state.data.access_token)


export default reducer