import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: { 
    translation: { 
      'Get Started': 'Get Started', 
      'Apply Now': 'Apply Now',
      'Apply': 'Apply',
      'Save': 'Save'
    } 
  },
  hi: { 
    translation: { 
      'Get Started': 'शुरू करें', 
      'Apply Now': 'आवेदन करें',
      'Apply': 'आवेदन करें',
      'Save': 'सहेजें'
    } 
  },
  ta: { 
    translation: { 
      'Get Started': 'தொடக்கம்', 
      'Apply Now': 'விண்ணப்பிக்க',
      'Apply': 'விண்ணப்பிக்க',
      'Save': 'சேமிக்க'
    } 
  }
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
