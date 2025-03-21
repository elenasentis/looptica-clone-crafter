
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
    
    // Apply the background class to the body element to ensure it covers the entire page
    document.body.classList.add('store-bg');
    
    // Clean up function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('store-bg');
    };
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
