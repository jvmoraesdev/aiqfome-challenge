import './globals.css';

import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import React from 'react';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import ProductProvider from '@/stores/ProductProvider';
import SearchProvider from '@/stores/SearchProvider';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: '700'
});

export const metadata: Metadata = {
  title: 'aiqfome',
  description: 'aiqfome challenge web'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SearchProvider>
        <ProductProvider>
          <body className={`${nunito.className} flex min-h-screen flex-col antialiased`}>
            <Header />
            <div className="bg-background mx-auto flex w-full max-w-[1024px] flex-1 flex-col">
              {children}
            </div>
            <Footer />
          </body>
        </ProductProvider>
      </SearchProvider>
    </html>
  );
}
