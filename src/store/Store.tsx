import { createContext, useContext } from "react";
import { SelfRootStore } from "./SelfRootStore";

export const storeContext = createContext<SelfRootStore | null>(null);

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error("error");
  }

  return store;
};
