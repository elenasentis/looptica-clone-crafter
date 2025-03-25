import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Sun, Shield, Zap, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const Sunglasses = () => {
  const { t, language } = useLanguage();
  
  const content = {
    subtitle: {
      en: "Protection and style for every season",
      es: "Protección y estilo para cada temporada",
      ca: "Protecció i estil per a cada temporada",
    },
    title: {
      en: "Premium Sunglasses Collection",
      es: "Colección Premium de Gafas de Sol",
      ca: "Col·lecció Premium d'Ulleres de Sol",
    },
    intro1: {
      en: "At Looptica, we understand that sunglasses are much more than a fashion accessory—they're essential for protecting your eyes from harmful UV radiation while expressing your personal style. Our extensive collection features high-quality sunglasses from renowned designers and trusted brands, ensuring both optimal protection and fashion-forward design.",
      es: "En Looptica, entendemos que las gafas de sol son mucho más que un accesorio de moda; son esenciales para proteger tus ojos de la radiación UV dañina mientras expresas tu estilo personal. Nuestra amplia colección presenta gafas de sol de alta calidad de diseñadores reconocidos y marcas de confianza, garantizando tanto una protección óptima como un diseño a la moda.",
      ca: "A Looptica, entenem que les ulleres de sol són molt més que un accessori de moda; són essencials per protegir els teus ulls de la radiació UV nociva mentre expresses el teu estil personal. La nostra àmplia col·lecció presenta ulleres de sol d'alta qualitat de dissenyadors reconeguts i marques de confiança, garantint tant una protecció òptima com un disseny a la moda.",
    },
    intro2: {
      en: "Whether you're looking for classic aviators, trendy oversized frames, sporty wraparounds, or sophisticated designer pieces, our diverse selection caters to all preferences and face shapes. We prioritize quality materials, superior craftsmanship, and lenses that provide 100% UV protection.",
      es: "Ya sea que busques aviadores clásicos, monturas extragrandes de moda, envolventes deportivas o piezas sofisticadas de diseñador, nuestra diversa selección atiende a todas las preferencias y formas de cara. Priorizamos materiales de calidad, artesanía superior y lentes que proporcionan 100% de protección UV.",
      ca: "Ja sigui que busquis aviadors clàssics, muntures extragrandes de moda, envoltants esportives o peces sofisticades de dissenyador, la nostra diversa selecció atén a totes les preferències i formes de cara. Prioritzem materials de qualitat, artesania superior i lents que proporcionen 100% de protecció UV.",
    },
    protectionTitle: {
      en: "The Importance of Quality Sun Protection",
      es: "La Importancia de una Protección Solar de Calidad",
      ca: "La Importància d'una Protecció Solar de Qualitat",
    },
    uvProtection: {
      en: "UV Protection",
      es: "Protección UV",
      ca: "Protecció UV",
    },
    uvProtectionDesc: {
      en: "All our sunglasses provide 100% UVA and UVB protection to shield your eyes from harmful rays that can cause cataracts, macular degeneration, and other eye conditions.",
      es: "Todas nuestras gafas de sol proporcionan 100% de protección UVA y UVB para proteger tus ojos de los rayos dañinos que pueden causar cataratas, degeneración macular y otras condiciones oculares.",
      ca: "Totes les nostres ulleres de sol proporcionen 100% de protecció UVA i UVB per protegir els teus ulls dels raigs nocius que poden causar cataractes, degeneració macular i altres condicions oculars.",
    },
    glareReduction: {
      en: "Glare Reduction",
      es: "Reducción del Deslumbramiento",
      ca: "Reducció de l'Enlluernament",
    },
    glareReductionDesc: {
      en: "Our polarized lens options reduce glare from reflective surfaces like water, snow, and roads, providing clearer vision and greater comfort while driving or enjoying outdoor activities.",
      es: "Nuestras opciones de lentes polarizadas reducen el deslumbramiento de superficies reflectantes como agua, nieve y carreteras, proporcionando una visión más clara y mayor comodidad mientras conduces o disfrutas de actividades al aire libre.",
      ca: "Les nostres opcions de lents polaritzades redueixen l'enlluernament de superfícies reflectants com aigua, neu i carreteres, proporcionant una visió més clara i major comoditat mentre condueixes o gaudeixes d'activitats a l'aire lliure.",
    },
    impactResistance: {
      en: "Impact Resistance",
      es: "Resistencia al Impacto",
      ca: "Resistència a l'Impacte",
    },
    impactResistanceDesc: {
      en: "Many of our sunglasses feature impact-resistant lenses that provide an extra layer of protection for active lifestyles, sports, and outdoor adventures.",
      es: "Muchas de nuestras gafas de sol cuentan con lentes resistentes al impacto que proporcionan una capa adicional de protección para estilos de vida activos, deportes y aventuras al aire libre.",
      ca: "Moltes de les nostres ulleres de sol compten amb lents resistents a l'impacte que proporcionen una capa addicional de protecció per a estils de vida actius, esports i aventures a l'aire lliure.",
    },
    eyeComfort: {
      en: "Eye Comfort",
      es: "Comodidad Visual",
      ca: "Comoditat Visual",
    },
    eyeComfortDesc: {
      en: "Quality sunglasses reduce eye strain and fatigue by limiting the amount of bright light entering your eyes, providing comfort even during prolonged outdoor exposure.",
      es: "Las gafas de sol de calidad reducen la fatiga visual limitando la cantidad de luz brillante que entra en tus ojos, proporcionando comodidad incluso durante exposiciones prolongadas al aire libre.",
      ca: "Les ulleres de sol de qualitat redueixen la fatiga visual limitant la quantitat de llum brillant que entra als teus ulls, proporcionant comoditat fins i tot durant exposicions prolongades a l'aire lliure.",
    },
    lensOptionsTitle: {
      en: "Specialized Lens Options",
      es: "Opciones de Lentes Especializadas",
      ca: "Opcions de Lents Especialitzades",
    },
    brandsTitle: {
      en: "Our Premium Sunglasses Brands",
      es: "Nuestras Marcas Premium de Gafas de Sol",
      ca: "Les Nostres Marques Premium d'Ulleres de Sol",
    },
    fittingProcessTitle: {
      en: "Our Sunglasses Fitting Process",
      es: "Nuestro Proceso de Adaptación de Gafas de Sol",
      ca: "El Nostre Procés d'Adaptació d'Ulleres de Sol",
    },
  };
  
  return (
    <ServiceLayout
      title={t('sunglasses')}
      subtitle={content.subtitle[language]}
      image="/lovable-uploads/e288806f-89cb-4ae0-9a88-6b52ee0ccc4b.png"
      appointmentSubject="Sunglasses Consultation at Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.title[language]}</h2>
          <p>{content.intro1[language]}</p>
          <p>{content.intro2[language]}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.protectionTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.uvProtection[language]}</h4>
                <p>{content.uvProtectionDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.glareReduction[language]}</h4>
                <p>{content.glareReductionDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.impactResistance[language]}</h4>
                <p>{content.impactResistanceDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.eyeComfort[language]}</h4>
                <p>{content.eyeComfortDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.lensOptionsTitle[language]}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Polarized Lenses</h4>
              <p>Eliminate glare from reflective surfaces, perfect for driving, water sports, and snow activities. Our polarized lenses provide enhanced visual clarity and reduced eye strain.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Gradient Tint Lenses</h4>
              <p>Featuring a smooth transition from darker at the top to lighter at the bottom, ideal for driving where you need protection from overhead sun but clearer vision of the dashboard.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Mirrored Lenses</h4>
              <p>A reflective coating on the outside of the lens reduces glare and light transmission while adding a stylish look. Popular for bright, high-altitude environments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Photochromic Lenses</h4>
              <p>These adaptive lenses darken in bright conditions and lighten in low light, providing versatile protection in changing environments with a single pair of glasses.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Sport-Specific Lenses</h4>
              <p>Designed for particular activities like golf, cycling, or fishing, these specialized lenses enhance contrast and visibility for specific environments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Prescription Sunglasses</h4>
              <p>Combine vision correction with sun protection in one stylish package. Available with all lens types and in virtually any frame style in our collection.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.brandsTitle[language]}</h2>
          <p>
            Our collection features renowned brands known for their quality, style, and innovation:
          </p>
          <ul>
            <li><strong>Ray-Ban</strong> - Iconic designs with timeless appeal and reliable protection</li>
            <li><strong>Etnia Barcelona</strong> - Bold, colorful frames with Mediterranean flair</li>
            <li><strong>Oakley</strong> - Performance-oriented sunglasses with cutting-edge lens technology</li>
            <li><strong>Maui Jim</strong> - Superior polarized lenses with exceptional color enhancement</li>
            <li><strong>Tom Ford</strong> - Luxury sunglasses with sophisticated design and premium materials</li>
            <li><strong>Persol</strong> - Italian craftsmanship with classic styling and patented technologies</li>
            <li><strong>Woodys Barcelona</strong> - Eco-conscious designs with unique wooden elements</li>
          </ul>
          <h3>{content.fittingProcessTitle[language]}</h3>
          <p>
            Finding the perfect pair of sunglasses involves more than just selecting a style you like. Our expert consultants will help you consider:
          </p>
          <ul>
            <li><strong>Face Shape Compatibility</strong> - We'll recommend styles that complement your unique facial features</li>
            <li><strong>Lifestyle Requirements</strong> - Different activities call for different lens types and frame constructions</li>
            <li><strong>Proper Fit and Coverage</strong> - We ensure your sunglasses provide adequate coverage for optimal protection</li>
            <li><strong>Personal Style Preferences</strong> - Your sunglasses should reflect your personal aesthetic and make you feel confident</li>
          </ul>
          <p>
            All our sunglasses come with a protective case, cleaning cloth, and our quality guarantee. We also offer adjustments to ensure your sunglasses fit perfectly and stay comfortable throughout their lifetime.
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default Sunglasses;
