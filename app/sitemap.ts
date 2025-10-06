import type { MetadataRoute } from 'next';
import { site } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const routes = ['', '/services', '/about', '/contact'].map((path) => ({
    url: `${site.url}/en${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));
  return routes;
}
