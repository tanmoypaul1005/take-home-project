import { useState } from 'react';

const ThreatCalendar = () => {

    const [viewPeriod, setViewPeriod] = useState(4);
    const [selectedYear, setSelectedYear] = useState('This Year');
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    // Get calendar data for specific year
    const getCalendarDataForYear = (year) => {
        // Calendar data for each year
        // startDay: 0=Monday, 1=Tuesday, 2=Wednesday, 3=Thursday, 4=Friday, 5=Saturday, 6=Sunday
        const yearData = {
            'This Year': [ // 2026
                { name: 'January', startDay: 3, days: 31 },      // Thursday
                { name: 'February', startDay: 6, days: 28 },     // Sunday
                { name: 'March', startDay: 6, days: 31 },        // Sunday
                { name: 'April', startDay: 2, days: 30 },        // Wednesday
                { name: 'May', startDay: 4, days: 31 },          // Friday
                { name: 'June', startDay: 0, days: 30 },         // Monday
                { name: 'July', startDay: 2, days: 31 },         // Wednesday
                { name: 'August', startDay: 5, days: 31 },       // Saturday
                { name: 'September', startDay: 1, days: 30 },    // Tuesday
                { name: 'October', startDay: 3, days: 31 },      // Thursday
                { name: 'November', startDay: 6, days: 30 },     // Sunday
                { name: 'December', startDay: 1, days: 31 },     // Tuesday
            ],
            'Last Year': [ // 2025
                { name: 'January', startDay: 2, days: 31 },      // Wednesday
                { name: 'February', startDay: 5, days: 28 },     // Saturday
                { name: 'March', startDay: 5, days: 31 },        // Saturday
                { name: 'April', startDay: 1, days: 30 },        // Tuesday
                { name: 'May', startDay: 3, days: 31 },          // Thursday
                { name: 'June', startDay: 6, days: 30 },         // Sunday
                { name: 'July', startDay: 1, days: 31 },         // Tuesday
                { name: 'August', startDay: 4, days: 31 },       // Friday
                { name: 'September', startDay: 0, days: 30 },    // Monday
                { name: 'October', startDay: 2, days: 31 },      // Wednesday
                { name: 'November', startDay: 5, days: 30 },     // Saturday
                { name: 'December', startDay: 0, days: 31 },     // Monday
            ],
            '2024': [
                { name: 'January', startDay: 0, days: 31 },      // Monday
                { name: 'February', startDay: 3, days: 29 },     // Thursday (leap year)
                { name: 'March', startDay: 4, days: 31 },        // Friday
                { name: 'April', startDay: 0, days: 30 },        // Monday
                { name: 'May', startDay: 2, days: 31 },          // Wednesday
                { name: 'June', startDay: 5, days: 30 },         // Saturday
                { name: 'July', startDay: 0, days: 31 },         // Monday
                { name: 'August', startDay: 3, days: 31 },       // Thursday
                { name: 'September', startDay: 6, days: 30 },    // Sunday
                { name: 'October', startDay: 1, days: 31 },      // Tuesday
                { name: 'November', startDay: 4, days: 30 },     // Friday
                { name: 'December', startDay: 6, days: 31 },     // Sunday
            ],
            '2023': [
                { name: 'January', startDay: 6, days: 31 },      // Sunday
                { name: 'February', startDay: 2, days: 28 },     // Wednesday
                { name: 'March', startDay: 2, days: 31 },        // Wednesday
                { name: 'April', startDay: 5, days: 30 },        // Saturday
                { name: 'May', startDay: 0, days: 31 },          // Monday
                { name: 'June', startDay: 3, days: 30 },         // Thursday
                { name: 'July', startDay: 5, days: 31 },         // Saturday
                { name: 'August', startDay: 1, days: 31 },       // Tuesday
                { name: 'September', startDay: 4, days: 30 },    // Friday
                { name: 'October', startDay: 6, days: 31 },      // Sunday
                { name: 'November', startDay: 2, days: 30 },     // Wednesday
                { name: 'December', startDay: 4, days: 31 },     // Friday
            ],
            '2022': [
                { name: 'January', startDay: 5, days: 31 },      // Saturday
                { name: 'February', startDay: 1, days: 28 },     // Tuesday
                { name: 'March', startDay: 1, days: 31 },        // Tuesday
                { name: 'April', startDay: 4, days: 30 },        // Friday
                { name: 'May', startDay: 6, days: 31 },          // Sunday
                { name: 'June', startDay: 2, days: 30 },         // Wednesday
                { name: 'July', startDay: 4, days: 31 },         // Friday
                { name: 'August', startDay: 0, days: 31 },       // Monday
                { name: 'September', startDay: 3, days: 30 },    // Thursday
                { name: 'October', startDay: 5, days: 31 },      // Saturday
                { name: 'November', startDay: 1, days: 30 },     // Tuesday
                { name: 'December', startDay: 3, days: 31 },     // Thursday
            ],
        };

        return yearData[year] || yearData['This Year'];
    };

    // Get months based on view period and selected year
    const adjustedMonthsData = getCalendarDataForYear(selectedYear);
    const monthsData = adjustedMonthsData.slice(0, viewPeriod);

    // Simulated threat data - days with threats (0-4 intensity levels) for all 12 months
    const threatData = {
        January: [4, 2, 0, 1, 2, 3, 0, 1, 0, 1, 2, 3, 2, 4, 3, 0, 3, 3, 0, 4, 0, 0, 1, 2, 1, 2, 4, 0, 1, 2, 0],
        February: [0, 1, 0, 1, 2, 3, 0, 2, 1, 2, 0, 3, 4, 0, 3, 4, 2, 3, 0, 4, 0, 0, 1, 2, 1, 2, 4, 0, 2, 0],
        March: [3, 1, 0, 2, 2, 3, 0, 1, 0, 2, 4, 3, 2, 0, 3, 0, 2, 3, 2, 4, 0, 0, 1, 2, 2, 2, 2, 2, 1, 2, 2],
        April: [0, 4, 0, 1, 3, 2, 0, 3, 0, 3, 0, 3, 4, 0, 3, 0, 2, 3, 0, 4, 0, 0, 1, 2, 1, 2, 4, 0, 1, 0],
        May: [0, 3, 0, 4, 2, 3, 4, 1, 0, 3, 2, 3, 0, 0, 3, 4, 2, 3, 0, 4, 0, 3, 1, 2, 1, 3, 0, 0, 3, 4, 0],
        June: [0, 1, 0, 1, 2, 3, 0, 2, 1, 2, 0, 3, 4, 0, 3, 0, 2, 3, 0, 4, 0, 0, 1, 2, 1, 2, 4, 0, 2, 0],
        July: [0, 1, 0, 1, 2, 3, 0, 1, 0, 2, 0, 3, 4, 0, 3, 0, 2, 3, 0, 4, 0, 0, 1, 2, 1, 2, 4, 0, 1, 0, 2],
        August: [0, 1, 0, 1, 2, 3, 0, 1, 0, 2, 0, 3, 4, 0, 3, 0, 2, 3, 0, 4, 0, 0, 1, 2, 1, 2, 4, 0, 1, 0, 2],
        September: [0, 2, 0, 1, 2, 3, 0, 1, 0, 1, 2, 3, 0, 0, 3, 0, 2, 3, 0, 4, 0, 0, 1, 2, 1, 2, 0, 0, 1, 0],
        October: [0, 1, 0, 1, 2, 3, 0, 2, 1, 2, 0, 3, 4, 0, 3, 0, 2, 3, 0, 4, 0, 0, 1, 2, 1, 2, 4, 0, 2, 0, 1],
        November: [0, 1, 0, 1, 2, 3, 0, 1, 0, 2, 0, 3, 4, 0, 3, 0, 2, 3, 0, 4, 0, 0, 1, 2, 1, 2, 4, 0, 1, 0],
        December: [0, 2, 0, 1, 2, 3, 0, 1, 0, 1, 2, 3, 0, 0, 3, 0, 2, 3, 0, 4, 0, 0, 1, 2, 1, 2, 0, 0, 1, 2, 0]
    };

    // Get color based on threat level
    const getThreatColor = (level) => {
        const colors = {
            0: 'bg-[#0069F71A]', // No threat
            1: 'bg-[#0069F766]', // Low
            2: 'bg-[#0069F766]', // Medium
            3: 'bg-[#0069F7]', // High
            4: 'bg-[#0069F7]', // Critical
        };
        return colors[level] || 'bg-white';
    };

    // Generate dynamic threat data based on date
    const generateThreatData = (threatLevel) => {
        // Base threat counts on the threat level
        const baseThreats = {
            0: { total: 0, high: 0, medium: 0, low: 0 },
            1: { total: Math.floor(Math.random() * 15) + 5, high: 0, medium: 0, low: 0 },
            2: { total: Math.floor(Math.random() * 30) + 15, high: 0, medium: 0, low: 0 },
            3: { total: Math.floor(Math.random() * 50) + 30, high: 0, medium: 0, low: 0 },
            4: { total: Math.floor(Math.random() * 70) + 50, high: 0, medium: 0, low: 0 }
        };

        const data = baseThreats[threatLevel];

        if (threatLevel === 0) return data;

        // Distribute threats based on level
        if (threatLevel === 1) {
            data.low = data.total;
        } else if (threatLevel === 2) {
            data.low = Math.floor(data.total * 0.6);
            data.medium = data.total - data.low;
        } else if (threatLevel === 3) {
            data.low = Math.floor(data.total * 0.3);
            data.medium = Math.floor(data.total * 0.5);
            data.high = data.total - data.low - data.medium;
        } else if (threatLevel === 4) {
            data.low = Math.floor(data.total * 0.2);
            data.medium = Math.floor(data.total * 0.3);
            data.high = data.total - data.low - data.medium;
        }

        return data;
    };

    // Handle date click
    const handleDateClick = (month, day, threatLevel, event) => {
        const threatData = generateThreatData(threatLevel);
        setSelectedDate({
            month,
            day,
            threatLevel,
            ...threatData
        });

        // Calculate position - center popup above the clicked date
        const rect = event.currentTarget.getBoundingClientRect();
        const modalWidth = 320; // width of popup (w-80 = 320px)
        const modalHeight = 450; // approximate height of popup

        setModalPosition({
            x: rect.left + (rect.width / 2) - (modalWidth / 2),
            y: rect.top - modalHeight - 20 // 20px gap above the date
        });

        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDate(null);
    };

    // Render calendar for a single month
    const renderMonth = (monthData, index) => {
        const { name, startDay, days } = monthData;
        const threats = threatData[name];
        const cells = [];

        // Add empty cells for days before month starts
        for (let i = 0; i < startDay; i++) {
            cells.push(
                <div key={`empty-${i}`} className="aspect-square"></div>
            );
        }

        // Add day cells
        for (let day = 1; day <= days; day++) {
            const threatLevel = threats[day - 1];
            const colorClass = getThreatColor(threatLevel);
            const isToday = name === 'February' && day === 1; // Example: Feb 1 is today

            cells.push(
                <div
                    key={day}
                    onClick={(e) => handleDateClick(name, day, threatLevel, e)}
                    className={`aspect-square flex items-center justify-center text-xs font-normal rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-blue-400 hover:ring-offset-1 ${colorClass} ${isToday ? 'ring-2 ring-blue-600' : ''
                        } ${threatLevel >= 3 ? 'text-white' : 'text-gray-700'}`}
                >
                    {day}
                </div>
            );
        }

        return (
            <div key={name} className="w-full">
                <div className="mb-3">
                    <h3 className="text-xs font-normal text-center text-[#000000]">{name}</h3>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="text-xs font-medium text-center text-gray-500">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                    {cells}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="p-4 bg-white rounded-[10px] shadow-sm sm:p-5">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h1 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">Threat Detection {selectedYear !== 'This Year' && `- ${selectedYear}`}</h1>
                        <p className="text-xs text-gray-600 sm:text-sm">Real-time monitoring and identification of potential risks</p>
                    </div>

                    {/* Year selector */}
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full px-4 py-2 pr-10 text-sm text-[#000000] bg-white border font-normal border-[#D3D3D3] rounded-[5px] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:w-auto"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 0.5rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em',
                            color: '#000000'
                        }}
                    >
                        <option>This Year</option>
                        <option>Last Year</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                    </select>
                </div>

                <div className='h-[1px] bg-[#EAEAEA] w-full my-5'></div>

                {/* Calendar Grid */}
                <div className={`grid gap-6 mb-[30px] ${viewPeriod === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
                    viewPeriod === 8 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
                        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    }`}>
                    {monthsData?.map((month, index) => renderMonth(month, index))}
                </div>

                {/* Footer Controls */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
                    <span className="text-sm font-normal text-center text-[#000000] sm:text-left">Viewing</span>

                    <div className="flex justify-center gap-2 sm:justify-start">
                        <button
                            onClick={() => setViewPeriod(4)}
                            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-sm font-normal rounded-[5px] transition-all ${viewPeriod === 4
                                ? 'bg-[#0069F7] text-white shadow-sm'
                                : 'bg-[#EBEBEB] text-[#000000] hover:bg-gray-200'
                                }`}
                        >
                            4 Months
                        </button>

                        <button
                            onClick={() => setViewPeriod(8)}
                            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${viewPeriod === 8
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            8 Months
                        </button>

                        <button
                            onClick={() => setViewPeriod(12)}
                            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${viewPeriod === 12
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            12 Months
                        </button>
                    </div>
                </div>
            </div>


            {/* Modal */}
            {isModalOpen && selectedDate && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={closeModal}
                    />

                    {/* Popup */}
                    <div
                        className="fixed z-50"
                        style={{
                            left: `${modalPosition.x + 30}px`,
                            top: `${modalPosition.y + 180}px`,
                        }}
                    >
                        <div className="relative p-6 bg-white shadow-2xl rounded-2xl w-[250px]">
                            {/* Pointer Arrow */}
                            <div
                                className="absolute w-6 h-6 transform rotate-45 -translate-x-1/2 bg-white shadow-lg -bottom-3 left-1/2"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                            />

                            {/* Header */}
                            <h2 className="text-base font-semibold text-[#000000] mb-1">Threats Detection</h2>

                            {/* Date Badge */}
                            <div className="flex gap-x-2.5 items-center gap-3">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" rx="15" fill="#009957" />
                                    <path d="M18.3333 7.5V10.8333M11.6666 7.5V10.8333M8.33331 14.1667H21.6666M14.1666 17.5H15V20M8.33331 10.8333C8.33331 10.3913 8.50891 9.96738 8.82147 9.65482C9.13403 9.34226 9.55795 9.16667 9.99998 9.16667H20C20.442 9.16667 20.8659 9.34226 21.1785 9.65482C21.4911 9.96738 21.6666 10.3913 21.6666 10.8333V20.8333C21.6666 21.2754 21.4911 21.6993 21.1785 22.0118C20.8659 22.3244 20.442 22.5 20 22.5H9.99998C9.55795 22.5 9.13403 22.3244 8.82147 22.0118C8.50891 21.6993 8.33331 21.2754 8.33331 20.8333V10.8333Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div>
                                    <p className="text-xs font-normal text-[#000000]">
                                        {selectedDate.month} {selectedDate.day}, 2023 18:39
                                    </p>
                                </div>
                            </div>

                            {/* Total Threats */}
                            <div className='border-t border-b border-[#F4F1F1] py-2.5 my-[15px]'>
                                <div className="bg-[#FFE8CD] rounded-xl p-2.5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="9" stroke="#F59E0B" strokeWidth="2" />
                                            <path d="M10 6V11" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                                            <circle cx="10" cy="14" r="0.5" fill="#F59E0B" />
                                        </svg>
                                        <span className="font-semibold text-[10px] text-[#000000]">Total Threats Detected</span>
                                    </div>
                                    <span className="text-xs font-semibold text-[#FF8A00]">{selectedDate.total}</span>
                                </div>
                            </div>

                            {/* Threat Levels */}
                            <div className="space-y-2">
                                {/* High */}
                                <div className="bg-[#FFCCCC] text-xs font-normal rounded-[5px] px-2.5 py-[5px] flex items-center justify-between">
                                    <span className="text-gray-900">High</span>
                                    <span className="text-red-500">{selectedDate.high}</span>
                                </div>

                                {/* Medium */}
                                <div className="text-xs font-normal bg-[#FFEDCC] rounded-[5px] px-2.5 py-[5px] flex items-center justify-between">
                                    <span className="text-gray-900">Medium</span>
                                    <span className="">{selectedDate.medium}</span>
                                </div>

                                {/* Low */}
                                <div className="text-xs font-normal bg-[#CCFFE9] text-[#000000] rounded-[5px] px-2.5 py-[5px] flex items-center justify-between">
                                    <span className="">Low</span>
                                    <span className="">{selectedDate.low}</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ThreatCalendar;