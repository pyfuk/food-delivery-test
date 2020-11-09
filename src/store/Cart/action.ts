import { SelfCartStore } from ".";
import { Product } from "../../types/ProductModel";

const addToCart = (self: SelfCartStore) => (num: number, product: Product) => {
  const existProduct = self.getProduct(product.code);

  self._list.set(product.code, {
    product,
    count: existProduct ? existProduct?.count + num : num,
  });
};

const removeFromCart = (self: SelfCartStore) => (
  num: number,
  product: Product
) => {
  const existProduct = self.getProduct(product.code);

  if (existProduct?.count === 1) {
    self._list.delete(product.code);
  } else if (existProduct) {
    self._list.set(product.code, {
      product,
      count: existProduct?.count + num,
    });
  }
};

const removeProduct = (self: SelfCartStore) => (code: string) => {
  self._list.delete(code);
};

const removeAllProducts = (self: SelfCartStore) => () => {
  Object.keys(self._list.toJSON()).forEach((code) => {
    self._list.delete(code);
  });
};

export const cartActions = (self: any) => ({
  addToCart: addToCart(self),
  removeFromCart: removeFromCart(self),
  removeProduct: removeProduct(self),
  removeAllProducts: removeAllProducts(self),
});
