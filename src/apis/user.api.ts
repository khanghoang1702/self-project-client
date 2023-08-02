import userService from "../services/user.service.ts";
import {ApiResponse} from "../interfaces/response.interface.ts";
import {User} from "../interfaces/user.interface.ts";
import {UpdateUser} from "../interfaces/update-user.interface.ts";
import {toast} from "react-toastify";

const getUserDetail = async () => {
    const res = await userService.get<ApiResponse<User>>('/me');
    return res.data
}

const update = async (data: UpdateUser) => {
    try {
        const res = await userService.patch<ApiResponse<User>>('/me/update', data);
        toast('Update successfully', {type: 'success'})
        return res.data
    } catch (e: any) {
        toast(e.message, {type: 'error'})
        return e
    }

}

export const userApi = {getUserDetail, update}