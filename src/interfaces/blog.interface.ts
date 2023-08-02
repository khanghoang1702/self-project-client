import {User} from "./user.interface.ts";
import {Comment} from "./comment.interface.ts";

export interface Blog {
    id: string;

    title: string;

    content: any;

    author: User;

    comments: Comment[];

    category: any;

    published: boolean;

    like: number;

    dislike: number;

    createdAt: string;

    updatedAt: string;

    version: number;
}