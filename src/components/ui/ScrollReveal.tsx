
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: string;
  duration?: number;
  easing?: string;
  opacity?: number;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  reset?: boolean;
  viewFactor?: number;
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  distance = '20px',
  duration = 700,
  easing = 'cubic-bezier(0.5, 0, 0, 1)',
  opacity = 0,
  origin = 'bottom',
  reset = false,
  viewFactor = 0.1,
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const alreadyRevealed = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Initial style setup
    element.style.opacity = opacity.toString();
    element.style.transform = getTransform(origin, distance);
    element.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal the element
            element.style.opacity = '1';
            element.style.transform = 'translate3d(0, 0, 0)';
            
            if (!reset) {
              // If reset is false, stop observing after revealing
              !alreadyRevealed.current && (alreadyRevealed.current = true);
              if (alreadyRevealed.current) observer.disconnect();
            } else if (!entry.isIntersecting && alreadyRevealed.current) {
              // If reset is true and element is out of view after being revealed
              element.style.opacity = opacity.toString();
              element.style.transform = getTransform(origin, distance);
            }
          }
        });
      },
      {
        threshold: viewFactor,
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, distance, duration, easing, opacity, origin, reset, viewFactor]);

  const getTransform = (origin: string, distance: string) => {
    switch (origin) {
      case 'top':
        return `translate3d(0, -${distance}, 0)`;
      case 'right':
        return `translate3d(${distance}, 0, 0)`;
      case 'bottom':
        return `translate3d(0, ${distance}, 0)`;
      case 'left':
        return `translate3d(-${distance}, 0, 0)`;
      default:
        return `translate3d(0, ${distance}, 0)`;
    }
  };

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
