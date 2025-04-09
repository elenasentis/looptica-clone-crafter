
import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const Testimonials = () => {
  const { t } = useLanguage();
  
  // Sample testimonials from Google Maps reviews
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Gerard S.",
      rating: 5,
      comment: "Una òptica per recomanar. En el meu cas em vaig fer les lents de contacte orto-k, i els resultats van ser millors dels esperats (a causa de la meva graduació). Destacaria la gran professionalitat i l'atenció que brinden, a més, tenen molt bona relació qualitat-preu. Us mereixeu totes les ressenyes positives. Per part meva he quedat molt satisfet.",
      date: "2024-7-17"
    },
    {
      id: 2,
      name: "Carlota F",
      rating: 5,
      comment: "Best Optical Shop In Poblenou 😎❣️✨\n" +
        "The girls are super nice, they sell really good products and they help you with everything❤️🧡💖\n" +
        "They are super sincere about everything, they don't ever try to sell u things just to make money. 👏🏻\n" +
        "They care about the client🍀🌸✨\n" +
        "They sell really good brands made in Barcelona. I recommend them  💯!!!!\n" +
        "They do have really nice and good quality Sunglasses for the summer !!! ✨🕶️🌴🏖️🍹🥥🍸✨🌞🌊⛵🐚 🏄🏻‍♀️🩴🏖️✨",
      date: "2024-09-15"
    },
    {
      id: 3,
      name: "Anna A.",
      rating: 5,
      comment: "Fa 3 anys em vaig comprar les ulleres diaries i les de sol, la meva parella igual. Vam sortir molt contentes! Però fa uns 10 dies se'm va trencar el flexo d'una de les varilles i, tot ser estiu i la complexitat que això suposa, m'ho van solucionar amb menys de 24h.\n" +
        "Òptica de confiança i tracte proper",
      date: "2024-10-22"
    },
    {
      id: 4,
      name: "Olga L.",
      rating: 5,
      comment: "Big thank you to Ms. Elena Sentis who helped me to choose very beautiful sunglasses. She was very professional and helpful. She showed me several sunglasses and recommended the most suitable in very honest way. I'm very happy with my purchase which is a local brand as well so I will remember my trip to Barcelona :) Thank you Elena!",
      date: "2022-11-05"
    },
    {
      id: 5,
      name: "Cecilia T.",
      rating: 5,
      comment: "Absolutely wonderful services, client treatment and attention to details!  I have been an eyeglasses wearer for decades, and I have always been pushed to buy the most expensive frames and lens and this is the first time where I feel like they are really looking out for me, my vision and my pocket and not trying to max their profit.  They are very knowledgable in all aspects, and I even learned about how i can minimise the effect of rings on thick lens (something that I hate) by a special treatment that really upgraded my look.  I am super happy to have found an eyeglasses specialist that I can trust.",
      date: "2023-12-18"
    }
    
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal origin="bottom" delay={100}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#55afa9]/10 text-[#55afa9] mb-3">
              {t('customerReviews')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">{t('whatCustomersSay')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('reviewsDescription')}</p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <ScrollReveal key={testimonial.id} origin="bottom" delay={200 + testimonial.id * 100}>
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 flex-grow overflow-y-auto max-h-64">&ldquo;{testimonial.comment}&rdquo;</p>
                <div className="mt-auto">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <div className="flex items-center mt-2">
                    <img 
                      src="/images/google-logo.svg" 
                      alt="Google" 
                      className="h-5 mr-2"
                    />
                    <span className="text-xs text-gray-500">Google Maps</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal origin="bottom" delay={600}>
          <div className="text-center mt-10">
            <a 
              href="https://g.page/r/CRm06z5-qFy4EBM/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[#55afa9] hover:text-[#55afa9]"
            >
              {t('viewAllReviews')} 
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
