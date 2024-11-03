import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import HowItWorks from '../components/HowItWorks'
import UrgentHelp from '../components/UrgentHelp'
import RecentActivity from '../components/RecentActivity'
import FeaturedJobs from '../components/FeaturedJobs'
import QuickActions from '../components/QuickActions'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="app-container mt-4">
        <QuickActions />
        <Stats />
        <UrgentHelp />
        <RecentActivity />
        <FeaturedJobs />
        <HowItWorks />
      </div>
    </div>
  )
}