import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { BadgeDollarSign, FileText, Landmark, PiggyBank } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Subvenciones = () => {
  const { language } = useLanguage();

  // Content organized by language
  const content = {
    meta: {
      en: {
        title: "Hearing Aid Subsidies Barcelona - Financial Aid for Hearing Devices | Looptica",
        description: "Information about available subsidies and financial aid for hearing aids and hearing assistance devices in Barcelona. Learn about eligibility requirements and application process.",
      },
      es: {
        title: "Subvenciones para Audífonos Barcelona - Ayuda Financiera para Dispositivos Auditivos | Looptica",
        description: "Información sobre subvenciones y ayudas financieras disponibles para audífonos y dispositivos de asistencia auditiva en Barcelona. Conozca los requisitos de elegibilidad y el proceso de solicitud.",
      },
      ca: {
        title: "Subvencions per a Audiòfons Barcelona - Ajuda Financera per a Dispositius Auditius | Looptica",
        description: "Informació sobre subvencions i ajudes financeres disponibles per a audiòfons i dispositius d'assistència auditiva a Barcelona. Conegui els requisits d'elegibilitat i el procés de sol·licitud.",
      }
    },
    pageTitle: {
      en: "Hearing Aid Subsidies",
      es: "Subvenciones para Audífonos",
      ca: "Subvencions per a Audiòfons"
    },
    pageSubtitle: {
      en: "Information on available financial aid programs",
      es: "Información sobre programas de ayuda financiera disponibles",
      ca: "Informació sobre programes d'ajuda financera disponibles"
    },
    intro: {
      en: "Hearing aids and other hearing assistance devices can be a significant investment. At Looptica, we are committed to helping you access the hearing care you need. Below you'll find information about various subsidies and financial assistance programs available in Barcelona and Spain.",
      es: "Los audífonos y otros dispositivos de asistencia auditiva pueden representar una inversión significativa. En Looptica, estamos comprometidos a ayudarte a acceder a la atención auditiva que necesitas. A continuación, encontrarás información sobre varias subvenciones y programas de asistencia financiera disponibles en Barcelona y España.",
      ca: "Els audiòfons i altres dispositius d'assistència auditiva poden representar una inversió significativa. A Looptica, estem compromesos a ajudar-te a accedir a l'atenció auditiva que necessites. A continuació, trobaràs informació sobre diverses subvencions i programes d'assistència financera disponibles a Barcelona i Espanya."
    },
    sections: [
      {
        icon: <Landmark className="h-8 w-8 text-[#55afa9]" />,
        title: {
          en: "Government Subsidies",
          es: "Subvenciones Gubernamentales",
          ca: "Subvencions Governamentals"
        },
        content: {
          en: "The Spanish government offers financial assistance for hearing aids through various programs. Eligibility typically depends on your degree of hearing loss, income level, and other factors. Our audiologists can help you determine if you qualify and assist with the application process.",
          es: "El gobierno español ofrece asistencia financiera para audífonos a través de varios programas. La elegibilidad generalmente depende de su grado de pérdida auditiva, nivel de ingresos y otros factores. Nuestros audiólogos pueden ayudarle a determinar si califica y asistirle con el proceso de solicitud.",
          ca: "El govern espanyol ofereix assistència financera per a audiòfons a través de diversos programes. L'elegibilitat generalment depèn del seu grau de pèrdua auditiva, nivell d'ingressos i altres factors. Els nostres audiòlegs poden ajudar-lo a determinar si qualifica i assistir-lo amb el procés de sol·licitud."
        }
      },
      {
        icon: <PiggyBank className="h-8 w-8 text-[#55afa9]" />,
        title: {
          en: "Catalan Health Service (CatSalut)",
          es: "Servicio Catalán de Salud (CatSalut)",
          ca: "Servei Català de Salut (CatSalut)"
        },
        content: {
          en: "The Catalan Health Service provides partial coverage for hearing aids for eligible residents. The program requires medical prescription and covers a percentage of the cost depending on various factors. Our team can help you navigate the requirements and documentation needed.",
          es: "El Servicio Catalán de Salud proporciona cobertura parcial para audífonos para residentes elegibles. El programa requiere prescripción médica y cubre un porcentaje del costo dependiendo de varios factores. Nuestro equipo puede ayudarle a navegar por los requisitos y la documentación necesaria.",
          ca: "El Servei Català de Salut proporciona cobertura parcial per a audiòfons per a residents elegibles. El programa requereix prescripció mèdica i cobreix un percentatge del cost depenent de diversos factors. El nostre equip pot ajudar-lo a navegar pels requisits i la documentació necessària."
        }
      },
      {
        icon: <FileText className="h-8 w-8 text-[#55afa9]" />,
        title: {
          en: "Insurance Coverage",
          es: "Cobertura de Seguros",
          ca: "Cobertura d'Assegurances"
        },
        content: {
          en: "Many private health insurance plans in Spain offer some level of coverage for hearing aids and hearing tests. Coverage varies widely between providers, so we recommend checking with your insurance company about your specific benefits. Our staff can assist you with documentation and claims.",
          es: "Muchos planes de seguro de salud privados en España ofrecen algún nivel de cobertura para audífonos y pruebas auditivas. La cobertura varía ampliamente entre proveedores, por lo que recomendamos consultar con su compañía de seguros sobre sus beneficios específicos. Nuestro personal puede ayudarle con la documentación y reclamaciones.",
          ca: "Molts plans d'assegurança de salut privats a Espanya ofereixen algun nivell de cobertura per a audiòfons i proves auditives. La cobertura varia àmpliament entre proveïdors, per la qual cosa recomanem consultar amb la seva companyia d'assegurances sobre els seus beneficis específics. El nostre personal pot ajudar-lo amb la documentació i reclamacions."
        }
      }
    ],
    subsidiesInfo: {
      title: {
        en: "Aid and Subsidies for Hearing Aids in Catalonia",
        es: "Ayudas y Subvenciones para la compra de Audífonos en Cataluña",
        ca: "Ajudes i Subvencions per a la compra d'Audiòfons a Catalunya"
      },
      paragraphs: {
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
        title: {
          en: "Who can access these subsidies?",
          es: "¿Quién puede acceder a estas subvenciones?",
          ca: "Qui pot accedir a aquestes subvencions?"
        },
        items: {
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
    },
    consultation: {
      en: "For personalized guidance on subsidies and financial assistance for hearing aids, schedule a consultation with our team. We can help determine your eligibility and guide you through the application process.",
      es: "Para orientación personalizada sobre subvenciones y asistencia financiera para audífonos, programe una consulta con nuestro equipo. Podemos ayudarle a determinar su elegibilidad y guiarle a través del proceso de solicitud.",
      ca: "Per a orientació personalitzada sobre subvencions i assistència financera per a audiòfons, programi una consulta amb el nostre equip. Podem ajudar-lo a determinar la seva elegibilitat i guiar-lo a través del procés de sol·licitud."
    }
  };

  return (
    <>
      <Helmet>
        <title>{content.meta[language].title}</title>
        <meta name="description" content={content.meta[language].description} />
        <meta name="keywords" content="hearing aid subsidies, financial assistance hearing aids, Barcelona hearing aid funding, audiology financial aid" />
        <meta property="og:title" content={content.meta[language].title} />
        <meta property="og:description" content={content.meta[language].description} />
      </Helmet>

      <ServiceLayout
        title={content.pageTitle[language]}
        subtitle={content.pageSubtitle[language]}
        image="/images/oticonopnscoupleincitymg9377300dpicoticon2.jpg"
        appointmentSubject="Hearing Aid Subsidies Consultation"
      >
        <div className="prose prose-lg max-w-none mb-8">
          <p>{content.intro[language]}</p>
        </div>

        {/* Detailed subsidies information section */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">{content.subsidiesInfo.title[language]}</h2>
          
          <div className="prose prose-lg max-w-none mb-6">
            {content.subsidiesInfo.paragraphs[language].map((paragraph, idx) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}
          </div>
          
          <h3 className="text-xl font-medium mb-4">{content.subsidiesInfo.eligibility.title[language]}</h3>
          <ul className="list-disc pl-6 space-y-2">
            {content.subsidiesInfo.eligibility.items[language].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {content.sections.map((section, index) => (
            <Card key={index} className="border-t-4 border-t-[#55afa9]">
              <CardHeader className="flex flex-row items-center gap-4">
                {section.icon}
                <div>
                  <CardTitle className="text-xl">{section.title[language]}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {section.content[language]}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#55afa9]/10 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <BadgeDollarSign className="h-6 w-6 text-[#55afa9] shrink-0 mt-1" />
            <p className="text-gray-700">{content.consultation[language]}</p>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default Subvenciones;
