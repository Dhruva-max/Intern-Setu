import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const setLang = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="flex gap-2">
      {['en','hi','ta'].map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="w-10 h-8 rounded-full border text-xs"
          aria-label={`Switch language to ${l}`}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
