import React, { type ReactNode } from 'react';

/**
 * @author Jor-El
 * @module app/components/ProductCard.tsx
 * @description A generic product card component that can be used to display product information and actions.
 * @param {ReactNode} Button1 The content of the first button.
 * @param {ReactNode} Button2 The content of the second button.
 * @param {ReactNode} Button3 The content of the third button.
 * @returns {ReactNode} A product card component.
 * @example
 * const productCard = (
 *   <ProductCard
 *     Button1={<Button>Add to Cart</Button>}
 *     Button2={<Button>View Details</Button>}
 *     Button3={<Button>Compare</Button>}
 *   />
 * );
 */
interface ProductCardProps {
  Button1?: ReactNode
  Button2?: ReactNode
  Button3?: ReactNode
}

const ProductCard = ({ Button1, Button2, Button3 }: ProductCardProps): ReactNode => {
  return (
    <>
      {Button1}
      {Button2}
      {Button3}
    </>
  );
};

export default ProductCard;
