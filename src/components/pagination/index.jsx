import { useState } from 'react'

const Pagination = ({ totalItems, onPageChange, onItemsPerPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
            onPageChange?.(page)
        }
    }

    const handleItemsPerPageChange = (e) => {
        const newItemsPerPage = parseInt(e.target.value)
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
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &lt;
                </button>
                <button
                    onClick={goToFirstPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &lt;&lt;
                </button>

                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 rounded text-sm font-medium ${currentPage === page
                                ? 'bg-blue-600 text-white'
                                : 'border border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &gt;
                </button>
                <button
                    onClick={goToLastPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &gt;&gt;
                </button>
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                    Viewing <span className="font-medium">{itemsPerPage}</span>
                </span>
                <span className="text-sm text-gray-700">of</span>
                <select
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    className="px-2 py-1 border border-gray-300 rounded text-sm"
                >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>
        </div>
    )
}

export default Pagination