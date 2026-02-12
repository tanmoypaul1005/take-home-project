import AllowedDomains from "../../util/svg/sideBar/AllowedDomains";
import BackupAndRestore from "../../util/svg/sideBar/BackupAndRestore";
import BlockedDomainsIcon from "../../util/svg/sideBar/BlockedDomainsIcon";
import DashboardIcon from "../../util/svg/sideBar/DashboardIcon";
import HistoryOfIP from "../../util/svg/sideBar/HistoryOfIP";
import Reports from "../../util/svg/sideBar/Reports";
import Settings from "../../util/svg/sideBar/Settings";
import ThreatIcon from "../../util/svg/sideBar/ThreatIcon";
import Users from "../../util/svg/sideBar/Users";

const SideBar = ({ selectedMenu, setSelectedMenu, sidebarOpen, setSidebarOpen }) => {

    const menuItems = [
        { name: 'Dashboard', icon: <DashboardIcon /> },
        { name: 'Threat Detection', icon: <ThreatIcon/> },
        { name: 'Blocked Domains', icon: <BlockedDomainsIcon/> },
        { name: 'Allowed Domains', icon: <AllowedDomains/> },
        { name: 'Reports', icon: <Reports /> },
        { name: 'History of IP', icon: <HistoryOfIP/> },
        // { name: 'DGA Domain', icon: <DGADomain/> },
        { name: 'Backup and Restore', icon: <BackupAndRestore/> },
        // { name: 'Site Risk Indicator', icon: <SiteRiskIndicator/> },
        { name: 'Users', icon: <Users/> },
        { name: 'Settings', icon: <Settings/> }
    ]

    return (
        <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-68 bg-primary transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
            <div className="flex flex-col h-full px-6">
                {/* Logo */}
                <div className="flex pt-6">
                    <div className="w-12 h-12 bg-white rounded-[16px] p-3 flex items-center justify-center">
                        <img src="./logo.svg" alt="Logo" />
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto py-4 space-y-2.5">
                    {menuItems?.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => {
                                setSelectedMenu(item.name)
                                setSidebarOpen(false)
                            }}
                            className={`w-full flex items-center rounded-[10px] space-x-3 px-5 py-3 text-left transition-colors ${selectedMenu === item.name
                                ? 'bg-[#217CF6] text-white'
                                : 'text-blue-100 hover:bg-[#217CF6]'
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-base font-normal text-white">{item.name}</span>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default SideBar;