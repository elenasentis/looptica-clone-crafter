
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  accountName: string;
  statusMessage: string;
  chatMessage: string;
  placeholder: string;
}

const FloatingWhatsApp = ({
  phoneNumber,
  accountName,
  statusMessage,
  chatMessage,
  placeholder
}: FloatingWhatsAppProps) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Hide/show button based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up - show
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed top-1/2 right-6 transform -translate-y-1/2 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#128C7E] hover:scale-110 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
      }`}
      aria-label={t('contactViaWhatsApp')}
      title={`${chatMessage} - ${accountName}`}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsApp;
