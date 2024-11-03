import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  MapPin, Star, Clock, DollarSign, Shield, 
  Calendar, MessageSquare, Share2, Heart 
} from 'lucide-react';

export default function ServiceDetails() {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const service = {
    id,
    title: 'Professional Home Cleaning Service',
    provider: {
      name: 'Clean Pro Services',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop',
      rating: 4.9,
      reviews: 128,
      verified: true
    },
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1350',
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1350'
    ],
    price: '$80/hour',
    location: 'San Francisco Bay Area',
    description: 'Professional home cleaning service including deep cleaning, sanitization, and organization.',
    features: [
      'Deep cleaning of all rooms',
      'Bathroom and kitchen sanitization',
      'Window cleaning',
      'Floor mopping and vacuum cleaning',
      'Dust removal and cobweb cleaning'
    ],
    availability: {
      dates: ['2024-03-25', '2024-03-26', '2024-03-27'],
      times: ['09:00', '11:00', '14:00', '16:00']
    }
  };

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {service.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Service ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl"
                />
              ))}
            </div>

            {/* Service Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-indigo-500" />
                  <span className="text-gray-600">{service.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold">{service.provider.rating}</span>
                  <span className="text-gray-600">
                    ({service.provider.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Description
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <h3 className="font-bold text-gray-900 mb-3">Service Includes:</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <Shield className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    {service.price}
                  </span>
                  <span className="text-gray-600"> / hour</span>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="input-primary"
                  >
                    <option value="">Choose a date</option>
                    {service.availability.dates.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="input-primary"
                  >
                    <option value="">Choose a time</option>
                    {service.availability.times.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="btn-primary w-full mb-4">
                Book Now
              </button>

              <div className="flex gap-2">
                <button className="btn-secondary flex-1 flex items-center justify-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Message
                </button>
                <button className="btn-secondary flex-1 flex items-center justify-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>

              {/* Provider Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <img
                    src={service.provider.avatar}
                    alt={service.provider.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {service.provider.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      {service.provider.verified && (
                        <Shield className="h-4 w-4 text-green-500" />
                      )}
                      <span className="text-sm text-gray-600">Verified Provider</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}