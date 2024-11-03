import React, { useState } from 'react';
import { X, Copy, Facebook, Twitter, Mail, Linkedin } from 'lucide-react';

export default function ShareModal({ isOpen, onClose, job }) {
  const [copied, setCopied] = useState(false);
  
  if (!isOpen) return null;

  const jobUrl = `${window.location.origin}/jobs/${job?.id}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jobUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(jobUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(jobUrl)}&text=${encodeURIComponent(`Check out this job: ${job?.title} at ${job?.company}`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(`Job Opportunity: ${job?.title}`)}&body=${encodeURIComponent(`Check out this job posting:\n\n${job?.title} at ${job?.company}\n\n${jobUrl}`)}`
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Share Job</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <input
              type="text"
              value={jobUrl}
              readOnly
              className="flex-1 bg-transparent border-none focus:ring-0 text-gray-600"
            />
            <button
              onClick={handleCopy}
              className="btn-secondary p-2"
            >
              {copied ? (
                <span className="text-green-600">Copied!</span>
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 bg-sky-50 text-sky-600 hover:bg-sky-100"
            >
              <Twitter className="h-5 w-5" />
              Twitter
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href={shareLinks.email}
              className="btn-secondary flex items-center justify-center gap-2 bg-gray-50 text-gray-600 hover:bg-gray-100"
            >
              <Mail className="h-5 w-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}