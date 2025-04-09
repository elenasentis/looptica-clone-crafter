
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Zap, Headphones, Radio, Wifi } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Footer from '@/components/layout/Footer';

const TechnicalAids = () => {
  const { t, language } = useLanguage();
  
  // Page content organized by language
  const content = {
    meta: {
      en: {
        title: "Technical Aids for Hearing Loss | Looptica Barcelona",
        description: "Discover our range of specialized technical aids for hearing loss including Oticon TwinLink and EduMic technologies at Looptica Barcelona."
      },
      es: {
        title: "Ayudas Técnicas para Pérdida Auditiva | Looptica Barcelona",
        description: "Descubra nuestra gama de ayudas técnicas especializadas para pérdida auditiva, incluyendo las tecnologías Oticon TwinLink y EduMic en Looptica Barcelona."
      },
      ca: {
        title: "Ajudes Tècniques per a Pèrdua Auditiva | Looptica Barcelona",
        description: "Descobreix la nostra gamma d'ajudes tècniques especialitzades per a pèrdua auditiva, incloent les tecnologies Oticon TwinLink i EduMic a Looptica Barcelona."
      }
    },
    twinlink: {
      en: {
        title: "Oticon TwinLink Technology",
        description: "TwinLink is Oticon's groundbreaking dual-communication technology that powers all Oticon hearing aids. It provides two distinct systems:",
        features: [
          "Near-Field Binaural Communication (NFBC) for continuous, battery-saving data exchange between hearing aids",
          "2.4 GHz Bluetooth Low Energy technology for direct connectivity to smartphones and other devices",
          "Enables advanced features like spatial awareness, better speech understanding, and more natural sound experiences"
        ],
        benefits: [
          "Better sound localization",
          "Improved speech clarity in noisy environments",
          "Seamless connection to modern devices",
          "Lower power consumption compared to conventional systems"
        ]
      },
      es: {
        title: "Tecnología Oticon TwinLink",
        description: "TwinLink es la revolucionaria tecnología de comunicación dual de Oticon que potencia todos los audífonos Oticon. Proporciona dos sistemas distintos:",
        features: [
          "Comunicación Binaural de Campo Cercano (NFBC) para un intercambio continuo de datos entre audífonos, ahorrando batería",
          "Tecnología Bluetooth Low Energy de 2.4 GHz para conectividad directa con smartphones y otros dispositivos",
          "Permite características avanzadas como conciencia espacial, mejor comprensión del habla y experiencias sonoras más naturales"
        ],
        benefits: [
          "Mejor localización del sonido",
          "Mayor claridad del habla en entornos ruidosos",
          "Conexión perfecta con dispositivos modernos",
          "Menor consumo de energía en comparación con sistemas convencionales"
        ]
      },
      ca: {
        title: "Tecnologia Oticon TwinLink",
        description: "TwinLink és la revolucionària tecnologia de comunicació dual d'Oticon que potencia tots els audiòfons Oticon. Proporciona dos sistemes diferents:",
        features: [
          "Comunicació Binaural de Camp Proper (NFBC) per a un intercanvi continu de dades entre audiòfons, estalviant bateria",
          "Tecnologia Bluetooth Low Energy de 2.4 GHz per a connectivitat directa amb smartphones i altres dispositius",
          "Permet característiques avançades com consciència espacial, millor comprensió de la parla i experiències sonores més naturals"
        ],
        benefits: [
          "Millor localització del so",
          "Major claredat de la parla en entorns sorollosos",
          "Connexió perfecta amb dispositius moderns",
          "Menor consum d'energia en comparació amb sistemes convencionals"
        ]
      }
    },
    edumic: {
      en: {
        title: "Oticon EduMic",
        description: "EduMic is a wireless remote microphone designed specifically for educational environments, helping students with hearing loss stay connected to their teacher's voice in the classroom.",
        features: [
          "Directional microphone technology focused on the speaker's voice",
          "Streams high-quality sound directly to Oticon hearing aids",
          "Connects to classroom audio systems, computers, and tablets",
          "Rechargeable battery with a full day of classroom use"
        ],
        benefits: [
          "Improves speech understanding in noisy classrooms",
          "Reduces listening effort for students with hearing loss",
          "Supports better learning outcomes through clear communication",
          "Simple to use with an intuitive interface",
          "Durable design for daily classroom use"
        ]
      },
      es: {
        title: "Oticon EduMic",
        description: "EduMic es un micrófono remoto inalámbrico diseñado específicamente para entornos educativos, ayudando a estudiantes con pérdida auditiva a mantenerse conectados con la voz de su profesor en el aula.",
        features: [
          "Tecnología de micrófono direccional enfocada en la voz del hablante",
          "Transmite sonido de alta calidad directamente a los audífonos Oticon",
          "Se conecta a sistemas de audio de aulas, computadoras y tabletas",
          "Batería recargable con un día completo de uso en el aula"
        ],
        benefits: [
          "Mejora la comprensión del habla en aulas ruidosas",
          "Reduce el esfuerzo de escucha para estudiantes con pérdida auditiva",
          "Apoya mejores resultados de aprendizaje a través de una comunicación clara",
          "Fácil de usar con una interfaz intuitiva",
          "Diseño duradero para uso diario en el aula"
        ]
      },
      ca: {
        title: "Oticon EduMic",
        description: "EduMic és un micròfon remot sense fils dissenyat específicament per a entorns educatius, ajudant a estudiants amb pèrdua auditiva a mantenir-se connectats amb la veu del seu professor a l'aula.",
        features: [
          "Tecnologia de micròfon direccional enfocada en la veu del parlant",
          "Transmet so d'alta qualitat directament als audiòfons Oticon",
          "Es connecta a sistemes d'àudio d'aules, ordinadors i tauletes",
          "Bateria recarregable amb un dia complet d'ús a l'aula"
        ],
        benefits: [
          "Millora la comprensió de la parla en aules sorolloses",
          "Redueix l'esforç d'escolta per a estudiants amb pèrdua auditiva",
          "Dóna suport a millors resultats d'aprenentatge a través d'una comunicació clara",
          "Fàcil d'utilitzar amb una interfície intuïtiva",
          "Disseny durador per a ús diari a l'aula"
        ]
      }
    }
  };
  
  return (
    <>
      <Helmet>
        <title>{content.meta[language].title}</title>
        <meta name="description" content={content.meta[language].description} />
      </Helmet>
      <ServiceLayout
        title={t('technicalAids')}
        subtitle={t('technicalAidsIntro')}
        image="/lovable-uploads/b5661196-c8c2-4fad-9207-094e65ba3642.png"
        appointmentSubject="Technical Aids Consultation at Looptica"
      >
        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('technicalAidsTitle')}</h2>
          <p className="text-gray-700 mb-8">
            {t('technicalAidsIntro')}
          </p>
          
          <Tabs defaultValue="twinlink" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="twinlink">
                <span className="flex items-center">
                  <Wifi className="mr-2 h-4 w-4" /> {t('twinlinkTitle')}
                </span>
              </TabsTrigger>
              <TabsTrigger value="edumic">
                <span className="flex items-center">
                  <Radio className="mr-2 h-4 w-4" /> {t('edumicTitle')}
                </span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="twinlink">
              <ScrollReveal>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wifi className="mr-2 h-6 w-6 text-[#55afa9]" /> 
                      {content.twinlink[language].title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <p className="text-gray-700 mb-4">{content.twinlink[language].description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Zap className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                            {language === 'en' ? 'Key Features' : (language === 'es' ? 'Características Principales' : 'Característiques Principals')}
                          </h3>
                          <ul className="space-y-2">
                            {content.twinlink[language].features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-[#55afa9] mr-2">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Headphones className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                            {language === 'en' ? 'Benefits' : (language === 'es' ? 'Beneficios' : 'Beneficis')}
                          </h3>
                          <ul className="space-y-2">
                            {content.twinlink[language].benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-[#55afa9] mr-2">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <img 
                        src="/lovable-uploads/4e50b490-59f3-40a9-a3a6-a1c02cf017a3.png" 
                        alt="Oticon TwinLink technology"
                        className="w-full h-64 object-cover rounded-lg shadow-md my-8"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </TabsContent>
            
            <TabsContent value="edumic">
              <ScrollReveal>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Radio className="mr-2 h-6 w-6 text-[#55afa9]" /> 
                      {content.edumic[language].title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <p className="text-gray-700 mb-4">{content.edumic[language].description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Zap className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                            {language === 'en' ? 'Key Features' : (language === 'es' ? 'Características Principales' : 'Característiques Principals')}
                          </h3>
                          <ul className="space-y-2">
                            {content.edumic[language].features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-[#55afa9] mr-2">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Headphones className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                            {language === 'en' ? 'Benefits' : (language === 'es' ? 'Beneficios' : 'Beneficis')}
                          </h3>
                          <ul className="space-y-2">
                            {content.edumic[language].benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-[#55afa9] mr-2">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="mt-6">
                      <img 
                        src="/lovable-uploads/cb898a8f-0dd3-4ffb-aa14-822fcefb417d.png" 
                        alt="Oticon EduMic device"
                        className="w-full h-64 object-cover rounded-lg shadow-md my-8"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </TabsContent>
          </Tabs>
        </div>
      </ServiceLayout>
      <Footer />
    </>
  );
};

export default TechnicalAids;
