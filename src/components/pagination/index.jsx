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
                    className="px-3 py-1 h-7 text-sm bg-[#EBEBEB] rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.60246 10.7537C5.56265 10.7944 5.51508 10.8268 5.46255 10.8489C5.41003 10.871 5.35361 10.8823 5.29664 10.8822C5.23966 10.8821 5.18328 10.8706 5.13082 10.8484C5.07837 10.8261 5.03089 10.7936 4.99121 10.7527L0.133086 5.76805C0.0477605 5.68052 6.18706e-06 5.56311 6.19774e-06 5.44087C6.20843e-06 5.31862 0.0477605 5.20122 0.133086 5.11368L4.99121 0.128992C5.03096 0.0881697 5.07848 0.0557238 5.13097 0.033569C5.18346 0.0114151 5.23986 1.53666e-06 5.29684 1.54164e-06C5.35381 1.54662e-06 5.41021 0.0114151 5.4627 0.033569C5.51519 0.0557238 5.56272 0.0881697 5.60246 0.128992C5.68423 0.212708 5.73001 0.325091 5.73001 0.442117C5.73001 0.559143 5.68423 0.671525 5.60246 0.755242L1.03402 5.44087L5.60246 10.1284C5.68395 10.212 5.72955 10.3242 5.72955 10.441C5.72955 10.5578 5.68395 10.67 5.60246 10.7537ZM9.35246 10.7537C9.31265 10.7944 9.26508 10.8268 9.21256 10.8489C9.16003 10.871 9.10361 10.8823 9.04664 10.8822C8.98966 10.8821 8.93328 10.8706 8.88082 10.8484C8.82837 10.8261 8.7809 10.7936 8.74121 10.7527L3.88309 5.76805C3.79776 5.68052 3.75001 5.56311 3.75001 5.44087C3.75001 5.31862 3.79776 5.20122 3.88309 5.11368L8.74121 0.128992C8.78096 0.08817 8.82848 0.0557241 8.88097 0.0335693C8.93346 0.0114154 8.98986 1.8645e-06 9.04684 1.86948e-06C9.10381 1.87446e-06 9.16021 0.0114155 9.2127 0.0335693C9.26519 0.0557241 9.31272 0.08817 9.35246 0.128992C9.43423 0.212708 9.48001 0.325091 9.48001 0.442118C9.48001 0.559143 9.43423 0.671525 9.35246 0.755242L4.78402 5.44087L9.35246 10.1284C9.43395 10.212 9.47955 10.3242 9.47955 10.441C9.47955 10.5578 9.43395 10.67 9.35246 10.7537Z" fill="black" />
                    </svg>

                </button>
                <button
                    onClick={goToFirstPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 h-7 text-sm bg-[#EBEBEB] rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75 4.375L5.625 7.5L8.75 10.625" stroke="black" stroke-width="0.625" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>

                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 rounded text-base font-normal ${currentPage === page
                            ? 'bg-[#0069F7] text-white'
                            : 'bg-[#EBEBEB] text-[#000000]'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm h-7 bg-[#EBEBEB] rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25 10.625L9.375 7.5L6.25 4.375" stroke="black" stroke-width="0.625" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
                <button
                    onClick={goToLastPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm h-7 bg-[#EBEBEB] rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.87755 0.128523C3.91736 0.0877617 3.96493 0.0553889 4.01746 0.0333149C4.06998 0.0112409 4.1264 -8.6884e-05 4.18337 5.01756e-07C4.24035 8.78875e-05 4.29673 0.0115886 4.34919 0.0338236C4.40164 0.0560586 4.44912 0.0885774 4.4888 0.12946L9.34693 5.11415C9.43225 5.20169 9.48001 5.31909 9.48001 5.44133C9.48001 5.56358 9.43225 5.68098 9.34693 5.76852L4.4888 10.7532C4.44905 10.794 4.40153 10.8265 4.34904 10.8486C4.29655 10.8708 4.24015 10.8822 4.18317 10.8822C4.1262 10.8822 4.0698 10.8708 4.01731 10.8486C3.96482 10.8265 3.9173 10.794 3.87755 10.7532C3.79578 10.6695 3.75 10.5571 3.75 10.4401C3.75 10.3231 3.79578 10.2107 3.87755 10.127L8.44599 5.44133L3.87755 0.753835C3.79606 0.670162 3.75046 0.557978 3.75046 0.441179C3.75046 0.32438 3.79606 0.212196 3.87755 0.128523ZM0.127549 0.128523C0.167358 0.0877617 0.21493 0.0553889 0.267455 0.0333149C0.319981 0.0112409 0.376397 -8.6884e-05 0.433372 5.01756e-07C0.490348 8.78875e-05 0.546728 0.0115886 0.599186 0.0338236C0.651644 0.0560586 0.699116 0.0885774 0.738799 0.12946L5.59693 5.11415C5.68225 5.20169 5.73 5.31909 5.73 5.44133C5.73 5.56358 5.68225 5.68098 5.59693 5.76852L0.738799 10.7532C0.699053 10.794 0.651531 10.8265 0.59904 10.8486C0.546548 10.8708 0.49015 10.8822 0.433174 10.8822C0.376199 10.8822 0.319801 10.8708 0.267309 10.8486C0.214817 10.8265 0.167296 10.794 0.127549 10.7532C0.0457783 10.6695 0 10.5571 0 10.4401C0 10.3231 0.0457783 10.2107 0.127549 10.127L4.69599 5.44133L0.127549 0.753835C0.0460589 0.670162 0.000457093 0.557978 0.000457093 0.441179C0.000457093 0.32438 0.0460589 0.212196 0.127549 0.128523Z" fill="black" />
                    </svg>

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