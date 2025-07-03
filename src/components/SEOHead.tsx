import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOData, generateStructuredData } from '../utils/seo';

interface SEOHeadProps {
  seoData: SEOData;
  pathname?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ seoData, pathname = '' }) => {
  const currentUrl = `https://aurixa.com${pathname}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <meta name="author" content="Aurixa" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.canonicalUrl || currentUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={seoData.ogTitle || seoData.title} />
      <meta property="og:description" content={seoData.ogDescription || seoData.description} />
      <meta property="og:image" content={seoData.ogImage || '/png logo.png'} />
      <meta property="og:url" content={seoData.ogUrl || currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Aurixa" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={seoData.twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={seoData.twitterTitle || seoData.ogTitle || seoData.title} />
      <meta name="twitter:description" content={seoData.twitterDescription || seoData.ogDescription || seoData.description} />
      <meta name="twitter:image" content={seoData.twitterImage || seoData.ogImage || '/png logo.png'} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Structured Data */}
      {seoData.structuredData && (
        <script type="application/ld+json">
          {generateStructuredData(seoData.structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;