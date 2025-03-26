
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Moon, Sun, Target, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const OrtoK = () => {
  const { language } = useLanguage();
  
  const pageContent = {
    en: {
      title: "Orthokeratology (Ortho-K)",
      subtitle: "Clear vision without glasses or lenses during the day",
      appointmentSubject: "Orthokeratology Consultation at Looptica",
      metaTitle: "Orthokeratology (Ortho-K) Services | Looptica Barcelona",
      metaDescription: "Specialized orthokeratology services in Barcelona. Experience clear vision without glasses or contact lenses during the day with our customized overnight lenses.",
      intro: {
        title: "What is Orthokeratology?",
        paragraphs: [
          "Orthokeratology, commonly known as Ortho-K, is an advanced technique that uses specially designed contact lenses that are worn during sleep. These lenses temporarily reshape the cornea (the front surface of the eye), thus correcting refractive errors such as myopia, hyperopia, and astigmatism.",
          "The result? Clear vision during the day without the need for glasses or conventional contact lenses. It's like \"orthodontics\" for your eyes, but with temporary results that are achieved while you sleep."
        ]
      },
      process: {
        title: "How does Ortho-K work?",
        steps: [
          {
            title: "During the night",
            description: "Ortho-K lenses apply gentle pressure on the cornea, altering its contour. They are made with high DK (highly oxygen permeable) materials, allowing the eyes to breathe while sleeping."
          },
          {
            title: "During the day",
            description: "Upon waking and removing the lenses, the cornea maintains its new shape, providing clear vision throughout the day without the need for additional visual correction."
          },
          {
            title: "Cumulative results",
            description: "With continued use, many patients experience more stable and lasting results. Some may even space out the use of lenses to every other night while maintaining good vision."
          },
          {
            title: "Temporary effects",
            description: "The effects are completely reversible. If you stop using Ortho-K lenses, the cornea will gradually return to its original shape and vision will return to its previous state."
          }
        ]
      },
      benefits: {
        title: "Benefits of Ortho-K",
        items: [
          {
            title: "Freedom from glasses",
            description: "Ideal for athletes, swimmers, and people with active lifestyles who find glasses or contact lenses uncomfortable during certain activities."
          },
          {
            title: "Myopia control",
            description: "Studies have shown that Ortho-K can help slow the progression of myopia in children and adolescents, making it a valuable tool for myopia management."
          },
          {
            title: "Alternative to surgery",
            description: "Provides many of the benefits of refractive surgery without the risks associated with surgical procedures and with completely reversible results."
          },
          {
            title: "Improved quality of life",
            description: "Frees patients from the constant dependence on glasses or daytime contact lenses, simplifying their daily routine."
          }
        ]
      },
      adaptationProcess: {
        title: "The adaptation process at Looptica",
        intro: "At Looptica, we have highly specialized optometrists in orthokeratology who have helped numerous patients achieve clear vision without daytime corrections. Our adaptation process includes:",
        steps: [
          {
            title: "Initial assessment:",
            description: "An exhaustive eye exam to determine if you are a good candidate for Ortho-K. We assess corneal topography, eye health, and your prescription."
          },
          {
            title: "Custom design:",
            description: "Using advanced corneal topography technology, we design Ortho-K lenses specifically for your eyes."
          },
          {
            title: "Instructions for use:",
            description: "We teach you how to insert, remove, and maintain your Ortho-K lenses properly."
          },
          {
            title: "Regular monitoring:",
            description: "We schedule follow-up visits to monitor your progress and make adjustments if necessary."
          },
          {
            title: "Continuous support:",
            description: "Our team is always available to address any questions or concerns you may have."
          }
        ],
        candidateInfo: {
          title: "Are you a good candidate for Ortho-K?",
          suitableFor: {
            intro: "Ortho-K is suitable for people with:",
            conditions: [
              "Mild to moderate myopia (up to -6.00 diopters)",
              "Mild astigmatism (up to -1.75 diopters)",
              "Mild hyperopia (up to +3.00 diopters)",
              "Healthy corneas and eyes free of disease"
            ]
          },
          beneficialFor: {
            intro: "It is especially beneficial for:",
            profiles: [
              "Children and adolescents with progressive myopia",
              "Athletes and people with active lifestyles",
              "People who work in dusty or dry environments that make conventional contact lenses uncomfortable",
              "Those who are not suitable candidates for refractive surgery"
            ]
          }
        }
      }
    },
    es: {
      title: "Ortoqueratología (Orto-K)",
      subtitle: "Visión clara sin gafas ni lentes durante el día",
      appointmentSubject: "Consulta de Ortoqueratología en Looptica",
      metaTitle: "Servicios de Ortoqueratología (Orto-K) | Looptica Barcelona",
      metaDescription: "Servicios especializados de ortoqueratología en Barcelona. Experimenta una visión clara sin gafas ni lentes de contacto durante el día con nuestras lentes nocturnas personalizadas.",
      intro: {
        title: "¿Qué es la Ortoqueratología?",
        paragraphs: [
          "La Ortoqueratología, comúnmente conocida como Orto-K, es una técnica avanzada que utiliza lentes de contacto especialmente diseñadas que se usan durante la noche mientras se duerme. Estas lentes remodelan temporalmente la córnea (la superficie frontal del ojo), corrigiendo así errores de refracción como la miopía, la hipermetropía y el astigmatismo.",
          "¿El resultado? Una visión clara durante el día sin necesidad de gafas o lentes de contacto convencionales. Es como una \"ortodoncia\" para sus ojos, pero con resultados temporales que se logran mientras duerme."
        ]
      },
      process: {
        title: "¿Cómo funciona Orto-K?",
        steps: [
          {
            title: "Durante la noche",
            description: "Las lentes Orto-K aplican una presión suave sobre la córnea, alterando su contorno. Están fabricadas con materiales de alto DK (altamente permeable al oxígeno), permitiendo que los ojos respiren mientras duermen."
          },
          {
            title: "Durante el día",
            description: "Al despertar y retirar las lentes, la córnea mantiene su nueva forma, proporcionando una visión clara durante todo el día sin necesidad de corrección visual adicional."
          },
          {
            title: "Resultados acumulativos",
            description: "Con el uso continuado, muchos pacientes experimentan resultados más estables y duraderos. Algunos pueden incluso espaciar el uso de las lentes a cada dos noches manteniendo una buena visión."
          },
          {
            title: "Efectos temporales",
            description: "Los efectos son completamente reversibles. Si deja de utilizar las lentes Orto-K, la córnea volverá gradualmente a su forma original y la visión volverá a su estado previo."
          }
        ]
      },
      benefits: {
        title: "Beneficios de Orto-K",
        items: [
          {
            title: "Libertad de las gafas",
            description: "Ideal para deportistas, nadadores y personas con estilos de vida activos que encuentran las gafas o lentes de contacto incómodas durante ciertas actividades."
          },
          {
            title: "Control de la miopía",
            description: "Estudios han demostrado que Orto-K puede ayudar a frenar la progresión de la miopía en niños y adolescentes, convirtiéndose en una herramienta valiosa para la gestión de la miopía."
          },
          {
            title: "Alternativa a la cirugía",
            description: "Proporciona muchos de los beneficios de la cirugía refractiva sin los riesgos asociados a los procedimientos quirúrgicos y con resultados completamente reversibles."
          },
          {
            title: "Mejora de la calidad de vida",
            description: "Libera a los pacientes de la dependencia constante de gafas o lentes de contacto diurnas, simplificando su rutina diaria."
          }
        ]
      },
      adaptationProcess: {
        title: "El proceso de adaptación en Looptica",
        intro: "En Looptica, contamos con optometristas altamente especializados en ortoqueratología que han ayudado a numerosos pacientes a conseguir una visión clara sin correcciones diurnas. Nuestro proceso de adaptación incluye:",
        steps: [
          {
            title: "Evaluación inicial:",
            description: "Un examen ocular exhaustivo para determinar si usted es un buen candidato para Orto-K. Evaluamos la topografía corneal, la salud ocular y su prescripción."
          },
          {
            title: "Diseño personalizado:",
            description: "Utilizando tecnología avanzada de topografía corneal, diseñamos lentes Orto-K específicamente para sus ojos."
          },
          {
            title: "Instrucciones de uso:",
            description: "Le enseñamos cómo insertar, retirar y mantener sus lentes Orto-K adecuadamente."
          },
          {
            title: "Seguimiento regular:",
            description: "Programamos visitas de seguimiento para monitorear su progreso y realizar ajustes si es necesario."
          },
          {
            title: "Soporte continuo:",
            description: "Nuestro equipo está siempre disponible para atender cualquier consulta o inquietud que pueda tener."
          }
        ],
        candidateInfo: {
          title: "¿Es usted un buen candidato para Orto-K?",
          suitableFor: {
            intro: "Orto-K es adecuado para personas con:",
            conditions: [
              "Miopía leve a moderada (hasta -6.00 dioptrías)",
              "Astigmatismo leve (hasta -1.75 dioptrías)",
              "Hipermetropía leve (hasta +3.00 dioptrías)",
              "Córneas saludables y ojos libres de enfermedad"
            ]
          },
          beneficialFor: {
            intro: "Es especialmente beneficioso para:",
            profiles: [
              "Niños y adolescentes con miopía progresiva",
              "Deportistas y personas con estilos de vida activos",
              "Personas que trabajan en entornos polvorientos o secos que hacen incómodo el uso de lentes de contacto convencionales",
              "Aquellos que no son candidatos adecuados para la cirugía refractiva"
            ]
          }
        }
      }
    },
    ca: {
      title: "Ortoqueratologia (Orto-K)",
      subtitle: "Visió clara sense ulleres ni lents durant el dia",
      appointmentSubject: "Consulta d'Ortoqueratologia a Looptica",
      metaTitle: "Serveis d'Ortoqueratologia (Orto-K) | Looptica Barcelona",
      metaDescription: "Serveis especialitzats d'ortoqueratologia a Barcelona. Experimenta una visió clara sense ulleres ni lents de contacte durant el dia amb les nostres lents nocturnes personalitzades.",
      intro: {
        title: "Què és l'Ortoqueratologia?",
        paragraphs: [
          "L'Ortoqueratologia, comunament coneguda com Orto-K, és una tècnica avançada que utilitza lents de contacte especialment dissenyades que es porten durant la nit mentre es dorm. Aquestes lents remodelten temporalment la còrnia (la superfície frontal de l'ull), corregint així errors de refracció com la miopia, l'hipermetropia i l'astigmatisme.",
          "El resultat? Una visió clara durant el dia sense necessitat d'ulleres o lents de contacte convencionals. És com una \"ortodòncia\" per als seus ulls, però amb resultats temporals que s'aconsegueixen mentre dorm."
        ]
      },
      process: {
        title: "Com funciona l'Orto-K?",
        steps: [
          {
            title: "Durant la nit",
            description: "Les lents Orto-K apliquen una pressió suau sobre la còrnia, alterant el seu contorn. Són fabricades amb materials d'alt DK (altament permeable a l'oxigen), permetent que els ulls respirin mentre dormen."
          },
          {
            title: "Durant el dia",
            description: "En despertar i retirar les lents, la còrnia manté la seva nova forma, proporcionant una visió clara durant tot el dia sense necessitat de correcció visual addicional."
          },
          {
            title: "Resultats acumulatius",
            description: "Amb l'ús continuat, molts pacients experimenten resultats més estables i duradors. Alguns poden fins i tot espaiar l'ús de les lents a cada dues nits mantenint una bona visió."
          },
          {
            title: "Efectes temporals",
            description: "Els efectes són completament reversibles. Si deixa d'utilitzar les lents Orto-K, la còrnia tornarà gradualment a la seva forma original i la visió tornarà al seu estat previ."
          }
        ]
      },
      benefits: {
        title: "Beneficis de l'Orto-K",
        items: [
          {
            title: "Llibertat de les ulleres",
            description: "Ideal per a esportistes, nedadors i persones amb estils de vida actius que troben les ulleres o lents de contacte incòmodes durant certes activitats."
          },
          {
            title: "Control de la miopia",
            description: "Estudis han demostrat que l'Orto-K pot ajudar a frenar la progressió de la miopia en nens i adolescents, convertint-se en una eina valuosa per a la gestió de la miopia."
          },
          {
            title: "Alternativa a la cirurgia",
            description: "Proporciona molts dels beneficis de la cirurgia refractiva sense els riscos associats als procediments quirúrgics i amb resultats completament reversibles."
          },
          {
            title: "Millora de la qualitat de vida",
            description: "Allibera als pacients de la dependència constant d'ulleres o lents de contacte diürnes, simplificant la seva rutina diària."
          }
        ]
      },
      adaptationProcess: {
        title: "El procés d'adaptació a Looptica",
        intro: "A Looptica, comptem amb optometristes altament especialitzats en ortoqueratologia que han ajudat nombrosos pacients a aconseguir una visió clara sense correccions diürnes. El nostre procés d'adaptació inclou:",
        steps: [
          {
            title: "Avaluació inicial:",
            description: "Un examen ocular exhaustiu per determinar si vostè és un bon candidat per a l'Orto-K. Avaluem la topografia corneal, la salut ocular i la seva prescripció."
          },
          {
            title: "Disseny personalitzat:",
            description: "Utilitzant tecnologia avançada de topografia corneal, dissenyem lents Orto-K específicament per als seus ulls."
          },
          {
            title: "Instruccions d'ús:",
            description: "Li ensenyem com insertar, retirar i mantenir les seves lents Orto-K adequadament."
          },
          {
            title: "Seguiment regular:",
            description: "Programem visites de seguiment per monitorar el seu progrés i realitzar ajustos si és necessari."
          },
          {
            title: "Suport continu:",
            description: "El nostre equip està sempre disponible per atendre qualsevol consulta o preocupació que pugui tenir."
          }
        ],
        candidateInfo: {
          title: "És vostè un bon candidat per a l'Orto-K?",
          suitableFor: {
            intro: "L'Orto-K és adequat per a persones amb:",
            conditions: [
              "Miopia lleu a moderada (fins a -6.00 diòptries)",
              "Astigmatisme lleu (fins a -1.75 diòptries)",
              "Hipermetropia lleu (fins a +3.00 diòptries)",
              "Còrnies saludables i ulls lliures de malalties"
            ]
          },
          beneficialFor: {
            intro: "És especialment beneficiós per a:",
            profiles: [
              "Nens i adolescents amb miopia progressiva",
              "Esportistes i persones amb estils de vida actius",
              "Persones que treballen en entorns polsosos o secs que fan incòmode l'ús de lents de contacte convencionals",
              "Aquells que no són candidats adequats per a la cirurgia refractiva"
            ]
          }
        }
      }
    }
  };

  const content = pageContent[language];

  return (
    <>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>
      <ServiceLayout
        title={content.title}
        subtitle={content.subtitle}
        image="/lovable-uploads/cb898a8f-0dd3-4ffb-aa14-822fcefb417d.png"
        appointmentSubject={content.appointmentSubject}
      >
        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{content.intro.title}</h2>
            {content.intro.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-6">{content.process.title}</h3>
            
            <div className="space-y-6">
              {content.process.steps.map((step, index) => (
                <div className="flex gap-4" key={index}>
                  <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                    {index === 0 && <Moon className="w-6 h-6 text-white" />}
                    {index === 1 && <Sun className="w-6 h-6 text-white" />}
                    {index === 2 && <Target className="w-6 h-6 text-white" />}
                    {index === 3 && <Clock className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{content.benefits.title}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.benefits.items.map((benefit, index) => (
                <div className="bg-white p-6 rounded-lg shadow-sm" key={index}>
                  <h4 className="text-xl font-medium mb-2">{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{content.adaptationProcess.title}</h2>
            <p>{content.adaptationProcess.intro}</p>
            <ol>
              {content.adaptationProcess.steps.map((step, index) => (
                <li key={index}>
                  <strong>{step.title}</strong> {step.description}
                </li>
              ))}
            </ol>
            <h3>{content.adaptationProcess.candidateInfo.title}</h3>
            <p>{content.adaptationProcess.candidateInfo.suitableFor.intro}</p>
            <ul>
              {content.adaptationProcess.candidateInfo.suitableFor.conditions.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
            <p>{content.adaptationProcess.candidateInfo.beneficialFor.intro}</p>
            <ul>
              {content.adaptationProcess.candidateInfo.beneficialFor.profiles.map((profile, index) => (
                <li key={index}>{profile}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default OrtoK;
