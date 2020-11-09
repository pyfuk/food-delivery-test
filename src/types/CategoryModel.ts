import { LogoModel } from "./LogoModel";
import { Instance, types } from "mobx-state-tree";

export const CategoryModel = types.model({
  code: types.string,
  createdAt: types.string,
  depthLevel: types.number,
  description: types.string,
  logo: LogoModel,
  name: types.string,
  parentCategoryCode: types.string,
  sortIndex: types.number,
  tags: types.array(
    types.model({
      code: types.string,
      name: types.string,
    })
  ),
  totalItems: types.number,
  updatedAt: types.string,
});

export interface Category extends Instance<typeof CategoryModel> {}
