
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    // Define all redirects mapping (old path -> new path)
    const redirects: Record<string, string> = {
      // Language redirects
      '/cat': '/',
      '/cat/': '/',
      '/en': '/',
      '/en/': '/',
      
      // Contact lenses redirects
      '/en/contact-lenses-poblenou-barcelona': '/services/lents-contacte',
      '/en/contact-lenses-poblenou-barcelona/': '/services/lents-contacte',
      '/lentillas-poblenou-barcelona': '/services/lents-contacte',
      '/lentillas-poblenou-barcelona/': '/services/lents-contacte',
      
      // Orto-K redirects
      '/orto-k-poblenou-barcelona': '/services/orto-k',
      '/orto-k-poblenou-barcelona/': '/services/orto-k',
      '/en/orto-k-in-poblenou-barcelona': '/services/orto-k',
      '/en/orto-k-in-poblenou-barcelona/': '/services/orto-k',
      
      // Salud visual redirect
      '/salud-visual-poblenou-barcelona': '/services/salut-visual',
      '/salud-visual-poblenou-barcelona/': '/services/salut-visual',
    };

    // Handle legacy query parameters if needed
    const handleSpecialQueryParams = () => {
      if (pathname === '/cat/' && location.search === '?noredirect=ca-ES') {
        return '/';
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
  }, [pathname, navigate, location.search]);

  // This component doesn't render anything
  return null;
};

export default RedirectHandler;
