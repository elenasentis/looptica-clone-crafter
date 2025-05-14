
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ScrollReveal'; // Updated import
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const { language } = useLanguage();
  
  // Content organized by section first, then by language
  const content = {
    meta: {
      en: {
        title: "About Looptica | Vision and Hearing Specialists in Barcelona",
        description: "Learn about our experienced team of vision and hearing specialists at Looptica Barcelona. Providing personalized optical and audiological care since 2018."
      },
      es: {
        title: "Sobre Looptica | Especialistas en Visión y Audición en Barcelona",
        description: "Conozca a nuestro experimentado equipo de especialistas en visión y audición en Looptica Barcelona. Brindando atención óptica y audiológica personalizada desde 2018."
      },
      ca: {
        title: "Sobre Looptica | Especialistes en Visió i Audició a Barcelona",
        description: "Conegui el nostre experimentat equip d'especialistes en visió i audició a Looptica Barcelona. Oferint atenció òptica i audiològica personalitzada des de 2018."
      }
    },
    page: {
      title: {
        en: "About Us",
        es: "Quien somos",
        ca: "Qui som"
      }
    },
    teamMembers: [
      {
        name: "Elena",
        role: {
          en: "Owner\n\nOptician Optometrist",
          es: "Propietaria\n\nÓptica Optometrista",
          ca: "Propietària\n\nÒptica Optometrista"
        },
        image: "/images/_DSC4776.jpg",
        bio: {
          en: [
            "As the owner of Looptica, Elena brings over 15 years of experience in optometry. With her extensive knowledge and dedication to customer care, she has built Looptica into a trusted name for optical and audiological services in Barcelona.",
            "Elena specializes in providing personalized eye care solutions for each client."
          ],
          es: [
            "Como propietaria de Looptica, Elena aporta más de 15 años de experiencia en optometría. Con su amplio conocimiento y dedicación, ha convertido a Looptica en un centro optométrico y audiológico de referencia en el barrio del Poblenou en Barcelona.",
            "Le apasiona brindar soluciones personalizadas de cuidado ocular para cada cliente."
          ],
          ca: [
            "Com a propietària de Looptica, Elena aporta més de 15 anys d'experiència en optometria. Amb el seu ampli coneixement i dedicació, ha convertit Looptica en un centre optomètric i audiològic de referència al barri del Poblenou a Barcelona.",
            "Li apassiona oferir solucions personalitzades de cura ocular per a cada client."
          ]
        }
      },
      {
        name: "Irene",
        role: {
          en: "Contactologist\n\nOptician Optometrist",
          es: "Contactóloga\n\nÓptica Optometrista",
          ca: "Contactòloga\n\nÒptica Optometrista"
        },
        image: "/images/irene.jpg",
        bio: {
          en: [
            "Irene is our optical optometrist specialized in advanced contactology. Her extensive career has focused on pediatric contactology and special adaptations such as ortho-k, keratoconus, myopia control, scleral contact lenses, and other individualized solutions. With great knowledge of the current market, she offers excellent advice according to the patient's visual needs."
          ],
          es: [
            "Irene es nuestra óptica optometrista especializada en contactología avanzada. Su amplia trayectoria se ha centrado en la contactología pediátrica y adaptaciones especiales como orto-k, queratocono, control de miopía, lentes de contacto esclerales, y otras soluciones individualizadas. Con gran conocimiento del mercado actual, ofrece un excelente asesoramiento segun las necesidades visuales del paciente."
          ],
          ca: [
            "Irene és la nostra òptica optometrista especialitzada en contactologia avançada. La seva àmplia trajectòria s'ha centrat en contactologia pediàtrica i adaptacions especials com orto-k, queratocon, control de miopia, lents de contacte esclerals i altres solucions individualitzades. Amb gran coneixement del mercat actual, ofereix un excel·lent assessorament segons les necessitats visuals del pacient."
          ]
        }
      },
      {
        name: "Lorena",
        role: {
          en: "Audiologist\n\nOptician Optometrist",
          es: "Audióloga\n\nÓptica Optometrista",
          ca: "Audiòloga\n\nÒptica Optometrista"
        },
        image: "/images/lorena2.png",
        bio: {
          en: [
            "Lorena is our optical optometrist and audiologist with a special interest in hearing rehabilitation. Her kind and patient approach helps clients feel comfortable when addressing their specific needs. With advanced training in the latest technologies and her interest in trends, she is able to provide a comprehensive approach to her patients' visual and auditory health."
          ],
          es: [
            "Lorena es nuestra optica optometrista y audióloga con un interés especial en la rehabilitación auditiva. Su enfoque amable y paciente ayuda a los clientes a sentirse cómodos al abordar sus necesidades específicas. Con formación avanzada en las últimas tecnologías y su interés por las tendencias, le permiten brindar un enfoque integral a la salud visual y auditiva de sus pacientes."
          ],
          ca: [
            "Lorena és la nostra òptica optometrista i audiòloga amb un interès especial en la rehabilitació auditiva. El seu enfocament amable i pacient ajuda els clients a sentir-se còmodes en abordar les seves necessitats específiques. Amb formació avançada en les últimes tecnologies i el seu interès per les tendències, li permeten oferir un enfocament integral a la salut visual i auditiva dels seus pacients."
          ]
        }
      }
    ],
    philosophy: {
      title: {
        en: "Our Philosophy",
        es: "Nuestra Filosofía",
        ca: "La Nostra Filosofia"
      },
      content: {
        en: [
          "At Looptica, we believe that quality eye and ear care should be accessible, personalized, and delivered with the highest level of professionalism. Our team is committed to continuous learning and staying updated with the latest advancements in optical and audiological care.",
          "We take pride in our patient-centered approach, focusing on building long-term relationships with our clients based on trust, expertise, and exceptional service."
        ],
        es: [
          "En Looptica, creemos que el cuidado ocular y auditivo de calidad debe ser accesible, personalizado y entregado con el más alto nivel de profesionalismo. Nuestro equipo está comprometido con el aprendizaje continuo y mantenerse actualizado con los últimos avances en cuidado óptico y audiológico.",
          "Nos enorgullecemos de nuestro enfoque centrado en el paciente, enfocándonos en construir relaciones a largo plazo con nuestros clientes basadas en la confianza, la experiencia y el servicio excepcional."
        ],
        ca: [
          "A Looptica, creiem que la cura ocular i auditiva de qualitat ha de ser accessible, personalitzada i lliurada amb el més alt nivell de professionalisme. El nostre equip està compromès amb l'aprenentatge continu i mantenir-se actualitzat amb els últims avenços en cura òptica i audiològica.",
          "Ens enorgullim del nostre enfocament centrat en el pacient, enfocant-nos a construir relacions a llarg termini amb els nostres clients basades en la confiança, l'experiència i el servei excepcional."
        ]
      }
    },
    whatsapp: {
      statusMessage: {
        en: "Typically replies within 1 hour",
        es: "Normalmente responde en 1 hora",
        ca: "Normalment respon en 1 hora"
      },
      chatMessage: {
        en: "Hello! 👋🏼 How can we help you with your vision or hearing?",
        es: "¡Hola! 👋🏼 ¿En qué podemos ayudarte con tu visión o audición?",
        ca: "Hola! 👋🏼 En què podem ajudar-te amb la teva visió o audició?"
      },
      placeholder: {
        en: "Type a message...",
        es: "Escribe un mensaje...",
        ca: "Escriu un missatge..."
      }
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{content.meta[language].title}</title>
        <meta name="description" content={content.meta[language].description} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 px-6 lg:px-12" id="about">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
                {content.page.title[language]}
              </h1>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {content.teamMembers.map((member, index) => (
                <ScrollReveal key={member.name} origin={index === 0 ? "left" : (index === 2 ? "right" : undefined)}>
                  <div className="bg-white p-8 rounded-xl shadow-md h-full flex flex-col">
                    <div className="flex-shrink-0 flex justify-center">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-48 h-48 object-cover rounded-full mb-6"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">{member.name}</h2>
                    <p className="text-sm text-center text-[#55afa9] font-medium mb-4 whitespace-pre-line">{member.role[language]}</p>
                    <div className="flex-grow">
                      {member.bio[language].map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">{content.philosophy.title[language]}</h2>
                {content.philosophy.content[language].map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp 
        phoneNumber="34699594064"
        accountName="Looptica"
        statusMessage={content.whatsapp.statusMessage[language]}
        chatMessage={content.whatsapp.chatMessage[language]}
        placeholder={content.whatsapp.placeholder[language]}
      />
    </div>
  );
};

export default About;
