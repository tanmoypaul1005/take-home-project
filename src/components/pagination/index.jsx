const Pagination = () => {
    return (
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                    &lt;
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                    &lt;&lt;
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm font-medium">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">3</button>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">4</button>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                    &gt;
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                    &gt;&gt;
                </button>
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Viewing <span className="font-medium">50</span></span>
                <span className="text-sm text-gray-700">of</span>
                <select className="px-2 py-1 border border-gray-300 rounded text-sm">
                    <option>100</option>
                    <option>50</option>
                    <option>25</option>
                </select>
            </div>
        </div>
    )
}

export default Pagination
