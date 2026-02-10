import { useState } from 'react'
import Pagination from '../pagination'
import { threats } from './data'

const ThreatsTable = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [selectedThreat, setSelectedThreat] = useState('Select Threat')
    const [selectedCountry, setSelectedCountry] = useState('Country')
    const [selectedRisk, setSelectedRisk] = useState('Select Risk')
    const [selectedDateRange, setSelectedDateRange] = useState('From Date - To Date')

    // Filter threats based on selected filters
    const filteredThreats = threats.filter(threat => {
        const matchesThreat = selectedThreat === 'Select Threat' || threat.threat === selectedThreat
        const matchesCountry = selectedCountry === 'Country' || threat.country === selectedCountry
        const matchesRisk = selectedRisk === 'Select Risk' || threat.risk === selectedRisk

        // Date range filtering
        let matchesDateRange = true
        if (selectedDateRange !== 'From Date - To Date') {
            const threatDate = new Date(threat.timestamp)
            const currentDate = new Date()
            const daysDifference = Math.floor((currentDate - threatDate) / (1000 * 60 * 60 * 24))

            if (selectedDateRange === 'Last 7 Days') {
                matchesDateRange = daysDifference <= 7
            } else if (selectedDateRange === 'Last 30 Days') {
                matchesDateRange = daysDifference <= 30
            } else if (selectedDateRange === 'Last 90 Days') {
                matchesDateRange = daysDifference <= 90
            }
        }

        return matchesThreat && matchesCountry && matchesRisk && matchesDateRange
    })

    // Calculate pagination on filtered data
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentThreats = filteredThreats.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleItemsPerPageChange = (newItemsPerPage) => {
        setItemsPerPage(newItemsPerPage)
        setCurrentPage(1)
    }

    // Reset to page 1 when filters change
    const handleThreatChange = (e) => {
        setSelectedThreat(e.target.value)
        setCurrentPage(1)
    }

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value)
        setCurrentPage(1)
    }

    const handleRiskChange = (e) => {
        setSelectedRisk(e.target.value)
        setCurrentPage(1)
    }

    const handleDateRangeChange = (e) => {
        setSelectedDateRange(e.target.value)
        setCurrentPage(1)
    }

    // Reset all filters
    const handleResetFilters = () => {
        setSelectedThreat('Select Threat')
        setSelectedCountry('Country')
        setSelectedRisk('Select Risk')
        setSelectedDateRange('From Date - To Date')
        setCurrentPage(1)
    }


    return (
        <div className="bg-white rounded-[10px] shadow-lg">

            <div className="flex flex-col p-5 space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <h3 className="text-base font-bold text-[#000000]">Top Threats Detected</h3>
                <div className="flex flex-wrap gap-2.5">
                    {/* Select Threat Dropdown */}
                    <select className="px-4 py-2.5 pr-10 border border-[#D3D3D3] rounded text-gray-600 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer min-w-[180px]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 0.5rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em'
                        }}
                        value={selectedThreat}
                        onChange={handleThreatChange}
                    >
                        <option>Select Threat</option>
                        <option>Adware</option>
                        <option>Malware</option>
                        <option>Ransomware</option>
                        <option>Spyware</option>
                    </select>

                    {/* Country Dropdown */}
                    <select className="px-4 py-2.5 pr-10 border border-[#D3D3D3] rounded text-gray-600 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer min-w-[180px]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 0.5rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em'
                        }}
                        value={selectedCountry}
                        onChange={handleCountryChange}
                    >
                        <option>Country</option>
                        <option>Nepal</option>
                        <option>India</option>
                        <option>United States</option>
                        <option>Singapore</option>
                    </select>

                    {/* Select Risk Dropdown */}
                    <select className="px-4 py-2.5 pr-10 border border-[#D3D3D3]  rounded text-gray-600 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer min-w-[180px]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 0.5rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em'
                        }}
                        value={selectedRisk}
                        onChange={handleRiskChange}
                    >
                        <option>Select Risk</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Critical</option>
                    </select>

                    {/* From Date - To Date Dropdown */}
                    <select className="px-4 py-2.5 pr-10 border border-[#D3D3D3] rounded-[10px] text-gray-600 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer min-w-[200px]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 0.5rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em'
                        }}
                        value={selectedDateRange}
                        onChange={handleDateRangeChange}
                    >
                        <option>From Date - To Date</option>
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                    </select>

                    <button
                        onClick={handleResetFilters}
                        className="transition-opacity hover:opacity-80"
                        title="Reset all filters"
                    >

                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="35" height="35" rx="17.5" fill="#0069F7" />
                            <path d="M9.58337 12.75C9.58337 12.4351 9.70849 12.133 9.93118 11.9103C10.1539 11.6876 10.4559 11.5625 10.7709 11.5625H24.2292C24.5442 11.5625 24.8462 11.6876 25.0689 11.9103C25.2916 12.133 25.4167 12.4351 25.4167 12.75C25.4167 13.0649 25.2916 13.367 25.0689 13.5897C24.8462 13.8124 24.5442 13.9375 24.2292 13.9375H10.7709C10.4559 13.9375 10.1539 13.8124 9.93118 13.5897C9.70849 13.367 9.58337 13.0649 9.58337 12.75ZM12.75 17.5C12.75 17.1851 12.8752 16.883 13.0979 16.6603C13.3206 16.4376 13.6226 16.3125 13.9375 16.3125H21.0625C21.3775 16.3125 21.6795 16.4376 21.9022 16.6603C22.1249 16.883 22.25 17.1851 22.25 17.5C22.25 17.8149 22.1249 18.117 21.9022 18.3397C21.6795 18.5624 21.3775 18.6875 21.0625 18.6875H13.9375C13.6226 18.6875 13.3206 18.5624 13.0979 18.3397C12.8752 18.117 12.75 17.8149 12.75 17.5ZM16.3125 21.0625C15.9976 21.0625 15.6956 21.1876 15.4729 21.4103C15.2502 21.633 15.125 21.9351 15.125 22.25C15.125 22.5649 15.2502 22.867 15.4729 23.0897C15.6956 23.3124 15.9976 23.4375 16.3125 23.4375H18.6875C19.0025 23.4375 19.3045 23.3124 19.5272 23.0897C19.7499 22.867 19.875 22.5649 19.875 22.25C19.875 21.9351 19.7499 21.633 19.5272 21.4103C19.3045 21.1876 19.0025 21.0625 18.6875 21.0625H16.3125Z" fill="white" />
                        </svg>
                    </button>

                </div>
            </div>

            <div className="px-5 overflow-x-auto">
                <table className="w-full rounded-[10px] overflow-hidden">
                    <thead className="bg-[#F8F8FC]">
                        <tr>
                            <th className="px-6 py-[15px] text-left text-xs font-normal text-[#000000] uppercase tracking-wider">Timestamp</th>
                            <th className="px-6 py-[15px] text-left text-xs font-normal text-[#000000] uppercase tracking-wider">Country</th>
                            <th className="px-6 py-[15px] text-left text-xs font-normal text-[#000000] uppercase tracking-wider">Threat Type</th>
                            <th className="px-6 py-[15px] text-left text-xs font-normal text-[#000000] uppercase tracking-wider">Source IP</th>
                            <th className="px-6 py-[15px] text-left text-xs font-normal text-[#000000] uppercase tracking-wider">Destination Domain</th>
                            <th className="px-6 py-[15px] text-left text-xs font-normal text-[#000000] uppercase tracking-wider">Destination IP</th>
                            <th className="px-6 py-[15px] text-left text-xs font-normal text-[#000000] uppercase tracking-wider">Risk</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-[#EDEDF7]">
                        {currentThreats?.map((threat, index) => (
                            <tr key={index} className="transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-normal text-[#000000]">{threat?.timestamp}</td>
                                <td className="px-6 flex py-4 whitespace-nowrap text-xs font-normal text-[#000000]">
                                    <span className="mr-2">{threat?.flag}</span>
                                    {threat.country}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-normal text-[#000000]">{threat?.threat}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-normal text-[#000000]">{threat?.sourceIP}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-normal text-[#000000]">{threat?.domain}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-normal text-[#000000]">{threat?.destIP}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#FF8A0021] text-[#FF8A00]">
                                        {threat?.risk}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination
                totalItems={threats.length}
                onPageChange={handlePageChange}
                onItemsPerPageChange={handleItemsPerPageChange}
            />
        </div>
    )
}

export default ThreatsTable