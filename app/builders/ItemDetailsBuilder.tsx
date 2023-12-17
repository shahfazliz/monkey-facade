// Path: app/builders/ItemDetailsBuilder.tsx
'use client';
import { addProduct } from '../mediators/shoppingCartMethods';
import React, { type ReactNode } from 'react';
import ItemDetails from '../components/ItemDetails';

interface Props {
  id: string
}

/**
 * @author Jor-El
 * @description This component renders the details of an individual item.
 * @param {string} id The unique identifier of the item.
 * @returns {ReactNode} The ItemDetails component.
 * @example
 * const ItemDetailsComponent = ItemDetailsBuilder({ id: '12345' });
 */
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
