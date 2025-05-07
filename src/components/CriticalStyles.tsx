
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
    
    // Load remaining font weights that weren't preloaded in the <head>
    const loadNonCriticalFonts = () => {
      const fontWeights = [
        { weight: 300, file: 'Poppins-Light.ttf' },
        { weight: 600, file: 'Poppins-SemiBold.ttf' },
        { weight: 700, file: 'Poppins-Bold.ttf' },
        { weight: 800, file: 'Poppins-ExtraBold.ttf' }
      ];
      
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
    
    // Optimize hero image loading strategy - improved for better LCP
    const optimizeHeroImage = () => {
      // Find the hero image that needs highest priority
      const heroImage = document.querySelector('img[alt="Looptica Hero"]');
      
      if (heroImage) {
        // Apply high priority explicitly through JS as backup
        if ('fetchPriority' in heroImage) {
          (heroImage as HTMLImageElement).fetchPriority = 'high';
        }
        
        // Support for WebP images - check if browser supports WebP
        const testWebP = () => {
          const webP = new Image();
          webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
          return webP.onload;
        };
        
        // If WebP is supported, switch sources dynamically
        if (testWebP()) {
          const picture = heroImage.closest('picture');
          if (picture) {
            const webpSource = picture.querySelector('source[type="image/webp"]');
            if (webpSource) {
              (webpSource as HTMLSourceElement).srcset = '/images/DSC4608_compressed.webp';
            }
          }
        }
        
        // Remove any opacity transitions that might delay rendering
        (heroImage as HTMLImageElement).style.transition = 'none';
        (heroImage as HTMLImageElement).style.opacity = '1';
        
        // Decode the image asynchronously
        if ('decode' in heroImage) {
          (heroImage as HTMLImageElement).decode().catch(() => {
            // Silently handle decode errors
          });
        }
      }
    };
    
    // Optimize image loading strategy for non-hero images
    const optimizeImages = () => {
      // Find all images that aren't explicitly marked with loading attributes and aren't the hero
      const images = document.querySelectorAll('img:not([loading]):not([alt="Looptica Hero"])');
      
      // Check if we're in the viewport for each image
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            // Set source only when in viewport
            if (image.dataset.src) {
              image.src = image.dataset.src;
              delete image.dataset.src;
            }
            // Stop observing once loaded
            io.unobserve(image);
          }
        });
      }, {
        rootMargin: '200px 0px', // Start loading 200px before they come into view
        threshold: 0.01
      });
      
      // Start observing each image
      images.forEach(image => {
        if (!image.hasAttribute('fetchpriority') && !image.hasAttribute('loading')) {
          image.setAttribute('loading', 'lazy');
        }
        io.observe(image);
      });
    };
    
    // Optimize hero image immediately, don't wait for idle time
    optimizeHeroImage();
    
    // Load non-critical resources after the main content is loaded
    if (typeof window !== 'undefined') {
      // Use requestIdleCallback if available, otherwise setTimeout
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          loadNonCriticalCSS();
          loadNonCriticalFonts();
          optimizeImages();
        });
      } else {
        setTimeout(() => {
          loadNonCriticalCSS();
          loadNonCriticalFonts();
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
