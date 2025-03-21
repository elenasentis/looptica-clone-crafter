
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
        backgroundImage: "url('/lovable-uploads/9dd69907-0360-4891-b4ce-43b47bee75b4.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* Hero Text and CTA */}
        <div className="order-2 lg:order-1">
          <ScrollReveal origin="left" delay={100}>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#2ecc71]/10 text-[#2ecc71] mb-6">
              {t('premiumEyewear')}
            </span>
          </ScrollReveal>
          
          <ScrollReveal origin="left" delay={300}>
            <h1 className="text-balance font-bold text-4xl sm:text-5xl lg:text-5xl leading-tight mb-6 text-gray-900">
              {t('heroTitle')}
            </h1>
          </ScrollReveal>
          
          <ScrollReveal origin="left" delay={500}>
            <p className="text-gray-600 text-lg mb-8 max-w-xl text-balance">
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
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71]/10"
              >
                {t('viewCollection')}
              </Button>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Hero Image */}
        <div className="order-1 lg:order-2 relative">
          <ScrollReveal 
            origin="right"
            delay={200}
            className="relative z-10"
          >
            <div className="relative aspect-[4/3] max-w-xl mx-auto overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/10 to-[#2ecc71]/5 mix-blend-overlay"></div>
              <img 
                src="/images/hero-eyewear.jpg" 
                alt="Looptica - Serveis auditius i visuals"
                className="w-full h-full object-cover scale-up-center"
              />
            </div>
          </ScrollReveal>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#e6faea] rounded-full blur-3xl"></div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#e6faea] rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
