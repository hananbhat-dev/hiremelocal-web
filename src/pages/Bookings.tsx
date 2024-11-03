import React, { useState } from 'react'
import { Calendar, Clock, MapPin, DollarSign, User, CheckCircle, XCircle, MessageSquare, Star } from 'lucide-react'

export default function Bookings() {
  const [filter, setFilter] = useState('upcoming')

  const bookings = [
    {
      id: 1,
      service: 'Home Cleaning Service',
      provider: 'Clean Pro Services',
      date: '2024-03-25',
      time: '10:00 AM',
      duration: '3 hours',
      location: '123 Main St, San Francisco',
      status: 'upcoming',
      price: '$120',
      providerImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop',
    },
    {
      id: 2,
      service: 'Plumbing Repair',
      provider: 'Mike\'s Plumbing',
      date: '2024-03-20',
      time: '2:00 PM',
      duration: '2 hours',
      location: '456 Oak Ave, San Francisco',
      status: 'completed',
      price: '$180',
      providerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop',
    },
    {
      id: 3,
      service: 'Electrical Maintenance',
      provider: 'PowerFix Electric',
      date: '2024-03-18',
      time: '11:30 AM',
      duration: '1.5 hours',
      location: '789 Pine St, San Francisco',
      status: 'cancelled',
      price: '$90',
      providerImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop',
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-700'
      case 'completed':
        return 'bg-green-100 text-green-700'
      case 'cancelled':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="pt-24 pb-32">
      <div className="app-container">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-indigo-600 rounded-xl shadow-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
              <p className="text-gray-600">Manage your service appointments</p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setFilter('upcoming')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${filter === 'upcoming' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${filter === 'completed' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                Completed
              </button>
              <button
                onClick={() => setFilter('cancelled')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${filter === 'cancelled' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                Cancelled
              </button>
            </div>
          </div>

          {/* Bookings List */}
          <div className="space-y-4">
            {bookings
              .filter(booking => filter === 'all' || booking.status === filter)
              .map(booking => (
                <div
                  key={booking.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={booking.providerImage}
                          alt={booking.provider}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{booking.service}</h3>
                          <p className="text-gray-600">{booking.provider}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-5 w-5 text-indigo-500" />
                        {booking.date}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-5 w-5 text-indigo-500" />
                        {booking.time} ({booking.duration})
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-5 w-5 text-indigo-500" />
                        {booking.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="h-5 w-5 text-indigo-500" />
                        {booking.price}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {booking.status === 'upcoming' && (
                        <>
                          <button className="btn-primary flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            Confirm
                          </button>
                          <button className="btn-secondary flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100">
                            <XCircle className="h-4 w-4" />
                            Cancel
                          </button>
                        </>
                      )}
                      {booking.status === 'completed' && (
                        <button className="btn-secondary flex items-center gap-2">
                          <Star className="h-4 w-4" />
                          Leave Review
                        </button>
                      )}
                      <button className="btn-secondary flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}