
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
import { Link } from 'react-router-dom';

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
      return 'Centro especializado en servicios ópticos y audiológicos en Barcelona. Ofrecemos exámenes visuales, gafas graduadas, lentes de contacto, pruebas auditivas, tratamiento de pérdida auditiva y audífonos digitales de alta calidad.';
    if (language === 'ca') 
      return 'Centre especialitzat en serveis òptics i audiològics a Barcelona. Oferim exàmens visuals, ulleres graduades, lents de contacte, proves auditives, tractament de pèrdua auditiva i audiòfons d\'alta qualitat.';
    return 'Specialized center for optical and audiological services in Barcelona. We offer eye exams, prescription glasses, contact lenses, hearing tests, hearing loss treatment, and high-quality digital hearing aids.';
  };

  // Add SEO text specific to audiology based on language
  const getSeoText = () => {
    if (language === 'es') {
      return (
        <div className="sr-only">
          <h2>Centro de Audiología Barcelona - Pruebas Auditivas y Audífonos Digitales</h2>
          <p>
            En Looptica ofrecemos servicios completos de audiología en Barcelona, 
            incluyendo pruebas auditivas profesionales, tratamiento de pérdida auditiva, 
            adaptación de audífonos digitales, audiometría Barcelona y soluciones para acúfenos. 
            Nuestro <Link to="/services/audiologia-centro">centro auditivo en Barcelona</Link> cuenta con audiología clínica de alta calidad y 
            especialistas en audiología pediátrica.
          </p>
        </div>
      );
    } else if (language === 'ca') {
      return (
        <div className="sr-only">
          <h2>Centre d'Audiologia Barcelona - Proves Auditives i Audiòfons Digitals</h2>
          <p>
            A Looptica oferim serveis complets d'audiologia a Barcelona, 
            incloent proves auditives professionals, tractament de pèrdua auditiva, 
            adaptació d'audiòfons digitals, audiometria Barcelona i solucions per a acúfens. 
            El nostre <Link to="/services/audiologia-centro">centre auditiu a Barcelona</Link> compta amb audiologia clínica d'alta qualitat i 
            especialistes en audiologia pediàtrica.
          </p>
        </div>
      );
    } else {
      return (
        <div className="sr-only">
          <h2>Barcelona Audiology Center - Hearing Tests and Digital Hearing Aids</h2>
          <p>
            At Looptica we offer comprehensive audiology services in Barcelona, 
            including professional hearing tests, hearing loss treatment, 
            digital hearing aids fitting, audiometry Barcelona and tinnitus solutions. 
            Our <Link to="/services/audiologia-centro">hearing center in Barcelona</Link> features high-quality clinical audiology and 
            specialists in pediatric audiology.
          </p>
        </div>
      );
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta name="keywords" content={`${t('optical')}, ${t('audiology')}, ${t('eyeglasses')}, ${t('contactLenses')}, ${t('hearingAids')}, barcelona, audiología barcelona, audífonos barcelona, pérdida auditiva, prueba auditiva barcelona, audiología clínica barcelona, centro auditivo barcelona`} />
        <link rel="canonical" href="https://www.looptica.com/" />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta property="og:url" content="https://www.looptica.com/" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          {getSeoText()}
          <div id="products">
            <Products />
          </div>
          <div id="optical">
            <OpticalServices />
          </div>
          <div id="audiology">
            <Audiology />
            <div className="container mx-auto px-4 mt-4 text-center">
              <Link to="/services/audiologia-centro" className="text-[#009fe3] hover:underline">
                {language === 'es' ? "Visitar nuestra página de Audiología" : language === 'ca' ? "Visitar la nostra pàgina d'Audiologia" : "Visit our Audiology Page"}
              </Link>
            </div>
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
          statusMessage={language === 'es' ? "Normalmente responde en 1 hora" : 
                        language === 'ca' ? "Normalment respon en 1 hora" : 
                        "Typically replies within 1 hour"}
          chatMessage={language === 'es' ? "¡Hola! 👋🏼 ¿En qué podemos ayudarte con tu visión o audición?" : 
                      language === 'ca' ? "Hola! 👋🏼 En què podem ajudar-te amb la teva visió o audició?" : 
                      "Hello! 👋🏼 How can we help you with your vision or hearing?"}
          placeholder={language === 'es' ? "Escribe un mensaje..." : 
                      language === 'ca' ? "Escriu un missatge..." : 
                      "Type a message..."}
        />
      </div>
    </Fragment>
  );
};

export default Index;
