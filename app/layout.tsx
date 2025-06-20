import './globals.css';

import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import React from 'react';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

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
      <body className={`${nunito.className} flex min-h-screen flex-col antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
