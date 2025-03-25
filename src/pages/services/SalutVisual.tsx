
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, Shield, CheckSquare, Award } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const SalutVisual = () => {
  const { t } = useLanguage();
  
  return (
    <ServiceLayout
      title="Salut Visual"
      subtitle="Cuidem dels teus ulls amb la millor tecnologia i professionals"
      image="/lovable-uploads/cb898a8f-0dd3-4ffb-aa14-822fcefb417d.png"
      appointmentSubject="Examen de Salut Visual a Looptica"
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Què és un examen de salut visual?</h2>
          <p>
            Un examen de salut visual és una avaluació integral de l'estat dels seus ulls i de la seva visió realitzada per professionals de la salut ocular. Va més enllà d'una simple prova de visió; és una revisió completa que examina la salut ocular general, la funció visual i detecta possibles problemes oculars o malalties sistèmiques que poden afectar els ulls.
          </p>
          <p>
            A Looptica, creiem que l'atenció preventiva és fonamental per mantenir una bona visió durant tota la vida. Els nostres exàmens visuals complets utilitzen tecnologia d'avantguarda per proporcionar una avaluació detallada de tots els aspectes de la seva salut ocular.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">El nostre procés d'examen visual</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Anamnesi</h4>
                <p>Revisió detallada del seu historial mèdic, ocular i familiar, incloent medicaments actuals i estil de vida que podrien afectar la seva visió.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <CheckSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Exàmens preliminars</h4>
                <p>Avaluació de l'agudesa visual, percepció de colors, visió perifèrica i pressió intraocular per detectar signes primerencs de problemes.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Refracció</h4>
                <p>Determinació precisa de la seva prescripció de lents utilitzant mètodes objectius i subjectius per garantir la millor correcció visual possible.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Avaluació de la salut ocular</h4>
                <p>Examen complet de les estructures internes i externes de l'ull per detectar malalties com glaucoma, cataractes, degeneració macular i retinopatia diabètica.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Per què són importants els exàmens visuals regulars?</h2>
          <p>
            Moltes malalties oculars no presenten símptomes en les seves etapes inicials. Els exàmens regulars poden detectar problemes abans que causin danys irreversibles o pèrdua de visió. A més, els ulls poden revelar signes de condicions de salut sistèmiques com diabetis, hipertensió i colesterol alt.
          </p>
          <p>
            Recomanem exàmens visuals complets:
          </p>
          <ul>
            <li>Cada 2 anys per a adults de 18 a 60 anys sense problemes visuals o factors de risc</li>
            <li>Anualment per a persones de més de 60 anys</li>
            <li>Anualment per a persones de qualsevol edat que portin lents de contacte, tinguin factors de risc o condicions mèdiques existents</li>
            <li>Segons les recomanacions del seu optometrista o oftalmòleg per a nens i adolescents</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Tecnologia avançada a Looptica</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Tomografia de Coherència Òptica (OCT)</h4>
              <p>Ens permet obtenir imatges de la retina en seccions transversals, proporcionant detalls sobre la seva estructura amb precisió microscòpica.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Topografia Corneal</h4>
              <p>Crea un mapa 3D de la superfície de la còrnia, essencial per a l'adaptació de lents de contacte i la detecció de trastorns corneals.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Autorefractòmetres d'última generació</h4>
              <p>Proporciona mesuraments objectius de l'error de refracció de l'ull, accelerant i millorant la precisió del procés de prescripció.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">Examen amb làmpada de fenedura digital</h4>
              <p>Permet l'examen detallat i documentació fotogràfica de les estructures oculars anteriors i posteriors.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default SalutVisual;
