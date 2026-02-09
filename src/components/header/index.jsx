const Header = ({ sidebarOpen, setSidebarOpen }) => {
    return (
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
    )
}

export default Header