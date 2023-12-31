'use client';
import { Burger } from '../adapters/BurgerAdapter';
import { Header } from '../adapters/AppShellAdapter';
import React, { type ReactNode } from 'react';
import { useMenuContext } from '../context/MenuContext';

interface Props {
  children?: ReactNode
}

const HeaderBuilder = ({ children }: Props): ReactNode => {
  const { opened, toggle } = useMenuContext();

  return (
    <Header>
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
        aria-label="Toggle navigation"
      />
      {children}
    </Header>
  );
};

export default HeaderBuilder;
