import { SelfCartStore } from ".";

const getProduct = (self: SelfCartStore) => (code: string) => {
  return self._list.get(code);
};

export const cartViews = (self: any) => ({
  getProduct: getProduct(self),
});
