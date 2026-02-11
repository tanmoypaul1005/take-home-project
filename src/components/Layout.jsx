import { useState } from 'react'
import SideBar from './sideBar'
import Header from './header'

const Layout = ({ children, selectedMenu, setSelectedMenu }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Fixed */}
      <SideBar
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        {/* Header - Fixed */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Page Content - Scrollable Only */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:pt-5 lg:pb-8 lg:px-[30px]">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout