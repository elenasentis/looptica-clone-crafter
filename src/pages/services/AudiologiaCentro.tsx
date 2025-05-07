
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const AudiologiaCentro = () => {
  const { language } = useLanguage();
  
  const content = {
    title: {
      en: "Audiology Center",
      es: "Centro de Audiología",
      ca: "Centre d'Audiologia"
    },
    subtitle: {
      en: "Comprehensive hearing care solutions",
      es: "Soluciones integrales para el cuidado auditivo",
      ca: "Solucions integrals per a la cura auditiva"
    },
    appointmentSubject: {
      en: "Audiology Consultation at Looptica",
      es: "Consulta de Audiología en Looptica",
      ca: "Consulta d'Audiologia a Looptica"
    },
    servicesTitle: {
      en: "Our Audiology Services",
      es: "Nuestros Servicios de Audiología",
      ca: "Els nostres Serveis d'Audiologia"
    },
    servicesDescription: {
      en: "At Looptica, we offer a wide range of audiology services to help you maintain and improve your hearing health. Our team of experienced audiologists is dedicated to providing personalized care and the latest technology to meet your individual needs.",
      es: "En Looptica, ofrecemos una amplia gama de servicios de audiología para ayudarle a mantener y mejorar su salud auditiva. Nuestro equipo de audiólogos experimentados se dedica a proporcionar atención personalizada y la última tecnología para satisfacer sus necesidades individuales.",
      ca: "A Looptica, oferim una àmplia gamma de serveis d'audiologia per ajudar-vos a mantenir i millorar la vostra salut auditiva. El nostre equip d'audiòlegs experimentats es dedica a proporcionar atenció personalitzada i l'última tecnologia per satisfer les vostres necessitats individuals."
    },
    hearingTests: {
      en: "Hearing Tests",
      es: "Pruebas de Audición",
      ca: "Proves d'Audició"
    },
    hearingTestsDesc: {
      en: "Comprehensive hearing evaluations to assess your hearing ability and identify any potential issues.",
      es: "Evaluaciones auditivas completas para evaluar su capacidad auditiva e identificar cualquier problema potencial.",
      ca: "Avaluacions auditives completes per avaluar la vostra capacitat auditiva i identificar qualsevol problema potencial."
    },
    hearingAids: {
      en: "Hearing Aids",
      es: "Audífonos",
      ca: "Audiòfons"
    },
    hearingAidsDesc: {
      en: "Advanced digital hearing aids from leading brands, tailored to your specific hearing loss and lifestyle.",
      es: "Audífonos digitales avanzados de marcas líderes, adaptados a su pérdida auditiva y estilo de vida específicos.",
      ca: "Audiòfons digitals avançats de marques líders, adaptats a la vostra pèrdua auditiva i estil de vida específics."
    },
    tinnitusTreatment: {
      en: "Tinnitus Treatment",
      es: "Tratamiento de Tinnitus",
      ca: "Tractament de Tinnitus"
    },
    tinnitusTreatmentDesc: {
      en: "Effective strategies and therapies to manage and reduce the impact of tinnitus on your daily life.",
      es: "Estrategias y terapias eficaces para controlar y reducir el impacto del tinnitus en su vida diaria.",
      ca: "Estratègies i teràpies eficaces per controlar i reduir l'impacte del tinnitus en la vostra vida diària."
    },
    earProtection: {
      en: "Custom Ear Protection",
      es: "Protección Auditiva Personalizada",
      ca: "Protecció Auditiva Personalitzada"
    },
    earProtectionDesc: {
      en: "Custom-fitted earplugs and earmolds for musicians, industrial workers, and anyone exposed to loud noise.",
      es: "Tapones para los oídos y moldes para los oídos hechos a medida para músicos, trabajadores industriales y cualquier persona expuesta a ruidos fuertes.",
      ca: "Taps per a les orelles i motlles per a les orelles fets a mida per a músics, treballadors industrials i qualsevol persona exposada a sorolls forts."
    },
    subsidies: {
      title: {
        en: "Aid and Subsidies for Hearing Aids in Catalonia",
        es: "Ayudas y Subvenciones para la compra de Audífonos en Cataluña",
        ca: "Ajudes i Subvencions per a la compra d'Audiòfons a Catalunya"
      },
      content: {
        en: [
          "The purchase of hearing aids is an important investment for those with hearing loss. In Catalonia, there are several aid and subsidy programs that can help reduce these costs.",
          "The healthcare system in Spain and Catalonia currently offers financial aid for hearing aids under certain conditions. Those under 26 years of age can receive significant subsidies, with each hearing aid receiving up to €1,000 in aid.",
          "For people over 26 years old with recognized disability and specific forms of hearing loss, audiological support is also available from Social Security.",
          "Additionally, there are various local administrations (town halls, provincial councils) that offer specific grants for hearing aids, especially for older people or those with limited resources.",
          "At Looptica, we offer comprehensive advice on the subsidies available for hearing aids and help you with all necessary procedures to apply for these grants."
        ],
        es: [
          "La compra de audífonos supone una inversión importante para aquellas personas con pérdida auditiva. En Cataluña, existen varios programas de ayudas y subvenciones que pueden ayudar a reducir estos costes.",
          "El sistema sanitario en España y Cataluña actualmente ofrece ayudas económicas para audífonos bajo ciertas condiciones. Las personas menores de 26 años pueden recibir subvenciones importantes, recibiendo cada audífono hasta 1.000€ de ayuda.",
          "Para las personas mayores de 26 años con discapacidad reconocida y formas específicas de pérdida auditiva, también está disponible el apoyo audiológico de la Seguridad Social.",
          "Además, existen varias administraciones locales (ayuntamientos, diputaciones) que ofrecen subvenciones específicas para audífonos, especialmente para personas mayores o con recursos limitados.",
          "En Looptica, ofrecemos asesoramiento integral sobre las subvenciones disponibles para audífonos y te ayudamos con todos los trámites necesarios para solicitar estas ayudas."
        ],
        ca: [
          "La compra d'audiòfons suposa una inversió important per a aquelles persones amb pèrdua auditiva. A Catalunya, existeixen diversos programes d'ajudes i subvencions que poden ajudar a reduir aquests costos.",
          "El sistema sanitari a Espanya i Catalunya actualment ofereix ajudes econòmiques per a audiòfons sota certes condicions. Les persones menors de 26 anys poden rebre subvencions importants, rebent cada audiòfon fins a 1.000€ d'ajuda.",
          "Per a les persones majors de 26 anys amb discapacitat reconeguda i formes específiques de pèrdua auditiva, també està disponible el suport audiològic de la Seguretat Social.",
          "A més, existeixen diverses administracions locals (ajuntaments, diputacions) que ofereixen subvencions específiques per a audiòfons, especialment per a persones grans o amb recursos limitats.",
          "A Looptica, oferim assessorament integral sobre les subvencions disponibles per a audiòfons i t'ajudem amb tots els tràmits necessaris per sol·licitar aquestes ajudes."
        ]
      },
      eligibility: {
        en: "Who can access these subsidies?",
        es: "¿Quién puede acceder a estas subvenciones?",
        ca: "Qui pot accedir a aquestes subvencions?"
      },
      eligibilityContent: {
        en: [
          "People under 26 years of age with hearing loss",
          "People with recognized disability and specific hearing loss profiles",
          "Older adults (requirements vary depending on the municipality)",
          "People with limited financial resources (subject to income assessment)"
        ],
        es: [
          "Personas menores de 26 años con pérdida auditiva",
          "Personas con discapacidad reconocida y perfiles específicos de pérdida auditiva",
          "Adultos mayores (requisitos varían según el municipio)",
          "Personas con recursos económicos limitados (sujeto a evaluación de ingresos)"
        ],
        ca: [
          "Persones menors de 26 anys amb pèrdua auditiva",
          "Persones amb discapacitat reconeguda i perfils específics de pèrdua auditiva",
          "Adults grans (requisits varien segons el municipi)",
          "Persones amb recursos econòmics limitats (subjecte a avaluació d'ingressos)"
        ]
      }
    }
  };

  return (
    <ServiceLayout
      title={content.title[language]}
      subtitle={content.subtitle[language]}
      image="/lovable-uploads/4e50b490-59f3-40a9-a3a6-a1c02cf017a3.jpg"
      appointmentSubject={content.appointmentSubject[language]}
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.servicesTitle[language]}</h2>
          <p>{content.servicesDescription[language]}</p>
        </div>
      </ScrollReveal>
      {/* Subsidies Section with ID for direct linking */}
      <ScrollReveal>
        <div id="subsidies" className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">{content.subsidies.title[language]}</h2>
          
          <div className="prose prose-lg max-w-none mb-6">
            {content.subsidies.content[language].map((paragraph, idx) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}
          </div>
          
          <h3 className="text-xl font-medium mb-4">{content.subsidies.eligibility[language]}</h3>
          <ul className="list-disc pl-6 space-y-2">
            {content.subsidies.eligibilityContent[language].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.hearingTests[language]}</h3>
          <p>{content.hearingTestsDesc[language]}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.hearingAids[language]}</h3>
          <p>{content.hearingAidsDesc[language]}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.tinnitusTreatment[language]}</h3>
          <p>{content.tinnitusTreatmentDesc[language]}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.earProtection[language]}</h3>
          <p>{content.earProtectionDesc[language]}</p>
        </div>
      </ScrollReveal>
      
    </ServiceLayout>
  );
};

export default AudiologiaCentro;
