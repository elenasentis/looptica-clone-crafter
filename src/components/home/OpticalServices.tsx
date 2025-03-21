
import React from 'react';
import { Eye, Contact, Moon, User, Glasses, Sun } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { useLanguage } from '@/contexts/LanguageContext';

const OpticalServices = () => {
  const { t } = useLanguage();

  const opticalServices = [
    {
      icon: <Eye className="w-10 h-10 text-[#2ecc71]" />,
      title: t('visualHealth'),
      description: t('visualHealthDesc'),
      image: "/images/optical/eye-exam.jpg"
    },
    {
      icon: <Contact className="w-10 h-10 text-[#2ecc71]" />,
      title: t('contactLenses'),
      description: t('contactLensesDesc'),
      image: "/images/optical/contact-lenses.jpg"
    },
    {
      icon: <Moon className="w-10 h-10 text-[#2ecc71]" />,
      title: t('orthoK'),
      description: t('orthoKDesc'),
      image: "/images/optical/orthokeratology.jpg"
    },
    {
      icon: <User className="w-10 h-10 text-[#2ecc71]" />,
      title: t('imageConsulting'),
      description: t('imageConsultingDesc'),
      image: "/images/optical/style-consultation.jpg"
    },
    {
      icon: <Glasses className="w-10 h-10 text-[#2ecc71]" />,
      title: t('lensConsulting'),
      description: t('lensConsultingDesc'),
      image: "/images/optical/lens-consultation.jpg"
    },
    {
      icon: <Sun className="w-10 h-10 text-[#2ecc71]" />,
      title: t('sunglassesService'),
      description: t('sunglassesServiceDesc'),
      image: "/images/optical/sunglasses.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white" id="optical">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#2ecc71]/10 text-[#2ecc71] mb-4">
              {t('opticalServices')}
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">{t('visualCare')}</h2>
            <div className="w-16 h-1 bg-[#2ecc71] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t('opticalDescription')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {opticalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
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
              subject="Vision Consultation at Looptica"
              description="Appointment for optical services at Looptica"
              durationMinutes={30}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OpticalServices;
