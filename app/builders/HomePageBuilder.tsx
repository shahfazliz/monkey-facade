// Path: app/builders/HomePageBuilder.tsx
import GalleryPageBuilder from '../builders/GalleryPageBuilder';
import NavBuilder from '../builders/NavBuilder';
import ProductCardBuilder from '../builders/ProductCardBuilder';
import React, { type ReactNode } from 'react';

/**
 * @author Jar-El
 * @description HomePageBuilder is a React component that assembles the homepage of the Monkey Facade website.
 * @returns A React component.
 * @example
 * const homePage = <HomePageBuilder />;
 */
const HomePageBuilder = (): ReactNode => {
  return (
    <main>
      <NavBuilder />
      <ProductCardBuilder />
      <GalleryPageBuilder />
    </main>
  );
};

export default HomePageBuilder;
