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
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.membership': 'Membership',
    'nav.book': 'Book Appointment',
    
    // Hero Section
    'hero.title': 'We are a laboratory of mentoring.',
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
    'contact.subtitle': 'Get in touch with us to start your transformation journey',
    'contact.question': 'Ask us a question that details and indicates your business challenge.',
    'contact.payments': 'Payments: pesos, dollars and cryptocurrencies',
    'contact.share': 'Share: Instagram, WhatsApp, Telegram',
    'contact.tree': 'Each client... We planted a tree together with a foundation... or collaborate with doctors without borders...',
    
    // Contact Form
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.company': 'Company (Optional)',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Thank you for your message. We\'ll get back to you soon!',
    
    // Contact Info
    'contact.info.title': 'Get in Touch',
    'contact.payment.title': 'Payment Methods',
    'contact.social.title': 'Follow Us',
    
    // Footer
    'footer.headquarters': 'Headquarters',
    'footer.buenosAires': 'Buenos Aires, Argentina',
    'footer.newYork': 'New York, USA',
    'footer.budapest': 'Budapest, Hungary',
    
    // Membership
    'membership.title': 'Choose Your Plan',
    'membership.subtitle': 'Select the perfect membership plan that fits your business needs',
    'membership.mostPopular': 'Most Popular',
    'membership.included': 'What\'s Included',
    'membership.notIncluded': 'Not Included',
    'membership.selectPlan': 'Select Plan',
    'membership.securePayment': 'Secure Payment',
    'membership.note': 'All plans include a 30-day money-back guarantee. Cancel anytime.',
    
    // Membership Features
    'membership.features.basicConsultation': 'Basic consultation access',
    'membership.features.emailSupport': 'Email support',
    'membership.features.newsletter': 'Monthly newsletter',
    'membership.features.communityForum': 'Community forum access',
    'membership.features.prioritySupport': 'Priority support',
    'membership.features.advancedAnalytics': 'Advanced analytics',
    'membership.features.customStrategies': 'Custom strategies',
    'membership.features.oneOnOneSessions': '1-on-1 sessions',
    'membership.features.everythingInFree': 'Everything in Free',
    'membership.features.monthlySession': 'Monthly 1-on-1 session',
    'membership.features.exclusiveWorkshops': 'Exclusive workshops',
    'membership.features.unlimitedSessions': 'Unlimited sessions',
    'membership.features.personalMentor': 'Personal mentor',
    'membership.features.customIntegrations': 'Custom integrations',
    'membership.features.everythingInPremium': 'Everything in Premium',
    'membership.features.priorityScheduling': 'Priority scheduling',
    'membership.features.exclusiveEvents': 'Exclusive events',
    'membership.features.dedicatedSupport': 'Dedicated support team',
    
    // Auth
    'auth.login': 'Login',
    'auth.signup': 'Sign Up',
    'auth.loginSubtitle': 'Welcome back! Please enter your details.',
    'auth.signupSubtitle': 'Create your account to get started.',
    'auth.name': 'Full Name',
    'auth.email': 'Email Address',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.rememberMe': 'Remember me',
    'auth.forgotPassword': 'Forgot password?',
    'auth.loginButton': 'Sign In',
    'auth.signupButton': 'Create Account',
    'auth.orContinueWith': 'Or continue with',
    'auth.noAccount': 'Don\'t have an account?',
    'auth.haveAccount': 'Already have an account?',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Sobre Nosotros',
    'nav.contact': 'Contacto',
    'nav.membership': 'Membresía',
    'nav.book': 'Reservar Cita',
    
    // Hero Section
    'hero.title': 'Somos un laboratorio de consultoría',
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
    'contact.subtitle': 'Ponte en contacto con nosotros para comenzar tu viaje de transformación',
    'contact.question': 'Haznos una pregunta que detalle e indique tu desafío empresarial.',
    'contact.payments': 'Pagos: pesos, dólares y criptomonedas',
    'contact.share': 'Compartir: Instagram, WhatsApp, Telegram',
    'contact.tree': 'Cada cliente... Plantamos un árbol junto con una fundación... o colaboramos con médicos sin fronteras...',
    
    // Contact Form
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.name': 'Tu Nombre',
    'contact.form.email': 'Tu Email',
    'contact.form.company': 'Empresa (Opcional)',
    'contact.form.message': 'Tu Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.success': '¡Gracias por tu mensaje. Te responderemos pronto!',
    
    // Contact Info
    'contact.info.title': 'Ponte en Contacto',
    'contact.payment.title': 'Métodos de Pago',
    'contact.social.title': 'Síguenos',
    
    // Footer
    'footer.headquarters': 'Sedes',
    'footer.buenosAires': 'Buenos Aires, Argentina',
    'footer.newYork': 'Nueva York, EE.UU.',
    'footer.budapest': 'Budapest, Hungría',
    
    // Membership
    'membership.title': 'Elige Tu Plan',
    'membership.subtitle': 'Selecciona el plan de membresía perfecto que se adapte a las necesidades de tu negocio',
    'membership.mostPopular': 'Más Popular',
    'membership.included': 'Qué Incluye',
    'membership.notIncluded': 'No Incluido',
    'membership.selectPlan': 'Seleccionar Plan',
    'membership.securePayment': 'Pago Seguro',
    'membership.note': 'Todos los planes incluyen garantía de devolución de 30 días. Cancela en cualquier momento.',
    
    // Membership Features
    'membership.features.basicConsultation': 'Acceso a consultas básicas',
    'membership.features.emailSupport': 'Soporte por email',
    'membership.features.newsletter': 'Boletín mensual',
    'membership.features.communityForum': 'Acceso al foro comunitario',
    'membership.features.prioritySupport': 'Soporte prioritario',
    'membership.features.advancedAnalytics': 'Analíticas avanzadas',
    'membership.features.customStrategies': 'Estrategias personalizadas',
    'membership.features.oneOnOneSessions': 'Sesiones 1 a 1',
    'membership.features.everythingInFree': 'Todo lo de Free',
    'membership.features.monthlySession': 'Sesión mensual 1 a 1',
    'membership.features.exclusiveWorkshops': 'Talleres exclusivos',
    'membership.features.unlimitedSessions': 'Sesiones ilimitadas',
    'membership.features.personalMentor': 'Mentor personal',
    'membership.features.customIntegrations': 'Integraciones personalizadas',
    'membership.features.everythingInPremium': 'Todo lo de Premium',
    'membership.features.priorityScheduling': 'Programación prioritaria',
    'membership.features.exclusiveEvents': 'Eventos exclusivos',
    'membership.features.dedicatedSupport': 'Equipo de soporte dedicado',
    
    // Auth
    'auth.login': 'Iniciar Sesión',
    'auth.signup': 'Registrarse',
    'auth.loginSubtitle': '¡Bienvenido de vuelta! Por favor ingresa tus datos.',
    'auth.signupSubtitle': 'Crea tu cuenta para comenzar.',
    'auth.name': 'Nombre Completo',
    'auth.email': 'Correo Electrónico',
    'auth.password': 'Contraseña',
    'auth.confirmPassword': 'Confirmar Contraseña',
    'auth.rememberMe': 'Recordarme',
    'auth.forgotPassword': '¿Olvidaste tu contraseña?',
    'auth.loginButton': 'Iniciar Sesión',
    'auth.signupButton': 'Crear Cuenta',
    'auth.orContinueWith': 'O continúa con',
    'auth.noAccount': '¿No tienes una cuenta?',
    'auth.haveAccount': '¿Ya tienes una cuenta?',
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