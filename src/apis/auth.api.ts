import {SignUp} from "../interfaces/sign-up.interface.ts";
import {SignIn} from "../interfaces/sign-in.interface.ts";
import {ApiResponse} from "../interfaces/response.interface.ts";
import authService from "../services/auth.service.ts";
import {User} from "../interfaces/user.interface.ts";
import {Auth} from "../interfaces/auth.interface.ts";
import {toast} from "react-toastify";


const signUp = async (data: SignUp ) => {
    try {
        const res = await authService.post<ApiResponse<User>>('/sign-up', data);
        toast('Sign up successfully', {type: 'success'})
        return res.data
    } catch (e: any) {
        toast(e.message, {type: 'error'})
        return e
    }

}

const signIn = async (data: SignIn ) => {
    const res = await authService.post<ApiResponse<Auth>>('/sign-in', data);
    return res.data
}

export const authApi = {signUp, signIn}