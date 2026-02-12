import React from 'react'

const PageButton = ({ page, currentPage, onClick }) => {
  const isActive = currentPage === page

  return (
    <button
      onClick={() => onClick(page)}
      className={`px-3 w-[36px] flex justify-center items-center h-8 rounded text-base font-normal ${
        isActive
          ? 'bg-primary text-white'
          : 'bg-[#EBEBEB] text-[#000000]'
      }`}
    >
      {page}
    </button>
  )
}

export default PageButton