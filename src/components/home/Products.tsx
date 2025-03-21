
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      name: 'Ray-Ban Aviator',
      category: t('sunglasses'),
      price: 179,
      image: 'https://www.looptica.com/wp-content/uploads/2021/12/rayban_aviator_clasico_metal_RB3025-frontal.webp',
    },
    {
      id: 2,
      name: 'Etnia Barcelona',
      category: t('eyeglasses'),
      price: 189,
      image: 'https://www.looptica.com/wp-content/uploads/2021/10/etnia_barcelona_piras_frontal.webp',
    },
    {
      id: 3,
      name: 'Tom Ford',
      category: t('eyeglasses'),
      price: 249,
      image: 'https://www.looptica.com/wp-content/uploads/2021/10/TomFord_FT5401_frontal.webp',
    },
    {
      id: 4,
      name: 'Polaroid',
      category: t('sunglasses'),
      price: 75,
      image: 'https://www.looptica.com/wp-content/uploads/2023/09/PLD-6152GS-frontal-1.webp',
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-secondary/50" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-6">
              {t('ourCollection')}
            </span>
            <h2 className="text-4xl font-bold mb-6">
              {t('curatedDesigns')}
            </h2>
            <p className="text-muted-foreground">
              {t('productsDescription')}
            </p>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={100 * (index + 1)}>
              <div className="group relative bg-background rounded-xl overflow-hidden border border-border/50 hover-lift">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-medium text-xl mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="font-medium">${product.price}</p>
                  
                  <Button 
                    variant="outline"
                    className="w-full mt-4 transition-all group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    {t('addToCart')}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <ScrollReveal>
            <Button variant="default" size="lg">
              {t('viewAllProducts')}
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Products;
