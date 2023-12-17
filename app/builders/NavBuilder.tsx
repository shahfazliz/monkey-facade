// Path: app/builders/NavBuilder.tsx
import Link from 'next/link';
import React, { type ReactNode } from 'react';

const NavBuilder = (): ReactNode => {
  return (<nav>
    <Link href='/users'>Users</Link>
  </nav>);
};

export default NavBuilder;
