import { routing, type Locale } from '@/i18n/routing';
import { cn } from '@/utils';
import { ThemeModeScript } from 'flowbite-react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import React from 'react';
import '@/styles/globals.scss';

// import localFont from 'next/font/local';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export default async function BaseLayout({
  children,
  locale = routing.defaultLocale
}: {
  children: React.ReactNode;
  locale?: Locale;
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <ThemeModeScript />
      </head>
      <body className={cn('', inter.className)}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
