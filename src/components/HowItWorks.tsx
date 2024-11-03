import { Search, Calendar, Star, CreditCard, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Find Local Talent',
      description: 'Browse through verified professionals in your area and compare ratings, reviews, and prices.',
      color: 'from-blue-500 to-blue-600',
      lightColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Calendar,
      title: 'Book Instantly',
      description: 'Choose your preferred time slot and book services with just a few clicks.',
      color: 'from-green-500 to-green-600',
      lightColor: 'from-green-50 to-green-100'
    },
    {
      icon: CreditCard,
      title: 'Pay Securely',
      description: 'Use our secure payment system. Pay only when the job is done to your satisfaction.',
      color: 'from-purple-500 to-purple-600',
      lightColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: Star,
      title: 'Share Experience',
      description: 'Rate your experience and help others find the best local professionals.',
      color: 'from-yellow-500 to-yellow-600',
      lightColor: 'from-yellow-50 to-yellow-100'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Get the help you need in four simple steps. Our platform makes it easy to find and hire local professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Mobile Step Connector */}
              {index < steps.length - 1 && (
                <div className="block md:hidden absolute left-1/2 bottom-0 transform translate-x-1/2 translate-y-full h-8 w-px bg-gradient-to-b from-gray-300 to-transparent" />
              )}
              
              {/* Desktop Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 right-0 transform translate-x-1/2 -translate-y-1/2 w-full">
                  <div className="w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300"></div>
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 h-6 w-6" />
                </div>
              )}
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 h-full">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.lightColor} p-0.5 mb-6 sm:mb-8 mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center group-hover:text-indigo-600 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>

                {/* Mobile Arrow Indicator */}
                {index < steps.length - 1 && (
                  <div className="block md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-indigo-400 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-16 text-center block sm:hidden">
          <button className="btn-primary">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  )
}