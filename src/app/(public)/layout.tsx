import BaseLayout from '@/components/layouts/BaseLayout';
import { type Locale } from '@/i18n/routing';
import React from 'react';

export default async function PublicLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return <BaseLayout>{children}</BaseLayout>;
}
