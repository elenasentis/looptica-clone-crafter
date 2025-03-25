import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, Shield, Clock, ThumbsUp } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactLenses = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  const content = {
    title: {
      en: "Contact Lenses",
      es: "Lentes de Contacto",
      ca: "Lents de Contacte",
    },
    subtitle: {
      en: "Comfortable, clear vision without glasses",
      es: "Visión cómoda y clara sin gafas",
      ca: "Visió còmoda i clara sense ulleres",
    },
    advancedTitle: {
      en: "Advanced Contact Lens Solutions",
      es: "Soluciones Avanzadas de Lentes de Contacto",
      ca: "Solucions Avançades de Lents de Contacte",
    },
    intro1: {
      en: "At Looptica, we offer a comprehensive range of contact lens options to suit your unique vision needs, lifestyle, and preferences. Our expert optometrists use the latest technology to ensure your contact lenses provide optimal vision correction while maintaining eye health and all-day comfort.",
      es: "En Looptica, ofrecemos una amplia gama de opciones de lentes de contacto para adaptarse a sus necesidades visuales únicas, estilo de vida y preferencias. Nuestros optometristas expertos utilizan la última tecnología para asegurar que sus lentes de contacto proporcionen una corrección visual óptima mientras mantienen la salud ocular y la comodidad durante todo el día.",
      ca: "A Looptica, oferim una àmplia gamma d'opcions de lents de contacte per adaptar-se a les seves necessitats visuals úniques, estil de vida i preferències. Els nostres optometristes experts utilitzen l'última tecnologia per assegurar que les seves lents de contacte proporcionin una correcció visual òptima mentre mantenen la salut ocular i la comoditat durant tot el dia.",
    },
    intro2: {
      en: "Whether you're new to contact lenses or looking to upgrade your current lenses, our personalized approach ensures you'll find the perfect solution. We take pride in staying at the forefront of contact lens innovation, offering the most advanced materials and designs available.",
      es: "Ya sea que sea nuevo en lentes de contacto o busque actualizar sus lentes actuales, nuestro enfoque personalizado le asegura que encontrará la solución perfecta. Nos enorgullecemos de estar a la vanguardia de la innovación en lentes de contacto, ofreciendo los materiales y diseños más avanzados disponibles.",
      ca: "Ja sigui que sigui nou en lents de contacte o busqui actualitzar les seves lents actuals, el nostre enfocament personalitzat li assegura que trobarà la solució perfecta. Ens enorgullim d'estar a l'avantguarda de la innovació en lents de contacte, oferint els materials i dissenys més avançats disponibles.",
    },
    viewCatalan: {
      en: "View in Catalan",
      es: "Ver en Catalán",
      ca: "Veure en Català",
    },
    fittingTitle: {
      en: "Our Contact Lens Fitting Process",
      es: "Nuestro Proceso de Adaptación de Lentes de Contacto",
      ca: "El Nostre Procés d'Adaptació de Lents de Contacte",
    },
    examination: {
      en: "Comprehensive Eye Examination",
      es: "Examen Ocular Completo",
      ca: "Examen Ocular Complet",
    },
    examinationDesc: {
      en: "We start with a thorough assessment of your eye health, vision needs, and lifestyle to determine the most appropriate contact lens options for you.",
      es: "Comenzamos con una evaluación exhaustiva de la salud de sus ojos, necesidades visuales y estilo de vida para determinar las opciones de lentes de contacto más apropiadas para usted.",
      ca: "Comencem amb una avaluació exhaustiva de la salut dels seus ulls, necessitats visuals i estil de vida per determinar les opcions de lents de contacte més apropiades per a vostè.",
    },
    mapping: {
      en: "Advanced Corneal Mapping",
      es: "Mapeo Corneal Avanzado",
      ca: "Mapatge Corneal Avançat",
    },
    mappingDesc: {
      en: "Using state-of-the-art technology, we create a detailed map of your cornea's shape to ensure the most precise fit for your contact lenses.",
      es: "Utilizando tecnología de vanguardia, creamos un mapa detallado de la forma de su córnea para asegurar el ajuste más preciso para sus lentes de contacto.",
      ca: "Utilitzant tecnologia d'avantguarda, creem un mapa detallat de la forma de la seva còrnia per assegurar l'ajust més precís per a les seves lents de contacte.",
    },
    lensSelection: {
      en: "Personalized Lens Selection",
      es: "Selección Personalizada de Lentes",
      ca: "Selecció Personalitzada de Lents",
    },
    lensSelectionDesc: {
      en: "Based on your examination results, we'll recommend the best contact lens options and provide trial lenses so you can experience them before making a decision.",
      es: "Basado en los resultados de su examen, recomendaremos las mejores opciones de lentes de contacto y proporcionaremos lentes de prueba para que pueda experimentarlas antes de tomar una decisión.",
      ca: "Basat en els resultats del seu examen, recomanarem les millors opcions de lents de contacte i proporcionarem lents de prova perquè pugui experimentar-les abans de prendre una decisió.",
    },
    training: {
      en: "Expert Training",
      es: "Entrenamiento Experto",
      ca: "Entrenament Expert",
    },
    trainingDesc: {
      en: "We provide comprehensive instruction on proper lens insertion, removal, and care techniques, ensuring you feel comfortable and confident with your new contact lenses.",
      es: "Proporcionamos instrucción completa sobre las técnicas adecuadas de inserción, extracción y cuidado de las lentes, asegurando que se sienta cómodo y confiado con sus nuevas lentes de contacto.",
      ca: "Proporcionem instrucció completa sobre les tècniques adequades d'inserció, extracció i cura de les lents, assegurant que se senti còmode i confiat amb les seves noves lents de contacte.",
    },
    typesTitle: {
      en: "Types of Contact Lenses We Offer",
      es: "Tipos de Lentes de Contacto que Ofrecemos",
      ca: "Tipus de Lents de Contacte que Oferim",
    },
    careTitle: {
      en: "Contact Lens Care and Compliance",
      es: "Cuidado y Cumplimiento de Lentes de Contacto",
      ca: "Cura i Compliment de Lents de Contacte",
    },
    commitmentTitle: {
      en: "Our Commitment to Ongoing Care",
      es: "Nuestro Compromiso con el Cuidado Continuo",
      ca: "El Nostre Compromís amb la Cura Contínua",
    },
  };
  
  return (
    <ServiceLayout
      title={content.title[language]}
      subtitle={content.subtitle[language]}
      image="/lovable-uploads/a99c44aa-a4a4-45a4-9616-1ef080bd49db.png"
      appointmentSubject="Contact Lens Consultation at Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.advancedTitle[language]}</h2>
          <p>{content.intro1[language]}</p>
          <p>{content.intro2[language]}</p>
          <div className="mt-8 text-center">
            <Button 
              onClick={() => navigate('/services/lents-contacte')}
              className="bg-[#2ecc71] hover:bg-[#ea384c] text-white"
            >
              {content.viewCatalan[language]}
            </Button>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.fittingTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.examination[language]}</h4>
                <p>{content.examinationDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.mapping[language]}</h4>
                <p>{content.mappingDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.lensSelection[language]}</h4>
                <p>{content.lensSelectionDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.training[language]}</h4>
                <p>{content.trainingDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.typesTitle[language]}</h3>
          
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
          <h2>{content.careTitle[language]}</h2>
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
          
          <h3>{content.commitmentTitle[language]}</h3>
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

