
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Shield, Music, Droplet, Headphones } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const EarProtection = () => {
  const { t, language } = useLanguage();
  
  const content = {
    title: {
      en: "Custom Ear Protection",
      es: "Protección Auditiva Personalizada",
      ca: "Protecció Auditiva Personalitzada",
    },
    subtitle: {
      en: "Custom-made ear plugs designed for comfort and optimal noise protection",
      es: "Tapones para los oídos hechos a medida diseñados para comodidad y protección óptima contra el ruido",
      ca: "Taps per a les orelles fets a mida dissenyats per a comoditat i protecció òptima contra el soroll",
    },
    introTitle: {
      en: "Protecting Your Most Valuable Sense",
      es: "Protegiendo Tu Sentido Más Valioso",
      ca: "Protegint El Teu Sentit Més Valuós",
    },
    intro1: {
      en: "Hearing loss from noise exposure is permanent but entirely preventable. At Looptica, we specialize in custom-fitted ear protection solutions that effectively shield your ears from harmful noise levels while maintaining sound clarity and comfort.",
      es: "La pérdida auditiva por exposición al ruido es permanente pero totalmente prevenible. En Looptica, nos especializamos en soluciones de protección auditiva personalizadas que protegen eficazmente sus oídos de niveles de ruido dañinos, manteniendo la claridad del sonido y la comodidad.",
      ca: "La pèrdua auditiva per exposició al soroll és permanent però totalment prevenible. A Looptica, ens especialitzem en solucions de protecció auditiva personalitzades que protegeixen eficaçment les seves orelles de nivells de soroll nocius, mantenint la claredat del so i la comoditat.",
    },
    intro2: {
      en: "Unlike one-size-fits-all ear protection options, our custom solutions are precisely molded to the unique contours of your ears, providing a perfect seal, superior comfort for extended wear, and targeted protection tailored to your specific activities and environments.",
      es: "A diferencia de las opciones de protección auditiva de talla única, nuestras soluciones personalizadas se moldean con precisión a los contornos únicos de sus oídos, proporcionando un sellado perfecto, mayor comodidad para uso prolongado y protección específica adaptada a sus actividades y entornos específicos.",
      ca: "A diferència de les opcions de protecció auditiva de talla única, les nostres solucions personalitzades es modelen amb precisió als contorns únics de les seves orelles, proporcionant un segellat perfecte, major comoditat per a ús prolongat i protecció específica adaptada a les seves activitats i entorns específics.",
    },
    importanceTitle: {
      en: "The Importance of Custom Ear Protection",
      es: "La Importancia de la Protección Auditiva Personalizada",
      ca: "La Importància de la Protecció Auditiva Personalitzada",
    },
    precisionTitle: {
      en: "Precision Protection",
      es: "Protección de Precisión",
      ca: "Protecció de Precisió",
    },
    precisionDesc: {
      en: "Custom-fit earplugs provide a perfect acoustic seal, ensuring consistent noise reduction and eliminating the gaps that allow harmful sounds to reach your inner ear.",
      es: "Los tapones auditivos personalizados proporcionan un sellado acústico perfecto, asegurando una reducción constante del ruido y eliminando los espacios que permiten que los sonidos dañinos lleguen al oído interno.",
      ca: "Els taps auditius personalitzats proporcionen un segellat acústic perfecte, assegurant una reducció constant del soroll i eliminant els espais que permeten que els sons nocius arribin a l'oïda interna.",
    },
    soundTitle: {
      en: "Sound Quality",
      es: "Calidad de Sonido",
      ca: "Qualitat de So",
    },
    soundDesc: {
      en: "Specialized filters can reduce volume while preserving sound clarity and speech intelligibility, unlike foam earplugs that muffle sound indiscriminately.",
      es: "Los filtros especializados pueden reducir el volumen mientras preservan la claridad del sonido y la inteligibilidad del habla, a diferencia de los tapones de espuma que amortiguan el sonido indiscriminadamente.",
      ca: "Els filtres especialitzats poden reduir el volum mentre preserven la claredat del so i la intel·ligibilitat de la parla, a diferència dels taps d'escuma que esmorteeixen el so indiscriminadament.",
    },
    comfortTitle: {
      en: "All-Day Comfort",
      es: "Comodidad Durante Todo el Día",
      ca: "Comoditat Durant Tot el Dia",
    },
    comfortDesc: {
      en: "Precisely molded to your ear's unique shape, custom ear protection eliminates pressure points and irritation, allowing for comfortable extended wear.",
      es: "Moldeados con precisión a la forma única de su oído, la protección auditiva personalizada elimina los puntos de presión y la irritación, permitiendo un uso prolongado y cómodo.",
      ca: "Modelats amb precisió a la forma única de la seva orella, la protecció auditiva personalitzada elimina els punts de pressió i la irritació, permetent un ús prolongat i còmode.",
    },
    durabilityTitle: {
      en: "Longevity",
      es: "Longevidad",
      ca: "Longevitat",
    },
    durabilityDesc: {
      en: "Made from durable, medical-grade materials, custom ear protection provides years of reliable use with proper care, making them a sound investment in your hearing health.",
      es: "Fabricados con materiales duraderos de grado médico, la protección auditiva personalizada proporciona años de uso confiable con el cuidado adecuado, convirtiéndolos en una inversión sólida para su salud auditiva.",
      ca: "Fabricats amb materials duradors de grau mèdic, la protecció auditiva personalitzada proporciona anys d'ús confiable amb la cura adequada, convertint-los en una inversió sòlida per a la seva salut auditiva.",
    },
    solutionsTitle: {
      en: "Specialized Custom Ear Protection Solutions",
      es: "Soluciones Especializadas de Protección Auditiva Personalizada",
      ca: "Solucions Especialitzades de Protecció Auditiva Personalitzada",
    },
    musiciansTitle: {
      en: "Musician's Earplugs",
      es: "Tapones para Músicos",
      ca: "Taps per a Músics",
    },
    musiciansDesc: {
      en: "Designed for musicians, concert-goers, and music enthusiasts, these earplugs reduce volume while maintaining sound quality across all frequencies, preserving musical clarity and detail.",
      es: "Diseñados para músicos, asistentes a conciertos y entusiastas de la música, estos tapones reducen el volumen mientras mantienen la calidad del sonido en todas las frecuencias, preservando la claridad y el detalle musical.",
      ca: "Dissenyats per a músics, assistents a concerts i entusiastes de la música, aquests taps redueixen el volum mentre mantenen la qualitat del so en totes les freqüències, preservant la claredat i el detall musical.",
    },
    industrialTitle: {
      en: "Industrial Hearing Protection",
      es: "Protección Auditiva Industrial",
      ca: "Protecció Auditiva Industrial",
    },
    industrialDesc: {
      en: "Robust protection for construction, manufacturing, and other high-noise workplaces, offering high noise reduction ratings while maintaining communication ability when needed.",
      es: "Protección robusta para construcción, fabricación y otros lugares de trabajo con alto ruido, ofreciendo altas calificaciones de reducción de ruido mientras mantiene la capacidad de comunicación cuando es necesario.",
      ca: "Protecció robusta per a construcció, fabricació i altres llocs de treball amb alt soroll, oferint altes qualificacions de reducció de soroll mentre manté la capacitat de comunicació quan és necessari.",
    },
    shootingTitle: {
      en: "Shooting and Hunting Protection",
      es: "Protección para Tiro y Caza",
      ca: "Protecció per a Tir i Caça",
    },
    shootingDesc: {
      en: "Specialized acoustic filters that instantly close upon detecting gunshot impulse noise while allowing normal conversation and environmental awareness during quieter periods.",
      es: "Filtros acústicos especializados que se cierran instantáneamente al detectar ruido de impulso de disparo mientras permiten la conversación normal y la conciencia ambiental durante períodos más silenciosos.",
      ca: "Filtres acústics especialitzats que es tanquen instantàniament en detectar soroll d'impuls de tret mentre permeten la conversa normal i la consciència ambiental durant períodes més silenciosos.",
    },
    motorTitle: {
      en: "Motorcycle and Motorsport Earplugs",
      es: "Tapones para Motocicletas y Deportes de Motor",
      ca: "Taps per a Motocicletes i Esports de Motor",
    },
    motorDesc: {
      en: "Reduce wind noise and engine roar while maintaining awareness of traffic and communication systems, preventing fatigue and protecting hearing during long rides.",
      es: "Reducen el ruido del viento y el rugido del motor mientras mantienen la conciencia del tráfico y los sistemas de comunicación, previniendo la fatiga y protegiendo la audición durante viajes largos.",
      ca: "Redueixen el soroll del vent i el rugit del motor mentre mantenen la consciència del trànsit i els sistemes de comunicació, prevenint la fatiga i protegint l'audició durant viatges llargs.",
    },
    swimTitle: {
      en: "Swimmer's Earplugs",
      es: "Tapones para Nadadores",
      ca: "Taps per a Nedadors",
    },
    swimDesc: {
      en: "Waterproof protection that prevents water entry while swimming, showering, or participating in water sports, particularly beneficial for those prone to ear infections or who have ear tubes.",
      es: "Protección impermeable que evita la entrada de agua mientras nada, se ducha o participa en deportes acuáticos, particularmente beneficiosa para aquellos propensos a infecciones de oído o que tienen tubos de ventilación.",
      ca: "Protecció impermeable que evita l'entrada d'aigua mentre neda, es dutxa o participa en esports aquàtics, particularment beneficiosa per a aquells propensos a infeccions d'orella o que tenen tubs de ventilació.",
    },
    sleepTitle: {
      en: "Sleep and Concentration Earplugs",
      es: "Tapones para Dormir y Concentración",
      ca: "Taps per a Dormir i Concentració",
    },
    sleepDesc: {
      en: "Designed for comfortable overnight wear or extended use during study or work, these earplugs reduce ambient noise while allowing you to hear important sounds like alarm clocks or doorbells.",
      es: "Diseñados para uso cómodo durante la noche o uso prolongado durante el estudio o trabajo, estos tapones reducen el ruido ambiental mientras le permiten escuchar sonidos importantes como despertadores o timbres.",
      ca: "Dissenyats per a ús còmode durant la nit o ús prolongat durant l'estudi o treball, aquests taps redueixen el soroll ambiental mentre li permeten escoltar sons importants com a despertadors o timbres.",
    },
    processTitle: {
      en: "Our Custom Ear Protection Process",
      es: "Nuestro Proceso de Protección Auditiva Personalizada",
      ca: "El Nostre Procés de Protecció Auditiva Personalitzada",
    },
    processIntro: {
      en: "Creating your perfect custom ear protection involves a straightforward process:",
      es: "La creación de su protección auditiva personalizada perfecta implica un proceso sencillo:",
      ca: "La creació de la seva protecció auditiva personalitzada perfecta implica un procés senzill:",
    },
    consultation: {
      en: "Consultation: We discuss your specific protection needs, environments, and preferences to recommend the appropriate type of custom ear protection.",
      es: "Consulta: Discutimos sus necesidades específicas de protección, entornos y preferencias para recomendar el tipo apropiado de protección auditiva personalizada.",
      ca: "Consulta: Discutim les seves necessitats específiques de protecció, entorns i preferències per recomanar el tipus apropiat de protecció auditiva personalitzada.",
    },
    impression: {
      en: "Ear Impression: Our audiologist takes precise silicone impressions of your ear canals and outer ears, a quick and comfortable process that captures every contour.",
      es: "Impresión del Oído: Nuestro audiólogo toma impresiones precisas de silicona de sus canales auditivos y orejas externas, un proceso rápido y cómodo que captura cada contorno.",
      ca: "Impressió de l'Orella: El nostre audiòleg pren impressions precises de silicona dels seus canals auditius i orelles externes, un procés ràpid i còmode que captura cada contorn.",
    },
    design: {
      en: "Design Selection: You choose the appropriate sound filter technology, color options, and any additional features for your custom earplugs.",
      es: "Selección de Diseño: Usted elige la tecnología de filtro de sonido adecuada, opciones de color y cualquier característica adicional para sus tapones personalizados.",
      ca: "Selecció de Disseny: Vostè tria la tecnologia de filtre de so adequada, opcions de color i qualsevol característica addicional per als seus taps personalitzats.",
    },
    manufacturing: {
      en: "Manufacturing: Your ear impressions are sent to a specialized laboratory where your custom ear protection is precision-crafted using medical-grade materials.",
      es: "Fabricación: Sus impresiones de oído se envían a un laboratorio especializado donde su protección auditiva personalizada se fabrica con precisión utilizando materiales de grado médico.",
      ca: "Fabricació: Les seves impressions d'orella s'envien a un laboratori especialitzat on la seva protecció auditiva personalitzada es fabrica amb precisió utilitzant materials de grau mèdic.",
    },
    fitting: {
      en: "Fitting and Instruction: When your custom ear protection is ready (typically within 2-3 weeks), we ensure a perfect fit and provide detailed care and usage instructions.",
      es: "Ajuste e Instrucción: Cuando su protección auditiva personalizada está lista (típicamente dentro de 2-3 semanas), nos aseguramos de un ajuste perfecto y proporcionamos instrucciones detalladas de cuidado y uso.",
      ca: "Ajust i Instrucció: Quan la seva protecció auditiva personalitzada està llesta (típicament dins de 2-3 setmanes), ens assegurem d'un ajust perfecte i proporcionem instruccions detallades de cura i ús.",
    },
    followup: {
      en: "Follow-up Support: We offer ongoing support, adjustments if needed, and regular check-ups to ensure your ear protection continues to provide optimal protection.",
      es: "Soporte de Seguimiento: Ofrecemos soporte continuo, ajustes si es necesario y chequeos regulares para asegurar que su protección auditiva continúe proporcionando una protección óptima.",
      ca: "Suport de Seguiment: Oferim suport continu, ajustos si és necessari i controls regulars per assegurar que la seva protecció auditiva continuï proporcionant una protecció òptima.",
    },
    whenTitle: {
      en: "When Hearing Protection Is Essential",
      es: "Cuándo la Protección Auditiva Es Esencial",
      ca: "Quan la Protecció Auditiva És Essencial",
    },
    whenIntro: {
      en: "Hearing protection should be used in any environment where noise levels exceed 85 decibels (dB) for extended periods. Common situations requiring hearing protection include:",
      es: "La protección auditiva debe usarse en cualquier entorno donde los niveles de ruido excedan los 85 decibelios (dB) durante períodos prolongados. Las situaciones comunes que requieren protección auditiva incluyen:",
      ca: "La protecció auditiva s'ha d'utilitzar en qualsevol entorn on els nivells de soroll excedeixin els 85 decibels (dB) durant períodes prolongats. Les situacions comunes que requereixen protecció auditiva inclouen:",
    },
    situation1: {
      en: "Concert venues and music festivals (typically 100-120 dB)",
      es: "Lugares de conciertos y festivales de música (típicamente 100-120 dB)",
      ca: "Llocs de concerts i festivals de música (típicament 100-120 dB)",
    },
    situation2: {
      en: "Sporting events (90-110 dB)",
      es: "Eventos deportivos (90-110 dB)",
      ca: "Esdeveniments esportius (90-110 dB)",
    },
    situation3: {
      en: "Construction sites (90-110 dB)",
      es: "Sitios de construcción (90-110 dB)",
      ca: "Llocs de construcció (90-110 dB)",
    },
    situation4: {
      en: "Manufacturing facilities (90-115 dB)",
      es: "Instalaciones de fabricación (90-115 dB)",
      ca: "Instal·lacions de fabricació (90-115 dB)",
    },
    situation5: {
      en: "Shooting ranges (140-170 dB impulse noise)",
      es: "Campos de tiro (140-170 dB ruido de impulso)",
      ca: "Camps de tir (140-170 dB soroll d'impuls)",
    },
    situation6: {
      en: "Motorcycling (80-105 dB from wind and engine noise)",
      es: "Motociclismo (80-105 dB de ruido de viento y motor)",
      ca: "Motociclisme (80-105 dB de soroll de vent i motor)",
    },
    situation7: {
      en: "Power tools and lawn equipment (90-110 dB)",
      es: "Herramientas eléctricas y equipos de jardín (90-110 dB)",
      ca: "Eines elèctriques i equips de jardí (90-110 dB)",
    },
    situation8: {
      en: "Nightclubs and bars (95-115 dB)",
      es: "Discotecas y bares (95-115 dB)",
      ca: "Discoteques i bars (95-115 dB)",
    },
    outro: {
      en: "Remember that noise-induced hearing loss is cumulative and irreversible. Investing in quality custom ear protection now is an investment in your lifelong hearing health and quality of life.",
      es: "Recuerde que la pérdida auditiva inducida por ruido es acumulativa e irreversible. Invertir en protección auditiva personalizada de calidad ahora es una inversión en su salud auditiva y calidad de vida de por vida.",
      ca: "Recordi que la pèrdua auditiva induïda pel soroll és acumulativa i irreversible. Invertir en protecció auditiva personalitzada de qualitat ara és una inversió en la seva salut auditiva i qualitat de vida de per vida.",
    },
    appointmentSubject: {
      en: "Custom Ear Protection Consultation at Looptica",
      es: "Consulta de Protección Auditiva Personalizada en Looptica",
      ca: "Consulta de Protecció Auditiva Personalitzada a Looptica",
    },
  };
  
  return (
    <ServiceLayout
      title={content.title[language]}
      subtitle={content.subtitle[language]}
      image="/images/moldes-a-medida-1.jpg"
      appointmentSubject={content.appointmentSubject[language]}
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.introTitle[language]}</h2>
          <p>{content.intro1[language]}</p>
          <p>{content.intro2[language]}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.importanceTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.precisionTitle[language]}</h4>
                <p>{content.precisionDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.soundTitle[language]}</h4>
                <p>{content.soundDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.comfortTitle[language]}</h4>
                <p>{content.comfortDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.durabilityTitle[language]}</h4>
                <p>{content.durabilityDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.solutionsTitle[language]}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.musiciansTitle[language]}</h4>
              <p>{content.musiciansDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.industrialTitle[language]}</h4>
              <p>{content.industrialDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.shootingTitle[language]}</h4>
              <p>{content.shootingDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.motorTitle[language]}</h4>
              <p>{content.motorDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.swimTitle[language]}</h4>
              <p>{content.swimDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.sleepTitle[language]}</h4>
              <p>{content.sleepDesc[language]}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.processTitle[language]}</h2>
          <p>
            {content.processIntro[language]}
          </p>
          <ol>
            <li>
              <strong>{content.consultation[language]}</strong>
            </li>
            <li>
              <strong>{content.impression[language]}</strong>
            </li>
            <li>
              <strong>{content.design[language]}</strong>
            </li>
            <li>
              <strong>{content.manufacturing[language]}</strong>
            </li>
            <li>
              <strong>{content.fitting[language]}</strong>
            </li>
            <li>
              <strong>{content.followup[language]}</strong>
            </li>
          </ol>
          <h3>{content.whenTitle[language]}</h3>
          <p>
            {content.whenIntro[language]}
          </p>
          <ul>
            <li>{content.situation1[language]}</li>
            <li>{content.situation2[language]}</li>
            <li>{content.situation3[language]}</li>
            <li>{content.situation4[language]}</li>
            <li>{content.situation5[language]}</li>
            <li>{content.situation6[language]}</li>
            <li>{content.situation7[language]}</li>
            <li>{content.situation8[language]}</li>
          </ul>
          <p>
            {content.outro[language]}
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default EarProtection;
