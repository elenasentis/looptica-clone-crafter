
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Glasses, PenTool, Shapes, BarChart3 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const Eyeglasses = () => {
  const { t } = useLanguage();
  
  return (
    <ServiceLayout
      title={t('eyeglasses')}
      subtitle={t('eyeglassesSubtitle')}
      image="/lovable-uploads/45087a9c-489a-4d48-82fb-d857e7bf306a.png"
      appointmentSubject="Eyeglasses Consultation at Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Our Premium Eyeglasses Collection</h2>
          <p>
            At Looptica, we believe that eyeglasses are more than just a visual aid—they're an extension of your personality and style. Our carefully curated collection features frames from the world's most prestigious designers and brands, ensuring that you'll find the perfect pair that complements your face shape, lifestyle, and personal aesthetic.
          </p>
          <p>
            Each frame in our collection is selected for its exceptional quality, innovative design, and comfortable fit. Whether you're looking for something classic and understated or bold and fashion-forward, our extensive range has options to suit every preference.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">Our Premium Lens Technology</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Glasses className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">High-Definition Digital Lenses</h4>
                <p>Our digitally-surfaced lenses provide superior clarity and visual comfort compared to traditional lenses, reducing eye strain and fatigue even after long hours of wear.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Progressive Lenses</h4>
                <p>Our advanced progressive lenses provide seamless transition between distances without visible lines, offering natural vision correction for presbyopia.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Shapes className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Anti-Reflective Coatings</h4>
                <p>Eliminate distracting reflections, reduce glare, and improve night vision while enhancing the appearance of your glasses by making the lenses nearly invisible.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Blue Light Protection</h4>
                <p>Our specialized lenses filter out harmful blue light from digital screens, reducing eye strain and potentially improving sleep patterns for heavy computer users.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Featured Designer Brands</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Etnia Barcelona</h4>
              <p>Known for bold colors and patterns, celebrating Mediterranean culture with vibrant designs and premium materials.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Woodys Barcelona</h4>
              <p>Innovative frames combining wood elements with contemporary designs for a unique, eco-conscious aesthetic.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Xavier Garcia</h4>
              <p>Elegant, minimalist frames that focus on clean lines and sophisticated color palettes for a timeless look.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Kaleos</h4>
              <p>Fashion-forward and versatile frames that blend vintage inspiration with contemporary trends.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Ray-Ban</h4>
              <p>Iconic frames known worldwide for their classic designs and exceptional quality that never goes out of style.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Tom Ford</h4>
              <p>Luxury frames featuring sophisticated designs, premium materials, and attention to detail for the discerning customer.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Our Personalized Fitting Process</h2>
          <p>
            At Looptica, we understand that properly fitted eyeglasses are essential not only for optimal vision but also for comfort and appearance. Our comprehensive fitting process ensures that your new eyeglasses will work perfectly for your specific needs:
          </p>
          <ol>
            <li>
              <strong>Face Shape Analysis:</strong> Our experts will analyze your face shape to recommend frame styles that complement your natural features.
            </li>
            <li>
              <strong>Lifestyle Assessment:</strong> We'll discuss your daily activities, work environment, and hobbies to suggest frames and lens options that suit your lifestyle.
            </li>
            <li>
              <strong>Precise Measurements:</strong> Using advanced digital technology, we'll take detailed measurements to ensure your lenses are perfectly centered for optimal vision.
            </li>
            <li>
              <strong>Comfort Adjustment:</strong> Once your glasses are ready, we'll make final adjustments to ensure they fit comfortably without pinching or sliding.
            </li>
            <li>
              <strong>Ongoing Support:</strong> We provide complimentary adjustments and minor repairs to keep your eyeglasses fitting perfectly throughout their lifetime.
            </li>
          </ol>
          <h3>Quality Guarantee</h3>
          <p>
            Every pair of eyeglasses from Looptica comes with our comprehensive quality guarantee:
          </p>
          <ul>
            <li>30-day adaptation guarantee for progressive lenses</li>
            <li>One-year warranty against manufacturing defects</li>
            <li>Six months of free adjustments and maintenance</li>
            <li>Prescription accuracy guarantee</li>
          </ul>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default Eyeglasses;
