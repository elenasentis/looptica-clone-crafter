
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
    
    // Use font-display: optional for all fonts - prevents layout shifts but may cause FOIT
    const optimizeFontLoading = () => {
      // Preload critical fonts
      const preloadFonts = [
        '/fonts/poppins/Poppins-Regular.ttf',
        '/fonts/poppins/Poppins-Medium.ttf',
        '/fonts/poppins/Poppins-SemiBold.ttf',
        '/fonts/poppins/Poppins-Bold.ttf'
      ];
      
      preloadFonts.forEach(fontPath => {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = fontPath;
        preloadLink.as = 'font';
        preloadLink.type = 'font/ttf';
        preloadLink.crossOrigin = 'anonymous';
        document.head.appendChild(preloadLink);
      });
      
      const fontFaceStyle = document.createElement('style');
      fontFaceStyle.textContent = `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 300;
          font-display: optional; /* Using optional to prevent CLS */
          src: url('/fonts/poppins/Poppins-Light.ttf') format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-display: optional; /* Using optional to prevent CLS */
          src: url('/fonts/poppins/Poppins-Regular.ttf') format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          font-display: optional; /* Using optional to prevent CLS */
          src: url('/fonts/poppins/Poppins-Medium.ttf') format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-display: optional; /* Using optional to prevent CLS */
          src: url('/fonts/poppins/Poppins-SemiBold.ttf') format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-display: optional; /* Using optional to prevent CLS */
          src: url('/fonts/poppins/Poppins-Bold.ttf') format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 800;
          font-display: optional; /* Using optional to prevent CLS */
          src: url('/fonts/poppins/Poppins-ExtraBold.ttf') format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* Fallback system fonts with similar metrics to prevent layout shifts */
        body {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        }
        
        /* Reserve space for text elements to prevent layout shifts */
        h1, h2, h3, h4, h5, h6, p {
          margin-top: 0;
          max-width: 100%;
        }
        
        /* Set explicit line heights for headings */
        h1 { font-size: 2.5rem; line-height: 1.2; }
        h2 { font-size: 2rem; line-height: 1.25; }
        h3 { font-size: 1.75rem; line-height: 1.3; }
        p { line-height: 1.5; }
      `;
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
        
        // Force aspect ratio to prevent layout shifts
        img.style.aspectRatio = '16/9';
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
            image.style.objectFit = 'contain';
          } else {
            // Default dimensions for logos/icons without specific classes
            image.width = 150;
            image.height = 40;
            image.style.objectFit = 'contain';
          }
        }
        
        // Add loading="lazy" to non-hero images without this attribute
        if (!image.hasAttribute('loading') && !image.alt.includes('Hero')) {
          image.setAttribute('loading', 'lazy');
        }
        
        // Reserve image space using aspect-ratio for all images
        if (!image.style.aspectRatio) {
          // Use natural dimensions if available, otherwise use a default ratio
          if (image.naturalWidth && image.naturalHeight) {
            image.style.aspectRatio = `${image.naturalWidth} / ${image.naturalHeight}`;
          } else if (image.src.includes('logo')) {
            image.style.aspectRatio = '3.5 / 1';
          } else {
            // Default aspect ratio for general images
            image.style.aspectRatio = '16 / 9';
          }
        }
      });
    };
    
    // Block layout shifts from footer content by pre-reserving space
    const preventFooterShift = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        // Add minimum height to footer to prevent layout shifts
        footer.style.minHeight = '520px'; // Increased to better match actual footer size
      }
    };
    
    // Optimize scroll reveal elements
    const optimizeScrollReveal = () => {
      // Target all scroll reveal elements to ensure they don't cause layout shifts
      const scrollRevealElements = document.querySelectorAll('[class*="scroll-reveal"]');
      scrollRevealElements.forEach((element) => {
        const el = element as HTMLElement;
        // Pre-allocate space for scroll reveal elements
        if (!el.style.minHeight) {
          el.style.minHeight = `${el.scrollHeight || 100}px`;
        }
      });
    };
    
    // Run in optimal order to minimize CLS
    optimizeFontLoading(); // Apply font optimizations first
    preventFooterShift(); // Prevent footer from shifting
    optimizeHeroImage(); // Then optimize hero image
    optimizeAllImages(); // Then optimize all images
    setTimeout(optimizeScrollReveal, 100); // Give a small delay to let elements render
    
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
