import {Pagination} from "./pagination.interface.ts";


export type PaginationResponse<T extends {}> = T & {
    pagination: Pagination
}