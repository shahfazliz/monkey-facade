// Path: app/builders/ItemDetailsBuilder.tsx
'use client';
import { addProduct } from '../mediators/shoppingCartMethods';
import React, { type ReactNode } from 'react';
import ItemDetails from '../components/ItemDetails';

interface Props {
  id: string
}

const ItemDetailsBuilder = ({ id }: Props): ReactNode => {
  const handleAddProduct = (): void => { addProduct({ id, quantity: 1 }); };

  return <ItemDetails
    title={`Card Title ${id}`}
    description='This is a simple card with some description.'
    images={['img.jpg', 'img.jpg', 'img.jpg', 'img.jpg']}
    price={100}
    onClick={handleAddProduct}
  />;
};

export default ItemDetailsBuilder;
