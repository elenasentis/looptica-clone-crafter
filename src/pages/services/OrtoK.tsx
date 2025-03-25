
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Moon, Sun, Target, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const OrtoK = () => {
  const { t } = useLanguage();
  
  return (
    <ServiceLayout
      title="Ortoqueratologia (Orto-K)"
      subtitle="Visió clara sense ulleres ni lents durant el dia"
      image="/lovable-uploads/cb898a8f-0dd3-4ffb-aa14-822fcefb417d.png"
      appointmentSubject="Consulta d'Ortoqueratologia a Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Què és l'Ortoqueratologia?</h2>
          <p>
            L'Ortoqueratologia, comunament coneguda com Orto-K, és una tècnica avançada que utilitza lents de contacte especialment dissenyades que es porten durant la nit mentre es dorm. Aquestes lents remodelten temporalment la còrnia (la superfície frontal de l'ull), corregint així errors de refracció com la miopia, l'hipermetropia i l'astigmatisme.
          </p>
          <p>
            El resultat? Una visió clara durant el dia sense necessitat d'ulleres o lents de contacte convencionals. És com una "ortodòncia" per als seus ulls, però amb resultats temporals que s'aconsegueixen mentre dorm.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">Com funciona l'Orto-K?</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Durant la nit</h4>
                <p>Les lents Orto-K apliquen una pressió suau sobre la còrnia, alterant el seu contorn. Són fabricades amb materials d'alt DK (altament permeable a l'oxigen), permetent que els ulls respirin mentre dormen.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Durant el dia</h4>
                <p>Al despertar i retirar les lents, la còrnia manté la seva nova forma, proporcionant una visió clara durant tot el dia sense necessitat de correcció visual addicional.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Resultats acumulatius</h4>
                <p>Amb l'ús continuat, molts pacients experimenten resultats més estables i duradors. Alguns poden fins i tot espaiar l'ús de les lents a cada dues nits mantenint una bona visió.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Efectes temporals</h4>
                <p>Els efectes són completament reversibles. Si deixa d'utilitzar les lents Orto-K, la còrnia tornarà gradualment a la seva forma original i la visió tornarà al seu estat previ.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Beneficis de l'Orto-K</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Llibertat de les ulleres</h4>
              <p>Ideal per a esportistes, nedadors i persones amb estils de vida actius que troben les ulleres o lents de contacte incòmodes durant certes activitats.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Control de la miopia</h4>
              <p>Estudis han demostrat que l'Orto-K pot ajudar a frenar la progressió de la miopia en nens i adolescents, convertint-se en una eina valuosa per a la gestió de la miopia.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Alternativa a la cirurgia</h4>
              <p>Proporciona molts dels beneficis de la cirurgia refractiva sense els riscos associats als procediments quirúrgics i amb resultats completament reversibles.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Millora de la qualitat de vida</h4>
              <p>Allibera als pacients de la dependència constant d'ulleres o lents de contacte diürnes, simplificant la seva rutina diària.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>El procés d'adaptació a Looptica</h2>
          <p>
            A Looptica, comptem amb optometristes altament especialitzats en ortoqueratologia que han ajudat nombrosos pacients a aconseguir una visió clara sense correccions diürnes. El nostre procés d'adaptació inclou:
          </p>
          <ol>
            <li>
              <strong>Avaluació inicial:</strong> Un examen ocular exhaustiu per determinar si vostè és un bon candidat per a l'Orto-K. Avaluem la topografia corneal, la salut ocular i la seva prescripció.
            </li>
            <li>
              <strong>Disseny personalitzat:</strong> Utilitzant tecnologia avançada de topografia corneal, disseñem lents Orto-K específicament per als seus ulls.
            </li>
            <li>
              <strong>Instruccions d'ús:</strong> Li ensenyem com insertar, retirar i mantenir les seves lents Orto-K adequadament.
            </li>
            <li>
              <strong>Seguiment regular:</strong> Programem visites de seguiment per monitorar el seu progrés i realitzar ajustos si és necessari.
            </li>
            <li>
              <strong>Suport continu:</strong> El nostre equip està sempre disponible per atendre qualsevol consulta o preocupació que pugui tenir.
            </li>
          </ol>
          <h3>És vostè un bon candidat per a l'Orto-K?</h3>
          <p>
            L'Orto-K és adequat per a persones amb:
          </p>
          <ul>
            <li>Miopia lleu a moderada (fins a -6.00 diòptries)</li>
            <li>Astigmatisme lleu (fins a -1.75 diòptries)</li>
            <li>Hipermetropia lleu (fins a +3.00 diòptries)</li>
            <li>Còrnies saludables i ulls lliures de malalties</li>
          </ul>
          <p>
            És especialment beneficiós per a:
          </p>
          <ul>
            <li>Nens i adolescents amb miopia progressiva</li>
            <li>Esportistes i persones amb estils de vida actius</li>
            <li>Persones que treballen en entorns polsosos o secos que fan incòmode l'ús de lents de contacte convencionals</li>
            <li>Aquells que no són candidats adequats per a la cirurgia refractiva</li>
          </ul>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default OrtoK;
