import IndiaFlag from '../../util/svg/country/IndiaFlag'
import NepalFlag from '../../util/svg/country/NepalFlag'
import SingaporeFlag from '../../util/svg/country/SingaporeFlag'
import USAFlag from '../../util/svg/country/USAFlag'
import Pagination from '../pagination'

const ThreatsTable = () => {

    
  const threats = [
    { timestamp: 'Oct 19, 2023 12:24', country: 'Singapore', flag: <SingaporeFlag/>, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'India', flag: <IndiaFlag/>, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'Nepal', flag: <NepalFlag/>, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: <USAFlag/>, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: <USAFlag/>, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: <USAFlag/>, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: <USAFlag/>, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' }
  ]

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <h3 className="text-lg font-semibold text-gray-900">Top Threats Detected</h3>
                    <div className="flex flex-wrap gap-3">
                        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Select Threat</option>
                            <option>Adware</option>
                            <option>Malware</option>
                        </select>
                        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Country</option>
                        </select>
                        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Select Risk</option>
                        </select>
                        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>From Date - To Date</option>
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
                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
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
