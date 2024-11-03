import React from 'react';
import { Grid, Search } from 'lucide-react';
import SearchBar from '../components/SearchBar';

const categories = [
  {
    id: 'home-services',
    name: 'Home Services',
    description: 'Plumbing, Electrical, Cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500',
    count: 245
  },
  {
    id: 'tech-support',
    name: 'Tech Support',
    description: 'Computer Repair, IT Services',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500',
    count: 156
  },
  {
    id: 'events',
    name: 'Events',
    description: 'Photography, Catering, Planning',
    image: 'https://images.unsplash.com/photo-1511795409834-432f7b1728f2?auto=format&fit=crop&w=500',
    count: 189
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    description: 'Beauty, Wellness, Fitness',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=500',
    count: 167
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Tutoring, Music Lessons',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500',
    count: 134
  },
  {
    id: 'business',
    name: 'Business Services',
    description: 'Consulting, Legal, Finance',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500',
    count: 198
  }
];

export default function Categories() {
  const handleSearch = (searchParams) => {
    console.log('Search:', searchParams);
  };

  return (
    <div className="pt-24 pb-32">
      <div className="app-container">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-indigo-600 rounded-xl shadow-lg">
            <Grid className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Browse Categories</h1>
            <p className="text-gray-600">Find services by category</p>
          </div>
        </div>

        <SearchBar onSearch={handleSearch} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categories/${category.id}`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} providers</span>
                  <span className="text-indigo-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-200">
                    Browse Services →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}