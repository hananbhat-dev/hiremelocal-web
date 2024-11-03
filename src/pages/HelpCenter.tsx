import React, { useState } from 'react';
import {
  Search,
  HelpCircle,
  Book,
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  DollarSign,
  ChevronUp,
  Shield,
} from 'lucide-react';

export default function HelpCenter() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = [
    {
      id: 1,
      title: 'Getting Started',
      icon: Book,
      questions: [
        {
          q: 'How do I create an account?',
          a: 'To create an account, click the "Sign Up" button in the top right corner. Fill in your details and follow the verification process.',
        },
        {
          q: 'How do I post a job?',
          a: 'After logging in, click the "Post Job" button from your dashboard. Fill in the job details including description, budget, and requirements.',
        },
        {
          q: 'What are the payment methods?',
          a: 'We accept all major credit cards, PayPal, and bank transfers. Payments are processed securely through our platform.',
        },
      ],
    },
    {
      id: 2,
      title: 'Booking & Payments',
      icon: DollarSign,
      questions: [
        {
          q: 'How do I book a service?',
          a: 'Browse available services, select your preferred provider, choose a time slot, and confirm your booking with payment.',
        },
        {
          q: 'What is the cancellation policy?',
          a: 'Cancellations made 24 hours before the scheduled service are eligible for a full refund. Later cancellations may incur charges.',
        },
      ],
    },
    {
      id: 3,
      title: 'Account & Security',
      icon: Shield,
      questions: [
        {
          q: 'How do I reset my password?',
          a: 'Click "Forgot Password" on the login page, enter your email, and follow the reset instructions sent to your inbox.',
        },
        {
          q: 'How can I verify my account?',
          a: 'Submit required documentation through your profile settings. Verification usually takes 1-2 business days.',
        },
      ],
    },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="app-container">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-indigo-600 rounded-xl shadow-lg">
              <HelpCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Help Center</h1>
              <p className="text-gray-600">Find answers to your questions</p>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="input-primary"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <button className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 text-center">
              <MessageCircle className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
              <p className="text-sm text-gray-600">
                Chat with our support team
              </p>
            </button>
            <button className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 text-center">
              <Phone className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
              <p className="text-sm text-gray-600">1-800-123-4567</p>
            </button>
            <button className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 text-center">
              <Mail className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">
                Email Support
              </h3>
              <p className="text-sm text-gray-600">support@hirelocal.com</p>
            </button>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() =>
                    setOpenCategory(
                      openCategory === category.id ? null : category.id
                    )
                  }
                >
                  <div className="flex items-center gap-4">
                    <category.icon className="h-6 w-6 text-indigo-600" />
                    <h2 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>
                  {openCategory === category.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {openCategory === category.id && (
                  <div className="border-t border-gray-100">
                    {category.questions.map((question, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <button
                          className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                          onClick={() =>
                            setOpenQuestion(
                              openQuestion === index ? null : index
                            )
                          }
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">
                              {question.q}
                            </h3>
                            {openQuestion === index ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                          {openQuestion === index && (
                            <p className="mt-4 text-gray-600">{question.a}</p>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
