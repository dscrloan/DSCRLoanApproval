import { useEffect } from "react";

export function SEOHead() {
  useEffect(() => {
    // Set document title
    document.title = "DSCR Loan Approval Guide: Requirements, DSCR, LTV & Tips";

    // Create or update meta tags
    const setMetaTag = (name: string, content: string, property?: string) => {
      let tag = property 
        ? document.querySelector(`meta[property="${property}"]`)
        : document.querySelector(`meta[name="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', property);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('description', 'Understand DSCR loan approval: ratios, LTV, reserves, property types, and steps. Get investor options now.');
    setMetaTag('keywords', 'DSCR loan approval, debt service coverage ratio, investment property loans, rental property financing, DSCR requirements, DSCR mortgage approval, real estate investor loans, cash flow property loans, DSCR underwriting, investment property DSCR, rental income verification, DSCR loan qualification');
    setMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('author', 'DSCR Loan Approval Guide');

    // Open Graph tags
    setMetaTag('', 'DSCR Loan Approval Guide: Requirements, DSCR, LTV & Tips', 'og:title');
    setMetaTag('', 'Understand DSCR loan approval: ratios, LTV, reserves, property types, and steps. Get investor options now.', 'og:description');
    setMetaTag('', 'website', 'og:type');
    setMetaTag('', window.location.href, 'og:url');
    
    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'DSCR Loan Approval Guide: Requirements, DSCR, LTV & Tips');
    setMetaTag('twitter:description', 'Understand DSCR loan approval: ratios, LTV, reserves, property types, and steps. Get investor options now.');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // Structured data for FAQ
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What DSCR is typically needed for approval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most lenders require DSCR ratios between 1.0 and 1.25, with 1.20+ being common for competitive terms. Higher ratios like 1.30+ often unlock better pricing and more lender options."
          }
        },
        {
          "@type": "Question", 
          "name": "Can first-time investors be approved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, first-time investors can qualify for DSCR loans, though they may face slightly more conservative terms. Strong credit profiles, substantial reserves, and lower LTV ratios help offset limited experience."
          }
        },
        {
          "@type": "Question",
          "name": "How much do reserves matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reserves are crucial for DSCR approval, with most lenders requiring 2-6 months of PITIA payments per property. Strong reserve positions can compensate for marginal DSCR ratios."
          }
        }
      ]
    };

    // HowTo Schema
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Get DSCR Loan Approval",
      "description": "Step-by-step guide to getting approved for a DSCR loan for investment property financing",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Calculate Your DSCR",
          "text": "Divide monthly rental income by total monthly debt service (PITIA) to determine your debt service coverage ratio"
        },
        {
          "@type": "HowToStep", 
          "name": "Gather Required Documents",
          "text": "Collect rent evidence, reserve documentation, credit authorization, and property details"
        },
        {
          "@type": "HowToStep",
          "name": "Submit Application",
          "text": "Work with a qualified broker to match your scenario with appropriate lenders and submit complete application"
        }
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.shopdscrloans.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "DSCR Approval",
          "item": window.location.href
        }
      ]
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "DSCR Loan Approval Guide",
      "description": "Educational resource for understanding DSCR loan approval requirements, ratios, and investment property financing strategies",
      "url": window.location.href,
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "about": {
        "@type": "Thing",
        "name": "DSCR Loan Approval",
        "description": "Debt Service Coverage Ratio loan approval process and requirements"
      }
    };

    // Add structured data to page
    const addSchema = (schema: object, id: string) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    };

    addSchema(faqSchema, 'faq-schema');
    addSchema(howToSchema, 'howto-schema');
    addSchema(breadcrumbSchema, 'breadcrumb-schema');
    addSchema(organizationSchema, 'website-schema');

  }, []);

  return null;
}