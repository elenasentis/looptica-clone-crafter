
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
import Newsletter from '@/components/home/Newsletter';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Log to check if component is mounting correctly
    console.log("Index component mounted");
    
    // Comprehensive debug log for background image
    const computedStyle = window.getComputedStyle(document.body);
    console.log("Background image URL:", computedStyle.backgroundImage);
    console.log("Background size:", computedStyle.backgroundSize);
    console.log("Background position:", computedStyle.backgroundPosition);
    
    // Force refresh background (sometimes helps with loading issues)
    document.body.style.backgroundImage = "url('/lovable-uploads/e0c7ad7a-99cb-4d9a-adea-94a645ef2f5e.png')";
    console.log("Forced background refresh applied");
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
        <Newsletter />
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
