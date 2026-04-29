import { useState, useMemo } from 'react';

    //define shape of inputs
    interface PaginationOptions {
        totalItems: number;
        ItemsPerPage?: number;
        initialPage?: number;
    }
//define shape of hook return values
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
}: PaginationOptions): PaginationResults => {
    const [currentPage, setCurrentPage] = useState<number>(initialPage);
//calculate total pages
    const totalPages = useMemo(() =>
        Math.max(1, Math.ceil(totalItems / itemsPerPage)),
    [totalItems, itemsPerPage]
    );
//keep requested pages within range
    const clampPage = (page: number): number =>
        Math.max(1, Math.min(page, totalPages));
//calculate start and end indices based on current page and items per page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);
//count for last page
const itemsOnCurrentPage = totalItems === 0 ? 0 : Math.max(0, (endIndex - startIndex + 1));
//navigation API
const setPage = (pageNumber: number) => setCurrentPage(clampPage(pageNumber));

const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
};
    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    return {
      currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage: currentPage < totalPages,
    canPrevPage: currentPage > 1,
    };
};
