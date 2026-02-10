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
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
                <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm bg-[#EBEBEB] rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &lt;
                </button>
                <button
                    onClick={goToFirstPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm bg-[#EBEBEB] rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &lt;&lt;
                </button>

                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 rounded text-base font-normal ${currentPage === page
                            ? 'bg-[#0069F7] text-white'
                            : 'bg-[#EBEBEB] hover:bg-gray-50'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm bg-[#EBEBEB]  rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &gt;
                </button>
                <button
                    onClick={goToLastPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm bg-[#EBEBEB] rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    &gt;&gt;
                </button>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-sm font-normal text-[#000000]">Viewing</span>

                <div className='flex gap-x-1'>
                    <button
                        onClick={() => handleItemsPerPageChange({ target: { value: '10' } })}
                        className={`px-2.5 py-[5px] text-sm font-normal rounded-[5px] transition-colors ${itemsPerPage === 10
                            ? 'bg-[#0069F7] text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        10
                    </button>

                    <button
                        onClick={() => handleItemsPerPageChange({ target: { value: '25' } })}
                        className={`px-2.5 py-[5px] text-sm font-normal rounded-[5px] transition-colors ${itemsPerPage === 25
                            ? 'bg-[#0069F7] text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        25
                    </button>

                    <button
                        onClick={() => handleItemsPerPageChange({ target: { value: '50' } })}
                        className={`px-2.5 py-[5px] text-sm font-normal rounded-[5px] transition-colors ${itemsPerPage === 50
                            ? 'bg-[#0069F7] text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        50
                    </button>

                    <button
                        onClick={() => handleItemsPerPageChange({ target: { value: '100' } })}
                        className={`px-2.5 py-[5px] text-sm font-normal rounded-[5px] transition-colors ${itemsPerPage === 100
                            ? 'bg-[#0069F7] text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        100
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Pagination