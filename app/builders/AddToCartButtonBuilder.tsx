// Path: app/builders/AddToCartButtonBuilder.tsx
import { addProduct } from '../mediators/shoppingCartMethods';
import AddToCartButton from '../components/AddToCart';
import styles from '../components/ProductCard.module.css';
import React, { type ReactNode } from 'react';

interface AddToCartButtonBuilderProps {
  type: 'module' | 'tailwind' | 'daisyui'
};

const handleAddProduct = (): void => { addProduct({ id: 'abc', quantity: 1 }); };

/**
 * @author Jor-El
 * @description This component renders the Add To Cart button for a product.
 * It takes a `type` prop which can be one of the following:
 * - `module`: Uses the styles from the `ProductCard` module.
 * - `tailwind`: Uses Tailwind CSS styles.
 * - `daisyui`: Uses DaisyUI styles.
 *
 * It also takes a `handleAddProduct` prop which is a function that is called
 * when the button is clicked.
 *
 * @param {AddToCartButtonBuilderProps} props
 * @returns {ReactNode}
 *
 * @example
 * ```
 * import AddToCartButtonBuilder from './AddToCartButtonBuilder';
 *
 * const AddToCartButton = AddToCartButtonBuilder({
 *   type: 'module',
 * });
 * ```
 */
const AddToCartButtonBuilder = ({ type }: AddToCartButtonBuilderProps): ReactNode => {
  let className = '';

  if (type === 'module') {
    className = styles.card;
  } else if (type === 'tailwind') {
    className = 'p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600';
  } else if (type === 'daisyui') {
    className = 'btn btn-primary btn-lg';
  }

  return <AddToCartButton className={className} onClick={handleAddProduct} />;
};

export default AddToCartButtonBuilder;
