
import React, { useEffect, useState } from 'react';

// This component manages critical CSS loading
const CriticalStyles: React.FC = () => {
  const [stylesLoaded, setStylesLoaded] = useState(false);

  useEffect(() => {
    // Mark styles as loaded after component mounts
    setStylesLoaded(true);
    
    // This helps with debugging
    console.log('Critical styles loaded');
    
    // Function to load non-critical CSS
    const loadNonCriticalCSS = () => {
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
    
    // Load non-critical CSS after a short delay
    if (typeof window !== 'undefined') {
      // Use requestIdleCallback if available, otherwise setTimeout
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          loadNonCriticalCSS();
        });
      } else {
        setTimeout(loadNonCriticalCSS, 200);
      }
    }
  }, []);

  return null; // This component doesn't render anything
};

export default CriticalStyles;
