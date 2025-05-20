
import { useLanguage } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center">
      <Globe className="h-4 w-4 mr-2 text-gray-700" />
      <Select value={language} onValueChange={(value) => setLanguage(value as 'en' | 'es' | 'ca')}>
        <SelectTrigger className="w-24 border-none bg-transparent h-8 focus:ring-0 text-gray-700">
          <SelectValue placeholder="Idioma" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ca">Català</SelectItem>
          <SelectItem value="es">Español</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
