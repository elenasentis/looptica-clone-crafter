
import React from 'react';
import { Ear, HeadphonesIcon, Zap, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Audiology = () => {
  const { t } = useLanguage();

  const audiologyServices = [
    {
      icon: <Ear className="w-10 h-10 text-[#55afa9]" />,
      title: t('hearingTest'),
      description: t('hearingTestDesc'),
      image: "/images/oticonopnscoupleincitymg9377300dpicoticon2.jpg",
      path: "/services/hearing-test"
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10 text-[#55afa9]" />,
      title: t('hearingAids'),
      description: t('hearingAidsDesc'),
      image: "/images/oticon_xceed_connectivity_iphone_x_nds_199359.jpg",
      path: "/services/hearing-aids"
    },
    {
      icon: <Zap className="w-10 h-10 text-[#55afa9]" />,
      title: t('technicalAids'),
      description: t('technicalAidsDesc'),
      image: "/images/oticon_act_key_visual_woman_in-anechoic_chamber_as_453913390_as_190510297.jpg",
      path: "/services/technical-aids"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#55afa9]" />,
      title: t('customEarProtection'),
      description: t('earProtectionDesc'),
      image: "/lovable-uploads/3e7cc4b1-38d3-4374-ad90-9b7aff598cf4.png",
      path: "/services/ear-protection"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="audiology">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#55afa9]/10 text-[#55afa9] mb-4">
              {t('audiologyServices')}
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">{t('hearingCare')}</h2>
            <div className="w-16 h-1 bg-[#55afa9] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t('audiologyDescription')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {audiologyServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <Link to={service.path} className="w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    loading="lazy"
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
                  <Link to={service.path} className="mt-auto">
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
            <Button asChild size="lg" className="bg-[#55afa9] hover:bg-[#ca6664] text-white">
              <Link to="/services/audiologia-centro">
                {t('scheduleConsultation')}
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Audiology;
