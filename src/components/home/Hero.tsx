
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

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
            <div className="glass px-8 py-10 rounded-xl shadow-md max-w-xl -mr-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#2ecc71]/10 text-[#2ecc71] mb-6">
                {t('premiumEyewear')}
              </span>
              
              <h1 className="text-balance font-bold text-4xl sm:text-5xl lg:text-5xl leading-tight mb-6 text-gray-900 drop-shadow-sm">
                {t('heroTitle')}
              </h1>
              
              <p className="text-gray-800 text-lg mb-8 max-w-xl text-balance drop-shadow-sm">
                {t('heroDescription')}
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg" 
                  className="group bg-[#2ecc71] hover:bg-[#ea384c] text-white"
                >
                  {t('shopNow')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71]/10"
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
