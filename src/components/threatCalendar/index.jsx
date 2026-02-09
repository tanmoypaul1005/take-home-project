import React, { useState } from 'react';

const ThreatCalendar = () => {
  const [viewPeriod, setViewPeriod] = useState(4);
  const [selectedYear, setSelectedYear] = useState('This Year');
  
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
  );
};

export default ThreatCalendar;