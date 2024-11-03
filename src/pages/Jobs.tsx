import React, { useState } from 'react';
import { Search, Briefcase, Filter, MapPin, DollarSign, Clock, Share2, Bookmark, BookmarkCheck } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import RatingModal from '../components/RatingModal';
import JobApplication from '../components/JobApplication';
import ShareModal from '../components/ShareModal';

export default function Jobs() {
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [bookmarkedJobs, setBookmarkedJobs] = useState(new Set());

  const jobs = [
    {
      id: 1,
      title: 'Senior Web Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      salary: '$80,000 - $120,000',
      type: 'Full-time',
      posted: '2 hours ago',
      description: 'Looking for an experienced web developer with React and Node.js expertise...',
      requirements: ['5+ years experience', 'React', 'Node.js', 'TypeScript'],
      urgent: true
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'DesignHub',
      location: 'San Francisco',
      salary: '$70,000 - $90,000',
      type: 'Contract',
      posted: '1 day ago',
      description: 'Seeking a creative UI/UX designer to join our growing team...',
      requirements: ['3+ years experience', 'Figma', 'Adobe XD', 'User Research'],
      urgent: false
    }
  ];

  const handleSearch = (searchParams) => {
    const filtered = jobs.filter(job => 
      job.title.toLowerCase().includes(searchParams.query.toLowerCase()) ||
      job.description.toLowerCase().includes(searchParams.query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleRatingSubmit = (rating) => {
    console.log('Rating submitted:', rating);
    console.log('For job:', selectedJob);
  };

  const handleApplicationSubmit = (application) => {
    console.log('Application submitted:', application);
    console.log('For job:', selectedJob);
  };

  const toggleBookmark = (jobId) => {
    setBookmarkedJobs(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(jobId)) {
        newBookmarks.delete(jobId);
      } else {
        newBookmarks.add(jobId);
      }
      return newBookmarks;
    });
  };

  const displayJobs = searchResults || jobs;

  return (
    <div className="pt-24 pb-32">
      <div className="app-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-600 rounded-xl shadow-lg">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Find Jobs</h1>
              <p className="text-gray-600">Discover opportunities that match your skills</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {displayJobs.map(job => (
            <div key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    {job.urgent && (
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                        Urgent
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4 text-indigo-500" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-indigo-500" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-indigo-500" />
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-indigo-500" />
                      {job.posted}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button 
                    className="btn-primary"
                    onClick={() => {
                      setSelectedJob(job);
                      setShowApplicationModal(true);
                    }}
                  >
                    Apply Now
                  </button>
                  <div className="flex gap-2">
                    <button 
                      className="btn-secondary flex-1 flex items-center justify-center gap-2"
                      onClick={() => {
                        setSelectedJob(job);
                        setShowRatingModal(true);
                      }}
                    >
                      Rate
                    </button>
                    <button 
                      className="btn-secondary flex-1 flex items-center justify-center gap-2"
                      onClick={() => toggleBookmark(job.id)}
                    >
                      {bookmarkedJobs.has(job.id) ? (
                        <BookmarkCheck className="h-5 w-5 text-indigo-600" />
                      ) : (
                        <Bookmark className="h-5 w-5" />
                      )}
                    </button>
                    <button 
                      className="btn-secondary flex-1 flex items-center justify-center gap-2"
                      onClick={() => {
                        setSelectedJob(job);
                        setShowShareModal(true);
                      }}
                    >
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modals */}
        <RatingModal
          isOpen={showRatingModal}
          onClose={() => setShowRatingModal(false)}
          onSubmit={handleRatingSubmit}
        />
        <JobApplication
          isOpen={showApplicationModal}
          onClose={() => setShowApplicationModal(false)}
          onSubmit={handleApplicationSubmit}
          job={selectedJob}
        />
        <ShareModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          job={selectedJob}
        />
      </div>
    </div>
  );
}