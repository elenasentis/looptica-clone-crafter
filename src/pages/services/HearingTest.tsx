
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Ear, FileText, Activity, BarChart3 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const HearingTest = () => {
  const { t } = useLanguage();
  
  return (
    <ServiceLayout
      title={t('hearingTest')}
      subtitle={t('hearingTestDesc')}
      image="/lovable-uploads/c909c154-63bb-4632-af13-9e1825237aaa.png"
      appointmentSubject="Hearing Test at Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Understanding Our Hearing Tests</h2>
          <p>
            At Looptica, we provide comprehensive hearing evaluations conducted by our experienced audiologists. Our tests go beyond basic screenings to thoroughly assess your hearing ability across different frequencies and sound levels, helping to identify any potential hearing issues and their causes.
          </p>
          <p>
            Regular hearing tests are essential for monitoring your auditory health, especially if you're experiencing symptoms like difficulty understanding conversations, asking people to repeat themselves frequently, or hearing ringing in your ears. Early detection of hearing loss allows for more effective treatment options and better outcomes.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">Our Comprehensive Testing Process</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Initial Consultation</h4>
                <p>We begin with a detailed discussion about your hearing concerns, medical history, and lifestyle factors that may affect your hearing health.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Ear className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Otoscopic Examination</h4>
                <p>A visual inspection of your ear canal and eardrum to check for physical abnormalities, earwax blockage, or signs of infection that could affect your hearing.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Pure Tone Audiometry</h4>
                <p>This test measures your ability to hear sounds of different volumes and frequencies, determining the quietest sounds you can hear across the speech spectrum.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Speech Recognition Testing</h4>
                <p>Evaluates your ability to distinguish speech from background noise and to understand spoken words at different volumes.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Advanced Diagnostic Tests</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Tympanometry</h4>
              <p>Measures the movement of your eardrum in response to air pressure changes, helping to identify middle ear problems such as fluid buildup or eardrum perforation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Acoustic Reflex Testing</h4>
              <p>Evaluates how certain muscles in your middle ear respond to loud sounds, which can help identify the location of hearing problems within the auditory system.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Otoacoustic Emissions (OAE)</h4>
              <p>Measures sounds produced by the inner ear in response to stimuli, helping to assess cochlear function and identify hearing loss in its earliest stages.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Real-World Listening Assessment</h4>
              <p>Evaluates how you hear in everyday environments with background noise, multiple speakers, or different acoustic settings to provide practical insights into your hearing challenges.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>What to Expect During Your Appointment</h2>
          <p>
            Your hearing evaluation at Looptica is a comfortable, non-invasive process that typically takes about 60 minutes. Here's what you can expect:
          </p>
          <ol>
            <li>
              <strong>Welcoming Environment:</strong> Our sound-treated testing rooms ensure accurate results without distracting background noise.
            </li>
            <li>
              <strong>Simple Instructions:</strong> You'll be asked to respond to sounds or repeat words as part of the various tests, with clear guidance from our audiologist.
            </li>
            <li>
              <strong>Comprehensive Results:</strong> After completing the tests, your audiologist will explain your results using easy-to-understand audiograms and charts.
            </li>
            <li>
              <strong>Personalized Recommendations:</strong> Based on your results, we'll discuss appropriate next steps, whether that's monitoring your hearing, exploring hearing aids, or referring you to a medical specialist if necessary.
            </li>
            <li>
              <strong>No Pressure Consultations:</strong> Our focus is on providing information and support, not selling products. You'll have time to ask questions and consider your options without any pressure.
            </li>
          </ol>
          <h3>When Should You Get Your Hearing Tested?</h3>
          <p>
            We recommend hearing tests for:
          </p>
          <ul>
            <li>Adults over 50, as part of regular health check-ups</li>
            <li>Anyone experiencing difficulty hearing conversations or frequently asking people to repeat themselves</li>
            <li>Individuals with a family history of hearing loss</li>
            <li>People exposed to loud noises at work or during recreational activities</li>
            <li>Those experiencing ringing or buzzing in the ears (tinnitus)</li>
            <li>Anyone who has had previous ear infections, surgeries, or treatments</li>
          </ul>
          <p>
            Remember that hearing loss often occurs gradually, making it difficult to notice until it significantly impacts your quality of life. Regular hearing tests allow for early intervention and better outcomes.
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default HearingTest;
