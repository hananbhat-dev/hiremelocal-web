import React from 'react'
import {
  User,
  Bell,
  Lock,
  CreditCard,
  Globe,
  Shield,
  Smartphone,
  Mail,
} from 'lucide-react'

export default function Settings() {
  const sections = [
    {
      id: 'profile',
      title: 'Profile Settings',
      icon: User,
      items: [
        { label: 'Personal Information', description: 'Update your personal details and profile picture' },
        { label: 'Professional Details', description: 'Manage your skills, experience, and portfolio' },
        { label: 'Location & Availability', description: 'Set your working hours and service area' },
      ],
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Email Notifications', description: 'Choose which emails you want to receive' },
        { label: 'Push Notifications', description: 'Manage your mobile app notifications' },
        { label: 'SMS Alerts', description: 'Set up text message alerts for urgent requests' },
      ],
    },
    {
      id: 'security',
      title: 'Security',
      icon: Lock,
      items: [
        { label: 'Password', description: 'Change your password and security settings' },
        { label: 'Two-Factor Authentication', description: 'Add an extra layer of security' },
        { label: 'Login History', description: 'Review your recent login activity' },
      ],
    },
    {
      id: 'payment',
      title: 'Payment Settings',
      icon: CreditCard,
      items: [
        { label: 'Payment Methods', description: 'Add or remove payment methods' },
        { label: 'Payout Settings', description: 'Set up how you receive payments' },
        { label: 'Billing History', description: 'View your past transactions' },
      ],
    },
  ]

  return (
    <div className="pt-24 pb-32">
      <div className="app-container">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-indigo-600 rounded-xl shadow-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-600">Manage your account preferences</p>
            </div>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <section.icon className="h-6 w-6 text-indigo-600" />
                    <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.label}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Globe className="h-5 w-5" />
                Language & Region
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100">
                <Shield className="h-5 w-5" />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}