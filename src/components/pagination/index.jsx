import { useState } from 'react'
import ItemsPerPageButton from './ItemsPerPageButton'
import IconButton from './Iconbutton'
import PageButton from './PageButton'
import { ChevronLeftIcon, ChevronRightIcon, DoubleChevronLeftIcon, DoubleChevronRightIcon } from './Paginationicons'

const Pagination = ({ totalItems, onPageChange, onItemsPerPageChange }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const ITEMS_PER_PAGE_OPTIONS = [10, 25, 50, 100]


    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
            onPageChange?.(page)
        }
    }

    const handleItemsPerPageChange = (value) => {
        const newItemsPerPage = parseInt(value)
        setItemsPerPage(newItemsPerPage)
        setCurrentPage(1) // Reset to first page
        onItemsPerPageChange?.(newItemsPerPage)
    }

    const goToFirstPage = () => handlePageChange(1)
    const goToLastPage = () => handlePageChange(totalPages)
    const goToPrevPage = () => handlePageChange(currentPage - 1)
    const goToNextPage = () => handlePageChange(currentPage + 1)

    // Generate page numbers to display (showing current page and a few around it)
    const getPageNumbers = () => {
        const pages = []
        const maxVisible = 4

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            if (currentPage <= 2) {
                pages.push(1, 2, 3, 4)
            } else if (currentPage >= totalPages - 1) {
                pages.push(totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
            } else {
                pages.push(currentPage - 1, currentPage, currentPage + 1, currentPage + 2)
            }
        }

        return pages
    }

    return (
        <div className="flex items-center justify-between px-5 py-5 border-t border-gray-200">
            <div className="flex items-center space-x-2">
                <IconButton onClick={goToPrevPage} disabled={currentPage === 1}>
                    <DoubleChevronLeftIcon />
                </IconButton>

                <IconButton onClick={goToFirstPage} disabled={currentPage === 1}>
                    <ChevronLeftIcon />
                </IconButton>

                {getPageNumbers().map((page) => (
                    <PageButton key={page} page={page} currentPage={currentPage} onClick={handlePageChange} />
                ))}

                <IconButton onClick={goToNextPage} disabled={currentPage === totalPages}>
                    <ChevronRightIcon />
                </IconButton>

                <IconButton onClick={goToLastPage} disabled={currentPage === totalPages}>
                    <DoubleChevronRightIcon />
                </IconButton>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-sm font-normal text-cBlack">Viewing</span>

                <div className='flex gap-x-1'>
                    {ITEMS_PER_PAGE_OPTIONS.map((option) => (
                        <ItemsPerPageButton
                            key={option}
                            value={option}
                            currentValue={itemsPerPage}
                            onClick={handleItemsPerPageChange}
                        />
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Pagination