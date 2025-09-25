import React from 'react'

export default function InternshipCard({ internship, onApply, onSave }) {
  // internship: {id, title, org, location, mode, hours, duration, score, why}
  return (
    <article
      className="rounded-2xl border p-4 mb-3 bg-white shadow-offset-yellow focus:outline-none focus:ring-2 focus:ring-internYellow"
      tabIndex="0"
      role="article"
      aria-labelledby={`title-${internship.id}`}>
      <div className="flex items-start gap-3">
        <div aria-hidden className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center text-lg font-semibold">
          {internship.logo || internship.title.split(' ').map(w=>w[0]).slice(0,2).join('')}
        </div>
        <div className="flex-1">
          <h3 id={`title-${internship.id}`} className="font-semibold text-base">{internship.title}</h3>
          <p className="text-xs text-slate-600">{internship.org} • {internship.location} • {internship.mode}</p>
        </div>
        <div className="text-right">
          <div className="inline-block px-2 py-1 rounded-full text-xs border">{internship.score}%</div>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-700">
        <strong className="sr-only">Why matched: </strong>
        {internship.why}
      </p>

      <div className="mt-3 flex gap-2">
        <button onClick={() => onApply(internship)} className="flex-1 py-3 rounded-full bg-internBlue text-white touch-manipulation">Apply</button>
        <button onClick={() => onSave(internship)} aria-label={`Save ${internship.title}`} className="px-4 py-3 rounded-full border">Save</button>
      </div>
    </article>
  )
}
