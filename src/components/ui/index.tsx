
import React, { ReactNode } from 'react';

// Animation variants
type AnimationOrigin = 'top' | 'right' | 'bottom' | 'left';

interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
  isCritical?: boolean; // New prop to identify critical content
}

// Base animation component
const AnimateBase = ({
  children,
  className = '',
  delay = 0,
  style = {},
  animation = '',
  isCritical = false // Default to false
}: AnimationProps & { animation: string }) => {
  // Critical content should be immediately visible
  if (isCritical) {
    return (
      <div 
        className={`${className}`} 
        style={{ 
          opacity: 1,
          transform: 'none',
          ...style
        }}
      >
        {children}
      </div>
    );
  }
  
  // Non-critical content has animations applied
  return (
    <div 
      className={`${animation} ${className}`} 
      style={{ 
        animationDelay: `${delay}ms`,
        ...style 
      }}
    >
      {children}
    </div>
  );
};

// Animation components
export const FadeIn = (props: AnimationProps) => (
  <AnimateBase {...props} animation="fade-in" />
);

export const FadeInUp = (props: AnimationProps) => (
  <AnimateBase {...props} animation="fade-in-up" />
);

export const FadeInDown = (props: AnimationProps) => (
  <AnimateBase {...props} animation="fade-in-down" />
);

export const FadeInLeft = (props: AnimationProps) => (
  <AnimateBase {...props} animation="fade-in-left" />
);

export const FadeInRight = (props: AnimationProps) => (
  <AnimateBase {...props} animation="fade-in-right" />
);

export const ScaleUp = (props: AnimationProps) => (
  <AnimateBase {...props} animation="scale-up-center" />
);

// Re-export UI components
export { Avatar, AvatarFallback, AvatarImage } from './avatar';
export { Button, buttonVariants } from './button';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card';
export { Badge, badgeVariants } from './badge';
export { Input } from './input';
export { Label } from './label';
export { Separator } from './separator';
export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from './alert-dialog';
export { Skeleton } from './skeleton';
export { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
