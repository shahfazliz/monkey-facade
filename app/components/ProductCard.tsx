// Path: app/components/ProductCard.tsx
import React, { type ReactNode } from 'react';

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
