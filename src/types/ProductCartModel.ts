import { ProductModel } from "./ProductModel";
import { Instance, types } from "mobx-state-tree";

export const ProductCartModel = types.model({
  product: ProductModel,
  count: types.number,
});

export interface ProductCart extends Instance<typeof ProductCartModel> {}
