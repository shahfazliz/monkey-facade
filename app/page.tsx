/**
 * @module app/page.tsx
 */
import React, { type ReactNode } from 'react';
import HomePageBuilder from './builders/HomePageBuilder';

const Home = (): ReactNode => {
  return <HomePageBuilder />;
};

export default Home;
