
import { useEffect } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  // Content organized by section first, then by language
  const content = {
    meta: {
      en: {
        title: "Looptica - Optical and Audiology Services in Barcelona Poblenou | Glasses, Lenses, and Hearing Aids",
        description: "Specialized center for optical and audiological services in Barcelona Poblenou. We offer eye exams, prescription glasses, contact lenses, hearing tests, hearing loss treatment, and high-quality digital hearing aids.",
        keywords: "optical, audiology, eyeglasses, contactLenses, hearingAids, barcelona, poblenou, audiology barcelona poblenou, hearing aids barcelona poblenou, hearing loss, hearing test barcelona poblenou, clinical audiology barcelona poblenou, hearing center barcelona poblenou"
      },
      es: {
        title: "Looptica - Óptica y Audiología en Barcelona Poblenou | Gafas, Lentes y Audífonos",
        description: "Centro especializado en servicios ópticos y audiológicos en Barcelona Poblenou. Ofrecemos exámenes visuales, gafas graduadas, lentes de contacto, pruebas auditivas, tratamiento de pérdida auditiva y audífonos digitales de alta calidad.",
        keywords: "optical, audiology, eyeglasses, contactLenses, hearingAids, barcelona, poblenou, audiología barcelona poblenou, audífonos barcelona poblenou, pérdida auditiva, prueba auditiva barcelona poblenou, audiología clínica barcelona poblenou, centro auditivo barcelona poblenou"
      },
      ca: {
        title: "Looptica - Òptica i Audiologia a Barcelona Poblenou | Ulleres, Lents i Audiòfons",
        description: "Centre especialitzat en serveis òptics i audiològics a Barcelona Poblenou. Oferim exàmens visuals, ulleres graduades, lents de contacte, proves auditives, tractament de pèrdua auditiva i audiòfons d'alta qualitat.",
        keywords: "optical, audiology, eyeglasses, contactLenses, hearingAids, barcelona, poblenou, audiologia barcelona poblenou, audiòfons barcelona poblenou, pèrdua auditiva, prova auditiva barcelona poblenou, audiologia clínica barcelona poblenou, centre auditiu barcelona poblenou"
      }
    },
    seo: {
      title: {
        en: "Barcelona Poblenou Audiology Center - Hearing Tests and Digital Hearing Aids",
        es: "Centro de Audiología Barcelona Poblenou - Pruebas Auditivas y Audífonos Digitales",
        ca: "Centre d'Audiologia Barcelona Poblenou - Proves Auditives i Audiòfons Digitals"
      },
      text: {
        en: "At Looptica we offer comprehensive audiology services in Barcelona Poblenou, including professional hearing tests, hearing loss treatment, digital hearing aids fitting, audiometry Barcelona Poblenou and tinnitus solutions. Our hearing center in Barcelona Poblenou features high-quality clinical audiology and specialists in pediatric audiology.",
        es: "En Looptica ofrecemos servicios completos de audiología en Barcelona Poblenou, incluyendo pruebas auditivas profesionales, tratamiento de pérdida auditiva, adaptación de audífonos digitales, audiometría Barcelona Poblenou y soluciones para acúfenos. Nuestro centro auditivo en Barcelona Poblenou cuenta con audiología clínica de alta calidad y especialistas en audiología pediátrica.",
        ca: "A Looptica oferim serveis complets d'audiologia a Barcelona Poblenou, incloent proves auditives professionals, tractament de pèrdua auditiva, adaptació d'audiòfons digitals, audiometria Barcelona Poblenou i solucions per a acúfens. El nostre centre auditiu a Barcelona Poblenou compta amb audiologia clínica d'alta qualitat i especialistes en audiologia pediàtrica."
      }
    },
    audiologyLink: {
      en: "Visit our Audiology Page",
      es: "Visitar nuestra página de Audiología",
      ca: "Visitar la nostra pàgina d'Audiologia"
    },
    whatsapp: {
      statusMessage: {
        en: "Typically replies within 1 hour",
        es: "Normalmente responde en 1 hora",
        ca: "Normalment respon en 1 hora"
      },
      chatMessage: {
        en: "Hello! 👋🏼 How can we help you with your vision or hearing?",
        es: "¡Hola! 👋🏼 ¿En qué podemos ayudarte con tu visión o audición?",
        ca: "Hola! 👋🏼 En què podem ajudar-te amb la teva visió o audició?"
      },
      placeholder: {
        en: "Type a message...",
        es: "Escribe un mensaje...",
        ca: "Escriu un missatge..."
      }
    }
  };
  
  useEffect(() => {
    // Lazy load all images except for critical ones
    const lazyLoadImages = () => {
      const allImages = document.querySelectorAll('img');
      
      allImages.forEach(img => {
        // Skip the hero image which is loaded as background
        if (img.src.includes('DSC4608.jpg')) return;
        
        // Add loading="lazy" attribute to all other images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });
    };
    
    // Call the function after a short delay to ensure DOM is fully loaded
    setTimeout(lazyLoadImages, 100);
    
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
    
    // Override default link behavior for service/product page links
    const handleLinkClicks = () => {
      const pageLinks = document.querySelectorAll('a[href^="/services/"], a[href^="/products/"]');
      
      pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
          if (href) {
            // Use navigate from react-router-dom
            navigate(href);
            // Manually set scroll position to top
            window.scrollTo(0, 0);
          }
        });
      });
    };
    
    handleLinkClicks();
    
    // Log to check if component is mounting correctly
    console.log("Index component mounted");
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>{content.meta[language].title}</title>
        <meta name="description" content={content.meta[language].description} />
        <meta name="keywords" content={content.meta[language].keywords} />
        <link rel="canonical" href="https://www.looptica.com/" />
        <meta property="og:title" content={content.meta[language].title} />
        <meta property="og:description" content={content.meta[language].description} />
        <meta property="og:url" content="https://www.looptica.com/" />
      </Helmet>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Hero />
          <div className="sr-only">
            <h2>{content.seo.title[language]}</h2>
            <p>
              {content.seo.text[language]}
            </p>
          </div>
          <div id="products">
            <Products />
          </div>
          <div id="optical">
            <OpticalServices />
          </div>
          <div id="audiology">
            <Audiology />
            <div className="container mx-auto px-4 mt-4 text-center">
              <Link to="/services/audiologia-centro" className="text-[#55afa9] hover:underline">
                {content.audiologyLink[language]}
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
          statusMessage={content.whatsapp.statusMessage[language]}
          chatMessage={content.whatsapp.chatMessage[language]}
          placeholder={content.whatsapp.placeholder[language]}
        />
      </div>
    </>
  );
};

export default Index;
