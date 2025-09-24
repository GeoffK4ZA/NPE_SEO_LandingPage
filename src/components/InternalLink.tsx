'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface InternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  prefetch?: boolean;
  trackingEvent?: string;
}

export default function InternalLink({
  href,
  children,
  className = '',
  prefetch = true,
  trackingEvent
}: InternalLinkProps) {
  const handleClick = () => {
    // Track internal link clicks for SEO analysis
    if (trackingEvent && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'internal_link_click', {
        event_category: 'Navigation',
        event_label: trackingEvent,
        value: href,
      });
    }
  };

  return (
    <Link
      href={href}
      className={className}
      prefetch={prefetch}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}