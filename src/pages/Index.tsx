
import { useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Products from '@/components/home/Products';
import OpticalServices from '@/components/home/OpticalServices';
import Audiology from '@/components/home/Audiology';
import Testimonials from '@/components/home/Testimonials';
import Brands from '@/components/home/Brands';
import StoreLocation from '@/components/home/StoreLocation';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle hash navigation after page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Add a slight delay to ensure all elements are loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };
    
    handleHashNavigation();
    
    // Log to check if component is mounting correctly
    console.log("Index component mounted");
  }, []);

  // Determine the appropriate title and description based on language
  const getPageTitle = () => {
    if (language === 'es') return 'Looptica - Óptica y Audiología en Barcelona | Gafas, Lentes y Audífonos';
    if (language === 'ca') return 'Looptica - Òptica i Audiologia a Barcelona | Ulleres, Lents i Audiòfons';
    return 'Looptica - Optical and Audiology Services in Barcelona | Glasses, Lenses, and Hearing Aids';
  };
  
  const getPageDescription = () => {
    if (language === 'es') 
      return 'Centro especializado en servicios ópticos y audiológicos en Barcelona. Ofrecemos exámenes visuales, gafas graduadas, lentes de contacto, pruebas auditivas y audífonos de alta calidad.';
    if (language === 'ca') 
      return 'Centre especialitzat en serveis òptics i audiològics a Barcelona. Oferim exàmens visuals, ulleres graduades, lents de contacte, proves auditives i audiòfons d\'alta qualitat.';
    return 'Specialized center for optical and audiological services in Barcelona. We offer eye exams, prescription glasses, contact lenses, hearing tests, and high-quality hearing aids.';
  };

  return (
    <Fragment>
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta name="keywords" content={`${t('optical')}, ${t('audiology')}, ${t('eyeglasses')}, ${t('contactLenses')}, ${t('hearingAids')}, barcelona`} />
        <link rel="canonical" href="https://www.looptica.com/" />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta property="og:url" content="https://www.looptica.com/" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <div id="products">
            <Products />
          </div>
          <div id="optical">
            <OpticalServices />
          </div>
          <div id="audiology">
            <Audiology />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="brands">
            <Brands />
          </div>
          <div id="contact">
            <StoreLocation />
          </div>
        </main>
        <Footer />
        <FloatingWhatsApp 
          phoneNumber="34699594064"
          accountName="Looptica"
          statusMessage="Typically replies within 1 hour"
          chatMessage="Hola! 👋🏼 How can we help you?"
          placeholder="Type a message..."
        />
      </div>
    </Fragment>
  );
};

export default Index;
