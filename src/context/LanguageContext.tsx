import React, { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data - moved outside component for better performance
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.book': 'Book Appointment',
    
    // Hero Section
    'hero.title': 'We are a mental and business consulting lab',
    'hero.subtitle': 'You manage your business. We enrich and enhance it.',
    'hero.cta': 'Contact us',
    
    // Services
    'services.title': 'Our Specialty',
    'services.mentoring': 'Mentoring',
    'services.strategy': 'Strategy',
    'services.management': 'Management',
    'services.training': 'Professional equipment training',
    'services.profitability': 'Profitability',
    
    // About
    'about.title': 'About Us',
    'about.question': 'Do you have a SME, start-up or a generations business?',
    'about.knowledge': 'You know that something has to change and precise understand how.',
    'about.interested': 'Interested in starting your most powerful chapter?',
    'about.approach': 'We approach your industry\'s challenges and present a solution.',
    'about.expertise': 'We provide a 40-year asset of real and face-to-face expertise in international, regional and national companies.',
    'about.ai': 'We support ourselves with artificial intelligence and business intelligence.',
    'about.enhance': 'You manage your business, we enrich and enhance it by incorporating to our critical thinking.',
    
    // Phases
    'phases.title': 'Our Process',
    'phase1.title': 'Phase 1',
    'phase1.desc': 'Reimagine the business | Create a CEO cabinet',
    'phase2.title': 'Phase 2',
    'phase2.desc': 'Improve the organization\'s skills: IA+ Expertise',
    'phase3.title': 'Phase 3',
    'phase3.desc': 'Reevaluate leadership competences',
    'phases.graphics': 'Include graphics Intelligence Business benefits',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.question': 'Ask us a question that details and indicates your business challenge.',
    'contact.payments': 'Payments: pesos, dollars and cryptocurrencies',
    'contact.share': 'Share: Instagram, WhatsApp, Telegram',
    'contact.tree': 'Each client... We planted a tree together with a foundation... or collaborate with doctors without borders...',
    
    // Footer
    'footer.headquarters': 'Headquarters',
    'footer.buenosAires': 'Buenos Aires, Argentina',
    'footer.newYork': 'New York, USA',
    'footer.budapest': 'Budapest, Hungary',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.book': 'Reservar Cita',
    
    // Hero Section
    'hero.title': 'Somos un laboratorio de consultoría mental y empresarial',
    'hero.subtitle': 'Tú gestionas tu negocio. Nosotros lo enriquecemos y potenciamos.',
    'hero.cta': 'Contáctanos',
    
    // Services
    'services.title': 'Nuestra Especialidad',
    'services.mentoring': 'Mentoría',
    'services.strategy': 'Estrategia',
    'services.management': 'Gestión',
    'services.training': 'Capacitación profesional',
    'services.profitability': 'Rentabilidad',
    
    // About
    'about.title': 'Sobre Nosotros',
    'about.question': '¿Tienes una PYME, start-up o un negocio generacional?',
    'about.knowledge': 'Sabes que algo tiene que cambiar y entiendes precisamente cómo.',
    'about.interested': '¿Interesado en comenzar tu capítulo más poderoso?',
    'about.approach': 'Abordamos los desafíos de tu industria y presentamos una solución.',
    'about.expertise': 'Proporcionamos un activo de 40 años de experiencia real y cara a cara en empresas internacionales, regionales y nacionales.',
    'about.ai': 'Nos apoyamos en inteligencia artificial e inteligencia empresarial.',
    'about.enhance': 'Tú gestionas tu negocio, nosotros lo enriquecemos y potenciamos incorporando nuestro pensamiento crítico.',
    
    // Phases
    'phases.title': 'Nuestro Proceso',
    'phase1.title': 'Fase 1',
    'phase1.desc': 'Reimaginar el negocio | Crear un gabinete CEO',
    'phase2.title': 'Fase 2',
    'phase2.desc': 'Mejorar las habilidades de la organización: IA + Experiencia',
    'phase3.title': 'Fase 3',
    'phase3.desc': 'Reevaluar competencias de liderazgo',
    'phases.graphics': 'Incluir gráficos de beneficios de Inteligencia Empresarial',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.question': 'Haznos una pregunta que detalle e indique tu desafío empresarial.',
    'contact.payments': 'Pagos: pesos, dólares y criptomonedas',
    'contact.share': 'Compartir: Instagram, WhatsApp, Telegram',
    'contact.tree': 'Cada cliente... Plantamos un árbol junto con una fundación... o colaboramos con médicos sin fronteras...',
    
    // Footer
    'footer.headquarters': 'Sedes',
    'footer.buenosAires': 'Buenos Aires, Argentina',
    'footer.newYork': 'Nueva York, EE.UU.',
    'footer.budapest': 'Budapest, Hungría',
  }
} as const;

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Memoized translation function for better performance
  const t = useCallback((key: string): string => {
    const currentTranslations = translations[language];
    const translation = currentTranslations[key as keyof typeof currentTranslations];
    
    if (!translation) {
      // Return key as fallback without logging to console
      return key;
    }
    
    return translation;
  }, [language]);

  // Memoized setLanguage function
  const setLanguage = useCallback((lang: Language) => {
    if (lang === 'en' || lang === 'es') {
      setLanguageState(lang);
    }
    // Silently ignore invalid languages without logging
  }, []);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 