
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// New utility functions for image optimization and LCP improvement

/**
 * Optimizes image attributes for better LCP performance
 * @param isPriority Whether the image is a priority image (e.g., hero)
 */
export const getImageAttributes = (isPriority = false) => {
  return {
    fetchPriority: isPriority ? "high" : "auto",
    loading: isPriority ? "eager" : "lazy",
    decoding: isPriority ? "sync" : "async",
  } as const;
};

/**
 * Preloads critical resources to improve LCP
 * @param resources Array of resource URLs to preload
 * @param type Resource type
 */
export const preloadCriticalResources = (resources: string[], type: 'image' | 'font' | 'style') => {
  if (typeof document === 'undefined') return;
  
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = type;
    
    if (type === 'font') {
      link.crossOrigin = 'anonymous';
      link.type = resource.includes('.ttf') ? 'font/ttf' : 'font/woff2';
    }
    
    document.head.appendChild(link);
  });
};

/**
 * Creates an animationDelay helper to ensure footer content 
 * doesn't become the LCP element
 */ 
export const getDelayedAnimation = (
  isBelowFold = false, 
  isCritical = false
) => {
  // Critical content (potential LCP) should be visible immediately
  if (isCritical) {
    return {
      style: { 
        opacity: 1,
        transform: 'none',
      },
      delay: 0,
    };
  }
  
  // Content below the fold can use delayed animations
  // Footer content should have a higher delay to ensure
  // it doesn't become the LCP element
  return {
    style: {},
    delay: isBelowFold ? 500 : 100,
  };
};
