// Path: app/components/AddToCart.tsx
import React, { type ReactNode } from 'react';

interface AddToCartButtonType {
  onClick?: () => void
  className?: string
};

const AddToCartButton = ({ className, onClick }: AddToCartButtonType): ReactNode => {
  return (
    <button className={className} onClick={onClick}>Add to Cart</button>
  );
};

export default AddToCartButton;
