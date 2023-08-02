const enum PaginationDefault {
    PAGE = 1,
    PAGE_SIZE = 5
}

export interface Criteria {
    page: PaginationDefault.PAGE,
    pageSize: PaginationDefault.PAGE_SIZE,
    keyword?: string
}