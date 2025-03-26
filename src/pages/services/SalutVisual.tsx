
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, Shield, CheckSquare, Award } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const SalutVisual = () => {
  const { language } = useLanguage();
  
  const pageContent = {
    en: {
      title: "Visual Health",
      subtitle: "We take care of your eyes with the best technology and professionals",
      appointmentSubject: "Visual Health Exam at Looptica",
      metaTitle: "Visual Health Services | Looptica Barcelona",
      metaDescription: "Comprehensive visual health exams and eye care at Looptica Barcelona. Expert optometrists, advanced technology, and personalized vision solutions.",
      whatIs: {
        title: "What is a visual health exam?",
        paragraphs: [
          "A visual health exam is a comprehensive assessment of the state of your eyes and vision performed by eye health professionals. It goes beyond a simple vision test; it's a complete review that examines general eye health, visual function, and detects possible eye problems or systemic diseases that can affect the eyes.",
          "At Looptica, we believe that preventive care is essential to maintaining good vision throughout life. Our comprehensive vision exams use cutting-edge technology to provide a detailed assessment of all aspects of your eye health."
        ]
      },
      process: {
        title: "Our visual examination process",
        steps: [
          {
            title: "Medical history",
            description: "Detailed review of your medical, ocular, and family history, including current medications and lifestyle that might affect your vision."
          },
          {
            title: "Preliminary exams",
            description: "Assessment of visual acuity, color perception, peripheral vision, and intraocular pressure to detect early signs of problems."
          },
          {
            title: "Refraction",
            description: "Precise determination of your lens prescription using objective and subjective methods to ensure the best possible visual correction."
          },
          {
            title: "Eye health evaluation",
            description: "Comprehensive examination of the internal and external structures of the eye to detect diseases such as glaucoma, cataracts, macular degeneration, and diabetic retinopathy."
          }
        ]
      },
      importance: {
        title: "Why are regular eye exams important?",
        paragraphs: [
          "Many eye diseases do not present symptoms in their early stages. Regular exams can detect problems before they cause irreversible damage or vision loss. In addition, the eyes can reveal signs of systemic health conditions such as diabetes, hypertension, and high cholesterol."
        ],
        recommendations: {
          intro: "We recommend comprehensive eye exams:",
          items: [
            "Every 2 years for adults 18-60 years without visual problems or risk factors",
            "Annually for people over 60 years old",
            "Annually for people of any age who wear contact lenses, have risk factors or existing medical conditions",
            "According to the recommendations of your optometrist or ophthalmologist for children and adolescents"
          ]
        }
      },
      technology: {
        title: "Advanced Technology at Looptica",
        items: [
          {
            title: "Optical Coherence Tomography (OCT)",
            description: "Allows us to obtain cross-sectional images of the retina, providing details about its structure with microscopic precision."
          },
          {
            title: "Corneal Topography",
            description: "Creates a 3D map of the cornea's surface, essential for contact lens fitting and detection of corneal disorders."
          },
          {
            title: "State-of-the-art Autorefractometers",
            description: "Provides objective measurements of the eye's refractive error, speeding up and improving the accuracy of the prescription process."
          },
          {
            title: "Digital Slit Lamp Examination",
            description: "Allows detailed examination and photographic documentation of anterior and posterior eye structures."
          }
        ]
      }
    },
    es: {
      title: "Salud Visual",
      subtitle: "Cuidamos de tus ojos con la mejor tecnología y profesionales",
      appointmentSubject: "Examen de Salud Visual en Looptica",
      metaTitle: "Servicios de Salud Visual | Looptica Barcelona",
      metaDescription: "Exámenes completos de salud visual y cuidado ocular en Looptica Barcelona. Optometristas expertos, tecnología avanzada y soluciones de visión personalizadas.",
      whatIs: {
        title: "¿Qué es un examen de salud visual?",
        paragraphs: [
          "Un examen de salud visual es una evaluación integral del estado de sus ojos y de su visión realizada por profesionales de la salud ocular. Va más allá de una simple prueba de visión; es una revisión completa que examina la salud ocular general, la función visual y detecta posibles problemas oculares o enfermedades sistémicas que pueden afectar los ojos.",
          "En Looptica, creemos que la atención preventiva es fundamental para mantener una buena visión durante toda la vida. Nuestros exámenes visuales completos utilizan tecnología de vanguardia para proporcionar una evaluación detallada de todos los aspectos de su salud ocular."
        ]
      },
      process: {
        title: "Nuestro proceso de examen visual",
        steps: [
          {
            title: "Anamnesis",
            description: "Revisión detallada de su historial médico, ocular y familiar, incluyendo medicamentos actuales y estilo de vida que podrían afectar su visión."
          },
          {
            title: "Exámenes preliminares",
            description: "Evaluación de la agudeza visual, percepción de colores, visión periférica y presión intraocular para detectar signos tempranos de problemas."
          },
          {
            title: "Refracción",
            description: "Determinación precisa de su prescripción de lentes utilizando métodos objetivos y subjetivos para garantizar la mejor corrección visual posible."
          },
          {
            title: "Evaluación de la salud ocular",
            description: "Examen completo de las estructuras internas y externas del ojo para detectar enfermedades como glaucoma, cataratas, degeneración macular y retinopatía diabética."
          }
        ]
      },
      importance: {
        title: "¿Por qué son importantes los exámenes visuales regulares?",
        paragraphs: [
          "Muchas enfermedades oculares no presentan síntomas en sus etapas iniciales. Los exámenes regulares pueden detectar problemas antes de que causen daños irreversibles o pérdida de visión. Además, los ojos pueden revelar signos de condiciones de salud sistémicas como diabetes, hipertensión y colesterol alto."
        ],
        recommendations: {
          intro: "Recomendamos exámenes visuales completos:",
          items: [
            "Cada 2 años para adultos de 18 a 60 años sin problemas visuales o factores de riesgo",
            "Anualmente para personas de más de 60 años",
            "Anualmente para personas de cualquier edad que usen lentes de contacto, tengan factores de riesgo o condiciones médicas existentes",
            "Según las recomendaciones de su optometrista u oftalmólogo para niños y adolescentes"
          ]
        }
      },
      technology: {
        title: "Tecnología avanzada en Looptica",
        items: [
          {
            title: "Tomografía de Coherencia Óptica (OCT)",
            description: "Nos permite obtener imágenes de la retina en secciones transversales, proporcionando detalles sobre su estructura con precisión microscópica."
          },
          {
            title: "Topografía Corneal",
            description: "Crea un mapa 3D de la superficie de la córnea, esencial para la adaptación de lentes de contacto y la detección de trastornos corneales."
          },
          {
            title: "Autorrefractómetros de última generación",
            description: "Proporciona mediciones objetivas del error de refracción del ojo, acelerando y mejorando la precisión del proceso de prescripción."
          },
          {
            title: "Examen con lámpara de hendidura digital",
            description: "Permite el examen detallado y documentación fotográfica de las estructuras oculares anteriores y posteriores."
          }
        ]
      }
    },
    ca: {
      title: "Salut Visual",
      subtitle: "Cuidem dels teus ulls amb la millor tecnologia i professionals",
      appointmentSubject: "Examen de Salut Visual a Looptica",
      metaTitle: "Serveis de Salut Visual | Looptica Barcelona",
      metaDescription: "Exàmens complets de salut visual i cura ocular a Looptica Barcelona. Optometristes experts, tecnologia avançada i solucions de visió personalitzades.",
      whatIs: {
        title: "Què és un examen de salut visual?",
        paragraphs: [
          "Un examen de salut visual és una avaluació integral de l'estat dels seus ulls i de la seva visió realitzada per professionals de la salut ocular. Va més enllà d'una simple prova de visió; és una revisió completa que examina la salut ocular general, la funció visual i detecta possibles problemes oculars o malalties sistèmiques que poden afectar els ulls.",
          "A Looptica, creiem que l'atenció preventiva és fonamental per mantenir una bona visió durant tota la vida. Els nostres exàmens visuals complets utilitzen tecnologia d'avantguarda per proporcionar una avaluació detallada de tots els aspectes de la seva salut ocular."
        ]
      },
      process: {
        title: "El nostre procés d'examen visual",
        steps: [
          {
            title: "Anamnesi",
            description: "Revisió detallada del seu historial mèdic, ocular i familiar, incloent medicaments actuals i estil de vida que podrien afectar la seva visió."
          },
          {
            title: "Exàmens preliminars",
            description: "Avaluació de l'agudesa visual, percepció de colors, visió perifèrica i pressió intraocular per detectar signes primerencs de problemes."
          },
          {
            title: "Refracció",
            description: "Determinació precisa de la seva prescripció de lents utilitzant mètodes objectius i subjectius per garantir la millor correcció visual possible."
          },
          {
            title: "Avaluació de la salut ocular",
            description: "Examen complet de les estructures internes i externes de l'ull per detectar malalties com glaucoma, cataractes, degeneració macular i retinopatia diabètica."
          }
        ]
      },
      importance: {
        title: "Per què són importants els exàmens visuals regulars?",
        paragraphs: [
          "Moltes malalties oculars no presenten símptomes en les seves etapes inicials. Els exàmens regulars poden detectar problemes abans que causin danys irreversibles o pèrdua de visió. A més, els ulls poden revelar signes de condicions de salut sistèmiques com diabetis, hipertensió i colesterol alt."
        ],
        recommendations: {
          intro: "Recomanem exàmens visuals complets:",
          items: [
            "Cada 2 anys per a adults de 18 a 60 anys sense problemes visuals o factors de risc",
            "Anualment per a persones de més de 60 anys",
            "Anualment per a persones de qualsevol edat que portin lents de contacte, tinguin factors de risc o condicions mèdiques existents",
            "Segons les recomanacions del seu optometrista o oftalmòleg per a nens i adolescents"
          ]
        }
      },
      technology: {
        title: "Tecnologia avançada a Looptica",
        items: [
          {
            title: "Tomografia de Coherència Òptica (OCT)",
            description: "Ens permet obtenir imatges de la retina en seccions transversals, proporcionant detalls sobre la seva estructura amb precisió microscòpica."
          },
          {
            title: "Topografia Corneal",
            description: "Crea un mapa 3D de la superfície de la còrnia, essencial per a l'adaptació de lents de contacte i la detecció de trastorns corneals."
          },
          {
            title: "Autorefractòmetres d'última generació",
            description: "Proporciona mesuraments objectius de l'error de refracció de l'ull, accelerant i millorant la precisió del procés de prescripció."
          },
          {
            title: "Examen amb làmpada de fenedura digital",
            description: "Permet l'examen detallat i documentació fotogràfica de les estructures oculars anteriors i posteriors."
          }
        ]
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
            <h2>{content.whatIs.title}</h2>
            {content.whatIs.paragraphs.map((paragraph, index) => (
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
                    {index === 0 && <Eye className="w-6 h-6 text-white" />}
                    {index === 1 && <CheckSquare className="w-6 h-6 text-white" />}
                    {index === 2 && <Shield className="w-6 h-6 text-white" />}
                    {index === 3 && <Award className="w-6 h-6 text-white" />}
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
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{content.importance.title}</h2>
            {content.importance.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>{content.importance.recommendations.intro}</p>
            <ul>
              {content.importance.recommendations.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{content.technology.title}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.technology.items.map((tech, index) => (
                <div className="bg-white p-6 rounded-lg shadow-sm" key={index}>
                  <h4 className="text-xl font-medium mb-2">{tech.title}</h4>
                  <p>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default SalutVisual;
