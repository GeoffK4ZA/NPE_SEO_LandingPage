'use client';

import { useEffect } from 'react';

export default function SEOMonitoring() {
  useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== 'undefined') {
      // Report Core Web Vitals to Google Analytics
      const reportWebVitals = (metric: any) => {
        if (window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
          });
        }
      };

      // Import web-vitals dynamically
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(reportWebVitals);
        getFID(reportWebVitals);
        getFCP(reportWebVitals);
        getLCP(reportWebVitals);
        getTTFB(reportWebVitals);
      }).catch(() => {
        // web-vitals not available, continue silently
      });

      // Track page load times
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;

        if (window.gtag) {
          window.gtag('event', 'page_load_time', {
            event_category: 'Performance',
            event_label: 'Total Load Time',
            value: Math.round(loadTime),
            non_interaction: true,
          });
        }
      });

      // Track scroll depth for engagement
      let maxScroll = 0;
      const trackScrollDepth = () => {
        const scrolled = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

        if (scrolled > maxScroll) {
          maxScroll = scrolled;

          // Report milestone scrolls
          if ([25, 50, 75, 90].includes(scrolled) && window.gtag) {
            window.gtag('event', 'scroll', {
              event_category: 'Engagement',
              event_label: `${scrolled}% Scrolled`,
              value: scrolled,
              non_interaction: true,
            });
          }
        }
      };

      let scrollTimeout: NodeJS.Timeout;
      const handleScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(trackScrollDepth, 100);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, []);

  return null; // This component doesn't render anything
}