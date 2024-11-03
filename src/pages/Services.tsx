import React, { useState } from 'react';
import { Search, Grid, Filter, Star, MapPin, DollarSign } from 'lucide-react';

export default function Services() {
  const [category, setCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Professional Photography',
      provider: 'John Smith',
      rating: 4.9,
      reviews: 128,
      price: '$80/hour',
      location: 'New York',
      image:
        'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=500',
      categories: ['Photography', 'Events'],
      availability: 'Available Now',
    },
    {
      id: 2,
      title: 'Home Cleaning Service',
      provider: 'Clean Pro',
      rating: 4.8,
      reviews: 89,
      price: '$40/hour',
      location: 'Los Angeles',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500',
      categories: ['Cleaning', 'Home'],
      availability: 'Next Day',
    },
    {
      id: 3,
      title: 'Personal Trainer',
      provider: 'Sarah Johnson',
      rating: 5.0,
      reviews: 156,
      price: '$60/hour',
      location: 'Chicago',
      image:
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=500',
      categories: ['Fitness', 'Health'],
      availability: 'Available Now',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cleaning', name: 'Cleaning' },
    { id: 'repair', name: 'Repair' },
    { id: 'technology', name: 'Technology' },
    { id: 'health', name: 'Health & Fitness' },
    { id: 'events', name: 'Events' },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="app-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-600 rounded-xl shadow-lg">
              <Grid className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Services</h1>
              <p className="text-gray-600">
                Find trusted professionals for any job
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                className="input-primary"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="input-primary"
              />
            </div>
            <button className="btn-primary">Search</button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    category === cat.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">
                    {service.availability}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">by {service.provider}</p>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{service.rating}</span>
                    <span className="text-gray-500">({service.reviews})</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {service.location}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-5 w-5 text-indigo-600" />
                    <span className="text-xl font-bold text-indigo-600">
                      {service.price}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.categories.map((cat, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <button className="btn-primary w-full">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
