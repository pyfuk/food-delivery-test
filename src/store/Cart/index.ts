import { Instance, types } from "mobx-state-tree";
import { ProductCartModel } from "../../types/ProductCartModel";
import { cartActions } from "./action";
import { cartViews } from "./views";

export const CartStore = types
  .model({
    _list: types.map(ProductCartModel),
  })
  .views(cartViews)
  .actions(cartActions);

export interface SelfCartStore extends Instance<typeof CartStore> {}
