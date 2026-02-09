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
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Threat Detection Cards */}
          <div className="mb-8">
            <div className="mb-5 text-xs font-medium">Dashboard &gt; <span className="text-[#0069F7] ">Dashboard</span></div>
            <ThreatCalendar 
              generateCalendarDays={generateCalendarDays}
              getIntensityColor={getIntensityColor}
            />
          </div>

          {/* Top Threats Table */}
          <ThreatsTable  />
        </main>


      </div>
    </div>
  )
}

export default App
