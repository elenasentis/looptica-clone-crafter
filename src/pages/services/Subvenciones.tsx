
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { BadgeDollarSign, FileText, Landmark, PiggyBank } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Subvenciones = () => {
  const { t, language } = useLanguage();

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
        image="/lovable-uploads/b5661196-c8c2-4fad-9207-094e65ba3642.png"
        appointmentSubject="Hearing Aid Subsidies Consultation"
      >
        <div className="prose prose-lg max-w-none mb-8">
          <p>{content.intro[language]}</p>
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
