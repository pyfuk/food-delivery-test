import { types } from "mobx-state-tree";
import { CartStore } from "./Cart";
import { NavigationStore } from "./Navigation";

export const RootStore = types.model("root", {
  cart: CartStore,
  navigation: NavigationStore,
});
