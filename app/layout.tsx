import './globals.css';

import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import React from 'react';

import Header from '@/components/shared/Header/Header';

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
      <body className={`${nunito.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
