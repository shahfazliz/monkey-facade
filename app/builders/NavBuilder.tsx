// Path: app/builders/NavBuilder.tsx
import Link from 'next/link';
import NavBar from '../components/NavBar';
import React, { type ReactNode } from 'react';
import LinkGroup from '../components/LinkGroup';
import { APP_NAME } from '../config';

/**
 * @author Jor-El
 * @description This component renders the navigation bar for the application.
 * @returns {ReactNode} The navigation bar component.
 * @example
 * <NavBuilder />
 */
const NavBuilder = (): ReactNode => {
  return (
    <NavBar title={APP_NAME}>
      <Link href='/users'>Users</Link>
      <LinkGroup title='Products'>
        <Link href='/products'>Products</Link>
        <Link href='/products/add'>Add Product</Link>
      </LinkGroup>
    </NavBar>
  );
};

export default NavBuilder;
