
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const brands = [
  { id: 1, name: "Ray-Ban", logo: "/images/brands/rayban.png" },
  { id: 2, name: "Etnia Barcelona", logo: "/images/brands/etnia.png" },
  { id: 3, name: "Tom Ford", logo: "/images/brands/tomford.png" },
  { id: 4, name: "Oakley", logo: "/images/brands/oakley.png" },
  { id: 5, name: "Persol", logo: "/images/brands/persol.png" },
  { id: 6, name: "Prada", logo: "/images/brands/prada.png" },
  { id: 7, name: "Moscot", logo: "/images/brands/moscot.png" },
  { id: 8, name: "Garrett Leight", logo: "/images/brands/garrett.png" },
  { id: 9, name: "Oliver Peoples", logo: "/images/brands/oliver.png" },
  { id: 10, name: "Polaroid", logo: "/images/brands/polaroid.png" },
  { id: 11, name: "Oticon", logo: "/images/brands/oticon.png" },
  { id: 12, name: "Phonak", logo: "/images/brands/phonak.png" },
];

const Brands = () => {
  const { t } = useLanguage();
  
  return (
    <section id="brands" className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal origin="bottom" delay={100}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#2ecc71]/10 text-[#2ecc71] mb-3">
              {t('topBrands')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('ourBrands')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('brandsDescription')}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal origin="bottom" delay={200} className="w-full max-w-5xl mx-auto">
          <Carousel 
            className="w-full pb-10"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {brands.map((brand) => (
                <CarouselItem key={brand.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-4 h-32 flex flex-col items-center justify-center">
                    <div className="relative w-full h-20 filter grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <p className="mt-3 text-sm text-gray-500 text-center">{brand.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Brands;
