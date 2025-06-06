
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  // Check if we're on the homepage to determine whether to use anchor links or router links
  const isHomePage = location.pathname === '/';

  // Using translation keys for navigation
  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('products'), path: isHomePage ? '#products' : '/#products' },
    { name: t('opticalServices'), path: isHomePage ? '#optical' : '/#optical' },
    { name: t('audiologyServices'), path: isHomePage ? '#audiology' : '/#audiology' },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: isHomePage ? '#contact' : '/#contact' },
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

  // Function to handle anchor link clicks for smooth scrolling
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        if (isOpen) closeMenu();
      }
    } else if (href && href.includes('#') && !isHomePage) {
      // For links like "/#section" when not on homepage, we'll let the router handle it
      // The useEffect in Index.tsx will handle the scrolling after navigation
      closeMenu();
    } else {
      // For regular page links
      closeMenu();
    }
  };

  return (
    <nav 
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300 px-6 lg:px-12",
        scrolled 
          ? "py-2 bg-white shadow-md" 
          : "py-4 bg-white shadow-sm text-gray-900" // Changed from glass to bg-white
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-50 transition-all"
          onClick={closeMenu}
        >
          <img 
            src="/images/looptica_logo_text.png" 
            alt="Looptica" 
            className={cn(
              "h-8 md:h-10 transition-all",
              scrolled ? "opacity-100" : "opacity-100"
            )}
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.path.startsWith('#') ? (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-medium transition-all hover:text-[#55afa9] text-gray-900 drop-shadow-sm"
                onClick={handleAnchorClick}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium transition-all hover:text-[#55afa9] text-gray-900 drop-shadow-sm"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Call to Action Buttons and Language Switcher */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+34933009064" className="flex items-center text-gray-900 hover:text-[#55afa9] drop-shadow-sm">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">933 00 90 64</span>
          </a>
          <LanguageSwitcher />
          <Button 
            variant="default" 
            size="sm" 
            className="bg-[#55afa9] hover:bg-[#ca6664] text-white transition-all"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            {t('shopNow')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-2 text-gray-900"
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
              link.path.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-xl font-medium transition-all hover:text-[#55afa9] text-gray-800"
                  onClick={handleAnchorClick}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl font-medium transition-all hover:text-[#55afa9] text-gray-800"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a href="tel:+34933009064" className="flex items-center text-gray-700 hover:text-[#55afa9]">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">933 00 90 64</span>
            </a>
            <LanguageSwitcher />
            <Button 
              variant="default" 
              className="mt-4 w-full max-w-[200px] bg-[#55afa9] hover:bg-[#ca6664] text-white"
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
