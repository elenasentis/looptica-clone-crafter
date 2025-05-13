
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
    
    // Preload critical fonts to avoid FOIT (Flash of Invisible Text)
    const preloadCriticalFonts = () => {
      const criticalFonts = [
        { weight: 400, file: 'Poppins-Regular.ttf' },
        { weight: 500, file: 'Poppins-Medium.ttf' }
      ];
      
      criticalFonts.forEach(font => {
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.as = 'font';
        fontLink.href = `/fonts/poppins/${font.file}`;
        fontLink.type = 'font/ttf';
        fontLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontLink);
      });
    };
    
    // Load remaining font weights that weren't preloaded in the <head>
    // But add font-display: swap to prevent layout shifts
    const loadNonCriticalFonts = () => {
      const fontWeights = [
        { weight: 300, file: 'Poppins-Light.ttf' },
        { weight: 600, file: 'Poppins-SemiBold.ttf' },
        { weight: 700, file: 'Poppins-Bold.ttf' },
        { weight: 800, file: 'Poppins-ExtraBold.ttf' }
      ];
      
      // Create a style element for font-face definitions with font-display: swap
      const fontFaceStyle = document.createElement('style');
      fontFaceStyle.textContent = fontWeights.map(font => `
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
      
      // Also preload the fonts for faster loading
      fontWeights.forEach(font => {
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = `/fonts/poppins/${font.file}`;
        fontLink.as = 'font';
        fontLink.type = 'font/ttf';
        fontLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontLink);
      });
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
    
    // Optimize image loading strategy for non-hero images
    const optimizeImages = () => {
      // Find all images that aren't explicitly marked with loading attributes and aren't the hero
      const images = document.querySelectorAll('img:not([loading]):not([alt="Looptica Hero"])');
      
      // Set explicit dimensions for images to prevent layout shifts
      images.forEach(img => {
        const image = img as HTMLImageElement;
        if (!image.hasAttribute('width') && !image.hasAttribute('height')) {
          // Default dimensions if not specified, helps prevent CLS
          image.setAttribute('width', '100%');
          image.setAttribute('height', 'auto');
          // Add aspect ratio if possible based on intrinsic size
          if (image.naturalWidth && image.naturalHeight) {
            const ratio = (image.naturalHeight / image.naturalWidth) * 100;
            image.style.aspectRatio = `${image.naturalWidth} / ${image.naturalHeight}`;
          }
        }
        
        if (!image.hasAttribute('loading')) {
          image.setAttribute('loading', 'lazy');
        }
      });
      
      // Use Intersection Observer for lazy loading
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            if (image.dataset.src) {
              image.src = image.dataset.src;
              delete image.dataset.src;
            }
            io.unobserve(image);
          }
        });
      }, {
        rootMargin: '200px 0px', // Start loading 200px before they come into view
        threshold: 0.01
      });
      
      // Observe images with data-src
      document.querySelectorAll('img[data-src]').forEach(img => io.observe(img));
    };
    
    // Run in optimal order to minimize CLS
    preloadCriticalFonts(); // First preload critical fonts
    optimizeHeroImage(); // Then optimize hero image immediately
    
    // Use requestIdleCallback for non-critical resources
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          loadNonCriticalFonts();
          loadNonCriticalCSS();
          optimizeImages();
        });
      } else {
        setTimeout(() => {
          loadNonCriticalFonts();
          loadNonCriticalCSS();
          optimizeImages();
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
