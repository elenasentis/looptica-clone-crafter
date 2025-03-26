
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
    
    // Handle hash navigation after page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Add a slight delay to ensure all elements are loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };
    
    handleHashNavigation();
    
    // Log to check if component is mounting correctly
    console.log("Index component mounted");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div id="products">
          <Products />
        </div>
        <div id="optical">
          <OpticalServices />
        </div>
        <div id="audiology">
          <Audiology />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="brands">
          <Brands />
        </div>
        <div id="contact">
          <StoreLocation />
        </div>
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
