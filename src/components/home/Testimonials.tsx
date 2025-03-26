
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
      name: "Maria G.",
      rating: 5,
      comment: "Excelente atención y profesionalidad. Me encantaron las gafas que me recomendaron.",
      date: "2023-09-15"
    },
    {
      id: 2,
      name: "Jordi P.",
      rating: 5,
      comment: "Gran servei i assessorament. Em van ajudar a trobar les ulleres perfectes per a mi.",
      date: "2023-10-22"
    },
    {
      id: 3,
      name: "Alice D.",
      rating: 5,
      comment: "Amazing service and quality products. The hearing test was thorough and professional.",
      date: "2023-11-05"
    },
    {
      id: 4,
      name: "Carlos M.",
      rating: 4,
      comment: "Buen servicio, pero un poco caro. La calidad de las lentes es excelente.",
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('whatCustomersSay')}</h2>
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
                <p className="text-gray-700 mb-4 flex-grow">&ldquo;{testimonial.comment}&rdquo;</p>
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
