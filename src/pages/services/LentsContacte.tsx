
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, RotateCcw, ThumbsUp, AlertCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const LentsContacte = () => {
  const { t } = useLanguage();
  
  return (
    <ServiceLayout
      title="Lents de Contacte"
      subtitle="Solucions personalitzades per a cada estil de vida"
      image="/lovable-uploads/17bc2039-1cd8-4464-80fe-3107ec793ead.png"
      appointmentSubject="Adaptació de Lents de Contacte a Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Les nostres solucions en lents de contacte</h2>
          <p>
            A Looptica, ens especialitzem en l'adaptació personalitzada de lents de contacte per satisfer les necessitats úniques de cada pacient. Sabem que les lents de contacte no són només una alternativa a les ulleres; per a molts dels nostres clients, són una eina essencial que millora la seva qualitat de vida.
          </p>
          <p>
            El nostre equip d'optometristes altament qualificats utilitza tecnologia d'avantguarda i els seus coneixements especialitzats per assegurar que vostè rebi les lents de contacte més adequades per al seu estil de vida, preferències personals i salut ocular.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">Tipus de lents de contacte que oferim</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Lents de contacte toves</h4>
              <p>Les més populars pel seu confort immediat. Disponibles en formats diaris, quinzenals i mensuals, s'adapten a diversos estils de vida i necessitats.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Lents de contacte permeables al gas (RPG)</h4>
              <p>Ofereixen una visió més nítida i durabilitat superior. Ideals per a córnies irregulars i condicions com el queratocon.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Lents de contacte tòriques</h4>
              <p>Dissenyades específicament per corregir l'astigmatisme, proporcionant una visió clara i estable tot el dia.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Lents de contacte multifocals</h4>
              <p>Perfectes per a persones amb presbícia, permeten veure clarament a múltiples distàncies sense necessitat d'ulleres de lectura.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Lents de contacte cosmètiques</h4>
              <p>Canvien o milloren el color dels ulls mantenint un aspecte natural. Disposem d'una àmplia gamma de colors i dissenys.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Ortoqueratologia (Orto-K)</h4>
              <p>Lents especials que es porten durant la nit per remodelar temporalment la còrnia, permetent una visió clara durant el dia sense lents.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">El nostre procés d'adaptació personalitzat</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Avaluació completa</h4>
                <p>Realitzem un examen ocular complet per avaluar la seva salut visual, determinar la seva prescripció i mesurar la forma i humitat dels seus ulls.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Selecció personalitzada</h4>
                <p>Basant-nos en els resultats de l'avaluació i les seves necessitats específiques, recomanem els tipus de lents més adequats per a vostè.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Adaptació i seguiment</h4>
                <p>Li ensenyem com manipular i cuidar les seves lents, i programem visites de seguiment per assegurar-nos que l'adaptació sigui òptima.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Atenció contínua</h4>
                <p>Oferim suport continu per respondre a qualsevol pregunta i realitzar ajustos a mesura que canvien les seves necessitats.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Cura de les lents de contacte</h2>
          <p>
            La cura adequada de les lents de contacte és essencial per mantenir la salut ocular i prevenir infeccions. A Looptica, li proporcionem instruccions detallades sobre com manipular, netejar i guardar les seves lents de contacte. A més, li oferim tots els productes de neteja i manteniment que necessitarà.
          </p>
          <h3>Els nostres consells bàsics per a usuaris de lents de contacte:</h3>
          <ul>
            <li>Renti's sempre les mans abans de manipular les lents</li>
            <li>Netegi i desinfecti les lents segons les indicacions (excepte les d'un sol ús)</li>
            <li>Substitueixi les lents segons el calendari recomanat</li>
            <li>Mai dormi amb lents de contacte (excepte si són específicament dissenyades per a ús nocturn)</li>
            <li>Eviti exposar les lents a l'aigua de l'aixeta, piscines o banyeres d'hidromassatge</li>
            <li>Acudeixi als controls periòdics programats</li>
            <li>Busqui atenció mèdica immediata si experimenta dolor, envermelliment, secreció o visió borrosa</li>
          </ul>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default LentsContacte;
