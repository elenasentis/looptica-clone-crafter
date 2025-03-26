
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="py-16 px-6 lg:px-12 bg-white" id="about">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#009fe3]/10 text-[#009fe3] mb-4">
                  {language === 'en' ? 'Our Team' : (language === 'es' ? 'Nuestro Equipo' : 'El Nostre Equip')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                  {language === 'en' ? 'About Looptica' : (language === 'es' ? 'Sobre Looptica' : 'Sobre Looptica')}
                </h2>
                <div className="w-16 h-1 bg-[#009fe3] mx-auto mb-6"></div>
                <p className="text-gray-600">
                  {language === 'en' 
                    ? 'Meet the professional team behind Looptica that will take care of your visual and auditory health.'
                    : (language === 'es' 
                      ? 'Conoce al equipo profesional detrás de Looptica que cuidará de tu salud visual y auditiva.'
                      : 'Coneix l\'equip professional darrere de Looptica que cuidarà de la teva salut visual i auditiva.')}
                </p>
              </div>
            </ScrollReveal>

            {/* Elena Sentís Section */}
            <ScrollReveal>
              <div className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src="/lovable-uploads/c909c154-63bb-4632-af13-9e1825237aaa.png" 
                      alt="Elena Sentís" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Elena Sentís Coma</h3>
                  <p className="text-[#009fe3] font-medium mb-4">
                    {language === 'en' ? 'Founder & Head Optometrist' : (language === 'es' ? 'Fundadora y Optometrista Jefe' : 'Fundadora i Optometrista Cap')}
                  </p>
                  <div className="prose prose-lg text-gray-600">
                    <p>
                      {language === 'en' 
                        ? 'Elena founded Looptica with the vision of providing high-quality optical and audiological services to the Barcelona community. With over 15 years of experience in the field, she has dedicated her career to improving the visual health of her patients through personalized attention and the latest technologies.'
                        : (language === 'es' 
                          ? 'Elena fundó Looptica con la visión de proporcionar servicios ópticos y audiológicos de alta calidad a la comunidad de Barcelona. Con más de 15 años de experiencia en el campo, ha dedicado su carrera a mejorar la salud visual de sus pacientes a través de una atención personalizada y las últimas tecnologías.'
                          : 'Elena va fundar Looptica amb la visió de proporcionar serveis òptics i audiològics d\'alta qualitat a la comunitat de Barcelona. Amb més de 15 anys d\'experiència en el camp, ha dedicat la seva carrera a millorar la salut visual dels seus pacients a través d\'una atenció personalitzada i les últimes tecnologies.')}
                    </p>
                    <p>
                      {language === 'en' 
                        ? 'Her commitment to excellence and continuous learning has positioned Looptica as a reference in the optical sector in Barcelona. Elena specializes in contact lens fitting and visual therapy for children and adults.'
                        : (language === 'es' 
                          ? 'Su compromiso con la excelencia y el aprendizaje continuo ha posicionado a Looptica como referente en el sector óptico en Barcelona. Elena se especializa en adaptación de lentes de contacto y terapia visual para niños y adultos.'
                          : 'El seu compromís amb l\'excel·lència i l\'aprenentatge continu ha posicionat Looptica com a referent en el sector òptic a Barcelona. Elena s\'especialitza en adaptació de lents de contacte i teràpia visual per a nens i adults.')}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Team Section */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Irene */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="aspect-square w-40 h-40 mx-auto overflow-hidden rounded-full mb-6">
                    <img 
                      src="/lovable-uploads/fbb3f53d-cb3a-4b23-bf37-ee5a9fb68e8f.png" 
                      alt="Irene" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-center text-gray-900">Irene</h4>
                  <p className="text-[#009fe3] font-medium mb-4 text-center">
                    {language === 'en' ? 'Audiologist' : (language === 'es' ? 'Audióloga' : 'Audiòloga')}
                  </p>
                  <p className="text-gray-600 text-center">
                    {language === 'en' 
                      ? 'Irene is our hearing health specialist with extensive experience in hearing aids and auditory therapies. Her patience and dedication make her the perfect professional to address your hearing concerns.'
                      : (language === 'es' 
                        ? 'Irene es nuestra especialista en salud auditiva con amplia experiencia en audífonos y terapias auditivas. Su paciencia y dedicación la convierten en la profesional perfecta para atender tus preocupaciones auditivas.'
                        : 'Irene és la nostra especialista en salut auditiva amb àmplia experiència en audiòfons i teràpies auditives. La seva paciència i dedicació la converteixen en la professional perfecta per atendre les teves preocupacions auditives.')}
                  </p>
                </div>

                {/* Lorena */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="aspect-square w-40 h-40 mx-auto overflow-hidden rounded-full mb-6">
                    <img 
                      src="/lovable-uploads/4e50b490-59f3-40a9-a3a6-a1c02cf017a3.png" 
                      alt="Lorena" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-center text-gray-900">Lorena</h4>
                  <p className="text-[#009fe3] font-medium mb-4 text-center">
                    {language === 'en' ? 'Optician & Style Consultant' : (language === 'es' ? 'Óptica y Consultora de Estilo' : 'Òptica i Consultora d\'Estil')}
                  </p>
                  <p className="text-gray-600 text-center">
                    {language === 'en' 
                      ? 'With her keen eye for style and technical knowledge, Lorena helps our clients find the perfect frames that match both their visual needs and personal style. She specializes in image consulting and lens technology.'
                      : (language === 'es' 
                        ? 'Con su agudo sentido del estilo y conocimiento técnico, Lorena ayuda a nuestros clientes a encontrar las monturas perfectas que se adaptan tanto a sus necesidades visuales como a su estilo personal. Se especializa en asesoramiento de imagen y tecnología de lentes.'
                        : 'Amb el seu agut sentit de l\'estil i coneixement tècnic, Lorena ajuda els nostres clients a trobar les muntures perfectes que s\'adapten tant a les seves necessitats visuals com al seu estil personal. S\'especialitza en assessorament d\'imatge i tecnologia de lents.')}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Values Section */}
            <ScrollReveal>
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  {language === 'en' ? 'Our Values' : (language === 'es' ? 'Nuestros Valores' : 'Els Nostres Valors')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6">
                    <h4 className="text-xl font-medium mb-3 text-[#009fe3]">
                      {language === 'en' ? 'Professionalism' : (language === 'es' ? 'Profesionalidad' : 'Professionalitat')}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'We approach every case with the highest standards of technical and ethical professionalism.'
                        : (language === 'es' 
                          ? 'Abordamos cada caso con los más altos estándares de profesionalidad técnica y ética.'
                          : 'Abordem cada cas amb els més alts estàndards de professionalitat tècnica i ètica.')}
                    </p>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-medium mb-3 text-[#009fe3]">
                      {language === 'en' ? 'Innovation' : (language === 'es' ? 'Innovación' : 'Innovació')}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'We constantly update our knowledge and technology to offer you the best solutions.'
                        : (language === 'es' 
                          ? 'Actualizamos constantemente nuestros conocimientos y tecnología para ofrecerte las mejores soluciones.'
                          : 'Actualitzem constantment els nostres coneixements i tecnologia per oferir-te les millors solucions.')}
                    </p>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-medium mb-3 text-[#009fe3]">
                      {language === 'en' ? 'Personalized Service' : (language === 'es' ? 'Servicio Personalizado' : 'Servei Personalitzat')}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'We understand that each customer is unique and we adapt our solutions to your specific needs.'
                        : (language === 'es' 
                          ? 'Entendemos que cada cliente es único y adaptamos nuestras soluciones a tus necesidades específicas.'
                          : 'Entenem que cada client és únic i adaptem les nostres solucions a les teves necessitats específiques.')}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
