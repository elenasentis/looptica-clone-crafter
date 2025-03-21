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
    
    // Log to check if component is mounting correctly
    console.log("Index component mounted");
    
    // Comprehensive debug log for background image
    const computedStyle = window.getComputedStyle(document.body);
    console.log("Background image URL:", computedStyle.backgroundImage);
    console.log("Background size:", computedStyle.backgroundSize);
    console.log("Background position:", computedStyle.backgroundPosition);
    
    // Force refresh background with the new image
    document.body.style.backgroundImage = "url('/lovable-uploads/1dc38382-e9ef-4392-bc74-aeee7b9a5bc2.png')";
    console.log("Forced background refresh applied with new image");
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
