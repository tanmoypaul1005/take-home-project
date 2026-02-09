import { useState } from 'react'
import './App.css'
import SideBar from './components/sideBar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('Dashboard')



  const threats = [
    { timestamp: 'Oct 19, 2023 12:24', country: 'Philippines', flag: '🇵🇭', threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'India', flag: '🇮🇳', threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'Nepal', flag: '🇳🇵', threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: '🇺🇸', threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: '🇺🇸', threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: '🇺🇸', threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2023 12:24', country: 'United States', flag: '🇺🇸', threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' }
  ]

  const generateCalendarDays = (month) => {
    const days = []
    const maxDays = month === 1 ? 28 : month === 3 ? 30 : 31
    for (let i = 1; i <= maxDays; i++) {
      const intensity = Math.floor(Math.random() * 4)
      days.push({ day: i, intensity })
    }
    return days
  }

  const getIntensityColor = (intensity) => {
    if (intensity === 0) return 'bg-blue-100'
    if (intensity === 1) return 'bg-blue-300'
    if (intensity === 2) return 'bg-blue-500'
    return 'bg-blue-700'
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <SideBar setSelectedMenu={setSelectedMenu} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden text-gray-600 hover:text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <div>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.04167 0H6.25C6.52627 0 6.79122 0.109747 6.98657 0.305097C7.18192 0.500448 7.29167 0.765399 7.29167 1.04167C7.29167 1.31793 7.18192 1.58289 6.98657 1.77824C6.79122 1.97359 6.52627 2.08333 6.25 2.08333H1.04167C0.765399 2.08333 0.500448 1.97359 0.305097 1.77824C0.109747 1.58289 0 1.31793 0 1.04167C0 0.765399 0.109747 0.500448 0.305097 0.305097C0.500448 0.109747 0.765399 0 1.04167 0ZM8.33333 8.33333H13.5417C13.8179 8.33333 14.0829 8.44308 14.2782 8.63843C14.4736 8.83378 14.5833 9.09873 14.5833 9.375C14.5833 9.65127 14.4736 9.91622 14.2782 10.1116C14.0829 10.3069 13.8179 10.4167 13.5417 10.4167H8.33333C8.05707 10.4167 7.79211 10.3069 7.59676 10.1116C7.40141 9.91622 7.29167 9.65127 7.29167 9.375C7.29167 9.09873 7.40141 8.83378 7.59676 8.63843C7.79211 8.44308 8.05707 8.33333 8.33333 8.33333ZM1.04167 4.16667H13.5417C13.8179 4.16667 14.0829 4.27641 14.2782 4.47176C14.4736 4.66711 14.5833 4.93207 14.5833 5.20833C14.5833 5.4846 14.4736 5.74955 14.2782 5.9449C14.0829 6.14025 13.8179 6.25 13.5417 6.25H1.04167C0.765399 6.25 0.500448 6.14025 0.305097 5.9449C0.109747 5.74955 0 5.4846 0 5.20833C0 4.93207 0.109747 4.66711 0.305097 4.47176C0.500448 4.27641 0.765399 4.16667 1.04167 4.16667Z" fill="#0069F7" />
                    </svg>
                    <span className="text-[#0069F7] text-base font-bold">Dashboard</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
                <div className="flex items-center space-x-2 ml-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                    AW
                  </div>
                  <div className="hidden md:block text-sm">
                    <div className="font-medium text-gray-900">Allan Watanabe</div>
                    <div className="text-gray-500 text-xs">Super Administrator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Threat Detection Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* January Calendar */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Threat Detection</h3>
                <span className="text-sm text-gray-500">This Year ▼</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Real-time monitoring and identification of code threats.</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">January</h4>
                <div className="grid grid-cols-7 gap-1">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                    <div key={day} className="text-xs text-gray-500 text-center py-1">{day}</div>
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <div key={`empty-${i}`} className="w-8 h-8"></div>
                  ))}
                  {generateCalendarDays(0).map((day) => (
                    <div
                      key={day.day}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white cursor-pointer transition-all hover:scale-110 ${getIntensityColor(day.intensity)}`}
                    >
                      {day.day}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Threats Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Threats Detection</h3>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <span>📅</span>
                <span>Feb 25, 2023 18:39</span>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-orange-800 font-medium">⚠️ Total Threats Detected</span>
                  <span className="text-2xl font-bold text-orange-800">43</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">High</span>
                  <span className="text-sm font-bold text-gray-900">23</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Medium</span>
                  <span className="text-sm font-bold text-gray-900">14</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Low</span>
                  <span className="text-sm font-bold text-gray-900">6</span>
                </div>
              </div>

              {/* Additional Month Calendars */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-medium text-gray-700 mb-2">March</h4>
                  <div className="grid grid-cols-7 gap-1">
                    {generateCalendarDays(2).slice(0, 21).map((day) => (
                      <div
                        key={day.day}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${getIntensityColor(day.intensity)}`}
                      >
                        {day.day}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-gray-700 mb-2">April</h4>
                  <div className="grid grid-cols-7 gap-1">
                    {generateCalendarDays(3).slice(0, 21).map((day) => (
                      <div
                        key={day.day}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${getIntensityColor(day.intensity)}`}
                      >
                        {day.day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Threats Table */}
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className="mr-2">{threat.flag}</span>
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

            {/* Pagination */}
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
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
