
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('products'), path: '#products' },
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
        scrolled ? "py-3 glass" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold relative z-50 transition-all"
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
              className="text-sm font-medium transition-all hover:opacity-70"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Call to Action Button and Language Switcher */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Button 
            variant="default" 
            size="sm" 
            className="hover:scale-105 transition-all"
          >
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
            "fixed inset-0 bg-background glass-dark backdrop-blur-md md:hidden transition-transform duration-500 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-full flex flex-col items-center justify-center space-y-8 p-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-xl font-medium transition-all hover:opacity-70"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <LanguageSwitcher />
            <Button 
              variant="default" 
              className="mt-4 w-full max-w-[200px] hover:scale-105 transition-all"
              onClick={closeMenu}
            >
              {t('shopNow')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
