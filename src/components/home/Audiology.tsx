
import React from 'react';
import { Headphones, Ear, Shield, Volume2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Audiology = () => {
  const { t } = useLanguage();

  const audiologyServices = [
    {
      icon: <Ear className="w-10 h-10 text-[#2ecc71]" />,
      title: t('hearingTest'),
      description: t('hearingTestDesc'),
      image: "/lovable-uploads/c909c154-63bb-4632-af13-9e1825237aaa.png",
      link: "/services/hearing-test"
    },
    {
      icon: <Headphones className="w-10 h-10 text-[#2ecc71]" />,
      title: t('hearingAids'),
      description: t('hearingAidsDesc'),
      image: "/lovable-uploads/ebf49fd8-a596-41fb-a71e-097837111d0d.png",
      link: "/services/hearing-aids"
    },
    {
      icon: <Volume2 className="w-10 h-10 text-[#2ecc71]" />,
      title: t('tinnitusTreatment'),
      description: t('tinnitusDesc'),
      image: "/lovable-uploads/b5661196-c8c2-4fad-9207-094e65ba3642.png",
      link: "/services/tinnitus-treatment"
    },
    {
      icon: <Shield className="w-10 h-10 text-[#2ecc71]" />,
      title: t('customEarProtection'),
      description: t('earProtectionDesc'),
      image: "/lovable-uploads/58f8dffc-9095-4ff8-a7d3-4aa204a74b55.png",
      link: "/services/ear-protection"
    }
  ];

  return (
    <section className="py-16 bg-[#f7f7f7]" id="audiology">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#2ecc71]/10 text-[#2ecc71] mb-3">
              {t('audiologyServices')}
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">{t('hearingCare')}</h2>
            <div className="w-16 h-1 bg-[#2ecc71] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('audiologyDescription')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {audiologyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden h-full">
                <Link to={service.link} className="w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </Link>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link to={service.link} className="mt-auto">
                    <Button variant="outline" size="sm" className="border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71]/10">
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
              className="bg-[#2ecc71] hover:bg-[#ea384c] text-white"
              subject="Hearing Consultation at Looptica"
              description="Appointment for hearing services at Looptica"
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
