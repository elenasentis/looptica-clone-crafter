
import { useEffect, useRef, ReactNode, useState } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  
  // Determine if the element is in the initial viewport on mount
  useEffect(() => {
    // Check if this element is in the initial viewport
    const checkInitialVisibility = () => {
      const element = elementRef.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isInViewport = 
        rect.top <= window.innerHeight * (1 - viewFactor) &&
        rect.bottom >= 0;
        
      if (isInViewport) {
        // Element is already in viewport on page load
        setIsVisible(true);
        alreadyRevealed.current = true;
      }
    };
    
    // Run immediately to detect initial viewport elements
    checkInitialVisibility();
  }, [viewFactor]);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Skip animation setup if element is already visible
    if (isVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    // Initial style setup for elements not initially visible
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
            setIsVisible(true);
            
            if (!reset) {
              // If reset is false, stop observing after revealing
              !alreadyRevealed.current && (alreadyRevealed.current = true);
              if (alreadyRevealed.current) observer.disconnect();
            } else if (!entry.isIntersecting && alreadyRevealed.current) {
              // If reset is true and element is out of view after being revealed
              element.style.opacity = opacity.toString();
              element.style.transform = getTransform(origin, distance);
              setIsVisible(false);
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
  }, [delay, distance, duration, easing, opacity, origin, reset, viewFactor, isVisible]);

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
