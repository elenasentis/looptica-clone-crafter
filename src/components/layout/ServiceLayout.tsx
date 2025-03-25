
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
  const { t, language } = useLanguage();

  // Translations for WhatsApp component
  const whatsappText = {
    statusMessage: {
      en: "Typically replies within 1 hour",
      es: "Normalmente responde en 1 hora",
      ca: "Normalment respon en 1 hora",
    },
    chatMessage: {
      en: "Hola! 👋🏼 How can we help you?",
      es: "Hola! 👋🏼 ¿Cómo podemos ayudarte?",
      ca: "Hola! 👋🏼 Com podem ajudar-te?",
    },
    placeholder: {
      en: "Type a message...",
      es: "Escribe un mensaje...",
      ca: "Escriu un missatge...",
    },
  };

  // Translations for CTA section
  const ctaContent = {
    readyToSchedule: {
      en: "Ready to Schedule Your Appointment?",
      es: "¿Listo para Programar su Cita?",
      ca: "Preparat per Programar la Seva Cita?",
    },
    scheduleDescription: {
      en: "Book your appointment today to experience our personalized service and expert care.",
      es: "Reserve su cita hoy para experimentar nuestro servicio personalizado y atención experta.",
      ca: "Reservi la seva cita avui per experimentar el nostre servei personalitzat i atenció experta.",
    },
    buttonText: {
      en: "Schedule Appointment",
      es: "Programar Cita",
      ca: "Programar Cita",
    },
  };

  // Add error handling for the image
  const handleImageError = (e: React.SyntheticEvent<HTMLElement, Event>) => {
    const imgElement = e.target as HTMLImageElement;
    imgElement.src = '/placeholder.svg';
    imgElement.style.filter = 'blur(8px)';
    imgElement.style.opacity = '0.8';
  };

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
          onError={handleImageError}
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
                <h3 className="text-2xl font-semibold mb-4">{ctaContent.readyToSchedule[language]}</h3>
                <p className="text-gray-600 mb-6">{ctaContent.scheduleDescription[language]}</p>
                <GoogleCalendarButton
                  subject={appointmentSubject}
                  description={`Appointment for ${title} at Looptica`}
                  className="mx-auto"
                >
                  {ctaContent.buttonText[language]}
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
        statusMessage={whatsappText.statusMessage[language]}
        chatMessage={whatsappText.chatMessage[language]}
        placeholder={whatsappText.placeholder[language]}
      />
    </div>
  );
};

export default ServiceLayout;
