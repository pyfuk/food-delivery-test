import { types } from "mobx-state-tree";
import { CartStore } from "./Cart";

export const RootStore = types.model("root", {
  cart: CartStore,
});
