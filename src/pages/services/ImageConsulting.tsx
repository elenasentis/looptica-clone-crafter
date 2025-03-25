
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { PenTool, User, Lightbulb, Smile } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const ImageConsulting = () => {
  const { t, language } = useLanguage();
  
  return (
    <ServiceLayout
      title={language === 'ca' ? "Assessorament d'Imatge" : (language === 'es' ? "Asesoramiento de Imagen" : "Image Consulting")}
      subtitle={language === 'ca' ? "Troba l'estil que millor s'adapta a la teva personalitat" : (language === 'es' ? "Encuentra el estilo que mejor se adapta a tu personalidad" : "Find the style that best suits your personality")}
      image="/lovable-uploads/45087a9c-489a-4d48-82fb-d857e7bf306a.png"
      appointmentSubject={language === 'ca' ? "Assessorament d'Imatge a Looptica" : (language === 'es' ? "Asesoramiento de Imagen en Looptica" : "Image Consulting at Looptica")}
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{language === 'ca' ? "El nostre servei d'assessorament d'imatge" : (language === 'es' ? "Nuestro servicio de asesoramiento de imagen" : "Our Image Consulting Service")}</h2>
          <p>
            {language === 'ca' ? 
              "A Looptica, entenem que les ulleres són més que una eina correctiva visual; són una part essencial de la teva imatge personal. El nostre servei d'assessorament d'imatge està dissenyat per ajudar-te a trobar les ulleres perfectes que no només millorin la teva visió, sinó que també complementin el teu estil personal, la forma del teu rostre i el teu estil de vida." 
              : (language === 'es' ? 
                "En Looptica, entendemos que las gafas son más que una herramienta correctiva visual; son una parte esencial de tu imagen personal. Nuestro servicio de asesoramiento de imagen está diseñado para ayudarte a encontrar las gafas perfectas que no solo mejoren tu visión, sino que también complementen tu estilo personal, la forma de tu rostro y tu estilo de vida." 
                : 
                "At Looptica, we understand that eyeglasses are more than just a visual corrective tool; they're an essential part of your personal image. Our image consulting service is designed to help you find the perfect eyewear that not only enhances your vision but also complements your personal style, face shape, and lifestyle.")}
          </p>
          <p>
            {language === 'ca' ? 
              "Els nostres consultors d'estil estan especialment formats per oferir orientació experta sobre la selecció de muntures, combinant el seu coneixement de les tendències actuals amb una comprensió profunda de com diferents estils de ulleres s'adapten a diferents tipus de rostres i personalitats." 
              : (language === 'es' ? 
                "Nuestros consultores de estilo están especialmente formados para ofrecer orientación experta sobre la selección de monturas, combinando su conocimiento de las tendencias actuales con una comprensión profunda de cómo diferentes estilos de gafas se adaptan a diferentes tipos de rostros y personalidades." 
                : 
                "Our style consultants are specially trained to provide expert guidance on frame selection, combining their knowledge of current trends with a deep understanding of how different eyewear styles suit different face types and personalities.")}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            {language === 'ca' ? "El nostre procés de consulta d'imatge" : (language === 'es' ? "Nuestro proceso de consulta de imagen" : "Our Image Consultation Process")}
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">
                  {language === 'ca' ? "Anàlisi de la forma del rostre" : (language === 'es' ? "Análisis de la forma del rostro" : "Face Shape Analysis")}
                </h4>
                <p>
                  {language === 'ca' ? 
                    "Determinem la forma del teu rostre per recomanar estils de muntura que realcin els teus trets naturals i proporcionin un equilibri visual." 
                    : (language === 'es' ? 
                      "Determinamos la forma de tu rostro para recomendar estilos de montura que realcen tus rasgos naturales y proporcionen un equilibrio visual." 
                      : 
                      "We determine your face shape to recommend frame styles that enhance your natural features and provide visual balance.")}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">
                  {language === 'ca' ? "Avaluació del color" : (language === 'es' ? "Evaluación del color" : "Color Assessment")}
                </h4>
                <p>
                  {language === 'ca' ? 
                    "Analitzem el teu to de pell, color de cabell i ulls per suggerir colors de muntura que millor complementin la teva paleta personal." 
                    : (language === 'es' ? 
                      "Analizamos tu tono de piel, color de cabello y ojos para sugerir colores de montura que mejor complementen tu paleta personal." 
                      : 
                      "We analyze your skin tone, hair color, and eye color to suggest frame colors that best complement your personal palette.")}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">
                  {language === 'ca' ? "Consideracions d'estil de vida" : (language === 'es' ? "Consideraciones de estilo de vida" : "Lifestyle Considerations")}
                </h4>
                <p>
                  {language === 'ca' ? 
                    "Discutim els teus hàbits diaris, professió i activitats d'oci per recomanar muntures que s'adaptin al teu estil de vida específic." 
                    : (language === 'es' ? 
                      "Discutimos tus hábitos diarios, profesión y actividades de ocio para recomendar monturas que se adapten a tu estilo de vida específico." 
                      : 
                      "We discuss your daily habits, profession, and leisure activities to recommend frames that suit your specific lifestyle.")}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">
                  {language === 'ca' ? "Selecció personalitzada" : (language === 'es' ? "Selección personalizada" : "Personalized Selection")}
                </h4>
                <p>
                  {language === 'ca' ? 
                    "Basant-nos en la nostra anàlisi, et presentem una selecció curada de muntures que compleixen tots els criteris, permetent-te provar diverses opcions per trobar la que et faci sentir més còmode i segur." 
                    : (language === 'es' ? 
                      "Basándonos en nuestro análisis, te presentamos una selección curada de monturas que cumplen todos los criterios, permitiéndote probar varias opciones para encontrar la que te haga sentir más cómodo y seguro." 
                      : 
                      "Based on our analysis, we present you with a curated selection of frames that meet all criteria, allowing you to try various options to find the one that makes you feel most comfortable and confident.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>
            {language === 'ca' ? "Beneficis del nostre assessorament d'imatge" : (language === 'es' ? "Beneficios de nuestro asesoramiento de imagen" : "Benefits of Our Image Consulting")}
          </h2>
          <ul>
            <li>
              <strong>
                {language === 'ca' ? "Confiança millorada" : (language === 'es' ? "Confianza mejorada" : "Enhanced Confidence")}
              </strong>
              <p>
                {language === 'ca' ? 
                  "Quan portes ulleres que complementen perfectament la teva aparença i personalitat, experimentes un augment natural de la confiança." 
                  : (language === 'es' ? 
                    "Cuando llevas gafas que complementan perfectamente tu apariencia y personalidad, experimentas un aumento natural de la confianza." 
                    : 
                    "When you wear eyewear that perfectly complements your appearance and personality, you experience a natural boost in confidence.")}
              </p>
            </li>
            <li>
              <strong>
                {language === 'ca' ? "Estalvi de temps" : (language === 'es' ? "Ahorro de tiempo" : "Time Savings")}
              </strong>
              <p>
                {language === 'ca' ? 
                  "La nostra orientació experta elimina la confusió i l'estrès de navegar entre centenars de opcions, fent que el procés de selecció sigui eficient i agradable." 
                  : (language === 'es' ? 
                    "Nuestra orientación experta elimina la confusión y el estrés de navegar entre cientos de opciones, haciendo que el proceso de selección sea eficiente y agradable." 
                    : 
                    "Our expert guidance eliminates the confusion and stress of navigating through hundreds of options, making the selection process efficient and enjoyable.")}
              </p>
            </li>
            <li>
              <strong>
                {language === 'ca' ? "Versatilitat" : (language === 'es' ? "Versatilidad" : "Versatility")}
              </strong>
              <p>
                {language === 'ca' ? 
                  "Podem ajudar-te a seleccionar múltiples parells d'ulleres per a diferents ocasions, assegurant que tinguis l'accessori perfecte per a cada entorn i activitat." 
                  : (language === 'es' ? 
                    "Podemos ayudarte a seleccionar múltiples pares de gafas para diferentes ocasiones, asegurando que tengas el accesorio perfecto para cada entorno y actividad." 
                    : 
                    "We can help you select multiple pairs of eyewear for different occasions, ensuring you have the perfect accessory for every setting and activity.")}
              </p>
            </li>
            <li>
              <strong>
                {language === 'ca' ? "Inversió a llarg termini" : (language === 'es' ? "Inversión a largo plazo" : "Long-term Investment")}
              </strong>
              <p>
                {language === 'ca' ? 
                  "L'assessorament d'imatge adequat assegura que les teves ulleres no només siguin una solució visual, sinó també una inversió duradora en la teva aparença i benestar." 
                  : (language === 'es' ? 
                    "El asesoramiento de imagen adecuado asegura que tus gafas no solo sean una solución visual, sino también una inversión duradera en tu apariencia y bienestar." 
                    : 
                    "Proper image consulting ensures your eyewear is not just a visual solution but also a lasting investment in your appearance and well-being.")}
              </p>
            </li>
          </ul>
          <h3>
            {language === 'ca' ? "Les nostres col·leccions de dissenyador" : (language === 'es' ? "Nuestras colecciones de diseñador" : "Our Designer Collections")}
          </h3>
          <p>
            {language === 'ca' ? 
              "A Looptica, ens enorgullim d'oferir una selecció excepcional de muntures de dissenyadors prestigiosos i marques independents exclusives. La nostra col·lecció inclou:" 
              : (language === 'es' ? 
                "En Looptica, nos enorgullecemos de ofrecer una selección excepcional de monturas de diseñadores prestigiosos y marcas independientes exclusivas. Nuestra colección incluye:" 
                : 
                "At Looptica, we pride ourselves on offering an exceptional selection of frames from prestigious designers and exclusive independent brands. Our collection includes:")}
          </p>
          <ul>
            <li>Etnia Barcelona</li>
            <li>Woodys Barcelona</li>
            <li>Xavier Garcia</li>
            <li>Kaleos</li>
            <li>Talla Eyewear</li>
            <li>Garrett Leight</li>
            <li>Moscot</li>
            <li>Ray-Ban</li>
            <li>Tom Ford</li>
          </ul>
          <p>
            {language === 'ca' ? 
              "Cada marca ha estat acuradament seleccionada per la seva qualitat, estil i compromís amb l'excel·lència en disseny, assegurant que la nostra clientela tingui accés a les millors opcions d'ulleres disponibles." 
              : (language === 'es' ? 
                "Cada marca ha sido cuidadosamente seleccionada por su calidad, estilo y compromiso con la excelencia en diseño, asegurando que nuestra clientela tenga acceso a las mejores opciones de gafas disponibles." 
                : 
                "Each brand has been carefully curated for its quality, style, and commitment to design excellence, ensuring our clientele has access to the finest eyewear options available.")}
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default ImageConsulting;
