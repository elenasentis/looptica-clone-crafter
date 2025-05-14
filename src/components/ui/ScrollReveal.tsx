
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  disabled?: boolean;
  preserveInitialVisibility?: boolean; // New prop to keep content visible initially
  isCritical?: boolean; // New prop to identify critical content
}

// Improved ScrollReveal with better LCP characteristics
const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  origin = 'bottom',
  disabled = false,
  preserveInitialVisibility = false, // Default to false for backward compatibility
  isCritical = false // Default to false
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
  
  // For critical content or when preserveInitialVisibility is true,
  // make sure the content is visible from the start
  const shouldBeInitiallyVisible = isCritical || preserveInitialVisibility;
  
  return (
    <div 
      className={`${getAnimationClass()} ${className}`} 
      style={{ 
        animationDelay: `${delay}ms`,
        // When content should be initially visible, we make sure it's visible from the start
        opacity: shouldBeInitiallyVisible ? '1' : undefined,
        transform: shouldBeInitiallyVisible ? 'none' : undefined,
        // Reserve space with min-height to prevent layout shifts
        minHeight: 'auto'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
