export interface ApiResponse<T> {
    statusCode: any,
    success: boolean,
    data: T
}