/**
 * @author Jor-El
 * @module app/mediators/shoppingCartMethods.ts
 * @description This module contains the methods for manipulating the shopping cart.
 * @param {string} id The id of the product to be added to the cart.
 * @param {number} quantity The quantity of the product to be added to the cart.
 * @returns {void}
 * @example
 * const addProductToCart = ({ id: '123', quantity: 2 });
 */

interface Props {
  id: string
  quantity: number
}

const addProduct = ({ id, quantity }: Props): void => {
  console.log(`addProduct ${id} for ${quantity}`);
};

export { addProduct };
