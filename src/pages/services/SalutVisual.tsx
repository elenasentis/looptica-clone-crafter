
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, Shield, CheckSquare, Award } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const SalutVisual = () => {
  const { t, language } = useLanguage();
  
  const getTitle = () => {
    if (language === 'en') return "Visual Health";
    if (language === 'es') return "Salud Visual";
    return "Salut Visual";
  };
  
  const getSubtitle = () => {
    if (language === 'en') return "We take care of your eyes with the best technology and professionals";
    if (language === 'es') return "Cuidamos de tus ojos con la mejor tecnología y profesionales";
    return "Cuidem dels teus ulls amb la millor tecnologia i professionals";
  };
  
  const getAppointmentSubject = () => {
    if (language === 'en') return "Visual Health Exam at Looptica";
    if (language === 'es') return "Examen de Salud Visual en Looptica";
    return "Examen de Salut Visual a Looptica";
  };
  
  return (
    <ServiceLayout
      title={getTitle()}
      subtitle={getSubtitle()}
      image="/lovable-uploads/cb898a8f-0dd3-4ffb-aa14-822fcefb417d.png"
      appointmentSubject={getAppointmentSubject()}
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{language === 'en' ? "What is a visual health exam?" : (language === 'es' ? "¿Qué es un examen de salud visual?" : "Què és un examen de salut visual?")}</h2>
          <p>
            {language === 'en' 
              ? "A visual health exam is a comprehensive assessment of the state of your eyes and vision performed by eye health professionals. It goes beyond a simple vision test; it's a complete review that examines general eye health, visual function, and detects possible eye problems or systemic diseases that can affect the eyes."
              : (language === 'es' 
                ? "Un examen de salud visual es una evaluación integral del estado de sus ojos y de su visión realizada por profesionales de la salud ocular. Va más allá de una simple prueba de visión; es una revisión completa que examina la salud ocular general, la función visual y detecta posibles problemas oculares o enfermedades sistémicas que pueden afectar los ojos."
                : "Un examen de salut visual és una avaluació integral de l'estat dels seus ulls i de la seva visió realitzada per professionals de la salut ocular. Va més enllà d'una simple prova de visió; és una revisió completa que examina la salut ocular general, la funció visual i detecta possibles problemes oculars o malalties sistèmiques que poden afectar els ulls.")}
          </p>
          <p>
            {language === 'en'
              ? "At Looptica, we believe that preventive care is essential to maintaining good vision throughout life. Our comprehensive vision exams use cutting-edge technology to provide a detailed assessment of all aspects of your eye health."
              : (language === 'es'
                ? "En Looptica, creemos que la atención preventiva es fundamental para mantener una buena visión durante toda la vida. Nuestros exámenes visuales completos utilizan tecnología de vanguardia para proporcionar una evaluación detallada de todos los aspectos de su salud ocular."
                : "A Looptica, creiem que l'atenció preventiva és fonamental per mantenir una bona visió durant tota la vida. Els nostres exàmens visuals complets utilitzen tecnologia d'avantguarda per proporcionar una avaluació detallada de tots els aspectes de la seva salut ocular.")}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">El nostre procés d'examen visual</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Anamnesi</h4>
                <p>Revisió detallada del seu historial mèdic, ocular i familiar, incloent medicaments actuals i estil de vida que podrien afectar la seva visió.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <CheckSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Exàmens preliminars</h4>
                <p>Avaluació de l'agudesa visual, percepció de colors, visió perifèrica i pressió intraocular per detectar signes primerencs de problemes.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Refracció</h4>
                <p>Determinació precisa de la seva prescripció de lents utilitzant mètodes objectius i subjectius per garantir la millor correcció visual possible.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Avaluació de la salut ocular</h4>
                <p>Examen complet de les estructures internes i externes de l'ull per detectar malalties com glaucoma, cataractes, degeneració macular i retinopatia diabètica.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{language === 'en' ? "Why are regular eye exams important?" : (language === 'es' ? "¿Por qué son importantes los exámenes visuales regulares?" : "Per què són importants els exàmens visuals regulars?")}</h2>
          <p>
            {language === 'en'
              ? "Many eye diseases do not present symptoms in their early stages. Regular exams can detect problems before they cause irreversible damage or vision loss. In addition, the eyes can reveal signs of systemic health conditions such as diabetes, hypertension, and high cholesterol."
              : (language === 'es'
                ? "Muchas enfermedades oculares no presentan síntomas en sus etapas iniciales. Los exámenes regulares pueden detectar problemas antes de que causen daños irreversibles o pérdida de visión. Además, los ojos pueden revelar signos de condiciones de salud sistémicas como diabetes, hipertensión y colesterol alto."
                : "Moltes malalties oculars no presenten símptomes en les seves etapes inicials. Els exàmens regulars poden detectar problemes abans que causin danys irreversibles o pèrdua de visió. A més, els ulls poden revelar signes de condicions de salut sistèmiques com diabetis, hipertensió i colesterol alt.")}
          </p>
          <p>
            {language === 'en' ? "We recommend comprehensive eye exams:" : (language === 'es' ? "Recomendamos exámenes visuales completos:" : "Recomanem exàmens visuals complets:")}
          </p>
          <ul>
            <li>{language === 'en' 
              ? "Every 2 years for adults 18-60 years without visual problems or risk factors" 
              : (language === 'es' 
                ? "Cada 2 años para adultos de 18 a 60 años sin problemas visuales o factores de riesgo"
                : "Cada 2 anys per a adults de 18 a 60 anys sense problemes visuals o factors de risc")}</li>
            <li>{language === 'en' 
              ? "Annually for people over 60 years old" 
              : (language === 'es' 
                ? "Anualmente para personas de más de 60 años"
                : "Anualment per a persones de més de 60 anys")}</li>
            <li>{language === 'en' 
              ? "Annually for people of any age who wear contact lenses, have risk factors or existing medical conditions" 
              : (language === 'es' 
                ? "Anualmente para personas de cualquier edad que usen lentes de contacto, tengan factores de riesgo o condiciones médicas existentes"
                : "Anualment per a persones de qualsevol edat que portin lents de contacte, tinguin factors de risc o condicions mèdiques existents")}</li>
            <li>{language === 'en' 
              ? "According to the recommendations of your optometrist or ophthalmologist for children and adolescents" 
              : (language === 'es' 
                ? "Según las recomendaciones de su optometrista u oftalmólogo para niños y adolescentes"
                : "Segons les recomanacions del seu optometrista o oftalmòleg per a nens i adolescents")}</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{language === 'en' ? "Advanced Technology at Looptica" : (language === 'es' ? "Tecnología avanzada en Looptica" : "Tecnologia avançada a Looptica")}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Optical Coherence Tomography (OCT)" : (language === 'es' ? "Tomografía de Coherencia Óptica (OCT)" : "Tomografia de Coherència Òptica (OCT)")}</h4>
              <p>{language === 'en' 
                ? "Allows us to obtain cross-sectional images of the retina, providing details about its structure with microscopic precision." 
                : (language === 'es' 
                  ? "Nos permite obtener imágenes de la retina en secciones transversales, proporcionando detalles sobre su estructura con precisión microscópica."
                  : "Ens permet obtenir imatges de la retina en seccions transversals, proporcionant detalls sobre la seva estructura amb precisió microscòpica.")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Corneal Topography" : (language === 'es' ? "Topografía Corneal" : "Topografia Corneal")}</h4>
              <p>{language === 'en' 
                ? "Creates a 3D map of the cornea's surface, essential for contact lens fitting and detection of corneal disorders." 
                : (language === 'es' 
                  ? "Crea un mapa 3D de la superficie de la córnea, esencial para la adaptación de lentes de contacto y la detección de trastornos corneales."
                  : "Crea un mapa 3D de la superfície de la còrnia, essencial per a l'adaptació de lents de contacte i la detecció de trastorns corneals.")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "State-of-the-art Autorefractometers" : (language === 'es' ? "Autorrefractómetros de última generación" : "Autorefractòmetres d'última generació")}</h4>
              <p>{language === 'en' 
                ? "Provides objective measurements of the eye's refractive error, speeding up and improving the accuracy of the prescription process." 
                : (language === 'es' 
                  ? "Proporciona mediciones objetivas del error de refracción del ojo, acelerando y mejorando la precisión del proceso de prescripción."
                  : "Proporciona mesuraments objectius de l'error de refracció de l'ull, accelerant i millorant la precisió del procés de prescripció.")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Digital Slit Lamp Examination" : (language === 'es' ? "Examen con lámpara de hendidura digital" : "Examen amb làmpada de fenedura digital")}</h4>
              <p>{language === 'en' 
                ? "Allows detailed examination and photographic documentation of anterior and posterior eye structures." 
                : (language === 'es' 
                  ? "Permite el examen detallado y documentación fotográfica de las estructuras oculares anteriores y posteriores."
                  : "Permet l'examen detallat i documentació fotogràfica de les estructures oculars anteriors i posteriors.")}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default SalutVisual;
