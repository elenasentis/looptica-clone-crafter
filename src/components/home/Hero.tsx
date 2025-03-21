
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      className="relative min-h-[80vh] flex items-center pt-24 pb-16 px-6 lg:px-12 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/DSC4608.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* Hero Text and CTA */}
        <div className="order-2 lg:order-1">
          <ScrollReveal origin="left" delay={100}>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#2ecc71]/20 text-white mb-6">
              {t('premiumEyewear')}
            </span>
          </ScrollReveal>
          
          <ScrollReveal origin="left" delay={300}>
            <h1 className="text-balance font-bold text-4xl sm:text-5xl lg:text-5xl leading-tight mb-6 text-white">
              {t('heroTitle')}
            </h1>
          </ScrollReveal>
          
          <ScrollReveal origin="left" delay={500}>
            <p className="text-white text-lg mb-8 max-w-xl text-balance">
              {t('heroDescription')}
            </p>
          </ScrollReveal>
          
          <ScrollReveal origin="left" delay={700}>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="group bg-[#2ecc71] hover:bg-[#ea384c] text-white"
              >
                {t('shopNow')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <GoogleCalendarButton 
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
        
        {/* Hero Image/Content for right side can remain empty to show the background image */}
        <div className="order-1 lg:order-2 relative">
          <ScrollReveal 
            origin="right"
            delay={200}
            className="relative z-10"
          >
            <div className="glass rounded-lg p-6 shadow-xl backdrop-blur-md bg-white/10">
              <h3 className="text-white text-xl font-medium mb-4">{t('visitUs')}</h3>
              <p className="text-white mb-2">Looptica</p>
              <p className="text-white mb-2">Costa Brava, Spain</p>
              <p className="text-white mb-6">Mon-Sat: 9AM - 6PM</p>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                {t('directionsToStore')}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
