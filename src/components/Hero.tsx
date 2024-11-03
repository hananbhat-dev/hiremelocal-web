import { useState, useEffect } from 'react'
import {
  Search,
  MapPin,
  Briefcase,
  Sparkles,
  TrendingUp,
  Clock,
  Wrench,
  Laptop,
  Calendar,
  User,
} from 'lucide-react'

export default function Hero() {
  const [category, setCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'urgent', name: 'Urgent', icon: Clock },
    { id: 'handyman', name: 'Handyman', icon: User },
    { id: 'home', name: 'Home Repair', icon: Wrench },
    { id: 'tech', name: 'Tech Services', icon: Laptop },
    { id: 'events', name: 'Events', icon: Calendar },
  ]

  // Simulated search suggestions
  useEffect(() => {
    if (searchTerm.length > 2) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setSuggestions(
          ['Web Developer', 'Web Designer', 'Website Maintenance'].filter((s) =>
            s.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
        setIsLoading(false)
      }, 500)
    } else {
      setSuggestions([])
    }
  }, [searchTerm])

  return (
    <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/cQdsxXP/DALL-E-2024-10-23-11-56-43-A-hyper-realistic-4-K-scene-of-different-local-workers-in-Kashmir-engaged.webp')] opacity-10 bg-cover bg-center" />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 via-indigo-700/90 to-purple-800/90" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Local Talent for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400 mt-2 pb-4">
              Any Job, Anytime
            </span>
          </h1>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2
                    ${
                      category === cat.id
                        ? 'bg-white text-indigo-600 shadow-lg scale-105'
                        : 'bg-indigo-500/50 text-white hover:bg-indigo-400/50'
                    } transition-all duration-200 backdrop-blur-sm hover:scale-105`}
                >
                  {cat.icon && <cat.icon className="h-4 w-4" />}
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="glass-card p-6 rounded-2xl shadow-xl">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-indigo-500 z-10" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="What service do you need?"
                    className="input-primary"
                  />
                  {/* Search Suggestions */}
                  {(suggestions.length > 0 || isLoading) && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg overflow-hidden z-10">
                      {isLoading ? (
                        <div className="p-4 text-center text-gray-500">
                          Loading...
                        </div>
                      ) : (
                        suggestions.map((suggestion, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setSearchTerm(suggestion)
                              setSuggestions([])
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150"
                          >
                            {suggestion}
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-indigo-500 z-10" />
                  </div>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Your location"
                    className="input-primary"
                  />
                </div>
                <button
                  className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap min-w-[140px]"
                  disabled={!searchTerm || !location}
                >
                  <Search className="h-5 w-5" />
                  Find Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
