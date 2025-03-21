
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui';
import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Serveis Visuals',
      links: [
        { name: 'Ulleres graduades', path: '#' },
        { name: 'Ulleres de sol', path: '#' },
        { name: 'Lents de contacte', path: '#' },
        { name: 'Salut visual', path: '#' },
      ],
    },
    {
      title: 'Serveis Auditius',
      links: [
        { name: 'Revisions auditives', path: '#' },
        { name: 'Audiòfons', path: '#' },
        { name: 'Tractament d\'acúfens', path: '#' },
        { name: 'Protecció auditiva', path: '#' },
      ],
    },
    {
      title: 'Suport',
      links: [
        { name: 'Contacte', path: '#' },
        { name: 'Demana cita', path: '#' },
        { name: 'Preguntes freqüents', path: '#' },
        { name: 'On som', path: '#' },
      ],
    },
  ];

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
                Solucions visuals i auditives d'alta qualitat per a aquells que valoren la professionalitat i el bon servei.
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
              <h4 className="font-medium text-lg mb-6 text-white">Contacta'ns</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#009fe3] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Avinguda Francesc Macià, 40, 08226 Terrassa, Barcelona</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-[#009fe3] mr-3 flex-shrink-0" />
                  <a href="tel:+34936750014" className="text-gray-300 hover:text-[#009fe3]">936 750 014</a>
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
                © {currentYear} Looptica. Tots els drets reservats.
              </p>

              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#009fe3] transition-colors duration-200">
                  Política de Privacitat
                </a>
                <a href="#" className="hover:text-[#009fe3] transition-colors duration-200">
                  Termes i Condicions
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
