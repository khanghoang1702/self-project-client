import {createAction} from "@reduxjs/toolkit";
import {SignIn} from "../../interfaces/sign-in.interface.ts";
import {Auth} from "../../interfaces/auth.interface.ts";
import {SignUp} from "../../interfaces/sign-up.interface.ts";

export const SIGN_IN_REQUEST = 'auth/signInRequest'
export const SIGN_IN_SUCCESS = 'auth/signInSuccess'

export const signInRequest = createAction<SignIn>(SIGN_IN_REQUEST);

export const signInSuccess = createAction<Auth>(SIGN_IN_SUCCESS);

export const SIGN_UP_REQUEST = 'auth/signUpRequest'
export const SIGN_UP_SUCCESS = 'auth/signUpSuccess'

export const signUpRequest = createAction<SignUp | {}>(SIGN_UP_REQUEST);

export const signUpSuccess = createAction<{email: string}>(SIGN_UP_SUCCESS);

export const SIGN_OUT_REQUEST = 'auth/signOutRequest'
export const SIGN_OUT_SUCCESS = 'auth/signOutSuccess'

export const signOutRequest = createAction(SIGN_OUT_REQUEST);

export const signOutSuccess = createAction<Auth>(SIGN_OUT_SUCCESS);