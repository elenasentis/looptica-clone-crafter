
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      name: 'Clarity Frame',
      category: t('eyeglasses'),
      price: 149,
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      name: 'Solar Shield',
      category: t('sunglasses'),
      price: 179,
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'Metro Vision',
      category: t('eyeglasses'),
      price: 129,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      name: 'Coastal Shade',
      category: t('sunglasses'),
      price: 199,
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
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
