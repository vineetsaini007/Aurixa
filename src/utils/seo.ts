export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export const defaultSEO: SEOData = {
  title: "Aurixa - Digital Excellence Redefined",
  description: "Transform your business with Aurixa's comprehensive digital solutions. Technology, growth, and creative services all under one roof.",
  keywords: ["digital transformation", "web development", "digital marketing", "creative services", "technology solutions"],
  ogTitle: "Aurixa - Digital Excellence Redefined",
  ogDescription: "Transform your business with Aurixa's comprehensive digital solutions. Technology, growth, and creative services all under one roof.",
  ogImage: "/png logo.png",
  twitterCard: "summary_large_image",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aurixa",
    "description": "Digital transformation company providing technology, growth, and creative services",
    "url": "https://aurixa.com",
    "logo": "/png logo.png",
    "sameAs": [
      "https://twitter.com/aurixa",
      "https://linkedin.com/company/aurixa",
      "https://instagram.com/aurixa"
    ]
  }
};

export const pageSEO: Record<string, SEOData> = {
  home: {
    title: "Aurixa - Digital Excellence Redefined | Technology, Growth & Creative Services",
    description: "Transform your business with Aurixa's comprehensive digital solutions. We provide cutting-edge technology, strategic growth, and creative excellence all under one roof.",
    keywords: ["digital transformation", "web development", "digital marketing", "creative services", "technology solutions", "business growth"],
    ogTitle: "Aurixa - Digital Excellence Redefined",
    ogDescription: "Transform your business with comprehensive digital solutions",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Aurixa",
      "description": "Digital transformation company providing technology, growth, and creative services",
      "url": "https://aurixa.com",
      "logo": "/png logo.png",
      "foundingDate": "2018",
      "numberOfEmployees": "50+",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    }
  },
  auralabs: {
    title: "AuraLabs - Technology Solutions | Custom Software & AI Development",
    description: "AuraLabs delivers cutting-edge technology solutions including custom software development, AI agents, and mobile applications. Transform your business with innovative tech.",
    keywords: ["custom software development", "AI development", "mobile apps", "web development", "technology solutions", "enterprise software"],
    ogTitle: "AuraLabs - Technology Solutions",
    ogDescription: "Cutting-edge technology solutions including custom software, AI, and mobile development",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AuraLabs Technology Solutions",
      "description": "Custom software development, AI agents, and mobile applications",
      "provider": {
        "@type": "Organization",
        "name": "Aurixa"
      }
    }
  },
  auraboost: {
    title: "AuraBoost - Digital Growth & Marketing | SEO, PPC & Brand Strategy",
    description: "AuraBoost accelerates your business growth with strategic digital marketing, SEO optimization, and targeted advertising campaigns. Achieve 500% ROI increase.",
    keywords: ["digital marketing", "SEO optimization", "PPC advertising", "brand strategy", "growth marketing", "conversion optimization"],
    ogTitle: "AuraBoost - Digital Growth Solutions",
    ogDescription: "Strategic digital marketing solutions that accelerate business growth",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AuraBoost Digital Growth",
      "description": "Digital marketing, SEO, and growth strategies",
      "provider": {
        "@type": "Organization",
        "name": "Aurixa"
      }
    }
  },
  aurastudios: {
    title: "AuraStudios - Creative Services | Video Production & Brand Design",
    description: "AuraStudios brings your brand vision to life with professional video production, brand identity design, and creative content that drives 350% engagement boost.",
    keywords: ["video production", "brand design", "creative services", "content creation", "visual identity", "motion graphics"],
    ogTitle: "AuraStudios - Creative Services",
    ogDescription: "Professional creative services including video production and brand design",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AuraStudios Creative Services",
      "description": "Video production, brand design, and creative content",
      "provider": {
        "@type": "Organization",
        "name": "Aurixa"
      }
    }
  },
  portfolio: {
    title: "Portfolio - Our Success Stories | 500+ Projects Delivered",
    description: "Explore Aurixa's portfolio of successful projects across technology, growth, and creative services. See how we've helped businesses achieve exceptional results.",
    keywords: ["portfolio", "case studies", "success stories", "project examples", "client results", "digital transformation"],
    ogTitle: "Aurixa Portfolio - Success Stories",
    ogDescription: "Explore our portfolio of successful digital transformation projects",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Aurixa Portfolio",
      "description": "Portfolio of successful digital transformation projects"
    }
  },
  about: {
    title: "About Aurixa - Digital Transformation Leaders Since 2018",
    description: "Learn about Aurixa's mission to transform businesses through innovative digital solutions. Meet our team and discover our values driving digital excellence.",
    keywords: ["about aurixa", "company history", "team", "mission", "values", "digital transformation leaders"],
    ogTitle: "About Aurixa - Digital Transformation Leaders",
    ogDescription: "Learn about our mission to transform businesses through digital excellence",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Aurixa",
      "description": "Learn about Aurixa's mission and team"
    }
  },
  faq: {
    title: "FAQ - Frequently Asked Questions | Aurixa Digital Services",
    description: "Find answers to common questions about Aurixa's services, pricing, process, and support. Get the information you need to start your digital transformation.",
    keywords: ["FAQ", "frequently asked questions", "support", "pricing", "services", "process"],
    ogTitle: "Aurixa FAQ - Get Your Questions Answered",
    ogDescription: "Find answers to common questions about our digital services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "Aurixa FAQ"
    }
  },
  privacy: {
    title: "Privacy Policy - Your Data Protection | Aurixa",
    description: "Learn how Aurixa protects your privacy and handles your personal information. Our commitment to data security and transparency.",
    keywords: ["privacy policy", "data protection", "privacy", "security", "GDPR"],
    ogTitle: "Aurixa Privacy Policy",
    ogDescription: "Learn how we protect your privacy and handle your data"
  },
  terms: {
    title: "Terms of Service - Legal Agreement | Aurixa",
    description: "Read Aurixa's terms of service governing the use of our digital solutions and services. Legal framework for our business relationship.",
    keywords: ["terms of service", "legal", "agreement", "terms and conditions"],
    ogTitle: "Aurixa Terms of Service",
    ogDescription: "Terms governing the use of our digital services"
  }
};

export const generateStructuredData = (data: object) => {
  return JSON.stringify(data);
};