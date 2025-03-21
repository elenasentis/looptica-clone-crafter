
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
    ca: 'Sobre',
  },
  contact: {
    en: 'Contact',
    es: 'Contacto',
    ca: 'Contacte',
  },
  shopNow: {
    en: 'Shop Now',
    es: 'Comprar Ahora',
    ca: 'Comprar Ara',
  },
  // Hero
  premiumEyewear: {
    en: 'Premium Eyewear Collection',
    es: 'Colección de Gafas Premium',
    ca: 'Col·lecció d\'Ulleres Premium',
  },
  heroTitle: {
    en: 'See the world through clarity and style',
    es: 'Ve el mundo con claridad y estilo',
    ca: 'Mira el món amb claredat i estil',
  },
  heroDescription: {
    en: 'Discover our handcrafted eyewear, designed with precision and attention to detail. Each piece combines function with timeless elegance.',
    es: 'Descubre nuestras gafas artesanales, diseñadas con precisión y atención al detalle. Cada pieza combina funcionalidad con elegancia atemporal.',
    ca: 'Descobreix les nostres ulleres artesanals, dissenyades amb precisió i atenció al detall. Cada peça combina funcionalitat amb elegància atemporal.',
  },
  viewCollection: {
    en: 'View Collection',
    es: 'Ver Colección',
    ca: 'Veure Col·lecció',
  },
  // Products
  ourCollection: {
    en: 'Our Collection',
    es: 'Nuestra Colección',
    ca: 'La Nostra Col·lecció',
  },
  curatedDesigns: {
    en: 'Curated designs for discerning eyes',
    es: 'Diseños seleccionados para ojos exigentes',
    ca: 'Dissenys seleccionats per a ulls exigents',
  },
  productsDescription: {
    en: 'Explore our collection of premium eyewear, crafted with the finest materials and meticulous attention to detail.',
    es: 'Explora nuestra colección de gafas premium, elaboradas con los mejores materiales y una atención meticulosa a los detalles.',
    ca: 'Explora la nostra col·lecció d\'ulleres premium, elaborades amb els millors materials i una atenció meticulosa als detalls.',
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
  const [language, setLanguage] = useState<Language>('en');

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
