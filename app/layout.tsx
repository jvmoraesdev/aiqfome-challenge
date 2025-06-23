import './globals.css';

import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import React from 'react';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import OrderProvider from '@/stores/OrderProvider';
import ProductProvider from '@/stores/ProductProvider';
import SearchProvider from '@/stores/SearchProvider';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin']
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
          <OrderProvider>
            <body className={`${nunito.className} flex min-h-screen flex-col antialiased`}>
              <Header />
              <div className="bg-background mx-auto flex w-full flex-1 flex-col md:w-[752px] lg:w-[1008px]">
                {children}
              </div>
              <Footer />
            </body>
          </OrderProvider>
        </ProductProvider>
      </SearchProvider>
    </html>
  );
}
