
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Glasses', path: '#' },
        { name: 'Sunglasses', path: '#' },
        { name: 'Accessories', path: '#' },
        { name: 'New Arrivals', path: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '#' },
        { name: 'Careers', path: '#' },
        { name: 'Press', path: '#' },
        { name: 'Sustainability', path: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '#' },
        { name: 'FAQs', path: '#' },
        { name: 'Shipping', path: '#' },
        { name: 'Returns', path: '#' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, path: '#' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, path: '#' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, path: '#' },
  ];

  return (
    <footer className="bg-background pt-20 pb-10 px-6 lg:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <Link to="/" className="text-2xl font-bold mb-6 inline-block">
                Looptica
              </Link>
              <p className="text-muted-foreground mb-6 max-w-xs">
                Premium eyewear for those who appreciate simplicity and elegance in design.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.path}
                    className="hover:text-primary transition-colors duration-200"
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
                <h4 className="font-medium text-lg mb-6">{footerSection.title}</h4>
                <ul className="space-y-3">
                  {footerSection.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal>
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Looptica. All rights reserved.
              </p>

              <div className="flex space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-foreground transition-colors duration-200">
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
