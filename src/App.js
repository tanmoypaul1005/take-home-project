import './App.css'
import Layout from './components/Layout'
import Breadcrumb from './components/Breadcrumb'
import ThreatCalendar from './components/threatCalendar'
import ThreatsTable from './components/threatsTable'

function App() {

  return (
    <Layout>
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Dashboard', active: false },
          { label: 'Dashboard', active: true }
        ]} 
      />

      {/* Threat Detection Section */}
      <div className="mb-5">
        <ThreatCalendar/>
      </div>

      {/* Top Threats Table */}
      <ThreatsTable />
    </Layout>
  )
}

export default App