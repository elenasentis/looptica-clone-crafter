
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "Thanks for subscribing to our newsletter.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 lg:px-12 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center">
          {/* Left Side (Text) */}
          <div className="md:w-1/2">
            <ScrollReveal origin="left">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-6">
                Stay Updated
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Subscribe to our newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Join our community and be the first to know about new collections, exclusive offers, and eyewear trends.
              </p>
            </ScrollReveal>
          </div>
          
          {/* Right Side (Form) */}
          <div className="md:w-1/2 w-full">
            <ScrollReveal origin="right">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      {/* Background Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Newsletter;
