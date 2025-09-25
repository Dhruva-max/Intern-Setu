'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProfileFormEmbed from '../src/components/ProfileFormEmbed'
import AIInterviewChat from '../src/components/AIInterviewChat'
import MatchesCarousel from '../src/components/MatchesCarousel'
import { getMatches } from '../src/lib/api'
import axios from 'axios'

export default function Home() {
  const { t } = useTranslation()
  const [currentStep, setCurrentStep] = useState('profile') // 'profile', 'chat', 'matches'
  const [profile, setProfile] = useState(null)
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(false)

  const handleProfileComplete = async (profileData) => {
    setProfile(profileData)
    setCurrentStep('chat')
  }

  const handleChatComplete = async (chatData) => {
    setLoading(true)
    try {
      const candidateData = { ...profile, ...chatData }
      const internshipMatches = await getMatches(candidateData)
      setMatches(internshipMatches)
      setCurrentStep('matches')
    } catch (error) {
      console.error('Error fetching matches:', error)
      // Fallback to demo data
      setMatches([
        {
          id: 1,
          title: 'Software Development Intern',
          org: 'Tech Corp',
          location: 'Remote',
          mode: 'Remote',
          score: 95,
          why: 'Your Python skills and previous project experience make you a great fit for this role.'
        },
        {
          id: 2,
          title: 'Data Science Intern',
          org: 'Analytics Inc',
          location: 'Delhi',
          mode: 'Hybrid',
          score: 88,
          why: 'Your analytical skills and interest in data visualization align perfectly with our needs.'
        }
      ])
      setCurrentStep('matches')
    } finally {
      setLoading(false)
    }
  }

  const handleApply = async (internship) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_RECOMMEND_URL}/analytics`, {
        event: 'apply_click',
        internshipId: internship.id,
        language: 'en',
        timestamp: Date.now()
      })
    } catch (error) {
      console.error('Analytics error:', error)
    }
    
    // Navigate to application or show success message
    alert(`Application started for ${internship.title} at ${internship.org}`)
  }

  const handleSave = (internship) => {
    // Save to local storage or send to backend
    const saved = JSON.parse(localStorage.getItem('savedInternships') || '[]')
    saved.push(internship)
    localStorage.setItem('savedInternships', JSON.stringify(saved))
    alert(`Saved ${internship.title}`)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {currentStep === 'profile' && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">{t('completeProfile')}</h2>
          <ProfileFormEmbed 
            airtableEmbedUrl={process.env.NEXT_PUBLIC_AIRTABLE_EMBED_URL}
            onSubmit={handleProfileComplete}
          />
        </div>
      )}

      {currentStep === 'chat' && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">{t('aiInterviewCoach')}</h2>
          <AIInterviewChat 
            botpressUrl={process.env.NEXT_PUBLIC_BOTPRESS_URL}
            onComplete={handleChatComplete}
          />
        </div>
      )}

      {currentStep === 'matches' && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">{t('yourMatches')}</h2>
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-600">{t('loading')}</p>
            </div>
          ) : (
            <MatchesCarousel 
              internships={matches}
              onApply={handleApply}
              onSave={handleSave}
            />
          )}
        </div>
      )}
    </div>
  )
}
