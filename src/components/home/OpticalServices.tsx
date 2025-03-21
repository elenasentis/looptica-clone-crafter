
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Contact, Moon, User, Glasses, Sun } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const OpticalServices = () => {
  const { t } = useLanguage();

  const opticalServices = [
    {
      icon: <Eye className="w-10 h-10 text-[#009fe3]" />,
      title: "Salud Visual",
      description: "Exámen visual optométrico, retinoscopia, vista cansada, ojo seco, etc.",
      image: "/images/optical/eye-exam.jpg"
    },
    {
      icon: <Contact className="w-10 h-10 text-[#009fe3]" />,
      title: "Lentes de Contacto",
      description: "Adaptación de lentes de contacto para miopia, hipermetropia, astigmatismo, progresivas y orto-k.",
      image: "/images/optical/contact-lenses.jpg"
    },
    {
      icon: <Moon className="w-10 h-10 text-[#009fe3]" />,
      title: "Orto-K",
      description: "Corrige tu vision con lentes de contacto nocturnas y olvidate de las gafas durante el día.",
      image: "/images/optical/orthokeratology.jpg"
    },
    {
      icon: <User className="w-10 h-10 text-[#009fe3]" />,
      title: "Asesoramiento de Imagen",
      description: "Te ofrecemos una selección de monturas con estilo diseñadas en Barcelona.",
      image: "/images/optical/style-consultation.jpg"
    },
    {
      icon: <Glasses className="w-10 h-10 text-[#009fe3]" />,
      title: "Asesoramiento de Lentes",
      description: "Buscamos la mejor opción para tu problema de visión con lentes de última generación de las mejores marcas.",
      image: "/images/optical/lens-consultation.jpg"
    },
    {
      icon: <Sun className="w-10 h-10 text-[#009fe3]" />,
      title: "Gafas de Sol",
      description: "Gafas de sol exclusivas que transmiten personalidad de diseñadores locales.",
      image: "/images/optical/sunglasses.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white" id="optical">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#009fe3]/10 text-[#009fe3] mb-4">
              Servicios Ópticos
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Cuidamos tu salud visual</h2>
            <div className="w-16 h-1 bg-[#009fe3] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Nuestros ópticos certificados ofrecen servicios completos y soluciones personalizadas para mejorar tu salud visual.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {opticalServices.map((service, index) => (
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
              Solicita una consulta
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OpticalServices;
