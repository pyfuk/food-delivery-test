import { SelfCartStore } from ".";

const getProduct = (self: SelfCartStore) => (code: string) => {
  return self._list.get(code);
};

const getProductsCount = (self: SelfCartStore) => () => {
  return self._list.size;
};

export const cartViews = (self: any) => ({
  getProduct: getProduct(self),
  getProductsCount: getProductsCount(self),
});
