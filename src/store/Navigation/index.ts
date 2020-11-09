import { Instance, types } from "mobx-state-tree";
import { navigationActions } from "./action";

export const NavigationStore = types
  .model({
    _isOpened: types.boolean,
  })
  .actions(navigationActions);

export interface SelfNavigationStore extends Instance<typeof NavigationStore> {}
