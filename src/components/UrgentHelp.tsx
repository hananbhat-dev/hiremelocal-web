import React from 'react'
import { AlertCircle, Clock, MapPin, ArrowRight } from 'lucide-react'

export default function UrgentHelp() {
  const urgentRequests = [
    {
      id: 1,
      title: 'Emergency Plumber Needed',
      location: 'Downtown Area',
      posted: '10 minutes ago',
      description: 'Burst pipe in basement, urgent assistance required',
      payment: '150',
    },
    {
      id: 2,
      title: 'Immediate IT Support',
      location: 'Business District',
      posted: '15 minutes ago',
      description: 'Server down, affecting business operations',
      payment: '100',
    },
    {
      id: 3,
      title: 'Emergency Pet Sitter',
      location: 'Westside',
      posted: '20 minutes ago',
      description: 'Need pet sitter for emergency hospital visit',
      payment: '50',
    },
  ]

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-red-600 rounded-xl shadow-red-200 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <AlertCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
                Urgent Help Needed
              </h2>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                Quick response required - Higher rates available
              </p>
            </div>
          </div>
          <button className="btn-primary bg-red-600 hover:bg-red-700 w-full sm:w-auto">
            Post Urgent Request
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {urgentRequests.map((request) => (
            <div
              key={request.id}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-red-500"
            >
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start gap-3 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {request.title}
                  </h3>
                  <span className="px-2.5 py-1 bg-red-100 text-red-600 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0">
                    Urgent
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-4">
                  <div className="flex items-center text-gray-600 text-sm sm:text-base">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-500 flex-shrink-0" />
                    {request.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm sm:text-base">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-500 flex-shrink-0" />
                    {request.posted}
                  </div>
                </div>

                <p className="text-gray-600 text-sm sm:text-base mb-6 line-clamp-2">
                  {request.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg sm:text-xl font-bold text-red-600">₹{request.payment}</span>
                  </div>
                  <button className="btn-secondary bg-red-50 text-red-600 hover:bg-red-100 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 flex items-center gap-2">
                    Respond Now
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View More Button */}
        <div className="mt-8 text-center block sm:hidden">
          <button className="btn-secondary w-full flex items-center justify-center gap-2">
            View All Urgent Requests
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}