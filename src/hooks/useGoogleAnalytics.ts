import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-4JC0MQ82QZ';

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Skip during SSR
    if (typeof window === 'undefined' || !window.gtag) return;

    // Send page view to Google Analytics
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);
};
