import { Burger as BurgerMantine, type BurgerProps, VisuallyHidden } from '@mantine/core';
import React, { type ReactNode } from 'react';

const BurgerAdapter = (props: BurgerProps): ReactNode => {
  return (
    <BurgerMantine {...props}>
      <VisuallyHidden>Toggle navigation</VisuallyHidden>
    </BurgerMantine>
  );
};

export { BurgerAdapter as Burger };
