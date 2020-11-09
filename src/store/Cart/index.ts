import { types } from "mobx-state-tree";
import { ProductCartModel } from "../../types/ProductCartModel";

export const CartStore = types
  .model({
    _list: types.map(types.array(ProductCartModel)),
  })
  .actions((self) => ({}));
