
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center px-6 lg:px-12 pt-20"
      style={{
        backgroundImage: 'url("/lovable-uploads/1dc38382-e9ef-4392-bc74-aeee7b9a5bc2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
      {/* Content */}
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)]">
            <span className="inline-block text-[#009fe3]">{t('premiumEyewear')}</span><br/>
            {t('heroTitle')}
          </h1>
          
          <p className="text-lg mb-10 [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)]">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#products" onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('products');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              <Button 
                size="lg" 
                className="bg-[#009fe3] hover:bg-[#0082b8] text-white"
              >
                {t('viewCollection')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white hover:bg-white/10 border-white"
              >
                {t('contact')}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
