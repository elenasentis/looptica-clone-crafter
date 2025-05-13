
import React from 'react';
export { default as ScrollReveal } from './ScrollReveal';
export { default as FloatingWhatsApp } from './FloatingWhatsApp';
export { AspectRatio } from './aspect-ratio';

// Add CSS-only alternative to ScrollReveal
export const FadeIn = ({ children, className = '', delay = 0 }: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => {
  return (
    <div 
      className={`fade-in ${className}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const FadeInUp = ({ children, className = '', delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <div 
      className={`fade-in-up ${className}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
