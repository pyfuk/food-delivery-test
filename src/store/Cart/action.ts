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

export const cartActions = (self: any) => ({
  addToCart: addToCart(self),
  removeFromCart: removeFromCart(self),
});
