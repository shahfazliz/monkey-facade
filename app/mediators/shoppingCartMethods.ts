// Path: app/mediators/shoppingCartMethods.ts
const addProduct = ({ id, quantity }: { id: string, quantity: number }): void => {
  console.log(`addProduct ${id} for ${quantity}`);
};

export { addProduct };
