
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '@/components/ui';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const TermsConditions = () => {
  const { language } = useLanguage();

  // Content based on language
  const content = {
    en: {
      title: "Terms & Conditions",
      metaDescription: "Read Looptica's terms and conditions for using our website and services.",
      heading: "Terms & Conditions",
      lastUpdated: "Last updated: April 2023",
      content: `
        <h2>TERMS AND CONDITIONS</h2>
        
        <p>These Terms of Use constitute a legally binding agreement made between you and Looptica concerning your access to and use of the looptica.com website.</p>
        
        <h3>1. AGREEMENT TO TERMS</h3>
        
        <p>By accessing or using our website, you agree to be bound by these Terms of Use. If you disagree with any part of the terms, you may not access the website.</p>
        
        <h3>2. INTELLECTUAL PROPERTY RIGHTS</h3>
        
        <p>Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.</p>
        
        <h3>3. USER REPRESENTATIONS</h3>
        
        <p>By using the website, you represent and warrant that:</p>
        
        <ul>
          <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
          <li>You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the website.</li>
          <li>You will not access the website through automated or non-human means.</li>
          <li>You will not use the website for any illegal or unauthorized purpose.</li>
          <li>Your use of the website will not violate any applicable law or regulation.</li>
        </ul>
        
        <h3>4. PROHIBITED ACTIVITIES</h3>
        
        <p>You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
        
        <h3>5. WEBSITE MANAGEMENT</h3>
        
        <p>We reserve the right, but not the obligation, to:</p>
        
        <ul>
          <li>Monitor the website for violations of these Terms of Use.</li>
          <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use.</li>
          <li>Refuse, restrict access to, limit the availability of, or disable any of your contributions or any portion thereof.</li>
          <li>Remove from the website or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems.</li>
          <li>Otherwise manage the website in a manner designed to protect our rights and property and to facilitate the proper functioning of the website.</li>
        </ul>
        
        <h3>6. PRIVACY POLICY</h3>
        
        <p>We care about data privacy and security. By using the website, you agree to be bound by our <a href="/legal/privacy-policy">Privacy Policy</a>, which is incorporated into these Terms of Use.</p>
        
        <h3>7. TERM AND TERMINATION</h3>
        
        <p>These Terms of Use shall remain in full force and effect while you use the website. We may terminate your access to the website, without cause or notice, which may result in the forfeiture and destruction of all information associated with you.</p>
        
        <h3>8. MODIFICATIONS AND INTERRUPTIONS</h3>
        
        <p>We reserve the right to change, modify, or remove the contents of the website at any time or for any reason at our sole discretion without notice. We have no obligation to update any information on our website. We also reserve the right to modify or discontinue all or part of the website without notice at any time.</p>
        
        <h3>9. GOVERNING LAW</h3>
        
        <p>These Terms shall be governed by and defined following the laws of Spain. Looptica and yourself irrevocably consent that the courts of Spain shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
        
        <h3>10. CONTACT US</h3>
        
        <p>In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at:</p>
        
        <ul>
          <li>By email: info@looptica.com</li>
          <li>By phone: 933 00 90 64</li>
          <li>By mail: Rambla del Poblenou, 48, 08005 Barcelona</li>
        </ul>
      `
    },
    es: {
      title: "Términos y Condiciones",
      metaDescription: "Lea los términos y condiciones de Looptica para el uso de nuestro sitio web y servicios.",
      heading: "Términos y Condiciones",
      lastUpdated: "Última actualización: Abril 2023",
      content: `
        <h2>TÉRMINOS Y CONDICIONES</h2>
        
        <p>Estos Términos de Uso constituyen un acuerdo legalmente vinculante entre usted y Looptica en relación con su acceso y uso del sitio web looptica.com.</p>
        
        <h3>1. ACEPTACIÓN DE LOS TÉRMINOS</h3>
        
        <p>Al acceder o utilizar nuestro sitio web, acepta quedar vinculado por estos Términos de Uso. Si no está de acuerdo con alguna parte de los términos, no puede acceder al sitio web.</p>
        
        <h3>2. DERECHOS DE PROPIEDAD INTELECTUAL</h3>
        
        <p>A menos que se indique lo contrario, el sitio web es nuestra propiedad y todo el código fuente, bases de datos, funcionalidad, software, diseños del sitio web, audio, vídeo, texto, fotografías y gráficos en el sitio web (colectivamente, el "Contenido") y las marcas comerciales, marcas de servicio y logotipos contenidos en el mismo (las "Marcas") son propiedad o están controlados por nosotros o se nos han licenciado, y están protegidos por leyes de derechos de autor y marcas comerciales y diversos otros derechos de propiedad intelectual.</p>
        
        <h3>3. REPRESENTACIONES DEL USUARIO</h3>
        
        <p>Al utilizar el sitio web, usted representa y garantiza que:</p>
        
        <ul>
          <li>Tiene la capacidad legal y acepta cumplir con estos Términos de Uso.</li>
          <li>No es menor de edad en la jurisdicción en la que reside, o si es menor, ha recibido permiso de sus padres para utilizar el sitio web.</li>
          <li>No accederá al sitio web por medios automatizados o no humanos.</li>
          <li>No utilizará el sitio web para ningún fin ilegal o no autorizado.</li>
          <li>Su uso del sitio web no violará ninguna ley o regulación aplicable.</li>
        </ul>
        
        <h3>4. ACTIVIDADES PROHIBIDAS</h3>
        
        <p>No puede acceder o utilizar el sitio web para ningún otro propósito que no sea aquel para el que ponemos el sitio web a disposición. El sitio web no puede ser utilizado en relación con ningún esfuerzo comercial excepto aquellos que son específicamente respaldados o aprobados por nosotros.</p>
        
        <h3>5. GESTIÓN DEL SITIO WEB</h3>
        
        <p>Nos reservamos el derecho, pero no la obligación, de:</p>
        
        <ul>
          <li>Monitorizar el sitio web en busca de violaciones de estos Términos de Uso.</li>
          <li>Tomar las medidas legales apropiadas contra cualquier persona que, a nuestro exclusivo criterio, viole la ley o estos Términos de Uso.</li>
          <li>Rechazar, restringir el acceso, limitar la disponibilidad o deshabilitar cualquiera de sus contribuciones o cualquier parte de las mismas.</li>
          <li>Eliminar del sitio web o deshabilitar todos los archivos y contenidos que sean excesivos en tamaño o que sean de alguna manera gravosos para nuestros sistemas.</li>
          <li>Gestionar el sitio web de una manera diseñada para proteger nuestros derechos y propiedad y facilitar el funcionamiento adecuado del sitio web.</li>
        </ul>
        
        <h3>6. POLÍTICA DE PRIVACIDAD</h3>
        
        <p>Nos preocupamos por la privacidad y seguridad de los datos. Al utilizar el sitio web, acepta quedar vinculado por nuestra <a href="/legal/privacy-policy">Política de Privacidad</a>, que está incorporada a estos Términos de Uso.</p>
        
        <h3>7. TÉRMINO Y TERMINACIÓN</h3>
        
        <p>Estos Términos de Uso permanecerán en pleno vigor y efecto mientras utilice el sitio web. Podemos terminar su acceso al sitio web, sin causa o aviso, lo que puede resultar en la pérdida y destrucción de toda la información asociada con usted.</p>
        
        <h3>8. MODIFICACIONES E INTERRUPCIONES</h3>
        
        <p>Nos reservamos el derecho de cambiar, modificar o eliminar el contenido del sitio web en cualquier momento o por cualquier razón a nuestro exclusivo criterio sin previo aviso. No tenemos obligación de actualizar ninguna información en nuestro sitio web. También nos reservamos el derecho de modificar o descontinuar todo o parte del sitio web sin previo aviso en cualquier momento.</p>
        
        <h3>9. LEY APLICABLE</h3>
        
        <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes de España. Looptica y usted consienten irrevocablemente que los tribunales de España tendrán jurisdicción exclusiva para resolver cualquier disputa que pueda surgir en relación con estos términos.</p>
        
        <h3>10. CONTÁCTENOS</h3>
        
        <p>Para resolver una queja con respecto al sitio web o para recibir más información sobre el uso del sitio web, póngase en contacto con nosotros en:</p>
        
        <ul>
          <li>Por correo electrónico: info@looptica.com</li>
          <li>Por teléfono: 933 00 90 64</li>
          <li>Por correo postal: Rambla del Poblenou, 48, 08005 Barcelona</li>
        </ul>
      `
    },
    ca: {
      title: "Termes i Condicions",
      metaDescription: "Llegiu els termes i condicions de Looptica per a l'ús del nostre lloc web i serveis.",
      heading: "Termes i Condicions",
      lastUpdated: "Darrera actualització: Abril 2023",
      content: `
        <h2>TERMES I CONDICIONS</h2>
        
        <p>Aquests Termes d'Ús constitueixen un acord legalment vinculant entre vostè i Looptica en relació amb el seu accés i ús del lloc web looptica.com.</p>
        
        <h3>1. ACCEPTACIÓ DELS TERMES</h3>
        
        <p>En accedir o utilitzar el nostre lloc web, accepta quedar vinculat per aquests Termes d'Ús. Si no està d'acord amb alguna part dels termes, no pot accedir al lloc web.</p>
        
        <h3>2. DRETS DE PROPIETAT INTEL·LECTUAL</h3>
        
        <p>Tret que s'indiqui el contrari, el lloc web és la nostra propietat i tot el codi font, bases de dades, funcionalitat, programari, dissenys del lloc web, àudio, vídeo, text, fotografies i gràfics al lloc web (col·lectivament, el "Contingut") i les marques comercials, marques de servei i logotips continguts en el mateix (les "Marques") són propietat o estan controlats per nosaltres o se'ns han llicenciat, i estan protegits per lleis de drets d'autor i marques comercials i diversos altres drets de propietat intel·lectual.</p>
        
        <h3>3. REPRESENTACIONS DE L'USUARI</h3>
        
        <p>En utilitzar el lloc web, vostè representa i garanteix que:</p>
        
        <ul>
          <li>Té la capacitat legal i accepta complir amb aquests Termes d'Ús.</li>
          <li>No és menor d'edat a la jurisdicció en la qual resideix, o si és menor, ha rebut permís dels seus pares per utilitzar el lloc web.</li>
          <li>No accedirà al lloc web per mitjans automatitzats o no humans.</li>
          <li>No utilitzarà el lloc web per a cap finalitat il·legal o no autoritzada.</li>
          <li>El seu ús del lloc web no violarà cap llei o regulació aplicable.</li>
        </ul>
        
        <h3>4. ACTIVITATS PROHIBIDES</h3>
        
        <p>No pot accedir o utilitzar el lloc web per a cap altre propòsit que no sigui aquell per al qual posem el lloc web a disposició. El lloc web no pot ser utilitzat en relació amb cap esforç comercial excepte aquells que són específicament recolzats o aprovats per nosaltres.</p>
        
        <h3>5. GESTIÓ DEL LLOC WEB</h3>
        
        <p>Ens reservem el dret, però no l'obligació, de:</p>
        
        <ul>
          <li>Monitoritzar el lloc web a la recerca de violacions d'aquests Termes d'Ús.</li>
          <li>Prendre les mesures legals apropiades contra qualsevol persona que, al nostre exclusiu criteri, violi la llei o aquests Termes d'Ús.</li>
          <li>Rebutjar, restringir l'accés, limitar la disponibilitat o desactivar qualsevol de les seves contribucions o qualsevol part de les mateixes.</li>
          <li>Eliminar del lloc web o desactivar tots els arxius i continguts que siguin excessius en mida o que siguin d'alguna manera onerosos per als nostres sistemes.</li>
          <li>Gestionar el lloc web d'una manera dissenyada per protegir els nostres drets i propietat i facilitar el funcionament adequat del lloc web.</li>
        </ul>
        
        <h3>6. POLÍTICA DE PRIVACITAT</h3>
        
        <p>Ens preocupem per la privacitat i seguretat de les dades. En utilitzar el lloc web, accepta quedar vinculat per la nostra <a href="/legal/privacy-policy">Política de Privacitat</a>, que està incorporada a aquests Termes d'Ús.</p>
        
        <h3>7. TERME I TERMINACIÓ</h3>
        
        <p>Aquests Termes d'Ús romandran en ple vigor i efecte mentre utilitzi el lloc web. Podem terminar el seu accés al lloc web, sense causa o avís, la qual cosa pot resultar en la pèrdua i destrucció de tota la informació associada amb vostè.</p>
        
        <h3>8. MODIFICACIONS I INTERRUPCIONS</h3>
        
        <p>Ens reservem el dret de canviar, modificar o eliminar el contingut del lloc web en qualsevol moment o per qualsevol raó al nostre exclusiu criteri sense previ avís. No tenim obligació d'actualitzar cap informació al nostre lloc web. També ens reservem el dret de modificar o descontinuar tot o part del lloc web sense previ avís en qualsevol moment.</p>
        
        <h3>9. LLEI APLICABLE</h3>
        
        <p>Aquests Termes es regiran i interpretaran d'acord amb les lleis d'Espanya. Looptica i vostè consenten irrevocablement que els tribunals d'Espanya tindran jurisdicció exclusiva per resoldre qualsevol disputa que pugui sorgir en relació amb aquests termes.</p>
        
        <h3>10. CONTACTI'NS</h3>
        
        <p>Per resoldre una queixa respecte al lloc web o per rebre més informació sobre l'ús del lloc web, posi's en contacte amb nosaltres a:</p>
        
        <ul>
          <li>Per correu electrònic: info@looptica.com</li>
          <li>Per telèfon: 933 00 90 64</li>
          <li>Per correu postal: Rambla del Poblenou, 48, 08005 Barcelona</li>
        </ul>
      `
    }
  };

  return (
    <>
      <Helmet>
        <title>{content[language].title} | Looptica</title>
        <meta name="description" content={content[language].metaDescription} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto py-12">
          <ScrollReveal>
            <h1 className="text-3xl font-bold mb-2 text-gray-900">{content[language].heading}</h1>
            <p className="text-gray-500 mb-8">{content[language].lastUpdated}</p>
            
            <div 
              className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-h3:mt-6 prose-p:text-gray-600 prose-a:text-[#55afa9] prose-a:no-underline hover:prose-a:text-[#ca6664]"
              dangerouslySetInnerHTML={{ __html: content[language].content }}
            />
          </ScrollReveal>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TermsConditions;
