import './globals.css';
import '@mantine/core/styles.css';
import { APP_NAME, APP_DESCRIPTION } from './config';
import { createTheme, MantineProvider } from '@mantine/core';
import { Inter } from 'next/font/google';
import { MenuProvider } from './context/MenuContext';
import React, { type ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

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
      <body className={twMerge(clsx('relative h-full font-sans antialiased', inter.className))}>
        <MantineProvider theme={theme}>
          <MenuProvider>
            <main className='relative flex flex-col min-h-screen'>
              <div className='flex-grow flex-1'>
                {children}
              </div>
            </main>
          </MenuProvider>
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
