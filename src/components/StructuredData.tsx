'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "New Parent Essentials",
    "url": "https://newparentessentials.com",
    "logo": "https://newparentessentials.com/assets/logos/New_Parent_Essentials_logo.png",
    "description": "Transform your parenting experience with printable guides, tracking sheets, and expert advice. Get organized, feel confident, and reduce stress from day one.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      // Add social media URLs when available
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Week One Baby Survival Pack - New Parent Essentials Complete Guide Bundle",
    "description": "Complete done-for-you guide with 7-day meals, smart checklists, emergency sheets, and tracking tools for new parents. Instant digital download.",
    "brand": {
      "@type": "Brand",
      "name": "New Parent Essentials"
    },
    "category": "Parenting Guides",
    "image": "https://newparentessentials.com/og-image.jpg",
    "url": "https://newparentessentials.com",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@type": "Organization",
        "name": "New Parent Essentials"
      },
      "deliveryMethod": "https://schema.org/OnlineOnly"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "New Parent"
      },
      "reviewBody": "This bundle was a lifesaver during our first week with baby. The meal plans and tracking sheets made everything so much more manageable."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50",
      "bestRating": "5"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "New Parent Essentials - Complete Guide Bundle for New Parents",
    "description": "Transform your parenting experience with printable guides, tracking sheets, and expert advice. Get organized, feel confident, and reduce stress from day one. 30-day guarantee.",
    "url": "https://newparentessentials.com",
    "mainEntity": {
      "@type": "Product",
      "name": "Week One Baby Survival Pack"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://newparentessentials.com"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's included in the New Parent Essentials bundle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The bundle includes 7-day meal plans, smart grocery lists, baby tracking sheets (feeding, sleep, nappy), emergency contact sheets, and comprehensive guides for new parents."
        }
      },
      {
        "@type": "Question",
        "name": "Is this suitable for first-time parents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! The bundle is specifically designed for new parents who want practical, ready-to-use resources to help navigate the first weeks with baby."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the bundle, we'll refund your purchase."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}