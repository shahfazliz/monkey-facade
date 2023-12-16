import React from 'react';

type AddToCartButtonType = {
  onClick?: () => void,
  className?: string
}

const AddToCartButton = ({ className, onClick }: AddToCartButtonType) => {
  return (
    <button className={className} onClick={onClick}>Add to Cart</button>
  )
}

export default AddToCartButton;