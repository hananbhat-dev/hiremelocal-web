import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MapPin,
  Star,
  Shield,
  Award,
  Calendar,
  Clock,
  DollarSign,
  MessageSquare,
  Share2,
} from 'lucide-react'

export default function ProviderProfile() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('services')

  const provider = {
    id,
    name: 'John Smith',
    title: 'Professional Handyman',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1350',
    rating: 4.9,
    reviewCount: 128,
    completedJobs: 156,
    location: 'San Francisco, CA',
    memberSince: 'Jan 2024',
    responseTime: '< 1 hour',
    verified: true,
    badges: ['Top Rated', 'Quick Responder', 'Expert'],
    about:
      'Professional handyman with over 10 years of experience in home repairs, maintenance, and improvements.',
    services: [
      {
        id: 1,
        title: 'General Home Repairs',
        price: '$50/hour',
        description:
          'Basic home repairs including fixtures, furniture assembly, and minor repairs.',
        availability: 'Available Today',
      },
      {
        id: 2,
        title: 'Plumbing Services',
        price: '$75/hour',
        description:
          'Plumbing repairs, installations, and maintenance services.',
        availability: 'Next Day',
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'Sarah M.',
        rating: 5,
        date: '2 days ago',
        comment: 'Excellent work! Very professional and thorough.',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop',
      },
    ],
  }

  return (
    <div className="pt-16 pb-32">
      {/* Cover Image */}
      <div className="h-64 sm:h-80 w-full relative">
        <img
          src={provider.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative">
              <img
                src={provider.avatar}
                alt={provider.name}
                className="w-32 h-32 rounded-xl object-cover ring-4 ring-white"
              />
              {provider.verified && (
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-lg">
                  <Shield className="h-4 w-4" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {provider.name}
                  </h1>
                  <p className="text-gray-600">{provider.title}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary">Book Now</button>
                  <button className="btn-secondary flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </button>
                  <button className="btn-secondary flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold">{provider.rating}</span>
                  <span className="text-gray-600">
                    ({provider.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-indigo-500" />
                  {provider.location}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5 text-indigo-500" />
                  Member since {provider.memberSince}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5 text-indigo-500" />
                  Responds in {provider.responseTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-gray-200">
          <div className="flex gap-8">
            {['services', 'reviews', 'about'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 relative ${
                  activeTab === tab
                    ? 'text-indigo-600 font-semibold'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'services' && (
            <div className="grid gap-6">
              {provider.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-indigo-500" />
                          <span className="font-semibold">{service.price}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-green-500" />
                          <span className="text-green-600">
                            {service.availability}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="btn-primary">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {provider.reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={review.avatar}
                      alt={review.user}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">
                          {review.user}
                        </h4>
                        <span className="text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-gray-600">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'about' && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
              <p className="text-gray-600 mb-6">{provider.about}</p>

              <h4 className="font-semibold text-gray-900 mb-4">
                Badges & Achievements
              </h4>
              <div className="flex flex-wrap gap-4">
                {provider.badges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full"
                  >
                    <Award className="h-4 w-4" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
