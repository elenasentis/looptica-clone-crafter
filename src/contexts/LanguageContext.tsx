import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { useNavigate, useLocation, NavigateFunction } from 'react-router-dom';

type Language = 'en' | 'es' | 'ca';

type Translations = {
  [key: string]: {
    en: string;
    es: string;
    ca: string;
  };
};

// Common translations used across components
export const translations: Translations = {
  // Navbar
  home: {
    en: 'Home',
    es: 'Inicio',
    ca: 'Inici',
  },
  products: {
    en: 'Products',
    es: 'Productos',
    ca: 'Productes',
  },
  about: {
    en: 'About',
    es: 'Sobre',
    ca: 'Qui som',
  },
  contact: {
    en: 'Contact',
    es: 'Contacto',
    ca: 'Contacte',
  },
  shopNow: {
    en: 'Book Appointment',
    es: 'Pedir Cita',
    ca: 'Demana Cita',
  },
  demanaCita: {
    en: 'Book Appointment',
    es: 'Pedir Cita',
    ca: 'Demana Cita',
  },
  // Hero
  premiumEyewear: {
    en: 'Looptica',
    es: 'Looptica',
    ca: 'Looptica',
  },
  heroTitle: {
    en: 'Your visual and auditory solution',
    es: 'Tu solución auditiva y visual',
    ca: 'La teva solució auditiva i visual',
  },
  heroDescription: {
    en: 'Comprehensive advice for your visual and auditory needs. Discover our optical and audiology services.',
    es: 'Asesoramiento integral para tus necesidades visuales y auditivas. Descubre nuestros servicios de óptica y audiología.',
    ca: 'Assessorament integral per a les teves necessitats visuals i auditives. Descobreix els nostres serveis d\'òptica i audiologia.',
  },
  viewCollection: {
    en: 'Our Services',
    es: 'Nuestros Servicios',
    ca: 'Els nostres serveis',
  },
  // Products
  ourCollection: {
    en: 'Our Products',
    es: 'Nuestros Productos',
    ca: 'Els Nostres Productes',
  },
  curatedDesigns: {
    en: 'Solutions for your visual and auditory health',
    es: 'Soluciones para tu salud visual y auditiva',
    ca: 'Solucions per a la teva salut visual i auditiva',
  },
  productsDescription: {
    en: 'At Looptica you will find everything you need to take care of your vision and hearing with high quality products and advice from our optical and audiology specialists.',
    es: 'En Looptica encontrarás todo lo que necesitas para cuidar tu visión y audición con productos y asesoramiento de alta calidad de nuestros especialistas en óptica y audiología.',
    ca: 'A Looptica trobaràs tot el que necessites per cuidar la teva visió i audició amb productes i assessorament d\'alta qualitat dels nostres especialistes en òptica i audiologia.',
  },
  addToCart: {
    en: 'More Information',
    es: 'Más Información',
    ca: 'Més informació',
  },
  viewDetails: {
    en: 'View Details',
    es: 'Ver Detalles',
    ca: 'Veure Detalls',
  },
  // Optical Services Section
  opticalServices: {
    en: 'Optical Services',
    es: 'Servicios Ópticos',
    ca: 'Serveis Òptics',
  },
  visualCare: {
    en: 'Visual Health Care',
    es: 'Cuidamos tu salud visual',
    ca: 'Cuidem la teva salut visual',
  },
  opticalDescription: {
    en: 'Our certified opticians provide comprehensive visual assessments and personalized solutions to improve your visual health.',
    es: 'Nuestros ópticos optometristas graduados ofrecen servicios completos y soluciones personalizadas para mejorar tu salud visual.',
    ca: 'Els nostres òptics optometristas graduats ofereixen serveis complets i solucions personalitzades per millorar la teva salut visual.',
  },
  visualHealth: {
    en: 'Visual Health',
    es: 'Salud Visual',
    ca: 'Salut Visual',
  },
  visualHealthDesc: {
    en: 'Optometric visual examination, retinoscopy, tired eyesight, cornea topography, dry eye, etc.',
    es: 'Exámen visual optométrico, retinoscopia, vista cansada, topografia corneal, ojo seco, etc.',
    ca: 'Examen visual optomètric, retinoscòpia, topografia corneal, vista cansada, ull sec, etc.',
  },
  contactLenses: {
    en: 'Contact Lenses',
    es: 'Lentes de Contacto',
    ca: 'Lents de Contacte',
  },
  contactLensesDesc: {
    en: 'Adaptation of contact lenses for myopia, hyperopia, astigmatism, progressive, customized, myopia control, congenital cataracts, queratoconus and ortho-k.',
    es: 'Adaptación de lentes de contacto para miopia, hipermetropia, astigmatismo, progresivas, individualizadas, de catarata congénita, control de miopía, queratocono y orto-k.',
    ca: 'Adaptació de lents de contacte per miopia, hipermetropia, astigmatisme, progressives, individualitzades, per cataracta congènita, control de miopia, queratocono i orto-k.',
  },
  // Add the missing translation key "ortoK"
  ortoK: {
    en: 'Ortho-K',
    es: 'Orto-K',
    ca: 'Orto-K',
  },
  orthoK: {
    en: 'Ortho-K',
    es: 'Orto-K',
    ca: 'Orto-K',
  },
  orthoKDesc: {
    en: 'Correct your vision with overnight contact lenses and forget about glasses during the day.',
    es: 'Corrige tu vision con lentes de contacto nocturnas y olvidate de las gafas durante el día.',
    ca: 'Corregeix la teva visió amb lents de contacte nocturnes i oblida\'t de les ulleres durant el dia.',
  },
  imageConsulting: {
    en: 'Image Consulting',
    es: 'Asesoramiento de Imagen',
    ca: 'Assessorament d\'Imatge',
  },
  imageConsultingDesc: {
    en: 'We offer a selection of stylish frames designed in Barcelona.',
    es: 'Te ofrecemos una selección de monturas con estilo diseñadas en Barcelona.',
    ca: 'T\'oferim una selecció de muntures amb estil dissenyades a Barcelona.',
  },
  lensConsulting: {
    en: 'Lens Consulting',
    es: 'Asesoramiento de Lentes',
    ca: 'Assessorament de Lents',
  },
  lensConsultingDesc: {
    en: 'We find the best option for your vision problem with the latest generation lenses from the best brands.',
    es: 'Buscamos la mejor opción para tu problema visual con lentes de última generación de las mejores marcas.',
    ca: 'Busquem la millor opció pel teu problema visual amb lents d\'última generació de les millors marques.',
  },
  sunglassesService: {
    en: 'Sunglasses',
    es: 'Gafas de Sol',
    ca: 'Ulleres de Sol',
  },
  sunglassesServiceDesc: {
    en: 'Exclusive sunglasses that convey personality from local designers.',
    es: 'Gafas de sol exclusivas que transmiten personalidad de diseñadores locales.',
    ca: 'Ulleres de sol exclusives que transmeten personalitat de dissenyadors locals.',
  },
  scheduleConsult: {
    en: 'Schedule a Consultation',
    es: 'Solicita una consulta',
    ca: 'Sol·licita una consulta',
  },
  // Audiology Section
  audiologyServices: {
    en: 'Audiology Services',
    es: 'Servicios de Audiología',
    ca: 'Serveis d\'Audiologia',
  },
  hearingCare: {
    en: 'Expert Hearing Care',
    es: 'Cuidado Auditivo Experto',
    ca: 'Cura Auditiva Experta',
  },
  audiologyDescription: {
    en: 'Our certified audiologists in Barcelona Poblenou provide comprehensive hearing assessments and personalized solutions to improve your hearing health and treat hearing loss.',
    es: 'Nuestros audiólogos certificados en Barcelona Poblenou ofrecen evaluaciones auditivas completas y soluciones personalizadas para mejorar su salud auditiva y tratar la pérdida auditiva.',
    ca: 'Els nostres audioprotessistes titulats ofereixen avaluacions auditives completes i solucions personalitzades per millorar la teva salut auditiva i tractar la pèrdua auditiva.',
  },
  hearingTest: {
    en: 'Professional Hearing Tests',
    es: 'Pruebas Auditivas Profesionales',
    ca: 'Proves Auditives Professionals',
  },
  hearingTestDesc: {
    en: 'Comprehensive audiometric assessment of your hearing ability using state-of-the-art equipment at our Barcelona Poblenou audiology center.',
    es: 'Evaluación audiométrica completa de su capacidad auditiva utilizando equipos de última generación en nuestro centro de audiología en Barcelona Poblenou.',
    ca: 'Avaluació audiomètrica completa de la seva capacitat auditiva utilitzant equips d\'última generació al nostre centre d\'audiologia a Barcelona Poblenou.',
  },
  hearingAids: {
    en: 'Digital Hearing Aids',
    es: 'Audífonos Digitales',
    ca: 'Audiòfons Digitals',
  },
  hearingAidsDesc: {
    en: 'High-quality digital hearing aids tailored to your specific hearing loss profile and lifestyle at our hearing center in Barcelona Poblenou.',
    es: 'Audífonos digitales de alta calidad adaptados a su perfil específico de pérdida auditiva y estilo de vida en nuestro centro auditivo en Barcelona Poblenou.',
    ca: 'Audiòfons digitals d\'alta qualitat adaptats a les seves necessitats específiques de pèrdua auditiva i estil de vida al nostre centre auditiu a Barcelona Poblenou.',
  },
  tinnitusTreatment: {
    en: 'Tinnitus Treatment',
    es: 'Tratamiento de Acúfenos',
    ca: 'Tractament d\'Acúfens',
  },
  tinnitusDesc: {
    en: 'Specialized solutions at our Barcelona Poblenou audiology clinic to help manage and reduce tinnitus symptoms associated with hearing loss.',
    es: 'Soluciones especializadas en nuestro centro auditivo en Barcelona Poblenou para ayudar a controlar y reducir los síntomas de acúfenos asociados con la pérdida auditiva.',
    ca: 'Solucions especialitzades al nostre centre auditiu a Barcelona Poblenou per ajudar a controlar i reduir els símptomes d\'acúfens associats amb la pèrdua auditiva.',
  },
  customEarProtection: {
    en: 'Custom Ear Protection',
    es: 'Protección Auditiva Personalizada',
    ca: 'Protecció Auditiva Personalitzada',
  },
  earProtectionDesc: {
    en: 'Custom-made ear plugs at our Barcelona Poblenou audiology center designed for comfort and optimal noise protection to prevent hearing loss.',
    es: 'Tapones para los oídos hechos a medida en nuestro centro de audiología en Barcelona Poblenou diseñados para comodidad y protección óptima contra el ruido para prevenir la pérdida auditiva.',
    ca: 'Taps per a les orelles fets a mida al nostre centre d\'audiologia a Barcelona Poblenou dissenyats per a comoditat i protecció òptima contra el soroll per prevenir la pèrdua auditiva.',
  },
  subvenciones: {
    en: 'Hearing Aid Subsidies',
    es: 'Subvenciones para Audífonos',
    ca: 'Subvencions per a Audiòfons',
  },
  subvencionesDesc: {
    en: 'Information about available subsidies and financial aid for hearing aids and hearing assistance devices in Barcelona.',
    es: 'Información sobre ayudas y subvenciones disponibles para audífonos y dispositivos de ayuda auditiva en Barcelona.',
    ca: 'Informació sobre ajudes i subvencions disponibles per a audiòfons i dispositius d\'ajuda auditiva a Barcelona.',
  },
  scheduleConsultation: {
    en: 'Schedule a Hearing Consultation',
    es: 'Programar una Consulta Auditiva',
    ca: 'Programar una Consulta Auditiva',
  },
  // Testimonials Section
  customerReviews: {
    en: 'Customer Reviews',
    es: 'Opiniones de Clientes',
    ca: 'Opinions de Clients',
  },
  whatCustomersSay: {
    en: 'What Our Customers Say',
    es: 'Lo Que Dicen Nuestros Clientes',
    ca: 'El Que Diuen Els Nostres Clients',
  },
  reviewsDescription: {
    en: 'Read what our customers have to say about their experiences with our eyewear, hearing aids, and audiology services.',
    es: 'Lea lo que nuestros clientes tienen que decir sobre sus experiencias con nuestras gafas, audífonos y servicios de audiología.',
    ca: 'Llegiu el que els nostres clients diuen sobre les seves experiències amb les nostres ulleres, audiòfons i serveis d\'audiologia.',
  },
  viewAllReviews: {
    en: 'View All Reviews on Google',
    es: 'Ver Todas las Opiniones en Google',
    ca: 'Veure Totes les Opinions a Google',
  },
  // Brands Section
  topBrands: {
    en: 'Top Brands',
    es: 'Mejores Marcas',
    ca: 'Millors Marques',
  },
  ourBrands: {
    en: 'Our Featured Brands',
    es: 'Nuestras Marcas Destacadas',
    ca: 'Les Nostres Marques Destacades',
  },
  brandsDescription: {
    en: 'We partner with the world\'s leading eyewear and hearing aid brands to provide you with the best quality products for vision and hearing health.',
    es: 'Nos asociamos con las principales marcas de gafas y audífonos del mundo para ofrecerle productos de la mejor calidad para la salud visual y auditiva.',
    ca: 'Ens associem amb les principals marques d\'ulleres i audiòfons del món per oferir-vos productes de la millor qualitat per a la salut visual i auditiva.',
  },
  // Store Location Section
  findUs: {
    en: 'Find Our Barcelona Center',
    es: 'Encuentra Nuestro Centro en Barcelona',
    ca: 'Troba El Nostre Centre a Barcelona',
  },
  visitOurStore: {
    en: 'Visit Our Barcelona Store',
    es: 'Visita Nuestra Tienda en Barcelona',
    ca: 'Visita La Nostra Botiga a Barcelona',
  },
  storeLocationDesc: {
    en: 'Come visit our optical and audiology center in Barcelona for a personalized consultation with our vision and hearing experts.',
    es: 'Venga a visitar nuestro centro de óptica y audiología en Barcelona para una consulta personalizada con nuestros expertos en visión y audición.',
    ca: 'Vine a visitar el nostre centre d\'òptica i audiologia a Barcelona per a una consulta personalitzada amb els nostres experts en visió i audició.',
  },
  address: {
    en: 'Address',
    es: 'Dirección',
    ca: 'Adreça',
  },
  openingHours: {
    en: 'Opening Hours',
    es: 'Horario de Apertura',
    ca: 'Horari d\'Obertura',
  },
  mondayThursday: {
    en: 'Monday-Thursday',
    es: 'Lunes-Jueves',
    ca: 'Dilluns-Dijous',
  },
  friday: {
    en: 'Friday',
    es: 'Viernes',
    ca: 'Divendres',
  },
  mondayFriday: {
    en: 'Monday-Friday',
    es: 'Lunes-Viernes',
    ca: 'Dilluns-Divendres',
  },
  saturday: {
    en: 'Saturday',
    es: 'Sábado',
    ca: 'Dissabte',
  },
  sunday: {
    en: 'Sunday',
    es: 'Domingo',
    ca: 'Diumenge',
  },
  closed: {
    en: 'Closed',
    es: 'Cerrado',
    ca: 'Tancat',
  },
  getDirections: {
    en: 'Get Directions',
    es: 'Obtener Indicaciones',
    ca: 'Obtenir Indicacions',
  },
  // Newsletter
  stayUpdated: {
    en: 'Stay Updated',
    es: 'Mantente Informado',
    ca: 'Mantén-te Informat',
  },
  newsletter: {
    en: 'Subscribe to our newsletter',
    es: 'Suscríbete a nuestro boletín',
    ca: 'Subscriu-te al nostre butlletí',
  },
  newsletterDesc: {
    en: 'Join our community and be the first to know about new collections, hearing health tips, exclusive offers, and eyewear trends.',
    es: 'Únete a nuestra comunidad y sé el primero en conocer las nuevas colecciones, consejos sobre salud auditiva, ofertas exclusivas y tendencias en gafas.',
    ca: 'Uneix-te a la nostra comunitat i sigues el primer en conèixer les noves col·leccions, consells sobre salut auditiva, ofertes exclusives i tendències en ulleres.',
  },
  emailAddress: {
    en: 'Email Address',
    es: 'Correo Electrónico',
    ca: 'Adreça de Correu',
  },
  subscribe: {
    en: 'Subscribe',
    es: 'Suscribirse',
    ca: 'Subscriu-te',
  },
  subscribing: {
    en: 'Subscribing...',
    es: 'Suscribiendo...',
    ca: 'Subscrivint...',
  },
  privacyConsent: {
    en: 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.',
    es: 'Al suscribirte, aceptas nuestra Política de Privacidad y consientes recibir actualizaciones de nuestra empresa.',
    ca: 'En subscriure\'t, acceptes la nostra Política de Privacitat i consents rebre actualitzacions de la nostra empresa.',
  },
  // Categories
  eyeglasses: {
    en: 'Eyeglasses',
    es: 'Gafas',
    ca: 'Ulleres',
  },
  eyeglassesSubtitle: {
    en: 'Find your perfect frames with our premium collection',
    es: 'Encuentra tu montura perfecta con nuestra colección premium',
    ca: 'Troba la teva muntura perfecta amb la nostra col·lecció premium',
  },
  sunglasses: {
    en: 'Sunglasses',
    es: 'Gafas de Sol',
    ca: 'Ulleres de Sol',
  },
  // Service Pages
  readyToSchedule: {
    en: 'Ready to Schedule Your Appointment in Barcelona?',
    es: '¿Listo para programar tu cita en Barcelona?',
    ca: 'Preparat per programar la teva cita a Barcelona?',
  },
  scheduleDescription: {
    en: 'Contact us today to schedule your consultation with our expert team at our Barcelona center.',
    es: 'Contáctenos hoy para programar su consulta con nuestro equipo de expertos en nuestro centro de Barcelona.',
    ca: 'Contacta\'ns avui per programar la teva consulta amb el nostre equip d\'experts al nostre centre de Barcelona.',
  },
  // Add the missing translation key
  contactViaWhatsApp: {
    en: 'Contact via WhatsApp',
    es: 'Contactar por WhatsApp',
    ca: 'Contactar per WhatsApp',
  },
  // Additional Audiology Terms
  audiologyCenter: {
    en: 'Audiology Center',
    es: 'Centro Auditivo',
    ca: 'Centre Auditiu',
  },
  hearingLoss: {
    en: 'Hearing Loss Treatment',
    es: 'Tratamiento de Pérdida Auditiva',
    ca: 'Tractament de la Pèrdua Auditiva',
  },
  audiometry: {
    en: 'Audiometry in Barcelona Poblenou',
    es: 'Audiometría en Barcelona Poblenou',
    ca: 'Audiometria a Barcelona Poblenou',
  },
  pediatricAudiology: {
    en: 'Pediatric Audiology',
    es: 'Audiología Pediátrica',
    ca: 'Audiologia Pediàtrica',
  },
  digitalHearingAids: {
    en: 'Digital Hearing Aids',
    es: 'Audífonos Digitales',
    ca: 'Audiòfons Digitals',
  },
  // Technical Aids
  technicalAids: {
    en: 'Technical Aids',
    es: 'Ayudas Técnicas',
    ca: 'Ajudes Tècniques',
  },
  technicalAidsDesc: {
    en: 'Specialized solutions to improve communication in different environments for people with hearing loss.',
    es: 'Soluciones especializadas para mejorar la comunicación en diferentes entornos para personas con pérdida auditiva.',
    ca: 'Solucions especialitzades per millorar la comunicació en diferents entorns per a persones amb pèrdua auditiva.',
  },
  technicalAidsTitle: {
    en: 'Technical Aid Solutions for Hearing Loss',
    es: 'Soluciones de Ayuda Técnica para Pérdida Auditiva',
    ca: 'Solucions d\'Ajuda Tècnica per a Pèrdua Auditiva',
  },
  technicalAidsIntro: {
    en: 'Discover our range of technical aid solutions designed to enhance communication for people with hearing loss in various environments.',
    es: 'Descubra nuestra gama de soluciones de ayuda técnica diseñadas para mejorar la comunicación de personas con pérdida auditiva en diversos entornos.',
    ca: 'Descobreix la nostra gamma de solucions d\'ajuda tècnica dissenyades per millorar la comunicació de persones amb pèrdua auditiva en diversos entorns.',
  },
  twinlinkTitle: {
    en: 'Oticon TwinLink',
    es: 'Oticon TwinLink',
    ca: 'Oticon TwinLink',
  },
  twinlinkDesc: {
    en: 'Dual communication technology that provides simultaneous binaural processing and wireless connectivity for hearing aids.',
    es: 'Tecnología de comunicación dual que proporciona procesamiento binaural simultáneo y conectividad inalámbrica para audífonos.',
    ca: 'Tecnologia de comunicació dual que proporciona processament binaural simultani i connectivitat sense fils per a audiòfons.',
  },
  edumicTitle: {
    en: 'Oticon EduMic',
    es: 'Oticon EduMic',
    ca: 'Oticon EduMic',
  },
  edumicDesc: {
    en: 'A versatile wireless remote microphone system designed for educational settings, helping students with hearing loss.',
    es: 'Un sistema versátil de micrófono remoto inalámbrico diseñado para entornos educativos, ayudando a estudiantes con pérdida auditiva.',
    ca: 'Un sistema versàtil de micròfon remot sense fils dissenyat per a entorns educatius, ajudant a estudiants amb pèrdua auditiva.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  detectLanguage: () => Language;
  getUrlWithLanguage: (path: string, lang?: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create a safe version of hooks that won't crash outside of Router context
const useSafeNavigate = (): NavigateFunction => {
  try {
    return useNavigate();
  } catch (e) {
    // Return a no-op function if not in Router context
    return (() => {}) as NavigateFunction;
  }
};

const useSafeLocation = () => {
  try {
    return useLocation();
  } catch (e) {
    // Return a default location object if not in Router context
    return { pathname: '/', search: '', hash: '', state: null, key: 'default' };
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ca');
  const navigate = useSafeNavigate();
  const location = useSafeLocation();
  
  // Extract language from URL path
  const extractLanguageFromPath = useCallback((): Language | null => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    
    if (firstSegment === 'ca' || firstSegment === 'es' || firstSegment === 'en') {
      return firstSegment as Language;
    }
    
    return null;
  }, [location.pathname]);
  
  // Detect user's preferred language
  const detectLanguage = useCallback((): Language => {
    // First, check if language is already set in URL
    const urlLanguage = extractLanguageFromPath();
    if (urlLanguage) {
      return urlLanguage;
    }
    
    // Second, check if language is stored in localStorage
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage === 'ca' || storedLanguage === 'es' || storedLanguage === 'en') {
      return storedLanguage as Language;
    }
    
    // Third, check browser language preferences
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ca') || browserLang.startsWith('cat')) {
      return 'ca';
    } else if (browserLang.startsWith('es') || browserLang.startsWith('spa')) {
      return 'es';
    } else {
      return 'en'; // Default to English for all other languages
    }
  }, [extractLanguageFromPath]);
  
  // Update language state and persist to localStorage
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
    
    // Only navigate if we're in a valid Router context
    if (typeof navigate === 'function') {
      const urlLang = extractLanguageFromPath();
      if (urlLang !== lang) {
        const pathWithoutLang = location.pathname.replace(/^\/(ca|es|en)/, '');
        const newPath = `/${lang}${pathWithoutLang || ''}${location.search}${location.hash}`;
        navigate(newPath, { replace: true });
      }
    }
  }, [extractLanguageFromPath, location, navigate]);
  
  // Get URL with the correct language prefix
  const getUrlWithLanguage = useCallback((path: string, lang?: Language): string => {
    const targetLang = lang || language;
    
    // If path already starts with language code, replace it
    if (path.match(/^\/(ca|es|en)\//)) {
      return path.replace(/^\/(ca|es|en)/, `/${targetLang}`);
    }
    
    // If path doesn't start with slash, add it
    if (!path.startsWith('/')) {
      path = `/${path}`;
    }
    
    // If path is just the root, return language prefix
    if (path === '/') {
      return `/${targetLang}`;
    }
    
    // Otherwise, add language prefix to path
    return `/${targetLang}${path}`;
  }, [language]);
  
  // Initialize language from URL or detect it
  useEffect(() => {
    const urlLang = extractLanguageFromPath();
    if (urlLang) {
      setLanguageState(urlLang);
    } else {
      const detectedLang = detectLanguage();
      setLanguageState(detectedLang);
    }
  }, [extractLanguageFromPath, detectLanguage]);
  
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    console.warn(`Translation key not found: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, detectLanguage, getUrlWithLanguage }}>
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
