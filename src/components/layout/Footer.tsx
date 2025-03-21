
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
          { name: t('eyeglasses'), path: '#' },
          { name: t('sunglasses'), path: '#' },
          { name: t('contactLenses'), path: '#' },
          { name: t('visualHealth'), path: '#' },
        ],
      },
      {
        title: language === 'en' ? 'Auditory Services' : (language === 'es' ? 'Servicios Auditivos' : 'Serveis Auditius'),
        links: [
          { name: t('hearingTest'), path: '#' },
          { name: t('hearingAids'), path: '#' },
          { name: t('tinnitusTreatment'), path: '#' },
          { name: t('customEarProtection'), path: '#' },
        ],
      },
      {
        title: language === 'en' ? 'Support' : (language === 'es' ? 'Soporte' : 'Suport'),
        links: [
          { name: t('contact'), path: '#' },
          { name: t('shopNow'), path: '#' },
          { name: language === 'en' ? 'FAQ' : (language === 'es' ? 'Preguntas frecuentes' : 'Preguntes freqüents'), path: '#' },
          { name: language === 'en' ? 'Where we are' : (language === 'es' ? 'Dónde estamos' : 'On som'), path: '#' },
        ],
      },
    ];
  };

  const footerLinks = getFooterLinks();
  
  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, path: '#' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, path: '#' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, path: '#' },
  ];

  return (
    <footer className="bg-[#1a2b3c] text-white pt-20 pb-10 px-6 lg:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <Link to="/" className="text-2xl font-bold mb-6 inline-block text-[#009fe3]">
                Looptica
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
                      <a
                        href={link.path}
                        className="text-gray-300 hover:text-[#009fe3] transition-colors duration-200"
                      >
                        {link.name}
                      </a>
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
                  <span className="text-gray-300">Rambla del Poblenou, 48, 08005 Barcelona</span>
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
                <a href="#" className="hover:text-[#009fe3] transition-colors duration-200">
                  {language === 'en' ? 'Privacy Policy' : (language === 'es' ? 'Política de Privacidad' : 'Política de Privacitat')}
                </a>
                <a href="#" className="hover:text-[#009fe3] transition-colors duration-200">
                  {language === 'en' ? 'Terms & Conditions' : (language === 'es' ? 'Términos y Condiciones' : 'Termes i Condicions')}
                </a>
                <a href="#" className="hover:text-[#009fe3] transition-colors duration-200">
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
