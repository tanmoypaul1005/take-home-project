import React from 'react'

const NotificationItem = ({ notification, onMarkAsRead }) => {
  return (
    <div
      className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
        !notification.read ? 'bg-blue-50' : ''
      }`}
      onClick={() => onMarkAsRead(notification.id)}
    >
      <div className="flex items-start space-x-3">
        <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${
          !notification.read ? 'bg-[#F76C6C]' : 'bg-gray-300'
        }`}></div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{notification.title}</p>
          <p className="text-xs text-gray-500 mt-1">{notification.message}</p>
          <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
        </div>
      </div>
    </div>
  )
}

export default NotificationItem