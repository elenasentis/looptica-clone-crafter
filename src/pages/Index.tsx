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
import { FadeIn, FadeInUp } from '@/components/ui/index';

// Create a new component for SEO content to avoid it blocking rendering
const SeoContent = ({ language }: { language: string }) => {
  const content = {
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
  };

  return (
    <div className="sr-only">
      <h2>{content.seo.title[language as keyof typeof content.seo.title]}</h2>
      <p>
        {content.seo.text[language as keyof typeof content.seo.text]}
      </p>
    </div>
  );
};

// Create a component for non-critical sections that will be loaded after hero
const DeferredContent = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  // Use CSS animations instead of ScrollReveal for smoother rendering
  const staggered = [0, 100, 200, 300, 400, 500];

  const content = {
    audiologyLink: {
      en: "Visit our Audiology Page",
      es: "Visitar nuestra página de Audiología",
      ca: "Visitar la nostra pàgina d'Audiologia"
    },
  };

  useEffect(() => {
    // Lazy load all images except for critical ones
    const lazyLoadImages = () => {
      const allImages = document.querySelectorAll('img:not([fetchpriority="high"])');
      
      allImages.forEach(img => {
        // Add loading="lazy" attribute to all other images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Set explicit dimensions if missing
        const imgElement = img as HTMLImageElement;
        if (!imgElement.getAttribute('width') && !imgElement.getAttribute('height')) {
          // Set default dimensions or use natural dimensions if available
          if (imgElement.naturalWidth && imgElement.naturalHeight) {
            imgElement.width = imgElement.naturalWidth;
            imgElement.height = imgElement.naturalHeight;
          } else {
            // Set defaults based on image type
            if (imgElement.src.includes('logo')) {
              imgElement.width = 150;
              imgElement.height = 40;
            } else {
              imgElement.width = 300;
              imgElement.height = 200;
            }
          }
          
          // Set aspect ratio
          imgElement.style.aspectRatio = imgElement.width && imgElement.height 
            ? `${imgElement.width} / ${imgElement.height}` 
            : '3/2';
        }
      });
    };
    
    // Call the function after a short delay to ensure DOM is fully loaded
    const lazyLoadTimer = setTimeout(lazyLoadImages, 100);
    
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
    
    const linkTimer = setTimeout(handleLinkClicks, 300);
    
    return () => {
      clearTimeout(lazyLoadTimer);
      clearTimeout(linkTimer);
    };
  }, [navigate]);

  return (
    <>
      <div id="products" className="min-h-[400px]">
        <FadeInUp delay={staggered[0]}>
          <Products />
        </FadeInUp>
      </div>
      <div id="optical" className="min-h-[300px]">
        <FadeInUp delay={staggered[1]}>
          <OpticalServices />
        </FadeInUp>
      </div>
      <div id="audiology" className="min-h-[300px]">
        <FadeInUp delay={staggered[2]}>
          <Audiology />
        </FadeInUp>
        <div className="container mx-auto px-4 mt-4 text-center">
          <Link to="/services/audiologia-centro" className="text-[#55afa9] hover:underline">
            {content.audiologyLink[language as keyof typeof content.audiologyLink]}
          </Link>
        </div>
      </div>
      <div id="testimonials" className="min-h-[400px]">
        <FadeInUp delay={staggered[3]}>
          <Testimonials />
        </FadeInUp>
      </div>
      <div id="brands" className="min-h-[200px]">
        <FadeInUp delay={staggered[4]}>
          <Brands />
        </FadeInUp>
      </div>
      <div id="contact" className="min-h-[400px]">
        <FadeInUp delay={staggered[5]}>
          <StoreLocation />
        </FadeInUp>
      </div>
    </>
  );
};

const Index = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  // Content organized by section first, then by language
  const content = {
    meta: {
      en: {
        title: "Looptica - Optical and Audiology Services in Barcelona Poblenou | Glasses, Contact Lenses, and Hearing Aids",
        description: "Specialized center for optical and audiological services in Barcelona Poblenou. We offer eye exams, prescription glasses, contact lenses, hearing tests, hearing loss treatment, and high-quality digital hearing aids.",
        keywords: "optical, audiology, eyeglasses, contactLenses, hearingAids, barcelona, poblenou, audiology barcelona poblenou, hearing aids barcelona poblenou, hearing loss, hearing test barcelona poblenou, clinical audiology barcelona poblenou, hearing center barcelona poblenou"
      },
      es: {
        title: "Looptica - Óptica y Audiología en Barcelona Poblenou | Gafas, Lentillas y Audífonos",
        description: "Centro especializado en servicios ópticos y audiológicos en Barcelona Poblenou. Ofrecemos exámenes visuales, gafas graduadas, lentillas, pruebas auditivas, tratamiento de pérdida auditiva y audífonos digitales de alta calidad.",
        keywords: "optical, audiology, eyeglasses, contactLenses, hearingAids, barcelona, poblenou, audiología barcelona poblenou, audífonos barcelona poblenou, pérdida auditiva, prueba auditiva barcelona poblenou, audiología clínica barcelona poblenou, centro auditivo barcelona poblenou"
      },
      ca: {
        title: "Looptica - Òptica i Audiologia a Barcelona Poblenou | Ulleres, Lents de Contacte i Audiòfons",
        description: "Centre especialitzat en serveis òptics i audiològics a Barcelona Poblenou. Oferim exàmens visuals, ulleres graduades, lents de contacte, proves auditives, tractament de pèrdua auditiva i audiòfons d'alta qualitat.",
        keywords: "optical, audiology, eyeglasses, contactLenses, hearingAids, barcelona, poblenou, audiologia barcelona poblenou, audiòfons barcelona poblenou, pèrdua auditiva, prova auditiva barcelona poblenou, audiologia clínica barcelona poblenou, centre auditiu barcelona poblenou"
      }
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
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set minimum heights for page sections to prevent layout shifts
    document.documentElement.style.setProperty('--min-footer-height', '520px');
    
    // Log to check if component is mounting correctly
    console.log("Index component mounted");
  }, []);

  return (
    <>
      <Helmet>
        <title>{content.meta[language as keyof typeof content.meta].title}</title>
        <meta name="description" content={content.meta[language as keyof typeof content.meta].description} />
        <meta name="keywords" content={content.meta[language as keyof typeof content.meta].keywords} />
        <link rel="canonical" href="https://www.looptica.com/" />
        <meta property="og:title" content={content.meta[language as keyof typeof content.meta].title} />
        <meta property="og:description" content={content.meta[language as keyof typeof content.meta].description} />
        <meta property="og:url" content="https://www.looptica.com/" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/poppins/Poppins-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/poppins/Poppins-Medium.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/poppins/Poppins-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </Helmet>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Hero />
          <SeoContent language={language} />
          <DeferredContent />
        </main>
        <Footer />
        <FloatingWhatsApp 
          phoneNumber="34699594064"
          accountName="Looptica"
          statusMessage={content.whatsapp.statusMessage[language as keyof typeof content.whatsapp.statusMessage]}
          chatMessage={content.whatsapp.chatMessage[language as keyof typeof content.whatsapp.chatMessage]}
          placeholder={content.whatsapp.placeholder[language as keyof typeof content.whatsapp.placeholder]}
        />
      </div>
    </>
  );
};

export default Index;
