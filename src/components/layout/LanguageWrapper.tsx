
import React, { useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '@/config/languages';

const LanguageWrapper: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage, language: currentContextLang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const newLang = lang as Language;
    if (lang && SUPPORTED_LANGUAGES.includes(newLang)) {
      if (newLang !== currentContextLang) {
        // Set language in context, skip localStorage update as URL is the source of truth here
        setLanguage(newLang, true); 
      }
    } else {
      // Invalid or missing lang param, redirect to default language preserving the path
      const pathWithoutLang = lang ? location.pathname.substring(`/${lang}`.length) : location.pathname;
      const newPath = `/${DEFAULT_LANGUAGE}${pathWithoutLang === '/' && DEFAULT_LANGUAGE === 'ca' ? '' : pathWithoutLang}${location.search}${location.hash}`;
      console.warn(`Invalid language: ${lang}. Redirecting to ${newPath}`);
      navigate(newPath, { replace: true });
    }
  }, [lang, setLanguage, navigate, location, currentContextLang]);

  // Only render Outlet if language is valid and matches context, to prevent rendering with stale context during redirect
  if (lang && SUPPORTED_LANGUAGES.includes(lang as Language) && lang === currentContextLang) {
    return <Outlet />;
  }
  
  // Render nothing or a loader while redirecting or language context is updating
  return null; 
};

export default LanguageWrapper;
