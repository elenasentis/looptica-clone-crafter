
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const { language } = useLanguage();
  
  const pageContent = {
    en: {
      title: "About Us",
      metaTitle: "About Looptica | Vision and Hearing Specialists in Barcelona",
      metaDescription: "Learn about our experienced team of vision and hearing specialists at Looptica Barcelona. Providing personalized optical and audiological care since 2010.",
      teamMembers: [
        {
          name: "Elena Sentís Coma",
          role: "Owner",
          image: "/images/DSC4608.jpg",
          bio: [
            "As the owner of Looptica, Elena brings over 20 years of experience in optometry. With her extensive knowledge and dedication to customer care, she has built Looptica into a trusted name for optical and audiological services in Barcelona.",
            "Elena specializes in vision therapy and is passionate about providing personalized eye care solutions for each client."
          ]
        },
        {
          name: "Irene",
          role: "Audiologist",
          image: "/images/DSC4608.jpg",
          bio: [
            "Irene is our senior audiologist with a special interest in hearing rehabilitation. Her kind and patient approach helps clients feel comfortable when addressing their hearing concerns.",
            "With advanced training in the latest hearing aid technologies, Irene ensures that our clients receive the most appropriate solutions for their hearing needs."
          ]
        },
        {
          name: "Lorena",
          role: "Optical Stylist",
          image: "/images/DSC4608.jpg",
          bio: [
            "Lorena leads our optical styling team, combining technical expertise with a keen eye for fashion. She excels at helping clients find eyewear that perfectly complements their features and lifestyle.",
            "With a background in optical dispensing and lens technology, Lorena ensures that style never compromises on vision quality or comfort."
          ]
        }
      ],
      philosophy: {
        title: "Our Philosophy",
        content: [
          "At Looptica, we believe that quality eye and ear care should be accessible, personalized, and delivered with the highest level of professionalism. Our team is committed to continuous learning and staying updated with the latest advancements in optical and audiological care.",
          "We take pride in our patient-centered approach, focusing on building long-term relationships with our clients based on trust, expertise, and exceptional service."
        ]
      },
      whatsapp: {
        statusMessage: "Typically replies within 1 hour",
        chatMessage: "Hello! 👋🏼 How can we help you with your vision or hearing?",
        placeholder: "Type a message..."
      }
    },
    es: {
      title: "Sobre Nosotros",
      metaTitle: "Sobre Looptica | Especialistas en Visión y Audición en Barcelona",
      metaDescription: "Conozca a nuestro experimentado equipo de especialistas en visión y audición en Looptica Barcelona. Brindando atención óptica y audiológica personalizada desde 2010.",
      teamMembers: [
        {
          name: "Elena Sentís Coma",
          role: "Propietaria",
          image: "/images/DSC4608.jpg",
          bio: [
            "Como propietaria de Looptica, Elena aporta más de 20 años de experiencia en optometría. Con su amplio conocimiento y dedicación a la atención al cliente, ha convertido a Looptica en un nombre de confianza para servicios ópticos y audiológicos en Barcelona.",
            "Elena se especializa en terapia visual y le apasiona brindar soluciones personalizadas de cuidado ocular para cada cliente."
          ]
        },
        {
          name: "Irene",
          role: "Audióloga",
          image: "/images/DSC4608.jpg",
          bio: [
            "Irene es nuestra audióloga principal con un interés especial en la rehabilitación auditiva. Su enfoque amable y paciente ayuda a los clientes a sentirse cómodos al abordar sus problemas de audición.",
            "Con formación avanzada en las últimas tecnologías de audífonos, Irene se asegura de que nuestros clientes reciban las soluciones más apropiadas para sus necesidades auditivas."
          ]
        },
        {
          name: "Lorena",
          role: "Estilista Óptica",
          image: "/images/DSC4608.jpg",
          bio: [
            "Lorena lidera nuestro equipo de estilismo óptico, combinando experiencia técnica con un ojo agudo para la moda. Sobresale ayudando a los clientes a encontrar gafas que complementen perfectamente sus rasgos y estilo de vida.",
            "Con experiencia en dispensación óptica y tecnología de lentes, Lorena se asegura de que el estilo nunca comprometa la calidad visual o la comodidad."
          ]
        }
      ],
      philosophy: {
        title: "Nuestra Filosofía",
        content: [
          "En Looptica, creemos que el cuidado ocular y auditivo de calidad debe ser accesible, personalizado y entregado con el más alto nivel de profesionalismo. Nuestro equipo está comprometido con el aprendizaje continuo y mantenerse actualizado con los últimos avances en cuidado óptico y audiológico.",
          "Nos enorgullecemos de nuestro enfoque centrado en el paciente, enfocándonos en construir relaciones a largo plazo con nuestros clientes basadas en la confianza, la experiencia y el servicio excepcional."
        ]
      },
      whatsapp: {
        statusMessage: "Normalmente responde en 1 hora",
        chatMessage: "¡Hola! 👋🏼 ¿En qué podemos ayudarte con tu visión o audición?",
        placeholder: "Escribe un mensaje..."
      }
    },
    ca: {
      title: "Sobre Nosaltres",
      metaTitle: "Sobre Looptica | Especialistes en Visió i Audició a Barcelona",
      metaDescription: "Conegui el nostre experimentat equip d'especialistes en visió i audició a Looptica Barcelona. Oferint atenció òptica i audiològica personalitzada des de 2010.",
      teamMembers: [
        {
          name: "Elena Sentís Coma",
          role: "Propietària",
          image: "/images/DSC4608.jpg",
          bio: [
            "Com a propietària de Looptica, Elena aporta més de 20 anys d'experiència en optometria. Amb el seu ampli coneixement i dedicació a l'atenció al client, ha convertit Looptica en un nom de confiança per a serveis òptics i audiològics a Barcelona.",
            "Elena s'especialitza en teràpia visual i li apassiona brindar solucions personalitzades de cura ocular per a cada client."
          ]
        },
        {
          name: "Irene",
          role: "Audiòloga",
          image: "/images/DSC4608.jpg",
          bio: [
            "Irene és la nostra audiòloga principal amb un interès especial en la rehabilitació auditiva. El seu enfocament amable i pacient ajuda els clients a sentir-se còmodes en abordar els seus problemes d'audició.",
            "Amb formació avançada en les últimes tecnologies d'audiòfons, Irene s'assegura que els nostres clients rebin les solucions més apropiades per a les seves necessitats auditives."
          ]
        },
        {
          name: "Lorena",
          role: "Estilista Òptica",
          image: "/images/DSC4608.jpg",
          bio: [
            "Lorena lidera el nostre equip d'estilisme òptic, combinant experiència tècnica amb un ull agut per a la moda. Excel·leix ajudant els clients a trobar ulleres que complementin perfectament els seus trets i estil de vida.",
            "Amb experiència en dispensació òptica i tecnologia de lents, Lorena s'assegura que l'estil mai no comprometi la qualitat visual o la comoditat."
          ]
        }
      ],
      philosophy: {
        title: "La Nostra Filosofia",
        content: [
          "A Looptica, creiem que la cura ocular i auditiva de qualitat ha de ser accessible, personalitzada i lliurada amb el més alt nivell de professionalisme. El nostre equip està compromès amb l'aprenentatge continu i mantenir-se actualitzat amb els últims avenços en cura òptica i audiològica.",
          "Ens enorgullim del nostre enfocament centrat en el pacient, enfocant-nos a construir relacions a llarg termini amb els nostres clients basades en la confiança, l'experiència i el servei excepcional."
        ]
      },
      whatsapp: {
        statusMessage: "Normalment respon en 1 hora",
        chatMessage: "Hola! 👋🏼 En què podem ajudar-te amb la teva visió o audició?",
        placeholder: "Escriu un missatge..."
      }
    }
  };

  const content = pageContent[language];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 px-6 lg:px-12" id="about">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
                {content.title}
              </h1>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {content.teamMembers.map((member, index) => (
                <ScrollReveal key={member.name} origin={index === 0 ? "left" : (index === 2 ? "right" : undefined)}>
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                    />
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">{member.name}</h2>
                    {member.bio.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 mb-4">{paragraph}</p>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">{content.philosophy.title}</h2>
                {content.philosophy.content.map((paragraph, index) => (
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
        statusMessage={content.whatsapp.statusMessage}
        chatMessage={content.whatsapp.chatMessage}
        placeholder={content.whatsapp.placeholder}
      />
    </div>
  );
};

export default About;
