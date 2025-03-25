
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Ear, FileText, Activity, BarChart3 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const HearingTest = () => {
  const { language } = useLanguage();
  
  const content = {
    title: {
      en: 'Hearing Test',
      es: 'Prueba Auditiva',
      ca: 'Prova Auditiva',
    },
    subtitle: {
      en: 'Comprehensive hearing assessments by experienced professionals',
      es: 'Evaluaciones auditivas completas por profesionales experimentados',
      ca: 'Avaluacions auditives completes per professionals experimentats',
    },
    appointmentSubject: {
      en: 'Hearing Test at Looptica',
      es: 'Prueba Auditiva en Looptica',
      ca: 'Prova Auditiva a Looptica',
    },
    understanding: {
      en: 'Understanding Our Hearing Tests',
      es: 'Comprendiendo Nuestras Pruebas Auditivas',
      ca: 'Entenent Les Nostres Proves Auditives',
    },
    understandingP1: {
      en: 'At Looptica, we provide comprehensive hearing evaluations conducted by our experienced audiologists. Our tests go beyond basic screenings to thoroughly assess your hearing ability across different frequencies and sound levels, helping to identify any potential hearing issues and their causes.',
      es: 'En Looptica, proporcionamos evaluaciones auditivas completas realizadas por nuestros audiólogos con experiencia. Nuestras pruebas van más allá de los exámenes básicos para evaluar minuciosamente su capacidad auditiva en diferentes frecuencias y niveles de sonido, ayudando a identificar posibles problemas auditivos y sus causas.',
      ca: 'A Looptica, proporcionem avaluacions auditives completes realitzades pels nostres audiòlegs amb experiència. Les nostres proves van més enllà dels exàmens bàsics per avaluar minuciosament la seva capacitat auditiva en diferents freqüències i nivells de so, ajudant a identificar possibles problemes auditius i les seves causes.',
    },
    understandingP2: {
      en: 'Regular hearing tests are essential for monitoring your auditory health, especially if you\'re experiencing symptoms like difficulty understanding conversations, asking people to repeat themselves frequently, or hearing ringing in your ears. Early detection of hearing loss allows for more effective treatment options and better outcomes.',
      es: 'Las pruebas auditivas regulares son esenciales para monitorizar su salud auditiva, especialmente si está experimentando síntomas como dificultad para entender conversaciones, pedir a las personas que se repitan con frecuencia o escuchar zumbidos en los oídos. La detección temprana de la pérdida auditiva permite opciones de tratamiento más efectivas y mejores resultados.',
      ca: 'Les proves auditives regulars són essencials per monitoritzar la seva salut auditiva, especialment si està experimentant símptomes com dificultat per entendre converses, demanar a les persones que es repeteixin amb freqüència o escoltar brunzits a les orelles. La detecció primerenca de la pèrdua auditiva permet opcions de tractament més efectives i millors resultats.',
    },
    processTitle: {
      en: 'Our Comprehensive Testing Process',
      es: 'Nuestro Proceso de Evaluación Completo',
      ca: 'El Nostre Procés d\'Avaluació Complet',
    },
    initialConsultation: {
      en: 'Initial Consultation',
      es: 'Consulta Inicial',
      ca: 'Consulta Inicial',
    },
    initialConsultationDesc: {
      en: 'We begin with a detailed discussion about your hearing concerns, medical history, and lifestyle factors that may affect your hearing health.',
      es: 'Comenzamos con una discusión detallada sobre sus preocupaciones auditivas, historial médico y factores de estilo de vida que pueden afectar su salud auditiva.',
      ca: 'Comencem amb una discussió detallada sobre les seves preocupacions auditives, historial mèdic i factors d\'estil de vida que poden afectar la seva salut auditiva.',
    },
    otoscopicExamination: {
      en: 'Otoscopic Examination',
      es: 'Examen Otoscópico',
      ca: 'Examen Otoscòpic',
    },
    otoscopicExaminationDesc: {
      en: 'A visual inspection of your ear canal and eardrum to check for physical abnormalities, earwax blockage, or signs of infection that could affect your hearing.',
      es: 'Una inspección visual de su canal auditivo y tímpano para verificar anormalidades físicas, bloqueo de cerumen o signos de infección que podrían afectar su audición.',
      ca: 'Una inspecció visual del seu canal auditiu i timpà per verificar anomalies físiques, bloqueig de cerumen o signes d\'infecció que podrien afectar la seva audició.',
    },
    pureToneAudio: {
      en: 'Pure Tone Audiometry',
      es: 'Audiometría de Tono Puro',
      ca: 'Audiometria de To Pur',
    },
    pureToneAudioDesc: {
      en: 'This test measures your ability to hear sounds of different volumes and frequencies, determining the quietest sounds you can hear across the speech spectrum.',
      es: 'Esta prueba mide su capacidad para escuchar sonidos de diferentes volúmenes y frecuencias, determinando los sonidos más silenciosos que puede escuchar en todo el espectro del habla.',
      ca: 'Aquesta prova mesura la seva capacitat per escoltar sons de diferents volums i freqüències, determinant els sons més silenciosos que pot escoltar en tot l\'espectre de la parla.',
    },
    speechRecognition: {
      en: 'Speech Recognition Testing',
      es: 'Prueba de Reconocimiento del Habla',
      ca: 'Prova de Reconeixement de la Parla',
    },
    speechRecognitionDesc: {
      en: 'Evaluates your ability to distinguish speech from background noise and to understand spoken words at different volumes.',
      es: 'Evalúa su capacidad para distinguir el habla del ruido de fondo y para entender palabras habladas a diferentes volúmenes.',
      ca: 'Avalua la seva capacitat per distingir la parla del soroll de fons i per entendre paraules parlades a diferents volums.',
    },
    advancedTitle: {
      en: 'Advanced Diagnostic Tests',
      es: 'Pruebas Diagnósticas Avanzadas',
      ca: 'Proves Diagnòstiques Avançades',
    },
    tympanometry: {
      en: 'Tympanometry',
      es: 'Timpanometría',
      ca: 'Timpanometria',
    },
    tympanometryDesc: {
      en: 'Measures the movement of your eardrum in response to air pressure changes, helping to identify middle ear problems such as fluid buildup or eardrum perforation.',
      es: 'Mide el movimiento de su tímpano en respuesta a cambios de presión de aire, ayudando a identificar problemas del oído medio como acumulación de líquido o perforación del tímpano.',
      ca: 'Mesura el moviment del seu timpà en resposta a canvis de pressió d\'aire, ajudant a identificar problemes de l\'oïda mitjana com acumulació de líquid o perforació del timpà.',
    },
    acousticReflex: {
      en: 'Acoustic Reflex Testing',
      es: 'Prueba de Reflejo Acústico',
      ca: 'Prova de Reflex Acústic',
    },
    acousticReflexDesc: {
      en: 'Evaluates how certain muscles in your middle ear respond to loud sounds, which can help identify the location of hearing problems within the auditory system.',
      es: 'Evalúa cómo ciertos músculos en su oído medio responden a sonidos fuertes, lo que puede ayudar a identificar la ubicación de problemas auditivos dentro del sistema auditivo.',
      ca: 'Avalua com certs músculs en la seva oïda mitjana responen a sons forts, el que pot ajudar a identificar la ubicació de problemes auditius dins del sistema auditiu.',
    },
    otoacoustic: {
      en: 'Otoacoustic Emissions (OAE)',
      es: 'Emisiones Otoacústicas (EOA)',
      ca: 'Emissions Otoacústiques (EOA)',
    },
    otoacousticDesc: {
      en: 'Measures sounds produced by the inner ear in response to stimuli, helping to assess cochlear function and identify hearing loss in its earliest stages.',
      es: 'Mide los sonidos producidos por el oído interno en respuesta a estímulos, ayudando a evaluar la función coclear e identificar la pérdida auditiva en sus primeras etapas.',
      ca: 'Mesura els sons produïts per l\'oïda interna en resposta a estímuls, ajudant a avaluar la funció coclear i identificar la pèrdua auditiva en les seves primeres etapes.',
    },
    realWorld: {
      en: 'Real-World Listening Assessment',
      es: 'Evaluación de Escucha en Entorno Real',
      ca: 'Avaluació d\'Escolta en Entorn Real',
    },
    realWorldDesc: {
      en: 'Evaluates how you hear in everyday environments with background noise, multiple speakers, or different acoustic settings to provide practical insights into your hearing challenges.',
      es: 'Evalúa cómo escucha en entornos cotidianos con ruido de fondo, múltiples hablantes o diferentes configuraciones acústicas para proporcionar información práctica sobre sus desafíos auditivos.',
      ca: 'Avalua com escolta en entorns quotidians amb soroll de fons, múltiples parlants o diferents configuracions acústiques per proporcionar informació pràctica sobre els seus desafiaments auditius.',
    },
    expectTitle: {
      en: 'What to Expect During Your Appointment',
      es: 'Qué Esperar Durante Su Cita',
      ca: 'Què Esperar Durant La Seva Cita',
    },
    expectP1: {
      en: 'Your hearing evaluation at Looptica is a comfortable, non-invasive process that typically takes about 60 minutes. Here\'s what you can expect:',
      es: 'Su evaluación auditiva en Looptica es un proceso cómodo, no invasivo que generalmente toma unos 60 minutos. Esto es lo que puede esperar:',
      ca: 'La seva avaluació auditiva a Looptica és un procés còmode, no invasiu que generalment pren uns 60 minuts. Això és el que pot esperar:',
    },
    welcomingEnv: {
      en: 'Welcoming Environment',
      es: 'Ambiente Acogedor',
      ca: 'Ambient Acollidor',
    },
    welcomingEnvDesc: {
      en: 'Our sound-treated testing rooms ensure accurate results without distracting background noise.',
      es: 'Nuestras salas de pruebas tratadas acústicamente garantizan resultados precisos sin ruido de fondo que distraiga.',
      ca: 'Les nostres sales de proves tractades acústicament garanteixen resultats precisos sense soroll de fons que distregui.',
    },
    simpleInstructions: {
      en: 'Simple Instructions',
      es: 'Instrucciones Simples',
      ca: 'Instruccions Simples',
    },
    simpleInstructionsDesc: {
      en: 'You\'ll be asked to respond to sounds or repeat words as part of the various tests, with clear guidance from our audiologist.',
      es: 'Se le pedirá que responda a sonidos o repita palabras como parte de las diversas pruebas, con orientación clara de nuestro audiólogo.',
      ca: 'Se li demanarà que respongui a sons o repeteixi paraules com a part de les diverses proves, amb orientació clara del nostre audiòleg.',
    },
    comprehensiveResults: {
      en: 'Comprehensive Results',
      es: 'Resultados Completos',
      ca: 'Resultats Complets',
    },
    comprehensiveResultsDesc: {
      en: 'After completing the tests, your audiologist will explain your results using easy-to-understand audiograms and charts.',
      es: 'Después de completar las pruebas, su audiólogo explicará sus resultados utilizando audiogramas y gráficos fáciles de entender.',
      ca: 'Després de completar les proves, el seu audiòleg explicarà els seus resultats utilitzant audiogrames i gràfics fàcils d\'entendre.',
    },
    personalizedRecommendations: {
      en: 'Personalized Recommendations',
      es: 'Recomendaciones Personalizadas',
      ca: 'Recomanacions Personalitzades',
    },
    personalizedRecommendationsDesc: {
      en: 'Based on your results, we\'ll discuss appropriate next steps, whether that\'s monitoring your hearing, exploring hearing aids, or referring you to a medical specialist if necessary.',
      es: 'Basado en sus resultados, discutiremos los próximos pasos apropiados, ya sea monitoreando su audición, explorando audífonos o refiriéndolo a un especialista médico si es necesario.',
      ca: 'Basat en els seus resultats, discutirem els propers passos apropiats, ja sigui monitoritzant la seva audició, explorant audiòfons o referint-lo a un especialista mèdic si és necessari.',
    },
    noPressure: {
      en: 'No Pressure Consultations',
      es: 'Consultas Sin Presión',
      ca: 'Consultes Sense Pressió',
    },
    noPressureDesc: {
      en: 'Our focus is on providing information and support, not selling products. You\'ll have time to ask questions and consider your options without any pressure.',
      es: 'Nuestro enfoque está en proporcionar información y apoyo, no en vender productos. Tendrá tiempo para hacer preguntas y considerar sus opciones sin ninguna presión.',
      ca: 'El nostre enfocament està en proporcionar informació i suport, no en vendre productes. Tindrà temps per fer preguntes i considerar les seves opcions sense cap pressió.',
    },
    whenToGetTitle: {
      en: 'When Should You Get Your Hearing Tested?',
      es: '¿Cuándo Debería Hacerse una Prueba Auditiva?',
      ca: 'Quan Hauria de Fer-se una Prova Auditiva?',
    },
    whenToGetP1: {
      en: 'We recommend hearing tests for:',
      es: 'Recomendamos pruebas auditivas para:',
      ca: 'Recomanem proves auditives per a:',
    },
    hearingTestsP1: {
      en: 'Remember that hearing loss often occurs gradually, making it difficult to notice until it significantly impacts your quality of life. Regular hearing tests allow for early intervention and better outcomes.',
      es: 'Recuerde que la pérdida auditiva a menudo ocurre gradualmente, lo que dificulta notarla hasta que afecta significativamente su calidad de vida. Las pruebas auditivas regulares permiten una intervención temprana y mejores resultados.',
      ca: 'Recordi que la pèrdua auditiva sovint ocorre gradualment, el que dificulta notar-la fins que afecta significativament la seva qualitat de vida. Les proves auditives regulars permeten una intervenció primerenca i millors resultats.',
    },
  };
  
  return (
    <ServiceLayout
      title={content.title[language]}
      subtitle={content.subtitle[language]}
      image="/lovable-uploads/c909c154-63bb-4632-af13-9e1825237aaa.png"
      appointmentSubject={content.appointmentSubject[language]}
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.understanding[language]}</h2>
          <p>
            {content.understandingP1[language]}
          </p>
          <p>
            {content.understandingP2[language]}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.processTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.initialConsultation[language]}</h4>
                <p>{content.initialConsultationDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Ear className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.otoscopicExamination[language]}</h4>
                <p>{content.otoscopicExaminationDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.pureToneAudio[language]}</h4>
                <p>{content.pureToneAudioDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.speechRecognition[language]}</h4>
                <p>{content.speechRecognitionDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.advancedTitle[language]}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.tympanometry[language]}</h4>
              <p>{content.tympanometryDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.acousticReflex[language]}</h4>
              <p>{content.acousticReflexDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.otoacoustic[language]}</h4>
              <p>{content.otoacousticDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.realWorld[language]}</h4>
              <p>{content.realWorldDesc[language]}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.expectTitle[language]}</h2>
          <p>
            {content.expectP1[language]}
          </p>
          <ol>
            <li>
              <strong>{content.welcomingEnv[language]}:</strong> {content.welcomingEnvDesc[language]}
            </li>
            <li>
              <strong>{content.simpleInstructions[language]}:</strong> {content.simpleInstructionsDesc[language]}
            </li>
            <li>
              <strong>{content.comprehensiveResults[language]}:</strong> {content.comprehensiveResultsDesc[language]}
            </li>
            <li>
              <strong>{content.personalizedRecommendations[language]}:</strong> {content.personalizedRecommendationsDesc[language]}
            </li>
            <li>
              <strong>{content.noPressure[language]}:</strong> {content.noPressureDesc[language]}
            </li>
          </ol>
          <h3>{content.whenToGetTitle[language]}</h3>
          <p>
            {content.whenToGetP1[language]}
          </p>
          <ul>
            <li>{language === 'en' ? 'Adults over 50, as part of regular health check-ups' : (language === 'es' ? 'Adultos mayores de 50 años, como parte de chequeos regulares de salud' : 'Adults majors de 50 anys, com a part de revisions regulars de salut')}</li>
            <li>{language === 'en' ? 'Anyone experiencing difficulty hearing conversations or frequently asking people to repeat themselves' : (language === 'es' ? 'Cualquier persona que experimente dificultad para escuchar conversaciones o pida frecuentemente a las personas que se repitan' : 'Qualsevol persona que experimenti dificultat per escoltar converses o demani freqüentment a les persones que es repeteixin')}</li>
            <li>{language === 'en' ? 'Individuals with a family history of hearing loss' : (language === 'es' ? 'Personas con antecedentes familiares de pérdida auditiva' : 'Persones amb antecedents familiars de pèrdua auditiva')}</li>
            <li>{language === 'en' ? 'People exposed to loud noises at work or during recreational activities' : (language === 'es' ? 'Personas expuestas a ruidos fuertes en el trabajo o durante actividades recreativas' : 'Persones exposades a sorolls forts a la feina o durant activitats recreatives')}</li>
            <li>{language === 'en' ? 'Those experiencing ringing or buzzing in the ears (tinnitus)' : (language === 'es' ? 'Aquellos que experimentan zumbidos o pitidos en los oídos (tinnitus)' : 'Aquells que experimenten brunzits o xiulets a les orelles (tinnitus)')}</li>
            <li>{language === 'en' ? 'Anyone who has had previous ear infections, surgeries, or treatments' : (language === 'es' ? 'Cualquier persona que haya tenido infecciones de oído, cirugías o tratamientos previos' : 'Qualsevol persona que hagi tingut infeccions d\'oïda, cirurgies o tractaments previs')}</li>
          </ul>
          <p>
            {content.hearingTestsP1[language]}
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default HearingTest;
