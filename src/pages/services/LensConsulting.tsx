
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, Zap, Shield, Layers } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const LensConsulting = () => {
  const { language } = useLanguage();
  
  return (
    <ServiceLayout
      title={language === 'ca' ? "Assessorament de Lents" : (language === 'es' ? "Asesoramiento de Lentes" : "Lens Consulting")}
      subtitle={language === 'ca' ? "Solucions avançades per a les teves necessitats visuals" : (language === 'es' ? "Soluciones avanzadas para tus necesidades visuales" : "Advanced solutions for your visual needs")}
      image="/lovable-uploads/a99c44aa-a4a4-45a4-9616-1ef080bd49db.png"
      appointmentSubject={language === 'ca' ? "Consulta d'Assessorament de Lents a Looptica" : (language === 'es' ? "Consulta de Asesoramiento de Lentes en Looptica" : "Lens Consulting Appointment at Looptica")}
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{language === 'ca' ? "Tecnologia de lents avançada" : (language === 'es' ? "Tecnología de lentes avanzada" : "Advanced Lens Technology")}</h2>
          <p>
            {language === 'ca' ? 
              "A Looptica, som especialistes en lents oftàlmiques d'alta tecnologia dissenyades per oferir la millor claredat visual, comoditat i protecció. Les lents modernes són molt més que simples peces de vidre o plàstic; són productes de precisió que integren tecnologies avançades per satisfer les necessitats visuals específiques de cada individu." 
              : (language === 'es' ? 
                "En Looptica, somos especialistas en lentes oftálmicas de alta tecnología diseñadas para ofrecer la mejor claridad visual, comodidad y protección. Las lentes modernas son mucho más que simples piezas de vidrio o plástico; son productos de precisión que integran tecnologías avanzadas para satisfacer las necesidades visuales específicas de cada individuo." 
                : 
                "At Looptica, we specialize in high-tech ophthalmic lenses designed to deliver the best visual clarity, comfort, and protection. Modern lenses are much more than simple pieces of glass or plastic; they are precision products that integrate advanced technologies to meet the specific visual needs of each individual.")}
          </p>
          <p>
            {language === 'ca' ? 
              "El nostre servei d'assessorament de lents està dissenyat per guiar-te a través de les nombroses opcions disponibles, assegurant que obtinguis les lents més adequades per a la teva prescripció, estil de vida i preferències personals. Utilitzant tecnologia d'avantguarda i el nostre coneixement expert, personalitzem les solucions de lents per oferir una experiència visual òptima." 
              : (language === 'es' ? 
                "Nuestro servicio de asesoramiento de lentes está diseñado para guiarte a través de las numerosas opciones disponibles, asegurando que obtengas las lentes más adecuadas para tu prescripción, estilo de vida y preferencias personales. Utilizando tecnología de vanguardia y nuestro conocimiento experto, personalizamos las soluciones de lentes para ofrecer una experiencia visual óptima." 
                : 
                "Our lens consulting service is designed to guide you through the numerous options available, ensuring you get the most suitable lenses for your prescription, lifestyle, and personal preferences. Using cutting-edge technology and our expert knowledge, we customize lens solutions to deliver an optimal visual experience.")}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            {language === 'ca' ? "Les nostres tecnologies de lents avançades" : (language === 'es' ? "Nuestras tecnologías de lentes avanzadas" : "Our Advanced Lens Technologies")}
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">
                  {language === 'ca' ? "Lents d'alta definició" : (language === 'es' ? "Lentes de alta definición" : "High-Definition Lenses")}
                </h4>
                <p>
                  {language === 'ca' ? 
                    "Desenvolupades mitjançant tecnologia de fresat digital, aquestes lents ofereixen una claredat visual superior amb un camp visual més ampli i una reducció significativa de les distorsions perifèriques." 
                    : (language === 'es' ? 
                      "Desarrolladas mediante tecnología de fresado digital, estas lentes ofrecen una claridad visual superior con un campo visual más amplio y una reducción significativa de las distorsiones periféricas." 
                      : 
                      "Developed using digital surfacing technology, these lenses offer superior visual clarity with a wider field of vision and significantly reduced peripheral distortions.")}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">
                  {language === 'ca' ? "Lents progressives avançades" : (language === 'es' ? "Lentes progresivas avanzadas" : "Advanced Progressive Lenses")}
                </h4>
                <p>
                  {language === 'ca' ? 
                    "Les nostres lents progressives d'última generació proporcionen una transició perfecta entre visió de lluny, intermèdia i propera, amb zones de distorsió mínimes i un període d'adaptació més curt." 
                    : (language === 'es' ? 
                      "Nuestras lentes progresivas de última generación proporcionan una transición perfecta entre visión de lejos, intermedia y cercana, con zonas de distorsión mínimas y un período de adaptación más corto." 
                      : 
                      "Our state-of-the-art progressive lenses provide seamless transition between distance, intermediate, and near vision, with minimal distortion zones and a shorter adaptation period.")}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">
                  {language === 'ca' ? "Protecció de llum blava" : (language === 'es' ? "Protección de luz azul" : "Blue Light Protection")}
                </h4>
                <p>
                  {language === 'ca' ? 
                    "Lents especialitzades que filtren la llum blava nociva dels dispositius digitals, reduint la fatiga ocular, millorant el confort visual durant l'ús prolongat de pantalles i potencialment millorant els patrons de son." 
                    : (language === 'es' ? 
                      "Lentes especializadas que filtran la luz azul nociva de los dispositivos digitales, reduciendo la fatiga ocular, mejorando el confort visual durante el uso prolongado de pantallas y potencialmente mejorando los patrones de sueño." 
                      : 
                      "Specialized lenses that filter harmful blue light from digital devices, reducing eye strain, improving visual comfort during prolonged screen use, and potentially improving sleep patterns.")}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">
                  {language === 'ca' ? "Revestiments premium" : (language === 'es' ? "Revestimientos premium" : "Premium Coatings")}
                </h4>
                <p>
                  {language === 'ca' ? 
                    "Oferim revestiments anti-reflectants d'alt rendiment, capes resistents als ratllats, tractaments hidròfobs i protecció UV per millorar la durabilitat, claredat i protecció de les teves lents." 
                    : (language === 'es' ? 
                      "Ofrecemos revestimientos anti-reflectantes de alto rendimiento, capas resistentes a los arañazos, tratamientos hidrófobos y protección UV para mejorar la durabilidad, claridad y protección de tus lentes." 
                      : 
                      "We offer high-performance anti-reflective coatings, scratch-resistant layers, hydrophobic treatments, and UV protection to enhance the durability, clarity, and protection of your lenses.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            {language === 'ca' ? "Solucions personalitzades per a diferents necessitats" : (language === 'es' ? "Soluciones personalizadas para diferentes necesidades" : "Customized Solutions for Different Needs")}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">
                {language === 'ca' ? "Lents específiques per a l'estil de vida" : (language === 'es' ? "Lentes específicas para el estilo de vida" : "Lifestyle-Specific Lenses")}
              </h4>
              <p>
                {language === 'ca' ? 
                  "Dissenyades per a tasques i entorns específics, com lents optimitzades per a l'ús de l'ordinador, conducció, esports o activitats a l'aire lliure." 
                  : (language === 'es' ? 
                    "Diseñadas para tareas y entornos específicos, como lentes optimizadas para el uso del ordenador, conducción, deportes o actividades al aire libre." 
                    : 
                    "Designed for specific tasks and environments, such as lenses optimized for computer use, driving, sports, or outdoor activities.")}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">
                {language === 'ca' ? "Lents fotocromàtiques" : (language === 'es' ? "Lentes fotocromáticas" : "Photochromic Lenses")}
              </h4>
              <p>
                {language === 'ca' ? 
                  "Lents intel·ligents que s'enfosqueixen automàticament a l'exterior i es tornen transparents a l'interior, proporcionant comoditat visual en totes les condicions de llum." 
                  : (language === 'es' ? 
                    "Lentes inteligentes que se oscurecen automáticamente en el exterior y se vuelven transparentes en el interior, proporcionando comodidad visual en todas las condiciones de luz." 
                    : 
                    "Smart lenses that automatically darken outdoors and clear indoors, providing visual comfort in all lighting conditions.")}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">
                {language === 'ca' ? "Lents ultra-primes" : (language === 'es' ? "Lentes ultra-delgadas" : "Ultra-Thin Lenses")}
              </h4>
              <p>
                {language === 'ca' ? 
                  "Lents d'índex alt especialment dissenyades per a prescripcions fortes, proporcionant una òptica superior amb un perfil més prim i lleuger." 
                  : (language === 'es' ? 
                    "Lentes de índice alto especialmente diseñadas para prescripciones fuertes, proporcionando una óptica superior con un perfil más delgado y ligero." 
                    : 
                    "High-index lenses specially designed for strong prescriptions, providing superior optics with a thinner, lighter profile.")}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">
                {language === 'ca' ? "Lents per a nens" : (language === 'es' ? "Lentes para niños" : "Children's Lenses")}
              </h4>
              <p>
                {language === 'ca' ? 
                  "Desenvolupades específicament per als ulls en desenvolupament, aquestes lents són més duradores, lleugeres i resistents als impactes, ideals per al seu estil de vida actiu." 
                  : (language === 'es' ? 
                    "Desarrolladas específicamente para los ojos en desarrollo, estas lentes son más duraderas, ligeras y resistentes a los impactos, ideales para su estilo de vida activo." 
                    : 
                    "Specifically developed for developing eyes, these lenses are more durable, lightweight, and impact-resistant, ideal for their active lifestyle.")}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>
            {language === 'ca' ? "El nostre procés d'assessorament de lents" : (language === 'es' ? "Nuestro proceso de asesoramiento de lentes" : "Our Lens Consulting Process")}
          </h2>
          <p>
            {language === 'ca' ? 
              "A Looptica, ens orgullim del nostre enfocament minuciós i centrat en el client per a l'assessorament de lents:" 
              : (language === 'es' ? 
                "En Looptica, nos enorgullecemos de nuestro enfoque minucioso y centrado en el cliente para el asesoramiento de lentes:" 
                : 
                "At Looptica, we pride ourselves on our thorough, customer-centered approach to lens consulting:")}
          </p>
          <ol>
            <li>
              <strong>
                {language === 'ca' ? "Avaluació completa" : (language === 'es' ? "Evaluación completa" : "Comprehensive Assessment")}
              </strong>
              <p>
                {language === 'ca' ? 
                  "Comencem amb una revisió detallada de la teva prescripció actual, historial de visió i qualsevol preocupació o requisit específic que puguis tenir." 
                  : (language === 'es' ? 
                    "Comenzamos con una revisión detallada de tu prescripción actual, historial de visión y cualquier preocupación o requisito específico que puedas tener." 
                    : 
                    "We begin with a detailed review of your current prescription, vision history, and any specific concerns or requirements you may have.")}
              </p>
            </li>
            <li>
              <strong>
                {language === 'ca' ? "Anàlisi d'estil de vida" : (language === 'es' ? "Análisis de estilo de vida" : "Lifestyle Analysis")}
              </strong>
              <p>
                {language === 'ca' ? 
                  "Discutim la teva rutina diària, activitats professionals, aficions i qualsevol desafiament visual específic que puguis experimentar per determinar quines tecnologies de lents et beneficiarien més." 
                  : (language === 'es' ? 
                    "Discutimos tu rutina diaria, actividades profesionales, aficiones y cualquier desafío visual específico que puedas experimentar para determinar qué tecnologías de lentes te beneficiarían más." 
                    : 
                    "We discuss your daily routine, professional activities, hobbies, and any specific visual challenges you may experience to determine which lens technologies would benefit you most.")}
              </p>
            </li>
            <li>
              <strong>
                {language === 'ca' ? "Demostració de tecnologia" : (language === 'es' ? "Demostración de tecnología" : "Technology Demonstration")}
              </strong>
              <p>
                {language === 'ca' ? 
                  "Utilitzem eines i mostres visuals per il·lustrar les diferències entre diverses opcions de lents, permetent-te experimentar i comprendre els beneficis de cada tecnologia." 
                  : (language === 'es' ? 
                    "Utilizamos herramientas y muestras visuales para ilustrar las diferencias entre varias opciones de lentes, permitiéndote experimentar y comprender los beneficios de cada tecnología." 
                    : 
                    "We use tools and visual samples to illustrate the differences between various lens options, allowing you to experience and understand the benefits of each technology.")}
              </p>
            </li>
            <li>
              <strong>
                {language === 'ca' ? "Recomanacions personalitzades" : (language === 'es' ? "Recomendaciones personalizadas" : "Personalized Recommendations")}
              </strong>
              <p>
                {language === 'ca' ? 
                  "Basant-nos en la nostra avaluació, proporcionem recomanacions clares i sense tecnicismes sobre les millors opcions de lents per a les teves necessitats específiques, explicant els beneficis i consideracions de cost de cada opció." 
                  : (language === 'es' ? 
                    "Basándonos en nuestra evaluación, proporcionamos recomendaciones claras y sin tecnicismos sobre las mejores opciones de lentes para tus necesidades específicas, explicando los beneficios y consideraciones de coste de cada opción." 
                    : 
                    "Based on our assessment, we provide clear, jargon-free recommendations about the best lens options for your specific needs, explaining the benefits and cost considerations of each option.")}
              </p>
            </li>
            <li>
              <strong>
                {language === 'ca' ? "Mesures de precisió" : (language === 'es' ? "Medidas de precisión" : "Precision Measurements")}
              </strong>
              <p>
                {language === 'ca' ? 
                  "Utilitzem tecnologia avançada per prendre mesures precises que assegurin que les teves lents estiguin perfectament alineades amb els teus ulls, maximitzant el rendiment visual de les teves lents." 
                  : (language === 'es' ? 
                    "Utilizamos tecnología avanzada para tomar medidas precisas que aseguren que tus lentes estén perfectamente alineadas con tus ojos, maximizando el rendimiento visual de tus lentes." 
                    : 
                    "We use advanced technology to take precise measurements ensuring your lenses are perfectly aligned with your eyes, maximizing the visual performance of your lenses.")}
              </p>
            </li>
          </ol>
          <h3>
            {language === 'ca' ? "Les nostres marques premium de lents" : (language === 'es' ? "Nuestras marcas premium de lentes" : "Our Premium Lens Brands")}
          </h3>
          <p>
            {language === 'ca' ? 
              "Treballem exclusivament amb els fabricants de lents més respectats del món per oferir-te la millor qualitat òptica i durabilitat:" 
              : (language === 'es' ? 
                "Trabajamos exclusivamente con los fabricantes de lentes más respetados del mundo para ofrecerte la mejor calidad óptica y durabilidad:" 
                : 
                "We work exclusively with the world's most respected lens manufacturers to bring you the best in optical quality and durability:")}
          </p>
          <ul>
            <li>Essilor (Varilux, Crizal, Eyezen)</li>
            <li>Zeiss</li>
            <li>Hoya</li>
            <li>Rodenstock</li>
            <li>Shamir</li>
          </ul>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default LensConsulting;
