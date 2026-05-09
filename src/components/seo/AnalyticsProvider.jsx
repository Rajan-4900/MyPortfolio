import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A lightweight provider to handle analytics and page tracking.
 * Can be easily extended to support Google Analytics, Vercel Analytics, etc.
 */
const AnalyticsProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const pagePath = location.pathname + location.search;
    
    // Example: Google Analytics track
    // if (window.gtag) {
    //   window.gtag('config', 'G-XXXXXXXXXX', {
    //     page_path: pagePath,
    //   });
    // }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.log(`[Analytics] Page View: ${pagePath}`);
    }

    // You can add logic here to send data to your custom analytics endpoint
    // or third-party services like Mixpanel, PostHog, etc.
  }, [location]);

  return children;
};

export default AnalyticsProvider;
