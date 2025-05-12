
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { language, detectLanguage } = useLanguage();

  useEffect(() => {
    // Define all redirects mapping (old path -> new path)
    const redirects: Record<string, string> = {
      // Language redirects (now redirect to langauge-prefixed URLs)
      '/cat': `/${language}`,
      '/cat/': `/${language}`,
      '/en': '/en',
      '/en/': '/en',
      
      // Contact lenses redirects
      '/en/contact-lenses-poblenou-barcelona': '/en/services/lents-contacte',
      '/en/contact-lenses-poblenou-barcelona/': '/en/services/lents-contacte',
      '/lentillas-poblenou-barcelona': `/${language}/services/lents-contacte`,
      '/lentillas-poblenou-barcelona/': `/${language}/services/lents-contacte`,
      
      // Orto-K redirects
      '/orto-k-poblenou-barcelona': `/${language}/services/orto-k`,
      '/orto-k-poblenou-barcelona/': `/${language}/services/orto-k`,
      '/en/orto-k-in-poblenou-barcelona': '/en/services/orto-k',
      '/en/orto-k-in-poblenou-barcelona/': '/en/services/orto-k',
      
      // Salud visual redirect
      '/salud-visual-poblenou-barcelona': `/${language}/services/salut-visual`,
      '/salud-visual-poblenou-barcelona/': `/${language}/services/salut-visual`,
      
      // Legacy non-language prefixed service pages
      '/services/salut-visual': `/${language}/services/salut-visual`,
      '/services/lents-contacte': `/${language}/services/lents-contacte`,
      '/services/orto-k': `/${language}/services/orto-k`,
      '/services/eyeglasses': `/${language}/services/eyeglasses`,
      '/services/sunglasses': `/${language}/services/sunglasses`,
      '/services/contact-lenses': `/${language}/services/contact-lenses`,
      '/services/hearing-test': `/${language}/services/hearing-test`,
      '/services/hearing-aids': `/${language}/services/hearing-aids`,
      '/services/tinnitus-treatment': `/${language}/services/tinnitus-treatment`,
      '/services/ear-protection': `/${language}/services/ear-protection`,
      '/services/technical-aids': `/${language}/services/technical-aids`,
      '/services/subvenciones': `/${language}/services/subvenciones`,
      '/services/audiologia-centro': `/${language}/services/audiologia-centro`,
      '/services/image-consulting': `/${language}/services/image-consulting`,
      '/services/lens-consulting': `/${language}/services/lens-consulting`,
      
      // Legacy non-language prefixed pages
      '/about': `/${language}/about`,
      '/legal/privacy-policy': `/${language}/legal/privacy-policy`,
      '/legal/terms-conditions': `/${language}/legal/terms-conditions`,
      '/legal/cookies-policy': `/${language}/legal/cookies-policy`,
    };

    // Handle legacy query parameters if needed
    const handleSpecialQueryParams = () => {
      if (pathname === '/cat/' && location.search === '?noredirect=ca-ES') {
        return '/ca';
      }
      return null;
    };

    // Check for special query parameter cases first
    const specialRedirect = handleSpecialQueryParams();
    if (specialRedirect) {
      console.log(`Redirecting from ${pathname}${location.search} to ${specialRedirect}`);
      navigate(specialRedirect, { replace: true });
      return;
    }

    // Then check for path-based redirects
    if (redirects[pathname]) {
      console.log(`Redirecting from ${pathname} to ${redirects[pathname]}`);
      navigate(redirects[pathname], { replace: true });
    }
    
    // Check if we're at the root and need to redirect to a language-specific home page
    if (pathname === '/' && location.search === '') {
      const detectedLang = detectLanguage();
      navigate(`/${detectedLang}`, { replace: true });
    }
  }, [pathname, navigate, location.search, language, detectLanguage]);

  // This component doesn't render anything
  return null;
};

export default RedirectHandler;
