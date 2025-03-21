
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const StoreLocation = () => {
  const { t } = useLanguage();
  
  return (
    <section id="location" className="py-16 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal origin="bottom" delay={100}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#009fe3]/10 text-[#009fe3] mb-3">
              {t('findUs')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('visitOurStore')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('storeLocationDesc')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <ScrollReveal origin="left" delay={200} className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video w-full h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.893377118043!2d2.199467876537629!3d41.40407997123361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a304a4f9f277%3A0xa9f94c3242d7f6e4!2sRambla%20del%20Poblenou%2C%2048%2C%20Sant%20Mart%C3%AD%2C%2008005%20Barcelona!5e0!3m2!1sen!2ses!4v1683630742712!5m2!1sen!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Looptica Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </ScrollReveal>
          
          <ScrollReveal origin="right" delay={300} className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Looptica</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#009fe3] mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('address')}</h4>
                  <p className="text-gray-600">
                    Rambla del Poblenou, 48<br />
                    Sant Martí, 08005 Barcelona
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-[#009fe3] mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('openingHours')}</h4>
                  <p className="text-gray-600">
                    {t('mondayFriday')}: 9:30 - 13:30, 16:30 - 20:00<br />
                    {t('saturday')}: 10:00 - 13:30<br />
                    {t('sunday')}: {t('closed')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-[#009fe3] mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact')}</h4>
                  <p className="text-gray-600">
                    Tel: <a href="tel:+34699594064" className="hover:text-[#009fe3]">+34 699 59 40 64</a><br />
                    Email: <a href="mailto:info@looptica.com" className="hover:text-[#009fe3]">info@looptica.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="h-5 w-5 text-[#009fe3] mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">
                    <a 
                      href="https://wa.me/34699594064" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#009fe3]"
                    >
                      +34 699 59 40 64
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.google.com/maps/place/Rambla+del+Poblenou,+48,+Sant+Mart%C3%AD,+08005+Barcelona/@41.4040799,2.1994679,17z/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-[#009fe3] hover:bg-[#0082b8] text-white py-3 px-4 rounded-md inline-flex items-center justify-center font-medium transition-colors"
              >
                {t('getDirections')}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              
              <a 
                href="https://wa.me/34699594064" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-4 rounded-md inline-flex items-center justify-center font-medium transition-colors"
              >
                WhatsApp
                <MessageCircle className="ml-2 w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
