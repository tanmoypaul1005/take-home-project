const Breadcrumb = ({ items }) => {
  return (
    <div className="flex mb-5 text-xs font-medium gap-x-[5px]">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-x-[5px]">
          {index > 0 && (
            <div className='mt-1'>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.78125 8.78125L4.78125 4.78125L0.78125 0.78125" stroke="#2E3950" strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
          <span className={item.active ? "text-primary" : "text-[#000000]"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Breadcrumb