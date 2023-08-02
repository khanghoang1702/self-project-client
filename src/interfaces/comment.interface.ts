import {User} from "./user.interface.ts";

export interface Comment {
    id: string;

    content: string;

    author: User;

    likeCount: number;

    dislikeCount: number;

    createdAt: string;
}