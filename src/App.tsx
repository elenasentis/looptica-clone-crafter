
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './contexts/LanguageContext';
import CookieConsent from './components/CookieConsent';
import CriticalStyles from './components/CriticalStyles';
import RedirectHandler from './components/RedirectHandler';
import SalutVisual from './pages/services/SalutVisual';
import LentsContacte from './pages/services/LentsContacte';
import OrtoK from './pages/services/OrtoK';
import Eyeglasses from './pages/services/Eyeglasses';
import Sunglasses from './pages/services/Sunglasses';
import ContactLenses from './pages/services/ContactLenses';
import HearingTest from './pages/services/HearingTest';
import HearingAids from './pages/services/HearingAids';
import TinnitusTreatment from './pages/services/TinnitusTreatment';
import EarProtection from './pages/services/EarProtection';
import TechnicalAids from './pages/services/TechnicalAids';
import Subvenciones from './pages/services/Subvenciones';
import ImageConsulting from './pages/services/ImageConsulting';
import LensConsulting from './pages/services/LensConsulting';
import About from './pages/About';
import AudiologiaCentro from './pages/services/AudiologiaCentro';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import CookiesPolicy from './pages/legal/CookiesPolicy';
// Import new Oticon pages
import OticonModels from './pages/products/OticonModels';
import OticonModelPage from './pages/products/OticonModelPage';
import './App.css';

// Google Analytics page tracker component
const PageTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view when route changes
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);
  
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        {/* Load critical styles first */}
        <CriticalStyles />
        <Router>
          <RedirectHandler />
          <PageTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* About Page */}
            <Route path="/about" element={<About />} />
            {/* Optical Services */}
            <Route path="/services/salut-visual" element={<SalutVisual />} />
            <Route path="/services/lents-contacte" element={<LentsContacte />} />
            <Route path="/services/orto-k" element={<OrtoK />} />
            <Route path="/services/eyeglasses" element={<Eyeglasses />} />
            <Route path="/services/sunglasses" element={<Sunglasses />} />
            <Route path="/services/contact-lenses" element={<ContactLenses />} />
            <Route path="/services/image-consulting" element={<ImageConsulting />} />
            <Route path="/services/lens-consulting" element={<LensConsulting />} />
            {/* Audiology Services */}
            <Route path="/services/hearing-test" element={<HearingTest />} />
            <Route path="/services/hearing-aids" element={<HearingAids />} />
            <Route path="/services/tinnitus-treatment" element={<TinnitusTreatment />} />
            <Route path="/services/ear-protection" element={<EarProtection />} />
            <Route path="/services/technical-aids" element={<TechnicalAids />} />
            <Route path="/services/subvenciones" element={<Subvenciones />} />
            {/* Audiology Landing Page */}
            <Route path="/services/audiologia-centro" element={<AudiologiaCentro />} />
            {/* Oticon Models Pages (hidden, only accessible via direct link) */}
            <Route path="/products/oticon-models" element={<OticonModels />} />
            <Route path="/products/oticon-models/:id" element={<OticonModelPage />} />
            {/* Legal Pages */}
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms-conditions" element={<TermsConditions />} />
            <Route path="/legal/cookies-policy" element={<CookiesPolicy />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Toaster />
          <CookieConsent />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
