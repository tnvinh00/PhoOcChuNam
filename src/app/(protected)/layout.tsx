import BaseLayout from '@/components/layout/BaseLayout';
import { type Locale } from '@/i18n/routing';
import { createClient } from '@/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function AdminLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <BaseLayout>
      <p>Hello {data.user.email}</p>
      {children}
    </BaseLayout>
  );
}
