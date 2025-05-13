
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import CriticalStyles from './components/CriticalStyles.tsx';

// Preload fonts before rendering the app
const preloadFonts = () => {
  const fonts = [
    '/fonts/poppins/Poppins-Regular.ttf',
    '/fonts/poppins/Poppins-Medium.ttf',
    '/fonts/poppins/Poppins-Bold.ttf',
    '/fonts/poppins/Poppins-SemiBold.ttf'
  ];
  
  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font;
    link.as = 'font';
    link.type = 'font/ttf';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Preload fonts immediately
preloadFonts();

// Initialize the app with CriticalStyles component
const root = createRoot(document.getElementById("root")!);
root.render(
  <Router>
    <CriticalStyles />
    <App />
  </Router>
);
