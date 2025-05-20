
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
        
        <p>A cookie is a file that is downloaded to your computer when you access certain web pages. Cookies allow a web page, among other things, to store and retrieve information about the browsing habits of a user or their equipment and, depending on the information they contain and the way they use their equipment, they can be used to recognize the user.</p>
        
        <p>In accordance with the Second Section of Article 22 of Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce (hereinafter, LSSI), LOOPTICA POBLENOU S.L. informs as follows:</p>
        
        <h3>1. COOKIES USED ON THIS WEBSITE</h3>
        
        <p>LOOPTICA POBLENOU S.L. uses a set of cookies on this website that allows us to provide a better experience to our users.</p>
        
        <p>The cookies used on this website are:</p>
        
        <h4>Technical cookies:</h4>
        <p>These are those that allow the user to navigate through the website and use the different options or services that exist on it, such as controlling traffic and data communication, identifying the session, accessing parts of restricted access, using security elements during navigation or sharing content through social networks.</p>
        
        <h4>Personalization cookies:</h4>
        <p>These are those that allow the user to access the service with some general characteristics predefined according to a series of criteria in the user's terminal, such as the language, the type of browser through which the service is accessed, the regional configuration from where the service is accessed, etc.</p>
        
        <h4>Analysis cookies:</h4>
        <p>These allow the person responsible for them to monitor and analyze the behavior of the users of the websites to which they are linked. The information collected through this type of cookies is used to measure the activity of the websites, applications or platforms and to create navigation profiles of the users of these sites, applications and platforms, in order to introduce improvements based on the analysis of the usage data made by the users of the service.</p>
        
        <h3>2. COOKIES FROM THIRD PARTIES</h3>
        
        <p>This website uses third-party cookies. Specifically, this website uses Google Analytics, a web analytics service provided by Google, Inc. with registered office in the United States. To provide these services, they use cookies that collect information, including the user's IP address, which will be transmitted, processed and stored by Google in the terms set out on the website Google.com. This includes the possible transmission of this information to third parties for legal requirements or when such third parties process the information on behalf of Google.</p>
        
        <h3>3. ACCEPTANCE OR REJECTION OF COOKIES</h3>
        
        <p>This website shows information about its Cookie Policy at the bottom of any page of the portal with each login so that you are aware.</p>
        
        <p>Given this information, it is possible to carry out the following actions:</p>
        <ul>
          <li>Accept cookies: this warning will not be displayed again when accessing any portal page during the current session.</li>
          <li>Close: the notice is hidden on the current page.</li>
          <li>More information: you will be able to obtain more information about what cookies are, know the Cookie Policy of LOOPTICA POBLENOU S.L. and modify the configuration of your browser.</li>
        </ul>
        
        <h3>4. DISABLING AND BLOCKING COOKIES</h3>
        
        <p>In any case, the user can allow, block or delete these cookies installed on their computer by configuring the browser options installed on their computer:</p>
        <ul>
          <li>Microsoft Internet Explorer: Tools menu > Internet Options > Privacy > Settings.</li>
          <li>Firefox: Tools menu > Options > Privacy > Cookies.</li>
          <li>Chrome: Menu > Settings > Show advanced options > Privacy > Content settings.</li>
          <li>Safari: Edit > Preferences > Privacy.</li>
          <li>Opera: Menu > Preferences > Advanced > Privacy.</li>
        </ul>
        
        <p>If you block the use of cookies on your browser, some of the services provided on looptica.com may not be available.</p>
        
        <h3>5. CHANGES TO THE COOKIES POLICY</h3>
        
        <p>This website may modify this Cookies Policy based on legislative, regulatory requirements, or with the purpose of adapting said policy to the instructions dictated by the Spanish Data Protection Agency, therefore, users are advised to periodically visit this page to know the changes suffered in them.</p>
        
        <p>When significant changes occur in this Cookies Policy, they will be communicated to users either through the web or via email to registered users.</p>
      `
    },
    es: {
      title: "Política de Cookies",
      metaDescription: "Aprenda cómo Looptica utiliza cookies en nuestro sitio web y cómo puede gestionarlas.",
      heading: "Política de Cookies",
      lastUpdated: "Última actualización: Abril 2023",
      content: `
        <h2>POLÍTICA DE COOKIES</h2>
        
        <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
        
        <p>De conformidad con la Sección Segunda del Artículo 22 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (en adelante, LSSI), LOOPTICA POBLENOU S.L. informa de la siguiente manera:</p>
        
        <h3>1. COOKIES UTILIZADAS EN ESTE SITIO WEB</h3>
        
        <p>LOOPTICA POBLENOU S.L. utiliza un conjunto de cookies en el presente sitio web que nos permite ofrecer un mejor servicio a nuestros usuarios.</p>
        
        <p>Las cookies utilizadas en este sitio web son:</p>
        
        <h4>Cookies técnicas:</h4>
        <p>Son aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, utilizar elementos de seguridad durante la navegación o compartir contenidos a través de redes sociales.</p>
        
        <h4>Cookies de personalización:</h4>
        <p>Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serían el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.</p>
        
        <h4>Cookies de análisis:</h4>
        <p>Son aquéllas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</p>
        
        <h3>2. COOKIES DE TERCEROS</h3>
        
        <p>Este sitio web utiliza cookies de terceros. Concretamente, este sitio web utiliza Google Analytics, un servicio de analítica web desarrollado por Google, Inc. con domicilio en los Estados Unidos. Para la prestación de estos servicios, utilizan cookies que recopilan información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Google en los términos fijados en la web Google.com. Esto incluye la posible transmisión de dicha información a terceros por razones de exigencia legal o cuando dichos terceros procesen la información por cuenta de Google.</p>
        
        <h3>3. ACEPTACIÓN O RECHAZO DE COOKIES</h3>
        
        <p>Este sitio web muestra información sobre su Política de Cookies en la parte inferior de cualquier página del portal con cada inicio de sesión para que usted sea consciente.</p>
        
        <p>Ante esta información es posible llevar a cabo las siguientes acciones:</p>
        <ul>
          <li>Aceptar cookies: no se volverá a visualizar este aviso al acceder a cualquier página del portal durante la presente sesión.</li>
          <li>Cerrar: se oculta el aviso en la presente página.</li>
          <li>Más información: podrá obtener más información sobre qué son las cookies, conocer la Política de Cookies de LOOPTICA POBLENOU S.L. y modificar la configuración de su navegador.</li>
        </ul>
        
        <h3>4. DESACTIVACIÓN Y BLOQUEO DE COOKIES</h3>
        
        <p>En cualquier caso, el usuario puede permitir, bloquear o eliminar estas cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p>
        <ul>
          <li>Microsoft Internet Explorer: menú Herramientas > Opciones de Internet > Privacidad > Configuración.</li>
          <li>Firefox: menú Herramientas > Opciones > Privacidad > Cookies.</li>
          <li>Chrome: Menú > Configuración > Mostrar opciones avanzadas > Privacidad > Configuración de contenido.</li>
          <li>Safari: Edición > Preferencias > Privacidad.</li>
          <li>Opera: Menú > Preferencias > Avanzado > Privacidad.</li>
        </ul>
        
        <p>Si bloquea el uso de cookies en su navegador es posible que algunos servicios o funcionalidades de la página web no estén disponibles.</p>
        
        <h3>5. CAMBIOS EN LA POLÍTICA DE COOKIES</h3>
        
        <p>Es posible que la Política de Cookies de este sitio web cambie o se actualice, por ello es recomendable que revise esta política cada vez que acceda a nuestro sitio web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.</p>
        
        <p>Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicarán a los usuarios bien mediante la web o a través de correo electrónico a los usuarios registrados.</p>
      `
    },
    ca: {
      title: "Política de Cookies",
      metaDescription: "Aprengui com Looptica utilitza cookies al nostre lloc web i com pot gestionar-les.",
      heading: "Política de Cookies",
      lastUpdated: "Darrera actualització: Abril 2023",
      content: `
        <h2>POLÍTICA DE COOKIES</h2>
        
        <p>Una cookie és un fitxer que es descarrega al seu ordinador en accedir a determinades pàgines web. Les cookies permeten a una pàgina web, entre altres coses, emmagatzemar i recuperar informació sobre els hàbits de navegació d'un usuari o del seu equip i, depenent de la informació que continguin i de la forma en què utilitzi el seu equip, poden utilitzar-se per reconèixer l'usuari.</p>
        
        <p>De conformitat amb la Secció Segona de l'Article 22 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (d'ara endavant, LSSI), LOOPTICA POBLENOU S.L. informa de la següent manera:</p>
        
        <h3>1. COOKIES UTILITZADES EN AQUEST LLOC WEB</h3>
        
        <p>LOOPTICA POBLENOU S.L. utilitza un conjunt de cookies en el present lloc web que ens permet oferir un millor servei als nostres usuaris.</p>
        
        <p>Les cookies utilitzades en aquest lloc web són:</p>
        
        <h4>Cookies tècniques:</h4>
        <p>Són aquelles que permeten a l'usuari la navegació a través d'una pàgina web, plataforma o aplicació i la utilització de les diferents opcions o serveis que en ella existeixin com, per exemple, controlar el trànsit i la comunicació de dades, identificar la sessió, accedir a parts d'accés restringit, utilitzar elements de seguretat durant la navegació o compartir continguts a través de xarxes socials.</p>
        
        <h4>Cookies de personalització:</h4>
        <p>Són aquelles que permeten a l'usuari accedir al servei amb algunes característiques de caràcter general predefinides en funció d'una sèrie de criteris en el terminal de l'usuari com per exemple serien l'idioma, el tipus de navegador a través del qual accedeix al servei, la configuració regional des d'on accedeix al servei, etc.</p>
        
        <h4>Cookies d'anàlisi:</h4>
        <p>Són aquelles que permeten al responsable d'aquestes, el seguiment i anàlisi del comportament dels usuaris dels llocs web als quals estan vinculades. La informació recollida mitjançant aquest tipus de cookies s'utilitza en el mesurament de l'activitat dels llocs web, aplicació o plataforma i per a l'elaboració de perfils de navegació dels usuaris d'aquests llocs, aplicacions i plataformes, amb la finalitat d'introduir millores en funció de l'anàlisi de les dades d'ús que fan els usuaris del servei.</p>
        
        <h3>2. COOKIES DE TERCERS</h3>
        
        <p>Aquest lloc web utilitza cookies de tercers. Concretament, aquest lloc web utilitza Google Analytics, un servei d'analítica web desenvolupat per Google, Inc. amb domicili als Estats Units. Per a la prestació d'aquests serveis, utilitzen cookies que recopilen informació, inclosa l'adreça IP de l'usuari, que serà transmesa, tractada i emmagatzemada per Google en els termes fixats a la web Google.com. Això inclou la possible transmissió d'aquesta informació a tercers per raons d'exigència legal o quan aquests tercers processin la informació per compte de Google.</p>
        
        <h3>3. ACCEPTACIÓ O REBUIG DE COOKIES</h3>
        
        <p>Aquest lloc web mostra informació sobre la seva Política de Cookies a la part inferior de qualsevol pàgina del portal amb cada inici de sessió perquè vostè en sigui conscient.</p>
        
        <p>Davant d'aquesta informació és possible dur a terme les següents accions:</p>
        <ul>
          <li>Acceptar cookies: no es tornarà a visualitzar aquest avís en accedir a qualsevol pàgina del portal durant la present sessió.</li>
          <li>Tancar: s'oculta l'avís a la present pàgina.</li>
          <li>Més informació: podrà obtenir més informació sobre què són les cookies, conèixer la Política de Cookies de LOOPTICA POBLENOU S.L. i modificar la configuració del seu navegador.</li>
        </ul>
        
        <h3>4. DESACTIVACIÓ I BLOQUEIG DE COOKIES</h3>
        
        <p>En qualsevol cas, l'usuari pot permetre, bloquejar o eliminar aquestes cookies instal·lades al seu equip mitjançant la configuració de les opcions del navegador instal·lat al seu ordinador:</p>
        <ul>
          <li>Microsoft Internet Explorer: menú Eines > Opcions d'Internet > Privacitat > Configuració.</li>
          <li>Firefox: menú Eines > Opcions > Privacitat > Cookies.</li>
          <li>Chrome: Menú > Configuració > Mostrar opcions avançades > Privacitat > Configuració de contingut.</li>
          <li>Safari: Edició > Preferències > Privacitat.</li>
          <li>Opera: Menú > Preferències > Avançat > Privacitat.</li>
        </ul>
        
        <p>Si bloqueja l'ús de cookies al seu navegador és possible que alguns serveis o funcionalitats de la pàgina web no estiguin disponibles.</p>
        
        <h3>5. CANVIS EN LA POLÍTICA DE COOKIES</h3>
        
        <p>És possible que la Política de Cookies d'aquest lloc web canviï o s'actualitzi, per això és recomanable que revisi aquesta política cada vegada que accedeixi al nostre lloc web amb l'objectiu d'estar adequadament informat sobre com i per a què fem servir les cookies.</p>
        
        <p>Quan es produeixin canvis significatius en aquesta Política de Cookies, es comunicaran als usuaris bé mitjançant la web o a través de correu electrònic als usuaris registrats.</p>
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
