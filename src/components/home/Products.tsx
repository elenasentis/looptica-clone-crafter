
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag } from 'lucide-react';

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      name: 'Ulleres Graduades',
      category: 'Ulleres de vista',
      price: 95,
      image: '/images/products/rayban-aviator.jpg',
    },
    {
      id: 2,
      name: 'Lents de Contacte',
      category: 'Contactologia',
      price: 30,
      image: '/images/products/etnia-barcelona.jpg',
    },
    {
      id: 3,
      name: 'Ulleres de Sol',
      category: 'Protecció solar',
      price: 75,
      image: '/images/products/tom-ford.jpg',
    },
    {
      id: 4,
      name: 'Audiòfons',
      category: 'Salut auditiva',
      price: 495,
      image: '/images/products/polaroid.jpg',
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-white" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#009fe3]/10 text-[#009fe3] mb-4">
              Els Nostres Productes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Solucions per a la teva salut visual i auditiva
            </h2>
            <div className="w-16 h-1 bg-[#009fe3] mx-auto mb-6"></div>
            <p className="text-gray-600">
              A Looptica trobràs tot el que necessites per cuidar la teva visió i audició amb productes i assessorament d'alta qualitat.
            </p>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={100 * (index + 1)}>
              <div className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover-lift">
                {/* Product Image */}
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-medium text-lg mt-1 mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="font-bold text-[#009fe3]">Des de {product.price}€</p>
                  
                  <Button 
                    variant="outline"
                    className="w-full mt-4 transition-all border-[#009fe3] text-[#009fe3] group-hover:bg-[#009fe3] group-hover:text-white"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Més informació
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <ScrollReveal>
            <Button variant="default" size="lg" className="bg-[#009fe3] hover:bg-[#0082b8]">
              Veure tots els productes
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Products;
