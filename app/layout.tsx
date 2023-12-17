// Path: app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { type ReactNode } from 'react';
import { APP_NAME, APP_DESCRIPTION } from './config';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION
};

const RootLayout = ({ children }: Props): ReactNode => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
