import React from 'react';
import {
  Activity,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Users,
} from 'lucide-react';

export default function RecentActivity() {
  const recentJobs = [
    {
      id: 1,
      title: 'Website Development',
      category: 'Tech',
      location: 'Remote',
      posted: 'Just now',
      budget: '$500-1000',
      description:
        'Need a professional developer to create a modern e-commerce website with payment integration.',
      urgency: 'Normal',
      applicants: 3,
      skills: ['React', 'Node.js', 'MongoDB'],
      clientRating: 4.9,
      clientJobs: 12,
    },
    {
      id: 2,
      title: 'House Cleaning',
      category: 'Home',
      location: 'Eastside',
      posted: '5 mins ago',
      budget: '$80-120',
      description:
        '3-bedroom house needs deep cleaning, including windows and carpet steam cleaning.',
      urgency: 'High',
      applicants: 2,
      skills: ['Deep Cleaning', 'Carpet Cleaning'],
      clientRating: 4.7,
      clientJobs: 8,
    },
    {
      id: 3,
      title: 'Moving Help',
      category: 'Labor',
      location: 'Northside',
      posted: '10 mins ago',
      budget: '$200-300',
      description:
        'Need help moving furniture from a 2nd-floor apartment to ground floor. Heavy lifting required.',
      urgency: 'Urgent',
      applicants: 5,
      skills: ['Heavy Lifting', 'Furniture Moving'],
      clientRating: 5.0,
      clientJobs: 15,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-600 rounded-xl shadow-indigo-200 shadow-lg">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-1">
                Recently Posted
              </h2>
              <p className="text-gray-600">
                Discover fresh opportunities in your area
              </p>
            </div>
          </div>
          <button className="btn-primary bg-green-600 hover:bg-green-700 w-full sm:w-auto">
            Post Job Request
          </button>
        </div>

        <div className="grid gap-8">
          {recentJobs.map((job) => (
            <div
              key={job.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Mobile Header - Always Visible */}
              <div className="p-6 sm:p-8 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="h-6 sm:h-7 w-6 sm:w-7 text-indigo-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 line-clamp-2">
                      {job.title}
                    </h3>
                  </div>
                  <span
                    className={`px-3 sm:px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${
                      job.urgency === 'Urgent'
                        ? 'bg-red-100 text-red-700 border border-red-200'
                        : job.urgency === 'High'
                        ? 'bg-orange-100 text-orange-700 border border-orange-200'
                        : 'bg-green-100 text-green-700 border border-green-200'
                    }`}
                  >
                    {job.urgency}
                  </span>
                </div>

                {/* Quick Info Row */}
                <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="h-4 w-4 text-indigo-500" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="h-4 w-4 text-indigo-500" />
                    {job.posted}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <DollarSign className="h-4 w-4 text-indigo-500" />
                    {job.budget}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {job.description}
                </p>
              </div>

              {/* Mobile Stats Row */}
              <div className="px-6 sm:px-8 py-4 bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Users className="h-4 w-4 text-indigo-500" />
                    {job.applicants} applicants
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-semibold text-indigo-600">
                      {job.clientRating}
                    </span>
                    <svg
                      className="h-4 w-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <button className="btn-primary text-sm px-4 py-2 shadow-lg hover:shadow-xl">
                  Apply Now
                </button>
              </div>

              {/* Skills Tags */}
              <div className="px-6 sm:px-8 py-4 border-t border-gray-100 overflow-x-auto">
                <div className="flex gap-2 flex-nowrap sm:flex-wrap">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-100 hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View More Button */}
        <div className="mt-8 text-center block sm:hidden">
          <button className="btn-secondary w-full flex items-center justify-center gap-2">
            View All Jobs
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
