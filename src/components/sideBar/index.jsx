
const SideBar = ({ selectedMenu, setSelectedMenu, sidebarOpen, setSidebarOpen }) => {

    const menuItems = [
        { name: 'Dashboard', icon: '📊' },
        { name: 'Threat Detection', icon: '🛡️' },
        { name: 'Blocked Domains', icon: '🚫' },
        { name: 'Allowed Domains', icon: '✅' },
        { name: 'Reports', icon: '📄' },
        { name: 'History of IP', icon: '🕒' },
        { name: 'DGA Domain', icon: '🎲' },
        { name: 'Backup and Restore', icon: '💾' },
        { name: 'Site Risk Indicator', icon: '⚠️' },
        { name: 'Users', icon: '👥' },
        { name: 'Settings', icon: '⚙️' }
    ]

    return (
        <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-blue-600 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
            <div className="h-full flex flex-col">
                {/* Logo */}
                <div className="p-6 flex items-center justify-center border-b border-blue-500">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                        </svg>
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto py-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => {
                                setSelectedMenu(item.name)
                                setSidebarOpen(false)
                            }}
                            className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors ${selectedMenu === item.name
                                ? 'bg-blue-700 text-white border-l-4 border-white'
                                : 'text-blue-100 hover:bg-blue-500'
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default SideBar;