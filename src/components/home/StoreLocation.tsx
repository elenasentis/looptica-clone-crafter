
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, Clock, Phone } from 'lucide-react';

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
                src="https://www.google.com/maps/embed?pb=!4v1700156625797!6m8!1m7!1sCAoSLEFGMVFpcE5yYVJTeW1jMHhlWFM5Z0x5V0wtODNmTTU2LW5NZnppbFVxT2g0!2m2!1d41.3931178!2d2.1468419!3f200!4f0!5f0.7820865974627469" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Looptica 3D View"
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
                    Carrer de Mallorca, 337<br />
                    08037 Barcelona
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
                    Tel: <a href="tel:+34932074782" className="hover:text-[#009fe3]">+34 932 07 47 82</a><br />
                    Email: <a href="mailto:info@looptica.com" className="hover:text-[#009fe3]">info@looptica.com</a>
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/place/Looptica+%7C+Serveis+Auditius+i+Visuals/@41.3930758,2.1446575,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a28cbbbb15b3:0x517092a7c9713ea9!8m2!3d41.3930758!4d2.1472324!16s%2Fg%2F1ptxk8j7t?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 w-full bg-[#009fe3] hover:bg-[#0082b8] text-white py-3 px-4 rounded-md inline-flex items-center justify-center font-medium transition-colors"
            >
              {t('getDirections')}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
