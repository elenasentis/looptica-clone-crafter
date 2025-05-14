
import React from 'react';
import OticonModelDetail from '@/components/products/OticonModelDetail';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const OticonModelPage: React.FC = () => {
  const { language } = useLanguage();
  
  // Preload LCP-critical assets
  React.useEffect(() => {
    // Preload hero image
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/images/oticon_intent_still_life.jpg';
    link.as = 'image';
    document.head.appendChild(link);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>
          {language === 'en' 
            ? 'Oticon Hearing Aids - Looptica'
            : (language === 'es' 
              ? 'Audífonos Oticon - Looptica'
              : 'Audiòfons Oticon - Looptica'
            )
          }
        </title>
        <meta name="description" content="Discover the latest hearing aid technology from Oticon at Looptica" />
        
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/poppins/Poppins-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/poppins/Poppins-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </Helmet>
      <OticonModelDetail />
    </>
  );
};

export default OticonModelPage;
