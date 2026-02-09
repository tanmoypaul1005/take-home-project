import IndiaFlag from '../../util/svg/country/IndiaFlag'
import NepalFlag from '../../util/svg/country/NepalFlag'
import SingaporeFlag from '../../util/svg/country/SingaporeFlag'
import USAFlag from '../../util/svg/country/USAFlag'
import Pagination from '../pagination'

const ThreatsTable = () => {


    const threats = [
        { timestamp: 'Oct 19, 2023 12:24', country: 'Singapore', flag: <SingaporeFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
        { timestamp: 'Oct 19, 2023 12:24', country: 'India', flag: <IndiaFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
        { timestamp: 'Oct 19, 2023 12:24', country: 'Nepal', flag: <NepalFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
        { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: <USAFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
        { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: <USAFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
        { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: <USAFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
        { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: <USAFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' }
    ]

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <h3 className="text-base font-bold text-[#000000]">Top Threats Detected</h3>
                    <div className="flex flex-wrap gap-3">
                        {/* Select Threat Dropdown */}
                        <select className="px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-gray-600 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer min-w-[180px]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                                backgroundPosition: 'right 0.5rem center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '1.5em 1.5em'
                            }}
                        >
                            <option>Select Threat</option>
                            <option>Adware</option>
                            <option>Malware</option>
                            <option>Ransomware</option>
                            <option>Spyware</option>
                        </select>

                        {/* Country Dropdown */}
                        <select className="px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-gray-600 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer min-w-[180px]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                                backgroundPosition: 'right 0.5rem center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '1.5em 1.5em'
                            }}
                        >
                            <option>Country</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>Canada</option>
                            <option>Australia</option>
                        </select>

                        {/* Select Risk Dropdown */}
                        <select className="px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-gray-600 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer min-w-[180px]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                                backgroundPosition: 'right 0.5rem center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '1.5em 1.5em'
                            }}
                        >
                            <option>Select Risk</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Critical</option>
                        </select>

                        {/* From Date - To Date Dropdown */}
                        <select className="px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-gray-600 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer min-w-[200px]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                                backgroundPosition: 'right 0.5rem center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '1.5em 1.5em'
                            }}
                        >
                            <option>From Date - To Date</option>
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>Last 90 Days</option>
                            <option>Custom Range</option>
                        </select>

                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            🔍
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Threat Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source IP</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination Domain</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination IP</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {threats.map((threat, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{threat.timestamp}</td>
                                <td className="px-6 flex py-4 whitespace-nowrap text-sm text-gray-900">
                                    <span className="mr-2">{threat?.flag}</span>
                                    {threat.country}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{threat.threat}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{threat.sourceIP}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{threat.domain}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{threat.destIP}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#FF8A0021] text-[#FF8A00]">
                                        {threat.risk}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination />
        </div>
    )
}

export default ThreatsTable
