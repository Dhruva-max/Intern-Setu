import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      internships: 'Internships',
      matches: 'Matches',
      profile: 'Profile',
      settings: 'Settings',
      
      // Common
      welcome: 'Welcome',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      save: 'Save',
      cancel: 'Cancel',
      apply: 'Apply',
      next: 'Next',
      previous: 'Previous',
      submit: 'Submit',
      
      // Internship Card
      company: 'Company',
      location: 'Location',
      duration: 'Duration',
      type: 'Type',
      skills: 'Skills',
      applyNow: 'Apply Now',
      saveInternship: 'Save',
      
      // Matches Carousel
      yourMatches: 'Your Matches',
      noMatches: 'No matches found',
      accept: 'Accept',
      pass: 'Pass',
      
      // AI Interview Chat
      aiInterviewCoach: 'AI Interview Coach',
      practiceInterviewSkills: 'Practice your interview skills',
      typeMessage: 'Type your message...',
      send: 'Send',
      
      // Profile Form
      completeProfile: 'Complete Your Profile',
      basicInformation: 'Basic Information',
      educationSkills: 'Education & Skills',
      experiencePreferences: 'Experience & Preferences',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      university: 'University',
      major: 'Major',
      year: 'Year',
      addSkill: 'Add a skill and press Enter',
      previousExperience: 'Previous Experience',
      availability: 'Availability',
      preferredLocation: 'Preferred Location',
      selectYear: 'Select Year',
      selectAvailability: 'Select Availability',
      fullTime: 'Full-time',
      partTime: 'Part-time',
      flexible: 'Flexible',
      completeProfileButton: 'Complete Profile',
      
      // Language Switcher
      selectLanguage: 'Select Language',
      
      // Form validation
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      invalidPhone: 'Please enter a valid phone number',
      
      // Success messages
      profileUpdated: 'Profile updated successfully!',
      applicationSubmitted: 'Application submitted successfully!',
      internshipSaved: 'Internship saved to your list!'
    }
  },
  hi: {
    translation: {
      // Navigation
      home: 'होम',
      internships: 'इंटर्नशिप',
      matches: 'मैच',
      profile: 'प्रोफाइल',
      settings: 'सेटिंग्स',
      
      // Common
      welcome: 'स्वागत है',
      loading: 'लोड हो रहा है...',
      error: 'त्रुटि',
      success: 'सफलता',
      save: 'सेव करें',
      cancel: 'रद्द करें',
      apply: 'आवेदन करें',
      next: 'अगला',
      previous: 'पिछला',
      submit: 'जमा करें',
      
      // Internship Card
      company: 'कंपनी',
      location: 'स्थान',
      duration: 'अवधि',
      type: 'प्रकार',
      skills: 'कौशल',
      applyNow: 'अभी आवेदन करें',
      saveInternship: 'सेव करें',
      
      // Matches Carousel
      yourMatches: 'आपके मैच',
      noMatches: 'कोई मैच नहीं मिला',
      accept: 'स्वीकार करें',
      pass: 'पास करें',
      
      // AI Interview Chat
      aiInterviewCoach: 'AI इंटरव्यू कोच',
      practiceInterviewSkills: 'अपने इंटरव्यू कौशल का अभ्यास करें',
      typeMessage: 'अपना संदेश टाइप करें...',
      send: 'भेजें',
      
      // Profile Form
      completeProfile: 'अपना प्रोफाइल पूरा करें',
      basicInformation: 'मूल जानकारी',
      educationSkills: 'शिक्षा और कौशल',
      experiencePreferences: 'अनुभव और प्राथमिकताएं',
      fullName: 'पूरा नाम',
      email: 'ईमेल',
      phone: 'फोन',
      university: 'विश्वविद्यालय',
      major: 'विषय',
      year: 'वर्ष',
      addSkill: 'एक कौशल जोड़ें और Enter दबाएं',
      previousExperience: 'पिछला अनुभव',
      availability: 'उपलब्धता',
      preferredLocation: 'पसंदीदा स्थान',
      selectYear: 'वर्ष चुनें',
      selectAvailability: 'उपलब्धता चुनें',
      fullTime: 'पूर्णकालिक',
      partTime: 'अंशकालिक',
      flexible: 'लचीला',
      completeProfileButton: 'प्रोफाइल पूरा करें',
      
      // Language Switcher
      selectLanguage: 'भाषा चुनें',
      
      // Form validation
      required: 'यह फील्ड आवश्यक है',
      invalidEmail: 'कृपया एक वैध ईमेल पता दर्ज करें',
      invalidPhone: 'कृपया एक वैध फोन नंबर दर्ज करें',
      
      // Success messages
      profileUpdated: 'प्रोफाइल सफलतापूर्वक अपडेट हो गया!',
      applicationSubmitted: 'आवेदन सफलतापूर्वक जमा हो गया!',
      internshipSaved: 'इंटर्नशिप आपकी सूची में सेव हो गई!'
    }
  },
  es: {
    translation: {
      // Navigation
      home: 'Inicio',
      internships: 'Prácticas',
      matches: 'Coincidencias',
      profile: 'Perfil',
      settings: 'Configuración',
      
      // Common
      welcome: 'Bienvenido',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      save: 'Guardar',
      cancel: 'Cancelar',
      apply: 'Aplicar',
      next: 'Siguiente',
      previous: 'Anterior',
      submit: 'Enviar',
      
      // Internship Card
      company: 'Empresa',
      location: 'Ubicación',
      duration: 'Duración',
      type: 'Tipo',
      skills: 'Habilidades',
      applyNow: 'Aplicar Ahora',
      saveInternship: 'Guardar',
      
      // Matches Carousel
      yourMatches: 'Tus Coincidencias',
      noMatches: 'No se encontraron coincidencias',
      accept: 'Aceptar',
      pass: 'Pasar',
      
      // AI Interview Chat
      aiInterviewCoach: 'Entrenador de Entrevistas IA',
      practiceInterviewSkills: 'Practica tus habilidades de entrevista',
      typeMessage: 'Escribe tu mensaje...',
      send: 'Enviar',
      
      // Profile Form
      completeProfile: 'Completa tu Perfil',
      basicInformation: 'Información Básica',
      educationSkills: 'Educación y Habilidades',
      experiencePreferences: 'Experiencia y Preferencias',
      fullName: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      university: 'Universidad',
      major: 'Carrera',
      year: 'Año',
      addSkill: 'Agrega una habilidad y presiona Enter',
      previousExperience: 'Experiencia Anterior',
      availability: 'Disponibilidad',
      preferredLocation: 'Ubicación Preferida',
      selectYear: 'Seleccionar Año',
      selectAvailability: 'Seleccionar Disponibilidad',
      fullTime: 'Tiempo Completo',
      partTime: 'Medio Tiempo',
      flexible: 'Flexible',
      completeProfileButton: 'Completar Perfil',
      
      // Language Switcher
      selectLanguage: 'Seleccionar Idioma',
      
      // Form validation
      required: 'Este campo es requerido',
      invalidEmail: 'Por favor ingresa un correo electrónico válido',
      invalidPhone: 'Por favor ingresa un número de teléfono válido',
      
      // Success messages
      profileUpdated: '¡Perfil actualizado exitosamente!',
      applicationSubmitted: '¡Aplicación enviada exitosamente!',
      internshipSaved: '¡Práctica guardada en tu lista!'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false // React already does escaping
    },
    
    // Namespace configuration
    defaultNS: 'translation',
    ns: ['translation'],
    
    // Detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
