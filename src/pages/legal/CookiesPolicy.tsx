
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '@/components/ui';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CookiesPolicy = () => {
  const { language } = useLanguage();

  // Content based on language
  const content = {
    en: {
      title: "Cookies Policy",
      metaDescription: "Learn about how Looptica uses cookies on our website and how you can manage them.",
      heading: "Cookies Policy",
      lastUpdated: "Last updated: April 2023",
      content: `
        <h2>COOKIES POLICY</h2>
        
        <p>This Cookies Policy explains how Looptica ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at looptica.com ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
        
        <h3>1. WHAT ARE COOKIES?</h3>
        
        <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
        
        <p>Cookies set by the website owner (in this case, Looptica) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>
        
        <h3>2. WHY DO WE USE COOKIES?</h3>
        
        <p>We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.</p>
        
        <h3>3. TYPES OF COOKIES WE USE</h3>
        
        <p>The specific types of first and third-party cookies served through our Website and the purposes they perform are described below:</p>
        
        <h4>Essential website cookies:</h4>
        <p>These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</p>
        
        <h4>Performance and functionality cookies:</h4>
        <p>These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</p>
        
        <h4>Analytics and customization cookies:</h4>
        <p>These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</p>
        
        <h4>Advertising cookies:</h4>
        <p>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.</p>
        
        <h3>4. HOW CAN I CONTROL COOKIES?</h3>
        
        <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided below.</p>
        
        <p>You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.</p>
        
        <h3>5. HOW OFTEN WILL YOU UPDATE THIS COOKIE POLICY?</h3>
        
        <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
        
        <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>
        
        <h3>6. WHERE CAN I GET FURTHER INFORMATION?</h3>
        
        <p>If you have any questions about our use of cookies or other technologies, please contact us at:</p>
        
        <ul>
          <li>By email: info@looptica.com</li>
          <li>By phone: 933 00 90 64</li>
          <li>By mail: Rambla del Poblenou, 48, 08005 Barcelona</li>
        </ul>
      `
    },
    es: {
      title: "Política de Cookies",
      metaDescription: "Aprenda cómo Looptica utiliza cookies en nuestro sitio web y cómo puede gestionarlas.",
      heading: "Política de Cookies",
      lastUpdated: "Última actualización: Abril 2023",
      content: `
        <h2>POLÍTICA DE COOKIES</h2>
        
        <p>Esta Política de Cookies explica cómo Looptica ("Compañía", "nosotros", y "nuestro") utiliza cookies y tecnologías similares para reconocerle cuando visita nuestro sitio web en looptica.com ("Sitio Web"). Explica qué son estas tecnologías y por qué las utilizamos, así como sus derechos para controlar nuestro uso de ellas.</p>
        
        <h3>1. ¿QUÉ SON LAS COOKIES?</h3>
        
        <p>Las cookies son pequeños archivos de datos que se colocan en su ordenador o dispositivo móvil cuando visita un sitio web. Las cookies son ampliamente utilizadas por los propietarios de sitios web para hacer que sus sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información de informes.</p>
        
        <p>Las cookies establecidas por el propietario del sitio web (en este caso, Looptica) se denominan "cookies de primera parte". Las cookies establecidas por partes distintas al propietario del sitio web se denominan "cookies de terceros". Las cookies de terceros permiten que características o funcionalidades de terceros se proporcionen en o a través del sitio web (por ejemplo, publicidad, contenido interactivo y análisis). Las partes que establecen estas cookies de terceros pueden reconocer su ordenador tanto cuando visita el sitio web en cuestión como cuando visita ciertos otros sitios web.</p>
        
        <h3>2. ¿POR QUÉ UTILIZAMOS COOKIES?</h3>
        
        <p>Utilizamos cookies de primera y tercera parte por varias razones. Algunas cookies son necesarias por razones técnicas para que nuestro Sitio Web funcione, y nos referimos a ellas como cookies "esenciales" o "estrictamente necesarias". Otras cookies también nos permiten rastrear y dirigir los intereses de nuestros usuarios para mejorar la experiencia en nuestras Propiedades en Línea. Terceros sirven cookies a través de nuestro Sitio Web para publicidad, análisis y otros propósitos. Esto se describe con más detalle a continuación.</p>
        
        <h3>3. TIPOS DE COOKIES QUE UTILIZAMOS</h3>
        
        <p>Los tipos específicos de cookies de primera y tercera parte servidas a través de nuestro Sitio Web y los propósitos que realizan se describen a continuación:</p>
        
        <h4>Cookies esenciales del sitio web:</h4>
        <p>Estas cookies son estrictamente necesarias para proporcionarle servicios disponibles a través de nuestro Sitio Web y para utilizar algunas de sus características, como el acceso a áreas seguras.</p>
        
        <h4>Cookies de rendimiento y funcionalidad:</h4>
        <p>Estas cookies se utilizan para mejorar el rendimiento y la funcionalidad de nuestro Sitio Web, pero no son esenciales para su uso. Sin embargo, sin estas cookies, ciertas funcionalidades pueden no estar disponibles.</p>
        
        <h4>Cookies de análisis y personalización:</h4>
        <p>Estas cookies recogen información que se utiliza ya sea en forma agregada para ayudarnos a entender cómo se está utilizando nuestro Sitio Web o qué tan efectivas son nuestras campañas de marketing, o para ayudarnos a personalizar nuestro Sitio Web para usted.</p>
        
        <h4>Cookies publicitarias:</h4>
        <p>Estas cookies se utilizan para hacer que los mensajes publicitarios sean más relevantes para usted. Realizan funciones como evitar que el mismo anuncio aparezca continuamente, asegurando que los anuncios se muestren correctamente y, en algunos casos, seleccionando anuncios basados en sus intereses.</p>
        
        <h3>4. ¿CÓMO PUEDO CONTROLAR LAS COOKIES?</h3>
        
        <p>Tiene derecho a decidir si acepta o rechaza las cookies. Puede ejercer sus preferencias de cookies haciendo clic en los enlaces de exclusión apropiados que se proporcionan a continuación.</p>
        
        <p>Puede configurar o modificar los controles de su navegador web para aceptar o rechazar cookies. Si elige rechazar las cookies, aún puede utilizar nuestro sitio web, aunque su acceso a algunas funcionalidades y áreas de nuestro sitio web puede estar restringido. Como los medios por los cuales puede rechazar las cookies a través de los controles de su navegador web varían de navegador a navegador, debe visitar el menú de ayuda de su navegador para obtener más información.</p>
        
        <h3>5. ¿CON QUÉ FRECUENCIA ACTUALIZARÁ ESTA POLÍTICA DE COOKIES?</h3>
        
        <p>Podemos actualizar esta Política de Cookies de vez en cuando para reflejar, por ejemplo, cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Por lo tanto, revise esta Política de Cookies regularmente para mantenerse informado sobre nuestro uso de cookies y tecnologías relacionadas.</p>
        
        <p>La fecha en la parte superior de esta Política de Cookies indica cuándo se actualizó por última vez.</p>
        
        <h3>6. ¿DÓNDE PUEDO OBTENER MÁS INFORMACIÓN?</h3>
        
        <p>Si tiene alguna pregunta sobre nuestro uso de cookies u otras tecnologías, póngase en contacto con nosotros en:</p>
        
        <ul>
          <li>Por correo electrónico: info@looptica.com</li>
          <li>Por teléfono: 933 00 90 64</li>
          <li>Por correo postal: Rambla del Poblenou, 48, 08005 Barcelona</li>
        </ul>
      `
    },
    ca: {
      title: "Política de Cookies",
      metaDescription: "Aprengui com Looptica utilitza cookies al nostre lloc web i com pot gestionar-les.",
      heading: "Política de Cookies",
      lastUpdated: "Darrera actualització: Abril 2023",
      content: `
        <h2>POLÍTICA DE COOKIES</h2>
        
        <p>Aquesta Política de Cookies explica com Looptica ("Companyia", "nosaltres", i "nostre") utilitza cookies i tecnologies similars per reconèixer-lo quan visita el nostre lloc web a looptica.com ("Lloc Web"). Explica què són aquestes tecnologies i per què les utilitzem, així com els seus drets per controlar el nostre ús d'elles.</p>
        
        <h3>1. QUÈ SÓN LES COOKIES?</h3>
        
        <p>Les cookies són petits arxius de dades que es col·loquen al seu ordinador o dispositiu mòbil quan visita un lloc web. Les cookies són àmpliament utilitzades pels propietaris de llocs web per fer que els seus llocs web funcionin, o funcionin de manera més eficient, així com per proporcionar informació d'informes.</p>
        
        <p>Les cookies establertes pel propietari del lloc web (en aquest cas, Looptica) s'anomenen "cookies de primera part". Les cookies establertes per parts diferents al propietari del lloc web s'anomenen "cookies de tercers". Les cookies de tercers permeten que característiques o funcionalitats de tercers es proporcionin en o a través del lloc web (per exemple, publicitat, contingut interactiu i anàlisis). Les parts que estableixen aquestes cookies de tercers poden reconèixer el seu ordinador tant quan visita el lloc web en qüestió com quan visita certs altres llocs web.</p>
        
        <h3>2. PER QUÈ UTILITZEM COOKIES?</h3>
        
        <p>Utilitzem cookies de primera i tercera part per diverses raons. Algunes cookies són necessàries per raons tècniques perquè el nostre Lloc Web funcioni, i ens referim a elles com cookies "essencials" o "estrictament necessàries". Altres cookies també ens permeten rastrejar i dirigir els interessos dels nostres usuaris per millorar l'experiència a les nostres Propietats en Línia. Tercers serveixen cookies a través del nostre Lloc Web per publicitat, anàlisis i altres propòsits. Això es descriu amb més detall a continuació.</p>
        
        <h3>3. TIPUS DE COOKIES QUE UTILITZEM</h3>
        
        <p>Els tipus específics de cookies de primera i tercera part servides a través del nostre Lloc Web i els propòsits que realitzen es descriuen a continuació:</p>
        
        <h4>Cookies essencials del lloc web:</h4>
        <p>Aquestes cookies són estrictament necessàries per proporcionar-li serveis disponibles a través del nostre Lloc Web i per utilitzar algunes de les seves característiques, com l'accés a àrees segures.</p>
        
        <h4>Cookies de rendiment i funcionalitat:</h4>
        <p>Aquestes cookies s'utilitzen per millorar el rendiment i la funcionalitat del nostre Lloc Web, però no són essencials per al seu ús. Tanmateix, sense aquestes cookies, certes funcionalitats poden no estar disponibles.</p>
        
        <h4>Cookies d'anàlisi i personalització:</h4>
        <p>Aquestes cookies recullen informació que s'utilitza ja sigui en forma agregada per ajudar-nos a entendre com s'està utilitzant el nostre Lloc Web o què tan efectives són les nostres campanyes de màrqueting, o per ajudar-nos a personalitzar el nostre Lloc Web per a vostè.</p>
        
        <h4>Cookies publicitàries:</h4>
        <p>Aquestes cookies s'utilitzen per fer que els missatges publicitaris siguin més rellevants per a vostè. Realitzen funcions com evitar que el mateix anunci aparegui contínuament, assegurant que els anuncis es mostrin correctament i, en alguns casos, seleccionant anuncis basats en els seus interessos.</p>
        
        <h3>4. COM PUC CONTROLAR LES COOKIES?</h3>
        
        <p>Té dret a decidir si accepta o rebutja les cookies. Pot exercir les seves preferències de cookies fent clic als enllaços d'exclusió apropiats que es proporcionen a continuació.</p>
        
        <p>Pot configurar o modificar els controls del seu navegador web per acceptar o rebutjar cookies. Si tria rebutjar les cookies, encara pot utilitzar el nostre lloc web, tot i que el seu accés a algunes funcionalitats i àrees del nostre lloc web pot estar restringit. Com els mitjans pels quals pot rebutjar les cookies a través dels controls del seu navegador web varien de navegador a navegador, ha de visitar el menú d'ajuda del seu navegador per obtenir més informació.</p>
        
        <h3>5. AMB QUINA FREQÜÈNCIA ACTUALITZARÀ AQUESTA POLÍTICA DE COOKIES?</h3>
        
        <p>Podem actualitzar aquesta Política de Cookies de tant en tant per reflectir, per exemple, canvis en les cookies que utilitzem o per altres raons operatives, legals o regulatòries. Per tant, revisi aquesta Política de Cookies regularment per mantenir-se informat sobre el nostre ús de cookies i tecnologies relacionades.</p>
        
        <p>La data a la part superior d'aquesta Política de Cookies indica quan es va actualitzar per última vegada.</p>
        
        <h3>6. ON PUC OBTENIR MÉS INFORMACIÓ?</h3>
        
        <p>Si té alguna pregunta sobre el nostre ús de cookies o altres tecnologies, posi's en contacte amb nosaltres a:</p>
        
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

export default CookiesPolicy;
