export const getSiteUrl = () => {
  const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const NEXT_PUBLIC_VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL;

  if (NEXT_PUBLIC_SITE_URL) return NEXT_PUBLIC_SITE_URL;

  if (NEXT_PUBLIC_VERCEL_URL) return `https://${NEXT_PUBLIC_VERCEL_URL}`;

  return 'http://localhost:3000';
};
