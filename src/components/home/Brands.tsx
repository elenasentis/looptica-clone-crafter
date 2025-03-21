
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const brands = [
  { 
    id: 1, 
    name: "Woodys", 
    logo: "https://media.fashionnetwork.com/cdn-cgi/image/format=auto/m/2583/3ae4/1407/0f4e/27cf/6b25/58b4/62f7/f4b5/aaae/aaae.jpg" 
  },
  { 
    id: 2, 
    name: "Etnia Barcelona", 
    logo: "https://blog.etniabarcelona.com/wp-content/uploads/2017/08/005.jpg" 
  },
  { 
    id: 3, 
    name: "Kaleos", 
    logo: "https://kaleos.es/wp-content/uploads/2023/07/IMG_9782.jpg" 
  },
  { 
    id: 4, 
    name: "Xavier Garcia", 
    logo: "https://xaviergarcia.com/wp-content/uploads/2023/10/KINDER_XAVIER_GARCIA_OCTUBRE_23_3391_WEB-1.jpg" 
  },
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
                <CarouselItem key={brand.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-4">
                  <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                    <div className="group relative cursor-pointer">
                      <AspectRatio ratio={4/3}>
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </AspectRatio>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 flex items-center justify-center transition-all duration-300 group-hover:bg-black/60">
                        <h3 className="text-white font-semibold text-xl opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          {brand.name}
                        </h3>
                      </div>
                    </div>
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
