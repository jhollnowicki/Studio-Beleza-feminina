import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const SEO = ({ 
  title = "Beleza Feminina - Estúdio de Beleza Premium em Curitiba", 
  description = "Tratamentos de beleza de alto padrão em Curitiba. Estética facial, corporal e capilar em ambiente luxuoso. Agende seu horário.",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  type = "website"
}: SEOProps) => {
  const location = useLocation();
  
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogType = document.querySelector('meta[property="og:type"]');
    
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogImage) ogImage.setAttribute('content', image);
    if (ogType) ogType.setAttribute('content', type);
    
    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": "Beleza Feminina",
      "description": "Estúdio de beleza premium especializado em tratamentos estéticos faciais e corporais",
      "url": `${window.location.origin}${location.pathname}`,
      "telephone": "+5541999999999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Exemplo, 123",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "80000-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-25.428171",
        "longitude": "-49.272972"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "priceRange": "$$",
      "currenciesAccepted": "BRL",
      "paymentAccepted": "Cash, Credit Card, Debit Card, PIX",
      "sameAs": [
        "https://instagram.com/belezafeminina",
        "https://facebook.com/belezafeminina"
      ]
    };
    
    // Remove existing structured data
    const existingScript = document.querySelector('#structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('#structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, image, type, location.pathname]);
  
  return null;
};

export default SEO;