import { types } from "mobx-state-tree";

// types.array(ProductCartModel);
export const CartStore = types
  .model({
    _list: types.map(types.string),
  })
  .actions((self) => ({
    addItem() {
      self._list.set("wedwed", "Hello");
    },
  }));
