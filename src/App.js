import { useState } from 'react'
import './App.css'
import SideBar from './components/sideBar'
import Header from './components/header'
import ThreatCalendar from './components/threatCalendar'
import ThreatsSummary from './components/threatsSummary'
import ThreatsTable from './components/threatsTable'

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
      <SideBar 
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu} 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Threat Detection Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ThreatCalendar 
              generateCalendarDays={generateCalendarDays}
              getIntensityColor={getIntensityColor}
            />
            <ThreatsSummary 
              generateCalendarDays={generateCalendarDays}
              getIntensityColor={getIntensityColor}
            />
          </div>

          {/* Top Threats Table */}
          <ThreatsTable threats={threats} />
        </main>
      </div>
    </div>
  )
}

export default App
