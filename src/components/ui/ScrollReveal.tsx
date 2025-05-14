
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  disabled?: boolean;
}

// Simplified CSS-only implementation of ScrollReveal
const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  origin = 'bottom',
  disabled = false
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
  return (
    <div 
      className={`${getAnimationClass()} ${className}`} 
      style={{ 
        animationDelay: `${delay}ms`,
        // Reserve space with min-height to prevent layout shifts
        minHeight: 'auto'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
