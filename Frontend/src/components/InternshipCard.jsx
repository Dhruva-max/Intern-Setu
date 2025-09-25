import React from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const RECOMMEND_URL = process.env.NEXT_PUBLIC_RECOMMEND_URL;

export default function InternshipCard({ internship, onApply, onSave }) {
  const { i18n, t } = useTranslation();

  const handleApply = (internship) => {
    onApply(internship);
    axios.post(`${RECOMMEND_URL}/analytics`, {
      event: 'apply_click',
      internshipId: internship.id,
      language: i18n.language,
      timestamp: Date.now()
    }).catch(err => console.warn('Analytics error', err));
  };

  const handleSave = (internship) => {
    onSave(internship);
    axios.post(`${RECOMMEND_URL}/analytics`, {
      event: 'save_click',
      internshipId: internship.id,
      language: i18n.language,
      timestamp: Date.now()
    }).catch(err => console.warn('Analytics error', err));
  };
  return (
    <article
      className="rounded-2xl border p-4 mb-3 bg-white shadow-md shadow-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      tabIndex="0"
      role="article"
      aria-labelledby={`title-${internship.id}`}>
      
      <div className="flex items-start gap-3">
        <div aria-hidden className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center text-lg font-semibold">
          {internship.logo || internship.title.split(' ').map(w => w[0]).slice(0,2).join('')}
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
        {internship.why || "This internship matches your profile."}
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => handleApply(internship)}
          className="flex-1 py-3 rounded-full bg-blue-600 text-white touch-manipulation">
          {t('Apply')}
        </button>
        <button
          onClick={() => handleSave(internship)}
          aria-label={`Save ${internship.title}`}
          className="px-4 py-3 rounded-full border">
          {t('Save')}
        </button>
      </div>
    </article>
  );
}
