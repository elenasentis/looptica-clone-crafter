
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ca';

type Translations = {
  [key: string]: {
    en: string;
    ca: string;
  };
};

// Common translations used across components
export const translations: Translations = {
  // Navbar
  home: {
    en: 'Home',
    ca: 'Inici',
  },
  products: {
    en: 'Products',
    ca: 'Productes',
  },
  about: {
    en: 'About',
    ca: 'Sobre',
  },
  contact: {
    en: 'Contact',
    ca: 'Contacte',
  },
  shopNow: {
    en: 'Shop Now',
    ca: 'Comprar Ara',
  },
  // Hero
  premiumEyewear: {
    en: 'Premium Eyewear Collection',
    ca: 'Col·lecció d\'Ulleres Premium',
  },
  heroTitle: {
    en: 'See the world through clarity and style',
    ca: 'Mira el món amb claredat i estil',
  },
  heroDescription: {
    en: 'Discover our handcrafted eyewear, designed with precision and attention to detail. Each piece combines function with timeless elegance.',
    ca: 'Descobreix les nostres ulleres artesanals, dissenyades amb precisió i atenció al detall. Cada peça combina funcionalitat amb elegància atemporal.',
  },
  viewCollection: {
    en: 'View Collection',
    ca: 'Veure Col·lecció',
  },
  // Products
  ourCollection: {
    en: 'Our Collection',
    ca: 'La Nostra Col·lecció',
  },
  curatedDesigns: {
    en: 'Curated designs for discerning eyes',
    ca: 'Dissenys seleccionats per a ulls exigents',
  },
  productsDescription: {
    en: 'Explore our collection of premium eyewear, crafted with the finest materials and meticulous attention to detail.',
    ca: 'Explora la nostra col·lecció d\'ulleres premium, elaborades amb els millors materials i una atenció meticulosa als detalls.',
  },
  addToCart: {
    en: 'Add to Cart',
    ca: 'Afegir al Carret',
  },
  viewAllProducts: {
    en: 'View All Products',
    ca: 'Veure Tots els Productes',
  },
  // Newsletter
  stayUpdated: {
    en: 'Stay Updated',
    ca: 'Mantén-te Informat',
  },
  newsletter: {
    en: 'Subscribe to our newsletter',
    ca: 'Subscriu-te al nostre butlletí',
  },
  newsletterDesc: {
    en: 'Join our community and be the first to know about new collections, exclusive offers, and eyewear trends.',
    ca: 'Uneix-te a la nostra comunitat i sigues el primer en conèixer les noves col·leccions, ofertes exclusives i tendències en ulleres.',
  },
  emailAddress: {
    en: 'Email Address',
    ca: 'Adreça de Correu',
  },
  subscribe: {
    en: 'Subscribe',
    ca: 'Subscriure\'s',
  },
  subscribing: {
    en: 'Subscribing...',
    ca: 'Subscrivint...',
  },
  privacyConsent: {
    en: 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.',
    ca: 'En subscriure\'t, acceptes la nostra Política de Privacitat i consents rebre actualitzacions de la nostra empresa.',
  },
  // Categories
  eyeglasses: {
    en: 'Eyeglasses',
    ca: 'Ulleres',
  },
  sunglasses: {
    en: 'Sunglasses',
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
