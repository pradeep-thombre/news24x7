import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

export default function PaginationPage(props) {
    const { lastPage, currentPage, onPageChange } = props

    const handlePageChange = (page) => {
        if (onPageChange && page >= 1 && page <= lastPage && currentPage !== page) {
            onPageChange(page);
        }
    };

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(lastPage, currentPage + 2);

    return (
        <Pagination className="d-flex justify-content-end">
            <Pagination.First
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1} />
            <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1} />

            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <Pagination.Item
                    key={startPage + index}
                    active={startPage + index === currentPage}
                    onClick={() => handlePageChange(startPage + index)}
                >
                    {startPage + index}
                </Pagination.Item>
            ))}

            <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === lastPage} />
            <Pagination.Last
                onClick={() => handlePageChange(lastPage)}
                disabled={currentPage === lastPage} />
        </Pagination>
    )
}
