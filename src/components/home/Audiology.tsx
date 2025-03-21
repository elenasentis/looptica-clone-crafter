
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { Headphones, Ear, Shield, Volume2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Audiology = () => {
  const { t } = useLanguage();

  const audiologyServices = [
    {
      icon: <Ear className="w-10 h-10 text-[#009fe3]" />,
      title: "Revisions auditives",
      description: "Avaluació professional i completa de la teva capacitat auditiva amb equipament d'última generació.",
      image: "/images/audiology/hearing-test.jpg"
    },
    {
      icon: <Headphones className="w-10 h-10 text-[#009fe3]" />,
      title: "Audiòfons avançats",
      description: "Audiòfons d'alta qualitat adaptats a les teves necessitats específiques i estil de vida.",
      image: "/images/audiology/hearing-aids.jpg"
    },
    {
      icon: <Volume2 className="w-10 h-10 text-[#009fe3]" />,
      title: "Tractament d'acúfens",
      description: "Solucions especialitzades per ajudar a controlar i reduir els símptomes dels acúfens.",
      image: "/images/audiology/tinnitus.jpg"
    },
    {
      icon: <Shield className="w-10 h-10 text-[#009fe3]" />,
      title: "Protecció auditiva",
      description: "Taps per les orelles fets a mida dissenyats per a comoditat i protecció òptima contra el soroll.",
      image: "/images/audiology/ear-protection.jpg"
    }
  ];

  return (
    <section className="py-16 bg-[#f7f7f7]" id="audiology">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#009fe3]/10 text-[#009fe3] mb-4">
              Serveis d'Audiologia
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Cuidem la teva salut auditiva</h2>
            <div className="w-16 h-1 bg-[#009fe3] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Els nostres audiòlegs certificats ofereixen avaluacions auditives completes i solucions personalitzades per millorar la teva salut auditiva.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {audiologyServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Button size="lg" className="bg-[#009fe3] hover:bg-[#0082b8] text-white">
              Demana una consulta
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Audiology;
