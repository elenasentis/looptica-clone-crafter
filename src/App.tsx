import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './contexts/LanguageContext';
import { FloatingWhatsApp } from './components/ui';
import CookieConsent from './components/CookieConsent';
import './App.css';

function App() {
  

  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
        <FloatingWhatsApp 
          phoneNumber="34699594064"
          accountName="Looptica"
          statusMessage="Typically replies within 1 hour"
          chatMessage="Hola! 👋🏼 How can we help you?"
          placeholder="Type a message..."
        />
        <CookieConsent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
