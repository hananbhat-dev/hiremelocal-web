import React from 'react'
import { Plus, MessageSquare, Calendar, Clock } from 'lucide-react'

export default function QuickActions() {
  const actions = [
    { icon: Plus, label: 'Post Job', color: 'bg-indigo-500' },
    { icon: MessageSquare, label: 'Chat', color: 'bg-green-500', badge: 2 },
    { icon: Calendar, label: 'Schedule', color: 'bg-purple-500' },
    { icon: Clock, label: 'History', color: 'bg-blue-500' },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 sm:mb-8 px-1 sm:px-0">
      {actions.map(({ icon: Icon, label, color, badge }) => (
        <button
          key={label}
          className="relative flex flex-col items-center p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md 
                     transition-all duration-200 active:scale-95 touch-manipulation min-h-[80px] sm:min-h-[100px]"
        >
          <div 
            className={`${color} rounded-xl text-white p-2.5 sm:p-3 mb-2 relative 
                       transform transition-transform duration-200 group-hover:scale-110`}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            {badge && (
              <span className="absolute -top-1.5 -right-1.5 h-5 w-5 bg-red-500 text-white text-xs 
                             rounded-full flex items-center justify-center border-2 border-white">
                {badge}
              </span>
            )}
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
            {label}
          </span>
        </button>
      ))}
    </div>
  )
}