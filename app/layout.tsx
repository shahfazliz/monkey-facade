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
  description: APP_DESCRIPTION,
};

/**
 * @author Jor-El
 * @module app/layout.tsx
 * @description Root layout for the application.
 * @param {ReactNode} children - The content to be rendered inside the layout.
 * @returns {ReactNode} - The root layout component.
 * @example
 *
 * const MyApp = () => {
 *   return (
 *     <RootLayout>
 *       <Header />
 *       <Main />
 *       <Footer />
 *     </RootLayout>
 *   );
 * }
 */
const RootLayout = ({ children }: Props): ReactNode => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
