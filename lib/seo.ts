import type { Metadata } from 'next';

export const site = {
  name: 'Automation Services',
  motto: 'SMART TECH, SMARTER SOLUTIONS',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@example.com',
};

export function baseMetadata(overrides?: Metadata): Metadata {
  const meta: Metadata = {
    metadataBase: new URL(site.url),
    title: {
      default: 'Automation Services | Industrial, IoT, Electronics & Software Solutions',
      template: '%s | Automation Services',
    },
    description:
      'We design and deploy scalable automation—IoT, industrial automation, electronic designs, and software/web solutions. Reduce downtime, boost throughput, and get expert support.',
    openGraph: {
      type: 'website',
      url: site.url,
      title: 'Automation Services',
      description:
        'From sensors to software, we design, build, and support robust automation that reduces downtime and accelerates output.',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Automation Services',
      description:
        'From sensors to software, we design, build, and support robust automation that reduces downtime and accelerates output.',
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
  return { ...meta, ...overrides };
}

export const schemaOrg = {
  organization() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": site.name,
      "url": site.url,
      "logo": `${site.url}/logo.svg`,
      "sameAs": []
    };
  },
  website() {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": site.name,
      "url": site.url,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${site.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };
  }
};
