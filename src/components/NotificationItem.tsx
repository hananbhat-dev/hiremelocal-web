import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NotificationAction {
  label: string;
  primary?: boolean;
  onClick: () => void;
}

interface NotificationItemProps {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  actions: NotificationAction[];
}

export default function NotificationItem({
  title,
  message,
  time,
  read,
  icon: Icon,
  color,
  bgColor,
  actions,
}: NotificationItemProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl ${
        !read ? 'border-l-4 border-indigo-600' : ''
      }`}
    >
      <div className="flex gap-4">
        <div className={`${bgColor} p-2 sm:p-3 rounded-xl flex-shrink-0`}>
          <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">
                {title}
              </h3>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">{message}</p>
            </div>
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap flex-shrink-0">
              {time}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className={`text-sm ${
                  action.primary ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}