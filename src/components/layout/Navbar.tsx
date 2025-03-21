
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  // Using translation keys for navigation
  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('products'), path: '#products' },
    { name: t('opticalServices'), path: '#optical' },
    { name: t('audiologyServices'), path: '#audiology' },
    { name: t('about'), path: '#about' },
    { name: t('contact'), path: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav 
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300 px-6 lg:px-12",
        scrolled ? "py-2 bg-white shadow-md" : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold relative z-50 transition-all text-[#009fe3]"
          onClick={closeMenu}
        >
          Looptica
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-medium transition-all hover:text-[#009fe3] text-gray-700"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Call to Action Buttons and Language Switcher */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+34699594064" className="flex items-center text-gray-700 hover:text-[#009fe3]">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">699 59 40 64</span>
          </a>
          <LanguageSwitcher />
          <Button 
            variant="default" 
            size="sm" 
            className="bg-[#009fe3] hover:bg-[#0082b8] text-white transition-all"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            {t('shopNow')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 transition-all duration-300" />
          ) : (
            <Menu className="h-6 w-6 transition-all duration-300" />
          )}
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-white md:hidden transition-transform duration-500 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-full flex flex-col items-center justify-center space-y-8 p-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-xl font-medium transition-all hover:text-[#009fe3] text-gray-800"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+34699594064" className="flex items-center text-gray-700 hover:text-[#009fe3]">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">699 59 40 64</span>
            </a>
            <LanguageSwitcher />
            <Button 
              variant="default" 
              className="mt-4 w-full max-w-[200px] bg-[#009fe3] hover:bg-[#0082b8] text-white"
              onClick={closeMenu}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              {t('shopNow')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
