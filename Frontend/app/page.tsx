'use client'

import React from 'react'
import LanguageSwitcher from '../src/components/LanguageSwitcher'
import ProfileFormEmbed from '../src/components/ProfileFormEmbed'
import AIInterviewChat from '../src/components/AIInterviewChat'
import MatchesCarousel from '../src/components/MatchesCarousel'
import data from '../src/data/sample-internships.json'

export default function Home() {
  const onApply = (i: any) => alert('Apply: ' + i.title)
  const onSave = (i: any) => alert('Saved: ' + i.title)

  return (
    <div className="p-4">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Intern-Setu</h1>
        <LanguageSwitcher />
      </header>

      <main className="mt-4 space-y-4">
        <ProfileFormEmbed airtableEmbedUrl={process.env.NEXT_PUBLIC_AIRTABLE_EMBED_URL} />
        <AIInterviewChat botpressUrl={process.env.NEXT_PUBLIC_BOTPRESS_URL} />
        <h2 className="text-lg font-semibold">Top matches</h2>
        <MatchesCarousel internships={data as any[]} onApply={onApply} onSave={onSave} />
      </main>
    </div>
  )
}
