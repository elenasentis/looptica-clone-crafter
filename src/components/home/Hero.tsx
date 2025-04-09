
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
        backgroundImage: "url('/images/DSC4608.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      {/* Semi-transparent overlay with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/30"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* Hero Text and CTA */}
        <div className="order-2 lg:order-1">
          <ScrollReveal origin="left" delay={100}>
            <div className="glass px-8 py-10 rounded-xl shadow-md w-[80%]">
              <h1 className="text-balance font-bold text-4xl sm:text-5xl lg:text-5xl leading-tight mb-6 text-gray-900 drop-shadow-sm">
                {t('heroTitle')}
              </h1>
              
              <p className="text-gray-800 text-lg mb-8 max-w-xl text-balance drop-shadow-sm">
                {t('heroDescription')}
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <GoogleCalendarButton 
                  size="lg" 
                  className="group bg-[#55afa9] hover:bg-[#ca6664] text-white"
                >
                  {t('demanaCita')}
                </GoogleCalendarButton>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#55afa9] text-[#55afa9] hover:bg-[#55afa9]/10"
                >
                  {t('viewCollection')}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
