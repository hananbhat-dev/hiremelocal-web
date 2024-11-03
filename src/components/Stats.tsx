import React from 'react'
import { Users2, Star, Shield, Clock } from 'lucide-react'

export default function Stats() {
  const stats = [
    { icon: Users2, label: 'Active Professionals', value: '5,000+' },
    { icon: Star, label: 'Happy Clients', value: '25,000+' },
    { icon: Shield, label: 'Verified Providers', value: '4,000+' },
    { icon: Clock, label: 'Jobs Completed', value: '100,000+' },
  ]

  return (
    <div className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Title */}
        <div className="text-center mb-10 sm:hidden">
          <h2 className="text-2xl font-bold text-gray-900">Our Impact</h2>
          <p className="mt-2 text-sm text-gray-600">
            Growing stronger every day
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:gap-12 md:grid-cols-4">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="relative group">
              {/* Mobile Layout */}
              <div className="sm:hidden flex flex-col items-center">
                <div
                  className={`
                  w-14 h-14 rounded-xl bg-indigo-600 
                  flex items-center justify-center 
                  shadow-lg shadow-indigo-200
                  mb-3 transform group-hover:scale-110 
                  transition-all duration-300
                `}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
                <p className="text-sm text-gray-600 text-center">{label}</p>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block text-center transform hover:scale-105 transition-transform duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white mb-6 shadow-lg">
                  <Icon className="h-8 w-8" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">{value}</p>
                <p className="text-lg text-gray-600">{label}</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 inset-0 transform -rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
