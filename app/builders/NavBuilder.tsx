import { NavLink } from '@mantine/core';
import Link from 'next/link';
import React, { type ReactNode } from 'react';

/**
 * @author Jor-El
 * @module app/builders/NavBuilder.tsx
 * @description This component renders the navigation bar for the application.
 * @returns {ReactNode} The navigation bar component.
 * @example
 * <NavBuilder />
 */
const NavBuilder = (): ReactNode => {
  return (
    <>
      <NavLink href='/' label="Home" component={Link} />
      <NavLink href='/users' label="Users" component={Link} />
      <NavLink label='Products'>
        <NavLink href='/products' label="Product List" component={Link} />
        <NavLink href='/products/add'label="Add Product" component={Link} />
      </NavLink>
    </>
  );
};

export default NavBuilder;
