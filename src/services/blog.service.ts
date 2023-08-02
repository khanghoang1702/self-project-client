import axios from 'axios';
import {base_url} from "../common/config.ts";
const blogService = axios.create({
    baseURL: `${base_url}/blogs`,
});

blogService.interceptors.request.use(
    (request) => {
        return request
    },
    (error) =>
    {
        const message = error.response?.data?.message || 'Unknown Error';
        const newError = new Error(message);
        return Promise.reject(newError);
    }
);

blogService.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log(error)
        const message = error.response?.data?.message || 'Unknown Error';
        return Promise.reject(message);
    }
);

export default blogService;