import React from 'react'

const PageButton = ({ page, currentPage, onClick }) => {
  const isActive = currentPage === page

  return (
    <button
      onClick={() => onClick(page)}
      className={`px-3 py-1 w-[36px] h-7 rounded text-base font-normal ${
        isActive
          ? 'bg-[#0069F7] text-white'
          : 'bg-[#EBEBEB] text-[#000000]'
      }`}
    >
      {page}
    </button>
  )
}

export default PageButton