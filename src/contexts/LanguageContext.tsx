import React, { createContext, useState, useContext, ReactNode } from 'react';

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
    en: 'Comprehensive advice for your visual and auditory needs. Discover our services and products.',
    es: 'Asesoramiento integral para tus necesidades visuales y auditivas. Descubre nuestros servicios y productos.',
    ca: 'Assessorament integral per a les teves necessitats visuals i auditives. Descobreix els nostres serveis i productes.',
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
    en: 'At Looptica you will find everything you need to take care of your vision and hearing with high quality products and advice.',
    es: 'En Looptica encontrarás todo lo que necesitas para cuidar tu visión y audición con productos y asesoramiento de alta calidad.',
    ca: 'A Looptica trobràs tot el que necessites per cuidar la teva visió i audició amb productes i assessorament d\'alta qualitat.',
  },
  addToCart: {
    en: 'Add to Cart',
    es: 'Añadir al Carrito',
    ca: 'Afegir al Carret',
  },
  viewAllProducts: {
    en: 'View All Products',
    es: 'Ver Todos los Productos',
    ca: 'Veure Tots els Productes',
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
    es: 'Nuestros ópticos certificados ofrecen servicios completos y soluciones personalizadas para mejorar tu salud visual.',
    ca: 'Els nostres òptics certificats ofereixen serveis complets i solucions personalitzades per millorar la teva salut visual.',
  },
  visualHealth: {
    en: 'Visual Health',
    es: 'Salud Visual',
    ca: 'Salut Visual',
  },
  visualHealthDesc: {
    en: 'Optometric visual examination, retinoscopy, tired eyesight, dry eye, etc.',
    es: 'Exámen visual optométrico, retinoscopia, vista cansada, ojo seco, etc.',
    ca: 'Examen visual optomètric, retinoscòpia, vista cansada, ull sec, etc.',
  },
  contactLenses: {
    en: 'Contact Lenses',
    es: 'Lentes de Contacto',
    ca: 'Lents de Contacte',
  },
  contactLensesDesc: {
    en: 'Adaptation of contact lenses for myopia, hyperopia, astigmatism, progressive and ortho-k.',
    es: 'Adaptación de lentes de contacto para miopia, hipermetropia, astigmatismo, progresivas y orto-k.',
    ca: 'Adaptació de lents de contacte per miopia, hipermetropia, astigmatisme, progressives i orto-k.',
  },
  orthoK: {
    en: 'Ortho-K',
    es: 'Orto-K',
    ca: 'Orto-K',
  },
  orthoKDesc: {
    en: 'Correct your vision with overnight contact lenses and forget about glasses during the day.',
    es: 'Corrige tu vision con lentes de contacto nocturnas y olvidate de las gafas durante el día.',
    ca: 'Corregeix la teva visió amb lents de contacte nocturnes i oblida't de les ulleres durant el dia.',
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
    es: 'Buscamos la mejor opción para tu problema de visión con lentes de última generación de las mejores marcas.',
    ca: 'Busquem la millor opció pel teu problema de visió amb lents d\'última generació de les millors marques.',
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
    en: 'Our certified audiologists provide comprehensive hearing assessments and personalized solutions to improve your hearing health.',
    es: 'Nuestros audiólogos certificados ofrecen evaluaciones auditivas completas y soluciones personalizadas para mejorar su salud auditiva.',
    ca: 'Els nostres audiòlegs certificats ofereixen avaluacions auditives completes i solucions personalitzades per millorar la seva salut auditiva.',
  },
  hearingTest: {
    en: 'Professional Hearing Tests',
    es: 'Pruebas Auditivas Profesionales',
    ca: 'Proves Auditives Professionals',
  },
  hearingTestDesc: {
    en: 'Comprehensive assessment of your hearing ability using state-of-the-art equipment.',
    es: 'Evaluación completa de su capacidad auditiva utilizando equipos de última generación.',
    ca: 'Avaluació completa de la seva capacitat auditiva utilitzant equips d\'última generació.',
  },
  hearingAids: {
    en: 'Advanced Hearing Aids',
    es: 'Audífonos Avanzados',
    ca: 'Audiòfons Avançats',
  },
  hearingAidsDesc: {
    en: 'High-quality hearing aids tailored to your specific needs and lifestyle.',
    es: 'Audífonos de alta calidad adaptados a sus necesidades específicas y estilo de vida.',
    ca: 'Audiòfons d\'alta qualitat adaptats a les seves necessitats específiques i estil de vida.',
  },
  tinnitusTreatment: {
    en: 'Tinnitus Treatment',
    es: 'Tratamiento de Acúfenos',
    ca: 'Tractament d\'Acúfens',
  },
  tinnitusDesc: {
    en: 'Specialized solutions to help manage and reduce tinnitus symptoms.',
    es: 'Soluciones especializadas para ayudar a controlar y reducir los síntomas de acúfenos.',
    ca: 'Solucions especialitzades per ajudar a controlar i reduir els símptomes d\'acúfens.',
  },
  customEarProtection: {
    en: 'Custom Ear Protection',
    es: 'Protección Auditiva Personalizada',
    ca: 'Protecció Auditiva Personalitzada',
  },
  earProtectionDesc: {
    en: 'Custom-made ear plugs designed for comfort and optimal noise protection.',
    es: 'Tapones para los oídos hechos a medida diseñados para comodidad y protección óptima contra el ruido.',
    ca: 'Taps per a les orelles fets a mida dissenyats per a comoditat i protecció òptima contra el soroll.',
  },
  scheduleConsultation: {
    en: 'Schedule a Consultation',
    es: 'Programar una Consulta',
    ca: 'Programar una Consulta',
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
    en: 'Join our community and be the first to know about new collections, exclusive offers, and eyewear trends.',
    es: 'Únete a nuestra comunidad y sé el primero en conocer las nuevas colecciones, ofertas exclusivas y tendencias en gafas.',
    ca: 'Uneix-te a la nostra comunitat i sigues el primer en conèixer les noves col·leccions, ofertes exclusives i tendències en ulleres.',
  },
  emailAddress: {
    en: 'Email Address',
    es: 'Correo Electrónico',
    ca: 'Adreça de Correu',
  },
  subscribe: {
    en: 'Subscribe',
    es: 'Suscribirse',
    ca: 'Subscriure\'s',
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
  sunglasses: {
    en: 'Sunglasses',
    es: 'Gafas de Sol',
    ca: 'Ulleres de Sol',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ca');

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    console.warn(`Translation key not found: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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

