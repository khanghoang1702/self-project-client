import {IPagination} from "../../interfaces/pagination.interface.ts";
import {Pagination} from 'antd';

type PaginationProps = {
    pagination: IPagination;
    handleOnPageChange: (page: number, pageSize: number) => void
}
const PaginationComponent = ({pagination,handleOnPageChange }: PaginationProps) => {

    return (
        <div>
            <Pagination onChange={(page, pageSize) => handleOnPageChange(page, pageSize)} current={pagination.page}
                        defaultCurrent={1} total={pagination.total} defaultPageSize={pagination.pageSize}
                        showSizeChanger={false}/>
        </div>
    );
};

export default PaginationComponent;