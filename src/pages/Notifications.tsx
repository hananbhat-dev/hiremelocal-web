import React from 'react';
import { Bell, CheckCircle, AlertCircle, Calendar, DollarSign, MessageSquare } from 'lucide-react';
import NotificationItem from '../components/NotificationItem';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'application',
      title: 'New Job Application',
      message: 'John Smith has applied for "Website Development"',
      time: '2 minutes ago',
      read: false,
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      actions: [
        { label: 'View Application', primary: true, onClick: () => {} },
        { label: 'Message', onClick: () => {} }
      ]
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      message: 'Sarah Chen sent you a message about the cleaning service',
      time: '1 hour ago',
      read: false,
      icon: MessageSquare,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      actions: [
        { label: 'Reply', primary: true, onClick: () => {} }
      ]
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment Received',
      message: 'Payment of $150 received for plumbing service',
      time: '2 hours ago',
      read: true,
      icon: DollarSign,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
      actions: [
        { label: 'View Receipt', primary: true, onClick: () => {} }
      ]
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Upcoming Appointment',
      message: 'Reminder: Home cleaning service scheduled for tomorrow at 10 AM',
      time: '5 hours ago',
      read: true,
      icon: Calendar,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      actions: [
        { label: 'View Details', primary: true, onClick: () => {} },
        { label: 'Reschedule', onClick: () => {} }
      ]
    },
    {
      id: 5,
      type: 'alert',
      title: 'Service Alert',
      message: 'Your job posting is about to expire. Renew it to keep it active.',
      time: '1 day ago',
      read: true,
      icon: AlertCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      actions: [
        { label: 'Take Action', primary: true, onClick: () => {} }
      ]
    },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-32">
      <div className="app-container max-w-3xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="p-2.5 sm:p-3 bg-indigo-600 rounded-xl shadow-lg">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Notifications</h1>
              <p className="text-sm sm:text-base text-gray-600">Stay updated with your activity</p>
            </div>
          </div>
          <button className="btn-secondary w-full sm:w-auto">
            Mark All as Read
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
        </div>
      </div>
    </div>
  );
}