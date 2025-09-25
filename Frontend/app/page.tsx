'use client'

import React, { useEffect, useState } from 'react'
import ProfileFormEmbed from '../src/components/ProfileFormEmbed'
import AIInterviewChat from '../src/components/AIInterviewChat'
import MatchesCarousel from '../src/components/MatchesCarousel'
import data from '../src/data/sample-internships.json'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [matches, setMatches] = useState(data)
  
  useEffect(() => setMounted(true), [])

  // Avoid SSR/CSR HTML mismatches by rendering after mount
  if (!mounted) {
    return <div className="p-4" />
  }

  const handleProfileComplete = (profile: any) => {
    console.log('Profile completed:', profile)
    // Here you could fetch new matches based on the completed profile
  }

  const handleApply = (internship: any) => {
    console.log("Apply clicked for:", internship);
    // Here you would typically redirect to application form or open modal
    alert(`Applying for ${internship.title} at ${internship.org}`);
  };

  const handleSave = (internship: any) => {
    console.log("Save clicked for:", internship);
    // Here you would typically save to favorites/bookmarks
    alert(`Saved ${internship.title} to your favorites`);
  };

  return (
    <div className="p-4">
      <main className="space-y-4">
        <ProfileFormEmbed airtableEmbedUrl={process.env.NEXT_PUBLIC_AIRTABLE_EMBED_URL} />
        <AIInterviewChat 
          botpressUrl={process.env.NEXT_PUBLIC_BOTPRESS_URL} 
          onComplete={handleProfileComplete} 
        />
        <h2 className="text-lg font-semibold">Top matches</h2>
        <MatchesCarousel
          internships={matches}
          onApply={handleApply}
          onSave={handleSave}
        />
      </main>
    </div>
  )
}
