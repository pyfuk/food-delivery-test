import { Instance, types } from "mobx-state-tree";

export const LogoModel = types.model({
  code: types.string,
  nameOptions: types.model({
    alt: types.string,
    title: types.string,
  }),
  path: types.string,
});

export interface Logo extends Instance<typeof LogoModel> {}
