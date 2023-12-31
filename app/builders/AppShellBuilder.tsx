'use client';
import { AppShell } from '../adapters/AppShellAdapter';
import { HEADER_HEIGHT, NAVBAR_WIDTH } from '../config';
import { useMenuContext } from '../context/MenuContext';
import React, { type ReactNode } from 'react';

interface Props {
  children: ReactNode[]
}

const AppShellBuilder = ({ children }: Props): ReactNode => {
  const { opened } = useMenuContext();

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      navbar={{
        width: NAVBAR_WIDTH,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {children}
    </AppShell>
  );
};

export default AppShellBuilder;
