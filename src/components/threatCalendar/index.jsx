const ThreatCalendar = ({ generateCalendarDays, getIntensityColor }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Threat Detection</h3>
                <span className="text-sm text-gray-500">This Year ▼</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Real-time monitoring and identification of code threats.</p>

            <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">January</h4>
                <div className="grid grid-cols-7 gap-1">
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                        <div key={day} className="text-xs text-gray-500 text-center py-1">{day}</div>
                    ))}
                    {[...Array(3)].map((_, i) => (
                        <div key={`empty-${i}`} className="w-8 h-8"></div>
                    ))}
                    {generateCalendarDays(0).map((day) => (
                        <div
                            key={day.day}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white cursor-pointer transition-all hover:scale-110 ${getIntensityColor(day.intensity)}`}
                        >
                            {day.day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ThreatCalendar
