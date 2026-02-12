
const ItemsPerPageButton = ({ value, currentValue, onClick }) => {

    const isActive = currentValue === value

    return (
        <button
            onClick={() => onClick(value)}
            className={`px-2.5 flex justify-center items-center h-8 text-sm font-normal rounded-[5px] transition-colors ${isActive
                    ? 'bg-primary text-white'
                    : 'bg-[#EBEBEB] text-[#000000]'
                }`}
        >
            {value}
        </button>
    )
}

export default ItemsPerPageButton
