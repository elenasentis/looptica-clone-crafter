
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
  disabled?: boolean; // New prop to conditionally disable animations
  placeholder?: ReactNode; // New prop to show content before reveal
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
  disabled = false, // Default to enabled
  placeholder = null,
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const alreadyRevealed = useRef(false);
  const elementHeight = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Initialize properly for SSR
  const isBrowser = typeof window !== 'undefined';
  const isMobile = isBrowser ? window.innerWidth < 768 : false;
  
  // Skip animations for mobile if needed and use simpler CSS animations
  const shouldAnimate = !disabled && !(isMobile && origin === 'bottom');
  
  // Measure the element dimensions once mounted to reserve space
  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      // Store the height for future reference
      elementHeight.current = rect.height;
      setDimensions({ width: rect.width, height: rect.height });
      
      // Check if initially in viewport
      const isInViewport = 
        rect.top <= window.innerHeight * (1 - viewFactor) &&
        rect.bottom >= 0;
        
      if (isInViewport || disabled) {
        // If already in viewport or animations disabled, show immediately
        setIsVisible(true);
        alreadyRevealed.current = true;
      } else if (shouldAnimate) {
        // Apply initial hidden state only if should animate
        if (elementRef.current) {
          elementRef.current.style.opacity = opacity.toString();
          elementRef.current.style.transform = getTransform(origin, distance);
        }
      }
    }
    
    // Fallback to show content after a timeout to prevent permanent invisible content
    const fallbackTimer = setTimeout(() => {
      if (!isVisible && elementRef.current) {
        setIsVisible(true);
        if (elementRef.current) {
          elementRef.current.style.opacity = '1';
          elementRef.current.style.transform = 'translate3d(0, 0, 0)';
        }
      }
    }, 2000); // 2 second fallback
    
    return () => clearTimeout(fallbackTimer);
  }, [opacity, origin, distance, viewFactor, disabled, shouldAnimate]);
  
  useEffect(() => {
    // If animations are disabled, don't set up observers
    if (disabled || !shouldAnimate) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    // If already visible, ensure element stays visible
    if (isVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    // Apply transition styles
    element.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
    element.style.transitionDelay = `${delay}ms`;
    element.style.willChange = 'opacity, transform';

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
  }, [delay, distance, duration, easing, opacity, origin, reset, viewFactor, isVisible, disabled, shouldAnimate]);

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

  // If disabled, just render the children directly
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  // For mobile or above-the-fold content, use simple CSS animations instead
  if (isMobile && !shouldAnimate) {
    return (
      <div className={`${className} fade-in-up`}>
        {children}
      </div>
    );
  }

  // Reserve space for the element to prevent layout shifts
  const style: React.CSSProperties = {
    minHeight: elementHeight.current ? `${elementHeight.current}px` : 'auto',
    position: 'relative'
  };

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={style}
    >
      {isVisible ? children : placeholder || children}
    </div>
  );
};

export default ScrollReveal;
