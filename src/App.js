import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Breadcrumb from './components/Breadcrumb'
import ThreatCalendar from './components/threatCalendar'
import ThreatsTable from './components/threatsTable'

function App() {
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
    <Layout selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}>
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Dashboard', active: false },
          { label: 'Dashboard', active: true }
        ]} 
      />

      {/* Threat Detection Section */}
      <div className="mb-5">
        <ThreatCalendar
          generateCalendarDays={generateCalendarDays}
          getIntensityColor={getIntensityColor}
        />
      </div>

      {/* Top Threats Table */}
      <ThreatsTable />
    </Layout>
  )
}

export default App