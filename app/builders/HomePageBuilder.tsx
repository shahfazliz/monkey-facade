'use client';
import { APP_NAME } from '../config';
import { Navbar, Main } from '../adapters/AppShellAdapter';
import AppShellBuilder from './AppShellBuilder';
import GalleryPageBuilder from '../builders/GalleryPageBuilder';
import HeaderBuilder from './HeaderBuilder';
import NavBuilder from '../builders/NavBuilder';
import ProductCardBuilder from '../builders/ProductCardBuilder';
import React, { type ReactNode } from 'react';

/**
 * @author Jor-El
 * @module app/builders/HomePageBuilder.tsx
 * @description HomePageBuilder is a React component that assembles the homepage of the Monkey Facade website.
 * @returns A React component.
 * @example
 * const homePage = <HomePageBuilder />;
 */
const HomePageBuilder = (): ReactNode => {
  return (
    <AppShellBuilder>
      <HeaderBuilder>{APP_NAME}</HeaderBuilder>
      <Navbar>
        <NavBuilder />
      </Navbar>
      <Main>
        <ProductCardBuilder />
        <GalleryPageBuilder />
      </Main>
    </AppShellBuilder>
  );
};

export default HomePageBuilder;
