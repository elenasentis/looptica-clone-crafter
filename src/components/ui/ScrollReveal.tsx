
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  disabled?: boolean;
  preserveInitialVisibility?: boolean; // New prop to keep content visible initially
}

// Improved ScrollReveal with better LCP characteristics
const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  origin = 'bottom',
  disabled = false,
  preserveInitialVisibility = false // Default to false for backward compatibility
}: ScrollRevealProps) => {
  // If animations are disabled, render children directly
  if (disabled) {
    return <div className={className}>{children}</div>;
  }
  
  // Map origin to appropriate animation class
  const getAnimationClass = () => {
    switch (origin) {
      case 'top':
        return 'fade-in-down';
      case 'right':
        return 'fade-in-left';
      case 'bottom':
        return 'fade-in-up';
      case 'left':
        return 'fade-in-right';
      default:
        return 'fade-in-up';
    }
  };
  
  // Apply appropriate CSS animation class based on origin
  // For critical content, we use preserveInitialVisibility to make it visible immediately
  return (
    <div 
      className={`${getAnimationClass()} ${className}`} 
      style={{ 
        animationDelay: `${delay}ms`,
        // When preserveInitialVisibility is true, we make sure content is visible from the start
        // This improves LCP by making critical content immediately visible
        opacity: preserveInitialVisibility ? '1' : undefined,
        transform: preserveInitialVisibility ? 'none' : undefined,
        // Reserve space with min-height to prevent layout shifts
        minHeight: 'auto'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
