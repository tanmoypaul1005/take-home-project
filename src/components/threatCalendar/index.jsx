import { useState } from 'react';

const ThreatCalendar = () => {

  const [viewPeriod, setViewPeriod] = useState(4);
  const [selectedYear, setSelectedYear] = useState('This Year');
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  
  // Calendar data for all 12 months (starting day of week and number of days)
  const allMonthsData = [
    { name: 'January', startDay: 0, days: 31 },
    { name: 'February', startDay: 3, days: 29 },
    { name: 'March', startDay: 4, days: 31 },
    { name: 'April', startDay: 0, days: 30 },
    { name: 'May', startDay: 2, days: 31 },
    { name: 'June', startDay: 5, days: 30 },
    { name: 'July', startDay: 0, days: 31 },
    { name: 'August', startDay: 3, days: 31 },
    { name: 'September', startDay: 6, days: 30 },
    { name: 'October', startDay: 1, days: 31 },
    { name: 'November', startDay: 4, days: 30 },
    { name: 'December', startDay: 6, days: 31 },
  ];
  
  // Get months based on view period
  const monthsData = allMonthsData.slice(0, viewPeriod);
  
  // Simulated threat data - days with threats (0-4 intensity levels) for all 12 months
  const threatData = {
    January: [0,2,0,1,2,3,0,1,0,1,2,3,0,0,3,0,2,3,0,4,0,0,1,2,1,2,0,0,1,2,0],
    February: [0,1,0,1,2,3,0,2,1,2,0,3,4,0,3,0,2,3,0,4,0,0,1,2,1,2,4,0,2,0],
    March: [0,1,0,1,2,3,0,1,0,2,0,3,4,0,3,0,2,3,0,4,0,0,1,2,1,2,4,0,1,0,2],
    April: [0,1,0,1,2,3,0,1,0,2,0,3,4,0,3,0,2,3,0,4,0,0,1,2,1,2,4,0,1,0],
    May: [0,2,0,1,2,3,0,1,0,1,2,3,0,0,3,0,2,3,0,4,0,0,1,2,1,2,0,0,1,2,0],
    June: [0,1,0,1,2,3,0,2,1,2,0,3,4,0,3,0,2,3,0,4,0,0,1,2,1,2,4,0,2,0],
    July: [0,1,0,1,2,3,0,1,0,2,0,3,4,0,3,0,2,3,0,4,0,0,1,2,1,2,4,0,1,0,2],
    August: [0,1,0,1,2,3,0,1,0,2,0,3,4,0,3,0,2,3,0,4,0,0,1,2,1,2,4,0,1,0,2],
    September: [0,2,0,1,2,3,0,1,0,1,2,3,0,0,3,0,2,3,0,4,0,0,1,2,1,2,0,0,1,0],
    October: [0,1,0,1,2,3,0,2,1,2,0,3,4,0,3,0,2,3,0,4,0,0,1,2,1,2,4,0,2,0,1],
    November: [0,1,0,1,2,3,0,1,0,2,0,3,4,0,3,0,2,3,0,4,0,0,1,2,1,2,4,0,1,0],
    December: [0,2,0,1,2,3,0,1,0,1,2,3,0,0,3,0,2,3,0,4,0,0,1,2,1,2,0,0,1,2,0]
  };
  
  // Get color based on threat level
  const getThreatColor = (level) => {
    const colors = {
      0: 'bg-white', // No threat
      1: 'bg-blue-100', // Low
      2: 'bg-blue-300', // Medium
      3: 'bg-blue-500', // High
      4: 'bg-blue-600', // Critical
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
          className={`aspect-square flex items-center justify-center text-xs font-medium rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-blue-400 hover:ring-offset-1 ${colorClass} ${
            isToday ? 'ring-2 ring-blue-600' : ''
          } ${threatLevel >= 3 ? 'text-white' : 'text-gray-700'}`}
        >
          {day}
        </div>
      );
    }
    
    return (
      <div key={name} className="w-full">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 text-center">{name}</h3>
        </div>
        
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-xs font-medium text-gray-500 text-center">
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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Threat Detection</h1>
            <p className="text-sm text-gray-600">Real-time monitoring and identification of potential risks</p>
          </div>
          
          {/* Year selector */}
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 pr-10 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em'
            }}
          >
            <option>This Year</option>
            <option>Last Year</option>
            <option>2022</option>
            <option>2021</option>
          </select>
        </div>
        
        {/* Calendar Grid */}
        <div className={`grid gap-6 mb-6 ${
          viewPeriod === 4 ? 'grid-cols-4' : 
          viewPeriod === 8 ? 'grid-cols-4' : 
          'grid-cols-4'
        }`}>
          {monthsData.map((month, index) => renderMonth(month, index))}
        </div>
        
        {/* Footer Controls */}
        <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-200">
          <span className="text-sm text-gray-600 font-medium">Viewing</span>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewPeriod(4)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                viewPeriod === 4
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              4 Months
            </button>
            
            <button
              onClick={() => setViewPeriod(8)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                viewPeriod === 8
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              8 Months
            </button>
            
            <button
              onClick={() => setViewPeriod(12)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                viewPeriod === 12
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
              left: `${modalPosition.x}px`,
              top: `${modalPosition.y}px`,
            }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 relative">
              {/* Pointer Arrow */}
              <div 
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45 shadow-lg"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
              />
              
              {/* Header */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Threats Detection</h2>
              
              {/* Date Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-500 rounded-lg p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="6" width="18" height="15" rx="2" stroke="white" strokeWidth="2"/>
                    <path d="M3 10H21" stroke="white" strokeWidth="2"/>
                    <path d="M7 3V6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M17 3V6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {selectedDate.month} {selectedDate.day}, 2023 18:39
                  </p>
                </div>
              </div>

              {/* Total Threats */}
              <div className="bg-orange-50 rounded-xl p-4 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#F59E0B" strokeWidth="2"/>
                    <path d="M10 6V11" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="10" cy="14" r="0.5" fill="#F59E0B"/>
                  </svg>
                  <span className="font-semibold text-gray-900">Total Threats Detected</span>
                </div>
                <span className="text-xl font-bold text-orange-500">{selectedDate.total}</span>
              </div>

              {/* Threat Levels */}
              <div className="space-y-2">
                {/* High */}
                <div className="bg-red-50 rounded-xl p-3 flex items-center justify-between">
                  <span className="font-medium text-gray-900">High</span>
                  <span className="text-lg font-bold text-red-500">{selectedDate.high}</span>
                </div>

                {/* Medium */}
                <div className="bg-yellow-50 rounded-xl p-3 flex items-center justify-between">
                  <span className="font-medium text-gray-900">Medium</span>
                  <span className="text-lg font-bold text-yellow-600">{selectedDate.medium}</span>
                </div>

                {/* Low */}
                <div className="bg-green-50 rounded-xl p-3 flex items-center justify-between">
                  <span className="font-medium text-gray-900">Low</span>
                  <span className="text-lg font-bold text-green-500">{selectedDate.low}</span>
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