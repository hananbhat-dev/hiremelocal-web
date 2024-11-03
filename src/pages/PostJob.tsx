import React, { useState } from 'react';
import { DollarSign, MapPin, Calendar, Clock, AlertCircle } from 'lucide-react';

interface FormData {
  title: string;
  description: string;
  category: string;
  budget: string;
  budgetType: string;
  location: string;
  deadline: string;
  urgency: string;
  skills: string[];
}

export default function PostJob() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    category: '',
    budget: '',
    budgetType: 'fixed',
    location: '',
    deadline: '',
    urgency: 'normal',
    skills: [],
  });

  const categories = [
    'Home Services',
    'Professional Services',
    'Tech Support',
    'Personal Care',
    'Events',
    'Education',
    'Business',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleSkillInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      e.preventDefault();
      const newSkill = e.currentTarget.value.trim();
      if (!formData.skills.includes(newSkill)) {
        setFormData({
          ...formData,
          skills: [...formData.skills, newSkill]
        });
      }
      e.currentTarget.value = '';
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <div className="pt-20 sm:pt-24 pb-32">
      <div className="app-container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Post a Job</h1>
            <p className="text-sm sm:text-base text-gray-600">Find the perfect professional for your needs</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Job Details</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="input-primary"
                    placeholder="e.g., Need a Professional Plumber"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="input-primary"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category.toLowerCase()}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="input-primary"
                    rows={6}
                    placeholder="Describe the job in detail..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="input-primary pl-10"
                        placeholder="e.g., 100"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Type
                    </label>
                    <select
                      value={formData.budgetType}
                      onChange={(e) => setFormData({ ...formData, budgetType: e.target.value })}
                      className="input-primary"
                    >
                      <option value="fixed">Fixed Price</option>
                      <option value="hourly">Per Hour</option>
                      <option value="negotiable">Negotiable</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="input-primary pl-10"
                        placeholder="e.g., San Francisco"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deadline
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        className="input-primary pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {['normal', 'high', 'urgent'].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: level })}
                        className={`p-2 sm:p-3 rounded-lg border ${
                          formData.urgency === level
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                            : 'border-gray-200 hover:border-gray-300'
                        } transition-colors duration-200`}
                      >
                        <Clock className={`h-4 w-4 sm:h-5 sm:w-5 mx-auto mb-1 ${
                          formData.urgency === level ? 'text-indigo-600' : 'text-gray-400'
                        }`} />
                        <span className="block text-xs sm:text-sm capitalize">
                          {level}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Required Skills
                  </label>
                  <input
                    type="text"
                    onKeyDown={handleSkillInput}
                    className="input-primary mb-2"
                    placeholder="Type a skill and press Enter"
                  />
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium flex items-center gap-1"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="hover:text-indigo-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-yellow-800">
                  Before posting
                </h3>
                <p className="mt-1 text-sm text-yellow-700">
                  Make sure your job posting is clear and detailed. Include all requirements and expectations to attract the right professionals.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button type="button" className="btn-secondary flex-1 order-2 sm:order-1">
                Save as Draft
              </button>
              <button type="submit" className="btn-primary flex-1 order-1 sm:order-2">
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}