
import React from 'react';
import { Headphones, Ear, Shield, Volume2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Audiology = () => {
  const { t, language } = useLanguage();

  const audiologyServices = [
    {
      icon: <Ear className="w-10 h-10 text-[#55afa9]" />,
      title: t('hearingTest'),
      description: t('hearingTestDesc'),
      image: "/lovable-uploads/c909c154-63bb-4632-af13-9e1825237aaa.png",
      link: "/services/hearing-test"
    },
    {
      icon: <Headphones className="w-10 h-10 text-[#55afa9]" />,
      title: t('hearingAids'),
      description: t('hearingAidsDesc'),
      image: "/lovable-uploads/b5661196-c8c2-4fad-9207-094e65ba3642.png",
      link: "/services/hearing-aids"
    },
    {
      icon: <Volume2 className="w-10 h-10 text-[#55afa9]" />,
      title: t('tinnitusTreatment'),
      description: t('tinnitusDesc'),
      image: "/lovable-uploads/b5661196-c8c2-4fad-9207-094e65ba3642.png",
      link: "/services/tinnitus-treatment"
    },
    {
      icon: <Shield className="w-10 h-10 text-[#55afa9]" />,
      title: t('customEarProtection'),
      description: t('earProtectionDesc'),
      image: "/lovable-uploads/58f8dffc-9095-4ff8-a7d3-4aa204a74b55.png",
      link: "/services/ear-protection"
    }
  ];

  // Add SEO text based on language with Poblenou references
  const getSeoText = () => {
    if (language === 'es') {
      return (
        <div className="sr-only">
          <h2>Centro de Audiología en Barcelona Poblenou</h2>
          <p>
            En Looptica ofrecemos servicios completos de audiología en Barcelona Poblenou, 
            incluyendo pruebas auditivas profesionales, tratamiento de pérdida auditiva, 
            adaptación de audífonos digitales, audiometría Barcelona Poblenou y soluciones para acúfenos. 
            Nuestro centro auditivo en Barcelona Poblenou cuenta con audiología clínica de alta calidad y 
            especialistas en audiología pediátrica.
          </p>
        </div>
      );
    } else if (language === 'ca') {
      return (
        <div className="sr-only">
          <h2>Centre d'Audiologia a Barcelona Poblenou</h2>
          <p>
            A Looptica oferim serveis complets d'audiologia a Barcelona Poblenou, 
            incloent proves auditives professionals, tractament de pèrdua auditiva, 
            adaptació d'audiòfons digitals, audiometria Barcelona Poblenou i solucions per a acúfens. 
            El nostre centre auditiu a Barcelona Poblenou compta amb audiologia clínica d'alta qualitat i 
            especialistes en audiologia pediàtrica.
          </p>
        </div>
      );
    } else {
      return (
        <div className="sr-only">
          <h2>Audiology Center in Barcelona Poblenou</h2>
          <p>
            At Looptica we offer comprehensive audiology services in Barcelona Poblenou, 
            including professional hearing tests, hearing loss treatment, 
            digital hearing aids fitting, audiometry Barcelona Poblenou and tinnitus solutions. 
            Our hearing center in Barcelona Poblenou features high-quality clinical audiology and 
            specialists in pediatric audiology.
          </p>
        </div>
      );
    }
  };

  return (
    <section className="py-16 bg-[#f7f7f7]" id="audiology">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#55afa9]/10 text-[#55afa9] mb-3">
              {t('audiologyServices')}
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">{t('hearingCare')}</h2>
            <div className="w-16 h-1 bg-[#55afa9] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('audiologyDescription')}
            </p>
          </div>
        </ScrollReveal>

        {getSeoText()}

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {audiologyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden h-full">
                <Link to={service.link} className="w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    onError={(e) => {
                      console.error(`Failed to load image: ${service.image}`);
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </Link>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link to={service.link} className="mt-auto">
                    <Button variant="outline" size="sm" className="border-[#55afa9] text-[#55afa9] hover:bg-[#55afa9]/10">
                      {t('viewDetails')}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <GoogleCalendarButton 
              size="lg" 
              className="bg-[#55afa9] hover:bg-[#ca6664] text-white"
              subject={language === 'es' ? "Consulta de Audiología en Looptica Barcelona Poblenou" : 
                       language === 'ca' ? "Consulta d'Audiologia a Looptica Barcelona Poblenou" : 
                       "Audiology Consultation at Looptica Barcelona Poblenou"}
              description={language === 'es' ? "Cita para servicios de audiología en Looptica - Centro de audiología en Barcelona Poblenou" : 
                          language === 'ca' ? "Cita per a serveis d'audiologia a Looptica - Centre d'audiologia a Barcelona Poblenou" : 
                          "Appointment for audiology services at Looptica - Audiology center in Barcelona Poblenou"}
              durationMinutes={45}
            >
              {t('demanaCita')}
            </GoogleCalendarButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Audiology;
