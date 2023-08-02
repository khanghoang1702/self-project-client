import userService from "../services/user.service.ts";
import blogService from "../services/blog.service.ts";
import commentService from "../services/comment.service.ts";

const attachHeaderAuthorization = (accessToken: string) => {
    const content = 'Bearer ' + accessToken;
    userService.defaults.headers['Authorization'] = content;

    blogService.defaults.headers['Authorization'] = content;

    commentService.defaults.headers['Authorization'] = content;
}

export default attachHeaderAuthorization