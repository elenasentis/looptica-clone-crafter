
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscripció completada!",
        description: "Gràcies per subscriure't al nostre butlletí.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 lg:px-12 relative overflow-hidden bg-[#e6f4fa]" id="about">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center">
          {/* Left Side (Text) */}
          <div className="md:w-1/2">
            <ScrollReveal origin="left">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#009fe3]/10 text-[#009fe3] mb-4">
                Mantén-te informat
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Subscriu-te al nostre butlletí
              </h2>
              <div className="w-16 h-1 bg-[#009fe3] mb-6"></div>
              <p className="text-gray-600 mb-8">
                Uneix-te a la nostra comunitat i sigues el primer en conèixer les nostres novetats, ofertes exclusives i consells per la cura de la teva salut visual i auditiva.
              </p>
            </ScrollReveal>
          </div>
          
          {/* Right Side (Form) */}
          <div className="md:w-1/2 w-full">
            <ScrollReveal origin="right">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Adreça de correu
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="el-teu@correu.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 border-gray-300 focus:border-[#009fe3] focus:ring-[#009fe3]"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#009fe3] hover:bg-[#0082b8] text-white"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Subscrivint..." : "Subscriu-te"}
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  En subscriure't, acceptes la nostra Política de Privacitat i consents rebre actualitzacions de la nostra empresa.
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      {/* Background Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#009fe3]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#009fe3]/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Newsletter;
