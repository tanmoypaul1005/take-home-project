import { useState } from 'react'
import './App.css'
import SideBar from './components/sideBar'
import Header from './components/header'
import ThreatCalendar from './components/threatCalendar'
import ThreatsTable from './components/threatsTable'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('Dashboard')


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
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
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
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:pt-5 lg:pb-8 lg:px-[30px] overflow-y-auto">
          {/* Threat Detection Cards */}
          <div className="mb-8">
            <div className="flex mb-5 text-xs font-medium gap-x-[5px]">
              Dashboard
              <div className='mt-1'>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.78125 8.78125L4.78125 4.78125L0.78125 0.78125" stroke="#2E3950" stroke-width="1.5625" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span className="text-[#0069F7] text-xs font-medium">Dashboard</span></div>
            <ThreatCalendar
              generateCalendarDays={generateCalendarDays}
              getIntensityColor={getIntensityColor}
            />
          </div>

          {/* Top Threats Table */}
          <ThreatsTable />
        </main>

      </div>
    </div>
  )
}

export default App
