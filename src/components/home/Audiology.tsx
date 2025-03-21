
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { Headphones, Ear, Shield, Volume2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Audiology = () => {
  const { t } = useLanguage();

  const audiologyServices = [
    {
      icon: <Ear className="w-10 h-10 text-primary" />,
      title: t('hearingTest'),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <Headphones className="w-10 h-10 text-primary" />,
      title: t('hearingAids'),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <Volume2 className="w-10 h-10 text-primary" />,
      title: t('tinnitusTreatment'),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: t('customEarProtection'),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{t('audiologyServices')}</h2>
            <h3 className="text-xl text-gray-600 mb-4">{t('hearingCare')}</h3>
            <p className="max-w-2xl mx-auto text-gray-500">
              {t('audiologyDescription')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {audiologyServices.map((service, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              {t('scheduleConsultation')}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Audiology;
