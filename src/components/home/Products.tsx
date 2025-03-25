
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      name: t('eyeglasses'),
      category: t('eyeglasses'),
      price: 95,
      image: '/lovable-uploads/45087a9c-489a-4d48-82fb-d857e7bf306a.png',
      link: '/services/eyeglasses'
    },
    {
      id: 2,
      name: t('contactLenses'),
      category: 'Contactologia',
      price: 30,
      image: '/lovable-uploads/a99c44aa-a4a4-45a4-9616-1ef080bd49db.png',
      link: '/services/contact-lenses'
    },
    {
      id: 3,
      name: t('sunglasses'),
      category: t('sunglasses'),
      price: 75,
      image: '/lovable-uploads/e288806f-89cb-4ae0-9a88-6b52ee0ccc4b.png',
      link: '/services/sunglasses'
    },
    {
      id: 4,
      name: t('hearingAids'),
      category: 'Salut auditiva',
      price: 495,
      image: '/lovable-uploads/ebf49fd8-a596-41fb-a71e-097837111d0d.png',
      link: '/services/hearing-aids'
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-white" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#2ecc71]/10 text-[#2ecc71] mb-4">
              {t('ourCollection')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              {t('curatedDesigns')}
            </h2>
            <div className="w-16 h-1 bg-[#2ecc71] mx-auto mb-6"></div>
            <p className="text-gray-600">
              {t('productsDescription')}
            </p>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={100 * (index + 1)}>
              <Link to={product.link} className="block group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover-lift">
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
                  <p className="font-bold text-[#2ecc71]">Des de {product.price}€</p>
                  
                  <Button 
                    variant="outline"
                    className="w-full mt-4 transition-all border-[#2ecc71] text-[#2ecc71] group-hover:bg-[#2ecc71] group-hover:text-white"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    {t('addToCart')}
                  </Button>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <ScrollReveal>
            <Button variant="default" size="lg" className="bg-[#2ecc71] hover:bg-[#ea384c]">
              {t('viewAllProducts')}
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Products;
