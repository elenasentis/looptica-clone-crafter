
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui';
import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Dynamic navigation sections with translations
  const getFooterLinks = () => {
    return [
      {
        title: language === 'en' ? 'Visual Services' : (language === 'es' ? 'Servicios Visuales' : 'Serveis Visuals'),
        links: [
          { name: t('eyeglasses'), path: '/services/eyeglasses' },
          { name: t('sunglasses'), path: '/services/sunglasses' },
          { name: t('contactLenses'), path: '/services/contact-lenses' },
          { name: t('visualHealth'), path: '/services/salut-visual' },
        ],
      },
      {
        title: language === 'en' ? 'Auditory Services' : (language === 'es' ? 'Servicios Auditivos' : 'Serveis Auditius'),
        links: [
          { name: t('hearingTest'), path: '/services/hearing-test' },
          { name: t('hearingAids'), path: '/services/hearing-aids' },
          { name: t('tinnitusTreatment'), path: '/services/tinnitus-treatment' },
          { name: t('customEarProtection'), path: '/services/ear-protection' },
        ],
      },
      {
        title: language === 'en' ? 'Support' : (language === 'es' ? 'Soporte' : 'Suport'),
        links: [
          { name: t('contact'), path: '/#contact' },
          { name: t('shopNow'), path: 'https://api.whatsapp.com/send?phone=34699594064' },
          { name: language === 'en' ? 'FAQ' : (language === 'es' ? 'Preguntas frecuentes' : 'Preguntes freqüents'), path: '/about' },
          { name: language === 'en' ? 'Where we are' : (language === 'es' ? 'Dónde estamos' : 'On som'), path: '/#contact' },
        ],
      },
    ];
  };

  const footerLinks = getFooterLinks();
  
  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, path: 'https://instagram.com' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, path: 'https://twitter.com' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, path: 'https://facebook.com' },
  ];

  // Helper function to handle navigation links
  const renderLink = (link) => {
    if (link.path.startsWith('http')) {
      return (
        <a
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#009fe3] transition-colors duration-200"
        >
          {link.name}
        </a>
      );
    } else if (link.path.startsWith('/#')) {
      return (
        <a
          href={link.path}
          className="text-gray-300 hover:text-[#009fe3] transition-colors duration-200"
        >
          {link.name}
        </a>
      );
    } else {
      return (
        <Link
          to={link.path}
          className="text-gray-300 hover:text-[#009fe3] transition-colors duration-200"
        >
          {link.name}
        </Link>
      );
    }
  };

  return (
    <footer className="bg-[#1a2b3c] text-white pt-20 pb-10 px-6 lg:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <Link to="/" className="mb-6 inline-block">
                <img 
                  src="/images/looptica_logo_text.png" 
                  alt="Looptica" 
                  className="h-10 mb-6 filter brightness-0 invert"
                  style={{ objectFit: 'contain' }}
                />
              </Link>
              <p className="text-gray-300 mb-6 max-w-xs">
                {language === 'en' 
                  ? 'High-quality visual and auditory solutions for those who value professionalism and good service.' 
                  : (language === 'es' 
                    ? 'Soluciones visuales y auditivas de alta calidad para quienes valoran la profesionalidad y el buen servicio.'
                    : 'Solucions visuals i auditives d\'alta qualitat per a aquells que valoren la professionalitat i el bon servei.')}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#009fe3] text-gray-300 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((footerSection) => (
              <div key={footerSection.title}>
                <h4 className="font-medium text-lg mb-6 text-white">{footerSection.title}</h4>
                <ul className="space-y-3">
                  {footerSection.links.map((link) => (
                    <li key={link.name}>
                      {renderLink(link)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div>
              <h4 className="font-medium text-lg mb-6 text-white">
                {language === 'en' ? 'Contact Us' : (language === 'es' ? 'Contáctanos' : 'Contacta\'ns')}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#009fe3] mr-3 mt-1 flex-shrink-0" />
                  <a 
                    href="https://www.google.com/maps/place/Looptica/@41.4021089,2.1998793,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a3566fc30311:0x8c05934a5849fa40!8m2!3d41.4021049!4d2.2024542!16s%2Fg%2F11j7mvvp2p?entry=ttu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#009fe3]"
                  >
                    Rambla del Poblenou, 48, 08005 Barcelona
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-[#009fe3] mr-3 flex-shrink-0" />
                  <a href="tel:+34933009064" className="text-gray-300 hover:text-[#009fe3]">933 00 90 64</a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-[#009fe3] mr-3 flex-shrink-0" />
                  <a href="tel:+34699594064" className="text-gray-300 hover:text-[#009fe3]">699 59 40 64</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-[#009fe3] mr-3 flex-shrink-0" />
                  <a href="mailto:info@looptica.com" className="text-gray-300 hover:text-[#009fe3]">info@looptica.com</a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal>
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">
                © {currentYear} Looptica. {language === 'en' ? 'All rights reserved.' : (language === 'es' ? 'Todos los derechos reservados.' : 'Tots els drets reservats.')}
              </p>

              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="/about" className="hover:text-[#009fe3] transition-colors duration-200">
                  {language === 'en' ? 'Privacy Policy' : (language === 'es' ? 'Política de Privacidad' : 'Política de Privacitat')}
                </a>
                <a href="/about" className="hover:text-[#009fe3] transition-colors duration-200">
                  {language === 'en' ? 'Terms & Conditions' : (language === 'es' ? 'Términos y Condiciones' : 'Termes i Condicions')}
                </a>
                <a href="/about" className="hover:text-[#009fe3] transition-colors duration-200">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
