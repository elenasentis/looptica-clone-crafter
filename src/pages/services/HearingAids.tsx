
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Headphones, Bluetooth, Battery, Wifi } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const HearingAids = () => {
  const { t, language } = useLanguage();
  
  const content = {
    title: {
      en: "Advanced Hearing Aids",
      es: "Audífonos Avanzados",
      ca: "Audiòfons Avançats",
    },
    subtitle: {
      en: "High-quality hearing aids tailored to your specific needs and lifestyle",
      es: "Audífonos de alta calidad adaptados a sus necesidades específicas y estilo de vida",
      ca: "Audiòfons d'alta qualitat adaptats a les seves necessitats específiques i estil de vida",
    },
    solutionsTitle: {
      en: "Modern Hearing Solutions at Looptica",
      es: "Soluciones Auditivas Modernas en Looptica",
      ca: "Solucions Auditives Modernes a Looptica",
    },
    intro1: {
      en: "At Looptica, we offer the latest in hearing aid technology from world-leading manufacturers. Today's hearing aids are sophisticated, discreet devices that do much more than simply amplify sound. They use advanced digital processing to enhance speech understanding, reduce background noise, and provide a natural listening experience tailored to your specific hearing profile.",
      es: "En Looptica, ofrecemos lo último en tecnología de audífonos de fabricantes líderes mundiales. Los audífonos de hoy son dispositivos sofisticados y discretos que hacen mucho más que simplemente amplificar el sonido. Utilizan procesamiento digital avanzado para mejorar la comprensión del habla, reducir el ruido de fondo y proporcionar una experiencia auditiva natural adaptada a su perfil auditivo específico.",
      ca: "A Looptica, oferim el més recent en tecnologia d'audiòfons de fabricants líders mundials. Els audiòfons d'avui són dispositius sofisticats i discrets que fan molt més que simplement amplificar el so. Utilitzen processament digital avançat per millorar la comprensió de la parla, reduir el soroll de fons i proporcionar una experiència auditiva natural adaptada al seu perfil auditiu específic.",
    },
    intro2: {
      en: "Our audiologists are experts in matching the right hearing technology to your unique hearing loss, lifestyle needs, and personal preferences. We focus on finding solutions that integrate seamlessly with your life, whether you're an active professional, an avid music lover, or someone who enjoys quiet conversations with family and friends.",
      es: "Nuestros audiólogos son expertos en adaptar la tecnología auditiva adecuada a su pérdida auditiva única, necesidades de estilo de vida y preferencias personales. Nos enfocamos en encontrar soluciones que se integren perfectamente con su vida, ya sea un profesional activo, un ávido amante de la música o alguien que disfruta de conversaciones tranquilas con familiares y amigos.",
      ca: "Els nostres audiòlegs són experts en adaptar la tecnologia auditiva adequada a la seva pèrdua auditiva única, necessitats d'estil de vida i preferències personals. Ens enfoquem a trobar solucions que s'integrin perfectament amb la seva vida, ja sigui un professional actiu, un àvid amant de la música o algú que gaudeix de converses tranquil·les amb familiars i amics.",
    },
    featuresTitle: {
      en: "Cutting-Edge Hearing Aid Features",
      es: "Características de Vanguardia en Audífonos",
      ca: "Característiques d'Avantguarda en Audiòfons",
    },
    connectivity: {
      en: "Connectivity",
      es: "Conectividad",
      ca: "Connectivitat",
    },
    connectivityDesc: {
      en: "Modern hearing aids connect wirelessly to smartphones, TVs, and other devices, allowing you to stream calls, music, and other audio directly to your hearing aids for an enhanced listening experience.",
      es: "Los audífonos modernos se conectan de forma inalámbrica a teléfonos inteligentes, televisores y otros dispositivos, lo que le permite transmitir llamadas, música y otro audio directamente a sus audífonos para una experiencia auditiva mejorada.",
      ca: "Els audiòfons moderns es connecten sense fils a telèfons intel·ligents, televisors i altres dispositius, la qual cosa li permet transmetre trucades, música i altre àudio directament als seus audiòfons per a una experiència auditiva millorada.",
    },
    microphones: {
      en: "Directional Microphones",
      es: "Micrófonos Direccionales",
      ca: "Micròfons Direccionals",
    },
    microphonesDesc: {
      en: "Advanced microphone systems focus on sounds coming from in front of you while reducing noise from other directions, dramatically improving speech understanding in noisy environments.",
      es: "Los sistemas avanzados de micrófonos se centran en los sonidos que provienen de frente a usted mientras reducen el ruido de otras direcciones, mejorando dramáticamente la comprensión del habla en entornos ruidosos.",
      ca: "Els sistemes avançats de micròfons se centren en els sons que provenen de davant seu mentre redueixen el soroll d'altres direccions, millorant dramàticament la comprensió de la parla en entorns sorollosos.",
    },
    rechargeable: {
      en: "Rechargeable Technology",
      es: "Tecnología Recargable",
      ca: "Tecnologia Recarregable",
    },
    rechargeableDesc: {
      en: "Many of our hearing aids feature rechargeable batteries, eliminating the hassle of changing tiny batteries and providing all-day power with a simple overnight charge.",
      es: "Muchos de nuestros audífonos cuentan con baterías recargables, eliminando la molestia de cambiar pequeñas baterías y proporcionando energía durante todo el día con una simple carga durante la noche.",
      ca: "Molts dels nostres audiòfons compten amb bateries recarregables, eliminant la molèstia de canviar petites bateries i proporcionant energia durant tot el dia amb una simple càrrega durant la nit.",
    },
    apps: {
      en: "Smartphone Apps",
      es: "Aplicaciones para Smartphone",
      ca: "Aplicacions per a Smartphone",
    },
    appsDesc: {
      en: "Control your hearing aids discreetly from your smartphone, adjusting volume, changing programs, or fine-tuning settings to match your current environment.",
      es: "Controle sus audífonos discretamente desde su smartphone, ajustando el volumen, cambiando programas o ajustando la configuración para que coincida con su entorno actual.",
      ca: "Controli els seus audiòfons discretament des del seu smartphone, ajustant el volum, canviant programes o ajustant la configuració perquè coincideixi amb el seu entorn actual.",
    },
    stylesTitle: {
      en: "Hearing Aid Styles",
      es: "Estilos de Audífonos",
      ca: "Estils d'Audiòfons",
    },
    ricTitle: {
      en: "Receiver-In-Canal (RIC)",
      es: "Receptor en el Canal (RIC)",
      ca: "Receptor al Canal (RIC)",
    },
    ricDesc: {
      en: "Our most popular style, offering an excellent balance of discreet appearance, comfort, and performance. Suitable for mild to severe hearing loss.",
      es: "Nuestro estilo más popular, que ofrece un excelente equilibrio entre apariencia discreta, comodidad y rendimiento. Adecuado para pérdida auditiva de leve a severa.",
      ca: "El nostre estil més popular, que ofereix un excel·lent equilibri entre aparença discreta, comoditat i rendiment. Adequat per a pèrdua auditiva de lleu a severa.",
    },
    cicTitle: {
      en: "Completely-In-Canal (CIC)",
      es: "Completamente en el Canal (CIC)",
      ca: "Completament al Canal (CIC)",
    },
    cicDesc: {
      en: "Sits deep in the ear canal for a nearly invisible appearance. Ideal for mild to moderate hearing loss and those prioritizing cosmetic discretion.",
      es: "Se sienta profundamente en el canal auditivo para una apariencia casi invisible. Ideal para pérdida auditiva de leve a moderada y para aquellos que priorizan la discreción cosmética.",
      ca: "S'asseu profundament al canal auditiu per a una aparença gairebé invisible. Ideal per a pèrdua auditiva de lleu a moderada i per a aquells que prioritzen la discreció cosmètica.",
    },
    iteTitle: {
      en: "In-The-Ear (ITE)",
      es: "En la Oreja (ITE)",
      ca: "A l'Orella (ITE)",
    },
    iteDesc: {
      en: "Custom-made to fit in the outer portion of your ear, offering easy handling and featuring larger batteries for longer use between charges.",
      es: "Hechos a medida para ajustarse a la parte externa de su oreja, ofreciendo un fácil manejo y con baterías más grandes para un uso más prolongado entre cargas.",
      ca: "Fets a mida per ajustar-se a la part externa de la seva orella, oferint un fàcil maneig i amb bateries més grans per a un ús més prolongat entre càrregues.",
    },
    bteTitle: {
      en: "Behind-The-Ear (BTE)",
      es: "Detrás de la Oreja (BTE)",
      ca: "Darrere l'Orella (BTE)",
    },
    bteDesc: {
      en: "Provides the most power and features, making it suitable for all degrees of hearing loss, including profound. Robust and easy to handle.",
      es: "Proporciona la mayor potencia y características, lo que lo hace adecuado para todos los grados de pérdida auditiva, incluida la profunda. Robusto y fácil de manejar.",
      ca: "Proporciona la major potència i característiques, la qual cosa el fa adequat per a tots els graus de pèrdua auditiva, inclosa la profunda. Robust i fàcil de manejar.",
    },
    processTitle: {
      en: "Our Comprehensive Hearing Aid Process",
      es: "Nuestro Proceso Integral de Audífonos",
      ca: "El Nostre Procés Integral d'Audiòfons",
    },
    processIntro: {
      en: "At Looptica, fitting hearing aids is a thorough process designed to ensure optimal results:",
      es: "En Looptica, la adaptación de audífonos es un proceso minucioso diseñado para garantizar resultados óptimos:",
      ca: "A Looptica, l'adaptació d'audiòfons és un procés minuciós dissenyat per garantir resultats òptims:",
    },
    step1: {
      en: "Comprehensive Hearing Evaluation: We begin with a thorough assessment of your hearing to understand the type and degree of your hearing loss.",
      es: "Evaluación Auditiva Completa: Comenzamos con una evaluación exhaustiva de su audición para comprender el tipo y grado de su pérdida auditiva.",
      ca: "Avaluació Auditiva Completa: Comencem amb una avaluació exhaustiva de la seva audició per comprendre el tipus i grau de la seva pèrdua auditiva.",
    },
    step2: {
      en: "Lifestyle Assessment: We discuss your daily activities, listening environments, and specific challenges to determine the features and style that will benefit you most.",
      es: "Evaluación del Estilo de Vida: Discutimos sus actividades diarias, entornos de escucha y desafíos específicos para determinar las características y el estilo que más le beneficiarán.",
      ca: "Avaluació de l'Estil de Vida: Discutim les seves activitats diàries, entorns d'escolta i reptes específics per determinar les característiques i l'estil que més li beneficiaran.",
    },
    step3: {
      en: "Technology Recommendations: Based on your hearing profile and lifestyle needs, we'll recommend appropriate hearing aid options across different technology levels and price points.",
      es: "Recomendaciones Tecnológicas: Basado en su perfil auditivo y necesidades de estilo de vida, recomendaremos opciones adecuadas de audífonos a través de diferentes niveles de tecnología y puntos de precio.",
      ca: "Recomanacions Tecnològiques: Basat en el seu perfil auditiu i necessitats d'estil de vida, recomanarem opcions adequades d'audiòfons a través de diferents nivells de tecnologia i punts de preu.",
    },
    step4: {
      en: "Custom Fitting: Once you've selected your hearing aids, we ensure they fit comfortably and securely, whether they're custom-molded in-ear devices or precisely fitted external models.",
      es: "Ajuste Personalizado: Una vez que haya seleccionado sus audífonos, nos aseguramos de que se ajusten cómodamente y de forma segura, ya sean dispositivos moldeados a medida para el oído o modelos externos ajustados con precisión.",
      ca: "Ajust Personalitzat: Una vegada que hagi seleccionat els seus audiòfons, ens assegurem que s'ajustin còmodament i de forma segura, ja siguin dispositius modelats a mida per a l'orella o models externs ajustats amb precisió.",
    },
    step5: {
      en: "Personalized Programming: We program your hearing aids to your specific hearing prescription, fine-tuning them to provide optimal sound quality in your typical environments.",
      es: "Programación Personalizada: Programamos sus audífonos según su prescripción auditiva específica, ajustándolos para proporcionar una calidad de sonido óptima en sus entornos típicos.",
      ca: "Programació Personalitzada: Programem els seus audiòfons segons la seva prescripció auditiva específica, ajustant-los per proporcionar una qualitat de so òptima en els seus entorns típics.",
    },
    step6: {
      en: "Wearing Schedule and Care Instructions: We provide guidance on adapting to your new hearing aids, including a wearing schedule and proper cleaning and maintenance techniques.",
      es: "Horario de Uso e Instrucciones de Cuidado: Proporcionamos orientación sobre cómo adaptarse a sus nuevos audífonos, incluido un horario de uso y técnicas adecuadas de limpieza y mantenimiento.",
      ca: "Horari d'Ús i Instruccions de Cura: Proporcionem orientació sobre com adaptar-se als seus nous audiòfons, inclòs un horari d'ús i tècniques adequades de neteja i manteniment.",
    },
    step7: {
      en: "Follow-up Appointments: Regular check-ups allow us to make any necessary adjustments as you adapt to your hearing aids and to ensure they continue functioning optimally.",
      es: "Citas de Seguimiento: Los chequeos regulares nos permiten realizar los ajustes necesarios a medida que se adapta a sus audífonos y asegurar que continúen funcionando de manera óptima.",
      ca: "Cites de Seguiment: Els controls regulars ens permeten realitzar els ajustos necessaris a mesura que s'adapta als seus audiòfons i assegurar que continuïn funcionant de manera òptima.",
    },
    brandsTitle: {
      en: "Our Hearing Aid Brands",
      es: "Nuestras Marcas de Audífonos",
      ca: "Les Nostres Marques d'Audiòfons",
    },
    brandsIntro: {
      en: "We work with the world's leading hearing aid manufacturers, including:",
      es: "Trabajamos con los principales fabricantes de audífonos del mundo, incluyendo:",
      ca: "Treballem amb els principals fabricants d'audiòfons del món, incloent:",
    },
    supportTitle: {
      en: "Ongoing Support",
      es: "Soporte Continuo",
      ca: "Suport Continu",
    },
    supportIntro: {
      en: "Our relationship doesn't end once you receive your hearing aids. We provide comprehensive aftercare services, including:",
      es: "Nuestra relación no termina una vez que recibe sus audífonos. Proporcionamos servicios integrales de cuidado posterior, incluyendo:",
      ca: "La nostra relació no acaba una vegada que rep els seus audiòfons. Proporcionem serveis integrals de cura posterior, incloent:",
    },
    service1: {
      en: "Regular cleaning and maintenance checks",
      es: "Controles regulares de limpieza y mantenimiento",
      ca: "Controls regulars de neteja i manteniment",
    },
    service2: {
      en: "Programming adjustments as your hearing or needs change",
      es: "Ajustes de programación a medida que su audición o necesidades cambian",
      ca: "Ajustos de programació a mesura que la seva audició o necessitats canvien",
    },
    service3: {
      en: "Troubleshooting and repairs",
      es: "Solución de problemas y reparaciones",
      ca: "Solució de problemes i reparacions",
    },
    service4: {
      en: "Battery or accessory supplies",
      es: "Suministros de baterías o accesorios",
      ca: "Subministraments de bateries o accessoris",
    },
    service5: {
      en: "Annual hearing reassessments",
      es: "Reevaluaciones auditivas anuales",
      ca: "Reavaluacions auditives anuals",
    },
    outro: {
      en: "We're committed to being your long-term partner in hearing health, ensuring your hearing aids continue to perform optimally throughout their lifespan.",
      es: "Estamos comprometidos a ser su socio a largo plazo en la salud auditiva, asegurando que sus audífonos continúen funcionando de manera óptima durante toda su vida útil.",
      ca: "Estem compromesos a ser el seu soci a llarg termini en la salut auditiva, assegurant que els seus audiòfons continuïn funcionant de manera òptima durant tota la seva vida útil.",
    },
    appointmentSubject: {
      en: "Hearing Aid Consultation at Looptica",
      es: "Consulta de Audífonos en Looptica",
      ca: "Consulta d'Audiòfons a Looptica",
    },
  };
  
  return (
    <ServiceLayout
      title={content.title[language]}
      subtitle={content.subtitle[language]}
      image="/lovable-uploads/ebf49fd8-a596-41fb-a71e-097837111d0d.png"
      appointmentSubject={content.appointmentSubject[language]}
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.solutionsTitle[language]}</h2>
          <p>{content.intro1[language]}</p>
          <p>{content.intro2[language]}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.featuresTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Bluetooth className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.connectivity[language]}</h4>
                <p>{content.connectivityDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.microphones[language]}</h4>
                <p>{content.microphonesDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Battery className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.rechargeable[language]}</h4>
                <p>{content.rechargeableDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.apps[language]}</h4>
                <p>{content.appsDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.stylesTitle[language]}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.ricTitle[language]}</h4>
              <p>{content.ricDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.cicTitle[language]}</h4>
              <p>{content.cicDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.iteTitle[language]}</h4>
              <p>{content.iteDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.bteTitle[language]}</h4>
              <p>{content.bteDesc[language]}</p>
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
              <strong>{content.step1[language]}</strong>
            </li>
            <li>
              <strong>{content.step2[language]}</strong>
            </li>
            <li>
              <strong>{content.step3[language]}</strong>
            </li>
            <li>
              <strong>{content.step4[language]}</strong>
            </li>
            <li>
              <strong>{content.step5[language]}</strong>
            </li>
            <li>
              <strong>{content.step6[language]}</strong>
            </li>
            <li>
              <strong>{content.step7[language]}</strong>
            </li>
          </ol>
          <h3>{content.brandsTitle[language]}</h3>
          <p>
            {content.brandsIntro[language]}
          </p>
          <ul>
            <li>Oticon</li>
            <li>Phonak</li>
            <li>ReSound</li>
            <li>Signia</li>
            <li>Starkey</li>
            <li>Widex</li>
          </ul>
          <h3>{content.supportTitle[language]}</h3>
          <p>
            {content.supportIntro[language]}
          </p>
          <ul>
            <li>{content.service1[language]}</li>
            <li>{content.service2[language]}</li>
            <li>{content.service3[language]}</li>
            <li>{content.service4[language]}</li>
            <li>{content.service5[language]}</li>
          </ul>
          <p>
            {content.outro[language]}
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default HearingAids;
