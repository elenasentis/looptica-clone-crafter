import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, RotateCcw, ThumbsUp, AlertCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const LentsContacte = () => {
  const { t, language } = useLanguage();
  
  const getTitle = () => {
    if (language === 'en') return "Contact Lenses";
    if (language === 'es') return "Lentes de Contacto";
    return "Lents de Contacte";
  };
  
  const getSubtitle = () => {
    if (language === 'en') return "Personalized solutions for every lifestyle";
    if (language === 'es') return "Soluciones personalizadas para cada estilo de vida";
    return "Solucions personalitzades per a cada estil de vida";
  };
  
  const getAppointmentSubject = () => {
    if (language === 'en') return "Contact Lens Fitting at Looptica";
    if (language === 'es') return "Adaptación de Lentes de Contacto en Looptica";
    return "Adaptació de Lents de Contacte a Looptica";
  };
  
  return (
    <ServiceLayout
      title={getTitle()}
      subtitle={getSubtitle()}
      image="/lovable-uploads/17bc2039-1cd8-4464-80fe-3107ec793ead.png"
      appointmentSubject={getAppointmentSubject()}
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{language === 'en' ? "Our contact lens solutions" : (language === 'es' ? "Nuestras soluciones en lentes de contacto" : "Les nostres solucions en lents de contacte")}</h2>
          <p>
            {language === 'en' 
              ? "At Looptica, we specialize in personalized contact lens fitting to meet the unique needs of each patient. We know that contact lenses are not just an alternative to glasses; for many of our clients, they are an essential tool that improves their quality of life."
              : (language === 'es' 
                ? "En Looptica, nos especializamos en la adaptación personalizada de lentes de contacto para satisfacer las necesidades únicas de cada paciente. Sabemos que las lentes de contacto no son solo una alternativa a las gafas; para muchos de nuestros clientes, son una herramienta esencial que mejora su calidad de vida."
                : "A Looptica, ens especialitzem en l'adaptació personalitzada de lents de contacte per satisfer les necessitats úniques de cada pacient. Sabem que les lents de contacte no són només una alternativa a les ulleres; per a molts dels nostres clients, són una eina essencial que millora la seva qualitat de vida.")}
          </p>
          <p>
            {language === 'en'
              ? "Our team of highly qualified optometrists uses cutting-edge technology and their specialized knowledge to ensure that you receive the most suitable contact lenses for your lifestyle, personal preferences, and eye health."
              : (language === 'es'
                ? "Nuestro equipo de optometristas altamente calificados utiliza tecnología de vanguardia y sus conocimientos especializados para asegurar que usted reciba las lentes de contacto más adecuadas para su estilo de vida, preferencias personales y salud ocular."
                : "El nostre equip d'optometristes altament qualificats utilitza tecnologia d'avantguarda i els seus coneixements especialitzats per assegurar que vostè rebi les lents de contacte més adequades per al seu estil de vida, preferències personals i salut ocular.")}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{language === 'en' ? "Types of contact lenses we offer" : (language === 'es' ? "Tipos de lentes de contacto que ofrecemos" : "Tipus de lents de contacte que oferim")}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Soft contact lenses" : (language === 'es' ? "Lentes de contacto blandas" : "Lents de contacte toves")}</h4>
              <p>{language === 'en' 
                ? "The most popular for their immediate comfort. Available in daily, bi-weekly and monthly formats, they adapt to various lifestyles and needs."
                : (language === 'es' 
                  ? "Las más populares por su confort inmediato. Disponibles en formatos diarios, quincenales y mensuales, se adaptan a diversos estilos de vida y necesidades."
                  : "Les més populars pel seu confort immediat. Disponibles en formats diaris, quinzenals i mensuals, s'adapten a diversos estils de vida i necessitats.")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Gas permeable contact lenses (RPG)" : (language === 'es' ? "Lentes de contacto permeables al gas (RPG)" : "Lents de contacte permeables al gas (RPG)")}</h4>
              <p>{language === 'en' 
                ? "They offer sharper vision and superior durability. Ideal for irregular corneas and conditions such as keratoconus."
                : (language === 'es' 
                  ? "Ofrecen una visión más nítida y durabilidad superior. Ideales para córneas irregulares y condiciones como el queratocono."
                  : "Ofereixen una visió més nítida i durabilitat superior. Ideals per a còrnies irregulars i condicions com el queratocon.")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Toric contact lenses" : (language === 'es' ? "Lentes de contacto tóricas" : "Lents de contacte tòriques")}</h4>
              <p>{language === 'en' 
                ? "Designed specifically to correct astigmatism, providing clear and stable vision all day."
                : (language === 'es' 
                  ? "Diseñadas específicamente para corregir el astigmatismo, proporcionando una visión clara y estable todo el día."
                  : "Dissenyades específicament per corregir l'astigmatisme, proporcionant una visió clara i estable tot el dia.")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Multifocal contact lenses" : (language === 'es' ? "Lentes de contacto multifocales" : "Lents de contacte multifocals")}</h4>
              <p>{language === 'en' 
                ? "Perfect for people with presbyopia, they allow you to see clearly at multiple distances without the need for reading glasses."
                : (language === 'es' 
                  ? "Perfectas para personas con presbicia, permiten ver claramente a múltiples distancias sin necesidad de gafas de lectura."
                  : "Perfectes per a persones amb presbícia, permeten veure clarament a múltiples distàncies sense necessitat d'ulleres de lectura.")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Cosmetic contact lenses" : (language === 'es' ? "Lentes de contacto cosméticas" : "Lents de contacte cosmètiques")}</h4>
              <p>{language === 'en' 
                ? "They change or enhance the color of the eyes while maintaining a natural look. We have a wide range of colors and designs."
                : (language === 'es' 
                  ? "Cambian o mejoran el color de los ojos manteniendo un aspecto natural. Disponemos de una amplia gama de colores y diseños."
                  : "Canvien o milloren el color dels ulls mantenint un aspecte natural. Disposem d'una àmplia gamma de colors i dissenys.")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Orthokeratology (Ortho-K)" : (language === 'es' ? "Ortoqueratología (Orto-K)" : "Ortoqueratologia (Orto-K)")}</h4>
              <p>{language === 'en' 
                ? "Special lenses that are worn overnight to temporarily reshape the cornea, allowing clear vision during the day without lenses."
                : (language === 'es' 
                  ? "Lentes especiales que se usan durante la noche para remodelar temporalmente la córnea, permitiendo una visión clara durante el día sin lentes."
                  : "Lents especials que es porten durant la nit per remodelar temporalment la còrnia, permetent una visió clara durant el dia sense lents.")}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{language === 'en' ? "Our personalized fitting process" : (language === 'es' ? "Nuestro proceso de adaptación personalizado" : "El nostre procés d'adaptació personalitzat")}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Comprehensive assessment" : (language === 'es' ? "Evaluación completa" : "Avaluació completa")}</h4>
                <p>{language === 'en' 
                  ? "We conduct a complete eye exam to assess your visual health, determine your prescription, and measure the shape and moisture of your eyes."
                  : (language === 'es' 
                    ? "Realizamos un examen ocular completo para evaluar su salud visual, determinar su prescripción y medir la forma y humedad de sus ojos."
                    : "Realitzem un examen ocular complet per avaluar la seva salut visual, determinar la seva prescripció i mesurar la forma i humitat dels seus ulls.")}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Personalized selection" : (language === 'es' ? "Selección personalizada" : "Selecció personalitzada")}</h4>
                <p>{language === 'en' 
                  ? "Based on the results of the assessment and your specific needs, we recommend the most suitable types of lenses for you."
                  : (language === 'es' 
                    ? "Basándonos en los resultados de la evaluación y sus necesidades específicas, recomendamos los tipos de lentes más adecuados para usted."
                    : "Basant-nos en els resultats de l'avaluació i les seves necessitats específiques, recomanem els tipus de lents més adequats per a vostè.")}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Adaptation and monitoring" : (language === 'es' ? "Adaptación y seguimiento" : "Adaptació i seguiment")}</h4>
                <p>{language === 'en' 
                  ? "We teach you how to handle and care for your lenses, and schedule follow-up visits to ensure the adaptation is optimal."
                  : (language === 'es' 
                    ? "Le enseñamos cómo manipular y cuidar sus lentes, y programamos visitas de seguimiento para asegurarnos de que la adaptación sea óptima."
                    : "Li ensenyem com manipular i cuidar les seves lents, i programem visites de seguiment per assegurar-nos que l'adaptació sigui òptima.")}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Continuous care" : (language === 'es' ? "Atención continua" : "Atenció contínua")}</h4>
                <p>{language === 'en' 
                  ? "We offer ongoing support to answer any questions and make adjustments as your needs change."
                  : (language === 'es' 
                    ? "Ofrecemos soporte continuo para responder a cualquier pregunta y realizar ajustes a medida que cambian sus necesidades."
                    : "Oferim suport continu per respondre a qualsevol pregunta i realitzar ajustos a mesura que canvien les seves necessitats.")}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{language === 'en' ? "Contact lens care" : (language === 'es' ? "Cuidado de las lentes de contacto" : "Cura de les lents de contacte")}</h2>
          <p>
            {language === 'en'
              ? "Proper care of contact lenses is essential to maintain eye health and prevent infections. At Looptica, we provide detailed instructions on how to handle, clean, and store your contact lenses. In addition, we offer all the cleaning and maintenance products you will need."
              : (language === 'es'
                ? "El cuidado adecuado de las lentes de contacto es esencial para mantener la salud ocular y prevenir infecciones. En Looptica, le proporcionamos instrucciones detalladas sobre cómo manipular, limpiar y guardar sus lentes de contacto. Además, le ofrecemos todos los productos de limpieza y mantenimiento que necesitará."
                : "La cura adequada de les lents de contacte és essencial per mantenir la salut ocular i prevenir infeccions. A Looptica, li proporcionem instruccions detallades sobre com manipular, netejar i guardar les seves lents de contacte. A més, li oferim tots els productes de neteja i manteniment que necessitarà.")}
          </p>
          <h3>{language === 'en' ? "Our basic tips for contact lens users:" : (language === 'es' ? "Nuestros consejos básicos para usuarios de lentes de contacto:" : "Els nostres consells bàsics per a usuaris de lents de contacte:")}</h3>
          <ul>
            <li>{language === 'en' 
              ? "Always wash your hands before handling the lenses" 
              : (language === 'es' 
                ? "Lávese siempre las manos antes de manipular las lentes" 
                : "Renti's sempre les mans abans de manipular les lents")}</li>
            <li>{language === 'en' 
              ? "Clean and disinfect the lenses according to the instructions (except for disposable ones)" 
              : (language === 'es' 
                ? "Limpie y desinfecte las lentes según las indicaciones (excepto las de un solo uso)" 
                : "Netegi i desinfecti les lents segons les indicacions (excepte les d'un sol ús)")}</li>
            <li>{language === 'en' 
              ? "Replace the lenses according to the recommended schedule" 
              : (language === 'es' 
                ? "Sustituya las lentes según el calendario recomendado" 
                : "Substitueixi les lents segons el calendari recomanat")}</li>
            <li>{language === 'en' 
              ? "Never sleep with contact lenses (unless they are specifically designed for night use)" 
              : (language === 'es' 
                ? "Nunca duerma con lentes de contacto (excepto si son específicamente diseñadas para uso nocturno)" 
                : "Mai dormi amb lents de contacte (excepte si són específicament dissenyades per a ús nocturn)")}</li>
            <li>{language === 'en' 
              ? "Avoid exposing the lenses to tap water, swimming pools or hot tubs" 
              : (language === 'es' 
                ? "Evite exponer las lentes al agua del grifo, piscinas o bañeras de hidromasaje" 
                : "Eviti exposar les lents a l'aigua de l'aixeta, piscines o banyeres d'hidromassatge")}</li>
            <li>{language === 'en' 
              ? "Attend scheduled periodic check-ups" 
              : (language === 'es' 
                ? "Acuda a los controles periódicos programados" 
                : "Acudeixi als controls periòdics programats")}</li>
            <li>{language === 'en' 
              ? "Seek immediate medical attention if you experience pain, redness, discharge, or blurred vision" 
              : (language === 'es' 
                ? "Busque atención médica inmediata si experimenta dolor, enrojecimiento, secreción o visión borrosa" 
                : "Busqui atenció mèdica immediata si experimenta dolor, envermelliment, secreció o visió borrosa")}</li>
          </ul>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default LentsContacte;
