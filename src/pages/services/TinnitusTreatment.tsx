
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Volume2, Music, Zap, Brain } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const TinnitusTreatment = () => {
  const { t } = useLanguage();
  
  return (
    <ServiceLayout
      title={t('tinnitusTreatment')}
      subtitle={t('tinnitusDesc')}
      image="/lovable-uploads/b5661196-c8c2-4fad-9207-094e65ba3642.png"
      appointmentSubject="Tinnitus Consultation at Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Understanding Tinnitus</h2>
          <p>
            Tinnitus is the perception of sound in the ears or head when no external sound is present. Often described as ringing, buzzing, hissing, or clicking, tinnitus can range from occasionally bothersome to severely disruptive of daily life. While tinnitus is common—affecting approximately 15-20% of people—its impact varies greatly from person to person.
          </p>
          <p>
            At Looptica, we understand that living with tinnitus can be challenging and frustrating. Our specialized tinnitus management program offers evidence-based approaches to help you find relief and regain control over your auditory experience. We focus not just on addressing the sound itself, but also on minimizing its impact on your quality of life.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">Our Comprehensive Tinnitus Assessment</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Volume2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Tinnitus Evaluation</h4>
                <p>We conduct specialized tests to measure and characterize your tinnitus, including its pitch, volume, and pattern, helping us develop a targeted management approach.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Hearing Assessment</h4>
                <p>A comprehensive hearing evaluation helps identify any hearing loss that may be contributing to your tinnitus, as the two conditions often occur together.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Impact Assessment</h4>
                <p>Using validated questionnaires, we evaluate how tinnitus affects your sleep, concentration, emotional well-being, and daily activities to guide our treatment recommendations.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Trigger Identification</h4>
                <p>We help you identify factors that may worsen your tinnitus, such as certain foods, stress, or environmental sounds, so you can better manage these triggers.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Tinnitus Management Solutions</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Sound Therapy</h4>
              <p>Utilizing specialized sound generators or hearing aids with tinnitus masking features to introduce pleasant or neutral sounds that reduce the perceived loudness and distress of tinnitus.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Tinnitus Retraining Therapy (TRT)</h4>
              <p>A structured approach combining sound therapy with educational counseling to help your brain learn to reclassify tinnitus as a neutral rather than negative signal.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Cognitive Behavioral Therapy (CBT)</h4>
              <p>Working with our partner psychologists specializing in tinnitus, CBT helps change negative thought patterns and develop coping strategies to reduce tinnitus-related distress.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Hearing Aids</h4>
              <p>For those with hearing loss and tinnitus, properly fitted hearing aids can provide relief by amplifying external sounds, making tinnitus less noticeable and reducing auditory strain.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Relaxation Techniques</h4>
              <p>Stress often exacerbates tinnitus, so we provide training in progressive muscle relaxation, deep breathing, and mindfulness meditation to help reduce tinnitus intensity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Lifestyle Modifications</h4>
              <p>Guidance on sleep hygiene, diet adjustments, physical activity, and stress management that can positively impact tinnitus perception and overall well-being.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>What to Expect: Our Tinnitus Management Process</h2>
          <p>
            At Looptica, we take a personalized, step-by-step approach to tinnitus management:
          </p>
          <ol>
            <li>
              <strong>Initial Consultation:</strong> We begin with a thorough discussion of your tinnitus experience, its impact on your life, and your treatment goals.
            </li>
            <li>
              <strong>Comprehensive Assessment:</strong> Our specialized tinnitus evaluation helps us understand the characteristics of your tinnitus and any related hearing issues.
            </li>
            <li>
              <strong>Personalized Treatment Plan:</strong> Based on your assessment results, we develop a customized management strategy that addresses your specific needs and preferences.
            </li>
            <li>
              <strong>Treatment Implementation:</strong> We provide all necessary devices, instructions, and support as you begin your tinnitus management journey.
            </li>
            <li>
              <strong>Regular Follow-Up:</strong> Scheduled check-ins allow us to monitor your progress, make adjustments to your treatment plan, and provide ongoing support.
            </li>
            <li>
              <strong>Long-Term Management:</strong> We continue to work with you to refine your tinnitus management strategies as your needs evolve over time.
            </li>
          </ol>
          <h3>Important Facts About Tinnitus</h3>
          <p>
            Understanding tinnitus is an important part of managing it effectively:
          </p>
          <ul>
            <li>Tinnitus is a symptom, not a disease itself, and can be associated with various underlying conditions.</li>
            <li>While there is currently no "cure" for most forms of tinnitus, effective management strategies can significantly reduce its impact.</li>
            <li>Tinnitus perception often fluctuates, with periods of greater and lesser intensity influenced by factors like stress, fatigue, and noise exposure.</li>
            <li>Many people with tinnitus find that their brain naturally habituates to the sound over time, especially with proper management.</li>
            <li>Protecting your hearing from loud noise is important to prevent tinnitus from worsening.</li>
          </ul>
          <p>
            If you're experiencing tinnitus, know that you're not alone and help is available. Our compassionate team at Looptica is dedicated to helping you find relief and improving your quality of life.
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default TinnitusTreatment;
