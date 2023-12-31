'use client';
import React, { type ReactNode, createContext, useContext, type FC } from 'react';
import { useDisclosure } from '../adapters/UIHooks';
import { useCallback } from 'react';

interface MenuContextType {
  opened: boolean
  toggle: () => void
}

interface MenuProviderProps {
  children: ReactNode
}

const MenuContextDefaultValue: MenuContextType = {
  opened: false,
  toggle: () => {},
};

const MenuContext = createContext<MenuContextType>(MenuContextDefaultValue);

const MenuProvider: FC<MenuProviderProps> = ({ children }: MenuProviderProps) => {
  const [opened, { toggle }] = useDisclosure();

  const toggleCallback = useCallback((): void => {
    console.log('toggleCallback');
    toggle();
  }, []);

  const menuContextValues = {
    opened,
    toggle: toggleCallback,
  };

  return (
    <MenuContext.Provider value={menuContextValues}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenuContext = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};

export { useMenuContext, MenuContext, MenuProvider };
