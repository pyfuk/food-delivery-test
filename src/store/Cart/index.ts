import { types } from "mobx-state-tree";
import { ProductCartModel } from "../../types/ProductCartModel";
import { Product } from "../../types/ProductModel";

export const CartStore = types
  .model({
    _list: types.map(ProductCartModel),
  })
  .views((self) => ({
    getProduct(code: string) {
      return self._list.get(code);
    },
  }))
  .actions((self) => ({
    addToCart(diff: number, product: Product) {
      const existProduct = self.getProduct(product.code);

      self._list.set(product.code, {
        product,
        count: existProduct ? existProduct.count + diff : diff,
      });
    },
  }));
