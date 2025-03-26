
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { PenTool, User, Lightbulb, Smile } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const ImageConsulting = () => {
  const { language } = useLanguage();
  
  const pageContent = {
    en: {
      title: "Image Consulting",
      subtitle: "Find the style that best suits your personality",
      appointmentSubject: "Image Consulting at Looptica",
      metaTitle: "Image Consulting Services | Looptica Barcelona",
      metaDescription: "Professional image consulting for eyewear at Looptica Barcelona. Find frames that enhance your appearance and complement your personal style.",
      serviceIntro: {
        title: "Our Image Consulting Service",
        paragraphs: [
          "At Looptica, we understand that eyeglasses are more than just a visual corrective tool; they're an essential part of your personal image. Our image consulting service is designed to help you find the perfect eyewear that not only enhances your vision but also complements your personal style, face shape, and lifestyle.",
          "Our style consultants are specially trained to provide expert guidance on frame selection, combining their knowledge of current trends with a deep understanding of how different eyewear styles suit different face types and personalities."
        ]
      },
      consultationProcess: {
        title: "Our Image Consultation Process",
        steps: [
          {
            title: "Face Shape Analysis",
            description: "We determine your face shape to recommend frame styles that enhance your natural features and provide visual balance."
          },
          {
            title: "Color Assessment",
            description: "We analyze your skin tone, hair color, and eye color to suggest frame colors that best complement your personal palette."
          },
          {
            title: "Lifestyle Considerations",
            description: "We discuss your daily habits, profession, and leisure activities to recommend frames that suit your specific lifestyle."
          },
          {
            title: "Personalized Selection",
            description: "Based on our analysis, we present you with a curated selection of frames that meet all criteria, allowing you to try various options to find the one that makes you feel most comfortable and confident."
          }
        ]
      },
      benefits: {
        title: "Benefits of Our Image Consulting",
        items: [
          {
            title: "Enhanced Confidence",
            description: "When you wear eyewear that perfectly complements your appearance and personality, you experience a natural boost in confidence."
          },
          {
            title: "Time Savings",
            description: "Our expert guidance eliminates the confusion and stress of navigating through hundreds of options, making the selection process efficient and enjoyable."
          },
          {
            title: "Versatility",
            description: "We can help you select multiple pairs of eyewear for different occasions, ensuring you have the perfect accessory for every setting and activity."
          },
          {
            title: "Long-term Investment",
            description: "Proper image consulting ensures your eyewear is not just a visual solution but also a lasting investment in your appearance and well-being."
          }
        ],
        designerCollections: {
          title: "Our Designer Collections",
          intro: "At Looptica, we pride ourselves on offering an exceptional selection of frames from prestigious designers and exclusive independent brands. Our collection includes:",
          brands: ["Etnia Barcelona", "Woodys Barcelona", "Xavier Garcia", "Kaleos", "Talla Eyewear", "Garrett Leight", "Moscot", "Ray-Ban", "Tom Ford"],
          conclusion: "Each brand has been carefully curated for its quality, style, and commitment to design excellence, ensuring our clientele has access to the finest eyewear options available."
        }
      }
    },
    es: {
      title: "Asesoramiento de Imagen",
      subtitle: "Encuentra el estilo que mejor se adapta a tu personalidad",
      appointmentSubject: "Asesoramiento de Imagen en Looptica",
      metaTitle: "Servicios de Asesoramiento de Imagen | Looptica Barcelona",
      metaDescription: "Asesoramiento de imagen profesional para gafas en Looptica Barcelona. Encuentra monturas que realcen tu apariencia y complementen tu estilo personal.",
      serviceIntro: {
        title: "Nuestro servicio de asesoramiento de imagen",
        paragraphs: [
          "En Looptica, entendemos que las gafas son más que una herramienta correctiva visual; son una parte esencial de tu imagen personal. Nuestro servicio de asesoramiento de imagen está diseñado para ayudarte a encontrar las gafas perfectas que no solo mejoren tu visión, sino que también complementen tu estilo personal, la forma de tu rostro y tu estilo de vida.",
          "Nuestros consultores de estilo están especialmente formados para ofrecer orientación experta sobre la selección de monturas, combinando su conocimiento de las tendencias actuales con una comprensión profunda de cómo diferentes estilos de gafas se adaptan a diferentes tipos de rostros y personalidades."
        ]
      },
      consultationProcess: {
        title: "Nuestro proceso de consulta de imagen",
        steps: [
          {
            title: "Análisis de la forma del rostro",
            description: "Determinamos la forma de tu rostro para recomendar estilos de montura que realcen tus rasgos naturales y proporcionen un equilibrio visual."
          },
          {
            title: "Evaluación del color",
            description: "Analizamos tu tono de piel, color de cabello y ojos para sugerir colores de montura que mejor complementen tu paleta personal."
          },
          {
            title: "Consideraciones de estilo de vida",
            description: "Discutimos tus hábitos diarios, profesión y actividades de ocio para recomendar monturas que se adapten a tu estilo de vida específico."
          },
          {
            title: "Selección personalizada",
            description: "Basándonos en nuestro análisis, te presentamos una selección curada de monturas que cumplen todos los criterios, permitiéndote probar varias opciones para encontrar la que te haga sentir más cómodo y seguro."
          }
        ]
      },
      benefits: {
        title: "Beneficios de nuestro asesoramiento de imagen",
        items: [
          {
            title: "Confianza mejorada",
            description: "Cuando llevas gafas que complementan perfectamente tu apariencia y personalidad, experimentas un aumento natural de la confianza."
          },
          {
            title: "Ahorro de tiempo",
            description: "Nuestra orientación experta elimina la confusión y el estrés de navegar entre cientos de opciones, haciendo que el proceso de selección sea eficiente y agradable."
          },
          {
            title: "Versatilidad",
            description: "Podemos ayudarte a seleccionar múltiples pares de gafas para diferentes ocasiones, asegurando que tengas el accesorio perfecto para cada entorno y actividad."
          },
          {
            title: "Inversión a largo plazo",
            description: "El asesoramiento de imagen adecuado asegura que tus gafas no solo sean una solución visual, sino también una inversión duradera en tu apariencia y bienestar."
          }
        ],
        designerCollections: {
          title: "Nuestras colecciones de diseñador",
          intro: "En Looptica, nos enorgullecemos de ofrecer una selección excepcional de monturas de diseñadores prestigiosos y marcas independientes exclusivas. Nuestra colección incluye:",
          brands: ["Etnia Barcelona", "Woodys Barcelona", "Xavier Garcia", "Kaleos", "Talla Eyewear", "Garrett Leight", "Moscot", "Ray-Ban", "Tom Ford"],
          conclusion: "Cada marca ha sido cuidadosamente seleccionada por su calidad, estilo y compromiso con la excelencia en diseño, asegurando que nuestra clientela tenga acceso a las mejores opciones de gafas disponibles."
        }
      }
    },
    ca: {
      title: "Assessorament d'Imatge",
      subtitle: "Troba l'estil que millor s'adapta a la teva personalitat",
      appointmentSubject: "Assessorament d'Imatge a Looptica",
      metaTitle: "Serveis d'Assessorament d'Imatge | Looptica Barcelona",
      metaDescription: "Assessorament d'imatge professional per a ulleres a Looptica Barcelona. Troba muntures que realcin la teva aparença i complementin el teu estil personal.",
      serviceIntro: {
        title: "El nostre servei d'assessorament d'imatge",
        paragraphs: [
          "A Looptica, entenem que les ulleres són més que una eina correctiva visual; són una part essencial de la teva imatge personal. El nostre servei d'assessorament d'imatge està dissenyat per ajudar-te a trobar les ulleres perfectes que no només millorin la teva visió, sinó que també complementin el teu estil personal, la forma del teu rostre i el teu estil de vida.",
          "Els nostres consultors d'estil estan especialment formats per oferir orientació experta sobre la selecció de muntures, combinant el seu coneixement de les tendències actuals amb una comprensió profunda de com diferents estils de ulleres s'adapten a diferents tipus de rostres i personalitats."
        ]
      },
      consultationProcess: {
        title: "El nostre procés de consulta d'imatge",
        steps: [
          {
            title: "Anàlisi de la forma del rostre",
            description: "Determinem la forma del teu rostre per recomanar estils de muntura que realcin els teus trets naturals i proporcionin un equilibri visual."
          },
          {
            title: "Avaluació del color",
            description: "Analitzem el teu to de pell, color de cabell i ulls per suggerir colors de muntura que millor complementin la teva paleta personal."
          },
          {
            title: "Consideracions d'estil de vida",
            description: "Discutim els teus hàbits diaris, professió i activitats d'oci per recomanar muntures que s'adaptin al teu estil de vida específic."
          },
          {
            title: "Selecció personalitzada",
            description: "Basant-nos en la nostra anàlisi, et presentem una selecció curada de muntures que compleixen tots els criteris, permetent-te provar diverses opcions per trobar la que et faci sentir més còmode i segur."
          }
        ]
      },
      benefits: {
        title: "Beneficis del nostre assessorament d'imatge",
        items: [
          {
            title: "Confiança millorada",
            description: "Quan portes ulleres que complementen perfectament la teva aparença i personalitat, experimentes un augment natural de la confiança."
          },
          {
            title: "Estalvi de temps",
            description: "La nostra orientació experta elimina la confusió i l'estrès de navegar entre centenars de opcions, fent que el procés de selecció sigui eficient i agradable."
          },
          {
            title: "Versatilitat",
            description: "Podem ajudar-te a seleccionar múltiples parells d'ulleres per a diferents ocasions, assegurant que tinguis l'accessori perfecte per a cada entorn i activitat."
          },
          {
            title: "Inversió a llarg termini",
            description: "L'assessorament d'imatge adequat assegura que les teves ulleres no només siguin una solució visual, sinó també una inversió duradora en la teva aparença i benestar."
          }
        ],
        designerCollections: {
          title: "Les nostres col·leccions de dissenyador",
          intro: "A Looptica, ens enorgullim d'oferir una selecció excepcional de muntures de dissenyadors prestigiosos i marques independents exclusives. La nostra col·lecció inclou:",
          brands: ["Etnia Barcelona", "Woodys Barcelona", "Xavier Garcia", "Kaleos", "Talla Eyewear", "Garrett Leight", "Moscot", "Ray-Ban", "Tom Ford"],
          conclusion: "Cada marca ha estat acuradament seleccionada per la seva qualitat, estil i compromís amb l'excel·lència en disseny, assegurant que la nostra clientela tingui accés a les millors opcions d'ulleres disponibles."
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
        image="/lovable-uploads/45087a9c-489a-4d48-82fb-d857e7bf306a.png"
        appointmentSubject={content.appointmentSubject}
      >
        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{content.serviceIntro.title}</h2>
            {content.serviceIntro.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-6">{content.consultationProcess.title}</h3>
            
            <div className="space-y-6">
              {content.consultationProcess.steps.map((step, index) => (
                <div className="flex gap-4" key={index}>
                  <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                    {index === 0 && <User className="w-6 h-6 text-white" />}
                    {index === 1 && <PenTool className="w-6 h-6 text-white" />}
                    {index === 2 && <Lightbulb className="w-6 h-6 text-white" />}
                    {index === 3 && <Smile className="w-6 h-6 text-white" />}
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
            <h2>{content.benefits.title}</h2>
            <ul>
              {content.benefits.items.map((benefit, index) => (
                <li key={index}>
                  <strong>{benefit.title}</strong>
                  <p>{benefit.description}</p>
                </li>
              ))}
            </ul>
            <h3>{content.benefits.designerCollections.title}</h3>
            <p>{content.benefits.designerCollections.intro}</p>
            <ul>
              {content.benefits.designerCollections.brands.map((brand, index) => (
                <li key={index}>{brand}</li>
              ))}
            </ul>
            <p>{content.benefits.designerCollections.conclusion}</p>
          </div>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default ImageConsulting;
