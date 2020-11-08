import { Instance } from "mobx-state-tree";

import { RootStore } from "./Root";
export interface SelfRootStore extends Instance<typeof RootStore> {}
