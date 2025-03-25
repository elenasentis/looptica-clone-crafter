
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  image: string;
  appointmentSubject?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  children,
  title,
  subtitle,
  image,
  appointmentSubject = 'Looptica Consultation',
}) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section 
          className="relative h-[50vh] flex items-center justify-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {children}
            
            {/* Appointment CTA */}
            <ScrollReveal>
              <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">{t('readyToSchedule')}</h3>
                <p className="text-gray-600 mb-6">{t('scheduleDescription')}</p>
                <GoogleCalendarButton
                  subject={appointmentSubject}
                  description={`Appointment for ${title} at Looptica`}
                  className="mx-auto"
                >
                  {t('demanaCita')}
                </GoogleCalendarButton>
              </div>
            </ScrollReveal>
          </div>
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
  );
};

export default ServiceLayout;
