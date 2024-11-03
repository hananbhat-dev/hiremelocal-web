import { MapPin, DollarSign, Star, Shield, Calendar } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Home Repair Specialist',
    provider: 'Mike Johnson',
    location: 'Downtown',
    rate: '$45/hour',
    availability: 'Available Now',
    rating: 4.9,
    reviews: 127,
    verified: true,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop',
    category: 'Home Repair',
    bgImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500',
  },
  {
    id: 2,
    title: 'Pet Sitter & Dog Walker',
    provider: 'Sarah Chen',
    location: 'Westside',
    rate: '$25/hour',
    availability: 'Next Day',
    rating: 4.8,
    reviews: 89,
    verified: true,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop',
    category: 'Pet Care',
    bgImage:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=500',
  },
  {
    id: 3,
    title: 'Event Photography',
    provider: 'David Miller',
    location: 'Eastside',
    rate: '$75/hour',
    availability: 'Books 2 weeks ahead',
    rating: 5.0,
    reviews: 64,
    verified: true,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop',
    category: 'Events',
    bgImage:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500',
  },
]

export default function FeaturedJobs() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Rated Professionals
          </h2>
          <p className="text-xl text-gray-600">
            Discover our most trusted and highly-rated service providers
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.bgImage}
                  alt={service.category}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="absolute top-4 right-4">
                {service.verified && (
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    Verified
                  </div>
                )}
              </div>

              <div className="p-6 mt-8">
                <div className="flex items-center -mt-12 mb-4">
                  <img
                    src={service.avatar}
                    alt={service.provider}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.provider}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-indigo-500" />
                    {service.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 mr-2 text-indigo-500" />
                    {service.rate}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-indigo-500" />
                    {service.availability}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 mr-2 text-yellow-400" />
                    <span className="font-medium">{service.rating}</span>
                    <span className="mx-1">•</span>
                    <span>{service.reviews} reviews</span>
                  </div>
                </div>

                <button className="btn-secondary w-full mt-6">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
