import React from 'react'
import InternshipCard from './InternshipCard'

export default function MatchesCarousel({ internships, onApply, onSave }) {
  return (
    <div className="overflow-x-auto snap-x snap-mandatory -mx-4 px-4" role="list" aria-label="Recommended internships">
      <div className="flex gap-4">
        {internships.map(i => (
          <div key={i.id} className="snap-center w-[86%] max-w-sm flex-shrink-0">
            <InternshipCard internship={i} onApply={onApply} onSave={onSave} />
          </div>
        ))}
      </div>
    </div>
  )
}
