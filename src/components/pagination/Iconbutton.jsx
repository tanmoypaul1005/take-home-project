import React from 'react'

const IconButton = ({ onClick, disabled, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1 w-[36px] h-7 text-sm bg-[#EBEBEB] rounded disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  )
}

export default IconButton