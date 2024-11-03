import React from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  Shield,
  Award,
  Settings,
} from 'lucide-react';

export default function Profile() {
  const user = {
    name: 'John Smith',
    title: 'Professional Web Developer',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    memberSince: 'January 2024',
    rating: 4.9,
    reviews: 128,
    verified: true,
    completedJobs: 156,
    skills: ['React', 'Node.js', 'TypeScript', 'UI/UX Design', 'MongoDB'],
    badges: ['Top Rated', 'Quick Responder', 'Expert'],
    about:
      'Experienced web developer with a passion for creating beautiful and functional web applications. Specialized in React and Node.js development with 5+ years of experience.',
  };

  const stats = [
    { label: 'Completed Jobs', value: user.completedJobs },
    { label: 'Rating', value: user.rating },
    { label: 'Reviews', value: user.reviews },
    { label: 'Response Rate', value: '98%' },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="app-container">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=crop"
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {user.verified && (
                  <div className="absolute -bottom-0 -right-0 bg-green-500 text-white p-2 rounded-full">
                    <Shield className="h-4 w-4" />
                  </div>
                )}
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">
                      {user.name}
                    </h1>
                    <p className="text-gray-600">{user.title}</p>
                  </div>
                  <button className="btn-primary">Edit Profile</button>
                </div>

                <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="h-4 w-4 text-indigo-500" />
                    {user.email}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4 text-indigo-500" />
                    {user.phone}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4 text-indigo-500" />
                    {user.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="text-2xl font-bold text-indigo-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">{user.about}</p>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Reviews</h2>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-bold text-gray-900">
                      {user.rating}
                    </span>
                    <span className="text-gray-600">
                      ({user.reviews} reviews)
                    </span>
                  </div>
                </div>
                {/* Add review components here */}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Badges</h2>
                <div className="space-y-4">
                  {user.badges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-indigo-500" />
                      <span className="text-gray-600">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Account Details */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Account
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="h-5 w-5 text-indigo-500" />
                    Member since {user.memberSince}
                  </div>
                  <button className="btn-secondary w-full flex items-center justify-center gap-2">
                    <Settings className="h-4 w-4" />
                    Account Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
