'use client';

import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  trackingEvent?: string;
  disabled?: boolean;
}

export default function CTAButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  trackingEvent,
  disabled = false
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center font-semibold transition-all duration-300 rounded-full';

  const variantClasses = {
    primary: 'bg-mint text-charcoal hover:bg-teal shadow-lg hover:shadow-xl transform hover:-translate-y-1',
    secondary: 'bg-white text-charcoal hover:bg-gray-50 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-mint text-mint hover:bg-mint hover:text-charcoal'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const handleClick = () => {
    // Track CTA clicks for conversion optimization
    if (trackingEvent && typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'cta_click', {
          event_category: 'Conversion',
          event_label: trackingEvent,
          value: variant,
        });
      }

      // Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: trackingEvent,
          content_category: 'CTA'
        });
      }
    }

    // External link handling
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }

    // Custom onClick
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}

// Add TypeScript declarations for tracking functions
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}