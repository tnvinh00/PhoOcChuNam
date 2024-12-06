import { getSiteUrl } from '@/utils/site';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      disallow: '/'
    },
    sitemap: getSiteUrl() + '/sitemap.xml'
  };
}
