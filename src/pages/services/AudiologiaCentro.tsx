
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { Ear, Headphones, Volume2, Shield, CheckCircle2, Award, Clock, Star } from 'lucide-react';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

const AudiologiaCentro = () => {
  const { language } = useLanguage();
  
  const pageContent = {
    title: {
      en: "Audiology Center in Barcelona | Hearing Tests & Hearing Aids",
      es: "Centro de Audiología en Barcelona | Pruebas Auditivas y Audífonos",
      ca: "Centre d'Audiologia a Barcelona | Proves Auditives i Audiòfons",
    },
    description: {
      en: "Specialized audiology center in Barcelona offering professional hearing tests, digital hearing aids, tinnitus treatment and hearing loss solutions. Book your appointment today.",
      es: "Centro especializado de audiología en Barcelona que ofrece pruebas auditivas profesionales, audífonos digitales, tratamiento de acúfenos y soluciones para pérdida auditiva. Reserve su cita hoy.",
      ca: "Centre especialitzat d'audiologia a Barcelona que ofereix proves auditives professionals, audiòfons digitals, tractament d'acúfens i solucions per a pèrdua auditiva. Reservi la seva cita avui.",
    },
    hero: {
      title: {
        en: "Expert Audiology Services in Barcelona",
        es: "Servicios Expertos de Audiología en Barcelona",
        ca: "Serveis Experts d'Audiologia a Barcelona",
      },
      subtitle: {
        en: "Comprehensive hearing care solutions for all types of hearing loss",
        es: "Soluciones integrales de cuidado auditivo para todo tipo de pérdida auditiva",
        ca: "Solucions integrals de cura auditiva per a tot tipus de pèrdua auditiva",
      },
      cta: {
        en: "Book Your Hearing Test",
        es: "Reserve Su Prueba Auditiva",
        ca: "Reservi La Seva Prova Auditiva",
      },
      learn: {
        en: "Learn More",
        es: "Conocer Más",
        ca: "Conèixer Més",
      }
    },
    intro: {
      title: {
        en: "Welcome to Looptica Audiology Center in Barcelona",
        es: "Bienvenido al Centro de Audiología Looptica en Barcelona",
        ca: "Benvingut al Centre d'Audiologia Looptica a Barcelona",
      },
      text1: {
        en: "At Looptica, we provide comprehensive audiology services to help you address hearing loss and improve your quality of life. Our state-of-the-art audiology center in Barcelona is equipped with the latest diagnostic equipment and staffed by experienced audiologists committed to delivering personalized hearing care.",
        es: "En Looptica, proporcionamos servicios integrales de audiología para ayudarle a abordar la pérdida auditiva y mejorar su calidad de vida. Nuestro centro de audiología de vanguardia en Barcelona está equipado con los últimos equipos de diagnóstico y cuenta con audiólogos experimentados comprometidos a brindar atención auditiva personalizada.",
        ca: "A Looptica, proporcionem serveis integrals d'audiologia per ajudar-li a abordar la pèrdua auditiva i millorar la seva qualitat de vida. El nostre centre d'audiologia d'avantguarda a Barcelona està equipat amb els últims equips de diagnòstic i compta amb audiòlegs experimentats compromesos a brindar atenció auditiva personalitzada.",
      },
      text2: {
        en: "Whether you're experiencing early signs of hearing loss, need a professional hearing test, or are looking for advanced digital hearing aids in Barcelona, our clinical audiology team is here to help with compassionate care and effective solutions.",
        es: "Ya sea que esté experimentando los primeros signos de pérdida auditiva, necesite una prueba auditiva profesional o esté buscando audífonos digitales avanzados en Barcelona, nuestro equipo de audiología clínica está aquí para ayudarle con atención compasiva y soluciones efectivas.",
        ca: "Ja sigui que estigui experimentant els primers signes de pèrdua auditiva, necessiti una prova auditiva professional o estigui buscant audiòfons digitals avançats a Barcelona, el nostre equip d'audiologia clínica està aquí per ajudar-li amb atenció compassiva i solucions efectives.",
      }
    },
    services: {
      title: {
        en: "Our Comprehensive Audiology Services in Barcelona",
        es: "Nuestros Servicios Integrales de Audiología en Barcelona",
        ca: "Els Nostres Serveis Integrals d'Audiologia a Barcelona",
      },
      items: [
        {
          icon: <Ear className="w-8 h-8 text-[#009fe3]" />,
          title: {
            en: "Professional Hearing Tests",
            es: "Pruebas Auditivas Profesionales",
            ca: "Proves Auditives Professionals",
          },
          description: {
            en: "Comprehensive audiometric evaluations to accurately diagnose hearing loss and determine the best treatment options.",
            es: "Evaluaciones audiométricas completas para diagnosticar con precisión la pérdida auditiva y determinar las mejores opciones de tratamiento.",
            ca: "Avaluacions audiomètriques completes per diagnosticar amb precisió la pèrdua auditiva i determinar les millors opcions de tractament.",
          },
          link: "/services/hearing-test"
        },
        {
          icon: <Headphones className="w-8 h-8 text-[#009fe3]" />,
          title: {
            en: "Digital Hearing Aids",
            es: "Audífonos Digitales",
            ca: "Audiòfons Digitals",
          },
          description: {
            en: "Advanced digital hearing aids from leading brands, professionally fitted and programmed for your specific hearing loss profile.",
            es: "Audífonos digitales avanzados de marcas líderes, adaptados y programados profesionalmente para su perfil específico de pérdida auditiva.",
            ca: "Audiòfons digitals avançats de marques líders, adaptats i programats professionalment per al seu perfil específic de pèrdua auditiva.",
          },
          link: "/services/hearing-aids"
        },
        {
          icon: <Volume2 className="w-8 h-8 text-[#009fe3]" />,
          title: {
            en: "Tinnitus Treatment",
            es: "Tratamiento de Acúfenos",
            ca: "Tractament d'Acúfens",
          },
          description: {
            en: "Specialized solutions to help manage and reduce the symptoms of tinnitus, including sound therapy and counseling.",
            es: "Soluciones especializadas para ayudar a controlar y reducir los síntomas de acúfenos, incluyendo terapia de sonido y asesoramiento.",
            ca: "Solucions especialitzades per ajudar a controlar i reduir els símptomes d'acúfens, incloent teràpia de so i assessorament.",
          },
          link: "/services/tinnitus-treatment"
        },
        {
          icon: <Shield className="w-8 h-8 text-[#009fe3]" />,
          title: {
            en: "Custom Ear Protection",
            es: "Protección Auditiva Personalizada",
            ca: "Protecció Auditiva Personalitzada",
          },
          description: {
            en: "Custom-made ear protection designed for musicians, industrial workers, swimmers, and anyone exposed to loud environments.",
            es: "Protección auditiva personalizada diseñada para músicos, trabajadores industriales, nadadores y cualquier persona expuesta a entornos ruidosos.",
            ca: "Protecció auditiva personalitzada dissenyada per a músics, treballadors industrials, nedadors i qualsevol persona exposada a entorns sorollosos.",
          },
          link: "/services/ear-protection"
        }
      ]
    },
    benefits: {
      title: {
        en: "Why Choose Our Audiology Center in Barcelona",
        es: "Por Qué Elegir Nuestro Centro de Audiología en Barcelona",
        ca: "Per Què Triar El Nostre Centre d'Audiologia a Barcelona",
      },
      items: [
        {
          icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
          title: {
            en: "Specialized Expertise",
            es: "Experiencia Especializada",
            ca: "Experiència Especialitzada",
          },
          description: {
            en: "Our team includes certified audiologists with extensive experience in treating all types of hearing loss.",
            es: "Nuestro equipo incluye audiólogos certificados con amplia experiencia en el tratamiento de todo tipo de pérdida auditiva.",
            ca: "El nostre equip inclou audiòlegs certificats amb àmplia experiència en el tractament de tot tipus de pèrdua auditiva.",
          }
        },
        {
          icon: <Award className="w-6 h-6 text-green-500" />,
          title: {
            en: "Advanced Technology",
            es: "Tecnología Avanzada",
            ca: "Tecnologia Avançada",
          },
          description: {
            en: "We use the latest diagnostic equipment and offer the most advanced digital hearing aids available.",
            es: "Utilizamos los equipos de diagnóstico más avanzados y ofrecemos los audífonos digitales más avanzados disponibles.",
            ca: "Utilitzem els equips de diagnòstic més avançats i oferim els audiòfons digitals més avançats disponibles.",
          }
        },
        {
          icon: <Clock className="w-6 h-6 text-green-500" />,
          title: {
            en: "Personalized Care",
            es: "Atención Personalizada",
            ca: "Atenció Personalitzada",
          },
          description: {
            en: "We take the time to understand your unique hearing needs and lifestyle to provide tailored solutions.",
            es: "Nos tomamos el tiempo para entender sus necesidades auditivas únicas y estilo de vida para proporcionar soluciones a medida.",
            ca: "Ens prenem el temps per entendre les seves necessitats auditives úniques i estil de vida per proporcionar solucions a mida.",
          }
        },
        {
          icon: <Star className="w-6 h-6 text-green-500" />,
          title: {
            en: "Comprehensive Support",
            es: "Soporte Integral",
            ca: "Suport Integral",
          },
          description: {
            en: "We provide ongoing support, follow-up care, and adjustments to ensure optimal performance of your hearing aids.",
            es: "Proporcionamos soporte continuo, atención de seguimiento y ajustes para garantizar el rendimiento óptimo de sus audífonos.",
            ca: "Proporcionem suport continu, atenció de seguiment i ajustos per garantir el rendiment òptim dels seus audiòfons.",
          }
        }
      ]
    },
    faq: {
      title: {
        en: "Frequently Asked Questions About Audiology",
        es: "Preguntas Frecuentes Sobre Audiología",
        ca: "Preguntes Freqüents Sobre Audiologia",
      },
      items: [
        {
          question: {
            en: "How do I know if I need a hearing test?",
            es: "¿Cómo sé si necesito una prueba auditiva?",
            ca: "Com sé si necessito una prova auditiva?",
          },
          answer: {
            en: "If you frequently ask people to repeat themselves, struggle to hear in noisy environments, need to turn up the TV volume, or experience ringing in your ears, these could be signs of hearing loss. It's recommended to have your hearing checked by a professional audiologist in Barcelona.",
            es: "Si frecuentemente pide a las personas que se repitan, tiene dificultades para escuchar en entornos ruidosos, necesita subir el volumen de la TV o experimenta zumbidos en los oídos, estos podrían ser signos de pérdida auditiva. Se recomienda que su audición sea revisada por un audiólogo profesional en Barcelona.",
            ca: "Si freqüentment demana a les persones que es repeteixin, té dificultats per escoltar en entorns sorollosos, necessita pujar el volum de la TV o experimenta brunzits a les orelles, aquests podrien ser signes de pèrdua auditiva. Es recomana que la seva audició sigui revisada per un audiòleg professional a Barcelona.",
          }
        },
        {
          question: {
            en: "How often should I have my hearing tested?",
            es: "¿Con qué frecuencia debo hacerme pruebas auditivas?",
            ca: "Amb quina freqüència he de fer-me proves auditives?",
          },
          answer: {
            en: "For adults, it's recommended to have a baseline hearing test at age 50 and then every 3-5 years if no hearing loss is detected. If you have hearing loss or are over 60, annual tests are recommended. Those with occupational noise exposure should be tested more frequently.",
            es: "Para adultos, se recomienda realizar una prueba auditiva basal a los 50 años y luego cada 3-5 años si no se detecta pérdida auditiva. Si tiene pérdida auditiva o es mayor de 60 años, se recomiendan pruebas anuales. Aquellos con exposición al ruido ocupacional deben hacerse pruebas con mayor frecuencia.",
            ca: "Per a adults, es recomana realitzar una prova auditiva basal als 50 anys i després cada 3-5 anys si no es detecta pèrdua auditiva. Si té pèrdua auditiva o és major de 60 anys, es recomanen proves anuals. Aquells amb exposició al soroll ocupacional han de fer-se proves amb major freqüència.",
          }
        },
        {
          question: {
            en: "What types of hearing aids are available at your Barcelona audiology center?",
            es: "¿Qué tipos de audífonos están disponibles en su centro de audiología en Barcelona?",
            ca: "Quins tipus d'audiòfons estan disponibles al seu centre d'audiologia a Barcelona?",
          },
          answer: {
            en: "We offer a comprehensive range of digital hearing aids including behind-the-ear (BTE), receiver-in-canal (RIC), completely-in-canal (CIC), and in-the-ear (ITE) models. We carry devices from leading manufacturers with features like Bluetooth connectivity, rechargeable batteries, and smartphone app control.",
            es: "Ofrecemos una amplia gama de audífonos digitales, incluyendo modelos detrás de la oreja (BTE), receptor en el canal (RIC), completamente en el canal (CIC) y en la oreja (ITE). Disponemos de dispositivos de fabricantes líderes con características como conectividad Bluetooth, baterías recargables y control mediante aplicación para smartphone.",
            ca: "Oferim una àmplia gamma d'audiòfons digitals, incloent models darrere l'orella (BTE), receptor al canal (RIC), completament al canal (CIC) i a l'orella (ITE). Disposem de dispositius de fabricants líders amb característiques com connectivitat Bluetooth, bateries recarregables i control mitjançant aplicació per a smartphone.",
          }
        },
        {
          question: {
            en: "How long do digital hearing aids last?",
            es: "¿Cuánto duran los audífonos digitales?",
            ca: "Quant duren els audiòfons digitals?",
          },
          answer: {
            en: "On average, digital hearing aids last 5-7 years. However, this can vary depending on the model, how well they're maintained, and technological advancements. Regular maintenance at our Barcelona audiology center can help extend their lifespan.",
            es: "En promedio, los audífonos digitales duran de 5 a 7 años. Sin embargo, esto puede variar dependiendo del modelo, qué tan bien se mantienen y los avances tecnológicos. El mantenimiento regular en nuestro centro de audiología en Barcelona puede ayudar a extender su vida útil.",
            ca: "De mitjana, els audiòfons digitals duren de 5 a 7 anys. No obstant això, això pot variar depenent del model, com de bé es mantenen i els avenços tecnològics. El manteniment regular al nostre centre d'audiologia a Barcelona pot ajudar a estendre la seva vida útil.",
          }
        },
        {
          question: {
            en: "Is tinnitus related to hearing loss?",
            es: "¿Los acúfenos están relacionados con la pérdida auditiva?",
            ca: "Els acúfens estan relacionats amb la pèrdua auditiva?",
          },
          answer: {
            en: "Yes, tinnitus (ringing, buzzing, or other sounds in the ears) is often associated with hearing loss, though not always. Both conditions can result from damage to the inner ear. Our audiology clinic in Barcelona offers specialized treatments for both hearing loss and tinnitus.",
            es: "Sí, los acúfenos (zumbidos, pitidos u otros sonidos en los oídos) a menudo están asociados con la pérdida auditiva, aunque no siempre. Ambas condiciones pueden resultar del daño al oído interno. Nuestra clínica de audiología en Barcelona ofrece tratamientos especializados tanto para la pérdida auditiva como para los acúfenos.",
            ca: "Sí, els acúfens (brunzits, xiulets o altres sons a les orelles) sovint estan associats amb la pèrdua auditiva, encara que no sempre. Ambdues condicions poden resultar del dany a l'oïda interna. La nostra clínica d'audiologia a Barcelona ofereix tractaments especialitzats tant per a la pèrdua auditiva com per als acúfens.",
          }
        }
      ]
    },
    cta: {
      title: {
        en: "Book Your Hearing Test at Our Barcelona Audiology Center",
        es: "Reserve Su Prueba Auditiva en Nuestro Centro de Audiología en Barcelona",
        ca: "Reservi La Seva Prova Auditiva al Nostre Centre d'Audiologia a Barcelona",
      },
      text: {
        en: "Take the first step toward better hearing. Contact our audiology center in Barcelona today to schedule your comprehensive hearing assessment.",
        es: "Dé el primer paso hacia una mejor audición. Contacte con nuestro centro de audiología en Barcelona hoy para programar su evaluación auditiva completa.",
        ca: "Faci el primer pas cap a una millor audició. Contacti amb el nostre centre d'audiologia a Barcelona avui per programar la seva avaluació auditiva completa.",
      },
      button: {
        en: "Book Appointment",
        es: "Reservar Cita",
        ca: "Reservar Cita",
      }
    }
  };

  // Generate JSON-LD for FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageContent.faq.items.map(item => ({
      "@type": "Question",
      "name": item.question[language],
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer[language]
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{pageContent.title[language]}</title>
        <meta name="description" content={pageContent.description[language]} />
        <meta name="keywords" content={language === 'es' ? 
          "audiología Barcelona, centro auditivo Barcelona, pérdida auditiva, prueba auditiva Barcelona, audiología clínica Barcelona, audífonos Barcelona, audífonos digitales Barcelona, audiometría Barcelona, audiología pediátrica Barcelona" : 
          language === 'ca' ? 
          "audiologia Barcelona, centre auditiu Barcelona, pèrdua auditiva, prova auditiva Barcelona, audiologia clínica Barcelona, audiòfons Barcelona, audiòfons digitals Barcelona, audiometria Barcelona, audiologia pediàtrica Barcelona" : 
          "audiology Barcelona, hearing center Barcelona, hearing loss, hearing test Barcelona, clinical audiology Barcelona, hearing aids Barcelona, digital hearing aids Barcelona, audiometry Barcelona, pediatric audiology Barcelona"} 
        />
        <link rel="canonical" href="https://www.looptica.com/services/audiologia-centro" />
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#003366] to-[#009fe3] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{pageContent.hero.title[language]}</h1>
              <p className="text-xl mb-8">{pageContent.hero.subtitle[language]}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GoogleCalendarButton 
                  size="lg" 
                  className="bg-white text-[#009fe3] hover:bg-gray-100"
                  subject={language === 'es' ? "Prueba Auditiva en Looptica Centro de Audiología Barcelona" : 
                          language === 'ca' ? "Prova Auditiva a Looptica Centre d'Audiologia Barcelona" : 
                          "Hearing Test at Looptica Barcelona Audiology Center"}
                  description={language === 'es' ? "Cita para evaluación auditiva completa en nuestro centro de audiología en Barcelona" : 
                              language === 'ca' ? "Cita per a avaluació auditiva completa al nostre centre d'audiologia a Barcelona" : 
                              "Appointment for comprehensive hearing evaluation at our audiology center in Barcelona"}
                  durationMinutes={60}
                >
                  {pageContent.hero.cta[language]}
                </GoogleCalendarButton>
                <a href="#services">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    {pageContent.hero.learn[language]}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <ScrollReveal>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">{pageContent.intro.title[language]}</h2>
                <p className="text-gray-700 mb-4">{pageContent.intro.text1[language]}</p>
                <p className="text-gray-700">{pageContent.intro.text2[language]}</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Services Section */}
        <ScrollReveal>
          <section id="services" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">{pageContent.services.title[language]}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {pageContent.services.items.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="mr-4">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{service.title[language]}</h3>
                        <p className="text-gray-600 mb-4">{service.description[language]}</p>
                        <Link to={service.link}>
                          <Button variant="outline" size="sm" className="border-[#009fe3] text-[#009fe3] hover:bg-[#009fe3]/10">
                            {language === 'es' ? "Más Información" : 
                            language === 'ca' ? "Més Informació" : 
                            "Learn More"}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Benefits Section */}
        <ScrollReveal>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">{pageContent.benefits.title[language]}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pageContent.benefits.items.map((benefit, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-[#009fe3] transition-colors">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title[language]}</h3>
                    <p className="text-gray-600">{benefit.description[language]}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal>
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">{pageContent.faq.title[language]}</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {pageContent.faq.items.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question[language]}</h3>
                    <p className="text-gray-600">{faq.answer[language]}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <section className="py-16 bg-[#009fe3] text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">{pageContent.cta.title[language]}</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">{pageContent.cta.text[language]}</p>
              <GoogleCalendarButton 
                size="lg" 
                className="bg-white text-[#009fe3] hover:bg-gray-100"
                subject={language === 'es' ? "Consulta de Audiología en Centro Auditivo Looptica Barcelona" : 
                        language === 'ca' ? "Consulta d'Audiologia al Centre Auditiu Looptica Barcelona" : 
                        "Audiology Consultation at Looptica Barcelona Hearing Center"}
                description={language === 'es' ? "Cita para servicios de audiología en nuestro centro auditivo especializado en Barcelona" : 
                            language === 'ca' ? "Cita per a serveis d'audiologia al nostre centre auditiu especialitzat a Barcelona" : 
                            "Appointment for audiology services at our specialized hearing center in Barcelona"}
                durationMinutes={60}
              >
                {pageContent.cta.button[language]}
              </GoogleCalendarButton>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
      <FloatingWhatsApp 
        phoneNumber="34699594064"
        accountName="Looptica"
        statusMessage={language === 'es' ? "Normalmente responde en 1 hora" : 
                      language === 'ca' ? "Normalment respon en 1 hora" : 
                      "Typically replies within 1 hour"}
        chatMessage={language === 'es' ? "¡Hola! 👋🏼 ¿En qué podemos ayudarte con tu audición?" : 
                    language === 'ca' ? "Hola! 👋🏼 En què podem ajudar-te amb la teva audició?" : 
                    "Hello! 👋🏼 How can we help you with your hearing?"}
        placeholder={language === 'es' ? "Escribe un mensaje..." : 
                    language === 'ca' ? "Escriu un missatge..." : 
                    "Type a message..."}
      />
    </>
  );
};

export default AudiologiaCentro;
