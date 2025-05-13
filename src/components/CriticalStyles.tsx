
import React, { useEffect } from 'react';

// This component manages critical CSS loading and optimization
const CriticalStyles: React.FC = () => {
  useEffect(() => {
    // Function to load non-critical CSS after main content is loaded
    const loadNonCriticalCSS = () => {
      // Create link for main stylesheet with non-blocking loading
      const mainStylesheet = document.createElement('link');
      mainStylesheet.rel = 'stylesheet';
      mainStylesheet.href = '/assets/index-Dr1koqt0.css'; // Update this to match your actual CSS filename
      mainStylesheet.media = 'print';
      mainStylesheet.onload = () => {
        mainStylesheet.media = 'all';
      };
      document.head.appendChild(mainStylesheet);
      
      // Add other non-critical stylesheets here if needed
      const nonCriticalStyles = [
        // Add paths to non-critical stylesheets here if needed
      ];
      
      nonCriticalStyles.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      });
    };
    
    // Preload ALL font weights to avoid FOIT (Flash of Invisible Text) and layout shifts
    const preloadAllFonts = () => {
      const allFonts = [
        { weight: 300, file: 'Poppins-Light.ttf' },
        { weight: 400, file: 'Poppins-Regular.ttf' },
        { weight: 500, file: 'Poppins-Medium.ttf' },
        { weight: 600, file: 'Poppins-SemiBold.ttf' },
        { weight: 700, file: 'Poppins-Bold.ttf' },
        { weight: 800, file: 'Poppins-ExtraBold.ttf' }
      ];
      
      allFonts.forEach(font => {
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.as = 'font';
        fontLink.href = `/fonts/poppins/${font.file}`;
        fontLink.type = 'font/ttf';
        fontLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontLink);
      });
      
      // Create a style element with font-display: swap for ALL fonts
      const fontFaceStyle = document.createElement('style');
      fontFaceStyle.textContent = allFonts.map(font => `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: ${font.weight};
          font-display: swap; /* This prevents layout shift by showing fallback immediately */
          src: url('/fonts/poppins/${font.file}') format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `).join('');
      document.head.appendChild(fontFaceStyle);
    };
    
    // Optimize hero image loading strategy - improved for better LCP and reduced CLS
    const optimizeHeroImage = () => {
      // Find the hero image that needs highest priority
      const heroImage = document.querySelector('img[alt="Looptica Hero"]');
      
      if (heroImage) {
        // Ensure width and height are set to prevent layout shift
        const img = heroImage as HTMLImageElement;
        if (!img.width) img.width = 1920;
        if (!img.height) img.height = 1080;
        
        // Apply high priority explicitly through JS as backup
        if ('fetchPriority' in img) {
          img.fetchPriority = 'high';
        }
      }
    };
    
    // Optimize image loading strategy for all images
    const optimizeAllImages = () => {
      // Find all images
      const images = document.querySelectorAll('img');
      
      // Set explicit dimensions for images to prevent layout shifts
      images.forEach(img => {
        const image = img as HTMLImageElement;
        
        // Skip images that already have both width and height
        if (image.hasAttribute('width') && image.hasAttribute('height')) {
          return;
        }
        
        // For logo or icons that don't have dimensions
        if (image.src.includes('logo') || image.alt.includes('Logo') || image.alt.includes('Icon')) {
          // Set explicit dimensions based on the class or use default values
          if (image.className.includes('h-8') || image.className.includes('h-10')) {
            const height = image.className.includes('h-10') ? 40 : 32;
            // Calculate width based on typical logo aspect ratio
            const width = Math.round(height * 3.5);
            image.width = width;
            image.height = height;
          } else {
            // Default dimensions for logos/icons without specific classes
            image.width = 150;
            image.height = 40;
          }
        }
        
        // Add loading="lazy" to non-hero images without this attribute
        if (!image.hasAttribute('loading') && !image.alt.includes('Hero')) {
          image.setAttribute('loading', 'lazy');
        }
        
        // Ensure all images have an aspect ratio to prevent layout shifts
        if (image.naturalWidth && image.naturalHeight && !image.style.aspectRatio) {
          image.style.aspectRatio = `${image.naturalWidth} / ${image.naturalHeight}`;
        }
      });
    };
    
    // Run in optimal order to minimize CLS
    preloadAllFonts(); // Load ALL fonts first
    optimizeHeroImage(); // Then optimize hero image
    optimizeAllImages(); // Then optimize all images
    
    // Use requestIdleCallback for non-critical resources
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          loadNonCriticalCSS();
        });
      } else {
        setTimeout(() => {
          loadNonCriticalCSS();
        }, 200);
      }
    }

    // Add a class to the body when critical styles are loaded
    document.body.classList.add('critical-loaded');
    
    console.log('Critical styles and optimizations applied');
  }, []);

  return null; // This component doesn't render anything
};

export default CriticalStyles;
