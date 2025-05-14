
import React from 'react';
export { default as ScrollReveal } from './ScrollReveal';
export { default as FloatingWhatsApp } from './FloatingWhatsApp';
export { AspectRatio } from './aspect-ratio';

// CSS-only animation components for consistent styling
export const FadeIn = ({ 
  children, 
  className = '', 
  delay = 0 
}: { 
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

export const FadeInUp = ({ 
  children, 
  className = '', 
  delay = 0 
}: {
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

export const FadeInDown = ({ 
  children, 
  className = '', 
  delay = 0 
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <div 
      className={`fade-in-down ${className}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const FadeInLeft = ({ 
  children, 
  className = '', 
  delay = 0 
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <div 
      className={`fade-in-left ${className}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const FadeInRight = ({ 
  children, 
  className = '', 
  delay = 0 
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <div 
      className={`fade-in-right ${className}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
