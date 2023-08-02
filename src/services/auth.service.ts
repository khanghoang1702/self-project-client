import axios from 'axios';
import {base_url} from "../common/config.ts";


const authService = axios.create({
    baseURL: `${base_url}/auth`,
});

authService.interceptors.request.use(
    (request) =>
        request,
    (error) =>
        Promise.reject(error)
);

authService.interceptors.response.use(
    (response) =>
        response,
    (error) => {
        const message = error.response?.data?.message || 'Unknown Error';
        const newError = new Error(message);
        return Promise.reject(newError);
    }
);

export default authService;