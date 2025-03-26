
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

const About = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 px-6 lg:px-12" id="about">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
                {language === 'en' ? 'About Us' : (language === 'es' ? 'Sobre Nosotros' : 'Sobre Nosaltres')}
              </h1>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <ScrollReveal origin="left">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <img 
                    src="/images/DSC4608.jpg" 
                    alt="Elena Sentís"
                    className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Elena Sentís Coma</h2>
                  <p className="text-gray-700 mb-4">
                    {language === 'en' 
                      ? 'As the owner of Looptica, Elena brings over 20 years of experience in optometry. With her extensive knowledge and dedication to customer care, she has built Looptica into a trusted name for optical and audiological services in Barcelona.' 
                      : (language === 'es' 
                        ? 'Como propietaria de Looptica, Elena aporta más de 20 años de experiencia en optometría. Con su amplio conocimiento y dedicación a la atención al cliente, ha convertido a Looptica en un nombre de confianza para servicios ópticos y audiológicos en Barcelona.'
                        : 'Com a propietària de Looptica, Elena aporta més de 20 anys d\'experiència en optometria. Amb el seu ampli coneixement i dedicació a l\'atenció al client, ha convertit Looptica en un nom de confiança per a serveis òptics i audiològics a Barcelona.')}
                  </p>
                  <p className="text-gray-700">
                    {language === 'en' 
                      ? 'Elena specializes in vision therapy and is passionate about providing personalized eye care solutions for each client.' 
                      : (language === 'es' 
                        ? 'Elena se especializa en terapia visual y le apasiona brindar soluciones personalizadas de cuidado ocular para cada cliente.'
                        : 'Elena s\'especialitza en teràpia visual i li apassiona brindar solucions personalitzades de cura ocular per a cada client.')}
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <img 
                    src="/images/DSC4608.jpg" 
                    alt="Irene"
                    className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Irene</h2>
                  <p className="text-gray-700 mb-4">
                    {language === 'en' 
                      ? 'Irene is our senior audiologist with a special interest in hearing rehabilitation. Her kind and patient approach helps clients feel comfortable when addressing their hearing concerns.' 
                      : (language === 'es' 
                        ? 'Irene es nuestra audióloga principal con un interés especial en la rehabilitación auditiva. Su enfoque amable y paciente ayuda a los clientes a sentirse cómodos al abordar sus problemas de audición.'
                        : 'Irene és la nostra audiòloga principal amb un interès especial en la rehabilitació auditiva. El seu enfocament amable i pacient ajuda els clients a sentir-se còmodes en abordar els seus problemes d\'audició.')}
                  </p>
                  <p className="text-gray-700">
                    {language === 'en' 
                      ? 'With advanced training in the latest hearing aid technologies, Irene ensures that our clients receive the most appropriate solutions for their hearing needs.' 
                      : (language === 'es' 
                        ? 'Con formación avanzada en las últimas tecnologías de audífonos, Irene se asegura de que nuestros clientes reciban las soluciones más apropiadas para sus necesidades auditivas.'
                        : 'Amb formació avançada en les últimes tecnologies d\'audiòfons, Irene s\'assegura que els nostres clients rebin les solucions més apropiades per a les seves necessitats auditives.')}
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal origin="right">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <img 
                    src="/images/DSC4608.jpg" 
                    alt="Lorena"
                    className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Lorena</h2>
                  <p className="text-gray-700 mb-4">
                    {language === 'en' 
                      ? 'Lorena leads our optical styling team, combining technical expertise with a keen eye for fashion. She excels at helping clients find eyewear that perfectly complements their features and lifestyle.' 
                      : (language === 'es' 
                        ? 'Lorena lidera nuestro equipo de estilismo óptico, combinando experiencia técnica con un ojo agudo para la moda. Sobresale ayudando a los clientes a encontrar gafas que complementen perfectamente sus rasgos y estilo de vida.'
                        : 'Lorena lidera el nostre equip d\'estilisme òptic, combinant experiència tècnica amb un ull agut per a la moda. Excel·leix ajudant els clients a trobar ulleres que complementin perfectament els seus trets i estil de vida.')}
                  </p>
                  <p className="text-gray-700">
                    {language === 'en' 
                      ? 'With a background in optical dispensing and lens technology, Lorena ensures that style never compromises on vision quality or comfort.' 
                      : (language === 'es' 
                        ? 'Con experiencia en dispensación óptica y tecnología de lentes, Lorena se asegura de que el estilo nunca comprometa la calidad visual o la comodidad.'
                        : 'Amb experiència en dispensació òptica i tecnologia de lents, Lorena s\'assegura que l\'estil mai no comprometi la qualitat visual o la comoditat.')}
                  </p>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  {language === 'en' ? 'Our Philosophy' : (language === 'es' ? 'Nuestra Filosofía' : 'La Nostra Filosofia')}
                </h2>
                <p className="text-gray-700 mb-4">
                  {language === 'en' 
                    ? 'At Looptica, we believe that quality eye and ear care should be accessible, personalized, and delivered with the highest level of professionalism. Our team is committed to continuous learning and staying updated with the latest advancements in optical and audiological care.' 
                    : (language === 'es' 
                      ? 'En Looptica, creemos que el cuidado ocular y auditivo de calidad debe ser accesible, personalizado y entregado con el más alto nivel de profesionalismo. Nuestro equipo está comprometido con el aprendizaje continuo y mantenerse actualizado con los últimos avances en cuidado óptico y audiológico.'
                      : 'A Looptica, creiem que la cura ocular i auditiva de qualitat ha de ser accessible, personalitzada i lliurada amb el més alt nivell de professionalisme. El nostre equip està compromès amb l\'aprenentatge continu i mantenir-se actualitzat amb els últims avenços en cura òptica i audiològica.')}
                </p>
                <p className="text-gray-700">
                  {language === 'en' 
                    ? 'We take pride in our patient-centered approach, focusing on building long-term relationships with our clients based on trust, expertise, and exceptional service.' 
                    : (language === 'es' 
                      ? 'Nos enorgullecemos de nuestro enfoque centrado en el paciente, enfocándonos en construir relaciones a largo plazo con nuestros clientes basadas en la confianza, la experiencia y el servicio excepcional.'
                      : 'Ens enorgullim del nostre enfocament centrat en el pacient, enfocant-nos a construir relacions a llarg termini amb els nostres clients basades en la confiança, l\'experiència i el servei excepcional.')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp 
        phoneNumber="34699594064"
        accountName="Looptica"
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hola! 👋🏼 How can we help you?"
        placeholder="Type a message..."
      />
    </div>
  );
};

export default About;
