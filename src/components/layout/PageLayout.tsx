import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SmoothScrolling from '@/components/common/SmoothScrolling';

export default function PageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrolling>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </SmoothScrolling>
  );
}
