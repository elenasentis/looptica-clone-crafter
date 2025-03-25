import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Moon, Sun, Target, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const OrtoK = () => {
  const { t, language } = useLanguage();
  
  const getTitle = () => {
    if (language === 'en') return "Orthokeratology (Ortho-K)";
    if (language === 'es') return "Ortoqueratología (Orto-K)";
    return "Ortoqueratologia (Orto-K)";
  };
  
  const getSubtitle = () => {
    if (language === 'en') return "Clear vision without glasses or lenses during the day";
    if (language === 'es') return "Visión clara sin gafas ni lentes durante el día";
    return "Visió clara sense ulleres ni lents durant el dia";
  };
  
  const getAppointmentSubject = () => {
    if (language === 'en') return "Orthokeratology Consultation at Looptica";
    if (language === 'es') return "Consulta de Ortoqueratología en Looptica";
    return "Consulta d'Ortoqueratologia a Looptica";
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
          <h2>{language === 'en' ? "What is Orthokeratology?" : (language === 'es' ? "¿Qué es la Ortoqueratología?" : "Què és l'Ortoqueratologia?")}</h2>
          <p>
            {language === 'en' 
              ? "Orthokeratology, commonly known as Ortho-K, is an advanced technique that uses specially designed contact lenses that are worn during sleep. These lenses temporarily reshape the cornea (the front surface of the eye), thus correcting refractive errors such as myopia, hyperopia, and astigmatism."
              : (language === 'es' 
                ? "La Ortoqueratología, comúnmente conocida como Orto-K, es una técnica avanzada que utiliza lentes de contacto especialmente diseñadas que se usan durante la noche mientras se duerme. Estas lentes remodelan temporalmente la córnea (la superficie frontal del ojo), corrigiendo así errores de refracción como la miopía, la hipermetropía y el astigmatismo."
                : "L'Ortoqueratologia, comunament coneguda com Orto-K, és una tècnica avançada que utilitza lents de contacte especialment dissenyades que es porten durant la nit mentre es dorm. Aquestes lents remodelten temporalment la còrnia (la superfície frontal de l'ull), corregint així errors de refracció com la miopia, l'hipermetropia i l'astigmatisme.")}
          </p>
          <p>
            {language === 'en'
              ? "The result? Clear vision during the day without the need for glasses or conventional contact lenses. It's like \"orthodontics\" for your eyes, but with temporary results that are achieved while you sleep."
              : (language === 'es'
                ? "¿El resultado? Una visión clara durante el día sin necesidad de gafas o lentes de contacto convencionales. Es como una \"ortodoncia\" para sus ojos, pero con resultados temporales que se logran mientras duerme."
                : "El resultat? Una visió clara durant el dia sense necessitat d'ulleres o lents de contacte convencionals. És com una \"ortodòncia\" per als seus ulls, però amb resultats temporals que s'aconsegueixen mentre dorm.")}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{language === 'en' ? "How does Ortho-K work?" : (language === 'es' ? "¿Cómo funciona Orto-K?" : "Com funciona l'Orto-K?")}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{language === 'en' ? "During the night" : (language === 'es' ? "Durante la noche" : "Durant la nit")}</h4>
                <p>{language === 'en' 
                  ? "Ortho-K lenses apply gentle pressure on the cornea, altering its contour. They are made with high DK (highly oxygen permeable) materials, allowing the eyes to breathe while sleeping."
                  : (language === 'es' 
                    ? "Las lentes Orto-K aplican una presión suave sobre la córnea, alterando su contorno. Están fabricadas con materiales de alto DK (altamente permeable al oxígeno), permitiendo que los ojos respiren mientras duermen."
                    : "Les lents Orto-K apliquen una pressió suau sobre la còrnia, alterant el seu contorn. Són fabricades amb materials d'alt DK (altament permeable a l'oxigen), permetent que els ulls respirin mentre dormen.")}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{language === 'en' ? "During the day" : (language === 'es' ? "Durante el día" : "Durant el dia")}</h4>
                <p>{language === 'en' 
                  ? "Upon waking and removing the lenses, the cornea maintains its new shape, providing clear vision throughout the day without the need for additional visual correction."
                  : (language === 'es' 
                    ? "Al despertar y retirar las lentes, la córnea mantiene su nueva forma, proporcionando una visión clara durante todo el día sin necesidad de corrección visual adicional."
                    : "En despertar i retirar les lents, la còrnia manté la seva nova forma, proporcionant una visió clara durant tot el dia sense necessitat de correcció visual addicional.")}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Cumulative results" : (language === 'es' ? "Resultados acumulativos" : "Resultats acumulatius")}</h4>
                <p>{language === 'en' 
                  ? "With continued use, many patients experience more stable and lasting results. Some may even space out the use of lenses to every other night while maintaining good vision."
                  : (language === 'es' 
                    ? "Con el uso continuado, muchos pacientes experimentan resultados más estables y duraderos. Algunos pueden incluso espaciar el uso de las lentes a cada dos noches manteniendo una buena visión."
                    : "Amb l'ús continuat, molts pacients experimenten resultats més estables i duradors. Alguns poden fins i tot espaiar l'ús de les lents a cada dues nits mantenint una bona visió.")}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Temporary effects" : (language === 'es' ? "Efectos temporales" : "Efectes temporals")}</h4>
                <p>{language === 'en' 
                  ? "The effects are completely reversible. If you stop using Ortho-K lenses, the cornea will gradually return to its original shape and vision will return to its previous state."
                  : (language === 'es' 
                    ? "Los efectos son completamente reversibles. Si deja de utilizar las lentes Orto-K, la córnea volverá gradualmente a su forma original y la visión volverá a su estado previo."
                    : "Els efectes són completament reversibles. Si deixa d'utilitzar les lents Orto-K, la còrnia tornarà gradualment a la seva forma original i la visió tornarà al seu estat previ.")}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{language === 'en' ? "Benefits of Ortho-K" : (language === 'es' ? "Beneficios de Orto-K" : "Beneficis de l'Orto-K")}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Freedom from glasses" : (language === 'es' ? "Libertad de las gafas" : "Llibertat de les ulleres")}</h4>
              <p>{language === 'en' 
                ? "Ideal for athletes, swimmers, and people with active lifestyles who find glasses or contact lenses uncomfortable during certain activities." 
                : (language === 'es' 
                  ? "Ideal para deportistas, nadadores y personas con estilos de vida activos que encuentran las gafas o lentes de contacto incómodas durante ciertas actividades."
                  : "Ideal per a esportistes, nedadors i persones amb estils de vida actius que troben les ulleres o lents de contacte incòmodes durant certes activitats.")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Myopia control" : (language === 'es' ? "Control de la miopía" : "Control de la miopia")}</h4>
              <p>{language === 'en' 
                ? "Studies have shown that Ortho-K can help slow the progression of myopia in children and adolescents, making it a valuable tool for myopia management."
                : (language === 'es' 
                  ? "Estudios han demostrado que Orto-K puede ayudar a frenar la progresión de la miopía en niños y adolescentes, convirtiéndose en una herramienta valiosa para la gestión de la miopía."
                  : "Estudis han demostrat que l'Orto-K pot ajudar a frenar la progressió de la miopia en nens i adolescents, convertint-se en una eina valuosa per a la gestió de la miopia.")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Alternative to surgery" : (language === 'es' ? "Alternativa a la cirugía" : "Alternativa a la cirurgia")}</h4>
              <p>{language === 'en' 
                ? "Provides many of the benefits of refractive surgery without the risks associated with surgical procedures and with completely reversible results."
                : (language === 'es' 
                  ? "Proporciona muchos de los beneficios de la cirugía refractiva sin los riesgos asociados a los procedimientos quirúrgicos y con resultados completamente reversibles."
                  : "Proporciona molts dels beneficis de la cirurgia refractiva sense els riscos associats als procediments quirúrgics i amb resultats completament reversibles.")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{language === 'en' ? "Improved quality of life" : (language === 'es' ? "Mejora de la calidad de vida" : "Millora de la qualitat de vida")}</h4>
              <p>{language === 'en' 
                ? "Frees patients from the constant dependence on glasses or daytime contact lenses, simplifying their daily routine."
                : (language === 'es' 
                  ? "Libera a los pacientes de la dependencia constante de gafas o lentes de contacto diurnas, simplificando su rutina diaria."
                  : "Allibera als pacients de la dependència constant d'ulleres o lents de contacte diürnes, simplificant la seva rutina diària.")}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{language === 'en' ? "The adaptation process at Looptica" : (language === 'es' ? "El proceso de adaptación en Looptica" : "El procés d'adaptació a Looptica")}</h2>
          <p>
            {language === 'en'
              ? "At Looptica, we have highly specialized optometrists in orthokeratology who have helped numerous patients achieve clear vision without daytime corrections. Our adaptation process includes:"
              : (language === 'es'
                ? "En Looptica, contamos con optometristas altamente especializados en ortoqueratología que han ayudado a numerosos pacientes a conseguir una visión clara sin correcciones diurnas. Nuestro proceso de adaptación incluye:"
                : "A Looptica, comptem amb optometristes altament especialitzats en ortoqueratologia que han ajudat nombrosos pacients a aconseguir una visió clara sense correccions diürnes. El nostre procés d'adaptació inclou:")}
          </p>
          <ol>
            <li>
              <strong>{language === 'en' ? "Initial assessment:" : (language === 'es' ? "Evaluación inicial:" : "Avaluació inicial:")}</strong> {language === 'en' 
                ? "An exhaustive eye exam to determine if you are a good candidate for Ortho-K. We assess corneal topography, eye health, and your prescription."
                : (language === 'es' 
                  ? "Un examen ocular exhaustivo para determinar si usted es un buen candidato para Orto-K. Evaluamos la topografía corneal, la salud ocular y su prescripción."
                  : "Un examen ocular exhaustiu per determinar si vostè és un bon candidat per a l'Orto-K. Avaluem la topografia corneal, la salut ocular i la seva prescripció.")}
            </li>
            <li>
              <strong>{language === 'en' ? "Custom design:" : (language === 'es' ? "Diseño personalizado:" : "Disseny personalitzat:")}</strong> {language === 'en' 
                ? "Using advanced corneal topography technology, we design Ortho-K lenses specifically for your eyes."
                : (language === 'es' 
                  ? "Utilizando tecnología avanzada de topografía corneal, diseñamos lentes Orto-K específicamente para sus ojos."
                  : "Utilitzant tecnologia avançada de topografia corneal, dissenyem lents Orto-K específicament per als seus ulls.")}
            </li>
            <li>
              <strong>{language === 'en' ? "Instructions for use:" : (language === 'es' ? "Instrucciones de uso:" : "Instruccions d'ús:")}</strong> {language === 'en' 
                ? "We teach you how to insert, remove, and maintain your Ortho-K lenses properly."
                : (language === 'es' 
                  ? "Le enseñamos cómo insertar, retirar y mantener sus lentes Orto-K adecuadamente."
                  : "Li ensenyem com insertar, retirar i mantenir les seves lents Orto-K adequadament.")}
            </li>
            <li>
              <strong>{language === 'en' ? "Regular monitoring:" : (language === 'es' ? "Seguimiento regular:" : "Seguiment regular:")}</strong> {language === 'en' 
                ? "We schedule follow-up visits to monitor your progress and make adjustments if necessary."
                : (language === 'es' 
                  ? "Programamos visitas de seguimiento para monitorear su progreso y realizar ajustes si es necesario."
                  : "Programem visites de seguiment per monitorar el seu progrés i realitzar ajustos si és necessari.")}
            </li>
            <li>
              <strong>{language === 'en' ? "Continuous support:" : (language === 'es' ? "Soporte continuo:" : "Suport continu:")}</strong> {language === 'en' 
                ? "Our team is always available to address any questions or concerns you may have."
                : (language === 'es' 
                  ? "Nuestro equipo está siempre disponible para atender cualquier consulta o inquietud que pueda tener."
                  : "El nostre equip està sempre disponible per atendre qualsevol consulta o preocupació que pugui tenir.")}
            </li>
          </ol>
          <h3>{language === 'en' ? "Are you a good candidate for Ortho-K?" : (language === 'es' ? "¿Es usted un buen candidato para Orto-K?" : "És vostè un bon candidat per a l'Orto-K?")}</h3>
          <p>
            {language === 'en'
              ? "Ortho-K is suitable for people with:"
              : (language === 'es'
                ? "Orto-K es adecuado para personas con:"
                : "L'Orto-K és adequat per a persones amb:")}
          </p>
          <ul>
            <li>{language === 'en' 
              ? "Mild to moderate myopia (up to -6.00 diopters)"
              : (language === 'es' 
                ? "Miopía leve a moderada (hasta -6.00 dioptrías)"
                : "Miopia lleu a moderada (fins a -6.00 diòptries)")}</li>
            <li>{language === 'en' 
              ? "Mild astigmatism (up to -1.75 diopters)"
              : (language === 'es' 
                ? "Astigmatismo leve (hasta -1.75 dioptrías)"
                : "Astigmatisme lleu (fins a -1.75 diòptries)")}</li>
            <li>{language === 'en' 
              ? "Mild hyperopia (up to +3.00 diopters)"
              : (language === 'es' 
                ? "Hipermetropía leve (hasta +3.00 dioptrías)"
                : "Hipermetropia lleu (fins a +3.00 diòptries)")}</li>
            <li>{language === 'en' 
              ? "Healthy corneas and eyes free of disease"
              : (language === 'es' 
                ? "Córneas saludables y ojos libres de enfermedad"
                : "Còrnies saludables i ulls lliures de malalties")}</li>
          </ul>
          <p>
            {language === 'en'
              ? "It is especially beneficial for:"
              : (language === 'es'
                ? "Es especialmente beneficioso para:"
                : "És especialment beneficiós per a:")}
          </p>
          <ul>
            <li>{language === 'en' 
              ? "Children and adolescents with progressive myopia"
              : (language === 'es' 
                ? "Niños y adolescentes con miopía progresiva"
                : "Nens i adolescents amb miopia progressiva")}</li>
            <li>{language === 'en' 
              ? "Athletes and people with active lifestyles"
              : (language === 'es' 
                ? "Deportistas y personas con estilos de vida activos"
                : "Esportistes i persones amb estils de vida actius")}</li>
            <li>{language === 'en' 
              ? "People who work in dusty or dry environments that make conventional contact lenses uncomfortable"
              : (language === 'es' 
                ? "Personas que trabajan en entornos polvorientos o secos que hacen incómodo el uso de lentes de contacto convencionales"
                : "Persones que treballen en entorns polsosos o secs que fan incòmode l'ús de lents de contacte convencionals")}</li>
            <li>{language === 'en' 
              ? "Those who are not suitable candidates for refractive surgery"
              : (language === 'es' 
                ? "Aquellos que no son candidatos adecuados para la cirugía refractiva"
                : "Aquells que no són candidats adequats per a la cirurgia refractiva")}</li>
          </ul>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default OrtoK;
