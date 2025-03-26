
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Products from '@/components/home/Products';
import OpticalServices from '@/components/home/OpticalServices';
import Audiology from '@/components/home/Audiology';
import Testimonials from '@/components/home/Testimonials';
import Brands from '@/components/home/Brands';
import StoreLocation from '@/components/home/StoreLocation';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle anchor links if coming from other pages
    const handleAnchorLinks = () => {
      const hash = window.location.hash;
      if (hash) {
        // Add a small delay to ensure the page has fully loaded
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
    
    handleAnchorLinks();
    
    // Log to check if component is mounting correctly
    console.log("Index component mounted");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
        <OpticalServices />
        <Audiology />
        <Testimonials />
        <Brands />
        <StoreLocation />
      </main>
      <Footer />
      <FloatingWhatsApp 
        phoneNumber="34699594064"
        accountName="Looptica"
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hola! 👋🏼 How can we help you?"
        placeholder="Type a message..."
      />
    </div>
  );
};

export default Index;
