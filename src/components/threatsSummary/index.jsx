const ThreatsSummary = ({ generateCalendarDays, getIntensityColor }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Threats Detection</h3>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <span>📅</span>
                <span>Feb 25, 2023 18:39</span>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                    <span className="text-orange-800 font-medium">⚠️ Total Threats Detected</span>
                    <span className="text-2xl font-bold text-orange-800">43</span>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">High</span>
                    <span className="text-sm font-bold text-gray-900">23</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Medium</span>
                    <span className="text-sm font-bold text-gray-900">14</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Low</span>
                    <span className="text-sm font-bold text-gray-900">6</span>
                </div>
            </div>

            {/* Additional Month Calendars */}
            <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                    <h4 className="text-xs font-medium text-gray-700 mb-2">March</h4>
                    <div className="grid grid-cols-7 gap-1">
                        {generateCalendarDays(2).slice(0, 21).map((day) => (
                            <div
                                key={day.day}
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${getIntensityColor(day.intensity)}`}
                            >
                                {day.day}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-medium text-gray-700 mb-2">April</h4>
                    <div className="grid grid-cols-7 gap-1">
                        {generateCalendarDays(3).slice(0, 21).map((day) => (
                            <div
                                key={day.day}
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${getIntensityColor(day.intensity)}`}
                            >
                                {day.day}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreatsSummary
