import ( useState, useMemo } from 'react';

    //define shape of inputs
    interface PaginationOptions {
        totalItems: number;
        ItemsPerPage?: number;
        initialPage?: number;
    }
//define shape of hook returns
interface PaginationResults {
    currentPage: number;
    totalPages: number;
    startIndex: number;
    endIndex: number;
    itemsOnCurrentPage: number;
    setPage: (page: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    canNextPage: boolean;
    canPrevPage: boolean;
}
//initialize state with number type
export const usePagination = ({
    totalItems,
    itemsPerPage = 10,
    initialPage = 1,
}: PaginationOptions): paginationResult => {
    const [currentPage, setCurrentPage] = useState<number>(initialPage);

}
})