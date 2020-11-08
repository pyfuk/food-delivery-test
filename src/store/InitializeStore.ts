import { InitialStateRoot } from "./initialState";
import { RootStore } from "./Root";
import { SelfRootStore } from "./SelfRootStore";

let store: SelfRootStore = null as any;

const storeFactory = () =>
  RootStore.create({
    ...InitialStateRoot,
  });

export const initializeStore = () => {
  store = storeFactory();
  return store;
};
