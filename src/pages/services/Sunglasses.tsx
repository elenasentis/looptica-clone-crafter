
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Sun, Shield, Zap, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const Sunglasses = () => {
  const { t } = useLanguage();
  
  return (
    <ServiceLayout
      title={t('sunglasses')}
      subtitle="Protection and style for every season"
      image="/lovable-uploads/e288806f-89cb-4ae0-9a88-6b52ee0ccc4b.png"
      appointmentSubject="Sunglasses Consultation at Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Premium Sunglasses Collection</h2>
          <p>
            At Looptica, we understand that sunglasses are much more than a fashion accessory—they're essential for protecting your eyes from harmful UV radiation while expressing your personal style. Our extensive collection features high-quality sunglasses from renowned designers and trusted brands, ensuring both optimal protection and fashion-forward design.
          </p>
          <p>
            Whether you're looking for classic aviators, trendy oversized frames, sporty wraparounds, or sophisticated designer pieces, our diverse selection caters to all preferences and face shapes. We prioritize quality materials, superior craftsmanship, and lenses that provide 100% UV protection.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">The Importance of Quality Sun Protection</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">UV Protection</h4>
                <p>All our sunglasses provide 100% UVA and UVB protection to shield your eyes from harmful rays that can cause cataracts, macular degeneration, and other eye conditions.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Glare Reduction</h4>
                <p>Our polarized lens options reduce glare from reflective surfaces like water, snow, and roads, providing clearer vision and greater comfort while driving or enjoying outdoor activities.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Impact Resistance</h4>
                <p>Many of our sunglasses feature impact-resistant lenses that provide an extra layer of protection for active lifestyles, sports, and outdoor adventures.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Eye Comfort</h4>
                <p>Quality sunglasses reduce eye strain and fatigue by limiting the amount of bright light entering your eyes, providing comfort even during prolonged outdoor exposure.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Specialized Lens Options</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Polarized Lenses</h4>
              <p>Eliminate glare from reflective surfaces, perfect for driving, water sports, and snow activities. Our polarized lenses provide enhanced visual clarity and reduced eye strain.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Gradient Tint Lenses</h4>
              <p>Featuring a smooth transition from darker at the top to lighter at the bottom, ideal for driving where you need protection from overhead sun but clearer vision of the dashboard.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Mirrored Lenses</h4>
              <p>A reflective coating on the outside of the lens reduces glare and light transmission while adding a stylish look. Popular for bright, high-altitude environments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Photochromic Lenses</h4>
              <p>These adaptive lenses darken in bright conditions and lighten in low light, providing versatile protection in changing environments with a single pair of glasses.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Sport-Specific Lenses</h4>
              <p>Designed for particular activities like golf, cycling, or fishing, these specialized lenses enhance contrast and visibility for specific environments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Prescription Sunglasses</h4>
              <p>Combine vision correction with sun protection in one stylish package. Available with all lens types and in virtually any frame style in our collection.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Our Premium Sunglasses Brands</h2>
          <p>
            Our collection features renowned brands known for their quality, style, and innovation:
          </p>
          <ul>
            <li><strong>Ray-Ban</strong> - Iconic designs with timeless appeal and reliable protection</li>
            <li><strong>Etnia Barcelona</strong> - Bold, colorful frames with Mediterranean flair</li>
            <li><strong>Oakley</strong> - Performance-oriented sunglasses with cutting-edge lens technology</li>
            <li><strong>Maui Jim</strong> - Superior polarized lenses with exceptional color enhancement</li>
            <li><strong>Tom Ford</strong> - Luxury sunglasses with sophisticated design and premium materials</li>
            <li><strong>Persol</strong> - Italian craftsmanship with classic styling and patented technologies</li>
            <li><strong>Woodys Barcelona</strong> - Eco-conscious designs with unique wooden elements</li>
          </ul>
          <h3>Our Sunglasses Fitting Process</h3>
          <p>
            Finding the perfect pair of sunglasses involves more than just selecting a style you like. Our expert consultants will help you consider:
          </p>
          <ul>
            <li><strong>Face Shape Compatibility</strong> - We'll recommend styles that complement your unique facial features</li>
            <li><strong>Lifestyle Requirements</strong> - Different activities call for different lens types and frame constructions</li>
            <li><strong>Proper Fit and Coverage</strong> - We ensure your sunglasses provide adequate coverage for optimal protection</li>
            <li><strong>Personal Style Preferences</strong> - Your sunglasses should reflect your personal aesthetic and make you feel confident</li>
          </ul>
          <p>
            All our sunglasses come with a protective case, cleaning cloth, and our quality guarantee. We also offer adjustments to ensure your sunglasses fit perfectly and stay comfortable throughout their lifetime.
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default Sunglasses;
