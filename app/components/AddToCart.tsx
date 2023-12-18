import React, { type ReactNode } from 'react';

interface AddToCartButtonType {
  onClick?: () => void
  className?: string
};

/**
 * @author Jor-El
 * @module app/components/AddToCart.tsx
 * @description This component renders a button that adds a product to the shopping cart.
 * @param {className} className The class name to apply to the button.
 * @param {onClick} onClick The function to call when the button is clicked.
 * @returns {ReactNode} The AddToCart component.
 * @example
 * const AddToCartComponent = AddToCartBuilder({ id: '12345', quantity: 1 });
 */
const AddToCartButton = ({ className, onClick }: AddToCartButtonType): ReactNode => {
  return (
    <button className={className} onClick={onClick}>Add to Cart</button>
  );
};

export default AddToCartButton;
