
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Headphones, Bluetooth, Battery, Wifi } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const HearingAids = () => {
  const { t } = useLanguage();
  
  return (
    <ServiceLayout
      title={t('hearingAids')}
      subtitle={t('hearingAidsDesc')}
      image="/lovable-uploads/ebf49fd8-a596-41fb-a71e-097837111d0d.png"
      appointmentSubject="Hearing Aid Consultation at Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Modern Hearing Solutions at Looptica</h2>
          <p>
            At Looptica, we offer the latest in hearing aid technology from world-leading manufacturers. Today's hearing aids are sophisticated, discreet devices that do much more than simply amplify sound. They use advanced digital processing to enhance speech understanding, reduce background noise, and provide a natural listening experience tailored to your specific hearing profile.
          </p>
          <p>
            Our audiologists are experts in matching the right hearing technology to your unique hearing loss, lifestyle needs, and personal preferences. We focus on finding solutions that integrate seamlessly with your life, whether you're an active professional, an avid music lover, or someone who enjoys quiet conversations with family and friends.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">Cutting-Edge Hearing Aid Features</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Bluetooth className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Connectivity</h4>
                <p>Modern hearing aids connect wirelessly to smartphones, TVs, and other devices, allowing you to stream calls, music, and other audio directly to your hearing aids for an enhanced listening experience.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Directional Microphones</h4>
                <p>Advanced microphone systems focus on sounds coming from in front of you while reducing noise from other directions, dramatically improving speech understanding in noisy environments.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Battery className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Rechargeable Technology</h4>
                <p>Many of our hearing aids feature rechargeable batteries, eliminating the hassle of changing tiny batteries and providing all-day power with a simple overnight charge.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Smartphone Apps</h4>
                <p>Control your hearing aids discreetly from your smartphone, adjusting volume, changing programs, or fine-tuning settings to match your current environment.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Hearing Aid Styles</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Receiver-In-Canal (RIC)</h4>
              <p>Our most popular style, offering an excellent balance of discreet appearance, comfort, and performance. Suitable for mild to severe hearing loss.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Completely-In-Canal (CIC)</h4>
              <p>Sits deep in the ear canal for a nearly invisible appearance. Ideal for mild to moderate hearing loss and those prioritizing cosmetic discretion.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">In-The-Ear (ITE)</h4>
              <p>Custom-made to fit in the outer portion of your ear, offering easy handling and featuring larger batteries for longer use between charges.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Behind-The-Ear (BTE)</h4>
              <p>Provides the most power and features, making it suitable for all degrees of hearing loss, including profound. Robust and easy to handle.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Our Comprehensive Hearing Aid Process</h2>
          <p>
            At Looptica, fitting hearing aids is a thorough process designed to ensure optimal results:
          </p>
          <ol>
            <li>
              <strong>Comprehensive Hearing Evaluation:</strong> We begin with a thorough assessment of your hearing to understand the type and degree of your hearing loss.
            </li>
            <li>
              <strong>Lifestyle Assessment:</strong> We discuss your daily activities, listening environments, and specific challenges to determine the features and style that will benefit you most.
            </li>
            <li>
              <strong>Technology Recommendations:</strong> Based on your hearing profile and lifestyle needs, we'll recommend appropriate hearing aid options across different technology levels and price points.
            </li>
            <li>
              <strong>Custom Fitting:</strong> Once you've selected your hearing aids, we ensure they fit comfortably and securely, whether they're custom-molded in-ear devices or precisely fitted external models.
            </li>
            <li>
              <strong>Personalized Programming:</strong> We program your hearing aids to your specific hearing prescription, fine-tuning them to provide optimal sound quality in your typical environments.
            </li>
            <li>
              <strong>Wearing Schedule and Care Instructions:</strong> We provide guidance on adapting to your new hearing aids, including a wearing schedule and proper cleaning and maintenance techniques.
            </li>
            <li>
              <strong>Follow-up Appointments:</strong> Regular check-ups allow us to make any necessary adjustments as you adapt to your hearing aids and to ensure they continue functioning optimally.
            </li>
          </ol>
          <h3>Our Hearing Aid Brands</h3>
          <p>
            We work with the world's leading hearing aid manufacturers, including:
          </p>
          <ul>
            <li>Oticon</li>
            <li>Phonak</li>
            <li>ReSound</li>
            <li>Signia</li>
            <li>Starkey</li>
            <li>Widex</li>
          </ul>
          <p>
            These trusted brands offer different technology levels to suit various needs and budgets while maintaining exceptional quality and reliability. Our audiologists will help you navigate the options to find the perfect solution for your unique situation.
          </p>
          <h3>Ongoing Support</h3>
          <p>
            Our relationship doesn't end once you receive your hearing aids. We provide comprehensive aftercare services, including:
          </p>
          <ul>
            <li>Regular cleaning and maintenance checks</li>
            <li>Programming adjustments as your hearing or needs change</li>
            <li>Troubleshooting and repairs</li>
            <li>Battery or accessory supplies</li>
            <li>Annual hearing reassessments</li>
          </ul>
          <p>
            We're committed to being your long-term partner in hearing health, ensuring your hearing aids continue to perform optimally throughout their lifespan.
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default HearingAids;
