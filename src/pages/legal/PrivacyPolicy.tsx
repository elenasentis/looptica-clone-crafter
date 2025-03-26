
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '@/components/ui';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  // Content based on language
  const content = {
    en: {
      title: "Privacy Policy",
      metaDescription: "Read Looptica's privacy policy to understand how we collect, use, and protect your personal information.",
      heading: "Privacy Policy",
      lastUpdated: "Last updated: April 2023",
      content: `
        <h2>PRIVACY POLICY</h2>
        
        <p>In compliance with the provisions of current regulations on the Protection of Personal Data and the Law on Information Society Services and Electronic Commerce, we inform you that the personal data you provide through the website looptica.com will be processed by the holder of the same, whose data are included in the Legal Notice.</p>
        
        <h3>1. INFORMATION WE COLLECT</h3>
        
        <p>When using our services, we may ask you to provide us with certain personal information that can be used to contact, identify you, or process your requests. The personal data we collect may include:</p>
        
        <ul>
          <li>Contact information (such as name, email address, telephone number)</li>
          <li>Demographic information (such as postal code, preferences)</li>
          <li>Health information necessary for the provision of our optical and audiology services</li>
          <li>Information provided in forms, surveys, or through correspondence</li>
        </ul>
        
        <h3>2. PURPOSES OF PROCESSING</h3>
        
        <p>We will process your personal data for the following purposes:</p>
        
        <ul>
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To allow you to participate in interactive features of our services when you choose to do so</li>
          <li>To provide customer support</li>
          <li>To process transactions</li>
          <li>To provide relevant product and service information</li>
          <li>To comply with legal obligations</li>
        </ul>
        
        <h3>3. LEGAL BASIS FOR PROCESSING</h3>
        
        <p>The processing of your data is based on the following legal bases:</p>
        
        <ul>
          <li>Your consent</li>
          <li>The execution of a contract in which you are a party</li>
          <li>Compliance with a legal obligation applicable to the controller</li>
          <li>The protection of legitimate interests pursued by the controller</li>
        </ul>
        
        <h3>4. DATA RETENTION</h3>
        
        <p>We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>
        
        <h3>5. DATA TRANSFER</h3>
        
        <p>Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
        
        <h3>6. YOUR RIGHTS</h3>
        
        <p>Under data protection law, you have rights including:</p>
        
        <ul>
          <li>Right to access - You have the right to ask us for copies of your personal information.</li>
          <li>Right to rectification - You have the right to ask us to rectify information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li>
          <li>Right to erasure - You have the right to ask us to erase your personal information in certain circumstances.</li>
          <li>Right to restriction of processing - You have the right to ask us to restrict the processing of your information in certain circumstances.</li>
          <li>Right to object to processing - You have the right to object to the processing of your personal data in certain circumstances.</li>
          <li>Right to data portability - You have the right to ask that we transfer the information you gave us to another organization, or to you, in certain circumstances.</li>
        </ul>
        
        <h3>7. CONTACT US</h3>
        
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        
        <ul>
          <li>By email: info@looptica.com</li>
          <li>By phone: 933 00 90 64</li>
          <li>By mail: Rambla del Poblenou, 48, 08005 Barcelona</li>
        </ul>
      `
    },
    es: {
      title: "Política de Privacidad",
      metaDescription: "Lea la política de privacidad de Looptica para entender cómo recopilamos, utilizamos y protegemos su información personal.",
      heading: "Política de Privacidad",
      lastUpdated: "Última actualización: Abril 2023",
      content: `
        <h2>POLÍTICA DE PRIVACIDAD</h2>
        
        <p>En cumplimiento de lo dispuesto en la normativa vigente sobre Protección de Datos de Carácter Personal y en la Ley de Servicios de la Sociedad de la Información y Comercio Electrónico, le informamos que los datos personales que nos facilite a través del sitio web looptica.com serán tratados por el titular del mismo, cuyos datos figuran en el Aviso Legal.</p>
        
        <h3>1. INFORMACIÓN QUE RECOPILAMOS</h3>
        
        <p>Al utilizar nuestros servicios, es posible que le pidamos que nos proporcione cierta información personal que puede utilizarse para contactar con usted, identificarle o tramitar sus solicitudes. Los datos personales que recopilamos pueden incluir:</p>
        
        <ul>
          <li>Información de contacto (como nombre, dirección de correo electrónico, número de teléfono)</li>
          <li>Información demográfica (como código postal, preferencias)</li>
          <li>Información de salud necesaria para la prestación de nuestros servicios de óptica y audiología</li>
          <li>Información proporcionada en formularios, encuestas o a través de correspondencia</li>
        </ul>
        
        <h3>2. FINALIDADES DEL TRATAMIENTO</h3>
        
        <p>Trataremos sus datos personales para las siguientes finalidades:</p>
        
        <ul>
          <li>Proporcionar y mantener nuestros servicios</li>
          <li>Notificarle sobre cambios en nuestros servicios</li>
          <li>Permitirle participar en funciones interactivas de nuestros servicios cuando decida hacerlo</li>
          <li>Prestar atención al cliente</li>
          <li>Procesar transacciones</li>
          <li>Proporcionar información relevante sobre productos y servicios</li>
          <li>Cumplir con obligaciones legales</li>
        </ul>
        
        <h3>3. BASE LEGAL PARA EL TRATAMIENTO</h3>
        
        <p>El tratamiento de sus datos se basa en las siguientes bases legales:</p>
        
        <ul>
          <li>Su consentimiento</li>
          <li>La ejecución de un contrato en el que usted es parte</li>
          <li>El cumplimiento de una obligación legal aplicable al responsable</li>
          <li>La protección de intereses legítimos perseguidos por el responsable</li>
        </ul>
        
        <h3>4. CONSERVACIÓN DE DATOS</h3>
        
        <p>Conservaremos sus datos personales únicamente durante el tiempo necesario para los fines establecidos en esta Política de Privacidad. Conservaremos y utilizaremos sus datos en la medida necesaria para cumplir con nuestras obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos y políticas legales.</p>
        
        <h3>5. TRANSFERENCIA DE DATOS</h3>
        
        <p>Su información, incluidos los datos personales, puede transferirse a — y mantenerse en — ordenadores ubicados fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de su jurisdicción.</p>
        
        <h3>6. SUS DERECHOS</h3>
        
        <p>Según la ley de protección de datos, usted tiene derechos que incluyen:</p>
        
        <ul>
          <li>Derecho de acceso - Tiene derecho a solicitarnos copias de su información personal.</li>
          <li>Derecho de rectificación - Tiene derecho a pedirnos que rectifiquemos información que considere inexacta. También tiene derecho a pedirnos que completemos información que considere incompleta.</li>
          <li>Derecho de supresión - Tiene derecho a pedirnos que borremos su información personal en determinadas circunstancias.</li>
          <li>Derecho a la limitación del tratamiento - Tiene derecho a pedirnos que restrinjamos el tratamiento de su información en determinadas circunstancias.</li>
          <li>Derecho de oposición al tratamiento - Tiene derecho a oponerse al tratamiento de sus datos personales en determinadas circunstancias.</li>
          <li>Derecho a la portabilidad de datos - Tiene derecho a pedirnos que transfiramos la información que nos dio a otra organización, o a usted, en determinadas circunstancias.</li>
        </ul>
        
        <h3>7. CONTÁCTENOS</h3>
        
        <p>Si tiene alguna pregunta sobre esta Política de Privacidad, póngase en contacto con nosotros:</p>
        
        <ul>
          <li>Por correo electrónico: info@looptica.com</li>
          <li>Por teléfono: 933 00 90 64</li>
          <li>Por correo postal: Rambla del Poblenou, 48, 08005 Barcelona</li>
        </ul>
      `
    },
    ca: {
      title: "Política de Privacitat",
      metaDescription: "Llegiu la política de privacitat de Looptica per entendre com recopilem, utilitzem i protegim la seva informació personal.",
      heading: "Política de Privacitat",
      lastUpdated: "Darrera actualització: Abril 2023",
      content: `
        <h2>POLÍTICA DE PRIVACITAT</h2>
        
        <p>En compliment del que disposa la normativa vigent sobre Protecció de Dades de Caràcter Personal i la Llei de Serveis de la Societat de la Informació i Comerç Electrònic, l'informem que les dades personals que ens faciliti a través del lloc web looptica.com seran tractades pel titular del mateix, les dades del qual figuren a l'Avís Legal.</p>
        
        <h3>1. INFORMACIÓ QUE RECOPILEM</h3>
        
        <p>En utilitzar els nostres serveis, és possible que li demanem que ens proporcioni certa informació personal que pot utilitzar-se per contactar amb vostè, identificar-lo o tramitar les seves sol·licituds. Les dades personals que recopilem poden incloure:</p>
        
        <ul>
          <li>Informació de contacte (com nom, adreça de correu electrònic, número de telèfon)</li>
          <li>Informació demogràfica (com codi postal, preferències)</li>
          <li>Informació de salut necessària per a la prestació dels nostres serveis d'òptica i audiologia</li>
          <li>Informació proporcionada en formularis, enquestes o a través de correspondència</li>
        </ul>
        
        <h3>2. FINALITATS DEL TRACTAMENT</h3>
        
        <p>Tractarem les seves dades personals per a les següents finalitats:</p>
        
        <ul>
          <li>Proporcionar i mantenir els nostres serveis</li>
          <li>Notificar-li sobre canvis en els nostres serveis</li>
          <li>Permetre-li participar en funcions interactives dels nostres serveis quan decideixi fer-ho</li>
          <li>Prestar atenció al client</li>
          <li>Processar transaccions</li>
          <li>Proporcionar informació rellevant sobre productes i serveis</li>
          <li>Complir amb obligacions legals</li>
        </ul>
        
        <h3>3. BASE LEGAL PER AL TRACTAMENT</h3>
        
        <p>El tractament de les seves dades es basa en les següents bases legals:</p>
        
        <ul>
          <li>El seu consentiment</li>
          <li>L'execució d'un contracte en el qual vostè és part</li>
          <li>El compliment d'una obligació legal aplicable al responsable</li>
          <li>La protecció d'interessos legítims perseguits pel responsable</li>
        </ul>
        
        <h3>4. CONSERVACIÓ DE DADES</h3>
        
        <p>Conservarem les seves dades personals únicament durant el temps necessari per a les finalitats establertes en aquesta Política de Privacitat. Conservarem i utilitzarem les seves dades en la mesura necessària per complir amb les nostres obligacions legals, resoldre disputes i fer complir els nostres acords i polítiques legals.</p>
        
        <h3>5. TRANSFERÈNCIA DE DADES</h3>
        
        <p>La seva informació, incloses les dades personals, pot transferir-se a — i mantenir-se en — ordinadors ubicats fora del seu estat, província, país o altra jurisdicció governamental on les lleis de protecció de dades poden diferir de les de la seva jurisdicció.</p>
        
        <h3>6. ELS SEUS DRETS</h3>
        
        <p>Segons la llei de protecció de dades, vostè té drets que inclouen:</p>
        
        <ul>
          <li>Dret d'accés - Té dret a sol·licitar-nos còpies de la seva informació personal.</li>
          <li>Dret de rectificació - Té dret a demanar-nos que rectifiquem informació que consideri inexacta. També té dret a demanar-nos que completem informació que consideri incompleta.</li>
          <li>Dret de supressió - Té dret a demanar-nos que esborrem la seva informació personal en determinades circumstàncies.</li>
          <li>Dret a la limitació del tractament - Té dret a demanar-nos que restringim el tractament de la seva informació en determinades circumstàncies.</li>
          <li>Dret d'oposició al tractament - Té dret a oposar-se al tractament de les seves dades personals en determinades circumstàncies.</li>
          <li>Dret a la portabilitat de dades - Té dret a demanar-nos que transferim la informació que ens va donar a una altra organització, o a vostè, en determinades circumstàncies.</li>
        </ul>
        
        <h3>7. CONTACTI'NS</h3>
        
        <p>Si té alguna pregunta sobre aquesta Política de Privacitat, posi's en contacte amb nosaltres:</p>
        
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

export default PrivacyPolicy;
