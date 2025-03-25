import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Glasses, PenTool, Shapes, BarChart3 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const Eyeglasses = () => {
  const { t, language } = useLanguage();
  
  // Translations for this page
  const content = {
    title: {
      en: 'Premium Eyeglasses Collection',
      es: 'Colección Premium de Gafas',
      ca: 'Col·lecció Premium d\'Ulleres',
    },
    intro1: {
      en: 'At Looptica, we believe that eyeglasses are more than just a visual aid—they\'re an extension of your personality and style. Our carefully curated collection features frames from the world\'s most prestigious designers and brands, ensuring that you\'ll find the perfect pair that complements your face shape, lifestyle, and personal aesthetic.',
      es: 'En Looptica, creemos que las gafas son mucho más que una ayuda visual; son una extensión de tu personalidad y estilo. Nuestra colección cuidadosamente seleccionada presenta monturas de los diseñadores y marcas más prestigiosos del mundo, asegurando que encontrarás el par perfecto que complementa la forma de tu rostro, estilo de vida y estética personal.',
      ca: 'A Looptica, creiem que les ulleres són molt més que una ajuda visual; són una extensió de la teva personalitat i estil. La nostra col·lecció acuradament seleccionada presenta muntures dels dissenyadors i marques més prestigiosos del món, assegurant que trobaràs el parell perfecte que complementa la forma del teu rostre, estil de vida i estètica personal.',
    },
    intro2: {
      en: 'Each frame in our collection is selected for its exceptional quality, innovative design, and comfortable fit. Whether you\'re looking for something classic and understated or bold and fashion-forward, our extensive range has options to suit every preference.',
      es: 'Cada montura de nuestra colección es seleccionada por su calidad excepcional, diseño innovador y ajuste cómodo. Ya sea que busques algo clásico y discreto o atrevido y a la moda, nuestra amplia gama tiene opciones para satisfacer todas las preferencias.',
      ca: 'Cada muntura de la nostra col·lecció és seleccionada per la seva qualitat excepcional, disseny innovador i ajust còmode. Ja sigui que busquis alguna cosa clàssica i discreta o atrevida i a la moda, la nostra àmplia gamma té opcions per satisfer totes les preferències.',
    },
    lensTitle: {
      en: 'Our Premium Lens Technology',
      es: 'Nuestra Tecnología Premium de Lentes',
      ca: 'La Nostra Tecnologia Premium de Lents',
    },
    hdLenses: {
      en: 'High-Definition Digital Lenses',
      es: 'Lentes Digitales de Alta Definición',
      ca: 'Lents Digitals d\'Alta Definició',
    },
    hdLensesDesc: {
      en: 'Our digitally-surfaced lenses provide superior clarity and visual comfort compared to traditional lenses, reducing eye strain and fatigue even after long hours of wear.',
      es: 'Nuestras lentes con superficie digital proporcionan una claridad superior y comodidad visual en comparación con las lentes tradicionales, reduciendo la fatiga ocular incluso después de largas horas de uso.',
      ca: 'Les nostres lents amb superfície digital proporcionen una claredat superior i comoditat visual en comparació amb les lents tradicionals, reduint la fatiga ocular fins i tot després de llargues hores d\'ús.',
    },
    progressive: {
      en: 'Progressive Lenses',
      es: 'Lentes Progresivas',
      ca: 'Lents Progressives',
    },
    progressiveDesc: {
      en: 'Our advanced progressive lenses provide seamless transition between distances without visible lines, offering natural vision correction for presbyopia.',
      es: 'Nuestras lentes progresivas avanzadas proporcionan una transición sin problemas entre distancias sin líneas visibles, ofreciendo una corrección natural de la visión para la presbicia.',
      ca: 'Les nostres lents progressives avançades proporcionen una transició sense problemes entre distàncies sense línies visibles, oferint una correcció natural de la visió per a la presbícia.',
    },
    antiReflective: {
      en: 'Anti-Reflective Coatings',
      es: 'Revestimientos Antirreflejantes',
      ca: 'Revestiments Antireflectants',
    },
    antiReflectiveDesc: {
      en: 'Eliminate distracting reflections, reduce glare, and improve night vision while enhancing the appearance of your glasses by making the lenses nearly invisible.',
      es: 'Elimina los reflejos molestos, reduce el deslumbramiento y mejora la visión nocturna, a la vez que mejora la apariencia de tus gafas al hacer que las lentes sean casi invisibles.',
      ca: 'Elimina els reflexos molestos, redueix l\'enlluernament i millora la visió nocturna, alhora que millora l\'aparença de les teves ulleres en fer que les lents siguin gairebé invisibles.',
    },
    blueLight: {
      en: 'Blue Light Protection',
      es: 'Protección Contra Luz Azul',
      ca: 'Protecció Contra Llum Blava',
    },
    blueLightDesc: {
      en: 'Our specialized lenses filter out harmful blue light from digital screens, reducing eye strain and potentially improving sleep patterns for heavy computer users.',
      es: 'Nuestras lentes especializadas filtran la luz azul dañina de las pantallas digitales, reduciendo la fatiga ocular y potencialmente mejorando los patrones de sueño para los usuarios frecuentes de computadoras.',
      ca: 'Les nostres lents especialitzades filtren la llum blava nociva de les pantalles digitals, reduint la fatiga ocular i potencialment millorant els patrons de son per als usuaris freqüents d\'ordinadors.',
    },
    brandsTitle: {
      en: 'Featured Designer Brands',
      es: 'Marcas de Diseñador Destacadas',
      ca: 'Marques de Dissenyador Destacades',
    },
    fittingTitle: {
      en: 'Our Personalized Fitting Process',
      es: 'Nuestro Proceso de Adaptación Personalizado',
      ca: 'El Nostre Procés d\'Adaptació Personalitzat',
    },
    fittingDesc: {
      en: 'At Looptica, we understand that properly fitted eyeglasses are essential not only for optimal vision but also for comfort and appearance. Our comprehensive fitting process ensures that your new eyeglasses will work perfectly for your specific needs:',
      es: 'En Looptica, entendemos que unas gafas correctamente ajustadas son esenciales no solo para una visión óptima, sino también para la comodidad y la apariencia. Nuestro proceso de adaptación integral asegura que sus nuevas gafas funcionarán perfectamente para sus necesidades específicas:',
      ca: 'A Looptica, entenem que unes ulleres correctament ajustades són essencials no només per a una visió òptima, sinó també per a la comoditat i l\'aparença. El nostre procés d\'adaptació integral assegura que les seves noves ulleres funcionaran perfectament per a les seves necessitats específiques:',
    },
    guaranteeTitle: {
      en: 'Quality Guarantee',
      es: 'Garantía de Calidad',
      ca: 'Garantia de Qualitat',
    },
    guaranteeDesc: {
      en: 'Every pair of eyeglasses from Looptica comes with our comprehensive quality guarantee:',
      es: 'Cada par de gafas de Looptica viene con nuestra garantía de calidad integral:',
      ca: 'Cada parell d\'ulleres de Looptica ve amb la nostra garantia de qualitat integral:',
    },
  };
  
  return (
    <ServiceLayout
      title={t('eyeglasses')}
      subtitle={t('eyeglassesSubtitle')}
      image="/lovable-uploads/45087a9c-489a-4d48-82fb-d857e7bf306a.png"
      appointmentSubject="Eyeglasses Consultation at Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.title[language]}</h2>
          <p>{content.intro1[language]}</p>
          <p>{content.intro2[language]}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.lensTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Glasses className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.hdLenses[language]}</h4>
                <p>{content.hdLensesDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.progressive[language]}</h4>
                <p>{content.progressiveDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Shapes className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.antiReflective[language]}</h4>
                <p>{content.antiReflectiveDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.blueLight[language]}</h4>
                <p>{content.blueLightDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.brandsTitle[language]}</h3>
          
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
          <h2>{content.fittingTitle[language]}</h2>
          <p>
            {content.fittingDesc[language]}
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
          
          <h3>{content.guaranteeTitle[language]}</h3>
          <p>
            {content.guaranteeDesc[language]}
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
