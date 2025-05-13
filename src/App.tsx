
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { Toaster } from './components/ui/sonner'; // Using Sonner toast consistently
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import CookieConsent from './components/CookieConsent';
import CriticalStyles from './components/CriticalStyles';
import RedirectHandler from './components/RedirectHandler';
// Lazy load non-critical pages
import { lazy, Suspense, Fragment } from 'react';
import './App.css';

// Create a loading component for Suspense
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse h-4 w-24 bg-gray-200 rounded"></div>
  </div>
);

// Lazy load non-critical pages to improve initial load time
const SalutVisual = lazy(() => import('./pages/services/SalutVisual'));
const LentsContacte = lazy(() => import('./pages/services/LentsContacte'));
const OrtoK = lazy(() => import('./pages/services/OrtoK'));
const Eyeglasses = lazy(() => import('./pages/services/Eyeglasses'));
const Sunglasses = lazy(() => import('./pages/services/Sunglasses'));
const ContactLenses = lazy(() => import('./pages/services/ContactLenses'));
const HearingTest = lazy(() => import('./pages/services/HearingTest'));
const HearingAids = lazy(() => import('./pages/services/HearingAids'));
const TinnitusTreatment = lazy(() => import('./pages/services/TinnitusTreatment'));
const EarProtection = lazy(() => import('./pages/services/EarProtection'));
const TechnicalAids = lazy(() => import('./pages/services/TechnicalAids'));
const Subvenciones = lazy(() => import('./pages/services/Subvenciones'));
const ImageConsulting = lazy(() => import('./pages/services/ImageConsulting'));
const LensConsulting = lazy(() => import('./pages/services/LensConsulting'));
const About = lazy(() => import('./pages/About'));
const AudiologiaCentro = lazy(() => import('./pages/services/AudiologiaCentro'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/legal/TermsConditions'));
const CookiesPolicy = lazy(() => import('./pages/legal/CookiesPolicy'));
const OticonModels = lazy(() => import('./pages/products/OticonModels'));
const OticonModelPage = lazy(() => import('./pages/products/OticonModelPage'));

// Language route wrapper to handle language detection and page routing
const LanguageRouteWrapper = ({ component: Component, ...rest }) => {
  const { language, setLanguage, detectLanguage } = useLanguage();
  const location = useLocation();
  
  useEffect(() => {
    // If we're at the root without a language prefix, detect and redirect
    if (location.pathname === '/') {
      detectLanguage();
    }
  }, [location.pathname, detectLanguage]);
  
  return <Component {...rest} />;
};

// Google Analytics page tracker component
const PageTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view when route changes, with slight delay to prioritize rendering
    const timer = setTimeout(() => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search
        });
      }
    }, 500); // Delay analytics to prioritize rendering
    
    return () => clearTimeout(timer);
  }, [location]);
  
  return null;
};

// Root redirect component to handle redirection to language-based URLs
const RootRedirect = () => {
  const { detectLanguage } = useLanguage();
  const detectedLanguage = detectLanguage();
  return <Navigate to={`/${detectedLanguage}`} replace />;
};

// Define routes for each language prefix
function getLangRoutes(langPrefix: string) {
  const prefix = langPrefix ? `${langPrefix}/` : '';
  
  return (
    <Fragment>
      <Route path={`${prefix}about`} element={
        <Suspense fallback={<PageLoader />}><About /></Suspense>
      } />
      {/* Optical Services */}
      <Route path={`${prefix}services/salut-visual`} element={
        <Suspense fallback={<PageLoader />}><SalutVisual /></Suspense>
      } />
      <Route path={`${prefix}services/lents-contacte`} element={
        <Suspense fallback={<PageLoader />}><LentsContacte /></Suspense>
      } />
      <Route path={`${prefix}services/orto-k`} element={
        <Suspense fallback={<PageLoader />}><OrtoK /></Suspense>
      } />
      <Route path={`${prefix}services/eyeglasses`} element={
        <Suspense fallback={<PageLoader />}><Eyeglasses /></Suspense>
      } />
      <Route path={`${prefix}services/sunglasses`} element={
        <Suspense fallback={<PageLoader />}><Sunglasses /></Suspense>
      } />
      <Route path={`${prefix}services/contact-lenses`} element={
        <Suspense fallback={<PageLoader />}><ContactLenses /></Suspense>
      } />
      <Route path={`${prefix}services/image-consulting`} element={
        <Suspense fallback={<PageLoader />}><ImageConsulting /></Suspense>
      } />
      <Route path={`${prefix}services/lens-consulting`} element={
        <Suspense fallback={<PageLoader />}><LensConsulting /></Suspense>
      } />
      {/* Audiology Services */}
      <Route path={`${prefix}services/hearing-test`} element={
        <Suspense fallback={<PageLoader />}><HearingTest /></Suspense>
      } />
      <Route path={`${prefix}services/hearing-aids`} element={
        <Suspense fallback={<PageLoader />}><HearingAids /></Suspense>
      } />
      <Route path={`${prefix}services/tinnitus-treatment`} element={
        <Suspense fallback={<PageLoader />}><TinnitusTreatment /></Suspense>
      } />
      <Route path={`${prefix}services/ear-protection`} element={
        <Suspense fallback={<PageLoader />}><EarProtection /></Suspense>
      } />
      <Route path={`${prefix}services/technical-aids`} element={
        <Suspense fallback={<PageLoader />}><TechnicalAids /></Suspense>
      } />
      <Route path={`${prefix}services/subvenciones`} element={
        <Suspense fallback={<PageLoader />}><Subvenciones /></Suspense>
      } />
      {/* Audiology Landing Page */}
      <Route path={`${prefix}services/audiologia-centro`} element={
        <Suspense fallback={<PageLoader />}><AudiologiaCentro /></Suspense>
      } />
      {/* Oticon Models Pages (hidden, only accessible via direct link) */}
      <Route path={`${prefix}products/oticon-models`} element={
        <Suspense fallback={<PageLoader />}><OticonModels /></Suspense>
      } />
      <Route path={`${prefix}products/oticon-models/:id`} element={
        <Suspense fallback={<PageLoader />}><OticonModelPage /></Suspense>
      } />
      {/* Legal Pages */}
      <Route path={`${prefix}legal/privacy-policy`} element={
        <Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>
      } />
      <Route path={`${prefix}legal/terms-conditions`} element={
        <Suspense fallback={<PageLoader />}><TermsConditions /></Suspense>
      } />
      <Route path={`${prefix}legal/cookies-policy`} element={
        <Suspense fallback={<PageLoader />}><CookiesPolicy /></Suspense>
      } />
    </Fragment>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        {/* Load critical styles first */}
        <CriticalStyles />
        <RedirectHandler />
        <PageTracker />
        <Navbar />
        <Routes>
          {/* Default route with language detection */}
          <Route path="/" element={<RootRedirect />} />
          
          {/* Language-specific home pages */}
          <Route path="/ca" element={<Index />} />
          <Route path="/es" element={<Index />} />
          <Route path="/en" element={<Index />} />
          
          {/* Language-specific routes */}
          {getLangRoutes("ca")}
          {getLangRoutes("es")}
          {getLangRoutes("en")}
          
          {/* Legacy routes without language prefix (for backward compatibility) */}
          {getLangRoutes("")}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
        <CookieConsent />
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
