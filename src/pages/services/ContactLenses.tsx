
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, Shield, Clock, ThumbsUp } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ContactLenses = () => {
  const navigate = useNavigate();
  
  return (
    <ServiceLayout
      title="Contact Lenses"
      subtitle="Comfortable, clear vision without glasses"
      image="/lovable-uploads/a99c44aa-a4a4-45a4-9616-1ef080bd49db.png"
      appointmentSubject="Contact Lens Consultation at Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Advanced Contact Lens Solutions</h2>
          <p>
            At Looptica, we offer a comprehensive range of contact lens options to suit your unique vision needs, lifestyle, and preferences. Our expert optometrists use the latest technology to ensure your contact lenses provide optimal vision correction while maintaining eye health and all-day comfort.
          </p>
          <p>
            Whether you're new to contact lenses or looking to upgrade your current lenses, our personalized approach ensures you'll find the perfect solution. We take pride in staying at the forefront of contact lens innovation, offering the most advanced materials and designs available.
          </p>
          <div className="mt-8 text-center">
            <Button 
              onClick={() => navigate('/services/lents-contacte')}
              className="bg-[#2ecc71] hover:bg-[#ea384c] text-white"
            >
              View in Catalan
            </Button>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">Our Contact Lens Fitting Process</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Comprehensive Eye Examination</h4>
                <p>We start with a thorough assessment of your eye health, vision needs, and lifestyle to determine the most appropriate contact lens options for you.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Advanced Corneal Mapping</h4>
                <p>Using state-of-the-art technology, we create a detailed map of your cornea's shape to ensure the most precise fit for your contact lenses.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Personalized Lens Selection</h4>
                <p>Based on your examination results, we'll recommend the best contact lens options and provide trial lenses so you can experience them before making a decision.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Expert Training</h4>
                <p>We provide comprehensive instruction on proper lens insertion, removal, and care techniques, ensuring you feel comfortable and confident with your new contact lenses.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Types of Contact Lenses We Offer</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Daily Disposable Lenses</h4>
              <p>The healthiest option for most wearers, these fresh lenses are worn once and discarded, eliminating the need for cleaning solutions and reducing the risk of deposits and infections.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Monthly Replacement Lenses</h4>
              <p>Cost-effective options that provide excellent vision and comfort when properly maintained. Ideal for consistent wearers who don't mind a simple cleaning routine.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Toric Lenses for Astigmatism</h4>
              <p>Specially designed lenses that correct astigmatism, providing stable, clear vision throughout the day without the rotation issues of regular lenses.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Multifocal Contact Lenses</h4>
              <p>Advanced designs that correct both near and distance vision, eliminating the need for reading glasses or bifocals as you age.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Rigid Gas Permeable (RGP) Lenses</h4>
              <p>Durable lenses that provide exceptionally crisp vision, especially for complex prescriptions or conditions like keratoconus.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Specialty Lenses</h4>
              <p>Including scleral lenses for irregular corneas, prosthetic lenses for cosmetic concerns, and orthokeratology lenses for vision correction while you sleep.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Contact Lens Care and Compliance</h2>
          <p>
            Proper care and compliance are essential for comfortable, safe contact lens wear. At Looptica, we provide:
          </p>
          <ul>
            <li>Detailed instructions on cleaning and storage procedures specific to your lens type</li>
            <li>Recommendations for the most effective contact lens solutions</li>
            <li>Guidelines for healthy wearing schedules</li>
            <li>Warning signs of potential complications to watch for</li>
            <li>Regular follow-up appointments to ensure your lenses continue to fit well and your eyes remain healthy</li>
          </ul>
          
          <h3>Our Commitment to Ongoing Care</h3>
          <p>
            Your journey with contact lenses doesn't end after your initial fitting. We provide:
          </p>
          <ul>
            <li>Regular contact lens check-ups to assess fit and eye health</li>
            <li>Updates on the latest lens technologies that might benefit you</li>
            <li>Adjustment of your prescription as your vision needs change</li>
            <li>Convenient reordering options for replacement lenses</li>
            <li>Immediate attention if you experience any discomfort or vision changes</li>
          </ul>
          
          <p>
            Whether you're a first-time wearer or have been enjoying contact lenses for years, our expertise ensures you'll receive the most appropriate, comfortable, and healthy contact lens solution for your unique needs.
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default ContactLenses;
